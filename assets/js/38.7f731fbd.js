(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{409:function(s,t,a){"use strict";a.r(t);var n=a(49),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"mcl-module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mcl-module"}},[s._v("#")]),s._v(" MCL Module")]),s._v(" "),a("p",[s._v("MCL 模块开发文档。")]),s._v(" "),a("h2",{attrs:{id:"模块架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块架构"}},[s._v("#")]),s._v(" 模块架构")]),s._v(" "),a("p",[a("code",[s._v("MCL Module")]),s._v(" 中提供的基本对象：")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/iTXTech/mirai-console-loader/blob/master/src/main/java/org/itxtech/mcl/Loader.java",target:"_blank",rel:"noopener noreferrer"}},[s._v("Loader"),a("OutboundLink")],1),s._v(" - MCL 实例，可通过其访问各个组件")])]),s._v(" "),a("h2",{attrs:{id:"mclmodule-类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mclmodule-类"}},[s._v("#")]),s._v(" "),a("code",[s._v("MclModule")]),s._v(" 类")]),s._v(" "),a("ul",[a("li",[s._v("每个模块类都需继承 "),a("code",[s._v("org.itxtech.mcl.module.MclModule")])])]),s._v(" "),a("h3",{attrs:{id:"prepare"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prepare"}},[s._v("#")]),s._v(" "),a("code",[s._v("prepare")])]),s._v(" "),a("p",[s._v("模块最先执行的方法，可用于：")]),s._v(" "),a("ol",[a("li",[s._v("添加命令行选项")]),s._v(" "),a("li",[s._v("修改配置文件")])]),s._v(" "),a("h3",{attrs:{id:"cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cli"}},[s._v("#")]),s._v(" "),a("code",[s._v("cli")])]),s._v(" "),a("p",[s._v("脚本处理命令行参数。")]),s._v(" "),a("h3",{attrs:{id:"load"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#load"}},[s._v("#")]),s._v(" "),a("code",[s._v("load")])]),s._v(" "),a("p",[s._v("各脚本都处理完命令行参数后被调用。")]),s._v(" "),a("h3",{attrs:{id:"boot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#boot"}},[s._v("#")]),s._v(" "),a("code",[s._v("boot")])]),s._v(" "),a("p",[s._v("启动"),a("code",[s._v("mirai")]),s._v("，应有且只有一个脚本实现此阶段。")]),s._v(" "),a("h2",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[s._v("#")]),s._v(" 示例")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("module")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("apache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("commons"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cli"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Option")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("itxtech"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mcl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MclModule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Test")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MclModule")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Test"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 此方法必须实现，名称是插件的唯一标识")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("prepare")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        loader "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//脚本中可直接访问 Loader 实例")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("options "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//命令行参数实例")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("addOption")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//添加命令行参数")]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Option")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//该包已在最上面导入了")]),s._v("\n                                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("builder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"t"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("desc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Example"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("longOpt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"example"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// MCL 使用 Apache Commons CLI，见 https://commons.apache.org/proper/commons-cli/")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cli")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("loader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cli"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("hasOption")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"t"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//如果存在-t参数，或--exmaple参数")]),s._v("\n            loader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"示例！！！"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("load")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        loader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("warning")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"示例：Load"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("boot")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        loader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("warning")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"示例：Boot"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br")])]),a("h2",{attrs:{id:"注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[s._v("#")]),s._v(" 注意事项")]),s._v(" "),a("ol",[a("li",[s._v("建议将所有 "),a("code",[s._v("MclModule")]),s._v(" 分功能组件放在不同 "),a("code",[s._v("package")]),s._v(" 中，方便独立加载")]),s._v(" "),a("li",[s._v("一个包含 "),a("code",[s._v("MclModule")]),s._v(" 的 "),a("code",[s._v("package")]),s._v(" 中应仅包含 "),a("code",[s._v("MclModule")]),s._v("，因为 "),a("code",[s._v("MCL")]),s._v(" 会将该 "),a("code",[s._v("package")]),s._v(" 中所有 "),a("code",[s._v("class")]),s._v(" 当作 "),a("code",[s._v("MclModule")]),s._v(" 加载")]),s._v(" "),a("li",[s._v("包含 "),a("code",[s._v("MclModule")]),s._v(" 的 "),a("code",[s._v("Jar")]),s._v(" 会直接加载入 "),a("code",[s._v("MCL")]),s._v(" 的 "),a("code",[s._v("SystemClassLoader")]),s._v(" 中，被所有包共享")])])])}),[],!1,null,null,null);t.default=e.exports}}]);