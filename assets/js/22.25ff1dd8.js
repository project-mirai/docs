(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{760:function(t,n,s){"use strict";s.r(n);var a=s(109),e=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"mirai-console-backend-extensions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mirai-console-backend-extensions"}},[t._v("#")]),t._v(" Mirai Console Backend - Extensions")]),t._v(" "),s("p",[t._v("Mirai Console 拥有灵活的 Extensions API，支持扩展 Console 的一些服务。")]),t._v(" "),s("p",[t._v("Extensions 属于插件开发的进阶内容。")]),t._v(" "),s("h2",{attrs:{id:"扩展"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#扩展"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://github.com/mamoe/mirai-console/tree/master/backend/mirai-console/src/extension/Extension.kt",target:"_blank",rel:"noopener noreferrer"}},[t._v("扩展"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"组件容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件容器"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://github.com/mamoe/mirai-console/tree/master/backend/mirai-console/src/extension/ComponentStorage.kt",target:"_blank",rel:"noopener noreferrer"}},[t._v("组件容器"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("容纳插件注册的 "),s("a",{attrs:{href:"https://github.com/mamoe/mirai-console/tree/master/backend/mirai-console/src/extension/Extension.kt",target:"_blank",rel:"noopener noreferrer"}},[t._v("扩展"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"注册扩展"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注册扩展"}},[t._v("#")]),t._v(" 注册扩展")]),t._v(" "),s("p",[t._v("插件仅能在 "),s("RouterLink",{attrs:{to:"/console/Plugins.html#加载"}},[s("code",[t._v("onLoad")])]),t._v(" 阶段注册扩展。")],1),t._v(" "),s("p",[t._v("示例：")]),t._v(" "),s("div",{staticClass:"language-kotlin line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("object")]),t._v(" MyPlugin "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("KotlinPlugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ... */")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" PluginComponentStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onLoad")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        contributePermissionService "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ... */")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        contributePluginLoader "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ... */")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("contribute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ExtensionPoint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ... */")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("h3",{attrs:{id:"可用扩展"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#可用扩展"}},[t._v("#")]),t._v(" 可用扩展")]),t._v(" "),s("p",[t._v("查看 "),s("a",{attrs:{href:"https://github.com/mamoe/mirai-console/tree/master/backend/mirai-console/src/extensions",target:"_blank",rel:"noopener noreferrer"}},[t._v("extensions"),s("OutboundLink")],1),t._v("。每个文件对应一个扩展。")])])}),[],!1,null,null,null);n.default=e.exports}}]);