import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.91000686.js";const D=JSON.parse('{"title":"串的堆分配存储表示","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"sstring/0002.md","filePath":"sstring/0002.md"}'),p={name:"sstring/0002.md"},o=l(`<h1 id="串的堆分配存储表示" tabindex="-1">串的堆分配存储表示 <a class="header-anchor" href="#串的堆分配存储表示" aria-label="Permalink to &quot;串的堆分配存储表示&quot;">​</a></h1><p>堆: 用于动态内存分配。这种堆是由 C 语言的 malloc 和 free，或者 C++的 new 和 delete 等函数进行管理的。这种堆是一种自由存储区，程序员可以在运行时动态地分配和释放内存。</p><p>堆存储是不连续的。在堆中，当你请求分配一块内存时，操作系统会在堆中找到一块足够大的空闲内存块并将其分配给你。这个过程是动态的，因此分配的内存块可能在物理内存中的位置并不连续。这与栈不同，栈是连续的内存区域。</p><h2 id="结构定义" tabindex="-1">结构定义 <a class="header-anchor" href="#结构定义" aria-label="Permalink to &quot;结构定义&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 注：有效元素从ch的0号单元开始存储</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">typedef</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">char*</span><span style="color:#E1E4E8;"> ch;</span><span style="color:#6A737D;"> // 若是非空串，则按串长分配存储区，否则ch为NULL</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> length;</span></span>
<span class="line"><span style="color:#E1E4E8;">} HString;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 注：有效元素从ch的0号单元开始存储</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">typedef</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">struct</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">char*</span><span style="color:#24292E;"> ch;</span><span style="color:#6A737D;"> // 若是非空串，则按串长分配存储区，否则ch为NULL</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> length;</span></span>
<span class="line"><span style="color:#24292E;">} HString;</span></span></code></pre></div><h2 id="初始化" tabindex="-1">初始化 <a class="header-anchor" href="#初始化" aria-label="Permalink to &quot;初始化&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 构造一个值为chars的串T。</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> *【注】</span></span>
<span class="line"><span style="color:#6A737D;"> * 该操作属于最小操作子集</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">StrAssign</span><span style="color:#E1E4E8;">(HString</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">T</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">char*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">chars</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i,j;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 求chars的长度</span></span>
<span class="line"><span style="color:#E1E4E8;">    i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">) </span><span style="color:#B392F0;">strlen</span><span style="color:#E1E4E8;">(chars);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 没有有效元素</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">        T-&gt;ch </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        T-&gt;length </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 存在有效元素时，需要分配存储空间</span></span>
<span class="line"><span style="color:#E1E4E8;">    T-&gt;ch </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">char</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">) </span><span style="color:#B392F0;">malloc</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">sizeof</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">char</span><span style="color:#E1E4E8;"> ));</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">(T-&gt;ch)){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> i; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">        T-&gt;ch[j] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">chars</span><span style="color:#E1E4E8;">[j];</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    T-&gt;length </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> i;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 构造一个值为chars的串T。</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> *【注】</span></span>
<span class="line"><span style="color:#6A737D;"> * 该操作属于最小操作子集</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">StrAssign</span><span style="color:#24292E;">(HString</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">T</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">char*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">chars</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i,j;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 求chars的长度</span></span>
<span class="line"><span style="color:#24292E;">    i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">int</span><span style="color:#24292E;">) </span><span style="color:#6F42C1;">strlen</span><span style="color:#24292E;">(chars);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 没有有效元素</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        T-&gt;ch </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        T-&gt;length </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 存在有效元素时，需要分配存储空间</span></span>
<span class="line"><span style="color:#24292E;">    T-&gt;ch </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">char</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">) </span><span style="color:#6F42C1;">malloc</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">sizeof</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">char</span><span style="color:#24292E;"> ));</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">(T-&gt;ch)){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">exit</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; j </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> i; j</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        T-&gt;ch[j] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#E36209;">chars</span><span style="color:#24292E;">[j];</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    T-&gt;length </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> i;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="销毁" tabindex="-1">销毁 <a class="header-anchor" href="#销毁" aria-label="Permalink to &quot;销毁&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 将串S销毁。</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> *【注】</span></span>
<span class="line"><span style="color:#6A737D;"> * 堆串的结构可以销毁，但不是在销毁操作中</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">DestroyString</span><span style="color:#E1E4E8;">(HString</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">S</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 将串S销毁。</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> *【注】</span></span>
<span class="line"><span style="color:#6A737D;"> * 堆串的结构可以销毁，但不是在销毁操作中</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">DestroyString</span><span style="color:#24292E;">(HString</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">S</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="清空" tabindex="-1">清空 <a class="header-anchor" href="#清空" aria-label="Permalink to &quot;清空&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 将串S清空。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">ClearString</span><span style="color:#E1E4E8;">(HString</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">S</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 没有有效元素时，销毁堆串结构</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(S-&gt;ch </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">free</span><span style="color:#E1E4E8;">(S-&gt;ch);</span></span>
<span class="line"><span style="color:#E1E4E8;">        S-&gt;ch </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    S-&gt;length </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 将串S清空。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">ClearString</span><span style="color:#24292E;">(HString</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">S</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 没有有效元素时，销毁堆串结构</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(S-&gt;ch </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">free</span><span style="color:#24292E;">(S-&gt;ch);</span></span>
<span class="line"><span style="color:#24292E;">        S-&gt;ch </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    S-&gt;length </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="判空" tabindex="-1">判空 <a class="header-anchor" href="#判空" aria-label="Permalink to &quot;判空&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 判断串S中是否包含有效数据。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">StrEmpty</span><span style="color:#E1E4E8;">(HString </span><span style="color:#FFAB70;">S</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> S.length </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">TRUE</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">FALSE</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 判断串S中是否包含有效数据。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">StrEmpty</span><span style="color:#24292E;">(HString </span><span style="color:#E36209;">S</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> S.length </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">TRUE</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">FALSE</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="计数" tabindex="-1">计数 <a class="header-anchor" href="#计数" aria-label="Permalink to &quot;计数&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 返回串S中元素的个数。</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> *【注】</span></span>
<span class="line"><span style="color:#6A737D;"> * 该操作属于最小操作子集</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">StrLength</span><span style="color:#E1E4E8;">(HString </span><span style="color:#FFAB70;">S</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> S.length;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 返回串S中元素的个数。</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> *【注】</span></span>
<span class="line"><span style="color:#6A737D;"> * 该操作属于最小操作子集</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">StrLength</span><span style="color:#24292E;">(HString </span><span style="color:#E36209;">S</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> S.length;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="复制" tabindex="-1">复制 <a class="header-anchor" href="#复制" aria-label="Permalink to &quot;复制&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 将串S复制到串T。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">StrCopy</span><span style="color:#E1E4E8;">(HString</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">T</span><span style="color:#E1E4E8;">, HString </span><span style="color:#FFAB70;">S</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">StrEmpty</span><span style="color:#E1E4E8;">(S)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T).ch </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T).length </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 分配空间</span></span>
<span class="line"><span style="color:#E1E4E8;">        (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T).ch </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">char*</span><span style="color:#E1E4E8;">) </span><span style="color:#B392F0;">malloc</span><span style="color:#E1E4E8;">(S.length </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">sizeof</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">char</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T).ch) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 复制元素</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> S.length; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T).ch[i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> S.ch[i];</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 复制长度信息</span></span>
<span class="line"><span style="color:#E1E4E8;">        (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T).length </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> S.length;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 将串S复制到串T。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">StrCopy</span><span style="color:#24292E;">(HString</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">T</span><span style="color:#24292E;">, HString </span><span style="color:#E36209;">S</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">StrEmpty</span><span style="color:#24292E;">(S)) {</span></span>
<span class="line"><span style="color:#24292E;">        (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T).ch </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T).length </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 分配空间</span></span>
<span class="line"><span style="color:#24292E;">        (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T).ch </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">char*</span><span style="color:#24292E;">) </span><span style="color:#6F42C1;">malloc</span><span style="color:#24292E;">(S.length </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">sizeof</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">char</span><span style="color:#24292E;">));</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T).ch) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">exit</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 复制元素</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> S.length; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T).ch[i] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> S.ch[i];</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 复制长度信息</span></span>
<span class="line"><span style="color:#24292E;">        (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T).length </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> S.length;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="比较" tabindex="-1">比较 <a class="header-anchor" href="#比较" aria-label="Permalink to &quot;比较&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 比较串S和串T，返回比较结果。</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> *【注】</span></span>
<span class="line"><span style="color:#6A737D;"> * 该操作属于最小操作子集</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">StrCompare</span><span style="color:#E1E4E8;">(HString </span><span style="color:#FFAB70;">S</span><span style="color:#E1E4E8;">, HString </span><span style="color:#FFAB70;">T</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> S.length </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> T.length; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 遇到不同的字符时，比较其大小</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(S.ch[i] </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> T.ch[i]) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> S.ch[i] </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> T.ch[i];</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> S.length </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> T.length;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 比较串S和串T，返回比较结果。</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> *【注】</span></span>
<span class="line"><span style="color:#6A737D;"> * 该操作属于最小操作子集</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">StrCompare</span><span style="color:#24292E;">(HString </span><span style="color:#E36209;">S</span><span style="color:#24292E;">, HString </span><span style="color:#E36209;">T</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> S.length </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> T.length; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 遇到不同的字符时，比较其大小</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(S.ch[i] </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> T.ch[i]) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> S.ch[i] </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> T.ch[i];</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> S.length </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> T.length;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="插入" tabindex="-1">插入 <a class="header-anchor" href="#插入" aria-label="Permalink to &quot;插入&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 将串T插入到主串S的pos位置处。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">StrInsert</span><span style="color:#E1E4E8;">(HString</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">S</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">pos</span><span style="color:#E1E4E8;">, HString </span><span style="color:#FFAB70;">T</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(pos </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> pos </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> S-&gt;length </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 如果待插入的串为空，则提前返回</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">StrEmpty</span><span style="color:#E1E4E8;">(T)){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 分配新空间</span></span>
<span class="line"><span style="color:#E1E4E8;">    S-&gt;ch </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">char</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">) </span><span style="color:#B392F0;">realloc</span><span style="color:#E1E4E8;">(S-&gt;ch,(S-&gt;length </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> T.length) </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">sizeof</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">char</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">S-&gt;ch){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 在S中腾出位置，为插入T做准备</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> S-&gt;length </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;i </span><span style="color:#F97583;">&gt;=</span><span style="color:#E1E4E8;"> pos </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 从后向前遍历，将前面的元素挪到后面</span></span>
<span class="line"><span style="color:#E1E4E8;">        S-&gt;ch[i </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> T.length] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> S-&gt;ch[i];</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 将串T插入在S中腾出的位置上</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pos </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> pos </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> T.length </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">S).ch[i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> T.ch[i </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> pos </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 长度增加</span></span>
<span class="line"><span style="color:#E1E4E8;">    S-&gt;length </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> T.length;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 将串T插入到主串S的pos位置处。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">StrInsert</span><span style="color:#24292E;">(HString</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">S</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">pos</span><span style="color:#24292E;">, HString </span><span style="color:#E36209;">T</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(pos </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> pos </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> S-&gt;length </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 如果待插入的串为空，则提前返回</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">StrEmpty</span><span style="color:#24292E;">(T)){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 分配新空间</span></span>
<span class="line"><span style="color:#24292E;">    S-&gt;ch </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">char</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">) </span><span style="color:#6F42C1;">realloc</span><span style="color:#24292E;">(S-&gt;ch,(S-&gt;length </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> T.length) </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">sizeof</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">char</span><span style="color:#24292E;">));</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">S-&gt;ch){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">exit</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 在S中腾出位置，为插入T做准备</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> S-&gt;length </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;i </span><span style="color:#D73A49;">&gt;=</span><span style="color:#24292E;"> pos </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">--</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 从后向前遍历，将前面的元素挪到后面</span></span>
<span class="line"><span style="color:#24292E;">        S-&gt;ch[i </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> T.length] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> S-&gt;ch[i];</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 将串T插入在S中腾出的位置上</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pos </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> pos </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> T.length </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">S).ch[i] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> T.ch[i </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> pos </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 长度增加</span></span>
<span class="line"><span style="color:#24292E;">    S-&gt;length </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> T.length;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="求子串" tabindex="-1">求子串 <a class="header-anchor" href="#求子串" aria-label="Permalink to &quot;求子串&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 用Sub返回S[pos, pos+len-1]。</span></span>
<span class="line"><span style="color:#6A737D;"> * 返回值指示是否截取成功。</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> *【注】</span></span>
<span class="line"><span style="color:#6A737D;"> * 该操作属于最小操作子集</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">SubString</span><span style="color:#E1E4E8;">(HString</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">Sub</span><span style="color:#E1E4E8;">, HString </span><span style="color:#FFAB70;">S</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">pos</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">len</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(pos </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> pos </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> S.length </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> len </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> pos </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> len </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> S.length) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 如果是截取0个字符，不需要分配空间</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(len </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">        Sub-&gt;ch </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        Sub-&gt;length </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    Sub-&gt;ch </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">char</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">) </span><span style="color:#B392F0;">malloc</span><span style="color:#E1E4E8;">(len </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">sizeof</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">char</span><span style="color:#E1E4E8;"> ));</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">Sub-&gt;ch){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 复制元素</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> len; </span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">i) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        Sub-&gt;ch[i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> S.ch[i </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> pos </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 确定新的长度</span></span>
<span class="line"><span style="color:#E1E4E8;">    Sub-&gt;length </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> len;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 用Sub返回S[pos, pos+len-1]。</span></span>
<span class="line"><span style="color:#6A737D;"> * 返回值指示是否截取成功。</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> *【注】</span></span>
<span class="line"><span style="color:#6A737D;"> * 该操作属于最小操作子集</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">SubString</span><span style="color:#24292E;">(HString</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">Sub</span><span style="color:#24292E;">, HString </span><span style="color:#E36209;">S</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">pos</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">len</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(pos </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> pos </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> S.length </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> len </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> pos </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> len </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> S.length) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 如果是截取0个字符，不需要分配空间</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(len </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        Sub-&gt;ch </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        Sub-&gt;length </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    Sub-&gt;ch </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">char</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">) </span><span style="color:#6F42C1;">malloc</span><span style="color:#24292E;">(len </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">sizeof</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">char</span><span style="color:#24292E;"> ));</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">Sub-&gt;ch){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">exit</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 复制元素</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> len; </span><span style="color:#D73A49;">++</span><span style="color:#24292E;">i) {</span></span>
<span class="line"><span style="color:#24292E;">        Sub-&gt;ch[i] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> S.ch[i </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> pos </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 确定新的长度</span></span>
<span class="line"><span style="color:#24292E;">    Sub-&gt;length </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> len;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="删除" tabindex="-1">删除 <a class="header-anchor" href="#删除" aria-label="Permalink to &quot;删除&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 删除S[pos, pos+len-1]。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">StrDelete</span><span style="color:#E1E4E8;">(HString</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">S</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">pos</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">len</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(pos </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> pos </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> len </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">S).length </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> len </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 如果待删除的长度为0，则提前返回</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(len </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 把后面的元素挪到前面，覆盖掉被删除的元素</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pos </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> len </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;i </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> S-&gt;length;i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">        S-&gt;ch[i </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> len] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> S-&gt;ch[i];</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 长度减少</span></span>
<span class="line"><span style="color:#E1E4E8;">    S-&gt;length </span><span style="color:#F97583;">-=</span><span style="color:#E1E4E8;"> len;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 缩减分配的空间（如果长度减少为0，这里会返回空指针）</span></span>
<span class="line"><span style="color:#E1E4E8;">    S-&gt;ch </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">char</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">) </span><span style="color:#B392F0;">realloc</span><span style="color:#E1E4E8;">(S-&gt;ch,S-&gt;length </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">sizeof</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">char</span><span style="color:#E1E4E8;"> ));</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 删除S[pos, pos+len-1]。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">StrDelete</span><span style="color:#24292E;">(HString</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">S</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">pos</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">len</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(pos </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> pos </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> len </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">S).length </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> len </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 如果待删除的长度为0，则提前返回</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(len </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 把后面的元素挪到前面，覆盖掉被删除的元素</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pos </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> len </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;i </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> S-&gt;length;i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        S-&gt;ch[i </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> len] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> S-&gt;ch[i];</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 长度减少</span></span>
<span class="line"><span style="color:#24292E;">    S-&gt;length </span><span style="color:#D73A49;">-=</span><span style="color:#24292E;"> len;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 缩减分配的空间（如果长度减少为0，这里会返回空指针）</span></span>
<span class="line"><span style="color:#24292E;">    S-&gt;ch </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">char</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">) </span><span style="color:#6F42C1;">realloc</span><span style="color:#24292E;">(S-&gt;ch,S-&gt;length </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">sizeof</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">char</span><span style="color:#24292E;"> ));</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="串联接" tabindex="-1">串联接 <a class="header-anchor" href="#串联接" aria-label="Permalink to &quot;串联接&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 联接S1和S2，并存储到T中返回。如果联接后的长度溢出，则只保留未溢出的部分。</span></span>
<span class="line"><span style="color:#6A737D;"> * 返回值表示联接后的串是否完整。</span></span>
<span class="line"><span style="color:#6A737D;"> * 堆串的空间被认为是无限的，因此这里总是返回TRUE，指示串不会被裁剪。</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> *【注】</span></span>
<span class="line"><span style="color:#6A737D;"> * 该操作属于最小操作子集</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">Concat</span><span style="color:#E1E4E8;">(HString</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">T</span><span style="color:#E1E4E8;">, HString </span><span style="color:#FFAB70;">S1</span><span style="color:#E1E4E8;">, HString </span><span style="color:#FFAB70;">S2</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 确定新长度</span></span>
<span class="line"><span style="color:#E1E4E8;">    (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T).length </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> S1.length </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> S2.length;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 分配空间</span></span>
<span class="line"><span style="color:#E1E4E8;">    (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T).ch </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">char*</span><span style="color:#E1E4E8;">) </span><span style="color:#B392F0;">malloc</span><span style="color:#E1E4E8;">((</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T).length </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">sizeof</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">char</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T).ch) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 先把S1的内容拷贝出来</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> S1.length; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T).ch[i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> S1.ch[i];</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 再拷贝S2的内容</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> S2.length; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T).ch[S1.length </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> S2.ch[i];</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">TRUE</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 联接S1和S2，并存储到T中返回。如果联接后的长度溢出，则只保留未溢出的部分。</span></span>
<span class="line"><span style="color:#6A737D;"> * 返回值表示联接后的串是否完整。</span></span>
<span class="line"><span style="color:#6A737D;"> * 堆串的空间被认为是无限的，因此这里总是返回TRUE，指示串不会被裁剪。</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> *【注】</span></span>
<span class="line"><span style="color:#6A737D;"> * 该操作属于最小操作子集</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">Concat</span><span style="color:#24292E;">(HString</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">T</span><span style="color:#24292E;">, HString </span><span style="color:#E36209;">S1</span><span style="color:#24292E;">, HString </span><span style="color:#E36209;">S2</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 确定新长度</span></span>
<span class="line"><span style="color:#24292E;">    (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T).length </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> S1.length </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> S2.length;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 分配空间</span></span>
<span class="line"><span style="color:#24292E;">    (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T).ch </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">char*</span><span style="color:#24292E;">) </span><span style="color:#6F42C1;">malloc</span><span style="color:#24292E;">((</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T).length </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">sizeof</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">char</span><span style="color:#24292E;">));</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T).ch) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">exit</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 先把S1的内容拷贝出来</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> S1.length; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T).ch[i] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> S1.ch[i];</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 再拷贝S2的内容</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> S2.length; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T).ch[S1.length </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> i] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> S2.ch[i];</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">TRUE</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="查找" tabindex="-1">查找 <a class="header-anchor" href="#查找" aria-label="Permalink to &quot;查找&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 从pos处开始搜索模式串T在主串S中首次出现的位置，如果不存在，则返回0。</span></span>
<span class="line"><span style="color:#6A737D;"> * 如果查找成功，返回匹配的位置。</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> *【注】</span></span>
<span class="line"><span style="color:#6A737D;"> * 1.此实现需要依赖串的最小操作子集</span></span>
<span class="line"><span style="color:#6A737D;"> * 2.该实现比较低效</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Index</span><span style="color:#E1E4E8;">(HString </span><span style="color:#FFAB70;">S</span><span style="color:#E1E4E8;">, HString </span><span style="color:#FFAB70;">T</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">pos</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i, s, t;</span></span>
<span class="line"><span style="color:#E1E4E8;">    HString sub;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(pos </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> pos </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> S.length </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">StrEmpty</span><span style="color:#E1E4E8;">(T)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    s </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> S.length;</span></span>
<span class="line"><span style="color:#E1E4E8;">    t </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> T.length;</span></span>
<span class="line"><span style="color:#E1E4E8;">    i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pos;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 保证长度不越界</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> t </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> s) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 获取S[i, i+t-1]</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">SubString</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">sub, S, i, t);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 如果子串与模式串不匹配，则需要继续推进</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">StrCompare</span><span style="color:#E1E4E8;">(sub, T) </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">i;</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> i;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 从pos处开始搜索模式串T在主串S中首次出现的位置，如果不存在，则返回0。</span></span>
<span class="line"><span style="color:#6A737D;"> * 如果查找成功，返回匹配的位置。</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> *【注】</span></span>
<span class="line"><span style="color:#6A737D;"> * 1.此实现需要依赖串的最小操作子集</span></span>
<span class="line"><span style="color:#6A737D;"> * 2.该实现比较低效</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Index</span><span style="color:#24292E;">(HString </span><span style="color:#E36209;">S</span><span style="color:#24292E;">, HString </span><span style="color:#E36209;">T</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">pos</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i, s, t;</span></span>
<span class="line"><span style="color:#24292E;">    HString sub;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(pos </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> pos </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> S.length </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">StrEmpty</span><span style="color:#24292E;">(T)) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    s </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> S.length;</span></span>
<span class="line"><span style="color:#24292E;">    t </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> T.length;</span></span>
<span class="line"><span style="color:#24292E;">    i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pos;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 保证长度不越界</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">while</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> t </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> s) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 获取S[i, i+t-1]</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">SubString</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">sub, S, i, t);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 如果子串与模式串不匹配，则需要继续推进</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">StrCompare</span><span style="color:#24292E;">(sub, T) </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">++</span><span style="color:#24292E;">i;</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> i;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="替换" tabindex="-1">替换 <a class="header-anchor" href="#替换" aria-label="Permalink to &quot;替换&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 用V替换主串S中出现的所有与T相等的且不重叠的子串。</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> *【注】</span></span>
<span class="line"><span style="color:#6A737D;"> * 1.该操作依赖最小操作子集</span></span>
<span class="line"><span style="color:#6A737D;"> * 2.该实现比较低效</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">Replace</span><span style="color:#E1E4E8;">(HString</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">S</span><span style="color:#E1E4E8;">, HString </span><span style="color:#FFAB70;">T</span><span style="color:#E1E4E8;">, HString </span><span style="color:#FFAB70;">V</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">StrEmpty</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">S) </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">StrEmpty</span><span style="color:#E1E4E8;">(T)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 在主串S中寻找模式串T第一次出现的位置</span></span>
<span class="line"><span style="color:#E1E4E8;">    i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Index</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">S, T, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 如果存在匹配的字符串</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">StrDelete</span><span style="color:#E1E4E8;">(S, i, </span><span style="color:#B392F0;">StrLength</span><span style="color:#E1E4E8;">(T));</span><span style="color:#6A737D;">  // 从S中删除T</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">StrInsert</span><span style="color:#E1E4E8;">(S, i, V);</span><span style="color:#6A737D;">             // 向S中插入V</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        i </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">StrLength</span><span style="color:#E1E4E8;">(V);</span><span style="color:#6A737D;">          // i切换到下一个位置</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Index</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">S, T, i);</span><span style="color:#6A737D;">        // 查找下一个匹配的字符串</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 用V替换主串S中出现的所有与T相等的且不重叠的子串。</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> *【注】</span></span>
<span class="line"><span style="color:#6A737D;"> * 1.该操作依赖最小操作子集</span></span>
<span class="line"><span style="color:#6A737D;"> * 2.该实现比较低效</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">Replace</span><span style="color:#24292E;">(HString</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">S</span><span style="color:#24292E;">, HString </span><span style="color:#E36209;">T</span><span style="color:#24292E;">, HString </span><span style="color:#E36209;">V</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">StrEmpty</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">S) </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">StrEmpty</span><span style="color:#24292E;">(T)) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 在主串S中寻找模式串T第一次出现的位置</span></span>
<span class="line"><span style="color:#24292E;">    i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Index</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">S, T, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 如果存在匹配的字符串</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">while</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">StrDelete</span><span style="color:#24292E;">(S, i, </span><span style="color:#6F42C1;">StrLength</span><span style="color:#24292E;">(T));</span><span style="color:#6A737D;">  // 从S中删除T</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">StrInsert</span><span style="color:#24292E;">(S, i, V);</span><span style="color:#6A737D;">             // 向S中插入V</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        i </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">StrLength</span><span style="color:#24292E;">(V);</span><span style="color:#6A737D;">          // i切换到下一个位置</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Index</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">S, T, i);</span><span style="color:#6A737D;">        // 查找下一个匹配的字符串</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,31),e=[o];function c(t,r,E,y,i,A){return n(),a("div",null,e)}const h=s(p,[["render",c]]);export{D as __pageData,h as default};
