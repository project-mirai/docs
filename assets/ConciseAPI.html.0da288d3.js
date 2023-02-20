import{_ as t,o,c,a as n,b as p,w as i,d as s,e as a,r as l}from"./app.09d22a30.js";const d={},u=s('<h1 id="mirai-concise-api" tabindex="-1"><a class="header-anchor" href="#mirai-concise-api" aria-hidden="true">#</a> Mirai - Concise API</h1><blockquote><p>\u6CE8:</p><ul><li>\u672C\u7AE0\u8282\u5C55\u793A\u5173\u4E8E <code>mirai-core-api</code> \u6BD4\u8F83\u5E38\u7528\u7684 API \u793A\u4F8B</li><li>\u8BF7\u914D\u5408 <code>mirai-core-api</code> \u6E90\u7801\u67E5\u770B</li><li>\u672C\u7AE0\u4EC5\u63D0\u4F9B API \u7C97\u7565\u4ECB\u7ECD</li></ul></blockquote><hr><h1 id="bots" tabindex="-1"><a class="header-anchor" href="#bots" aria-hidden="true">#</a> Bots</h1><h2 id="botfactory" tabindex="-1"><a class="header-anchor" href="#botfactory" aria-hidden="true">#</a> BotFactory</h2>',5),r=n("code",null,"BotFactory",-1),k=a(" \u7528\u4E8E\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684 "),m=n("code",null,"Bot",-1),v=a(", \u8BE6\u60C5\u8BF7\u770B "),h=a("Bots.md"),b=s(`<div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token keyword">val</span> bot <span class="token operator">=</span> BotFactory<span class="token punctuation">.</span><span class="token function">newBot</span><span class="token punctuation">(</span><span class="token comment">/*....*/</span><span class="token punctuation">)</span>

<span class="token comment">// Java</span>
Bot bot <span class="token operator">=</span> BotFactory<span class="token punctuation">.</span>INSTANCE<span class="token punctuation">.</span><span class="token function">newBot</span><span class="token punctuation">(</span><span class="token comment">/*....*/</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Bot bot <span class="token operator">=</span> Mirai<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getBotFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">newBot</span><span class="token punctuation">(</span><span class="token comment">/*....*/</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="misc-utils" tabindex="-1"><a class="header-anchor" href="#misc-utils" aria-hidden="true">#</a> Misc utils</h1><h2 id="logger" tabindex="-1"><a class="header-anchor" href="#logger" aria-hidden="true">#</a> Logger</h2><p>Mirai \u5168\u90E8\u7684\u65E5\u5FD7\u90FD\u901A\u8FC7 <code>MiraiLogger</code> \u8F93\u51FA, \u67E5\u770B <code>MiraiLogger</code> \u6E90\u7801\u6CE8\u91CA\u83B7\u5F97\u66F4\u591A\u4FE1\u606F</p><h2 id="externalresource" tabindex="-1"><a class="header-anchor" href="#externalresource" aria-hidden="true">#</a> ExternalResource</h2><p><code>ExternalResource</code> \u4EE3\u8868\u4E00\u4E2A\u5916\u90E8\u6587\u4EF6, \u53EF\u7528\u4E8E \u6587\u4EF6\u4E0A\u4F20, \u56FE\u7247\u53D1\u9001, etc.</p><p>\u6784\u9020 <code>ExternalResource</code> \u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u65B9\u6CD5\u6784\u9020</p><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token comment">// kotlin</span>
<span class="token function">File</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;foo.txt&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toExternalResource</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// java</span>
ExternalResource<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>new <span class="token function">File</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;foo.txt&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>ExternalResource.create()</code> \u5185\u7F6E\u652F\u6301\u7684\u6570\u636E\u7C7B\u578B\u6709 <code>java.io.File</code>, <code>java.io.RandomAccessFile</code>, <code>byte[]</code>, <code>java.io.InputStream</code></p><blockquote><p>\u6CE8:</p><ul><li><code>ExternalResource</code> \u548C <code>java.io.InputStream</code> \u7B49\u8D44\u6E90\u4E00\u6837, \u9700\u8981\u624B\u52A8\u5173\u95ED <code>close()</code></li><li>\u4F7F\u7528 <code>java.io.InputStream</code> \u6784\u9020 <code>ExternalResource</code> \u65F6, \u9700\u8981\u5173\u95ED <code>java.io.InputStream</code></li><li>\u4F7F\u7528 <code>java.io.RandomAccessFile</code> \u6784\u9020 <code>ExternalResource</code> \u65F6, \u8BF7\u4E0D\u8981\u5173\u95ED <code>RandomAccessFile</code>, \u5426\u5219\u4F1A\u95F4\u63A5\u5173\u95ED <code>ExternalResource</code></li></ul></blockquote><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token comment">// Example</span>

<span class="token comment">// kotlin</span>
<span class="token keyword">val</span> inputStream<span class="token operator">:</span> InputStream <span class="token operator">=</span> <span class="token function">TODO</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">val</span> resource <span class="token operator">=</span> inputStream<span class="token punctuation">.</span><span class="token function">use</span> <span class="token punctuation">{</span> it<span class="token punctuation">.</span><span class="token function">toExternalResource</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>

<span class="token comment">// java</span>
ExternalResource resource<span class="token punctuation">;</span>
<span class="token keyword">try</span> <span class="token punctuation">(</span>InputStream inputStream <span class="token operator">=</span> <span class="token function">TODO</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    resource <span class="token operator">=</span> ExternalResource<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>inputStream<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>IOException exception<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// on Exception catch</span>
    <span class="token keyword">throw</span> new <span class="token function">RuntimeException</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;Can&#39;t create a new external resource&quot;</span></span><span class="token punctuation">,</span> exception<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u81EA\u884C\u5B9E\u73B0-externalresource" tabindex="-1"><a class="header-anchor" href="#\u81EA\u884C\u5B9E\u73B0-externalresource" aria-hidden="true">#</a> \u81EA\u884C\u5B9E\u73B0 ExternalResource</h3><p>\u4ECE 2.9.0 \u5F00\u59CB\uFF0C\u53EF\u4EE5\u5F88\u5BB9\u6613\u5B9E\u73B0\u81EA\u5B9A\u4E49 <code>ExternalResource</code></p><p><code>@see</code> <code>AbstractExternalResource</code> \u6E90\u7801\u6CE8\u91CA</p><h1 id="contact-message" tabindex="-1"><a class="header-anchor" href="#contact-message" aria-hidden="true">#</a> Contact &amp; Message</h1><h2 id="send-image" tabindex="-1"><a class="header-anchor" href="#send-image" aria-hidden="true">#</a> Send Image</h2><h3 id="origin-send-image" tabindex="-1"><a class="header-anchor" href="#origin-send-image" aria-hidden="true">#</a> Origin send image</h3><p>\u6700\u539F\u59CB\u7684\u53D1\u9001\u56FE\u7247\u7684\u65B9\u6CD5\uFF0C\u5C31\u662F\u5148 <code>uploadImage</code> \u7136\u540E <code>sendMessage</code></p><p>Kotlin \u53EF\u4EE5\u4F7F\u7528\u81EA\u52A8\u8865\u5168\u5F97\u5230\u76F8\u5173\u65B9\u6CD5</p><blockquote><p><code>contact.uploadImage // IDEA \u8865\u5168</code></p></blockquote><p>Java \u53EF\u4EE5\u4F7F\u7528 <code>contact.uploadImage(ExternalResource)</code> \u6765\u5F97\u5230\u4E00\u4E2A\u56FE\u7247\u5BF9\u8C61 (<s>\u8FD9\u4E5F\u662F\u4E3A\u5565 ExternalResource \u5728\u524D\u9762</s>) \u4E5F\u53EF\u4EE5\u4F7F\u7528 <code>Contact</code> \u5185\u7684\u9759\u6001\u65B9\u6CD5</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Image</span> i <span class="token operator">=</span> <span class="token class-name">Contact</span><span class="token punctuation">.</span><span class="token function">uploadImage</span><span class="token punctuation">(</span><span class="token comment">/*....*/</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Image</span> i <span class="token operator">=</span> <span class="token class-name">ExternalResource</span><span class="token punctuation">.</span><span class="token function">uploadAsImage</span><span class="token punctuation">(</span><span class="token comment">/*...*/</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sendimage" tabindex="-1"><a class="header-anchor" href="#sendimage" aria-hidden="true">#</a> sendImage</h3><p><code>sendImage</code> \u76F8\u5F53\u4E8E\u5148\u8FDB\u884C <code>uploadImage</code> \u7136\u540E\u518D <code>sendMessage</code></p><p>Kotlin \u53EF\u4EE5\u4F7F\u7528\u81EA\u52A8\u8865\u5168\u5F97\u5230\u76F8\u5173\u65B9\u6CD5</p><blockquote><p><code>contact.sendImage // IDEA \u8865\u5168</code></p></blockquote><p>\u7531\u4E8E <code>sendImage</code> \u662F <code>Contact</code> \u548C <code>ExternalResource</code> \u5185\u7684\u9759\u6001\u65B9\u6CD5, Java \u53EF\u4EE5\u4F7F\u7528\u4E0B\u8FF0\u65B9\u6CD5\u8C03\u7528</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Contact</span><span class="token punctuation">.</span><span class="token function">sendImage</span><span class="token punctuation">(</span><span class="token comment">/**/</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">ExternalResource</span><span class="token punctuation">.</span><span class="token function">sendAsImage</span><span class="token punctuation">(</span><span class="token comment">/*...*/</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="send-audio" tabindex="-1"><a class="header-anchor" href="#send-audio" aria-hidden="true">#</a> Send Audio</h2><p>\u53D1\u9001\u8BED\u97F3\u4E0E\u53D1\u9001\u56FE\u7247\u7684\u533A\u522B\u4E0D\u5927\uFF0C\u90FD\u662F\u5148 <code>upload</code> \u7136\u540E <code>send</code></p><blockquote><ul><li>\u5728 2.7.0 \u4E4B\u524D\uFF0C\u53EA\u6709\u7FA4\u804A (<code>Group</code>) \u652F\u6301\u8BED\u97F3\uFF08\u4F7F\u7528 <code>Voice</code>\uFF09, 2.7.0 \u4E4B\u540E\u652F\u6301\u79C1\u804A\u8BED\u97F3\uFF08\u4F7F\u7528 <code>Audio</code>\uFF09</li><li>\u6BCF\u6B21\u53D1\u9001\u65B0\u8BED\u97F3\u524D\u6700\u597D\u91CD\u65B0 <code>upload</code>, \u907F\u514D\u590D\u7528 <code>Audio</code> \u5BF9\u8C61</li><li><strong>\u53EA\u652F\u6301 <code>amr</code> \u548C <code>silk</code> \u683C\u5F0F</strong></li></ul></blockquote><p>\u8981\u5F97\u5230\u4E00\u4E2A\u8BED\u97F3\u5BF9\u8C61, \u9700\u8981\u5148 <code>uploadAudio</code></p><p>Kotlin \u53EF\u4EE5\u4F7F\u7528\u81EA\u52A8\u8865\u5168\u5F97\u5230\u76F8\u5173\u65B9\u6CD5</p><blockquote><p><code>contact.uploadAudio // IDEA \u8865\u5168</code></p></blockquote><p>Java \u53EF\u4EE5\u4F7F\u7528 <code>contact.uploadAudio(ExternalResource)</code> \u6765\u5F97\u5230\u4E00\u4E2A\u8BED\u97F3\u5BF9\u8C61 (<s>\u8FD9\u4E5F\u662F\u4E3A\u5565 ExternalResource \u5728\u524D\u9762</s>) \u4E5F\u53EF\u4EE5\u4F7F\u7528 <code>ExternalResource</code> \u5B9A\u4E49\u7684\u6269\u5C55\u65B9\u6CD5\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>contact<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token class-name">ExternalResource</span><span class="token punctuation">.</span><span class="token function">uploadAsAudio</span><span class="token punctuation">(</span><span class="token comment">/*...*/</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="members" tabindex="-1"><a class="header-anchor" href="#members" aria-hidden="true">#</a> Members</h2><p><code>Member</code> \u5BF9\u8C61\u5206\u4E3A <code>NormalMember</code>(\u6B63\u5E38\u7684\u7FA4\u6210\u5458) \u548C <code>AnonymousMember</code>(\u533F\u540D)</p><p>\u5BF9 <code>Member</code> \u64CD\u4F5C\u65F6\u9700\u8981\u5177\u4F53\u64CD\u4F5C\u65F6\u5E94\u8BE5\u5148\u5224\u65AD\u662F\u5426\u4E3A <code>NormalMember</code> \u7136\u540E\u5F3A\u8F6C</p><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token comment">// kotlin</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>member <span class="token keyword">is</span> NormalMember<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// kotlin smart cast</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// java</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>member <span class="token keyword">instanceof</span> <span class="token class-name">NormalMember</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">NormalMember</span> nMember <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">NormalMember</span><span class="token punctuation">)</span> member<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="recall-message" tabindex="-1"><a class="header-anchor" href="#recall-message" aria-hidden="true">#</a> Recall Message</h2><p>\u64A4\u56DE\u4FE1\u606F\u53EF\u4EE5\u901A\u8FC7 <code>MessageChain</code> \u6216\u8005 <code>MessageSource</code> \u64A4\u56DE\u3002</p><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code>subscribeAlways<span class="token operator">&lt;</span>MessageEvent<span class="token operator">&gt;</span> <span class="token punctuation">{</span><span class="token comment">// this: MessageEvent</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>message<span class="token punctuation">.</span><span class="token function">recall</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>message<span class="token punctuation">.</span>source<span class="token punctuation">.</span><span class="token function">recall</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    
    <span class="token comment">// Java</span>
    MessageSource<span class="token punctuation">.</span><span class="token function">recall</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    MessageSource<span class="token punctuation">.</span><span class="token function">recall</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getOrFail</span><span class="token punctuation">(</span>MessageSource<span class="token punctuation">.</span>Key<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h1><p>\u5E38\u7528\u4E8B\u4EF6</p><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Desc</th></tr></thead><tbody><tr><td style="text-align:left;">MessageEvent</td><td style="text-align:left;">Bot \u6536\u5230\u4E00\u6761\u65B0\u6D88\u606F</td></tr><tr><td style="text-align:left;">NewFriendRequestEvent</td><td style="text-align:left;">\u4F60\u6709\u4E00\u6761\u65B0\u7684\u597D\u53CB\u7533\u8BF7</td></tr><tr><td style="text-align:left;">MemberJoinEvent</td><td style="text-align:left;">\u6709\u65B0\u7FA4\u6210\u5458\u52A0\u5165\u7FA4</td></tr><tr><td style="text-align:left;">MemberLeaveEvent</td><td style="text-align:left;">\u7FA4\u6210\u5458\u79BB\u5F00\u7FA4\u804A</td></tr><tr><td style="text-align:left;">BotInvitedJoinGroupRequestEvent</td><td style="text-align:left;">Bot \u6536\u5230\u4E86\u4E00\u4E2A\u52A0\u7FA4\u9080\u8BF7</td></tr><tr><td style="text-align:left;">BotJoinGroupEvent</td><td style="text-align:left;">Bot \u52A0\u5165\u4E86\u4E00\u4E2A\u7FA4\u804A</td></tr><tr><td style="text-align:left;">MemberJoinRequestEvent</td><td style="text-align:left;">\u65B0\u7684\u5165\u7FA4\u7533\u8BF7</td></tr></tbody></table><h3 id="messageevent" tabindex="-1"><a class="header-anchor" href="#messageevent" aria-hidden="true">#</a> MessageEvent</h3><p>\u5F53\u76F4\u63A5\u76D1\u542C <code>MessageEvent</code> \u65F6\uFF0C\u53EF\u4EE5\u8003\u8651\u6392\u9664 Bot \u4FE1\u606F\u540C\u6B65\u4E8B\u4EF6 <code>MessageSyncEvent</code></p><p><code>MessageSyncEvent</code> \u662F <code>Bot</code> \u8D26\u53F7\u5728\u5176\u4ED6\u5BA2\u6237\u7AEF\u53D1\u9001\u6D88\u606F\u65F6\u540C\u6B65\u5230 mirai \u7684\u4E8B\u4EF6</p><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code>eventChannel<span class="token punctuation">.</span>subscribeAlways<span class="token operator">&lt;</span>MessageEvent<span class="token operator">&gt;</span> <span class="token punctuation">{</span> <span class="token comment">// this: MessageEvent</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token keyword">is</span> MessageSyncEvent<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token label symbol">@subscribeAlways</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="imirai" tabindex="-1"><a class="header-anchor" href="#imirai" aria-hidden="true">#</a> IMirai</h1><p><code>Mirai API</code> \u63A5\u53E3. \u662F <code>Mirai API</code> \u4E0E Mirai \u534F\u8BAE\u5B9E\u73B0\u5BF9\u63A5\u7684\u63A5\u53E3.</p><p><code>IMirai</code> \u5185\u5B9A\u4E49\u7684\u63A5\u53E3\u90FD\u662F\u8F83\u5E95\u5C42\u7684 API, \u5982\u679C\u65E0\u5FC5\u8981, \u5C3D\u91CF\u907F\u514D\u4F7F\u7528 <code>IMirai</code> \u76F8\u5173\u7684\u65B9\u6CD5</p><p>\u6700\u5E95\u5C42\u7684\u65B9\u6CD5\u4F4D\u4E8E <code>LowLevelApiAccessor</code> \u5185, \u5176\u65B9\u6CD5\u90FD\u4F7F\u7528 <code>@LowLeveApi</code> \u6807\u6CE8, <code>IMirai</code> \u63A5\u53E3\u7EE7\u627F <code>LowLevelApiAccessor</code></p><p>\u4F7F\u7528 <code>IMirai</code> \u7684\u6807\u51C6 API \u6709\u7A33\u5B9A\u6027\u4FDD\u969C, \u4F46\u662F\u7531 <code>@LowLevelApi</code> \u6807\u6CE8\u7684\u65B9\u6CD5\u65E0\u4FDD\u969C</p>`,56);function g(x,f){const e=l("RouterLink");return o(),c("div",null,[u,n("p",null,[r,k,m,v,p(e,{to:"/Bots.html"},{default:i(()=>[h]),_:1})]),b])}var E=t(d,[["render",g],["__file","ConciseAPI.html.vue"]]);export{E as default};
