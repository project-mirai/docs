(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{758:function(t,e,a){"use strict";a.r(e);var o=a(109),i=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mirai-console-builtin-commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mirai-console-builtin-commands"}},[t._v("#")]),t._v(" Mirai Console - BuiltIn Commands")]),t._v(" "),a("p",[t._v("Mirai Console 内置一些指令。")]),t._v(" "),a("p",[t._v("下文中 "),a("code",[t._v("<A|B>")]),t._v(" 表示可以是 A 或 B。"),a("code",[t._v("[ ]")]),t._v(" 表示一个必须的参数, "),a("code",[t._v("[ ]?")]),t._v(" 表示一个可选的参数。")]),t._v(" "),a("h2",{attrs:{id:"helpcommand"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#helpcommand"}},[t._v("#")]),t._v(" HelpCommand")]),t._v(" "),a("p",[a("code",[t._v("/help")])]),t._v(" "),a("p",[t._v("查看指令帮助")]),t._v(" "),a("h2",{attrs:{id:"stopcommand"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stopcommand"}},[t._v("#")]),t._v(" StopCommand")]),t._v(" "),a("p",[a("code",[t._v("/<stop|shutdown|exit>")])]),t._v(" "),a("p",[t._v("关闭 Mirai Console")]),t._v(" "),a("h2",{attrs:{id:"logincommand"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logincommand"}},[t._v("#")]),t._v(" LoginCommand")]),t._v(" "),a("p",[a("code",[t._v("/<login|登录> [qq] [password]")])]),t._v(" "),a("p",[t._v("临时登录一个账号")]),t._v(" "),a("h2",{attrs:{id:"permissioncommand"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#permissioncommand"}},[t._v("#")]),t._v(" PermissionCommand")]),t._v(" "),a("p",[t._v("主指令: "),a("code",[t._v("/<permission|perm|权限>")])]),t._v(" "),a("p",[t._v("次指令:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("指令")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("/<permission\\|perm\\|权限> <permit\\|grant\\|add> [target] [permission]")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("授权一个权限")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("/<permission\\|perm\\|权限> <cancel\\|deny\\|remove> [target] [permission]")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("撤销一个权限")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("/<permission\\|perm\\|权限> <cancelAll\\|denyAll\\|removeAll> [target] [permission]")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("撤销一个权限及其所有子权限")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("/<permission\\|perm\\|权限> <permittedPermissions\\|pp\\|grantedPermissions\\|gp> [target] [all]")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("查看被授权权限列表")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("/<permission\\|perm\\|权限> <listPermissions\\|lp>")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("查看所有权限列表")])])])]),t._v(" "),a("h3",{attrs:{id:"target-和-permission-示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#target-和-permission-示例"}},[t._v("#")]),t._v(" "),a("code",[t._v("[target]")]),t._v(" 和 "),a("code",[t._v("[permission]")]),t._v(" 示例")]),t._v(" "),a("p",[a("code",[t._v("[target]")]),t._v(" 是 "),a("RouterLink",{attrs:{to:"/console/Permissions.html#被许可人-id"}},[a("em",[t._v("被许可人 ID")])]),t._v("，可以查看"),a("RouterLink",{attrs:{to:"/console/Permissions.html#字符串表示"}},[t._v("表示方法")]),t._v(" 。")],1),t._v(" "),a("p",[a("code",[t._v("[permission]")]),t._v(" 是 "),a("RouterLink",{attrs:{to:"/console/Permissions.html#权限-id"}},[a("em",[t._v("权限 ID")])]),t._v("。每个指令都拥有一个权限 ID。请使用 "),a("code",[t._v("/perm list")]),t._v(" 查看权限 ID 列表。")],1),t._v(" "),a("p",[t._v("示例："),a("code",[t._v("/perm permit u123456 console:command.stop")])]),t._v(" "),a("h3",{attrs:{id:"授予一个用户执行所有指令的权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#授予一个用户执行所有指令的权限"}},[t._v("#")]),t._v(" 授予一个用户执行所有指令的权限")]),t._v(" "),a("p",[t._v("示例：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("/perm permit u123456 *:*")]),t._v(" 允许用户 123456 执行任意指令")]),t._v(" "),a("li",[a("code",[t._v("/perm permit u123456 console:*")]),t._v(" 允许用户 123456 执行任意 Console 内置指令")]),t._v(" "),a("li",[a("code",[t._v("/perm permit u123456 org.example.my-plugin:*")]),t._v(" 允许用户 123456 执行插件 "),a("code",[t._v("org.example.my-plugin")]),t._v(" 的任意指令")])]),t._v(" "),a("h3",{attrs:{id:"授予所有用户执行某个指令的权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#授予所有用户执行某个指令的权限"}},[t._v("#")]),t._v(" 授予所有用户执行某个指令的权限")]),t._v(" "),a("p",[t._v("示例：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("/perm permit u* console:command.help")]),t._v(" 允许所有用户执行 "),a("code",[t._v("console:command.help")]),t._v("（即 "),a("code",[t._v("/help")]),t._v("）")]),t._v(" "),a("li",[a("code",[t._v("/perm permit u* console:*")]),t._v(" 允许所有用户执行任意 Console 内置指令")]),t._v(" "),a("li",[a("code",[t._v("/perm permit u* org.example.my-plugin:*")]),t._v(" 允许所有用户执行插件 "),a("code",[t._v("org.example.my-plugin")]),t._v(" 的任意指令")])]),t._v(" "),a("h2",{attrs:{id:"autologincommand"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#autologincommand"}},[t._v("#")]),t._v(" AutoLoginCommand")]),t._v(" "),a("p",[t._v("主指令: "),a("code",[t._v("/autoLogin")])]),t._v(" "),a("p",[t._v("次指令:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("指令")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("/<autoLogin\\|自动登录> list")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("查看自动登录账号列表")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("/<autoLogin\\|自动登录> add [account] [password] [passwordKind]")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("添加自动登录")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("/<autoLogin\\|自动登录> clear")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("清除所有配置")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("/<autoLogin\\|自动登录> remove [account]")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("删除一个账号")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("/<autoLogin\\|自动登录> setConfig [account] [configKey] [value]")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置一个账号的一个配置项")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("/<autoLogin\\|自动登录> removeConfig [account] [configKey]")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("删除一个账号的一个配置项")])])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[a("code",[t._v("configKey")])]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("可选值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("protocol")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("ANDROID_PHONE")]),t._v(" / "),a("code",[t._v("ANDROID_PAD")]),t._v(" / "),a("code",[t._v("ANDROID_WATCH")])])])])]),t._v(" "),a("p",[t._v("示例："),a("code",[t._v("/autoLogin setConfig 123456 protocol ANDROID_PHONE")])]),t._v(" "),a("h2",{attrs:{id:"statuscommand"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#statuscommand"}},[t._v("#")]),t._v(" StatusCommand")]),t._v(" "),a("p",[a("code",[t._v("/status")])]),t._v(" "),a("p",[t._v("获取 Mirai Console 运行状态")])])}),[],!1,null,null,null);e.default=i.exports}}]);