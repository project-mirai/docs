module.exports = {
    'mamoe/mirai': {
        text: "mirai-core",
        link: "/",
        items: [
            { text: "Index", link: "/" },
            { text: "Mirai 生态概览", link: "/mirai-ecology.html" },
            { text: "从 1.x 迁移", link: "/MigrationFrom1x.html" },
            {
                text: "CoreAPI", link: "/CoreAPI.html", items: [
                    { text: "机器人", link: "/Bots.html" },
                    { text: "联系人", link: "/Contacts.html" },
                    { text: "事件", link: "/Events.html" },
                    { text: "消息", link: "/Messages.html" },
                ]
            },
        ],
    },
    'mamoe/mirai-console': {
        text: "mirai-console",
        link: "/",
        items: [
            { text: "Index", link: "/" },
            { text: "配置项目", link: "/ConfiguringProjects.html" },
            { text: "启动 Console", link: "/Run.html" },
            {
                text: "后端插件开发基础", items: [
                    { text: "插件 - Plugin 模块", link: "/Plugins.html" },
                    { text: "指令 - Command 模块", link: "/Commands.html" },
                    { text: "存储 - PluginData 模块", link: "/PluginData.html" },
                    { text: "权限 - Permission 模块", link: "/Permissions.html" },
                ]
            },
            {
                text: "后端插件开发进阶", items: [
                    { text: "扩展 - Extension 模块和扩展点", link: "/Extensions.html" }
                ]
            },
            {
                text: "实现前端", items: [
                    { text: "FrontEnd", link: "/FrontEnd.html" }
                ]
            },
        ]
    },
    'project-mirai/mirai-login-solver-selenium': {
        text: 'mirai-login-solver-selenium',
        link: '/mirai-login-solver-selenium/'
    },
};