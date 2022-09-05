import{_ as n,o as a,c as s,d as e}from"./app.3e40e028.js";const t={},i=e(`<h1 id="mirai-using-snapshots" tabindex="-1"><a class="header-anchor" href="#mirai-using-snapshots" aria-hidden="true">#</a> Mirai - Using Snapshots</h1><p>\u6BCF\u4E2A commit \u5728\u6784\u5EFA\u6210\u529F\u540E\u90FD\u4F1A\u53D1\u5E03\u4E00\u4E2A\u5F00\u53D1\u6D4B\u8BD5\u7248\u672C\u5230 mirai \u4ED3\u5E93\u3002\u5982\u6709\u9700\u8981\uFF0C\u53EF\u6DFB\u52A0\u4ED3\u5E93\u5E76\u4F7F\u7528\u3002\u5F00\u53D1\u6D4B\u8BD5\u7248\u672C\u975E\u5E38\u4E0D\u7A33\u5B9A\uFF0C\u4EC5\u7528\u4E8E\u6D4B\u8BD5\u67D0 commit \u5BF9\u4E00\u4E2A\u95EE\u9898\u7684\u4FEE\u590D\u60C5\u51B5\uFF0C\u800C\u4E0D\u5EFA\u8BAE\u5728\u751F\u4EA7\u6216\u5F00\u53D1\u73AF\u5883\u4F7F\u7528\u3002</p><p>\u6BCF\u4E2A\u5F00\u53D1\u6D4B\u8BD5\u7248\u672C\u53EA\u4FDD\u7559\u4E00\u4E2A\u6708\u3002</p><ul><li><a href="#%E5%9C%A8-maven-%E4%BD%BF%E7%94%A8">\u5728 Maven \u4F7F\u7528</a></li><li><a href="#%E5%9C%A8-gradle-%E4%BD%BF%E7%94%A8">\u5728 Gradle \u4F7F\u7528</a></li></ul><h2 id="\u5728-maven-\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u5728-maven-\u4F7F\u7528" aria-hidden="true">#</a> \u5728 Maven \u4F7F\u7528</h2><h3 id="_1-\u6DFB\u52A0-maven-\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#_1-\u6DFB\u52A0-maven-\u4ED3\u5E93" aria-hidden="true">#</a> 1. \u6DFB\u52A0 Maven \u4ED3\u5E93</h3><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>repositories</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>repository</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>miraisnapshots<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>mirai snapshots<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">&gt;</span></span>https://repo.mirai.mamoe.net/snapshots<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>repository</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>repositories</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-\u4FEE\u6539\u4F9D\u8D56\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#_2-\u4FEE\u6539\u4F9D\u8D56\u7248\u672C" aria-hidden="true">#</a> 2. \u4FEE\u6539\u4F9D\u8D56\u7248\u672C</h3><ol><li>\u9009\u62E9\u9700\u8981\u6D4B\u8BD5\u7684 commit, \u627E\u5230\u5176 revision id (\u5373 SHA), \u53D6\u524D 8 \u4F4D, \u5982 <code>3cb39c4</code>.</li><li>\u5728\u8BE5 commit \u6240\u5C5E\u5206\u652F\u7684 <code>buildSrc/src/main/kotlin/Versions.kt</code> \u786E\u8BA4 mirai \u4E3B\u7248\u672C\u53F7\u5982 <code>2.8.0-M1</code>.</li><li>\u5F97\u5230\u5F00\u53D1\u6D4B\u8BD5\u7248\u672C\u53F7 <code>2.8.0-M1-dev-3cb39c4</code>.</li></ol><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>net.mamoe<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mirai-core-jvm<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.8.0-M1-dev-3cb39c4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5728-gradle-\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u5728-gradle-\u4F7F\u7528" aria-hidden="true">#</a> \u5728 Gradle \u4F7F\u7528</h2><h3 id="_1-\u6DFB\u52A0-maven-\u4ED3\u5E93-1" tabindex="-1"><a class="header-anchor" href="#_1-\u6DFB\u52A0-maven-\u4ED3\u5E93-1" aria-hidden="true">#</a> 1. \u6DFB\u52A0 Maven \u4ED3\u5E93</h3><p>build.gradle(.kts)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>repositories {
   maven(&quot;https://repo.mirai.mamoe.net/snapshots&quot;) 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-\u4FEE\u6539\u4F9D\u8D56\u7248\u672C-1" tabindex="-1"><a class="header-anchor" href="#_2-\u4FEE\u6539\u4F9D\u8D56\u7248\u672C-1" aria-hidden="true">#</a> 2. \u4FEE\u6539\u4F9D\u8D56\u7248\u672C</h3><ol><li>\u9009\u62E9\u9700\u8981\u6D4B\u8BD5\u7684 commit, \u627E\u5230\u5176 revision id (\u5373 SHA), \u53D6\u524D 8 \u4F4D, \u5982 <code>3cb39c4</code>.</li><li>\u5728\u8BE5 commit \u6240\u5C5E\u5206\u652F\u7684 <code>buildSrc/src/main/kotlin/Versions.kt</code> \u786E\u8BA4 mirai \u4E3B\u7248\u672C\u53F7\u5982 <code>2.8.0-M1</code>.</li><li>\u5F97\u5230\u5F00\u53D1\u6D4B\u8BD5\u7248\u672C\u53F7 <code>2.8.0-M1-dev-3cb39c4</code>.</li></ol><p>build.gradle(.kts)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>dependencies {
    implementation(&quot;net.mamoe:mirai-core:2.8.0-M1-dev-3cb39c4&quot;)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4F7F\u7528\u6D4B\u8BD5\u7248\u672C-mirai-console-gradle-\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u6D4B\u8BD5\u7248\u672C-mirai-console-gradle-\u63D2\u4EF6" aria-hidden="true">#</a> \u4F7F\u7528\u6D4B\u8BD5\u7248\u672C Mirai Console Gradle \u63D2\u4EF6</h2><p>settings.gradle(.kts)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>pluginManagement {
    repositories {
        gradlePluginPortal()
        maven(&quot;https://repo.mirai.mamoe.net/snapshots&quot;)
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>plugin.gradle(.kts)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>plugins {
    // ...
    id(&quot;net.mamoe.mirai-console&quot;) version &quot;2.8.0-M1-dev-3cb39c4&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23),l=[i];function c(p,o){return a(),s("div",null,l)}var r=n(t,[["render",c],["__file","UsingSnapshots.html.vue"]]);export{r as default};
