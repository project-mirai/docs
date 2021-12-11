/**
 * @param {import("../types").Doc.Utils} utils
 * @param {import("../types").Doc.RepoInfo} repoInfo
 * @param {Function[]} postCall
 */
function hook(utils, repoInfo, postCall) {
    utils.runInShell("mkdir -p docs/tools/intellij-plugin/resources");
    utils.cp(repoInfo.location + "/mirai-console/tools/intellij-plugin/resources", 'docs/tools/intellij-plugin/resources');
    utils.system('rm -rf docs/tools/intellij-plugin/resources/inspectionDescriptions');
    utils.system('rm -rf docs/tools/intellij-plugin/resources/intentionDescriptions');
    utils.system('rm -rf docs/tools/intellij-plugin/resources/messages');
    utils.system('rm -rf docs/tools/intellij-plugin/resources/META-INF');

    require('./mirai-core').mvres(utils, repoInfo.copiedDocLocation + '/.images')
    require('./mirai-core').mvres(utils, repoInfo.copiedDocLocation + '/.ConfiguringProjects_images')

    utils.runInShell(
        "find " + repoInfo.copiedDocLocation + ' -type f -name "*.md" -exec ' +
        'sed -i -r "s+\\.\\./+https://github.com/mamoe/mirai/tree/dev/mirai-console/+g" {} \\;'
    );
    utils.runInShell(
        "find " + repoInfo.copiedDocLocation + ' -type f -name "*.md" -exec ' +
        'sed -i -r "s+https://github.com/mamoe/mirai/blob/dev/docs/+../+g" {} \\;'
    );

}


module.exports = hook;
