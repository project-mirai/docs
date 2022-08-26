import{_ as r,r as l,o as c,c as d,a as n,b as e,w as o,e as a,d as s}from"./app.db6a6e64.js";const p={},u=n("h1",{id:"mirai-console-run",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mirai-console-run","aria-hidden":"true"},"#"),a(" Mirai Console - Run")],-1),m=n("p",null,"Mirai Console \u53EF\u4EE5\u72EC\u7ACB\u542F\u52A8\uFF0C\u4E5F\u53EF\u4EE5\u88AB\u5D4C\u5165\u5230\u67D0\u4E2A\u5E94\u7528\u4E2D\u3002",-1),h=n("h2",{id:"\u4F7F\u7528\u5DE5\u5177\u81EA\u52A8\u72EC\u7ACB\u542F\u52A8",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4F7F\u7528\u5DE5\u5177\u81EA\u52A8\u72EC\u7ACB\u542F\u52A8","aria-hidden":"true"},"#"),a(" \u4F7F\u7528\u5DE5\u5177\u81EA\u52A8\u72EC\u7ACB\u542F\u52A8")],-1),v=a("\u8BE5\u90E8\u5206\u6587\u6863\u5DF2\u7ECF\u8F6C\u79FB\u5230 "),b=a("\u7528\u6237\u624B\u518C"),k=a("\u3002"),g=s('<h2 id="\u5D4C\u5165\u5E94\u7528\u542F\u52A8-\u5B9E\u9A8C\u6027" tabindex="-1"><a class="header-anchor" href="#\u5D4C\u5165\u5E94\u7528\u542F\u52A8-\u5B9E\u9A8C\u6027" aria-hidden="true">#</a> \u5D4C\u5165\u5E94\u7528\u542F\u52A8\uFF08\u5B9E\u9A8C\u6027\uFF09</h2><p>\u5C06 Mirai Console \u4F5C\u4E3A\u4E00\u4E2A\u4F9D\u8D56\u5D4C\u5165\u4E00\u4E2A JVM \u5E94\u7528\u542F\u52A8\uFF0C\u5F00\u53D1\u8005\u4E3B\u52A8\u52A0\u8F7D\u63D2\u4EF6\u3002\u5C24\u5176\u9002\u5408\u5728\u5F00\u53D1\u65F6\u542F\u52A8\u771F\u5B9E\u73AF\u5883\u7684\u6D4B\u8BD5\u3002</p><h3 id="\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883" aria-hidden="true">#</a> \u73AF\u5883</h3><ul><li>JDK 1.8+ / Android SDK 26+ (Android 8+)</li><li>Kotlin 1.4+</li></ul><h3 id="\u6DFB\u52A0\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u4F9D\u8D56" aria-hidden="true">#</a> \u6DFB\u52A0\u4F9D\u8D56</h3>',5),_=a("\u9009\u62E9\u7248\u672C"),f=s(`<p><code>build.gradle.kts</code>:</p><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code>dependencies <span class="token punctuation">{</span>
    <span class="token function">api</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;net.mamoe:mirai-console-terminal:2.0.0&quot;</span></span><span class="token punctuation">)</span> <span class="token comment">// \u81EA\u884C\u66FF\u6362\u7248\u672C</span>
    <span class="token function">api</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;net.mamoe:mirai-core:2.0.0&quot;</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u542F\u52A8-terminal-\u524D\u7AEF" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8-terminal-\u524D\u7AEF" aria-hidden="true">#</a> \u542F\u52A8 Terminal \u524D\u7AEF</h3><p>\u4E00\u884C\u542F\u52A8\uFF1A</p><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code>MiraiConsoleTerminalLoader<span class="token punctuation">.</span><span class="token function">startAsDaemon</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6CE8\u610F, Mirai Console \u5C06\u4F1A\u4EE5 &#39;\u5B88\u62A4\u8FDB\u7A0B&#39; \u5F62\u5F0F\u542F\u52A8\uFF0C\u4E0D\u4F1A\u963B\u6B62\u4E3B\u7EBF\u7A0B\u9000\u51FA\u3002</p><h3 id="\u4ECE\u5185\u5B58\u52A0\u8F7D-jvm-\u63D2\u4EF6-\u5B9E\u9A8C\u6027" tabindex="-1"><a class="header-anchor" href="#\u4ECE\u5185\u5B58\u52A0\u8F7D-jvm-\u63D2\u4EF6-\u5B9E\u9A8C\u6027" aria-hidden="true">#</a> \u4ECE\u5185\u5B58\u52A0\u8F7D JVM \u63D2\u4EF6\uFF08\u5B9E\u9A8C\u6027\uFF09</h3><p>\u5728\u5D4C\u5165\u4F7F\u7528\u65F6\uFF0C\u63D2\u4EF6\u53EF\u4EE5\u76F4\u63A5\u52A0\u8F7D\uFF1A</p><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code>MiraiConsoleTerminalLoader<span class="token punctuation">.</span><span class="token function">startAsDaemon</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// \u5148\u542F\u52A8 Mirai Console</span>

<span class="token comment">// Kotlin</span>
Plugin<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u6269\u5C55\u51FD\u6570</span>
Plugin<span class="token punctuation">.</span><span class="token function">enable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u6269\u5C55\u51FD\u6570 </span>

<span class="token comment">// Java</span>
PluginManager<span class="token punctuation">.</span>INSTANCE<span class="token punctuation">.</span><span class="token function">loadPlugin</span><span class="token punctuation">(</span>Plugin<span class="token punctuation">.</span>INSTANCE<span class="token punctuation">)</span>
PluginManager<span class="token punctuation">.</span>INSTANCE<span class="token punctuation">.</span><span class="token function">enablePlugin</span><span class="token punctuation">(</span>Plugin<span class="token punctuation">.</span>INSTANCE<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F46\u6CE8\u610F\uFF1A\u8FD9\u79CD\u65B9\u6CD5\u76EE\u524D\u662F\u5B9E\u9A8C\u6027\u7684\u2014\u2014\u4E00\u4E9B\u7279\u5B9A\u7684\u529F\u80FD\u5982\u6CE8\u518C\u6269\u5C55\u53EF\u80FD\u4E0D\u4F1A\u6B63\u5E38\u5DE5\u4F5C\u3002</p><h2 id="\u624B\u52A8\u914D\u7F6E\u72EC\u7ACB\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#\u624B\u52A8\u914D\u7F6E\u72EC\u7ACB\u542F\u52A8" aria-hidden="true">#</a> \u624B\u52A8\u914D\u7F6E\u72EC\u7ACB\u542F\u52A8</h2><p>\u5F3A\u70C8\u5EFA\u8BAE\u4F7F\u7528\u81EA\u52A8\u542F\u52A8\u5DE5\u5177\uFF0C\u82E5\u65E0\u6CD5\u4F7F\u7528\uFF0C\u53EF\u4EE5\u53C2\u8003\u5982\u4E0B\u624B\u52A8\u542F\u52A8\u65B9\u5F0F\u3002</p><h3 id="\u73AF\u5883-1" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883-1" aria-hidden="true">#</a> \u73AF\u5883</h3><ul><li>JRE 8+ / JDK 8+</li></ul><h3 id="\u51C6\u5907\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u51C6\u5907\u6587\u4EF6" aria-hidden="true">#</a> \u51C6\u5907\u6587\u4EF6</h3><p>\u8981\u542F\u52A8 Mirai Console\uFF0C\u4F60\u9700\u8981\uFF1A</p><ul><li>mirai-core</li><li>mirai-console \u540E\u7AEF</li><li>mirai-console \u4EFB\u4E00\u524D\u7AEF</li><li>\u76F8\u5173\u4F9D\u8D56</li></ul><p>\u53EA\u6709 mirai-console \u524D\u7AEF\u624D\u6709\u5165\u53E3\u70B9 <code>main</code> \u65B9\u6CD5\u3002\u76EE\u524D\u53EA\u6709\u4E00\u4E2A terminal \u524D\u7AEF\u53EF\u7528\u3002</p><h4 id="\u4ECE-jcenter-\u4E0B\u8F7D\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u4ECE-jcenter-\u4E0B\u8F7D\u6A21\u5757" aria-hidden="true">#</a> \u4ECE JCenter \u4E0B\u8F7D\u6A21\u5757</h4>`,19),x=a("mirai-core \u4F1A\u63D0\u4F9B "),C={href:"https://repo.maven.apache.org/maven2/net/mamoe/mirai-core-all/",target:"_blank",rel:"noopener noreferrer"},M=a("mirai-core-all"),E=n("li",null,[a("mirai-console \u4E0E\u5176\u5404\u4E2A\u6A21\u5757\u90FD\u4F1A\u63D0\u4F9B "),n("code",null,"-all"),a(" \u7684 Shadowed \u6784\u5EFA")],-1),j=s(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6CE8: \u81EA\u884C\u66F4\u6362\u5BF9\u5E94\u7248\u672C\u53F7</span>

<span class="token comment"># Download mirai-core-all</span>

<span class="token function">curl</span> -L https://maven.aliyun.com/repository/central/net/mamoe/mirai-core-all/1.3.3/mirai-core-all-1.3.3-all.jar -o mirai-core-all-1.3.3.jar

<span class="token comment"># Download mirai-console</span>

<span class="token function">curl</span> -L https://maven.aliyun.com/repository/central/net/mamoe/mirai-console/1.0.0/mirai-console-1.0.0-all.jar -o mirai-console-1.0.0.jar

<span class="token comment"># Download mirai-console-terminal</span>

<span class="token function">curl</span> -L https://maven.aliyun.com/repository/central/net/mamoe/mirai-console-terminal/1.0.0/mirai-console-terminal-1.0.0-all.jar -o mirai-console-terminal-1.0.0.jar

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u542F\u52A8-mirai-console-terminal-\u524D\u7AEF" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8-mirai-console-terminal-\u524D\u7AEF" aria-hidden="true">#</a> \u542F\u52A8 mirai-console-terminal \u524D\u7AEF</h3><ol><li><p>\u4E0B\u8F7D\u5982\u4E0B\u4E09\u4E2A\u6A21\u5757\u7684\u6700\u65B0\u7248\u672C\u6587\u4EF6\u5E76\u653E\u5230\u4E00\u4E2A\u6587\u4EF6\u5939\u5185 (\u5982 <code>libs</code>)(\u8BE6\u89C1 <a href="#%E4%BB%8E-jcenter-%E4%B8%8B%E8%BD%BD%E6%A8%A1%E5%9D%97">\u4E0B\u8F7D\u6A21\u5757</a>)\uFF1A</p><ul><li>mirai-core-all</li><li>mirai-console</li><li>mirai-console-terminal</li></ul></li><li><p>\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u6587\u4EF6, \u540D\u4E3A <code>start-mirai-console.bat</code>/<code>start-mirai-console.ps1</code>/<code>start-mirai-console.sh</code></p></li></ol><p>Windows CMD:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>@echo off
title Mirai Console
java -cp <span class="token string">&quot;./libs/*&quot;</span> net.mamoe.mirai.console.terminal.MiraiConsoleTerminalLoader %*
pause
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Windows PowerShell:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$Host</span>.UI.RawUI.WindowTitle <span class="token operator">=</span> <span class="token string">&quot;Mirai Console&quot;</span>
java -cp <span class="token string">&quot;./libs/*&quot;</span> net.mamoe.mirai.console.terminal.MiraiConsoleTerminalLoader <span class="token variable">$args</span>
pause
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Linux:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env bash</span>
<span class="token builtin class-name">echo</span> -e <span class="token string">&#39;\\033]2;Mirai Console\\007&#39;</span>
java -cp <span class="token string">&quot;./libs/*&quot;</span> net.mamoe.mirai.console.terminal.MiraiConsoleTerminalLoader <span class="token variable">$*</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u5C31\u53EF\u4EE5\u5F00\u59CB\u4F7F\u7528 mirai-console \u4E86\u3002</p><h4 id="mirai-console-terminal-\u524D\u7AEF\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#mirai-console-terminal-\u524D\u7AEF\u53C2\u6570" aria-hidden="true">#</a> mirai-console-terminal \u524D\u7AEF\u53C2\u6570</h4><p>\u4F7F\u7528 <code>./start-mirai-console --help</code> \u67E5\u770B mirai-console-terminal \u652F\u6301\u7684\u542F\u52A8\u53C2\u6570\u3002</p>`,12);function L(q,A){const i=l("RouterLink"),t=l("ExternalLinkIcon");return c(),d("div",null,[u,m,h,n("p",null,[v,e(i,{to:"/UserManual.html"},{default:o(()=>[b]),_:1}),k]),g,n("p",null,[e(i,{to:"/console/ConfiguringProjects.html#%E9%80%89%E6%8B%A9%E7%89%88%E6%9C%AC"},{default:o(()=>[_]),_:1})]),f,n("ul",null,[n("li",null,[x,n("a",C,[M,e(t)])]),E]),j])}var N=r(p,[["render",L],["__file","Run.html.vue"]]);export{N as default};
