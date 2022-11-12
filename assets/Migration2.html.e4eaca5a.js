import{_ as t,o as i,c as o,a as e,b as c,d as s,e as n,r as d}from"./app.97f7ed43.js";const l={},r=s(`<h1 id="mirai-http-api-2-x-\u8FC1\u79FB\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#mirai-http-api-2-x-\u8FC1\u79FB\u6587\u6863" aria-hidden="true">#</a> Mirai http api 2.x \u8FC1\u79FB\u6587\u6863</h1><h2 id="\u5728\u7EBF\u63D2\u4EF6\u66F4\u65B0" tabindex="-1"><a class="header-anchor" href="#\u5728\u7EBF\u63D2\u4EF6\u66F4\u65B0" aria-hidden="true">#</a> \u5728\u7EBF\u63D2\u4EF6\u66F4\u65B0</h2><p>\u4E3A\u4FDD\u6301\u65E7\u63D2\u4EF6\u7684\u4E0D\u4F1A\u7A81\u7136\u5347\u7EA7\u5BFC\u81F4\u5F02\u5E38\uFF0C2.x\u9700\u8981\u4F7F\u7528\u4E0D\u540C\u7684 channel \u8FDB\u884C\u66F4\u65B0\uFF0C\u5373 <code>channel stable-v2</code></p><blockquote><p><code>./mcl --update-package net.mamoe:mirai-api-http --channel stable-v2 --type plugin</code></p></blockquote><h2 id="\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6</h2><p>\u62C6\u5206\u4E3A\u591A\u6A21\u5757\uFF0C\u6DFB\u52A0\u4E86\u65B0\u7684\u53C2\u6570</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment">## \u914D\u7F6E\u6587\u4EF6\u4E2D\u7684\u503C\uFF0C\u5168\u4E3A\u9ED8\u8BA4\u503C</span>

<span class="token comment">## \u542F\u7528\u7684 adapter, \u5185\u7F6E\u6709 http, ws, reverse-ws, webhook</span>
<span class="token key atrule">adapters</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> http
  <span class="token punctuation">-</span> ws

<span class="token comment">## \u662F\u5426\u5F00\u542F\u8BA4\u8BC1\u6D41\u7A0B, \u82E5\u4E3A true \u5219\u5EFA\u7ACB\u8FDE\u63A5\u65F6\u9700\u8981\u9A8C\u8BC1 verifyKey</span>
<span class="token comment">## \u5EFA\u8BAE\u516C\u7F51\u8FDE\u63A5\u65F6\u5F00\u542F</span>
<span class="token key atrule">enableVerify</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">verifyKey</span><span class="token punctuation">:</span> <span class="token number">1234567890</span>

<span class="token comment">## \u662F\u5426\u5F00\u542F\u5355 session \u6A21\u5F0F, \u82E5\u4E3A true\uFF0C\u5219\u81EA\u52A8\u521B\u5EFA session \u7ED1\u5B9A console \u4E2D\u767B\u5F55\u7684 bot</span>
<span class="token comment">## \u5F00\u542F\u540E\uFF0C\u63A5\u53E3\u4E2D\u4EFB\u4F55 sessionKey \u4E0D\u9700\u8981\u4F20\u9012\u53C2\u6570</span>
<span class="token comment">## \u82E5 console \u4E2D\u6709\u591A\u4E2A bot \u767B\u5F55\uFF0C\u5219\u884C\u4E3A\u672A\u5B9A\u4E49</span>
<span class="token comment">## \u786E\u4FDD console \u4E2D\u53EA\u6709\u4E00\u4E2A bot \u767B\u9646\u65F6\u542F\u7528</span>
<span class="token key atrule">singleMode</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>

<span class="token comment">## \u5386\u53F2\u6D88\u606F\u7684\u7F13\u5B58\u5927\u5C0F</span>
<span class="token comment">## \u540C\u65F6\uFF0C\u4E5F\u662F http adapter \u7684\u6D88\u606F\u961F\u5217\u5BB9\u91CF</span>
<span class="token key atrule">cacheSize</span><span class="token punctuation">:</span> <span class="token number">4096</span>

<span class="token comment">## adapter \u7684\u5355\u72EC\u914D\u7F6E\uFF0C\u952E\u540D\u4E0E adapters \u9879\u914D\u7F6E\u76F8\u540C</span>
<span class="token key atrule">adapterSettings</span><span class="token punctuation">:</span>
  <span class="token comment">## \u8BE6\u60C5\u770B http adapter \u4F7F\u7528\u8BF4\u660E \u914D\u7F6E</span>
  <span class="token key atrule">http</span><span class="token punctuation">:</span>
    <span class="token key atrule">host</span><span class="token punctuation">:</span> localhost
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8080</span>
    <span class="token key atrule">cors</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>*<span class="token punctuation">]</span>
  
  <span class="token comment">## \u8BE6\u60C5\u770B websocket adapter \u4F7F\u7528\u8BF4\u660E \u914D\u7F6E</span>
  <span class="token key atrule">ws</span><span class="token punctuation">:</span>
    <span class="token key atrule">host</span><span class="token punctuation">:</span> localhost
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8080</span>
    <span class="token key atrule">reservedSyncId</span><span class="token punctuation">:</span> <span class="token number">-1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="http-\u76F8\u5173" tabindex="-1"><a class="header-anchor" href="#http-\u76F8\u5173" aria-hidden="true">#</a> http \u76F8\u5173</h2><h3 id="\u8BA4\u8BC1\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u8BA4\u8BC1\u6D41\u7A0B" aria-hidden="true">#</a> \u8BA4\u8BC1\u6D41\u7A0B</h3><ol><li>\u539F <code>authKey</code> \u4FEE\u6539\u4E3A <code>verifyKey</code>, \u8BA4\u8BC1\u63A5\u53E3\u53C2\u6570\u540D\u540C\u6B65\u4FEE\u6539</li><li>\u539F <code>/auth</code> \u63A5\u53E3\u4FEE\u6539\u4E3A <code>/verify</code> \u63A5\u53E3</li><li>\u539F <code>/verify</code> \u63A5\u53E3\u4FEE\u6539\u4E3A <code>/bind</code> \u63A5\u53E3</li></ol><p>\u53D8\u66F4\u539F\u56E0: \u547D\u540D\u6DF7\u6DC6</p><blockquote><p>http \u7684\u8BA4\u8BC1\u6D41\u7A0B\u4E3A, \u7B2C\u4E00\u6B65\u5148\u8BA4\u8BC1(verify)\u63D2\u4EF6\u4F7F\u7528\u8005\u8EAB\u4EFD; \u7B2C\u4E8C\u6B65\u901A\u8FC7 qq \u53F7\u7ED1\u5B9A(bind)\u5230\u56FA\u5B9A\u7684 session \u4E2D\uFF0C\u662F\u4E3A\u4E86\u63D0\u4F9B\u7F13\u5B58\u548C\u6D88\u606F\u961F\u5217\u7B49\u8FDE\u63A5\u79C1\u6709\u7684\u4E0A\u4E0B\u6587. \u539F\u5219\u4E0A\u5E76\u6CA1\u6709\u9274\u6743(auth)\u7684\u8FC7\u7A0B\uFF0C\u56E0\u6B64\u4FEE\u6539\u63A5\u53E3\u540D\u79F0</p></blockquote><h3 id="\u8BA4\u8BC1\u6D41\u7A0B\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#\u8BA4\u8BC1\u6D41\u7A0B\u4F18\u5316" aria-hidden="true">#</a> \u8BA4\u8BC1\u6D41\u7A0B\u4F18\u5316</h3><ol><li><p>\u53EF\u901A\u8FC7\u914D\u7F6E\u6587\u4EF6\u4E2D <code>enableVerify</code> \u53C2\u6570\u5173\u95ED\u8BA4\u8BC1\u8FC7\u7A0B, \u4FE1\u4EFB\u6240\u6709\u8FDE\u63A5\u8FDE\u63A5\u7684\u8BF7\u6C42. \u4E0D\u5EFA\u8BAE\u5173\u95ED, \u4F46\u7528\u6237\u80FD\u591F\u4FDD\u8BC1\u5B89\u5168\u6216\u8005\u8C03\u8BD5\u73AF\u5883\u4E0B\u80FD\u6709\u66F4\u597D\u7684\u4F53\u9A8C</p></li><li><p>\u53EF\u901A\u8FC7\u914D\u7F6E\u6587\u4EF6\u4E2D <code>singleMode</code> \u53C2\u6570\u8DF3\u8FC7\u7ED1\u5B9A(bind)\u8FC7\u7A0B\uFF0C\u9ED8\u8BA4\u4F7F\u7528 <code>Mirai Console</code> \u4E2D\u5F53\u524D\u767B\u5F55\u7684\u8D26\u53F7\u6216\u767B\u5F55\u7684\u4E0B\u4E00\u4E2A\u53EF\u7528\u8D26\u53F7. \u5F53\u73AF\u5883\u4E2D\u5B58\u5728\u591A\u4E2A\u8D26\u53F7\u65F6, \u53EF\u80FD\u4EA7\u751F\u4E0D\u786E\u5B9A\u884C\u4E3A, \u8BF7\u4FDD\u8BC1\u4F7F\u7528 <code>singeMode</code> \u65F6 <code>Mirai Console</code> \u4E2D\u53EA\u6709\u4E00\u4E2A\u8D26\u53F7\u767B\u5F55\u4E2D</p></li></ol><h3 id="\u82E5\u5E72\u672A-restful-\u5305\u88C5\u7684\u63A5\u53E3\u8FD4\u56DE\u503C\u8FDB\u884C-restful-\u5C01\u88C5" tabindex="-1"><a class="header-anchor" href="#\u82E5\u5E72\u672A-restful-\u5305\u88C5\u7684\u63A5\u53E3\u8FD4\u56DE\u503C\u8FDB\u884C-restful-\u5C01\u88C5" aria-hidden="true">#</a> \u82E5\u5E72\u672A Restful \u5305\u88C5\u7684\u63A5\u53E3\u8FD4\u56DE\u503C\u8FDB\u884C Restful \u5C01\u88C5</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6D89\u53CA\u63A5\u53E3\u5982\u4E0B:</p><ul><li><code>/friendList</code></li><li><code>/groupList</code></li><li><code>/memberList</code></li></ul><h3 id="errormessage-msg-\u5B57\u6BB5\u5F52\u4E00\u5316" tabindex="-1"><a class="header-anchor" href="#errormessage-msg-\u5B57\u6BB5\u5F52\u4E00\u5316" aria-hidden="true">#</a> errorMessage, msg \u5B57\u6BB5\u5F52\u4E00\u5316</h3>`,19),p=n("\u90E8\u5206\u63A5\u53E3\u7684\u8FD4\u56DE\u503C\u4E2D\uFF0C\u4F7F\u7528\u4E86 "),u=e("code",null,"errorMessage",-1),h=n(" \u4F5C\u4E3A\u5C5E\u6027\u503C, \u800C\u90E8\u5206\u4F7F\u7528 "),m=e("code",null,"msg",-1),v=n(". \u6B64\u95EE\u9898\u51FA\u73B0\u4E8E "),k={href:"https://github.com/project-mirai/mirai-api-http/issues/59",target:"_blank",rel:"noopener noreferrer"},b=n("issue#59"),y=s(`<p>\u5BF9\u6B64, \u672C\u6B21\u91CD\u6784\u7EDF\u4E00\u4FEE\u6539\u4E3A <code>msg</code>. \u6D89\u53CA\u63A5\u53E3\u5982\u4E0B:</p><h5 id="\u6D88\u606F\u961F\u5217\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u6D88\u606F\u961F\u5217\u63A5\u53E3" aria-hidden="true">#</a> \u6D88\u606F\u961F\u5217\u63A5\u53E3</h5><ul><li><code>/countMessage</code></li><li><code>/fetchMessage</code></li><li><code>/fetchLatestMessage</code></li><li><code>/peakMessage</code></li><li><code>/peekLatestMessage</code></li><li><code>/messageFromId</code></li></ul><blockquote><p>\u53D1\u9001\u6D88\u606F\u3001\u4E8B\u4EF6\u5904\u7406\u7B49\u8FD4\u56DE\u72B6\u6001\u7801\u7684\u63A5\u53E3\u4E0D\u53D7\u5F71\u54CD</p></blockquote><h3 id="\u4E0A\u4F20\u76F8\u5173" tabindex="-1"><a class="header-anchor" href="#\u4E0A\u4F20\u76F8\u5173" aria-hidden="true">#</a> \u4E0A\u4F20\u76F8\u5173</h3><p>\u6839\u636E\u53CD\u6620, \u56FE\u7247, \u8BED\u8A00, \u6587\u4EF6\u4E0A\u4F20\u4E0D\u518D\u7F13\u5B58\u5230\u672C\u5730, \u8FD4\u56DE\u503C\u5C06\u4E0D\u518D\u8FD4\u56DE <code>path</code> \u53C2\u6570. \u5982\u6709\u672C\u5730\u4E0A\u4F20\u9700\u6C42, \u7531\u7528\u6237\u81EA\u884C\u7F13\u5B58, \u4EE5\u8FDB\u884C\u8D44\u6E90\u7BA1\u7406</p><h2 id="websocket-\u76F8\u5173" tabindex="-1"><a class="header-anchor" href="#websocket-\u76F8\u5173" aria-hidden="true">#</a> websocket \u76F8\u5173</h2><h3 id="\u8FD4\u56DE\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u683C\u5F0F" aria-hidden="true">#</a> \u8FD4\u56DE\u683C\u5F0F</h3><p>\u7531\u4E8E <code>websocket</code> \u8FFD\u52A0\u6267\u884C\u64CD\u4F5C\u7684\u529F\u80FD\uFF0C\u56E0\u6B64 <code>websocket</code> \u63A5\u6536\u6D88\u606F\u7684\u6570\u636E\u7ED3\u6784\uFF0C\u9700\u548C <code>websocket</code> \u64CD\u4F5C\u54CD\u5E94\u4FDD\u6301\u76F8\u540C\u683C\u5F0F\uFF0C\u4EE5\u65B9\u4FBF\u89E3\u6790\u3002\u5177\u4F53\u4E3A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    syncId: &quot;&quot;,
    data: {}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>data</code> \u5185\u5BB9\u548C\u539F\u672C\u4FDD\u6301\u4E00\u81F4(\u9664\u4E0A\u6587\u63D0\u5230\u7684\u6570\u636E\u53D8\u66F4\u5916)</p><h3 id="syncid" tabindex="-1"><a class="header-anchor" href="#syncid" aria-hidden="true">#</a> syncId</h3><p><code>syncId</code> \u7528\u4E8E\u64CD\u4F5C\u8FFD\u8E2A\uFF0C\u53EF\u4E3A\u4EFB\u610F\u5B57\u7B26\u4E32\u3002\u5BF9\u4E8E\u4F7F\u7528 <code>websocket</code> \u53D1\u9001\u7684\u64CD\u4F5C\u8BF7\u6C42\uFF0C\u54CD\u5E94\u6570\u636E\u4F1A\u643A\u5E26\u548C\u8BF7\u6C42\u76F8\u540C\u7684 <code>syncId</code>\uFF0C\u7528\u4E8E\u540C\u6B65\u8FFD\u8E2A\u8BF7\u6C42\u548C\u54CD\u5E94\u3002</p><p>\u5BF9\u4E8E\u7531 <code>mirai-api-http</code> \u4E3B\u52A8\u53D1\u9001\u7684\u4E8B\u4EF6(\u5982event\u3001message\u7B49)\uFF0C\u4F7F\u7528\u4FDD\u7559\u5B57 <code>{syncId: &quot;-1&quot;}</code>, \u4E5F\u53EF\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u81EA\u884C\u5B9A\u4E49</p><h2 id="\u4E0A\u62A5\u76F8\u5173" tabindex="-1"><a class="header-anchor" href="#\u4E0A\u62A5\u76F8\u5173" aria-hidden="true">#</a> \u4E0A\u62A5\u76F8\u5173</h2><p>\u4E0A\u62A5\u6A21\u5757\u73B0\u72EC\u7ACB\u4E3A <code>webhook adapter</code>, \u914D\u7F6E\u6587\u4EF6\u6709\u53D8\u66F4</p><p>\u540C\u65F6\u652F\u6301\u8FD4\u56DE\u503C\u8FDB\u884C\u7B80\u5355\u64CD\u4F5C\u56DE\u8C03</p>`,17);function f(g,_){const a=d("ExternalLinkIcon");return i(),o("div",null,[r,e("p",null,[p,u,h,m,v,e("a",k,[b,c(a)])]),y])}var q=t(l,[["render",f],["__file","Migration2.html.vue"]]);export{q as default};
