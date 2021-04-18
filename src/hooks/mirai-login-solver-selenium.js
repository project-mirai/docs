/**
 * @param {import("../types").Doc.Utils} utils 
 * @param {import("../types").Doc.RepoInfo} repoInfo
 * @param {Function[]} postCall 
 */
function hook(utils, repoInfo, postCall) {
    utils.runInShell("mkdir " + repoInfo.copiedDocLocation + "mirai-login-solver-selenium");
    utils.cp(repoInfo.location + "/README.md", repoInfo.copiedDocLocation + "mirai-login-solver-selenium/README.md");
    utils.cp(repoInfo.location + "/images", repoInfo.copiedDocLocation + "mirai-login-solver-selenium/images");
    utils.runInShell(
        'sed -i "s+src/main/resources/mirai-selenium/captcha.inject.js+https://github.com/project-mirai/mirai-login-solver-selenium/blob/master/src/main/resources/mirai-selenium/captcha.inject.js+g" ' + repoInfo.copiedDocLocation + 'mirai-login-solver-selenium/README.md'
    );
    utils.runInShell(
        "find " + repoInfo.copiedDocLocation + "mirai-login-solver-selenium" + ' -type f -name "*.md" -exec ' +
        'sed -i -r "s+\\(images/+(./images/+g" {} \\;'
    );
}


module.exports = hook;
