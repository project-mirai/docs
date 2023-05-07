import{_ as l,o as a,c as _,a as e,b as o,w as i,d,e as t,r as s}from"./app.6ff2831f.js";const c={},h=d('<h1 id="mirai-preparations" tabindex="-1"><a class="header-anchor" href="#mirai-preparations" aria-hidden="true">#</a> Mirai - Preparations</h1><p>\u672C\u7AE0\u8282\u4ECB\u7ECD Mirai \u7684 JVM \u73AF\u5883\u548C\u5F00\u53D1\u51C6\u5907\u5DE5\u4F5C\u3002</p><h2 id="jvm-\u73AF\u5883\u8981\u6C42" tabindex="-1"><a class="header-anchor" href="#jvm-\u73AF\u5883\u8981\u6C42" aria-hidden="true">#</a> JVM \u73AF\u5883\u8981\u6C42</h2><ul><li>\u684C\u9762 JVM\uFF1A\u6700\u4F4E Java 8\uFF0C\u4F46\u63A8\u8350 Java 17\uFF08\u8981\u4F7F\u7528\u4E00\u952E\u542F\u52A8\u5668\uFF0C\u9700\u8981 11 \u53CA\u4EE5\u4E0A\uFF09</li><li>Android\uFF1A <ul><li>mirai 2.15.0 \u8D77: API \u7B49\u7EA7 21 \uFF08Android 5.0\uFF0CLOLLIPOP)</li><li>mirai 2.15.0 \u524D: API \u7B49\u7EA7 26 \uFF08Android 8.0\uFF0CO)</li></ul></li></ul>',4),u=t("\u76EE\u524D\u4E3B\u8981\u4F7F\u7528\u7684\u81EA\u52A8\u542F\u52A8\u5668\uFF0C"),p={href:"https://github.com/iTXTech/mirai-console-loader",target:"_blank",rel:"noopener noreferrer"},f=t("Mirai Console Loader"),m=t(" \uFF0C\uFF08MCL\uFF09 \u9ED8\u8BA4\u5B89\u88C5 JRE 17\u3002"),b=e("strong",null,"\u4F46\u6CE8\u610F\u4E0D\u8981\u4F7F\u7528 Oracle JDK",-1),g=t(" \uFF08"),k={href:"https://github.com/mamoe/mirai/discussions/779",target:"_blank",rel:"noopener noreferrer"},J=t("\u539F\u56E0"),x=t("\uFF09\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5176\u4ED6\u4EFB\u4F55 JDK\u3002"),K=e("p",null,"\u8981\u4E0B\u8F7D JDK\uFF1A",-1),w=t("\u624B\u52A8\u4E0B\u8F7D\u5B89\u88C5\u5982 "),I={href:"https://adoptopenjdk.net/",target:"_blank",rel:"noopener noreferrer"},v=t("AdoptOpenJDK"),A=e("li",null,[t("\u81EA\u52A8\u5728 IntelliJ IDEA "),e("code",null,"Project Structure"),t("("),e("code",null,"Ctrl+Shift+Alt+S"),t(") -> "),e("code",null,"SDKs"),t(" -> "),e("code",null,"+"),t(" -> "),e("code",null,"Download JDK"),t(" \u4E0B\u8F7D\u5B89\u88C5")],-1),E=e("h2",{id:"\u5F00\u53D1\u7684\u51C6\u5907\u5DE5\u4F5C",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u5F00\u53D1\u7684\u51C6\u5907\u5DE5\u4F5C","aria-hidden":"true"},"#"),t(" \u5F00\u53D1\u7684\u51C6\u5907\u5DE5\u4F5C")],-1),M=e("h3",{id:"\u5B89\u88C5-ide-\u63D2\u4EF6",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u5B89\u88C5-ide-\u63D2\u4EF6","aria-hidden":"true"},"#"),t(" \u5B89\u88C5 IDE \u63D2\u4EF6")],-1),D=t("\u63A8\u8350\u4F7F\u7528 "),j={href:"https://www.jetbrains.com/idea/",target:"_blank",rel:"noopener noreferrer"},y=t("IntelliJ IDEA"),B=t(" \u6216 "),L={href:"https://developer.android.com/studio",target:"_blank",rel:"noopener noreferrer"},P=t("Android Studio"),C=t("\u3002Mirai \u63D0\u4F9B IDE \u63D2\u4EF6\u6765\u63D0\u5347\u5F00\u53D1\u4F53\u9A8C\u3002"),S=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"\u63D2\u4EF6\u540D"),e("th",{style:{"text-align":"center"}},"\u63CF\u8FF0"),e("th",{style:{"text-align":"center"}},"\u4E00\u952E\u5B89\u88C5"),e("th",{style:{"text-align":"center"}},"JetBrains \u63D2\u4EF6\u4ED3\u5E93")])],-1),V=e("td",{style:{"text-align":"center"}},[e("a",{href:"/mirai-console/tools/intellij-plugin"},"Mirai Console IntelliJ")],-1),O=e("td",{style:{"text-align":"center"}},"\u63D0\u4F9B mirai-core \u7684\u9519\u8BEF\u68C0\u67E5\u548C mirai-console \u7684\u63D2\u4EF6\u5F00\u53D1\u8F85\u52A9",-1),N={style:{"text-align":"center"}},R={href:"https://plugins.jetbrains.com/embeddable/install/15094",target:"_blank",rel:"noopener noreferrer"},T=t("\u4E00\u952E\u5B89\u88C5"),q={style:{"text-align":"center"}},F={href:"https://plugins.jetbrains.com/plugin/15094-mirai-console",target:"_blank",rel:"noopener noreferrer"},G=t("\u8BF4\u660E\u9875"),X=e("p",null,[t("\u4F7F\u7528 Kotlin \u5EFA\u8BAE\u5B89\u88C5 Mirai Console IntelliJ\u3002\u540C\u65F6\u8BF7\u786E\u4FDD Kotlin \u63D2\u4EF6\u662F\u6700\u65B0\u7248\u672C\uFF08\u5728 "),e("code",null,"Settings -> Plugins"),t(" \u542F\u7528\u5E76\u66F4\u65B0 Kotlin \u5230\u6700\u65B0\uFF09\u3002")],-1),z=e("h3",{id:"kotlin",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#kotlin","aria-hidden":"true"},"#"),t(" Kotlin")],-1),H={href:"https://kotl.in",target:"_blank",rel:"noopener noreferrer"},Q=t("Kotlin"),U=t(" \u662F\u8BA9\u5F00\u53D1\u4EBA\u5458\u66F4\u5FEB\u4E50\u7684\u4E00\u95E8\u73B0\u4EE3\u7F16\u7A0B\u8BED\u8A00\uFF0C\u7531 "),W={href:"https://www.jetbrains.com/idea/",target:"_blank",rel:"noopener noreferrer"},Y=t("IntelliJ IDEA"),Z=t(" \u7684\u5F00\u53D1\u516C\u53F8 "),$={href:"https://www.jetbrains.com/",target:"_blank",rel:"noopener noreferrer"},ee=t("JetBrains"),te=t(" \u7EF4\u62A4\uFF0C\u88AB Google \u63A8\u4E3E\u4E3A Android \u9996\u9009\u7F16\u7A0B\u8BED\u8A00\u3002"),oe=t("\u4F7F\u7528 Mirai \u662F\u4E00\u4E2A\u4E0D\u9519\u7684\u5B66\u4E60 Kotlin \u673A\u4F1A\uFF0C\u4F7F\u7528\u8005\u6709\u5174\u8DA3\u53EF\u4EE5\u5728 "),ne={href:"https://www.kotlincn.net/docs/reference/",target:"_blank",rel:"noopener noreferrer"},re=t("\u5B98\u65B9\u4E2D\u6587\u6587\u6863"),ie=t(" \u5B66\u4E60 Kotlin\u3002"),se=t("Java \u5F00\u53D1\u8005\u5982\u679C\u53EA\u5E0C\u671B\u4F7F\u7528 Mirai \u800C\u4E0D\u5B66\u4E60 Kotlin\uFF0C\u4E5F\u8BF7\u9605\u8BFB "),le=t("Kotlin \u5B9A\u4E49\u5BF9\u5E94\u7684 Java \u5B9A\u4E49"),ae=t("\uFF085 \u5206\u949F\uFF09\u3002"),_e=e("hr",null,null,-1),de=t("\u56DE\u5230 Mirai \u6587\u6863\u7D22\u5F15");function ce(he,ue){const n=s("ExternalLinkIcon"),r=s("RouterLink");return a(),_("div",null,[h,e("p",null,[u,e("a",p,[f,o(n)]),m]),e("p",null,[b,g,e("a",k,[J,o(n)]),x]),e("blockquote",null,[K,e("ul",null,[e("li",null,[w,e("a",I,[v,o(n)])]),A])]),E,M,e("p",null,[D,e("a",j,[y,o(n)]),B,e("a",L,[P,o(n)]),C]),e("table",null,[S,e("tbody",null,[e("tr",null,[V,O,e("td",N,[e("a",R,[T,o(n)])]),e("td",q,[e("a",F,[G,o(n)])])])])]),X,z,e("p",null,[e("a",H,[Q,o(n)]),U,e("a",W,[Y,o(n)]),Z,e("a",$,[ee,o(n)]),te]),e("p",null,[oe,e("a",ne,[re,o(n)]),ie]),e("p",null,[se,o(r,{to:"/KotlinAndJava.html"},{default:i(()=>[le]),_:1}),ae]),_e,e("blockquote",null,[e("p",null,[o(r,{to:"/#jvm-%E5%B9%B3%E5%8F%B0-mirai-%E5%BC%80%E5%8F%91"},{default:i(()=>[de]),_:1})])])])}var fe=l(c,[["render",ce],["__file","Preparations.html.vue"]]);export{fe as default};
