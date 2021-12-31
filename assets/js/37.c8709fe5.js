(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{408:function(a,s,n){"use strict";n.r(s);var t=n(49),e=Object(t.a)({},(function(){var a=this,s=a.$createElement,n=a._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h1",{attrs:{id:"mirai-console-run"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mirai-console-run"}},[a._v("#")]),a._v(" Mirai Console - Run")]),a._v(" "),n("p",[a._v("Mirai Console 可以独立启动，也可以被嵌入到某个应用中。")]),a._v(" "),n("h2",{attrs:{id:"使用工具自动独立启动"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用工具自动独立启动"}},[a._v("#")]),a._v(" 使用工具自动独立启动")]),a._v(" "),n("p",[a._v("该部分文档已经转移到 "),n("RouterLink",{attrs:{to:"/docs/UserManual.html"}},[a._v("用户手册")]),a._v("。")],1),a._v(" "),n("h2",{attrs:{id:"嵌入应用启动-实验性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#嵌入应用启动-实验性"}},[a._v("#")]),a._v(" 嵌入应用启动（实验性）")]),a._v(" "),n("p",[a._v("将 Mirai Console 作为一个依赖嵌入一个 JVM 应用启动，开发者主动加载插件。尤其适合在开发时启动真实环境的测试。")]),a._v(" "),n("h3",{attrs:{id:"环境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#环境"}},[a._v("#")]),a._v(" 环境")]),a._v(" "),n("ul",[n("li",[a._v("JDK 1.8+ / Android SDK 26+ (Android 8+)")]),a._v(" "),n("li",[a._v("Kotlin 1.4+")])]),a._v(" "),n("h3",{attrs:{id:"添加依赖"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#添加依赖"}},[a._v("#")]),a._v(" 添加依赖")]),a._v(" "),n("p",[n("RouterLink",{attrs:{to:"/console/ConfiguringProjects.html#选择版本"}},[a._v("选择版本")])],1),a._v(" "),n("p",[n("code",[a._v("build.gradle.kts")]),a._v(":")]),a._v(" "),n("div",{staticClass:"language-kotlin line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-kotlin"}},[n("code",[a._v("dependencies "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("api")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"net.mamoe:mirai-console-terminal:2.0.0"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 自行替换版本")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("api")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"net.mamoe:mirai-core:2.0.0"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br")])]),n("h3",{attrs:{id:"启动-terminal-前端"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#启动-terminal-前端"}},[a._v("#")]),a._v(" 启动 Terminal 前端")]),a._v(" "),n("p",[a._v("一行启动：")]),a._v(" "),n("div",{staticClass:"language-kotlin line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-kotlin"}},[n("code",[a._v("MiraiConsoleTerminalLoader"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("startAsDaemon")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("p",[a._v("注意, Mirai Console 将会以 '守护进程' 形式启动，不会阻止主线程退出。")]),a._v(" "),n("h3",{attrs:{id:"从内存加载-jvm-插件-实验性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#从内存加载-jvm-插件-实验性"}},[a._v("#")]),a._v(" 从内存加载 JVM 插件（实验性）")]),a._v(" "),n("p",[a._v("在嵌入使用时，插件可以直接加载：")]),a._v(" "),n("div",{staticClass:"language-kotlin line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-kotlin"}},[n("code",[a._v("MiraiConsoleTerminalLoader"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("startAsDaemon")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 先启动 Mirai Console")]),a._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Kotlin")]),a._v("\nPlugin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("load")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 扩展函数")]),a._v("\nPlugin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("enable")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 扩展函数 ")]),a._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Java")]),a._v("\nPluginManager"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("INSTANCE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("loadPlugin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("Plugin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("INSTANCE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nPluginManager"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("INSTANCE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("enablePlugin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("Plugin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("INSTANCE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br")])]),n("p",[a._v("但注意：这种方法目前是实验性的——一些特定的功能如注册扩展可能不会正常工作。")]),a._v(" "),n("h2",{attrs:{id:"手动配置独立启动"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#手动配置独立启动"}},[a._v("#")]),a._v(" 手动配置独立启动")]),a._v(" "),n("p",[a._v("强烈建议使用自动启动工具，若无法使用，可以参考如下手动启动方式。")]),a._v(" "),n("h3",{attrs:{id:"环境-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#环境-2"}},[a._v("#")]),a._v(" 环境")]),a._v(" "),n("ul",[n("li",[a._v("JRE 8+ / JDK 8+")])]),a._v(" "),n("h3",{attrs:{id:"准备文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#准备文件"}},[a._v("#")]),a._v(" 准备文件")]),a._v(" "),n("p",[a._v("要启动 Mirai Console，你需要：")]),a._v(" "),n("ul",[n("li",[a._v("mirai-core")]),a._v(" "),n("li",[a._v("mirai-console 后端")]),a._v(" "),n("li",[a._v("mirai-console 任一前端")]),a._v(" "),n("li",[a._v("相关依赖")])]),a._v(" "),n("p",[a._v("只有 mirai-console 前端才有入口点 "),n("code",[a._v("main")]),a._v(" 方法。目前只有一个 terminal 前端可用。")]),a._v(" "),n("h4",{attrs:{id:"从-jcenter-下载模块"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#从-jcenter-下载模块"}},[a._v("#")]),a._v(" 从 JCenter 下载模块")]),a._v(" "),n("ul",[n("li",[a._v("mirai-core 会提供 "),n("a",{attrs:{href:"https://repo.maven.apache.org/maven2/net/mamoe/mirai-core-all/",target:"_blank",rel:"noopener noreferrer"}},[a._v("mirai-core-all"),n("OutboundLink")],1)]),a._v(" "),n("li",[a._v("mirai-console 与其各个模块都会提供 "),n("code",[a._v("-all")]),a._v(" 的 Shadowed 构建")])]),a._v(" "),n("div",{staticClass:"language-shell script line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 注: 自行更换对应版本号")]),a._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Download mirai-core-all")]),a._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -L https://maven.aliyun.com/repository/public/net/mamoe/mirai-core-all/1.3.3/mirai-core-all-1.3.3-all.jar -o mirai-core-all-1.3.3.jar\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Download mirai-console")]),a._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -L https://maven.aliyun.com/repository/public/net/mamoe/mirai-console/1.0.0/mirai-console-1.0.0-all.jar -o mirai-console-1.0.0.jar\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Download mirai-console-terminal")]),a._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -L https://maven.aliyun.com/repository/public/net/mamoe/mirai-console-terminal/1.0.0/mirai-console-terminal-1.0.0-all.jar -o mirai-console-terminal-1.0.0.jar\n\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br")])]),n("h3",{attrs:{id:"启动-mirai-console-terminal-前端"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#启动-mirai-console-terminal-前端"}},[a._v("#")]),a._v(" 启动 mirai-console-terminal 前端")]),a._v(" "),n("ol",[n("li",[n("p",[a._v("下载如下三个模块的最新版本文件并放到一个文件夹内 (如 "),n("code",[a._v("libs")]),a._v(")(详见 "),n("a",{attrs:{href:"#%E4%BB%8E-jcenter-%E4%B8%8B%E8%BD%BD%E6%A8%A1%E5%9D%97"}},[a._v("下载模块")]),a._v(")：")]),a._v(" "),n("ul",[n("li",[a._v("mirai-core-all")]),a._v(" "),n("li",[a._v("mirai-console")]),a._v(" "),n("li",[a._v("mirai-console-terminal")])])]),a._v(" "),n("li",[n("p",[a._v("创建一个新的文件, 名为 "),n("code",[a._v("start-mirai-console.bat")]),a._v("/"),n("code",[a._v("start-mirai-console.ps1")]),a._v("/"),n("code",[a._v("start-mirai-console.sh")])])])]),a._v(" "),n("p",[a._v("Windows CMD:")]),a._v(" "),n("div",{staticClass:"language-shell script line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[a._v("@echo off\ntitle Mirai Console\njava -cp "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"./libs/*"')]),a._v(" net.mamoe.mirai.console.terminal.MiraiConsoleTerminalLoader %*\npause\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br")])]),n("p",[a._v("Windows PowerShell:")]),a._v(" "),n("div",{staticClass:"language-shell script line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$Host")]),a._v(".UI.RawUI.WindowTitle "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Mirai Console"')]),a._v("\njava -cp "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"./libs/*"')]),a._v(" net.mamoe.mirai.console.terminal.MiraiConsoleTerminalLoader "),n("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$args")]),a._v("\npause\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br")])]),n("p",[a._v("Linux:")]),a._v(" "),n("div",{staticClass:"language-shell script line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token shebang important"}},[a._v("#!/usr/bin/env bash")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" -e "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v("'\\033]2;Mirai Console\\007'")]),a._v("\njava -cp "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"./libs/*"')]),a._v(" net.mamoe.mirai.console.terminal.MiraiConsoleTerminalLoader "),n("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$*")]),a._v("\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br")])]),n("p",[a._v("然后就可以开始使用 mirai-console 了。")]),a._v(" "),n("h4",{attrs:{id:"mirai-console-terminal-前端参数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mirai-console-terminal-前端参数"}},[a._v("#")]),a._v(" mirai-console-terminal 前端参数")]),a._v(" "),n("p",[a._v("使用 "),n("code",[a._v("./start-mirai-console --help")]),a._v(" 查看 mirai-console-terminal 支持的启动参数。")])])}),[],!1,null,null,null);s.default=e.exports}}]);