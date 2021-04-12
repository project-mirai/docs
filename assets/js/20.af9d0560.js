(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{773:function(t,e,v){"use strict";v.r(e);var _=v(109),a=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"mirai-console-appendix"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mirai-console-appendix"}},[t._v("#")]),t._v(" Mirai Console - Appendix")]),t._v(" "),v("h3",{attrs:{id:"mirai-console-演进"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mirai-console-演进"}},[t._v("#")]),t._v(" Mirai Console 演进")]),t._v(" "),v("p",[t._v("Mirai Console 是不断前进的框架，将来必定会发生 API 弃用和重构。"),v("br"),t._v("\n维护者会严谨地推进每一项修改，并提供迁移周期（至少 2 个次版本）。")]),t._v(" "),v("h4",{attrs:{id:"版本规范"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#版本规范"}},[t._v("#")]),t._v(" 版本规范")]),t._v(" "),v("p",[t._v("Mirai Console 的版本号遵循 "),v("a",{attrs:{href:"https://semver.org/lang/zh-CN/#spec-item-9",target:"_blank",rel:"noopener noreferrer"}},[t._v("语义化版本 2.0.0"),v("OutboundLink")],1),t._v(" 规范。")]),t._v(" "),v("p",[t._v("在日常开发中, Mirai Console 会以 "),v("code",[t._v("-dev-1")]),t._v("，"),v("code",[t._v("-dev-2")]),t._v(" 等版本后缀发布开发预览版本。这些版本仅用于兼容性测试等目的，无稳定性保证。")]),t._v(" "),v("p",[t._v("在大版本开发过程中，Mirai Console 会以 "),v("code",[t._v("-M1")]),t._v(", "),v("code",[t._v("-M2")]),t._v(" 等版本后缀发布里程碑预览版本。代表一系列功能的完成，但还不稳定。"),v("br"),t._v("\n这些版本里新增的 API 仍可能还会在下一个 Milestone 版本变化，因此请按需使用。")]),t._v(" "),v("p",[t._v("在大版本即将发布前，Mirai Console 会以 "),v("code",[t._v("-RC")]),t._v(" 版本后缀发布最终的预览版本。"),v("br"),t._v(" "),v("code",[t._v("RC")]),t._v(" 表示新版本 API 已经确定，离稳定版发布只差最后的一些内部优化或 bug 修复。")]),t._v(" "),v("h4",{attrs:{id:"版本选择"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#版本选择"}},[t._v("#")]),t._v(" 版本选择")]),t._v(" "),v("p",[v("strong",[t._v("稳定性")]),t._v("：稳定 ("),v("code",[t._v("x.y.z")]),t._v(") > 发布预览 ("),v("code",[t._v("-RC")]),t._v(") > 里程碑预览 ("),v("code",[t._v("-M")]),t._v(") > 开发 ("),v("code",[t._v("-dev")]),t._v(")。")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("目的")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("推荐至少更新到版本")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("生产环境")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[v("code",[t._v("x.y.z")])])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("希望尽早体验稳定新特性的插件作者")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[v("code",[t._v("-RC")])])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("无论如何都想体验新特性的插件作者")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[v("code",[t._v("-M")])])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("前端实现者, 底层插件作者")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[v("code",[t._v("-M")])])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("为 Mirai Console 提交 PR")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[v("code",[t._v("-dev")])])])])]),t._v(" "),v("p",[t._v("其中，‘底层插件’ 表示提供扩展等的插件。如权限系统，其他语言插件加载器等。")]),t._v(" "),v("h4",{attrs:{id:"更新兼容性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#更新兼容性"}},[t._v("#")]),t._v(" 更新兼容性")]),t._v(" "),v("p",[t._v("对于 "),v("code",[t._v("x.y.z")]),t._v(" 版本号:")]),t._v(" "),v("ul",[v("li",[t._v("当 "),v("code",[t._v("z")]),t._v(" 增加时，只会有 bug 修复，和必要的新函数添加（为了解决某一个问题），不会有破坏性变化。")]),t._v(" "),v("li",[t._v("当 "),v("code",[t._v("y")]),t._v(" 增加时，可能有新 API 的引入，和旧 API 的弃用。但这些弃用会经过一个弃用周期后才被删除（隐藏）。向下兼容得到保证。")]),t._v(" "),v("li",[t._v("当 "),v("code",[t._v("x")]),t._v(" 增加时，任何 API 都可能会有变化。无兼容性保证。")])]),t._v(" "),v("h4",{attrs:{id:"弃用周期"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#弃用周期"}},[t._v("#")]),t._v(" 弃用周期")]),t._v(" "),v("p",[t._v("一个计划被删除的 API，将会在下一个次版本开始经历弃用周期。")]),t._v(" "),v("p",[t._v("如一个 API 在 "),v("code",[t._v("1.1.0")]),t._v(" 起被弃用，它首先会是 "),v("code",[t._v("WARNING")]),t._v(" (使用时会得到一个编译警告）弃用级别。"),v("br"),t._v("\n在 "),v("code",[t._v("1.2.0")]),t._v(" 上升为 "),v("code",[t._v("ERROR")]),t._v("（使用时会得到一个编译错误）；"),v("br"),t._v("\n在 "),v("code",[t._v("1.3.0")]),t._v(" 上升为 "),v("code",[t._v("HIDDEN")]),t._v("（使用者无法看到这些 API)。")]),t._v(" "),v("p",[v("code",[t._v("HIDDEN")]),t._v(" 的 API 仍然会保留在代码中并正常编译，以提供二进制兼容性，直到下一个主版本更新。")])])}),[],!1,null,null,null);e.default=a.exports}}]);