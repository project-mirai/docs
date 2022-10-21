import{_ as i,o as n,c as s,a as t,b as d,w as l,d as a,e,r}from"./app.2dfe26d5.js";const c={},m=a('<h1 id="mirai-console-builtin-commands" tabindex="-1"><a class="header-anchor" href="#mirai-console-builtin-commands" aria-hidden="true">#</a> Mirai Console - BuiltIn Commands</h1><p>Mirai Console \u5185\u7F6E\u4E00\u4E9B\u6307\u4EE4\u3002</p><p>\u4E0B\u6587\u4E2D <code>&lt;A|B&gt;</code> \u8868\u793A\u53EF\u4EE5\u662F A \u6216 B\u3002<code>[ ]</code> \u8868\u793A\u4E00\u4E2A\u5FC5\u987B\u7684\u53C2\u6570, <code>[ ]?</code> \u8868\u793A\u4E00\u4E2A\u53EF\u9009\u7684\u53C2\u6570\u3002</p><h2 id="helpcommand" tabindex="-1"><a class="header-anchor" href="#helpcommand" aria-hidden="true">#</a> HelpCommand</h2><p><code>/help</code></p><p>\u67E5\u770B\u6307\u4EE4\u5E2E\u52A9</p><h2 id="stopcommand" tabindex="-1"><a class="header-anchor" href="#stopcommand" aria-hidden="true">#</a> StopCommand</h2><p><code>/&lt;stop|shutdown|exit&gt;</code></p><p>\u5173\u95ED Mirai Console</p><h2 id="logincommand" tabindex="-1"><a class="header-anchor" href="#logincommand" aria-hidden="true">#</a> LoginCommand</h2><p><code>/&lt;login|\u767B\u5F55&gt; [qq] [password] [protocol]?</code></p><table><thead><tr><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:left;">\u53EF\u9009\u503C</th><th style="text-align:left;">\u63CF\u8FF0</th></tr></thead><tbody><tr><td style="text-align:left;">protocol</td><td style="text-align:left;">ANDROID_PHONE</td><td style="text-align:left;">Android \u624B\u673A. \u6240\u6709\u529F\u80FD\u90FD\u652F\u6301.</td></tr><tr><td style="text-align:left;">protocol</td><td style="text-align:left;">ANDROID_PAD</td><td style="text-align:left;">Android \u5E73\u677F. \u6CE8\u610F: \u4E0D\u652F\u6301\u6233\u4E00\u6233\u4E8B\u4EF6\u89E3\u6790</td></tr><tr><td style="text-align:left;">protocol</td><td style="text-align:left;">ANDROID_WATCH</td><td style="text-align:left;">Android \u624B\u8868.</td></tr></tbody></table><p>\u4E34\u65F6\u767B\u5F55\u4E00\u4E2A\u8D26\u53F7</p><h2 id="permissioncommand" tabindex="-1"><a class="header-anchor" href="#permissioncommand" aria-hidden="true">#</a> PermissionCommand</h2><p>\u4E3B\u6307\u4EE4: <code>/&lt;permission|perm|\u6743\u9650&gt;</code></p><p>\u6B21\u6307\u4EE4:</p><table><thead><tr><th style="text-align:left;">\u6307\u4EE4</th><th style="text-align:left;">\u63CF\u8FF0</th></tr></thead><tbody><tr><td style="text-align:left;"><code>/&lt;permission|perm|\u6743\u9650&gt; &lt;permit|grant|add&gt; [target] [permission]</code></td><td style="text-align:left;">\u6388\u6743\u4E00\u4E2A\u6743\u9650</td></tr><tr><td style="text-align:left;"><code>/&lt;permission|perm|\u6743\u9650&gt; &lt;cancel|deny|remove&gt; [target] [permission]</code></td><td style="text-align:left;">\u64A4\u9500\u4E00\u4E2A\u6743\u9650</td></tr><tr><td style="text-align:left;"><code>/&lt;permission|perm|\u6743\u9650&gt; &lt;cancelAll|denyAll|removeAll&gt; [target] [permission]</code></td><td style="text-align:left;">\u64A4\u9500\u4E00\u4E2A\u6743\u9650\u53CA\u5176\u6240\u6709\u5B50\u6743\u9650</td></tr><tr><td style="text-align:left;"><code>/&lt;permission|perm|\u6743\u9650&gt; &lt;permittedPermissions|pp|grantedPermissions|gp&gt; [target] [all]</code></td><td style="text-align:left;">\u67E5\u770B\u88AB\u6388\u6743\u6743\u9650\u5217\u8868</td></tr><tr><td style="text-align:left;"><code>/&lt;permission|perm|\u6743\u9650&gt; &lt;listPermissions|lp&gt;</code></td><td style="text-align:left;">\u67E5\u770B\u6240\u6709\u6743\u9650\u5217\u8868</td></tr></tbody></table><h3 id="target-\u548C-permission-\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#target-\u548C-permission-\u793A\u4F8B" aria-hidden="true">#</a> <code>[target]</code> \u548C <code>[permission]</code> \u793A\u4F8B</h3>',18),p=t("code",null,"[target]",-1),h=e(" \u662F "),g=t("em",null,"\u88AB\u8BB8\u53EF\u4EBA ID",-1),u=e("\uFF0C\u53EF\u4EE5\u67E5\u770B"),f=e("\u8868\u793A\u65B9\u6CD5"),x=e(" \u3002"),y=t("code",null,"[permission]",-1),_=e(" \u662F "),A=t("em",null,"\u6743\u9650 ID",-1),b=e("\u3002\u6BCF\u4E2A\u6307\u4EE4\u90FD\u62E5\u6709\u4E00\u4E2A\u6743\u9650 ID\u3002\u8BF7\u4F7F\u7528 "),C=t("code",null,"/perm list",-1),D=e(" \u67E5\u770B\u6743\u9650 ID \u5217\u8868\u3002"),E=a('<p>\u793A\u4F8B\uFF1A<code>/perm permit u123456 console:command.stop</code></p><h3 id="\u6388\u4E88\u4E00\u4E2A\u7528\u6237\u6267\u884C\u6240\u6709\u6307\u4EE4\u7684\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#\u6388\u4E88\u4E00\u4E2A\u7528\u6237\u6267\u884C\u6240\u6709\u6307\u4EE4\u7684\u6743\u9650" aria-hidden="true">#</a> \u6388\u4E88\u4E00\u4E2A\u7528\u6237\u6267\u884C\u6240\u6709\u6307\u4EE4\u7684\u6743\u9650</h3><p>\u793A\u4F8B\uFF1A</p><ul><li><code>/perm permit u123456 *:*</code> \u5141\u8BB8\u7528\u6237 123456 \u6267\u884C\u4EFB\u610F\u6307\u4EE4</li><li><code>/perm permit u123456 console:*</code> \u5141\u8BB8\u7528\u6237 123456 \u6267\u884C\u4EFB\u610F Console \u5185\u7F6E\u6307\u4EE4</li><li><code>/perm permit u123456 org.example.my-plugin:*</code> \u5141\u8BB8\u7528\u6237 123456 \u6267\u884C\u63D2\u4EF6 <code>org.example.my-plugin</code> \u7684\u4EFB\u610F\u6307\u4EE4</li></ul><h3 id="\u6388\u4E88\u6240\u6709\u7528\u6237\u6267\u884C\u67D0\u4E2A\u6307\u4EE4\u7684\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#\u6388\u4E88\u6240\u6709\u7528\u6237\u6267\u884C\u67D0\u4E2A\u6307\u4EE4\u7684\u6743\u9650" aria-hidden="true">#</a> \u6388\u4E88\u6240\u6709\u7528\u6237\u6267\u884C\u67D0\u4E2A\u6307\u4EE4\u7684\u6743\u9650</h3><p>\u793A\u4F8B\uFF1A</p><ul><li><code>/perm permit u* console:command.help</code> \u5141\u8BB8\u6240\u6709\u7528\u6237\u6267\u884C <code>console:command.help</code>\uFF08\u5373 <code>/help</code>\uFF09</li><li><code>/perm permit u* console:*</code> \u5141\u8BB8\u6240\u6709\u7528\u6237\u6267\u884C\u4EFB\u610F Console \u5185\u7F6E\u6307\u4EE4</li><li><code>/perm permit u* org.example.my-plugin:*</code> \u5141\u8BB8\u6240\u6709\u7528\u6237\u6267\u884C\u63D2\u4EF6 <code>org.example.my-plugin</code> \u7684\u4EFB\u610F\u6307\u4EE4</li></ul><h2 id="autologincommand" tabindex="-1"><a class="header-anchor" href="#autologincommand" aria-hidden="true">#</a> AutoLoginCommand</h2><p>\u4E3B\u6307\u4EE4: <code>/autoLogin</code></p><p>\u6B21\u6307\u4EE4:</p><table><thead><tr><th style="text-align:left;">\u6307\u4EE4</th><th style="text-align:left;">\u63CF\u8FF0</th></tr></thead><tbody><tr><td style="text-align:left;"><code>/&lt;autoLogin|\u81EA\u52A8\u767B\u5F55&gt; list</code></td><td style="text-align:left;">\u67E5\u770B\u81EA\u52A8\u767B\u5F55\u8D26\u53F7\u5217\u8868</td></tr><tr><td style="text-align:left;"><code>/&lt;autoLogin|\u81EA\u52A8\u767B\u5F55&gt; add [account] [password] [passwordKind]</code></td><td style="text-align:left;">\u6DFB\u52A0\u81EA\u52A8\u767B\u5F55</td></tr><tr><td style="text-align:left;"><code>/&lt;autoLogin|\u81EA\u52A8\u767B\u5F55&gt; clear</code></td><td style="text-align:left;">\u6E05\u9664\u6240\u6709\u914D\u7F6E</td></tr><tr><td style="text-align:left;"><code>/&lt;autoLogin|\u81EA\u52A8\u767B\u5F55&gt; remove [account]</code></td><td style="text-align:left;">\u5220\u9664\u4E00\u4E2A\u8D26\u53F7</td></tr><tr><td style="text-align:left;"><code>/&lt;autoLogin|\u81EA\u52A8\u767B\u5F55&gt; setConfig [account] [configKey] [value]</code></td><td style="text-align:left;">\u8BBE\u7F6E\u4E00\u4E2A\u8D26\u53F7\u7684\u4E00\u4E2A\u914D\u7F6E\u9879</td></tr><tr><td style="text-align:left;"><code>/&lt;autoLogin|\u81EA\u52A8\u767B\u5F55&gt; removeConfig [account] [configKey]</code></td><td style="text-align:left;">\u5220\u9664\u4E00\u4E2A\u8D26\u53F7\u7684\u4E00\u4E2A\u914D\u7F6E\u9879</td></tr></tbody></table><table><thead><tr><th style="text-align:center;"><code>configKey</code></th><th style="text-align:center;">\u53EF\u9009\u503C</th></tr></thead><tbody><tr><td style="text-align:center;"><code>protocol</code></td><td style="text-align:center;"><code>ANDROID_PHONE</code> / <code>ANDROID_PAD</code> / <code>ANDROID_WATCH</code></td></tr></tbody></table><p>\u793A\u4F8B\uFF1A<code>/autoLogin setConfig 123456 protocol ANDROID_PHONE</code></p><h2 id="statuscommand" tabindex="-1"><a class="header-anchor" href="#statuscommand" aria-hidden="true">#</a> StatusCommand</h2><p><code>/status</code></p><p>\u83B7\u53D6 Mirai Console \u8FD0\u884C\u72B6\u6001</p>',16);function B(I,N){const o=r("RouterLink");return n(),s("div",null,[m,t("p",null,[p,h,d(o,{to:"/console/Permissions.html#%E8%A2%AB%E8%AE%B8%E5%8F%AF%E4%BA%BA-id"},{default:l(()=>[g]),_:1}),u,d(o,{to:"/console/Permissions.html#%E5%AD%97%E7%AC%A6%E4%B8%B2%E8%A1%A8%E7%A4%BA"},{default:l(()=>[f]),_:1}),x]),t("p",null,[y,_,d(o,{to:"/console/Permissions.html#%E6%9D%83%E9%99%90-id"},{default:l(()=>[A]),_:1}),b,C,D]),E])}var P=i(c,[["render",B],["__file","BuiltInCommands.html.vue"]]);export{P as default};
