(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{755:function(t,e,a){"use strict";a.r(e);var l=a(109),i=Object(l.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mirai-debuggingnetwork"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mirai-debuggingnetwork"}},[t._v("#")]),t._v(" Mirai - DebuggingNetwork")]),t._v(" "),a("p",[t._v("本章节介绍调试网络层的方法。")]),t._v(" "),a("h2",{attrs:{id:"环境变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境变量"}},[t._v("#")]),t._v(" 环境变量")]),t._v(" "),a("p",[t._v("可通过 JVM 环境变量改变网络层的行为。一般用户通常不需要手动变更这些功能。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("环境变量名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("解释")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("mirai.network.handler.selector.max.attempts")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("[1, 2147483647]")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("最大重连尝试次数")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("mirai.network.reconnect.delay")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("[0, 9223372036854775807]")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("两次重连尝试的间隔毫秒数")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("mirai.network.handle.selector.logging")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("true")]),t._v("/"),a("code",[t._v("false")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("启用执行重连时的详细日志")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("mirai.network.state.observer.logging")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("true")]),t._v("/"),a("code",[t._v("on")]),t._v("/"),a("code",[t._v("false")]),t._v("/"),a("code",[t._v("off")]),t._v("/"),a("code",[t._v("full")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("启用网络层状态变更的日志")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("mirai.event.launch.undispatched")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("true")]),t._v("/"),a("code",[t._v("false")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("详见 "),a("a",{attrs:{href:"https://github.com/mamoe/mirai/blob/6eff4bdf40815598a2d987e08d89df6b97663967/mirai-core-api/src/commonMain/kotlin/internal/event/InternalEventListeners.kt#L141",target:"_blank",rel:"noopener noreferrer"}},[t._v("源码内注释"),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("mirai.resource.creation.stack.enabled")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("true")]),t._v("/"),a("code",[t._v("false")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("启用 "),a("code",[t._v("ExternalResource")]),t._v(" 创建时的 stacktrace 记录 (影响性能), 在资源泄露时展示")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("mirai.unknown.image.type.logging")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("true")]),t._v("/"),a("code",[t._v("false")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("启用遇到未知图片格式时的日志")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("mirai.network.show.all.components")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("true")]),t._v("/"),a("code",[t._v("false")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("在网络层异常中附加当前所有组件 (components) 内容")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("mirai.network.show.components.creation.stacktrace")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("true")]),t._v("/"),a("code",[t._v("false")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("在网络层异常中附加当前组件容器创建时的 stacktrace")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("mirai.network.packet.logger")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("true")]),t._v("/"),a("code",[t._v("false")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("启用数据包日志 (将为展示所有接收的数据包的 id, sequenceId, extraData 以及内容 hex)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("mirai.network.show.verbose.packets")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("true")]),t._v("/"),a("code",[t._v("false")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("在日志记录数据包时包含冗长的数据包 (如 "),a("code",[t._v("MessageSvc.PbGetMsg")]),t._v(", "),a("code",[t._v("OnlinePush.ReqPush")]),t._v(", "),a("code",[t._v("StatSvc.SimpleGet")]),t._v(")")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("mirai.network.show.packet.details")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("true")]),t._v("/"),a("code",[t._v("false")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("在日志记录数据包时包含 mirai 解析结果")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("mirai.event.show.verbose.events")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("true")]),t._v("/"),a("code",[t._v("false")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("在日志记录事件时包含冗长的事件 (如 "),a("code",[t._v("GroupMessagePreSendEvent")]),t._v(", "),a("code",[t._v("GroupMessagePostSendEvent")]),t._v(")")])])])]),t._v(" "),a("p",[t._v("修改示例：")]),t._v(" "),a("p",[t._v("在启动 JVM 时添加参数 "),a("code",[t._v("-Dmirai.network.handle.selector.logging=true")]),t._v(" 则启用执行重连时的详细日志")])])}),[],!1,null,null,null);e.default=i.exports}}]);