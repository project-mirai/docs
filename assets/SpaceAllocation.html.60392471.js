import{_ as e,o as d,c as i,d as s}from"./app.681197b9.js";const r={},a=s(`<h1 id="tmpfsserver" tabindex="-1"><a class="header-anchor" href="#tmpfsserver" aria-hidden="true">#</a> TmpFsServer</h1><blockquote><p>\u6B64\u6587\u4EF6\u662F\u5173\u4E8E <code>mirai-core-mock</code> \u662F\u5982\u4F55\u5206\u914D\u6587\u4EF6\u8D44\u6E90\u8DEF\u5F84\u7684\u5177\u4F53\u8BF4\u660E</p><p>\u6240\u6709\u7684\u4E34\u65F6\u8D44\u6E90\u7684\u8DEF\u5F84 (\u5305\u62EC: \u56FE\u7247, \u8BED\u97F3, \u7FA4\u6587\u4EF6, etc.)</p><p>\u6CE8:</p><ul><li>\u6B64\u6587\u6863\u8BF4\u660E\u53EA\u9002\u7528\u4E8E\u9ED8\u8BA4\u5B9E\u73B0</li></ul></blockquote><h2 id="\u901A\u7528\u8D44\u6E90" tabindex="-1"><a class="header-anchor" href="#\u901A\u7528\u8D44\u6E90" aria-hidden="true">#</a> \u901A\u7528\u8D44\u6E90</h2><p>TmpFsServer \u4F1A\u4E3A\u6BCF\u4E00\u4E2A\u4E0A\u4F20\u7684\u6587\u4EF6\u5206\u914D\u4E00\u4E2A ResourceID, \u89C4\u5219\u5982\u4E0B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\${resource.size}-\${resource.sha1.hex()}-\${resource.md5.hex()}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6570\u636E\u8D44\u6E90\u4F1A\u76F4\u63A5\u62F7\u8D1D\u81F3 <code>/storage/$resourceId</code></p><h2 id="\u56FE\u7247\u8D44\u6E90" tabindex="-1"><a class="header-anchor" href="#\u56FE\u7247\u8D44\u6E90" aria-hidden="true">#</a> \u56FE\u7247\u8D44\u6E90</h2><p>\u56FE\u7247\u8D44\u6E90\u9664\u4E86 ResourceID \u5916, \u8FD8\u62E5\u6709\u4E00\u4E2A <code>ImageID</code>, mirai-core-api \u4E2D ImageID \u7684\u683C\u5F0F\u4E3A <code>{XXXXXX}.yyy</code>, \u800C TmpFsServer \u4EC5\u622A\u53D6\u5176\u4E2D <code>XXXX</code> \u90E8\u5206\u4F5C\u4E3A <code>ImageID</code></p><p>\u5728\u5B8C\u6210\u8D44\u6E90\u4E0A\u4F20\u540E, TmpFsServer \u4F1A\u989D\u5916\u5C06 <code>/images/$imgId</code> \u94FE\u63A5\u5230 <code>/storage/$resourceId</code></p><h1 id="serverfiledisk-serverfilesystem-\u7FA4\u6587\u4EF6\u7BA1\u7406\u7CFB\u7EDF" tabindex="-1"><a class="header-anchor" href="#serverfiledisk-serverfilesystem-\u7FA4\u6587\u4EF6\u7BA1\u7406\u7CFB\u7EDF" aria-hidden="true">#</a> ServerFileDisk / ServerFileSystem (\u7FA4\u6587\u4EF6\u7BA1\u7406\u7CFB\u7EDF)</h1><p>\u6BCF\u4E00\u4E2A\u7FA4\u90FD\u6709\u4E00\u4E2A\u81EA\u5DF1\u7684 <code>ServerFileSystem</code>, \u6BCF\u4E00\u4E2A <code>ServerFileSystem</code> \u90FD\u4F1A\u5206\u914D\u4E00\u5757\u533A\u57DF\u5B58\u50A8\u81EA\u5DF1\u7684\u6570\u636E, \u8DEF\u5F84\u4E3A</p><p><code>/fs-disk/\${UUID.randomUUID()}</code> (\u4E0B\u6587\u7B80\u8BB0\u4E3A <code>/sfs</code>)</p><p>\u7531\u4E8E\u7FA4\u6587\u4EF6\u7684\u7279\u6B8A\u6027, \u7FA4\u6587\u4EF6\u91C7\u7528\u968F\u673A UUID \u4F5C\u4E3A\u6587\u4EF6\u540D</p><blockquote><p>\u7279\u6B8A\u6027: \u7FA4\u6587\u4EF6\u5141\u8BB8\u540C\u540D\u6587\u4EF6\u7684\u5B58\u5728</p></blockquote><p>\u7FA4\u6587\u4EF6\u6570\u636E\u7ED3\u6784\u5982\u4E0B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/sfs/details/root/....
/sfs/details/fileN/....
/sfs/details/dirN/....
/sfs/root/fileN....
/sfs/dirN/fileN....
/sfs/fileN.....
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u666E\u901A\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u666E\u901A\u6587\u4EF6" aria-hidden="true">#</a> \u666E\u901A\u6587\u4EF6</h2><p>\u5BF9\u4E8E\u666E\u901A\u6587\u4EF6, ServerFileSystem \u4F1A\u968F\u673A\u5206\u914D\u4E00\u4E2A ID, \u5E76\u5C06\u6570\u636E\u62F7\u8D1D\u81F3 <code>/sfs/$id</code>, \u7136\u540E\u5728\u6B64\u6587\u4EF6\u6240\u5728\u7684\u6587\u4EF6\u5939\u521B\u5EFA\u4E00\u4E2A\u540C\u540D\u7A7A\u6587\u4EF6, \u5E76\u751F\u6210\u76F8\u5173\u7684 details \u4FE1\u606F</p><blockquote><p>\u5982: \u5982\u679C\u662F\u5728\u6839\u76EE\u5F55, \u5219\u4F1A\u521B\u5EFA <code>/sfs/root/$id</code>,</p><p>\u5982\u679C\u662F\u5728\u76EE\u5F55 <code>testdir</code>(\u5B9E\u9645\u662F\u968F\u673A UUID), \u5219\u4F1A\u521B\u5EFA <code>/sfs/testdir/$id</code></p></blockquote><h2 id="\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#\u76EE\u5F55" aria-hidden="true">#</a> \u76EE\u5F55</h2><p>\u5BF9\u4E8E\u76EE\u5F55, \u76F8\u5173\u7684\u884C\u4E3A\u4E0E\u666E\u901A\u6587\u4EF6\u4E00\u6837\u3002 \u552F\u4E00\u7684\u533A\u522B\u662F\uFF0C <code>/sfs/$id</code> \u662F\u4E00\u4E2A\u76EE\u5F55\u800C\u4E0D\u662F\u4E00\u4E2A\u6587\u4EF6</p><h2 id="details-\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#details-\u4FE1\u606F" aria-hidden="true">#</a> details \u4FE1\u606F</h2><p><code>/sfs/details/$id/....</code> \u5B58\u6709\u6BCF\u4E00\u4E2A\u6587\u4EF6\u7684\u8BE6\u7EC6\u4FE1\u606F (\u5BF9\u4E8E\u6839\u76EE\u5F55, <code>/sfs/details/root/...</code>)</p><p>\u5176\u4E2D\u7684\u6587\u4EF6\u610F\u4E49\u4E3A:</p><ul><li><code>~/parent</code> \u6B64\u6587\u4EF6\u6240\u5728\u7684\u6587\u4EF6\u5939</li><li><code>~/name</code> \u6B64 \u6587\u4EF6/\u6587\u4EF6\u5939 \u7684\u540D\u5B57, \u5BF9\u4E8E\u6839\u76EE\u5F55\u6C38\u8FDC\u4E3A <code>&quot;&quot;</code></li><li><code>~/creator</code> \u6B64 \u6587\u4EF6/\u6587\u96C6\u5939 \u7684\u521B\u5EFA\u8005, \u7F16\u7801\u4E3A \u4E8C\u8FDB\u5236 big-endian int64</li><li><code>~/createTime</code> \u6B64 \u6587\u4EF6/\u6587\u4EF6\u5939 \u7684\u521B\u5EFA\u65F6\u95F4, \u7F16\u7801\u4E3A \u4E8C\u8FDB\u5236 big-endian int64</li></ul>`,25),c=[a];function o(t,l){return d(),i("div",null,c)}var p=e(r,[["render",o],["__file","SpaceAllocation.html.vue"]]);export{p as default};
