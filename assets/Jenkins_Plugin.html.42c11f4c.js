import{_ as i,a as t,b as r,c as d,d as c,e as o,f as h,g as l,h as p,i as _,j as u,k as m,l as g}from"./jenkins_shell.f9e3403d.js";import{_ as b,r as k,o as x,c as f,a as e,b as v,f as s,d as a}from"./app.b54cc28b.js";const A={},T=s('<h1 id="jenkins\u63D2\u4EF6\u4F7F\u7528\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#jenkins\u63D2\u4EF6\u4F7F\u7528\u8BF4\u660E" aria-hidden="true">#</a> Jenkins\u63D2\u4EF6\u4F7F\u7528\u8BF4\u660E</h1><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u4EE5\u4E0B\u8BF4\u660E\u4EE5 Jenkins 2.361.2 \u7248\u672C\u4E3A\u4F8B\u3002</p></div><h2 id="\u4F7F\u7528\u524D\u51C6\u5907" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u524D\u51C6\u5907" aria-hidden="true">#</a> \u4F7F\u7528\u524D\u51C6\u5907</h2><h3 id="\u83B7\u53D6jenkins\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6jenkins\u63D2\u4EF6" aria-hidden="true">#</a> \u83B7\u53D6Jenkins\u63D2\u4EF6</h3><p>Jenkins\u63D2\u4EF6\u6709\u4EE5\u4E0B\u4E24\u79CD\u83B7\u53D6\u65B9\u5F0F\uFF1A</p><p><strong>\u65B9\u5F0F\u4E00</strong>\uFF1A\u5728 TCA \u6E90\u7801\u7684<code>plugin/jenkins_plugin</code>\u76EE\u5F55\u4E0B\uFF0C\u6267\u884C\u547D\u4EE4<code>mvm package -DskipTests</code>\uFF0C\u6253\u5305\u5B8C\u6210\u540E\u8FDB\u5165target\u76EE\u5F55\u4F1A\u770B\u5230<code>Jenkins_plugin.hpi</code> \u7684\u5B89\u88C5\u5305\u3002</p>',6),C=e("strong",null,"\u65B9\u5F0F\u4E8C",-1),J=a("\uFF1A\u4ECETCA release \u5B89\u88C5\u5305\u4E2D\uFF0C\u83B7\u53D6"),j=e("code",null,"jenkins_plugin.hpi",-1),E=a("\uFF1A"),I={href:"https://github.com/Tencent/CodeAnalysis/releases",target:"_blank",rel:"noopener noreferrer"},q=a("https://github.com/Tencent/CodeAnalysis/releases"),B=a("\u3002"),D=s('<h3 id="\u5728jenkins\u5B89\u88C5\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5728jenkins\u5B89\u88C5\u63D2\u4EF6" aria-hidden="true">#</a> \u5728Jenkins\u5B89\u88C5\u63D2\u4EF6</h3><p>\u5728Jenkins\u4E2D\u901A\u8FC7\u3010Manage Plugin\u3011-&gt; \u3010Advanced\u3011-&gt;\u3010Deploy plugin\u3011\u7684\u65B9\u5F0F\u9009\u62E9 Jenkins_plugin.hpi\u6587\u4EF6\u4E0A\u4F20\u5B89\u88C5\uFF0C\u5E76\u91CD\u542FJenkins\u3002<br><img src="'+i+'" alt=""><img src="'+t+'" width="500"></p><p>\u6700\u7EC8\u5728\u3010Installed\u3011\u91CC\u641C\u7D22\u51FA\u3010TCA\u3011\u4EE3\u8868\u63D2\u4EF6\u5B89\u88C5\u6210\u529F\u3002 <img src="'+r+'" alt=""></p><h2 id="\u4F7F\u7528\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u63D2\u4EF6" aria-hidden="true">#</a> \u4F7F\u7528\u63D2\u4EF6</h2><h3 id="\u5728-tca-\u521B\u5EFA\u56E2\u961F\u548C\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u5728-tca-\u521B\u5EFA\u56E2\u961F\u548C\u9879\u76EE" aria-hidden="true">#</a> \u5728 TCA \u521B\u5EFA\u56E2\u961F\u548C\u9879\u76EE</h3><p>\u5982\u5DF2\u521B\u5EFA\u540E\u5F85\u4F7F\u7528\u7684\u56E2\u961F\u548C\u9879\u76EE\uFF0C\u53EF\u8DF3\u8FC7\u6B64\u6B65\u3002</p><p>\u8FDB\u5165\u5DF2\u90E8\u7F72\u597D\u7684TCA\u9875\u9762\uFF0C\u70B9\u51FB\u3010\u521B\u5EFA\u56E2\u961F\u3011\uFF0C\u6210\u529F\u540E\u3010\u521B\u5EFA\u9879\u76EE\u3011\u3002</p><h3 id="\u914D\u7F6Ejenkins\u73AF\u5883\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6Ejenkins\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a> \u914D\u7F6EJenkins\u73AF\u5883\u53D8\u91CF</h3><p>\u8FDB\u5165Jenkins\u8BBE\u7F6E\u754C\u9762\uFF0C\u5728\u3010Manage Jenkins\u3011-&gt;\u3010Configure System\u3011-&gt;\u3010Global properties\u3011\u4E2D\u6DFB\u52A0\u73AF\u5883\u53D8\u91CF\uFF1A<br> Name\uFF1A<code>PYTHONPATH</code> Value\uFF1Axxxx\uFF08\u8DEF\u5F84\u4E0D\u5305\u542Bpython3\uFF09<br> Value\uFF1A<code>GITPATH</code> Value\uFF1Axxxx\uFF08\u8DEF\u5F84\u4E0D\u5305\u542Bgit\uFF09<br><img src="'+d+'" alt=""><img src="'+c+'" alt=""><img src="'+o+'" width="400"></p><h3 id="\u521B\u5EFA\u4E00\u4E2A\u6784\u5EFA\u4EFB\u52A1-\u914D\u7F6E\u4EE3\u7801\u5E93\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u4E00\u4E2A\u6784\u5EFA\u4EFB\u52A1-\u914D\u7F6E\u4EE3\u7801\u5E93\u4FE1\u606F" aria-hidden="true">#</a> \u521B\u5EFA\u4E00\u4E2A\u6784\u5EFA\u4EFB\u52A1\uFF0C\u914D\u7F6E\u4EE3\u7801\u5E93\u4FE1\u606F</h3><p>\u8FDB\u5165Jenkins\uFF0C\u901A\u8FC7\u3010New Item\u3011\u521B\u5EFA\u4E00\u4E2A\u7A7A\u767D\u4EFB\u52A1\uFF0C\u5728\u4EFB\u52A1\u914D\u7F6E\u4E2D\u3010Source Code Management\u3011\u914D\u7F6E\u5F85\u5206\u6790\u7684\u4EE3\u7801\u5E93\u5730\u5740\u548C\u51ED\u8BC1\u3002<br><code>Repository URL</code>: \u586B\u5165\u8FDC\u7AEF\u4ED3\u5E93\u5730\u5740<br><code>Credentials</code>: \u6DFB\u52A0\u4ED3\u5E93\u7684\u7528\u6237\u540D\u548C\u5BC6\u7801\u4F5C\u4E3A\u51ED\u8BC1\uFF0C\u5982\u679C\u662F\u516C\u5F00\u4ED3\u5E93\uFF0C\u53EF\u4EE5\u4E0D\u8BBE\u7F6E\u4ED3\u5E93\u51ED\u8BC1</p><img src="'+h+'" width="300"><p><img src="'+l+'" alt=""></p><h3 id="\u914D\u7F6E-tca-\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-tca-\u63D2\u4EF6" aria-hidden="true">#</a> \u914D\u7F6E TCA \u63D2\u4EF6</h3><p>\u5728\u6784\u5EFA\u4EFB\u52A1\u7684\u3010Build\u3011\u4E2D\u9009\u62E9\u3010TCA\u3011\u63D2\u4EF6\u5E76\u914D\u7F6E\u4EE5\u4E0B\u53C2\u6570\uFF1A</p><p><code>CodeAnalysis</code>: \u62C9\u53D6\u4EE3\u7801\u6240\u5728\u7684\u7EDD\u5BF9\u8DEF\u5F84<br><code>\u56E2\u961FID</code>: \u5728 TCA \u4E2D\u521B\u5EFA\u7684\u56E2\u961F\u7684\u6807\u8BC6ID\uFF0C\u53EF\u5728TCA\u3010\u56E2\u961F\u6982\u89C8\u3011\u4E2D\u83B7\u53D6\u201C\u56E2\u961F\u552F\u4E00\u6807\u8BC6\u201D<br><code>\u9879\u76EE\u540D\u79F0</code>: \u5728 TCA \u4E2D\u521B\u5EFA\u7684\u9879\u76EE\u7684\u6807\u8BC6ID\uFF0C\u53EF\u5728TCA\u3010\u9879\u76EE\u6982\u89C8\u3011\u4E2D\u83B7\u53D6\u201C\u9879\u76EE\u552F\u4E00\u6807\u8BC6\u201D<br><code>Token</code>: \u5728 TCA \u7684\u3010\u4E2A\u4EBA\u4E2D\u5FC3\u3011-&gt;\u3010\u4E2A\u4EBA\u4EE4\u724C\u3011\u4E2D\u83B7\u53D6<br><code>\u5206\u652F\u540D\u79F0</code>: \u9700\u8981\u626B\u63CF\u7684\u4EE3\u7801\u5206\u6790\u540D\u79F0<br><code>\u8BED\u8A00\u7C7B\u522B</code>: \u9879\u76EE\u9700\u8981\u626B\u63CF\u7684\u8BED\u8A00<br><code>\u5206\u6790\u65B9\u6848\u6A21\u677FID</code>: \u9700\u8981\u4F7F\u7528\u7684\u5206\u6790\u65B9\u6848\u6A21\u677FID\uFF0C\u5728\u5206\u6790\u65B9\u6848\u6A21\u677F\u7684\u201C\u57FA\u7840\u5C5E\u6027\u201D\u4E2D\u83B7\u53D6\uFF0C\u5C06\u6839\u636E\u6B64\u6A21\u677F\u521B\u5EFA\u5206\u6790\u65B9\u6848\uFF08\u9009\u586B\uFF09<br><code>\u5206\u6790\u65B9\u6848\u540D\u79F0</code>: \u6307\u5B9A\u521B\u5EFA\u51FA\u6765\u7684\u5206\u6790\u65B9\u6848\u7684\u540D\u79F0\uFF08\u9009\u586B\uFF09<br><code>\u5168\u91CF\u626B\u63CF</code>: \u4E0D\u52FE\u9009\u9ED8\u8BA4\u542F\u52A8\u589E\u91CF\u626B\u63CF<br><code>\u8D28\u91CF\u95E8\u7981</code>: \u8BBE\u7F6E\u8D28\u91CF\u95E8\u7981\u503C\uFF0C\u914D\u7F6E\u548C\u4F7F\u7528\u53C2\u8003 <a href="#%E8%AE%BE%E7%BD%AE%E8%B4%A8%E9%87%8F%E9%97%A8%E7%A6%81">\u8BBE\u7F6E\u8D28\u91CF\u95E8\u7981</a></p><p>\u914D\u7F6E\u5B8C\u6210\u540E\u70B9\u51FB\u3010Save\u3011\u4FDD\u5B58\u3002</p><p><img src="'+p+'" alt=""></p><h3 id="\u542F\u52A8\u6784\u5EFA\u5E76\u67E5\u770B\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8\u6784\u5EFA\u5E76\u67E5\u770B\u7ED3\u679C" aria-hidden="true">#</a> \u542F\u52A8\u6784\u5EFA\u5E76\u67E5\u770B\u7ED3\u679C</h3><p>\u70B9\u51FB\u3010Build Now\u3011\u542F\u52A8\u6784\u5EFA\u3002<br> \u8FDB\u5165\u6784\u5EFA\u4EFB\u52A1\uFF0C\u5728\u3010Console Output\u3011\u4E2D\u67E5\u770B\u6267\u884C\u8FC7\u7A0B\u3002<br> \u6267\u884C\u5B8C\u6210\u540E\uFF0C\u53EF\u5728\u4E0B\u65B9\u770B\u5230\u4EE3\u7801\u5206\u6790\u7684\u7ED3\u679C\u94FE\u63A5\uFF0C\u4E5F\u53EF\u5728\u3010\u4EE3\u7801\u5206\u6790\u62A5\u544A\u3011\u4E2D\u83B7\u53D6\u4EE3\u7801\u5206\u6790\u7684json\u62A5\u544A\u3002<br><img src="'+_+'" alt=""><img src="'+u+'" width="300"><img src="'+m+'" alt=""></p><h2 id="\u8BBE\u7F6E\u8D28\u91CF\u95E8\u7981" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u8D28\u91CF\u95E8\u7981" aria-hidden="true">#</a> \u8BBE\u7F6E\u8D28\u91CF\u95E8\u7981</h2><p>\u5728\u4E0A\u8FF0 TCA \u63D2\u4EF6\u914D\u7F6E\u90E8\u5206\u586B\u5199<code>\u8D28\u91CF\u95E8\u7981</code>\u53C2\u6570\uFF0C\u9700\u8981\u586B\u5199\u4E00\u4E2A\u6574\u6570\uFF0C\u5373\u5F53\u524D\u5206\u652F\u7684\u626B\u63CF\u95EE\u9898\u91CF\u5927\u4E8E\u8BE5\u8D28\u91CF\u95E8\u7981\u503C\u65F6\uFF0C\u5224\u65AD\u4E3A\u4E0D\u901A\u8FC7\uFF1B\u5426\u5219\u4E3A\u901A\u8FC7\u3002\u5B8C\u6210\u540E\u4F1A\u5C06TCA\u7ED3\u679C\u72B6\u6001\uFF08<code>success</code>|<code>failure</code>\uFF09\u8F93\u51FA\u5230\u5DE5\u4F5C\u7A7A\u95F4\u4E0B\u7684<code>tca_threshold.txt</code>\u6587\u4EF6\u4E2D\uFF0C\u4F9B\u540E\u7EED\u6B65\u9AA4\u5224\u65AD\u548C\u7EC8\u6B62\u6D41\u6C34\u7EBF\u3002</p><p>\u5728TCA\u63D2\u4EF6\u540E\u589E\u52A0shell\u547D\u4EE4\u6B65\u9AA4\uFF0C\u8F93\u5165\u4EE5\u4E0B\u811A\u672C\u5185\u5BB9\uFF1A</p><p><img src="'+g+`" alt=""></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>tca_status=\`cat tca_threshold.txt\`
if [ &quot;\${tca_status}&quot; == &quot;success&quot; ]; then
  echo &quot;&gt;&gt; tca scan pass!&quot;
else
  echo &quot;&gt;&gt; tca scan fail! exit code 255&quot;
  exit 255
fi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u8D28\u91CF\u95E8\u7981\u4E0D\u901A\u8FC7\u65F6\uFF0C\u4F1A\u7EC8\u6B62\u6D41\u6C34\u7EBF\uFF08\u9000\u51FA\u7801\uFF1A255\uFF09\u3002</p>`,26);function N(y,P){const n=k("ExternalLinkIcon");return x(),f("div",null,[T,e("p",null,[C,J,j,E,e("a",I,[q,v(n)]),B]),D])}const S=b(A,[["render",N],["__file","Jenkins_Plugin.html.vue"]]);export{S as default};