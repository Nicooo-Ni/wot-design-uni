import{_ as e}from"./wd-rate.57506dfd.js";import{d as l,r as a,o,c as u,w as d,a as t,h as n,j as r,i as m}from"./index-80b9692c.js";import{_ as i}from"./demo-block.1ca15e94.js";import{a as s}from"./page-wraper.b0527d79.js";const c=l({__name:"Index",setup(l){const c=a(5),p=a(3),g=a(2),v=a(3),V=a(4),f=a(3),_=a(5);function b({value:e}){console.log(e)}function U({value:e}){console.log(e)}return(l,a)=>{const j=n(r("wd-rate"),e),x=n(r("demo-block"),i),w=m,h=n(r("page-wraper"),s);return o(),u(h,null,{default:d((()=>[t(x,{title:"基本用法"},{default:d((()=>[t(j,{modelValue:c.value,"onUpdate:modelValue":a[0]||(a[0]=e=>c.value=e),onChange:b},null,8,["modelValue"])])),_:1}),t(x,{title:"只读状态 readonly"},{default:d((()=>[t(j,{modelValue:p.value,"onUpdate:modelValue":a[1]||(a[1]=e=>p.value=e),readonly:""},null,8,["modelValue"])])),_:1}),t(x,{title:"禁用状态"},{default:d((()=>[t(j,{modelValue:g.value,"onUpdate:modelValue":a[2]||(a[2]=e=>g.value=e),disabled:""},null,8,["modelValue"])])),_:1}),t(x,{title:"修改选中颜色"},{default:d((()=>[t(w,{style:{"margin-bottom":"10px"}},{default:d((()=>[t(j,{modelValue:v.value,"onUpdate:modelValue":a[3]||(a[3]=e=>v.value=e),"active-color":"linear-gradient(180deg, rgba(255,238,0,1) 0%,rgba(250,176,21,1) 100%)",onChange:U},null,8,["modelValue"])])),_:1}),t(j,{modelValue:V.value,"onUpdate:modelValue":a[4]||(a[4]=e=>V.value=e),"active-color":["linear-gradient(180deg, rgba(255,238,0,1) 0%,rgba(250,176,21,1) 100%)","linear-gradient(315deg, rgba(245,34,34,1) 0%,rgba(255,117,102,1) 100%)"]},null,8,["modelValue","active-color"])])),_:1}),t(x,{title:"修改icon和选中颜色"},{default:d((()=>[t(j,{modelValue:f.value,"onUpdate:modelValue":a[5]||(a[5]=e=>f.value=e),icon:"dong","active-icon":"dong","active-color":"#4D80F0"},null,8,["modelValue"])])),_:1}),t(x,{title:"修改size、space"},{default:d((()=>[t(j,{modelValue:_.value,"onUpdate:modelValue":a[6]||(a[6]=e=>_.value=e),space:"10px",size:"30px"},null,8,["modelValue"])])),_:1})])),_:1})}}});export{c as default};
