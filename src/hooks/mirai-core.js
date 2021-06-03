/**
 * @param {import("../types").Doc.Utils} utils 
 * @param {import("../types").Doc.RepoInfo} repoInfo
 * @param {Function[]} postCall 
 */
function hook(utils, repoInfo, postCall) {
    utils.runInShell(
        "find " + repoInfo.copiedDocLocation + ' -type f -name "*.md" -exec ' +
        'sed -i -r "s+https://github.com/mamoe/mirai-console/tree/master/+/console/+g" {} \\;'
    );
    utils.runInShell(
        "find " + repoInfo.copiedDocLocation + ' -type f -name "*.md" -exec ' +
        'sed -i -r "s+https://github.com/mamoe/mirai/blob/dev/docs/+/+g" {} \\;'
    );
    utils.runInShell(
        "find " + repoInfo.copiedDocLocation + ' -type f -name "*.md" -exec ' +
        'sed -i -r "s+\\.UserManual_images+./.UserManual_images+g" {} \\;'
    );
}


module.exports = hook;
