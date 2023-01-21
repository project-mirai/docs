import{_ as r,o as c,c as d,a as n,b as s,w as e,e as t,d as o,r as i}from"./app.f08f35b1.js";const p={},u=n("h1",{id:"mirai-configuring-projects",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mirai-configuring-projects","aria-hidden":"true"},"#"),t(" Mirai - Configuring Projects")],-1),m=n("p",null,"\u672C\u6587\u4ECB\u7ECD\u5982\u4F55\u5728\u4E00\u4E2A Kotlin \u591A\u5E73\u53F0\u9879\u76EE\u4E2D\u4F7F\u7528 mirai\u3002",-1),h=n("h3",{id:"\u9009\u62E9\u7248\u672C",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u9009\u62E9\u7248\u672C","aria-hidden":"true"},"#"),t(" \u9009\u62E9\u7248\u672C")],-1),_=t("\u53EF\u53C2\u8003 "),k=t("ConfiguringProjects"),v=t(" \u9009\u62E9\u5408\u9002\u7684\u7248\u672C\u3002"),g=o('<h2 id="\u652F\u6301\u7684\u7F16\u8BD1\u76EE\u6807\u5E73\u53F0" tabindex="-1"><a class="header-anchor" href="#\u652F\u6301\u7684\u7F16\u8BD1\u76EE\u6807\u5E73\u53F0" aria-hidden="true">#</a> \u652F\u6301\u7684\u7F16\u8BD1\u76EE\u6807\u5E73\u53F0</h2><p>mirai \u4E0A\u4F20\u5230 Maven Central \u7684\u9884\u7F16\u8BD1\u6A21\u5757\u5217\u8868\u5982\u4E0B\u8868\u6240\u793A\u3002\u5728\u8868\u4E2D\u5217\u4E3E\u7684\u5E73\u53F0\u5373\u4E3A\u4F60\u7684\u9879\u76EE\u53EF\u4EE5\u4F7F\u7528\u7684\u5E73\u53F0\u3002 \u5982\u679C\u4F60\u4F7F\u7528\u4E86\u4E00\u4E2A\u4E0D\u53D7\u652F\u6301\u7684\u5E73\u53F0\uFF0C\u5728\u6784\u5EFA\u9879\u76EE\u65F6\u5C06\u4F1A\u5F97\u5230\u6765\u81EA Gradle \u7684\u4F9D\u8D56\u89E3\u51B3\u9519\u8BEF\u3002</p><p>mirai \u5B9E\u9645\u4E0A\u80FD\u652F\u6301 arm \u67B6\u6784\uFF0C\u4F46\u7531\u4E8E GitHub Actions \u5747\u4E3A x86 \u4E3B\u673A\uFF0C\u800C\u73B0\u9636\u6BB5\u914D\u7F6E Kotlin \u4EA4\u53C9\u7F16\u8BD1\u4E5F\u8F83\u56F0\u96BE\uFF0C\u5C31\u6CA1\u6709\u652F\u6301\u3002 \u6CA1\u6709\u652F\u6301\u5176\u4ED6\u5C0F\u4F17\u5E73\u53F0\u662F\u56E0\u4E3A\u5B9E\u7528\u6027\u6709\u9650\u3002\u82E5\u6709\u9700\u6C42\u6B22\u8FCE PR\u3002</p><table><thead><tr><th>\u53D1\u5E03\u5E73\u53F0\u540D\u79F0</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>jvm</td><td>JVM</td></tr><tr><td>android</td><td>Android (Dalvik)</td></tr><tr><td>mingwX64</td><td>Windows x64</td></tr><tr><td>macosX64</td><td>macOS x64</td></tr><tr><td>linuxX64</td><td>Linux x64</td></tr></tbody></table><h2 id="\u6DFB\u52A0\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u4F9D\u8D56" aria-hidden="true">#</a> \u6DFB\u52A0\u4F9D\u8D56</h2><p>\u4EC5\u9700\u4E3A <code>commonMain</code> \u6DFB\u52A0\u4F9D\u8D56\uFF0CKotlin \u4F1A\u81EA\u52A8\u4E3A\u5176\u4ED6\u6E90\u96C6\u914D\u7F6E\u4F9D\u8D56\u3002</p><p>Kotlin \u7F16\u8BD1\u5668\u7248\u672C\u5FC5\u987B\u81F3\u5C11\u4E3A 1.7.0\uFF0CGradle \u7248\u672C\u5EFA\u8BAE\u4F7F\u7528\u9AD8\u4E8E 7.3\u3002</p>',7),b=t("\u989D\u5916\u6DFB\u52A0 "),f=n("code",null,"net.mamoe:mirai-core-utils",-1),x=t(" \u662F\u4E3A\u4E86\u4E34\u65F6\u89E3\u51B3 "),C={href:"https://github.com/mamoe/mirai/issues/2275",target:"_blank",rel:"noopener noreferrer"},q=t("#2275"),E=t("\u3002"),j=o(`<div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code>plugins <span class="token punctuation">{</span>
    <span class="token function">kotlin</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;multiplatform&quot;</span></span><span class="token punctuation">)</span> version <span class="token string-literal singleline"><span class="token string">&quot;1.7.20&quot;</span></span>
<span class="token punctuation">}</span>

