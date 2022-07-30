/**
 * @param {import("../types").Doc.Utils} utils
 * @param {import("../types").Doc.RepoInfo} repoInfo
 * @param {Function[]} postCall
 */
async function hook(utils, repoInfo, postCall) {
    await utils.replaceInFiles(repoInfo.copiedDocLocation, '../', 'https://github.com/iTXTech/mirai-console-loader/blob/master/')
}


module.exports = hook;
