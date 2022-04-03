(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{410:function(s,t,a){"use strict";a.r(t);var n=a(49),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"mcl-plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mcl-plugin"}},[s._v("#")]),s._v(" MCL Plugin")]),s._v(" "),a("p",[s._v("在"),a("code",[s._v("Mirai Console")]),s._v("插件中使用"),a("code",[s._v("MCL API")]),s._v("，本文档采用"),a("code",[s._v("Kotlin")]),s._v("编写。")]),s._v(" "),a("h2",{attrs:{id:"在build-gradle-kts-中添加mcl依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在build-gradle-kts-中添加mcl依赖"}},[s._v("#")]),s._v(" 在"),a("code",[s._v("build.gradle(.kts)")]),s._v(" 中添加"),a("code",[s._v("MCL")]),s._v("依赖")]),s._v(" "),a("div",{staticClass:"language-groovy line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[s._v("dependencies "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//打包时排除mcl包，如果您的插件打包时不打包依赖，则可使用implementation")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("compileOnly")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"org.itxtech:mcl:2.0.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"在插件主类中检查mcl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在插件主类中检查mcl"}},[s._v("#")]),s._v(" 在插件主类中检查"),a("code",[s._v("MCL")])]),s._v(" "),a("p",[s._v("如果不检查会导致加载调用了"),a("code",[s._v("MCL API")]),s._v("的类时导致崩溃。")]),s._v(" "),a("div",{staticClass:"language-kotlin line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    Class"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("forName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"org.itxtech.mcl.Loader"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("catch")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("e"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Exception"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Mirai Console 并未通过 iTXTech Mirai Console Loader 加载。"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"请访问 https://github.com/iTXTech/mirai-console-loader"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//载入调用了MCL API的类，切记不要用子类，不然会自动加载")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"执行mcl命令行命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行mcl命令行命令"}},[s._v("#")]),s._v(" 执行"),a("code",[s._v("MCL")]),s._v("命令行命令")]),s._v(" "),a("div",{staticClass:"language-kotlin line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("itxtech"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mcl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Loader\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" mcl "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Loader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fun")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("runMclCommand")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("args"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Array"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("String"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    mcl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("parseCli")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//调用mcl解析参数")]),s._v("\n    mcl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("manager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("phaseCli")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//调用模块管理器执行cli阶段")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//执行添加包指令")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("runMclCommand")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("arrayOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--update-package"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"包名"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--type"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"plugin"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--channel"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"stable"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h2",{attrs:{id:"调用mcl包管理器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调用mcl包管理器"}},[s._v("#")]),s._v(" 调用"),a("code",[s._v("MCL")]),s._v("包管理器")]),s._v(" "),a("div",{staticClass:"language-kotlin line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("itxtech"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mcl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Loader\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("itxtech"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mcl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("component"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Config\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" mcl "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Loader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//添加 Mirai Native")]),s._v("\nmcl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("packages"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    Config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Package")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"org.itxtech:mirai-native"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"stable"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//执行 updater 模块，如果updater被禁用则无法调用")]),s._v("\nmcl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("manager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getModule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string-literal singleline"}},[a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"updater"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("load")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//执行模块的 load 阶段")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);