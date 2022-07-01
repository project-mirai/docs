import{_ as i,r as o,o as l,c,a as n,b as a,e as s,d as t}from"./app.fda6b0cf.js";const r={},p=n("h1",{id:"\u5B89\u88C5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5B89\u88C5","aria-hidden":"true"},"#"),s(" \u5B89\u88C5")],-1),d={id:"\u4F7F\u7528-mirai-console-loader-\u5B89\u88C5mirai-api-http",tabindex:"-1"},u=n("a",{class:"header-anchor",href:"#\u4F7F\u7528-mirai-console-loader-\u5B89\u88C5mirai-api-http","aria-hidden":"true"},"#",-1),m=s(" \u4F7F\u7528 "),h={href:"https://github.com/iTXTech/mirai-console-loader",target:"_blank",rel:"noopener noreferrer"},v=s("Mirai Console Loader"),k=s(" \u5B89\u88C5"),b=n("code",null,"mirai-api-http",-1),_=t(`<ul><li><code>MCL</code> \u652F\u6301\u81EA\u52A8\u66F4\u65B0\u63D2\u4EF6\uFF0C\u652F\u6301\u8BBE\u7F6E\u63D2\u4EF6\u66F4\u65B0\u9891\u9053\u7B49\u529F\u80FD</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>./mcl --update-package net.mamoe:mirai-api-http --channel stable --type plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u624B\u52A8\u5B89\u88C5mirai-api-http" tabindex="-1"><a class="header-anchor" href="#\u624B\u52A8\u5B89\u88C5mirai-api-http" aria-hidden="true">#</a> \u624B\u52A8\u5B89\u88C5<code>mirai-api-http</code></h2>`,3),y=s("\u8FD0\u884C "),g={href:"https://github.com/mamoe/mirai-console",target:"_blank",rel:"noopener noreferrer"},f=s("Mirai Console"),x=s(" \u751F\u6210 plugins \u6587\u4EF6\u5939"),w=s("\u4ECE "),M={href:"https://github.com/project-mirai/mirai-api-http/releases",target:"_blank",rel:"noopener noreferrer"},C=s("Releases"),V=s(" \u4E0B\u8F7D"),K=n("code",null,"jar",-1),L=s("\u5E76\u5C06\u5176\u653E\u5165"),N=n("code",null,"plugins",-1),S=s("\u6587\u4EF6\u5939\u4E2D"),B=n("h1",{id:"\u5F00\u59CB\u4F7F\u7528",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5F00\u59CB\u4F7F\u7528","aria-hidden":"true"},"#"),s(" \u5F00\u59CB\u4F7F\u7528")],-1),E=n("li",null,[s("\u7F16\u8F91"),n("code",null,"config/MiraiApiHttp/setting.yml"),s("\u914D\u7F6E\u6587\u4EF6 (\u6CA1\u6709\u5219\u81EA\u884C\u521B\u5EFA)")],-1),I=s("\u542F\u52A8 "),T={href:"https://github.com/mamoe/mirai-console",target:"_blank",rel:"noopener noreferrer"},j=s("Mirai Console"),z=n("li",null,[s("\u8BB0\u5F55\u65E5\u5FD7\u4E2D\u51FA\u73B0\u7684"),n("code",null,"authKey")],-1),A=t(`<h2 id="setting-yml-\u6A21\u677F" tabindex="-1"><a class="header-anchor" href="#setting-yml-\u6A21\u677F" aria-hidden="true">#</a> setting.yml \u6A21\u677F</h2><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment">## \u914D\u7F6E\u6587\u4EF6\u4E2D\u7684\u503C\uFF0C\u5168\u4E3A\u9ED8\u8BA4\u503C</span>

<span class="token comment">## \u542F\u7528\u7684 adapter, \u5185\u7F6E\u6709 http, ws, reverse-ws, webhook</span>
<span class="token key atrule">adapters</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> http
  <span class="token punctuation">-</span> ws

<span class="token comment">## \u662F\u5426\u5F00\u542F\u8BA4\u8BC1\u6D41\u7A0B, \u82E5\u4E3A true \u5219\u5EFA\u7ACB\u8FDE\u63A5\u65F6\u9700\u8981\u9A8C\u8BC1 verifyKey</span>
<span class="token comment">## \u5EFA\u8BAE\u516C\u7F51\u8FDE\u63A5\u65F6\u5F00\u542F</span>
<span class="token key atrule">enableVerify</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">verifyKey</span><span class="token punctuation">:</span> <span class="token number">1234567890</span>

<span class="token comment">## \u5F00\u542F\u4E00\u4E9B\u8C03\u5F0F\u4FE1\u606F</span>
<span class="token key atrule">debug</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>

<span class="token comment">## \u662F\u5426\u5F00\u542F\u5355 session \u6A21\u5F0F, \u82E5\u4E3A true\uFF0C\u5219\u81EA\u52A8\u521B\u5EFA session \u7ED1\u5B9A console \u4E2D\u767B\u5F55\u7684 bot</span>
<span class="token comment">## \u5F00\u542F\u540E\uFF0C\u63A5\u53E3\u4E2D\u4EFB\u4F55 sessionKey \u4E0D\u9700\u8981\u4F20\u9012\u53C2\u6570</span>
<span class="token comment">## \u82E5 console \u4E2D\u6709\u591A\u4E2A bot \u767B\u5F55\uFF0C\u5219\u884C\u4E3A\u672A\u5B9A\u4E49</span>
<span class="token comment">## \u786E\u4FDD console \u4E2D\u53EA\u6709\u4E00\u4E2A bot \u767B\u9646\u65F6\u542F\u7528</span>
<span class="token key atrule">singleMode</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>

<span class="token comment">## \u5386\u53F2\u6D88\u606F\u7684\u7F13\u5B58\u5927\u5C0F</span>
<span class="token comment">## \u540C\u65F6\uFF0C\u4E5F\u662F http adapter \u7684\u6D88\u606F\u961F\u5217\u5BB9\u91CF</span>
<span class="token key atrule">cacheSize</span><span class="token punctuation">:</span> <span class="token number">4096</span>

<span class="token comment">## adapter \u7684\u5355\u72EC\u914D\u7F6E\uFF0C\u952E\u540D\u4E0E adapters \u9879\u914D\u7F6E\u76F8\u540C</span>
<span class="token key atrule">adapterSettings</span><span class="token punctuation">:</span>
  <span class="token comment">## \u8BE6\u60C5\u770B http adapter \u4F7F\u7528\u8BF4\u660E \u914D\u7F6E</span>
  <span class="token key atrule">http</span><span class="token punctuation">:</span>
    <span class="token key atrule">host</span><span class="token punctuation">:</span> localhost
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8080</span>
    <span class="token key atrule">cors</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>*<span class="token punctuation">]</span>
  
  <span class="token comment">## \u8BE6\u60C5\u770B websocket adapter \u4F7F\u7528\u8BF4\u660E \u914D\u7F6E</span>
  <span class="token key atrule">ws</span><span class="token punctuation">:</span>
    <span class="token key atrule">host</span><span class="token punctuation">:</span> localhost
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8080</span>
    <span class="token key atrule">reservedSyncId</span><span class="token punctuation">:</span> <span class="token number">-1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function H(R,X){const e=o("ExternalLinkIcon");return l(),c("div",null,[p,n("h2",d,[u,m,n("a",h,[v,a(e)]),k,b]),_,n("ol",null,[n("li",null,[y,n("a",g,[f,a(e)]),x]),n("li",null,[w,n("a",M,[C,a(e)]),V,K,L,N,S])]),B,n("ol",null,[E,n("li",null,[I,n("a",T,[j,a(e)])]),z]),A])}var D=i(r,[["render",H],["__file","index.html.vue"]]);export{D as default};
