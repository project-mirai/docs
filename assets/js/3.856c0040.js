(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{739:function(t,e,r){t.exports=r.p+"assets/img/mirai.a6a3d797.png"},740:function(t,e,r){t.exports=r.p+"assets/img/mirai.a2af7a4d.svg"},741:function(t,e,r){t.exports=r.p+"assets/img/img4.595b3088.png"},742:function(t,e,r){t.exports=r.p+"assets/img/img5.417d99f5.png"},743:function(t,e,r){t.exports=r.p+"assets/img/img6.c537e515.png"},776:function(t,e,r){"use strict";r.r(e);var v=r(109),a=Object(v.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("div",{attrs:{align:"center"}},[v("img",{attrs:{width:"160",src:r(739),alt:"logo"}}),v("br"),t._v(" "),v("img",{attrs:{width:"95",src:r(740),alt:"title"}}),t._v(" "),v("hr"),t._v(" "),v("p",[t._v("Mirai 是一个在全平台下运行，提供 QQ 协议支持的高效率机器人库")]),t._v(" "),v("p",[t._v("这个项目的名字来源于\n")]),v("p",[v("a",{attrs:{href:"http://www.kyotoanimation.co.jp/"}},[t._v("京都动画")]),t._v("作品"),v("a",{attrs:{href:"https://zh.moegirl.org/zh-hans/%E5%A2%83%E7%95%8C%E7%9A%84%E5%BD%BC%E6%96%B9"}},[t._v("《境界的彼方》")]),t._v("的"),v("a",{attrs:{href:"https://zh.moegirl.org/zh-hans/%E6%A0%97%E5%B1%B1%E6%9C%AA%E6%9D%A5"}},[t._v("栗山未来(Kuriyama "),v("b",[t._v("Mirai")]),t._v(")")])]),t._v(" "),v("p",[v("a",{attrs:{href:"https://www.crypton.co.jp/"}},[t._v("CRYPTON")]),t._v("以"),v("a",{attrs:{href:"https://www.crypton.co.jp/miku_eng"}},[t._v("初音未来")]),t._v("为代表的创作与活动"),v("a",{attrs:{href:"https://magicalmirai.com/2019/index_en.html"}},[t._v("(Magical "),v("b",[t._v("Mirai")]),t._v(")")])]),t._v("\n图标以及形象由画师"),v("a",{attrs:{href:""}},[t._v("DazeCake")]),t._v("绘制\n")]),v("p"),t._v(" "),v("h1",{attrs:{id:"mirai-login-solver-selenium"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mirai-login-solver-selenium"}},[t._v("#")]),t._v(" mirai-login-solver-selenium")]),t._v(" "),v("p",[t._v("由于服务器再次更新验证逻辑，此模块已经无法正常工作")]),t._v(" "),v("h2",{attrs:{id:"手动完成滑动验证"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#手动完成滑动验证"}},[t._v("#")]),t._v(" 手动完成滑动验证")]),t._v(" "),v("h3",{attrs:{id:"环境准备"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#环境准备"}},[t._v("#")]),t._v(" 环境准备")]),t._v(" "),v("p",[t._v("在 "),v("code",[t._v("mirai")]),t._v(" 运行时中添加 JVM 属性 "),v("code",[t._v("mirai.slider.captcha.supported")]),t._v(" (添加参数 "),v("code",[t._v("-Dmirai.slider.captcha.supported")]),t._v(")\n以确认手动完成滑动验证")]),t._v(" "),v("blockquote",[v("p",[t._v("对于 "),v("code",[t._v("mirai-console-loader")]),t._v(", 请使用任意一款文本编辑器打开 "),v("code",[t._v("mcl")]),t._v("/"),v("code",[t._v("mcl.bat")]),t._v(", 在 "),v("code",[t._v("java ..... -jar ....")]),t._v(" 命令中的 "),v("code",[t._v("-jar")]),t._v("\n前加入参数 "),v("code",[t._v("-Dmirai.slider.captcha.supported")])]),t._v(" "),v("p",[v("code",[t._v("java ..... -Dmirai.slider.captcha.supported -jar ....")])])]),t._v(" "),v("hr"),t._v(" "),v("p",[t._v("方法 1: 使用 "),v("a",{attrs:{href:"https://github.com/mzdluo123/TxCaptchaHelper",target:"_blank",rel:"noopener noreferrer"}},[t._v("mzdluo123/TxCaptchaHelper"),v("OutboundLink")],1)]),t._v(" "),v("hr"),t._v(" "),v("p",[t._v("方法 2:")]),t._v(" "),v("p",[v("strong",[t._v("注: 使用此方法先不要进行登录")])]),t._v(" "),v("p",[t._v("准备一台电脑("),v("code",[t._v("Require Chrome Desktop installed")]),t._v("),\n一条数据线,\n一台真手机("),v("code",[t._v("Android System, require Chrome mobile installed")]),t._v(")")]),t._v(" "),v("p",[t._v("打开手机的 "),v("code",[t._v("USB 调试 / USB Debug")]),t._v(", 链接至电脑")]),t._v(" "),v("p",[t._v("然后在手机和电脑都打开 Chrome，并使电脑成功链接上手机 Chrome")]),t._v(" "),v("blockquote",[v("p",[v("a",{attrs:{href:"https://www.baidu.com/s?ie=UTF-8&wd=Chrome%20Mobile%20Remote%20Debug",target:"_blank",rel:"noopener noreferrer"}},[t._v("Chrome Mobile Remote Debug"),v("OutboundLink")],1)])]),t._v(" "),v("p",[t._v("在电脑打开 "),v("code",[t._v("chrome://inspect/#devices")]),t._v(", 等待..... 直到以下页面出现")]),t._v(" "),v("p",[v("img",{attrs:{src:r(741),alt:"img4"}})]),t._v(" "),v("p",[t._v("点击框中的 "),v("code",[t._v("inspect")])]),t._v(" "),v("hr"),t._v(" "),v("p",[t._v("先点开 "),v("code",[t._v("Network")]),t._v(",\n然后登入 mirai,\n在 "),v("code",[t._v("chrome-native://newtab/")]),t._v(" 位置输入验证码网页地址并按下回车")]),t._v(" "),v("p",[v("strong",[t._v("注意: 先打开 Network 在输入地址")])]),t._v(" "),v("p",[v("img",{attrs:{src:r(742),alt:"img5"}})]),t._v(" "),v("p",[t._v("完成验证, 在 "),v("code",[t._v("Network")]),t._v(" 中找到名为 "),v("code",[t._v("cap_union_new_verify")]),t._v(" 的请求, 在最下面")]),t._v(" "),v("p",[v("img",{attrs:{src:r(743),alt:"img6"}})]),t._v(" "),v("p",[t._v("ticket 后那一坨就是要输入回 mirai 的内容")]),t._v(" "),v("p",[v("strong",[t._v("注意")])]),t._v(" "),v("ul",[v("li",[t._v("复制的时候记得删掉引号("),v("code",[t._v('"')]),t._v(", 前后都有一个), 那个不是ticket内容")]),t._v(" "),v("li",[t._v("速度要快")]),t._v(" "),v("li",[t._v("注意不要漏字符(没复制完, 后面还有很长)\n"),v("ul",[v("li",[t._v("可以先开一次试一下手(不输入ticket) 然后重启进行滑块")])])])])])}),[],!1,null,null,null);e.default=a.exports}}]);