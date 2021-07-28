(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{769:function(e,t,s){"use strict";s.r(t);var i=s(109),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"mirai-console-contributing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mirai-console-contributing"}},[e._v("#")]),e._v(" Mirai Console - Contributing")]),e._v(" "),s("p",[e._v("感谢你来到这里，感谢你对 Mirai Console 做的一切贡献。")]),e._v(" "),s("h2",{attrs:{id:"开发-mirai-console"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发-mirai-console"}},[e._v("#")]),e._v(" 开发 Mirai Console")]),e._v(" "),s("h3",{attrs:{id:"模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模块"}},[e._v("#")]),e._v(" 模块")]),e._v(" "),s("p",[e._v("Mirai Console 项目由四个模块组成：后端，前端，Gradle 插件，Intellij 插件。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("/\n|--- backend                     后端\n|  |--- codegen                     后端代码生成工具\n|  `--- mirai-console               后端主模块, 发布为 net.mamoe:mirai-console\n|--- buildSrc                    项目构建\n|--- frontend                    前端\n|  `--- mirai-console-terminal      终端前端，发布为 net.mamoe:mirai-console-terminal\n`--- tools                       开发工具\n   |--- compiler-common             编译器通用模块\n   |--- gradle-plugin               Gradle 插件，发布为 net.mamoe.mirai-console\n   `--- intellij-plugin             IntelliJ 平台 IDE 插件，发布为 Mirai Console\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br")])]),s("p",[e._v("请前往各模块内的 README.md 查看详细说明。")]),e._v(" "),s("h3",{attrs:{id:"构建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构建"}},[e._v("#")]),e._v(" 构建")]),e._v(" "),s("div",{staticClass:"language-shell script line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("./gradlew build\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("首次加载和构建 mirai-console 项目可能要花费数小时时间。")]),e._v(" "),s("h2",{attrs:{id:"贡献代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#贡献代码"}},[e._v("#")]),e._v(" 贡献代码")]),e._v(" "),s("h3",{attrs:{id:"代码风格"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码风格"}},[e._v("#")]),e._v(" 代码风格")]),e._v(" "),s("ul",[s("li",[e._v("请优先使用 Kotlin")]),e._v(" "),s("li",[e._v("请遵守 "),s("a",{attrs:{href:"https://www.kotlincn.net/docs/reference/coding-conventions.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kotlin 官方代码风格"),s("OutboundLink")],1)])]),e._v(" "),s("h2",{attrs:{id:"发布版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发布版本"}},[e._v("#")]),e._v(" 发布版本")]),e._v(" "),s("p",[e._v("（以下内容针对拥有 Mirai Console write 权限的项目成员）")]),e._v(" "),s("p",[e._v("若你要发布一个 Mirai Console dev release：")]),e._v(" "),s("ol",[s("li",[e._v("更新 buildSrc/Versions.kt 中 "),s("code",[e._v("project")]),e._v(" 版本号为目标版本；")]),e._v(" "),s("li",[e._v("本地执行 "),s("code",[e._v("./gradlew fillBuildConstants")]),e._v("；")]),e._v(" "),s("li",[e._v("Push 第 1，2 步的修改为同一个 commit，commit 备注为版本号名称，如 "),s("code",[e._v("1.0.1-dev-1")]),e._v("；")]),e._v(" "),s("li",[e._v("添加 Git 版本号 tag，格式为 "),s("code",[e._v("1.0.1-dev-1")]),e._v("（不带 "),s("code",[e._v("v")]),e._v("）；")]),e._v(" "),s("li",[s("code",[e._v("git push --tags")]),e._v(" 推送 tag 更新，GitHub Actions 将会检测到 tag 更新并执行 JCenter 发布。")])]),e._v(" "),s("p",[e._v("若你要发布一个 Mirai Console 稳定版 release，请按顺序进行如下检查：")]),e._v(" "),s("ol",[s("li",[e._v("在 GitHub "),s("a",{attrs:{href:"https://github.com/mamoe/mirai-console/milestones",target:"_blank",rel:"noopener noreferrer"}},[e._v("milestones"),s("OutboundLink")],1),e._v(" 确认目标版本的工作已经处理完毕；")]),e._v(" "),s("li",[e._v("Close milestone；")]),e._v(" "),s("li",[e._v("更新 buildSrc/Versions.kt 中 "),s("code",[e._v("project")]),e._v(" 版本号为目标版本；")]),e._v(" "),s("li",[e._v("在 "),s("RouterLink",{attrs:{to:"/console/ConfiguringProjects.html#选择版本"}},[e._v("ConfiguringProjects")]),e._v(" 更新稳定版本号；")],1),e._v(" "),s("li",[e._v("本地执行 "),s("code",[e._v("./gradlew fillBuildConstants")]),e._v("；")]),e._v(" "),s("li",[e._v("Push 前几步的修改为同一个 commit，commit 备注为版本号名称，如 "),s("code",[e._v("1.1.0")]),e._v("；")]),e._v(" "),s("li",[e._v("在 GitHub release 根据 Git commit 记录编写更新记录：\n"),s("ul",[s("li",[e._v("描述所有来自社区的 PR 记录；")]),e._v(" "),s("li",[e._v("完整列举公开 API 的任何变动，简要描述或省略内部变动；")]),e._v(" "),s("li",[e._v("为更改按 “后端”，“前端”，“IDE 插件”，“Gradle 插件” 分类；")])])]),e._v(" "),s("li",[e._v("点击 "),s("code",[e._v("Publish")]),e._v("。GitHub Actions 将会检测到 tag 更新并执行 JCenter 发布。")])])])}),[],!1,null,null,null);t.default=a.exports}}]);