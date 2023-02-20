import{_ as c,o as l,c as r,a as s,b as n,w as d,e,d as o,r as i}from"./app.09d22a30.js";const p={},h=s("h1",{id:"\u6784\u5EFA-core",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u6784\u5EFA-core","aria-hidden":"true"},"#"),e(" \u6784\u5EFA Core")],-1),u=s("p",null,"\u672C\u6587\u4ECB\u7ECD\u5982\u4F55\u6784\u5EFA core \u7684 JVM \u548C Native \u76EE\u6807\u3002",-1),m=s("h2",{id:"\u6784\u5EFA-core-\u7684-jvm-\u76EE\u6807",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u6784\u5EFA-core-\u7684-jvm-\u76EE\u6807","aria-hidden":"true"},"#"),e(" \u6784\u5EFA core \u7684 JVM \u76EE\u6807")],-1),b=e("\u65B9\u6CD5\u4E0E"),_=e("\u6784\u5EFA JVM \u76EE\u6807\u9879\u76EE"),v=e(" \u7C7B\u4F3C\uFF0C\u4F46\u9700\u8981\u4F7F\u7528 "),k=s("code",null,":mirai-core:compileKotlinJvm",-1),g=e(" \u548C "),f=s("code",null,":mirai-core:jvmTest",-1),S=e(" \u5206\u522B\u7528\u4E8E\u7F16\u8BD1\u548C\u6D4B\u8BD5\u3002\u63D0\u793A\uFF1A\u76F4\u63A5\u6267\u884C\u6D4B\u8BD5\u65F6\u4E5F\u4F1A\u81EA\u52A8\u5148\u5B8C\u6210\u7F16\u8BD1\u3002"),w=o(`<h2 id="\u6784\u5EFA-core-\u7684-native-\u76EE\u6807" tabindex="-1"><a class="header-anchor" href="#\u6784\u5EFA-core-\u7684-native-\u76EE\u6807" aria-hidden="true">#</a> \u6784\u5EFA core \u7684 Native \u76EE\u6807</h2><p>Kotlin \u4F1A\u81EA\u52A8\u914D\u7F6E Native \u7F16\u8BD1\u5668\uFF0C\u8981\u6784\u5EFA Mirai \u7684 Native \u76EE\u6807\u8FD8\u9700\u8981\u51C6\u5907\u76F8\u5173\u4F9D\u8D56\u3002</p><h3 id="\u64CD\u4F5C\u7CFB\u7EDF\u6761\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u64CD\u4F5C\u7CFB\u7EDF\u6761\u4EF6" aria-hidden="true">#</a> \u64CD\u4F5C\u7CFB\u7EDF\u6761\u4EF6</h3><p>\u4E3B\u673A\u64CD\u4F5C\u7CFB\u7EDF\u4E3A\u4EE5\u4E0B\u4EFB\u4E00\uFF1A</p><ul><li>Windows x86_64 (amd64)</li><li>macOS x86_64 (amd64)</li><li>macOS aarch64 (arm64)</li><li>Linux x86_64 (amd64)</li></ul><p>\u6CE8\u610F\uFF1A32 \u4F4D\u64CD\u4F5C\u7CFB\u7EDF\u4E0D\u53D7\u652F\u6301\u3002\u672A\u5217\u4E3E\u7684\u64CD\u4F5C\u7CFB\u7EDF\u4E0D\u53D7\u652F\u6301\u3002</p><p>\u76EE\u524D Kotlin \u5BF9\u4EA4\u53C9\u7F16\u8BD1\u652F\u6301\u6709\u9650\uFF0C\u53EA\u80FD\u5728\u4E00\u4E2A\u4E3B\u673A\u4E0A\u7F16\u8BD1\u8BE5\u4E3B\u673A\u5E73\u53F0\u7684\u76EE\u6807\u3002\u4F8B\u5982\u5728 Windows x86_64 \u4E3B\u673A\u4E0A\u53EA\u80FD\u7F16\u8BD1 Windows x86_64 \u76EE\u6807\uFF1B\u5728 macOS aarch64 \u4E3B\u673A\u4E0A\u53EA\u80FD\u7F16\u8BD1 macOS aarch64 \u76EE\u6807\u3002</p><p>\u4E0E\u5176\u4ED6 Native \u8BED\u8A00\u76F8\u540C\uFF0CKotlin \u7684\u5E94\u7528\u4F7F\u7528\u4F9D\u8D56\u65F6\u540C\u6837\u9700\u8981\u914D\u7F6E\u94FE\u63A5\uFF0Cmirai \u5DF2\u7ECF\u914D\u7F6E\u4E86\u5E38\u7528\u76EE\u5F55\u3002\u4E5F\u53EF\u4EE5\u5728 <code>mirai-core/src/nativeMain/cinterop/OpenSSL.def</code> \u4FEE\u6539 <code>linkerOpts</code> \u5373\u94FE\u63A5\u5668\u53C2\u6570\uFF0C\u4EE5\u589E\u52A0\u81EA\u5B9A\u4E49\u8DEF\u5F84\u3002</p><h3 id="\u6027\u80FD\u63D0\u793A" tabindex="-1"><a class="header-anchor" href="#\u6027\u80FD\u63D0\u793A" aria-hidden="true">#</a> \u6027\u80FD\u63D0\u793A</h3><p>\u5728\u7F16\u8BD1\u548C\u94FE\u63A5\u65F6\u53EF\u80FD\u9700\u8981\u5927\u91CF\u5185\u5B58\uFF0C\u8BF7\u4F7F\u7528\u81F3\u5C11\u62E5\u6709 8GB \u5185\u5B58\u7684\u4E3B\u673A\u3002\u4F7F\u7528 32GB \u5185\u5B58\u7684\u4E3B\u673A\u53EF\u4EE5\u83B7\u5F97\u4E0D\u9519\u7684\u4F53\u9A8C\u3002mirai \u9ED8\u8BA4\u542F\u7528\u591A\u9879\u76EE\u540C\u65F6\u7F16\u8BD1\uFF0C\u7F16\u8BD1\u65F6\u53EF\u80FD\u4F1A\u4F7F\u7528\u5927\u91CF\u4E3B\u673A\u8D44\u6E90\u3002</p><p>\u5982\u679C\u4E3B\u673A\u53EF\u7528\u5185\u5B58\u8F83\u4F4E\uFF0C\u8BF7\u4E0D\u8981\u6267\u884C <code>./gradlew assemble</code> \u7F16\u8BD1\u5168\u90E8\u9879\u76EE\uFF0C\u8FD9\u53EF\u80FD\u4F1A\u5BFC\u81F4\u5185\u5B58\u6EA2\u51FA\uFF0C\u4E5F\u5C06\u4F1A\u5BFC\u81F4\u7F16\u8BD1\u7F13\u6162\u3002\u53EF\u4EE5\u5355\u72EC\u4E3A\u67D0\u4E2A\u6A21\u5757\u6267\u884C\u6279\u91CF\u7F16\u8BD1\uFF0C\u5982 <code>./gradlew :mirai-console:assemble</code> \u3002</p><h4 id="\u7F16\u8BD1\u8017\u65F6" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8BD1\u8017\u65F6" aria-hidden="true">#</a> \u7F16\u8BD1\u8017\u65F6</h4><p>\u82E5\u4F7F\u7528 Apple M1 Max \u6216\u540C\u7B49\u7EA7 CPU (AMD R7 5800X / Intel i7-12700K / Intel i9-12950HX)\uFF0C\u5355\u72EC\u6267\u884C <code>./gradlew assemble</code> \u7F16\u8BD1\u5E76\u8FDE\u63A5\u5168\u90E8\u9879\u76EE (\u542B\u52A8\u6001\u94FE\u63A5\u5E93\u548C\u9759\u6001\u94FE\u63A5\u5E93) \u9700\u65F6\u7EA6 9 \u5206\u949F\u3002\u5355\u72EC\u6267\u884C <code>./gradlew check</code> \u9700\u7EA6 4 \u5206\u949F\u3002 \u4F46\u5728 GitHub \u7684 2 \u6838\u5FC3 CPU Actions \u673A\u5668\u4E0A\u6267\u884C <code>assemble</code> \u901A\u5E38\u9700\u8981\u7EA6 40 \u5206\u949F\uFF0C\u3002</p><h3 id="\u5B89\u88C5-openssl" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-openssl" aria-hidden="true">#</a> \u5B89\u88C5 OpenSSL</h3><p>\u6240\u6709\u4E0A\u8FF0\u4E3B\u673A\u90FD\u9700\u8981\u8FDB\u884C\u8FD9\u4E00\u6B65\u3002</p><p>\u53EF\u4EE5\u8BBF\u95EE OpenSSL \u5B98\u7F51 <code>https://curl.se/download.html</code> \u5B89\u88C5\u3002</p><h4 id="\u5728-ubuntu-\u901A\u8FC7-aptitude-\u5B89\u88C5-openssl" tabindex="-1"><a class="header-anchor" href="#\u5728-ubuntu-\u901A\u8FC7-aptitude-\u5B89\u88C5-openssl" aria-hidden="true">#</a> \u5728 Ubuntu \u901A\u8FC7 Aptitude \u5B89\u88C5 OpenSSL</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> libssl-dev <span class="token comment"># \u5B89\u88C5 OpenSSL</span>
$ <span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> gcc-multilib <span class="token comment"># \u82E5\u9047\u5230\u94FE\u63A5\u95EE\u9898\u53EF\u989D\u5916\u5C1D\u8BD5\u6B64\u547D\u4EE4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5728-macos-\u901A\u8FC7-homebrew-\u5B89\u88C5-openssl" tabindex="-1"><a class="header-anchor" href="#\u5728-macos-\u901A\u8FC7-homebrew-\u5B89\u88C5-openssl" aria-hidden="true">#</a> \u5728 macOS \u901A\u8FC7 Homebrew \u5B89\u88C5 OpenSSL</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ brew <span class="token function">install</span> openssl@3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6CE8\u610F\uFF1A\u82E5\u9047\u5230\u65E0\u6CD5\u94FE\u63A5\u7B49\u95EE\u9898\uFF0C\u53EF\u4EE5\u5C1D\u8BD5\u901A\u8FC7\u6E90\u7801\u7F16\u8BD1\u5B89\u88C5\u3002</p><h4 id="\u5728-macos-\u6216-linux-\u901A\u8FC7\u6E90\u7801\u7F16\u8BD1\u5B89\u88C5-openssl" tabindex="-1"><a class="header-anchor" href="#\u5728-macos-\u6216-linux-\u901A\u8FC7\u6E90\u7801\u7F16\u8BD1\u5B89\u88C5-openssl" aria-hidden="true">#</a> \u5728 macOS \u6216 Linux \u901A\u8FC7\u6E90\u7801\u7F16\u8BD1\u5B89\u88C5 OpenSSL</h4>`,22),x=e("\u8BF7\u53C2\u8003 "),L={href:"https://github.com/openssl/openssl/blob/master/INSTALL.md#prerequisites",target:"_blank",rel:"noopener noreferrer"},O=e("OpenSSL \u6587\u6863"),A=e(" \u51C6\u5907 OpenSSL \u7684\u8981\u6C42\u3002"),T=o(`<p>\u4EE5\u4E0B\u547D\u4EE4\u53EF\u80FD\u4F1A\u5E2E\u52A9\u4F60\uFF08\u8FD9\u662F mirai \u7684 GitHub Actions \u4F7F\u7528\u7684\u547D\u4EE4\uFF09\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> clone https://github.com/openssl/openssl.git --recursive
$ <span class="token builtin class-name">cd</span> openssl
$ <span class="token function">git</span> checkout tags/openssl-3.0.3
$ ./Configure --prefix<span class="token operator">=</span>/opt/openssl --openssldir<span class="token operator">=</span>/usr/local/ssl
$ <span class="token function">make</span>
$ <span class="token function">sudo</span> <span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u82E5\u5728 Ubuntu \u9047\u5230\u94FE\u63A5\u95EE\u9898\uFF0C\u53EF\u989D\u5916\u5C1D\u8BD5\u6B64\u547D\u4EE4\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> gcc-multilib
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="\u5728-windows-\u901A\u8FC7-vcpkg-\u5B89\u88C5-openssl" tabindex="-1"><a class="header-anchor" href="#\u5728-windows-\u901A\u8FC7-vcpkg-\u5B89\u88C5-openssl" aria-hidden="true">#</a> \u5728 Windows \u901A\u8FC7 vcpkg \u5B89\u88C5 OpenSSL</h4>`,5),I=e("\u4F60\u9700\u8981\u63D0\u524D\u5B89\u88C5 "),N={href:"https://github.com/microsoft/vcpkg/blob/master/README_zh_CN.md",target:"_blank",rel:"noopener noreferrer"},C=e("vcpkg"),E=e(" \u3002"),R=o(`<p>\u4EE5\u4E0B\u547D\u4EE4\u53EF\u80FD\u4F1A\u5E2E\u52A9\u4F60\uFF08\u8FD9\u662F mirai \u7684 GitHub Actions \u4F7F\u7528\u7684\u547D\u4EE4\uFF09\u3002</p><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code><span class="token function">echo</span> <span class="token string">&quot;set(VCPKG_BUILD_TYPE release)&quot;</span> <span class="token punctuation">|</span> <span class="token function">Out-File</span> <span class="token operator">-</span>FilePath <span class="token string">&quot;<span class="token variable">$env</span>:VCPKG_INSTALLATION_ROOT\\triplets\\x64-windows.cmake&quot;</span> <span class="token operator">-</span>Encoding utf8 <span class="token operator">-</span>Append
vcpkg install openssl:x64-windows curl<span class="token namespace">[core, ssl]</span>: x64-windows
<span class="token function">New-Item</span> <span class="token operator">-</span>Path <span class="token variable">$env</span>:VCPKG_INSTALLATION_ROOT\\installed\\x64-windows\\lib\\crypto<span class="token punctuation">.</span>lib <span class="token operator">-</span>ItemType SymbolicLink <span class="token operator">-</span>Value <span class="token variable">$env</span>:VCPKG_INSTALLATION_ROOT\\installed\\x64-windows\\lib\\libcrypto<span class="token punctuation">.</span>lib
<span class="token function">New-Item</span> <span class="token operator">-</span>Path <span class="token variable">$env</span>:VCPKG_INSTALLATION_ROOT\\installed\\x64-windows\\lib\\ssl<span class="token punctuation">.</span>lib <span class="token operator">-</span>ItemType SymbolicLink <span class="token operator">-</span>Value <span class="token variable">$env</span>:VCPKG_INSTALLATION_ROOT\\installed\\x64-windows\\lib\\libssl<span class="token punctuation">.</span>lib
<span class="token function">New-Item</span> <span class="token operator">-</span>Path <span class="token variable">$env</span>:VCPKG_INSTALLATION_ROOT\\installed\\x64-windows\\lib\\curl<span class="token punctuation">.</span>lib <span class="token operator">-</span>ItemType SymbolicLink <span class="token operator">-</span>Value <span class="token variable">$env</span>:VCPKG_INSTALLATION_ROOT\\installed\\x64-windows\\lib\\libcurl<span class="token punctuation">.</span>lib
<span class="token function">echo</span> <span class="token string">&quot;<span class="token variable">$env</span>:VCPKG_INSTALLATION_ROOT\\installed\\x64-windows\\bin&quot;</span> <span class="token punctuation">|</span> <span class="token function">Out-File</span> <span class="token operator">-</span>FilePath <span class="token variable">$env</span>:GITHUB_PATH <span class="token operator">-</span>Encoding utf8 <span class="token operator">-</span>Append
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7531\u4E8E\u94FE\u63A5\u5668\u53EA\u8BC6\u522B\u4E0D\u5305\u542B <code>lib</code> \u524D\u7F00\u7684\u6587\u4EF6\uFF08\u5982 <code>ssl.lib</code> \u800C\u975E <code>libssl.lib</code>\uFF0Cvcpkg \u7F16\u8BD1\u4EA7\u7269\u4E3A\u540E\u8005\uFF09\uFF0C\u4E0A\u8FF0 <code>New-Item</code> \u521B\u5EFA\u4E00\u4E2A\u65E0 <code>lib</code> \u524D\u7F00\u7684\u94FE\u63A5\u6307\u5411\u5E93\u6587\u4EF6\u3002</p><p>\u6CE8\u610F\uFF1A</p><ul><li>\u4F60\u5C06\u9700\u8981\u4FEE\u6539\u94FE\u63A5\u5668\u914D\u7F6E\uFF08\u4F4D\u4E8E <code>mirai-core/src/nativeMain/cinterop/OpenSSL.def</code> \uFF09\uFF0C\u589E\u52A0 <code>linkerOpts</code> \u548C <code>compilerOpts</code> \u6307\u5411\u4F60\u672C\u5730\u5B89\u88C5\u7684\u8DEF\u5F84\u3002</li><li>\u4E0D\u8981\u5C06\u4FEE\u6539\u8DEF\u5F84\u540E\u7684 <code>OpenSSL.def</code> \u901A\u8FC7 Git \u63A8\u9001\u5230 mirai \u4ED3\u5E93\u6216 PR\u3002</li></ul><h4 id="\u5728-windows-\u901A\u8FC7\u6E90\u7801\u7F16\u8BD1\u5B89\u88C5-openssl" tabindex="-1"><a class="header-anchor" href="#\u5728-windows-\u901A\u8FC7\u6E90\u7801\u7F16\u8BD1\u5B89\u88C5-openssl" aria-hidden="true">#</a> \u5728 Windows \u901A\u8FC7\u6E90\u7801\u7F16\u8BD1\u5B89\u88C5 OpenSSL</h4><p>\u5728 Windows\uFF0C\u53EF\u901A\u8FC7\u6E90\u7801\u7F16\u8BD1\u5B89\u88C5\uFF0C\u8BF7\u4F7F\u7528 Command Prompt (cmd)\u3002</p>`,7),V=e("\u4F60\u9700\u8981\u63D0\u524D\u5B89\u88C5 "),P={href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"},B=e("Git"),G=e(" \u548C "),K={href:"https://visualstudio.microsoft.com/zh-hans/",target:"_blank",rel:"noopener noreferrer"},$=e("Microsoft Visual Studio"),M=e(" \uFF0C\u5E76\u4FEE\u6539\u4EE5\u4E0B\u547D\u4EE4\u4E2D\u7684\u8DEF\u5F84\u3002"),D=e("\u8BF7\u53C2\u8003 "),q={href:"https://github.com/openssl/openssl/blob/master/INSTALL.md#prerequisites",target:"_blank",rel:"noopener noreferrer"},H=e("OpenSSL \u6587\u6863"),y=e(" \u51C6\u5907 OpenSSL \u7684\u8981\u6C42\u3002"),X=o(`<p>\u4EE5\u4E0B\u547D\u4EE4\u53EF\u80FD\u4F1A\u5E2E\u52A9\u4F60\uFF08\u8FD9\u662F mirai \u7684 GitHub Actions \u4F7F\u7528\u8FC7\u7684\u547D\u4EE4\uFF09\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/openssl/openssl.git --recursive
<span class="token builtin class-name">cd</span> openssl
<span class="token function">git</span> checkout tags/openssl-3.0.3
perl Configure VC-WIN64A --prefix<span class="token operator">=</span>C:/openssl --openssldir<span class="token operator">=</span>C:/openssl/ssl no-asm
<span class="token string">&quot;C:\\Program Files\\Microsoft Visual Studio<span class="token entity" title="\\202">\\202</span>2<span class="token entity" title="\\E">\\E</span>nterprise\\VC\\Auxiliary\\Build<span class="token entity" title="\\v">\\v</span>cvarsall.bat&quot;</span> x86_amd64 <span class="token operator">&amp;&amp;</span> nmake <span class="token operator">&amp;&amp;</span> nmake <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\uFF1A</p><ul><li><code>--prefix=C:/openssl --openssldir=C:/openssl/ssl</code> \u8868\u793A\u5C06 OpenSSL \u5B89\u88C5\u5728 <code>C:/openssl</code>\uFF0Cmirai \u5DF2\u7ECF\u914D\u7F6E\u4F1A\u4F7F\u7528\u6B64\u8DEF\u5F84\u5BFB\u627E\u94FE\u63A5\u5E93\u3002\u4F60\u4E5F\u53EF\u4EE5\u66F4\u6362\u4E3A\u5176\u4ED6\u8DEF\u5F84\uFF0C\u4F46\u5C31\u9700\u8981\u540C\u6B65\u4FEE\u6539\u914D\u7F6E\uFF08\u4F4D\u4E8E <code>mirai-core/src/nativeMain/cinterop/OpenSSL.def</code> \uFF09\uFF1B</li><li>\u4E0D\u8981\u5C06\u4FEE\u6539\u8DEF\u5F84\u540E\u7684 <code>OpenSSL.def</code> \u901A\u8FC7 Git \u63A8\u9001\u5230 mirai \u4ED3\u5E93\u6216 PR\u3002</li></ul><h3 id="\u5B89\u88C5-curl" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-curl" aria-hidden="true">#</a> \u5B89\u88C5 cURL</h3>`,5),U=e("mirai \u5728 Windows \u4E0A\u4F7F\u7528 cURL\uFF0C\u5728\u5176\u4ED6\u5E73\u53F0\u4F7F\u7528 "),W={href:"https://ktor.io/docs/http-client-engines.html#cio",target:"_blank",rel:"noopener noreferrer"},F=e("Ktor CIO"),j=e(" \uFF0C\u56E0\u6B64\u53EA\u6709 Windows \u7CFB\u7EDF\u9700\u8981\u8FDB\u884C\u8FD9\u4E00\u6B65\u3002"),J=e("\u53EF\u4EE5\u8BBF\u95EE cURL \u5B98\u7F51 "),z={href:"https://curl.se/download.html",target:"_blank",rel:"noopener noreferrer"},Y=e("https://curl.se/download.html"),Q=e(" \u5B89\u88C5\u3002"),Z=o('<p>\u63D0\u793A\uFF1A\u5982\u679C\u5728<a href="#%E9%93%BE%E6%8E%A5%E5%B9%B6%E6%B5%8B%E8%AF%95">\u94FE\u63A5</a>\u65F6\u9047\u5230\u627E\u4E0D\u5230 cURL \u76F8\u5173\u7B26\u53F7\u7684\u95EE\u9898\uFF0C\u8BF7\u5C1D\u8BD5\u4FEE\u6539\u94FE\u63A5\u5668\u53C2\u6570\u3002\u5C3D\u7BA1 <code>mirai-core/src/nativeMain/cinterop/OpenSSL.def</code> \u662F\u7528\u4E8E <code>OpenSSL.def</code> \u7684\uFF0C\u4E5F\u53EF\u4EE5\u5728\u8FD9\u4E2A\u6587\u4EF6\u914D\u7F6E cURL \u8DEF\u5F84\u3002</p><h3 id="\u7F16\u8BD1" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8BD1" aria-hidden="true">#</a> \u7F16\u8BD1</h3><p>\u5728\u4EFB\u610F\u4E3B\u673A\u4E0A\u53EF\u4EE5\u6267\u884C\u6240\u6709\u76EE\u6807\u7684 Kotlin \u7F16\u8BD1\uFF0C\u4F46\u4E0D\u80FD\u6267\u884C\u94FE\u63A5\u3002\u8981\u6267\u884C\u7279\u5B9A\u76EE\u6807\u7684\u7F16\u8BD1\uFF0C\u8FD0\u884C Gradle \u4EFB\u52A1 <code>compileKotlinXXX</code>\uFF0C\u5176\u4E2D <code>XXX</code> \u53EF\u4EE5\u662F\uFF1A<code>MacosX64</code>\u3001<code>MacosArm64</code>\u3001<code>MingwX64</code> \u6216 <code>LinuxX64</code>\u3002</p><p>\u4E5F\u53EF\u4EE5\u6267\u884C <code>compileKotlinHost</code>\uFF0C\u5C06\u81EA\u52A8\u6839\u636E\u5F53\u524D\u4E3B\u673A\u9009\u62E9\u5408\u9002\u7684\u76EE\u6807\u3002</p><h3 id="\u94FE\u63A5\u5E76\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u94FE\u63A5\u5E76\u6D4B\u8BD5" aria-hidden="true">#</a> \u94FE\u63A5\u5E76\u6D4B\u8BD5</h3><p>\u6267\u884C core \u6A21\u5757\u7684 <code>hostTest</code>\uFF0C\u5C06\u6839\u636E\u4E3B\u673A\u9009\u62E9\u5408\u9002\u7684\u6D4B\u8BD5\u5E76\u8FD0\u884C\u3002</p>',6),ee=e("\u8BE6\u60C5\u53C2\u8003 "),se={href:"https://kotlinlang.org/docs/multiplatform-run-tests.html",target:"_blank",rel:"noopener noreferrer"},ne=e("Kotlin \u5B98\u65B9\u6587\u6863"),ae=e(" \u3002"),oe=o(`<h3 id="\u94FE\u63A5\u5E76\u6784\u5EFA\u52A8\u6001\u94FE\u63A5\u5E93" tabindex="-1"><a class="header-anchor" href="#\u94FE\u63A5\u5E76\u6784\u5EFA\u52A8\u6001\u94FE\u63A5\u5E93" aria-hidden="true">#</a> \u94FE\u63A5\u5E76\u6784\u5EFA\u52A8\u6001\u94FE\u63A5\u5E93</h3><p>\u6CE8\u610F\uFF0C\u53EA\u6709 mirai-core \u53EF\u4EE5\u6784\u5EFA\u53EF\u7528\u7684\u52A8\u6001\u94FE\u63A5\u5E93\u3002\u6240\u6709\u52A8\u6001\u94FE\u63A5\u5E93\u548C\u9759\u6001\u94FE\u63A5\u5E93\u7684\u6784\u5EFA\u90FD\u662F\u9ED8\u8BA4\u5173\u95ED\u7684\uFF0C\u9700\u8981\u4F7F\u7528 <code>-Dmirai.native.binaries=true</code> \u624D\u80FD\u542F\u7528\u3002</p><p>\u5728\u63D0\u4F9B <code>-Dmirai.native.binaries=true</code> \u53C2\u6570\u7684\u60C5\u51B5\u4E0B\uFF0C\u6267\u884C <code>:mirai-core:linkDebugSharedHost</code> \u6216 <code>:mirai-core:linkReleaseSharedHost</code>\u3002Debug \u7248\u672C\u4F1A\u4FDD\u7559\u8C03\u8BD5\u7B26\u53F7\uFF0C\u80FD\u663E\u793A\u5B8C\u6574\u9519\u8BEF\u5806\u6808\uFF1B\u800C Release \u62E5\u6709\u66F4\u5C0F\u4F53\u79EF\uFF08\u6BD4 Debug \u51CF\u5C0F 50%\uFF09\u3002</p><p>\u793A\u4F8B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>./gradlew :mirai-core:linkDebugSharedHost <span class="token string">&quot;-Dmirai.native.binaries=true&quot;</span>

./gradlew :mirai-core:linkReleaseSharedMacoxX64 <span class="token string">&quot;-Dmirai.native.binaries=true&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),ie=e("\u8FD9\u4E5F\u4F1A\u540C\u65F6\u751F\u6210\u4E00\u4E2A\u5934\u6587\u4EF6\uFF08"),te=s("code",null,".h",-1),ce=e(" \uFF09\u4F9B\u4EA4\u4E92\u4F7F\u7528\u3002\u8BE6\u60C5\u67E5\u770B "),le={href:"https://kotlinlang.org/docs/native-c-interop.html",target:"_blank",rel:"noopener noreferrer"},re=e("Kotlin \u5B98\u65B9\u6587\u6863"),de=e(" \u3002"),pe=o('<p>\u53EF\u4EE5\u5728 <code>mirai-core/build/bin/macosArm64/debugShared/</code> \u7C7B\u4F3C\u8DEF\u5F84\u627E\u5230\u751F\u6210\u7684\u52A8\u6001\u94FE\u63A5\u5E93\u548C\u5934\u6587\u4EF6\u3002</p><h3 id="\u94FE\u63A5\u5E76\u6784\u5EFA\u9759\u6001\u94FE\u63A5\u5E93" tabindex="-1"><a class="header-anchor" href="#\u94FE\u63A5\u5E76\u6784\u5EFA\u9759\u6001\u94FE\u63A5\u5E93" aria-hidden="true">#</a> \u94FE\u63A5\u5E76\u6784\u5EFA\u9759\u6001\u94FE\u63A5\u5E93</h3><p>\u6CE8\u610F\uFF0C\u53EA\u6709 mirai-core \u53EF\u4EE5\u6784\u5EFA\u53EF\u7528\u7684\u9759\u6001\u94FE\u63A5\u5E93\u3002</p><p>\u4E0E\u6784\u5EFA\u52A8\u6001\u94FE\u63A5\u5E93\u7C7B\u4F3C\uFF0C\u5728\u63D0\u4F9B <code>-Dmirai.native.binaries=true</code> \u53C2\u6570\u7684\u60C5\u51B5\u4E0B\uFF0C\u6267\u884C <code>:mirai-core:linkDebugStaticHost</code> \u6216 <code>:mirai-core:linkReleaseStaticHost</code>\u3002Debug \u7248\u672C\u4F1A\u4FDD\u7559\u8C03\u8BD5\u7B26\u53F7\uFF0C\u80FD\u663E\u793A\u5B8C\u6574\u9519\u8BEF\u5806\u6808\uFF1B\u800C Release \u62E5\u6709\u66F4\u5C0F\u4F53\u79EF\uFF08\u6BD4 Debug \u51CF\u5C0F 50%\uFF09\u3002</p><p>\u53EF\u4EE5\u5728 <code>mirai-core/build/bin/macosArm64/debugStatic/</code> \u7C7B\u4F3C\u8DEF\u5F84\u627E\u5230\u751F\u6210\u7684\u9759\u6001\u94FE\u63A5\u5E93\u548C\u5934\u6587\u4EF6\u3002</p>',5);function he(ue,me){const t=i("RouterLink"),a=i("ExternalLinkIcon");return l(),r("div",null,[h,u,m,s("p",null,[b,n(t,{to:"/contributing/#%E6%9E%84%E5%BB%BA-jvm-%E7%9B%AE%E6%A0%87%E9%A1%B9%E7%9B%AE"},{default:d(()=>[_]),_:1}),v,k,g,f,S]),w,s("p",null,[x,s("a",L,[O,n(a)]),A]),T,s("p",null,[I,s("a",N,[C,n(a)]),E]),R,s("p",null,[V,s("a",P,[B,n(a)]),G,s("a",K,[$,n(a)]),M]),s("p",null,[D,s("a",q,[H,n(a)]),y]),X,s("p",null,[U,s("a",W,[F,n(a)]),j]),s("p",null,[J,s("a",z,[Y,n(a)]),Q]),Z,s("p",null,[ee,s("a",se,[ne,n(a)]),ae]),oe,s("p",null,[ie,te,ce,s("a",le,[re,n(a)]),de]),pe])}var _e=c(p,[["render",he],["__file","BuildingCore.html.vue"]]);export{_e as default};
