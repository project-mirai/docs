import{_ as n,o as s,c as a,d as t}from"./app.547ad890.js";const e={},p=t(`<h1 id="mcl-plugin" tabindex="-1"><a class="header-anchor" href="#mcl-plugin" aria-hidden="true">#</a> MCL Plugin</h1><p>\u5728<code>Mirai Console</code>\u63D2\u4EF6\u4E2D\u4F7F\u7528<code>MCL API</code>\uFF0C\u672C\u6587\u6863\u91C7\u7528<code>Kotlin</code>\u7F16\u5199\u3002</p><h2 id="\u5728build-gradle-kts-\u4E2D\u6DFB\u52A0mcl\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u5728build-gradle-kts-\u4E2D\u6DFB\u52A0mcl\u4F9D\u8D56" aria-hidden="true">#</a> \u5728<code>build.gradle(.kts)</code> \u4E2D\u6DFB\u52A0<code>MCL</code>\u4F9D\u8D56</h2><div class="language-groovy ext-groovy line-numbers-mode"><pre class="language-groovy"><code>dependencies <span class="token punctuation">{</span>
    <span class="token comment">//\u6253\u5305\u65F6\u6392\u9664mcl\u5305\uFF0C\u5982\u679C\u60A8\u7684\u63D2\u4EF6\u6253\u5305\u65F6\u4E0D\u6253\u5305\u4F9D\u8D56\uFF0C\u5219\u53EF\u4F7F\u7528implementation</span>
    <span class="token function">compileOnly</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;org.itxtech:mcl:2.0.0&quot;</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5728\u63D2\u4EF6\u4E3B\u7C7B\u4E2D\u68C0\u67E5mcl" tabindex="-1"><a class="header-anchor" href="#\u5728\u63D2\u4EF6\u4E3B\u7C7B\u4E2D\u68C0\u67E5mcl" aria-hidden="true">#</a> \u5728\u63D2\u4EF6\u4E3B\u7C7B\u4E2D\u68C0\u67E5<code>MCL</code></h2><p>\u5982\u679C\u4E0D\u68C0\u67E5\u4F1A\u5BFC\u81F4\u52A0\u8F7D\u8C03\u7528\u4E86<code>MCL API</code>\u7684\u7C7B\u65F6\u5BFC\u81F4\u5D29\u6E83\u3002</p><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
    Class<span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;org.itxtech.mcl.Loader&quot;</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token operator">:</span> Exception<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    logger<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;Mirai Console \u5E76\u672A\u901A\u8FC7 iTXTech Mirai Console Loader \u52A0\u8F7D\u3002&quot;</span></span><span class="token punctuation">)</span>
    logger<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;\u8BF7\u8BBF\u95EE https://github.com/iTXTech/mirai-console-loader&quot;</span></span><span class="token punctuation">)</span>
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>
<span class="token comment">//\u8F7D\u5165\u8C03\u7528\u4E86MCL API\u7684\u7C7B\uFF0C\u5207\u8BB0\u4E0D\u8981\u7528\u5B50\u7C7B\uFF0C\u4E0D\u7136\u4F1A\u81EA\u52A8\u52A0\u8F7D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6267\u884Cmcl\u547D\u4EE4\u884C\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u6267\u884Cmcl\u547D\u4EE4\u884C\u547D\u4EE4" aria-hidden="true">#</a> \u6267\u884C<code>MCL</code>\u547D\u4EE4\u884C\u547D\u4EE4</h2><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token keyword">import</span> org<span class="token punctuation">.</span>itxtech<span class="token punctuation">.</span>mcl<span class="token punctuation">.</span>Loader

<span class="token keyword">val</span> mcl <span class="token operator">=</span> Loader<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">fun</span> <span class="token function">runMclCommand</span><span class="token punctuation">(</span>args<span class="token operator">:</span> Array<span class="token operator">&lt;</span>String<span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    mcl<span class="token punctuation">.</span><span class="token function">parseCli</span><span class="token punctuation">(</span>args<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">//\u8C03\u7528mcl\u89E3\u6790\u53C2\u6570</span>
    mcl<span class="token punctuation">.</span>manager<span class="token punctuation">.</span><span class="token function">phaseCli</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//\u8C03\u7528\u6A21\u5757\u7BA1\u7406\u5668\u6267\u884Ccli\u9636\u6BB5</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u6267\u884C\u6DFB\u52A0\u5305\u6307\u4EE4</span>
<span class="token function">runMclCommand</span><span class="token punctuation">(</span><span class="token function">arrayOf</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;--update-package&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">&quot;\u5305\u540D&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">&quot;--type&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">&quot;plugin&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">&quot;--channel&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">&quot;stable&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8C03\u7528mcl\u5305\u7BA1\u7406\u5668" tabindex="-1"><a class="header-anchor" href="#\u8C03\u7528mcl\u5305\u7BA1\u7406\u5668" aria-hidden="true">#</a> \u8C03\u7528<code>MCL</code>\u5305\u7BA1\u7406\u5668</h2><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token keyword">import</span> org<span class="token punctuation">.</span>itxtech<span class="token punctuation">.</span>mcl<span class="token punctuation">.</span>Loader
<span class="token keyword">import</span> org<span class="token punctuation">.</span>itxtech<span class="token punctuation">.</span>mcl<span class="token punctuation">.</span>component<span class="token punctuation">.</span>Config

<span class="token keyword">val</span> mcl <span class="token operator">=</span> Loader<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//\u6DFB\u52A0 Mirai Native</span>
mcl<span class="token punctuation">.</span>config<span class="token punctuation">.</span>packages<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>
    Config<span class="token punctuation">.</span><span class="token function">Package</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;org.itxtech:mirai-native&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">&quot;stable&quot;</span></span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token comment">//\u6267\u884C updater \u6A21\u5757\uFF0C\u5982\u679Cupdater\u88AB\u7981\u7528\u5219\u65E0\u6CD5\u8C03\u7528</span>
mcl<span class="token punctuation">.</span>manager<span class="token punctuation">.</span><span class="token function">getModule</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;updater&quot;</span></span><span class="token punctuation">)</span><span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//\u6267\u884C\u6A21\u5757\u7684 load \u9636\u6BB5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),o=[p];function c(i,l){return s(),a("div",null,o)}var r=n(e,[["render",c],["__file","Plugin.html.vue"]]);export{r as default};