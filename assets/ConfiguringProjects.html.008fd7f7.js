import{_ as p,r as l,o as c,c as r,a as n,b as a,w as o,e as s,d as i}from"./app.33d591fd.js";const u={},d=n("h1",{id:"mirai-configuring-projects",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mirai-configuring-projects","aria-hidden":"true"},"#"),s(" Mirai - Configuring Projects")],-1),k=n("p",null,"\u672C\u6587\u4ECB\u7ECD\u5982\u4F55\u5728\u4E00\u4E2A JVM \u9879\u76EE\u4E2D\u4F7F\u7528 mirai\u3002",-1),g=s("\u5177\u4F53\u9879\u76EE\u53EF\u53C2\u8003 "),m={href:"https://github.com/project-mirai/mirai-hello-world",target:"_blank",rel:"noopener noreferrer"},v=s("mirai-hello-world"),h=s("\u3002"),_=n("h3",{id:"\u9009\u62E9\u7248\u672C",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u9009\u62E9\u7248\u672C","aria-hidden":"true"},"#"),s(" \u9009\u62E9\u7248\u672C")],-1),b=s("\u6709\u5173\u5404\u7C7B\u7248\u672C\u7684\u533A\u522B\uFF0C\u53C2\u8003 "),f=s("\u7248\u672C\u89C4\u8303"),E=s("\u3002\u901A\u5E38\u5EFA\u8BAE\u9009\u62E9\u6700\u65B0\u7A33\u5B9A\u7248\u672C\u3002"),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"\u7248\u672C\u7C7B\u578B"),n("th",{style:{"text-align":"center"}},"\u7248\u672C\u53F7\u94FE\u63A5")])],-1),q=n("td",{style:{"text-align":"center"}},"\u7A33\u5B9A",-1),B={style:{"text-align":"center"}},y={href:"https://github.com/mamoe/mirai/releases/latest",target:"_blank",rel:"noopener noreferrer"},j=s("GitHub Releases"),C=n("td",{style:{"text-align":"center"}},"\u9884\u89C8",-1),A={style:{"text-align":"center"}},I={href:"https://github.com/mamoe/mirai/releases/",target:"_blank",rel:"noopener noreferrer"},M=s("GitHub Releases"),F=n("td",{style:{"text-align":"center"}},"\u5F00\u53D1",-1),D={style:{"text-align":"center"}},K=s("UsingSnapshots"),w=i(`<h3 id="\u914D\u7F6E\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u9879\u76EE" aria-hidden="true">#</a> \u914D\u7F6E\u9879\u76EE</h3><p>\u672C\u6587\u63D0\u4F9B\u5982\u4E0B\u4E09\u79CD\u914D\u7F6E\u65B9\u6CD5\u3002\u63A8\u8350\u4F7F\u7528 Gradle \u6784\u5EFA\u3002</p><p><strong>\u6CE8\u610F\uFF0C\u4E0B\u6587\u7248\u672C\u53F7\u53EF\u80FD\u8FC7\u65E7\uFF0C\u8BF7\u81EA\u884C\u53C2\u7167\u4E0A\u8FF0\u8868\u683C\u66F4\u65B0\u7248\u672C\u53F7</strong></p><ul><li><a href="#a-%E4%BD%BF%E7%94%A8-gradle">A. \u4F7F\u7528 Gradle</a></li><li><a href="#b-%E4%BD%BF%E7%94%A8-maven">B. \u4F7F\u7528 Maven</a></li><li><a href="#c-%E4%B8%8B%E8%BD%BD-jar-%E5%8C%85">C. \u4E0B\u8F7D JAR \u5305</a></li></ul><h2 id="a-\u4F7F\u7528-gradle" tabindex="-1"><a class="header-anchor" href="#a-\u4F7F\u7528-gradle" aria-hidden="true">#</a> A. \u4F7F\u7528 Gradle</h2><h3 id="gradle-kotlin-dsl" tabindex="-1"><a class="header-anchor" href="#gradle-kotlin-dsl" aria-hidden="true">#</a> Gradle Kotlin DSL</h3><p>\u5728 <code>build.gradle.kts</code> \u6DFB\u52A0\uFF1A</p><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code>plugins <span class="token punctuation">{</span>
    <span class="token function">kotlin</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;jvm&quot;</span></span><span class="token punctuation">)</span> version <span class="token string-literal singleline"><span class="token string">&quot;1.5.30&quot;</span></span> <span class="token comment">// \u786E\u4FDD\u6DFB\u52A0 Kotlin</span>
<span class="token punctuation">}</span>

