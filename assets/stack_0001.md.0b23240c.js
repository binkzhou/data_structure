import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.942a5a68.js";const l="/data_structure/assets/image-20231116152720657.ccfb2bf1.png",o="/data_structure/assets/image-20231116152649440.e11af1a5.png",e="/data_structure/assets/image-20231116152616608.fbac6178.png",c="/data_structure/assets/image-20231116152807476.7406898c.png",t="/data_structure/assets/image-20231116152855540.c28d1dc7.png",r="/data_structure/assets/image-20231116152956853.f8a0db95.png",E="/data_structure/assets/image-20231116153120273.41f8d616.png",y="/data_structure/assets/image-20231116153213217.0e848ec8.png",i="/data_structure/assets/image-20231116153331033.e5248b46.png",m=JSON.parse('{"title":"栈的顺序存储结构","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"stack/0001.md","filePath":"stack/0001.md"}'),S={name:"stack/0001.md"},A=p(`<h1 id="栈的顺序存储结构" tabindex="-1">栈的顺序存储结构 <a class="header-anchor" href="#栈的顺序存储结构" aria-label="Permalink to &quot;栈的顺序存储结构&quot;">​</a></h1><h2 id="结构定义" tabindex="-1">结构定义 <a class="header-anchor" href="#结构定义" aria-label="Permalink to &quot;结构定义&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/* 宏定义 */</span></span>
<span class="line"><span style="color:#F97583;">#define</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">STACK_INIT_SIZE</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">100</span><span style="color:#6A737D;">    // 顺序栈存储空间的初始分配量</span></span>
<span class="line"><span style="color:#F97583;">#define</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">STACK_INCREMENT</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">10</span><span style="color:#6A737D;">     // 顺序栈存储空间的分配增量</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 顺序栈元素类型定义 */</span></span>
<span class="line"><span style="color:#F97583;">typedef</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> SElemType;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 顺序栈元素结构</span></span>
<span class="line"><span style="color:#F97583;">typedef</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    SElemType </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">base;</span><span style="color:#6A737D;">    // 栈底指针</span></span>
<span class="line"><span style="color:#E1E4E8;">    SElemType </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">top;</span><span style="color:#6A737D;">     // 栈顶指针</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> stackSize;</span><span style="color:#6A737D;">      // 当前已分配的存储空间，元素为单位</span></span>
<span class="line"><span style="color:#E1E4E8;">} SqStack;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/* 宏定义 */</span></span>
<span class="line"><span style="color:#D73A49;">#define</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">STACK_INIT_SIZE</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">100</span><span style="color:#6A737D;">    // 顺序栈存储空间的初始分配量</span></span>
<span class="line"><span style="color:#D73A49;">#define</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">STACK_INCREMENT</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span><span style="color:#6A737D;">     // 顺序栈存储空间的分配增量</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 顺序栈元素类型定义 */</span></span>
<span class="line"><span style="color:#D73A49;">typedef</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> SElemType;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 顺序栈元素结构</span></span>
<span class="line"><span style="color:#D73A49;">typedef</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">struct</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    SElemType </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">base;</span><span style="color:#6A737D;">    // 栈底指针</span></span>
<span class="line"><span style="color:#24292E;">    SElemType </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">top;</span><span style="color:#6A737D;">     // 栈顶指针</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> stackSize;</span><span style="color:#6A737D;">      // 当前已分配的存储空间，元素为单位</span></span>
<span class="line"><span style="color:#24292E;">} SqStack;</span></span></code></pre></div><p><img src="`+l+'" alt="image-20231116152720657"></p><p>栈顶指针永远指向下一个地址</p><h2 id="初始化" tabindex="-1">初始化 <a class="header-anchor" href="#初始化" aria-label="Permalink to &quot;初始化&quot;">​</a></h2><p><img src="'+o+'" alt="image-20231116152649440"></p><p>初始化时栈顶指针指向栈底</p><p>内存结构图</p><p><img src="'+e+`" alt="image-20231116152616608"></p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 构造一个空栈。初始化成功则返回OK，否则返回ERROR。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">InitStack</span><span style="color:#E1E4E8;">(SqStack</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">S</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(S </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 分配栈空间</span></span>
<span class="line"><span style="color:#E1E4E8;">    S-&gt;base </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (SElemType </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">) </span><span style="color:#B392F0;">malloc</span><span style="color:#E1E4E8;">(STACK_INIT_SIZE </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">sizeof</span><span style="color:#E1E4E8;"> (SqStack));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 分配空间失败</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(S-&gt;base </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 栈顶指针指向栈底指针</span></span>
<span class="line"><span style="color:#E1E4E8;">    S-&gt;top </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> S-&gt;base;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 栈空间大小</span></span>
<span class="line"><span style="color:#E1E4E8;">    S-&gt;stackSize </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> STACK_INIT_SIZE;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 构造一个空栈。初始化成功则返回OK，否则返回ERROR。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">InitStack</span><span style="color:#24292E;">(SqStack</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">S</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(S </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 分配栈空间</span></span>
<span class="line"><span style="color:#24292E;">    S-&gt;base </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (SElemType </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">) </span><span style="color:#6F42C1;">malloc</span><span style="color:#24292E;">(STACK_INIT_SIZE </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">sizeof</span><span style="color:#24292E;"> (SqStack));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 分配空间失败</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(S-&gt;base </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">exit</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 栈顶指针指向栈底指针</span></span>
<span class="line"><span style="color:#24292E;">    S-&gt;top </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> S-&gt;base;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 栈空间大小</span></span>
<span class="line"><span style="color:#24292E;">    S-&gt;stackSize </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> STACK_INIT_SIZE;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="销毁" tabindex="-1">销毁 <a class="header-anchor" href="#销毁" aria-label="Permalink to &quot;销毁&quot;">​</a></h2><p><img src="`+c+`" alt="image-20231116152807476"></p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 释放顺序栈所占内存。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">DestroyStack</span><span style="color:#E1E4E8;">(SqStack</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">S</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(S </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 释放栈底指针指向的空间</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">free</span><span style="color:#E1E4E8;">(S-&gt;base);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    S-&gt;base </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    S-&gt;top </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    S-&gt;stackSize </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 释放顺序栈所占内存。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">DestroyStack</span><span style="color:#24292E;">(SqStack</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">S</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(S </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 释放栈底指针指向的空间</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">free</span><span style="color:#24292E;">(S-&gt;base);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    S-&gt;base </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    S-&gt;top </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    S-&gt;stackSize </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="置空" tabindex="-1">置空 <a class="header-anchor" href="#置空" aria-label="Permalink to &quot;置空&quot;">​</a></h2><p><img src="`+t+`" alt="image-20231116152855540"></p><p>置空时：栈顶指向栈底</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 只是清理顺序栈中存储的数据，不释放顺序栈所占内存。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">ClearStack</span><span style="color:#E1E4E8;">(SqStack</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">S</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 栈不存在</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(S </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> S-&gt;base </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    S-&gt;top </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> S-&gt;base;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 只是清理顺序栈中存储的数据，不释放顺序栈所占内存。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">ClearStack</span><span style="color:#24292E;">(SqStack</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">S</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 栈不存在</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(S </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> S-&gt;base </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    S-&gt;top </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> S-&gt;base;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="判空" tabindex="-1">判空 <a class="header-anchor" href="#判空" aria-label="Permalink to &quot;判空&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 判断顺序栈中是否包含有效数据。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">StackEmpty</span><span style="color:#E1E4E8;">(SqStack </span><span style="color:#FFAB70;">S</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 栈顶指针等于栈底指针时为空</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(S.top </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> S.base){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">TRUE</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 判断顺序栈中是否包含有效数据。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">StackEmpty</span><span style="color:#24292E;">(SqStack </span><span style="color:#E36209;">S</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 栈顶指针等于栈底指针时为空</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(S.top </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> S.base){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">TRUE</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="计数" tabindex="-1">计数 <a class="header-anchor" href="#计数" aria-label="Permalink to &quot;计数&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 返回顺序栈包含的有效元素的数量。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">StackLength</span><span style="color:#E1E4E8;">(SqStack </span><span style="color:#FFAB70;">S</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(S.base </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 栈顶指针-栈底指针</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">)(S.top </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> S.base);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 返回顺序栈包含的有效元素的数量。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">StackLength</span><span style="color:#24292E;">(SqStack </span><span style="color:#E36209;">S</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(S.base </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 栈顶指针-栈底指针</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">int</span><span style="color:#24292E;">)(S.top </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> S.base);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="取值" tabindex="-1">取值 <a class="header-anchor" href="#取值" aria-label="Permalink to &quot;取值&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 返回栈顶元素，并用e接收。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">GetTop</span><span style="color:#E1E4E8;">(SqStack </span><span style="color:#FFAB70;">S</span><span style="color:#E1E4E8;">, SElemType</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(S.base </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> S.top </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> S.base) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 不会改变栈中元素</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">e </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">(S.top </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 返回栈顶元素，并用e接收。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">GetTop</span><span style="color:#24292E;">(SqStack </span><span style="color:#E36209;">S</span><span style="color:#24292E;">, SElemType</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">e</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(S.base </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> S.top </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> S.base) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 不会改变栈中元素</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">e </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">(S.top </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="入栈" tabindex="-1">入栈 <a class="header-anchor" href="#入栈" aria-label="Permalink to &quot;入栈&quot;">​</a></h2><p>依次入栈2,4,6,8,10,12</p><p><img src="`+r+'" alt="image-20231116152956853"></p><p>内存结构图</p><p><img src="'+E+'" alt="image-20231116153120273"></p><p><img src="'+y+`" alt="image-20231116153213217"></p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 将元素e压入到栈顶。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">Push</span><span style="color:#E1E4E8;">(SqStack</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">S</span><span style="color:#E1E4E8;">, SElemType </span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(S </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">S).base </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 栈满时，追加存储空间</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(S-&gt;top </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> S-&gt;base </span><span style="color:#F97583;">&gt;=</span><span style="color:#E1E4E8;"> S-&gt;stackSize){</span></span>
<span class="line"><span style="color:#E1E4E8;">        S-&gt;base </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (SElemType</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">) </span><span style="color:#B392F0;">realloc</span><span style="color:#E1E4E8;">(S-&gt;base,(S-&gt;stackSize </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> STACK_INCREMENT) </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">sizeof</span><span style="color:#E1E4E8;">(SElemType));</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">((</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">S).base </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        S-&gt;top </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> S-&gt;base </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> S-&gt;stackSize;</span><span style="color:#6A737D;"> // 指向下一个地址</span></span>
<span class="line"><span style="color:#E1E4E8;">        S-&gt;stackSize </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> S-&gt;stackSize </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> STACK_INCREMENT;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 进栈操作</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">(S-&gt;top) </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> e;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 移动到下一个地址</span></span>
<span class="line"><span style="color:#E1E4E8;">    S-&gt;top</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 将元素e压入到栈顶。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">Push</span><span style="color:#24292E;">(SqStack</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">S</span><span style="color:#24292E;">, SElemType </span><span style="color:#E36209;">e</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(S </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">S).base </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 栈满时，追加存储空间</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(S-&gt;top </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> S-&gt;base </span><span style="color:#D73A49;">&gt;=</span><span style="color:#24292E;"> S-&gt;stackSize){</span></span>
<span class="line"><span style="color:#24292E;">        S-&gt;base </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (SElemType</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">) </span><span style="color:#6F42C1;">realloc</span><span style="color:#24292E;">(S-&gt;base,(S-&gt;stackSize </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> STACK_INCREMENT) </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">sizeof</span><span style="color:#24292E;">(SElemType));</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">((</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">S).base </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">exit</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        S-&gt;top </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> S-&gt;base </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> S-&gt;stackSize;</span><span style="color:#6A737D;"> // 指向下一个地址</span></span>
<span class="line"><span style="color:#24292E;">        S-&gt;stackSize </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> S-&gt;stackSize </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> STACK_INCREMENT;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 进栈操作</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">(S-&gt;top) </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> e;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 移动到下一个地址</span></span>
<span class="line"><span style="color:#24292E;">    S-&gt;top</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="出栈" tabindex="-1">出栈 <a class="header-anchor" href="#出栈" aria-label="Permalink to &quot;出栈&quot;">​</a></h2><p><img src="`+i+`" alt="image-20231116153331033"></p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 将栈顶元素弹出，并用e接收。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">Pop</span><span style="color:#E1E4E8;">(SqStack</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">S</span><span style="color:#E1E4E8;">, SElemType</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(S </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">S).base </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 没有元素了</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">((</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">S).top </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">S).base){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 出栈栈顶指针先递减，再赋值</span></span>
<span class="line"><span style="color:#E1E4E8;">    S-&gt;top</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 获取top指针指向的值</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">e </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">(S-&gt;top);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 将栈顶元素弹出，并用e接收。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">Pop</span><span style="color:#24292E;">(SqStack</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">S</span><span style="color:#24292E;">, SElemType</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">e</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(S </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">S).base </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 没有元素了</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">((</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">S).top </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">S).base){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 出栈栈顶指针先递减，再赋值</span></span>
<span class="line"><span style="color:#24292E;">    S-&gt;top</span><span style="color:#D73A49;">--</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 获取top指针指向的值</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">e </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">(S-&gt;top);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="遍历" tabindex="-1">遍历 <a class="header-anchor" href="#遍历" aria-label="Permalink to &quot;遍历&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 用visit函数访问顺序栈S</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">StackTraverse</span><span style="color:#E1E4E8;">(SqStack </span><span style="color:#FFAB70;">S</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;">(Visit)(SElemType)){</span></span>
<span class="line"><span style="color:#E1E4E8;">    SElemType </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> S.base;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(S.base </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 从栈底向栈底遍历</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> (p </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> S.top){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">Visit</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">p);</span></span>
<span class="line"><span style="color:#E1E4E8;">        p</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 用visit函数访问顺序栈S</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">StackTraverse</span><span style="color:#24292E;">(SqStack </span><span style="color:#E36209;">S</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">void</span><span style="color:#24292E;">(Visit)(SElemType)){</span></span>
<span class="line"><span style="color:#24292E;">    SElemType </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> S.base;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(S.base </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 从栈底向栈底遍历</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (p </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> S.top){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">Visit</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">p);</span></span>
<span class="line"><span style="color:#24292E;">        p</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,36),F=[A];function D(d,g,u,h,b,C){return n(),a("div",null,F)}const _=s(S,[["render",D]]);export{m as __pageData,_ as default};
