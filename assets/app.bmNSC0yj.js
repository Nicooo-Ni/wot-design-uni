import{a6 as s,aw as p,ax as u,ay as l,az as c,aA as f,aB as d,aC as m,aD as h,aE as A,aF as g,ao as P,y as _,a2 as v,b as y,m as w,aG as C,aH as E,aI as R,V as b}from"./chunks/framework.CR_kDkbU.js";import{R as T}from"./chunks/theme.CK9HGgTl.js";function i(e){if(e.extends){const a=i(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const o=i(T),D=_({name:"VitePressApp",setup(){const{site:e,lang:a,dir:t}=v();return y(()=>{w(()=>{document.documentElement.lang=a.value,document.documentElement.dir=t.value})}),e.value.router.prefetchLinks&&C(),E(),R(),o.setup&&o.setup(),()=>b(o.Layout)}});async function S(){globalThis.__VITEPRESS__=!0;const e=x(),a=V();a.provide(u,e);const t=l(e.route);return a.provide(c,t),a.component("Content",f),a.component("ClientOnly",d),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),o.enhanceApp&&await o.enhanceApp({app:a,router:e,siteData:m}),{app:a,router:e,data:t}}function V(){return h(D)}function x(){let e=s,a;return A(t=>{let n=g(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=P(()=>import(n),[])),s&&(e=!1),r},o.NotFound)}s&&S().then(({app:e,router:a,data:t})=>{a.go().then(()=>{p(a.route,t.site),e.mount("#app")})});export{S as createApp};
