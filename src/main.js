// noinspection EqualityComparisonWithCoercionJS
// noinspection RegExpRedundantEscape

(async function () {

    let config = require('./config.js');
    let child_process = require('child_process');
    let repositories = require('./repositories');
    let https = require('https');
    let pathModule = require('path');

    let fs = require('fs');
    console.log("Config:", config);

    let repo_locations = {};
    try {
        repo_locations = require('./locations');
    } catch (ignore) {
    }

    let logCommandExecute = (function () {
        if (!config.verbose.command) return () => {
        };
        let sec = [
            config.deploy.GH_TOKEN(),
        ];
        return function (prefix, args) {
            let resp = String(Array.prototype.join.call(args, ' '));
            for (const s of sec) {
                if (s != undefined) {
                    resp = resp.replace(s.trim(), "****");
                }
            }
            console.log(prefix + resp);
        }
    })();

    async function awaitx(p) {
        if (p instanceof Promise) {
            return await p
        }
        return p
    }

    /**
     * @type {import('./types.js').Doc.Utils}
     */
    let utils = {
        system: system,
        systemNoError: systemNoError,
        cp: function (f, t) {
            let cmdA = ['cp', '-r', f, '-T', t];
            if (config.verbose.cp) {
                cmdA.splice(1, 0, '-v');
            }
            system.apply(this, cmdA);
        },
        runInShell: function (t) {
            console.log("[SYSTEM] Executing shell " + t);
            let file = './shell-' + Math.random() + Math.random() + '.sh';
            fs.writeFileSync(file, t);
            try {
                system("sh", file);
            } finally {
                systemNoError("rm", file);
            }
        },
        walkFiles: (() => {
            async function wf(pt, isDir, fnc) {
                if (isDir) {
                    for await (let subpath of await fs.promises.opendir(pt)) {
                        let entry = pathModule.join(pt, subpath.name);
                        await wf(entry, subpath.isDirectory(), fnc)
                    }
                } else {
                    await awaitx(fnc(pt))
                }
            }

            return async function (dir, fnc) {
                let wtx = await fs.promises.stat(dir)
                if (wtx.isFile()) {
                    await awaitx(fnc(dir))
                    return
                }
                await wf(dir, true, fnc)
            }
        })(),
        replaceInFiles: function (pt, src, placement) {
            return utils.walkFiles(pt, async (subp) => {
                let buf = (await fs.promises.readFile(subp)).toString('utf-8')
                let orgbuf = buf
                // noinspection JSCheckFunctionSignatures
                buf = buf.replace(utils.stringToRegex(src), placement)
                if (buf != orgbuf) {
                    await fs.promises.writeFile(subp, buf)
                }
            })
        },
        stringToRegex(str) {
            if (str instanceof RegExp) {
                return str
            }
            str = String(str)
            // noinspection RegExpRedundantEscape
            str = str.replace(/\\/g, '\\\\')
                .replace(/[\:\(\)\|\-\^\$\+\=\[\]\~\{\}\<\>\%\.]/g, (x) => {
                    return '\\' + x
                })
            return new RegExp(str, 'g')
        }
    };

    function system(cmd) {
        logCommandExecute("[SYSTEM] Executing ", arguments);
        if (arguments.length > 1) {
            child_process.spawnSync(cmd,
                Array.prototype.slice.call(arguments, 1),
                {
                    stdio: "inherit"
                }
            );
            return;
        }
        child_process.execSync(cmd, {
            stdio: "inherit"
        });
    }

    function systemNoError() {
        try {
            system.apply(this, arguments);
        } catch (e) {
            console.error(e);
        }
    }

    function repoLoc(ghRepo) {
        if (config.use_ssh_clone) {
            return "git@github.com:" + ghRepo + ".git";
        }
        return "https://github.com/" + ghRepo + ".git";
    }

    systemNoError("mkdir docs");
    let postCalls = [];

    let vueConf = require('./vuepress-conf');
    let navs = require('./nav');
    let repoLoad = require('./repo-load')

    function addNav(loc, navx) {
        function patchVP1(nav) {
            // vuepress v1 data to vuepress v2
            if (typeof nav == 'object' && !(nav instanceof Array)) {
                if (nav.items) {
                    nav.children = nav.items;
                    delete nav.items;
                }
                if (nav.children != undefined && nav.link != undefined) {
                    delete nav.link;
                }
            }
        }

        function patch(nav) {
            patchVP1(nav);
            if (loc != '') {
                if (nav.link != null && nav.link[0] == '/') {
                    nav.link = '/' + loc + nav.link;
                }
            }
            if (nav.children != undefined) {
                for (let a of nav.children) {
                    patch(a);
                }
            }
        }

        if (navx == undefined) return;
        patch(navx);
        vueConf.themeConfig.navbar.push(navx);
    }

    for (const repo of repositories.repositories) {
        let repo_loc = repo_locations[repo[0]];

        if (repo_loc == null) {
            let tm_repo_name = repo[0];
            let mirror = repositories.mirror[repo[0]];
            if (mirror != null) {
                tm_repo_name = mirror
            }
            repo_loc = repo_locations[tm_repo_name];

            if (repo_loc == null) {
                repo_loc = './repos/' + tm_repo_name.replace('/', '_');
                if (!fs.existsSync(repo_loc)) {
                    system("git", "clone", repoLoc(repo[0]), repo_loc, '--branch', repo[1]);
                }
            }
        }

        repoLoad.onLoad(repo[0], repo_loc, repo[2]);
        // console.log("Loc of repo", repo[0], "is", repo_loc);
        if (repo[2] != undefined) {
            utils.cp(repo_loc + '/' + repo[2], 'docs/' + repo[3]);
        }
        let patch = undefined;
        try {
            patch = require('./hooks/' + repo[4]);
        } catch (ignore) {
        }
        // console.log("Hook of", repo[0], "is", patch);
        if (patch != null) {
            /**
             * @type {import('./types.js').Doc.RepoInfo}
             */
            let info = {
                name: repo[0],
                branch: repo[1],
                location: repo_loc,
                docLocation: repo_loc + '/' + repo[2],
                copiedDocLocation: 'docs/' + repo[3]
            };
            while (info.copiedDocLocation.endsWith('/')) {
                info.copiedDocLocation = info.copiedDocLocation.substr(0, info.copiedDocLocation.length - 1)
            }
            await awaitx(patch(utils, info, postCalls));
        }
        addNav(repo[3], navs[repo[0]]);
    }


    vueConf.alias['@root'] =
        pathModule.dirname(pathModule.dirname(require.main.filename)) + '/docs';

    utils.runInShell("mkdir docs/.vuepress");
    await (async function () {
        let settings = "module.exports = " + JSON.stringify(vueConf, null, 2);
        settings += ";\nrequire(";
        settings += JSON.stringify(pathModule.dirname(require.main.filename) + '/vuepress-config.post.js');
        settings += ")(module.exports);\n";
        if (config.verbose.vuepress_settings) {
            console.log("===================== VUE PRESS BUILD SETTINGS ============================");
            console.log(settings);
            console.log("===================== VUE PRESS BUILD SETTINGS ============================");
        }
        await fs.promises.writeFile("docs/.vuepress/config.js", settings);
    })();


    await utils.replaceInFiles('docs', 'http://img.mamoe.net/2020/02/16/a759783b42f72.png', '/mirai.png');
    await utils.replaceInFiles('docs', 'http://img.mamoe.net/2020/02/16/c4aece361224d.png', '/mirai.png');
    await fs.promises.mkdir('docs/.vuepress/public', {recursive: true});
    utils.cp('docs/mirai.png', 'docs/.vuepress/public/mirai.png');
    utils.cp('docs/mirai.svg', 'docs/.vuepress/public/mirai.svg');
    /*
    // Drop
    <!-- BEGIN DROP $1 ......
    END DROP $1 -->
     */
    await (async function () {
        let matchRegex = /<!--[\-\s]*BEGIN DROP\s+(.+?)[\W\w]+END DROP \1[\-\s]*-->/g;
        // noinspection RegExpRedundantEscape
        let imageMatchRegex = /(!\[.*\])\((.+?)\)/g;
        await utils.replaceInFiles('docs', matchRegex, '');
        await utils.replaceInFiles('docs', imageMatchRegex, (range, group1, group2) => {
            if (group2.indexOf(':') != -1) return range;
            if (group2[0] == '.') return range;
            if (group2[0] == '/') return range;
            return group1 + '(./' + group2 + ')';
        });
    })();

    function sha1(content) {
        var crypto = require('crypto')
        var shasum = crypto.createHash('sha1');
        shasum.update(content);
        return shasum.digest('hex');
    }

    var rebuiltStr__ = undefined;
    var realUpdateToDate = false;
    var updateToDate = (() => {
        if (!config.check_update_to_date) {
            return false;
        }

        utils.system("sh", "cacl-sha1.sh");
        var latest = fs.readFileSync("files-sha1.txt").toString('utf-8')
            .trim()
            .replace('\r\n', '\n')
            .replace('\r', '\n')
            .split('\n');
        var rebuilt = fs.readFileSync("files-sha1-rebuilt.txt").toString('utf-8')
            .trim()
            .replace('\r\n', '\n')
            .replace('\r', '\n')
            .split('\n');

        /**
         * @param {string} s
         */
        function getPath(s) {
            let i = s.indexOf(' ');
            return s.substr(i + 1).trim();
        }

        /**
         * @param {string} s1
         * @param {string} s2
         */
        function comp(s1, s2) {
            return getPath(s1).localeCompare(getPath(s2), 'en-US');
        }

        latest.sort(comp);
        rebuilt.sort(comp);

        let latestStr = latest.join('\n').trim();
        let rebuiltStr = rebuilt.join('\n').trim();
        rebuiltStr__ = rebuiltStr + '\n';
        if (!(realUpdateToDate = (latestStr == rebuiltStr))) {
            fs.writeFileSync('files-sha1.txt', rebuiltStr__);
            console.log(" ==== OLD ====");
            console.log(latestStr);
            console.log(" ==== NEW ====");
            console.log(rebuiltStr);
            console.log(" ====     ====");
            return false;
        }
        return true;
    })();
    if (updateToDate) {
        console.log("Update to date.");
    } else if (config.run_build) {
        system('yarn install');
        system('yarn docs:build');
    }

    for (const postCall of postCalls) {
        postCall();
    }

    if (config.deploy.enable && (config.deploy.ignore_update_to_date || !updateToDate)) {
        if (!fs.existsSync("gh-pages-repo")) {
            system("mkdir gh-pages-repo");
        }

        function gsys(cmd) {
            logCommandExecute("[SYSTEM] [DEPLOY] Executing ", arguments);
            child_process.spawnSync(cmd,
                Array.prototype.slice.call(arguments, 1),
                {
                    stdio: "inherit",
                    cwd: 'gh-pages-repo',
                }
            );
        }

        function gsysHidden(cmd) {
            logCommandExecute("[SYSTEM] [DEPLOY] Executing ", arguments);
            child_process.spawnSync(cmd,
                Array.prototype.slice.call(arguments, 1),
                {
                    stdio: "ignore",
                    cwd: 'gh-pages-repo',
                }
            );
        }

        if (!fs.existsSync('gh-pages-repo/.git')) {
            gsys('git', 'init');
            gsys('git', 'remote', 'add', 'origin', repoLoc('project-mirai/docs'));
        }
        if (config.deploy.committer.setup) {
            gsys('git', 'config', '--local', 'user.name', config.deploy.committer.name());
            gsys('git', 'config', '--local', 'user.email', config.deploy.committer.email());
        }
        try {
            gsys('git', 'remote', 'remove', 'token');
        } catch (e) {
        }
        gsys('git', 'fetch', '--all');
        gsys('git', 'checkout', '--force', 'origin/gh-pages');
        try {
            gsys('git', 'branch', 'gh-pages');
        } catch (ignore) {
        }
        try {
            gsys('git', 'checkout', '--force', 'gh-pages');
        } catch (ignore) {
        }
        gsys('git', 'checkout', '--force', 'origin/gh-pages');
        gsys('rm', '-rfv', '*');
        gsys('git', 'checkout', 'HEAD', '--', 'CNAME');
        gsys('git', 'checkout', 'HEAD', '--', 'favicon.ico');
        gsysHidden('git', 'rm', '--cache', '-r', '.');
        utils.cp('vuepress-dist', 'gh-pages-repo');
        gsys('git', 'add', '.');
        if (config.deploy.auto_commit) {
            let commit_msg = "VuePress rebuilt " + new Date().toLocaleString('en-US', {timeZone: 'Asia/Shanghai'});
            gsys('git', 'commit', '-m', commit_msg);
            if (config.deploy.run_publish) {
                if (config.deploy.token_publish) {
                    let remote = "https://x-access-token:" + config.deploy.GH_TOKEN() + "@github.com/project-mirai/docs.git"
                    try {
                        gsys('git', 'remote', 'add', 'token', remote);
                    } catch (e) {
                    }
                    gsys('git', 'remote', 'set-url', 'token', remote);
                    gsys('git', 'push', 'token', 'HEAD:gh-pages');
                    gsys('git', 'remote', 'remove', 'token');
                } else {
                    gsys('git', 'push', 'origin', 'HEAD:gh-pages');
                }
                if (rebuiltStr__ != undefined && ((!realUpdateToDate) || config.deploy.ignore_sha1_update_to_date)) {
                    console.log('Updating files-sha1.txt');
                    let tmpFile = 'tmp' + Math.random() + Math.random() + Math.random() + ".txt";
                    utils.runInShell('curl https://api.github.com/repos/project-mirai/docs/contents/files-sha1.txt?ref=main -o ' + tmpFile);
                    let statusDataSha = JSON.parse(fs.readFileSync(tmpFile).toString('utf-8')).sha;
                    system('rm', tmpFile);
                    console.log(statusDataSha);
                    let req = https.request({
                        hostname: 'api.github.com',
                        path: '/repos/project-mirai/docs/contents/files-sha1.txt',
                        port: 443,
                        method: 'PUT',
                        headers: {
                            'User-Agent': 'NodeJs/10',
                            'Content-Type': 'application/vnd.github.v3+json',
                            'Authorization': 'token ' + config.deploy.GH_TOKEN()
                        }
                    }, res => {
                        console.log(`statusCode: ${res.statusCode}`)

                        res.on('data', d => {
                            process.stdout.write(d);
                            process.stdout.write('\n');
                        })
                    });
                    req.on('error', error => {
                        console.error(error)
                    });
                    req.write(JSON.stringify({
                        message: commit_msg,
                        content: Buffer.from(rebuiltStr__, 'utf-8').toString('base64'),
                        sha: statusDataSha,
                        branch: 'main',
                    }));
                    req.end();
                }
            }
        }
    }

})().catch(error => {
    console.error(error);
    process.exit(511);
})