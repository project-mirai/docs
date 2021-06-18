(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{757:function(t,v,e){"use strict";e.r(v);var _=e(109),a=Object(_.a)({},(function(){var t=this,v=t.$createElement,e=t._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"mirai-evolution"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mirai-evolution"}},[t._v("#")]),t._v(" Mirai - Evolution")]),t._v(" "),e("h3",{attrs:{id:"mirai-演进"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mirai-演进"}},[t._v("#")]),t._v(" Mirai 演进")]),t._v(" "),e("p",[t._v("Mirai 是不断前进的库，目标是提供稳定且高效的 API。"),e("br"),t._v("\n维护者会严谨地推进每一项修改，并提供迁移周期（至少 2 个次版本）。")]),t._v(" "),e("h3",{attrs:{id:"版本规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#版本规范"}},[t._v("#")]),t._v(" 版本规范")]),t._v(" "),e("p",[t._v("Mirai 的版本号遵循 "),e("a",{attrs:{href:"https://semver.org/lang/zh-CN/#spec-item-9",target:"_blank",rel:"noopener noreferrer"}},[t._v("语义化版本 2.0.0"),e("OutboundLink")],1),t._v(" 规范。")]),t._v(" "),e("p",[t._v("在日常开发中, Mirai 会以 "),e("code",[t._v("-dev-1")]),t._v("，"),e("code",[t._v("-dev-2")]),t._v(" 等版本后缀发布开发预览版本。这些版本仅用于兼容性测试等目的，无稳定性保证。")]),t._v(" "),e("p",[t._v("在大版本开发过程中，Mirai 会以 "),e("code",[t._v("-M1")]),t._v(", "),e("code",[t._v("-M2")]),t._v(" 等版本后缀发布里程碑预览版本。代表一系列功能的完成，但还不稳定。"),e("br"),t._v("\n这些版本里新增的 API 仍可能还会在下一个 Milestone 版本变化，因此请按需使用。")]),t._v(" "),e("p",[t._v("在大版本即将发布前，Mirai 会以 "),e("code",[t._v("-RC")]),t._v(" 版本后缀发布最终的预览版本。"),e("br"),t._v(" "),e("code",[t._v("RC")]),t._v(" 表示新版本 API 已经确定，离稳定版发布只差最后的一些内部优化或 bug 修复。")]),t._v(" "),e("h3",{attrs:{id:"版本选择"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#版本选择"}},[t._v("#")]),t._v(" 版本选择")]),t._v(" "),e("p",[e("strong",[t._v("稳定性")]),t._v("：稳定 ("),e("code",[t._v("x.y.z")]),t._v(") > 发布预览 ("),e("code",[t._v("-RC")]),t._v(") > 里程碑预览 ("),e("code",[t._v("-M")]),t._v(") > 开发 ("),e("code",[t._v("-dev")]),t._v(")。")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("目的")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("推荐至少更新到版本")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("生产环境")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("x.y.z")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("希望尽早体验稳定新特性")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("-RC")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("无论如何都想体验新特性")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("-M")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("为 Mirai 提交 PR")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("-dev")])])])])]),t._v(" "),e("h2",{attrs:{id:"更新兼容性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更新兼容性"}},[t._v("#")]),t._v(" 更新兼容性")]),t._v(" "),e("p",[t._v("对于 "),e("code",[t._v("x.y.z")]),t._v(" 版本号:")]),t._v(" "),e("ul",[e("li",[t._v("当 "),e("code",[t._v("z")]),t._v(" 增加时，只会有 bug 修复，和必要的新函数添加（为了解决某一个问题），不会有破坏性变化。")]),t._v(" "),e("li",[t._v("当 "),e("code",[t._v("y")]),t._v(" 增加时，可能有新 API 的引入，和旧 API 的弃用。但这些弃用会经过一个弃用周期后才被删除（隐藏）。向下兼容得到保证。")]),t._v(" "),e("li",[t._v("当 "),e("code",[t._v("x")]),t._v(" 增加时，任何 API 都可能会有变化。无兼容性保证。")])]),t._v(" "),e("h2",{attrs:{id:"弃用周期"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#弃用周期"}},[t._v("#")]),t._v(" 弃用周期")]),t._v(" "),e("p",[t._v("一个计划被删除的 API，将会在下一个次版本开始经历弃用周期。")]),t._v(" "),e("p",[t._v("如一个 API 在 "),e("code",[t._v("1.1.0")]),t._v(" 起被弃用，它首先会是 "),e("code",[t._v("WARNING")]),t._v(" (使用时会得到一个编译警告）弃用级别。"),e("br"),t._v("\n在 "),e("code",[t._v("1.2.0")]),t._v(" 上升为 "),e("code",[t._v("ERROR")]),t._v("（使用时会得到一个编译错误）；"),e("br"),t._v("\n在 "),e("code",[t._v("1.3.0")]),t._v(" 上升为 "),e("code",[t._v("HIDDEN")]),t._v("（使用者无法看到这些 API)。")]),t._v(" "),e("p",[e("code",[t._v("HIDDEN")]),t._v(" 的 API 仍然会保留在代码中并正常编译，以提供二进制兼容性，直到下一个主版本更新。")]),t._v(" "),e("hr"),t._v(" "),e("blockquote",[e("p",[e("RouterLink",{attrs:{to:"/#jvm-平台-mirai-开发"}},[t._v("回到 Mirai 文档索引")])],1)])])}),[],!1,null,null,null);v.default=a.exports}}]);