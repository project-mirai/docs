/**
 * @param {import("../types").Doc.Utils} utils
 * @param {import("../types").Doc.RepoInfo} repoInfo
 * @param {Function[]} postCall
 */
async function hook(utils, repoInfo, postCall) {
    utils.runInShell("mkdir -p docs/tools/intellij-plugin/resources");
    utils.cp(repoInfo.location + "/mirai-console/tools/intellij-plugin/resources", 'docs/tools/intellij-plugin/resources');
    utils.system('rm -rf docs/tools/intellij-plugin/resources/inspectionDescriptions');
    utils.system('rm -rf docs/tools/intellij-plugin/resources/intentionDescriptions');
    utils.system('rm -rf docs/tools/intellij-plugin/resources/messages');
    utils.system('rm -rf docs/tools/intellij-plugin/resources/META-INF');

    require('./mirai-core').mvres(utils, repoInfo.copiedDocLocation + '/.images')
    require('./mirai-core').mvres(utils, repoInfo.copiedDocLocation + '/.ConfiguringProjects_images')

    await utils.replaceInFiles(repoInfo.copiedDocLocation, /(?:\.\.\/)+backend\//g, 'https://github.com/mamoe/mirai/tree/dev/mirai-console/backend/');
    await utils.replaceInFiles(repoInfo.copiedDocLocation, /(?:\.\.\/)+frontend\//g, 'https://github.com/mamoe/mirai/tree/dev/mirai-console/frontend/');
    await utils.replaceInFiles(repoInfo.copiedDocLocation, /(?:\.\.\/)+tools\//g, 'https://github.com/mamoe/mirai/tree/dev/mirai-console/tools/');
    await utils.replaceInFiles(repoInfo.copiedDocLocation, '/docs/', '/');
    await utils.replaceInFiles(repoInfo.copiedDocLocation, /(?:\.\.\/)+docs\//g, '/');
    await utils.replaceInFiles(repoInfo.copiedDocLocation, 'https://github.com/mamoe/mirai/blob/dev/docs/', '/');
}


module.exports = hook;
