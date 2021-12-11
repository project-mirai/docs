// noinspection EqualityComparisonWithCoercionJS

const pt = require("path");

/**
 * @param {import("../types").Doc.Utils} utils
 * @param {string} flatten
 */
function mvres(utils, flatten) {
    let pt = require('path')
    let fname = pt.basename(flatten)
    if (fname[0] != '.') return
    let fs = require('fs')
    if (!fs.existsSync(flatten)) {
        console.log("[System] WARNING:", flatten, "not exists")
        return;
    }

    let target = pt.normalize(pt.resolve(pt.dirname(flatten), fname.substr(1)))
    if (fs.existsSync(target)) {
        utils.system("rm", "-rf", target)
    }
    console.log("[SYSTEM] Moving ", flatten, "to", target)
    fs.renameSync(pt.normalize(flatten), target)
    // fs.renameSync(flatten, fname.substr(1))

    utils.runInShell(
        "find " + pt.dirname(flatten) + ' -type f -name "*.md" -exec ' +
        'sed -i -r "s+\\' + fname + '\\/+' + fname.substr(1) + '/+g" {} \\;'
    );
}


/**
 * @param {import("../types").Doc.Utils} utils
 * @param {import("../types").Doc.RepoInfo} repoInfo
 * @param {Function[]} postCall
 */
function hook(utils, repoInfo, postCall) {
    mvres(utils, repoInfo.copiedDocLocation + '/.UserManual_images')

    utils.runInShell(
        "find " + repoInfo.copiedDocLocation + ' -type f -name "*.md" -exec ' +
        'sed -i -r "s+https://github.com/mamoe/mirai-console/tree/master/+/console/+g" {} \\;'
    );
    utils.runInShell(
        "find " + repoInfo.copiedDocLocation + ' -type f -name "*.md" -exec ' +
        'sed -i -r "s+https://github.com/mamoe/mirai-console/blob/master/docs/+/console/+g" {} \\;'
    );
    utils.runInShell(
        "find " + repoInfo.copiedDocLocation + ' -type f -name "*.md" -exec ' +
        'sed -i -r "s+https://github.com/mamoe/mirai/blob/dev/docs/+/+g" {} \\;'
    );
    utils.runInShell(
        "find " + repoInfo.copiedDocLocation + ' -type f -name "*.md" -exec ' +
        'sed -i -r "s+\\(/mirai-console/docs+(/console+g" {} \\;'
    );
    utils.runInShell(
        "find " + repoInfo.copiedDocLocation + ' -type f -name "*.md" -exec ' +
        'sed -i -r "s+\\(/mirai-console+(https://github.com/mamoe/mirai/tree/dev/mirai-console+g" {} \\;'
    );
    utils.runInShell(
        "find " + repoInfo.copiedDocLocation + ' -type f -name "*.md" -exec ' +
        'sed -i -r "s+\\.\\./mirai-console+https://github.com/mamoe/mirai/tree/dev/mirai-console+g" {} \\;'
    );

    utils.runInShell(
        "find " + repoInfo.copiedDocLocation + ' -type f -name "*.md" -exec ' +
        'sed -i -r "s+\\.\\./mirai-core-api/+https://github.com/mamoe/mirai/blob/dev/mirai-core-api/+g" {} \\;'
    )
}

hook.mvres = mvres;

module.exports = hook;
