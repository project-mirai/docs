let config = require('./config.js');
let child_process = require('child_process');
let repositories = require('./repositories');
let https = require('https');

let fs = require('fs');
console.log("Config:", config);

var repo_locations = {};
try {
    repo_locations = require('./locations');
} catch (ignore) { }

let logCommandExecute = (function () {
    if (!config.verbose.command) return () => { };
    let sec = [
        config.deploy.GH_TOKEN(),
    ];
    return function (prefix, args) {
        var resp = String(Array.prototype.join.call(args, ' '));
        for (const s of sec) {
            resp = resp.replace(s.trim(), "****");
        }
        console.log(prefix + resp);
    }
})();

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
var postCalls = [];

let vueConf = require('./vuepress-conf');
let navs = require('./nav');

function addNav(loc, navx) {
    function patch(nav) {
        if (loc == '') return;
        if (nav.link != null && nav.link[0] == '/') {
            nav.link = '/' + loc + nav.link;
        }
        if (nav.items != undefined) {
            for (let a of nav.items) {
                patch(a);
            }
        }
    }
    if (navx == undefined) return;
    patch(navx);
    vueConf.themeConfig.nav.push(navx);
}

for (const repo of repositories) {
    var repo_loc = repo_locations[repo[0]];
    if (repo_loc == null) {
        repo_loc = './repos/' + repo[0].replace('/', '_');
        system("git", "clone", repoLoc(repo[0]), repo_loc, '--branch', repo[1]);
    }
    // console.log("Loc of repo", repo[0], "is", repo_loc);
    if (repo[2] != undefined) {
        utils.cp(repo_loc + '/' + repo[2], 'docs/' + repo[3]);
    }
    var patch = undefined;
    try {
        patch = require('./hooks/' + repo[4]);
    } catch (ignore) { }
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
        patch(utils, info, postCalls);
    }
    addNav(repo[3], navs[repo[0]]);
}


let pathModule = require('path');
vueConf.configureWebpack.resolve.alias['@root'] =
    pathModule.dirname(pathModule.dirname(require.main.filename)) + '/docs';
utils.runInShell("mkdir docs/.vuepress");
fs.writeFileSync("docs/.vuepress/config.js", "module.exports = " + JSON.stringify(vueConf));


utils.runInShell(
    'find docs -type f -name "*.md" -exec ' +
    'sed -i -r "s+http://img.mamoe.net/2020/02/16/a759783b42f72.png+~@root/mirai.png+g" {} \\;'
);
utils.runInShell(
    'find docs -type f -name "*.md" -exec ' +
    'sed -i -r "s+http://img.mamoe.net/2020/02/16/c4aece361224d.png+~@root/mirai.svg+g" {} \\;'
);

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
    } catch (e) { }
    gsys('git', 'fetch', '--all');
    gsys('git', 'checkout', '--force', 'origin/gh-pages');
    try {
        gsys('git', 'branch', 'gh-pages');
    } catch (ignore) { }
    try {
        gsys('git', 'checkout', '--force', 'gh-pages');
    } catch (ignore) { }
    gsys('git', 'checkout', '--force', 'origin/gh-pages');
    gsys('rm', '-rf', '*');
    gsys('git', 'checkout', 'HEAD', '--', 'CNAME');
    gsys('git', 'checkout', 'HEAD', '--', 'favicon.ico');
    gsysHidden('git', 'rm', '--cache', '-r', '.');
    utils.cp('docs/.vuepress/dist', 'gh-pages-repo');
    gsys('git', 'add', '.');
    if (config.deploy.auto_commit) {
        let commit_msg = "VuePress rebuilt " + new Date().toLocaleString('en-US', { timeZone: 'Asia/Shanghai' });
        gsys('git', 'commit', '-m', commit_msg);
        if (config.deploy.run_publish) {
            if (config.deploy.token_publish) {
                let remote = "https://x-access-token:" + config.deploy.GH_TOKEN() + "@github.com/project-mirai/docs.git"
                try {
                    gsys('git', 'remote', 'add', 'token', remote);
                } catch (e) { }
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
