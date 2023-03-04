"use strict";(self.webpackChunkOctagonDocs=self.webpackChunkOctagonDocs||[]).push([[321],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=o.createContext({}),s=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(a.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,y=u["".concat(a,".").concat(d)]||u[d]||f[d]||i;return n?o.createElement(y,l(l({ref:t},p),{},{components:n})):o.createElement(y,l({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c[u]="string"==typeof e?e:r,l[1]=c;for(var s=2;s<i;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3518:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const i={id:"nft-collections",title:"\u041c\u0430\u043d\u0430\u0439\u0445\u0430\u0430\u0441 \u0433\u0430\u0440\u0433\u0430\u0441\u0430\u043d NFT \u0446\u0443\u0433\u043b\u0443\u0443\u043b\u0433\u0443\u0443\u0434",sidebar_label:"\u041c\u0430\u043d\u0430\u0439\u0445\u0430\u0430\u0441 \u0433\u0430\u0440\u0433\u0430\u0441\u0430\u043d NFT \u0446\u0443\u0433\u043b\u0443\u0443\u043b\u0433\u0443\u0443\u0434",description:"Everything you need to know about how to find and authenticate GraphQL on Codiga.",keywords:["nft collections","NFT \u0446\u0443\u0433\u043b\u0443\u0443\u043b\u0433\u0443\u0443\u0434"]},l=void 0,c={unversionedId:"collections/nft-collections",id:"collections/nft-collections",title:"\u041c\u0430\u043d\u0430\u0439\u0445\u0430\u0430\u0441 \u0433\u0430\u0440\u0433\u0430\u0441\u0430\u043d NFT \u0446\u0443\u0433\u043b\u0443\u0443\u043b\u0433\u0443\u0443\u0434",description:"Everything you need to know about how to find and authenticate GraphQL on Codiga.",source:"@site/docs/collections/0.nft-collections.md",sourceDirName:"collections",slug:"/collections/nft-collections",permalink:"/docs/collections/nft-collections",draft:!1,tags:[],version:"current",lastUpdatedAt:1674644949,formattedLastUpdatedAt:"Jan 25, 2023",sidebarPosition:0,frontMatter:{id:"nft-collections",title:"\u041c\u0430\u043d\u0430\u0439\u0445\u0430\u0430\u0441 \u0433\u0430\u0440\u0433\u0430\u0441\u0430\u043d NFT \u0446\u0443\u0433\u043b\u0443\u0443\u043b\u0433\u0443\u0443\u0434",sidebar_label:"\u041c\u0430\u043d\u0430\u0439\u0445\u0430\u0430\u0441 \u0433\u0430\u0440\u0433\u0430\u0441\u0430\u043d NFT \u0446\u0443\u0433\u043b\u0443\u0443\u043b\u0433\u0443\u0443\u0434",description:"Everything you need to know about how to find and authenticate GraphQL on Codiga.",keywords:["nft collections","NFT \u0446\u0443\u0433\u043b\u0443\u0443\u043b\u0433\u0443\u0443\u0434"]},sidebar:"collection",next:{title:"\u041c\u0430\u043d\u0430\u0439\u0445\u0430\u0430\u0441 \u0433\u0430\u0440\u0433\u0430\u0441\u0430\u043d NFT \u0446\u0443\u0433\u043b\u0443\u0443\u043b\u0433\u0443\u0443\u0434",permalink:"/docs/collections/nft-collections"}},a={},s=[{value:"\u0411\u0438\u0434 \u0443\u0440\u0430\u043d \u0431\u04af\u0442\u044d\u044d\u043b\u0447\u0438\u0434\u0442\u044d\u0439 \u0445\u0430\u043c\u0442\u0440\u0430\u043d \u0430\u0436\u0438\u043b\u043b\u0430\u0434\u0430\u0433\u200b",id:"\u0431\u0438\u0434-\u0443\u0440\u0430\u043d-\u0431\u04af\u0442\u044d\u044d\u043b\u0447\u0438\u0434\u0442\u044d\u0439-\u0445\u0430\u043c\u0442\u0440\u0430\u043d-\u0430\u0436\u0438\u043b\u043b\u0430\u0434\u0430\u0433",level:2},{value:"\u0411\u0438\u0434\u044d\u043d\u0442\u044d\u0439 \u0445\u0430\u043c\u0442\u0430\u0440\u0447 \u0430\u0436\u0438\u043b\u043b\u0430\u0445",id:"\u0431\u0438\u0434\u044d\u043d\u0442\u044d\u0439-\u0445\u0430\u043c\u0442\u0430\u0440\u0447-\u0430\u0436\u0438\u043b\u043b\u0430\u0445",level:2},{value:"Self Mint",id:"self-mint",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u0431\u0438\u0434-\u0443\u0440\u0430\u043d-\u0431\u04af\u0442\u044d\u044d\u043b\u0447\u0438\u0434\u0442\u044d\u0439-\u0445\u0430\u043c\u0442\u0440\u0430\u043d-\u0430\u0436\u0438\u043b\u043b\u0430\u0434\u0430\u0433"},"\u0411\u0438\u0434 \u0443\u0440\u0430\u043d \u0431\u04af\u0442\u044d\u044d\u043b\u0447\u0438\u0434\u0442\u044d\u0439 \u0445\u0430\u043c\u0442\u0440\u0430\u043d \u0430\u0436\u0438\u043b\u043b\u0430\u0434\u0430\u0433\u200b"),(0,r.kt)("p",null,"\u0423\u0440\u0430\u043d \u0431\u04af\u0442\u044d\u044d\u043b\u0447, \u0445\u0443\u0432\u044c \u0445\u04af\u043d, \u0431\u0430\u0439\u0433\u0443\u0443\u043b\u043b\u0430\u0433\u044b\u043d \u0431\u04af\u0442\u044d\u044d\u0441\u044d\u043d NFT \u0446\u0443\u0433\u043b\u0443\u0443\u043b\u0433\u044b\u0433 \u0431\u0438\u0434 \u043c\u0430\u0440\u043a\u0435\u0442\u043f\u043b\u0435\u0439\u0441\u044d\u044d\u0440\u044d\u044d \u0434\u0430\u043c\u0436\u0443\u0443\u043b\u0430\u043d Mint \u0445\u0438\u0439\u0436 \u0445\u0430\u043c\u0442\u0440\u0430\u043d \u0430\u0436\u0438\u043b\u043b\u0430\u0434\u0430\u0433. \u0418\u043d\u0433\u044d\u0441\u043d\u044d\u044d\u0440 \u0442\u0443\u0445\u0430\u0439\u043d \u0442\u0430\u043b \u0441\u043e\u043d\u0441\u043e\u0433\u0447 \u0434\u044d\u043c\u0436\u0438\u0433\u0447, \u04af\u0439\u043b\u0447\u043b\u04af\u04af\u043b\u044d\u0433\u0447 \u043d\u0430\u0440\u0442\u0430\u0430  \u043d\u044d\u043c\u044d\u043b\u0442 \u0445\u04e9\u043d\u0433\u04e9\u043b\u04e9\u043b\u0442 \u0443\u0440\u0430\u043c\u0448\u0443\u0443\u043b\u0430\u043b, \u0434\u0430\u0432\u0443\u0443 \u0442\u0430\u043b \u043e\u043b\u0433\u043e\u0445 \u0431\u043e\u043b\u043e\u043c\u0436\u0442\u043e\u0439."),(0,r.kt)("p",null,"\u041c\u0430\u0440\u043a\u0435\u0442\u043f\u043b\u0435\u0439\u0441\u0438\u0439\u043d \u043d\u04af\u04af\u0440 \u0445\u0443\u0443\u0434\u0441\u0430\u043d\u0434 \u0431\u0438\u0434\u043d\u0438\u0439 \u0433\u0430\u0440\u0433\u0430\u0441\u0430\u043d \u043d\u0438\u0439\u0442 NFT \u0446\u0443\u0433\u043b\u0443\u0443\u043b\u0433\u0430 \u0431\u0430\u0439\u0440\u0448\u0438\u0445 \u0431\u04e9\u0433\u04e9\u04e9\u0434 \u0442\u0443\u0441 \u0431\u04af\u0440\u0438\u0439\u043d \u043c\u044d\u0434\u044d\u044d\u043b\u043b\u0438\u0439\u0433 \u0445\u043e\u043b\u0431\u043e\u0433\u0434\u043e\u0445 \u0445\u0443\u0443\u0434\u0441\u0430\u0430\u0441 \u0430\u0432\u0430\u0430\u0440\u0430\u0439."),(0,r.kt)("h2",{id:"\u0431\u0438\u0434\u044d\u043d\u0442\u044d\u0439-\u0445\u0430\u043c\u0442\u0430\u0440\u0447-\u0430\u0436\u0438\u043b\u043b\u0430\u0445"},"\u0411\u0438\u0434\u044d\u043d\u0442\u044d\u0439 \u0445\u0430\u043c\u0442\u0430\u0440\u0447 \u0430\u0436\u0438\u043b\u043b\u0430\u0445"),(0,r.kt)("p",null,"\u0422\u0430 \u04e9\u04e9\u0440\u0438\u0439\u043d NFT \u0446\u0443\u0433\u043b\u0443\u0443\u043b\u0433\u0430\u0430 \u0433\u0430\u0440\u0433\u0430\u0445\u0430\u0430\u0440 \u0442\u04e9\u043b\u04e9\u0432\u043b\u04e9\u0436 \u0431\u0443\u0439 \u0431\u043e\u043b \u0431\u0438\u0434\u044d\u043d\u0442\u044d\u0439 \u0445\u043e\u043b\u0431\u043e\u0433\u0434\u043e\u043e\u0440\u043e\u0439."),(0,r.kt)("h2",{id:"self-mint"},"Self Mint"),(0,r.kt)("p",null,"\u0422\u0430 \u04e9\u04e9\u0440\u0438\u0439\u043d NFT \u0446\u0443\u0433\u043b\u0443\u0443\u043b\u0433\u044b\u0433 \u04af\u04af\u0441\u0433\u044d\u0436 Mint \u0445\u0438\u0439\u0433\u044d\u044d\u0434 \u0411\u043b\u043e\u043a\u0447\u044d\u0439\u043d\u0434 \u0445\u0430\u0434\u0433\u0430\u043b\u0430\u0445 \u0431\u04af\u0440\u044d\u043d \u0431\u043e\u043b\u043e\u043c\u0436\u0442\u043e\u0439."),(0,r.kt)("p",null,"\ud83c\udf10 ",(0,r.kt)("a",{parentName:"p",href:"https://nft.octagon.mn/minting"},"Minting"),"\ud83c\udf10 \u0445\u0443\u0443\u0434\u0441\u0430\u043d\u0434 \u0445\u0430\u043d\u0434\u0430\u043d\u0430 \u0443\u0443."))}u.isMDXComponent=!0}}]);