import{_ as t,r as i,o as s,c as r,a as e,b as a,d as l,e as n}from"./app.e657f2e4.js";const c={},d=l(`<h1 id="mirai-console-frontend" tabindex="-1"><a class="header-anchor" href="#mirai-console-frontend" aria-hidden="true">#</a> Mirai Console Frontend</h1><p>Mirai Console \u524D\u7AEF\u5F00\u53D1\u6587\u6863\u3002</p><h2 id="\u5B9E\u73B0\u524D\u7AEF" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u524D\u7AEF" aria-hidden="true">#</a> \u5B9E\u73B0\u524D\u7AEF</h2><h3 id="\u6DFB\u52A0\u7F16\u8BD1\u5668\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u7F16\u8BD1\u5668\u8BBE\u7F6E" aria-hidden="true">#</a> \u6DFB\u52A0\u7F16\u8BD1\u5668\u8BBE\u7F6E</h3><p>\u5728 <code>build.gradle</code> \u6216 <code>build.gradle.kts</code> \u6DFB\u52A0\uFF1A</p><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code>kotlin<span class="token punctuation">.</span>sourceSets<span class="token punctuation">.</span><span class="token function">all</span> <span class="token punctuation">{</span>
    languageSettings<span class="token punctuation">.</span><span class="token function">optIn</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;net.mamoe.mirai.console.ConsoleFrontEndImplementation&quot;</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6B64\u540E\u5C31\u53EF\u4EE5\u4F7F\u7528 <code>net.mamoe.mirai.console.ConsoleFrontEndImplementation</code> \u6807\u8BB0\u7684\u6240\u6709 API\u3002</p><h3 id="\u5B9E\u73B0-mirai-console" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0-mirai-console" aria-hidden="true">#</a> \u5B9E\u73B0 Mirai Console</h3>`,8),m={href:"https://github.com/mamoe/mirai/tree/dev/mirai-console/backend/mirai-console/src/MiraiConsole.kt",target:"_blank",rel:"noopener noreferrer"},p=e("code",null,"MiraiConsole",-1),h=n(" \u662F\u540E\u7AEF\u7684\u516C\u5F00\u5BF9\u8C61\uFF0C\u7531 "),u={href:"https://github.com/mamoe/mirai/tree/dev/mirai-console/backend/mirai-console/src/internal/MiraiConsoleImplementationBridge.kt",target:"_blank",rel:"noopener noreferrer"},_=n("MiraiConsoleImplementationBridge"),k=n(" \u4EE3\u7406\uFF0C\u4E0E\u524D\u7AEF\u94FE\u63A5\u3002"),b=n("\u524D\u7AEF\u9700\u8981\u5B9E\u73B0 "),f={href:"https://github.com/mamoe/mirai/tree/dev/mirai-console/backend/mirai-console/src/MiraiConsoleImplementation.kt",target:"_blank",rel:"noopener noreferrer"},g=n("MiraiConsoleImplementation.kt"),v=n("\u3002"),C=e("p",null,"\u7531\u4E8E\u5B9E\u73B0\u524D\u7AEF\u9700\u8981\u4E00\u5B9A\u7684\u6280\u672F\u80FD\u529B\uFF0C\u76F8\u4FE1\u5B9E\u73B0\u8005\u90FD\u80FD\u7406\u89E3\u6E90\u7801\u5185\u6CE8\u91CA\u3002",-1),I=e("h3",{id:"\u542F\u52A8-mirai-console",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u542F\u52A8-mirai-console","aria-hidden":"true"},"#"),n(" \u542F\u52A8 Mirai Console")],-1),M=e("p",null,[n("\u901A\u8FC7 "),e("code",null,"public fun MiraiConsoleImplementation.start()"),n("\u3002")],-1),x={href:"https://github.com/mamoe/mirai/tree/dev/mirai-console/backend/mirai-console/src/MiraiConsoleImplementation.kt#L161",target:"_blank",rel:"noopener noreferrer"},E=n("MiraiConsoleImplementation.kt: Line 161");function B(F,L){const o=i("ExternalLinkIcon");return s(),r("div",null,[d,e("p",null,[e("a",m,[p,a(o)]),h,e("a",u,[_,a(o)]),k]),e("p",null,[b,e("a",f,[g,a(o)]),v]),C,I,M,e("p",null,[e("a",x,[E,a(o)])])])}var V=t(c,[["render",B],["__file","FrontEnd.html.vue"]]);export{V as default};
