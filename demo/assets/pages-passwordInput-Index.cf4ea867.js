import{d as e,o as l,c as a,w as s,a as u,e as o,F as t,f as d,n,x as r,u as i,b as m,t as v,p,i as c,g as f,r as V,q as _,h as b,j as w}from"./index-80b9692c.js";import{g,m as h,h as y,z as U,i as k,y as x,b as I,a as j}from"./page-wraper.b0527d79.js";import{_ as F}from"./wd-number-keyboard.0b74d8d0.js";import{_ as C}from"./demo-block.1ca15e94.js";import"./useTouch.b38a4e32.js";const T=I(e({name:"wd-password-input",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...g,modelValue:h(""),mask:y(!0),info:h(""),errorInfo:h(""),gutter:U(0),length:k(6),focused:y(!0)},emits:["focus"],setup(e,{emit:V}){function _(e){V("focus",e)}return(e,V)=>{const b=c,w=f;return l(),a(b,{class:n(`wd-password-input ${e.customClass}`),style:r(e.customStyle)},{default:s((()=>[u(b,{onTouchstart:_,class:"wd-password-input__security"},{default:s((()=>[(l(!0),o(t,null,d(e.length,((o,t)=>(l(),a(b,{key:t,class:n("wd-password-input__item "+(e.gutter?"":"is-border")),style:r({marginLeft:0!==t&&e.gutter?i(x)(e.gutter):0})},{default:s((()=>[e.focused&&t===e.modelValue.length?(l(),a(b,{key:0,class:"wd-password-input__cursor"})):(l(),a(b,{key:1,class:n("wd-password-input__value")},{default:s((()=>[u(b,{style:r({visibility:e.mask&&e.modelValue[t]?"visible":"hidden"}),class:"wd-password-input__mask"},null,8,["style"]),!e.mask&&e.modelValue[t]?(l(),a(w,{key:0},{default:s((()=>[m(v(e.modelValue[t]),1)])),_:2},1024)):p("",!0)])),_:2},1024))])),_:2},1032,["class","style"])))),128))])),_:1}),e.info||e.errorInfo?(l(),a(b,{key:0,class:n("wd-password-input__info "+(e.errorInfo?"is-error":""))},{default:s((()=>[m(v(e.errorInfo||e.info),1)])),_:1},8,["class"])):p("",!0)])),_:1},8,["class","style"])}}}),[["__scopeId","data-v-991c123b"]]),q=I(e({__name:"Index",setup(e){const o=V("123"),t=V("123"),d=V("123"),n=V("123"),r=V("123"),i=V(""),m=V(!0),v=V(!1),p=V(!1),f=V(!1),g=V(!1),h=[m,v,p,f,g];function y(e){h.forEach(((l,a)=>l.value=a===e-1))}return _(r,(e=>{6===e.length&&"123456"!==e?i.value="密码错误":i.value=""})),(e,V)=>{const _=b(w("wd-password-input"),T),h=b(w("wd-number-keyboard"),F),U=b(w("demo-block"),C),k=c,x=b(w("page-wraper"),j);return l(),a(x,null,{default:s((()=>[u(k,{class:"password-input"},{default:s((()=>[u(U,{title:"基本用法",transparent:""},{default:s((()=>[u(_,{modelValue:o.value,"onUpdate:modelValue":V[0]||(V[0]=e=>o.value=e),focused:m.value,onFocus:V[1]||(V[1]=e=>y(1))},null,8,["modelValue","focused"]),u(h,{visible:m.value,"onUpdate:visible":V[2]||(V[2]=e=>m.value=e),modelValue:o.value,"onUpdate:modelValue":V[3]||(V[3]=e=>o.value=e),maxlength:6},null,8,["visible","modelValue"])])),_:1}),u(U,{title:"自定义长度",transparent:""},{default:s((()=>[u(_,{modelValue:t.value,"onUpdate:modelValue":V[4]||(V[4]=e=>t.value=e),length:4,focused:v.value,onFocus:V[5]||(V[5]=e=>y(2))},null,8,["modelValue","focused"]),u(h,{visible:v.value,"onUpdate:visible":V[6]||(V[6]=e=>v.value=e),modelValue:t.value,"onUpdate:modelValue":V[7]||(V[7]=e=>t.value=e),maxlength:4},null,8,["visible","modelValue"])])),_:1}),u(U,{title:"限制最大最小值",transparent:""},{default:s((()=>[u(_,{modelValue:d.value,"onUpdate:modelValue":V[8]||(V[8]=e=>d.value=e),gutter:10,focused:p.value,onFocus:V[9]||(V[9]=e=>y(3))},null,8,["modelValue","focused"]),u(h,{visible:p.value,"onUpdate:visible":V[10]||(V[10]=e=>p.value=e),modelValue:d.value,"onUpdate:modelValue":V[11]||(V[11]=e=>d.value=e),maxlength:6},null,8,["visible","modelValue"])])),_:1}),u(U,{title:"明文展示",transparent:""},{default:s((()=>[u(_,{modelValue:n.value,"onUpdate:modelValue":V[12]||(V[12]=e=>n.value=e),mask:!1,focused:f.value,onFocus:V[13]||(V[13]=e=>y(4))},null,8,["modelValue","focused"]),u(h,{visible:f.value,"onUpdate:visible":V[14]||(V[14]=e=>f.value=e),modelValue:n.value,"onUpdate:modelValue":V[15]||(V[15]=e=>n.value=e),maxlength:6},null,8,["visible","modelValue"])])),_:1}),u(U,{title:"提示信息",transparent:""},{default:s((()=>[u(_,{modelValue:r.value,"onUpdate:modelValue":V[16]||(V[16]=e=>r.value=e),info:"密码为 6 位数字","error-info":i.value,focused:g.value,onFocus:V[17]||(V[17]=e=>y(5))},null,8,["modelValue","error-info","focused"]),u(h,{visible:g.value,"onUpdate:visible":V[18]||(V[18]=e=>g.value=e),modelValue:r.value,"onUpdate:modelValue":V[19]||(V[19]=e=>r.value=e),maxlength:6},null,8,["visible","modelValue"])])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-8980659c"]]);export{q as default};
