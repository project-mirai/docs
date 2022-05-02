(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{397:function(t,e,r){"use strict";r.r(e);var n=r(49),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"mirai-preparations"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mirai-preparations"}},[t._v("#")]),t._v(" Mirai - Preparations")]),t._v(" "),r("p",[t._v("本章节介绍 Mirai 的 JVM 环境和开发准备工作。")]),t._v(" "),r("h2",{attrs:{id:"jvm-环境要求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#jvm-环境要求"}},[t._v("#")]),t._v(" JVM 环境要求")]),t._v(" "),r("ul",[r("li",[t._v("桌面 JVM：最低 Java 8，但推荐 Java 11（要使用一键启动器，需要 11）")]),t._v(" "),r("li",[t._v("Android：Android SDK 26+ （Android 8.0，Oreo)")])]),t._v(" "),r("p",[r("strong",[t._v("但注意不要使用 Oracle JDK")]),t._v("\n（"),r("a",{attrs:{href:"https://github.com/mamoe/mirai/discussions/779",target:"_blank",rel:"noopener noreferrer"}},[t._v("原因"),r("OutboundLink")],1),t._v("），可以使用其他任何 JDK。")]),t._v(" "),r("blockquote",[r("p",[t._v("要下载 JDK：")]),t._v(" "),r("ul",[r("li",[t._v("手动下载安装如 "),r("a",{attrs:{href:"https://adoptopenjdk.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("AdoptOpenJDK"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("自动在 IntelliJ IDEA "),r("code",[t._v("Project Structure")]),t._v("("),r("code",[t._v("Ctrl+Shift+Alt+S")]),t._v(") -> "),r("code",[t._v("SDKs")]),t._v(" -> "),r("code",[t._v("+")]),t._v(" -> "),r("code",[t._v("Download JDK")]),t._v(" 下载安装")])])]),t._v(" "),r("h2",{attrs:{id:"开发的准备工作"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#开发的准备工作"}},[t._v("#")]),t._v(" 开发的准备工作")]),t._v(" "),r("h3",{attrs:{id:"安装-ide-插件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装-ide-插件"}},[t._v("#")]),t._v(" 安装 IDE 插件")]),t._v(" "),r("p",[t._v("推荐使用 "),r("a",{attrs:{href:"https://www.jetbrains.com/idea/",target:"_blank",rel:"noopener noreferrer"}},[t._v("IntelliJ IDEA"),r("OutboundLink")],1),t._v("\n或 "),r("a",{attrs:{href:"https://developer.android.com/studio",target:"_blank",rel:"noopener noreferrer"}},[t._v("Android Studio"),r("OutboundLink")],1),t._v("。Mirai 提供 IDE\n插件来提升开发体验。")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"center"}},[t._v("插件名")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("一键安装")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("JetBrains 插件仓库")])])]),t._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"center"}},[r("a",{attrs:{href:"/mirai-console/tools/intellij-plugin"}},[t._v("Mirai Console IntelliJ")])]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("提供 mirai-core 的错误检查和 mirai-console 的插件开发辅助")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[r("a",{attrs:{href:"https://plugins.jetbrains.com/embeddable/install/15094",target:"_blank",rel:"noopener noreferrer"}},[t._v("一键安装"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[r("a",{attrs:{href:"https://plugins.jetbrains.com/plugin/15094-mirai-console",target:"_blank",rel:"noopener noreferrer"}},[t._v("说明页"),r("OutboundLink")],1)])])])]),t._v(" "),r("p",[t._v("使用 Kotlin 建议安装 Mirai Console IntelliJ。同时请确保 Kotlin 插件是最新版本（在 "),r("code",[t._v("Settings -> Plugins")]),t._v(" 启用并更新 Kotlin 到最新）。")]),t._v(" "),r("h3",{attrs:{id:"kotlin"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#kotlin"}},[t._v("#")]),t._v(" Kotlin")]),t._v(" "),r("p",[t._v("Kotlin 是"),r("a",{attrs:{href:"https://www.kotlincn.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("让开发人员更快乐的一门现代编程语言"),r("OutboundLink")],1),t._v("，由 "),r("a",{attrs:{href:"https://www.jetbrains.com/idea/",target:"_blank",rel:"noopener noreferrer"}},[t._v("IntelliJ IDEA"),r("OutboundLink")],1),t._v(" 的开发公司 "),r("a",{attrs:{href:"https://www.jetbrains.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("JetBrains"),r("OutboundLink")],1),t._v(" 维护，被 Google 推举为 Android 首选编程语言。")]),t._v(" "),r("p",[t._v("使用 Mirai 是一个不错的学习 Kotlin 机会，使用者有兴趣可以在 "),r("a",{attrs:{href:"https://www.kotlincn.net/docs/reference/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方中文文档"),r("OutboundLink")],1),t._v(" 学习 Kotlin。")]),t._v(" "),r("p",[t._v("Java 开发者如果只希望使用 Mirai 而不学习 Kotlin，也请阅读 "),r("RouterLink",{attrs:{to:"/KotlinAndJava.html"}},[t._v("Kotlin 定义对应的 Java 定义")]),t._v("（5 分钟）。")],1),t._v(" "),r("hr"),t._v(" "),r("blockquote",[r("p",[r("RouterLink",{attrs:{to:"/#jvm-平台-mirai-开发"}},[t._v("回到 Mirai 文档索引")])],1)])])}),[],!1,null,null,null);e.default=a.exports}}]);