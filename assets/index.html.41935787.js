import{_ as t,o as p,c as s,a as e,b as a,d as o,e as i,r as d}from"./app.90d841de.js";var c="/mirai.png",n="/assets/img4.d3165238.png",l="/assets/img5.9c53babb.png",m="/assets/img6.2c4cf2d2.png",h="/assets/img7.6fe65fbf.png",g="/assets/img8.30387243.png",_="/assets/img9.40b09258.png",u="/assets/img10.121058ee.png",b="/assets/img11.b5be7ec6.png";const f={},v=o('<h1></h1><div align="center"><img width="160" src="'+c+'" alt="logo"><img width="95" src="'+c+'" alt="title"><hr><p>Mirai \u662F\u4E00\u4E2A\u5728\u5168\u5E73\u53F0\u4E0B\u8FD0\u884C\uFF0C\u63D0\u4F9B QQ \u534F\u8BAE\u652F\u6301\u7684\u9AD8\u6548\u7387\u673A\u5668\u4EBA\u5E93</p><p>\u8FD9\u4E2A\u9879\u76EE\u7684\u540D\u5B57\u6765\u6E90\u4E8E</p><p><a href="http://www.kyotoanimation.co.jp/">\u4EAC\u90FD\u52A8\u753B</a>\u4F5C\u54C1<a href="https://zh.moegirl.org/zh-hans/%E5%A2%83%E7%95%8C%E7%9A%84%E5%BD%BC%E6%96%B9">\u300A\u5883\u754C\u7684\u5F7C\u65B9\u300B</a>\u7684<a href="https://zh.moegirl.org/zh-hans/%E6%A0%97%E5%B1%B1%E6%9C%AA%E6%9D%A5">\u6817\u5C71\u672A\u6765(Kuriyama <b>Mirai</b>)</a></p><p><a href="https://www.crypton.co.jp/">CRYPTON</a>\u4EE5<a href="https://www.crypton.co.jp/miku_eng">\u521D\u97F3\u672A\u6765</a>\u4E3A\u4EE3\u8868\u7684\u521B\u4F5C\u4E0E\u6D3B\u52A8<a href="https://magicalmirai.com/2019/index_en.html">(Magical <b>Mirai</b>)</a></p> \u56FE\u6807\u4EE5\u53CA\u5F62\u8C61\u7531\u753B\u5E08<a href="">DazeCake</a>\u7ED8\u5236 </div><h1 id="mirai-login-solver-selenium" tabindex="-1"><a class="header-anchor" href="#mirai-login-solver-selenium" aria-hidden="true">#</a> mirai-login-solver-selenium</h1><p>\u7531\u4E8E\u670D\u52A1\u5668\u518D\u6B21\u66F4\u65B0\u9A8C\u8BC1\u903B\u8F91\uFF0C\u6B64\u6A21\u5757\u5DF2\u7ECF\u65E0\u6CD5\u6B63\u5E38\u5DE5\u4F5C</p><h2 id="\u624B\u52A8\u5B8C\u6210\u6ED1\u52A8\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#\u624B\u52A8\u5B8C\u6210\u6ED1\u52A8\u9A8C\u8BC1" aria-hidden="true">#</a> \u624B\u52A8\u5B8C\u6210\u6ED1\u52A8\u9A8C\u8BC1</h2><h3 id="\u73AF\u5883\u51C6\u5907" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883\u51C6\u5907" aria-hidden="true">#</a> \u73AF\u5883\u51C6\u5907</h3><p>\u5728 <code>mirai</code> \u8FD0\u884C\u65F6\u4E2D\u6DFB\u52A0 JVM \u5C5E\u6027 <code>mirai.slider.captcha.supported</code> (\u6DFB\u52A0\u53C2\u6570 <code>-Dmirai.slider.captcha.supported</code>) \u4EE5\u786E\u8BA4\u624B\u52A8\u5B8C\u6210\u6ED1\u52A8\u9A8C\u8BC1</p><blockquote><p>\u5BF9\u4E8E <code>mirai-console-loader</code>, \u8BF7\u4F7F\u7528\u4EFB\u610F\u4E00\u6B3E\u6587\u672C\u7F16\u8F91\u5668\u6253\u5F00 <code>mcl</code>/<code>mcl.bat</code>, \u5728 <code>java ..... -jar ....</code> \u547D\u4EE4\u4E2D\u7684 <code>-jar</code> \u524D\u52A0\u5165\u53C2\u6570 <code>-Dmirai.slider.captcha.supported</code></p><p><code>java ..... -Dmirai.slider.captcha.supported -jar ....</code></p></blockquote><blockquote><p>\u6CE8:</p><ul><li>\u5982\u679C\u8FD0\u884C\u4E8E <code>mirai-console</code>, \u9700\u8981\u5728 <code>plugins</code> \u5185\u5220\u9664 <code>mirai-login-solver-selenium</code> \u63D2\u4EF6</li><li>\u5982\u679C\u76F4\u63A5\u57FA\u4E8E <code>mirai-core</code> \u5F00\u53D1, \u9700\u8981\u5220\u9664 <code>mirai-login-solver-selenium</code> \u4F9D\u8D56</li></ul></blockquote><hr>',10),k=i("\u65B9\u6CD5 1: \u4F7F\u7528 "),w={href:"https://github.com/mzdluo123/TxCaptchaHelper",target:"_blank",rel:"noopener noreferrer"},x=i("mzdluo123/TxCaptchaHelper"),C=o("<hr><p>\u65B9\u6CD5 2:</p><p><strong>\u6CE8: \u4F7F\u7528\u6B64\u65B9\u6CD5\u5148\u4E0D\u8981\u8FDB\u884C\u767B\u5F55</strong></p><p>\u51C6\u5907\u4E00\u53F0\u7535\u8111(<code>Require Chrome Desktop installed</code>), \u4E00\u6761\u6570\u636E\u7EBF, \u4E00\u53F0\u771F\u624B\u673A(<code>Android System, require Chrome mobile installed</code>)</p><p>\u6253\u5F00\u624B\u673A\u7684 <code>USB \u8C03\u8BD5 / USB Debug</code>, \u94FE\u63A5\u81F3\u7535\u8111</p><p>\u7136\u540E\u5728\u624B\u673A\u548C\u7535\u8111\u90FD\u6253\u5F00 Chrome\uFF0C\u5E76\u4F7F\u7535\u8111\u6210\u529F\u94FE\u63A5\u4E0A\u624B\u673A Chrome</p>",6),E={href:"https://www.baidu.com/s?ie=UTF-8&wd=Chrome%20Mobile%20Remote%20Debug",target:"_blank",rel:"noopener noreferrer"},M=i("Chrome Mobile Remote Debug"),S=o('<p>\u5728\u7535\u8111\u6253\u5F00 <code>chrome://inspect/#devices</code>, \u7B49\u5F85..... \u76F4\u5230\u4EE5\u4E0B\u9875\u9762\u51FA\u73B0</p><p><img src="'+n+'" alt="img4"></p><p>\u70B9\u51FB\u6846\u4E2D\u7684 <code>inspect</code></p><hr><p>\u5148\u70B9\u5F00 <code>Network</code>, \u7136\u540E\u767B\u5165 mirai, \u5728 <code>chrome-native://newtab/</code> \u4F4D\u7F6E\u8F93\u5165\u9A8C\u8BC1\u7801\u7F51\u9875\u5730\u5740\u5E76\u6309\u4E0B\u56DE\u8F66</p><p><strong>\u6CE8\u610F: \u5148\u6253\u5F00 Network \u5728\u8F93\u5165\u5730\u5740</strong></p><p><img src="'+l+'" alt="img5"></p><p>\u5B8C\u6210\u9A8C\u8BC1, \u5728 <code>Network</code> \u4E2D\u627E\u5230\u540D\u4E3A <code>cap_union_new_verify</code> \u7684\u8BF7\u6C42, \u5728\u6700\u4E0B\u9762</p><p><img src="'+m+'" alt="img6"></p><p>ticket \u540E\u90A3\u4E00\u5768\u5C31\u662F\u8981\u8F93\u5165\u56DE mirai \u7684\u5185\u5BB9</p><p><strong>\u6CE8\u610F</strong></p><ul><li>\u590D\u5236\u7684\u65F6\u5019\u8BB0\u5F97\u5220\u6389\u5F15\u53F7(<code>&quot;</code>, \u524D\u540E\u90FD\u6709\u4E00\u4E2A), \u90A3\u4E2A\u4E0D\u662Fticket\u5185\u5BB9</li><li>\u901F\u5EA6\u8981\u5FEB</li><li>\u6CE8\u610F\u4E0D\u8981\u6F0F\u5B57\u7B26(\u6CA1\u590D\u5236\u5B8C, \u540E\u9762\u8FD8\u6709\u5F88\u957F) <ul><li>\u53EF\u4EE5\u5148\u5F00\u4E00\u6B21\u8BD5\u4E00\u4E0B\u624B(\u4E0D\u8F93\u5165ticket) \u7136\u540E\u91CD\u542F\u8FDB\u884C\u6ED1\u5757</li></ul></li></ul><hr><p>\u65B9\u6CD5 3:</p><p>\u6B64\u65B9\u6CD5\u9488\u5BF9\u4E8E <code>MacOS + IOS</code>, \u4E0E\u65B9\u6CD52\u64CD\u4F5C\u7C7B\u4F3C\u3002</p><p>\u51C6\u5907\u4E00\u53F0 Mac \u7535\u8111\uFF0C\u51C6\u5907\u4E00\u53F0\u624B\u673A\uFF0C\u4E00\u6761\u6570\u636E\u7EBF\uFF08\u7528\u4E8E\u7535\u8111\u548C\u624B\u673A\u76F8\u8FDE\u63A5\uFF09</p><p>\u5728 IOS \u8BBE\u5907\u4E0A\u8FDB\u5165 <code>\u8BBE\u7F6E -&gt; Safari -&gt; \u9AD8\u7EA7</code>, \u627E\u5230 <code>web inspector</code> \u5E76\u5F00\u542F</p><p><img src="'+h+'" alt="img7"></p><p>\u5728 MacOS \u7684 Safari \u4E2D\u627E\u5230 <code>\u504F\u597D\u8BBE\u7F6E -&gt; \u9AD8\u7EA7</code>\uFF0C\u6253\u5F00\u9009\u9879\u5728\u83DC\u5355\u680F\u4E2D\u663E\u793A\u5F00\u53D1</p><p><img src="'+g+'" alt="img8"></p><p>\u624B\u673A\u548C\u7535\u8111\u90FD\u6253\u5F00 Safari \u6D4F\u89C8\u5668\uFF0C\u5728\u624B\u673A\u4E0A\u590D\u5236URL\u5E76\u6253\u5F00\u7F51\u9875</p><p><img src="'+_+'" alt="img9"></p><p>\u5C06\u624B\u673A\u548C Mac \u4E4B\u95F4\u7528\u6570\u636E\u7EBF\u8FDE\u63A5</p><p>\u5728\u5F00\u53D1\u4E2D\u627E\u5230\u8BBE\u5907\u540D\u79F0\u548C\u6253\u5F00\u7684\u7F51\u9875</p><p><img src="'+u+'" alt="img10"></p><p>\u6253\u5F00\u540E\u4F1A\u51FA\u73B0 Web Inpector\uFF0C\u8FD9\u65F6\u5728\u624B\u673A\u4E0A\u62D6\u52A8\u6ED1\u5757\uFF0C\u62D6\u52A8\u540E\u5728\u7F51\u7EDC\u4E0A\u641C\u7D22 <code>cap_union_new_verify</code> \u7684\u8BF7\u6C42\u3002</p><p>\u622A\u53D6\u5176\u4E2D ticket \u7684\u5185\u5BB9\u5373\u53EF\u3002</p><p><img src="'+b+'" alt="img11"></p>',28);function B(D,j){const r=d("ExternalLinkIcon");return p(),s("div",null,[v,e("p",null,[k,e("a",w,[x,a(r)])]),C,e("blockquote",null,[e("p",null,[e("a",E,[M,a(r)])])]),S])}var N=t(f,[["render",B],["__file","index.html.vue"]]);export{N as default};
