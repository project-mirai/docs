/**
 * @param {import("../types").Doc.Utils} utils
 * @param {import("../types").Doc.RepoInfo} repoInfo
 * @param {Function[]} postCall
 */
async function hook(utils, repoInfo, postCall) {
    utils.runInShell("mkdir " + repoInfo.copiedDocLocation + "/mirai-login-solver-selenium");
    utils.cp(repoInfo.location + "/README.md", repoInfo.copiedDocLocation + "/mirai-login-solver-selenium/README.md");
    utils.cp(repoInfo.location + "/images", repoInfo.copiedDocLocation + "/mirai-login-solver-selenium/images");
    await utils.replaceInFiles(
        repoInfo.copiedDocLocation + '/mirai-login-solver-selenium/README.md',
        'src/main/resources/mirai-selenium/captcha.inject.js',
        'https://github.com/project-mirai/mirai-login-solver-selenium/blob/master/src/main/resources/mirai-selenium/captcha.inject.js'
    );

    await utils.replaceInFiles(
        repoInfo.copiedDocLocation + '/mirai-login-solver-selenium',
        '(images/', '(./images/'
    );
}


module.exports = hook;
