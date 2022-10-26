"use strict";(self.webpackChunkchenchens=self.webpackChunkchenchens||[]).push([[3034],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var i=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=i.createContext({}),p=function(t){var e=i.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},u=function(t){var e=p(t.components);return i.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},s=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),s=p(n),m=r,g=s["".concat(l,".").concat(m)]||s[m]||d[m]||o;return n?i.createElement(g,a(a({ref:e},u),{},{components:n})):i.createElement(g,a({ref:e},u))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,a=new Array(o);a[0]=s;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:r,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5045:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return s}});var i=n(3117),r=n(102),o=(n(7294),n(3905)),a=["components"],c={sidebar_position:2},l="GitHub",p={unversionedId:"git/github_intro",id:"git/github_intro",title:"GitHub",description:"\u591a\u4eba\u5171\u540c\u958b\u767c\u5c08\u6848\uff0c\u5c07 local Repository \u4e0a\u50b3\u81f3 remote Repository\uff0c\u5176\u4ed6\u4eba\u53ef\u4ee5\u53d6\u5f97\u66f4\u65b0\u7684\u96f2\u7aef\u8cc7\u6599\uff0c\u4e26\u62c9\u5230 \u672c\u5730\u7aef\u505a\u4f7f\u7528\u3002",source:"@site/docs/git/github_intro.md",sourceDirName:"git",slug:"/git/github_intro",permalink:"/chen-chens/myWebsite/docs/git/github_intro",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/git/github_intro.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Git",permalink:"/chen-chens/myWebsite/docs/git/git_intro"},next:{title:"\u72c0\u6cc1\u984c \u8207 \u5176\u4ed6",permalink:"/chen-chens/myWebsite/docs/git/git_problemRecord"}},u=[{value:"GitHub \u96f2\u7aef\u5c08\u6848\u7ba1\u7406(Git to GitHub)",id:"github-\u96f2\u7aef\u5c08\u6848\u7ba1\u7406git-to-github",children:[{value:"(\u4e00) \u524d\u7f6e\u6e96\u5099",id:"\u4e00-\u524d\u7f6e\u6e96\u5099",children:[{value:"1. \u7533\u8acb GitHub\u5e33\u865f\u3002",id:"1-\u7533\u8acb-github\u5e33\u865f",children:[],level:4},{value:"2. \u5efa\u7acb\u5c08\u6848: \u8981\u5c07\u672c\u5730Git\u4e0a\u50b3\u5230\u539f\u7aef\uff0c\u9700\u8981\u5148\u6709\u4e00\u9060\u7aef\u7a7a\u9593 (\u8a72\u5c08\u6848\u7db2\u5740)\u3002<br/>",id:"2-\u5efa\u7acb\u5c08\u6848-\u8981\u5c07\u672c\u5730git\u4e0a\u50b3\u5230\u539f\u7aef\u9700\u8981\u5148\u6709\u4e00\u9060\u7aef\u7a7a\u9593-\u8a72\u5c08\u6848\u7db2\u5740",children:[],level:4}],level:3},{value:"(\u4e8c\uff09\u60c5\u6cc1\u4e00\uff1aGit to Github",id:"\u4e8c\u60c5\u6cc1\u4e00git-to-github",children:[],level:3},{value:"1. \u67e5\u8a62\u6709\u7121\u95dc\u806f\u7684\u9060\u7aef\u5c08\u6848\u7a7a\u9593:",id:"1-\u67e5\u8a62\u6709\u7121\u95dc\u806f\u7684\u9060\u7aef\u5c08\u6848\u7a7a\u9593",children:[],level:3},{value:"2. \u52a0\u5165\u9060\u7aef\u7684 Repository",id:"2-\u52a0\u5165\u9060\u7aef\u7684-repository",children:[],level:3},{value:"3. \u672c\u5730\u7aef\u8cc7\u6599\u4e0a\u50b3\u81f3\u9060\u7aef\u7a7a\u9593",id:"3-\u672c\u5730\u7aef\u8cc7\u6599\u4e0a\u50b3\u81f3\u9060\u7aef\u7a7a\u9593",children:[],level:3},{value:"4. \u91cd\u65b0\u6574\u7406 GitHub\uff0c\u61c9\u8a72\u6703\u770b\u5230\u8cc7\u6599\u3002",id:"4-\u91cd\u65b0\u6574\u7406-github\u61c9\u8a72\u6703\u770b\u5230\u8cc7\u6599",children:[],level:3},{value:"(\u4e09) \u60c5\u6cc1\u4e8c\uff1a GitHub \u96f2\u7aef\u5c08\u6848\u7ba1\u7406(GitHub to Git)",id:"\u4e09-\u60c5\u6cc1\u4e8c-github-\u96f2\u7aef\u5c08\u6848\u7ba1\u7406github-to-git",children:[],level:3},{value:"1. \u8907\u88fd \u9060\u7aef\u5c08\u6848\u7db2\u5740",id:"1-\u8907\u88fd-\u9060\u7aef\u5c08\u6848\u7db2\u5740",children:[],level:3},{value:"2. \u6aa2\u67e5 \u662f\u5426\u672c\u5730\u7aef\u662f\u5426\u9023\u63a5\u6210\u529f",id:"2-\u6aa2\u67e5-\u662f\u5426\u672c\u5730\u7aef\u662f\u5426\u9023\u63a5\u6210\u529f",children:[],level:3}],level:2}],d={toc:u};function s(t){var e=t.components,c=(0,r.Z)(t,a);return(0,o.kt)("wrapper",(0,i.Z)({},d,c,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"github"},"GitHub"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"\u591a\u4eba\u5171\u540c\u958b\u767c\u5c08\u6848\uff0c\u5c07 ",(0,o.kt)("inlineCode",{parentName:"em"},"local Repository")," \u4e0a\u50b3\u81f3 ",(0,o.kt)("inlineCode",{parentName:"em"},"remote Repository"),"\uff0c\u5176\u4ed6\u4eba\u53ef\u4ee5\u53d6\u5f97\u66f4\u65b0\u7684\u96f2\u7aef\u8cc7\u6599\uff0c\u4e26\u62c9\u5230 \u672c\u5730\u7aef\u505a\u4f7f\u7528\u3002")),(0,o.kt)("h2",{id:"github-\u96f2\u7aef\u5c08\u6848\u7ba1\u7406git-to-github"},"GitHub \u96f2\u7aef\u5c08\u6848\u7ba1\u7406(Git to GitHub)"),(0,o.kt)("h3",{id:"\u4e00-\u524d\u7f6e\u6e96\u5099"},"(\u4e00) \u524d\u7f6e\u6e96\u5099"),(0,o.kt)("h4",{id:"1-\u7533\u8acb-github\u5e33\u865f"},"1. \u7533\u8acb ",(0,o.kt)("a",{parentName:"h4",href:"https://github.com/"},"GitHub"),"\u5e33\u865f\u3002"),(0,o.kt)("h4",{id:"2-\u5efa\u7acb\u5c08\u6848-\u8981\u5c07\u672c\u5730git\u4e0a\u50b3\u5230\u539f\u7aef\u9700\u8981\u5148\u6709\u4e00\u9060\u7aef\u7a7a\u9593-\u8a72\u5c08\u6848\u7db2\u5740"},"2. \u5efa\u7acb\u5c08\u6848: \u8981\u5c07\u672c\u5730Git\u4e0a\u50b3\u5230\u539f\u7aef\uff0c\u9700\u8981\u5148\u6709\u4e00\u9060\u7aef\u7a7a\u9593 (\u8a72\u5c08\u6848\u7db2\u5740)\u3002",(0,o.kt)("br",null)),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u65b0\u589e\u5c08\u6848",src:n(1410).Z}),"\n",(0,o.kt)("img",{alt:"\u5c08\u6848\u540d\u7a31\u5fc5\u586b",src:n(2478).Z}),"\n",(0,o.kt)("img",{alt:"\u65b0\u589e\u9060\u7aef\u5c08\u6848\u5f8c\uff0cgit \u8981\u52a0\u5165\u8a72\u9060\u7aef\u7a7a\u9593\u7684\u6307\u4ee4\u53c3\u8003",src:n(834).Z})),(0,o.kt)("h3",{id:"\u4e8c\u60c5\u6cc1\u4e00git-to-github"},"(\u4e8c\uff09\u60c5\u6cc1\u4e00\uff1aGit to Github"),(0,o.kt)("p",null,"\u56de\u5230\u672c\u5730\u7aef\u8a72\u5c08\u6848\uff0c\u958b\u555f VS code Terminal"),(0,o.kt)("h3",{id:"1-\u67e5\u8a62\u6709\u7121\u95dc\u806f\u7684\u9060\u7aef\u5c08\u6848\u7a7a\u9593"},"1. \u67e5\u8a62\u6709\u7121\u95dc\u806f\u7684\u9060\u7aef\u5c08\u6848\u7a7a\u9593:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    git remote     // \u56de\u50b3 \u9060\u7aef\u5c08\u6848\u540d\u7a31\n    git remote -v  // \u56de\u50b3 \u9060\u7aef\u5c08\u6848\u540d\u7a31 \u8207 \u5c08\u6848\u7db2\u5740\n")),(0,o.kt)("p",null,"\u56de\u50b3\u8a0a\u606f\uff1a\u6c92\u6709\u95dc\u806f ",(0,o.kt)("inlineCode",{parentName:"p"},"Repository")," \u7684\u60c5\u6cc1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    fatal: not a git repository (or any of the parent directories): .git\n")),(0,o.kt)("p",null,"\u56de\u50b3\u8a0a\u606f\uff1a\u6709\u95dc\u806f\u5c08\u6848 ",(0,o.kt)("inlineCode",{parentName:"p"},"Repository")," \u7684\u60c5\u6cc1: \u986f\u793a\u4f9d\u5e8f\u70ba ",(0,o.kt)("inlineCode",{parentName:"p"},"git remote")," ",(0,o.kt)("inlineCode",{parentName:"p"},"git remote -v")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    origin\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    origin  https://github.com/chen-chens/project-music-app.git (fetch)\n    origin  https://github.com/chen-chens/project-music-app.git (push)\n")),(0,o.kt)("h3",{id:"2-\u52a0\u5165\u9060\u7aef\u7684-repository"},"2. \u52a0\u5165\u9060\u7aef\u7684 Repository"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    git remote add \u9060\u7aef\u7a7a\u9593\u7684\u540d\u7a31 \u9060\u7aef\u5c08\u6848\u7db2\u5740\n")),(0,o.kt)("p",null,"\u5982\u679c\u540d\u5b57\u53d6\u932f\uff0c\u60f3\u8981\u522a\u9664\u91cd\u65b0\u52a0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    git remote remove \u9060\u7aef\u540d\u7a31\n")),(0,o.kt)("p",null,"\u56de\u5230 1. \u67e5\u8a62\u78ba\u8a8d\u95dc\u806f\u662f\u5426\u5efa\u7acb"),(0,o.kt)("h3",{id:"3-\u672c\u5730\u7aef\u8cc7\u6599\u4e0a\u50b3\u81f3\u9060\u7aef\u7a7a\u9593"},"3. \u672c\u5730\u7aef\u8cc7\u6599\u4e0a\u50b3\u81f3\u9060\u7aef\u7a7a\u9593"),(0,o.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u9192\u4e00\u4e0b")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u8981\u4e0a\u50b3\u8cc7\u6599\u4e4b\u524d\uff0c\u8981\u5148\u78ba\u8a8d\u672c\u5730\u7aef\u8cc7\u6599\u5df2\u7d93\u5b58\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"local Repository"),"\u3002",(0,o.kt)("br",null),"\n\u4e5f\u5c31\u662f\u8aaa\uff1a\u6240\u6709\u66f4\u65b0\u90fd\u57f7\u884c\u5b8c ",(0,o.kt)("inlineCode",{parentName:"p"},"git add")," \u8207 ",(0,o.kt)("inlineCode",{parentName:"p"},"git commit"),(0,o.kt)("br",null),"\n",(0,o.kt)("a",{parentName:"p",href:"/chen-chens/myWebsite/docs/git/git_intro#%E5%B8%B8%E8%A6%8B%E6%8C%87%E4%BB%A4%E5%9C%96"},"\u50b3\u9001Git\u6307\u4ee4\b\u5716")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    git push \u9060\u7aef\u7a7a\u9593\u7684\u540d\u7a31 \u6307\u5b9a\u5206\u652f\n")),(0,o.kt)("p",null,"\u56de\u8986\u8a0a\u606f\u53c3\u8003"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    [master 6996574] [v0.1.2] - add Tech Docs/Git & Github/Github\n    5 files changed, 53 insertions(+), 2 deletions(-)\n    create mode 100644 static/img/docs/git/github_add_repository.png\n    create mode 100644 static/img/docs/git/github_add_repository_name.png\n    create mode 100644 static/img/docs/git/github_after_add_repository.png`\n")),(0,o.kt)("h3",{id:"4-\u91cd\u65b0\u6574\u7406-github\u61c9\u8a72\u6703\u770b\u5230\u8cc7\u6599"},"4. \u91cd\u65b0\u6574\u7406 GitHub\uff0c\u61c9\u8a72\u6703\u770b\u5230\u8cc7\u6599\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"\u4e09-\u60c5\u6cc1\u4e8c-github-\u96f2\u7aef\u5c08\u6848\u7ba1\u7406github-to-git"},"(\u4e09) \u60c5\u6cc1\u4e8c\uff1a GitHub \u96f2\u7aef\u5c08\u6848\u7ba1\u7406(GitHub to Git)"),(0,o.kt)("h3",{id:"1-\u8907\u88fd-\u9060\u7aef\u5c08\u6848\u7db2\u5740"},"1. \u8907\u88fd \u9060\u7aef\u5c08\u6848\u7db2\u5740"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    git clone \u9060\u7aef\u5c08\u6848\u7db2\u5740 \u672c\u5730\u7aef\u8cc7\u6599\u593e\u540d\u7a31\n")),(0,o.kt)("h3",{id:"2-\u6aa2\u67e5-\u662f\u5426\u672c\u5730\u7aef\u662f\u5426\u9023\u63a5\u6210\u529f"},"2. \u6aa2\u67e5 \u662f\u5426\u672c\u5730\u7aef\u662f\u5426\u9023\u63a5\u6210\u529f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    git status\n    git remote -v\n")),(0,o.kt)("p",null,"\u56de\u50b3\u8a0a\u606f\u53c3\u8003\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    On branch master\n    Your branch is up to date with 'origin/master'.\n\n    nothing to commit, working tree clean.\n")),(0,o.kt)("h3",{id:""}))}s.isMDXComponent=!0},1410:function(t,e,n){e.Z=n.p+"assets/images/github_add_repository-77f856b0841f3cd41cc7a07b9aa125ff.png"},2478:function(t,e,n){e.Z=n.p+"assets/images/github_add_repository_name-716f13d1caaf8cfac9572dca4d85d573.png"},834:function(t,e,n){e.Z=n.p+"assets/images/github_after_add_repository-c904dc6f97c0527c747a1effd3d42250.png"}}]);