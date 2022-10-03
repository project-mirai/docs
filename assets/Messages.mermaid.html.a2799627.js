import{_ as s,o as e,c as n,d as a}from"./app.ef16e9a5.js";const r={},i=a(`<div class="language-mermaid ext-mermaid line-numbers-mode"><pre class="language-mermaid"><code><span class="token keyword">classDiagram</span>

<span class="token keyword">class</span> MessageChain
MessageChain <span class="token operator">:</span> List~SingleMessage~

Message<span class="token arrow operator">&lt;|--</span>MessageChain
Message<span class="token arrow operator">&lt;|--</span>SingleMessage

MessageChain <span class="token arrow operator">o--</span> SingleMessage

SingleMessage<span class="token arrow operator">&lt;|--</span>MessageContent
SingleMessage<span class="token arrow operator">&lt;|--</span>MessageMetadata


<span class="token comment">%%%</span>


MessageMetadata<span class="token arrow operator">&lt;|--</span>QuoteReply
MessageMetadata<span class="token arrow operator">&lt;|--</span>MessageSource


<span class="token comment">%%</span>

MessageSource<span class="token arrow operator">&lt;|--</span>OnlineMessageSource
MessageSource<span class="token arrow operator">&lt;|--</span>OfflineMessageSource

MessageContent<span class="token arrow operator">&lt;|--</span>PlainText
MessageContent<span class="token arrow operator">&lt;|--</span>Image
MessageContent<span class="token arrow operator">&lt;|--</span>At
MessageContent<span class="token arrow operator">&lt;|--</span>AtAll
MessageContent<span class="token arrow operator">&lt;|--</span>Face
MessageContent<span class="token arrow operator">&lt;|--</span>ForwardMessage

MessageContent<span class="token arrow operator">&lt;|--</span>HummerMessage
HummerMessage<span class="token arrow operator">&lt;|--</span>PokeMessage
HummerMessage<span class="token arrow operator">&lt;|--</span>VipFace
HummerMessage<span class="token arrow operator">&lt;|--</span>FlashImage

MessageContent<span class="token arrow operator">&lt;|--</span>RichMessage
RichMessage<span class="token arrow operator">&lt;|--</span>ServiceMessage
RichMessage<span class="token arrow operator">&lt;|--</span>LightApp


MessageContent<span class="token arrow operator">&lt;|--</span>PttMessage
PttMessage<span class="token arrow operator">&lt;|--</span>Voice
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),l=[i];function o(t,d){return e(),n("div",null,l)}var v=s(r,[["render",o],["__file","Messages.mermaid.html.vue"]]);export{v as default};
