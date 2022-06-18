import{_ as l,r as a,o as c,c as d,a as e,b as n,w as r,e as t,d as o}from"./app.fa05826c.js";const m={},p=e("h1",{id:"mirai-console-backend-permissions",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#mirai-console-backend-permissions","aria-hidden":"true"},"#"),t(" Mirai Console Backend - Permissions")],-1),h=e("p",null,"Mirai Console \u6743\u9650\u7CFB\u7EDF\u3002",-1),_=e("blockquote",null,[e("p",null,"\u4F18\u5148\u4F7F\u7528 Mirai Console \u6743\u9650\u7CFB\u7EDF\u7BA1\u7406\u6743\u9650\u662F\u6700\u597D\u7684\u9009\u62E9")],-1),u=e("h2",{id:"\u6743\u9650",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u6743\u9650","aria-hidden":"true"},"#"),t(" \u6743\u9650")],-1),k=t("\u6BCF\u4E2A\u6743\u9650\u90FD\u7531 "),g={href:"https://github.com/mamoe/mirai/tree/dev/mirai-console/backend/mirai-console/src/permission/Permission.kt",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"Permission",-1),f=t(" \u5BF9\u8C61\u8868\u793A\u3002"),v=t("\u4E00\u4E2A "),x={href:"https://github.com/mamoe/mirai/tree/dev/mirai-console/backend/mirai-console/src/permission/Permission.kt",target:"_blank",rel:"noopener noreferrer"},P=e("code",null,"Permission",-1),y=t(" \u62E5\u6709\u8FD9\u4E9B\u4FE1\u606F\uFF1A"),I=o(`<div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token keyword">interface</span> Permission <span class="token punctuation">{</span>
    <span class="token keyword">val</span> id<span class="token operator">:</span> PermissionId <span class="token comment">// \u552F\u4E00\u8BC6\u522B ID</span>
    <span class="token keyword">val</span> description<span class="token operator">:</span> String <span class="token comment">// \u63CF\u8FF0\u4FE1\u606F</span>
    <span class="token keyword">val</span> parent<span class="token operator">:</span> Permission <span class="token comment">// \u7236\u6743\u9650</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u300C\u6743\u9650\u300D\u8868\u793A\u7684\u610F\u4E49\u662F \u201C\u505A\u4E00\u9879\u5DE5\u4F5C\u7684\u80FD\u529B\u201D\u3002\u5982 \u201C\u6267\u884C\u6307\u4EE4 /stop\u201D\uFF0C\u201C\u64CD\u4F5C\u6570\u636E\u5E93\u201D \u90FD\u80FD\u53EB\u4F5C\u6743\u9650\u3002</p>`,2),q={href:"https://github.com/mamoe/mirai/tree/dev/mirai-console/backend/mirai-console/src/permission/Permission.kt",target:"_blank",rel:"noopener noreferrer"},E=e("code",null,"Permission",-1),A=t(" \u5BF9\u8C61\u7531 Console \u5185\u7F6E\u6216\u8005\u7531\u7279\u5B9A\u6743\u9650\u63D2\u4EF6\u5B9E\u73B0\u3002\u5176\u4ED6\u63D2\u4EF6\u4E0D\u80FD\u5B9E\u73B0 "),w={href:"https://github.com/mamoe/mirai/tree/dev/mirai-console/backend/mirai-console/src/permission/Permission.kt",target:"_blank",rel:"noopener noreferrer"},B=e("code",null,"Permission",-1),D=t(" \u63A5\u53E3\uFF0C\u53EA\u80FD\u4ECE "),S=e("code",null,"PermissionService",-1),C=t(" \u6CE8\u518C\u5E76\u83B7\u53D6\u3002"),L=o(`<h3 id="\u6743\u9650-id" tabindex="-1"><a class="header-anchor" href="#\u6743\u9650-id" aria-hidden="true">#</a> \u6743\u9650 ID</h3><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token keyword">data</span> <span class="token keyword">class</span> <span class="token function">PermissionId</span><span class="token punctuation">(</span>
    <span class="token keyword">val</span> namespace<span class="token operator">:</span> String<span class="token punctuation">,</span> <span class="token comment">// \u547D\u540D\u7A7A\u95F4</span>
    <span class="token keyword">val</span> name<span class="token operator">:</span> String<span class="token punctuation">,</span> <span class="token comment">// \u540D\u79F0</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),M={href:"https://github.com/mamoe/mirai/tree/dev/mirai-console/backend/mirai-console/src/permission/PermissionId.kt",target:"_blank",rel:"noopener noreferrer"},K=e("code",null,"PermissionId",-1),V=t(" \u662F "),J={href:"https://github.com/mamoe/mirai/tree/dev/mirai-console/backend/mirai-console/src/permission/Permission.kt",target:"_blank",rel:"noopener noreferrer"},N=e("code",null,"Permission",-1),R=t(" \u7684\u552F\u4E00\u6807\u8BC6\u7B26\u3002\u77E5\u9053 "),F={href:"https://github.com/mamoe/mirai/tree/dev/mirai-console/backend/mirai-console/src/permission/PermissionId.kt",target:"_blank",rel:"noopener noreferrer"},H=e("code",null,"PermissionId",-1),$=t(" \u5C31\u53EF\u4EE5\u83B7\u53D6\u5230\u5BF9\u5E94\u7684 "),T={href:"https://github.com/mamoe/mirai/tree/dev/mirai-console/backend/mirai-console/src/permission/Permission.kt",target:"_blank",rel:"noopener noreferrer"},U=e("code",null,"Permission",-1),j=t("\u3002"),z=e("p",null,[t("\u5B57\u7B26\u4E32\u8868\u793A\u4E3A "),e("code",null,"$namespace:$name"),t("\uFF0C\u5982 "),e("code",null,"console:command.stop"),t(", "),e("code",null,"*:*")],-1),G=t("\u4E00\u822C\u60C5\u51B5\u4E0B\u4F7F\u7528\u4F4D\u4E8E\u63D2\u4EF6\u5BF9\u8C61("),O=e("code",null,"JvmPlugin",-1),Q=t(") \u7684 "),W=e("code",null,"permissionId",-1),X=t(" \u4E3A\u63D2\u4EF6\u5206\u914D\u4E00\u4E2A "),Y={href:"https://github.com/mamoe/mirai/tree/dev/mirai-console/backend/mirai-console/src/permission/PermissionId.kt",target:"_blank",rel:"noopener noreferrer"},Z=e("code",null,"PermissionId",-1),ee=o('<h4 id="\u547D\u540D\u7A7A\u95F4" tabindex="-1"><a class="header-anchor" href="#\u547D\u540D\u7A7A\u95F4" aria-hidden="true">#</a> \u547D\u540D\u7A7A\u95F4</h4><p>\u547D\u540D\u7A7A\u95F4\uFF08<code>namespace</code>\uFF09\u7528\u4E8E\u9650\u5B9A\u6743\u9650\u7684\u521B\u5EFA\u8005\uFF0C\u907F\u514D\u51B2\u7A81\u3002</p><p>\u4E00\u4E9B\u5E38\u89C1\u547D\u540D\u7A7A\u95F4\uFF1A</p><table><thead><tr><th style="text-align:left;">\u7528\u9014</th><th style="text-align:left;">\u547D\u540D\u7A7A\u95F4</th></tr></thead><tbody><tr><td style="text-align:left;">\u6839\u6743\u9650</td><td style="text-align:left;"><code>&quot;*&quot;</code></td></tr><tr><td style="text-align:left;">Console \u5185\u7F6E</td><td style="text-align:left;"><code>&quot;console&quot;</code></td></tr><tr><td style="text-align:left;">ID \u4E3A A \u7684\u63D2\u4EF6</td><td style="text-align:left;"><code>&quot;A&quot;</code></td></tr></tbody></table><h4 id="\u540D\u79F0" tabindex="-1"><a class="header-anchor" href="#\u540D\u79F0" aria-hidden="true">#</a> \u540D\u79F0</h4><p>\u540D\u79F0\u5219\u8868\u793A\u7279\u5B9A\u7684\u542B\u4E49\u3002\u5982\u4E00\u4E2A\u6307\u4EE4\uFF0C\u67D0\u4E00\u9879\u64CD\u4F5C\u7B49\u3002</p><p>\u4E00\u4E9B\u5E38\u89C1\u540D\u79F0\uFF1A</p><table><thead><tr><th style="text-align:left;">\u7528\u9014</th><th style="text-align:left;">\u540D\u79F0</th></tr></thead><tbody><tr><td style="text-align:left;">\u6839\u6743\u9650</td><td style="text-align:left;"><code>&quot;*&quot;</code></td></tr><tr><td style="text-align:left;">Console \u5185\u7F6E\u7684\u540D\u4E3A A \u7684\u6307\u4EE4</td><td style="text-align:left;"><code>&quot;command.A&quot;</code></td></tr><tr><td style="text-align:left;">ID \u4E3A A \u7684\u63D2\u4EF6\u7684\u540D\u4E3A B \u7684\u6307\u4EE4</td><td style="text-align:left;"><code>&quot;command.B&quot;</code></td></tr></tbody></table><h4 id="\u6839\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#\u6839\u6743\u9650" aria-hidden="true">#</a> \u6839\u6743\u9650</h4>',9),te={href:"https://github.com/mamoe/mirai/tree/dev/mirai-console/backend/mirai-console/src/permission/Permission.kt#L82",target:"_blank",rel:"noopener noreferrer"},ne=e("code",null,"RootPermission",-1),se=t(" \u662F\u6240\u6709\u6743\u9650\u7684\u7236\u6743\u9650\u3002\u5176 ID \u4E3A "),oe=e("code",null,"*:*",-1),ie=t("\u5982\u679C "),re={href:"https://github.com/mamoe/mirai/tree/dev/mirai-console/backend/mirai-console/src/permission/Permittee.kt",target:"_blank",rel:"noopener noreferrer"},ae=e("code",null,"Permittee",-1),le=t(" (\u89C1\u4E0B\u6587) \u62E5\u6709\u6839\u6743\u9650, \u76F8\u5F53\u4E8E "),ce={href:"https://github.com/mamoe/mirai/tree/dev/mirai-console/backend/mirai-console/src/permission/Permittee.kt",target:"_blank",rel:"noopener noreferrer"},de=e("code",null,"Permittee",-1),me=t(" \u62E5\u6709\u5168\u90E8\u6743\u9650 (\u5185\u7F6E\u5B9E\u73B0)"),pe=o(`<h2 id="\u88AB\u8BB8\u53EF\u4EBA" tabindex="-1"><a class="header-anchor" href="#\u88AB\u8BB8\u53EF\u4EBA" aria-hidden="true">#</a> \u88AB\u8BB8\u53EF\u4EBA</h2><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token keyword">interface</span> Permittee <span class="token punctuation">{</span>
    <span class="token keyword">val</span> permitteeId<span class="token operator">:</span> PermitteeId
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),he={href:"https://github.com/mamoe/mirai/tree/dev/mirai-console/backend/mirai-console/src/permission/Permittee.kt",target:"_blank",rel:"noopener noreferrer"},_e=e("code",null,"Permittee",-1),ue=t(" \u8868\u793A\u4E00\u4E2A\u53EF\u88AB\u8D4B\u4E88\u6743\u9650\u7684\u5BF9\u8C61\uFF0C\u5373 '\u88AB\u8BB8\u53EF\u4EBA'\u3002"),ke={href:"https://github.com/mamoe/mirai/tree/dev/mirai-console/backend/mirai-console/src/command/CommandSender.kt",target:"_blank",rel:"noopener noreferrer"},ge=e("code",null,"CommandSender",-1),be=t(" \u5B9E\u73B0 "),fe={href:"https://github.com/mamoe/mirai/tree/dev/mirai-console/backend/mirai-console/src/permission/Permittee.kt",target:"_blank",rel:"noopener noreferrer"},ve=e("code",null,"Permittee",-1),xe=t("\u3002"),Pe=t("\u88AB\u8BB8\u53EF\u4EBA\u81EA\u8EAB\u4E0D\u6301\u6709\u62E5\u6709\u7684\u6743\u9650\u5217\u8868\uFF0C\u800C\u662F\u62E5\u6709 "),ye={href:"https://github.com/mamoe/mirai/tree/dev/mirai-console/backend/mirai-console/src/permission/PermitteeId.kt",target:"_blank",rel:"noopener noreferrer"},Ie=e("code",null,"PermitteeId",-1),qe=t("\uFF0C\u6807\u8BC6\u81EA\u5DF1\u7684\u8EAB\u4EFD\uFF0C\u4F9B "),Ee={href:"https://github.com/mamoe/mirai/tree/dev/mirai-console/backend/mirai-console/src/permission/PermissionService.kt",target:"_blank",rel:"noopener noreferrer"},Ae=t("\u6743\u9650\u670D\u52A1"),we=t(" \u5904\u7406\u3002"),Be=e("strong",null,"\u6CE8\u610F",-1),De=t("\uFF1A\u8BF7\u4E0D\u8981\u81EA\u4E3B\u5B9E\u73B0 "),Se={href:"https://github.com/mamoe/mirai/tree/dev/mirai-console/backend/mirai-console/src/permission/Permittee.kt",target:"_blank",rel:"noopener noreferrer"},Ce=e("code",null,"Permittee",-1),Le=t("\u3002"),Me=o(`<h3 id="\u88AB\u8BB8\u53EF\u4EBA-id" tabindex="-1"><a class="header-anchor" href="#\u88AB\u8BB8\u53EF\u4EBA-id" aria-hidden="true">#</a> \u88AB\u8BB8\u53EF\u4EBA ID</h3><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token keyword">interface</span> PermitteeId <span class="token punctuation">{</span>
    <span class="token keyword">val</span> directParents<span class="token operator">:</span> Array<span class="token operator">&lt;</span><span class="token keyword">out</span> PermitteeId<span class="token operator">&gt;</span> <span class="token comment">// \u76F4\u63A5\u7236\u5BF9\u8C61</span>
    <span class="token keyword">fun</span> <span class="token function">asString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> String <span class="token comment">// \u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32\u8868\u793A</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Ke={href:"https://github.com/mamoe/mirai/tree/dev/mirai-console/backend/mirai-console/src/permission/PermitteeId.kt",target:"_blank",rel:"noopener noreferrer"},Ve=e("code",null,"PermitteeId",-1),Je=t(" \u662F\u88AB\u8BB8\u53EF\u4EBA\u7684\u6807\u8BC6\u7B26\u3002"),Ne=t("\u4E00\u4E2A\u8FD9\u6837\u7684\u6807\u8BC6\u7B26\u65E2\u53EF\u4EE3\u8868\u7279\u5B9A\u7684\u5355\u4E2A "),Re={href:"https://github.com/mamoe/mirai/tree/dev/mirai-console/backend/mirai-console/src/permission/Permittee.kt",target:"_blank",rel:"noopener noreferrer"},Fe=e("code",null,"Permittee",-1),He=t(", \u4E5F\u53EF\u4EE5\u8868\u793A\u591A\u4E2A\u540C\u7C7B "),$e={href:"https://github.com/mamoe/mirai/tree/dev/mirai-console/backend/mirai-console/src/permission/Permittee.kt",target:"_blank",rel:"noopener noreferrer"},Te=e("code",null,"Permittee",-1),Ue=t("."),je=e("h4",{id:"directparents",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#directparents","aria-hidden":"true"},"#"),t(),e("code",null,"directParents")],-1),ze={href:"https://github.com/mamoe/mirai/tree/dev/mirai-console/backend/mirai-console/src/permission/PermitteeId.kt",target:"_blank",rel:"noopener noreferrer"},Ge=e("code",null,"PermitteeId",-1),Oe=t(" \u5141\u8BB8\u62E5\u6709\u591A\u4E2A\u7236\u5BF9\u8C61\u3002\u5728\u68C0\u67E5\u6743\u9650\u65F6\u4F1A\u9996\u5148\u68C0\u67E5\u81EA\u5DF1, \u518D\u9012\u5F52\u68C0\u67E5\u7236\u7C7B\u3002"),Qe=e("h4",{id:"\u884D\u751F\u7C7B\u578B",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u884D\u751F\u7C7B\u578B","aria-hidden":"true"},"#"),t(" \u884D\u751F\u7C7B\u578B")],-1),We={href:"https://github.com/mamoe/mirai/tree/dev/mirai-console/backend/mirai-console/src/permission/PermitteeId.kt",target:"_blank",rel:"noopener noreferrer"},Xe=e("code",null,"PermitteeId",-1),Ye=t(" \u7684\u5B9E\u73B0\u901A\u5E38\u662F "),Ze={href:"https://github.com/mamoe/mirai/tree/dev/mirai-console/backend/mirai-console/src/permission/PermitteeId.kt#L77",target:"_blank",rel:"noopener noreferrer"},et=e("code",null,"AbstractPermitteeId",-1),tt=t("\u5728 "),nt={href:"https://github.com/mamoe/mirai/tree/dev/mirai-console/backend/mirai-console/src/permission/PermitteeId.kt#L77",target:"_blank",rel:"noopener noreferrer"},st=e("code",null,"AbstractPermitteeId",-1),ot=t(" \u67E5\u770B\u5176\u5B50\u7C7B\u3002"),it=e("strong",null,"\u6CE8\u610F",-1),rt=t(": \u5BF9\u5E94 "),at={href:"https://github.com/mamoe/mirai/tree/dev/mirai-console/backend/mirai-console/src/permission/PermissionService.kt",target:"_blank",rel:"noopener noreferrer"},lt=t("\u6743\u9650\u670D\u52A1"),ct=t(" \u6CA1\u660E\u786E\u8BF4\u660E\u53EF\u4EE5\u81EA\u884C\u5B9E\u73B0\u65F6, \u4E0D\u8981\u8F7B\u6613\u5B9E\u73B0 "),dt={href:"https://github.com/mamoe/mirai/tree/dev/mirai-console/backend/mirai-console/src/permission/PermitteeId.kt",target:"_blank",rel:"noopener noreferrer"},mt=e("code",null,"PermitteeId",-1),pt=o('<h4 id="\u5B57\u7B26\u4E32\u8868\u793A" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u4E32\u8868\u793A" aria-hidden="true">#</a> \u5B57\u7B26\u4E32\u8868\u793A</h4><p>\u5F53\u4F7F\u7528 <code>PermitteeId.asString</code> \u65F6, \u4E0D\u540C\u7684\u7C7B\u578B\u7684\u8FD4\u56DE\u503C\u5982\u4E0B\u8868\u6240\u793A. \u8FD9\u4E9B\u683C\u5F0F\u4E5F\u9002\u7528\u4E8E <a href="#%E4%BD%BF%E7%94%A8%E5%86%85%E7%BD%AE%E6%9D%83%E9%99%90%E6%9C%8D%E5%8A%A1%E6%8C%87%E4%BB%A4">\u6743\u9650\u6307\u4EE4</a>.<br> (\u4E0D\u533A\u5206\u5927\u5C0F\u5199. \u4E0D\u533A\u5206 Bot).</p><table><thead><tr><th style="text-align:center;">\u88AB\u8BB8\u53EF\u4EBA\u7C7B\u578B</th><th style="text-align:center;">\u5B57\u7B26\u4E32\u8868\u793A\u793A\u4F8B</th><th style="text-align:left;">\u5907\u6CE8</th></tr></thead><tbody><tr><td style="text-align:center;">\u63A7\u5236\u53F0</td><td style="text-align:center;">console</td><td style="text-align:left;"></td></tr><tr><td style="text-align:center;">\u4EFB\u610F\u5176\u4ED6\u5BA2\u6237\u7AEF</td><td style="text-align:center;">client*</td><td style="text-align:left;">\u5373 Bot \u81EA\u5DF1\u53D1\u6D88\u606F\u7ED9\u81EA\u5DF1</td></tr><tr><td style="text-align:center;">\u7CBE\u786E\u7FA4</td><td style="text-align:center;">g123456</td><td style="text-align:left;">\u8868\u793A\u7FA4, <strong>\u800C\u4E0D\u8868\u793A\u7FA4\u6210\u5458, \u4E0D\u8868\u793A\u7FA4\u6210\u5458</strong></td></tr><tr><td style="text-align:center;">\u7CBE\u786E\u597D\u53CB</td><td style="text-align:center;">f123456</td><td style="text-align:left;">\u5FC5\u987B\u901A\u8FC7\u597D\u53CB\u6D88\u606F</td></tr><tr><td style="text-align:center;">\u7CBE\u786E\u7FA4\u4E34\u65F6\u4F1A\u8BDD</td><td style="text-align:center;">t123456.789</td><td style="text-align:left;">\u7FA4 123456 \u5185\u7684\u6210\u5458 789. \u5FC5\u987B\u901A\u8FC7\u4E34\u65F6\u4F1A\u8BDD</td></tr><tr><td style="text-align:center;">\u7CBE\u786E\u7FA4\u6210\u5458</td><td style="text-align:center;">m123456.789</td><td style="text-align:left;">\u7FA4 123456 \u5185\u7684\u6210\u5458 789. \u540C\u65F6\u5305\u542B\u4E34\u65F6\u4F1A\u8BDD</td></tr><tr><td style="text-align:center;">\u7CBE\u786E\u7528\u6237</td><td style="text-align:center;">u123456</td><td style="text-align:left;">\u540C\u65F6\u5305\u542B\u7FA4\u6210\u5458, \u597D\u53CB, \u4E34\u65F6\u4F1A\u8BDD</td></tr><tr><td style="text-align:center;">\u4EFB\u610F\u7FA4</td><td style="text-align:center;">g*</td><td style="text-align:left;">g \u610F\u4E3A group, <strong>\u4E0D\u8868\u793A\u7FA4\u6210\u5458</strong></td></tr><tr><td style="text-align:center;">\u4EFB\u610F\u7FA4\u7684\u4EFB\u610F\u7FA4\u5458</td><td style="text-align:center;">m*</td><td style="text-align:left;">m \u610F\u4E3A member</td></tr><tr><td style="text-align:center;">\u7CBE\u786E\u7FA4\u7684\u4EFB\u610F\u7FA4\u5458</td><td style="text-align:center;">m123456.*</td><td style="text-align:left;">\u7FA4 123456 \u5185\u7684\u4EFB\u610F\u6210\u5458. \u540C\u65F6\u5305\u542B\u4E34\u65F6\u4F1A\u8BDD</td></tr><tr><td style="text-align:center;">\u4EFB\u610F\u4E34\u65F6\u4F1A\u8BDD</td><td style="text-align:center;">t*</td><td style="text-align:left;">t \u610F\u4E3A temp. \u5FC5\u987B\u901A\u8FC7\u4E34\u65F6\u4F1A\u8BDD</td></tr><tr><td style="text-align:center;">\u7CBE\u786E\u7FA4\u7684\u4EFB\u610F\u4E34\u65F6\u4F1A\u8BDD</td><td style="text-align:center;">t123456.*</td><td style="text-align:left;">\u7FA4 123456 \u5185\u7684\u4EFB\u610F\u6210\u5458. \u5FC5\u987B\u901A\u8FC7\u4E34\u65F6\u4F1A\u8BDD</td></tr><tr><td style="text-align:center;">\u4EFB\u610F\u597D\u53CB</td><td style="text-align:center;">f*</td><td style="text-align:left;">f \u610F\u4E3A friend</td></tr><tr><td style="text-align:center;">\u4EFB\u610F\u7528\u6237</td><td style="text-align:center;">u*</td><td style="text-align:left;">u \u610F\u4E3A user. \u4EFB\u4F55\u4EBA\u5728\u4EFB\u4F55\u73AF\u5883</td></tr><tr><td style="text-align:center;">\u4EFB\u610F\u964C\u751F\u4EBA</td><td style="text-align:center;">s*</td><td style="text-align:left;">s \u610F\u4E3A stranger. \u4EFB\u4F55\u4EBA\u5728\u4EFB\u4F55\u73AF\u5883</td></tr><tr><td style="text-align:center;">\u4EFB\u610F\u8054\u7CFB\u5BF9\u8C61</td><td style="text-align:center;">*</td><td style="text-align:left;">\u5373\u4EFB\u4F55\u4EBA, \u4EFB\u4F55\u7FA4. \u4E0D\u5305\u62EC\u63A7\u5236\u53F0</td></tr></tbody></table><h3 id="\u83B7\u53D6\u88AB\u8BB8\u53EF\u4EBA" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u88AB\u8BB8\u53EF\u4EBA" aria-hidden="true">#</a> \u83B7\u53D6\u88AB\u8BB8\u53EF\u4EBA</h3>',4),ht=t("\u5728 Kotlin \u901A\u5E38\u4F7F\u7528 "),_t=e("code",null,"CommandSender.permitteeId",-1),ut=t("\uFF0C\u5728 Java \u4F7F\u7528 "),kt=e("code",null,"CommandSender.getPermitteeId( )",-1),gt=t("\u3002"),bt=e("br",null,null,-1),ft=t(" \u4E5F\u53EF\u4EE5\u76F4\u63A5\u6784\u9020 "),vt={href:"https://github.com/mamoe/mirai/tree/dev/mirai-console/backend/mirai-console/src/permission/PermitteeId.kt#L77",target:"_blank",rel:"noopener noreferrer"},xt=e("code",null,"AbstractPermitteeId",-1),Pt=t(" \u7684\u5B50\u7C7B\u3002\u6216\u8005\u5728 Kotlin \u4F7F\u7528\u6269\u5C55 "),yt=e("code",null,"User.permitteeId",-1),It=t("\u3002"),qt=e("h2",{id:"\u6743\u9650\u670D\u52A1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u6743\u9650\u670D\u52A1","aria-hidden":"true"},"#"),t(" \u6743\u9650\u670D\u52A1")],-1),Et={href:"https://github.com/mamoe/mirai/tree/dev/mirai-console/backend/mirai-console/src/permission/PermissionService.kt",target:"_blank",rel:"noopener noreferrer"},At=e("code",null,"PermissionService",-1),wt=t(" \u627F\u8F7D\u6743\u9650\u7684\u6388\u6743\u548C\u7BA1\u7406\u3002 Console \u7684\u6743\u9650\u7CFB\u7EDF\u5B8C\u5168\u7531 "),Bt={href:"https://github.com/mamoe/mirai/tree/dev/mirai-console/backend/mirai-console/src/permission/PermissionService.kt",target:"_blank",rel:"noopener noreferrer"},Dt=e("code",null,"PermissionService",-1),St=t(" \u63D0\u4F9B\u652F\u6301\u3002 \u6743\u9650\u670D\u52A1\u53EF\u4EE5\u7531\u63D2\u4EF6\u63D0\u4F9B\uFF08\u89C1 "),Ct=t("\u6269\u5C55"),Lt=t("\uFF09\u3002 \u5728\u6CA1\u6709\u4EFB\u4F55\u63D0\u4F9B\u6743\u9650\u670D\u52A1\u7684\u63D2\u4EF6\u65F6\u4F1A\u4F7F\u7528 Console \u5185\u7F6E\u5B9E\u73B0\u3002"),Mt=e("p",null,"\u5728\u6574\u4E2A\u8FD0\u884C\u65F6 Console \u53EA\u4F1A\u4F7F\u7528\u540C\u4E00\u4E2A\u6743\u9650\u670D\u52A1\uFF0C\u5982\u679C\u5B89\u88C5\u591A\u4E2A\u63D0\u4F9B\u6743\u9650\u670D\u52A1\u7684\u63D2\u4EF6\u5F88\u6709\u53EF\u80FD\u5BFC\u81F4\u5D29\u6E83\u3002",-1),Kt=t("\u5982\u679C\u8FD0\u884C\u4E8E JVM \u5E73\u53F0, \u53EF\u4EE5\u4F7F\u7528 "),Vt={href:"https://github.com/Karlatemp/LuckPerms-Mirai",target:"_blank",rel:"noopener noreferrer"},Jt=t("Karlatemp/LuckPerms-Mirai"),Nt=t(" \u4EE5\u5F97\u5230\u66F4\u597D\u7684\u4F7F\u7528\u4F53\u9A8C (\u652F\u6301\u6743\u9650\u7EC4, \u6743\u9650\u68C0\u67E5\u72B6\u6001\u8BE6\u7EC6\u8F93\u51FA\u7B49)"),Rt=o(`<h3 id="\u5224\u65AD\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#\u5224\u65AD\u6743\u9650" aria-hidden="true">#</a> \u5224\u65AD\u6743\u9650</h3><p>\u5728 Kotlin\uFF0C\u5728\u8BE5\u6709\u6269\u5C55\u7684\u5BF9\u8C61\u4E0A Console \u90FD\u4E3A\u5B83\u4EEC\u5B9E\u73B0\u4E86\u6269\u5C55\u3002\u53EF\u4EE5\u4F7F\u7528\uFF1A</p><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token keyword">fun</span> Permittee<span class="token punctuation">.</span><span class="token function">hasPermission</span><span class="token punctuation">(</span>Permission<span class="token punctuation">)</span><span class="token operator">:</span> Boolean
<span class="token keyword">fun</span> Permission<span class="token punctuation">.</span><span class="token function">testPermission</span><span class="token punctuation">(</span>Permittee<span class="token punctuation">)</span><span class="token operator">:</span> Boolean
<span class="token keyword">fun</span> PermitteeId<span class="token punctuation">.</span><span class="token function">hasPermission</span><span class="token punctuation">(</span>Permission<span class="token punctuation">)</span><span class="token operator">:</span> Boolean
<span class="token keyword">fun</span> PermissionId<span class="token punctuation">.</span><span class="token function">testPermission</span><span class="token punctuation">(</span>Permittee<span class="token punctuation">)</span><span class="token operator">:</span> Boolean
<span class="token keyword">fun</span> Permittee<span class="token punctuation">.</span><span class="token function">hasPermission</span><span class="token punctuation">(</span>PermissionId<span class="token punctuation">)</span><span class="token operator">:</span> Boolean
<span class="token keyword">fun</span> Permission<span class="token punctuation">.</span><span class="token function">testPermission</span><span class="token punctuation">(</span>PermitteeId<span class="token punctuation">)</span><span class="token operator">:</span> Boolean
<span class="token comment">// ... </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),Ft=t("\u5728 Java\uFF0C\u8BF7\u67E5\u770B "),Ht={href:"https://github.com/mamoe/mirai/tree/dev/mirai-console/backend/mirai-console/src/permission/PermissionService.kt",target:"_blank",rel:"noopener noreferrer"},$t=e("code",null,"PermissionService",-1),Tt=t(" \u4E2D\u7684\u4F34\u751F\u5BF9\u8C61\u3002"),Ut=e("p",null,"\u67E5\u770B\u4F7F\u7528\u793A\u4F8B:",-1),jt={href:"https://github.com/Him188/mirai-console-example-plugin/blob/master/src/main/kotlin/org/example/my/plugin/MyPluginMain.kt#L116",target:"_blank",rel:"noopener noreferrer"},zt=t("Him188/mirai-console-example-plugin"),Gt={href:"https://gist.github.com/Karlatemp/38b1491dc033854755c0ec7367ba081b",target:"_blank",rel:"noopener noreferrer"},Ot=t("Karlatemp/mirai-console-permission-service-example (gist)"),Qt=e("h3",{id:"\u6CE8\u518C\u6743\u9650",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u6CE8\u518C\u6743\u9650","aria-hidden":"true"},"#"),t(" \u6CE8\u518C\u6743\u9650")],-1),Wt=e("p",null,"\u6BCF\u4E00\u6761\u6307\u4EE4\u90FD\u4F1A\u9ED8\u8BA4\u81EA\u52A8\u521B\u5EFA\u4E00\u4E2A\u6743\u9650\u3002",-1),Xt=e("p",null,[t("\u5982\u679C\u5E0C\u671B\u624B\u52A8\u6CE8\u518C\u4E00\u4E2A\u5176\u4ED6\u7528\u9014\u7684\u6743\u9650\uFF0C\u4F7F\u7528 "),e("code",null,"PermissionService.register"),t("\u3002")],-1),Yt=e("p",null,[e("strong",null,"\u6CE8\u610F"),t("\uFF1A")],-1),Zt=t("\u6743\u9650\u53EA\u80FD\u5728\u63D2\u4EF6 "),en=t("\u542F\u7528"),tn=t(" \u4E4B\u540E\u624D\u80FD\u6CE8\u518C\u3002\u5426\u5219\u4F1A\u5F97\u5230\u4E00\u4E2A\u5F02\u5E38\u3002"),nn=t("\u4F7F\u7528 "),sn=e("code",null,"PermissionService.register",-1),on=t(" \u65F6\u5BF9\u4E8E\u540C\u4E00\u4E2A "),rn={href:"https://github.com/mamoe/mirai/tree/dev/mirai-console/backend/mirai-console/src/permission/PermissionId.kt",target:"_blank",rel:"noopener noreferrer"},an=e("code",null,"PermissionId",-1),ln=t(" \u53EA\u80FD\u6CE8\u518C\u4E00\u6B21, \u5982\u679C\u591A\u6B21\u6CE8\u518C\u4F1A\u5F97\u5230\u4E00\u4E2A\u5F02\u5E38"),cn=o(`<h3 id="\u4F7F\u7528\u5185\u7F6E\u6743\u9650\u670D\u52A1\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u5185\u7F6E\u6743\u9650\u670D\u52A1\u6307\u4EE4" aria-hidden="true">#</a> \u4F7F\u7528\u5185\u7F6E\u6743\u9650\u670D\u52A1\u6307\u4EE4</h3><p><strong>\u6307\u4EE4</strong>: &quot;/permission&quot;, &quot;/perm&quot;, &quot;/\u6743\u9650&quot;</p><p>\u4F7F\u7528\u6307\u4EE4\u800C\u4E0D\u5E26\u53C2\u6570\u53EF\u4EE5\u83B7\u53D6\u5982\u4E0B\u7528\u6CD5\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/permission cancel &lt;\u88AB\u8BB8\u53EF\u4EBA ID&gt; &lt;\u6743\u9650 ID&gt;   \u53D6\u6D88\u6388\u6743\u4E00\u4E2A\u6743\u9650
/permission cancelall &lt;\u88AB\u8BB8\u53EF\u4EBA ID&gt; &lt;\u6743\u9650 ID&gt;   \u53D6\u6D88\u6388\u6743\u4E00\u4E2A\u6743\u9650\u53CA\u5176\u6240\u6709\u5B50\u6743\u9650
/permission listpermissions    \u67E5\u770B\u6240\u6709\u6743\u9650\u5217\u8868
/permission permit &lt;\u88AB\u8BB8\u53EF\u4EBA ID&gt; &lt;\u6743\u9650 ID&gt;   \u6388\u6743\u4E00\u4E2A\u6743\u9650
/permission permittedpermissions &lt;\u88AB\u8BB8\u53EF\u4EBA ID&gt;   \u67E5\u770B\u88AB\u6388\u6743\u6743\u9650\u5217\u8868
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u4E2D, \u88AB\u8BB8\u53EF\u4EBA ID \u4F7F\u7528 <a href="#%E5%AD%97%E7%AC%A6%E4%B8%B2%E8%A1%A8%E7%A4%BA">\u5B57\u7B26\u4E32\u8868\u793A</a>, \u6743\u9650 ID \u53C2\u89C1 <a href="#%E6%9D%83%E9%99%90-id">\u6743\u9650 ID</a></p><hr>`,6),dn=e("p",null,"\u8FD9\u662F\u6587\u6863\u7684\u6700\u540E\u4E00\u4E2A\u7AE0\u8282\u3002",-1),mn=t("\u8FD4\u56DE "),pn=t("\u5F00\u53D1\u6587\u6863\u7D22\u5F15");function hn(_n,un){const s=a("ExternalLinkIcon"),i=a("RouterLink");return c(),d("div",null,[p,h,_,u,e("p",null,[k,e("a",g,[b,n(s)]),f]),e("p",null,[v,e("a",x,[P,n(s)]),y]),I,e("p",null,[e("a",q,[E,n(s)]),A,e("a",w,[B,n(s)]),D,S,C]),L,e("p",null,[e("a",M,[K,n(s)]),V,e("a",J,[N,n(s)]),R,e("a",F,[H,n(s)]),$,e("a",T,[U,n(s)]),j]),z,e("blockquote",null,[e("p",null,[G,O,Q,W,X,e("a",Y,[Z,n(s)])])]),ee,e("p",null,[e("a",te,[ne,n(s)]),se,oe]),e("blockquote",null,[e("p",null,[ie,e("a",re,[ae,n(s)]),le,e("a",ce,[de,n(s)]),me])]),pe,e("p",null,[e("a",he,[_e,n(s)]),ue]),e("p",null,[e("a",ke,[ge,n(s)]),be,e("a",fe,[ve,n(s)]),xe]),e("p",null,[Pe,e("a",ye,[Ie,n(s)]),qe,e("a",Ee,[Ae,n(s)]),we]),e("p",null,[Be,De,e("a",Se,[Ce,n(s)]),Le]),Me,e("p",null,[e("a",Ke,[Ve,n(s)]),Je]),e("p",null,[Ne,e("a",Re,[Fe,n(s)]),He,e("a",$e,[Te,n(s)]),Ue]),je,e("p",null,[e("a",ze,[Ge,n(s)]),Oe]),Qe,e("p",null,[e("a",We,[Xe,n(s)]),Ye,e("a",Ze,[et,n(s)])]),e("p",null,[tt,e("a",nt,[st,n(s)]),ot]),e("p",null,[it,rt,e("a",at,[lt,n(s)]),ct,e("a",dt,[mt,n(s)])]),pt,e("p",null,[ht,_t,ut,kt,gt,bt,ft,e("a",vt,[xt,n(s)]),Pt,yt,It]),qt,e("p",null,[e("a",Et,[At,n(s)]),wt,e("a",Bt,[Dt,n(s)]),St,n(i,{to:"/console/Extensions.html"},{default:r(()=>[Ct]),_:1}),Lt]),Mt,e("blockquote",null,[e("p",null,[Kt,e("a",Vt,[Jt,n(s)]),Nt])]),Rt,e("p",null,[Ft,e("a",Ht,[$t,n(s)]),Tt]),e("blockquote",null,[Ut,e("ul",null,[e("li",null,[e("a",jt,[zt,n(s)])]),e("li",null,[e("a",Gt,[Ot,n(s)])])])]),Qt,Wt,Xt,Yt,e("ul",null,[e("li",null,[Zt,n(i,{to:"/console/Plugins.html#%E5%90%AF%E7%94%A8"},{default:r(()=>[en]),_:1}),tn]),e("li",null,[nn,sn,on,e("a",rn,[an,n(s)]),ln])]),cn,e("blockquote",null,[dn,e("p",null,[mn,n(i,{to:"/console/#mirai-console"},{default:r(()=>[pn]),_:1})])])])}var gn=l(m,[["render",hn],["__file","Permissions.html.vue"]]);export{gn as default};
