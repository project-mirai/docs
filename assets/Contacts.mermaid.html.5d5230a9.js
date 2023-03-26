import{_ as n,o as s,c as a,d as e}from"./app.6eb39d1e.js";const i={},t=e(`<div class="language-mermaid ext-mermaid line-numbers-mode"><pre class="language-mermaid"><code><span class="token keyword">classDiagram</span>

<span class="token keyword">class</span> Bot <span class="token punctuation">{</span>
    +friends<span class="token operator">:</span> ContactList
    +groups<span class="token operator">:</span> ContactList
    +getFriend<span class="token text string">(Long)</span> Friend?
    +getFriendOrNull<span class="token text string">(Long)</span> Friend
    +getGroup<span class="token text string">(Long)</span> Group?
    +getGroupOrFail<span class="token text string">(Long)</span> Group
    +login<span class="token punctuation">(</span><span class="token punctuation">)</span>
    +close<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> ContactOrBot <span class="token punctuation">{</span>
    +id<span class="token operator">:</span> Int
    +avatarUrl<span class="token operator">:</span> String
<span class="token punctuation">}</span>

<span class="token keyword">class</span> UserOrBot <span class="token punctuation">{</span>
    +nudge<span class="token punctuation">(</span><span class="token punctuation">)</span> Nudge
<span class="token punctuation">}</span>

<span class="token keyword">class</span> Contact <span class="token punctuation">{</span>
    +bot<span class="token operator">:</span> Bot
    +sendMessage<span class="token text string">(Message)</span> MessageReceipt
    +sendMessage<span class="token text string">(String)</span> MessageReceipt
    +uploadImage<span class="token text string">(ExternalImage)</span> Image
<span class="token punctuation">}</span>

<span class="token keyword">class</span> User <span class="token punctuation">{</span>
    +nick<span class="token operator">:</span> String
    +remark<span class="token operator">:</span> String
    +queryProfile<span class="token punctuation">(</span><span class="token punctuation">)</span> UserProfile
<span class="token punctuation">}</span>

<span class="token keyword">class</span> Group <span class="token punctuation">{</span>
    +members<span class="token operator">:</span> ContactList
    +name<span class="token operator">:</span> String
    +settings<span class="token operator">:</span> GroupSettings
    +owner<span class="token operator">:</span> NormalMember
    +botMuteRemaining<span class="token operator">:</span> Long
    +botPermission<span class="token operator">:</span> MemberPermission
    +quit<span class="token punctuation">(</span><span class="token punctuation">)</span> Boolean
    +uploadVoice<span class="token punctuation">(</span><span class="token punctuation">)</span> Voice
<span class="token punctuation">}</span>

<span class="token keyword">class</span> NormalMember <span class="token punctuation">{</span>
    +mute<span class="token punctuation">(</span><span class="token punctuation">)</span>
    +kick<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> AnonymousMember <span class="token punctuation">{</span>
    +anonymousId<span class="token operator">:</span> String
<span class="token punctuation">}</span>

<span class="token keyword">class</span> Member <span class="token punctuation">{</span>
    +group<span class="token operator">:</span> Group
<span class="token punctuation">}</span>

<span class="token keyword">class</span> OtherClient <span class="token punctuation">{</span>
    +info
<span class="token punctuation">}</span>

ContactOrBot<span class="token arrow operator">&lt;|--</span>Contact
ContactOrBot<span class="token arrow operator">&lt;|--</span>UserOrBot

UserOrBot<span class="token arrow operator">&lt;|--</span>Bot
UserOrBot<span class="token arrow operator">&lt;|--</span>User

Contact<span class="token arrow operator">&lt;|--</span>User
Contact<span class="token arrow operator">&lt;|--</span>Group
Contact<span class="token arrow operator">&lt;|--</span>OtherClient

User<span class="token arrow operator">&lt;|--</span>Member
User<span class="token arrow operator">&lt;|--</span>Friend

Member<span class="token arrow operator">&lt;|--</span>NormalMember
Member<span class="token arrow operator">&lt;|--</span>AnonymousMember
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),l=[t];function o(r,c){return s(),a("div",null,l)}var d=n(i,[["render",o],["__file","Contacts.mermaid.html.vue"]]);export{d as default};
