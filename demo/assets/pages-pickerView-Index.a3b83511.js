import{_ as l}from"./wd-picker-view.8be24497.js";import{d as e,r as a,o as u,c as o,w as v,a as t,h as n,j as m}from"./index-80b9692c.js";import{_ as d}from"./demo-block.1ca15e94.js";import{a as s}from"./page-wraper.b0527d79.js";const b=e({__name:"Index",setup(e){const b={0:[{label:"北京",value:"110000"},{label:"广东省",value:"440000"}],11e4:[{label:"北京",value:"110100"}],44e4:[{label:"广州市",value:"440100"},{label:"韶关市",value:"440200"},{label:"深圳市",value:"440300"},{label:"珠海市",value:"440400"},{label:"汕头市",value:"440500"}],110100:[{label:"东城区",value:"110101"},{label:"西城区",value:"110102"},{label:"朝阳区",value:"110105"},{label:"丰台区",value:"110106"},{label:"石景山区",value:"110107"}],440100:[{label:"荔湾区",value:"440103"},{label:"越秀区",value:"440104"},{label:"海珠区",value:"440105"}],440200:[{label:"武江区",value:"440203"}],440300:[{label:"罗湖区",value:"440303"},{label:"福田区",value:"440304"}],440400:[{label:"香洲区",value:"440402"},{label:"斗门区",value:"440403"},{label:"金湾区",value:"440404"}],440500:[{label:"龙湖区",value:"440507"},{label:"金平区",value:"440511"}]},c=a("选项1"),i=a(["选项1","选项2","选项3","选项4","选项5","选项6","选项7"]),r=a("选项1"),p=a([{label:"选项1"},{label:"选项2"},{label:"选项3",disabled:!0},{label:"选项4"},{label:"选项5"},{label:"选项6"},{label:"选项7"}]),V=a("选项1"),f=a(["选项1","选项2","选项3","选项4","选项5","选项6","选项7"]),g=a(["中南大学","软件工程"]),_=a([["中山大学","中南大学","华南理工大学"],["计算机科学与技术","软件工程","通信工程","法学","经济学"]]),h=a(["110000","110100","110102"]),C=a([b[0],b[b[0][0].value],b[b[b[0][0].value][0].value]]),w=(l,e,a,u)=>{const o=e[a];0===a?(l.setColumnData(1,b[o.value]),l.setColumnData(2,b[b[o.value][0].value])):1===a&&l.setColumnData(2,b[o.value]),u()};function j(l,e){console.log(e)}return(e,a)=>{const b=n(m("wd-picker-view"),l),U=n(m("demo-block"),d),$=n(m("page-wraper"),s);return u(),o($,null,{default:v((()=>[t(U,{title:`基本用法，数值: ${c.value}`},{default:v((()=>[t(b,{modelValue:c.value,"onUpdate:modelValue":a[0]||(a[0]=l=>c.value=l),columns:i.value,onChange:a[1]||(a[1]=l=>j(0,l))},null,8,["modelValue","columns"])])),_:1},8,["title"]),t(U,{title:`禁用选项，数值: ${r.value}`},{default:v((()=>[t(b,{modelValue:r.value,"onUpdate:modelValue":a[2]||(a[2]=l=>r.value=l),columns:p.value,onChange:a[3]||(a[3]=l=>j(0,l))},null,8,["modelValue","columns"])])),_:1},8,["title"]),t(U,{title:`加载中，数值: ${V.value}`},{default:v((()=>[t(b,{modelValue:V.value,"onUpdate:modelValue":a[4]||(a[4]=l=>V.value=l),columns:f.value,loading:"",onChange:a[5]||(a[5]=l=>j(0,l))},null,8,["modelValue","columns"])])),_:1},8,["title"]),t(U,{title:`多列，数值: [${g.value}]`},{default:v((()=>[t(b,{modelValue:g.value,"onUpdate:modelValue":a[6]||(a[6]=l=>g.value=l),columns:_.value,onChange:a[7]||(a[7]=l=>j(0,l))},null,8,["modelValue","columns"])])),_:1},8,["title"]),t(U,{title:`多级联动，数值: [${h.value}]`},{default:v((()=>[t(b,{modelValue:h.value,"onUpdate:modelValue":a[8]||(a[8]=l=>h.value=l),columns:C.value,"column-change":w,onChange:a[9]||(a[9]=l=>j(0,l))},null,8,["modelValue","columns"])])),_:1},8,["title"])])),_:1})}}});export{b as default};
