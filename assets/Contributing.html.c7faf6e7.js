import{_ as a,r,o as l,c as s,a as e,b as o,d,e as n}from"./app.fa05826c.js";const t={},c=d(`<h1 id="mirai-console-contributing" tabindex="-1"><a class="header-anchor" href="#mirai-console-contributing" aria-hidden="true">#</a> Mirai Console - Contributing</h1><p>\u611F\u8C22\u4F60\u6765\u5230\u8FD9\u91CC\uFF0C\u611F\u8C22\u4F60\u5BF9 Mirai Console \u505A\u7684\u4E00\u5207\u8D21\u732E\u3002</p><h2 id="\u5F00\u53D1-mirai-console" tabindex="-1"><a class="header-anchor" href="#\u5F00\u53D1-mirai-console" aria-hidden="true">#</a> \u5F00\u53D1 Mirai Console</h2><h3 id="\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u6A21\u5757" aria-hidden="true">#</a> \u6A21\u5757</h3><p>Mirai Console \u9879\u76EE\u7531\u56DB\u4E2A\u6A21\u5757\u7EC4\u6210\uFF1A\u540E\u7AEF\uFF0C\u524D\u7AEF\uFF0CGradle \u63D2\u4EF6\uFF0CIntellij \u63D2\u4EF6\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/
|--- backend                     \u540E\u7AEF
|  |--- codegen                     \u540E\u7AEF\u4EE3\u7801\u751F\u6210\u5DE5\u5177
|  \`--- mirai-console               \u540E\u7AEF\u4E3B\u6A21\u5757, \u53D1\u5E03\u4E3A net.mamoe:mirai-console
|--- buildSrc                    \u9879\u76EE\u6784\u5EFA
|--- frontend                    \u524D\u7AEF
|  \`--- mirai-console-terminal      \u7EC8\u7AEF\u524D\u7AEF\uFF0C\u53D1\u5E03\u4E3A net.mamoe:mirai-console-terminal
\`--- tools                       \u5F00\u53D1\u5DE5\u5177
   |--- compiler-common             \u7F16\u8BD1\u5668\u901A\u7528\u6A21\u5757
   |--- gradle-plugin               Gradle \u63D2\u4EF6\uFF0C\u53D1\u5E03\u4E3A net.mamoe.mirai-console
   \`--- intellij-plugin             IntelliJ \u5E73\u53F0 IDE \u63D2\u4EF6\uFF0C\u53D1\u5E03\u4E3A Mirai Console
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BF7\u524D\u5F80\u5404\u6A21\u5757\u5185\u7684 README.md \u67E5\u770B\u8BE6\u7EC6\u8BF4\u660E\u3002</p><h3 id="\u6784\u5EFA" tabindex="-1"><a class="header-anchor" href="#\u6784\u5EFA" aria-hidden="true">#</a> \u6784\u5EFA</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>./gradlew build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u9996\u6B21\u52A0\u8F7D\u548C\u6784\u5EFA mirai-console \u9879\u76EE\u53EF\u80FD\u8981\u82B1\u8D39\u6570\u5C0F\u65F6\u65F6\u95F4\u3002</p><h2 id="\u8D21\u732E\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u8D21\u732E\u4EE3\u7801" aria-hidden="true">#</a> \u8D21\u732E\u4EE3\u7801</h2><h3 id="\u4EE3\u7801\u98CE\u683C" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u98CE\u683C" aria-hidden="true">#</a> \u4EE3\u7801\u98CE\u683C</h3>`,12),h=e("li",null,"\u8BF7\u4F18\u5148\u4F7F\u7528 Kotlin",-1),m=n("\u8BF7\u9075\u5B88 "),u={href:"https://www.kotlincn.net/docs/reference/coding-conventions.html",target:"_blank",rel:"noopener noreferrer"},v=n("Kotlin \u5B98\u65B9\u4EE3\u7801\u98CE\u683C");function b(_,p){const i=r("ExternalLinkIcon");return l(),s("div",null,[c,e("ul",null,[h,e("li",null,[m,e("a",u,[v,o(i)])])])])}var f=a(t,[["render",b],["__file","Contributing.html.vue"]]);export{f as default};