kotlin <span class="token punctuation">{</span>
    sourceSets <span class="token punctuation">{</span>
        <span class="token keyword">val</span> commonMain <span class="token keyword">by</span> getting <span class="token punctuation">{</span>
            dependencies <span class="token punctuation">{</span>
                <span class="token function">implementation</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;net.mamoe:mirai-core:2.13.0&quot;</span></span><span class="token punctuation">)</span>
                <span class="token function">implementation</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;net.mamoe:mirai-core-utils:2.13.0&quot;</span></span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u89E3\u51B3\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3\u95EE\u9898" aria-hidden="true">#</a> \u89E3\u51B3\u95EE\u9898</h2><p>\u5982\u679C\u4F60\u5728\u4F7F\u7528\u591A\u5E73\u53F0\u9879\u76EE\u65F6\u9047\u5230\u95EE\u9898\uFF0C\u90A3\u5E94\u8BE5\u662F\u6B63\u5E38\u7684\u3002Kotlin \u591A\u5E73\u53F0\u9879\u76EE\u5728 1.7 \u4ECD\u7136\u662F\u4E00\u4E2A\u6D4B\u8BD5\u7248\u529F\u80FD\u3002mirai \u7684 native \u5E73\u53F0\u652F\u6301\u662F\u5728 2.13.0 \u624D\u63D0\u4F9B\u3002\u6B22\u8FCE\u5728 issues \u63D0\u4EA4\u591A\u5E73\u53F0\u76F8\u5173\u95EE\u9898\u3002</p>`,3),M=n("p",null,"\u4F9D\u8D56\u914D\u7F6E\u5B8C\u6210\uFF0C",-1),w=t("\u56DE\u5230 Mirai \u6587\u6863\u7D22\u5F15");function B(P,y){const a=i("RouterLink"),l=i("ExternalLinkIcon");return c(),d("div",null,[u,m,h,n("p",null,[_,s(a,{to:"/ConfiguringProjects.html#%E9%80%89%E6%8B%A9%E7%89%88%E6%9C%AC"},{default:e(()=>[k]),_:1}),v]),g,n("p",null,[b,f,x,n("a",C,[q,s(l)]),E]),j,n("blockquote",null,[M,n("ul",null,[n("li",null,[s(a,{to:"/#%E4%BD%BF%E7%94%A8-mirai"},{default:e(()=>[w]),_:1})])])])])}var K=r(p,[["render",B],["__file","ConfiguringMultiplatformProjects.html.vue"]]);export{K as default};
