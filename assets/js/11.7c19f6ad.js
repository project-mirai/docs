(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{752:function(t,a,s){"use strict";s.r(a);var n=s(109),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"mirai-configuring-projects"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mirai-configuring-projects"}},[t._v("#")]),t._v(" Mirai - Configuring Projects")]),t._v(" "),s("p",[t._v("本文介绍如何在一个 JVM 项目中使用 mirai。")]),t._v(" "),s("p",[t._v("具体项目可参考 "),s("a",{attrs:{href:"https://github.com/project-mirai/mirai-hello-world",target:"_blank",rel:"noopener noreferrer"}},[t._v("mirai-hello-world"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"选择版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选择版本"}},[t._v("#")]),t._v(" 选择版本")]),t._v(" "),s("p",[t._v("有关各类版本的区别，参考 "),s("RouterLink",{attrs:{to:"/Evolution.html#版本规范"}},[t._v("版本规范")]),t._v("。通常建议选择最新稳定版本。")],1),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("版本类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("版本号")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("稳定")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("2.6.4")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("预览")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("-")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("开发")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("a",{attrs:{href:"https://search.maven.org/search?q=net.mamoe%20mirai",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/maven-central/v/net.mamoe/mirai-core-api.svg?label=Maven%20Central",alt:"Version"}}),s("OutboundLink")],1)])])])]),t._v(" "),s("h3",{attrs:{id:"配置项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置项目"}},[t._v("#")]),t._v(" 配置项目")]),t._v(" "),s("p",[t._v("本文提供如下三种配置方法。推荐使用 Gradle 构建。")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#a-%E4%BD%BF%E7%94%A8-gradle"}},[t._v("A. 使用 Gradle")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#b-%E4%BD%BF%E7%94%A8-maven"}},[t._v("B. 使用 Maven")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#c-%E4%B8%8B%E8%BD%BD-jar-%E5%8C%85"}},[t._v("C. 下载 JAR 包")])])]),t._v(" "),s("h2",{attrs:{id:"a-使用-gradle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#a-使用-gradle"}},[t._v("#")]),t._v(" A. 使用 Gradle")]),t._v(" "),s("h3",{attrs:{id:"gradle-kotlin-dsl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gradle-kotlin-dsl"}},[t._v("#")]),t._v(" Gradle Kotlin DSL")]),t._v(" "),s("p",[t._v("在 "),s("code",[t._v("build.gradle.kts")]),t._v(" 添加：")]),t._v(" "),s("div",{staticClass:"language-kotlin line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[t._v("plugins "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("kotlin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jvm"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" version "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.4.32"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 确保添加 Kotlin")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\ndependencies "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("api")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"net.mamoe"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mirai-core"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.6.4"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("p",[s("strong",[t._v("注意，必须添加 Kotlin 插件才能正确获取 mirai 软件包。")])]),t._v(" "),s("blockquote",[s("p",[t._v("依赖配置完成，请选择：")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%E5%88%86%E7%A6%BB-api-%E5%92%8C%E5%AE%9E%E7%8E%B0%E5%8F%AF%E9%80%89"}},[t._v("分离 API 和实现（可选）")])]),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/#jvm-平台-mirai-开发"}},[t._v("回到 Mirai 文档索引")])],1)])]),t._v(" "),s("h3",{attrs:{id:"gradle-groovy-dsl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gradle-groovy-dsl"}},[t._v("#")]),t._v(" Gradle Groovy DSL")]),t._v(" "),s("p",[t._v("在 "),s("code",[t._v("build.gradle")]),t._v(" 添加")]),t._v(" "),s("div",{staticClass:"language-groovy line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-groovy"}},[s("code",[t._v("plugins "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    id "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'org.jetbrains.kotlin.jvm'")]),t._v(" version "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1.4.32'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 确保添加 Kotlin")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\ndependencies "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    implementation "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'net.mamoe:mirai-core:2.6.4'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("blockquote",[s("p",[t._v("依赖配置完成，请选择：")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%E5%88%86%E7%A6%BB-api-%E5%92%8C%E5%AE%9E%E7%8E%B0%E5%8F%AF%E9%80%89"}},[t._v("分离 API 和实现（可选）")])]),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/#jvm-平台-mirai-开发"}},[t._v("回到 Mirai 文档索引")])],1)])]),t._v(" "),s("h3",{attrs:{id:"分离-api-和实现-可选"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分离-api-和实现-可选"}},[t._v("#")]),t._v(" 分离 API 和实现（可选）")]),t._v(" "),s("p",[t._v("mirai 在开发时需要 "),s("code",[t._v("net.mamoe:mirai-core-api")]),t._v(", 在运行时需要 "),s("code",[t._v("net.mamoe:mirai-core")]),t._v("。可以在开发和编译时只依赖 "),s("code",[t._v("mirai-core-api")]),t._v("，会减轻对 IDE 的负担。")]),t._v(" "),s("div",{staticClass:"language-kotlin line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[t._v("dependencies "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" miraiVersion "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.6.4"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("api")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"net.mamoe"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mirai-core-api"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" miraiVersion"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 编译代码使用")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("runtimeOnly")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"net.mamoe"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mirai-core"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" miraiVersion"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 运行时使用")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h2",{attrs:{id:"b-使用-maven"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#b-使用-maven"}},[t._v("#")]),t._v(" B. 使用 Maven")]),t._v(" "),s("p",[t._v("在 "),s("code",[t._v("pom.xml")]),t._v(" 中添加 mirai 依赖：")]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependencies")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("net.mamoe"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("mirai-core-jvm"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("2.6.4"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependencies")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("blockquote",[s("p",[t._v("注意在 Maven，artifactId 要使用带 "),s("code",[t._v("-jvm")]),t._v(" 后缀的")])]),t._v(" "),s("p",[t._v("通常 mirai 可以直接使用。但 mirai 使用的 Kotlin 1.4 可能与你的项目使用的其他库依赖的 Kotlin 版本冲突，Maven 有时候无法正确处理这种冲突。此时请手动添加 Kotlin 标准库依赖。")]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("properties")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("kotlin.version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1.4.32"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("kotlin.version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("properties")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependencies")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.jetbrains.kotlin"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("kotlin-stdlib-jdk8"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("${kotlin.version}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependencies")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("blockquote",[s("p",[t._v("可以在 "),s("a",{attrs:{href:"https://www.kotlincn.net/docs/reference/using-maven.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Kotlin 官方文档"),s("OutboundLink")],1),t._v(" 获取更多有关配置 Kotlin 的信息。")])]),t._v(" "),s("blockquote",[s("p",[t._v("依赖配置完成，"),s("RouterLink",{attrs:{to:"/#jvm-平台-mirai-开发"}},[t._v("回到 Mirai 文档索引")])],1)]),t._v(" "),s("h2",{attrs:{id:"c-下载-jar-包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#c-下载-jar-包"}},[t._v("#")]),t._v(" C. 下载 JAR 包")]),t._v(" "),s("p",[t._v("非常不推荐这种方法，请尽可能使用构建工具。")]),t._v(" "),s("p",[t._v("在 "),s("a",{attrs:{href:"https://repo.maven.apache.org/maven2/net/mamoe/mirai-core-all/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Maven Central"),s("OutboundLink")],1),t._v(" 或 "),s("a",{attrs:{href:"https://maven.aliyun.com/repository/public/net/mamoe/mirai-core-all/",target:"_blank",rel:"noopener noreferrer"}},[t._v("阿里云代理仓库"),s("OutboundLink")],1),t._v(" 下载指定版本的 "),s("code",[t._v("-all.jar")]),t._v(" 文件，即包含 "),s("code",[t._v("mirai-core")]),t._v("，"),s("code",[t._v("mirai-core-api")]),t._v("，"),s("code",[t._v("mirai-core-utils")]),t._v(" 和其他依赖。")]),t._v(" "),s("blockquote",[s("p",[s("RouterLink",{attrs:{to:"/#jvm-平台-mirai-开发"}},[t._v("回到 Mirai 文档索引")])],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);