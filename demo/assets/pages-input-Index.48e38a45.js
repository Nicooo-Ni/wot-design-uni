import{_ as e}from"./wd-input.503dcff9.js";import{d as l,r as a,o,c as t,w as u,a as d,b as n,h as m,j as s,g as p}from"./index-80b9692c.js";import{_ as r}from"./demo-block.1ca15e94.js";import{_ as i}from"./wd-button.c85952ef.js";import{_ as c}from"./wd-cell-group.7bfceaa0.js";import{a as V,b as f}from"./page-wraper.b0527d79.js";import"./useTranslate.46be3d58.js";import"./useChildren.a1abe05d.js";const v=f(l({__name:"Index",setup(l){const f=a(""),v=a("这是禁用状态"),x=a("这是只读状态"),b=a("123456"),h=a("支持清空"),_=a("password"),g=a(""),y=a("1234"),w=a("");a(""),a("支持清空和字数限制的文本域"),a("输入文字后，输入框高度跟随字数多少变化");const U=a(""),j=a("该输入框禁用"),C=a("12345678"),k=a(""),I=a(""),z=a(""),B=a(""),q=a("");function T(e){console.log(e)}function A(e){console.log(e)}function D(e){console.log(e)}function E(e){console.log(e)}function F(e){console.log("失焦",e)}return(l,a)=>{const G=m(s("wd-input"),e),H=m(s("demo-block"),r),J=p,K=m(s("wd-button"),i),L=m(s("wd-cell-group"),c),M=m(s("page-wraper"),V);return o(),t(M,null,{default:u((()=>[d(H,{title:"基本用法"},{default:u((()=>[d(G,{type:"text",modelValue:f.value,"onUpdate:modelValue":a[0]||(a[0]=e=>f.value=e),placeholder:"请输入用户名",onChange:T,onBlur:F},null,8,["modelValue"])])),_:1}),d(H,{title:"禁用状态"},{default:u((()=>[d(G,{type:"text",modelValue:v.value,"onUpdate:modelValue":a[1]||(a[1]=e=>v.value=e),disabled:""},null,8,["modelValue"])])),_:1}),d(H,{title:"只读状态"},{default:u((()=>[d(G,{type:"text",modelValue:x.value,"onUpdate:modelValue":a[2]||(a[2]=e=>x.value=e),readonly:""},null,8,["modelValue"])])),_:1}),d(H,{title:"错误状态"},{default:u((()=>[d(G,{type:"text",modelValue:b.value,"onUpdate:modelValue":a[3]||(a[3]=e=>b.value=e),placeholder:"请输入用户名",error:""},null,8,["modelValue"])])),_:1}),d(H,{title:"清空按钮"},{default:u((()=>[d(G,{type:"text",modelValue:h.value,"onUpdate:modelValue":a[4]||(a[4]=e=>h.value=e),clearable:"",onChange:A},null,8,["modelValue"])])),_:1}),d(H,{title:"密码框"},{default:u((()=>[d(G,{type:"text",modelValue:_.value,"onUpdate:modelValue":a[5]||(a[5]=e=>_.value=e),disabled:"",clearable:"","show-password":"",onChange:D},null,8,["modelValue"])])),_:1}),d(H,{title:"设置前后Icon"},{default:u((()=>[d(G,{type:"text",modelValue:g.value,"onUpdate:modelValue":a[6]||(a[6]=e=>g.value=e),"prefix-icon":"dong","suffix-icon":"list",clearable:"",onChange:E},null,8,["modelValue"])])),_:1}),d(H,{title:"字数限制"},{default:u((()=>[d(G,{type:"text",modelValue:y.value,"onUpdate:modelValue":a[7]||(a[7]=e=>y.value=e),maxlength:20,"show-word-limit":""},null,8,["modelValue"])])),_:1}),d(H,{title:"取消底部边框，自定义使用"},{default:u((()=>[d(G,{modelValue:w.value,"onUpdate:modelValue":a[8]||(a[8]=e=>w.value=e),"no-border":"",placeholder:"请输入价格","custom-style":"display: inline-block; width: 70px; vertical-align: middle;"},null,8,["modelValue"]),d(J,{class:"custom-txt"},{default:u((()=>[n("元")])),_:1})])),_:1}),d(H,{title:"cell 类型",transparent:""},{default:u((()=>[d(L,{border:""},{default:u((()=>[d(G,{type:"text",label:"基本用法",modelValue:U.value,"onUpdate:modelValue":a[9]||(a[9]=e=>U.value=e),placeholder:"请输入..."},null,8,["modelValue"]),d(G,{type:"text",label:"禁用",modelValue:j.value,"onUpdate:modelValue":a[10]||(a[10]=e=>j.value=e),disabled:"",placeholder:"用户名"},null,8,["modelValue"]),d(G,{type:"text",label:"清除、密码",modelValue:C.value,"onUpdate:modelValue":a[11]||(a[11]=e=>C.value=e),placeholder:"密码",clearable:"","show-password":""},null,8,["modelValue"]),d(G,{type:"text",label:"错误状态",modelValue:k.value,"onUpdate:modelValue":a[12]||(a[12]=e=>k.value=e),placeholder:"请输入用户名",error:""},null,8,["modelValue"]),d(G,{type:"text",label:"必填",modelValue:I.value,"onUpdate:modelValue":a[13]||(a[13]=e=>I.value=e),placeholder:"请输入用户名",required:""},null,8,["modelValue"]),d(G,{type:"text",label:"图标",modelValue:z.value,"onUpdate:modelValue":a[14]||(a[14]=e=>z.value=e),placeholder:"请输入...","prefix-icon":"dong","suffix-icon":"list"},null,8,["modelValue"]),d(G,{type:"text",label:"自定义插槽",center:"",modelValue:B.value,"onUpdate:modelValue":a[15]||(a[15]=e=>B.value=e),placeholder:"请输入...","use-suffix-slot":"",clearable:""},{suffix:u((()=>[d(K,{size:"small","custom-class":"button"},{default:u((()=>[n("获取验证码")])),_:1})])),_:1},8,["modelValue"]),d(G,{type:"text",label:"大尺寸",clearable:"",size:"large",modelValue:q.value,"onUpdate:modelValue":a[16]||(a[16]=e=>q.value=e),placeholder:"请输入..."},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-2564a51d"]]);export{v as default};
