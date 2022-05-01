(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{400:function(s,a,t){"use strict";t.r(a);var n=t(49),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"mirai-using-snapshots"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mirai-using-snapshots"}},[s._v("#")]),s._v(" Mirai - Using Snapshots")]),s._v(" "),t("p",[s._v("每个 commit 在构建成功后都会发布一个开发测试版本到 mirai 仓库。如有需要，可添加仓库并使用。开发测试版本非常不稳定，仅用于测试某 commit 对一个问题的修复情况，而不建议在生产或开发环境使用。")]),s._v(" "),t("p",[s._v("每个开发测试版本只保留一个月。")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#%E5%9C%A8-maven-%E4%BD%BF%E7%94%A8"}},[s._v("在 Maven 使用")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#%E5%9C%A8-gradle-%E4%BD%BF%E7%94%A8"}},[s._v("在 Gradle 使用")])])]),s._v(" "),t("h2",{attrs:{id:"在-maven-使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在-maven-使用"}},[s._v("#")]),s._v(" 在 Maven 使用")]),s._v(" "),t("h3",{attrs:{id:"_1-添加-maven-仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-添加-maven-仓库"}},[s._v("#")]),s._v(" 1. 添加 Maven 仓库")]),s._v(" "),t("div",{staticClass:"language-xml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("repositories")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("repository")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("id")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("miraisnapshots"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("id")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("mirai snapshots"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("url")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("https://repo.mirai.mamoe.net/snapshots"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("url")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("repository")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("repositories")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h3",{attrs:{id:"_2-修改依赖版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-修改依赖版本"}},[s._v("#")]),s._v(" 2. 修改依赖版本")]),s._v(" "),t("ol",[t("li",[s._v("选择需要测试的 commit, 找到其 revision id (即 SHA), 取前 8 位, 如 "),t("code",[s._v("3cb39c4")]),s._v(".")]),s._v(" "),t("li",[s._v("在该 commit 所属分支的 "),t("code",[s._v("buildSrc/src/main/kotlin/Versions.kt")]),s._v(" 确认 mirai 主版本号如 "),t("code",[s._v("2.8.0-M1")]),s._v(".")]),s._v(" "),t("li",[s._v("得到开发测试版本号 "),t("code",[s._v("2.8.0-M1-dev-3cb39c4")]),s._v(".")])]),s._v(" "),t("div",{staticClass:"language-xml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("dependencies")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("dependency")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("groupId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("net.mamoe"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("groupId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("mirai-core-jvm"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("2.8.0-M1-dev-3cb39c4"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("dependency")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("dependencies")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h2",{attrs:{id:"在-gradle-使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在-gradle-使用"}},[s._v("#")]),s._v(" 在 Gradle 使用")]),s._v(" "),t("h3",{attrs:{id:"_1-添加-maven-仓库-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-添加-maven-仓库-2"}},[s._v("#")]),s._v(" 1. 添加 Maven 仓库")]),s._v(" "),t("p",[s._v("build.gradle(.kts)")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('repositories {\n   maven("https://repo.mirai.mamoe.net/snapshots") \n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"_2-修改依赖版本-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-修改依赖版本-2"}},[s._v("#")]),s._v(" 2. 修改依赖版本")]),s._v(" "),t("ol",[t("li",[s._v("选择需要测试的 commit, 找到其 revision id (即 SHA), 取前 8 位, 如 "),t("code",[s._v("3cb39c4")]),s._v(".")]),s._v(" "),t("li",[s._v("在该 commit 所属分支的 "),t("code",[s._v("buildSrc/src/main/kotlin/Versions.kt")]),s._v(" 确认 mirai 主版本号如 "),t("code",[s._v("2.8.0-M1")]),s._v(".")]),s._v(" "),t("li",[s._v("得到开发测试版本号 "),t("code",[s._v("2.8.0-M1-dev-3cb39c4")]),s._v(".")])]),s._v(" "),t("p",[s._v("build.gradle(.kts)")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('dependencies {\n    implementation("net.mamoe:mirai-core:2.8.0-M1-dev-3cb39c4")\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"使用测试版本-mirai-console-gradle-插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用测试版本-mirai-console-gradle-插件"}},[s._v("#")]),s._v(" 使用测试版本 Mirai Console Gradle 插件")]),s._v(" "),t("p",[s._v("settings.gradle(.kts)")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('pluginManagement {\n    dependencies {\n        gradlePluginPortal()\n        maven("https://repo.mirai.mamoe.net/snapshots")\n    }\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("plugin.gradle(.kts)")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('plugins {\n    // ...\n    id("net.mamoe.mirai-console") version "2.8.0-M1-dev-3cb39c4"\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);