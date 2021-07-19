(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{761:function(e,v,_){"use strict";_.r(v);var t=_(109),a=Object(t.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"mirai-migration-from-1-x"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mirai-migration-from-1-x"}},[e._v("#")]),e._v(" Mirai - Migration From 1.x")]),e._v(" "),_("p",[e._v("本文介绍如何从 1.x 升级到 2.x。")]),e._v(" "),_("p",[e._v("根据你的语言选择："),_("a",{attrs:{href:"#%E4%BD%BF%E7%94%A8-kotlin"}},[e._v("Kotlin")]),e._v(" | "),_("a",{attrs:{href:"#%E4%BD%BF%E7%94%A8-java"}},[e._v("Java")])]),e._v(" "),_("h2",{attrs:{id:"使用-kotlin"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#使用-kotlin"}},[e._v("#")]),e._v(" 使用 Kotlin")]),e._v(" "),_("h3",{attrs:{id:"如何自动完成-kotlin-的错误替换"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#如何自动完成-kotlin-的错误替换"}},[e._v("#")]),e._v(" 如何自动完成 Kotlin 的错误替换")]),e._v(" "),_("p",[e._v("仅 IntelliJ IDEA 和 Android Studio 支持这个功能。")]),e._v(" "),_("p",[e._v("把光标放在一个错误中间（或者按 F2 自动跳转到错误），在 Windows 使用 "),_("code",[e._v("Alt + Enter")]),e._v(" 快捷键，macOS 使用 "),_("code",[e._v("Option + Enter")]),e._v("，会得到弹窗如下图。")]),e._v(" "),_("p",[_("img",{attrs:{src:"https://i.loli.net/2020/12/18/CiX9qApu5BnVPch.png",alt:"YBP47V_Z640J_YU5WZ_JVPW.png"}})]),e._v(" "),_("p",[e._v("第一项为仅替换这一个错误，第二项为替换项目中的所有这个错误。一般推荐选择第二项并回车即可。")]),e._v(" "),_("p",[_("strong",[e._v("Mirai 的修改都尽可能地提供了这样的替换，请依次按如下步骤更新以下几个版本，才能使用这些替换。")]),_("br"),e._v("\n部分无法提供自动替换的修改会在下文说明。")]),e._v(" "),_("h3",{attrs:{id:"_1-x-2-0-m1-1"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-x-2-0-m1-1"}},[e._v("#")]),e._v(" "),_("code",[e._v("1.x")]),e._v(" -> "),_("code",[e._v("2.0-M1-1")])]),e._v(" "),_("p",[e._v("替换依赖（可以直接全局搜索替换）:")]),e._v(" "),_("ul",[_("li",[_("code",[e._v("net.mamoe:mirai-core")]),e._v(" -> "),_("code",[e._v("net.mamoe:mirai-core-api")])]),e._v(" "),_("li",[_("code",[e._v("net.mamoe:mirai-core-qqandroid")]),e._v(" -> "),_("code",[e._v("net.mamoe:mirai-core")])])]),e._v(" "),_("p",[_("strong",[e._v("Kotlin")]),e._v(":")]),e._v(" "),_("ol",[_("li",[_("p",[e._v("将 "),_("code",[e._v("MessageChain[Image]")]),e._v(" 等 IDE 会提示错误的调用调整为:")]),e._v(" "),_("ul",[_("li",[_("code",[e._v(".findIsInstance<Image>()")]),e._v(" （"),_("code",[e._v("Image")]),e._v(" 不存在时返回 "),_("code",[e._v("null")]),e._v("）")]),e._v(" "),_("li",[_("code",[e._v(".firstIsInstance<Image>()")]),e._v("  （"),_("code",[e._v("Image")]),e._v(" 不存在时抛出异常）")])]),e._v(" "),_("p",[_("strong",[e._v("提示")]),e._v(": 如果你是想获取消息的内容，可以使用 "),_("code",[e._v("messageChain.content")]),e._v(" 扩展，而不需要使用 "),_("code",[e._v("MessageChain[PlainText]")])])]),e._v(" "),_("li",[_("p",[_("code",[e._v("Bot.getFriend")]),e._v(" 等函数以前在找不到好友时会抛出异常，现在它们会返回 "),_("code",[e._v("null")]),e._v("。"),_("br"),e._v("\n请替换 "),_("code",[e._v("Bot.getFriend")]),e._v(" 为 "),_("code",[e._v("Bot.getFriendOrFail")]),e._v("。")])])]),e._v(" "),_("p",[e._v("只要能通过编译就可以适配下一个版本。")]),e._v(" "),_("h3",{attrs:{id:"_2-0-m1-2-0-m2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-0-m1-2-0-m2"}},[e._v("#")]),e._v(" "),_("code",[e._v("2.0-M1")]),e._v(" -> "),_("code",[e._v("2.0-M2")])]),e._v(" "),_("p",[e._v("修改都可以自动替换完成。"),_("strong",[e._v("但请不要跳过 "),_("code",[e._v("2.0-M2")]),e._v(" 这一步骤。")])]),e._v(" "),_("h3",{attrs:{id:"_2-0-m2-2-0-rc"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-0-m2-2-0-rc"}},[e._v("#")]),e._v(" "),_("code",[e._v("2.0-M2")]),e._v(" -> "),_("code",[e._v("2.0-RC")])]),e._v(" "),_("ol",[_("li",[_("p",[e._v("戳一戳事件由以前的多个事件变为了统一的单个 "),_("code",[e._v("NudgeEvent")]),e._v("。若有使用请直接参考 "),_("code",[e._v("NudgeEvent")]),e._v(" 源码修改。")])]),e._v(" "),_("li",[_("p",[_("code",[e._v("Listener.ConcurrencyKind")]),e._v(" 和 "),_("code",[e._v("Listener.EventPriority")]),e._v(" 由嵌套类移动到顶层，请执行全局替换：")]),e._v(" "),_("ul",[_("li",[_("code",[e._v("Listener.ConcurrencyKind")]),e._v(" -> "),_("code",[e._v("ConcurrencyKind")])]),e._v(" "),_("li",[_("code",[e._v("Listener.EventPriority")]),e._v(" -> "),_("code",[e._v("EventPriority")])])])]),e._v(" "),_("li",[_("p",[_("code",[e._v("IMirai")]),e._v(" 低级 API 函数名现在不再带有 "),_("code",[e._v("_lowLevel")]),e._v(" 前缀, 直接删除前缀即可。")])])]),e._v(" "),_("p",[e._v("其他修改都可以自动替换完成。")]),e._v(" "),_("h3",{attrs:{id:"_2-0-rc-2-0-0"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-0-rc-2-0-0"}},[e._v("#")]),e._v(" "),_("code",[e._v("2.0-RC")]),e._v(" -> "),_("code",[e._v("2.0.0")])]),e._v(" "),_("p",[e._v("直接把版本号更改为 "),_("code",[e._v("2.0.0")]),e._v("。")]),e._v(" "),_("p",[e._v("至此你已经成功升级到了 mirai 2.0。"),_("RouterLink",{attrs:{to:"/#jvm-平台-mirai-开发"}},[e._v("回到 Mirai 文档索引")])],1),e._v(" "),_("hr"),e._v(" "),_("h2",{attrs:{id:"使用-java"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#使用-java"}},[e._v("#")]),e._v(" 使用 Java")]),e._v(" "),_("p",[_("strong",[e._v("请依次按如下步骤更新以下几个版本")])]),e._v(" "),_("h3",{attrs:{id:"_1-x-2-0-m1"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-x-2-0-m1"}},[e._v("#")]),e._v(" "),_("code",[e._v("1.x")]),e._v(" -> "),_("code",[e._v("2.0-M1")])]),e._v(" "),_("ul",[_("li",[e._v("消息事件包名有调整, 请根据 IDE 提示自动导入引用失效的包.")]),e._v(" "),_("li",[e._v("Bot 构造方法调整, 将原 "),_("code",[e._v("BotFactoryKt.newBot(...)")]),e._v(" 替换为 "),_("code",[e._v("BotFactory.INSTANCE.newBot(...)")])]),e._v(" "),_("li",[e._v("如果有调用 "),_("code",[e._v("Utils.getDefaultLogger().invoke(...)")]),e._v("，替换为 "),_("code",[e._v("MiraiLogger.create(...)")])]),e._v(" "),_("li",[_("code",[e._v("Bot.getFriend")]),e._v(" 等方法以前在找不到好友时会抛出异常，现在它们会返回 "),_("code",[e._v("null")]),e._v("。"),_("br"),e._v("\n请替换为 "),_("code",[e._v("Bot.getFriendOrFail")]),e._v("。")])]),e._v(" "),_("h3",{attrs:{id:"_2-0-m1-2-0-m2-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-0-m1-2-0-m2-2"}},[e._v("#")]),e._v(" "),_("code",[e._v("2.0-M1")]),e._v(" -> "),_("code",[e._v("2.0-M2")])]),e._v(" "),_("p",[e._v("图片和语音上传的 API 有更改。")]),e._v(" "),_("p",[e._v("新增了资源 API，可以统一缓存文件。")]),e._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("ExternalResource.create(file);\nExternalResource.create(inputStream);\n")])]),e._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[e._v("1")]),_("br"),_("span",{staticClass:"line-number"},[e._v("2")]),_("br")])]),_("p",[e._v("上传一个资源为图片或语音：")]),e._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("contact.uploadImage(resource);\ncontact.uploadVoice(resource);\n")])]),e._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[e._v("1")]),_("br"),_("span",{staticClass:"line-number"},[e._v("2")]),_("br")])]),_("p",[e._v("或者使用工具方法直接发送一个 "),_("code",[e._v("File")]),e._v(" 或 "),_("code",[e._v("InputStream")]),e._v(" 为图片：")]),e._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("Contact.sendImage(contact, inputStream); // 返回 MessageReceipt\nContact.sendImage(contact, file);        // 返回 MessageReceipt\n\nContact.uploadImage(contact, inputStream); // 返回 Image 消息\nContact.uploadImage(contact, file);        // 返回 Image 消息\n")])]),e._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[e._v("1")]),_("br"),_("span",{staticClass:"line-number"},[e._v("2")]),_("br"),_("span",{staticClass:"line-number"},[e._v("3")]),_("br"),_("span",{staticClass:"line-number"},[e._v("4")]),_("br"),_("span",{staticClass:"line-number"},[e._v("5")]),_("br")])]),_("h3",{attrs:{id:"_2-0-m2-2-0-rc-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-0-m2-2-0-rc-2"}},[e._v("#")]),e._v(" "),_("code",[e._v("2.0-M2")]),e._v(" -> "),_("code",[e._v("2.0-RC")])]),e._v(" "),_("ol",[_("li",[_("p",[e._v("戳一戳事件由以前的多个事件变为了统一的单个 "),_("code",[e._v("NudgeEvent")]),e._v("。若有使用请直接参考 "),_("code",[e._v("NudgeEvent")]),e._v(" 源码修改。")])]),e._v(" "),_("li",[_("p",[_("code",[e._v("Listener.ConcurrencyKind")]),e._v(" 和 "),_("code",[e._v("Listener.EventPriority")]),e._v(" 由嵌套类移动到顶层，请执行全局替换：")]),e._v(" "),_("ul",[_("li",[_("code",[e._v("Listener.ConcurrencyKind")]),e._v(" -> "),_("code",[e._v("ConcurrencyKind")])]),e._v(" "),_("li",[_("code",[e._v("Listener.EventPriority")]),e._v(" -> "),_("code",[e._v("EventPriority")])])])]),e._v(" "),_("li",[_("p",[_("code",[e._v("IMirai")]),e._v(" 低级 API 方法名现在不再带有 "),_("code",[e._v("_lowLevel")]),e._v(" 前缀, 直接删除前缀即可。")])])]),e._v(" "),_("h3",{attrs:{id:"_2-0-rc-2-0-0-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-0-rc-2-0-0-2"}},[e._v("#")]),e._v(" "),_("code",[e._v("2.0-RC")]),e._v(" -> "),_("code",[e._v("2.0.0")])]),e._v(" "),_("p",[e._v("直接把版本号更改为 "),_("code",[e._v("2.0.0")]),e._v("。")]),e._v(" "),_("p",[e._v("至此你已经成功升级到了 mirai 2.0。"),_("RouterLink",{attrs:{to:"/#jvm-平台-mirai-开发"}},[e._v("回到 Mirai 文档索引")])],1)])}),[],!1,null,null,null);v.default=a.exports}}]);