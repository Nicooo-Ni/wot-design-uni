import{d as e,r as s,v as l,m as t,M as a,o,c as r,w as i,a as c,n as u,z as n,u as h,x as d,y as p,i as v,a3 as w}from"./index-80b9692c.js";import{g as f,m as g,y as _,v as m,j as z,b as y}from"./page-wraper.b0527d79.js";const x=y(e({name:"wd-resize",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...f,customContainerClass:g("")},emits:["resize"],setup(e,{emit:f}){const g=e,y=s(0),x=s(0),C=s(0),$=s(0),b=s(0),S=s(0),H=s(0),j=l((()=>{const e={width:_(S.value),height:_(b.value)};return`${m(e)};${g.customStyle}`}));let W=()=>{};const{proxy:E}=p(),I=s(`resize${z()}`);function R({lastWidth:e,lastHeight:s}){y.value=1e5+s,x.value=3*b.value+s,C.value=1e5+e,$.value=3*S.value+e}return t((()=>{a().in(E).select(`#${I.value}`).boundingClientRect().exec((([e])=>{let s=e.height,l=e.width;b.value=s,S.value=l,W=()=>{a().in(E).select(`#${I.value}`).boundingClientRect().exec((([e])=>{if(0==H.value++){const s={};["bottom","top","left","right","height","width"].forEach((l=>{s[l]=e[l]})),f("resize",s)}if(H.value<3)return;const t=e.height,a=e.width;b.value=t,S.value=a;const o=[];if(t!==s&&(s=t,o.push(1)),a!==l&&(l=a,o.push(1)),0!==o.length){const s={};["bottom","top","left","right","height","width"].forEach((l=>{s[l]=e[l]})),f("resize",s)}R({lastWidth:l,lastHeight:s})}))},R({lastWidth:l,lastHeight:s})}))})),(e,s)=>{const l=v,t=w;return o(),r(l,{class:u(`wd-resize ${e.customClass}`),style:d(h(j))},{default:i((()=>[c(l,{id:I.value,class:u(`wd-resize__container ${e.customContainerClass}`)},{default:i((()=>[n(e.$slots,"default",{},void 0,!0),c(t,{class:"wd-resize__wrapper","scroll-y":!0,"scroll-top":y.value,"scroll-x":!0,"scroll-left":C.value,onScroll:h(W)},{default:i((()=>[c(l,{class:"wd-resize__wrapper--placeholder",style:{height:"100000px",width:"100000px"}})])),_:1},8,["scroll-top","scroll-left","onScroll"]),c(t,{class:"wd-resize__wrapper","scroll-y":!0,"scroll-top":x.value,"scroll-x":!0,"scroll-left":$.value,onScroll:h(W)},{default:i((()=>[c(l,{class:"wd-resize__wrapper--placeholder",style:{height:"250%",width:"250%"}})])),_:1},8,["scroll-top","scroll-left","onScroll"])])),_:3},8,["id","class"])])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-a20695a6"]]);export{x as _};
