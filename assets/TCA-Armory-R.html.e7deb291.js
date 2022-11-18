import{_ as c,a}from"./createcustomrule.d230c94f.js";import{_ as d,a as h}from"./scheme_codelint_03.3d29583b.js";import{_,r as l,o as p,c as u,a as e,b as t,w as r,f as s,d as o}from"./app.b54cc28b.js";const g={},m=s('<h1 id="tca-armory-r-\u4F7F\u7528\u624B\u518C" tabindex="-1"><a class="header-anchor" href="#tca-armory-r-\u4F7F\u7528\u624B\u518C" aria-hidden="true">#</a> TCA-Armory-R \u4F7F\u7528\u624B\u518C</h1><p>TCA\u72EC\u7ACB\u5DE5\u5177TCA-Armory-R\uFF0C\u522B\u540DRegexScanner\uFF0C\u6B63\u5219\u5339\u914D\u5DE5\u5177\uFF0C\u652F\u6301\u626B\u63CF\u6587\u4EF6\u540D\u79F0\u548C\u6587\u672C\u5185\u5BB9\uFF0C\u652F\u6301\u9875\u9762\u76F4\u63A5<strong>\u81EA\u5B9A\u4E49\u521B\u5EFA\u89C4\u5219</strong>\u3002</p><h2 id="\u9002\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u9002\u7528\u573A\u666F" aria-hidden="true">#</a> \u9002\u7528\u573A\u666F</h2><ul><li>\u68C0\u6D4B\u9879\u76EE\u4E2D\u7684\u6587\u4EF6\u540D\uFF0C\u6BD4\u5982\u6F0F\u6D1E\u6587\u4EF6log4j-core-2.10.1.jar</li><li>\u68C0\u6D4B\u4EE3\u7801\u6587\u4EF6\u4E2D\u7684\u6587\u672C\u5185\u5BB9\uFF0C\u6BD4\u5982\u9AD8\u5371\u51FD\u6570vsscanf</li><li>\u68C0\u6D4B\u914D\u7F6E\u6587\u4EF6\u4E2D\u7684\u6587\u672C\u5185\u5BB9\uFF0C\u6BD4\u5982\u8D26\u53F7\u5BC6\u7801\u660E\u6587</li></ul><h2 id="\u5BF9\u6BD4regexscan\u3001regexfilescan" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u6BD4regexscan\u3001regexfilescan" aria-hidden="true">#</a> \u5BF9\u6BD4RegexScan\u3001RegexFileScan</h2><ul><li>\u5355\u4E2A\u5DE5\u5177\u5373\u53EF\u5B8C\u6210\u6587\u4EF6\u540D\u548C\u6587\u4EF6\u5185\u5BB9\u7684\u68C0\u67E5</li><li>\u626B\u63CF\u901F\u5EA6\u66F4\u5FEB\uFF0C\u5927\u6982\u51CF\u5C1160%\u7684\u8017\u65F6</li><li><em>\u53EA\u652F\u6301go\u7684\u6B63\u5219\u8BED\u6CD5\uFF0C\u4F1A\u6BD4python\u7684\u5C11\u4E00\u4E9B</em></li></ul><h2 id="\u5FEB\u901F\u63A5\u5165" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u63A5\u5165" aria-hidden="true">#</a> \u5FEB\u901F\u63A5\u5165</h2><p>\u4EE5\u4E0B\u662F\u63A5\u5165\u6B65\u9AA4\uFF1A</p>',8),x=o("\u5C5E\u4E8E\u589E\u5F3A\u5206\u6790\u6A21\u5757\uFF0C\u9700\u8981\u5148"),f=o("\u90E8\u7F72CLS"),b=e("li",null,"\u5728\u4EE3\u7801\u5206\u6790\u521B\u5EFA\u9879\u76EE\uFF0C\u81EA\u5B9A\u4E49\u89C4\u5219\u5305\u91CC\u6DFB\u52A0\u60F3\u8981\u8FDB\u884C\u626B\u63CF\u7684TCA-Armory-R\u89C4\u5219",-1),k=e("li",null,"\u542F\u52A8\u5206\u6790\u5373\u53EF",-1),y=s('<h2 id="\u81EA\u5B9A\u4E49\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u89C4\u5219" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u89C4\u5219</h2><h3 id="_1-\u5F00\u653E\u652F\u6301\u81EA\u5B9A\u4E49\u89C4\u5219\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#_1-\u5F00\u653E\u652F\u6301\u81EA\u5B9A\u4E49\u89C4\u5219\u6743\u9650" aria-hidden="true">#</a> 1. \u5F00\u653E\u652F\u6301\u81EA\u5B9A\u4E49\u89C4\u5219\u6743\u9650</h3><p>\u5F00\u653E<strong>\u652F\u6301\u81EA\u5B9A\u4E49\u89C4\u5219</strong>\u6743\u9650\uFF0C\u9700\u5E73\u53F0\u7BA1\u7406\u5458\u5728<strong>\u7BA1\u7406\u5165\u53E3</strong>-<strong>\u5DE5\u5177\u7BA1\u7406</strong>\u4E2D\u627E\u5230TCA-Armory-R\u5DE5\u5177\uFF0C\u5E76\u5C06\u5176\u6743\u9650\u72B6\u6001\u8C03\u6574\u4E3A<strong>\u652F\u6301\u81EA\u5B9A\u4E49\u89C4\u5219</strong>\u3002</p>',3),A=o("\u89C4\u5219\u6743\u9650\u8BE6\u89C1"),E=o("\u81EA\u5B9A\u4E49\u89C4\u5219\u6743\u9650\u8BF4\u660E"),T=s('<h3 id="_2-\u6DFB\u52A0\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#_2-\u6DFB\u52A0\u89C4\u5219" aria-hidden="true">#</a> 2. \u6DFB\u52A0\u89C4\u5219</h3><p>\u8FDB\u5165\u5DE5\u5177\u7BA1\u7406\u5165\u53E3\uFF0C\u8FDB\u5165TCA-Armory-R\u5DE5\u5177\u9875\u9762\uFF0C\u9009\u62E9\u4E0A\u65B9\u7684\u201C\u81EA\u5B9A\u4E49\u89C4\u5219\u201D\uFF0C\u7136\u540E\u70B9\u51FB\u201C\u6DFB\u52A0\u89C4\u5219\u201D:</p><p><img src="'+a+'" alt="\u6DFB\u52A0\u81EA\u5B9A\u4E49\u89C4\u5219"></p><h3 id="_3-\u586B\u5199\u89C4\u5219\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#_3-\u586B\u5199\u89C4\u5219\u4FE1\u606F" aria-hidden="true">#</a> 3. \u586B\u5199\u89C4\u5219\u4FE1\u606F</h3><p>\u8FDB\u5165\u201C\u521B\u5EFA\u89C4\u5219\u201D\u9875\u9762\uFF0C\u6309\u7167\u9700\u6C42\u586B\u5199\u76F8\u5173\u4FE1\u606F\uFF0C\u5B8C\u6210\u540E\uFF0C\u70B9\u51FB\u9875\u9762\u6700\u540E\u7684\u201C\u786E\u5B9A\u201D\u6309\u94AE\u63D0\u4EA4\u3002</p><h3 id="\u89C4\u5219\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u89C4\u5219\u793A\u4F8B" aria-hidden="true">#</a> \u89C4\u5219\u793A\u4F8B\uFF1A</h3><p>\u89C4\u5219\u626B\u63CF\u573A\u666F\uFF1A\u626B\u63CF\u4EE3\u7801\u4E2D\u7684 github token\uFF0C\u5982\u679Ctoken\u4EE5\u660E\u6587\u5F62\u5F0F\u5199\u5728\u6E90\u7801\u6587\u4EF6\u4E2D\uFF0C\u4F1A\u9020\u6210\u9690\u79C1\u6CC4\u9732\uFF0C\u53EF\u80FD\u9020\u6210\u4E25\u91CD\u7684\u5B89\u5168\u4E8B\u6545\u3002</p><p>\u6B63\u5219\u8868\u8FBE\u5F0F\uFF1A\u5339\u914D github token \u5B57\u7B26\u4E32\uFF0C\u6839\u636Egithub token\u7684\u4E00\u822C\u5F62\u5F0F\uFF0C\u53EF\u4EE5\u63A8\u65AD\u51FA\u6B63\u5219\u8868\u8FBE\u5F0F ((ghp|gho|ghu|ghs)_[0-9a-zA-Z]{36})\u3002</p>',8),R={class:"custom-container tip"},C=e("p",{class:"custom-container-title"},"\u63D0\u793A",-1),v=o("\u53EA\u652F\u6301go\u6B63\u5219\u8BED\u6CD5: "),S={href:"https://pkg.go.dev/regexp/syntax",target:"_blank",rel:"noopener noreferrer"},j=o("regexp"),B=e("p",null,"\u5EFA\u8BAE\u5148\u6D4B\u8BD5\u597D\u6B63\u5219\u8868\u8FBE\u5F0F\u662F\u5426\u6B63\u786E\uFF0C\u6B63\u5219\u8868\u8FBE\u5F0F\u6D4B\u8BD5\u7F51\u7AD9\u63A8\u8350\uFF1Ahttp://tool.oschina.net/regex",-1),q=e("p",null,[e("img",{src:c,alt:"\u586B\u5199\u81EA\u5B9A\u4E49\u89C4\u5219"})],-1),F=e("h3",{id:"\u5B57\u6BB5\u89E3\u91CA",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u5B57\u6BB5\u89E3\u91CA","aria-hidden":"true"},"#"),o(" \u5B57\u6BB5\u89E3\u91CA")],-1),L=e("p",null,"\u89C4\u5219\u540D\u79F0\u3001\u524D\u7AEF\u5C55\u793A\u540D\u79F0\uFF1A\u5EFA\u8BAE\u4F7F\u7528\u5355\u8BCD\u9996\u5B57\u6BCD\u5927\u5199\u7684\u683C\u5F0F\uFF0C\u5982 DetectedGithubToken",-1),z=e("p",null,"\u89C4\u5219\u7B80\u8FF0\uFF1A\u4F5C\u4E3A\u626B\u63CF\u51FA\u6765\u5230\u95EE\u9898\u6807\u9898",-1),N=e("p",null,"\u89C4\u5219\u53C2\u6570\uFF1A",-1),V=e("li",null,[e("p",null,"(1) \u53C2\u6570\u683C\u5F0F\u7C7B\u4F3Cini\u7684\u683C\u5F0F\uFF0C \u4E5F\u5C31\u662Fkey = value\u7684\u683C\u5F0F")],-1),G=o("(2) [\u5FC5\u9009] "),w=e("code",null,"regex",-1),D=o(" \u53C2\u6570\uFF0C\u7528\u4E8E\u6307\u5B9A\u626B\u63CF\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C \u4F8B\u5982: "),I=e("code",null,"regex=((ghp|gho|ghu|ghs)_[0-9a-zA-Z]{36})",-1),M=o("\u3002"),Z=o("\u53EA\u652F\u6301go\u6B63\u5219\u8BED\u6CD5: "),H={href:"https://pkg.go.dev/regexp/syntax",target:"_blank",rel:"noopener noreferrer"},J=o("regexp"),K=o("\u3002\u5EFA\u8BAE\u5148\u6D4B\u8BD5\u597D\u6B63\u5219\u8868\u8FBE\u5F0F\u662F\u5426\u6B63\u786E\uFF0C\u6B63\u5219\u8868\u8FBE\u5F0F\u6D4B\u8BD5\u7F51\u7AD9\u63A8\u8350\uFF1A"),O={href:"http://tool.oschina.net/regex",target:"_blank",rel:"noopener noreferrer"},P=o("http://tool.oschina.net/regex"),Q=s("<li><p>(3) [\u5FC5\u9009] <code>msg</code> \u53C2\u6570\uFF0C\u7528\u4E8E\u5C55\u73B0issue\u8BF4\u660E\uFF0C \u4F8B\u5982: <code>msg=\u68C0\u6D4B\u5230\u9AD8\u5371\u51FD\u6570%s\uFF0C\u5EFA\u8BAE\u66FF\u6362\u3002</code></p><ul><li><p>msg\u4E2D\u7684\u201C%s\u201D\u4F7F\u7528regex\u4E2D\u7684group\uFF08\u7528\u201C()&quot;\u62EC\u8D77\u6765\u7684\u90E8\u5206\uFF09\u4E00\u4E00\u5339\u914D</p></li><li><p>\u5982\u679Cregex\u6CA1\u6709\u5B9A\u4E49group\uFF0C\u5219msg\u6700\u591A\u6709\u4E00\u4E2A%s, \u5E76\u7531\u6574\u4E2Aregex\u5339\u914D\u7684\u5B57\u7B26\u4E32\u66FF\u4EE3</p></li><li><p>\u5982\u679Cmsg\u91CC\u6CA1\u6709\u5305\u542B\u201C%s\u201D\uFF0C\u5219\u76F4\u63A5\u663E\u793Amsg</p></li><li><p>\u5982\u679Cmsg\u6CA1\u6709\u63D0\u4F9B\uFF0C\u5219\u4F1A\u7ED9\u51FA\u9ED8\u8BA4\u4FE1\u606F</p></li></ul></li><li><p>(4) [\u53EF\u9009] <code>ignore_comment</code> \u53C2\u6570\uFF0C\u7528\u4E8E\u6307\u5B9A\u662F\u5426\u5FFD\u7565\u6CE8\u91CA\u4EE3\u7801\uFF0C\u53EF\u9009\u503C\uFF1ATrue\u3001true\u3001False\u3001false \u3002\u4F8B\u5982: <code>ignore_comment=True</code>, \u9ED8\u8BA4\u662FFalse</p></li><li><p>(5) [\u53EF\u9009] <code>file_scan</code> \u53C2\u6570\uFF0C\u7528\u4E8E\u6307\u5B9A\u662F\u5426\u626B\u63CF\u6587\u4EF6\u540D\u79F0\uFF0C\u53EF\u9009\u503C\uFF1ATrue\u3001true\u3001False\u3001false \u3002\u4F8B\u5982: <code>file_scan=True</code>, \u9ED8\u8BA4\u662FFalse</p></li><li><p>(6) [\u53EF\u9009] <code>include</code> \u53C2\u6570\uFF0C\u7528\u4E8E\u6307\u5B9A\u53EA\u626B\u63CF\u7684\u6587\u4EF6\u5339\u914D\u8303\u56F4\uFF0C\u57FA\u4E8E\u76F8\u5BF9\u8DEF\u5F84\uFF0C\u4F7F\u7528\u901A\u914D\u7B26\u683C\u5F0F\uFF0C\u591A\u9879\u4F7F\u7528\u82F1\u6587\u5206\u53F7\uFF08;\uFF09\u9694\u5F00\u3002\u4F8B\u5982: <code>include=src/test;src/main.*;*.cpp</code></p></li>",4),U=e("p",null,[o("(7) [\u53EF\u9009] "),e("code",null,"exclude"),o(" \u53C2\u6570\uFF0C\u7528\u4E8E\u6307\u5B9A\u4E0D\u626B\u63CF\u7684\u6587\u4EF6\u5339\u914D\u8303\u56F4\uFF0C\u683C\u5F0F\u540Cinclude\u53C2\u6570\uFF0C\u4F8B\u5982: "),e("code",null,"exclude=tests;*.json")],-1),W=o("\u8DEF\u5F84\u8FC7\u6EE4\uFF08"),X=e("code",null,"exclude",-1),Y=o(", "),$=e("code",null,"include",-1),ee=o("\uFF09\u91C7\u7528Glob-Style\u7684\u5339\u914D\u6A21\u5F0F\uFF0C\u8BE6\u89C1 "),oe={href:"https://pkg.go.dev/path/filepath#Match",target:"_blank",rel:"noopener noreferrer"},te=o("Go-filepath-Match"),se=o("\uFF0C \u9664\u4E86 "),ne=e("code",null,"**",-1),ie=o(" \u7528\u6765\u5339\u914D\u96F6\u6216\u591A\u4E2A\u76EE\u5F55\uFF0C\u672C\u5DE5\u5177\u4F1A"),le=e("strong",null,"\u9ED8\u8BA4\u5339\u914D\u524D\u540E\u76EE\u5F55",-1),re=o("\u3002\u4E3E\u4F8B:"),ce=s("<blockquote><ol><li><code>exclude=*.py</code> \u4F1A\u5FFD\u7565\u4EE5\u4E0B\u6587\u4EF6: main.py, src/main.py, main.py/install.sh</li><li><code>exclude=tests</code> \u4F1A\u5FFD\u7565\u4EE5\u4E0B\u6587\u4EF6: tests/test.py, a/tests/b/test.py</li><li><code>include=main.*</code> \u4F1A\u53EA\u626B\u63CF\u4EE5\u4E0B\u6587\u4EF6: src/main.py, app/main.go</li><li><code>include=src</code>\u4E14<code>exclude=src/lib</code> \u4F1A\u53EA\u626B\u63CF\u4EE5\u4E0B\u6587\u4EF6: src/main.py, src/project/proj.py; \u5FFD\u7565\u4EE5\u4E0B\u6587\u4EF6: src/lib/lib.py, src/lib/package/pack.js</li></ol></blockquote>",1),ae=e("h3",{id:"_4-\u5C06\u81EA\u5B9A\u4E49\u89C4\u5219\u6DFB\u52A0\u5230\u9879\u76EE\u5206\u6790\u65B9\u6848\u4E2D",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_4-\u5C06\u81EA\u5B9A\u4E49\u89C4\u5219\u6DFB\u52A0\u5230\u9879\u76EE\u5206\u6790\u65B9\u6848\u4E2D","aria-hidden":"true"},"#"),o(" 4. \u5C06\u81EA\u5B9A\u4E49\u89C4\u5219\u6DFB\u52A0\u5230\u9879\u76EE\u5206\u6790\u65B9\u6848\u4E2D")],-1),de=e("p",null,"\u8FDB\u5165 \u4EE3\u7801\u5206\u6790 - \u5206\u6790\u65B9\u6848 - \u4EE3\u7801\u68C0\u67E5 - \u81EA\u5B9A\u4E49\u89C4\u5219\u5305 - \u67E5\u770B\u8BE6\u7EC6\u89C4\u5219\uFF0C\u6DFB\u52A0\u89C4\u5219\u3002",-1),he=e("p",null,[e("img",{src:d,alt:"\u70B9\u51FB\u81EA\u5B9A\u4E49\u89C4\u5219\u5305"})],-1),_e=e("p",null,[e("img",{src:h,alt:"\u6DFB\u52A0\u89C4\u5219"})],-1);function pe(ue,ge){const i=l("RouterLink"),n=l("ExternalLinkIcon");return p(),u("div",null,[m,e("ol",null,[e("li",null,[x,t(i,{to:"/zh/quickStarted/enhanceDeploy.html"},{default:r(()=>[f]),_:1})]),b,k]),y,e("p",null,[A,t(i,{to:"/zh/guide/%E5%B7%A5%E5%85%B7%E7%AE%A1%E7%90%86/%E8%87%AA%E5%AE%9A%E4%B9%89%E8%A7%84%E5%88%99.html"},{default:r(()=>[E]),_:1})]),T,e("div",R,[C,e("p",null,[e("strong",null,[v,e("a",S,[j,t(n)])])])]),B,q,F,L,z,N,e("ul",null,[V,e("li",null,[e("p",null,[G,w,D,I,M,e("strong",null,[Z,e("a",H,[J,t(n)])]),K,e("a",O,[P,t(n)])])]),Q,e("li",null,[U,e("blockquote",null,[e("p",null,[W,X,Y,$,ee,e("a",oe,[te,t(n)]),se,ne,ie,le,re]),ce])])]),ae,de,he,_e])}const be=_(g,[["render",pe],["__file","TCA-Armory-R.html.vue"]]);export{be as default};
