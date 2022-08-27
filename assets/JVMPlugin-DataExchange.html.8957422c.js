import{_ as l,r as o,o as c,c as s,a as e,b as i,w as a,e as n,d as t}from"./app.be71a0e3.js";const u={},r=e("h1",{id:"mirai-console-backend-jvm-plugins-data-exchange",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#mirai-console-backend-jvm-plugins-data-exchange","aria-hidden":"true"},"#"),n(" Mirai Console Backend - JVM Plugins - Data Exchange")],-1),h=e("blockquote",null,[e("p",null,"\u672C\u7AE0\u4E3B\u8981\u4ECB\u7ECD\u5982\u4F55\u5728\u591A\u4E2A\u63D2\u4EF6\u5185\u76F4\u63A5\u4EA4\u6362\u6570\u636E"),e("p",null,"\u6CE8: \u591A\u63D2\u4EF6\u4E4B\u95F4\u5E7F\u64AD\u4E8B\u4EF6\u4E5F\u662F\u76F4\u63A5\u4EA4\u6362\u6570\u636E\u7684\u4E00\u79CD\u65B9\u5F0F")],-1),p=e("hr",null,null,-1),v=e("p",null,"\u5982\u679C\u9700\u8981\u5728\u63D2\u4EF6\u4E4B\u95F4\u76F4\u63A5\u4EA4\u6362\u6570\u636E, \u5219\u63D2\u4EF6\u4E4B\u95F4\u5FC5\u987B\u5B58\u5728\u76F4\u63A5\u6216\u95F4\u63A5\u7684\u4F9D\u8D56\u5173\u7CFB\u3002",-1),_=n("\u5728 "),g=n("Console - JvmPlugin"),b=n(" \u4E2D\u6709\u63D0\u5230\u7C7B\u52A0\u8F7D\u9694\u79BB\uFF0C\u6CA1\u6709\u4F9D\u8D56\u5173\u7CFB\u7684\u63D2\u4EF6\u4E4B\u95F4\u662F\u4E0D\u80FD\u76F4\u63A5\u4EA4\u6362\u6570\u636E\u7684\u3002"),m=n("\u5173\u4E8E\u5982\u4F55\u5EFA\u7ACB\u4F9D\u8D56\u5173\u7CFB, \u89C1 "),f=n("JVMPlugin - \u6709\u5173\u63D2\u4EF6\u4F9D\u8D56\u7684\u8BF4\u660E"),x=t(`<h2 id="\u5728\u6709\u4F9D\u8D56\u5173\u7CFB\u7684\u63D2\u4EF6\u4E2D\u5E7F\u64AD\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5728\u6709\u4F9D\u8D56\u5173\u7CFB\u7684\u63D2\u4EF6\u4E2D\u5E7F\u64AD\u4E8B\u4EF6" aria-hidden="true">#</a> \u5728\u6709\u4F9D\u8D56\u5173\u7CFB\u7684\u63D2\u4EF6\u4E2D\u5E7F\u64AD\u4E8B\u4EF6</h2><p>\u73B0\u5728\u7CFB\u7EDF\u4E2D\u5B58\u5728\u6709\u4E24\u4E2A\u63D2\u4EF6 <code>com.example.guide.baseplugin</code> \u548C <code>com.example.guide.extplugin</code>, \u5176\u4E2D <code>extplugin</code> \u4F9D\u8D56 <code>baseplugin</code>\u3002</p><p>\u5728 <code>baseplugin</code> \u4E2D\u5B9A\u4E49\u7684\u7C7B\u90FD\u53EF\u4EE5\u5728 <code>extplugin</code> \u4E2D\u8BBF\u95EE</p><h2 id="\u5728\u65E0\u4F9D\u8D56\u5173\u7CFB\u7684\u4E24\u4E2A\u63D2\u4EF6\u4E2D\u5E7F\u64AD\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5728\u65E0\u4F9D\u8D56\u5173\u7CFB\u7684\u4E24\u4E2A\u63D2\u4EF6\u4E2D\u5E7F\u64AD\u4E8B\u4EF6" aria-hidden="true">#</a> \u5728\u65E0\u4F9D\u8D56\u5173\u7CFB\u7684\u4E24\u4E2A\u63D2\u4EF6\u4E2D\u5E7F\u64AD\u4E8B\u4EF6</h2><p>\u5728\u4E24\u4E2A\u6CA1\u6709\u4F9D\u8D56\u5173\u7CFB\u7684\u63D2\u4EF6\u4E2D, \u662F\u4E0D\u80FD\u76F4\u63A5\u4EA4\u6362\u6570\u636E\u7684, \u5373\u4F7F\u4F7F\u7528\u4E86\u76F8\u540C\u7684\u7C7B\u540D\u4E5F\u662F\u4E0D\u80FD\u8FDB\u884C\u6570\u636E\u4EA4\u6362\u7684\u3002</p><p>\u5982\u679C\u9700\u8981\u5728\u4E24\u4E2A\u6CA1\u6709\u4EFB\u4F55\u5173\u7CFB\u7684\u63D2\u4EF6\u4E2D\u4EA4\u6362\u6570\u636E, \u9700\u8981\u6700\u5C11\u4E09\u4E2A\u6A21\u5757: <code>data-typedef</code>, <code>plugin-a</code>, <code>plugin-b</code>, <code>plugin-....</code></p><h3 id="\u591A\u63D2\u4EF6\u6570\u636E\u4EA4\u6362\u6838\u5FC3\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#\u591A\u63D2\u4EF6\u6570\u636E\u4EA4\u6362\u6838\u5FC3\u601D\u8DEF" aria-hidden="true">#</a> \u591A\u63D2\u4EF6\u6570\u636E\u4EA4\u6362\u6838\u5FC3\u601D\u8DEF</h3><p>\u5728\u591A\u4E2A\u63D2\u4EF6\u95F4\u4EA4\u6362\u6570\u636E, \u5FC5\u987B\u5B58\u5728\u76F4\u63A5\u6216\u8005\u95F4\u63A5\u7684\u5173\u7CFB, \u53EA\u6709\u5EFA\u7ACB\u4E86\u5173\u7CFB\u624D\u80FD\u89E3\u6790\u5230\u76F8\u540C\u7684\u7C7B\u3002</p><p>\u4E24\u4E2A\u6CA1\u6709\u5173\u7CFB\u7684\u63D2\u4EF6 <code>A</code> \u548C <code>B</code> \u4E4B\u95F4, \u5FC5\u987B\u901A\u8FC7\u53E6\u5916\u7684\u6A21\u5757 <code>data-typedef</code> \u5EFA\u7ACB\u8D77\u95F4\u63A5\u7684\u5173\u7CFB\u3002</p><p>\u6BD4\u5982\u5728 <code>data-typedef</code> \u4E2D\u5B9A\u4E49\u7684\u4E8B\u4EF6 <code>MyEvent</code>, \u5373\u4F7F\u8BE5\u4E8B\u4EF6\u662F\u5728 A \u5E7F\u64AD\u7684\u4E5F\u53EF\u4EE5\u5728 B \u76D1\u542C\u5230\u3002</p><h3 id="\u901A\u8FC7\u4FEE\u6539\u63D2\u4EF6\u5168\u5C40\u7C7B\u8DEF\u5F84\u94FE\u63A5\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7\u4FEE\u6539\u63D2\u4EF6\u5168\u5C40\u7C7B\u8DEF\u5F84\u94FE\u63A5\u63D2\u4EF6" aria-hidden="true">#</a> \u901A\u8FC7\u4FEE\u6539\u63D2\u4EF6\u5168\u5C40\u7C7B\u8DEF\u5F84\u94FE\u63A5\u63D2\u4EF6</h3><blockquote><p>\u4E0D\u63A8\u8350\u6B64\u65B9\u6CD5, \u4EC5\u9002\u5408\u4E8E\u9AD8\u5EA6\u81EA\u5B9A\u4E49</p><ul><li>\u4F7F\u7528\u6B64\u65B9\u6CD5\u5F88\u53EF\u80FD\u4F1A\u5E72\u6270\u5230\u5176\u4ED6\u63D2\u4EF6\u7684\u6267\u884C\u5BFC\u81F4\u5176\u4ED6\u63D2\u4EF6\u62A5\u9519\u3002</li><li>\u4F7F\u7528\u6B64\u65B9\u6CD5\u5F88\u53EF\u80FD\u4F1A\u9047\u5230\u5E93\u51B2\u7A81\u7684\u60C5\u51B5\u3002</li></ul></blockquote><p>\u5C06 <code>data-typedef.jar</code> \u653E\u5165 <code>plugin-shared-libraries</code> \u5373\u53EF\u3002</p><p>\u6A21\u5757\u95F4\u7684\u5173\u7CFB\u5982\u4E0B\u56FE</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>     plugin-a               plugin-b      others....      ......
        |                      |             |            ......
        |                      |             |            ......
        |                      |             |            ......
=================================================================
## data-typedef
## ........
=================================================================
                               |
=================================================================
##
## MIRAI CONSOLE PLUGIN SYSTEM
##
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5C06-data-typedef-\u6253\u5305\u6210\u4E2D\u8F6C\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5C06-data-typedef-\u6253\u5305\u6210\u4E2D\u8F6C\u63D2\u4EF6" aria-hidden="true">#</a> \u5C06 data-typedef \u6253\u5305\u6210\u4E2D\u8F6C\u63D2\u4EF6</h3><p>\u5C06 <code>data-typedef</code> \u4E5F\u7F16\u5199\u4E3A\u4E00\u4E2A mirai-console \u63D2\u4EF6, \u5E76\u5728 <code>plugin-a</code>, <code>plugin-b</code> \u4E2D\u5B9A\u4E49\u5BF9 <code>data-typedef</code> \u7684\u4F9D\u8D56\u5B9A\u4E49\u5373\u53EF\u3002</p><p>\u6A21\u5757\u95F4\u7684\u5173\u7CFB\u5982\u4E0B\u56FE</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>     plugin-a               plugin-b      others....      ......
        |                      |             |            ......
        +---  data-typedef  ---+             |            ......
                   |                         |            ......
=================================================================
## MIRAI CONSOLE PLUGIN SYSTEM
##
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6392\u9519" tabindex="-1"><a class="header-anchor" href="#\u6392\u9519" aria-hidden="true">#</a> \u6392\u9519</h2>`,20),E=n("\u89C1 "),B=n("JVMPlugin Debug"),M=e("hr",null,null,-1),V=n("\u8FD4\u56DE "),P=n("JVMPlugin"),k=n("\u8FD4\u56DE "),y=n("\u5F00\u53D1\u6587\u6863\u7D22\u5F15");function J(A,D){const d=o("RouterLink");return c(),s("div",null,[r,h,p,v,e("p",null,[_,i(d,{to:"/console/plugin/JVMPlugin.html#%E7%B1%BB%E5%8A%A0%E8%BD%BD%E9%9A%94%E7%A6%BB"},{default:a(()=>[g]),_:1}),b]),e("blockquote",null,[e("p",null,[m,i(d,{to:"/console/plugin/JVMPlugin.html#%E6%9C%89%E5%85%B3%E6%8F%92%E4%BB%B6%E4%BE%9D%E8%B5%96%E7%9A%84%E8%AF%B4%E6%98%8E"},{default:a(()=>[f]),_:1})])]),x,e("p",null,[E,i(d,{to:"/console/plugin/JVMPlugin-Debug.html"},{default:a(()=>[B]),_:1})]),M,e("blockquote",null,[e("p",null,[V,i(d,{to:"/console/plugin/JVMPlugin.html"},{default:a(()=>[P]),_:1})]),e("p",null,[k,i(d,{to:"/console/#mirai-console"},{default:a(()=>[y]),_:1})])])])}var C=l(u,[["render",J],["__file","JVMPlugin-DataExchange.html.vue"]]);export{C as default};