dependencies <span class="token punctuation">{</span>
    <span class="token function">api</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;net.mamoe&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">&quot;mirai-core&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">&quot;2.9.1&quot;</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6CE8\u610F\uFF0C\u5FC5\u987B\u6DFB\u52A0 Kotlin \u63D2\u4EF6\u624D\u80FD\u6B63\u786E\u83B7\u53D6 mirai \u8F6F\u4EF6\u5305\u3002</strong></p>`,9),G=n("p",null,"\u4F9D\u8D56\u914D\u7F6E\u5B8C\u6210\uFF0C\u8BF7\u9009\u62E9\uFF1A",-1),V=n("li",null,[n("a",{href:"#%E5%88%86%E7%A6%BB-api-%E5%92%8C%E5%AE%9E%E7%8E%B0%E5%8F%AF%E9%80%89"},"\u5206\u79BB API \u548C\u5B9E\u73B0\uFF08\u53EF\u9009\uFF09")],-1),L=s("\u56DE\u5230 Mirai \u6587\u6863\u7D22\u5F15"),P=i(`<h3 id="gradle-groovy-dsl" tabindex="-1"><a class="header-anchor" href="#gradle-groovy-dsl" aria-hidden="true">#</a> Gradle Groovy DSL</h3><p>\u5728 <code>build.gradle</code> \u6DFB\u52A0</p><div class="language-groovy ext-groovy line-numbers-mode"><pre class="language-groovy"><code>plugins <span class="token punctuation">{</span>
    id <span class="token string">&#39;org.jetbrains.kotlin.jvm&#39;</span> version <span class="token string">&#39;1.5.30&#39;</span> <span class="token comment">// \u786E\u4FDD\u6DFB\u52A0 Kotlin</span>
<span class="token punctuation">}</span>

