import{r as e,S as a,d as l,v as t,N as o,q as s,h as n,j as u,o as r,c as i,w as c,a as d,n as p,u as m,b as v,t as f,p as _,e as w,F as y,z as b,i as x}from"./index-80b9692c.js";import{_ as g}from"./wd-input.503dcff9.js";import{_ as h}from"./wd-button.c85952ef.js";import{J as C,g as k,r as z,F as V,o as B,b as j}from"./page-wraper.b0527d79.js";import{u as E}from"./useTranslate.46be3d58.js";const I="__MESSAGE_OPTION__",T={title:"",showCancelButton:!1,show:!1,closeOnClickModal:!0,msg:"",type:"alert",inputType:"text",inputValue:"",inputValidate:null,showErr:!1,zIndex:99,lazyRender:!0,inputError:""};function S(l=""){const t=e(T);a(l?I+l:I,t);const o=e=>a=>{const l=C({type:e},"string"==typeof a?{title:a}:a);return"confirm"===l.type||"prompt"===l.type?l.showCancelButton=!0:l.showCancelButton=!1,s(l)},s=e=>new Promise(((a,l)=>{const o=C(T,"string"==typeof e?{title:e}:e);t.value=C(o,{show:!0,onConfirm:e=>{a(e)},onCancel:e=>{l(e)}})})),n=o("alert"),u=o("confirm"),r=o("prompt");return{show:s,alert:n,confirm:u,prompt:r,close:()=>{t.value={...T}}}}const M=j(l({name:"wd-message-box",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...k,selector:String},setup(a){const l=a,{translate:C}=E("message-box"),k=t((()=>`wd-message-box__container ${l.customClass}`)),j=t((()=>`wd-message-box__body ${G.value?"":"is-no-title"} ${"prompt"===H.value?"is-prompt":""}`)),S=l.selector?I+l.selector:I,M=o(S,e(T)),O=e("");let P=null,$=null,N=null;const F=e(!1),G=e(""),R=e(!1),U=e(!0),q=e(""),A=e(""),H=e("alert"),J=e("text"),D=e(""),K=e(""),L=e();let Q=null;const W=e(""),X=e(!1),Y=e(99),Z=e(!0);function ee(e){if(("modal"!==e||U.value)&&("prompt"!==H.value||"confirm"!==e||function(){if(L.value&&!L.value.test(String(D.value)))return X.value=!0,!1;if("function"==typeof Q){if(!Q(D.value))return X.value=!0,!1}return X.value=!1,!0}()))switch(e){case"confirm":N?N({resolve:a=>{a&&ae({action:e,value:D.value})}}):ae({action:e,value:D.value});break;case"cancel":le({action:e});break;default:le({action:"modal"})}}function ae(e){F.value=!1,V(P)&&P(e)}function le(e){F.value=!1,V($)&&$(e)}function te(e){""!==e?D.value=e:X.value=!1}return s((()=>M.value),(e=>{var a;(a=e)&&(G.value=B(a.title)?a.title:"",R.value=!!B(a.showCancelButton)&&a.showCancelButton,F.value=a.show,U.value=a.closeOnClickModal,q.value=a.confirmButtonText,A.value=a.cancelButtonText,O.value=a.msg,H.value=a.type,J.value=a.inputType,D.value=a.inputValue,K.value=a.inputPlaceholder,L.value=a.inputPattern,Q=a.inputValidate,P=a.onConfirm,$=a.onCancel,N=a.beforeConfirm,W.value=a.inputError,X.value=a.showErr,Y.value=a.zIndex,Z.value=a.lazyRender)}),{deep:!0,immediate:!0}),s((()=>F.value),(e=>{!1===e&&(X.value=!1)}),{deep:!0,immediate:!0}),(e,a)=>{const l=x,t=n(u("wd-input"),g),o=n(u("wd-button"),h),s=n(u("wd-popup"),z);return r(),i(l,null,{default:c((()=>[d(s,{transition:"zoom-in",modelValue:F.value,"onUpdate:modelValue":a[3]||(a[3]=e=>F.value=e),"close-on-click-modal":U.value,"lazy-render":Z.value,"custom-class":"wd-message-box",onClickModal:a[4]||(a[4]=e=>ee("modal")),"z-index":Y.value,duration:200},{default:c((()=>[d(l,{class:p(m(k))},{default:c((()=>[d(l,{class:p(m(j))},{default:c((()=>[G.value?(r(),i(l,{key:0,class:"wd-message-box__title"},{default:c((()=>[v(f(G.value),1)])),_:1})):_("",!0),d(l,{class:"wd-message-box__content"},{default:c((()=>["prompt"===H.value?(r(),w(y,{key:0},[d(t,{modelValue:D.value,"onUpdate:modelValue":a[0]||(a[0]=e=>D.value=e),type:J.value,size:"large",placeholder:K.value||"请输入",onInput:te},null,8,["modelValue","type","placeholder"]),X.value?(r(),i(l,{key:0,class:"wd-message-box__input-error"},{default:c((()=>[v(f(W.value||m(C)("inputNoValidate")),1)])),_:1})):_("",!0)],64)):_("",!0),b(e.$slots,"default",{},(()=>[v(f(O.value),1)]),!0)])),_:3})])),_:3},8,["class"]),d(l,{class:p("wd-message-box__actions "+(R.value?"wd-message-box__flex":"wd-message-box__block"))},{default:c((()=>[R.value?(r(),i(o,{key:0,type:"info",block:"","custom-style":"margin-right: 16px;",onClick:a[1]||(a[1]=e=>ee("cancel"))},{default:c((()=>[v(f(A.value||m(C)("cancel")),1)])),_:1})):_("",!0),d(o,{block:"",onClick:a[2]||(a[2]=e=>ee("confirm"))},{default:c((()=>[v(f(q.value||m(C)("confirm")),1)])),_:1})])),_:1},8,["class"])])),_:3},8,["class"])])),_:3},8,["modelValue","close-on-click-modal","lazy-render","z-index"])])),_:3})}}}),[["__scopeId","data-v-ae5687fc"]]);export{M as _,S as u};
