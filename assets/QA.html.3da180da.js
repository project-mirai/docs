import{_ as n,o as s,c as a,d as e}from"./app.fbba729f.js";const t={},i=e(`<h1 id="q-a" tabindex="-1"><a class="header-anchor" href="#q-a" aria-hidden="true">#</a> Q&amp;A</h1><h2 id="\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u63D2\u4EF6" aria-hidden="true">#</a> \u63D2\u4EF6</h2><h3 id="\u4F7F\u7528-autoservice" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-autoservice" aria-hidden="true">#</a> \u4F7F\u7528 AutoService</h3><p>\u5728 <code>build.gradle.kts</code> \u6DFB\u52A0:</p><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code>plugins <span class="token punctuation">{</span>
  <span class="token function">kotlin</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;kapt&quot;</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
dependencies <span class="token punctuation">{</span>
  <span class="token keyword">val</span> autoService <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">&quot;1.0-rc7&quot;</span></span>
  <span class="token function">kapt</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;com.google.auto.service&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">&quot;auto-service&quot;</span></span><span class="token punctuation">,</span> autoService<span class="token punctuation">)</span>
  <span class="token function">compileOnly</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;com.google.auto.service&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">&quot;auto-service-annotations&quot;</span></span><span class="token punctuation">,</span> autoService<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>\u5BF9\u4E8E <code>build.gradle</code> \u7528\u6237, \u8BF7\u81EA\u884C\u6309\u7167 Groovy DSL \u8BED\u6CD5\u7FFB\u8BD1</em></p><h3 id="\u4E3A\u4EC0\u4E48\u4E0D\u652F\u6301\u70ED\u52A0\u8F7D\u548C\u5378\u8F7D\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u4E0D\u652F\u6301\u70ED\u52A0\u8F7D\u548C\u5378\u8F7D\u63D2\u4EF6" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u4E0D\u652F\u6301\u70ED\u52A0\u8F7D\u548C\u5378\u8F7D\u63D2\u4EF6\uFF1F</h3><p>\u5728\u70ED\u52A0\u8F7D\u8FC7\u7A0B\u5BB9\u6613\u4EA7\u751F\u51B2\u7A81\u60C5\u51B5\uFF1B<br> \u5378\u8F7D\u65F6\u4E0D\u5BB9\u6613\u5B8C\u5168\u5378\u8F7D\u6240\u6709\u9759\u6001\u5BF9\u8C61\u3002</p><p>\u4E3A\u4E86\u907F\u514D\u8FD9\u4E9B\u9EBB\u70E6\uFF0CMirai Console \u8BA4\u4E3A\u6CA1\u6709\u652F\u6301\u70ED\u52A0\u8F7D\u548C\u70ED\u5378\u8F7D\u7684\u5FC5\u8981\u3002</p>`,9),o=[i];function l(c,p){return s(),a("div",null,o)}var u=n(t,[["render",l],["__file","QA.html.vue"]]);export{u as default};
