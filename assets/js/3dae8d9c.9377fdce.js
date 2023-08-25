"use strict";(self.webpackChunkchenchens=self.webpackChunkchenchens||[]).push([[3649],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),p=d(n),g=i,k=p["".concat(l,".").concat(g)]||p[g]||s[g]||r;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var m={};for(var l in t)hasOwnProperty.call(t,l)&&(m[l]=t[l]);m.originalType=e,m.mdxType="string"==typeof e?e:i,o[1]=m;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5460:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var a=n(3117),i=n(102),r=(n(7294),n(3905)),o=["components"],m={sidebar_position:1},l="Git",d={unversionedId:"git/git_intro",id:"git/git_intro",title:"Git",description:"\u5c07\u66f4\u65b0\u7684\u6b77\u53f2\u7d00\u9304\u7559\u5b58\u8d77\u4f86\uff0c\u4e4b\u5f8c\u6709\u9700\u8981\u90fd\u53ef\u4ee5\u8fd4\u56de\u6216\u53c3\u8003\u3002",source:"@site/docs/git/git_intro.md",sourceDirName:"git",slug:"/git/git_intro",permalink:"/myWebsite/docs/git/git_intro",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/git/git_intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"GitHub",permalink:"/myWebsite/docs/git/github_intro"}},c=[{value:"\u5c08\u6848\u7ba1\u7406\uff1a\u7248\u672c\u63a7\u7ba1\u3002",id:"\u5c08\u6848\u7ba1\u7406\u7248\u672c\u63a7\u7ba1",children:[],level:3},{value:"\u5e38\u898b\u6307\u4ee4\u5716",id:"\u5e38\u898b\u6307\u4ee4\u5716",children:[],level:3},{value:"Git \u672c\u6a5f\u7aef\u5c08\u6848\u7ba1\u7406\u7684\u57fa\u672c\u64cd\u4f5c",id:"git-\u672c\u6a5f\u7aef\u5c08\u6848\u7ba1\u7406\u7684\u57fa\u672c\u64cd\u4f5c",children:[{value:"1. \u521d\u59cb\u5316 : Git Repository",id:"1-\u521d\u59cb\u5316--git-repository",children:[],level:3},{value:"2. \u89c0\u5bdf Repository \u6a94\u6848\u8ffd\u8e64\u72c0\u6cc1",id:"2-\u89c0\u5bdf-repository-\u6a94\u6848\u8ffd\u8e64\u72c0\u6cc1",children:[{value:"\u56de\u50b3\u8a0a\u606f\uff1a\uff08\u6c92\u6709\u8cc7\u6599\u8981\u66f4\u65b0\uff09",id:"\u56de\u50b3\u8a0a\u606f\u6c92\u6709\u8cc7\u6599\u8981\u66f4\u65b0",children:[],level:4},{value:"\u56de\u50b3\u8a0a\u606f\uff1a\uff08\u5c1a\u672a\u5efa\u7acb\u7d22\u5f15\uff0c\u6709\u8cc7\u6599\u65b0\u589e\uff09",id:"\u56de\u50b3\u8a0a\u606f\u5c1a\u672a\u5efa\u7acb\u7d22\u5f15\u6709\u8cc7\u6599\u65b0\u589e",children:[],level:4}],level:3},{value:"3. \u5c07\u6a94\u6848\u52a0\u5165\u8ffd\u8e64 <code>Index/Stage</code> \u6e05\u55ae: \u6709\u65b0\u589e\u4fee\u6539\u5167\u5bb9\u7684\u60c5\u6cc1",id:"3-\u5c07\u6a94\u6848\u52a0\u5165\u8ffd\u8e64-indexstage-\u6e05\u55ae-\u6709\u65b0\u589e\u4fee\u6539\u5167\u5bb9\u7684\u60c5\u6cc1",children:[],level:3},{value:"4. \u5efa\u7acb\u4e00\u7d44\u7248\u672c\u66f4\u65b0(Commitment): \u9001\u4e00\u500bcommit",id:"4-\u5efa\u7acb\u4e00\u7d44\u7248\u672c\u66f4\u65b0commitment-\u9001\u4e00\u500bcommit",children:[],level:3},{value:"5. \u518d\u6b21 \u78ba\u8a8d \u6a94\u6848\u8ffd\u8e64\u72c0\u6cc1",id:"5-\u518d\u6b21-\u78ba\u8a8d-\u6a94\u6848\u8ffd\u8e64\u72c0\u6cc1",children:[],level:3},{value:"6. \u65b0\u589e\u5206\u652f(Branch)",id:"6-\u65b0\u589e\u5206\u652fbranch",children:[],level:3},{value:"7. \u67e5\u770b\u5206\u652f(Branch)",id:"7-\u67e5\u770b\u5206\u652fbranch",children:[],level:3},{value:"9. \u5207\u63db\u5206\u652f(Branch)",id:"9-\u5207\u63db\u5206\u652fbranch",children:[],level:3},{value:"10. \u5408\u4f75\u5206\u652f(Branch)\uff1a",id:"10-\u5408\u4f75\u5206\u652fbranch",children:[{value:"(\u4e00) master\u8cc7\u6599\u820a\uff0cbranch\u65b0\uff0cmaster\u66f4\u65b0\u8cc7\u6599\u540cbranch",id:"\u4e00-master\u8cc7\u6599\u820abranch\u65b0master\u66f4\u65b0\u8cc7\u6599\u540cbranch",children:[],level:4},{value:"(\u4e8c) branch\u8cc7\u6599\u820a\uff0cmaster\u65b0\uff0cbranch\u66f4\u65b0\u8cc7\u6599\u540cmaster",id:"\u4e8c-branch\u8cc7\u6599\u820amaster\u65b0branch\u66f4\u65b0\u8cc7\u6599\u540cmaster",children:[],level:4}],level:3},{value:"10-1. \u5408\u4f75\u885d\u7a81\uff1a",id:"10-1-\u5408\u4f75\u885d\u7a81",children:[{value:"\u5169\u5408\u4f75\u5206\u652f\u5728\u8cc7\u6599\u76f8\u540c\u4f4d\u7f6e\u540c\u6642\u505a\u66f4\u65b0\uff0c\u5c31\u6709\u53ef\u80fd\u7522\u751f\u885d\u7a81\u3002",id:"\u5169\u5408\u4f75\u5206\u652f\u5728\u8cc7\u6599\u76f8\u540c\u4f4d\u7f6e\u540c\u6642\u505a\u66f4\u65b0\u5c31\u6709\u53ef\u80fd\u7522\u751f\u885d\u7a81",children:[],level:4},{value:"\u78ba\u8a8d\u5b8c\u54ea\u500b\u8cc7\u6599\u8981\u7559\uff0c\u8981\u8a18\u5f97\u4e00\u6a23 <code>git commit</code> \u66f4\u65b0\u6700\u5f8c\u4fee\u6b63\u7248\u672c\uff0c\u624d\u7b97\u5b8c\u6210\uff01",id:"\u78ba\u8a8d\u5b8c\u54ea\u500b\u8cc7\u6599\u8981\u7559\u8981\u8a18\u5f97\u4e00\u6a23-git-commit-\u66f4\u65b0\u6700\u5f8c\u4fee\u6b63\u7248\u672c\u624d\u7b97\u5b8c\u6210",children:[],level:4}],level:3},{value:"11. \u522a\u9664\u5206\u652f(Branch)\uff1a",id:"11-\u522a\u9664\u5206\u652fbranch",children:[],level:3},{value:"(\u88dc\u5145) \u540d\u8a5e\u89e3\u91cb",id:"\u88dc\u5145-\u540d\u8a5e\u89e3\u91cb",children:[],level:3}],level:2}],s={toc:c};function p(e){var t=e.components,m=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},s,m,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"git"},"Git"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"\u5c07\u66f4\u65b0\u7684\u6b77\u53f2\u7d00\u9304\u7559\u5b58\u8d77\u4f86\uff0c\u4e4b\u5f8c\u6709\u9700\u8981\u90fd\u53ef\u4ee5\u8fd4\u56de\u6216\u53c3\u8003\u3002")),(0,r.kt)("h3",{id:"\u5c08\u6848\u7ba1\u7406\u7248\u672c\u63a7\u7ba1"},"\u5c08\u6848\u7ba1\u7406\uff1a\u7248\u672c\u63a7\u7ba1\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Git: \u672c\u5730\u7aef (local)\uff0c\u65b9\u4fbf\u500b\u4eba\u4f7f\u7528\u3002"),(0,r.kt)("li",{parentName:"ul"},"GitHub: (remote)\uff0c\u65b9\u4fbf\u591a\u4eba\u5171\u4eab\u5354\u4f5c\u3002")),(0,r.kt)("h3",{id:"\u5e38\u898b\u6307\u4ee4\u5716"},"\u5e38\u898b\u6307\u4ee4\u5716"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/ey5mwYl.png",alt:"\u5e38\u898b\u6307\u4ee4\u5716"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://jenifers001d.GitHub.io/2019/11/24/Git/Git-intro-1/"},"\u53c3\u8003\u5716\u7247\u4f86\u6e90\uff1aJenifer.Code.World - Git \u5165\u9580 (\u4e00)\uff1a\u4ecb\u7d39\u548c\u57fa\u672c\u6307\u4ee4")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"git-\u672c\u6a5f\u7aef\u5c08\u6848\u7ba1\u7406\u7684\u57fa\u672c\u64cd\u4f5c"},"Git \u672c\u6a5f\u7aef\u5c08\u6848\u7ba1\u7406\u7684\u57fa\u672c\u64cd\u4f5c"),(0,r.kt)("h3",{id:"1-\u521d\u59cb\u5316--git-repository"},"1. \u521d\u59cb\u5316 : Git Repository"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  git init\n")),(0,r.kt)("h3",{id:"2-\u89c0\u5bdf-repository-\u6a94\u6848\u8ffd\u8e64\u72c0\u6cc1"},"2. \u89c0\u5bdf Repository \u6a94\u6848\u8ffd\u8e64\u72c0\u6cc1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  git status\n")),(0,r.kt)("h4",{id:"\u56de\u50b3\u8a0a\u606f\u6c92\u6709\u8cc7\u6599\u8981\u66f4\u65b0"},"\u56de\u50b3\u8a0a\u606f\uff1a\uff08\u6c92\u6709\u8cc7\u6599\u8981\u66f4\u65b0\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  On branch master\n\n  No commits yet\n\n  nothing to commit (create/copy files and use "git add" to track)\n')),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"\u76ee\u524d\u4f4d\u7f6e\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"master")),(0,r.kt)("li",{parentName:"ul"},"\u66f4\u65b0\u8cc7\u6599\u72c0\u614b: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u9084\u6c92\u6709 ",(0,r.kt)("inlineCode",{parentName:"li"},"commits"),": local repository \u5c1a\u672a\u6709\u7d00\u9304\u3002",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"li"},"\u642d\u914d\u4e0a\u9762\u7684\u6307\u4ee4\u5716\uff0c\u5f88\u6e05\u695a\u77e5\u9053 \u76ee\u524d ",(0,r.kt)("inlineCode",{parentName:"strong"},"master")," \u66f4\u65b0\u5167\u5bb9\u505c\u7559\u5728 ",(0,r.kt)("inlineCode",{parentName:"strong"},"index/staging area"),"\u3002"))))))),(0,r.kt)("h4",{id:"\u56de\u50b3\u8a0a\u606f\u5c1a\u672a\u5efa\u7acb\u7d22\u5f15\u6709\u8cc7\u6599\u65b0\u589e"},"\u56de\u50b3\u8a0a\u606f\uff1a\uff08\u5c1a\u672a\u5efa\u7acb\u7d22\u5f15\uff0c\u6709\u8cc7\u6599\u65b0\u589e\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  On branch master\n\n  No commits yet\n\n  Untracked files:\n    (use "git add <file>..." to include in what will be committed)\n          admin/\n          connection/\n          css/\n          img/\n          index.php\n          js/\n          uploads/\n          web/\n\n  nothing added to commit but untracked files present (use "git add" to track)\n')),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u4e0a\u9762\u5f88\u6e05\u695a\u544a\u77e5\uff1a"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"\u76ee\u524d\u4f4d\u7f6e\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"master")),(0,r.kt)("li",{parentName:"ul"},"\u66f4\u65b0\u8cc7\u6599\u72c0\u614b: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u9084\u6c92\u6709 ",(0,r.kt)("inlineCode",{parentName:"li"},"add"),": untracked files \u5c1a\u672a\u52a0\u5165 \u7d22\u5f15\uff08index\uff09\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u9084\u6c92\u6709 ",(0,r.kt)("inlineCode",{parentName:"li"},"commits"),": local repository \u5c1a\u672a\u6709\u7d00\u9304\u3002",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"li"},"\u642d\u914d\u4e0a\u9762\u7684\u6307\u4ee4\u5716\uff0c\u5f88\u6e05\u695a\u77e5\u9053 \u76ee\u524d ",(0,r.kt)("inlineCode",{parentName:"strong"},"master")," \u66f4\u65b0\u5167\u5bb9\u505c\u7559\u5728 ",(0,r.kt)("inlineCode",{parentName:"strong"},"working tree"),"\u3002"))))))),(0,r.kt)("p",null,"\u53e6\u5916\u4e00\u7a2e\u8a0a\u606f\uff1a\uff08\u4e4b\u524d\u6709\u5efa\u7acb\u7d22\u5f15\uff0c\u6709\u8cc7\u6599\u4fee\u6539\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  On branch master\n  Changes not staged for commit:\n    (use "git add <file>..." to update what will be committed)\n    (use "git restore <file>..." to discard changes in working directory)\n          modified:   docs/git/git_problemRecord.md\n          modified:   docs/git/GitHub_intro.md\n\n  no changes added to commit (use "git add" and/or "git commit -a")\n\n')),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u4e0a\u9762\u5f88\u6e05\u695a\u544a\u77e5\uff1a"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"\u76ee\u524d\u4f4d\u7f6e\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"master")),(0,r.kt)("li",{parentName:"ul"},"\u66f4\u65b0\u8cc7\u6599\u72c0\u614b: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6709\u52a0\u5165 \u7d22\u5f15\u8ffd\u8e64\uff0c\u4f46\u66f4\u65b0\u8cc7\u6599\u5c1a\u672a\u5b58\u81f3\u66ab\u5b58\u5340: ",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'- `(use "git add <file>..." to update what will be committed)`: \u5c07\u6700\u65b0\u66f4\u65b0\u8cc7\u6599\u52a0\u5165\u7d22\u5f15\uff0c\u518d\u57f7\u884c `commit`\u3002\n- `(use "git restore <file>..." to discard changes in working directory)`: \u5ffd\u7565\u5728 \u5de5\u4f5c\u76ee\u9304\u4e0b\u66f4\u65b0\u7684\u5167\u5bb9\uff08\u653e\u68c4\u525b\u525b\u66f4\u65b0\u7684\u8cc7\u6599\uff09\u3002\n')),(0,r.kt)("strong",{parentName:"li"},"\u642d\u914d\u4e0a\u9762\u7684\u6307\u4ee4\u5716\uff0c\u5f88\u6e05\u695a\u77e5\u9053 \u76ee\u524d \u66f4\u65b0\u5167\u5bb9\u505c\u7559\u5728 ",(0,r.kt)("inlineCode",{parentName:"strong"},"working tree"),"\uff0c\u9084\u6c92\u9032\u66ab\u5b58\u5340\u3002"))))))),(0,r.kt)("h3",{id:"3-\u5c07\u6a94\u6848\u52a0\u5165\u8ffd\u8e64-indexstage-\u6e05\u55ae-\u6709\u65b0\u589e\u4fee\u6539\u5167\u5bb9\u7684\u60c5\u6cc1"},"3. \u5c07\u6a94\u6848\u52a0\u5165\u8ffd\u8e64 ",(0,r.kt)("inlineCode",{parentName:"h3"},"Index/Stage")," \u6e05\u55ae: \u6709\u65b0\u589e\u4fee\u6539\u5167\u5bb9\u7684\u60c5\u6cc1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  git add \u6a94\u540d.\u526f\u6a94\u540d\n  // \u6307\u5b9a\u5b58\u653e\u7f6e\u66ab\u5b58\u7684\u6a94\u540d\n\n  git add . \n  // \u5c07\u6240\u6709\u65b0\u589e\u4fee\u6539\u5167\u5bb9\u90fd\u52a0\u5165\u8ffd\u8e64\u6e05\u55ae\n  // add \u8207 \u5c0f\u6578\u9ede\u4e4b\u9593 \u6703\u6709\u7a7a\u683c\n  // \u6c92\u6709\u51fa\u73fe\u4efb\u4f55\u932f\u8aa4\u8a0a\u606f\u4ee3\u8868\u6210\u529f\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"  \u52a0\u5165\u7d22\u5f15\u5f8c\uff0c\u5728 Sourcetree \u53ef\u4ee5\u770b\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"HEAD"),"\u6307\u6a19\uff0c\u6307\u5411\u76ee\u524d\u5206\u652f\u6700\u65b0\u7684\u7d22\u5f15\u4f4d\u7f6e\u3002\n",(0,r.kt)("img",{alt:"before git add",src:n(3445).Z})))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"  \u6c92\u6709\u52a0\u5165\u7d22\u5f15\u7684\u8cc7\u6599\uff0c\u4e0d\u80fd\u63d0\u4ea4\u81f3 Repository\u3002\uff08git \u662f\u5c07\u7d22\u5f15\u8cc7\u6599\u72c0\u614b\u63d0\u4ea4\u7d66Repository\uff09"))),(0,r.kt)("h3",{id:"4-\u5efa\u7acb\u4e00\u7d44\u7248\u672c\u66f4\u65b0commitment-\u9001\u4e00\u500bcommit"},"4. \u5efa\u7acb\u4e00\u7d44\u7248\u672c\u66f4\u65b0(Commitment): \u9001\u4e00\u500bcommit"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7a0b\u5f0f\u64b0\u5beb\u5230\u4e00\u500b\u6bb5\u843d\uff0c\u5b8c\u6210\u67d0\u4e9b\u529f\u80fd\uff0c\u60f3\u8981\u505a\u500b\u7d00\u9304\u3002")," "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  git commit -m "\u7248\u672c\u66f4\u65b0\u8a0a\u606f"\n  // -m \u524d\u5f8c\u90fd\u8981\u88dc\u4e0a\u7a7a\u683c\n')),(0,r.kt)("p",null,"  \u56de\u50b3\u8a0a\u606f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  [master (root-commit) 5e445e5] First Commit\n  799 files changed, 129282 insertions(+)\n  create mode 100644 admin/css/bootstrap.min.css\n")),(0,r.kt)("h3",{id:"5-\u518d\u6b21-\u78ba\u8a8d-\u6a94\u6848\u8ffd\u8e64\u72c0\u6cc1"},"5. \u518d\u6b21 \u78ba\u8a8d \u6a94\u6848\u8ffd\u8e64\u72c0\u6cc1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  git status\n")),(0,r.kt)("p",null,"  \u56de\u50b3\u8a0a\u606f\uff1a\uff08\u6240\u6709\u5167\u5bb9\u5728 local repository\u90fd\u6709\u7d00\u9304\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  On branch master\n  nothing to commit, working tree clean\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"  ",(0,r.kt)("strong",{parentName:"p"},"\u6c92\u6709\u554f\u984c\uff0c\u5c31\u53ef\u4ee5\u4e0a remote\u3002(push \u4e0a GitHub \u8981\u518d\u66f4\u6539\u6703\u6709\u9ede\u9ebb\u7169\uff0c\u591a\u505a\u78ba\u8a8d\u5c11\u9ebb\u7169!)"),(0,r.kt)("br",null),"\n",(0,r.kt)("a",{parentName:"p",href:"/myWebsite/docs/git/github_intro"},"GitHub\u7b46\u8a18\u9023\u7d50")))),(0,r.kt)("p",null,"  \u56de\u50b3\u8a0a\u606f\uff1a\uff08\u90e8\u5206\u5167\u5bb9\u5728 local repository\u9084\u6c92\u6709\u7d00\u9304\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  On branch master\n  Changes not staged for commit:\n    (use "git add <file>..." to update what will be committed)\n    (use "git restore <file>..." to discard changes in working directory)\n          modified:   index.php\n\n  Untracked files:\n    (use "git add <file>..." to include in what will be committed)\n          textforgit.php\n\n  no changes added to commit (use "git add" and/or "git commit -a")\n')),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"\u76ee\u524d\u4f4d\u7f6e\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"master")),(0,r.kt)("li",{parentName:"ul"},"\u66f4\u65b0\u8cc7\u6599\u72c0\u614b: ",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"index.php"),": \u6709\u7d22\u5f15\u7d00\u9304\uff0c\u4f46\u6c92\u6709\u6700\u65b0\u7248\u672c\u3002")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u8981\u66f4\u65b0\u5167\u5bb9\uff1a ",(0,r.kt)("inlineCode",{parentName:"li"},"git add <file>"),"\uff0c\u66f4\u65b0\u7d22\u5f15\uff0c\u4e26 ",(0,r.kt)("inlineCode",{parentName:"li"},"commit")," \u505a\u7d00\u9304\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e0d\u8981\u66f4\u65b0\u5167\u5bb9\uff1a ",(0,r.kt)("inlineCode",{parentName:"li"},"git restore <file>"),"\uff0c\u5ffd\u7565\u9019\u6b21\u66f4\u65b0\u5167\u5bb9\u3002\uff08working area\u6703\u56de\u8986\u5230\u539f\u672c\u7d22\u5f15\u4f4d\u7f6e\uff09")),(0,r.kt)("ol",{parentName:"li",start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"textforgit.php"),": \u5b8c\u5168\u5168\u65b0\u7684\u8cc7\u6599\uff0c\u6c92\u6709\u7d22\u5f15\u7d00\u9304\u3002")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u8981\u66f4\u65b0\u5167\u5bb9\uff1a ",(0,r.kt)("inlineCode",{parentName:"li"},"git add <file>"),"\uff0c\u52a0\u5165\u7d22\u5f15\uff0c\u4e26 ",(0,r.kt)("inlineCode",{parentName:"li"},"commit")," \u505a\u7d00\u9304\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e0d\u8981\u66f4\u65b0\u5167\u5bb9\uff1a \u76f4\u63a5\u522a\u6389\u5c31\u597d\u4e86\u3002")))))),(0,r.kt)("h3",{id:"6-\u65b0\u589e\u5206\u652fbranch"},"6. \u65b0\u589e\u5206\u652f(Branch)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5728\u958b\u767c\u7a0b\u5f0f\u7684\u6642\u5019\uff0c\u60f3\u8981\u628a\u67d0\u4e00\u529f\u80fd\u5f9e\u5c08\u6848\u5167\u5207\u5272\u51fa\u4f86\u3002"),(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\u4e0d\u60f3\u8981\u52d5\u5230\u4e3b\u7a0b\u5f0f\u7684\u60c5\u6cc1\u4e0b\uff0c\u53bb\u958b\u4e00\u500b\u5206\u652f\u4e0b\u5de5\u4f5c\u3002\u7b49\u5230\u505a\u5230\u5dee\u4e0d\u591a\uff0c\u518d\u4f75\u5230\u5c08\u6848\u5167\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  git branch \u5206\u652f\u540d\u7a31\n")),(0,r.kt)("h3",{id:"7-\u67e5\u770b\u5206\u652fbranch"},"7. \u67e5\u770b\u5206\u652f(Branch)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  git branch\n")),(0,r.kt)("p",null,"  \u56de\u50b3\u8a0a\u606f\uff1a\u5217\u51fa\u6240\u6709\u5206\u652f\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"*")," \u958b\u982d\u70ba\u76ee\u524d\u4f4d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  Joanna-PI\n* master\n  test_authority\n")),(0,r.kt)("h3",{id:"9-\u5207\u63db\u5206\u652fbranch"},"9. \u5207\u63db\u5206\u652f(Branch)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  git checkout \u5206\u652f\u540d\u7a31\n")),(0,r.kt)("p",null,"  \u56de\u50b3\u8a0a\u606f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  Switched to branch '\u5206\u652f\u540d\u7a31'\n  Your branch is up to date with 'origin/\u5206\u652f\u540d\u7a31'.\n")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"  \u5beb\u7a0b\u5f0f\u78bc\u4e4b\u524d\uff0c\u7559\u610f\u4e00\u4e0b\u76ee\u524d ",(0,r.kt)("inlineCode",{parentName:"p"},"git branch")," \u4f4d\u7f6e\uff0c\u907f\u514d\u62ff\u932f\u5206\u652f\u66f4\u65b0\u8cc7\u6599!"))),(0,r.kt)("h3",{id:"10-\u5408\u4f75\u5206\u652fbranch"},"10. \u5408\u4f75\u5206\u652f(Branch)\uff1a"),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"\u7279\u5225\u7559\u610f\uff1a\u76ee\u524d\u6240\u5728\u4f4d\u7f6e\uff0c\u662f\u8ab0\u8981\u4f75\u8ab0\u3002")))),(0,r.kt)("h4",{id:"\u4e00-master\u8cc7\u6599\u820abranch\u65b0master\u66f4\u65b0\u8cc7\u6599\u540cbranch"},"(\u4e00) master\u8cc7\u6599\u820a\uff0cbranch\u65b0\uff0cmaster\u66f4\u65b0\u8cc7\u6599\u540cbranch"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  git checkout master // HEAD \u6307\u5411 master\n  git merge \u5206\u652f\u540d\u7a31   // master \u5408\u4f75 \u5206\u652f\u66f4\u65b0\u5167\u5bb9\n")),(0,r.kt)("p",null,"  ",(0,r.kt)("img",{alt:"branch\u8cc7\u6599\u820a\uff0cmaster\u65b0",src:n(8556).Z}),"\n",(0,r.kt)("img",{alt:"branch\u8cc7\u6599\u66f4\u65b0\u540cmaster\u6700\u65b0\u7d22\u5f15",src:n(7390).Z})),(0,r.kt)("p",null,"  \u56de\u50b3\u8a0a\u606f\u53c3\u8003\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  Updating 1234b1b..e6eb481\n  Fast-forward\n  docs/git/git_intro.md                              |  51 +++++++++++++++++++++++++++++++++++++++++++--------\n  docs/react/react_useState.md                       |   2 +-\n  static/img/docs/{ => git}/after_git_add_commit.png | Bin\n  static/img/docs/git/git_branch_merge_master_01.png | Bin 0 -> 111171 bytes\n  ...\n  9 files changed, 44 insertions(+), 9 deletions(-)\n  rename static/img/docs/{ => git}/after_git_add_commit.png (100%)\n  create mode 100644 static/img/docs/git/git_branch_merge_master_01.png\n  ...\n")),(0,r.kt)("h4",{id:"\u4e8c-branch\u8cc7\u6599\u820amaster\u65b0branch\u66f4\u65b0\u8cc7\u6599\u540cmaster"},"(\u4e8c) branch\u8cc7\u6599\u820a\uff0cmaster\u65b0\uff0cbranch\u66f4\u65b0\u8cc7\u6599\u540cmaster"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  git checkout \u5206\u652f\u540d\u7a31  // HEAD \u6307\u5411 \u5206\u652f\n  git merge master     // \u5206\u652f \u5408\u4f75 master\n")),(0,r.kt)("p",null,"  ",(0,r.kt)("img",{alt:"branch\u8cc7\u6599\u820a\uff0cmaster\u65b0",src:n(6514).Z}),"\n",(0,r.kt)("img",{alt:"branch\u8cc7\u6599\u66f4\u65b0\u540cmaster\u6700\u65b0\u7d22\u5f15",src:n(3338).Z})),(0,r.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"success")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("h4",{parentName:"div",id:"\u6355\u5145git-merge-\u8207-git-rebase-\u5dee\u7570"},(0,r.kt)("a",{parentName:"h4",href:"/myWebsite/docs/git/git_cooperation#git-merge-%E8%88%87-git-rebase-%E5%B7%AE%E7%95%B0"},"\u6355\u5145\uff1agit merge \u8207 git rebase \u5dee\u7570")))),(0,r.kt)("h3",{id:"10-1-\u5408\u4f75\u885d\u7a81"},"10-1. \u5408\u4f75\u885d\u7a81\uff1a"),(0,r.kt)("h4",{id:"\u5169\u5408\u4f75\u5206\u652f\u5728\u8cc7\u6599\u76f8\u540c\u4f4d\u7f6e\u540c\u6642\u505a\u66f4\u65b0\u5c31\u6709\u53ef\u80fd\u7522\u751f\u885d\u7a81"},"\u5169\u5408\u4f75\u5206\u652f\u5728\u8cc7\u6599\u76f8\u540c\u4f4d\u7f6e\u540c\u6642\u505a\u66f4\u65b0\uff0c\u5c31\u6709\u53ef\u80fd\u7522\u751f\u885d\u7a81\u3002"),(0,r.kt)("p",null,"  \u56de\u50b3\u8a0a\u606f\u53c3\u8003\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  Auto-merging docs/git/git_intro.md\n  CONFLICT (content): Merge conflict in docs/git/git_intro.md\n  Automatic merge failed; fix conflicts and then commit the result.\n")),(0,r.kt)("p",null,"  VS code \u986f\u793a\u885d\u7a81\u4f4d\u7f6e\uff1a\n",(0,r.kt)("img",{alt:"\u5408\u4f75\u885d\u7a81",src:n(7426).Z})),(0,r.kt)("p",null,"  \u89e3\u6c7a\u8cc7\u6599\u885d\u7a81\u5f8c\uff0c\u56de\u50b3\u8a0a\u606f\u53c3\u8003\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  On branch test\n  You have unmerged paths.\n  (fix conflicts and run "git commit")\n  (use "git merge --abort" to abort the merge)\n\n  Changes to be committed:\n  new file:   static/img/docs/after_git_add_commit.png\n\n  Unmerged paths:\n  (use "git add <file>..." to mark resolution)\n  both modified:   docs/git/git_intro.md\n')),(0,r.kt)("h4",{id:"\u78ba\u8a8d\u5b8c\u54ea\u500b\u8cc7\u6599\u8981\u7559\u8981\u8a18\u5f97\u4e00\u6a23-git-commit-\u66f4\u65b0\u6700\u5f8c\u4fee\u6b63\u7248\u672c\u624d\u7b97\u5b8c\u6210"},"\u78ba\u8a8d\u5b8c\u54ea\u500b\u8cc7\u6599\u8981\u7559\uff0c\u8981\u8a18\u5f97\u4e00\u6a23 ",(0,r.kt)("inlineCode",{parentName:"h4"},"git commit")," \u66f4\u65b0\u6700\u5f8c\u4fee\u6b63\u7248\u672c\uff0c\u624d\u7b97\u5b8c\u6210\uff01"),(0,r.kt)("p",null,"  ",(0,r.kt)("img",{alt:"\u89e3\u6c7a\u5408\u4f75\u885d\u7a81",src:n(7922).Z}),"\n\u56de\u50b3\u8a0a\u606f\u53c3\u8003\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  [test deafe11] update merge conflict\n")),(0,r.kt)("h3",{id:"11-\u522a\u9664\u5206\u652fbranch"},"11. \u522a\u9664\u5206\u652f(Branch)\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  git branch -d \u5206\u652f\u540d\u7a31\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"\u88dc\u5145-\u540d\u8a5e\u89e3\u91cb"},"(\u88dc\u5145) \u540d\u8a5e\u89e3\u91cb"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"work directory(area):\u5de5\u4f5c\u76ee\u9304"),(0,r.kt)("li",{parentName:"ul"},"index/staging area: \u7d22\u5f15\uff08\u66ab\u5b58\u5340\uff09"),(0,r.kt)("li",{parentName:"ul"},"repository : \u6578\u64da\u5eab\uff08\u672c\u5730\u3001\u9060\u7aef\uff09")))}p.isMDXComponent=!0},3445:function(e,t,n){t.Z=n.p+"assets/images/before_git_add-70d1d9407baca9b7fcd2302bf7328ae4.png"},6514:function(e,t,n){t.Z=n.p+"assets/images/git_branch_merge_master_01-df47096df8ef8c0bc9e8a18ce74ef6c4.png"},3338:function(e,t,n){t.Z=n.p+"assets/images/git_branch_merge_master_02-4b57d1bc7e1f44b6c46f3ea950ff19b9.png"},8556:function(e,t,n){t.Z=n.p+"assets/images/git_master_merge_branch_01-69c495f87372868ce7d751d86dd6db45.png"},7390:function(e,t,n){t.Z=n.p+"assets/images/git_master_merge_branch_02-636fe602bf2db050d670fa763050cc32.png"},7426:function(e,t,n){t.Z=n.p+"assets/images/git_merge_conflict-0f07d9ca7d1212ea208b56166cca2b9c.png"},7922:function(e,t,n){t.Z=n.p+"assets/images/git_merge_conflict_change-ccd0d9550f6a3ef36e482af018e8e4f5.png"}}]);