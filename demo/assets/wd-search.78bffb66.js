import{g as e,m as a,h as l,z as s,v as c,C as u,c as t,b as o}from"./page-wraper.b0527d79.js";import{d as n,r,q as d,m as i,v as h,h as v,j as f,o as m,c as p,w as _,a as x,z as w,x as g,u as y,b as C,t as b,p as k,n as V,g as z,i as S,W as $}from"./index-80b9692c.js";import{u as j}from"./useTranslate.46be3d58.js";const L=o(n({name:"wd-search",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...e,modelValue:a(""),useSuffixSlot:l(!1),placeholder:String,cancelTxt:String,light:l(!1),hideCancel:l(!1),disabled:l(!1),maxlength:s(-1),placeholderLeft:l(!1),focus:l(!1),focusWhenClear:l(!1)},emits:["update:modelValue","change","clear","search","focus","blur","cancel"],setup(e,{emit:a}){const l=e,{translate:s}=j("search"),o=r(!1),n=r(!1),L=r(""),W=r(!0),I=r(!1);d((()=>l.modelValue),(e=>{L.value=e,e&&(n.value=!0)}),{immediate:!0}),d((()=>l.focus),(e=>{if(e){if(l.disabled)return;F()}})),i((()=>{l.focus&&F()}));const T=h((()=>`wd-search  ${l.light?"is-light":""}  ${l.hideCancel?"is-without-cancel":""} ${l.customClass}`)),q=h((()=>{const e={display:""===L.value&&W.value?"flex":"none"};return c(e)}));function B(e){n.value=e,u((()=>{o.value=e}))}function F(){l.disabled||u().then((()=>u())).then((()=>u())).then((()=>{W.value=!1,B(!0)}))}function G(e){L.value=e.detail.value,a("update:modelValue",e.detail.value),a("change",{value:e.detail.value})}function H(){L.value="",I.value=!0,l.focusWhenClear&&(o.value=!1),u().then((()=>u())).then((()=>u())).then((()=>{l.focusWhenClear?(W.value=!1,B(!0)):(W.value=!0,B(!1)),a("change",{value:""}),a("update:modelValue",""),a("clear")}))}function U({detail:{value:e}}){a("search",{value:e})}function A(){I.value?I.value=!1:(W.value=!1,a("focus",{value:L.value}))}function D(){I.value||(W.value=!L.value,n.value=!W.value,o.value=!1,a("blur",{value:L.value}))}function E(){a("cancel",{value:L.value})}return(e,a)=>{const l=v(f("wd-icon"),t),c=z,u=S,r=$;return m(),p(u,{class:V(y(T)),style:g(e.customStyle)},{default:_((()=>[x(u,{class:"wd-search__block"},{default:_((()=>[w(e.$slots,"prefix",{},void 0,!0),x(u,{class:"wd-search__field"},{default:_((()=>[e.placeholderLeft?k("",!0):(m(),p(u,{key:0,style:g(y(q)),class:"wd-search__cover",onClick:F},{default:_((()=>[x(l,{name:"search",size:"18px","custom-class":"wd-search__search-icon"}),x(c,{class:"wd-search__placeholder-txt"},{default:_((()=>[C(b(e.placeholder||y(s)("search")),1)])),_:1})])),_:1},8,["style"])),n.value||L.value||e.placeholderLeft?(m(),p(l,{key:1,name:"search",size:"18px","custom-class":"wd-search__search-left-icon"})):k("",!0),n.value||L.value||e.placeholderLeft?(m(),p(r,{key:2,placeholder:e.placeholder||y(s)("search"),"placeholder-class":"wd-search__placeholder-txt","confirm-type":"search",modelValue:L.value,"onUpdate:modelValue":a[0]||(a[0]=e=>L.value=e),class:"wd-search__input",onFocus:A,onInput:G,onBlur:D,onConfirm:U,disabled:e.disabled,maxlength:e.maxlength,focus:o.value},null,8,["placeholder","modelValue","disabled","maxlength","focus"])):k("",!0),L.value?(m(),p(l,{key:3,"custom-class":"wd-search__clear wd-search__clear-icon",name:"error-fill",size:"16px",onClick:H})):k("",!0)])),_:1})])),_:3}),e.hideCancel?k("",!0):w(e.$slots,"suffix",{key:0},(()=>[x(u,{class:"wd-search__cancel",onClick:E},{default:_((()=>[C(b(e.cancelTxt||y(s)("cancel")),1)])),_:1})]),!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-6ef2e695"]]);export{L as _};
