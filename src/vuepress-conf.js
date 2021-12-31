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
    themeConfig: {
        backToTop: true,
        sidebar: "auto",
        sidebarDepth: 2,
        displayAllHeaders: true,
        repo: "mamoe/mirai",
        logo: "https://raw.githubusercontent.com/mamoe/mirai/dev/docs/mirai.png",
        docsDir: "docs",
        editLinks: false,
        smoothScroll: true,
        lastUpdated: "上次更新",
        nav: [
        ],
    },
    plugins: [
        "@vuepress/plugin-medium-zoom",
        "@vuepress/nprogress",
        [
            "@vuepress/pwa",
            {
                serviceWorker: true,
                updatePopup: {
                    message: "发现新内容",
                    buttonText: "刷新",
                },
            },
        ],
    ],
    configureWebpack: {
        resolve: {
            alias: {
                '@root': 'docs'
            }
        }
    },
};
