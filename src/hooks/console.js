/**
 * @param {import("../types").Doc.Utils} utils 
 * @param {import("../types").Doc.RepoInfo} repoInfo
 * @param {Function[]} postCall 
 */
function hook(utils, repoInfo, postCall) {
    utils.systemNoError("mkdir", "node_modules");
    utils.cp(repoInfo.docLocation + '/.images', 'node_modules/.images');
    utils.cp(repoInfo.docLocation + '/.ConfiguringProjects_images', 'node_modules/.ConfiguringProjects_images');
    utils.runInShell("mkdir -p docs/tools/intellij-plugin/resources");
    utils.cp(repoInfo.location + "/tools/intellij-plugin/resources", 'docs/tools/intellij-plugin/resources');

    utils.runInShell(
        "find " + repoInfo.copiedDocLocation + ' -type f -name "*.md" -exec ' +
        'sed -i -r "s+\\.\\./+https://github.com/mamoe/mirai-console/tree/master/+g" {} \\;'
    );
    utils.runInShell(
        'sed -i "s+https://github.com/mamoe/mirai/blob/dev/docs/CoreAPI.md+../CoreAPI.md+g" ' + repoInfo.copiedDocLocation + '/README.md'
    );

    postCall.push(() => {
        utils.system("rm", '-rf', 'node_modules/.images');
        utils.system("rm", '-rf', 'node_modules/.ConfiguringProjects_images');
    });
}


module.exports = hook;
