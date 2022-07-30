import{_ as e,r as o,o as t,c,a as n,b as p,e as s,d as l}from"./app.1411fde8.js";const i={},u=n("h1",{id:"mcl-module",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mcl-module","aria-hidden":"true"},"#"),s(" MCL Module")],-1),d=n("p",null,"MCL \u6A21\u5757\u5F00\u53D1\u6587\u6863\u3002",-1),r=n("h2",{id:"\u6A21\u5757\u67B6\u6784",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6A21\u5757\u67B6\u6784","aria-hidden":"true"},"#"),s(" \u6A21\u5757\u67B6\u6784")],-1),k=n("p",null,[n("code",null,"MCL Module"),s(" \u4E2D\u63D0\u4F9B\u7684\u57FA\u672C\u5BF9\u8C61\uFF1A")],-1),m={href:"https://github.com/iTXTech/mirai-console-loader/blob/master/src/main/java/org/itxtech/mcl/Loader.java",target:"_blank",rel:"noopener noreferrer"},v=s("Loader"),h=s(" - MCL \u5B9E\u4F8B\uFF0C\u53EF\u901A\u8FC7\u5176\u8BBF\u95EE\u5404\u4E2A\u7EC4\u4EF6"),b=l(`<h2 id="mclmodule-\u7C7B" tabindex="-1"><a class="header-anchor" href="#mclmodule-\u7C7B" aria-hidden="true">#</a> <code>MclModule</code> \u7C7B</h2><ul><li>\u6BCF\u4E2A\u6A21\u5757\u7C7B\u90FD\u9700\u7EE7\u627F <code>org.itxtech.mcl.module.MclModule</code></li></ul><h3 id="prepare" tabindex="-1"><a class="header-anchor" href="#prepare" aria-hidden="true">#</a> <code>prepare</code></h3><p>\u6A21\u5757\u6700\u5148\u6267\u884C\u7684\u65B9\u6CD5\uFF0C\u53EF\u7528\u4E8E\uFF1A</p><ol><li>\u6DFB\u52A0\u547D\u4EE4\u884C\u9009\u9879</li><li>\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6</li></ol><h3 id="cli" tabindex="-1"><a class="header-anchor" href="#cli" aria-hidden="true">#</a> <code>cli</code></h3><p>\u811A\u672C\u5904\u7406\u547D\u4EE4\u884C\u53C2\u6570\u3002</p><h3 id="load" tabindex="-1"><a class="header-anchor" href="#load" aria-hidden="true">#</a> <code>load</code></h3><p>\u5404\u811A\u672C\u90FD\u5904\u7406\u5B8C\u547D\u4EE4\u884C\u53C2\u6570\u540E\u88AB\u8C03\u7528\u3002</p><h3 id="boot" tabindex="-1"><a class="header-anchor" href="#boot" aria-hidden="true">#</a> <code>boot</code></h3><p>\u542F\u52A8<code>mirai</code>\uFF0C\u5E94\u6709\u4E14\u53EA\u6709\u4E00\u4E2A\u811A\u672C\u5B9E\u73B0\u6B64\u9636\u6BB5\u3002</p><h2 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>test<span class="token punctuation">.</span>module</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>commons<span class="token punctuation">.</span>cli<span class="token punctuation">.</span></span><span class="token class-name">Option</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>itxtech<span class="token punctuation">.</span>mcl<span class="token punctuation">.</span>module<span class="token punctuation">.</span></span><span class="token class-name">MclModule</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token keyword">extends</span> <span class="token class-name">MclModule</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Test&quot;</span><span class="token punctuation">;</span> <span class="token comment">// \u6B64\u65B9\u6CD5\u5FC5\u987B\u5B9E\u73B0\uFF0C\u540D\u79F0\u662F\u63D2\u4EF6\u7684\u552F\u4E00\u6807\u8BC6</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">prepare</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        loader <span class="token comment">//\u811A\u672C\u4E2D\u53EF\u76F4\u63A5\u8BBF\u95EE Loader \u5B9E\u4F8B</span>
                <span class="token punctuation">.</span>options <span class="token comment">//\u547D\u4EE4\u884C\u53C2\u6570\u5B9E\u4F8B</span>
                <span class="token punctuation">.</span><span class="token function">addOption</span><span class="token punctuation">(</span> <span class="token comment">//\u6DFB\u52A0\u547D\u4EE4\u884C\u53C2\u6570</span>
                        <span class="token class-name">Option</span> <span class="token comment">//\u8BE5\u5305\u5DF2\u5728\u6700\u4E0A\u9762\u5BFC\u5165\u4E86</span>
                                <span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token string">&quot;t&quot;</span><span class="token punctuation">)</span>
                                <span class="token punctuation">.</span><span class="token function">desc</span><span class="token punctuation">(</span><span class="token string">&quot;Example&quot;</span><span class="token punctuation">)</span>
                                <span class="token punctuation">.</span><span class="token function">longOpt</span><span class="token punctuation">(</span><span class="token string">&quot;example&quot;</span><span class="token punctuation">)</span>
                                <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// MCL \u4F7F\u7528 Apache Commons CLI\uFF0C\u89C1 https://commons.apache.org/proper/commons-cli/</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">cli</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>loader<span class="token punctuation">.</span>cli<span class="token punctuation">.</span><span class="token function">hasOption</span><span class="token punctuation">(</span><span class="token string">&quot;t&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//\u5982\u679C\u5B58\u5728-t\u53C2\u6570\uFF0C\u6216--exmaple\u53C2\u6570</span>
            loader<span class="token punctuation">.</span>logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;\u793A\u4F8B\uFF01\uFF01\uFF01&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        loader<span class="token punctuation">.</span>logger<span class="token punctuation">.</span><span class="token function">warning</span><span class="token punctuation">(</span><span class="token string">&quot;\u793A\u4F8B\uFF1ALoad&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">boot</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        loader<span class="token punctuation">.</span>logger<span class="token punctuation">.</span><span class="token function">warning</span><span class="token punctuation">(</span><span class="token string">&quot;\u793A\u4F8B\uFF1ABoot&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6CE8\u610F\u4E8B\u9879" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> \u6CE8\u610F\u4E8B\u9879</h2><ol><li>\u5EFA\u8BAE\u5C06\u6240\u6709 <code>MclModule</code> \u5206\u529F\u80FD\u7EC4\u4EF6\u653E\u5728\u4E0D\u540C <code>package</code> \u4E2D\uFF0C\u65B9\u4FBF\u72EC\u7ACB\u52A0\u8F7D</li><li>\u4E00\u4E2A\u5305\u542B <code>MclModule</code> \u7684 <code>package</code> \u4E2D\u5E94\u4EC5\u5305\u542B <code>MclModule</code>\uFF0C\u56E0\u4E3A <code>MCL</code> \u4F1A\u5C06\u8BE5 <code>package</code> \u4E2D\u6240\u6709 <code>class</code> \u5F53\u4F5C <code>MclModule</code> \u52A0\u8F7D</li><li>\u5305\u542B <code>MclModule</code> \u7684 <code>Jar</code> \u4F1A\u76F4\u63A5\u52A0\u8F7D\u5165 <code>MCL</code> \u7684 <code>SystemClassLoader</code> \u4E2D\uFF0C\u88AB\u6240\u6709\u5305\u5171\u4EAB</li></ol>`,15);function f(g,_){const a=o("ExternalLinkIcon");return t(),c("div",null,[u,d,r,k,n("ul",null,[n("li",null,[n("a",m,[v,p(a)]),h])]),b])}var x=e(i,[["render",f],["__file","Module.html.vue"]]);export{x as default};
