(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{770:function(t,e,r){"use strict";r.r(e);var s=r(109),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"mirai-console-backend-permissions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mirai-console-backend-permissions"}},[t._v("#")]),t._v(" Mirai Console Backend - Permissions")]),t._v(" "),r("p",[t._v("Mirai Console 权限系统。")]),t._v(" "),r("blockquote",[r("p",[t._v("优先使用 Mirai Console 权限系统管理权限是最好的选择")])]),t._v(" "),r("h2",{attrs:{id:"权限"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#权限"}},[t._v("#")]),t._v(" 权限")]),t._v(" "),r("p",[t._v("每个权限都由 "),r("a",{attrs:{href:"https://github.com/mamoe/mirai-console/tree/master/backend/mirai-console/src/permission/Permission.kt",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("Permission")]),r("OutboundLink")],1),t._v(" 对象表示。")]),t._v(" "),r("p",[t._v("一个 "),r("a",{attrs:{href:"https://github.com/mamoe/mirai-console/tree/master/backend/mirai-console/src/permission/Permission.kt",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("Permission")]),r("OutboundLink")],1),t._v(" 拥有这些信息：")]),t._v(" "),r("div",{staticClass:"language-kotlin line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-kotlin"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" Permission "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" id"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" PermissionId "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 唯一识别 ID")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" description"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 描述信息")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" parent"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Permission "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 父权限")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br"),r("span",{staticClass:"line-number"},[t._v("4")]),r("br"),r("span",{staticClass:"line-number"},[t._v("5")]),r("br")])]),r("p",[t._v("「权限」表示的意义是 “做一项工作的能力”。如 “执行指令 /stop”，“操作数据库” 都能叫作权限。")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/mamoe/mirai-console/tree/master/backend/mirai-console/src/permission/Permission.kt",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("Permission")]),r("OutboundLink")],1),t._v(" 对象由 Console 内置或者由特定权限插件实现。其他插件不能实现 "),r("a",{attrs:{href:"https://github.com/mamoe/mirai-console/tree/master/backend/mirai-console/src/permission/Permission.kt",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("Permission")]),r("OutboundLink")],1),t._v(" 接口，只能从 "),r("code",[t._v("PermissionService")]),t._v(" 注册并获取。")]),t._v(" "),r("h3",{attrs:{id:"权限-id"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#权限-id"}},[t._v("#")]),t._v(" 权限 ID")]),t._v(" "),r("div",{staticClass:"language-kotlin line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-kotlin"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("data")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("PermissionId")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" namespace"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 命名空间")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" name"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 名称")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br"),r("span",{staticClass:"line-number"},[t._v("4")]),r("br")])]),r("p",[r("a",{attrs:{href:"https://github.com/mamoe/mirai-console/tree/master/backend/mirai-console/src/permission/PermissionId.kt",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("PermissionId")]),r("OutboundLink")],1),t._v(" 是 "),r("a",{attrs:{href:"https://github.com/mamoe/mirai-console/tree/master/backend/mirai-console/src/permission/Permission.kt",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("Permission")]),r("OutboundLink")],1),t._v(" 的唯一标识符。知道 "),r("a",{attrs:{href:"https://github.com/mamoe/mirai-console/tree/master/backend/mirai-console/src/permission/PermissionId.kt",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("PermissionId")]),r("OutboundLink")],1),t._v(" 就可以获取到对应的 "),r("a",{attrs:{href:"https://github.com/mamoe/mirai-console/tree/master/backend/mirai-console/src/permission/Permission.kt",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("Permission")]),r("OutboundLink")],1),t._v("。")]),t._v(" "),r("p",[t._v("字符串表示为 "),r("code",[t._v("$namespace:$name")]),t._v("，如 "),r("code",[t._v("console:command.stop")]),t._v(", "),r("code",[t._v("*:*")])]),t._v(" "),r("blockquote",[r("p",[t._v("一般情况下使用位于插件对象("),r("code",[t._v("JvmPlugin")]),t._v(") 的 "),r("code",[t._v("permissionId")]),t._v(" 为插件分配一个 "),r("a",{attrs:{href:"https://github.com/mamoe/mirai-console/tree/master/backend/mirai-console/src/permission/PermissionId.kt",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("PermissionId")]),r("OutboundLink")],1)])]),t._v(" "),r("h4",{attrs:{id:"命名空间"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#命名空间"}},[t._v("#")]),t._v(" 命名空间")]),t._v(" "),r("p",[t._v("命名空间（"),r("code",[t._v("namespace")]),t._v("）用于限定权限的创建者，避免冲突。")]),t._v(" "),r("p",[t._v("一些常见命名空间：")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"left"}},[t._v("用途")]),t._v(" "),r("th",{staticStyle:{"text-align":"left"}},[t._v("命名空间")])])]),t._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("根权限")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("code",[t._v('"*"')])])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("Console 内置")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("code",[t._v('"console"')])])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("ID 为 A 的插件")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("code",[t._v('"A"')])])])])]),t._v(" "),r("h4",{attrs:{id:"名称"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#名称"}},[t._v("#")]),t._v(" 名称")]),t._v(" "),r("p",[t._v("名称则表示特定的含义。如一个指令，某一项操作等。")]),t._v(" "),r("p",[t._v("一些常见名称：")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"left"}},[t._v("用途")]),t._v(" "),r("th",{staticStyle:{"text-align":"left"}},[t._v("名称")])])]),t._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("根权限")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("code",[t._v('"*"')])])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("Console 内置的名为 A 的指令")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("code",[t._v('"command.A"')])])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("ID 为 A 的插件的名为 B 的指令")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("code",[t._v('"command.B"')])])])])]),t._v(" "),r("h4",{attrs:{id:"根权限"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#根权限"}},[t._v("#")]),t._v(" 根权限")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/mamoe/mirai-console/tree/master/backend/mirai-console/src/permission/Permission.kt#L82",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("RootPermission")]),r("OutboundLink")],1),t._v(" 是所有权限的父权限。其 ID 为 "),r("code",[t._v("*:*")])]),t._v(" "),r("blockquote",[r("p",[t._v("如果 "),r("a",{attrs:{href:"https://github.com/mamoe/mirai-console/tree/master/backend/mirai-console/src/permission/Permittee.kt",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("Permittee")]),r("OutboundLink")],1),t._v(" (见下文) 拥有根权限, 相当于 "),r("a",{attrs:{href:"https://github.com/mamoe/mirai-console/tree/master/backend/mirai-console/src/permission/Permittee.kt",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("Permittee")]),r("OutboundLink")],1),t._v(" 拥有全部权限 (内置实现)")])]),t._v(" "),r("h2",{attrs:{id:"被许可人"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#被许可人"}},[t._v("#")]),t._v(" 被许可人")]),t._v(" "),r("div",{staticClass:"language-kotlin line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-kotlin"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" Permittee "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" permitteeId"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" PermitteeId\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br")])]),r("p",[r("a",{attrs:{href:"https://github.com/mamoe/mirai-console/tree/master/backend/mirai-console/src/permission/Permittee.kt",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("Permittee")]),r("OutboundLink")],1),t._v(" 表示一个可被赋予权限的对象，即 '被许可人'。")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/mamoe/mirai-console/tree/master/backend/mirai-console/src/command/CommandSender.kt",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("CommandSender")]),r("OutboundLink")],1),t._v(" 实现 "),r("a",{attrs:{href:"https://github.com/mamoe/mirai-console/tree/master/backend/mirai-console/src/permission/Permittee.kt",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("Permittee")]),r("OutboundLink")],1),t._v("。")]),t._v(" "),r("p",[t._v("被许可人自身不持有拥有的权限列表，而是拥有 "),r("a",{attrs:{href:"https://github.com/mamoe/mirai-console/tree/master/backend/mirai-console/src/permission/PermitteeId.kt",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("PermitteeId")]),r("OutboundLink")],1),t._v("，标识自己的身份，供 "),r("a",{attrs:{href:"https://github.com/mamoe/mirai-console/tree/master/backend/mirai-console/src/permission/PermissionService.kt",target:"_blank",rel:"noopener noreferrer"}},[t._v("权限服务"),r("OutboundLink")],1),t._v(" 处理。")]),t._v(" "),r("p",[r("strong",[t._v("注意")]),t._v("：请不要自主实现 "),r("a",{attrs:{href:"https://github.com/mamoe/mirai-console/tree/master/backend/mirai-console/src/permission/Permittee.kt",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("Permittee")]),r("OutboundLink")],1),t._v("。")]),t._v(" "),r("h3",{attrs:{id:"被许可人-id"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#被许可人-id"}},[t._v("#")]),t._v(" 被许可人 ID")]),t._v(" "),r("div",{staticClass:"language-kotlin line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-kotlin"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" PermitteeId "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" directParents"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Array"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("out")]),t._v(" PermitteeId"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 直接父对象")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("asString")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 转换为字符串表示")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br"),r("span",{staticClass:"line-number"},[t._v("4")]),r("br")])]),r("p",[r("a",{attrs:{href:"https://github.com/mamoe/mirai-console/tree/master/backend/mirai-console/src/permission/PermitteeId.kt",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("PermitteeId")]),r("OutboundLink")],1),t._v(" 是被许可人的标识符。")]),t._v(" "),r("p",[t._v("一个这样的标识符即可代表特定的单个 "),r("a",{attrs:{href:"https://github.com/mamoe/mirai-console/tree/master/backend/mirai-console/src/permission/Permittee.kt",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("Permittee")]),r("OutboundLink")],1),t._v(", 也可以表示多个同类 "),r("a",{attrs:{href:"https://github.com/mamoe/mirai-console/tree/master/backend/mirai-console/src/permission/Permittee.kt",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("Permittee")]),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("h4",{attrs:{id:"directparents"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#directparents"}},[t._v("#")]),t._v(" "),r("code",[t._v("directParents")])]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/mamoe/mirai-console/tree/master/backend/mirai-console/src/permission/PermitteeId.kt",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("PermitteeId")]),r("OutboundLink")],1),t._v(" 允许拥有多个父对象。在检查权限时会首先检查自己, 再递归检查父类。")]),t._v(" "),r("h4",{attrs:{id:"衍生类型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#衍生类型"}},[t._v("#")]),t._v(" 衍生类型")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/mamoe/mirai-console/tree/master/backend/mirai-console/src/permission/PermitteeId.kt",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("PermitteeId")]),r("OutboundLink")],1),t._v(" 的实现通常是 "),r("a",{attrs:{href:"https://github.com/mamoe/mirai-console/tree/master/backend/mirai-console/src/permission/PermitteeId.kt#L77",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("AbstractPermitteeId")]),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("在 "),r("a",{attrs:{href:"https://github.com/mamoe/mirai-console/tree/master/backend/mirai-console/src/permission/PermitteeId.kt#L77",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("AbstractPermitteeId")]),r("OutboundLink")],1),t._v(" 查看其子类。")]),t._v(" "),r("p",[r("strong",[t._v("注意")]),t._v(": 对应 "),r("a",{attrs:{href:"https://github.com/mamoe/mirai-console/tree/master/backend/mirai-console/src/permission/PermissionService.kt",target:"_blank",rel:"noopener noreferrer"}},[t._v("权限服务"),r("OutboundLink")],1),t._v(" 没明确说明可以自行实现时, 不要轻易实现 "),r("a",{attrs:{href:"https://github.com/mamoe/mirai-console/tree/master/backend/mirai-console/src/permission/PermitteeId.kt",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("PermitteeId")]),r("OutboundLink")],1)]),t._v(" "),r("h4",{attrs:{id:"字符串表示"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#字符串表示"}},[t._v("#")]),t._v(" 字符串表示")]),t._v(" "),r("p",[t._v("当使用 "),r("code",[t._v("PermitteeId.asString")]),t._v(" 时, 不同的类型的返回值如下表所示. 这些格式也适用于 "),r("a",{attrs:{href:"#%E4%BD%BF%E7%94%A8%E5%86%85%E7%BD%AE%E6%9D%83%E9%99%90%E6%9C%8D%E5%8A%A1%E6%8C%87%E4%BB%A4"}},[t._v("权限指令")]),t._v("."),r("br"),t._v("\n(不区分大小写. 不区分 Bot).")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"center"}},[t._v("被许可人类型")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("字符串表示示例")]),t._v(" "),r("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("控制台")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("console")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("任意其他客户端")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("client*")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("即 Bot 自己发消息给自己")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("精确群")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("g123456")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("表示群, 而不表示群成员")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("精确好友")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("f123456")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("必须通过好友消息")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("精确群临时会话")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("t123456.789")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("群 123456 内的成员 789. 必须通过临时会话")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("精确群成员")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("m123456.789")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("群 123456 内的成员 789. 同时包含临时会话")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("精确用户")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("u123456")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("同时包含群成员, 好友, 临时会话")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("任意群")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("g*")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("g 意为 group")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("任意群的任意群员")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("m*")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("m 意为 member")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("精确群的任意群员")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("m123456.*")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("群 123456 内的任意成员. 同时包含临时会话")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("任意临时会话")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("t*")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("t 意为 temp. 必须通过临时会话")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("精确群的任意临时会话")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("t123456.*")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("群 123456 内的任意成员. 必须通过临时会话")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("任意好友")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("f*")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("f 意为 friend")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("任意用户")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("u*")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("u 意为 user. 任何人在任何环境")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("任意陌生人")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("s*")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("s 意为 stranger. 任何人在任何环境")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("任意联系对象")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("*")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("即任何人, 任何群. 不包括控制台")])])])]),t._v(" "),r("h3",{attrs:{id:"获取被许可人"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#获取被许可人"}},[t._v("#")]),t._v(" 获取被许可人")]),t._v(" "),r("p",[t._v("在 Kotlin 通常使用 "),r("code",[t._v("CommandSender.permitteeId")]),t._v("，在 Java 使用 "),r("code",[t._v("CommandSender.getPermitteeId( )")]),t._v("。"),r("br"),t._v("\n也可以直接构造 "),r("a",{attrs:{href:"https://github.com/mamoe/mirai-console/tree/master/backend/mirai-console/src/permission/PermitteeId.kt#L77",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("AbstractPermitteeId")]),r("OutboundLink")],1),t._v(" 的子类。或者在 Kotlin 使用扩展 "),r("code",[t._v("User.permitteeId")]),t._v("。")]),t._v(" "),r("h2",{attrs:{id:"权限服务"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#权限服务"}},[t._v("#")]),t._v(" 权限服务")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/mamoe/mirai-console/tree/master/backend/mirai-console/src/permission/PermissionService.kt",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("PermissionService")]),r("OutboundLink")],1),t._v(" 承载权限的授权和管理。 Console 的权限系统完全由 "),r("a",{attrs:{href:"https://github.com/mamoe/mirai-console/tree/master/backend/mirai-console/src/permission/PermissionService.kt",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("PermissionService")]),r("OutboundLink")],1),t._v(" 提供支持。\n权限服务可以由插件提供（见 "),r("RouterLink",{attrs:{to:"/console/Extensions.html"}},[t._v("扩展")]),t._v("）。\n在没有任何提供权限服务的插件时会使用 Console 内置实现。")],1),t._v(" "),r("p",[t._v("在整个运行时 Console 只会使用同一个权限服务，如果安装多个提供权限服务的插件很有可能导致崩溃。")]),t._v(" "),r("blockquote",[r("p",[t._v("如果运行于 JVM 平台,\n可以使用 "),r("a",{attrs:{href:"https://github.com/Karlatemp/LuckPerms-Mirai",target:"_blank",rel:"noopener noreferrer"}},[t._v("Karlatemp/LuckPerms-Mirai"),r("OutboundLink")],1),t._v("\n以得到更好的使用体验 (支持权限组, 权限检查状态详细输出等)")])]),t._v(" "),r("h3",{attrs:{id:"判断权限"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#判断权限"}},[t._v("#")]),t._v(" 判断权限")]),t._v(" "),r("p",[t._v("在 Kotlin，在该有扩展的对象上 Console 都为它们实现了扩展。可以使用：")]),t._v(" "),r("div",{staticClass:"language-kotlin line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-kotlin"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" Permittee"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasPermission")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Permission"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Boolean\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" Permission"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("testPermission")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Permittee"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Boolean\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" PermitteeId"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasPermission")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Permission"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Boolean\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" PermissionId"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("testPermission")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Permittee"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Boolean\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" Permittee"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasPermission")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("PermissionId"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Boolean\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" Permission"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("testPermission")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("PermitteeId"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Boolean\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ... ")]),t._v("\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br"),r("span",{staticClass:"line-number"},[t._v("4")]),r("br"),r("span",{staticClass:"line-number"},[t._v("5")]),r("br"),r("span",{staticClass:"line-number"},[t._v("6")]),r("br"),r("span",{staticClass:"line-number"},[t._v("7")]),r("br")])]),r("p",[t._v("在 Java，请查看 "),r("a",{attrs:{href:"https://github.com/mamoe/mirai-console/tree/master/backend/mirai-console/src/permission/PermissionService.kt",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("PermissionService")]),r("OutboundLink")],1),t._v(" 中的伴生对象。")]),t._v(" "),r("blockquote",[r("p",[t._v("查看使用示例: "),r("a",{attrs:{href:"https://github.com/Him188/mirai-console-example-plugin/blob/master/src/main/kotlin/org/example/my/plugin/MyPluginMain.kt#L116",target:"_blank",rel:"noopener noreferrer"}},[t._v("Him188/mirai-console-example-plugin"),r("OutboundLink")],1)])]),t._v(" "),r("h3",{attrs:{id:"注册权限"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#注册权限"}},[t._v("#")]),t._v(" 注册权限")]),t._v(" "),r("p",[t._v("每一条指令都会默认自动创建一个权限。")]),t._v(" "),r("p",[t._v("如果希望手动注册一个其他用途的权限，使用 "),r("code",[t._v("PermissionService.register")]),t._v("。")]),t._v(" "),r("p",[r("strong",[t._v("注意")]),t._v("：")]),t._v(" "),r("ul",[r("li",[t._v("权限只能在插件 "),r("RouterLink",{attrs:{to:"/console/Plugins.html#启用"}},[t._v("启用")]),t._v(" 之后才能注册。否则会得到一个异常。")],1),t._v(" "),r("li",[t._v("使用 "),r("code",[t._v("PermissionService.register")]),t._v(" 时对于同一个 "),r("a",{attrs:{href:"https://github.com/mamoe/mirai-console/tree/master/backend/mirai-console/src/permission/PermissionId.kt",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("PermissionId")]),r("OutboundLink")],1),t._v(" 只能注册一次, 如果多次注册会得到一个异常")])]),t._v(" "),r("h3",{attrs:{id:"使用内置权限服务指令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用内置权限服务指令"}},[t._v("#")]),t._v(" 使用内置权限服务指令")]),t._v(" "),r("p",[r("strong",[t._v("指令")]),t._v(': "/permission", "/perm", "/权限"')]),t._v(" "),r("p",[t._v("使用指令而不带参数可以获取如下用法：")]),t._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("/permission cancel <被许可人 ID> <权限 ID>   取消授权一个权限\n/permission cancelall <被许可人 ID> <权限 ID>   取消授权一个权限及其所有子权限\n/permission listpermissions    查看所有权限列表\n/permission permit <被许可人 ID> <权限 ID>   授权一个权限\n/permission permittedpermissions <被许可人 ID>   查看被授权权限列表\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br"),r("span",{staticClass:"line-number"},[t._v("4")]),r("br"),r("span",{staticClass:"line-number"},[t._v("5")]),r("br")])]),r("p",[t._v("其中, 被许可人 ID 使用 "),r("a",{attrs:{href:"#%E5%AD%97%E7%AC%A6%E4%B8%B2%E8%A1%A8%E7%A4%BA"}},[t._v("字符串表示")]),t._v(", 权限 ID 参见 "),r("a",{attrs:{href:"#%E6%9D%83%E9%99%90-id"}},[t._v("权限 ID")])]),t._v(" "),r("hr"),t._v(" "),r("blockquote",[r("p",[t._v("这是文档的最后一个章节。")]),t._v(" "),r("p",[t._v("返回 "),r("RouterLink",{attrs:{to:"/console/#mirai-console"}},[t._v("开发文档索引")])],1)])])}),[],!1,null,null,null);e.default=a.exports}}]);