import{_ as d,o as l,c as r,a,b as n,w as t,d as s,e,r as o}from"./app.c25a75fa.js";const h={},c=s(`<h2 id="webhook-adapter" tabindex="-1"><a class="header-anchor" href="#webhook-adapter" aria-hidden="true">#</a> Webhook Adapter</h2><p>\u63D0\u4F9B http \u56DE\u8C03\u5F62\u5F0F\u7684\u63A5\u53E3, \u53EF\u5355\u7EAF\u505A\u4E0A\u62A5\u4F7F\u7528</p><h3 id="\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">adapterSettings</span><span class="token punctuation">:</span>
  <span class="token key atrule">webhook</span><span class="token punctuation">:</span>
    <span class="token comment">## \u56DE\u8C03(\u4E0A\u62A5)\u5730\u5740</span>
    <span class="token key atrule">destinations</span><span class="token punctuation">:</span> 
    <span class="token punctuation">-</span> <span class="token string">&#39;localhost:9999/path1&#39;</span>
    <span class="token punctuation">-</span> <span class="token string">&#39;localhost:9999/path2&#39;</span>
    <span class="token punctuation">-</span> <span class="token string">&#39;localhost:9999/path3&#39;</span>

    <span class="token comment">## \u989D\u5916\u81EA\u5B9A\u4E49\u8BF7\u6C42\u5934</span>
    <span class="token key atrule">extraHeaders</span><span class="token punctuation">:</span>
      <span class="token key atrule">Authorization</span><span class="token punctuation">:</span> <span class="token string">&#39;bearer SV*(&amp;*(SH@ID^G&#39;</span>
      <span class="token key atrule">header1</span><span class="token punctuation">:</span> value1
      <span class="token key atrule">header2</span><span class="token punctuation">:</span> value2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u63A5\u53E3\u4E00\u89C8" tabindex="-1"><a class="header-anchor" href="#\u63A5\u53E3\u4E00\u89C8" aria-hidden="true">#</a> \u63A5\u53E3\u4E00\u89C8</h3><h4 id="\u4E13\u6709\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u4E13\u6709\u63A5\u53E3" aria-hidden="true">#</a> \u4E13\u6709\u63A5\u53E3</h4><ul><li><a href="#%E6%95%B0%E6%8D%AE%E6%A0%BC%E5%BC%8F">\u6570\u636E\u683C\u5F0F</a></li></ul><hr><h4 id="\u901A\u7528\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u901A\u7528\u63A5\u53E3" aria-hidden="true">#</a> \u901A\u7528\u63A5\u53E3</h4><p><strong>webhook\u53EA\u652F\u6301\u90E8\u5206\u64CD\u4F5C</strong></p><ul><li><strong><a href="#%E6%B6%88%E6%81%AF%E5%8F%91%E9%80%81%E4%B8%8E%E6%92%A4%E5%9B%9E">\u6D88\u606F\u53D1\u9001\u4E0E\u64A4\u56DE</a></strong><ul><li><a href="#%E5%8F%91%E9%80%81%E5%A5%BD%E5%8F%8B%E6%B6%88%E6%81%AF">\u53D1\u9001\u597D\u53CB\u6D88\u606F</a></li><li><a href="#%E5%8F%91%E9%80%81%E7%BE%A4%E6%B6%88%E6%81%AF">\u53D1\u9001\u7FA4\u6D88\u606F</a></li><li><a href="#%E5%8F%91%E9%80%81%E4%B8%B4%E6%97%B6%E4%BC%9A%E8%AF%9D%E6%B6%88%E6%81%AF">\u53D1\u9001\u4E34\u65F6\u4F1A\u8BDD\u6D88\u606F</a></li><li><a href="#%E5%8F%91%E9%80%81%E5%A4%B4%E5%83%8F%E6%88%B3%E4%B8%80%E6%88%B3%E6%B6%88%E6%81%AF">\u53D1\u9001\u5934\u50CF\u6233\u4E00\u6233\u6D88\u606F</a></li><li><a href="#%E6%92%A4%E5%9B%9E%E6%B6%88%E6%81%AF">\u64A4\u56DE\u6D88\u606F</a></li></ul></li><li><strong><a href="#%E8%B4%A6%E5%8F%B7%E7%AE%A1%E7%90%86">\u8D26\u53F7\u7BA1\u7406</a></strong><ul><li><a href="#%E5%88%A0%E9%99%A4%E5%A5%BD%E5%8F%8B">\u5220\u9664\u597D\u53CB</a></li></ul></li><li><strong><a href="#%E7%BE%A4%E7%AE%A1%E7%90%86">\u7FA4\u7BA1\u7406</a></strong><ul><li><a href="#%E7%A6%81%E8%A8%80%E7%BE%A4%E6%88%90%E5%91%98">\u7981\u8A00\u7FA4\u6210\u5458</a></li><li><a href="#%E8%A7%A3%E9%99%A4%E7%BE%A4%E6%88%90%E5%91%98%E7%A6%81%E8%A8%80">\u89E3\u9664\u7FA4\u6210\u5458\u7981\u8A00</a></li><li><a href="#%E7%A7%BB%E9%99%A4%E7%BE%A4%E6%88%90%E5%91%98">\u79FB\u9664\u7FA4\u6210\u5458</a></li><li><a href="#%E9%80%80%E5%87%BA%E7%BE%A4%E8%81%8A">\u9000\u51FA\u7FA4\u804A</a></li><li><a href="#%E5%85%A8%E4%BD%93%E7%A6%81%E8%A8%80">\u5168\u4F53\u7981\u8A00</a></li><li><a href="#%E8%A7%A3%E9%99%A4%E5%85%A8%E4%BD%93%E7%A6%81%E8%A8%80">\u89E3\u9664\u5168\u4F53\u7981\u8A00</a></li><li><a href="#%E8%AE%BE%E7%BD%AE%E7%BE%A4%E7%B2%BE%E5%8D%8E%E6%B6%88%E6%81%AF">\u8BBE\u7F6E\u7FA4\u7CBE\u534E\u6D88\u606F</a></li><li><a href="#%E4%BF%AE%E6%94%B9%E7%BE%A4%E8%AE%BE%E7%BD%AE">\u4FEE\u6539\u7FA4\u8BBE\u7F6E</a></li><li><a href="#%E4%BF%AE%E6%94%B9%E7%BE%A4%E5%91%98%E8%AE%BE%E7%BD%AE">\u4FEE\u6539\u7FA4\u5458\u8D44\u6599</a></li></ul></li><li><strong><a href="#%E7%BE%A4%E5%85%AC%E5%91%8A">\u7FA4\u516C\u544A</a></strong><ul><li><a href="#%E8%8E%B7%E5%8F%96%E7%BE%A4%E5%85%AC%E5%91%8A">\u83B7\u53D6\u7FA4\u516C\u544A</a></li><li><a href="#%E5%8F%91%E5%B8%83%E7%BE%A4%E5%85%AC%E5%91%8A">\u53D1\u5E03\u7FA4\u516C\u544A</a></li><li><a href="#%E5%88%A0%E9%99%A4%E7%BE%A4%E5%85%AC%E5%91%8A">\u5220\u9664\u7FA4\u516C\u544A</a></li></ul></li><li><strong><a href="#%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86">\u4E8B\u4EF6\u5904\u7406</a></strong><ul><li><a href="#%E6%B7%BB%E5%8A%A0%E5%A5%BD%E5%8F%8B%E7%94%B3%E8%AF%B7">\u6DFB\u52A0\u597D\u53CB\u7533\u8BF7</a></li><li><a href="#%E7%94%A8%E6%88%B7%E5%85%A5%E7%BE%A4%E7%94%B3%E8%AF%B7">\u7528\u6237\u5165\u7FA4\u7533\u8BF7</a></li><li><a href="#Bot%E8%A2%AB%E9%82%80%E8%AF%B7%E5%85%A5%E7%BE%A4%E7%94%B3%E8%AF%B7">Bot\u88AB\u9080\u8BF7\u5165\u7FA4\u7533\u8BF7</a></li></ul></li></ul><h2 id="\u6570\u636E\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u683C\u5F0F" aria-hidden="true">#</a> \u6570\u636E\u683C\u5F0F</h2><p>webhook \u4E0D\u4F1A\u63A5\u6536\u4E3B\u52A8\u8BF7\u6C42, \u53EA\u4F1A\u63A5\u6536\u5230\u4E8B\u4EF6\u540E\u5411\u77E5\u9053\u5730\u5740\u8FDB\u884C http \u4E0A\u62A5. \u4F46\u8FDC\u7AEF\u670D\u52A1\u5668\u53EF\u4EE5\u901A\u8FC7 \u201C\u54CD\u5E94\u201D \u8FDB\u884C\u7B80\u5355\u7684\u64CD\u4F5C.</p>`,13),E=e("webhook \u4E0A\u62A5\u7684\u5185\u5BB9\u4E3A\u6D88\u606F\u3001\u4E8B\u4EF6\u7684\u5BF9\u8C61 "),u=e("\u6D88\u606F\u7C7B\u578B"),p=e("\u3001"),m=e("\u4E8B\u4EF6\u7C7B\u578B"),_=a("p",null,[e("http \u8BF7\u6C42\u4F1A\u643A\u5E26\u914D\u7F6E\u6587\u4EF6\u4E2D\u5B9A\u4E49\u7684\u8BF7\u6C42\u5934\uFF0C\u4EE5\u53CA\u56FA\u5B9A\u7684\u8BF7\u6C42\u5934 "),a("code",null,"qq: xxxxxx"),e(", \u4EE5\u8868\u793A\u6536\u5230\u6D88\u606F\u4E8B\u4EF6\u7684\u8D26\u53F7")],-1),A=a("h3",{id:"\u4E0A\u62A5\u683C\u5F0F",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u4E0A\u62A5\u683C\u5F0F","aria-hidden":"true"},"#"),e(" \u4E0A\u62A5\u683C\u5F0F")],-1),v=a("p",null,"\u6D88\u606F\u3001\u4E8B\u4EF6\u7684 json \u5BF9\u8C61\u683C\u5F0F",-1),B=a("li",null,[a("p",null,"\u8BF7\u6C42\u65B9\u5F0F: POST")],-1),b=a("li",null,[a("p",null,"content-type: application/json")],-1),x=e("\u6D88\u606F\u7C7B\u578B"),g=e("\u4E8B\u4EF6\u7C7B\u578B"),f=s(`<h3 id="\u8FD4\u56DE\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u683C\u5F0F" aria-hidden="true">#</a> \u8FD4\u56DE\u683C\u5F0F</h3><div class="language-json5 ext-json5 line-numbers-mode"><pre class="language-json5"><code><span class="token comment">// headers</span>
<span class="token comment">// content-type: &quot;application/json&quot;</span>

<span class="token comment">// http body:</span>
<span class="token punctuation">{</span>
  <span class="token property unquoted">command</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>  <span class="token comment">// \u547D\u4EE4\u5B57</span>
  <span class="token property unquoted">content</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>   <span class="token comment">// \u547D\u4EE4\u5185\u5BB9</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6D88\u606F\u53D1\u9001\u4E0E\u64A4\u56DE" tabindex="-1"><a class="header-anchor" href="#\u6D88\u606F\u53D1\u9001\u4E0E\u64A4\u56DE" aria-hidden="true">#</a> \u6D88\u606F\u53D1\u9001\u4E0E\u64A4\u56DE</h2><h3 id="\u53D1\u9001\u597D\u53CB\u6D88\u606F" tabindex="-1"><a class="header-anchor" href="#\u53D1\u9001\u597D\u53CB\u6D88\u606F" aria-hidden="true">#</a> \u53D1\u9001\u597D\u53CB\u6D88\u606F</h3><p>\u4F7F\u7528\u6B64\u65B9\u6CD5\u5411\u6307\u5B9A\u597D\u53CB\u53D1\u9001\u6D88\u606F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u547D\u4EE4\u5B57: sendFriendMessage
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6),k=e("\u901A\u7528\u63A5\u53E3\u5B9A\u4E49: "),F=e("\u53D1\u9001\u597D\u53CB\u6D88\u606F"),I=s(`<h3 id="\u53D1\u9001\u7FA4\u6D88\u606F" tabindex="-1"><a class="header-anchor" href="#\u53D1\u9001\u7FA4\u6D88\u606F" aria-hidden="true">#</a> \u53D1\u9001\u7FA4\u6D88\u606F</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u547D\u4EE4\u5B57: sendGroupMessage
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2),D=e("\u901A\u7528\u63A5\u53E3\u5B9A\u4E49: "),P=e("\u53D1\u9001\u7FA4\u6D88\u606F"),y=s(`<h3 id="\u53D1\u9001\u4E34\u65F6\u4F1A\u8BDD\u6D88\u606F" tabindex="-1"><a class="header-anchor" href="#\u53D1\u9001\u4E34\u65F6\u4F1A\u8BDD\u6D88\u606F" aria-hidden="true">#</a> \u53D1\u9001\u4E34\u65F6\u4F1A\u8BDD\u6D88\u606F</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u547D\u4EE4\u5B57: sendTempMessage
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2),C=e("\u901A\u7528\u63A5\u53E3\u5B9A\u4E49: "),q=e("\u53D1\u9001\u4E34\u65F6\u4F1A\u8BDD\u6D88\u606F"),w=s(`<h3 id="\u53D1\u9001\u5934\u50CF\u6233\u4E00\u6233\u6D88\u606F" tabindex="-1"><a class="header-anchor" href="#\u53D1\u9001\u5934\u50CF\u6233\u4E00\u6233\u6D88\u606F" aria-hidden="true">#</a> \u53D1\u9001\u5934\u50CF\u6233\u4E00\u6233\u6D88\u606F</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u547D\u4EE4\u5B57: sendNudge
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2),T=e("\u901A\u7528\u63A5\u53E3\u5B9A\u4E49: "),j=e("\u53D1\u9001\u5934\u50CF\u6233\u4E00\u6233\u6D88\u606F"),M=s(`<h3 id="\u64A4\u56DE\u6D88\u606F" tabindex="-1"><a class="header-anchor" href="#\u64A4\u56DE\u6D88\u606F" aria-hidden="true">#</a> \u64A4\u56DE\u6D88\u606F</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u547D\u4EE4\u5B57: recall
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2),N=e("\u901A\u7528\u63A5\u53E3\u5B9A\u4E49: "),R=e("\u64A4\u56DE\u6D88\u606F"),S=s(`<h2 id="\u8D26\u53F7\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u8D26\u53F7\u7BA1\u7406" aria-hidden="true">#</a> \u8D26\u53F7\u7BA1\u7406</h2><h3 id="\u5220\u9664\u597D\u53CB" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u597D\u53CB" aria-hidden="true">#</a> \u5220\u9664\u597D\u53CB</h3><p>\u4F7F\u7528\u6B64\u65B9\u6CD5\u5220\u9664\u6307\u5B9A\u597D\u53CB</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u547D\u4EE4\u5B57: deleteFriend
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4),V=e("\u901A\u7528\u63A5\u53E3\u5B9A\u4E49: "),G=e("\u5220\u9664\u597D\u53CB"),W=s(`<h2 id="\u7FA4\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u7FA4\u7BA1\u7406" aria-hidden="true">#</a> \u7FA4\u7BA1\u7406</h2><h3 id="\u7981\u8A00\u7FA4\u6210\u5458" tabindex="-1"><a class="header-anchor" href="#\u7981\u8A00\u7FA4\u6210\u5458" aria-hidden="true">#</a> \u7981\u8A00\u7FA4\u6210\u5458</h3><p>\u4F7F\u7528\u6B64\u65B9\u6CD5\u6307\u5B9A\u7FA4\u7981\u8A00\u6307\u5B9A\u7FA4\u5458\uFF08\u9700\u8981\u6709\u76F8\u5173\u9650\u6743\uFF09</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u547D\u4EE4\u5B57: mute
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4),H=e("\u901A\u7528\u63A5\u53E3\u5B9A\u4E49: "),J=e("\u7981\u8A00\u7FA4\u6210\u5458"),L=s(`<h3 id="\u89E3\u9664\u7FA4\u6210\u5458\u7981\u8A00" tabindex="-1"><a class="header-anchor" href="#\u89E3\u9664\u7FA4\u6210\u5458\u7981\u8A00" aria-hidden="true">#</a> \u89E3\u9664\u7FA4\u6210\u5458\u7981\u8A00</h3><p>\u4F7F\u7528\u6B64\u65B9\u6CD5\u6307\u5B9A\u7FA4\u89E3\u9664\u7FA4\u6210\u5458\u7981\u8A00\uFF08\u9700\u8981\u6709\u76F8\u5173\u9650\u6743\uFF09</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u547D\u4EE4\u5B57: unmute
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),z=e("\u901A\u7528\u63A5\u53E3\u5B9A\u4E49: "),O=e("\u89E3\u9664\u7FA4\u6210\u5458\u7981\u8A00"),K=s(`<h3 id="\u79FB\u9664\u7FA4\u6210\u5458" tabindex="-1"><a class="header-anchor" href="#\u79FB\u9664\u7FA4\u6210\u5458" aria-hidden="true">#</a> \u79FB\u9664\u7FA4\u6210\u5458</h3><p>\u4F7F\u7528\u6B64\u65B9\u6CD5\u79FB\u9664\u6307\u5B9A\u7FA4\u6210\u5458\uFF08\u9700\u8981\u6709\u76F8\u5173\u9650\u6743\uFF09</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u547D\u4EE4\u5B57: kick
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),Q=e("\u901A\u7528\u63A5\u53E3\u5B9A\u4E49: "),U=e("\u79FB\u9664\u7FA4\u6210\u5458"),X=s(`<h3 id="\u9000\u51FA\u7FA4\u804A" tabindex="-1"><a class="header-anchor" href="#\u9000\u51FA\u7FA4\u804A" aria-hidden="true">#</a> \u9000\u51FA\u7FA4\u804A</h3><p>\u4F7F\u7528\u6B64\u65B9\u6CD5\u4F7FBot\u9000\u51FA\u7FA4\u804A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u547D\u4EE4\u5B57: quit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),Y=e("\u901A\u7528\u63A5\u53E3\u5B9A\u4E49: "),Z=e("\u9000\u51FA\u7FA4\u804A"),$=s(`<h3 id="\u5168\u4F53\u7981\u8A00" tabindex="-1"><a class="header-anchor" href="#\u5168\u4F53\u7981\u8A00" aria-hidden="true">#</a> \u5168\u4F53\u7981\u8A00</h3><p>\u4F7F\u7528\u6B64\u65B9\u6CD5\u4EE4\u6307\u5B9A\u7FA4\u8FDB\u884C\u5168\u4F53\u7981\u8A00\uFF08\u9700\u8981\u6709\u76F8\u5173\u9650\u6743\uFF09</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u547D\u4EE4\u5B57: muteAll
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),ee=e("\u901A\u7528\u63A5\u53E3\u5B9A\u4E49: "),ae=e("\u5168\u4F53\u7981\u8A00"),ie=s(`<h3 id="\u89E3\u9664\u5168\u4F53\u7981\u8A00" tabindex="-1"><a class="header-anchor" href="#\u89E3\u9664\u5168\u4F53\u7981\u8A00" aria-hidden="true">#</a> \u89E3\u9664\u5168\u4F53\u7981\u8A00</h3><p>\u4F7F\u7528\u6B64\u65B9\u6CD5\u4EE4\u6307\u5B9A\u7FA4\u89E3\u9664\u5168\u4F53\u7981\u8A00\uFF08\u9700\u8981\u6709\u76F8\u5173\u9650\u6743\uFF09</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u547D\u4EE4\u5B57: unmuteAll
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),ne=e("\u901A\u7528\u63A5\u53E3\u5B9A\u4E49: "),te=e("\u89E3\u9664\u5168\u4F53\u7981\u8A00"),se=s(`<h3 id="\u8BBE\u7F6E\u7FA4\u7CBE\u534E\u6D88\u606F" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u7FA4\u7CBE\u534E\u6D88\u606F" aria-hidden="true">#</a> \u8BBE\u7F6E\u7FA4\u7CBE\u534E\u6D88\u606F</h3><p>\u4F7F\u7528\u6B64\u65B9\u6CD5\u6DFB\u52A0\u4E00\u6761\u6D88\u606F\u4E3A\u7CBE\u534E\u6D88\u606F\uFF08\u9700\u8981\u6709\u76F8\u5173\u9650\u6743\uFF09</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u547D\u4EE4\u5B57: setEssence
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),de=e("\u901A\u7528\u63A5\u53E3\u5B9A\u4E49: "),le=e("\u8BBE\u7F6E\u7FA4\u7CBE\u534E\u6D88\u606F"),re=s(`<h3 id="\u4FEE\u6539\u7FA4\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u7FA4\u8BBE\u7F6E" aria-hidden="true">#</a> \u4FEE\u6539\u7FA4\u8BBE\u7F6E</h3><p>\u4F7F\u7528\u6B64\u65B9\u6CD5\u4FEE\u6539\u7FA4\u8BBE\u7F6E\uFF08\u9700\u8981\u6709\u76F8\u5173\u9650\u6743\uFF09</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u547D\u4EE4\u5B57: groupConfig
\u5B50\u547D\u4EE4\u5B57: update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,3),oe=e("\u901A\u7528\u63A5\u53E3\u5B9A\u4E49: "),he=e("\u4FEE\u6539\u7FA4\u8BBE\u7F6E"),ce=s(`<h3 id="\u4FEE\u6539\u7FA4\u5458\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u7FA4\u5458\u8BBE\u7F6E" aria-hidden="true">#</a> \u4FEE\u6539\u7FA4\u5458\u8BBE\u7F6E</h3><p>\u4F7F\u7528\u6B64\u65B9\u6CD5\u4FEE\u6539\u7FA4\u5458\u8BBE\u7F6E\uFF08\u9700\u8981\u6709\u76F8\u5173\u9650\u6743\uFF09</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u547D\u4EE4\u5B57: memberInfo
\u5B50\u547D\u4EE4\u5B57: update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,3),Ee=e("\u901A\u7528\u63A5\u53E3\u5B9A\u4E49: "),ue=e("\u4FEE\u6539\u7FA4\u5458\u8BBE\u7F6E"),pe=s(`<h3 id="\u4FEE\u6539\u7FA4\u5458\u7BA1\u7406\u5458" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u7FA4\u5458\u7BA1\u7406\u5458" aria-hidden="true">#</a> \u4FEE\u6539\u7FA4\u5458\u7BA1\u7406\u5458</h3><p>\u4F7F\u7528\u6B64\u65B9\u6CD5\u4FEE\u6539\u7FA4\u5458\u7684\u7BA1\u7406\u5458\u6743\u9650\uFF08\u9700\u8981\u6709\u7FA4\u4E3B\u9650\u6743\uFF09</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u547D\u4EE4\u5B57: memberAdmin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),me=e("\u901A\u7528\u63A5\u53E3\u5B9A\u4E49: "),_e=e("\u4FEE\u6539\u7FA4\u5458\u7BA1\u7406\u5458"),Ae=s(`<h2 id="\u7FA4\u516C\u544A" tabindex="-1"><a class="header-anchor" href="#\u7FA4\u516C\u544A" aria-hidden="true">#</a> \u7FA4\u516C\u544A</h2><h3 id="\u83B7\u53D6\u7FA4\u516C\u544A" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u7FA4\u516C\u544A" aria-hidden="true">#</a> \u83B7\u53D6\u7FA4\u516C\u544A</h3><p>\u6B64\u65B9\u6CD5\u83B7\u53D6\u6307\u5B9A\u7FA4\u516C\u544A\u5217\u8868</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u547D\u4EE4\u5B57: anno_list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4),ve=e("\u901A\u7528\u63A5\u53E3\u5B9A\u4E49: "),Be=e("\u83B7\u53D6\u7FA4\u516C\u544A"),be=s(`<h3 id="\u53D1\u5E03\u7FA4\u516C\u544A" tabindex="-1"><a class="header-anchor" href="#\u53D1\u5E03\u7FA4\u516C\u544A" aria-hidden="true">#</a> \u53D1\u5E03\u7FA4\u516C\u544A</h3><p>\u6B64\u65B9\u6CD5\u5411\u6307\u5B9A\u7FA4\u53D1\u5E03\u7FA4\u516C\u544A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u547D\u4EE4\u5B57: anno_publish
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),xe=e("\u901A\u7528\u63A5\u53E3\u5B9A\u4E49: "),ge=e("\u53D1\u5E03\u7FA4\u516C\u544A"),fe=s(`<h3 id="\u5220\u9664\u7FA4\u516C\u544A" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u7FA4\u516C\u544A" aria-hidden="true">#</a> \u5220\u9664\u7FA4\u516C\u544A</h3><p>\u6B64\u65B9\u6CD5\u5220\u9664\u6307\u5B9A\u7FA4\u4E2D\u4E00\u6761\u516C\u544A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u547D\u4EE4\u5B57: anno_delete
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),ke=e("\u901A\u7528\u63A5\u53E3\u5B9A\u4E49: "),Fe=e("\u5220\u9664\u7FA4\u516C\u544A"),Ie=s(`<h2 id="\u4E8B\u4EF6\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u5904\u7406" aria-hidden="true">#</a> \u4E8B\u4EF6\u5904\u7406</h2><h3 id="\u6DFB\u52A0\u597D\u53CB\u7533\u8BF7" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u597D\u53CB\u7533\u8BF7" aria-hidden="true">#</a> \u6DFB\u52A0\u597D\u53CB\u7533\u8BF7</h3><p>\u4F7F\u7528\u6B64\u65B9\u6CD5\u5904\u7406\u6DFB\u52A0\u597D\u53CB\u7533\u8BF7</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u547D\u4EE4\u5B57: resp_newFriendRequestEvent
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4),De=e("\u901A\u7528\u63A5\u53E3\u5B9A\u4E49: "),Pe=e("\u6DFB\u52A0\u597D\u53CB\u7533\u8BF7"),ye=s(`<h3 id="\u7528\u6237\u5165\u7FA4\u7533\u8BF7" tabindex="-1"><a class="header-anchor" href="#\u7528\u6237\u5165\u7FA4\u7533\u8BF7" aria-hidden="true">#</a> \u7528\u6237\u5165\u7FA4\u7533\u8BF7</h3><p>\u4F7F\u7528\u6B64\u65B9\u6CD5\u5904\u7406\u7528\u6237\u5165\u7FA4\u7533\u8BF7</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u547D\u4EE4\u5B57: resp_memberJoinRequestEvent
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),Ce=e("\u901A\u7528\u63A5\u53E3\u5B9A\u4E49: "),qe=e("\u7528\u6237\u5165\u7FA4\u7533\u8BF7"),we=s(`<h3 id="bot\u88AB\u9080\u8BF7\u5165\u7FA4\u7533\u8BF7" tabindex="-1"><a class="header-anchor" href="#bot\u88AB\u9080\u8BF7\u5165\u7FA4\u7533\u8BF7" aria-hidden="true">#</a> Bot\u88AB\u9080\u8BF7\u5165\u7FA4\u7533\u8BF7</h3><p>\u4F7F\u7528\u6B64\u65B9\u6CD5\u5904\u7406Bot\u88AB\u9080\u8BF7\u5165\u7FA4\u7533\u8BF7</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u547D\u4EE4\u5B57: resp_botInvitedJoinGroupRequestEvent
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),Te=e("\u901A\u7528\u63A5\u53E3\u5B9A\u4E49: "),je=e("Bot\u88AB\u9080\u8BF7\u5165\u7FA4\u7533\u8BF7");function Me(Ne,Re){const i=o("RouterLink");return l(),r("div",null,[c,a("blockquote",null,[a("p",null,[E,n(i,{to:"/mirai-api-http/api/MessageType.html"},{default:t(()=>[u]),_:1}),p,n(i,{to:"/mirai-api-http/api/EventType.html"},{default:t(()=>[m]),_:1})]),_]),A,v,a("ul",null,[B,b,a("li",null,[a("p",null,[n(i,{to:"/mirai-api-http/api/MessageType.html"},{default:t(()=>[x]),_:1})])]),a("li",null,[a("p",null,[n(i,{to:"/mirai-api-http/api/EventType.html"},{default:t(()=>[g]),_:1})])])]),f,a("p",null,[k,n(i,{to:"/mirai-api-http/api/API.html#%E5%8F%91%E9%80%81%E5%A5%BD%E5%8F%8B%E6%B6%88%E6%81%AF"},{default:t(()=>[F]),_:1})]),I,a("p",null,[D,n(i,{to:"/mirai-api-http/api/API.html#%E5%8F%91%E9%80%81%E7%BE%A4%E6%B6%88%E6%81%AF"},{default:t(()=>[P]),_:1})]),y,a("p",null,[C,n(i,{to:"/mirai-api-http/api/API.html#%E5%8F%91%E9%80%81%E4%B8%B4%E6%97%B6%E4%BC%9A%E8%AF%9D%E6%B6%88%E6%81%AF"},{default:t(()=>[q]),_:1})]),w,a("p",null,[T,n(i,{to:"/mirai-api-http/api/API.html#%E5%8F%91%E9%80%81%E5%A4%B4%E5%83%8F%E6%88%B3%E4%B8%80%E6%88%B3%E6%B6%88%E6%81%AF"},{default:t(()=>[j]),_:1})]),M,a("p",null,[N,n(i,{to:"/mirai-api-http/api/API.html#%E6%92%A4%E5%9B%9E%E6%B6%88%E6%81%AF"},{default:t(()=>[R]),_:1})]),S,a("p",null,[V,n(i,{to:"/mirai-api-http/api/API.html#%E5%88%A0%E9%99%A4%E5%A5%BD%E5%8F%8B"},{default:t(()=>[G]),_:1})]),W,a("p",null,[H,n(i,{to:"/mirai-api-http/api/API.html#%E7%A6%81%E8%A8%80%E7%BE%A4%E6%88%90%E5%91%98"},{default:t(()=>[J]),_:1})]),L,a("p",null,[z,n(i,{to:"/mirai-api-http/api/API.html#%E8%A7%A3%E9%99%A4%E7%BE%A4%E6%88%90%E5%91%98%E7%A6%81%E8%A8%80"},{default:t(()=>[O]),_:1})]),K,a("p",null,[Q,n(i,{to:"/mirai-api-http/api/API.html#%E7%A7%BB%E9%99%A4%E7%BE%A4%E6%88%90%E5%91%98"},{default:t(()=>[U]),_:1})]),X,a("p",null,[Y,n(i,{to:"/mirai-api-http/api/API.html#%E9%80%80%E5%87%BA%E7%BE%A4%E8%81%8A"},{default:t(()=>[Z]),_:1})]),$,a("p",null,[ee,n(i,{to:"/mirai-api-http/api/API.html#%E5%85%A8%E4%BD%93%E7%A6%81%E8%A8%80"},{default:t(()=>[ae]),_:1})]),ie,a("p",null,[ne,n(i,{to:"/mirai-api-http/api/API.html#%E8%A7%A3%E9%99%A4%E5%85%A8%E4%BD%93%E7%A6%81%E8%A8%80"},{default:t(()=>[te]),_:1})]),se,a("p",null,[de,n(i,{to:"/mirai-api-http/api/API.html#%E8%AE%BE%E7%BD%AE%E7%BE%A4%E7%B2%BE%E5%8D%8E%E6%B6%88%E6%81%AF"},{default:t(()=>[le]),_:1})]),re,a("p",null,[oe,n(i,{to:"/mirai-api-http/api/API.html#%E4%BF%AE%E6%94%B9%E7%BE%A4%E8%AE%BE%E7%BD%AE"},{default:t(()=>[he]),_:1})]),ce,a("p",null,[Ee,n(i,{to:"/mirai-api-http/api/API.html#%E4%BF%AE%E6%94%B9%E7%BE%A4%E5%91%98%E8%AE%BE%E7%BD%AE"},{default:t(()=>[ue]),_:1})]),pe,a("p",null,[me,n(i,{to:"/mirai-api-http/api/API.html#%E4%BF%AE%E6%94%B9%E7%BE%A4%E5%91%98%E7%AE%A1%E7%90%86%E5%91%98"},{default:t(()=>[_e]),_:1})]),Ae,a("p",null,[ve,n(i,{to:"/mirai-api-http/api/API.html#%E8%8E%B7%E5%8F%96%E7%BE%A4%E5%85%AC%E5%91%8A"},{default:t(()=>[Be]),_:1})]),be,a("p",null,[xe,n(i,{to:"/mirai-api-http/api/API.html#%E5%8F%91%E5%B8%83%E7%BE%A4%E5%85%AC%E5%91%8A"},{default:t(()=>[ge]),_:1})]),fe,a("p",null,[ke,n(i,{to:"/mirai-api-http/api/API.html#%E5%88%A0%E9%99%A4%E7%BE%A4%E5%85%AC%E5%91%8A"},{default:t(()=>[Fe]),_:1})]),Ie,a("p",null,[De,n(i,{to:"/mirai-api-http/api/API.html#%E6%B7%BB%E5%8A%A0%E5%A5%BD%E5%8F%8B%E7%94%B3%E8%AF%B7"},{default:t(()=>[Pe]),_:1})]),ye,a("p",null,[Ce,n(i,{to:"/mirai-api-http/api/API.html#%E7%94%A8%E6%88%B7%E5%85%A5%E7%BE%A4%E7%94%B3%E8%AF%B7%EF%BC%88Bot%E9%9C%80%E8%A6%81%E6%9C%89%E7%AE%A1%E7%90%86%E5%91%98%E6%9D%83%E9%99%90%EF%BC%89"},{default:t(()=>[qe]),_:1})]),we,a("p",null,[Te,n(i,{to:"/mirai-api-http/api/API.html#Bot%E8%A2%AB%E9%82%80%E8%AF%B7%E5%85%A5%E7%BE%A4%E7%94%B3%E8%AF%B7"},{default:t(()=>[je]),_:1})])])}var Ve=d(h,[["render",Me],["__file","WebhookAdapter.html.vue"]]);export{Ve as default};
