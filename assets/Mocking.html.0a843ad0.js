import{_ as o,o as t,c as i,a as n,b as s,d as c,e,r}from"./app.2531d4ad.js";const l={},d=c(`<h1 id="mirai-mocking" tabindex="-1"><a class="header-anchor" href="#mirai-mocking" aria-hidden="true">#</a> Mirai - Mocking</h1><p>\u672C\u7AE0\u8282\u4ECB\u7ECD mirai \u6A21\u62DF\u73AF\u5883</p><blockquote><p>mirai \u6A21\u62DF\u73AF\u5883\u4ECE <code>2.13</code> \u5F00\u59CB\u652F\u6301</p><p>\u6CE8:</p><ul><li><strong>\u4E0D\u652F\u6301</strong>\u540C\u65F6\u8FD0\u884C\u6A21\u62DF\u73AF\u5883\u548C\u771F\u5B9E\u73AF\u5883</li><li><strong>\u4E0D\u652F\u6301</strong>\u4ECE\u6A21\u62DF\u73AF\u5883\u5207\u6362\u56DE\u771F\u5B9E\u73AF\u5883</li></ul></blockquote><hr><h1 id="\u5728\u975E-console-\u4E2D\u8FDB\u884C\u6A21\u62DF" tabindex="-1"><a class="header-anchor" href="#\u5728\u975E-console-\u4E2D\u8FDB\u884C\u6A21\u62DF" aria-hidden="true">#</a> \u5728\u975E console \u4E2D\u8FDB\u884C\u6A21\u62DF</h1><h2 id="\u73AF\u5883\u51C6\u5907" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883\u51C6\u5907" aria-hidden="true">#</a> \u73AF\u5883\u51C6\u5907</h2><p>\u8981\u4F7F\u7528 mirai \u6A21\u62DF\u73AF\u5883\u6D4B\u8BD5\u6846\u67B6, \u9996\u5148\u9700\u8981\u989D\u5916\u6DFB\u52A0\u4E00\u9879\u4F9D\u8D56</p><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code>dependencies <span class="token punctuation">{</span>
    <span class="token function">testImplementation</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;net.mamoe:mirai-core-mock:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$</span><span class="token expression">VERSION</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5E76\u5728\u672C\u5730\u7684\u6D4B\u8BD5\u5165\u53E3\u6DFB\u52A0\u4EE5\u4E0B\u7684\u4EE3\u7801</p><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token keyword">internal</span> <span class="token keyword">fun</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    MockBotFactory<span class="token punctuation">.</span><span class="token function">initialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// .....</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u521B\u5EFA-bot" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA-bot" aria-hidden="true">#</a> \u521B\u5EFA Bot</h2><p>\u5BF9\u4E8E\u521B\u5EFA <code>MockBot</code>, \u66F4\u597D\u7684\u65B9\u6CD5\u662F\u4F7F\u7528 <code>MockBotFactory.newMockBotBuilder()</code></p><p>\u4E5F\u53EF\u4EE5\u4F7F\u7528\u539F\u59CB\u7684 <code>BotFactory</code> \u6765\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684 <code>MockBot</code>, \u7CFB\u7EDF\u4F1A\u4F7F\u7528\u9ED8\u8BA4\u503C\u586B\u5145\u76F8\u5173\u7684\u4FE1\u606F</p><h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2>`,14),p=e("\u5173\u4E8E "),u=n("code",null,"MockBot",-1),h=e(" \u53EF\u4EE5\u5728 "),k={href:"https://github.com/mamoe/mirai/tree/dev/mirai-core-mock/test/mock",target:"_blank",rel:"noopener noreferrer"},m=e("\u8FD9\u91CC"),_=e(" \u627E\u5230 mirai-core-mock \u7684\u76F8\u5173\u7528\u6CD5"),b=e("\u53EF\u4EE5\u5728 "),v={href:"https://github.com/mamoe/mirai/blob/dev/mirai-core-mock/test/DslTest.kt",target:"_blank",rel:"noopener noreferrer"},g=e("DslTest.kt"),f=e(" \u4E2D\u627E\u5230\u5173\u4E8E mirai-core-mock DSL \u7684\u7528\u6CD5"),x=n("hr",null,null,-1),B=n("h1",{id:"\u5728-console-\u4E2D\u8FDB\u884C\u6A21\u62DF",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5728-console-\u4E2D\u8FDB\u884C\u6A21\u62DF","aria-hidden":"true"},"#"),e(" \u5728 console \u4E2D\u8FDB\u884C\u6A21\u62DF")],-1),M=n("p",null,"Work In Progress...",-1);function y(I,N){const a=r("ExternalLinkIcon");return t(),i("div",null,[d,n("p",null,[p,u,h,n("a",k,[m,s(a)]),_]),n("p",null,[b,n("a",v,[g,s(a)]),f]),x,B,M])}var q=o(l,[["render",y],["__file","Mocking.html.vue"]]);export{q as default};
