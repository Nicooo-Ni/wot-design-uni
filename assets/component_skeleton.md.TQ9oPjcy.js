import{a1 as i,X as a,e as t,O as h,ar as n,d as l}from"./chunks/framework.CR_kDkbU.js";const c=JSON.parse('{"title":"Skeleton 骨架屏","description":"","frontmatter":{},"headers":[],"relativePath":"component/skeleton.md","filePath":"component/skeleton.md","lastUpdated":1716438463000}'),k={name:"component/skeleton.md"},p=n(`<h1 id="skeleton-骨架屏" tabindex="-1">Skeleton 骨架屏 <a class="header-anchor" href="#skeleton-骨架屏" aria-label="Permalink to &quot;Skeleton 骨架屏&quot;">​</a></h1><p>用于等待加载内容所展示的占位图形组合，有动态效果加载效果，减少用户等待焦虑。</p><h2 id="骨架图风格" tabindex="-1">骨架图风格 <a class="header-anchor" href="#骨架图风格" aria-label="Permalink to &quot;骨架图风格&quot;">​</a></h2><p>支持 <code>avatar</code>、<code>image</code>、<code>text</code>、<code>paragraph</code> 四种类型。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">// 头像骨架屏</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-skeleton</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> theme</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;avatar&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">// 图片骨架屏</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-skeleton</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> theme</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;image&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">// 文本骨架屏</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-skeleton</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> theme</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">// 段落骨架屏</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-skeleton</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> theme</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;paragraph&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><h2 id="宫格骨架屏" tabindex="-1">宫格骨架屏 <a class="header-anchor" href="#宫格骨架屏" aria-label="Permalink to &quot;宫格骨架屏&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-skeleton</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :row-col</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;grid&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> grid</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { width: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;48px&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, height: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;48px&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { width: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;48px&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, height: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;48px&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { width: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;48px&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, height: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;48px&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { width: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;48px&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, height: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;48px&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { width: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;48px&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, height: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;48px&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { width: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;48px&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, height: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;16px&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { width: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;48px&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, height: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;16px&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { width: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;48px&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, height: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;16px&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { width: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;48px&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, height: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;16px&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { width: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;48px&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, height: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;16px&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><h2 id="单元格骨架屏" tabindex="-1">单元格骨架屏 <a class="header-anchor" href="#单元格骨架屏" aria-label="Permalink to &quot;单元格骨架屏&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">view</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;display: flex&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-skeleton</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :row-col</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;[{ size: &#39;48px&#39;, type: &#39;circle&#39; }]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-skeleton</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :custom-style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{ width: &#39;100%&#39;, marginLeft: &#39;12px&#39; }&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :row-col</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;[{ width: &#39;50%&#39; }, { width: &#39;100%&#39; }]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">view</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">view</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;display: flex; margin-top: 20px&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-skeleton</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :row-col</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;[{ size: &#39;48px&#39;, type: &#39;rect&#39; }]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-skeleton</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :custom-style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{ width: &#39;100%&#39;, marginLeft: &#39;12px&#39; }&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :row-col</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;[{ width: &#39;50%&#39; }, { width: &#39;100%&#39; }]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">view</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="图片组合骨架屏" tabindex="-1">图片组合骨架屏 <a class="header-anchor" href="#图片组合骨架屏" aria-label="Permalink to &quot;图片组合骨架屏&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">view</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-skeleton</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :row-col</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;imageGroup&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-skeleton</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :custom-style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{ marginTop: &#39;20px&#39; }&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :row-col</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;imageGroup&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">view</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> imageGroup</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { height: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;171px&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, { width: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;107px&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }, </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  [{ width: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;93px&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }, { width: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;32px&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, marginLeft: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;41px&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><h2 id="加载动画" tabindex="-1">加载动画 <a class="header-anchor" href="#加载动画" aria-label="Permalink to &quot;加载动画&quot;">​</a></h2><p>支持 <code>gradient</code>、<code>flashed</code></p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-skeleton</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> animation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;gradient&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> theme</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;paragraph&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">view</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;display: flex&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-skeleton</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :row-col</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;[{ size: &#39;48px&#39;, type: &#39;circle&#39; }]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-skeleton</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :custom-style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{ width: &#39;100%&#39;, marginLeft: &#39;12px&#39; }&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> animation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;flashed&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> theme</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;paragraph&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">view</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="插槽内容" tabindex="-1">插槽内容 <a class="header-anchor" href="#插槽内容" aria-label="Permalink to &quot;插槽内容&quot;">​</a></h2><p>可以通过插槽写入展示的内容，当请求结束，将loading设置为false，此时会隐藏骨架组件，同时展示插槽内容。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-skeleton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  :row-col</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;[</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      { width: &#39;48px&#39;, height: &#39;48px&#39; },</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      { width: &#39;48px&#39;, height: &#39;48px&#39; },</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      { width: &#39;48px&#39;, height: &#39;48px&#39; },</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      { width: &#39;48px&#39;, height: &#39;48px&#39; },</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      { width: &#39;48px&#39;, height: &#39;48px&#39; }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    ],</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      { width: &#39;48px&#39;, height: &#39;16px&#39; },</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      { width: &#39;48px&#39;, height: &#39;16px&#39; },</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      { width: &#39;48px&#39;, height: &#39;16px&#39; },</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      { width: &#39;48px&#39;, height: &#39;16px&#39; },</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      { width: &#39;48px&#39;, height: &#39;16px&#39; }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    ]</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  ]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  :loading</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;showContent&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-grid</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-grid-item</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> icon-size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;32px&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> icon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;picture&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;文字&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-grid-item</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> icon-size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;32px&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> icon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;picture&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;文字&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-grid-item</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> icon-size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;32px&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> icon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;picture&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;文字&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-grid-item</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> icon-size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;32px&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> icon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;picture&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;文字&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-grid-item</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> icon-size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;32px&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> icon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;picture&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;文字&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-grid</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-skeleton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> showContent</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;">​</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th><th>最低版本</th></tr></thead><tbody><tr><td>theme</td><td>骨架图风格</td><td>SkeletonTheme</td><td><code>text</code> <code>avatar</code> <code>paragraph</code> <code>image</code></td><td>-</td><td>-</td></tr><tr><td>rowCol</td><td>用于设置行列数量、宽度高度、间距等<br>【示例一】<code>[1, 1, 2]</code> 表示输出三行骨架图，第一行一列，第二行一列，第三行两列。 <br>【示例二】<code>[1, 1, { width: &#39;100px&#39; }]</code> 表示自定义第三行的宽度为 <code>100px</code>。 <br>【示例三】<code>[1, 2, [{ width, height }, { width, height, marginLeft }]]</code> 表示第三行有两列，且自定义宽度、高度和间距</td><td>SkeletonRowCol</td><td>-</td><td>-</td><td>-</td></tr><tr><td>loading</td><td>是否为加载状态，如果是则显示骨架图，如果不是则显示加载完成的内容</td><td>boolean</td><td>-</td><td>true</td><td>-</td></tr><tr><td>animation</td><td>动画效果</td><td>SkeletonAnimation</td><td><code>gradient</code> <code>flashed</code></td><td>-</td><td>-</td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h2><table><thead><tr><th>name</th><th>说明</th><th>最低版本</th></tr></thead><tbody><tr><td>default</td><td>loading结束后展示内容</td><td>1.2.21</td></tr></tbody></table>`,24);function e(E,d,r,g,y,o){const s=a("frame");return l(),t("div",null,[h(s),p])}const u=i(k,[["render",e]]);export{c as __pageData,u as default};
