(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{745:function(t,a,s){"use strict";s.r(a);var e=s(109),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"mirai-bots"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mirai-bots"}},[t._v("#")]),t._v(" Mirai - Bots")]),t._v(" "),s("p",[s("strong",[t._v("目录")])]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#1-%E5%88%9B%E5%BB%BA%E5%92%8C%E9%85%8D%E7%BD%AE-bot"}},[t._v("1. 创建和配置 "),s("code",[t._v("Bot")])])]),t._v(" "),s("li",[s("a",{attrs:{href:"#2-%E7%99%BB%E5%BD%95"}},[t._v("2. 登录")])])]),t._v(" "),s("h2",{attrs:{id:"_1-创建和配置-bot"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建和配置-bot"}},[t._v("#")]),t._v(" 1. 创建和配置 "),s("code",[t._v("Bot")])]),t._v(" "),s("p",[t._v("一个机器人被以 "),s("code",[t._v("Bot")]),t._v(" 对象描述。mirai 的交互入口点是 "),s("code",[t._v("Bot")]),t._v("。"),s("code",[t._v("Bot")]),t._v(" 只可通过 "),s("a",{attrs:{href:"../mirai-core-api/src/commonMain/kotlin/BotFactory.kt#L22-L87"}},[s("code",[t._v("BotFactory")])]),t._v(" 内的 "),s("code",[t._v("newBot")]),t._v(" 方法获得：")]),t._v(" "),s("blockquote",[s("p",[t._v("你现在还不需要知道 "),s("code",[t._v("Bot")]),t._v(" 可以干什么。")])]),t._v(" "),s("div",{staticClass:"language-kotlin line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" BotFactory "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("newBot")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("qq"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Long"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" password"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" configuration"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" BotConfiguration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Bot\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("newBot")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("qq"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Long"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" password"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Bot\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("newBot")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("qq"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Long"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" passwordMd5"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ByteArray"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" configuration"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" BotConfiguration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Bot\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("newBot")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("qq"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Long"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" passwordMd5"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ByteArray"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Bot\n    \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("companion")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("object")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" BotFactory "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("by")]),t._v(" BotFactoryImpl\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("p",[t._v("通常的调用方法为：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// Kotlin\nval bot = BotFactory.newBot(    )\n\n// Java\nBot bot = BotFactory.INSTANCE.newBot(    );\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("blockquote",[s("p",[t._v("Scala 使用者请查看 "),s("a",{attrs:{href:"https://github.com/mamoe/mirai/issues/834",target:"_blank",rel:"noopener noreferrer"}},[t._v("#834"),s("OutboundLink")],1)])]),t._v(" "),s("h3",{attrs:{id:"配置-bot"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-bot"}},[t._v("#")]),t._v(" 配置 Bot")]),t._v(" "),s("p",[t._v("可以切换使用的协议、控制日志输出等。")]),t._v(" "),s("p",[t._v("仅能在构造 Bot 时修改其配置：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// Kotlin\nval bot = BotFactory.newBot(qq, password) {\n    // 配置，例如：\n    fileBasedDeviceInfo()\n}\n\n// Java\nBot bot = BotFactory.INSTANCE.newBot(qq, password, new BotConfiguration() {{\n    // 配置，例如：\n    fileBasedDeviceInfo()\n}})\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])]),s("p",[t._v("下文示例代码都要放入 "),s("code",[t._v("// 配置")]),t._v(" 中。")]),t._v(" "),s("blockquote",[s("p",[t._v("可在 "),s("a",{attrs:{href:"../mirai-core-api/src/commonMain/kotlin/utils/BotConfiguration.kt#L23"}},[t._v("BotConfiguration.kt")]),t._v(" 查看完整配置列表")])]),t._v(" "),s("h3",{attrs:{id:"常用配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用配置"}},[t._v("#")]),t._v(" 常用配置")]),t._v(" "),s("h4",{attrs:{id:"修改运行目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改运行目录"}},[t._v("#")]),t._v(" 修改运行目录")]),t._v(" "),s("p",[t._v("默认为 "),s("code",[t._v('File(".")')])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('// Kotlin\nworkingDir = File("C:/mirai")\n\n// Java\nsetWorkingDir(File("C:/mirai"))\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h4",{attrs:{id:"设备信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设备信息"}},[t._v("#")]),t._v(" 设备信息")]),t._v(" "),s("p",[t._v("Bot 默认使用全随机的设备信息。"),s("strong",[t._v("在更换账号地点时候使用随机设备信息可能会导致无法登录")]),t._v("，当然，"),s("strong",[t._v("成功登录时使用的设备信息也可以保存后在新的设备使用")]),t._v("。")]),t._v(" "),s("p",[t._v("要使用 "),s("code",[t._v("device.json")]),t._v(" 存储设备信息：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('fileBasedDeviceInfo() // 存储为 "device.json" \n// 或\nfileBasedDeviceInfo("myDeviceInfo.json") // 存储为 "myDeviceInfo.json"\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("要自定义设备信息：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// Kotlin\ndeviceInfo = { bot ->  /* create device info */   }\n\n// Java\nsetDeviceInfo(bot -> /* create device info */)\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("在线生成自定义设备信息的 "),s("code",[t._v("device.json")]),t._v(": https://ryoii.github.io/mirai-devicejs-generator/")]),t._v(" "),s("h4",{attrs:{id:"切换登录协议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#切换登录协议"}},[t._v("#")]),t._v(" 切换登录协议")]),t._v(" "),s("p",[t._v("Mirai 支持多种登录协议："),s("code",[t._v("ANDROID_PHONE")]),t._v("，"),s("code",[t._v("ANDROID_PAD")]),t._v("，"),s("code",[t._v("ANDROID_WATCH")]),t._v("，默认使用 "),s("code",[t._v("ANDROID_PHONE")]),t._v("。")]),t._v(" "),s("p",[t._v("若登录失败，可尝试切换协议。"),s("strong",[t._v("但注意部分功能在部分协议上不受支持")]),t._v("，详见源码内注释。")]),t._v(" "),s("p",[t._v("要切换协议：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// Kotlin\nprotocol = BotConfiguration.MiraiProtocol.ANDROID_PAD\n\n// Java\nsetProtocol(MiraiProtocol.ANDROID_PAD)\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h4",{attrs:{id:"重定向日志"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重定向日志"}},[t._v("#")]),t._v(" 重定向日志")]),t._v(" "),s("p",[t._v("Bot 有两个日志类别，"),s("code",[t._v("Bot")]),t._v(" 或 "),s("code",[t._v("Net")]),t._v("。"),s("code",[t._v("Bot")]),t._v(" 为通常日志，如收到事件。"),s("code",[t._v("Net")]),t._v(" 为网络日志，包含收到和发出的每一个包和网络层解析时遇到的错误。")]),t._v(" "),s("p",[t._v("重定向日志到文件：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("redirectBotLogToFile()\nredirectBotLogToDirectory()\n\nredirectNetworkLogToFile()\nredirectNetworkLogToDirectory()\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("手动覆盖日志：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// Kotlin\nnetworkLoggerSupplier = { bot -> /* create logger */ }\nbotLoggerSupplier = { bot -> /* create logger */ }\n\n// Java\nsetNetworkLoggerSupplier(bot -> /* create logger */)\nsetBotLoggerSupplier(bot -> /* create logger */)\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("p",[t._v("关闭日志：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("noNetworkLog()\nnoBotLog()\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h4",{attrs:{id:"覆盖登录解决器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#覆盖登录解决器"}},[t._v("#")]),t._v(" 覆盖登录解决器")]),t._v(" "),s("p",[t._v("Mirai 会使用 "),s("code",[t._v("LoginSolver")]),t._v(" 解决验证码。")]),t._v(" "),s("ul",[s("li",[t._v("在 Android 需要手动提供 "),s("code",[t._v("LoginSolver")])]),t._v(" "),s("li",[t._v("在 JVM, Mirai 会根据环境支持情况选择 Swing/CLI 实现，通常不需要手动提供")])]),t._v(" "),s("p",[t._v("覆盖默认的 "),s("code",[t._v("LoginSolver")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// Kotlin\nloginSolver = YourLoginSolver\n\n// Java\nsetLoginSolver(new YourLoginSolver())\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("blockquote",[s("p",[t._v("要获取更多有关 "),s("code",[t._v("LoginSolver")]),t._v(" 的信息，查看 "),s("a",{attrs:{href:"../mirai-core-api/src/commonMain/kotlin/utils/LoginSolver.kt#L32"}},[t._v("LoginSolver.kt")])])]),t._v(" "),s("h3",{attrs:{id:"获取当前所有-bot-实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取当前所有-bot-实例"}},[t._v("#")]),t._v(" 获取当前所有 "),s("code",[t._v("Bot")]),t._v(" 实例")]),t._v(" "),s("p",[t._v("在登录后 "),s("code",[t._v("Bot")]),t._v(" 实例会被自动记录。可在 "),s("code",[t._v("Bot.instances")]),t._v(" 获取到当前"),s("strong",[t._v("在线")]),t._v("的所有 "),s("code",[t._v("Bot")]),t._v(" 列表。")]),t._v(" "),s("h2",{attrs:{id:"_2-登录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-登录"}},[t._v("#")]),t._v(" 2. 登录")]),t._v(" "),s("p",[t._v("创建 "),s("code",[t._v("Bot")]),t._v(" 后不会自动登录，需要手动调用其 "),s("code",[t._v("login()")]),t._v(" 方法。只需要调用一次 "),s("code",[t._v("login()")]),t._v(" 即可，"),s("code",[t._v("Bot")]),t._v(" 掉线时会自动重连。")]),t._v(" "),s("h3",{attrs:{id:"处理滑动验证码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#处理滑动验证码"}},[t._v("#")]),t._v(" 处理滑动验证码")]),t._v(" "),s("p",[t._v("服务器正在大力推广滑块验证码。")]),t._v(" "),s("p",[t._v("部分账号可以跳过滑块验证码，Mirai 会自动尝试。"),s("br"),t._v("\n若你的账号无法跳过验证，可在 "),s("a",{attrs:{href:"https://github.com/project-mirai/mirai-login-solver-selenium",target:"_blank",rel:"noopener noreferrer"}},[t._v("project-mirai/mirai-login-solver-selenium"),s("OutboundLink")],1),t._v(" 查看处理方案。")]),t._v(" "),s("h3",{attrs:{id:"常见登录失败原因"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见登录失败原因"}},[t._v("#")]),t._v(" 常见登录失败原因")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("错误信息")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("可能的原因")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("可能的解决方案")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("当前版本过低")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("密码错误")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("检查密码")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("当前上网环境异常")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("设备锁")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("开启或关闭设备锁后重试登录")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("禁止登录")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("需要处理滑块验证码")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("a",{attrs:{href:"https://github.com/project-mirai/mirai-login-solver-selenium",target:"_blank",rel:"noopener noreferrer"}},[t._v("project-mirai/mirai-login-solver-selenium"),s("OutboundLink")],1)])])])]),t._v(" "),s("p",[t._v("若以上方案无法解决问题，请尝试 "),s("a",{attrs:{href:"#%E5%88%87%E6%8D%A2%E7%99%BB%E5%BD%95%E5%8D%8F%E8%AE%AE"}},[t._v("切换登录协议")]),t._v(" 和 "),s("strong",[s("a",{attrs:{href:"#%E5%A4%84%E7%90%86%E6%BB%91%E5%8A%A8%E9%AA%8C%E8%AF%81%E7%A0%81"}},[t._v("处理滑动验证码")])]),t._v("。")]),t._v(" "),s("blockquote",[s("p",[t._v("下一步，"),s("RouterLink",{attrs:{to:"/Contacts.html"}},[t._v("Contacts")])],1),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/#mirai-core-api-文档"}},[t._v("回到 Mirai 文档索引")])],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);