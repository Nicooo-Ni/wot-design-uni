import{_ as e}from"./wd-input.503dcff9.js";import{d as a,T as l,r,o,c as s,w as t,a as u,b as d,h as m,j as n,i as p}from"./index-80b9692c.js";import{_ as i}from"./wd-cell-group.7bfceaa0.js";import{_ as c}from"./wd-form.45e33bfc.js";import{_ as f}from"./wd-button.c85952ef.js";import{d as b,a as h,b as _}from"./page-wraper.b0527d79.js";import"./useTranslate.46be3d58.js";import"./useChildren.a1abe05d.js";const w=_(a({__name:"demo2",setup(a){const _=l({name:"",phoneNumber:""}),{success:w}=b(),g=r();function j(e){g.value.validate(e)}function v(){g.value.validate().then((({valid:e})=>{e&&w("校验通过")})).catch((e=>{console.log(e,"error")}))}return(a,l)=>{const r=m(n("wd-input"),e),b=m(n("wd-cell-group"),i),w=m(n("wd-form"),c),V=m(n("wd-button"),f),N=p,x=m(n("page-wraper"),h);return o(),s(x,null,{default:t((()=>[u(w,{ref_key:"form",ref:g,model:_,"reset-on-change":!1},{default:t((()=>[u(b,{border:""},{default:t((()=>[u(r,{label:"用户名","label-width":"100px",prop:"name",clearable:"",modelValue:_.name,"onUpdate:modelValue":l[0]||(l[0]=e=>_.name=e),placeholder:"请输入用户名",onBlur:l[1]||(l[1]=e=>j("name")),rules:[{required:!0,message:"请填写用户名"}]},null,8,["modelValue"]),u(r,{label:"联系方式",prop:"phoneNumber","label-width":"100px",clearable:"",onBlur:l[2]||(l[2]=e=>j("phoneNumber")),modelValue:_.phoneNumber,"onUpdate:modelValue":l[3]||(l[3]=e=>_.phoneNumber=e),placeholder:"联系方式",rules:[{required:!0,message:"请填写联系方式"}]},null,8,["modelValue"])])),_:1})])),_:1},8,["model"]),u(N,{class:"footer"},{default:t((()=>[u(V,{type:"primary",size:"large",block:"",onClick:v},{default:t((()=>[d("提交")])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-44446389"]]);export{w as default};
