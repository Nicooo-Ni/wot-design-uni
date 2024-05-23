import{Y as e,o as s,g as t,A as a,h as o,m as l,b as n,d as i,e as r,a as u}from"./page-wraper.b0527d79.js";import{r as c,v as m,Y as d,d as f,q as p,o as h,c as v,w,z as S,u as _,e as g,F as H,b,t as k,n as y,x,i as D,a as j,a6 as M,h as F,j as I}from"./index-80b9692c.js";import{_ as C}from"./demo-block.1ca15e94.js";import{_ as A,a as $}from"./wd-grid.c6676167.js";import"./wd-badge.0199d850.js";import"./useChildren.a1abe05d.js";const q=1e3,Y=60*q,z=60*Y,G=24*z;function N(e){return requestAnimationFrame(e)}function R(e){let t,a,o=null;const l=c(e.time),n=m((()=>{return{total:e=l.value,days:Math.floor(e/G),hours:Math.floor(e%G/z),minutes:Math.floor(e%z/Y),seconds:Math.floor(e%Y/q),milliseconds:Math.floor(e%q)};var e})),i=()=>{a=!1,cancelAnimationFrame(o)},r=()=>Math.max(t-Date.now(),0),u=t=>{l.value=t,s(e.onChange)&&e.onChange(n.value),0===t&&(i(),s(e.onFinish)&&e.onFinish())},f=()=>{o=N((()=>{a&&(u(r()),l.value>0&&f())}))},p=()=>{o=N((()=>{if(a){const t=r();e=t,s=l.value,(Math.floor(e/1e3)!==Math.floor(s/1e3)||0===t)&&u(t),l.value>0&&p()}var e,s}))};return d(i),{start:()=>{a||(t=Date.now()+l.value,a=!0,e.millisecond?f():p())},pause:i,reset:(s=e.time)=>{i(),l.value=s},current:n}}const B=n(f({name:"wd-count-down",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...t,time:a(Number),millisecond:o(!1),format:l("HH:mm:ss"),autoStart:o(!0)},emits:["change","finish"],setup(s,{expose:t,emit:a}){const o=s,{start:l,pause:n,reset:i,current:r}=R({time:o.time,millisecond:o.millisecond,onChange:e=>a("change",e),onFinish:()=>a("finish")}),u=m((()=>function(s,t){const{days:a}=t;let{hours:o,minutes:l,seconds:n,milliseconds:i}=t;if(s.includes("DD")?s=s.replace("DD",e(a)):o+=24*a,s.includes("HH")?s=s.replace("HH",e(o)):l+=60*o,s.includes("mm")?s=s.replace("mm",e(l)):n+=60*l,s.includes("ss")?s=s.replace("ss",e(n)):i+=1e3*n,s.includes("S")){const t=e(i,3);s=s.includes("SSS")?s.replace("SSS",t):s.includes("SS")?s.replace("SS",t.slice(0,2)):s.replace("S",t.charAt(0))}return s}(o.format,r.value))),c=()=>{i(o.time),o.autoStart&&l()};return p((()=>o.time),c,{immediate:!0}),t({start:l,pause:n,reset:c}),(e,s)=>{const t=D;return h(),v(t,{class:y(`wd-count-down ${e.customClass}`),style:x(e.customStyle)},{default:w((()=>[e.$slots.default?S(e.$slots,"default",{key:0,current:_(r)},void 0,!0):(h(),g(H,{key:1},[b(k(_(u)),1)],64))])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-9d337e25"]]),E=n(f({__name:"Index",setup(e){const{show:s}=i(),t=c(108e6),a=c(null),o=()=>{a.value.start()},l=()=>{a.value.pause()},n=()=>{a.value.reset()},m=()=>s("倒计时结束");return(e,s)=>{const i=F(I("wd-toast"),r),c=F(I("wd-count-down"),B),d=F(I("demo-block"),C),f=F(I("wd-grid-item"),A),p=F(I("wd-grid"),$),S=F(I("page-wraper"),u);return h(),v(S,null,{default:w((()=>[j(i),j(d,{title:"基本用法"},{default:w((()=>[j(c,{time:t.value},null,8,["time"])])),_:1}),j(d,{title:"自定义格式"},{default:w((()=>[j(c,{time:t.value,format:"DD 天 HH 时 mm 分 ss 秒"},null,8,["time"])])),_:1}),j(d,{title:"毫秒级渲染"},{default:w((()=>[j(c,{time:t.value,millisecond:"",format:"HH:mm:ss:SS"},null,8,["time"])])),_:1}),j(d,{title:"自定义样式"},{default:w((()=>[j(c,{time:t.value},{default:w((({current:e})=>[M("span",{class:"custom-count-down"},k(e.hours),1),M("span",{class:"custom-count-down-colon"},":"),M("span",{class:"custom-count-down"},k(e.minutes),1),M("span",{class:"custom-count-down-colon"},":"),M("span",{class:"custom-count-down"},k(e.seconds),1)])),_:1},8,["time"])])),_:1}),j(d,{title:"手动控制"},{default:w((()=>[j(c,{ref_key:"countDown",ref:a,time:3e3,millisecond:"","auto-start":!1,format:"ss:SSS",onFinish:m},null,512),j(p,{clickable:"",border:""},{default:w((()=>[j(f,{text:"开始",icon:"play-circle-stroke",onItemclick:o}),j(f,{text:"暂停",icon:"pause-circle",onItemclick:l}),j(f,{text:"重置",icon:"refresh",onItemclick:n})])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-aa320b6d"]]);export{E as default};
