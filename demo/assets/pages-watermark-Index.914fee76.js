import{d as e,q as a,r as t,ae as l,G as s,v as i,m as o,o as u,c as n,w as d,x as r,p as c,n as m,u as g,a5 as f,H as p,i as v,e as h,a as _,b as y,F as w,h as b,j as z}from"./index-80b9692c.js";import{g as x,m as $,i as k,h as j,z as I,j as V,y as C,v as S,a0 as X,a1 as F,b as H,_ as P,a as W}from"./page-wraper.b0527d79.js";import{_ as Y}from"./wd-button.c85952ef.js";import{_ as A}from"./demo-block.1ca15e94.js";import{_ as D}from"./wd-badge.0199d850.js";import{_ as O}from"./wd-cell-group.7bfceaa0.js";import"./useChildren.a1abe05d.js";const R=H(e({name:"wd-watermark",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...x,content:$(""),image:$(""),imageHeight:k(100),imageWidth:k(100),gutterX:k(0),gutterY:k(0),width:k(100),height:k(100),fullScreen:j(!0),color:$("#8c8c8c"),size:k(14),fontStyle:$("normal"),fontWeight:I("normal"),fontFamily:$("PingFang SC"),rotate:k(-25),zIndex:k(1100),opacity:k(.5)},setup(e){const h=e;a((()=>h),(()=>{$.value=!0,z.value=(h.height+h.gutterY)*b.value,x.value=(h.width+h.gutterX)*b.value,f((()=>{I()}))}),{deep:!0});const _=t(`water${V()}`),y=t(""),w=t(l("createOffscreenCanvas")&&Boolean(uni.createOffscreenCanvas)),b=t(s().pixelRatio),z=t((h.height+h.gutterY)*b.value),x=t((h.width+h.gutterX)*b.value),$=t(!0),k=i((()=>{let e="wd-watermark";return h.fullScreen&&(e=`${e} is-fullscreen`),`${e} ${h.customClass}`})),j=i((()=>{const e={opacity:h.opacity,backgroundSize:C(h.width+h.gutterX)};return y.value&&(e.backgroundImage=`url('${y.value}')`),`${S(e)};${h.customStyle}`}));function I(){$.value=!1;const{width:e,height:a,color:t,size:l,fontStyle:s,fontWeight:i,fontFamily:o,content:u,rotate:n,gutterX:d,gutterY:r,image:c,imageHeight:m,imageWidth:g}=h;!function(e,a,t,l,s,i,o,u,n,d,r,c,m,g){const f=(a+r)*b.value,p=(e+d)*b.value,v=e*b.value,h=a*b.value,_=l*b.value;!function(e,a,t,l,s,i,o,u,n,d,r,c,m,g){const f=document.createElement("canvas"),p=f.getContext("2d");if(f.setAttribute("width",`${a}px`),f.setAttribute("height",`${e}px`),p)if(c){!async function(e,a,t,l,s,i,o,u,n){e.translate(o/2,u/2),e.rotate(Math.PI/180*Number(i)),a.crossOrigin="anonymous",a.referrerPolicy="no-referrer",X(t)?a.src=t:a.src=F(t,{timestamp:`${(new Date).getTime()}`});a.onload=()=>{e.drawImage(a,-s*b.value/2,-l*b.value/2,s*b.value,l*b.value),e.restore(),y.value=n.toDataURL()}}(p,new Image,c,m,g,s,t,l,f)}else!function(e,a,t,l,s,i,o,u,n,d,r){e.textBaseline="middle",e.textAlign="center",e.translate(t/2,t/2),e.rotate(Math.PI/180*s),e.font=`${u} normal ${n} ${i}px/${l}px ${o}`,e.fillStyle=d,e.fillText(a,0,0),e.restore(),y.value=r.toDataURL()}(p,r,t,l,s,i,o,u,n,d,f);else console.error("无法获取canvas上下文，请确认当前环境是否支持canvas")}(f,p,v,h,n,_,o,s,i,t,u,c,m,g)}(e,a,t,l,s,i,o,u,n,d,r,c,m,g)}return o((()=>{I()})),(e,a)=>{const t=p,l=v;return u(),n(l,{class:m(g(k)),style:r(g(j))},{default:d((()=>[!w.value&&$.value?(u(),n(t,{key:0,type:"2d",style:r({height:z.value+"px",width:x.value+"px",visibility:"hidden"}),"canvas-id":_.value,id:_.value},null,8,["style","canvas-id","id"])):c("",!0)])),_:1},8,["class","style"])}}}),[["__scopeId","data-v-023b014d"]]),B=H(e({__name:"Index",setup(e){const a=t(!1),l=i((()=>a.value?"https://wot-design-uni.cn/wot-design.png":""));function s(e){a.value=e}return(e,a)=>{const t=b(z("wd-watermark"),R),i=b(z("wd-button"),Y),o=b(z("demo-block"),A),n=b(z("wd-badge"),D),r=b(z("wd-cell"),P),c=b(z("wd-cell-group"),O),m=b(z("page-wraper"),W),f=v;return u(),h(w,null,[_(t,{image:g(l),width:130,height:140,"image-width":38,content:"wot-design-uni","image-height":38,opacity:.5},null,8,["image","opacity"]),_(f,null,{default:d((()=>[_(m,null,{default:d((()=>[_(o,{title:"基础用法"},{default:d((()=>[_(i,{onClick:a[0]||(a[0]=e=>s(!1)),plain:""},{default:d((()=>[y("文字水印")])),_:1}),_(i,{onClick:a[1]||(a[1]=e=>s(!0)),plain:""},{default:d((()=>[y("图片水印")])),_:1})])),_:1}),_(o,{title:"展示效果"},{default:d((()=>[_(n,{"custom-class":"badge",modelValue:200,max:99},{default:d((()=>[_(i,{round:!1,type:"info",size:"small"},{default:d((()=>[y("评论")])),_:1})])),_:1}),_(n,{"custom-class":"badge",modelValue:200,max:10},{default:d((()=>[_(i,{round:!1,type:"info",size:"small"},{default:d((()=>[y("回复")])),_:1})])),_:1})])),_:1}),_(o,{title:"局部水印"},{default:d((()=>[_(t,{opacity:.8,image:"https://wot-design-uni.cn/wot-design.png","image-width":38,"image-height":38,"full-screen":!1},null,8,["opacity"]),_(n,{"custom-class":"badge",modelValue:12},{default:d((()=>[_(i,{round:!1,type:"info",size:"small"},{default:d((()=>[y("评论")])),_:1})])),_:1}),_(n,{"custom-class":"badge",modelValue:3,"bg-color":"pink"},{default:d((()=>[_(i,{round:!1,type:"info",size:"small"},{default:d((()=>[y("回复")])),_:1})])),_:1}),_(n,{"custom-class":"badge",modelValue:1,type:"primary"},{default:d((()=>[_(i,{round:!1,type:"info",size:"small"},{default:d((()=>[y("评论")])),_:1})])),_:1}),_(n,{"custom-class":"badge",modelValue:2,type:"warning"},{default:d((()=>[_(i,{round:!1,type:"info",size:"small"},{default:d((()=>[y("回复")])),_:1})])),_:1}),_(n,{"custom-class":"badge",modelValue:1,type:"success"},{default:d((()=>[_(i,{round:!1,type:"info",size:"small"},{default:d((()=>[y("评论")])),_:1})])),_:1}),_(n,{"custom-class":"badge",modelValue:2,type:"info"},{default:d((()=>[_(i,{round:!1,type:"info",size:"small"},{default:d((()=>[y("回复")])),_:1})])),_:1}),_(c,{border:""},{default:d((()=>[_(r,{size:"large",title:"标题文字",value:"内容"}),_(r,{title:"标题文字",value:"内容",size:"large",icon:"setting","is-link":""}),_(r,{size:"large",title:"标题文字",label:"描述信息",value:"内容"}),_(r,{size:"large",title:"标题文字",value:"内容"}),_(r,{title:"标题文字",value:"内容",size:"large",icon:"setting","is-link":""}),_(r,{size:"large",title:"标题文字",label:"描述信息",value:"内容"})])),_:1})])),_:1}),_(o,{title:"展示效果"},{default:d((()=>[_(n,{"custom-class":"badge",modelValue:"new"},{default:d((()=>[_(i,{round:!1,type:"info",size:"small"},{default:d((()=>[y("评论")])),_:1})])),_:1}),_(n,{"custom-class":"badge",modelValue:"hot"},{default:d((()=>[_(i,{round:!1,type:"info",size:"small"},{default:d((()=>[y("回复")])),_:1})])),_:1})])),_:1}),_(o,{title:"展示效果"},{default:d((()=>[_(n,{"custom-class":"badge","is-dot":""},{default:d((()=>[y("数据查询")])),_:1}),_(n,{"custom-class":"badge","is-dot":""},{default:d((()=>[_(i,{round:!1,type:"info",size:"small"},{default:d((()=>[y("回复")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})],64)}}}),[["__scopeId","data-v-4dfb452a"]]);export{B as default};
