import{_ as s,r as i,o as r,c as n,a as e,b as d,w as a,d as c,e as t}from"./app.fda6b0cf.js";const l={},h=c('<h1 id="\u63A5\u53E3\u9002\u914D\u5668" tabindex="-1"><a class="header-anchor" href="#\u63A5\u53E3\u9002\u914D\u5668" aria-hidden="true">#</a> \u63A5\u53E3\u9002\u914D\u5668</h1><p>\u63A5\u53E3\u9002\u914D\u5668\u662F\u5BF9\u63A5 <code>mirai-core</code> \u4E3A\u5176\u63D0\u4F9B\u7F51\u7EDC\u63A5\u53E3\u7684\u5177\u4F53\u5B9E\u73B0.</p><p>\u4ECE <code>mirai-api-http 2</code> \u7248\u672C\u5F00\u59CB\uFF0C\u63A5\u53E3\u9002\u914D\u5668\u63D0\u4F9B\u66F4\u4E3A\u6A21\u5757\u5316\u7684\u7F51\u7EDC\u63A5\u53E3\u5B9E\u73B0. \u901A\u8FC7\u542F\u7528\u4E0D\u540C\u7684\u9002\u914D\u5668\u53EF\u4EE5\u5B9E\u73B0\u4E0D\u540C\u7684\u63A5\u53E3\u8C03\u7528\u5F62\u5F0F\u751A\u81F3\u6570\u636E\u683C\u5F0F\u3002</p><h2 id="\u5185\u7F6E\u63A5\u53E3\u9002\u914D\u5668-built-in-adapter" tabindex="-1"><a class="header-anchor" href="#\u5185\u7F6E\u63A5\u53E3\u9002\u914D\u5668-built-in-adapter" aria-hidden="true">#</a> \u5185\u7F6E\u63A5\u53E3\u9002\u914D\u5668 (built-in adapter)</h2><p><code>mirai-api-http 2</code> \u5185\u7F6E\u82E5\u5E72 <code>adapter</code>. \u6240\u6709 <code>built-in adapter</code> \u91C7\u7528\u76F8\u540C\u7684\u63A5\u53E3\u903B\u8F91\u548C\u6570\u636E\u683C\u5F0F\u6807\u51C6, \u53EA\u5728\u8C03\u7528\u5F62\u5F0F\u4E0A\u6709\u6240\u4E0D\u540C</p>',5),p=e("thead",null,[e("tr",null,[e("th",null,"\u9002\u914D\u5668\u540D\u79F0"),e("th",null,"\u63CF\u8FF0"),e("th",null,"\u6587\u6863")])],-1),_=e("td",null,"http",-1),u=e("td",null,"\u63D0\u4F9B\u57FA\u4E8E\u8F6E\u8BE2\u7684 http \u63A5\u53E3",-1),m=t("http"),f=e("td",null,"ws",-1),b=e("td",null,"\u63D0\u4F9B websocket server \u5F62\u5F0F\u7684\u63A5\u53E3",-1),k=t("ws"),y=e("td",null,"reverse-ws",-1),v=e("td",null,"\u63D0\u4F9B websocket client \u5F62\u5F0F\u7684\u63A5\u53E3",-1),A=t("reverse-ws"),w=e("td",null,"webhook",-1),x=e("td",null,"\u901A\u8FC7 http \u53CD\u5411\u8C03\u7528\u5F62\u5F0F\u7684\u63A5\u53E3",-1),B=t("webhook"),C=e("h2",{id:"\u81EA\u5B9A\u4E49\u6269\u5C55\u63A5\u53E3\u9002\u914D\u5668",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u6269\u5C55\u63A5\u53E3\u9002\u914D\u5668","aria-hidden":"true"},"#"),t(" \u81EA\u5B9A\u4E49\u6269\u5C55\u63A5\u53E3\u9002\u914D\u5668")],-1),K=t("\u63A5\u53E3\u9002\u914D\u5668\u652F\u6301\u6269\u5C55, \u4ECE\u5916\u90E8\u52A0\u8F7D, \u63A5\u53E3\u9002\u914D\u5668\u5F00\u53D1\u8BE6\u60C5\u67E5\u770B "),N=t("CustomizedAdapter"),V=c('<h2 id="\u5173\u4E8E-verifykey-session-\u548C-cache" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8E-verifykey-session-\u548C-cache" aria-hidden="true">#</a> \u5173\u4E8E verifyKey, session \u548C cache</h2><p><code>verifyKey</code>, <code>session</code>, <code>cache</code> \u662F <code>built-in adapter</code> \u7279\u6709\u7684\u6821\u9A8C\u903B\u8F91. \u76EE\u524D\u53EA\u6709\u5185\u7F6E\u7684 <code>adapter</code> \u5B9E\u73B0\u4E86\u8EAB\u4EFD\u6821\u9A8C(<code>webhook adapter</code> \u9664\u5916). \u7528\u4E8E\u6821\u9A8C\u63A5\u53E3\u8C03\u7528\u8005\u7684\u8EAB\u4EFD, \u4EE5\u53CA\u7F13\u5B58\u63A5\u53E3\u5B9E\u73B0\u8FC7\u7A0B\u4E2D\u7684\u6D88\u606F\u7F13\u5B58\u548C\u4E0A\u4E0B\u6587.</p><p>\u5BF9\u4E8E <code>Customized Adapter</code>, \u6CA1\u6709\u5F3A\u5236\u5B9E\u73B0\u8FD9\u4E09\u4E2A\u6807\u51C6, \u662F\u5426\u63D0\u4F9B\u6821\u9A8C\u903B\u8F91, \u9700\u8981\u9605\u8BFB\u5177\u4F53 <code>adapter</code> \u7684\u4F7F\u7528\u8BF4\u660E.</p><h2 id="\u5173\u4E8E-verifykey-session-\u548C-cache-\u7684\u4F5C\u7528\u57DF" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8E-verifykey-session-\u548C-cache-\u7684\u4F5C\u7528\u57DF" aria-hidden="true">#</a> \u5173\u4E8E verifyKey, session \u548C cache \u7684\u4F5C\u7528\u57DF</h2><p>\u5BF9\u4E8E <code>built-in adapter</code> \u800C\u8A00, <code>verifyKey</code>, <code>session</code>, <code>cache</code> \u662F\u5168\u5C40\u7684. \u5373, \u82E5\u5F00\u542F\u4E86\u591A\u4E2A <code>adapter</code> \u7684\u60C5\u51B5\u4E0B, \u591A\u4E2A\u5BA2\u6237\u7AEF\u901A\u8FC7\u591A\u4E2A <code>adaptor</code> \u4F7F\u7528\u540C\u4E00\u4E2A <code>session</code>, \u5BA2\u6237\u7AEF\u4E4B\u95F4\u7684\u64CD\u4F5C\u4F1A\u76F8\u4E92\u5F71\u54CD.</p><p>\u4E3E\u4F8B:</p><ol><li>\u5BA2\u6237\u7AEFA, \u901A\u8FC7 <code>http adapter</code> \u7533\u8BF7\u5230 <code>session1</code> \u5E76\u76D1\u542C</li><li>\u5BA2\u6237\u7AEFB, \u901A\u8FC7 <code>websocket adatper</code> \u76D1\u542C <code>session1</code></li><li>\u5F53 <code>session1</code> \u7ED1\u5B9A\u7684 <code>bot</code> \u63A5\u6536\u5230\u4E8B\u4EF6\u65F6, \u5BA2\u6237\u7AEFA \u548C \u5BA2\u6237\u7AEFB \u90FD\u4F1A\u6536\u5230\u6D88\u606F\u63A8\u9001</li><li>\u5BA2\u6237\u7AEFA\u53D1\u9001\u6D88\u606F\u5E76\u53D6\u5F97 <code>messageId1</code></li><li>\u5BA2\u6237\u7AEFA \u548C \u5BA2\u6237\u7AEFB \u5747\u53EF\u4EE5\u901A\u8FC7 <code>messageId1</code> \u83B7\u53D6\u5230\u6D88\u606F\u7F13\u5B58</li></ol><p>\u603B\u800C\u8A00\u4E4B, <code>session</code> \u4E0D\u5728\u4E4E\u662F\u5426\u6709\u591A\u4E2A\u5BA2\u6237\u7AEF\u901A\u8FC7\u54EA\u79CD <code>adapter</code> \u5728\u76D1\u542C\u540C\u4E00\u4E2A <code>session</code>, \u53EA\u8981 <code>session</code> \u6536\u53D6\u5230\u6D88\u606F\u4E8B\u4EF6\uFF0C\u90FD\u4F1A\u65E0\u5DEE\u522B\u5730\u901A\u77E5\u5BA2\u6237\u7AEF.</p><p>\u867D\u7136\u4E0D\u5EFA\u8BAE\u591A\u4E2A\u5BA2\u6237\u7AEF\u76D1\u542C\u540C\u4E00\u4E2A <code>session</code>, \u4F46\u662F\u5728\u5206\u5E03\u5F0F\u64CD\u4F5C\u4E0A\u6709\u4E00\u5B9A\u4F5C\u7528</p>',9);function z(R,W){const o=i("RouterLink");return r(),n("div",null,[h,e("table",null,[p,e("tbody",null,[e("tr",null,[_,u,e("td",null,[d(o,{to:"/mirai-api-http/adapter/HttpAdapter.html"},{default:a(()=>[m]),_:1})])]),e("tr",null,[f,b,e("td",null,[d(o,{to:"/mirai-api-http/adapter/WebsocketAdapter.html"},{default:a(()=>[k]),_:1})])]),e("tr",null,[y,v,e("td",null,[d(o,{to:"/mirai-api-http/adapter/ReverseWebsocketAdapter.html"},{default:a(()=>[A]),_:1})])]),e("tr",null,[w,x,e("td",null,[d(o,{to:"/mirai-api-http/adapter/WebhookAdapter.html"},{default:a(()=>[B]),_:1})])])])]),C,e("p",null,[K,d(o,{to:"/mirai-api-http/adapter/CustomizedAdapter.html"},{default:a(()=>[N]),_:1})]),V])}var I=s(l,[["render",z],["__file","Adapter.html.vue"]]);export{I as default};