import{_ as c,o as i,c as l,a,b as t,w as u,d as s,e as n,r as p}from"./app.09d22a30.js";const r={},k=s(`<h1 id="mirai-console-backend-jvm-plugins-debug" tabindex="-1"><a class="header-anchor" href="#mirai-console-backend-jvm-plugins-debug" aria-hidden="true">#</a> Mirai Console Backend - JVM Plugins - Debug</h1><blockquote><p>\u5EFA\u8BAE\u5728 Java 9+ \u7684\u73AF\u5883\u4E2D\u8FDB\u884C\u6392\u9519, mirai-console \u5728 java 9+ \u4E2D\u7684\u9519\u8BEF\u5806\u6808\u4E2D\u62A5\u544A\u4E86\u9519\u8BEF\u7C7B\u6765\u81EA\u54EA\u4E2A\u7C7B\u52A0\u8F7D\u5668</p></blockquote><h2 id="\u9519\u8BEF\u5806\u6808\u57FA\u672C\u89E3\u6790" tabindex="-1"><a class="header-anchor" href="#\u9519\u8BEF\u5806\u6808\u57FA\u672C\u89E3\u6790" aria-hidden="true">#</a> \u9519\u8BEF\u5806\u6808\u57FA\u672C\u89E3\u6790</h2><div class="language-log ext-log line-numbers-mode"><pre class="language-log"><code><span class="token exception javastacktrace language-javastacktrace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>Exception<span class="token punctuation">:</span> Thread stack dump
        <span class="token keyword">at</span> java<span class="token punctuation">.</span>base/java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>Thread<span class="token punctuation">.</span><span class="token function">dumpStack</span><span class="token punctuation">(</span>Thread<span class="token punctuation">.</span>java<span class="token punctuation">)</span>
        <span class="token keyword">at</span> example-plugin<span class="token punctuation">.</span>mirai2<span class="token punctuation">.</span>jar[shared]//com<span class="token punctuation">.</span>example<span class="token punctuation">.</span>exmapleplugin<span class="token punctuation">.</span>sharedlib<span class="token punctuation">.</span>SharedLib<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span>shared<span class="token punctuation">.</span>kt<span class="token punctuation">:</span>6<span class="token punctuation">)</span>
        <span class="token keyword">at</span> example-plugin<span class="token punctuation">.</span>mirai2<span class="token punctuation">.</span>jar[private]//com<span class="token punctuation">.</span>example<span class="token punctuation">.</span>exmapleplugin<span class="token punctuation">.</span>privatelib<span class="token punctuation">.</span>PrivLib<span class="token punctuation">.</span><span class="token function">cmd</span><span class="token punctuation">(</span>priv<span class="token punctuation">.</span>kt<span class="token punctuation">:</span>5<span class="token punctuation">)</span>
        <span class="token keyword">at</span> example-plugin<span class="token punctuation">.</span>mirai2<span class="token punctuation">.</span>jar//com<span class="token punctuation">.</span>example<span class="token punctuation">.</span>exmapleplugin<span class="token punctuation">.</span>MyCommand<span class="token punctuation">.</span><span class="token function">cmd</span><span class="token punctuation">(</span>MyCommand<span class="token punctuation">.</span>kt<span class="token punctuation">:</span>63<span class="token punctuation">)</span>
        <span class="token keyword">at</span> java<span class="token punctuation">.</span>base/jdk<span class="token punctuation">.</span>internal<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span>NativeMethodAccessorImpl<span class="token punctuation">.</span><span class="token function">invoke0</span><span class="token punctuation">(</span>Native Method<span class="token punctuation">)</span>
        <span class="token keyword">at</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
        <span class="token keyword">at</span> net<span class="token punctuation">.</span>mamoe<span class="token punctuation">.</span>mirai<span class="token punctuation">.</span>console<span class="token punctuation">.</span>command<span class="token punctuation">.</span>CommandManager<span class="token punctuation">.</span><span class="token function">executeCommand$default</span><span class="token punctuation">(</span>CommandManager<span class="token punctuation">.</span>kt<span class="token punctuation">:</span>125<span class="token punctuation">)</span>
        <span class="token keyword">at</span> chat-command-0<span class="token punctuation">.</span>5<span class="token punctuation">.</span>1<span class="token punctuation">.</span>jar//net<span class="token punctuation">.</span>mamoe<span class="token punctuation">.</span>mirai<span class="token punctuation">.</span>console<span class="token punctuation">.</span>plugins<span class="token punctuation">.</span>chat<span class="token punctuation">.</span>command<span class="token punctuation">.</span>PluginMain<span class="token punctuation">.</span><span class="token function">handleCommand</span><span class="token punctuation">(</span>PluginMain<span class="token punctuation">.</span>kt<span class="token punctuation">:</span>86<span class="token punctuation">)</span>
        <span class="token keyword">at</span> chat-command-0<span class="token punctuation">.</span>5<span class="token punctuation">.</span>1<span class="token punctuation">.</span>jar//net<span class="token punctuation">.</span>mamoe<span class="token punctuation">.</span>mirai<span class="token punctuation">.</span>console<span class="token punctuation">.</span>plugins<span class="token punctuation">.</span>chat<span class="token punctuation">.</span>command<span class="token punctuation">.</span>PluginMain$onEnable$2$1<span class="token punctuation">.</span><span class="token function">invokeSuspend</span><span class="token punctuation">(</span>PluginMain<span class="token punctuation">.</span>kt<span class="token punctuation">:</span>69<span class="token punctuation">)</span>
        <span class="token keyword">at</span> kotlin<span class="token punctuation">.</span>coroutines<span class="token punctuation">.</span>jvm<span class="token punctuation">.</span>internal<span class="token punctuation">.</span>BaseContinuationImpl<span class="token punctuation">.</span><span class="token function">resumeWith</span><span class="token punctuation">(</span>ContinuationImpl<span class="token punctuation">.</span>kt<span class="token punctuation">:</span>33<span class="token punctuation">)</span>
        <span class="token keyword">at</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6765\u81EA plugin \u672C\u8EAB\u7684\u7C7B\u52A0\u8F7D\u5668\u7684\u5806\u6808\u4F1A\u4EE5 \u63D2\u4EF6\u6587\u4EF6\u540D \u5F00\u5934, \u5176\u4E2D <code>...[private]</code> <code>....[shared]</code> \u90FD\u662F\u8BE5\u63D2\u4EF6\u4F7F\u7528\u7684\u7C7B\u5E93.</p><ul><li><code>[shared]</code> \u4EE3\u8868\u662F\u5171\u4EAB\u5E93, \u5176\u4E2D\u7684\u7C7B\u53EF\u4EE5\u88AB\u4F9D\u8D56\u6B64\u63D2\u4EF6\u7684\u5176\u4ED6\u63D2\u4EF6\u89E3\u6790\u5230</li><li><code>[private]</code> \u4EE3\u8868\u662F\u79C1\u6709\u5E93, \u4EC5\u8BE5\u63D2\u4EF6\u81EA\u5DF1\u5185\u90E8\u4F7F\u7528, \u4F9D\u8D56\u6B64\u63D2\u4EF6\u7684\u5176\u4ED6\u63D2\u4EF6\u5C06\u4E0D\u80FD\u89E3\u6790\u5230\u6B64\u7C7B\u52A0\u8F7D\u5668\u7684\u7C7B</li></ul><h2 id="\u591A\u63D2\u4EF6\u95F4\u6570\u636E\u4EA4\u6362\u7ED3\u679C\u548C\u9884\u671F\u4E0D\u7B26\u5408" tabindex="-1"><a class="header-anchor" href="#\u591A\u63D2\u4EF6\u95F4\u6570\u636E\u4EA4\u6362\u7ED3\u679C\u548C\u9884\u671F\u4E0D\u7B26\u5408" aria-hidden="true">#</a> \u591A\u63D2\u4EF6\u95F4\u6570\u636E\u4EA4\u6362\u7ED3\u679C\u548C\u9884\u671F\u4E0D\u7B26\u5408</h2><p>\u591A\u63D2\u4EF6\u95F4\u6570\u636E\u7ED3\u679C\u4E0D\u4E00\u81F4 90% \u662F\u56E0\u4E3A\u7F3A\u5C11\u4F9D\u8D56\u5173\u7CFB\u5BFC\u81F4\u7684\u672A\u89E3\u6790\u5230\u76F8\u540C\u7684\u7C7B\u5BFC\u81F4\u7ED3\u679C\u4E0D\u4E00\u81F4</p>`,8),d=n("\u5173\u4E8E\u5982\u4F55\u5EFA\u7ACB\u5173\u7CFB, \u89C1 "),v=n("JVMPlugin - Data Exchange"),m=s(`<p>\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u4EE3\u7801\u786E\u5B9A\u662F\u5426\u662F\u56E0\u4E3A\u7C7B\u94FE\u63A5\u9519\u8BEF\u5BFC\u81F4\u7684\u6570\u636E\u4E0D\u4E00\u81F4</p><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token keyword">fun</span> MiraiLogger<span class="token punctuation">.</span><span class="token function">dumpClass</span><span class="token punctuation">(</span>klass<span class="token operator">:</span> Class<span class="token operator">&lt;</span><span class="token operator">*</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    info <span class="token punctuation">{</span> <span class="token string-literal singleline"><span class="token string">&quot;Class name: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$</span><span class="token expression">klass</span></span><span class="token string">&quot;</span></span> <span class="token punctuation">}</span>
    info <span class="token punctuation">{</span> <span class="token string-literal singleline"><span class="token string">&quot;  |- loader: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">klass<span class="token punctuation">.</span>classLoader</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;</span></span> <span class="token punctuation">}</span>
    info <span class="token punctuation">{</span> <span class="token string-literal singleline"><span class="token string">&quot;  |- module: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">klass<span class="token punctuation">.</span>module</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;</span></span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">dumpClass</span><span class="token punctuation">(</span><span class="token class-name">MiraiLogger</span> logger<span class="token punctuation">,</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> klass<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;Class name: &quot;</span> <span class="token operator">+</span> klass<span class="token punctuation">)</span><span class="token punctuation">;</span>
    logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;  |- loader: &quot;</span> <span class="token operator">+</span> klass<span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;  |- module: &quot;</span> <span class="token operator">+</span> klass<span class="token punctuation">.</span><span class="token function">getModule</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4F7F\u7528\u7684\u7B2C\u4E09\u65B9\u5E93\u62A5\u9519\u6CA1\u6709\u6A21\u5757\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u7684\u7B2C\u4E09\u65B9\u5E93\u62A5\u9519\u6CA1\u6709\u6A21\u5757\u5B9E\u73B0" aria-hidden="true">#</a> \u4F7F\u7528\u7684\u7B2C\u4E09\u65B9\u5E93\u62A5\u9519\u6CA1\u6709\u6A21\u5757\u5B9E\u73B0</h2><p>\u5728\u63D2\u4EF6\u521D\u59CB\u5316\u7684\u65F6\u5019, \u7EBF\u7A0B\u4E0A\u4E0B\u6587\u7C7B\u52A0\u8F7D\u5668\u4F9D\u7136\u8FD8\u662F console \u7684\u7CFB\u7EDF\u7C7B\u52A0\u8F7D\u5668 (<code>AppClassLoader</code>), \u9700\u8981\u624B\u52A8\u5C06\u5176\u5207\u6362\u5230\u63D2\u4EF6\u7684\u7C7B\u52A0\u8F7D\u5668</p>`,5),g=n("\u8BE6\u89C1 "),h={href:"https://github.com/mamoe/mirai/issues/2138#issuecomment-1179673302",target:"_blank",rel:"noopener noreferrer"},b=n("Issue Comment"),f=s(`<div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token keyword">fun</span> <span class="token function">onEnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">val</span> oThreadCtxLoader <span class="token operator">=</span> Thread<span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>contextClassLoader
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        Thread<span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>contextClassLoader <span class="token operator">=</span> javaClass<span class="token punctuation">.</span>classLoader
        <span class="token comment">// .......</span>
    <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
        Thread<span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>contextClassLoader <span class="token operator">=</span> oThreadCtxLoader
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="java-lang-linkageerror-loader-constraint-violation" tabindex="-1"><a class="header-anchor" href="#java-lang-linkageerror-loader-constraint-violation" aria-hidden="true">#</a> java.lang.LinkageError: loader constraint violation</h2><div class="language-log ext-log line-numbers-mode"><pre class="language-log"><code><span class="token exception javastacktrace language-javastacktrace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>LinkageError<span class="token punctuation">:</span> loader constraint violation<span class="token punctuation">:</span> when resolving method &#39;void io<span class="token punctuation">.</span>ktor<span class="token punctuation">.</span>client<span class="token punctuation">.</span>request<span class="token punctuation">.</span>HttpRequestBuilder<span class="token punctuation">.</span><span class="token function">setMethod</span><span class="token punctuation">(</span>io<span class="token punctuation">.</span>ktor<span class="token punctuation">.</span>http<span class="token punctuation">.</span>HttpMethod<span class="token punctuation">)</span>&#39; the class loader &#39;test-ktor-dev<span class="token punctuation">.</span>mirai2<span class="token punctuation">.</span>jar&#39; @61dde151 of the current class, com/kasukusakura/testktor/TestKtor$getTailrec$$inlined$get$2, and the class loader &#39;app&#39; for the method&#39;s defining class, io/ktor/client/request/HttpRequestBuilder, have different Class objects for the type io/ktor/http/HttpMethod used in the signature <span class="token punctuation">(</span>com/kasukusakura/testktor/TestKtor$getTailrec$$inlined$get$2 is in unnamed module of loader &#39;test-ktor-dev<span class="token punctuation">.</span>mirai2<span class="token punctuation">.</span>jar&#39; @61dde151, parent loader &#39;global-shared&#39; @32b9bd12; io<span class="token punctuation">.</span>ktor<span class="token punctuation">.</span>client<span class="token punctuation">.</span>request<span class="token punctuation">.</span>HttpRequestBuilder is in unnamed module of loader &#39;app&#39;<span class="token punctuation">)</span>
	<span class="token keyword">at</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>

<span class="token property">java.lang.LinkageError:</span> <span class="token property">loader constraint violation:</span>
    when resolving method <span class="token string">&#39;void io.ktor.client.request.HttpRequestBuilder.setMethod(io.ktor.http.HttpMethod)&#39;</span>
        the class loader <span class="token string">&#39;test-ktor-dev.mirai2.jar&#39;</span> <span class="token operator">@</span><span class="token number">61dde151</span> of the current class<span class="token punctuation">,</span> com<span class="token operator">/</span>kasukusakura<span class="token operator">/</span>testktor<span class="token operator">/</span>TestKtor<span class="token operator">$</span>getTailrec<span class="token operator">$</span><span class="token operator">$</span>inlined<span class="token operator">$</span>get<span class="token operator">$</span><span class="token number">2</span><span class="token punctuation">,</span>
        and
        the class loader <span class="token string">&#39;app&#39;</span> for the method&#39;s defining class<span class="token punctuation">,</span> io<span class="token operator">/</span>ktor<span class="token operator">/</span>client<span class="token operator">/</span>request<span class="token operator">/</span>HttpRequestBuilder<span class="token punctuation">,</span>

    have different Class objects for the type io<span class="token operator">/</span>ktor<span class="token operator">/</span>http<span class="token operator">/</span>HttpMethod used in the signature
    
    <span class="token operator">(</span>
        com<span class="token operator">/</span>kasukusakura<span class="token operator">/</span>testktor<span class="token operator">/</span>TestKtor<span class="token operator">$</span>getTailrec<span class="token operator">$</span><span class="token operator">$</span>inlined<span class="token operator">$</span>get<span class="token operator">$</span><span class="token number">2</span> is in unnamed module of loader <span class="token string">&#39;test-ktor-dev.mirai2.jar&#39;</span> <span class="token operator">@</span><span class="token number">61dde151</span><span class="token punctuation">,</span>
            parent loader <span class="token string">&#39;global-shared&#39;</span> <span class="token operator">@</span><span class="token number">32b9bd12</span><span class="token operator">;</span>

        io<span class="token punctuation">.</span>ktor<span class="token punctuation">.</span>client<span class="token punctuation">.</span>request<span class="token punctuation">.</span>HttpRequestBuilder is in unnamed module of loader <span class="token string">&#39;app&#39;</span>
    <span class="token operator">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7FFB\u8BD1</p><div class="language-log ext-log line-numbers-mode"><pre class="language-log"><code>JVM \u65E0\u6CD5\u89E3\u6790 com<span class="token operator">/</span>kasukusakura<span class="token operator">/</span>testktor<span class="token operator">/</span>TestKtor<span class="token operator">$</span>getTailrec<span class="token operator">$</span><span class="token operator">$</span>inlined<span class="token operator">$</span>get<span class="token operator">$</span><span class="token number">2</span> \u4E2D\u7684\u65B9\u6CD5\u5F15\u7528
    <span class="token string">&#39;void io.ktor.client.request.HttpRequestBuilder.setMethod(io.ktor.http.HttpMethod)&#39;</span>

\u641C\u7D22\u5230\u7684 <span class="token string">&#39;io.ktor.client.request.HttpRequestBuilder&#39;</span> \u4F4D\u4E8E\u7CFB\u7EDF\u7C7B\u52A0\u8F7D\u5668 <span class="token string">&#39;app&#39;</span> \u4E2D

HttpRequestBuilder \u4E2D\u7684 HttpMethod \u5F15\u7528\u548C
    TestKtor<span class="token operator">$</span>getTailrec<span class="token operator">$</span><span class="token operator">$</span>inlined<span class="token operator">$</span>get<span class="token operator">$</span><span class="token number">2</span> \u5F97\u5230\u7684 HttpMethod \u5F15\u7528
\u4E0D\u4E00\u81F4<span class="token punctuation">,</span> \u65E0\u6CD5\u8FDE\u63A5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7ED3\u8BBA: \u63D2\u4EF6\u6CA1\u6709\u9644\u5E26\u5B8C\u6574\u7684 ktor \u4F9D\u8D56\u5BFC\u81F4\u90E8\u5206\u7C7B\u89E3\u6790\u81F3\u63D2\u4EF6\u5E93\u52A0\u8F7D\u5668, \u90E8\u5206\u7C7B\u89E3\u6790\u81F3\u7CFB\u7EDF\u7C7B\u52A0\u8F7D\u5668</p>`,6);function x($,j){const e=p("RouterLink"),o=p("ExternalLinkIcon");return i(),l("div",null,[k,a("p",null,[d,t(e,{to:"/console/plugin/JVMPlugin-DataExchange.html"},{default:u(()=>[v]),_:1})]),m,a("p",null,[g,a("a",h,[b,t(o)])]),f])}var q=c(r,[["render",x],["__file","JVMPlugin-Debug.html.vue"]]);export{q as default};
