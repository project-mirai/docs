(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{399:function(t,e,a){"use strict";a.r(e);var r=a(49),i=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mirai-usermanual"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mirai-usermanual"}},[t._v("#")]),t._v(" Mirai - UserManual")]),t._v(" "),a("p",[t._v("Mirai 用户手册。本文面向对开发不熟悉而希望使用 Mirai 的用户。如果你要开发，请先阅读 "),a("RouterLink",{attrs:{to:"/"}},[t._v("开发文档")]),t._v("。")],1),t._v(" "),a("h2",{attrs:{id:"启动-mirai"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动-mirai"}},[t._v("#")]),t._v(" 启动 Mirai")]),t._v(" "),a("p",[t._v("使用 Mirai，一般人要启动的是 Mirai 控制台（即 Mirai Console），它可以加载插件。")]),t._v(" "),a("p",[t._v("Mirai 控制台现在有两个版本，插件在这两个版本的 Mirai Console 上都可以运行:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("长啥样?")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("好用吗?")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("怎么装?")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("纯控制台")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"UserManual_images/MCLI-1.png"}},[t._v("MCLI-1.png")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("稳定，也适合服务器")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"#%E4%BD%BF%E7%94%A8%E7%BA%AF%E6%8E%A7%E5%88%B6%E5%8F%B0%E7%89%88%E6%9C%AC"}},[t._v("使用纯控制台版本")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("图形界面")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"UserManual_images/MCPS-1.png"}},[t._v("MCPS-1.png")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("测试版，不稳定")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"#%E4%BD%BF%E7%94%A8%E5%9B%BE%E5%BD%A2%E7%95%8C%E9%9D%A2%E7%89%88%E6%9C%AC"}},[t._v("使用图形界面版本")])])])])]),t._v(" "),a("h2",{attrs:{id:"使用图形界面版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用图形界面版本"}},[t._v("#")]),t._v(" 使用图形界面版本")]),t._v(" "),a("p",[t._v("前往 "),a("a",{attrs:{href:"https://github.com/sonder-joker/mirai-compose/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("sonder-joker/mirai-compose"),a("OutboundLink")],1),t._v("\n下载适合你的系统的压缩包，解压到一个文件就可以使用。")]),t._v(" "),a("h2",{attrs:{id:"使用纯控制台版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用纯控制台版本"}},[t._v("#")]),t._v(" 使用纯控制台版本")]),t._v(" "),a("h3",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("p",[t._v("可以使用"),a("a",{attrs:{href:"https://mirai.mamoe.net/assets/uploads/files/1618372079496-install-20210412.cmd",target:"_blank",rel:"noopener noreferrer"}},[t._v("脚本"),a("OutboundLink")],1),t._v("\n自动安装 32 位带 HTTP 插件的版本，也可以使用安装器个性化安装：")]),t._v(" "),a("ol",[a("li",[t._v("访问 "),a("a",{attrs:{href:"https://github.com/iTXTech/mcl-installer/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("iTXTech/mcl-installer"),a("OutboundLink")],1),t._v("；")]),t._v(" "),a("li",[t._v("下载适合你的系统的可执行文件；")]),t._v(" "),a("li",[t._v("在一个新文件夹存放这个文件，运行它；")]),t._v(" "),a("li",[t._v("通常可以一路回车使用默认设置完成安装，安装完成后程序自动退出；")]),t._v(" "),a("li",[t._v("运行 "),a("code",[t._v("mcl.cmd")]),t._v(" 启动，成功后会看到绿色的 "),a("code",[t._v("mirai-console started successfully")]),t._v("。")])]),t._v(" "),a("h3",{attrs:{id:"了解运行环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#了解运行环境"}},[t._v("#")]),t._v(" 了解运行环境")]),t._v(" "),a("p",[t._v("安装时自动下载了 Mirai Console\n启动器（简称 "),a("a",{attrs:{href:"https://github.com/iTXTech/mirai-console-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("MCL"),a("OutboundLink")],1),t._v("）。")]),t._v(" "),a("p",[t._v("启动器会帮你准备运行环境，下载和更新 Mirai 核心。你也可以使用启动器下载一些插件（见下文）。")]),t._v(" "),a("p",[t._v("第一次运行 "),a("code",[t._v("mcl.cmd")]),t._v(" 时会初始化运行环境。下表说明了各个文件夹的用途。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("文件夹名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("用途")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("scripts")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("存放启动器的脚本，一般不需要在意他们")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("plugins")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("存放插件")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("data")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("存放插件的数据，一般不需要在意它们")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("config")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("存放插件的配置，可以打开并修改配置")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("logs")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("存放运行时的日志，日志默认保留 7 天")])])])]),t._v(" "),a("blockquote",[a("p",[t._v("可以在"),a("a",{attrs:{href:"https://github.com/iTXTech/mirai-console-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1),t._v("查看 MCL 详细用法")])]),t._v(" "),a("h3",{attrs:{id:"下载和安装插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载和安装插件"}},[t._v("#")]),t._v(" 下载和安装插件")]),t._v(" "),a("p",[t._v("刚刚装好的 Mirai Console 是没有任何功能的。功能将由插件提供。")]),t._v(" "),a("h4",{attrs:{id:"如何安装官方插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何安装官方插件"}},[t._v("#")]),t._v(" 如何安装官方插件")]),t._v(" "),a("p",[t._v("Mirai 官方提供两个插件：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/project-mirai/chat-command",target:"_blank",rel:"noopener noreferrer"}},[t._v("chat-command"),a("OutboundLink")],1),t._v(':\n允许在聊天环境通过以 "/" 起始的消息执行指令')]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/project-mirai/mirai-api-http",target:"_blank",rel:"noopener noreferrer"}},[t._v("mirai-api-http"),a("OutboundLink")],1),t._v("：提供\nHTTP 支持，允许使用其他编程语言的插件")])]),t._v(" "),a("p",[t._v('打开命令行 (Windows 系统按住Shift+鼠标右键，点击"在此处打开 PowerShell"),'),a("br"),t._v("\n可以使用 MCL 自动安装这些插件如：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("./mcl --update-package net.mamoe:mirai-api-http --type plugin --channel stable\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("详细文档："),a("a",{attrs:{href:"https://github.com/iTXTech/mirai-console-loader/blob/master/scripts/README.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("MCL/scripts"),a("OutboundLink")],1)]),t._v(" "),a("h4",{attrs:{id:"在哪找社区插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在哪找社区插件"}},[t._v("#")]),t._v(" 在哪找社区插件")]),t._v(" "),a("ul",[a("li",[t._v("Mirai\n官方论坛 "),a("a",{attrs:{href:"https://mirai.mamoe.net/category/11/%E6%8F%92%E4%BB%B6%E5%8F%91%E5%B8%83",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mirai Forum"),a("OutboundLink")],1)])]),t._v(" "),a("blockquote",[a("p",[a("em",[t._v("我们还正在建设插件中心，完成后将会简化寻找插件的工作")])])]),t._v(" "),a("h4",{attrs:{id:"如何安装社区插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何安装社区插件"}},[t._v("#")]),t._v(" 如何安装社区插件")]),t._v(" "),a("p",[t._v("如果是 JAR 文件的插件，放入 "),a("code",[t._v("plugins")]),t._v(" 即可。其他插件一般都有特殊说明如何使用，请参考它们的说明。")]),t._v(" "),a("h4",{attrs:{id:"推荐安装的插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#推荐安装的插件"}},[t._v("#")]),t._v(" 推荐安装的插件")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/project-mirai/chat-command",target:"_blank",rel:"noopener noreferrer"}},[t._v("chat-command"),a("OutboundLink")],1),t._v(":\n不安装此环境不能在聊天环境中执行命令")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/Karlatemp/LuckPerms-Mirai",target:"_blank",rel:"noopener noreferrer"}},[t._v("LuckPerms-Mirai"),a("OutboundLink")],1),t._v(" (*\n社区*): 易用的高级高效率权限组插件, 适合权限分配模型比较复杂的情况")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/project-mirai/mirai-api-http",target:"_blank",rel:"noopener noreferrer"}},[t._v("mirai-api-http"),a("OutboundLink")],1),t._v("：提供\nHTTP 支持，允许使用其他编程语言的插件")])]),t._v(" "),a("h3",{attrs:{id:"使用控制台指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用控制台指令"}},[t._v("#")]),t._v(" 使用控制台指令")]),t._v(" "),a("p",[t._v("启动 "),a("code",[t._v("mcl.cmd")]),t._v(" 就会看到控制台。在控制台可以输入指令，按回车执行这条指令。")]),t._v(" "),a("p",[t._v("Mirai Console 内置一些指令，输入 "),a("code",[t._v("?")]),t._v(" 并回车可以查看指令列表。")]),t._v(" "),a("p",[t._v("一些常用指令介绍在"),a("RouterLink",{attrs:{to:"/console/BuiltInCommands.html#mirai-console---builtin-commands"}},[t._v("这里")]),t._v("\n。")],1),t._v(" "),a("h4",{attrs:{id:"在群聊中使用命令-权限授予"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在群聊中使用命令-权限授予"}},[t._v("#")]),t._v(" 在群聊中使用命令 (权限授予)")]),t._v(" "),a("p",[t._v("要允许从 QQ 聊天环境中使用各种命令, 你 "),a("strong",[t._v("必须")]),t._v(" 完成以下的配置")]),t._v(" "),a("ol",[a("li",[t._v("安装 "),a("a",{attrs:{href:"https://github.com/project-mirai/chat-command",target:"_blank",rel:"noopener noreferrer"}},[t._v("chat-command"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("完成命令执行权限授予")])]),t._v(" "),a("blockquote",[a("p",[t._v("关于不同的权限系统, 授予权限的方式, 或者授予权限的命令格式, 可能有所不一样")]),t._v(" "),a("p",[t._v("当使用 "),a("code",[t._v("非内置权限系统")]),t._v(" 时, 具体的权限管理相关命令以相关的权限系统的文档为准")]),t._v(" "),a("blockquote",[a("p",[t._v("如 "),a("code",[t._v("LuckPerms-Mirai")]),t._v(" 的权限管理命令为 "),a("code",[t._v("/lp")]),t._v(" 而不是 "),a("code",[t._v("/permission")])])])]),t._v(" "),a("p",[t._v("要完成权限授予, 你必须通过在控制台执行\n"),a("RouterLink",{attrs:{to:"/console/BuiltInCommands.html#permissioncommand"}},[a("code",[t._v("/permission permit [target] [permission]")])]),t._v("\n来授予其他人执行相关命令的权限, 需要执行的权限一般情况在插件的介绍页都会给明")],1),t._v(" "),a("p",[t._v("详见 "),a("RouterLink",{attrs:{to:"/console/BuiltInCommands.html#permissioncommand"}},[a("code",[t._v("PermissionCommand")])])],1),t._v(" "),a("h2",{attrs:{id:"解决问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决问题"}},[t._v("#")]),t._v(" 解决问题")]),t._v(" "),a("p",[t._v("如果遇到使用问题或想提建议，可以在 "),a("a",{attrs:{href:"https://github.com/mamoe/mirai/issues",target:"_blank",rel:"noopener noreferrer"}},[t._v("issues"),a("OutboundLink")],1),t._v("\n发表。也可以在"),a("a",{attrs:{href:"https://mirai.mamoe.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("论坛"),a("OutboundLink")],1),t._v("交流想法。")])])}),[],!1,null,null,null);e.default=i.exports}}]);