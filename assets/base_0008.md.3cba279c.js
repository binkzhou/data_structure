import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.91000686.js";const u=JSON.parse('{"title":"共用体","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"base/0008.md","filePath":"base/0008.md"}'),l={name:"base/0008.md"},o=p(`<h1 id="共用体" tabindex="-1">共用体 <a class="header-anchor" href="#共用体" aria-label="Permalink to &quot;共用体&quot;">​</a></h1><p>在 C 语言中，<code>union</code> 是一种特殊的数据类型，它允许在相同的内存位置存储不同的数据类型。你可以把它看作是一个结构体，但是所有的成员共享同一块内存空间。</p><p><code>union</code> 的主要用途是节省内存，特别是当你有多个成员，但是任何时候只使用其中一个的时候。</p><h2 id="内存占用" tabindex="-1">内存占用 <a class="header-anchor" href="#内存占用" aria-label="Permalink to &quot;内存占用&quot;">​</a></h2><p>共用体占用的内存应足够存储共用体中最大的成员。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">#include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&lt;stdio.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">union</span><span style="color:#E1E4E8;"> Data</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i;</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">float</span><span style="color:#E1E4E8;"> f;</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">char</span><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">str</span><span style="color:#E1E4E8;">[</span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">union</span><span style="color:#E1E4E8;"> Data data;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">( </span><span style="color:#9ECBFF;">&quot;内存占用大小 : </span><span style="color:#79B8FF;">%d\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">sizeof</span><span style="color:#E1E4E8;">(data));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&lt;stdio.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">union</span><span style="color:#24292E;"> Data</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i;</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;">float</span><span style="color:#24292E;"> f;</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;">char</span><span style="color:#24292E;">  </span><span style="color:#E36209;">str</span><span style="color:#24292E;">[</span><span style="color:#005CC5;">20</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;">union</span><span style="color:#24292E;"> Data data;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">( </span><span style="color:#032F62;">&quot;内存占用大小 : </span><span style="color:#005CC5;">%d\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">sizeof</span><span style="color:#24292E;">(data));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>输出</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">内存占用大小 : </span><span style="color:#79B8FF;">20</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">内存占用大小 : </span><span style="color:#005CC5;">20</span></span></code></pre></div><h2 id="访问共用体成员" tabindex="-1">访问共用体成员 <a class="header-anchor" href="#访问共用体成员" aria-label="Permalink to &quot;访问共用体成员&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">INFO</p><p>最后修改的是 str，因此只能访问到 str 的值。</p></div><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">#include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&lt;stdio.h&gt;</span></span>
<span class="line"><span style="color:#F97583;">#include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&lt;string.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">union</span><span style="color:#E1E4E8;"> Data</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i;</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">float</span><span style="color:#E1E4E8;"> f;</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">char</span><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">str</span><span style="color:#E1E4E8;">[</span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">union</span><span style="color:#E1E4E8;"> Data data;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">   data.i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">   data.f </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">220.5</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">strcpy</span><span style="color:#E1E4E8;">( data.str, </span><span style="color:#9ECBFF;">&quot;C Programming&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">( </span><span style="color:#9ECBFF;">&quot;data.i : </span><span style="color:#79B8FF;">%d\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, data.i);</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">( </span><span style="color:#9ECBFF;">&quot;data.f : </span><span style="color:#79B8FF;">%f\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, data.f);</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">( </span><span style="color:#9ECBFF;">&quot;data.str : </span><span style="color:#79B8FF;">%s\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, data.str);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&lt;stdio.h&gt;</span></span>
<span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&lt;string.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">union</span><span style="color:#24292E;"> Data</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i;</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;">float</span><span style="color:#24292E;"> f;</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;">char</span><span style="color:#24292E;">  </span><span style="color:#E36209;">str</span><span style="color:#24292E;">[</span><span style="color:#005CC5;">20</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;">union</span><span style="color:#24292E;"> Data data;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">   data.i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">   data.f </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">220.5</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6F42C1;">strcpy</span><span style="color:#24292E;">( data.str, </span><span style="color:#032F62;">&quot;C Programming&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">( </span><span style="color:#032F62;">&quot;data.i : </span><span style="color:#005CC5;">%d\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, data.i);</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">( </span><span style="color:#032F62;">&quot;data.f : </span><span style="color:#005CC5;">%f\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, data.f);</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">( </span><span style="color:#032F62;">&quot;data.str : </span><span style="color:#005CC5;">%s\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, data.str);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>输出</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">data.i : </span><span style="color:#79B8FF;">1917853763</span></span>
<span class="line"><span style="color:#E1E4E8;">data.f : </span><span style="color:#79B8FF;">4122360580327794860452759994368.000000</span></span>
<span class="line"><span style="color:#E1E4E8;">data.str : C Programming</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">data.i : </span><span style="color:#005CC5;">1917853763</span></span>
<span class="line"><span style="color:#24292E;">data.f : </span><span style="color:#005CC5;">4122360580327794860452759994368.000000</span></span>
<span class="line"><span style="color:#24292E;">data.str : C Programming</span></span></code></pre></div>`,13),e=[o];function t(c,r,E,y,i,d){return a(),n("div",null,e)}const C=s(l,[["render",t]]);export{u as __pageData,C as default};
