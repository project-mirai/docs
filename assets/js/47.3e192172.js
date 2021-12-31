(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{418:function(a,t,s){"use strict";s.r(t);var e=s(49),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"websocket-adapter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#websocket-adapter"}},[a._v("#")]),a._v(" Websocket Adapter")]),a._v(" "),s("p",[a._v("提供基于 websocket server 的接口")]),a._v(" "),s("h3",{attrs:{id:"配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[a._v("#")]),a._v(" 配置文件")]),a._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("adapterSettings")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("ws")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## websocket server 监听的本地地址")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## 一般为 localhost 即可, 如果多网卡等情况，自定设置")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" localhost\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## websocket server 监听的端口")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## 与 http server 可以重复, 由于协议与路径不同, 不会产生冲突")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("port")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8080")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## websocket 用于消息同步的字段为 syncId, 一般值为请求时的原值，用于同步一次请求与响应")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## 对于由 websocket server 主动发出的通知, 固定使用一个 syncId, 默认为 ”-1“")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("reservedSyncId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("-1")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br")])]),s("h3",{attrs:{id:"接口一览"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#接口一览"}},[a._v("#")]),a._v(" 接口一览")]),a._v(" "),s("h4",{attrs:{id:"专有接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#专有接口"}},[a._v("#")]),a._v(" 专有接口")]),a._v(" "),s("p",[a._v("专有接口为该 "),s("code",[a._v("adapter")]),a._v(" 特有的接口")]),a._v(" "),s("ul",[s("li",[s("strong",[s("a",{attrs:{href:"#%E8%AE%A4%E8%AF%81%E4%B8%8E%E4%BC%9A%E8%AF%9D"}},[a._v("认证与会话")])])]),a._v(" "),s("li",[s("strong",[s("a",{attrs:{href:"#%E6%8E%A5%E6%94%B6%E6%B6%88%E6%81%AF%E4%B8%8E%E4%BA%8B%E4%BB%B6"}},[a._v("接收消息与事件")])]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%E5%88%9B%E5%BB%BA%E8%BF%9E%E6%8E%A5"}},[a._v("创建连接")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#%E6%95%B0%E6%8D%AE%E6%A0%BC%E5%BC%8F"}},[a._v("数据格式")])])])]),a._v(" "),s("li",[s("strong",[s("a",{attrs:{href:"#%E5%A4%9A%E5%AA%92%E4%BD%93%E5%86%85%E5%AE%B9%E4%B8%8A%E4%BC%A0"}},[a._v("多媒体内容上传")])]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%E5%9B%BE%E7%89%87%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0"}},[a._v("图片文件上传")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#%E8%AF%AD%E9%9F%B3%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0"}},[a._v("语音文件上传")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#%E7%BE%A4%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0"}},[a._v("群文件上传")])])])])]),a._v(" "),s("hr"),a._v(" "),s("h4",{attrs:{id:"通用接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通用接口"}},[a._v("#")]),a._v(" 通用接口")]),a._v(" "),s("p",[a._v("通用接口为所有 "),s("code",[a._v("built-in adapter")]),a._v(" 公用的数据规范, 该文档定义了不同 "),s("code",[a._v("adapter")]),a._v(" 的具体调用方式")]),a._v(" "),s("ul",[s("li",[s("strong",[s("a",{attrs:{href:"#%E8%8E%B7%E5%8F%96%E6%8F%92%E4%BB%B6%E4%BF%A1%E6%81%AF"}},[a._v("获取插件信息")])])]),a._v(" "),s("li",[s("strong",[s("a",{attrs:{href:"#%E7%BC%93%E5%AD%98%E6%93%8D%E4%BD%9C"}},[a._v("缓存操作")])]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%E9%80%9A%E8%BF%87messageId%E8%8E%B7%E5%8F%96%E6%B6%88%E6%81%AF"}},[a._v("通过messageId获取消息")])])])]),a._v(" "),s("li",[s("strong",[s("a",{attrs:{href:"#%E8%8E%B7%E5%8F%96%E8%B4%A6%E5%8F%B7%E4%BF%A1%E6%81%AF"}},[a._v("获取账号信息")])]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%E8%8E%B7%E5%8F%96%E5%A5%BD%E5%8F%8B%E5%88%97%E8%A1%A8"}},[a._v("获取好友列表")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#%E8%8E%B7%E5%8F%96%E7%BE%A4%E5%88%97%E8%A1%A8"}},[a._v("获取群列表")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#%E8%8E%B7%E5%8F%96%E7%BE%A4%E6%88%90%E5%91%98%E5%88%97%E8%A1%A8"}},[a._v("获取群成员列表")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#%E8%8E%B7%E5%8F%96Bot%E8%B5%84%E6%96%99"}},[a._v("获取Bot资料")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#%E8%8E%B7%E5%8F%96%E5%A5%BD%E5%8F%8B%E8%B5%84%E6%96%99"}},[a._v("获取好友资料")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#%E8%8E%B7%E5%8F%96%E7%BE%A4%E6%88%90%E5%91%98%E8%B5%84%E6%96%99"}},[a._v("获取群成员资料")])])])]),a._v(" "),s("li",[s("strong",[s("a",{attrs:{href:"#%E6%B6%88%E6%81%AF%E5%8F%91%E9%80%81%E4%B8%8E%E6%92%A4%E5%9B%9E"}},[a._v("消息发送与撤回")])]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%E5%8F%91%E9%80%81%E5%A5%BD%E5%8F%8B%E6%B6%88%E6%81%AF"}},[a._v("发送好友消息")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#%E5%8F%91%E9%80%81%E7%BE%A4%E6%B6%88%E6%81%AF"}},[a._v("发送群消息")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#%E5%8F%91%E9%80%81%E4%B8%B4%E6%97%B6%E4%BC%9A%E8%AF%9D%E6%B6%88%E6%81%AF"}},[a._v("发送临时会话消息")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#%E5%8F%91%E9%80%81%E5%A4%B4%E5%83%8F%E6%88%B3%E4%B8%80%E6%88%B3%E6%B6%88%E6%81%AF"}},[a._v("发送头像戳一戳消息")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#%E6%92%A4%E5%9B%9E%E6%B6%88%E6%81%AF"}},[a._v("撤回消息")])])])]),a._v(" "),s("li",[s("strong",[s("a",{attrs:{href:"#%E6%96%87%E4%BB%B6%E6%93%8D%E4%BD%9C"}},[a._v("文件操作")])]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%E6%9F%A5%E7%9C%8B%E6%96%87%E4%BB%B6%E5%88%97%E8%A1%A8"}},[a._v("查看文件列表")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#%E8%8E%B7%E5%8F%96%E6%96%87%E4%BB%B6%E4%BF%A1%E6%81%AF"}},[a._v("获取文件信息")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#%E5%88%9B%E5%BB%BA%E6%96%87%E4%BB%B6%E5%A4%B9"}},[a._v("创建文件夹")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#%E5%88%A0%E9%99%A4%E6%96%87%E4%BB%B6"}},[a._v("删除文件")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#%E7%A7%BB%E5%8A%A8%E6%96%87%E4%BB%B6"}},[a._v("移动文件")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#%E9%87%8D%E5%91%BD%E5%90%8D%E6%96%87%E4%BB%B6"}},[a._v("重命名文件")])])])]),a._v(" "),s("li",[s("strong",[s("a",{attrs:{href:"#%E8%B4%A6%E5%8F%B7%E7%AE%A1%E7%90%86"}},[a._v("账号管理")])]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%E5%88%A0%E9%99%A4%E5%A5%BD%E5%8F%8B"}},[a._v("删除好友")])])])]),a._v(" "),s("li",[s("strong",[s("a",{attrs:{href:"#%E7%BE%A4%E7%AE%A1%E7%90%86"}},[a._v("群管理")])]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%E7%A6%81%E8%A8%80%E7%BE%A4%E6%88%90%E5%91%98"}},[a._v("禁言群成员")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#%E8%A7%A3%E9%99%A4%E7%BE%A4%E6%88%90%E5%91%98%E7%A6%81%E8%A8%80"}},[a._v("解除群成员禁言")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#%E7%A7%BB%E9%99%A4%E7%BE%A4%E6%88%90%E5%91%98"}},[a._v("移除群成员")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#%E9%80%80%E5%87%BA%E7%BE%A4%E8%81%8A"}},[a._v("退出群聊")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#%E5%85%A8%E4%BD%93%E7%A6%81%E8%A8%80"}},[a._v("全体禁言")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#%E8%A7%A3%E9%99%A4%E5%85%A8%E4%BD%93%E7%A6%81%E8%A8%80"}},[a._v("解除全体禁言")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#%E8%AE%BE%E7%BD%AE%E7%BE%A4%E7%B2%BE%E5%8D%8E%E6%B6%88%E6%81%AF"}},[a._v("设置群精华消息")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#%E8%8E%B7%E5%8F%96%E7%BE%A4%E8%AE%BE%E7%BD%AE"}},[a._v("获取群设置")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#%E4%BF%AE%E6%94%B9%E7%BE%A4%E8%AE%BE%E7%BD%AE"}},[a._v("修改群设置")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#%E8%8E%B7%E5%8F%96%E7%BE%A4%E5%91%98%E8%AE%BE%E7%BD%AE"}},[a._v("获取群员资料")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#%E4%BF%AE%E6%94%B9%E7%BE%A4%E5%91%98%E8%AE%BE%E7%BD%AE"}},[a._v("修改群员资料")])])])]),a._v(" "),s("li",[s("strong",[s("a",{attrs:{href:"#%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86"}},[a._v("事件处理")])]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%E6%B7%BB%E5%8A%A0%E5%A5%BD%E5%8F%8B%E7%94%B3%E8%AF%B7"}},[a._v("添加好友申请")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#%E7%94%A8%E6%88%B7%E5%85%A5%E7%BE%A4%E7%94%B3%E8%AF%B7"}},[a._v("用户入群申请")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#Bot%E8%A2%AB%E9%82%80%E8%AF%B7%E5%85%A5%E7%BE%A4%E7%94%B3%E8%AF%B7"}},[a._v("Bot被邀请入群申请")])])])])]),a._v(" "),s("h2",{attrs:{id:"认证与会话"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#认证与会话"}},[a._v("#")]),a._v(" 认证与会话")]),a._v(" "),s("p",[s("code",[a._v("ws adapter")]),a._v(" 采用一步认证, 参数通过 header 或者 url 参数传递\n在 "),s("code",[a._v("ws adapter")]),a._v(" 中, websocket 一经连接, 便绑定到固定 session, 后续不需再次传递 "),s("code",[a._v("sessionKey")]),a._v(" 参数")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("名字")]),a._v(" "),s("th",[a._v("类型")]),a._v(" "),s("th",[a._v("举例")]),a._v(" "),s("th",[a._v("说明")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("verifyKey")]),a._v(" "),s("td",[a._v("String")]),a._v(" "),s("td",[a._v('"1234567890"')]),a._v(" "),s("td",[a._v("verifyKey, 配置文件中指定")])]),a._v(" "),s("tr",[s("td",[a._v("sessionKey")]),a._v(" "),s("td",[a._v("String")]),a._v(" "),s("td",[a._v('"UnVerifiedSession"')]),a._v(" "),s("td",[a._v("新建连接 或 "),s("code",[a._v("singleMode")]),a._v(" 模式下为空, 通过已有 sessionKey 连接时不可为空")])]),a._v(" "),s("tr",[s("td",[a._v("qq")]),a._v(" "),s("td",[a._v("Long")]),a._v(" "),s("td",[a._v("12345678")]),a._v(" "),s("td",[a._v("绑定的账号, "),s("code",[a._v("singleMode")]),a._v(" 模式下为空, 非 "),s("code",[a._v("singleMode")]),a._v(" 下新建连接不可为空")])])])]),a._v(" "),s("blockquote",[s("p",[s("code",[a._v("ws adatper")]),a._v(" 不允许复用 "),s("code",[a._v("sessionKey")]),a._v(", 建立连接时, 会同时关闭同一个”通道“中的旧 "),s("code",[a._v("websocket")]),a._v(".\n但可以同其他 adapter 复用")])]),a._v(" "),s("p",[a._v("连接连接后，"),s("code",[a._v("ws adapter")]),a._v(" 会立即返回 "),s("code",[a._v("sessionKey")])]),a._v(" "),s("div",{staticClass:"language-json5 line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json5"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"syncId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"data"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"code"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"session"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"YourSessionKey"')]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br")])]),s("h2",{attrs:{id:"接收消息与事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#接收消息与事件"}},[a._v("#")]),a._v(" 接收消息与事件")]),a._v(" "),s("h3",{attrs:{id:"创建连接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建连接"}},[a._v("#")]),a._v(" 创建连接")]),a._v(" "),s("p",[s("code",[a._v("ws adatper")]),a._v(" 通过 websocket 主动推送消息与事件")]),a._v(" "),s("p",[s("code",[a._v("ws adatper")]),a._v(" 拥有三个连接通道")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("/message")]),a._v(": 推送消息")]),a._v(" "),s("li",[s("code",[a._v("/event")]),a._v(": 推送事件")]),a._v(" "),s("li",[s("code",[a._v("/all")]),a._v(": 推送消息及事件")])]),a._v(" "),s("blockquote",[s("p",[a._v("示例: ws://localhost:8080/message?verifyKey=1234567890&qq=12345678")])]),a._v(" "),s("h3",{attrs:{id:"数据格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据格式"}},[a._v("#")]),a._v(" 数据格式")]),a._v(" "),s("p",[s("code",[a._v("ws adapter")]),a._v(" 采用 json 文本格式进行数据传输")]),a._v(" "),s("h4",{attrs:{id:"传入格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#传入格式"}},[a._v("#")]),a._v(" 传入格式")]),a._v(" "),s("div",{staticClass:"language-json5 line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json5"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"syncId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("123")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("                  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 消息同步的字段")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"command"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"sendFriendMessage"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 命令字")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"subCommand"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token null keyword"}},[a._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("             "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 子命令字, 可空")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"content"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("                   "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 命令的数据对象, 与通用接口定义相同")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("h4",{attrs:{id:"推送格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#推送格式"}},[a._v("#")]),a._v(" 推送格式")]),a._v(" "),s("div",{staticClass:"language-json5 line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json5"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"syncId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("123")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 消息同步的字段")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"data"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("      "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 推送消息内容, 与通用接口定义相同")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("h4",{attrs:{id:"相关阅读"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相关阅读"}},[a._v("#")]),a._v(" 相关阅读:")]),a._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/mirai-api-http/api/MessageType.html"}},[a._v("消息类型一览")])],1),a._v(" "),s("li",[s("RouterLink",{attrs:{to:"/mirai-api-http/api/EventType.html"}},[a._v("事件类型一览")])],1)]),a._v(" "),s("h2",{attrs:{id:"获取插件信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取插件信息"}},[a._v("#")]),a._v(" 获取插件信息")]),a._v(" "),s("p",[a._v("使用此方法获取插件的信息，如版本号")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("命令字: about\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("通用接口定义: "),s("RouterLink",{attrs:{to:"/mirai-api-http/api/API.html#获取插件信息"}},[a._v("获取插件信息")])],1),a._v(" "),s("h2",{attrs:{id:"缓存操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缓存操作"}},[a._v("#")]),a._v(" 缓存操作")]),a._v(" "),s("h3",{attrs:{id:"通过messageid获取消息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通过messageid获取消息"}},[a._v("#")]),a._v(" 通过messageId获取消息")]),a._v(" "),s("p",[a._v("此方法通过 "),s("code",[a._v("messageId")]),a._v(" 获取历史消息, 历史消息的缓存有容量大小, 在配置文件中设置")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("命令字: messageFromId\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("通用接口定义: "),s("RouterLink",{attrs:{to:"/mirai-api-http/api/API.html#通过messageId获取消息"}},[a._v("通过messageId获取消息")])],1),a._v(" "),s("h2",{attrs:{id:"获取账号信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取账号信息"}},[a._v("#")]),a._v(" 获取账号信息")]),a._v(" "),s("h3",{attrs:{id:"获取好友列表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取好友列表"}},[a._v("#")]),a._v(" 获取好友列表")]),a._v(" "),s("p",[a._v("使用此方法获取bot的好友列表")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("命令字: friendList\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("通用接口定义: "),s("RouterLink",{attrs:{to:"/mirai-api-http/api/API.html#获取好友列表"}},[a._v("获取好友列表")])],1),a._v(" "),s("h3",{attrs:{id:"获取群列表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取群列表"}},[a._v("#")]),a._v(" 获取群列表")]),a._v(" "),s("p",[a._v("使用此方法获取bot的群列表")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("命令字: groupList\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("通用接口定义: "),s("RouterLink",{attrs:{to:"/mirai-api-http/api/API.html#获取群列表"}},[a._v("获取群列表")])],1),a._v(" "),s("h3",{attrs:{id:"获取群成员列表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取群成员列表"}},[a._v("#")]),a._v(" 获取群成员列表")]),a._v(" "),s("p",[a._v("使用此方法获取bot指定群中的成员列表")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("命令字: memberList\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("通用接口定义: "),s("RouterLink",{attrs:{to:"/mirai-api-http/api/API.html#获取群成员列表"}},[a._v("获取群成员列表")])],1),a._v(" "),s("h3",{attrs:{id:"获取bot资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取bot资料"}},[a._v("#")]),a._v(" 获取Bot资料")]),a._v(" "),s("p",[a._v("此接口获取 session 绑定 bot 的详细资料")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("命令字: botProfile\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("通用接口定义: "),s("RouterLink",{attrs:{to:"/mirai-api-http/api/API.html#获取Bot资料"}},[a._v("获取Bot资料")])],1),a._v(" "),s("h3",{attrs:{id:"获取好友资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取好友资料"}},[a._v("#")]),a._v(" 获取好友资料")]),a._v(" "),s("p",[a._v("此接口获取好友的详细资料")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("命令字: friendProfile\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("通用接口定义: "),s("RouterLink",{attrs:{to:"/mirai-api-http/api/API.html#获取好友资料"}},[a._v("获取好友资料")])],1),a._v(" "),s("h3",{attrs:{id:"获取群成员资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取群成员资料"}},[a._v("#")]),a._v(" 获取群成员资料")]),a._v(" "),s("p",[a._v("此接口获取群成员的消息资料")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("命令字: memberProfile\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("通用接口定义: "),s("RouterLink",{attrs:{to:"/mirai-api-http/api/API.html#获取群成员资料"}},[a._v("获取群成员资料")])],1),a._v(" "),s("h2",{attrs:{id:"消息发送与撤回"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#消息发送与撤回"}},[a._v("#")]),a._v(" 消息发送与撤回")]),a._v(" "),s("h3",{attrs:{id:"发送好友消息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发送好友消息"}},[a._v("#")]),a._v(" 发送好友消息")]),a._v(" "),s("p",[a._v("使用此方法向指定好友发送消息")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("命令字: sendFriendMessage\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("通用接口定义: "),s("RouterLink",{attrs:{to:"/mirai-api-http/api/API.html#发送好友消息"}},[a._v("发送好友消息")])],1),a._v(" "),s("h3",{attrs:{id:"发送群消息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发送群消息"}},[a._v("#")]),a._v(" 发送群消息")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("命令字: sendGroupMessage\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("通用接口定义: "),s("RouterLink",{attrs:{to:"/mirai-api-http/api/API.html#发送群消息"}},[a._v("发送群消息")])],1),a._v(" "),s("h3",{attrs:{id:"发送临时会话消息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发送临时会话消息"}},[a._v("#")]),a._v(" 发送临时会话消息")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("命令字: sendTempMessage\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("通用接口定义: "),s("RouterLink",{attrs:{to:"/mirai-api-http/api/API.html#发送临时会话消息"}},[a._v("发送临时会话消息")])],1),a._v(" "),s("h3",{attrs:{id:"发送头像戳一戳消息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发送头像戳一戳消息"}},[a._v("#")]),a._v(" 发送头像戳一戳消息")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("命令字: sendNudge\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("通用接口定义: "),s("RouterLink",{attrs:{to:"/mirai-api-http/api/API.html#发送头像戳一戳消息"}},[a._v("发送头像戳一戳消息")])],1),a._v(" "),s("h3",{attrs:{id:"撤回消息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#撤回消息"}},[a._v("#")]),a._v(" 撤回消息")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("命令字: recall\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("通用接口定义: "),s("RouterLink",{attrs:{to:"/mirai-api-http/api/API.html#撤回消息"}},[a._v("撤回消息")])],1),a._v(" "),s("h2",{attrs:{id:"文件操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件操作"}},[a._v("#")]),a._v(" 文件操作")]),a._v(" "),s("h3",{attrs:{id:"查看文件列表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看文件列表"}},[a._v("#")]),a._v(" 查看文件列表")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("命令字: file_list\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("通用接口定义: "),s("RouterLink",{attrs:{to:"/mirai-api-http/api/API.html#查看文件列表"}},[a._v("查看文件列表")])],1),a._v(" "),s("h3",{attrs:{id:"获取文件信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取文件信息"}},[a._v("#")]),a._v(" 获取文件信息")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("命令字: file_info\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("通用接口定义: "),s("RouterLink",{attrs:{to:"/mirai-api-http/api/API.html#获取文件信息"}},[a._v("获取文件信息")])],1),a._v(" "),s("h3",{attrs:{id:"创建文件夹"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建文件夹"}},[a._v("#")]),a._v(" 创建文件夹")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("命令字: file_mkdir\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("通用接口定义: "),s("RouterLink",{attrs:{to:"/mirai-api-http/api/API.html#创建文件夹"}},[a._v("创建文件夹")])],1),a._v(" "),s("h3",{attrs:{id:"删除文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除文件"}},[a._v("#")]),a._v(" 删除文件")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("命令字: file_delete\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("通用接口定义: "),s("RouterLink",{attrs:{to:"/mirai-api-http/api/API.html#删除文件"}},[a._v("删除文件")])],1),a._v(" "),s("h3",{attrs:{id:"移动文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#移动文件"}},[a._v("#")]),a._v(" 移动文件")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("命令字: file_move\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("通用接口定义: "),s("RouterLink",{attrs:{to:"/mirai-api-http/api/API.html#移动文件"}},[a._v("移动文件")])],1),a._v(" "),s("h3",{attrs:{id:"重命名文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重命名文件"}},[a._v("#")]),a._v(" 重命名文件")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("命令字: file_rename\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("通用接口定义: "),s("RouterLink",{attrs:{to:"/mirai-api-http/api/API.html#重命名文件"}},[a._v("重命名文件")])],1),a._v(" "),s("h2",{attrs:{id:"多媒体内容上传"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多媒体内容上传"}},[a._v("#")]),a._v(" 多媒体内容上传")]),a._v(" "),s("h3",{attrs:{id:"图片文件上传"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图片文件上传"}},[a._v("#")]),a._v(" 图片文件上传")]),a._v(" "),s("p",[a._v("(未施工)")]),a._v(" "),s("h3",{attrs:{id:"语音文件上传"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语音文件上传"}},[a._v("#")]),a._v(" 语音文件上传")]),a._v(" "),s("p",[a._v("(未施工)")]),a._v(" "),s("h3",{attrs:{id:"群文件上传"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#群文件上传"}},[a._v("#")]),a._v(" 群文件上传")]),a._v(" "),s("p",[a._v("(未施工)")]),a._v(" "),s("h2",{attrs:{id:"账号管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#账号管理"}},[a._v("#")]),a._v(" 账号管理")]),a._v(" "),s("h3",{attrs:{id:"删除好友"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除好友"}},[a._v("#")]),a._v(" 删除好友")]),a._v(" "),s("p",[a._v("使用此方法删除指定好友")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("命令字: deleteFriend\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("通用接口定义: "),s("RouterLink",{attrs:{to:"/mirai-api-http/api/API.html#删除好友"}},[a._v("删除好友")])],1),a._v(" "),s("h2",{attrs:{id:"群管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#群管理"}},[a._v("#")]),a._v(" 群管理")]),a._v(" "),s("h3",{attrs:{id:"禁言群成员"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#禁言群成员"}},[a._v("#")]),a._v(" 禁言群成员")]),a._v(" "),s("p",[a._v("使用此方法指定群禁言指定群员（需要有相关限权）")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("命令字: mute\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("通用接口定义: "),s("RouterLink",{attrs:{to:"/mirai-api-http/api/API.html#禁言群成员"}},[a._v("禁言群成员")])],1),a._v(" "),s("h3",{attrs:{id:"解除群成员禁言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解除群成员禁言"}},[a._v("#")]),a._v(" 解除群成员禁言")]),a._v(" "),s("p",[a._v("使用此方法指定群解除群成员禁言（需要有相关限权）")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("命令字: unmute\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("通用接口定义: "),s("RouterLink",{attrs:{to:"/mirai-api-http/api/API.html#解除群成员禁言"}},[a._v("解除群成员禁言")])],1),a._v(" "),s("h3",{attrs:{id:"移除群成员"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#移除群成员"}},[a._v("#")]),a._v(" 移除群成员")]),a._v(" "),s("p",[a._v("使用此方法移除指定群成员（需要有相关限权）")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("命令字: kick\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("通用接口定义: "),s("RouterLink",{attrs:{to:"/mirai-api-http/api/API.html#移除群成员"}},[a._v("移除群成员")])],1),a._v(" "),s("h3",{attrs:{id:"退出群聊"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#退出群聊"}},[a._v("#")]),a._v(" 退出群聊")]),a._v(" "),s("p",[a._v("使用此方法使Bot退出群聊")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("命令字: quit\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("通用接口定义: "),s("RouterLink",{attrs:{to:"/mirai-api-http/api/API.html#退出群聊"}},[a._v("退出群聊")])],1),a._v(" "),s("h3",{attrs:{id:"全体禁言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全体禁言"}},[a._v("#")]),a._v(" 全体禁言")]),a._v(" "),s("p",[a._v("使用此方法令指定群进行全体禁言（需要有相关限权）")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("命令字: muteAll\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("通用接口定义: "),s("RouterLink",{attrs:{to:"/mirai-api-http/api/API.html#全体禁言"}},[a._v("全体禁言")])],1),a._v(" "),s("h3",{attrs:{id:"解除全体禁言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解除全体禁言"}},[a._v("#")]),a._v(" 解除全体禁言")]),a._v(" "),s("p",[a._v("使用此方法令指定群解除全体禁言（需要有相关限权）")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("命令字: unmuteAll\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("通用接口定义: "),s("RouterLink",{attrs:{to:"/mirai-api-http/api/API.html#解除全体禁言"}},[a._v("解除全体禁言")])],1),a._v(" "),s("h3",{attrs:{id:"设置群精华消息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置群精华消息"}},[a._v("#")]),a._v(" 设置群精华消息")]),a._v(" "),s("p",[a._v("使用此方法添加一条消息为精华消息（需要有相关限权）")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("命令字: setEssence\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("通用接口定义: "),s("RouterLink",{attrs:{to:"/mirai-api-http/api/API.html#设置群精华消息"}},[a._v("设置群精华消息")])],1),a._v(" "),s("h3",{attrs:{id:"获取群设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取群设置"}},[a._v("#")]),a._v(" 获取群设置")]),a._v(" "),s("p",[a._v("使用此方法获取群设置")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("命令字: groupConfig\n子命令字: get\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("通用接口定义: "),s("RouterLink",{attrs:{to:"/mirai-api-http/api/API.html#获取群设置"}},[a._v("获取群设置")])],1),a._v(" "),s("h3",{attrs:{id:"修改群设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改群设置"}},[a._v("#")]),a._v(" 修改群设置")]),a._v(" "),s("p",[a._v("使用此方法修改群设置（需要有相关限权）")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("命令字: groupConfig\n子命令字: update\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("通用接口定义: "),s("RouterLink",{attrs:{to:"/mirai-api-http/api/API.html#修改群设置"}},[a._v("修改群设置")])],1),a._v(" "),s("h3",{attrs:{id:"获取群员设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取群员设置"}},[a._v("#")]),a._v(" 获取群员设置")]),a._v(" "),s("p",[a._v("使用此方法获取群员设置")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("命令字: memberInfo\n子命令字: get\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("通用接口定义: "),s("RouterLink",{attrs:{to:"/mirai-api-http/api/API.html#获取群员设置"}},[a._v("获取群员设置")])],1),a._v(" "),s("h3",{attrs:{id:"修改群员设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改群员设置"}},[a._v("#")]),a._v(" 修改群员设置")]),a._v(" "),s("p",[a._v("使用此方法修改群员设置（需要有相关限权）")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("命令字: memberInfo\n子命令字: update\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("通用接口定义: "),s("RouterLink",{attrs:{to:"/mirai-api-http/api/API.html#修改群员设置"}},[a._v("修改群员设置")])],1),a._v(" "),s("h3",{attrs:{id:"修改群员管理员"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改群员管理员"}},[a._v("#")]),a._v(" 修改群员管理员")]),a._v(" "),s("p",[a._v("使用此方法修改群员的管理员权限（需要有群主限权）")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("命令字: memberAdmin\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("通用接口定义: "),s("RouterLink",{attrs:{to:"/mirai-api-http/api/API.html#修改群员管理员"}},[a._v("修改群员管理员")])],1),a._v(" "),s("h2",{attrs:{id:"事件处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件处理"}},[a._v("#")]),a._v(" 事件处理")]),a._v(" "),s("h3",{attrs:{id:"添加好友申请"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加好友申请"}},[a._v("#")]),a._v(" 添加好友申请")]),a._v(" "),s("p",[a._v("使用此方法处理添加好友申请")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("命令字: resp_newFriendRequestEvent\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("通用接口定义: "),s("RouterLink",{attrs:{to:"/mirai-api-http/api/API.html#添加好友申请"}},[a._v("添加好友申请")])],1),a._v(" "),s("h3",{attrs:{id:"用户入群申请"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用户入群申请"}},[a._v("#")]),a._v(" 用户入群申请")]),a._v(" "),s("p",[a._v("使用此方法处理用户入群申请")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("命令字: resp_memberJoinRequestEvent\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("通用接口定义: "),s("RouterLink",{attrs:{to:"/mirai-api-http/api/API.html#用户入群申请（Bot需要有管理员权限）"}},[a._v("用户入群申请")])],1),a._v(" "),s("h3",{attrs:{id:"bot被邀请入群申请"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bot被邀请入群申请"}},[a._v("#")]),a._v(" Bot被邀请入群申请")]),a._v(" "),s("p",[a._v("使用此方法处理Bot被邀请入群申请")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("命令字: resp_botInvitedJoinGroupRequestEvent\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("通用接口定义: "),s("RouterLink",{attrs:{to:"/mirai-api-http/api/API.html#Bot被邀请入群申请"}},[a._v("Bot被邀请入群申请")])],1)])}),[],!1,null,null,null);t.default=r.exports}}]);