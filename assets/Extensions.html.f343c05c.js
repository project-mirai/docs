import{_ as c,r as t,o as i,c as p,a as n,b as a,w as l,e as s,d as u}from"./app.abb637d5.js";const r={},d=n("h1",{id:"mirai-console-backend-extensions",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mirai-console-backend-extensions","aria-hidden":"true"},"#"),s(" Mirai Console Backend - Extensions")],-1),k=n("p",null,"Mirai Console \u62E5\u6709\u7075\u6D3B\u7684 Extensions API\uFF0C\u652F\u6301\u6269\u5C55 Console \u7684\u4E00\u4E9B\u670D\u52A1\u3002",-1),m=n("p",null,"Extensions \u5C5E\u4E8E\u63D2\u4EF6\u5F00\u53D1\u7684\u8FDB\u9636\u5185\u5BB9\u3002",-1),_={id:"\u6269\u5C55",tabindex:"-1"},h=n("a",{class:"header-anchor",href:"#\u6269\u5C55","aria-hidden":"true"},"#",-1),v=s(),b={href:"https://github.com/mamoe/mirai/tree/dev/mirai-console/backend/mirai-console/src/extension/Extension.kt",target:"_blank",rel:"noopener noreferrer"},g=s("\u6269\u5C55"),x={id:"\u7EC4\u4EF6\u5BB9\u5668",tabindex:"-1"},f=n("a",{class:"header-anchor",href:"#\u7EC4\u4EF6\u5BB9\u5668","aria-hidden":"true"},"#",-1),P=s(),E={href:"https://github.com/mamoe/mirai/tree/dev/mirai-console/backend/mirai-console/src/extension/ComponentStorage.kt",target:"_blank",rel:"noopener noreferrer"},y=s("\u7EC4\u4EF6\u5BB9\u5668"),w=s("\u5BB9\u7EB3\u63D2\u4EF6\u6CE8\u518C\u7684 "),L={href:"https://github.com/mamoe/mirai/tree/dev/mirai-console/backend/mirai-console/src/extension/Extension.kt",target:"_blank",rel:"noopener noreferrer"},C=s("\u6269\u5C55"),B=s("\u3002"),S=n("h3",{id:"\u6CE8\u518C\u6269\u5C55",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6CE8\u518C\u6269\u5C55","aria-hidden":"true"},"#"),s(" \u6CE8\u518C\u6269\u5C55")],-1),j=s("\u63D2\u4EF6\u4EC5\u80FD\u5728 "),M=n("code",null,"onLoad",-1),N=s(" \u9636\u6BB5\u6CE8\u518C\u6269\u5C55\u3002"),V=u(`<p>\u793A\u4F8B\uFF1A</p><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token keyword">object</span> MyPlugin <span class="token operator">:</span> <span class="token function">KotlinPlugin</span><span class="token punctuation">(</span> <span class="token comment">/* ... */</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">fun</span> PluginComponentStorage<span class="token punctuation">.</span><span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        contributePermissionService <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span>
        contributePluginLoader <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span>
        <span class="token function">contribute</span><span class="token punctuation">(</span>ExtensionPoint<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// java</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyPlugin</span> <span class="token keyword">extends</span> <span class="token class-name">JavaPlugin</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">MyPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token class-name">PluginComponentStorage</span> pcs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        pcs<span class="token punctuation">.</span><span class="token function">contributePermissionService</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        pcs<span class="token punctuation">.</span><span class="token function">contributePluginLoader</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        pcs<span class="token punctuation">.</span><span class="token function">contribute</span><span class="token punctuation">(</span><span class="token class-name">ExtensionPoint</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u53EF\u7528\u6269\u5C55" tabindex="-1"><a class="header-anchor" href="#\u53EF\u7528\u6269\u5C55" aria-hidden="true">#</a> \u53EF\u7528\u6269\u5C55</h3>`,4),A=s("\u67E5\u770B "),I={href:"https://github.com/mamoe/mirai/tree/dev/mirai-console/backend/mirai-console/src/extensions",target:"_blank",rel:"noopener noreferrer"},D=s("extensions"),R=s("\u3002\u6BCF\u4E2A\u6587\u4EF6\u5BF9\u5E94\u4E00\u4E2A\u6269\u5C55\u3002");function J(K,O){const e=t("ExternalLinkIcon"),o=t("RouterLink");return i(),p("div",null,[d,k,m,n("h2",_,[h,v,n("a",b,[g,a(e)])]),n("h3",x,[f,P,n("a",E,[y,a(e)])]),n("p",null,[w,n("a",L,[C,a(e)]),B]),S,n("p",null,[j,a(o,{to:"/console/Plugins.html#%E5%8A%A0%E8%BD%BD"},{default:l(()=>[M]),_:1}),N]),V,n("p",null,[A,n("a",I,[D,a(e)]),R])])}var q=c(r,[["render",J],["__file","Extensions.html.vue"]]);export{q as default};
