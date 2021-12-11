let repositories = [
    // [主仓库, 分支名, 文档在仓库的位置, vuepress文档位置, patch位置(src/hooks/%s.js)],
    ["mamoe/mirai", "dev", "docs", "", "mirai-core"],
    ["mamoe/mirai-console", "dev", "mirai-console/docs", "console", "console"],
    ["project-mirai/mirai-login-solver-selenium", "master", undefined, "", "mirai-login-solver-selenium"],
    ["project-mirai/mirai-api-http", "master", "docs", "mirai-api-http", "mirai-api-http"],
    ["iTXTech/mirai-console-loader", "master", "docs", "mcl", "mirai-console-loader"],
];

module.exports = {
    repositories: repositories,
    mirror: {
        'mamoe/mirai-console': 'mamoe/mirai',
    },
};
