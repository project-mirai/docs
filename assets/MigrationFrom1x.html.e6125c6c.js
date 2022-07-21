import{_ as t,r,o as n,c as l,a as d,b as i,w as c,d as a,e}from"./app.687b9fd2.js";const s={},h=a('<h1 id="mirai-migration-from-1-x" tabindex="-1"><a class="header-anchor" href="#mirai-migration-from-1-x" aria-hidden="true">#</a> Mirai - Migration From 1.x</h1><p>\u672C\u6587\u4ECB\u7ECD\u5982\u4F55\u4ECE 1.x \u5347\u7EA7\u5230 2.x\u3002</p><p>\u6839\u636E\u4F60\u7684\u8BED\u8A00\u9009\u62E9\uFF1A<a href="#%E4%BD%BF%E7%94%A8-kotlin">Kotlin</a> | <a href="#%E4%BD%BF%E7%94%A8-java">Java</a></p><h2 id="\u4F7F\u7528-kotlin" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-kotlin" aria-hidden="true">#</a> \u4F7F\u7528 Kotlin</h2><h3 id="\u5982\u4F55\u81EA\u52A8\u5B8C\u6210-kotlin-\u7684\u9519\u8BEF\u66FF\u6362" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u81EA\u52A8\u5B8C\u6210-kotlin-\u7684\u9519\u8BEF\u66FF\u6362" aria-hidden="true">#</a> \u5982\u4F55\u81EA\u52A8\u5B8C\u6210 Kotlin \u7684\u9519\u8BEF\u66FF\u6362</h3><p>\u4EC5 IntelliJ IDEA \u548C Android Studio \u652F\u6301\u8FD9\u4E2A\u529F\u80FD\u3002</p><p>\u628A\u5149\u6807\u653E\u5728\u4E00\u4E2A\u9519\u8BEF\u4E2D\u95F4\uFF08\u6216\u8005\u6309 F2 \u81EA\u52A8\u8DF3\u8F6C\u5230\u9519\u8BEF\uFF09\uFF0C\u5728 Windows \u4F7F\u7528 <code>Alt + Enter</code> \u5FEB\u6377\u952E\uFF0CmacOS \u4F7F\u7528 <code>Option + Enter</code>\uFF0C\u4F1A\u5F97\u5230\u5F39\u7A97\u5982\u4E0B\u56FE\u3002</p><p><img src="https://i.loli.net/2020/12/18/CiX9qApu5BnVPch.png" alt="YBP47V_Z640J_YU5WZ_JVPW.png"></p><p>\u7B2C\u4E00\u9879\u4E3A\u4EC5\u66FF\u6362\u8FD9\u4E00\u4E2A\u9519\u8BEF\uFF0C\u7B2C\u4E8C\u9879\u4E3A\u66FF\u6362\u9879\u76EE\u4E2D\u7684\u6240\u6709\u8FD9\u4E2A\u9519\u8BEF\u3002\u4E00\u822C\u63A8\u8350\u9009\u62E9\u7B2C\u4E8C\u9879\u5E76\u56DE\u8F66\u5373\u53EF\u3002</p><p><strong>Mirai \u7684\u4FEE\u6539\u90FD\u5C3D\u53EF\u80FD\u5730\u63D0\u4F9B\u4E86\u8FD9\u6837\u7684\u66FF\u6362\uFF0C\u8BF7\u4F9D\u6B21\u6309\u5982\u4E0B\u6B65\u9AA4\u66F4\u65B0\u4EE5\u4E0B\u51E0\u4E2A\u7248\u672C\uFF0C\u624D\u80FD\u4F7F\u7528\u8FD9\u4E9B\u66FF\u6362\u3002</strong><br> \u90E8\u5206\u65E0\u6CD5\u63D0\u4F9B\u81EA\u52A8\u66FF\u6362\u7684\u4FEE\u6539\u4F1A\u5728\u4E0B\u6587\u8BF4\u660E\u3002</p><h3 id="_1-x-2-0-m1-1" tabindex="-1"><a class="header-anchor" href="#_1-x-2-0-m1-1" aria-hidden="true">#</a> <code>1.x</code> -&gt; <code>2.0-M1-1</code></h3><p>\u66FF\u6362\u4F9D\u8D56\uFF08\u53EF\u4EE5\u76F4\u63A5\u5168\u5C40\u641C\u7D22\u66FF\u6362\uFF09:</p><ul><li><code>net.mamoe:mirai-core</code> -&gt; <code>net.mamoe:mirai-core-api</code></li><li><code>net.mamoe:mirai-core-qqandroid</code> -&gt; <code>net.mamoe:mirai-core</code></li></ul><p><strong>Kotlin</strong>:</p><ol><li><p>\u5C06 <code>MessageChain[Image]</code> \u7B49 IDE \u4F1A\u63D0\u793A\u9519\u8BEF\u7684\u8C03\u7528\u8C03\u6574\u4E3A:</p><ul><li><code>.findIsInstance&lt;Image&gt;()</code> \uFF08<code>Image</code> \u4E0D\u5B58\u5728\u65F6\u8FD4\u56DE <code>null</code>\uFF09</li><li><code>.firstIsInstance&lt;Image&gt;()</code> \uFF08<code>Image</code> \u4E0D\u5B58\u5728\u65F6\u629B\u51FA\u5F02\u5E38\uFF09</li></ul><p><strong>\u63D0\u793A</strong>: \u5982\u679C\u4F60\u662F\u60F3\u83B7\u53D6\u6D88\u606F\u7684\u5185\u5BB9\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>messageChain.content</code> \u6269\u5C55\uFF0C\u800C\u4E0D\u9700\u8981\u4F7F\u7528 <code>MessageChain[PlainText]</code></p></li><li><p><code>Bot.getFriend</code> \u7B49\u51FD\u6570\u4EE5\u524D\u5728\u627E\u4E0D\u5230\u597D\u53CB\u65F6\u4F1A\u629B\u51FA\u5F02\u5E38\uFF0C\u73B0\u5728\u5B83\u4EEC\u4F1A\u8FD4\u56DE <code>null</code>\u3002<br> \u8BF7\u66FF\u6362 <code>Bot.getFriend</code> \u4E3A <code>Bot.getFriendOrFail</code>\u3002</p></li></ol><p>\u53EA\u8981\u80FD\u901A\u8FC7\u7F16\u8BD1\u5C31\u53EF\u4EE5\u9002\u914D\u4E0B\u4E00\u4E2A\u7248\u672C\u3002</p><h3 id="_2-0-m1-2-0-m2" tabindex="-1"><a class="header-anchor" href="#_2-0-m1-2-0-m2" aria-hidden="true">#</a> <code>2.0-M1</code> -&gt; <code>2.0-M2</code></h3><p>\u4FEE\u6539\u90FD\u53EF\u4EE5\u81EA\u52A8\u66FF\u6362\u5B8C\u6210\u3002<strong>\u4F46\u8BF7\u4E0D\u8981\u8DF3\u8FC7 <code>2.0-M2</code> \u8FD9\u4E00\u6B65\u9AA4\u3002</strong></p><h3 id="_2-0-m2-2-0-rc" tabindex="-1"><a class="header-anchor" href="#_2-0-m2-2-0-rc" aria-hidden="true">#</a> <code>2.0-M2</code> -&gt; <code>2.0-RC</code></h3><ol><li><p>\u6233\u4E00\u6233\u4E8B\u4EF6\u7531\u4EE5\u524D\u7684\u591A\u4E2A\u4E8B\u4EF6\u53D8\u4E3A\u4E86\u7EDF\u4E00\u7684\u5355\u4E2A <code>NudgeEvent</code>\u3002\u82E5\u6709\u4F7F\u7528\u8BF7\u76F4\u63A5\u53C2\u8003 <code>NudgeEvent</code> \u6E90\u7801\u4FEE\u6539\u3002</p></li><li><p><code>Listener.ConcurrencyKind</code> \u548C <code>Listener.EventPriority</code> \u7531\u5D4C\u5957\u7C7B\u79FB\u52A8\u5230\u9876\u5C42\uFF0C\u8BF7\u6267\u884C\u5168\u5C40\u66FF\u6362\uFF1A</p><ul><li><code>Listener.ConcurrencyKind</code> -&gt; <code>ConcurrencyKind</code></li><li><code>Listener.EventPriority</code> -&gt; <code>EventPriority</code></li></ul></li><li><p><code>IMirai</code> \u4F4E\u7EA7 API \u51FD\u6570\u540D\u73B0\u5728\u4E0D\u518D\u5E26\u6709 <code>_lowLevel</code> \u524D\u7F00, \u76F4\u63A5\u5220\u9664\u524D\u7F00\u5373\u53EF\u3002</p></li></ol><p>\u5176\u4ED6\u4FEE\u6539\u90FD\u53EF\u4EE5\u81EA\u52A8\u66FF\u6362\u5B8C\u6210\u3002</p><h3 id="_2-0-rc-2-0-0" tabindex="-1"><a class="header-anchor" href="#_2-0-rc-2-0-0" aria-hidden="true">#</a> <code>2.0-RC</code> -&gt; <code>2.0.0</code></h3><p>\u76F4\u63A5\u628A\u7248\u672C\u53F7\u66F4\u6539\u4E3A <code>2.0.0</code>\u3002</p>',23),m=e("\u81F3\u6B64\u4F60\u5DF2\u7ECF\u6210\u529F\u5347\u7EA7\u5230\u4E86 mirai 2.0\u3002"),p=e("\u56DE\u5230 Mirai \u6587\u6863\u7D22\u5F15"),u=a(`<hr><h2 id="\u4F7F\u7528-java" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-java" aria-hidden="true">#</a> \u4F7F\u7528 Java</h2><p><strong>\u8BF7\u4F9D\u6B21\u6309\u5982\u4E0B\u6B65\u9AA4\u66F4\u65B0\u4EE5\u4E0B\u51E0\u4E2A\u7248\u672C</strong></p><h3 id="_1-x-2-0-m1" tabindex="-1"><a class="header-anchor" href="#_1-x-2-0-m1" aria-hidden="true">#</a> <code>1.x</code> -&gt; <code>2.0-M1</code></h3><ul><li>\u6D88\u606F\u4E8B\u4EF6\u5305\u540D\u6709\u8C03\u6574, \u8BF7\u6839\u636E IDE \u63D0\u793A\u81EA\u52A8\u5BFC\u5165\u5F15\u7528\u5931\u6548\u7684\u5305.</li><li>Bot \u6784\u9020\u65B9\u6CD5\u8C03\u6574, \u5C06\u539F <code>BotFactoryKt.newBot(...)</code> \u66FF\u6362\u4E3A <code>BotFactory.INSTANCE.newBot(...)</code></li><li>\u5982\u679C\u6709\u8C03\u7528 <code>Utils.getDefaultLogger().invoke(...)</code>\uFF0C\u66FF\u6362\u4E3A <code>MiraiLogger.create(...)</code></li><li><code>Bot.getFriend</code> \u7B49\u65B9\u6CD5\u4EE5\u524D\u5728\u627E\u4E0D\u5230\u597D\u53CB\u65F6\u4F1A\u629B\u51FA\u5F02\u5E38\uFF0C\u73B0\u5728\u5B83\u4EEC\u4F1A\u8FD4\u56DE <code>null</code>\u3002<br> \u8BF7\u66FF\u6362\u4E3A <code>Bot.getFriendOrFail</code>\u3002</li></ul><h3 id="_2-0-m1-2-0-m2-1" tabindex="-1"><a class="header-anchor" href="#_2-0-m1-2-0-m2-1" aria-hidden="true">#</a> <code>2.0-M1</code> -&gt; <code>2.0-M2</code></h3><p>\u56FE\u7247\u548C\u8BED\u97F3\u4E0A\u4F20\u7684 API \u6709\u66F4\u6539\u3002</p><p>\u65B0\u589E\u4E86\u8D44\u6E90 API\uFF0C\u53EF\u4EE5\u7EDF\u4E00\u7F13\u5B58\u6587\u4EF6\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ExternalResource.create(file);
ExternalResource.create(inputStream);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u4F20\u4E00\u4E2A\u8D44\u6E90\u4E3A\u56FE\u7247\u6216\u8BED\u97F3\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>contact.uploadImage(resource);
contact.uploadVoice(resource);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6216\u8005\u4F7F\u7528\u5DE5\u5177\u65B9\u6CD5\u76F4\u63A5\u53D1\u9001\u4E00\u4E2A <code>File</code> \u6216 <code>InputStream</code> \u4E3A\u56FE\u7247\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Contact.sendImage(contact, inputStream); // \u8FD4\u56DE MessageReceipt
Contact.sendImage(contact, file);        // \u8FD4\u56DE MessageReceipt

Contact.uploadImage(contact, inputStream); // \u8FD4\u56DE Image \u6D88\u606F
Contact.uploadImage(contact, file);        // \u8FD4\u56DE Image \u6D88\u606F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-0-m2-2-0-rc-1" tabindex="-1"><a class="header-anchor" href="#_2-0-m2-2-0-rc-1" aria-hidden="true">#</a> <code>2.0-M2</code> -&gt; <code>2.0-RC</code></h3><ol><li><p>\u6233\u4E00\u6233\u4E8B\u4EF6\u7531\u4EE5\u524D\u7684\u591A\u4E2A\u4E8B\u4EF6\u53D8\u4E3A\u4E86\u7EDF\u4E00\u7684\u5355\u4E2A <code>NudgeEvent</code>\u3002\u82E5\u6709\u4F7F\u7528\u8BF7\u76F4\u63A5\u53C2\u8003 <code>NudgeEvent</code> \u6E90\u7801\u4FEE\u6539\u3002</p></li><li><p><code>Listener.ConcurrencyKind</code> \u548C <code>Listener.EventPriority</code> \u7531\u5D4C\u5957\u7C7B\u79FB\u52A8\u5230\u9876\u5C42\uFF0C\u8BF7\u6267\u884C\u5168\u5C40\u66FF\u6362\uFF1A</p><ul><li><code>Listener.ConcurrencyKind</code> -&gt; <code>ConcurrencyKind</code></li><li><code>Listener.EventPriority</code> -&gt; <code>EventPriority</code></li></ul></li><li><p><code>IMirai</code> \u4F4E\u7EA7 API \u65B9\u6CD5\u540D\u73B0\u5728\u4E0D\u518D\u5E26\u6709 <code>_lowLevel</code> \u524D\u7F00, \u76F4\u63A5\u5220\u9664\u524D\u7F00\u5373\u53EF\u3002</p></li></ol><h3 id="_2-0-rc-2-0-0-1" tabindex="-1"><a class="header-anchor" href="#_2-0-rc-2-0-0-1" aria-hidden="true">#</a> <code>2.0-RC</code> -&gt; <code>2.0.0</code></h3><p>\u76F4\u63A5\u628A\u7248\u672C\u53F7\u66F4\u6539\u4E3A <code>2.0.0</code>\u3002</p>`,17),g=e("\u81F3\u6B64\u4F60\u5DF2\u7ECF\u6210\u529F\u5347\u7EA7\u5230\u4E86 mirai 2.0\u3002"),v=e("\u56DE\u5230 Mirai \u6587\u6863\u7D22\u5F15");function _(x,b){const o=r("RouterLink");return n(),l("div",null,[h,d("p",null,[m,i(o,{to:"/#jvm-%E5%B9%B3%E5%8F%B0-mirai-%E5%BC%80%E5%8F%91"},{default:c(()=>[p]),_:1})]),u,d("p",null,[g,i(o,{to:"/#jvm-%E5%B9%B3%E5%8F%B0-mirai-%E5%BC%80%E5%8F%91"},{default:c(()=>[v]),_:1})])])}var E=t(s,[["render",_],["__file","MigrationFrom1x.html.vue"]]);export{E as default};
