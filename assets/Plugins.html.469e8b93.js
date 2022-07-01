import{_ as a,r as i,o as l,c,a as e,b as n,w as r,e as o,d}from"./app.fda6b0cf.js";const _={},h=e("h1",{id:"mirai-console-backend-plugins",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#mirai-console-backend-plugins","aria-hidden":"true"},"#"),o(" Mirai Console Backend - Plugins")],-1),m=o("Mirai Console \uFF08\u7B80\u79F0 Console\uFF09 \u8FD0\u884C\u5728 "),u={href:"https://zh.wikipedia.org/zh-cn/Java%E8%99%9A%E6%8B%9F%E6%9C%BA",target:"_blank",rel:"noopener noreferrer"},p=o("JVM"),g=o("\uFF0C\u652F\u6301\u4F7F\u7528 "),k={href:"https://www.kotlincn.net/",target:"_blank",rel:"noopener noreferrer"},b=o("Kotlin"),f=o(" \u6216 "),v={href:"https://www.java.com/zh_CN/",target:"_blank",rel:"noopener noreferrer"},P=o("Java"),C=o(" \u7B49 JVM \u8BED\u8A00\u7F16\u5199\u7684\u63D2\u4EF6\u3002"),x=e("p",null,"\u672C\u7AE0\u8282\u7B80\u8981\u4ECB\u7ECD Console \u63D2\u4EF6\u67B6\u6784\uFF08\u4E0E\u5E73\u53F0\u65E0\u5173\u7684\u57FA\u7840\u67B6\u6784\uFF09\u3002",-1),w={id:"\u901A\u7528\u7684\u63D2\u4EF6\u63A5\u53E3-plugin",tabindex:"-1"},E=e("a",{class:"header-anchor",href:"#\u901A\u7528\u7684\u63D2\u4EF6\u63A5\u53E3-plugin","aria-hidden":"true"},"#",-1),M=o(" \u901A\u7528\u7684\u63D2\u4EF6\u63A5\u53E3 - "),J={href:"https://github.com/mamoe/mirai/tree/dev/mirai-console/https://github.com/mamoe/mirai/tree/dev/mirai-console/backend/mirai-console/src/plugin/Plugin.kt",target:"_blank",rel:"noopener noreferrer"},B=e("code",null,"Plugin",-1),L=o("\u6240\u6709 Console \u63D2\u4EF6\u90FD\u5FC5\u987B\u76F4\u63A5\u6216\u95F4\u63A5\u5730\u5B9E\u73B0 "),V={href:"https://github.com/mamoe/mirai/tree/dev/mirai-console/https://github.com/mamoe/mirai/tree/dev/mirai-console/backend/mirai-console/src/plugin/Plugin.kt",target:"_blank",rel:"noopener noreferrer"},z=e("code",null,"Plugin",-1),A=o(" \u63A5\u53E3\u3002"),N=e("strong",null,[o("\u89E3\u91CA "),e("em",null,"\u63D2\u4EF6")],-1),R=o("\uFF1A\u53EA\u8981\u5B9E\u73B0\u4E86 "),y={href:"https://github.com/mamoe/mirai/tree/dev/mirai-console/https://github.com/mamoe/mirai/tree/dev/mirai-console/backend/mirai-console/src/plugin/Plugin.kt",target:"_blank",rel:"noopener noreferrer"},j=e("code",null,"Plugin",-1),q=o(" \u63A5\u53E3\u7684\u5BF9\u8C61\u90FD\u53EF\u4EE5\u53EB\u505A\u300CMirai Console \u63D2\u4EF6\u300D\uFF0C\u7B80\u79F0 \u300C\u63D2\u4EF6\u300D\u3002"),F=e("br",null,null,-1),I=o(" \u4E3A\u4E86\u4FBF\u6377\uFF0C\u5185\u542B "),O={href:"https://github.com/mamoe/mirai/tree/dev/mirai-console/https://github.com/mamoe/mirai/tree/dev/mirai-console/backend/mirai-console/src/plugin/Plugin.kt",target:"_blank",rel:"noopener noreferrer"},K=e("code",null,"Plugin",-1),S=o(" \u5B9E\u73B0\u7684\u4E00\u4E2A "),T={href:"https://zh.wikipedia.org/zh-cn/JAR_(%E6%96%87%E4%BB%B6%E6%A0%BC%E5%BC%8F)",target:"_blank",rel:"noopener noreferrer"},D=o("JAR"),G=o(" \u6587\u4EF6\u4E5F\u53EF\u4EE5\u88AB\u79F0\u4E3A\u300C\u63D2\u4EF6\u300D\u3002"),H=o("\u57FA\u7840\u7684 "),Q={href:"https://github.com/mamoe/mirai/tree/dev/mirai-console/https://github.com/mamoe/mirai/tree/dev/mirai-console/backend/mirai-console/src/plugin/Plugin.kt",target:"_blank",rel:"noopener noreferrer"},U=e("code",null,"Plugin",-1),W=o(" \u5F88\u901A\u7528\uFF0C\u5B83\u53EA\u62E5\u6709\u5F88\u5C11\u7684\u6210\u5458\uFF1A"),X=d(`<div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token keyword">interface</span> Plugin <span class="token operator">:</span> CommandOwner <span class="token punctuation">{</span> <span class="token comment">// CommandOwner \u8868\u793A\u8BE5\u5BF9\u8C61\u53EF\u4EE5\u521B\u5EFA\u6307\u4EE4</span>
    <span class="token keyword">val</span> isEnabled<span class="token operator">:</span> Boolean <span class="token comment">// \u5F53\u63D2\u4EF6\u5DF2\u5F00\u542F\u65F6\u8FD4\u56DE true</span>
    <span class="token keyword">val</span> loader<span class="token operator">:</span> PluginLoader<span class="token operator">&lt;</span><span class="token operator">*</span><span class="token punctuation">,</span> <span class="token operator">*</span><span class="token operator">&gt;</span> <span class="token comment">// \u80FD\u5904\u7406\u8FD9\u4E2A Plugin \u5B9E\u4F8B\u7684 PluginLoader</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Y={href:"https://github.com/mamoe/mirai/tree/dev/mirai-console/https://github.com/mamoe/mirai/tree/dev/mirai-console/backend/mirai-console/src/plugin/Plugin.kt",target:"_blank",rel:"noopener noreferrer"},Z=e("code",null,"Plugin",-1),$=o(" \u63A5\u53E3\u62E5\u6709\u5F3A\u6269\u5C55\u6027\uFF0C\u4EE5\u652F\u6301 Mirai Console \u7EDF\u4E00\u7BA1\u7406\u4F7F\u7528\u5176\u4ED6\u7F16\u7A0B\u8BED\u8A00\u7F16\u5199\u7684\u63D2\u4EF6 \uFF08\u8BE6\u89C1\u8FDB\u9636\u7AE0\u8282 "),ee={href:"https://github.com/mamoe/mirai/tree/dev/mirai-console/Extensions.md",target:"_blank",rel:"noopener noreferrer"},oe=o("\u6269\u5C55 - PluginLoader"),ne=o("\uFF09\u3002"),te=e("blockquote",null,[e("p",null,[o("\u9664\u975E\u4F60\u662F\u5728\u5B9E\u73B0\u65B0\u79CD\u7C7B\u63D2\u4EF6\uFF0C\u5426\u5219\u4E0D\u8981\u76F4\u63A5\u5B9E\u73B0 "),e("code",null,"Plugin"),o(" \u63A5\u53E3\u3002")])],-1),se={id:"\u63D2\u4EF6\u52A0\u8F7D\u5668-pluginloader",tabindex:"-1"},ie=e("a",{class:"header-anchor",href:"#\u63D2\u4EF6\u52A0\u8F7D\u5668-pluginloader","aria-hidden":"true"},"#",-1),re=o(" \u63D2\u4EF6\u52A0\u8F7D\u5668 - "),ae={href:"https://github.com/mamoe/mirai/tree/dev/mirai-console/https://github.com/mamoe/mirai/tree/dev/mirai-console/backend/mirai-console/src/plugin/loader/PluginLoader.kt",target:"_blank",rel:"noopener noreferrer"},le=e("code",null,"PluginLoader",-1),ce=e("p",null,"Mirai Console \u652F\u6301\u4F7F\u7528\u591A\u4E2A\u63D2\u4EF6\u52A0\u8F7D\u5668\u6765\u52A0\u8F7D\u591A\u79CD\u7C7B\u578B\u63D2\u4EF6\u3002\u6BCF\u4E2A\u63D2\u4EF6\u52A0\u8F7D\u5668\u90FD\u652F\u6301\u4E00\u79CD\u7C7B\u578B\u7684\u63D2\u4EF6\u3002",-1),de=o("Mirai Console \u5185\u7F6E "),_e={href:"https://github.com/mamoe/mirai/tree/dev/mirai-console/https://github.com/mamoe/mirai/tree/dev/mirai-console/backend/mirai-console/src/plugin/jvm/JvmPluginLoader.kt",target:"_blank",rel:"noopener noreferrer"},he=e("code",null,"JvmPluginLoader",-1),me=o(" \u4EE5\u52A0\u8F7D JVM \u5E73\u53F0\u63D2\u4EF6\uFF08\u89C1\u4E0B\u6587\uFF09\uFF0C\u5E76\u5141\u8BB8\u8FD9\u4E9B\u63D2\u4EF6\u6CE8\u518C\u6269\u5C55\u7684\u63D2\u4EF6\u52A0\u8F7D\u5668\uFF08\u89C1\u7AE0\u8282 "),ue={href:"https://github.com/mamoe/mirai/tree/dev/mirai-console/Extensions.md",target:"_blank",rel:"noopener noreferrer"},pe=o("\u6269\u5C55"),ge=o(") \uFF0C\u4EE5\u652F\u6301\u8BFB\u53D6\u5176\u4ED6\u8BED\u8A00\u7F16\u5199\u7684\u63D2\u4EF6\u5E76\u63A5\u5165 Console \u63D2\u4EF6\u7BA1\u7406\u7CFB\u7EDF\u3002"),ke=e("h2",{id:"\u603B\u7ED3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u603B\u7ED3","aria-hidden":"true"},"#"),o(" \u603B\u7ED3")],-1),be=o("Mirai Console \u63D0\u4F9B\u62BD\u8C61\u7684\u63D2\u4EF6\u53CA\u5176\u52A0\u8F7D\u5668\u63A5\u53E3\uFF0C\u652F\u6301\u6269\u5C55\u3002\u5404\u7C7B\u63D2\u4EF6\u884C\u4E3A\u7531\u5176\u52A0\u8F7D\u5668\u786E\u5B9A\u3002\u63D2\u4EF6\u4F5C\u8005\u9700\u8981\u57FA\u4E8E\u7279\u5B9A\u7684\u63D2\u4EF6\u5E73\u53F0\u5B9E\u73B0\uFF0C\u5982 Console \u5185\u7F6E\u7684 "),fe=o("JVM \u5E73\u53F0"),ve=o("\u3002"),Pe=e("h2",{id:"\u7EE7\u7EED\u9605\u8BFB",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u7EE7\u7EED\u9605\u8BFB","aria-hidden":"true"},"#"),o(" \u7EE7\u7EED\u9605\u8BFB")],-1),Ce=o("JVM \u5E73\u53F0\u63D2\u4EF6\u8BE6\u60C5"),xe={href:"https://github.com/mamoe/mirai/tree/dev/mirai-console/Extensions.md",target:"_blank",rel:"noopener noreferrer"},we=o("\u7F16\u5199\u63D2\u4EF6\u52A0\u8F7D\u5668");function Ee(Me,Je){const t=i("ExternalLinkIcon"),s=i("RouterLink");return l(),c("div",null,[h,e("p",null,[m,e("a",u,[p,n(t)]),g,e("a",k,[b,n(t)]),f,e("a",v,[P,n(t)]),C]),x,e("h2",w,[E,M,e("a",J,[B,n(t)])]),e("p",null,[L,e("a",V,[z,n(t)]),A]),e("blockquote",null,[e("p",null,[N,R,e("a",y,[j,n(t)]),q,F,I,e("a",O,[K,n(t)]),S,e("a",T,[D,n(t)]),G])]),e("p",null,[H,e("a",Q,[U,n(t)]),W]),X,e("p",null,[e("a",Y,[Z,n(t)]),$,e("a",ee,[oe,n(t)]),ne]),te,e("h2",se,[ie,re,e("a",ae,[le,n(t)])]),ce,e("p",null,[de,e("a",_e,[he,n(t)]),me,e("a",ue,[pe,n(t)]),ge]),ke,e("p",null,[be,n(s,{to:"/console/plugin/JVMPlugin.html"},{default:r(()=>[fe]),_:1}),ve]),Pe,e("ul",null,[e("li",null,[n(s,{to:"/console/plugin/JVMPlugin.html"},{default:r(()=>[Ce]),_:1})]),e("li",null,[e("a",xe,[we,n(t)])])])])}var Le=a(_,[["render",Ee],["__file","Plugins.html.vue"]]);export{Le as default};
