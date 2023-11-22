"use strict";(self.webpackChunkOctagonDocs=self.webpackChunkOctagonDocs||[]).push([[3955],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=n.createContext({}),l=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=l(r),f=o,m=s["".concat(d,".").concat(f)]||s[f]||u[f]||a;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[s]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7006:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={id:"create-dao",title:"DAO \u0445\u044d\u0440\u0445\u044d\u043d \u04af\u04af\u0441\u0433\u044d\u0445 \u0432\u044d?",description:"DAO \u0445\u044d\u0440\u0445\u044d\u043d \u04af\u04af\u0441\u0433\u044d\u0445 \u0442\u0443\u0445\u0430\u0439 \u0437\u0430\u0430\u0432\u0430\u0440",keywords:["create dao","creating decentralized autonomous organization"]},c=void 0,i={unversionedId:"dao/create-dao",id:"dao/create-dao",title:"DAO \u0445\u044d\u0440\u0445\u044d\u043d \u04af\u04af\u0441\u0433\u044d\u0445 \u0432\u044d?",description:"DAO \u0445\u044d\u0440\u0445\u044d\u043d \u04af\u04af\u0441\u0433\u044d\u0445 \u0442\u0443\u0445\u0430\u0439 \u0437\u0430\u0430\u0432\u0430\u0440",source:"@site/docs/dao/01.create-dao.md",sourceDirName:"dao",slug:"/dao/create-dao",permalink:"/docs/dao/create-dao",draft:!1,tags:[],version:"current",lastUpdatedAt:1674644949,formattedLastUpdatedAt:"Jan 25, 2023",sidebarPosition:1,frontMatter:{id:"create-dao",title:"DAO \u0445\u044d\u0440\u0445\u044d\u043d \u04af\u04af\u0441\u0433\u044d\u0445 \u0432\u044d?",description:"DAO \u0445\u044d\u0440\u0445\u044d\u043d \u04af\u04af\u0441\u0433\u044d\u0445 \u0442\u0443\u0445\u0430\u0439 \u0437\u0430\u0430\u0432\u0430\u0440",keywords:["create dao","creating decentralized autonomous organization"]},sidebar:"dao",previous:{title:"DAO \u0433\u044d\u0436 \u044e\u0443 \u0432\u044d?",permalink:"/docs/dao/dao-intro"},next:{title:"DAO \u0445\u044d\u0440\u0445\u044d\u043d \u0441\u0430\u043d\u0430\u043b \u04e9\u0433\u04e9\u0445 \u0432\u044d?",permalink:"/docs/dao/how-to-vote"}},d={},l=[{value:"DAO \u0445\u044d\u0440\u0445\u044d\u043d \u04af\u04af\u0441\u0433\u044d\u0445 \u0432\u044d?",id:"dao-\u0445\u044d\u0440\u0445\u044d\u043d-\u04af\u04af\u0441\u0433\u044d\u0445-\u0432\u044d",level:2}],p={toc:l};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"dao-\u0445\u044d\u0440\u0445\u044d\u043d-\u04af\u04af\u0441\u0433\u044d\u0445-\u0432\u044d"},"DAO \u0445\u044d\u0440\u0445\u044d\u043d \u04af\u04af\u0441\u0433\u044d\u0445 \u0432\u044d?"),(0,o.kt)("p",null,"DAO \u0445\u04e9\u0433\u0436\u04af\u04af\u043b\u0441\u043d\u0438\u0439 \u0434\u0430\u0440\u0430\u0430\u0433\u0430\u0430\u0440 \u043e\u0440\u0443\u0443\u043b\u043d\u0430"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.octagon.mn/static/placeholder.png",alt:"DAO Screenshot"})))}s.isMDXComponent=!0}}]);