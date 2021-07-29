/**
 * @param {import("../types").Doc.Utils} utils 
 * @param {import("../types").Doc.RepoInfo} repoInfo
 * @param {Function[]} postCall 
 */
function hook(utils, repoInfo, postCall) {
    utils.runInShell(
        "find " + repoInfo.copiedDocLocation + ' -type f -name "*.md" -exec ' +
        'sed -i -r "s+\\.\\./+https://github.com/iTXTech/mirai-console-loader/blob/master/+g" {} \\;'
    )
}


module.exports = hook;
