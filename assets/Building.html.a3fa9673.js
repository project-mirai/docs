import{_ as s,o as n,c as d,a as r,b as l,w as o,d as a,e,r as c}from"./app.a915e9c1.js";var t="/assets/run-gradle-tasks-in-idea.76e8ba16.png";const h={},m=a(`<h1 id="\u6784\u5EFA" tabindex="-1"><a class="header-anchor" href="#\u6784\u5EFA" aria-hidden="true">#</a> \u6784\u5EFA</h1><p>\u672C\u6587\u4ECB\u7ECD\u5982\u4F55\u6784\u5EFA mirai \u7684\u5404\u6A21\u5757\u3002</p><h2 id="\u6784\u5EFA-jvm-\u76EE\u6807\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u6784\u5EFA-jvm-\u76EE\u6807\u9879\u76EE" aria-hidden="true">#</a> \u6784\u5EFA JVM \u76EE\u6807\u9879\u76EE</h2><p>\u8981\u6784\u5EFA\u53EA\u6709 JVM \u76EE\u6807\u7684\u9879\u76EE\uFF08\u5982 <code>mirai-console</code>\uFF0C\u53EA\u9700\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4F7F\u7528\u5982\u4E0B\u547D\u4EE4\u6267\u884C Gradle \u4EFB\u52A1\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ ./gradlew :mirai-console:assemble <span class="token comment"># \u7F16\u8BD1</span>
$ ./gradlew :mirai-console:check <span class="token comment"># \u6D4B\u8BD5</span>
$ ./gradlew :mirai-console:build <span class="token comment"># \u7F16\u8BD1\u548C\u6D4B\u8BD5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u4E2D <code>:mirai-console</code> \u662F\u76EE\u6807\u9879\u76EE\u7684\u8DEF\u5F84\uFF08path\uFF09\u3002</p><p>\u4F60\u4E5F\u53EF\u4EE5\u5728 IDEA \u7B49\u6709 Gradle \u652F\u6301\u7684 IDE \u4E2D\u5728\u901A\u8FC7\u4FA7\u8FB9\u680F\u7B49\u65B9\u5F0F\u9009\u62E9\u9879\u76EE\u7684 <code>assemble</code> \u7B49\u4EFB\u52A1\uFF1A</p><p><img src="`+t+`" alt=""></p><h3 id="\u83B7\u5F97-mirai-console-jar" tabindex="-1"><a class="header-anchor" href="#\u83B7\u5F97-mirai-console-jar" aria-hidden="true">#</a> \u83B7\u5F97 mirai-console JAR</h3><p>\u5728\u9879\u76EE\u6839\u76EE\u5F55\u6267\u884C\u5982\u4E0B\u547D\u4EE4\u53EF\u4EE5\u83B7\u5F97\u5305\u542B\u4F9D\u8D56\u7684 mirai-console JAR\u3002\u5BF9\u4E8E\u5176\u4ED6\u6A21\u5757\u7C7B\u4F3C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ ./gradlew :mirai-console:shadowJar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u6784\u5EFA\u591A\u5E73\u53F0\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u6784\u5EFA\u591A\u5E73\u53F0\u9879\u76EE" aria-hidden="true">#</a> \u6784\u5EFA\u591A\u5E73\u53F0\u9879\u76EE</h2>`,12),u=e("core \u662F\u591A\u5E73\u53F0\u9879\u76EE\u3002\u8BF7\u53C2\u8003 "),p=e("\u6784\u5EFA Core"),b=e("\u3002"),v=a(`<h2 id="\u6784\u5EFA-intellij-\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6784\u5EFA-intellij-\u63D2\u4EF6" aria-hidden="true">#</a> \u6784\u5EFA IntelliJ \u63D2\u4EF6</h2><p>\u53EF\u901A\u8FC7\u5982\u4E0B\u547D\u4EE4\u6784\u5EFA IntelliJ \u5E73\u53F0 IDE \u7684\u63D2\u4EF6\u3002\u6784\u5EFA\u6210\u529F\u7684\u63D2\u4EF6\u5C06\u53EF\u4EE5\u5728 <code>mirai-console/tools/intellij-plugin/build/distribution</code> \u4E2D\u627E\u5230\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ ./graldew :mirai-console-intellij:buidlPlugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3);function _(g,f){const i=c("RouterLink");return n(),d("div",null,[m,r("p",null,[u,l(i,{to:"/contributing/BuildingCore.html"},{default:o(()=>[p]),_:1}),b]),v])}var k=s(h,[["render",_],["__file","Building.html.vue"]]);export{k as default};
