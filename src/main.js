let config = require('./config.js');
let child_process = require('child_process');
let repositories = require('./repositories');

let fs = require('fs');
console.log("Config:", config);

var repo_locations = {};
try {
    repo_locations = require('./locations');
} catch (ignore) { }

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
    if (config.verbose.command) {
        console.log("[SYSTEM] Executing " + Array.prototype.join.call(arguments, ' '));
    }
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
    return "git@github.com:" + ghRepo + ".git";
}

systemNoError("mkdir docs");
var postCalls = [];

let vueConf = require('./vuepress-conf');
let navs = require('./nav');
const { catchClause } = require('babel-types');

function addNav(loc, navx) {
    function patch(nav) {
        if (loc == '') return;
        if (nav.link != null) {
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
    utils.cp(repo_loc + '/' + repo[2], 'docs/' + repo[3]);
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


utils.runInShell("mkdir docs/.vuepress");
fs.writeFileSync("docs/.vuepress/config.js", "module.exports = " + JSON.stringify(vueConf));

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
     * @param {string} s1 
     * @param {string} s2 
     */
    function comp(s1, s2) {
        return s1.localeCompare(s2);
    }
    latest.sort(comp);
    rebuilt.sort(comp);

    let latestStr = latest.join('\n');
    let rebuiltStr = rebuilt.join('\n');
    if (latestStr != rebuiltStr) {
        fs.writeFileSync('files-sha1.txt', rebuiltStr + '\n');
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
        if (config.verbose.command) {
            console.log("[SYSTEM] [DEPLOY] Executing " + Array.prototype.join.call(arguments, ' '));
        }
        child_process.spawnSync(cmd,
            Array.prototype.slice.call(arguments, 1),
            {
                stdio: "inherit",
                cwd: 'gh-pages-repo',
            }
        );
    }
    function gsysHidden(cmd) {
        if (config.verbose.command) {
            console.log("[SYSTEM] [DEPLOY] Executing " + Array.prototype.join.call(arguments, ' '));
        }
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
        gsys('git', 'remote', 'add', 'origin', 'git@github.com:project-mirai/docs.git');
    }
    if (config.deploy.committer.setup) {
        gsys('git', 'config', '--local', 'user.name', config.deploy.committer.name());
        gsys('git', 'config', '--local', 'user.email', config.deploy.committer.email());
    }
    gsys('git', 'fetch', '--all');
    gsys('git', 'checkout', '--force', 'origin/gh-pages');
    gsys('rm', '-rf', '*');
    gsys('git', 'checkout', 'HEAD', '--', 'CNAME');
    gsysHidden('git', 'rm', '--cache', '-r', '.');
    utils.cp('docs/.vuepress/dist', 'gh-pages-repo');
    gsys('git', 'add', '.');
    if (config.deploy.auto_commit) {
        gsys('git', 'commit', '-m', "VuePress rebuilt " + new Date().toLocaleString('en-US', { timeZone: 'Asia/Shanghai' }));
        if (config.deploy.run_publish) {
            if (config.deploy.token_publish) {
                let remote = "https://x-access-token:" + config.deploy.GH_TOKEN() + "@github.com/project-mirai/docs.git"
                try {
                    gsys('git', 'remote', 'add', 'token', remote);
                } catch (e) { }
                gsys('git', 'remote', 'set-url', 'token', remote);
                gsys('git', 'push', 'token', 'gh-pages');
                gsys('git', 'remote', 'remove', 'token');
            } else {
                gsys('git', 'push', 'origin', 'gh-pages');
            }
        }
    }
}
