import{_ as d,r as l,o as r,c,a as e,b as i,w as s,d as a,e as n}from"./app.b92d602d.js";const u={},h=a('<h1 id="mirai-bots" tabindex="-1"><a class="header-anchor" href="#mirai-bots" aria-hidden="true">#</a> Mirai - Bots</h1><p><strong>\u76EE\u5F55</strong></p><ul><li><a href="#1-%E5%88%9B%E5%BB%BA%E5%92%8C%E9%85%8D%E7%BD%AE-bot">1. \u521B\u5EFA\u548C\u914D\u7F6E <code>Bot</code></a><ul><li><a href="#%E9%85%8D%E7%BD%AE-bot">\u914D\u7F6E Bot</a></li><li><a href="#%E9%87%8D%E8%A6%81%E9%85%8D%E7%BD%AE">\u91CD\u8981\u914D\u7F6E</a><ul><li><a href="#%E5%88%87%E6%8D%A2%E5%BF%83%E8%B7%B3%E7%AD%96%E7%95%A5">\u5207\u6362\u5FC3\u8DF3\u7B56\u7565</a></li><li><a href="#%E5%88%87%E6%8D%A2%E7%99%BB%E5%BD%95%E5%8D%8F%E8%AE%AE">\u5207\u6362\u767B\u5F55\u534F\u8BAE</a></li><li><a href="#%E8%A6%86%E7%9B%96%E7%99%BB%E5%BD%95%E8%A7%A3%E5%86%B3%E5%99%A8">\u8986\u76D6\u767B\u5F55\u89E3\u51B3\u5668</a></li></ul></li><li><a href="#%E5%B8%B8%E7%94%A8%E9%85%8D%E7%BD%AE">\u5E38\u7528\u914D\u7F6E</a><ul><li><a href="#%E4%BF%AE%E6%94%B9%E8%BF%90%E8%A1%8C%E7%9B%AE%E5%BD%95">\u4FEE\u6539\u8FD0\u884C\u76EE\u5F55</a></li><li><a href="#%E4%BF%AE%E6%94%B9-bot-%E7%BC%93%E5%AD%98%E7%9B%AE%E5%BD%95">\u4FEE\u6539 Bot \u7F13\u5B58\u76EE\u5F55</a></li><li><a href="#%E8%AE%BE%E5%A4%87%E4%BF%A1%E6%81%AF">\u8BBE\u5907\u4FE1\u606F</a></li><li><a href="#%E4%BD%BF%E7%94%A8%E5%85%B6%E4%BB%96%E6%97%A5%E5%BF%97%E5%BA%93%E6%8E%A5%E7%AE%A1-mirai-%E6%97%A5%E5%BF%97%E7%B3%BB%E7%BB%9F">\u4F7F\u7528\u5176\u4ED6\u65E5\u5FD7\u5E93\u63A5\u7BA1 mirai \u65E5\u5FD7\u7CFB\u7EDF</a></li><li><a href="#%E9%87%8D%E5%AE%9A%E5%90%91%E6%97%A5%E5%BF%97">\u91CD\u5B9A\u5411\u65E5\u5FD7</a></li><li><a href="#%E5%90%AF%E7%94%A8%E5%88%97%E8%A1%A8%E7%BC%93%E5%AD%98">\u542F\u7528\u5217\u8868\u7F13\u5B58</a></li><li><a href="#%E6%9B%B4%E5%A4%9A%E9%85%8D%E7%BD%AE">\u66F4\u591A\u914D\u7F6E</a></li></ul></li><li><a href="#%E8%8E%B7%E5%8F%96%E5%BD%93%E5%89%8D%E6%89%80%E6%9C%89-bot-%E5%AE%9E%E4%BE%8B">\u83B7\u53D6\u5F53\u524D\u6240\u6709 <code>Bot</code> \u5B9E\u4F8B</a></li></ul></li><li><a href="#2-%E7%99%BB%E5%BD%95">2. \u767B\u5F55</a><ul><li><a href="#%E5%A4%84%E7%90%86%E6%BB%91%E5%8A%A8%E9%AA%8C%E8%AF%81%E7%A0%81">\u5904\u7406\u6ED1\u52A8\u9A8C\u8BC1\u7801</a></li><li><a href="#%E5%B8%B8%E8%A7%81%E7%99%BB%E5%BD%95%E5%A4%B1%E8%B4%A5%E5%8E%9F%E5%9B%A0">\u5E38\u89C1\u767B\u5F55\u5931\u8D25\u539F\u56E0</a></li></ul></li><li><a href="#%E9%99%84%E5%BD%95-%E8%B0%83%E8%AF%95%E7%BD%91%E7%BB%9C%E5%B1%82">\u9644\u5F55: \u8C03\u8BD5\u7F51\u7EDC\u5C42</a></li></ul><h2 id="_1-\u521B\u5EFA\u548C\u914D\u7F6E-bot" tabindex="-1"><a class="header-anchor" href="#_1-\u521B\u5EFA\u548C\u914D\u7F6E-bot" aria-hidden="true">#</a> 1. \u521B\u5EFA\u548C\u914D\u7F6E <code>Bot</code></h2>',4),p=n("\u4E00\u4E2A\u673A\u5668\u4EBA\u88AB\u4EE5 "),v=e("code",null,"Bot",-1),m=n(" \u5BF9\u8C61\u63CF\u8FF0\u3002mirai \u7684\u4EA4\u4E92\u5165\u53E3\u70B9\u662F "),_=e("code",null,"Bot",-1),b=n("\u3002"),g=e("code",null,"Bot",-1),E=n(" \u53EA\u53EF\u901A\u8FC7 "),B={href:"https://github.com/mamoe/mirai/blob/dev/mirai-core-api/src/commonMain/kotlin/BotFactory.kt#L22-L87",target:"_blank",rel:"noopener noreferrer"},f=e("code",null,"BotFactory",-1),x=n(" \u5185\u7684 "),k=e("code",null,"newBot",-1),A=n(" \u65B9\u6CD5\u83B7\u5F97\uFF1A"),D=a(`<div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token keyword">interface</span> BotFactory <span class="token punctuation">{</span>
    <span class="token keyword">fun</span> <span class="token function">newBot</span><span class="token punctuation">(</span>qq<span class="token operator">:</span> Long<span class="token punctuation">,</span> password<span class="token operator">:</span> String<span class="token punctuation">,</span> configuration<span class="token operator">:</span> BotConfiguration<span class="token punctuation">)</span><span class="token operator">:</span> Bot
    <span class="token keyword">fun</span> <span class="token function">newBot</span><span class="token punctuation">(</span>qq<span class="token operator">:</span> Long<span class="token punctuation">,</span> password<span class="token operator">:</span> String<span class="token punctuation">)</span><span class="token operator">:</span> Bot
    <span class="token keyword">fun</span> <span class="token function">newBot</span><span class="token punctuation">(</span>qq<span class="token operator">:</span> Long<span class="token punctuation">,</span> passwordMd5<span class="token operator">:</span> ByteArray<span class="token punctuation">,</span> configuration<span class="token operator">:</span> BotConfiguration<span class="token punctuation">)</span><span class="token operator">:</span> Bot
    <span class="token keyword">fun</span> <span class="token function">newBot</span><span class="token punctuation">(</span>qq<span class="token operator">:</span> Long<span class="token punctuation">,</span> passwordMd5<span class="token operator">:</span> ByteArray<span class="token punctuation">)</span><span class="token operator">:</span> Bot
    
    <span class="token keyword">companion</span> <span class="token keyword">object</span> <span class="token operator">:</span> BotFactory <span class="token keyword">by</span> BotFactoryImpl
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u5E38\u7684\u8C03\u7528\u65B9\u6CD5\u4E3A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// Kotlin
val bot = BotFactory.newBot(    )

// Java
Bot bot = BotFactory.INSTANCE.newBot(    );
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),C=n("Scala \u4F7F\u7528\u8005\u8BF7\u67E5\u770B "),y={href:"https://github.com/mamoe/mirai/issues/834",target:"_blank",rel:"noopener noreferrer"},q=n("#834"),w=a(`<h3 id="\u914D\u7F6E-bot" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-bot" aria-hidden="true">#</a> \u914D\u7F6E Bot</h3><p>\u53EF\u4EE5\u5207\u6362\u4F7F\u7528\u7684\u534F\u8BAE\u3001\u63A7\u5236\u65E5\u5FD7\u8F93\u51FA\u7B49\u3002</p><p>\u4EC5\u80FD\u5728\u6784\u9020 Bot \u65F6\u4FEE\u6539\u5176\u914D\u7F6E\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// Kotlin
val bot = BotFactory.newBot(qq, password) {
    // \u914D\u7F6E\uFF0C\u4F8B\u5982\uFF1A
    fileBasedDeviceInfo()
}

// Java
Bot bot = BotFactory.INSTANCE.newBot(qq, password, new BotConfiguration() {{
    // \u914D\u7F6E\uFF0C\u4F8B\u5982\uFF1A
    fileBasedDeviceInfo()
}})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0B\u6587\u793A\u4F8B\u4EE3\u7801\u90FD\u8981\u653E\u5165 <code>// \u914D\u7F6E</code> \u4E2D\u3002</p>`,5),F=n("\u53EF\u5728 "),L={href:"https://github.com/mamoe/mirai/blob/dev/mirai-core-api/src/commonMain/kotlin/utils/BotConfiguration.kt#L23",target:"_blank",rel:"noopener noreferrer"},S=n("BotConfiguration.kt"),I=n(" \u67E5\u770B\u5B8C\u6574\u914D\u7F6E\u5217\u8868"),N=a(`<h3 id="\u91CD\u8981\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u91CD\u8981\u914D\u7F6E" aria-hidden="true">#</a> \u91CD\u8981\u914D\u7F6E</h3><h4 id="\u5207\u6362\u5FC3\u8DF3\u7B56\u7565" tabindex="-1"><a class="header-anchor" href="#\u5207\u6362\u5FC3\u8DF3\u7B56\u7565" aria-hidden="true">#</a> \u5207\u6362\u5FC3\u8DF3\u7B56\u7565</h4><p>\u5FC3\u8DF3\u7B56\u7565\u9ED8\u8BA4\u4E3A\u6700\u4F73\u7684 <code>STAT_HB</code>\uFF0C\u4F46\u4E0D\u9002\u7528\u4E8E\u4E00\u4E9B\u8D26\u53F7\u3002</p><p>\u5982\u679C\u9047\u5230 Bot <strong>\u95F2\u7F6E\u4E00\u6BB5\u65F6\u95F4\u540E</strong>\uFF0C\u53D1\u6D88\u606F\u8FD4\u56DE\u6210\u529F\u4F46\u7FA4\u5185\u6536\u4E0D\u5230\u7684\u60C5\u51B5\uFF0C\u8BF7\u5207\u6362\u5FC3\u8DF3\u7B56\u7565\uFF0C\u4F9D\u6B21\u5C1D\u8BD5 <code>STAT_HB</code>\u3001<code>REGISTER</code> \u548C <code>NONE</code>\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// Kotlin
heartbeatStrategy = BotConfiguration.HeartbeatStrategy.REGISTER

// Java
setHeartbeatStrategy(BotConfiguration.HeartbeatStrategy.REGISTER)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5207\u6362\u767B\u5F55\u534F\u8BAE" tabindex="-1"><a class="header-anchor" href="#\u5207\u6362\u767B\u5F55\u534F\u8BAE" aria-hidden="true">#</a> \u5207\u6362\u767B\u5F55\u534F\u8BAE</h4><p>Mirai \u652F\u6301\u591A\u79CD\u767B\u5F55\u534F\u8BAE\uFF1A<code>ANDROID_PHONE</code>\uFF0C<code>ANDROID_PAD</code>\uFF0C<code>ANDROID_WATCH</code>\uFF0C<code>IPAD</code>\uFF0C<code>MACOS</code> \u9ED8\u8BA4\u4F7F\u7528 <code>ANDROID_PHONE</code>\u3002</p><p>\u82E5\u767B\u5F55\u5931\u8D25\uFF0C\u53EF\u5C1D\u8BD5\u5207\u6362\u534F\u8BAE\u3002<strong>\u4F46\u6CE8\u610F\u90E8\u5206\u529F\u80FD\u5728\u90E8\u5206\u534F\u8BAE\u4E0A\u4E0D\u53D7\u652F\u6301</strong>\uFF0C\u8BE6\u89C1\u6E90\u7801\u5185\u6CE8\u91CA\u3002</p><p>\u8981\u5207\u6362\u534F\u8BAE\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// Kotlin
protocol = BotConfiguration.MiraiProtocol.ANDROID_PAD

// Java
setProtocol(MiraiProtocol.ANDROID_PAD)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u8986\u76D6\u767B\u5F55\u89E3\u51B3\u5668" tabindex="-1"><a class="header-anchor" href="#\u8986\u76D6\u767B\u5F55\u89E3\u51B3\u5668" aria-hidden="true">#</a> \u8986\u76D6\u767B\u5F55\u89E3\u51B3\u5668</h4><p>\u5728\u767B\u5F55\u65F6\u53EF\u80FD\u9047\u5230\u56FE\u5F62\u9A8C\u8BC1\u7801\u6216\u6ED1\u52A8\u9A8C\u8BC1\u7801\uFF0CMirai \u4F1A\u4F7F\u7528 <code>LoginSolver</code> \u89E3\u51B3\u9A8C\u8BC1\u7801\u3002</p><ul><li>\u5728 JVM, Mirai \u4F1A\u6839\u636E\u73AF\u5883\u652F\u6301\u60C5\u51B5\u9009\u62E9 Swing/CLI \u5B9E\u73B0\uFF0C\u901A\u5E38\u4E0D\u9700\u8981\u624B\u52A8\u63D0\u4F9B</li><li>\u5728 Android \u9700\u8981\u624B\u52A8\u63D0\u4F9B <code>LoginSolver</code></li></ul><p>\u82E5\u8981\u8986\u76D6\u9ED8\u8BA4\u7684 <code>LoginSolver</code> \uFF08\u901A\u5E38\u4E0D\u9700\u8981\uFF09\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// Kotlin
loginSolver = YourLoginSolver

// Java
setLoginSolver(new YourLoginSolver())
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),M=n("\u8981\u83B7\u53D6\u66F4\u591A\u6709\u5173 "),T=e("code",null,"LoginSolver",-1),R=n(" \u7684\u4FE1\u606F\uFF0C\u67E5\u770B "),J={href:"https://github.com/mamoe/mirai/blob/dev/mirai-core-api/src/commonMain/kotlin/utils/LoginSolver.kt#L32",target:"_blank",rel:"noopener noreferrer"},P=n("LoginSolver.kt"),j=a(`<h3 id="\u5E38\u7528\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u914D\u7F6E" aria-hidden="true">#</a> \u5E38\u7528\u914D\u7F6E</h3><h4 id="\u4FEE\u6539\u8FD0\u884C\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u8FD0\u884C\u76EE\u5F55" aria-hidden="true">#</a> \u4FEE\u6539\u8FD0\u884C\u76EE\u5F55</h4><p>\u9ED8\u8BA4\u4E3A <code>File(&quot;.&quot;)</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// Kotlin
workingDir = File(&quot;C:/mirai&quot;)

// Java
setWorkingDir(new File(&quot;C:/mirai&quot;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u4FEE\u6539-bot-\u7F13\u5B58\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539-bot-\u7F13\u5B58\u76EE\u5F55" aria-hidden="true">#</a> \u4FEE\u6539 Bot \u7F13\u5B58\u76EE\u5F55</h4><p>\u7F13\u5B58\u76EE\u5F55\u4F1A\u76F8\u5BF9\u4E8E <code>workingDir</code> \u89E3\u6790\u3002\u5982 <code>File(&quot;cache&quot;)</code> \u5C06\u4F1A\u89E3\u6790\u4E3A <code>workingDir</code> \u5185\u7684 <code>cache</code> \u76EE\u5F55\u3002\u800C <code>File(&quot;C:/cache&quot;)</code> \u5C06\u4F1A\u89E3\u6790\u4E3A\u7EDD\u5BF9\u7684 <code>C:/cache</code> \u76EE\u5F55\u3002</p><p>\u9ED8\u8BA4\u4E3A <code>File(&quot;cache&quot;)</code></p><p>\u8981\u4FEE\u6539\u7F13\u5B58\u76EE\u5F55\uFF08\u81EA mirai 2.4.0\uFF09\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// Kotlin
cacheDir = File(&quot;cache&quot;) // \u6700\u7EC8\u4E3A workingDir \u76EE\u5F55\u4E2D\u7684 cache \u76EE\u5F55
cacheDir = File(&quot;C:/cache&quot;) // \u6700\u7EC8\u4E3A C:/cache

// Java
setCacheDir(new File(&quot;cache&quot;)) // \u6700\u7EC8\u4E3A workingDir \u76EE\u5F55\u4E2D\u7684 cache \u76EE\u5F55
setCacheDir(new File(&quot;C:/cache&quot;)) // \u6700\u7EC8\u4E3A C:/cache
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u76EE\u524D\u7F13\u5B58\u76EE\u5F55\u4F1A\u5B58\u50A8\u5217\u8868\u7F13\u5B58\u3001\u767B\u5F55\u670D\u52A1\u5668\u3001\u8D44\u6E90\u4F1A\u8BDD\u79D8\u94A5\u7B49\u3002\u8FD9\u4E9B\u6570\u636E\u7684\u5B58\u50A8\u65B9\u5F0F\u6709\u53EF\u80FD\u53D8\u5316\uFF0C\u8BF7\u4E0D\u8981\u4FEE\u6539\u7F13\u5B58\u76EE\u5F55\u4E2D\u7684\u6587\u4EF6\u3002</p>`,10),K=n("\u6CE8\u610F\uFF0C"),O=e("code",null,"cacheDir",-1),H=n(" \u4EC5\u5B58\u50A8\u4E0E Bot \u76F8\u5173\u7684\u4E0A\u8FF0\u4FE1\u606F\u3002\u5176\u4ED6\u7684\u5982 "),V=e("code",null,"InputStream",-1),G=n(" \u7684\u7F13\u5B58\u7531 "),W={href:"https://github.com/mamoe/mirai/blob/dev/mirai-core-api/src/commonMain/kotlin/utils/FileCacheStrategy.kt#L55",target:"_blank",rel:"noopener noreferrer"},Y=n("FileCacheStrategy"),z=n(" \u7BA1\u7406\uFF0C\u9ED8\u8BA4\u4F7F\u7528\u7CFB\u7EDF\u4E34\u65F6\u6587\u4EF6\u3002"),Q=a(`<h4 id="\u8BBE\u5907\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u5907\u4FE1\u606F" aria-hidden="true">#</a> \u8BBE\u5907\u4FE1\u606F</h4><p>Bot \u9ED8\u8BA4\u4F7F\u7528\u5168\u968F\u673A\u7684\u8BBE\u5907\u4FE1\u606F\u3002<strong>\u5728\u66F4\u6362\u8D26\u53F7\u5730\u70B9\u65F6\u5019\u4F7F\u7528\u968F\u673A\u8BBE\u5907\u4FE1\u606F\u53EF\u80FD\u4F1A\u5BFC\u81F4\u65E0\u6CD5\u767B\u5F55</strong>\uFF0C\u5F53\u7136\uFF0C<strong>\u6210\u529F\u767B\u5F55\u65F6\u4F7F\u7528\u7684\u8BBE\u5907\u4FE1\u606F\u4E5F\u53EF\u4EE5\u4FDD\u5B58\u540E\u5728\u65B0\u7684\u8BBE\u5907\u4F7F\u7528</strong>\u3002</p><p>\u82E5\u8981\u5728\u670D\u52A1\u5668\u90E8\u7F72\uFF0C\u53EF\u4EE5\u5148\u5728\u672C\u5730\u5B8C\u6210\u767B\u5F55\uFF0C\u518D\u5C06\u8BBE\u5907\u4FE1\u606F\u4E0A\u4F20\u5230\u670D\u52A1\u5668\u3002\u4E00\u4E2A\u8BBE\u5907\u4FE1\u606F\u53EF\u4EE5\u4E00\u76F4\u4F7F\u7528\u3002</p><p>\u8981\u4F7F\u7528 <code>device.json</code> \u5B58\u50A8\u8BBE\u5907\u4FE1\u606F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>fileBasedDeviceInfo() // \u5B58\u50A8\u4E3A &quot;device.json&quot; 
// \u6216
fileBasedDeviceInfo(&quot;myDeviceInfo.json&quot;) // \u5B58\u50A8\u4E3A &quot;myDeviceInfo.json&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8981\u81EA\u5B9A\u4E49\u8BBE\u5907\u4FE1\u606F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// Kotlin
deviceInfo = { bot -&gt;  /* create device info */   }

// Java
setDeviceInfo(bot -&gt; /* create device info */)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u7EBF\u751F\u6210\u81EA\u5B9A\u4E49\u8BBE\u5907\u4FE1\u606F\u7684 <code>device.json</code>: https://ryoii.github.io/mirai-devicejs-generator/</p><h4 id="\u4F7F\u7528\u5176\u4ED6\u65E5\u5FD7\u5E93\u63A5\u7BA1-mirai-\u65E5\u5FD7\u7CFB\u7EDF" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u5176\u4ED6\u65E5\u5FD7\u5E93\u63A5\u7BA1-mirai-\u65E5\u5FD7\u7CFB\u7EDF" aria-hidden="true">#</a> \u4F7F\u7528\u5176\u4ED6\u65E5\u5FD7\u5E93\u63A5\u7BA1 mirai \u65E5\u5FD7\u7CFB\u7EDF</h4><p><em>mirai 2.7 \u8D77\u652F\u6301</em></p>`,10),U=n("\u4F7F\u7528 Log4J, SLF4J \u7B49\u63A5\u7BA1 mirai \u65E5\u5FD7\u7CFB\u7EDF\u540E\u5219\u53EF\u4F7F\u7528\u5B83\u4EEC\u7684\u8FC7\u6EE4\u7B49\u9AD8\u7EA7\u529F\u80FD\u3002\u53C2\u9605 "),X=n("mirai-logging"),Z=n(" \u4EE5\u83B7\u53D6\u66F4\u591A\u4FE1\u606F\u3002"),$=a(`<h4 id="\u91CD\u5B9A\u5411\u65E5\u5FD7" tabindex="-1"><a class="header-anchor" href="#\u91CD\u5B9A\u5411\u65E5\u5FD7" aria-hidden="true">#</a> \u91CD\u5B9A\u5411\u65E5\u5FD7</h4><p>Bot \u6709\u4E24\u4E2A\u65E5\u5FD7\u7C7B\u522B\uFF0C<code>Bot</code> \u6216 <code>Net</code>\u3002<code>Bot</code> \u4E3A\u901A\u5E38\u65E5\u5FD7\uFF0C\u5982\u6536\u5230\u4E8B\u4EF6\u3002<code>Net</code> \u4E3A\u7F51\u7EDC\u65E5\u5FD7\uFF0C\u5305\u542B\u6536\u5230\u548C\u53D1\u51FA\u7684\u6BCF\u4E00\u4E2A\u5305\u548C\u7F51\u7EDC\u5C42\u89E3\u6790\u65F6\u9047\u5230\u7684\u9519\u8BEF\u3002</p><p>\u91CD\u5B9A\u5411\u65E5\u5FD7\u5230\u6587\u4EF6\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>redirectBotLogToFile()
redirectBotLogToDirectory()

redirectNetworkLogToFile()
redirectNetworkLogToDirectory()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5173\u95ED\u65E5\u5FD7(\u5C06\u4F1A\u5B8C\u5168\u7981\u7528\u65E5\u5FD7\u529F\u80FD, \u65E0\u8BBA\u662F\u5426\u5DF2\u7ECF\u901A\u8FC7\u7B2C\u4E09\u65B9\u65E5\u5FD7\u5E93\u63A5\u7BA1\u65E5\u5FD7\u7CFB\u7EDF)\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>noNetworkLog()
noBotLog()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,6),ee=n("\u624B\u52A8\u8986\u76D6\u65E5\u5FD7(\u4E0D\u5EFA\u8BAE"),ne=n("(?)"),ie=n(")\uFF1A"),te=a(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// Kotlin
networkLoggerSupplier = { bot -&gt; /* create logger */ }
botLoggerSupplier = { bot -&gt; /* create logger */ }

// Java
setNetworkLoggerSupplier(bot -&gt; /* create logger */)
setBotLoggerSupplier(bot -&gt; /* create logger */)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u542F\u7528\u5217\u8868\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#\u542F\u7528\u5217\u8868\u7F13\u5B58" aria-hidden="true">#</a> \u542F\u7528\u5217\u8868\u7F13\u5B58</h4><p>Mirai \u5728\u542F\u52A8\u65F6\u4F1A\u62C9\u53D6\u5168\u90E8\u597D\u53CB\u5217\u8868\u548C\u7FA4\u6210\u5458\u5217\u8868\u3002\u5F53\u8D26\u53F7\u62E5\u6709\u8FC7\u591A\u7FA4\u65F6\u767B\u5F55\u53EF\u80FD\u7F13\u6162\uFF0C\u5F00\u542F\u5217\u8868\u7F13\u5B58\u4F1A\u5927\u5E45\u52A0\u901F\u767B\u5F55\u8FC7\u7A0B\u3002</p>`,3),ae=n("Mirai \u81EA\u52A8\u6839\u636E\u4E8B\u4EF6\u66F4\u65B0\u5217\u8868\uFF0C\u5E76\u5728\u6BCF\u6B21\u767B\u5F55\u65F6\u4E0E\u670D\u52A1\u5668\u6821\u9A8C\u7F13\u5B58\u6709\u6548\u6027\uFF0C"),oe=n("\u4F46\u6709\u65F6\u5019\u53EF\u80FD\u53D1\u751F\u610F\u5916\u60C5\u51B5\u5BFC\u81F4\u5217\u8868\u6CA1\u6709\u540C\u6B65\u3002\u5982\u679C\u51FA\u73B0\u627E\u4E0D\u5230\u7FA4\u5458\u6216\u597D\u53CB\u7B49\u4E0D\u540C\u6B65\u60C5\u51B5\uFF0C\u8BF7\u5173\u95ED\u7F13\u5B58\u5E76"),se={href:"https://github.com/mamoe/mirai/issues/new?assignees=&labels=question&template=bug.md",target:"_blank",rel:"noopener noreferrer"},le=n("\u63D0\u4EA4 Bug"),de=a(`<p>\u5EFA\u8BAE\u5728\u6D4B\u8BD5\u73AF\u5883\u4F7F\u7528\u7F13\u5B58\uFF0C\u800C\u5728\u6B63\u5F0F\u73AF\u5883\u5173\u95ED\u7F13\u5B58\uFF08\u9ED8\u8BA4\u5173\u95ED\u7F13\u5B58\uFF09\u3002</p><p>\u8981\u5F00\u542F\u5217\u8868\u7F13\u5B58\uFF08\u81EA mirai 2.4.0\uFF09\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5F00\u542F\u6240\u6709\u5217\u8868\u7F13\u5B58
enableContactCache()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E5F\u53EF\u4EE5\u53EA\u5F00\u542F\u90E8\u5206\u7F13\u5B58\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// Kotlin
contactListCache {
    friendListCacheEnabled = true // \u5F00\u542F\u597D\u53CB\u5217\u8868\u7F13\u5B58
    groupMemberListCacheEnabled = true // \u5F00\u542F\u7FA4\u6210\u5458\u5217\u8868\u7F13\u5B58
    
    saveIntervalMillis = 60_000 // \u53EF\u9009\u8BBE\u7F6E\u6709\u66F4\u65B0\u65F6\u7684\u4FDD\u5B58\u65F6\u95F4\u95F4\u9694, \u9ED8\u8BA4 60 \u79D2
}

// Java
contactListCache.setFriendListCacheEnabled(true) // \u5F00\u542F\u597D\u53CB\u5217\u8868\u7F13\u5B58
contactListCache.setGroupMemberListCacheEnabled(true) // \u5F00\u542F\u7FA4\u6210\u5458\u5217\u8868\u7F13\u5B58
contactListCache.setSaveIntervalMillis(60000) // \u53EF\u9009\u8BBE\u7F6E\u6709\u66F4\u65B0\u65F6\u7684\u4FDD\u5B58\u65F6\u95F4\u95F4\u9694, \u9ED8\u8BA4 60 \u79D2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u66F4\u591A\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u66F4\u591A\u914D\u7F6E" aria-hidden="true">#</a> \u66F4\u591A\u914D\u7F6E</h4><p>\u53C2\u9605 <code>BotConfiguration</code> \u6E90\u7801\u5185\u6CE8\u91CA\u3002</p><h3 id="\u83B7\u53D6\u5F53\u524D\u6240\u6709-bot-\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u5F53\u524D\u6240\u6709-bot-\u5B9E\u4F8B" aria-hidden="true">#</a> \u83B7\u53D6\u5F53\u524D\u6240\u6709 <code>Bot</code> \u5B9E\u4F8B</h3><p>\u5728\u767B\u5F55\u540E <code>Bot</code> \u5B9E\u4F8B\u4F1A\u88AB\u81EA\u52A8\u8BB0\u5F55\u3002\u53EF\u5728 <code>Bot.instances</code> \u83B7\u53D6\u5230\u5F53\u524D<strong>\u5728\u7EBF</strong>\u7684\u6240\u6709 <code>Bot</code> \u5217\u8868\u3002</p><h2 id="_2-\u767B\u5F55" tabindex="-1"><a class="header-anchor" href="#_2-\u767B\u5F55" aria-hidden="true">#</a> 2. \u767B\u5F55</h2><p>\u521B\u5EFA <code>Bot</code> \u540E\u4E0D\u4F1A\u81EA\u52A8\u767B\u5F55\uFF0C\u9700\u8981\u624B\u52A8\u8C03\u7528\u5176 <code>login()</code> \u65B9\u6CD5\u3002\u53EA\u9700\u8981\u8C03\u7528\u4E00\u6B21 <code>login()</code> \u5373\u53EF\uFF0C<code>Bot</code> \u6389\u7EBF\u65F6\u4F1A\u81EA\u52A8\u91CD\u8FDE\u3002</p><h3 id="\u5904\u7406\u6ED1\u52A8\u9A8C\u8BC1\u7801" tabindex="-1"><a class="header-anchor" href="#\u5904\u7406\u6ED1\u52A8\u9A8C\u8BC1\u7801" aria-hidden="true">#</a> \u5904\u7406\u6ED1\u52A8\u9A8C\u8BC1\u7801</h3><p>\u670D\u52A1\u5668\u6B63\u5728\u5927\u529B\u63A8\u5E7F\u6ED1\u5757\u9A8C\u8BC1\u7801\u3002</p>`,13),re=n("\u90E8\u5206\u8D26\u53F7\u53EF\u4EE5\u8DF3\u8FC7\u6ED1\u5757\u9A8C\u8BC1\u7801\uFF0CMirai \u4F1A\u81EA\u52A8\u5C1D\u8BD5\u3002"),ce=e("br",null,null,-1),ue=n(" \u82E5\u4F60\u7684\u8D26\u53F7\u65E0\u6CD5\u8DF3\u8FC7\u9A8C\u8BC1\uFF0C\u53EF\u5728 "),he={href:"https://github.com/project-mirai/mirai-login-solver-selenium",target:"_blank",rel:"noopener noreferrer"},pe=n("project-mirai/mirai-login-solver-selenium"),ve=n(" \u67E5\u770B\u5904\u7406\u65B9\u6848\u3002"),me=n("\u82E5\u9047\u5230\u6ED1\u5757\u9A8C\u8BC1\u95EE\u9898\u65E0\u6CD5\u89E3\u51B3\uFF0C\u53EF\u4EE5\u53C2\u8003"),_e={href:"https://mirai.mamoe.net/topic/223/%E6%97%A0%E6%B3%95%E7%99%BB%E5%BD%95%E7%9A%84%E4%B8%B4%E6%97%B6%E5%A4%84%E7%90%86%E6%96%B9%E6%A1%88",target:"_blank",rel:"noopener noreferrer"},be=n("\u8BBA\u575B\u5E2E\u52A9\u9875\u9762"),ge=n("\u3002"),Ee=e("h3",{id:"\u5E38\u89C1\u767B\u5F55\u5931\u8D25\u539F\u56E0",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u5E38\u89C1\u767B\u5F55\u5931\u8D25\u539F\u56E0","aria-hidden":"true"},"#"),n(" \u5E38\u89C1\u767B\u5F55\u5931\u8D25\u539F\u56E0")],-1),Be=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"\u9519\u8BEF\u4FE1\u606F"),e("th",{style:{"text-align":"left"}},"\u53EF\u80FD\u7684\u539F\u56E0"),e("th",{style:{"text-align":"left"}},"\u53EF\u80FD\u7684\u89E3\u51B3\u65B9\u6848")])],-1),fe=e("tr",null,[e("td",{style:{"text-align":"left"}},"\u5F53\u524D\u7248\u672C\u8FC7\u4F4E"),e("td",{style:{"text-align":"left"}},"\u5BC6\u7801\u9519\u8BEF"),e("td",{style:{"text-align":"left"}},"\u68C0\u67E5\u5BC6\u7801\u6216\u4FEE\u6539\u5BC6\u7801\u5230 16 \u4F4D\u4EE5\u5185")],-1),xe=e("tr",null,[e("td",{style:{"text-align":"left"}},"\u5F53\u524D\u4E0A\u7F51\u73AF\u5883\u5F02\u5E38"),e("td",{style:{"text-align":"left"}},"\u8BBE\u5907\u9501"),e("td",{style:{"text-align":"left"}},"\u5F00\u542F\u6216\u5173\u95ED\u8BBE\u5907\u9501 (\u767B\u5F55\u4FDD\u62A4)")],-1),ke=e("td",{style:{"text-align":"left"}},"\u7981\u6B62\u767B\u5F55",-1),Ae=e("td",{style:{"text-align":"left"}},"\u9700\u8981\u5904\u7406\u6ED1\u5757\u9A8C\u8BC1\u7801",-1),De={style:{"text-align":"left"}},Ce={href:"https://github.com/project-mirai/mirai-login-solver-selenium",target:"_blank",rel:"noopener noreferrer"},ye=n("project-mirai/mirai-login-solver-selenium"),qe=e("td",{style:{"text-align":"left"}},"\u5BC6\u7801\u9519\u8BEF",-1),we=e("td",{style:{"text-align":"left"}},"\u5BC6\u7801\u9519\u8BEF\u6216\u8FC7\u957F",-1),Fe={style:{"text-align":"left"}},Le=n("\u624B\u673A\u534F\u8BAE\u6700\u5927\u652F\u6301 16 \u4F4D\u5BC6\u7801 ("),Se={href:"https://github.com/mamoe/mirai/discussions/993",target:"_blank",rel:"noopener noreferrer"},Ie=n("#993"),Ne=n("). \u5728\u5B98\u65B9 PC \u5BA2\u6237\u7AEF\u767B\u5F55\u540E\u4FEE\u6539\u5BC6\u7801"),Me=e("p",null,[n("\u82E5\u4EE5\u4E0A\u65B9\u6848\u65E0\u6CD5\u89E3\u51B3\u95EE\u9898\uFF0C\u8BF7\u5C1D\u8BD5 "),e("a",{href:"#%E5%88%87%E6%8D%A2%E7%99%BB%E5%BD%95%E5%8D%8F%E8%AE%AE"},"\u5207\u6362\u767B\u5F55\u534F\u8BAE"),n(" \u548C "),e("strong",null,[e("a",{href:"#%E5%A4%84%E7%90%86%E6%BB%91%E5%8A%A8%E9%AA%8C%E8%AF%81%E7%A0%81"},"\u5904\u7406\u6ED1\u52A8\u9A8C\u8BC1\u7801")]),n("\u3002")],-1),Te=n("\u4E0B\u4E00\u6B65\uFF0C"),Re=n("Contacts"),Je=n("\u56DE\u5230 Mirai \u6587\u6863\u7D22\u5F15"),Pe=e("h2",{id:"\u9644\u5F55-\u8C03\u8BD5\u7F51\u7EDC\u5C42",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u9644\u5F55-\u8C03\u8BD5\u7F51\u7EDC\u5C42","aria-hidden":"true"},"#"),n(" \u9644\u5F55: \u8C03\u8BD5\u7F51\u7EDC\u5C42")],-1),je=n("\u53C2\u9605 "),Ke=n("DebuggingNetwork.md"),Oe=n("\u4E0B\u4E00\u6B65\uFF0C"),He=n("Contacts"),Ve=n("\u56DE\u5230 Mirai \u6587\u6863\u7D22\u5F15");function Ge(We,Ye){const t=l("ExternalLinkIcon"),o=l("RouterLink");return r(),c("div",null,[h,e("p",null,[p,v,m,_,b,g,E,e("a",B,[f,i(t)]),x,k,A]),D,e("blockquote",null,[e("p",null,[C,e("a",y,[q,i(t)])])]),w,e("blockquote",null,[e("p",null,[F,e("a",L,[S,i(t)]),I])]),N,e("blockquote",null,[e("p",null,[M,T,R,e("a",J,[P,i(t)])])]),j,e("p",null,[K,O,H,V,G,e("a",W,[Y,i(t)]),z]),Q,e("p",null,[U,i(o,{to:"/logging/"},{default:s(()=>[X]),_:1}),Z]),$,e("p",null,[ee,i(o,{to:"/logging/"},{default:s(()=>[ne]),_:1}),ie]),te,e("p",null,[ae,e("strong",null,[oe,e("a",se,[le,i(t)])])]),de,e("p",null,[re,ce,ue,e("a",he,[pe,i(t)]),ve]),e("p",null,[e("strong",null,[me,e("a",_e,[be,i(t)]),ge])]),Ee,e("table",null,[Be,e("tbody",null,[fe,xe,e("tr",null,[ke,Ae,e("td",De,[e("a",Ce,[ye,i(t)])])]),e("tr",null,[qe,we,e("td",Fe,[Le,e("a",Se,[Ie,i(t)]),Ne])])])]),Me,e("blockquote",null,[e("p",null,[Te,i(o,{to:"/Contacts.html"},{default:s(()=>[Re]),_:1})]),e("p",null,[i(o,{to:"/CoreAPI.html"},{default:s(()=>[Je]),_:1})])]),Pe,e("p",null,[je,i(o,{to:"/DebuggingNetwork.html"},{default:s(()=>[Ke]),_:1})]),e("blockquote",null,[e("p",null,[Oe,i(o,{to:"/Contacts.html"},{default:s(()=>[He]),_:1})]),e("p",null,[i(o,{to:"/CoreAPI.html"},{default:s(()=>[Ve]),_:1})])])])}var Qe=d(u,[["render",Ge],["__file","Bots.html.vue"]]);export{Qe as default};
