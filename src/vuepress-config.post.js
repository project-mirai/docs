module.exports = function (vueconf) {
    vueconf.plugins = [
        require("@vuepress/plugin-medium-zoom").mediumZoomPlugin(),
        require("@vuepress/plugin-nprogress").nprogressPlugin(),
        require("@vuepress/plugin-search").searchPlugin(),
        // require("@vuepress/plugin-pwa").pwaPlugin(),
    ];
    vueconf.theme = require("@vuepress/theme-default").defaultTheme(vueconf.themeConfig);

    delete vueconf.themeConfig;

    console.log(vueconf);
};