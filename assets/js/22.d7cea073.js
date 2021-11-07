(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{763:function(t,e,r){"use strict";r.r(e);var a=r(109),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"mirai"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mirai"}},[t._v("#")]),t._v(" Mirai")]),t._v(" "),r("p",[t._v("欢迎来到 mirai 开发文档。")]),t._v(" "),r("p",[t._v("本文面向要进行开发的用户。对于只使用现成插件的用户，请阅读 "),r("RouterLink",{attrs:{to:"/UserManual.html"}},[t._v("用户手册")]),t._v("。")],1),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/mirai-ecology.html"}},[t._v("Mirai 生态概览")])],1),t._v(" "),r("p",[r("a",{attrs:{href:"https://docs.mirai.mamoe.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mirai VuePress 文档"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"社区-sdk"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#社区-sdk"}},[t._v("#")]),t._v(" 社区 SDK")]),t._v(" "),r("p",[r("strong",[t._v("mirai 官方提供 "),r("a",{attrs:{href:"#jvm-%E5%B9%B3%E5%8F%B0-mirai-%E5%BC%80%E5%8F%91"}},[t._v("Kotlin/Java 等 JVM 平台语言开发支持")]),t._v("。如果不熟悉这些语言，请使用以下社区 SDK：")])]),t._v(" "),r("p",[t._v("要使用这些社区 SDK 需要先配置 Mirai Console，可以使用 "),r("a",{attrs:{href:"https://mirai.mamoe.net/assets/uploads/files/1618372079496-install-20210412.cmd",target:"_blank",rel:"noopener noreferrer"}},[t._v("一键安装"),r("OutboundLink")],1),t._v("（32位，带 HTTP 插件），也可以阅读 "),r("RouterLink",{attrs:{to:"/UserManual.html"}},[t._v("用户手册")]),t._v(" 进行个性化安装。")],1),t._v(" "),r("p",[t._v("你可以使用一个或多个语言来开发插件，而且在自己开发的同时也可以"),r("RouterLink",{attrs:{to:"/UserManual.html#下载和安装插件"}},[t._v("使用下载的插件")]),t._v("。")],1),t._v(" "),r("h3",{attrs:{id:"原生接口"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#原生接口"}},[t._v("#")]),t._v(" 原生接口")]),t._v(" "),r("p",[t._v("这些接口直接在 JVM 上实现，不需要中间件，拥有更佳的性能。")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"left"}},[t._v("技术")]),t._v(" "),r("th",{staticStyle:{"text-align":"left"}},[t._v("维护者及项目地址")])])]),t._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[t._v("Kotlin Scripting")])]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://github.com/iTXTech/mirai-kts",target:"_blank",rel:"noopener noreferrer"}},[t._v("iTXTech/mirai-kts"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[t._v("C++")])]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://github.com/Nambers/MiraiCP",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nambers/MiraiCP"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[t._v("JavaScript")])]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://github.com/iTXTech/mirai-js",target:"_blank",rel:"noopener noreferrer"}},[t._v("iTXTech/mirai-js"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("em",[t._v("酷 Q DLL 插件")])]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://github.com/iTXTech/mirai-native",target:"_blank",rel:"noopener noreferrer"}},[t._v("iTXTech/mirai-native"),r("OutboundLink")],1)])])])]),t._v(" "),r("h3",{attrs:{id:"http-接口"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http-接口"}},[t._v("#")]),t._v(" HTTP 接口")]),t._v(" "),r("p",[t._v("目前有两个 HTTP 协议插件。使用 HTTP 协议插件可以支持更多编程语言和技术。")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/project-mirai/mirai-api-http",target:"_blank",rel:"noopener noreferrer"}},[r("em",[r("strong",[t._v("Mirai HTTP")])]),r("OutboundLink")],1),t._v(" 由 Mirai 开发团队提供第一级支持，目前多数 SDK 都基于它；")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/howmanybots/onebot",target:"_blank",rel:"noopener noreferrer"}},[t._v("OneBot"),r("OutboundLink")],1),t._v(" 标准则兼容酷Q协议，可以让基于酷Q HTTP 插件的项目在 Mirai 平台运行。")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"left"}},[t._v("名称")]),t._v(" "),r("th",{staticStyle:{"text-align":"left"}},[t._v("实现")]),t._v(" "),r("th",{staticStyle:{"text-align":"left"}},[t._v("维护者及项目地址")])])]),t._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("em",[r("strong",[t._v("Mirai Http")])])]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("Mirai 标准")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://github.com/mamoe/mirai-api-http",target:"_blank",rel:"noopener noreferrer"}},[t._v("mamoe/mirai-api-http"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("em",[t._v("OneBot Http")])]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://github.com/howmanybots/onebot",target:"_blank",rel:"noopener noreferrer"}},[t._v("OneBot"),r("OutboundLink")],1),t._v(" 标准")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://github.com/yyuueexxiinngg/onebot-kotlin",target:"_blank",rel:"noopener noreferrer"}},[t._v("yyuueexxiinngg/onebot-kotlin"),r("OutboundLink")],1)])])])]),t._v(" "),r("p",[t._v("下表列举基于 Mirai HTTP 插件实现对一些编程语言支持的项目列表。要使用它们，你需要"),r("a",{attrs:{href:"https://github.com/project-mirai/mirai-api-http#%E5%AE%89%E8%A3%85mirai-api-http",target:"_blank",rel:"noopener noreferrer"}},[t._v("在 Mirai Console 安装 "),r("code",[t._v("mirai-api-http")]),r("OutboundLink")],1),t._v("（如果使用上面的一键安装则不需要额外操作）。")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"left"}},[t._v("语言和技术")]),t._v(" "),r("th",{staticStyle:{"text-align":"left"}},[t._v("维护者及项目地址")])])]),t._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[t._v("C#")])]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://github.com/Executor-Cheng/mirai-CSharp",target:"_blank",rel:"noopener noreferrer"}},[t._v("Executor-Cheng/mirai-CSharp"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[t._v("C#")])]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://github.com/theGravityLab/ProjHyperai",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hyperai"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[t._v("C#")])]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://github.com/Coloryr/ColorMirai",target:"_blank",rel:"noopener noreferrer"}},[t._v("Coloryr/ColorMirai"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[t._v("C#")])]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://github.com/AHpxChina/Mirai.Net",target:"_blank",rel:"noopener noreferrer"}},[t._v("AhpxChina/Mirai.Net"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[t._v("C#")])]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://github.com/Miyakowww/CocoaFramework2",target:"_blank",rel:"noopener noreferrer"}},[t._v("Miyakowww/CocoaFramework2"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[t._v("C++")])]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://github.com/cyanray/mirai-cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("cyanray/mirai-cpp"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[t._v("C++")])]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://github.com/Chlorie/miraipp-template",target:"_blank",rel:"noopener noreferrer"}},[t._v("Chlorie/miraipp"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[t._v("Go")])]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://github.com/Logiase/gomirai",target:"_blank",rel:"noopener noreferrer"}},[t._v("Logiase/gomirai"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[t._v("JavaScript")]),t._v(" / Node.js")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://github.com/RedBeanN/node-mirai",target:"_blank",rel:"noopener noreferrer"}},[t._v("RedBeanN/node-mirai"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[t._v("JavaScript")]),t._v(" / Node.js")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://github.com/drinkal/Mirai-js",target:"_blank",rel:"noopener noreferrer"}},[t._v("drinkal/Mirai-js"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[t._v("JavaScript")]),t._v(" / TypeScript")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://github.com/YunYouJun/mirai-ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("YunYouJun/mirai-ts"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[t._v("JavaScript")]),t._v(" / TypeScript")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://github.com/nepsyn/miraipie",target:"_blank",rel:"noopener noreferrer"}},[t._v("nepsyn/miraipie"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[t._v("PHP")])]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://github.com/nkxingxh/miraiez",target:"_blank",rel:"noopener noreferrer"}},[t._v("nkxingxh/miraiez"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[t._v("Python")])]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://github.com/GraiaProject/Ariadne",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ariadne"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[t._v("Python")])]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://github.com/GraiaProject/Avilla",target:"_blank",rel:"noopener noreferrer"}},[t._v("Avilla"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[t._v("Python")])]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://github.com/wyapx/Elaina",target:"_blank",rel:"noopener noreferrer"}},[t._v("Elaina"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[t._v("Python")])]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://github.com/RF-Tar-Railt/Cesloi",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cesloi"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[t._v("Python")])]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://github.com/nonebot/nonebot2",target:"_blank",rel:"noopener noreferrer"}},[t._v("NoneBot"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[t._v("Python")])]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://github.com/jerrita/saaya",target:"_blank",rel:"noopener noreferrer"}},[t._v("jerrita/saaya"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[t._v("Python")])]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://github.com/YiriMiraiProject/YiriMirai",target:"_blank",rel:"noopener noreferrer"}},[t._v("YiriMirai"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[t._v("Python")])]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://github.com/Excaive/miraicle",target:"_blank",rel:"noopener noreferrer"}},[t._v("Excaive/miraicle"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[t._v("Ruby")])]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://github.com/Shimogawa/rubirai",target:"_blank",rel:"noopener noreferrer"}},[t._v("Shimogawa/rubirai"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[t._v("Rust")])]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://github.com/HoshinoTented/mirai-rs",target:"_blank",rel:"noopener noreferrer"}},[t._v("HoshinoTented/mirai-rs"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[t._v("易语言")])]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://github.com/only52607/e-mirai",target:"_blank",rel:"noopener noreferrer"}},[t._v("only52607/e-mirai"),r("OutboundLink")],1)])])])]),t._v(" "),r("blockquote",[r("p",[t._v("按字母顺序排序，排序不代表排名"),r("br"),t._v(" "),r("em",[t._v("想在这里添加你的项目？欢迎"),r("a",{attrs:{href:"https://github.com/mamoe/mirai/edit/dev/docs/README.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("提交 PR"),r("OutboundLink")],1),t._v("。")])])]),t._v(" "),r("p",[t._v("特别地，有一些 SDK 直接基于 mirai-core 开发，不需要 "),r("a",{attrs:{href:"https://github.com/mamoe/mirai-console",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("mirai-console")]),r("OutboundLink")],1),t._v("：")]),t._v(" "),r("ul",[r("li",[r("code",[t._v("Lua")]),t._v(": "),r("a",{attrs:{href:"https://github.com/only52607/lua-mirai",target:"_blank",rel:"noopener noreferrer"}},[t._v("lua-mirai"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"jvm-平台-mirai-开发"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#jvm-平台-mirai-开发"}},[t._v("#")]),t._v(" JVM 平台 Mirai 开发")]),t._v(" "),r("p",[t._v("本节介绍使用 Java、Kotlin 等 JVM 平台编程语言开发 Mirai 或 Mirai Console 插件。")]),t._v(" "),r("p",[r("strong",[t._v("为了避免遇到各种问题，请逐步仔细阅读。")])]),t._v(" "),r("ol",[r("li",[r("p",[r("RouterLink",{attrs:{to:"/Preparations.html#mirai---preparations"}},[t._v("JVM 环境和开发准备工作")])],1)]),t._v(" "),r("li",[r("p",[t._v("选择框架\n建议先阅读 "),r("RouterLink",{attrs:{to:"/mirai-ecology.html"}},[t._v("Mirai 生态概览")]),t._v("。")],1),t._v(" "),r("ul",[r("li",[r("p",[t._v("若要将 mirai 当做依赖库嵌入你的应用使用（你调用 mirai），则需要使用 mirai-core，请阅读 "),r("RouterLink",{attrs:{to:"/ConfiguringProjects.html"}},[t._v("配置项目依赖")]),t._v("。")],1)]),t._v(" "),r("li",[r("p",[t._v("若要以插件模式开发（mirai 调用你），可以使用 mirai-console，请阅读 "),r("RouterLink",{attrs:{to:"/console/ConfiguringProjects.html"}},[t._v("mirai-console 的配置插件项目")]),t._v("。")],1)])])]),t._v(" "),r("li",[r("p",[t._v("阅读 API 文档（见下文）")])])]),t._v(" "),r("blockquote",[r("p",[t._v("如果你希望先确认 mirai 能够正常运行才能安心阅读文档，可克隆 "),r("a",{attrs:{href:"https://github.com/project-mirai/mirai-hello-world",target:"_blank",rel:"noopener noreferrer"}},[t._v("mirai-hello-world"),r("OutboundLink")],1),t._v(" 并运行其中 Kotlin 或 Java 入口点 "),r("code",[t._v("main")]),t._v("。")])]),t._v(" "),r("p",[t._v("之后...")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://mirai.mamoe.net/category/6/%E9%A1%B9%E7%9B%AE%E5%8F%91%E5%B8%83",target:"_blank",rel:"noopener noreferrer"}},[t._v("让更多人看到你的项目 - 在论坛发布"),r("OutboundLink")],1)])]),t._v(" "),r("h3",{attrs:{id:"mirai-core-api-文档"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mirai-core-api-文档"}},[t._v("#")]),t._v(" mirai-core API 文档")]),t._v(" "),r("p",[t._v("请在 "),r("RouterLink",{attrs:{to:"/CoreAPI.html"}},[t._v("CoreAPI.md")]),t._v(" 阅读 JVM 平台的 mirai-core-api 使用文档。")],1)])}),[],!1,null,null,null);e.default=i.exports}}]);