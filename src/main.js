let config = require('./config.js');
let process = require('child_process');
let repositories = require('./repositories');

let fs = require('fs');
console.log(config);

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
        system('cp', '-r', '-v', f, '-T', t);
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
    console.log("[SYSTEM] Executing " + Array.prototype.join.call(arguments, ' '));
    if (arguments.length > 1) {
        process.spawnSync(cmd,
            Array.prototype.slice.call(arguments, 1),
            {
                stdio: "inherit"
            }
        );
        return;
    }
    process.execSync(cmd, {
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

system('yarn install');

utils.runInShell("mkdir docs/.vuepress");
fs.writeFileSync("docs/.vuepress/config.js", "module.exports = " + JSON.stringify(vueConf));

system('yarn docs:build');

for (const postCall of postCalls) {
    postCall();
}
