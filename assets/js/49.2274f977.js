(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{792:function(s,t,a){"use strict";a.r(t);var e=a(109),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"mirai-http-api-2-x-迁移文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mirai-http-api-2-x-迁移文档"}},[s._v("#")]),s._v(" Mirai http api 2.x 迁移文档")]),s._v(" "),a("h2",{attrs:{id:"配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[s._v("#")]),s._v(" 配置文件")]),s._v(" "),a("p",[s._v("拆分为多模块，添加了新的参数")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 配置文件中的值，全为默认值")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 启用的 adapter, 内置有 http, ws, reverse-ws, webhook")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("adapters")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" http\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ws\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 是否开启认证流程, 若为 true 则建立连接时需要验证 verifyKey")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 建议公网连接时开启")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("enableVerify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("verifyKey")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1234567890")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 是否开启单 session 模式, 若为 true，则自动创建 session 绑定 console 中登录的 bot")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 开启后，接口中任何 sessionKey 不需要传递参数")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 若 console 中有多个 bot 登录，则行为未定义")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 确保 console 中只有一个 bot 登陆时启用")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("singleMode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("false")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 历史消息的缓存大小")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 同时，也是 http adapter 的消息队列容量")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cacheSize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## adapter 的单独配置，键名与 adapters 项配置相同")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("adapterSettings")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 详情看 http adapter 使用说明 配置")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" localhost\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cors")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 详情看 websocket adapter 使用说明 配置")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ws")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" localhost\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("reservedSyncId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("-1")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br")])]),a("h2",{attrs:{id:"http-相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-相关"}},[s._v("#")]),s._v(" http 相关")]),s._v(" "),a("h3",{attrs:{id:"认证流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#认证流程"}},[s._v("#")]),s._v(" 认证流程")]),s._v(" "),a("ol",[a("li",[s._v("原 "),a("code",[s._v("authKey")]),s._v(" 修改为 "),a("code",[s._v("verifyKey")]),s._v(", 认证接口参数名同步修改")]),s._v(" "),a("li",[s._v("原 "),a("code",[s._v("/auth")]),s._v(" 接口修改为 "),a("code",[s._v("/verify")]),s._v(" 接口")]),s._v(" "),a("li",[s._v("原 "),a("code",[s._v("/verify")]),s._v(" 接口修改为 "),a("code",[s._v("/bind")]),s._v(" 接口")])]),s._v(" "),a("p",[s._v("变更原因: 命名混淆")]),s._v(" "),a("blockquote",[a("p",[s._v("http 的认证流程为, 第一步先认证(verify)插件使用者身份; 第二步通过 qq 号绑定(bind)到固定的 session 中，是为了提供缓存和消息队列等连接私有的上下文. 原则上并没有鉴权(auth)的过程，因此修改接口名称")])]),s._v(" "),a("h3",{attrs:{id:"认证流程优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#认证流程优化"}},[s._v("#")]),s._v(" 认证流程优化")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("可通过配置文件中 "),a("code",[s._v("enableVerify")]),s._v(" 参数关闭认证过程, 信任所有连接连接的请求. 不建议关闭, 但用户能够保证安全或者调试环境下能有更好的体验")])]),s._v(" "),a("li",[a("p",[s._v("可通过配置文件中 "),a("code",[s._v("singleMode")]),s._v(" 参数跳过绑定(bind)过程，默认使用 "),a("code",[s._v("Mirai Console")]),s._v(" 中当前登录的账号或登录的下一个可用账号. 当环境中存在多个账号时, 可能产生不确定行为, 请保证使用 "),a("code",[s._v("singeMode")]),s._v(" 时 "),a("code",[s._v("Mirai Console")]),s._v(" 中只有一个账号登录中")])])]),s._v(" "),a("h3",{attrs:{id:"若干未-restful-包装的接口返回值进行-restful-封装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#若干未-restful-包装的接口返回值进行-restful-封装"}},[s._v("#")]),s._v(" 若干未 Restful 包装的接口返回值进行 Restful 封装")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"code"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"msg"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"data"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token null keyword"}},[s._v("null")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("涉及接口如下:")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("/friendList")])]),s._v(" "),a("li",[a("code",[s._v("/groupList")])]),s._v(" "),a("li",[a("code",[s._v("/memberList")])])]),s._v(" "),a("h3",{attrs:{id:"errormessage-msg-字段归一化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#errormessage-msg-字段归一化"}},[s._v("#")]),s._v(" errorMessage, msg 字段归一化")]),s._v(" "),a("p",[s._v("部分接口的返回值中，使用了 "),a("code",[s._v("errorMessage")]),s._v(" 作为属性值, 而部分使用 "),a("code",[s._v("msg")]),s._v(". 此问题出现于 "),a("a",{attrs:{href:"https://github.com/project-mirai/mirai-api-http/issues/59",target:"_blank",rel:"noopener noreferrer"}},[s._v("issue#59"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("对此, 本次重构统一修改为 "),a("code",[s._v("msg")]),s._v(". 涉及接口如下:")]),s._v(" "),a("h5",{attrs:{id:"消息队列接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#消息队列接口"}},[s._v("#")]),s._v(" 消息队列接口")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("/countMessage")])]),s._v(" "),a("li",[a("code",[s._v("/fetchMessage")])]),s._v(" "),a("li",[a("code",[s._v("/fetchLatestMessage")])]),s._v(" "),a("li",[a("code",[s._v("/peakMessage")])]),s._v(" "),a("li",[a("code",[s._v("/peekLatestMessage")])]),s._v(" "),a("li",[a("code",[s._v("/messageFromId")])])]),s._v(" "),a("blockquote",[a("p",[s._v("发送消息、事件处理等返回状态码的接口不受影响")])]),s._v(" "),a("h3",{attrs:{id:"上传相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上传相关"}},[s._v("#")]),s._v(" 上传相关")]),s._v(" "),a("p",[s._v("根据反映, 图片, 语言, 文件上传不再缓存到本地, 返回值将不再返回 "),a("code",[s._v("path")]),s._v(" 参数. 如有本地上传需求, 由用户自行缓存, 以进行资源管理")]),s._v(" "),a("h2",{attrs:{id:"websocket-相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#websocket-相关"}},[s._v("#")]),s._v(" websocket 相关")]),s._v(" "),a("h3",{attrs:{id:"返回格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#返回格式"}},[s._v("#")]),s._v(" 返回格式")]),s._v(" "),a("p",[s._v("由于 "),a("code",[s._v("websocket")]),s._v(" 追加执行操作的功能，因此 "),a("code",[s._v("websocket")]),s._v(" 接收消息的数据结构，需和 "),a("code",[s._v("websocket")]),s._v(" 操作响应保持相同格式，以方便解析。具体为")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('{\n    syncId: "",\n    data: {}\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[a("code",[s._v("data")]),s._v(" 内容和原本保持一致(除上文提到的数据变更外)")]),s._v(" "),a("h3",{attrs:{id:"syncid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syncid"}},[s._v("#")]),s._v(" syncId")]),s._v(" "),a("p",[a("code",[s._v("syncId")]),s._v(" 用于操作追踪，可为任意字符串。对于使用 "),a("code",[s._v("websocket")]),s._v(" 发送的操作请求，响应数据会携带和请求相同的 "),a("code",[s._v("syncId")]),s._v("，用于同步追踪请求和响应。")]),s._v(" "),a("p",[s._v("对于由 "),a("code",[s._v("mirai-api-http")]),s._v(" 主动发送的事件(如event、message等)，使用保留字 "),a("code",[s._v('{syncId: "-1"}')]),s._v(", 也可在配置文件中自行定义")]),s._v(" "),a("h2",{attrs:{id:"上报相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上报相关"}},[s._v("#")]),s._v(" 上报相关")]),s._v(" "),a("p",[s._v("上报模块现独立为 "),a("code",[s._v("webhook adapter")]),s._v(", 配置文件有变更")]),s._v(" "),a("p",[s._v("同时支持返回值进行简单操作回调")])])}),[],!1,null,null,null);t.default=n.exports}}]);