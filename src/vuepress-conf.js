/**
 * @type {import("@vuepress/theme-default").DefaultThemeOptions}
 */
let themeConf = {
    backToTop: true,
    sidebar: "auto",
    sidebarDepth: 2,
    displayAllHeaders: true,
    repo: "mamoe/mirai",
    logo: "/mirai.png",
    docsDir: "docs",
    editLink: false,
    lastUpdatedText: "上次更新",
    navbar: [],
};

/**
 * @type {(import('vuepress/config').UserConfig<import('vuepress/config').DefaultThemeConfig>)}
 */
module.exports = {
    title: "mirai",
    description: "Mirai Project",
    base: "/",
    markdown: {
        lineNumbers: true,
    },
    dest: require('path').join(process.cwd(), 'vuepress-dist'),
    themeConfig: themeConf,
    plugins: [],
    alias: {
        '@root': 'docs'
    }
};
