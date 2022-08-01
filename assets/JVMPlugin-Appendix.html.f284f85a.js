import{_ as i,r as l,o as t,c as o,a as s,b as p,w as c,d as a,e as n}from"./app.4c4df3fe.js";const r={},d=a(`<h1 id="mirai-console-backend-jvm-plugins-appendix" tabindex="-1"><a class="header-anchor" href="#mirai-console-backend-jvm-plugins-appendix" aria-hidden="true">#</a> Mirai Console Backend - JVM Plugins - Appendix</h1><p>\u672C\u9875\u5305\u542B\u4E00\u4E9B JVM \u63D2\u4EF6\u7684\u9644\u5F55\u3002</p><h2 id="\u4F9D\u8D56\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u4F9D\u8D56\u7BA1\u7406" aria-hidden="true">#</a> \u4F9D\u8D56\u7BA1\u7406</h2><h3 id="api-\u5BFC\u51FA\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#api-\u5BFC\u51FA\u7BA1\u7406" aria-hidden="true">#</a> API \u5BFC\u51FA\u7BA1\u7406</h3><p>\u63D2\u4EF6\u53EF\u80FD\u88AB\u5176\u4ED6\u63D2\u4EF6\u4F9D\u8D56\uFF0C\u63D2\u4EF6\u53EF\u4EE5\u5C06\u4E00\u4E9B\u5185\u90E8\u5B9E\u73B0\u4FDD\u62A4\u8D77\u6765\uFF0C\u907F\u514D\u5176\u4ED6\u63D2\u4EF6\u8C03\u7528\u3002</p><p>\u8981\u542F\u52A8\u8FD9\u4E2A\u7279\u6027\uFF0C \u53EA\u9700\u8981\u5728\u8D44\u6E90\u76EE\u5F55\u521B\u5EFA\u540D\u4E3A <code>export-rules.txt</code> \u7684\u89C4\u5219\u6587\u4EF6\uFF0C\u4FBF\u53EF\u4EE5\u63A7\u5236\u63D2\u4EF6\u7684\u7C7B\u7684\u516C\u5F00\u89C4\u5219\u3002</p><p>\u5982\u679C\u6B63\u5728\u4F7F\u7528 <code>Gradle</code> \u9879\u76EE, \u8BE5\u89C4\u5219\u6587\u4EF6\u4E00\u822C\u9700\u8981\u653E\u7F6E\u4E8E <code>src/main/resources</code> \u4E0B\u3002</p><p>\u793A\u4F8B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
# #\u5F00\u5934\u7684\u884C\u5168\u90E8\u8BC6\u522B\u4E3A\u6CE8\u91CA

# exports, \u5141\u8BB8\u5176\u4ED6\u63D2\u4EF6\u76F4\u63A5\u4F7F\u7528\u67D0\u4E2A\u7C7B

# \u5BFC\u51FA\u4E86\u4E00\u4E2Ainternal\u5305\u7684\u4E00\u4E2A\u7C7B
#
exports org.example.miraiconsole.myplugin.internal.OpenInternal

# \u5BFC\u51FA\u4E86\u6574\u4E2A api \u5305
#
exports org.example.miraiconsole.myplugin.api

# \u4FDD\u62A4 org.example.miraiconsole.myplugin.api2.Internal, \u4E0D\u5141\u8BB8\u5176\u4ED6\u63D2\u4EF6\u76F4\u63A5\u4F7F\u7528
#
protects org.example.miraiconsole.myplugin.api2.Internal

# \u4FDD\u62A4\u6574\u4E2A\u5305
#
# \u522B\u540D: protect-package
protects org.example.miraiconsole.myplugin.internal

# \u6B64\u89C4\u5219\u4E0D\u4F1A\u751F\u6548, \u56E0\u4E3A\u5728\u6B64\u6761\u89C4\u5219\u4E4B\u524D,
# org.example.miraiconsole.myplugin.internal \u5DF2\u7ECF\u88AB\u52A0\u5165\u5230\u4FDD\u62A4\u57DF\u4E2D
exports org.example.miraiconsole.myplugin.internal.NotOpenInternal


# export-plugin, \u5141\u8BB8\u5176\u4ED6\u63D2\u4EF6\u4F7F\u7528\u9664\u4E86\u5DF2\u7ECF\u88AB\u4FDD\u62A4\u7684\u5168\u90E8\u7C7B
# \u4F7F\u7528\u6B64\u89C4\u5219\u4F1A\u540C\u65F6\u8BA9\u6B64\u89C4\u5219\u540E\u7684\u6240\u6709\u89C4\u5219\u5168\u90E8\u5931\u6548
# \u522B\u540D: export-all, export-system
# export-plugin


# \u5C06\u6574\u4E2A\u63D2\u4EF6\u653E\u5165\u4FDD\u62A4\u57DF\u4E2D
# \u9664\u4E86\u6B64\u89C4\u5219\u4E4B\u524D\u663E\u5F0F export \u7684\u7C7B, \u5176\u4ED6\u63D2\u4EF6\u5C06\u4E0D\u5141\u8BB8\u76F4\u63A5\u4F7F\u7528\u88AB\u4FDD\u62A4\u7684\u63D2\u4EF6\u7684\u4EFB\u4F55\u7C7B
# \u522B\u540D: protect-all, protect-system
protect-plugin

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u63D2\u4EF6\u4E5F\u53EF\u4EE5\u901A\u8FC7 Service \u6765\u81EA\u5B9A\u4E49\u5BFC\u51FA\u63A7\u5236</p><p>Example:</p><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token annotation builtin">@AutoService</span><span class="token punctuation">(</span>ExportManager<span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token keyword">object</span> MyExportManager <span class="token operator">:</span> ExportManager <span class="token punctuation">{</span>
    <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">isExported</span><span class="token punctuation">(</span>className<span class="token operator">:</span> String<span class="token punctuation">)</span><span class="token operator">:</span> Boolean <span class="token punctuation">{</span>
        <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;  &lt;== </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$</span><span class="token expression">className</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6570\u636E\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u64CD\u4F5C" aria-hidden="true">#</a> \u6570\u636E\u64CD\u4F5C</h2><h3 id="\u8BFB\u53D6-plugindata-\u6216-pluginconfig" tabindex="-1"><a class="header-anchor" href="#\u8BFB\u53D6-plugindata-\u6216-pluginconfig" aria-hidden="true">#</a> \u8BFB\u53D6 [<code>PluginData</code>] \u6216 [<code>PluginConfig</code>]</h3>`,14),u=n("\u672C\u8282\u57FA\u4E8E\u7AE0\u8282 "),v=n("PluginData"),m=n(" \u7684\u5185\u5BB9\u3002 \u5728\u9605\u8BFB\u672C\u8282\u524D\u5EFA\u8BAE\u5148\u9605\u8BFB\u4E0A\u8FF0\u57FA\u7840\u7AE0\u8282\u3002\u4E5F\u53EF\u4EE5\u5148\u8DF3\u8FC7\u672C\u8282\u3002"),k=a(`<p>[<code>JvmPlugin</code>] \u5B9E\u73B0\u63A5\u53E3 [<code>AutoSavePluginDataHolder</code>]\uFF0C\u63D0\u4F9B:</p><p>Kotlin\uFF1A</p><ul><li><code>public fun &lt;T : PluginData&gt; T.reload()</code></li><li><code>public fun &lt;T : PluginConfig&gt; T.reload()</code></li></ul><p>Java\uFF1A</p><ul><li><code>public fun reloadPluginData(PluginData)</code></li><li><code>public fun reloadPluginData(PluginConfig)</code></li></ul><p><strong>\u4EC5\u53EF\u5728\u63D2\u4EF6 onEnable() \u65F6\u53CA\u5176\u4E4B\u540E\u624D\u80FD\u4F7F\u7528\u8FD9\u4E9B\u65B9\u6CD5\u3002</strong><br><strong>\u5728\u63D2\u4EF6 onDisable() \u4E4B\u540E\u4E0D\u80FD\u4F7F\u7528\u8FD9\u4E9B\u65B9\u6CD5\u3002</strong></p><h4 id="\u4F7F\u7528\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u793A\u4F8B" aria-hidden="true">#</a> \u4F7F\u7528\u793A\u4F8B</h4><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token keyword">object</span> SchedulePlugin <span class="token operator">:</span> <span class="token function">KotlinPlugin</span><span class="token punctuation">(</span>
    <span class="token function">JvmPluginDescription</span><span class="token punctuation">(</span>
        id <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">&quot;org.example.my-schedule-plugin&quot;</span></span><span class="token punctuation">,</span>
        version <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">&quot;1.0.0&quot;</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">name</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;Schedule&quot;</span></span><span class="token punctuation">)</span>

        <span class="token comment">// author(&quot;...&quot;)</span>
        <span class="token comment">// dependsOn(&quot;...&quot;)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>

    <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">onEnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        MyData<span class="token punctuation">.</span><span class="token function">reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u4EC5\u9700\u6B64\u884C\uFF0C\u4FDD\u8BC1\u542F\u52A8\u65F6\u66F4\u65B0\u6570\u636E\uFF0C\u5728\u4E4B\u540E\u81EA\u52A8\u5B58\u50A8\u6570\u636E\u3002</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">object</span> MyData <span class="token operator">:</span> <span class="token function">AutoSavePluginData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">val</span> value<span class="token operator">:</span> Map<span class="token operator">&lt;</span>String<span class="token punctuation">,</span> String<span class="token operator">&gt;</span> <span class="token keyword">by</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function b(g,h){const e=l("RouterLink");return t(),o("div",null,[d,s("blockquote",null,[s("p",null,[u,p(e,{to:"/console/PluginData.html"},{default:c(()=>[v]),_:1}),m])]),k])}var f=i(r,[["render",b],["__file","JVMPlugin-Appendix.html.vue"]]);export{f as default};