dependencies <span class="token punctuation">{</span>
    implementation <span class="token string">&#39;net.mamoe:mirai-core:2.9.1&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),R=n("p",null,"\u4F9D\u8D56\u914D\u7F6E\u5B8C\u6210\uFF0C\u8BF7\u9009\u62E9\uFF1A",-1),S=n("li",null,[n("a",{href:"#%E5%88%86%E7%A6%BB-api-%E5%92%8C%E5%AE%9E%E7%8E%B0%E5%8F%AF%E9%80%89"},"\u5206\u79BB API \u548C\u5B9E\u73B0\uFF08\u53EF\u9009\uFF09")],-1),N=s("\u56DE\u5230 Mirai \u6587\u6863\u7D22\u5F15"),J=i(`<h3 id="\u5206\u79BB-api-\u548C\u5B9E\u73B0-\u53EF\u9009" tabindex="-1"><a class="header-anchor" href="#\u5206\u79BB-api-\u548C\u5B9E\u73B0-\u53EF\u9009" aria-hidden="true">#</a> \u5206\u79BB API \u548C\u5B9E\u73B0\uFF08\u53EF\u9009\uFF09</h3><p>Mirai \u5728\u5F00\u53D1\u65F6\u9700\u8981 <code>net.mamoe:mirai-core-api</code>, \u5728\u8FD0\u884C\u65F6\u9700\u8981 <code>net.mamoe:mirai-core</code>\u3002\u53EF\u4EE5\u5728\u5F00\u53D1\u548C\u7F16\u8BD1\u65F6\u53EA\u4F9D\u8D56 <code>mirai-core-api</code>\uFF0C\u4F1A\u51CF\u8F7B\u5BF9 IDE \u7684\u8D1F\u62C5\u3002<br> \u5728 2.8.0 \u8D77 Mirai \u63D0\u4F9B <code>mirai-bom</code> \u7528\u4E8E\u81EA\u52A8\u534F\u8C03 Mirai \u4E0D\u540C\u7EC4\u4EF6\u7684\u7248\u672C\u4FE1\u606F\uFF0C\u8FD9\u662F\u5F15\u7528 Mirai \u5E73\u53F0\u7684\u9996\u9009\u65B9\u5F0F\u3002 \u4F7F\u7528 <code>mirai-bom</code> \u4E5F\u4F1A\u5BF9 Dependabot \u7B49\u81EA\u52A8\u5316\u4F9D\u8D56\u7BA1\u7406\u7A0B\u5E8F\u66F4\u52A0\u53CB\u597D\u3002</p><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code>dependencies <span class="token punctuation">{</span>
    <span class="token function">api</span><span class="token punctuation">(</span><span class="token function">platform</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;net.mamoe:mirai-bom:2.9.1&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token function">api</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;net.mamoe:mirai-core-api&quot;</span></span><span class="token punctuation">)</span>     <span class="token comment">// \u7F16\u8BD1\u4EE3\u7801\u4F7F\u7528</span>
    <span class="token function">runtimeOnly</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;net.mamoe:mirai-core&quot;</span></span><span class="token punctuation">)</span> <span class="token comment">// \u8FD0\u884C\u65F6\u4F7F\u7528</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E5F\u53EF\u4EE5\u7EE7\u7EED\u4F7F\u7528\u5982\u4E0B\u4F20\u7EDF\u65B9\u5F0F\uFF0C\u4F46\u52A1\u5FC5\u4FDD\u8BC1 <code>mirai-core-api</code> \u548C <code>mirai-core</code> \u7684\u7248\u672C\u53F7\u76F8\u4E00\u81F4\uFF0C\u4EE5\u907F\u514D\u6F5C\u5728\u7684\u5F02\u5E38\u3002<br> \u5C24\u5176\u6CE8\u610F Dependabot \u7B49\u4F9D\u8D56\u7BA1\u7406\u7A0B\u5E8F\u53EF\u80FD\u4F1A\u5BFC\u81F4\u6A21\u5757\u7248\u672C\u4E0D\u540C\u3002</p><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code>dependencies <span class="token punctuation">{</span>
    <span class="token keyword">val</span> miraiVersion <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">&quot;2.9.1&quot;</span></span>
    <span class="token function">api</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;net.mamoe&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">&quot;mirai-core-api&quot;</span></span><span class="token punctuation">,</span> miraiVersion<span class="token punctuation">)</span>     <span class="token comment">// \u7F16\u8BD1\u4EE3\u7801\u4F7F\u7528</span>
    <span class="token function">runtimeOnly</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;net.mamoe&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">&quot;mirai-core&quot;</span></span><span class="token punctuation">,</span> miraiVersion<span class="token punctuation">)</span> <span class="token comment">// \u8FD0\u884C\u65F6\u4F7F\u7528</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="b-\u4F7F\u7528-maven" tabindex="-1"><a class="header-anchor" href="#b-\u4F7F\u7528-maven" aria-hidden="true">#</a> B. \u4F7F\u7528 Maven</h2><blockquote><p>\u63A8\u8350\u4F7F\u7528 gradle, \u4F7F\u7528 maven \u60A8\u53EF\u80FD\u4F1A\u9047\u5230\u5404\u79CD\u5947\u602A\u7684\u4F9D\u8D56\u9519\u4E71\u95EE\u9898</p></blockquote><p>\u5728 <code>pom.xml</code> \u4E2D\u6DFB\u52A0 mirai \u4F9D\u8D56\uFF1A</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>net.mamoe<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mirai-core-jvm<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.9.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span> 
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u6CE8\u610F\u5728 Maven\uFF0CartifactId \u8981\u4F7F\u7528\u5E26 <code>-jvm</code> \u540E\u7F00\u7684</p></blockquote><p>\u901A\u5E38 mirai \u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u3002\u4F46 mirai \u4F7F\u7528\u7684 Kotlin 1.5 \u53EF\u80FD\u4E0E\u4F60\u7684\u9879\u76EE\u4F7F\u7528\u7684\u5176\u4ED6\u5E93\u4F9D\u8D56\u7684 Kotlin \u7248\u672C\u51B2\u7A81\uFF0CMaven \u6709\u65F6\u5019\u65E0\u6CD5\u6B63\u786E\u5904\u7406\u8FD9\u79CD\u51B2\u7A81\u3002\u6B64\u65F6\u8BF7\u624B\u52A8\u6DFB\u52A0 Kotlin \u6807\u51C6\u5E93\u4F9D\u8D56\u3002</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>kotlin.version</span><span class="token punctuation">&gt;</span></span>1.5.10<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>kotlin.version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.jetbrains.kotlin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>kotlin-stdlib-jdk8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${kotlin.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),H=s("\u53EF\u4EE5\u5728 "),O={href:"https://www.kotlincn.net/docs/reference/using-maven.html",target:"_blank",rel:"noopener noreferrer"},U=s("Kotlin \u5B98\u65B9\u6587\u6863"),T=s(" \u83B7\u53D6\u66F4\u591A\u6709\u5173\u914D\u7F6E Kotlin \u7684\u4FE1\u606F\u3002"),$=s("\u4F9D\u8D56\u914D\u7F6E\u5B8C\u6210\uFF0C"),z=s("\u56DE\u5230 Mirai \u6587\u6863\u7D22\u5F15"),Q=n("h2",{id:"c-\u4E0B\u8F7D-jar-\u5305",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#c-\u4E0B\u8F7D-jar-\u5305","aria-hidden":"true"},"#"),s(" C. \u4E0B\u8F7D JAR \u5305")],-1),W=n("p",null,"\u975E\u5E38\u4E0D\u63A8\u8350\u8FD9\u79CD\u65B9\u6CD5\uFF0C\u8BF7\u5C3D\u53EF\u80FD\u4F7F\u7528\u6784\u5EFA\u5DE5\u5177\u3002",-1),X=s("\u5728 "),Y={href:"https://repo.maven.apache.org/maven2/net/mamoe/mirai-core-all/",target:"_blank",rel:"noopener noreferrer"},Z=s("Maven Central"),nn=s(" \u6216 "),sn={href:"https://maven.aliyun.com/repository/public/net/mamoe/mirai-core-all/",target:"_blank",rel:"noopener noreferrer"},an=s("\u963F\u91CC\u4E91\u4EE3\u7406\u4ED3\u5E93"),tn=s(" \u4E0B\u8F7D\u6307\u5B9A\u7248\u672C\u7684 "),en=n("code",null,"-all.jar",-1),on=s(" \u6587\u4EF6\uFF0C\u5373\u5305\u542B "),ln=n("code",null,"mirai-core",-1),pn=s("\uFF0C"),cn=n("code",null,"mirai-core-api",-1),rn=s("\uFF0C"),un=n("code",null,"mirai-core-utils",-1),dn=s(" \u548C\u5176\u4ED6\u4F9D\u8D56\u3002"),kn=s("\u56DE\u5230 Mirai \u6587\u6863\u7D22\u5F15");function gn(mn,vn){const t=l("ExternalLinkIcon"),e=l("RouterLink");return c(),r("div",null,[d,k,n("p",null,[g,n("a",m,[v,a(t)]),h]),_,n("p",null,[b,a(e,{to:"/Evolution.html#%E7%89%88%E6%9C%AC%E8%A7%84%E8%8C%83"},{default:o(()=>[f]),_:1}),E]),n("table",null,[x,n("tbody",null,[n("tr",null,[q,n("td",B,[n("a",y,[j,a(t)])])]),n("tr",null,[C,n("td",A,[n("a",I,[M,a(t)])])]),n("tr",null,[F,n("td",D,[a(e,{to:"/UsingSnapshots.html"},{default:o(()=>[K]),_:1})])])])]),w,n("blockquote",null,[G,n("ul",null,[V,n("li",null,[a(e,{to:"/#jvm-%E5%B9%B3%E5%8F%B0-mirai-%E5%BC%80%E5%8F%91"},{default:o(()=>[L]),_:1})])])]),P,n("blockquote",null,[R,n("ul",null,[S,n("li",null,[a(e,{to:"/#jvm-%E5%B9%B3%E5%8F%B0-mirai-%E5%BC%80%E5%8F%91"},{default:o(()=>[N]),_:1})])])]),J,n("blockquote",null,[n("p",null,[H,n("a",O,[U,a(t)]),T])]),n("blockquote",null,[n("p",null,[$,a(e,{to:"/#jvm-%E5%B9%B3%E5%8F%B0-mirai-%E5%BC%80%E5%8F%91"},{default:o(()=>[z]),_:1})])]),Q,W,n("p",null,[X,n("a",Y,[Z,a(t)]),nn,n("a",sn,[an,a(t)]),tn,en,on,ln,pn,cn,rn,un,dn]),n("blockquote",null,[n("p",null,[a(e,{to:"/#jvm-%E5%B9%B3%E5%8F%B0-mirai-%E5%BC%80%E5%8F%91"},{default:o(()=>[kn]),_:1})])])])}var _n=p(u,[["render",gn],["__file","ConfiguringProjects.html.vue"]]);export{_n as default};
