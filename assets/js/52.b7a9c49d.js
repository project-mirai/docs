(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{423:function(b,a,i){"use strict";i.r(a);var l=i(49),W=Object(l.a)({},(function(){var b=this,a=b.$createElement,i=b._self._c||a;return i("ContentSlotsDistributor",{attrs:{"slot-key":b.$parent.slotKey}},[i("h1",{attrs:{id:"a-brief-introduction-of-mirai-ecosystem"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#a-brief-introduction-of-mirai-ecosystem"}},[b._v("#")]),b._v(" A brief introduction of Mirai Ecosystem")]),b._v(" "),i("p",[b._v("Mirai是一个免费开源的QQ机器人框架，由于其开源和易拓展的优势，现在已经有很多基于Mirai的官方和非官方衍生框架和应用(下文统一称为"),i("strong",[b._v("项目")]),b._v(")，其关系错综复杂。这里将简单为你介绍整个 "),i("strong",[b._v("Mirai 生态中各个框架和应用的关系")]),b._v("。")]),b._v(" "),i("blockquote",[i("p",[b._v("强烈建议你从头并按照"),i("strong",[b._v("文章顺序和思路")]),b._v("阅读，即使你对 Mirai 生态有一定的了解。")])]),b._v(" "),i("h2",{attrs:{id:"目录"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[b._v("#")]),b._v(" 目录：")]),b._v(" "),i("ol",[i("li",[i("p",[i("a",{attrs:{href:"#mirai-%E4%BD%BF%E7%94%A8-kotlin-%E7%BC%96%E5%86%99%E7%9A%84%E9%AB%98%E6%95%88%E7%8E%87-qq-%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%A1%86%E6%9E%B6"}},[b._v("Mirai")])])]),b._v(" "),i("li",[i("p",[i("a",{attrs:{href:"#mirai-console-mirai-%E5%AE%98%E6%96%B9%E7%9A%84%E5%8F%AF%E6%8B%93%E5%B1%95%E5%BC%8F-qq-%E6%9C%BA%E5%99%A8%E4%BA%BA%E7%AE%A1%E7%90%86%E6%8E%A7%E5%88%B6%E5%8F%B0"}},[b._v("mirai-console")])]),b._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"#chat-command-mirai-console-%E7%9A%84%E5%AE%98%E6%96%B9%E7%9A%84%E8%81%8A%E5%A4%A9%E5%91%BD%E4%BB%A4%E6%8F%92%E4%BB%B6"}},[b._v("chat-command")])]),b._v(" "),i("li",[i("a",{attrs:{href:"#mirai-api-http-mirai-console-%E7%9A%84%E5%AE%98%E6%96%B9-http-api-%E6%8F%92%E4%BB%B6"}},[b._v("mirai-api-http")])]),b._v(" "),i("li",[i("a",{attrs:{href:"#mirai-native-%E4%B8%8E-coolq-%E5%AF%B9%E6%8E%A5%E7%9A%84%E4%B8%80%E4%B8%AA%E9%80%9A%E9%81%93"}},[b._v("mirai-native")])])])]),b._v(" "),i("li",[i("p",[i("a",{attrs:{href:"#mirai-console-loader-mirai-console-%E7%9A%84%E5%AE%98%E6%96%B9%E4%B8%80%E9%94%AE%E5%90%AF%E5%8A%A8%E5%99%A8"}},[b._v("mirai-console-loader")])])])]),b._v(" "),i("h2",{attrs:{id:"mirai-使用-kotlin-编写的高效率-qq-机器人框架"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#mirai-使用-kotlin-编写的高效率-qq-机器人框架"}},[b._v("#")]),b._v(" "),i("a",{attrs:{href:"https://github.com/mamoe/mirai",target:"_blank",rel:"noopener noreferrer"}},[b._v("Mirai"),i("OutboundLink")],1),b._v(": 使用 "),i("a",{attrs:{href:"https://www.kotlincn.net/",target:"_blank",rel:"noopener noreferrer"}},[b._v("Kotlin"),i("OutboundLink")],1),b._v(" 编写的高效率 QQ 机器人框架")]),b._v(" "),i("p",[b._v("Mirai，正如你所见，这个名字不带任何的前缀或后缀，它是"),i("strong",[b._v("整个生态的中心")]),b._v("，在这个生态中，所有的项目都直接或间接与 Mirai 有密不可分的关系，Mirai为用户提供了最"),i("u",[b._v("基础")]),b._v("且"),i("u",[b._v("核心")]),b._v("的功能："),i("strong",[b._v("接收消息")]),b._v("与"),i("strong",[b._v("发送消息")]),b._v("。")]),b._v(" "),i("p",[b._v("你需要明确了解的是，Mirai 的定位是"),i("u",[b._v(" QQ 机器人"),i("strong",[b._v("框架")])]),b._v("，或者说它是一个"),i("strong",[b._v("库(Library)")]),b._v("。"),i("u",[b._v("如果你觉得理解起来有点困难，你可以把它类比为"),i("strong",[b._v("建筑的骨架")]),b._v("，一栋只有建筑骨架的建筑是不能住人的，你需要根据这个骨架来盖好这栋楼，它才能住人。同样地，Mirai 是不能直接启动的，需要使用这个框架并按照你的想法来编写QQ机器人程序")]),b._v("。")]),b._v(" "),i("p",[b._v("通常来说，Mirai 就是一个 "),i("u",[b._v("QQ 机器人框架")]),b._v("，但是它的内部并不是一个单一的结构：")]),b._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://github.com/mamoe/mirai/tree/dev/mirai-core-api",target:"_blank",rel:"noopener noreferrer"}},[b._v("mirai-core-api"),i("OutboundLink")],1),b._v("：提供了使用 Mirai 的接口。它抽象了核心协议的接口，如"),i("strong",[b._v("收发消息")]),b._v("，"),i("strong",[b._v("群操作")]),b._v("等，但不承担具体工作。")]),b._v(" "),i("li",[i("a",{attrs:{href:"https://github.com/mamoe/mirai/tree/dev/mirai-core",target:"_blank",rel:"noopener noreferrer"}},[b._v("mirai-core"),i("OutboundLink")],1),b._v("：是 Mirai 对 QQ 的具体协议实现，它承担具体且核心的工作。")])]),b._v(" "),i("p",[b._v("它们的关系如下：")]),b._v(" "),i("p",[i("a",{attrs:{href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZmxvd2NoYXJ0IExSXG4gICAgY2xhc3NEZWYgY29yZWhpZ2hsaWdodCBmaWxsOiNmOTYsc3Ryb2tlOiMzMzMsc3Ryb2tlLXdpZHRoOjNweDtcbiAgICBzdWJncmFwaCBtaXJhaSBbXCJNaXJhaSDmoYbmnrZcIl1cbiAgICAgICAgbWlyYWljb3JlYXBpKG1pcmFpLWNvcmUtYXBpKTo6OmNvcmVoaWdobGlnaHRcbiAgICAgICAgbWlyYWljb3JlcXFhbmRyb2lkKFwibWlyYWktY29yZTxici8-KFFRQW5kcm9pZCDljY_orq4pXCIpXG4gICAgICAgIG1pcmFpY29yZXFxYW5kcm9pZCAtLT4gfOaPkOS-m-WNj-iurnxtaXJhaWNvcmVhcGlcbiAgICBlbmRcbiAgICBtaXJhaWludGVyZmFjZShcIuS9oOe8luWGmeeahDxici8-5py65Zmo5Lq656iL5bqPXCIpXG4gICAgbWlyYWljb3JlYXBpIC0tPiB85o-Q5L6b5Z-656GA5Yqf6IO9fG1pcmFpaW50ZXJmYWNlIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZX0",target:"_blank",rel:"noopener noreferrer"}},[i("img",{attrs:{src:"https://mermaid.ink/img/eyJjb2RlIjoiZmxvd2NoYXJ0IExSXG4gICAgY2xhc3NEZWYgY29yZWhpZ2hsaWdodCBmaWxsOiNmOTYsc3Ryb2tlOiMzMzMsc3Ryb2tlLXdpZHRoOjNweDtcbiAgICBzdWJncmFwaCBtaXJhaSBbXCJNaXJhaSDmoYbmnrZcIl1cbiAgICAgICAgbWlyYWljb3JlYXBpKG1pcmFpLWNvcmUtYXBpKTo6OmNvcmVoaWdobGlnaHRcbiAgICAgICAgbWlyYWljb3JlcXFhbmRyb2lkKFwibWlyYWktY29yZTxici8-KFFRQW5kcm9pZCDljY_orq4pXCIpXG4gICAgICAgIG1pcmFpY29yZXFxYW5kcm9pZCAtLT4gfOaPkOS-m-WNj-iurnxtaXJhaWNvcmVhcGlcbiAgICBlbmRcbiAgICBtaXJhaWludGVyZmFjZShcIuS9oOe8luWGmeeahDxici8-5py65Zmo5Lq656iL5bqPXCIpXG4gICAgbWlyYWljb3JlYXBpIC0tPiB85o-Q5L6b5Z-656GA5Yqf6IO9fG1pcmFpaW50ZXJmYWNlIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZX0",alt:""}}),i("OutboundLink")],1)]),b._v(" "),i("p",[b._v("可以看到，协议内容只在 Mirai 内部使用，只有 mirai-core-api 对外提供了功能。")]),b._v(" "),i("p",[b._v("Mirai 运行在 JVM，你需要使用 Kotlin 语言或 Java 语言来编写你的 QQ 机器人程序。在运行时需要有 mirai-core，在开发时只需要有 mirai-core-api。")]),b._v(" "),i("blockquote",[i("p",[b._v("有关 JVM 平台项目配置可以在"),i("RouterLink",{attrs:{to:"/ConfiguringProjects.html#mirai---configuring-projects"}},[b._v("之后")]),b._v("了解到。")],1)]),b._v(" "),i("h2",{attrs:{id:"mirai-console-mirai-官方的可拓展式-qq-机器人管理控制台"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#mirai-console-mirai-官方的可拓展式-qq-机器人管理控制台"}},[b._v("#")]),b._v(" "),i("a",{attrs:{href:"https://github.com/mamoe/mirai/tree/dev/mirai-console",target:"_blank",rel:"noopener noreferrer"}},[b._v("mirai-console"),i("OutboundLink")],1),b._v(": Mirai 官方的可拓展式 QQ 机器人管理控制台")]),b._v(" "),i("p",[b._v("前面我们提到，你可以使用 Mirai 框架提供的对外开放接口来编写个性化QQ机器人程序，而 mirai-console 就是 Mirai 官方开发组编写的 QQ 机器人程序，它"),i("strong",[b._v("在 Mirai 框架提供的基础功能的基础上进行了封装")]),b._v("并"),i("strong",[b._v("进一步提供了更方便的开放接口")]),b._v("。")]),b._v(" "),i("p",[b._v("比如，console 提供了"),i("strong",[b._v("配置自动登录")]),b._v("，"),i("strong",[b._v("自动配置/数据存储")]),b._v("功能，这样你就不需要自己考虑写配置登录或者数据存储了，减少了代码工作量。"),i("u",[b._v("承接上面的例子，mirai-console 就相当于为你在建筑骨架上砌好了墙，分好了房间，这样你就能更容易地盖好这栋楼了")]),b._v("。")]),b._v(" "),i("p",[i("strong",[b._v("重要的是，mirai-console 有命令行界面，可以直接在终端运行它，并实时看到你的机器人状态、插件的运行情况，或者通过 console 提供的命令管理指令权限或者执行插件提供的指令等。")])]),b._v(" "),i("p",[b._v("你可以使用 Kotlin 语言或 Java 语言来编写基于 mirai-console 的 QQ机器人程序，在 mirai-console 中，你编写的程序被称作"),i("strong",[b._v("插件(Plugin)")]),b._v("，它将被打包为 jar 文件，这样可以很方便发布你的机器人功能程序给其他人使用，把插件 mirai-console 指定的文件夹下，启动 mirai-console 就可以加载你的程序了。")]),b._v(" "),i("blockquote",[i("p",[b._v("你一定玩过 Minecraft， 这里的插件就像 Minecraft 的 mod 一样！")])]),b._v(" "),i("p",[b._v("当然，在编写 console 插件时，你"),i("strong",[b._v("不仅能使用 console 提供的简便接口")]),b._v("，你"),i("strong",[b._v("还可以同时使用 mirai-core-api 提供的基础接口")]),b._v("。")]),b._v(" "),i("p",[b._v("mirai-console 的内部也不是单一的结构，它分为"),i("strong",[b._v("前端")]),b._v("和"),i("strong",[b._v("后端")]),b._v("具体如下：")]),b._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://github.com/mamoe/mirai/tree/dev/mirai-console/backend",target:"_blank",rel:"noopener noreferrer"}},[b._v("后端"),i("OutboundLink")],1),b._v("：后端就是做了上述工作，即提供"),i("strong",[b._v("指令")]),b._v("，"),i("strong",[b._v("权限")]),b._v("，"),i("strong",[b._v("自动数据")]),b._v("\n等开放接口。")]),b._v(" "),i("li",[i("a",{attrs:{href:"https://github.com/mamoe/mirai/tree/dev/mirai-console/frontend",target:"_blank",rel:"noopener noreferrer"}},[b._v("前端"),i("OutboundLink")],1),b._v("：前端就是启动 mirai-console\n并监控后端运行状态的端口，上述命令行界面是前端的一种，即 "),i("a",{attrs:{href:"https://github.com/mamoe/mirai/tree/dev/mirai-console/frontend/mirai-console-terminal",target:"_blank",rel:"noopener noreferrer"}},[b._v("**\nmirai-console-terminal**"),i("OutboundLink")],1),b._v("\n，在终端启动的前端。另外还有其他可用的前端如运行在 Android\n的 "),i("strong",[i("a",{attrs:{href:"https://github.com/mzdluo123/MiraiAndroid",target:"_blank",rel:"noopener noreferrer"}},[b._v("MiraiAndroid"),i("OutboundLink")],1)]),b._v("。")])]),b._v(" "),i("p",[b._v("后端就像是“"),i("strong",[b._v("电脑主机")]),b._v("”，执行着核心工作，前端就像是“"),i("strong",[b._v("显示器")]),b._v("”、“"),i("strong",[b._v("鼠标")]),b._v("”和“"),i("strong",[b._v("键盘")]),b._v("”，可以控制后端。")]),b._v(" "),i("p",[b._v("将 mirai-console 放入上述关系图：")]),b._v(" "),i("p",[i("a",{attrs:{href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZmxvd2NoYXJ0IExSXG4gICAgY2xhc3NEZWYgY29yZWhpZ2hsaWdodCBmaWxsOiNmOTYsc3Ryb2tlOiMzMzMsc3Ryb2tlLXdpZHRoOjNweDtcbiAgICBjbGFzc0RlZiBoaWdobGlnaHQgZmlsbDojZjg4LHN0cm9rZTojMzMzLHN0cm9rZS13aWR0aDozcHhcbiAgICBzdWJncmFwaCBtaXJhaSBbXCJNaXJhaSDmoYbmnrZcIl1cbiAgICAgICAgbWlyYWljb3JlYXBpKG1pcmFpLWNvcmUtYXBpKTo6OmNvcmVoaWdobGlnaHRcbiAgICAgICAgbWlyYWljb3JlcXFhbmRyb2lkKFwibWlyYWktY29yZTxici8-KFFRQW5kcm9pZCDljY_orq4pXCIpXG4gICAgICAgIG1pcmFpY29yZXFxYW5kcm9pZCAtLT4gfOaPkOS-m-WNj-iurnxtaXJhaWNvcmVhcGlcbiAgICBlbmRcbiAgICBtaXJhaWludGVyZmFjZShcIuS9oOe8luWGmeeahDxici8-5py65Zmo5Lq656iL5bqPXCIpXG4gICAgbWlyYWljb3JlYXBpIC0tPiB85o-Q5L6b5Z-656GA5Yqf6IO9fG1pcmFpaW50ZXJmYWNlXG4gICAgbWlyYWljb3JlYXBpIC0tPiB85bCB6KOF5Z-656GA5Yqf6IO9fG1pcmFpY29uc29sZWJhY2tlbmRcbiAgICBzdWJncmFwaCBtaXJhaWNvbnNvbGUgW1wiTWlyYWkgQ29uc29sZVwiXVxuICAgICAgICBtaXJhaWNvbnNvbGViYWNrZW5kKFwiQmFja0VuZFwiKTo6OmhpZ2hsaWdodFxuICAgICAgICBtaXJhaWNvbnNvbGVmcm9udGVuZC10ZXJtaW5hbChcIkZyb250RW5kOiB0ZXJtaW5hbFwiKVxuICAgICAgICBtaXJhaWNvbnNvbGVmcm9udGVuZC1hbmRyb2lkKFwiRnJvbnRFbmQ6IEFuZHJvaWRcIilcbiAgICAgICAgbWlyYWljb25zb2xlYmFja2VuZCAtLT4gbWlyYWljb25zb2xlZnJvbnRlbmQtdGVybWluYWxcbiAgICAgICAgbWlyYWljb25zb2xlYmFja2VuZCAtLT4gbWlyYWljb25zb2xlZnJvbnRlbmQtYW5kcm9pZFxuICAgIGVuZFxuICAgIHN1YmdyYXBoIGNvbnNvbGVwbHVnaW5zIFtcIk1pcmFpIENvbnNvbGUg5o-S5Lu2XCJdXG4gICAgICAgIHlvdXJtaXJhaXBsdWdpbihcIuS9oOe8luWGmeeahCBDb25zb2xlIOaPkuS7tlwiKVxuICAgIGVuZFxuICAgIHlvdXJtaXJhaXBsdWdpbiAtLT4gbWlyYWljb25zb2xlYmFja2VuZCIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9",target:"_blank",rel:"noopener noreferrer"}},[i("img",{attrs:{src:"https://mermaid.ink/img/eyJjb2RlIjoiZmxvd2NoYXJ0IExSXG4gICAgY2xhc3NEZWYgY29yZWhpZ2hsaWdodCBmaWxsOiNmOTYsc3Ryb2tlOiMzMzMsc3Ryb2tlLXdpZHRoOjNweDtcbiAgICBjbGFzc0RlZiBoaWdobGlnaHQgZmlsbDojZjg4LHN0cm9rZTojMzMzLHN0cm9rZS13aWR0aDozcHhcbiAgICBzdWJncmFwaCBtaXJhaSBbXCJNaXJhaSDmoYbmnrZcIl1cbiAgICAgICAgbWlyYWljb3JlYXBpKG1pcmFpLWNvcmUtYXBpKTo6OmNvcmVoaWdobGlnaHRcbiAgICAgICAgbWlyYWljb3JlcXFhbmRyb2lkKFwibWlyYWktY29yZTxici8-KFFRQW5kcm9pZCDljY_orq4pXCIpXG4gICAgICAgIG1pcmFpY29yZXFxYW5kcm9pZCAtLT4gfOaPkOS-m-WNj-iurnxtaXJhaWNvcmVhcGlcbiAgICBlbmRcbiAgICBtaXJhaWludGVyZmFjZShcIuS9oOe8luWGmeeahDxici8-5py65Zmo5Lq656iL5bqPXCIpXG4gICAgbWlyYWljb3JlYXBpIC0tPiB85o-Q5L6b5Z-656GA5Yqf6IO9fG1pcmFpaW50ZXJmYWNlXG4gICAgbWlyYWljb3JlYXBpIC0tPiB85bCB6KOF5Z-656GA5Yqf6IO9fG1pcmFpY29uc29sZWJhY2tlbmRcbiAgICBzdWJncmFwaCBtaXJhaWNvbnNvbGUgW1wiTWlyYWkgQ29uc29sZVwiXVxuICAgICAgICBtaXJhaWNvbnNvbGViYWNrZW5kKFwiQmFja0VuZFwiKTo6OmhpZ2hsaWdodFxuICAgICAgICBtaXJhaWNvbnNvbGVmcm9udGVuZC10ZXJtaW5hbChcIkZyb250RW5kOiB0ZXJtaW5hbFwiKVxuICAgICAgICBtaXJhaWNvbnNvbGVmcm9udGVuZC1hbmRyb2lkKFwiRnJvbnRFbmQ6IEFuZHJvaWRcIilcbiAgICAgICAgbWlyYWljb25zb2xlYmFja2VuZCAtLT4gbWlyYWljb25zb2xlZnJvbnRlbmQtdGVybWluYWxcbiAgICAgICAgbWlyYWljb25zb2xlYmFja2VuZCAtLT4gbWlyYWljb25zb2xlZnJvbnRlbmQtYW5kcm9pZFxuICAgIGVuZFxuICAgIHN1YmdyYXBoIGNvbnNvbGVwbHVnaW5zIFtcIk1pcmFpIENvbnNvbGUg5o-S5Lu2XCJdXG4gICAgICAgIHlvdXJtaXJhaXBsdWdpbihcIuS9oOe8luWGmeeahCBDb25zb2xlIOaPkuS7tlwiKVxuICAgIGVuZFxuICAgIHlvdXJtaXJhaXBsdWdpbiAtLT4gbWlyYWljb25zb2xlYmFja2VuZCIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9",alt:""}}),i("OutboundLink")],1)]),b._v(" "),i("blockquote",[i("p",[b._v("要获取有关 mirai-console 的更多信息，请前往 "),i("a",{attrs:{href:"https://github.com/mamoe/mirai-console",target:"_blank",rel:"noopener noreferrer"}},[b._v("mirai-console"),i("OutboundLink")],1)])]),b._v(" "),i("h2",{attrs:{id:"chat-command-mirai-console-的官方的聊天命令插件"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#chat-command-mirai-console-的官方的聊天命令插件"}},[b._v("#")]),b._v(" "),i("a",{attrs:{href:"https://github.com/project-mirai/chat-command",target:"_blank",rel:"noopener noreferrer"}},[b._v("chat-command"),i("OutboundLink")],1),b._v(": Mirai Console 的官方的聊天命令插件")]),b._v(" "),i("p",[b._v("在 mirai-console 的前端中，我们提到可以在前端执行 console 内置和插件提供的"),i("strong",[b._v("命令")]),b._v("，如果我们想在聊天环境(好友聊天/群聊天/临时会话)执行 console 命令，我们就需要官方提供的 chat-command，并且，console 中的权限管理正是管理"),i("strong",[b._v("聊天环境中用户执行权限")]),b._v("的。")]),b._v(" "),i("p",[b._v("将 chat-command 放入上述关系图：")]),b._v(" "),i("p",[i("a",{attrs:{href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZmxvd2NoYXJ0IExSXG4gICAgY2xhc3NEZWYgY29yZWhpZ2hsaWdodCBmaWxsOiNmOTYsc3Ryb2tlOiMzMzMsc3Ryb2tlLXdpZHRoOjNweDtcbiAgICBjbGFzc0RlZiBoaWdobGlnaHQgZmlsbDojZjg4LHN0cm9rZTojMzMzLHN0cm9rZS13aWR0aDozcHhcbiAgICBzdWJncmFwaCBtaXJhaSBbXCJNaXJhaSDmoYbmnrZcIl1cbiAgICAgICAgbWlyYWljb3JlYXBpKG1pcmFpLWNvcmUtYXBpKTo6OmNvcmVoaWdobGlnaHRcbiAgICAgICAgbWlyYWljb3JlcXFhbmRyb2lkKFwibWlyYWktY29yZTxici8-KFFRQW5kcm9pZCDljY_orq4pXCIpXG4gICAgICAgIG1pcmFpY29yZXFxYW5kcm9pZCAtLT4gfOaPkOS-m-WNj-iurnxtaXJhaWNvcmVhcGlcbiAgICBlbmRcbiAgICBtaXJhaWludGVyZmFjZShcIuS9oOe8luWGmeeahDxici8-5py65Zmo5Lq656iL5bqPXCIpXG4gICAgbWlyYWljb3JlYXBpIC0tPiB85o-Q5L6b5Z-656GA5Yqf6IO9fG1pcmFpaW50ZXJmYWNlXG4gICAgbWlyYWljb3JlYXBpIC0tPiB85bCB6KOF5Z-656GA5Yqf6IO9fG1pcmFpY29uc29sZWJhY2tlbmRcbiAgICBzdWJncmFwaCBtaXJhaWNvbnNvbGUgW1wiTWlyYWkgQ29uc29sZVwiXVxuICAgICAgICBtaXJhaWNvbnNvbGViYWNrZW5kKFwiQmFja0VuZFwiKVxuICAgICAgICBtaXJhaWNvbnNvbGVmcm9udGVuZC10ZXJtaW5hbChcIkZyb250RW5kOiB0ZXJtaW5hbFwiKVxuICAgICAgICBtaXJhaWNvbnNvbGVmcm9udGVuZC1hbmRyb2lkKFwiRnJvbnRFbmQ6IEFuZHJvaWRcIilcbiAgICAgICAgbWlyYWljb25zb2xlYmFja2VuZCAtLT4gbWlyYWljb25zb2xlZnJvbnRlbmQtdGVybWluYWxcbiAgICAgICAgbWlyYWljb25zb2xlYmFja2VuZCAtLT4gbWlyYWljb25zb2xlZnJvbnRlbmQtYW5kcm9pZFxuICAgIGVuZFxuICAgIHN1YmdyYXBoIGNvbnNvbGVwbHVnaW5zIFtcIk1pcmFpIENvbnNvbGUg5o-S5Lu2XCJdXG4gICAgICAgIHlvdXJtaXJhaXBsdWdpbihcIuS9oOe8luWGmeeahCBDb25zb2xlIOaPkuS7tlwiKVxuICAgICAgICBjaGF0Y29tbWFuZChcImNoYXQtY29tbWFuZCDmj5Lku7ZcIik6OjpoaWdobGlnaHRcbiAgICBlbmRcbiAgICB5b3VybWlyYWlwbHVnaW4gLS0-IG1pcmFpY29uc29sZWJhY2tlbmRcbiAgICBjaGF0Y29tbWFuZCAtLT4gbWlyYWljb25zb2xlYmFja2VuZCIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9",target:"_blank",rel:"noopener noreferrer"}},[i("img",{attrs:{src:"https://mermaid.ink/img/eyJjb2RlIjoiZmxvd2NoYXJ0IExSXG4gICAgY2xhc3NEZWYgY29yZWhpZ2hsaWdodCBmaWxsOiNmOTYsc3Ryb2tlOiMzMzMsc3Ryb2tlLXdpZHRoOjNweDtcbiAgICBjbGFzc0RlZiBoaWdobGlnaHQgZmlsbDojZjg4LHN0cm9rZTojMzMzLHN0cm9rZS13aWR0aDozcHhcbiAgICBzdWJncmFwaCBtaXJhaSBbXCJNaXJhaSDmoYbmnrZcIl1cbiAgICAgICAgbWlyYWljb3JlYXBpKG1pcmFpLWNvcmUtYXBpKTo6OmNvcmVoaWdobGlnaHRcbiAgICAgICAgbWlyYWljb3JlcXFhbmRyb2lkKFwibWlyYWktY29yZTxici8-KFFRQW5kcm9pZCDljY_orq4pXCIpXG4gICAgICAgIG1pcmFpY29yZXFxYW5kcm9pZCAtLT4gfOaPkOS-m-WNj-iurnxtaXJhaWNvcmVhcGlcbiAgICBlbmRcbiAgICBtaXJhaWludGVyZmFjZShcIuS9oOe8luWGmeeahDxici8-5py65Zmo5Lq656iL5bqPXCIpXG4gICAgbWlyYWljb3JlYXBpIC0tPiB85o-Q5L6b5Z-656GA5Yqf6IO9fG1pcmFpaW50ZXJmYWNlXG4gICAgbWlyYWljb3JlYXBpIC0tPiB85bCB6KOF5Z-656GA5Yqf6IO9fG1pcmFpY29uc29sZWJhY2tlbmRcbiAgICBzdWJncmFwaCBtaXJhaWNvbnNvbGUgW1wiTWlyYWkgQ29uc29sZVwiXVxuICAgICAgICBtaXJhaWNvbnNvbGViYWNrZW5kKFwiQmFja0VuZFwiKVxuICAgICAgICBtaXJhaWNvbnNvbGVmcm9udGVuZC10ZXJtaW5hbChcIkZyb250RW5kOiB0ZXJtaW5hbFwiKVxuICAgICAgICBtaXJhaWNvbnNvbGVmcm9udGVuZC1hbmRyb2lkKFwiRnJvbnRFbmQ6IEFuZHJvaWRcIilcbiAgICAgICAgbWlyYWljb25zb2xlYmFja2VuZCAtLT4gbWlyYWljb25zb2xlZnJvbnRlbmQtdGVybWluYWxcbiAgICAgICAgbWlyYWljb25zb2xlYmFja2VuZCAtLT4gbWlyYWljb25zb2xlZnJvbnRlbmQtYW5kcm9pZFxuICAgIGVuZFxuICAgIHN1YmdyYXBoIGNvbnNvbGVwbHVnaW5zIFtcIk1pcmFpIENvbnNvbGUg5o-S5Lu2XCJdXG4gICAgICAgIHlvdXJtaXJhaXBsdWdpbihcIuS9oOe8luWGmeeahCBDb25zb2xlIOaPkuS7tlwiKVxuICAgICAgICBjaGF0Y29tbWFuZChcImNoYXQtY29tbWFuZCDmj5Lku7ZcIik6OjpoaWdobGlnaHRcbiAgICBlbmRcbiAgICB5b3VybWlyYWlwbHVnaW4gLS0-IG1pcmFpY29uc29sZWJhY2tlbmRcbiAgICBjaGF0Y29tbWFuZCAtLT4gbWlyYWljb25zb2xlYmFja2VuZCIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9",alt:""}}),i("OutboundLink")],1)]),b._v(" "),i("h2",{attrs:{id:"mirai-api-http-mirai-console-的官方-http-api-插件"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#mirai-api-http-mirai-console-的官方-http-api-插件"}},[b._v("#")]),b._v(" "),i("a",{attrs:{href:"https://github.com/mamoe/mirai-api-http",target:"_blank",rel:"noopener noreferrer"}},[b._v("mirai-api-http"),i("OutboundLink")],1),b._v(": Mirai Console 的官方 HTTP API 插件")]),b._v(" "),i("p",[b._v("在 console 中提到，插件也可以使用 mirai-core-api 提供的基础接口， 而 mirai-api-http 插件就是一个将 mirai-core-api 的所有功能封装为 http 服务的插件，同时也提供了 WebSocket 服务。")]),b._v(" "),i("p",[b._v("这样即使你不懂 Java 或 Kotlin，使用 mirai-api-http 插件，你也可以与 Mirai 交互，极大地增加了语言拓展性，也因此衍生出了许多基于 mirai-api-http 的社区 SDK。")]),b._v(" "),i("p",[b._v("这些社区 SDK 封装了 mirai-api-http 提供的接口，且使用了其他语言的良好特性，使编写QQ机器人程序变得更加容易，高效。")]),b._v(" "),i("p",[b._v("将 mirai-api-http 和部分 "),i("RouterLink",{attrs:{to:"/#社区-sdk"}},[b._v("社区 SDK")]),b._v(" 放入上述关系图：")],1),b._v(" "),i("p",[i("a",{attrs:{href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZmxvd2NoYXJ0IExSXG4gICAgY2xhc3NEZWYgY29yZWhpZ2hsaWdodCBmaWxsOiNmOTYsc3Ryb2tlOiMzMzMsc3Ryb2tlLXdpZHRoOjNweDtcbiAgICBjbGFzc0RlZiBoaWdobGlnaHQgZmlsbDojZjg4LHN0cm9rZTojMzMzLHN0cm9rZS13aWR0aDozcHhcbiAgICBzdWJncmFwaCBtaXJhaSBbXCJNaXJhaSDmoYbmnrZcIl1cbiAgICAgICAgbWlyYWljb3JlYXBpKG1pcmFpLWNvcmUtYXBpKTo6OmNvcmVoaWdobGlnaHRcbiAgICAgICAgbWlyYWljb3JlcXFhbmRyb2lkKFwibWlyYWktY29yZTxici8-KFFRQW5kcm9pZCDljY_orq4pXCIpXG4gICAgICAgIG1pcmFpY29yZXFxYW5kcm9pZCAtLT4gfOaPkOS-m-WNj-iurnxtaXJhaWNvcmVhcGlcbiAgICBlbmRcbiAgICBtaXJhaWludGVyZmFjZShcIuS9oOe8luWGmeeahDxici8-5py65Zmo5Lq656iL5bqPXCIpXG4gICAgbWlyYWljb3JlYXBpIC0tPiB85o-Q5L6b5Z-656GA5Yqf6IO9fG1pcmFpaW50ZXJmYWNlXG4gICAgbWlyYWljb3JlYXBpIC0tPiB85bCB6KOF5Z-656GA5Yqf6IO9fG1pcmFpY29uc29sZWJhY2tlbmRcbiAgICBzdWJncmFwaCBtaXJhaWNvbnNvbGUgW1wiTWlyYWkgQ29uc29sZVwiXVxuICAgICAgICBtaXJhaWNvbnNvbGViYWNrZW5kKFwiQmFja0VuZFwiKVxuICAgICAgICBtaXJhaWNvbnNvbGVmcm9udGVuZC10ZXJtaW5hbChcIkZyb250RW5kOiB0ZXJtaW5hbFwiKVxuICAgICAgICBtaXJhaWNvbnNvbGVmcm9udGVuZC1hbmRyb2lkKFwiRnJvbnRFbmQ6IEFuZHJvaWRcIilcbiAgICAgICAgbWlyYWljb25zb2xlYmFja2VuZCAtLT4gbWlyYWljb25zb2xlZnJvbnRlbmQtdGVybWluYWxcbiAgICAgICAgbWlyYWljb25zb2xlYmFja2VuZCAtLT4gbWlyYWljb25zb2xlZnJvbnRlbmQtYW5kcm9pZFxuICAgIGVuZFxuICAgIHN1YmdyYXBoIGNvbnNvbGVwbHVnaW5zIFtcIk1pcmFpIENvbnNvbGUg5o-S5Lu2XCJdXG4gICAgICAgIHlvdXJtaXJhaXBsdWdpbihcIuS9oOe8luWGmeeahCBDb25zb2xlIOaPkuS7tlwiKSAtLT4gbWlyYWljb25zb2xlYmFja2VuZFxuICAgICAgICBjaGF0Y29tbWFuZChcImNoYXQtY29tbWFuZCDmj5Lku7ZcIikgLS0-IG1pcmFpY29uc29sZWJhY2tlbmRcbiAgICAgICAgbWlyYWlhcGlodHRwKFwibWlyYWktYXBpLWh0dHAg5o-S5Lu2XCIpOjo6aGlnaGxpZ2h0ICAtLT4gbWlyYWljb25zb2xlYmFja2VuZFxuICAgIGVuZFxuICAgIHN1YmdyYXBoIGNvbW11bml0eXNkayBbXCLnpL7ljLogU0RLXCJdXG4gICAgICAgIG1vcmUoXCIuLi5cIik6OjpoaWdobGlnaHQgLS0-IG1pcmFpYXBpaHR0cFxuICAgICAgICBqcyhcIm1pcmFpLWpzXCIpOjo6aGlnaGxpZ2h0IC0tPiBtaXJhaWFwaWh0dHBcbiAgICAgICAga3RzKFwibWlyYWkta3RzXCIpOjo6aGlnaGxpZ2h0IC0tPiBtaXJhaWFwaWh0dHBcbiAgICAgICAgcnMoXCJtaXJhaS1yc1wiKTo6OmhpZ2hsaWdodCAtLT4gbWlyYWlhcGlodHRwXG4gICAgZW5kIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZX0",target:"_blank",rel:"noopener noreferrer"}},[i("img",{attrs:{src:"https://mermaid.ink/img/eyJjb2RlIjoiZmxvd2NoYXJ0IExSXG4gICAgY2xhc3NEZWYgY29yZWhpZ2hsaWdodCBmaWxsOiNmOTYsc3Ryb2tlOiMzMzMsc3Ryb2tlLXdpZHRoOjNweDtcbiAgICBjbGFzc0RlZiBoaWdobGlnaHQgZmlsbDojZjg4LHN0cm9rZTojMzMzLHN0cm9rZS13aWR0aDozcHhcbiAgICBzdWJncmFwaCBtaXJhaSBbXCJNaXJhaSDmoYbmnrZcIl1cbiAgICAgICAgbWlyYWljb3JlYXBpKG1pcmFpLWNvcmUtYXBpKTo6OmNvcmVoaWdobGlnaHRcbiAgICAgICAgbWlyYWljb3JlcXFhbmRyb2lkKFwibWlyYWktY29yZTxici8-KFFRQW5kcm9pZCDljY_orq4pXCIpXG4gICAgICAgIG1pcmFpY29yZXFxYW5kcm9pZCAtLT4gfOaPkOS-m-WNj-iurnxtaXJhaWNvcmVhcGlcbiAgICBlbmRcbiAgICBtaXJhaWludGVyZmFjZShcIuS9oOe8luWGmeeahDxici8-5py65Zmo5Lq656iL5bqPXCIpXG4gICAgbWlyYWljb3JlYXBpIC0tPiB85o-Q5L6b5Z-656GA5Yqf6IO9fG1pcmFpaW50ZXJmYWNlXG4gICAgbWlyYWljb3JlYXBpIC0tPiB85bCB6KOF5Z-656GA5Yqf6IO9fG1pcmFpY29uc29sZWJhY2tlbmRcbiAgICBzdWJncmFwaCBtaXJhaWNvbnNvbGUgW1wiTWlyYWkgQ29uc29sZVwiXVxuICAgICAgICBtaXJhaWNvbnNvbGViYWNrZW5kKFwiQmFja0VuZFwiKVxuICAgICAgICBtaXJhaWNvbnNvbGVmcm9udGVuZC10ZXJtaW5hbChcIkZyb250RW5kOiB0ZXJtaW5hbFwiKVxuICAgICAgICBtaXJhaWNvbnNvbGVmcm9udGVuZC1hbmRyb2lkKFwiRnJvbnRFbmQ6IEFuZHJvaWRcIilcbiAgICAgICAgbWlyYWljb25zb2xlYmFja2VuZCAtLT4gbWlyYWljb25zb2xlZnJvbnRlbmQtdGVybWluYWxcbiAgICAgICAgbWlyYWljb25zb2xlYmFja2VuZCAtLT4gbWlyYWljb25zb2xlZnJvbnRlbmQtYW5kcm9pZFxuICAgIGVuZFxuICAgIHN1YmdyYXBoIGNvbnNvbGVwbHVnaW5zIFtcIk1pcmFpIENvbnNvbGUg5o-S5Lu2XCJdXG4gICAgICAgIHlvdXJtaXJhaXBsdWdpbihcIuS9oOe8luWGmeeahCBDb25zb2xlIOaPkuS7tlwiKSAtLT4gbWlyYWljb25zb2xlYmFja2VuZFxuICAgICAgICBjaGF0Y29tbWFuZChcImNoYXQtY29tbWFuZCDmj5Lku7ZcIikgLS0-IG1pcmFpY29uc29sZWJhY2tlbmRcbiAgICAgICAgbWlyYWlhcGlodHRwKFwibWlyYWktYXBpLWh0dHAg5o-S5Lu2XCIpOjo6aGlnaGxpZ2h0ICAtLT4gbWlyYWljb25zb2xlYmFja2VuZFxuICAgIGVuZFxuICAgIHN1YmdyYXBoIGNvbW11bml0eXNkayBbXCLnpL7ljLogU0RLXCJdXG4gICAgICAgIG1vcmUoXCIuLi5cIik6OjpoaWdobGlnaHQgLS0-IG1pcmFpYXBpaHR0cFxuICAgICAgICBqcyhcIm1pcmFpLWpzXCIpOjo6aGlnaGxpZ2h0IC0tPiBtaXJhaWFwaWh0dHBcbiAgICAgICAga3RzKFwibWlyYWkta3RzXCIpOjo6aGlnaGxpZ2h0IC0tPiBtaXJhaWFwaWh0dHBcbiAgICAgICAgcnMoXCJtaXJhaS1yc1wiKTo6OmhpZ2hsaWdodCAtLT4gbWlyYWlhcGlodHRwXG4gICAgZW5kIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZX0",alt:""}}),i("OutboundLink")],1)]),b._v(" "),i("h2",{attrs:{id:"mirai-native-与-coolq-对接的一个通道"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#mirai-native-与-coolq-对接的一个通道"}},[b._v("#")]),b._v(" "),i("a",{attrs:{href:"https://github.com/iTXTech/mirai-native",target:"_blank",rel:"noopener noreferrer"}},[b._v("mirai-native"),i("OutboundLink")],1),b._v(": 与 CoolQ 对接的一个通道")]),b._v(" "),i("p",[b._v("如果你是 酷Q 用户，想在 Mirai 中使用 酷Q 插件，你可以使用 mirai-native 插件，它可以加载 CQP.dll 并兼容"),i("strong",[b._v("大部分")]),b._v("酷Q 插件，但"),i("strong",[b._v("不支持")]),b._v(" CPK 和解包的 DLL。")]),b._v(" "),i("p",[b._v("不过 酷Q 已经停止提供服务，我们也不再建议使用 酷Q 的插件。")]),b._v(" "),i("p",[b._v("将 mirai-native 放入上述关系图：")]),b._v(" "),i("p",[i("a",{attrs:{href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZmxvd2NoYXJ0IExSXG4gICAgY2xhc3NEZWYgY29yZWhpZ2hsaWdodCBmaWxsOiNmOTYsc3Ryb2tlOiMzMzMsc3Ryb2tlLXdpZHRoOjNweDtcbiAgICBjbGFzc0RlZiBoaWdobGlnaHQgZmlsbDojZjg4LHN0cm9rZTojMzMzLHN0cm9rZS13aWR0aDozcHhcbiAgICBzdWJncmFwaCBtaXJhaSBbXCJNaXJhaSDmoYbmnrZcIl1cbiAgICAgICAgbWlyYWljb3JlYXBpKFwibWlyYWktY29yZS1hcGlcIik6Ojpjb3JlaGlnaGxpZ2h0XG4gICAgICAgIG1pcmFpY29yZXFxYW5kcm9pZChcIm1pcmFpLWNvcmU8YnIvPihRUUFuZHJvaWQg5Y2P6K6uKVwiKVxuICAgICAgICBtaXJhaWNvcmVxcWFuZHJvaWQgLS0-IHzmj5DkvpvljY_orq58bWlyYWljb3JlYXBpXG4gICAgZW5kXG4gICAgbWlyYWlpbnRlcmZhY2UoXCLkvaDnvJblhpnnmoQ8YnIvPuacuuWZqOS6uueoi-W6j1wiKVxuICAgIG1pcmFpY29yZWFwaSAtLT4gfOaPkOS-m-WfuuehgOWKn-iDvXxtaXJhaWludGVyZmFjZVxuICAgIG1pcmFpY29yZWFwaSAtLT4gfOWwgeijheWfuuehgOWKn-iDvXxtaXJhaWNvbnNvbGViYWNrZW5kXG4gICAgc3ViZ3JhcGggbWlyYWljb25zb2xlIFtcIk1pcmFpIENvbnNvbGVcIl1cbiAgICAgICAgbWlyYWljb25zb2xlYmFja2VuZChcIkJhY2tFbmRcIilcbiAgICAgICAgbWlyYWljb25zb2xlZnJvbnRlbmQtdGVybWluYWwoXCJGcm9udEVuZDogdGVybWluYWxcIilcbiAgICAgICAgbWlyYWljb25zb2xlZnJvbnRlbmQtYW5kcm9pZChcIkZyb250RW5kOiBBbmRyb2lkXCIpXG4gICAgICAgIG1pcmFpY29uc29sZWJhY2tlbmQgLS0-IG1pcmFpY29uc29sZWZyb250ZW5kLXRlcm1pbmFsXG4gICAgICAgIG1pcmFpY29uc29sZWJhY2tlbmQgLS0-IG1pcmFpY29uc29sZWZyb250ZW5kLWFuZHJvaWRcbiAgICBlbmRcbiAgICBzdWJncmFwaCBjb25zb2xlcGx1Z2lucyBbXCJNaXJhaSBDb25zb2xlIOaPkuS7tlwiXVxuICAgICAgICB5b3VybWlyYWljb25zb2xlcGx1Z2luKFwi5L2g57yW5YaZ55qEIENvbnNvbGUg5o-S5Lu2XCIpIC0tPiBtaXJhaWNvbnNvbGViYWNrZW5kXG4gICAgICAgIG1pcmFpYXBpaHR0cChcIm1pcmFpLWFwaS1odHRwIOaPkuS7tlwiKSAgLS0-IG1pcmFpY29uc29sZWJhY2tlbmRcbiAgICAgICAgb3RoZXJzbWlyYWlwbHVnaW4oXCLlhbbku5YgQ29uc29sZSDmj5Lku7ZcIikgLS0-IG1pcmFpY29uc29sZWJhY2tlbmRcbiAgICAgICAgbWlyYWluYXRpdmUoXCJtaXJhaS1uYXRpdmUg5o-S5Lu2XCIpOjo6aGlnaGxpZ2h0IC0tPiBtaXJhaWNvbnNvbGViYWNrZW5kXG4gICAgZW5kXG4gICAgc3ViZ3JhcGggY29tbXVuaXR5c2RrIFtcIuekvuWMuiBTREtcIl1cbiAgICAgICAgY29tbXVuaXR5c2RrYmFzZWVkb25taXJhaWFwaWh0dHAoXCLln7rkuo4gbWlyYWktYXBpLWh0dHAg55qE56S-5Yy6IFNES1wiKSAtLT4gbWlyYWlhcGlodHRwXG4gICAgZW5kXG4gICAgY29vbHFwbHVnaW5zKFwi6YW3UeaPkuS7tlwiKTo6OmhpZ2hsaWdodCAtLT4gbWlyYWluYXRpdmUiLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ",target:"_blank",rel:"noopener noreferrer"}},[i("img",{attrs:{src:"https://mermaid.ink/img/eyJjb2RlIjoiZmxvd2NoYXJ0IExSXG4gICAgY2xhc3NEZWYgY29yZWhpZ2hsaWdodCBmaWxsOiNmOTYsc3Ryb2tlOiMzMzMsc3Ryb2tlLXdpZHRoOjNweDtcbiAgICBjbGFzc0RlZiBoaWdobGlnaHQgZmlsbDojZjg4LHN0cm9rZTojMzMzLHN0cm9rZS13aWR0aDozcHhcbiAgICBzdWJncmFwaCBtaXJhaSBbXCJNaXJhaSDmoYbmnrZcIl1cbiAgICAgICAgbWlyYWljb3JlYXBpKFwibWlyYWktY29yZS1hcGlcIik6Ojpjb3JlaGlnaGxpZ2h0XG4gICAgICAgIG1pcmFpY29yZXFxYW5kcm9pZChcIm1pcmFpLWNvcmU8YnIvPihRUUFuZHJvaWQg5Y2P6K6uKVwiKVxuICAgICAgICBtaXJhaWNvcmVxcWFuZHJvaWQgLS0-IHzmj5DkvpvljY_orq58bWlyYWljb3JlYXBpXG4gICAgZW5kXG4gICAgbWlyYWlpbnRlcmZhY2UoXCLkvaDnvJblhpnnmoQ8YnIvPuacuuWZqOS6uueoi-W6j1wiKVxuICAgIG1pcmFpY29yZWFwaSAtLT4gfOaPkOS-m-WfuuehgOWKn-iDvXxtaXJhaWludGVyZmFjZVxuICAgIG1pcmFpY29yZWFwaSAtLT4gfOWwgeijheWfuuehgOWKn-iDvXxtaXJhaWNvbnNvbGViYWNrZW5kXG4gICAgc3ViZ3JhcGggbWlyYWljb25zb2xlIFtcIk1pcmFpIENvbnNvbGVcIl1cbiAgICAgICAgbWlyYWljb25zb2xlYmFja2VuZChcIkJhY2tFbmRcIilcbiAgICAgICAgbWlyYWljb25zb2xlZnJvbnRlbmQtdGVybWluYWwoXCJGcm9udEVuZDogdGVybWluYWxcIilcbiAgICAgICAgbWlyYWljb25zb2xlZnJvbnRlbmQtYW5kcm9pZChcIkZyb250RW5kOiBBbmRyb2lkXCIpXG4gICAgICAgIG1pcmFpY29uc29sZWJhY2tlbmQgLS0-IG1pcmFpY29uc29sZWZyb250ZW5kLXRlcm1pbmFsXG4gICAgICAgIG1pcmFpY29uc29sZWJhY2tlbmQgLS0-IG1pcmFpY29uc29sZWZyb250ZW5kLWFuZHJvaWRcbiAgICBlbmRcbiAgICBzdWJncmFwaCBjb25zb2xlcGx1Z2lucyBbXCJNaXJhaSBDb25zb2xlIOaPkuS7tlwiXVxuICAgICAgICB5b3VybWlyYWljb25zb2xlcGx1Z2luKFwi5L2g57yW5YaZ55qEIENvbnNvbGUg5o-S5Lu2XCIpIC0tPiBtaXJhaWNvbnNvbGViYWNrZW5kXG4gICAgICAgIG1pcmFpYXBpaHR0cChcIm1pcmFpLWFwaS1odHRwIOaPkuS7tlwiKSAgLS0-IG1pcmFpY29uc29sZWJhY2tlbmRcbiAgICAgICAgb3RoZXJzbWlyYWlwbHVnaW4oXCLlhbbku5YgQ29uc29sZSDmj5Lku7ZcIikgLS0-IG1pcmFpY29uc29sZWJhY2tlbmRcbiAgICAgICAgbWlyYWluYXRpdmUoXCJtaXJhaS1uYXRpdmUg5o-S5Lu2XCIpOjo6aGlnaGxpZ2h0IC0tPiBtaXJhaWNvbnNvbGViYWNrZW5kXG4gICAgZW5kXG4gICAgc3ViZ3JhcGggY29tbXVuaXR5c2RrIFtcIuekvuWMuiBTREtcIl1cbiAgICAgICAgY29tbXVuaXR5c2RrYmFzZWVkb25taXJhaWFwaWh0dHAoXCLln7rkuo4gbWlyYWktYXBpLWh0dHAg55qE56S-5Yy6IFNES1wiKSAtLT4gbWlyYWlhcGlodHRwXG4gICAgZW5kXG4gICAgY29vbHFwbHVnaW5zKFwi6YW3UeaPkuS7tlwiKTo6OmhpZ2hsaWdodCAtLT4gbWlyYWluYXRpdmUiLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ",alt:""}}),i("OutboundLink")],1)]),b._v(" "),i("h2",{attrs:{id:"mirai-console-loader-mirai-console-的官方一键启动器"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#mirai-console-loader-mirai-console-的官方一键启动器"}},[b._v("#")]),b._v(" "),i("a",{attrs:{href:"https://github.com/iTXTech/mirai-console-loader",target:"_blank",rel:"noopener noreferrer"}},[i("strong",[b._v("mirai-console-loader")]),i("OutboundLink")],1),b._v(": Mirai Console 的官方一键启动器")]),b._v(" "),i("p",[b._v("前面说道我们可以直接在终端运行 mirai-console 的前端 mirai-console-terminal，然而想运行起来 mirai-console-terminal 却不是很容易的事情：你需要下载好 Mirai 官方发布的 mirai-core，mirai-console 和 mirai-console-terminal 的 jar 文件，你还需要知道 terminal 前端的入口是 "),i("strong",[b._v("net.mamoe.mirai.console.terminal.MiraiConsoleTerminalLoader")]),b._v("，然后你还需要通过一大串指令启动它。")]),b._v(" "),i("div",{staticClass:"language-bash line-numbers-mode"},[i("pre",{pre:!0,attrs:{class:"language-bash"}},[i("code",[b._v("java -cp "),i("span",{pre:!0,attrs:{class:"token string"}},[b._v('"上述jar文件路径"')]),b._v(" net.mamoe.mirai.console.terminal.MiraiConsoleTerminalLoader\n")])]),b._v(" "),i("div",{staticClass:"line-numbers-wrapper"},[i("span",{staticClass:"line-number"},[b._v("1")]),i("br")])]),i("p",[b._v("这种复杂的启动方式劝退了许多新手，尤其是未曾听说过 JVM 的新手。")]),b._v(" "),i("p",[b._v("mirai-console-loader 应运而生，它的工作就是简化 console 启动流程，一键帮你下载 jar 文件，自动更新，文件损坏检查...... 你能在手动启动时担心的问题 mirai-console-loader 都帮你想到了！你只需要：")]),b._v(" "),i("div",{staticClass:"language-bash line-numbers-mode"},[i("pre",{pre:!0,attrs:{class:"language-bash"}},[i("code",[b._v("./mcl\n")])]),b._v(" "),i("div",{staticClass:"line-numbers-wrapper"},[i("span",{staticClass:"line-number"},[b._v("1")]),i("br")])]),i("p",[b._v("即可快速启动 mirai-console 的 terminal 前端。同时 mirai-console-loader 还有一些拓展功能，可以自定义你的启动流程。")]),b._v(" "),i("p",[b._v("将 mirai-console-loader 放入上述关系图：")]),b._v(" "),i("p",[i("a",{attrs:{href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZmxvd2NoYXJ0IExSXG4gICAgY2xhc3NEZWYgY29yZWhpZ2hsaWdodCBmaWxsOiNmOTYsc3Ryb2tlOiMzMzMsc3Ryb2tlLXdpZHRoOjNweDtcbiAgICBjbGFzc0RlZiBoaWdobGlnaHQgZmlsbDojZjg4LHN0cm9rZTojMzMzLHN0cm9rZS13aWR0aDozcHhcbiAgICBzdWJncmFwaCBtaXJhaSBbXCJNaXJhaSDmoYbmnrZcIl1cbiAgICAgICAgbWlyYWljb3JlYXBpKFwibWlyYWktY29yZS1hcGlcIik6Ojpjb3JlaGlnaGxpZ2h0XG4gICAgICAgIG1pcmFpY29yZXFxYW5kcm9pZChcIm1pcmFpLWNvcmU8YnIvPihRUUFuZHJvaWQg5Y2P6K6uKVwiKVxuICAgICAgICBtaXJhaWNvcmVxcWFuZHJvaWQgLS0-IHzmj5DkvpvljY_orq58bWlyYWljb3JlYXBpXG4gICAgZW5kXG4gICAgbWlyYWlpbnRlcmZhY2UoXCLkvaDnvJblhpnnmoQ8YnIvPuacuuWZqOS6uueoi-W6j1wiKVxuICAgIG1pcmFpY29yZWFwaSAtLT4gfOaPkOS-m-WfuuehgOWKn-iDvXxtaXJhaWludGVyZmFjZVxuICAgIG1pcmFpY29yZWFwaSAtLT4gfOWwgeijheWfuuehgOWKn-iDvXxtaXJhaWNvbnNvbGViYWNrZW5kXG4gICAgc3ViZ3JhcGggbWlyYWljb25zb2xlIFtcIk1pcmFpIENvbnNvbGVcIl1cbiAgICAgICAgbWlyYWljb25zb2xlYmFja2VuZChcIkJhY2tFbmRcIilcbiAgICAgICAgbWlyYWljb25zb2xlZnJvbnRlbmQtdGVybWluYWwoXCJGcm9udEVuZDogdGVybWluYWxcIilcbiAgICAgICAgbWlyYWljb25zb2xlZnJvbnRlbmQtYW5kcm9pZChcIkZyb250RW5kOiBBbmRyb2lkXCIpXG4gICAgICAgIG1pcmFpY29uc29sZWJhY2tlbmQgLS0-IG1pcmFpY29uc29sZWZyb250ZW5kLXRlcm1pbmFsXG4gICAgICAgIG1pcmFpY29uc29sZWJhY2tlbmQgLS0-IG1pcmFpY29uc29sZWZyb250ZW5kLWFuZHJvaWRcbiAgICBlbmRcbiAgICBzdWJncmFwaCBjb25zb2xlcGx1Z2lucyBbXCJNaXJhaSBDb25zb2xlIOaPkuS7tlwiXVxuICAgICAgICB5b3VybWlyYWljb25zb2xlcGx1Z2luKFwi5L2g57yW5YaZ55qEIENvbnNvbGUg5o-S5Lu2XCIpIC0tPiBtaXJhaWNvbnNvbGViYWNrZW5kXG4gICAgICAgIG1pcmFpYXBpaHR0cChcIm1pcmFpLWFwaS1odHRwIOaPkuS7tlwiKSAgLS0-IG1pcmFpY29uc29sZWJhY2tlbmRcbiAgICAgICAgb3RoZXJzbWlyYWlwbHVnaW4oXCLlhbbku5YgQ29uc29sZSDmj5Lku7ZcIikgLS0-IG1pcmFpY29uc29sZWJhY2tlbmRcbiAgICAgICAgbWlyYWluYXRpdmUoXCJtaXJhaS1uYXRpdmUg5o-S5Lu2XCIpIC0tPiBtaXJhaWNvbnNvbGViYWNrZW5kXG4gICAgZW5kXG4gICAgc3ViZ3JhcGggY29tbXVuaXR5c2RrIFtcIuekvuWMuiBTREtcIl1cbiAgICAgICAgY29tbXVuaXR5c2RrYmFzZWVkb25taXJhaWFwaWh0dHAoXCLln7rkuo4gbWlyYWktYXBpLWh0dHAg55qE56S-5Yy6IFNES1wiKSAtLT4gbWlyYWlhcGlodHRwXG4gICAgZW5kXG4gICAgY29vbHFwbHVnaW5zKFwi6YW3UeaPkuS7tlwiKSAtLT4gbWlyYWluYXRpdmVcbiAgICBtaXJhaWNvbnNvbGVsb2FkZXIoXCJtaXJhaS1jb25zb2xlLWxvYWRlclwiKTo6OmhpZ2hsaWdodCAtLS0-IHzlkK_liqh8bWlyYWljb25zb2xlZnJvbnRlbmQtdGVybWluYWxcbiIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9",target:"_blank",rel:"noopener noreferrer"}},[i("img",{attrs:{src:"https://mermaid.ink/img/eyJjb2RlIjoiZmxvd2NoYXJ0IExSXG4gICAgY2xhc3NEZWYgY29yZWhpZ2hsaWdodCBmaWxsOiNmOTYsc3Ryb2tlOiMzMzMsc3Ryb2tlLXdpZHRoOjNweDtcbiAgICBjbGFzc0RlZiBoaWdobGlnaHQgZmlsbDojZjg4LHN0cm9rZTojMzMzLHN0cm9rZS13aWR0aDozcHhcbiAgICBzdWJncmFwaCBtaXJhaSBbXCJNaXJhaSDmoYbmnrZcIl1cbiAgICAgICAgbWlyYWljb3JlYXBpKFwibWlyYWktY29yZS1hcGlcIik6Ojpjb3JlaGlnaGxpZ2h0XG4gICAgICAgIG1pcmFpY29yZXFxYW5kcm9pZChcIm1pcmFpLWNvcmU8YnIvPihRUUFuZHJvaWQg5Y2P6K6uKVwiKVxuICAgICAgICBtaXJhaWNvcmVxcWFuZHJvaWQgLS0-IHzmj5DkvpvljY_orq58bWlyYWljb3JlYXBpXG4gICAgZW5kXG4gICAgbWlyYWlpbnRlcmZhY2UoXCLkvaDnvJblhpnnmoQ8YnIvPuacuuWZqOS6uueoi-W6j1wiKVxuICAgIG1pcmFpY29yZWFwaSAtLT4gfOaPkOS-m-WfuuehgOWKn-iDvXxtaXJhaWludGVyZmFjZVxuICAgIG1pcmFpY29yZWFwaSAtLT4gfOWwgeijheWfuuehgOWKn-iDvXxtaXJhaWNvbnNvbGViYWNrZW5kXG4gICAgc3ViZ3JhcGggbWlyYWljb25zb2xlIFtcIk1pcmFpIENvbnNvbGVcIl1cbiAgICAgICAgbWlyYWljb25zb2xlYmFja2VuZChcIkJhY2tFbmRcIilcbiAgICAgICAgbWlyYWljb25zb2xlZnJvbnRlbmQtdGVybWluYWwoXCJGcm9udEVuZDogdGVybWluYWxcIilcbiAgICAgICAgbWlyYWljb25zb2xlZnJvbnRlbmQtYW5kcm9pZChcIkZyb250RW5kOiBBbmRyb2lkXCIpXG4gICAgICAgIG1pcmFpY29uc29sZWJhY2tlbmQgLS0-IG1pcmFpY29uc29sZWZyb250ZW5kLXRlcm1pbmFsXG4gICAgICAgIG1pcmFpY29uc29sZWJhY2tlbmQgLS0-IG1pcmFpY29uc29sZWZyb250ZW5kLWFuZHJvaWRcbiAgICBlbmRcbiAgICBzdWJncmFwaCBjb25zb2xlcGx1Z2lucyBbXCJNaXJhaSBDb25zb2xlIOaPkuS7tlwiXVxuICAgICAgICB5b3VybWlyYWljb25zb2xlcGx1Z2luKFwi5L2g57yW5YaZ55qEIENvbnNvbGUg5o-S5Lu2XCIpIC0tPiBtaXJhaWNvbnNvbGViYWNrZW5kXG4gICAgICAgIG1pcmFpYXBpaHR0cChcIm1pcmFpLWFwaS1odHRwIOaPkuS7tlwiKSAgLS0-IG1pcmFpY29uc29sZWJhY2tlbmRcbiAgICAgICAgb3RoZXJzbWlyYWlwbHVnaW4oXCLlhbbku5YgQ29uc29sZSDmj5Lku7ZcIikgLS0-IG1pcmFpY29uc29sZWJhY2tlbmRcbiAgICAgICAgbWlyYWluYXRpdmUoXCJtaXJhaS1uYXRpdmUg5o-S5Lu2XCIpIC0tPiBtaXJhaWNvbnNvbGViYWNrZW5kXG4gICAgZW5kXG4gICAgc3ViZ3JhcGggY29tbXVuaXR5c2RrIFtcIuekvuWMuiBTREtcIl1cbiAgICAgICAgY29tbXVuaXR5c2RrYmFzZWVkb25taXJhaWFwaWh0dHAoXCLln7rkuo4gbWlyYWktYXBpLWh0dHAg55qE56S-5Yy6IFNES1wiKSAtLT4gbWlyYWlhcGlodHRwXG4gICAgZW5kXG4gICAgY29vbHFwbHVnaW5zKFwi6YW3UeaPkuS7tlwiKSAtLT4gbWlyYWluYXRpdmVcbiAgICBtaXJhaWNvbnNvbGVsb2FkZXIoXCJtaXJhaS1jb25zb2xlLWxvYWRlclwiKTo6OmhpZ2hsaWdodCAtLS0-IHzlkK_liqh8bWlyYWljb25zb2xlZnJvbnRlbmQtdGVybWluYWxcbiIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9",alt:""}}),i("OutboundLink")],1)]),b._v(" "),i("hr"),b._v(" "),i("p",[b._v("本文作者 "),i("a",{attrs:{href:"https://github.com/StageGuard",target:"_blank",rel:"noopener noreferrer"}},[b._v("@StageGuard"),i("OutboundLink")],1),b._v("。如有疏漏或错误，欢迎"),i("a",{attrs:{href:"https://github.com/mamoe/mirai/issues/new",target:"_blank",rel:"noopener noreferrer"}},[b._v("提出 Issue"),i("OutboundLink")],1),b._v(" 修正。")]),b._v(" "),i("p",[b._v("实体关系图采用 "),i("a",{attrs:{href:"https://github.com/mermaid-js/mermaid",target:"_blank",rel:"noopener noreferrer"}},[b._v("Mermaid"),i("OutboundLink")],1),b._v(" 绘制。")]),b._v(" "),i("blockquote",[i("p",[i("RouterLink",{attrs:{to:"/"}},[b._v("回到 Mirai 文档索引")])],1)]),b._v(" "),i("h3",{attrs:{id:"变更记录"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#变更记录"}},[b._v("#")]),b._v(" 变更记录")]),b._v(" "),i("p",[b._v("当前版本："),i("code",[b._v("1.2.0")]),b._v(" (2021/1/24)")]),b._v(" "),i("ul",[i("li",[i("code",[b._v("1.0.0")]),b._v(": 2020/12/13\n"),i("ul",[i("li",[i("a",{attrs:{href:"https://github.com/mamoe/mirai/pull/710",target:"_blank",rel:"noopener noreferrer"}},[b._v("PR 初始版本"),i("OutboundLink")],1)])])]),b._v(" "),i("li",[i("code",[b._v("1.1.0")]),b._v(": 2021/1/13\n"),i("ul",[i("li",[b._v("增加了作者信息")])])]),b._v(" "),i("li",[i("code",[b._v("1.2.0")]),b._v(": 2021/1/24\n"),i("ul",[i("li",[b._v("进行了语言精简, 简化关系图")])])])])])}),[],!1,null,null,null);a.default=W.exports}}]);