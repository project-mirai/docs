import{_ as s,o as l,c as d,a as t,b as o,d as n,e,r as i}from"./app.ef16e9a5.js";const c={},r=n('<h1 id="mirai-console-backend-logging" tabindex="-1"><a class="header-anchor" href="#mirai-console-backend-logging" aria-hidden="true">#</a> Mirai Console Backend - Logging</h1><p>Console \u7684\u65E5\u5FD7\u4E00\u5171\u6709\u4E94\u4E2A\u7EA7\u522B\uFF1A</p><table><thead><tr><th style="text-align:center;">\u7EA7\u522B\uFF08\u7531\u9AD8\u5230\u4F4E\uFF09</th><th>\u7528\u9014</th><th style="text-align:center;">\u9ED8\u8BA4\u542F\u7528</th></tr></thead><tbody><tr><td style="text-align:center;">ERROR</td><td>\u8BB0\u5F55\u5F71\u54CD\u7A0B\u5E8F\u8FD0\u884C\u7684\u9519\u8BEF</td><td style="text-align:center;">\u662F</td></tr><tr><td style="text-align:center;">WARNING</td><td>\u8BB0\u5F55\u4E0D\u5F71\u54CD\u7A0B\u5E8F\u8FD0\u884C\u7684\u8B66\u544A</td><td style="text-align:center;">\u662F</td></tr><tr><td style="text-align:center;">INFO</td><td>\u8BB0\u5F55\u4E00\u6761\u666E\u901A\u4FE1\u606F</td><td style="text-align:center;">\u662F</td></tr><tr><td style="text-align:center;">DEBUG</td><td>\u8BB0\u5F55\u666E\u901A\u8C03\u8BD5\u4FE1\u606F</td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;">VERBOSE</td><td>\u8BB0\u5F55\u8BE6\u7EC6\u8C03\u8BD5\u4FE1\u606F</td><td style="text-align:center;">\u5426</td></tr></tbody></table><p><code>DEBUG</code> \u548C <code>VERBOSE</code> \u4F5C\u4E3A\u8C03\u8BD5\u4FE1\u606F\uFF0C\u9ED8\u8BA4\u5173\u95ED\u3002\u63D2\u4EF6\u5F00\u53D1\u8005\u53EF\u80FD\u4F1A\u4F7F\u7528\u8FD9\u4E24\u4E2A\u7EA7\u522B\u6765\u8F93\u51FA\u8C03\u8BD5\u4FE1\u606F\u3002\u5982\u679C\u4F60\u5728\u4F7F\u7528\u4E2D\u9047\u5230\u95EE\u9898\uFF0C\u542F\u7528\u8FD9\u4E2A\u4E24\u4E2A\u7EA7\u522B\u83B7\u5F97\u66F4\u591A\u65E5\u5FD7\u540E\u518D\u62A5\u544A\u5F00\u53D1\u8005\u53EF\u80FD\u66F4\u6709\u5E2E\u52A9\u3002</p><p>\u7279\u522B\u5730\uFF0C<code>ALL</code> \u8868\u793A\u542F\u7528\u5168\u90E8\u65E5\u5FD7\uFF0C<code>NONE</code> \u8868\u793A\u7981\u7528\u5168\u90E8\u65E5\u5FD7\u3002</p>',5),p=e("\u5728\u7EC8\u7AEF\u524D\u7AEF\uFF08\u6216 "),u={href:"https://github.com/iTXTech/mirai-console-loader",target:"_blank",rel:"noopener noreferrer"},g=e("MCL"),m=e(" \uFF09\uFF0C\u65E5\u5FD7\u914D\u7F6E\u6587\u4EF6\u9ED8\u8BA4\u8DEF\u5F84\u4E3A "),h=t("code",null,"config/Console/Logger.yml",-1),v=e("\u3002\u793A\u4F8B\u5185\u5BB9\u4E3A\u5982\u4E0B\u3002"),k=n(`<div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># \u9ED8\u8BA4\u65E5\u5FD7\u8F93\u51FA\u7B49\u7EA7 \u53EF\u9009\u503C: ALL, VERBOSE, DEBUG, INFO, WARNING, ERROR, NONE</span>
<span class="token key atrule">defaultPriority</span><span class="token punctuation">:</span> INFO
<span class="token comment"># \u7279\u5B9A\u65E5\u5FD7\u8BB0\u5F55\u5668\u8F93\u51FA\u7B49\u7EA7</span>
<span class="token key atrule">loggers</span><span class="token punctuation">:</span>
    <span class="token key atrule">example.logger</span><span class="token punctuation">:</span> NONE
    <span class="token key atrule">console.debug</span><span class="token punctuation">:</span> NONE
    <span class="token key atrule">Bot</span><span class="token punctuation">:</span> ALL
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8C03\u6574\u5168\u5C40\u9ED8\u8BA4\u65E5\u5FD7\u7B49\u7EA7" tabindex="-1"><a class="header-anchor" href="#\u8C03\u6574\u5168\u5C40\u9ED8\u8BA4\u65E5\u5FD7\u7B49\u7EA7" aria-hidden="true">#</a> \u8C03\u6574\u5168\u5C40\u9ED8\u8BA4\u65E5\u5FD7\u7B49\u7EA7</h2><p>\u4FEE\u6539 <code>defaultPriority</code> \u5373\u53EF\u4FEE\u6539\u5168\u5C40\u9ED8\u8BA4\u65E5\u5FD7\u7B49\u7EA7\u3002</p><p>\u4F8B\u5982\u8BBE\u7F6E\u4E3A DEBUG\uFF0C\u5219\u542F\u7528\u4E0A\u8868\u4E2D DEBUG \u53CA\u66F4\u9AD8\u7EA7\u522B\u7684\u65E5\u5FD7\uFF0C\u5373 DEBUG\u3001INFO\u3001WARNING\u3001ERROR\u3002</p><h2 id="\u8C03\u6574\u7279\u5B9A\u65E5\u5FD7\u7B49\u7EA7" tabindex="-1"><a class="header-anchor" href="#\u8C03\u6574\u7279\u5B9A\u65E5\u5FD7\u7B49\u7EA7" aria-hidden="true">#</a> \u8C03\u6574\u7279\u5B9A\u65E5\u5FD7\u7B49\u7EA7</h2><p>\u6BCF\u4E2A\u63D2\u4EF6\u88AB\u5206\u914D\u7684\u65E5\u5FD7\u7684 ID \u4E3A\u63D2\u4EF6\u7684\u663E\u793A\u540D\u79F0\u3002</p><p>\u63D0\u793A\uFF1A\u8BE5 ID \u4E5F\u53EF\u4EE5\u5728\u65E5\u5FD7\u4E2D\u627E\u5230\u3002\u5982\u4E0B\u9762\u7684\u65E5\u5FD7\u4E2D\uFF0C<code>Bot 12345678</code> \u5C31\u662F\u5176\u6240\u5C5E\u65E5\u5FD7\u7684 ID\u3002\uFF08<code>V</code> \u4EE3\u8868\u7B49\u7EA7\u4E3A VERBOSE\uFF0C\u4EE5\u9996\u5B57\u6BCD\u8BC6\u522B\uFF09</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>2022-05-02 11:09:28 V/Bot 12345678: Event: BotOnlineEvent(bot=Bot(12345678))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679C\u5728\u65E5\u5FD7\u914D\u7F6E\u8FD9\u6837\u4FEE\u6539\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">loggers</span><span class="token punctuation">:</span>
    <span class="token key atrule">&quot;Bot 12345678&quot;</span><span class="token punctuation">:</span> NONE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u90A3\u4E48\u5C06\u7981\u7528\u6765\u81EA\u8BE5 Bot \u7684\u6240\u6709\u65E5\u5FD7\u3002</p><p>\u5047\u8BBE\u8981\u542F\u7528\u540D\u4E3A <code>Chat Command</code> \u7684\u63D2\u4EF6\u7684 DEBUG \u53CA\u66F4\u9AD8\u7EA7\u522B\u7684\u65E5\u5FD7\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">loggers</span><span class="token punctuation">:</span>
    <span class="token key atrule">&quot;Chat Command&quot;</span><span class="token punctuation">:</span> DEBUG
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,13);function y(b,_){const a=i("ExternalLinkIcon");return l(),d("div",null,[r,t("p",null,[p,t("a",u,[g,o(a)]),m,h,v]),k])}var E=s(c,[["render",y],["__file","Logging.html.vue"]]);export{E as default};
