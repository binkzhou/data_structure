import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.91000686.js";const l="/data_structure/assets/image-20231122100252037.af8d1065.png",o="/data_structure/assets/image-20231122101450194.330de124.png",e="/data_structure/assets/image-20231122101535158.107b7f17.png",c="/data_structure/assets/image-20231122101610205.7cdedc93.png",t="/data_structure/assets/image-20231122133219846.f131f269.png",E="/data_structure/assets/image-20231122134026654.6f8996ad.png",r="/data_structure/assets/image-20231122140013442.c3f98bc0.png",y="/data_structure/assets/image-20231122140042208.b6d51d09.png",i="/data_structure/assets/image-20231122141012277.dadb503b.png",F="/data_structure/assets/image-20231122143233537.94d99e93.png",N=JSON.parse('{"title":"串的块链分配存储表示","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"sstring/0003.md","filePath":"sstring/0003.md"}'),A={name:"sstring/0003.md"},D=p('<h1 id="串的块链分配存储表示" tabindex="-1">串的块链分配存储表示 <a class="header-anchor" href="#串的块链分配存储表示" aria-label="Permalink to &quot;串的块链分配存储表示&quot;">​</a></h1><p>块链大小决定每个块存储的元素个数，元素不够的填充<code>\\0</code></p><p><img src="'+l+`" alt="image-20231122100252037"></p><h2 id="结构定义" tabindex="-1">结构定义 <a class="header-anchor" href="#结构定义" aria-label="Permalink to &quot;结构定义&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/* 宏定义 */</span></span>
<span class="line"><span style="color:#F97583;">#define</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">CHUNKSIZE</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3</span><span style="color:#6A737D;">   // 块大小</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 串的块链存储结构 */</span></span>
<span class="line"><span style="color:#F97583;">typedef</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> Chunk{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">char</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">ch</span><span style="color:#E1E4E8;">[CHUNKSIZE];</span><span style="color:#6A737D;"> // 当前块中的内容</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> Chunk</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> next;</span><span style="color:#6A737D;"> // 指向下一个块</span></span>
<span class="line"><span style="color:#E1E4E8;">} Chunk;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 串的块链存储类型定义 */</span></span>
<span class="line"><span style="color:#F97583;">typedef</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    Chunk</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> head;</span><span style="color:#6A737D;">  // 串的头指针</span></span>
<span class="line"><span style="color:#E1E4E8;">    Chunk</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> tail;</span><span style="color:#6A737D;">  // 串的尾指针</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> curlen;</span><span style="color:#6A737D;">   // 串的当前长度</span></span>
<span class="line"><span style="color:#E1E4E8;">} LString;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/* 宏定义 */</span></span>
<span class="line"><span style="color:#D73A49;">#define</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">CHUNKSIZE</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span><span style="color:#6A737D;">   // 块大小</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 串的块链存储结构 */</span></span>
<span class="line"><span style="color:#D73A49;">typedef</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">struct</span><span style="color:#24292E;"> Chunk{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">char</span><span style="color:#24292E;"> </span><span style="color:#E36209;">ch</span><span style="color:#24292E;">[CHUNKSIZE];</span><span style="color:#6A737D;"> // 当前块中的内容</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">struct</span><span style="color:#24292E;"> Chunk</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> next;</span><span style="color:#6A737D;"> // 指向下一个块</span></span>
<span class="line"><span style="color:#24292E;">} Chunk;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 串的块链存储类型定义 */</span></span>
<span class="line"><span style="color:#D73A49;">typedef</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">struct</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    Chunk</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> head;</span><span style="color:#6A737D;">  // 串的头指针</span></span>
<span class="line"><span style="color:#24292E;">    Chunk</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> tail;</span><span style="color:#6A737D;">  // 串的尾指针</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> curlen;</span><span style="color:#6A737D;">   // 串的当前长度</span></span>
<span class="line"><span style="color:#24292E;">} LString;</span></span></code></pre></div><h2 id="初始化" tabindex="-1">初始化 <a class="header-anchor" href="#初始化" aria-label="Permalink to &quot;初始化&quot;">​</a></h2><p>1.创建块链串的结构</p><p><img src="`+o+'" alt="image-20231122101450194"></p><p>2.为块链串填充内容</p><p><img src="'+e+'" alt="image-20231122101535158"></p><p>3.如果存在未填满的块</p><p><img src="'+c+`" alt="image-20231122101610205"></p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 构造一个值为chars的串T。</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> *【注】</span></span>
<span class="line"><span style="color:#6A737D;"> * 该操作属于最小操作子集</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">StrAssign</span><span style="color:#E1E4E8;">(LString</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">T</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">char*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">chars</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> len;</span><span style="color:#6A737D;">      // chars的长度</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i,count;</span><span style="color:#6A737D;">  // 遍历块链串和字符串chars的游标</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> m;</span><span style="color:#6A737D;">        // 总块数</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> n;</span><span style="color:#6A737D;">        // 如果存在未填满的块，存储该块中的有效元素数量</span></span>
<span class="line"><span style="color:#E1E4E8;">    Chunk</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> r;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 求chars的长度</span></span>
<span class="line"><span style="color:#E1E4E8;">    len </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">) </span><span style="color:#B392F0;">strlen</span><span style="color:#E1E4E8;">(chars);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 没有有效元素</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(len </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">        T-&gt;head </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        T-&gt;tail </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        T-&gt;curlen </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    m </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> len </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> CHUNKSIZE;</span><span style="color:#6A737D;">  // 先计算需要填满的块</span></span>
<span class="line"><span style="color:#E1E4E8;">    n </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> len </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> CHUNKSIZE;</span><span style="color:#6A737D;">  // 如果存在未填满的块，计算该块中填充的有效元素数量</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(n </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">        m</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">       // 计算总块数</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 1.创建块链串的结构</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;">m; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 创建新块</span></span>
<span class="line"><span style="color:#E1E4E8;">        r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (Chunk</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">) </span><span style="color:#B392F0;">malloc</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">sizeof</span><span style="color:#E1E4E8;">(Chunk));</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(r </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        r-&gt;next </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 第一个块</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">            T-&gt;head </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> T-&gt;tail </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r;</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">            T-&gt;tail-&gt;next </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r;</span></span>
<span class="line"><span style="color:#E1E4E8;">            T-&gt;tail </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> T-&gt;head;</span></span>
<span class="line"><span style="color:#E1E4E8;">    i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">        // 块链串T的游标</span></span>
<span class="line"><span style="color:#E1E4E8;">    count </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">    // 统计遍历过的元素，顺便作为chars的游标</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 2.为块链串填充内容</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> (count </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> len){</span></span>
<span class="line"><span style="color:#E1E4E8;">        r-&gt;ch[i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">chars</span><span style="color:#E1E4E8;">[count];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (i </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> CHUNKSIZE;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 如i = 2时共填充了3个元素，i = (2 + 1) % 3 = 0; 移到下一个块</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">            r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r-&gt;next;</span><span style="color:#6A737D;"> // 指向下一个块</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        count</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 3.如果存在未填满的块</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(n </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 填充非串值内容(补上&#39;\\0&#39;)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> (i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> CHUNKSIZE){</span></span>
<span class="line"><span style="color:#E1E4E8;">            T-&gt;tail-&gt;ch[i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\0</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 4.记录长度信息</span></span>
<span class="line"><span style="color:#E1E4E8;">    T-&gt;curlen </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> len;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 构造一个值为chars的串T。</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> *【注】</span></span>
<span class="line"><span style="color:#6A737D;"> * 该操作属于最小操作子集</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">StrAssign</span><span style="color:#24292E;">(LString</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">T</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">char*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">chars</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> len;</span><span style="color:#6A737D;">      // chars的长度</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i,count;</span><span style="color:#6A737D;">  // 遍历块链串和字符串chars的游标</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> m;</span><span style="color:#6A737D;">        // 总块数</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> n;</span><span style="color:#6A737D;">        // 如果存在未填满的块，存储该块中的有效元素数量</span></span>
<span class="line"><span style="color:#24292E;">    Chunk</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> r;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 求chars的长度</span></span>
<span class="line"><span style="color:#24292E;">    len </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">int</span><span style="color:#24292E;">) </span><span style="color:#6F42C1;">strlen</span><span style="color:#24292E;">(chars);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 没有有效元素</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(len </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        T-&gt;head </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        T-&gt;tail </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        T-&gt;curlen </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    m </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> len </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> CHUNKSIZE;</span><span style="color:#6A737D;">  // 先计算需要填满的块</span></span>
<span class="line"><span style="color:#24292E;">    n </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> len </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> CHUNKSIZE;</span><span style="color:#6A737D;">  // 如果存在未填满的块，计算该块中填充的有效元素数量</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(n </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        m</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">       // 计算总块数</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 1.创建块链串的结构</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;">m; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 创建新块</span></span>
<span class="line"><span style="color:#24292E;">        r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (Chunk</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">) </span><span style="color:#6F42C1;">malloc</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">sizeof</span><span style="color:#24292E;">(Chunk));</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(r </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">exit</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        r-&gt;next </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 第一个块</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">            T-&gt;head </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> T-&gt;tail </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r;</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">            T-&gt;tail-&gt;next </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r;</span></span>
<span class="line"><span style="color:#24292E;">            T-&gt;tail </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> T-&gt;head;</span></span>
<span class="line"><span style="color:#24292E;">    i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">        // 块链串T的游标</span></span>
<span class="line"><span style="color:#24292E;">    count </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">    // 统计遍历过的元素，顺便作为chars的游标</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 2.为块链串填充内容</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (count </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> len){</span></span>
<span class="line"><span style="color:#24292E;">        r-&gt;ch[i] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#E36209;">chars</span><span style="color:#24292E;">[count];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (i </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> CHUNKSIZE;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 如i = 2时共填充了3个元素，i = (2 + 1) % 3 = 0; 移到下一个块</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">            r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r-&gt;next;</span><span style="color:#6A737D;"> // 指向下一个块</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        count</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 3.如果存在未填满的块</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(n </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 填充非串值内容(补上&#39;\\0&#39;)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> CHUNKSIZE){</span></span>
<span class="line"><span style="color:#24292E;">            T-&gt;tail-&gt;ch[i] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;</span><span style="color:#005CC5;">\\0</span><span style="color:#032F62;">&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 4.记录长度信息</span></span>
<span class="line"><span style="color:#24292E;">    T-&gt;curlen </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> len;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="销毁" tabindex="-1">销毁 <a class="header-anchor" href="#销毁" aria-label="Permalink to &quot;销毁&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> *【注】</span></span>
<span class="line"><span style="color:#6A737D;"> * 块链串的结构可以销毁，但不是在销毁操作中</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">DestroyString</span><span style="color:#E1E4E8;">(LString</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">S</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> *【注】</span></span>
<span class="line"><span style="color:#6A737D;"> * 块链串的结构可以销毁，但不是在销毁操作中</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">DestroyString</span><span style="color:#24292E;">(LString</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">S</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="清空" tabindex="-1">清空 <a class="header-anchor" href="#清空" aria-label="Permalink to &quot;清空&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 将串S清空。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">ClearString</span><span style="color:#E1E4E8;">(LString</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">S</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    Chunk</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> p, </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> q;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> S-&gt;head;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 释放所有串占用的空间</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> (p </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">        q </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p-&gt;next;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">free</span><span style="color:#E1E4E8;">(p);</span></span>
<span class="line"><span style="color:#E1E4E8;">        p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> q;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    S-&gt;head </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    S-&gt;tail </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    S-&gt;curlen </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 将串S清空。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">ClearString</span><span style="color:#24292E;">(LString</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">S</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    Chunk</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> p, </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> q;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> S-&gt;head;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 释放所有串占用的空间</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (p </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        q </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p-&gt;next;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">free</span><span style="color:#24292E;">(p);</span></span>
<span class="line"><span style="color:#24292E;">        p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> q;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    S-&gt;head </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    S-&gt;tail </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    S-&gt;curlen </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="判空" tabindex="-1">判空 <a class="header-anchor" href="#判空" aria-label="Permalink to &quot;判空&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 判断串S中是否包含有效数据。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">StrEmpty</span><span style="color:#E1E4E8;">(LString </span><span style="color:#FFAB70;">S</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> S.curlen </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">TRUE</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">FALSE</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 判断串S中是否包含有效数据。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">StrEmpty</span><span style="color:#24292E;">(LString </span><span style="color:#E36209;">S</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> S.curlen </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">TRUE</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">FALSE</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="计数" tabindex="-1">计数 <a class="header-anchor" href="#计数" aria-label="Permalink to &quot;计数&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 返回串S中元素的个数。</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> *【注】</span></span>
<span class="line"><span style="color:#6A737D;"> * 该操作属于最小操作子集</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">StrLength</span><span style="color:#E1E4E8;">(LString </span><span style="color:#FFAB70;">S</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> S.curlen;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 返回串S中元素的个数。</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> *【注】</span></span>
<span class="line"><span style="color:#6A737D;"> * 该操作属于最小操作子集</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">StrLength</span><span style="color:#24292E;">(LString </span><span style="color:#E36209;">S</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> S.curlen;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="复制" tabindex="-1">复制 <a class="header-anchor" href="#复制" aria-label="Permalink to &quot;复制&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 将串S复制到串T。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">StrCopy</span><span style="color:#E1E4E8;">(LString</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">T</span><span style="color:#E1E4E8;">, LString </span><span style="color:#FFAB70;">S</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i;</span></span>
<span class="line"><span style="color:#E1E4E8;">    Chunk </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">s, </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">p;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> S.head;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> (p </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">        s </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (Chunk</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">) </span><span style="color:#B392F0;">malloc</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">sizeof</span><span style="color:#E1E4E8;"> (Chunk));</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(s </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        s-&gt;next </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(p </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> S.head){</span></span>
<span class="line"><span style="color:#E1E4E8;">            T-&gt;head </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> T-&gt;tail </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> s;</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">            T-&gt;tail-&gt;next </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> s;</span></span>
<span class="line"><span style="color:#E1E4E8;">            T-&gt;tail </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> s;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 填充内容</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> CHUNKSIZE;i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">            s-&gt;ch[i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p-&gt;ch[i];</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p-&gt;next;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    T-&gt;curlen </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> S.curlen;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 将串S复制到串T。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">StrCopy</span><span style="color:#24292E;">(LString</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">T</span><span style="color:#24292E;">, LString </span><span style="color:#E36209;">S</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i;</span></span>
<span class="line"><span style="color:#24292E;">    Chunk </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">s, </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">p;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> S.head;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (p </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        s </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (Chunk</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">) </span><span style="color:#6F42C1;">malloc</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">sizeof</span><span style="color:#24292E;"> (Chunk));</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(s </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">exit</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        s-&gt;next </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(p </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> S.head){</span></span>
<span class="line"><span style="color:#24292E;">            T-&gt;head </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> T-&gt;tail </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> s;</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">            T-&gt;tail-&gt;next </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> s;</span></span>
<span class="line"><span style="color:#24292E;">            T-&gt;tail </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> s;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 填充内容</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> CHUNKSIZE;i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">            s-&gt;ch[i] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p-&gt;ch[i];</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p-&gt;next;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    T-&gt;curlen </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> S.curlen;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="比较" tabindex="-1">比较 <a class="header-anchor" href="#比较" aria-label="Permalink to &quot;比较&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 比较串S和串T，返回比较结果。</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> *【注】</span></span>
<span class="line"><span style="color:#6A737D;"> * 该操作属于最小操作子集</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">StrCompare</span><span style="color:#E1E4E8;">(LString </span><span style="color:#FFAB70;">S</span><span style="color:#E1E4E8;">, LString </span><span style="color:#FFAB70;">T</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i;</span></span>
<span class="line"><span style="color:#E1E4E8;">    Chunk</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> s </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> S.head;</span></span>
<span class="line"><span style="color:#E1E4E8;">    Chunk</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> t </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> T.head;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> (s </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> t </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> CHUNKSIZE; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(s-&gt;ch[i] </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> t-&gt;ch[i]){</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> s-&gt;ch[i] </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> t-&gt;ch[i];</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        s </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> s-&gt;next;</span></span>
<span class="line"><span style="color:#E1E4E8;">        t </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> t-&gt;next;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(s </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// S &gt; T</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(t </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// S &lt; T</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// S = T</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 比较串S和串T，返回比较结果。</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> *【注】</span></span>
<span class="line"><span style="color:#6A737D;"> * 该操作属于最小操作子集</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">StrCompare</span><span style="color:#24292E;">(LString </span><span style="color:#E36209;">S</span><span style="color:#24292E;">, LString </span><span style="color:#E36209;">T</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i;</span></span>
<span class="line"><span style="color:#24292E;">    Chunk</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> s </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> S.head;</span></span>
<span class="line"><span style="color:#24292E;">    Chunk</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> t </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> T.head;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (s </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> t </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> CHUNKSIZE; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(s-&gt;ch[i] </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> t-&gt;ch[i]){</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> s-&gt;ch[i] </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> t-&gt;ch[i];</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        s </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> s-&gt;next;</span></span>
<span class="line"><span style="color:#24292E;">        t </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> t-&gt;next;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(s </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// S &gt; T</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(t </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// S &lt; T</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// S = T</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="插入" tabindex="-1">插入 <a class="header-anchor" href="#插入" aria-label="Permalink to &quot;插入&quot;">​</a></h2><p>复制T中的块（只复制结构)</p><p><img src="`+t+'" alt="image-20231122133219846"></p><p>查找S中第pos(<strong>5</strong>)个元素所在的块(<strong>2</strong>)(注：称为目标块),并用指针pre指向它的前驱,p指向插入位置</p><p><img src="'+E+'" alt="image-20231122134026654"></p><p>将h到t范围的块插入到pos(<strong>5</strong>)所在的块(<strong>2</strong>)之前</p><p><img src="'+r+'" alt="image-20231122140013442"></p><p>如果插入到了某个块(<strong>2</strong>)的“中间”第5个位置，j的值变为了1</p><p><img src="'+y+'" alt="image-20231122140042208"></p><p>复制T中的元素到S中,j的值变为2,i的值变为1</p><p><img src="'+i+'" alt="image-20231122141012277"></p><p>如果T中最后一个块中包含<code>\\0</code> 前移</p><p><img src="'+F+`" alt="image-20231122143233537"></p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 插入</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * 将串T插入到主串S的pos位置处。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">StrInsert</span><span style="color:#E1E4E8;">(LString</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">S</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">pos</span><span style="color:#E1E4E8;">, LString </span><span style="color:#FFAB70;">T</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    Chunk </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">pre, </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">p;</span><span style="color:#6A737D;">    // pre指向目标块的前驱，p指向目标块</span></span>
<span class="line"><span style="color:#E1E4E8;">    Chunk </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">h, </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">t;</span><span style="color:#6A737D;">      // 指向新增的块链的头部和尾部</span></span>
<span class="line"><span style="color:#E1E4E8;">    Chunk </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">r;</span></span>
<span class="line"><span style="color:#E1E4E8;">    Chunk </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">s;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i,j,count;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(pos </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> pos </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> S-&gt;curlen </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 如果待插入的串为空，则提前返回</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">StrEmpty</span><span style="color:#E1E4E8;">(T)){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 记录待插入块的起始块和终止块</span></span>
<span class="line"><span style="color:#E1E4E8;">    h </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> t </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 复制T中的块（只复制结构)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> T.head; r </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">; r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r-&gt;next){</span></span>
<span class="line"><span style="color:#E1E4E8;">        s </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (Chunk</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">) </span><span style="color:#B392F0;">malloc</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">sizeof</span><span style="color:#E1E4E8;">(Chunk));</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(s </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(r </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> T.head){</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 如果是第一节点</span></span>
<span class="line"><span style="color:#E1E4E8;">            h </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> t </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> s;</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">            t-&gt;next </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> s;</span></span>
<span class="line"><span style="color:#E1E4E8;">            t </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> s;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 查找S中第pos个元素所在的块(注：称为目标块),并用指针pre指向它的前驱</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(pos </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> CHUNKSIZE){</span></span>
<span class="line"><span style="color:#E1E4E8;">        pre </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">  // 说明第pos个元素所在块为head</span></span>
<span class="line"><span style="color:#E1E4E8;">        p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> S-&gt;head;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">        count </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        pre </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> S-&gt;head;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 找到所在的块</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> (count </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> (pos </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> CHUNKSIZE){</span></span>
<span class="line"><span style="color:#E1E4E8;">            count</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            pre </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pre-&gt;next;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pre-&gt;next;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /*</span></span>
<span class="line"><span style="color:#6A737D;">     * 接下来，将h到t范围的块插入到pos所在的块之前</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(pre </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// pos 所在块为head</span></span>
<span class="line"><span style="color:#E1E4E8;">        t-&gt;next </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> S-&gt;head;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 在块头插入</span></span>
<span class="line"><span style="color:#E1E4E8;">        S-&gt;head </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> h;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// pre指向目标块的前驱</span></span>
<span class="line"><span style="color:#E1E4E8;">        pre-&gt;next </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> h;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 表尾指向原来节点的下一个元素</span></span>
<span class="line"><span style="color:#E1E4E8;">        t-&gt;next </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 如果插入在末尾,则需要移动队尾指针</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(pre </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> S-&gt;tail){</span></span>
<span class="line"><span style="color:#E1E4E8;">        S-&gt;tail </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> t;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 移动/复制元素</span></span>
<span class="line"><span style="color:#E1E4E8;">    j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 如果插入到了某个块的“中间”</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">((pos </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> CHUNKSIZE </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 移动目标块中pos位置之前的元素</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> (pos </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> CHUNKSIZE;i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">            h-&gt;ch[j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p-&gt;ch[i </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">            p-&gt;ch[i </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\0</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> T.head;</span></span>
<span class="line"><span style="color:#E1E4E8;">    i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 复制T中的元素到S中</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (count </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">; count </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> T.curlen; count </span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">        h-&gt;ch[j] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r-&gt;ch[i];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (j </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> CHUNKSIZE;</span></span>
<span class="line"><span style="color:#E1E4E8;">        i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (i </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> CHUNKSIZE;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(j </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// S中的h指针移到下一个节点</span></span>
<span class="line"><span style="color:#E1E4E8;">            h </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> h-&gt;next;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// T中的r指针移到下一个节点</span></span>
<span class="line"><span style="color:#E1E4E8;">            r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r-&gt;next;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 如果T中最后一个块中包含&#39;\\0&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(T.curlen </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> CHUNKSIZE </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">        r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p;</span><span style="color:#6A737D;"> // 指向目标块</span></span>
<span class="line"><span style="color:#E1E4E8;">        i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (pos </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> CHUNKSIZE;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 移动原S块中pos位置及其之后的元素</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 1,2,3,4,5,6,7; pos = 5; 移动5,6,7三个元素</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(count </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pos; count </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> S-&gt;curlen;count</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">            h-&gt;ch[j] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r-&gt;ch[i];</span></span>
<span class="line"><span style="color:#E1E4E8;">            r-&gt;ch[i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\0</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (j </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> CHUNKSIZE;</span></span>
<span class="line"><span style="color:#E1E4E8;">            i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (i </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> CHUNKSIZE;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(j </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                h </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> h-&gt;next;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r-&gt;next;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    S-&gt;curlen </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> T.curlen;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 插入</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * 将串T插入到主串S的pos位置处。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">StrInsert</span><span style="color:#24292E;">(LString</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">S</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">pos</span><span style="color:#24292E;">, LString </span><span style="color:#E36209;">T</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    Chunk </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">pre, </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">p;</span><span style="color:#6A737D;">    // pre指向目标块的前驱，p指向目标块</span></span>
<span class="line"><span style="color:#24292E;">    Chunk </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">h, </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">t;</span><span style="color:#6A737D;">      // 指向新增的块链的头部和尾部</span></span>
<span class="line"><span style="color:#24292E;">    Chunk </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">r;</span></span>
<span class="line"><span style="color:#24292E;">    Chunk </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">s;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i,j,count;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(pos </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> pos </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> S-&gt;curlen </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 如果待插入的串为空，则提前返回</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">StrEmpty</span><span style="color:#24292E;">(T)){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 记录待插入块的起始块和终止块</span></span>
<span class="line"><span style="color:#24292E;">    h </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> t </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 复制T中的块（只复制结构)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> T.head; r </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">; r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r-&gt;next){</span></span>
<span class="line"><span style="color:#24292E;">        s </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (Chunk</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">) </span><span style="color:#6F42C1;">malloc</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">sizeof</span><span style="color:#24292E;">(Chunk));</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(s </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">exit</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(r </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> T.head){</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 如果是第一节点</span></span>
<span class="line"><span style="color:#24292E;">            h </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> t </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> s;</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">            t-&gt;next </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> s;</span></span>
<span class="line"><span style="color:#24292E;">            t </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> s;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 查找S中第pos个元素所在的块(注：称为目标块),并用指针pre指向它的前驱</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(pos </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> CHUNKSIZE){</span></span>
<span class="line"><span style="color:#24292E;">        pre </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">  // 说明第pos个元素所在块为head</span></span>
<span class="line"><span style="color:#24292E;">        p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> S-&gt;head;</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">        count </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        pre </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> S-&gt;head;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 找到所在的块</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (count </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> (pos </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> CHUNKSIZE){</span></span>
<span class="line"><span style="color:#24292E;">            count</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            pre </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pre-&gt;next;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pre-&gt;next;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /*</span></span>
<span class="line"><span style="color:#6A737D;">     * 接下来，将h到t范围的块插入到pos所在的块之前</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(pre </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// pos 所在块为head</span></span>
<span class="line"><span style="color:#24292E;">        t-&gt;next </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> S-&gt;head;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 在块头插入</span></span>
<span class="line"><span style="color:#24292E;">        S-&gt;head </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> h;</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// pre指向目标块的前驱</span></span>
<span class="line"><span style="color:#24292E;">        pre-&gt;next </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> h;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 表尾指向原来节点的下一个元素</span></span>
<span class="line"><span style="color:#24292E;">        t-&gt;next </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 如果插入在末尾,则需要移动队尾指针</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(pre </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> S-&gt;tail){</span></span>
<span class="line"><span style="color:#24292E;">        S-&gt;tail </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> t;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 移动/复制元素</span></span>
<span class="line"><span style="color:#24292E;">    j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 如果插入到了某个块的“中间”</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">((pos </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> CHUNKSIZE </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 移动目标块中pos位置之前的元素</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> (pos </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> CHUNKSIZE;i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">            h-&gt;ch[j</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p-&gt;ch[i </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">            p-&gt;ch[i </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;</span><span style="color:#005CC5;">\\0</span><span style="color:#032F62;">&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> T.head;</span></span>
<span class="line"><span style="color:#24292E;">    i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 复制T中的元素到S中</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (count </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">; count </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> T.curlen; count </span><span style="color:#D73A49;">++</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        h-&gt;ch[j] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r-&gt;ch[i];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (j </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> CHUNKSIZE;</span></span>
<span class="line"><span style="color:#24292E;">        i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (i </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> CHUNKSIZE;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(j </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// S中的h指针移到下一个节点</span></span>
<span class="line"><span style="color:#24292E;">            h </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> h-&gt;next;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// T中的r指针移到下一个节点</span></span>
<span class="line"><span style="color:#24292E;">            r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r-&gt;next;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 如果T中最后一个块中包含&#39;\\0&#39;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(T.curlen </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> CHUNKSIZE </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p;</span><span style="color:#6A737D;"> // 指向目标块</span></span>
<span class="line"><span style="color:#24292E;">        i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (pos </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> CHUNKSIZE;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 移动原S块中pos位置及其之后的元素</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 1,2,3,4,5,6,7; pos = 5; 移动5,6,7三个元素</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(count </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pos; count </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> S-&gt;curlen;count</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">            h-&gt;ch[j] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r-&gt;ch[i];</span></span>
<span class="line"><span style="color:#24292E;">            r-&gt;ch[i] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;</span><span style="color:#005CC5;">\\0</span><span style="color:#032F62;">&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (j </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> CHUNKSIZE;</span></span>
<span class="line"><span style="color:#24292E;">            i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (i </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> CHUNKSIZE;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(j </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">                h </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> h-&gt;next;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">                r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r-&gt;next;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    S-&gt;curlen </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> T.curlen;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="求子串" tabindex="-1">求子串 <a class="header-anchor" href="#求子串" aria-label="Permalink to &quot;求子串&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 用Sub返回S[pos, pos+len-1]。</span></span>
<span class="line"><span style="color:#6A737D;"> * 返回值指示是否截取成功。</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> *【注】</span></span>
<span class="line"><span style="color:#6A737D;"> * 该操作属于最小操作子集</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">SubString</span><span style="color:#E1E4E8;">(LString</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">Sub</span><span style="color:#E1E4E8;">, LString </span><span style="color:#FFAB70;">S</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">pos</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">len</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> m;</span><span style="color:#6A737D;">      // Sub的总块数</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> n;</span><span style="color:#6A737D;">      // 如果Sub存在未填满的块，存储该块中的有效元素数量</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i, j, count;</span></span>
<span class="line"><span style="color:#E1E4E8;">    Chunk</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> r, </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(pos </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> pos </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> S.curlen </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> len </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> pos </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> len </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> S.curlen) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 如果是截取0个字符，不需要分配空间</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(len </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">Sub).head </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">Sub).tail </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">Sub).curlen </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    m </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> len </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> CHUNKSIZE;</span><span style="color:#6A737D;">    // 先计算需要填满的块</span></span>
<span class="line"><span style="color:#E1E4E8;">    n </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> len </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> CHUNKSIZE;</span><span style="color:#6A737D;">    // 如果Sub存在未填满的块，计算该块中填充的有效元素数量</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(n </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        m</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">                // 计算Sub的总块数</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 1.创建Sub的结构</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> m; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 创建新块</span></span>
<span class="line"><span style="color:#E1E4E8;">        r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (Chunk</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">) </span><span style="color:#B392F0;">malloc</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">sizeof</span><span style="color:#E1E4E8;">(Chunk));</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(r </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        r-&gt;next </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 第一个块</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">Sub).head </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">Sub).tail </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 联接后面的块</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">Sub).tail-&gt;next </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r;</span></span>
<span class="line"><span style="color:#E1E4E8;">            (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">Sub).tail </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 查找S中第pos个元素所在的块，并用指针p指向它</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(count </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> S.head; pos </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> count </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> CHUNKSIZE; count</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">, p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p-&gt;next) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 空循环</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">Sub).head;</span><span style="color:#6A737D;">            // 指向Sub的块</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">                      // 块链串Sub的游标</span></span>
<span class="line"><span style="color:#E1E4E8;">    j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (pos </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> CHUNKSIZE;</span><span style="color:#6A737D;">  // 块链串S  的游标</span></span>
<span class="line"><span style="color:#E1E4E8;">    count </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">                  // 统计遍历过的元素</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 2.为块链串Sub填充内容</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;">(count </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> len) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        r-&gt;ch[i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p-&gt;ch[j];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (i </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> CHUNKSIZE;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r-&gt;next;</span><span style="color:#6A737D;">    // 指向Sub中下一个块</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (j </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> CHUNKSIZE;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(j </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p-&gt;next;</span><span style="color:#6A737D;">    // 指向S中下一个块</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        count</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 3.如果存在未填满的块</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(n </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 填充非串值内容(补上&#39;\\0&#39;)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> CHUNKSIZE) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">Sub).tail-&gt;ch[i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\0</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 4.记录长度信息</span></span>
<span class="line"><span style="color:#E1E4E8;">    (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">Sub).curlen </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> len;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 用Sub返回S[pos, pos+len-1]。</span></span>
<span class="line"><span style="color:#6A737D;"> * 返回值指示是否截取成功。</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> *【注】</span></span>
<span class="line"><span style="color:#6A737D;"> * 该操作属于最小操作子集</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">SubString</span><span style="color:#24292E;">(LString</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">Sub</span><span style="color:#24292E;">, LString </span><span style="color:#E36209;">S</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">pos</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">len</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> m;</span><span style="color:#6A737D;">      // Sub的总块数</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> n;</span><span style="color:#6A737D;">      // 如果Sub存在未填满的块，存储该块中的有效元素数量</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i, j, count;</span></span>
<span class="line"><span style="color:#24292E;">    Chunk</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> r, </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> p;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(pos </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> pos </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> S.curlen </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> len </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> pos </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> len </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> S.curlen) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 如果是截取0个字符，不需要分配空间</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(len </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">Sub).head </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">Sub).tail </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">Sub).curlen </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    m </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> len </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> CHUNKSIZE;</span><span style="color:#6A737D;">    // 先计算需要填满的块</span></span>
<span class="line"><span style="color:#24292E;">    n </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> len </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> CHUNKSIZE;</span><span style="color:#6A737D;">    // 如果Sub存在未填满的块，计算该块中填充的有效元素数量</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(n </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        m</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">                // 计算Sub的总块数</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 1.创建Sub的结构</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> m; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 创建新块</span></span>
<span class="line"><span style="color:#24292E;">        r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (Chunk</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">) </span><span style="color:#6F42C1;">malloc</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">sizeof</span><span style="color:#24292E;">(Chunk));</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(r </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">exit</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        r-&gt;next </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 第一个块</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">Sub).head </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">Sub).tail </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 联接后面的块</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">Sub).tail-&gt;next </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r;</span></span>
<span class="line"><span style="color:#24292E;">            (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">Sub).tail </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 查找S中第pos个元素所在的块，并用指针p指向它</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(count </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> S.head; pos </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> count </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> CHUNKSIZE; count</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">, p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p-&gt;next) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 空循环</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">Sub).head;</span><span style="color:#6A737D;">            // 指向Sub的块</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">                      // 块链串Sub的游标</span></span>
<span class="line"><span style="color:#24292E;">    j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (pos </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> CHUNKSIZE;</span><span style="color:#6A737D;">  // 块链串S  的游标</span></span>
<span class="line"><span style="color:#24292E;">    count </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">                  // 统计遍历过的元素</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 2.为块链串Sub填充内容</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">while</span><span style="color:#24292E;">(count </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> len) {</span></span>
<span class="line"><span style="color:#24292E;">        r-&gt;ch[i] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p-&gt;ch[j];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (i </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> CHUNKSIZE;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r-&gt;next;</span><span style="color:#6A737D;">    // 指向Sub中下一个块</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (j </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> CHUNKSIZE;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(j </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p-&gt;next;</span><span style="color:#6A737D;">    // 指向S中下一个块</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        count</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 3.如果存在未填满的块</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(n </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 填充非串值内容(补上&#39;\\0&#39;)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">while</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> CHUNKSIZE) {</span></span>
<span class="line"><span style="color:#24292E;">            (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">Sub).tail-&gt;ch[i] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;</span><span style="color:#005CC5;">\\0</span><span style="color:#032F62;">&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 4.记录长度信息</span></span>
<span class="line"><span style="color:#24292E;">    (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">Sub).curlen </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> len;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="删除" tabindex="-1">删除 <a class="header-anchor" href="#删除" aria-label="Permalink to &quot;删除&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 删除S[pos, pos+len-1]。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">StrDelete</span><span style="color:#E1E4E8;">(LString</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">S</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">pos</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">len</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">    Chunk </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">pre;</span><span style="color:#6A737D;">    // 指向元素S[pos]所在的块的前驱</span></span>
<span class="line"><span style="color:#E1E4E8;">    Chunk </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">p;</span><span style="color:#6A737D;">      // 指向元素S[pos]所在的块</span></span>
<span class="line"><span style="color:#E1E4E8;">    Chunk </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">q;</span><span style="color:#6A737D;">      // 指向元素S[pos+len]所在的块</span></span>
<span class="line"><span style="color:#E1E4E8;">    Chunk </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">r;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i,j,count,total;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(pos </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> pos </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> S-&gt;curlen </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> len </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> pos </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> len </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> S-&gt;curlen){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 如果待删除的长度为0，则提前返回</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(len </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 查找S[pos]所在的块，并用指针pre指向它的前驱</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(pos </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> CHUNKSIZE) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        pre </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">     // 说明第pos个元素所在块为head</span></span>
<span class="line"><span style="color:#E1E4E8;">        p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">S).head;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(count </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, pre </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">S).head; count </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> (pos </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> CHUNKSIZE; count</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">, pre </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pre-&gt;next) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 空循环</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pre-&gt;next;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 查找S[pos+len]所在的块</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(count </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (pos </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> CHUNKSIZE, q </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p; count </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> (pos </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> len </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> CHUNKSIZE; count</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">, q </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> q-&gt;next) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 空循环</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 计算可能需要移动的元素个数</span></span>
<span class="line"><span style="color:#E1E4E8;">    total </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">S).curlen </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> (pos </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> len) </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 把最终的长度先定下来</span></span>
<span class="line"><span style="color:#E1E4E8;">    (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">S).curlen </span><span style="color:#F97583;">-=</span><span style="color:#E1E4E8;"> len;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (pos </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> CHUNKSIZE;</span></span>
<span class="line"><span style="color:#E1E4E8;">    j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (pos </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> len </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> CHUNKSIZE;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(p </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> q) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 删除p与q之间的块</span></span>
<span class="line"><span style="color:#E1E4E8;">        r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p-&gt;next;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;">(r </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> q) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            p-&gt;next </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r-&gt;next;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">free</span><span style="color:#E1E4E8;">(r);</span></span>
<span class="line"><span style="color:#E1E4E8;">            r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p-&gt;next;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(q </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">S).tail </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 如果需要删除p指向的整个块</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">((pos </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> CHUNKSIZE </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// p已经指向块链的头部</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(pre </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">S).head </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> q;</span></span>
<span class="line"><span style="color:#E1E4E8;">            } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                pre-&gt;next </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> q;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">free</span><span style="color:#E1E4E8;">(p);</span></span>
<span class="line"><span style="color:#E1E4E8;">            p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> q;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(q </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">S).tail </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pre;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 已经就位</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(p </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> q </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> j) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(count </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">; count </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> total; count</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 移动元素</span></span>
<span class="line"><span style="color:#E1E4E8;">        p-&gt;ch[i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> q-&gt;ch[j];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (i </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> CHUNKSIZE;</span></span>
<span class="line"><span style="color:#E1E4E8;">        j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (j </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> CHUNKSIZE;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            pre </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"><span style="color:#E1E4E8;">            p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p-&gt;next;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(j </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            q </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> q-&gt;next;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 恰好填满了最后的块</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">S).tail </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pre;</span></span>
<span class="line"><span style="color:#E1E4E8;">        r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">S).tail </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 剩余部分填充非串值字符</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> CHUNKSIZE) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            p-&gt;ch[i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\0</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p-&gt;next;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 释放多余的空间</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;">(r </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">S).tail-&gt;next </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r-&gt;next;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">free</span><span style="color:#E1E4E8;">(r);</span></span>
<span class="line"><span style="color:#E1E4E8;">        r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">S).tail-&gt;next;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 删除S[pos, pos+len-1]。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">StrDelete</span><span style="color:#24292E;">(LString</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">S</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">pos</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">len</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">    Chunk </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">pre;</span><span style="color:#6A737D;">    // 指向元素S[pos]所在的块的前驱</span></span>
<span class="line"><span style="color:#24292E;">    Chunk </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">p;</span><span style="color:#6A737D;">      // 指向元素S[pos]所在的块</span></span>
<span class="line"><span style="color:#24292E;">    Chunk </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">q;</span><span style="color:#6A737D;">      // 指向元素S[pos+len]所在的块</span></span>
<span class="line"><span style="color:#24292E;">    Chunk </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">r;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i,j,count,total;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(pos </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> pos </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> S-&gt;curlen </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> len </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> pos </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> len </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> S-&gt;curlen){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 如果待删除的长度为0，则提前返回</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(len </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 查找S[pos]所在的块，并用指针pre指向它的前驱</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(pos </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> CHUNKSIZE) {</span></span>
<span class="line"><span style="color:#24292E;">        pre </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">     // 说明第pos个元素所在块为head</span></span>
<span class="line"><span style="color:#24292E;">        p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">S).head;</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(count </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, pre </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">S).head; count </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> (pos </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> CHUNKSIZE; count</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">, pre </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pre-&gt;next) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 空循环</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pre-&gt;next;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 查找S[pos+len]所在的块</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(count </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (pos </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> CHUNKSIZE, q </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p; count </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> (pos </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> len </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> CHUNKSIZE; count</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">, q </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> q-&gt;next) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 空循环</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 计算可能需要移动的元素个数</span></span>
<span class="line"><span style="color:#24292E;">    total </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">S).curlen </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> (pos </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> len) </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 把最终的长度先定下来</span></span>
<span class="line"><span style="color:#24292E;">    (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">S).curlen </span><span style="color:#D73A49;">-=</span><span style="color:#24292E;"> len;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (pos </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> CHUNKSIZE;</span></span>
<span class="line"><span style="color:#24292E;">    j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (pos </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> len </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> CHUNKSIZE;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(p </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> q) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 删除p与q之间的块</span></span>
<span class="line"><span style="color:#24292E;">        r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p-&gt;next;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">while</span><span style="color:#24292E;">(r </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> q) {</span></span>
<span class="line"><span style="color:#24292E;">            p-&gt;next </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r-&gt;next;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">free</span><span style="color:#24292E;">(r);</span></span>
<span class="line"><span style="color:#24292E;">            r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p-&gt;next;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(q </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">S).tail </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 如果需要删除p指向的整个块</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">((pos </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> CHUNKSIZE </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// p已经指向块链的头部</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(pre </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">                (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">S).head </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> q;</span></span>
<span class="line"><span style="color:#24292E;">            } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                pre-&gt;next </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> q;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">free</span><span style="color:#24292E;">(p);</span></span>
<span class="line"><span style="color:#24292E;">            p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> q;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(q </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">                (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">S).tail </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pre;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 已经就位</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(p </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> q </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> j) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(count </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">; count </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> total; count</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 移动元素</span></span>
<span class="line"><span style="color:#24292E;">        p-&gt;ch[i] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> q-&gt;ch[j];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (i </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> CHUNKSIZE;</span></span>
<span class="line"><span style="color:#24292E;">        j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (j </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> CHUNKSIZE;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            pre </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p;</span></span>
<span class="line"><span style="color:#24292E;">            p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p-&gt;next;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(j </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            q </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> q-&gt;next;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 恰好填满了最后的块</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">S).tail </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pre;</span></span>
<span class="line"><span style="color:#24292E;">        r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p;</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">S).tail </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 剩余部分填充非串值字符</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">while</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> CHUNKSIZE) {</span></span>
<span class="line"><span style="color:#24292E;">            p-&gt;ch[i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;</span><span style="color:#005CC5;">\\0</span><span style="color:#032F62;">&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p-&gt;next;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 释放多余的空间</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">while</span><span style="color:#24292E;">(r </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">S).tail-&gt;next </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r-&gt;next;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">free</span><span style="color:#24292E;">(r);</span></span>
<span class="line"><span style="color:#24292E;">        r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">S).tail-&gt;next;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="串联接" tabindex="-1">串联接 <a class="header-anchor" href="#串联接" aria-label="Permalink to &quot;串联接&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 联接S1和S2，并存储到T中返回。如果联接后的长度溢出，则只保留未溢出的部分。</span></span>
<span class="line"><span style="color:#6A737D;"> * 返回值表示联接后的串是否完整。</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> *【注】</span></span>
<span class="line"><span style="color:#6A737D;"> * 该操作属于最小操作子集</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">Concat</span><span style="color:#E1E4E8;">(LString</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">T</span><span style="color:#E1E4E8;">, LString </span><span style="color:#FFAB70;">S1</span><span style="color:#E1E4E8;">, LString </span><span style="color:#FFAB70;">S2</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    Chunk</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> p;</span><span style="color:#6A737D;">   // 用来遍历S1和S2</span></span>
<span class="line"><span style="color:#E1E4E8;">    Chunk</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> r;</span><span style="color:#6A737D;">   // 遍历T</span></span>
<span class="line"><span style="color:#E1E4E8;">    Chunk</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> s;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i, j, count;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 计算长度信息</span></span>
<span class="line"><span style="color:#E1E4E8;">    (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T).curlen </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> S1.curlen </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> S2.curlen;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 计算需要创建多少个块</span></span>
<span class="line"><span style="color:#E1E4E8;">    count </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T).curlen </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> CHUNKSIZE </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> ((</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T).curlen </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> CHUNKSIZE </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 复制S1的结构</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> count; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        s </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (Chunk</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">) </span><span style="color:#B392F0;">malloc</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">sizeof</span><span style="color:#E1E4E8;">(Chunk));</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(s </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        s-&gt;next </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T).head </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T).tail </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> s;</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T).tail-&gt;next </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> s;</span></span>
<span class="line"><span style="color:#E1E4E8;">            (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T).tail </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> s;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T).head;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 复制S1中的数据</span></span>
<span class="line"><span style="color:#E1E4E8;">    j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> S1.head;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(count </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; count </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> S1.curlen; count</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        r-&gt;ch[i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p-&gt;ch[j];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (i </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> CHUNKSIZE;</span></span>
<span class="line"><span style="color:#E1E4E8;">        j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (j </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> CHUNKSIZE;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r-&gt;next;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(j </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p-&gt;next;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 复制S2中的数据</span></span>
<span class="line"><span style="color:#E1E4E8;">    j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> S2.head;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(count </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; count </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> S2.curlen; count</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        r-&gt;ch[i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p-&gt;ch[j];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (i </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> CHUNKSIZE;</span></span>
<span class="line"><span style="color:#E1E4E8;">        j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (j </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> CHUNKSIZE;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r-&gt;next;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(j </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p-&gt;next;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 多余的空间填充非串值字符</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> CHUNKSIZE) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            r-&gt;ch[i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\0</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 联接S1和S2，并存储到T中返回。如果联接后的长度溢出，则只保留未溢出的部分。</span></span>
<span class="line"><span style="color:#6A737D;"> * 返回值表示联接后的串是否完整。</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> *【注】</span></span>
<span class="line"><span style="color:#6A737D;"> * 该操作属于最小操作子集</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">Concat</span><span style="color:#24292E;">(LString</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">T</span><span style="color:#24292E;">, LString </span><span style="color:#E36209;">S1</span><span style="color:#24292E;">, LString </span><span style="color:#E36209;">S2</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    Chunk</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> p;</span><span style="color:#6A737D;">   // 用来遍历S1和S2</span></span>
<span class="line"><span style="color:#24292E;">    Chunk</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> r;</span><span style="color:#6A737D;">   // 遍历T</span></span>
<span class="line"><span style="color:#24292E;">    Chunk</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> s;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i, j, count;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 计算长度信息</span></span>
<span class="line"><span style="color:#24292E;">    (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T).curlen </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> S1.curlen </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> S2.curlen;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 计算需要创建多少个块</span></span>
<span class="line"><span style="color:#24292E;">    count </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T).curlen </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> CHUNKSIZE </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> ((</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T).curlen </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> CHUNKSIZE </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 复制S1的结构</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> count; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        s </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (Chunk</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">) </span><span style="color:#6F42C1;">malloc</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">sizeof</span><span style="color:#24292E;">(Chunk));</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(s </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">exit</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        s-&gt;next </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T).head </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T).tail </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> s;</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T).tail-&gt;next </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> s;</span></span>
<span class="line"><span style="color:#24292E;">            (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T).tail </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> s;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T).head;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 复制S1中的数据</span></span>
<span class="line"><span style="color:#24292E;">    j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> S1.head;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(count </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; count </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> S1.curlen; count</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        r-&gt;ch[i] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p-&gt;ch[j];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (i </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> CHUNKSIZE;</span></span>
<span class="line"><span style="color:#24292E;">        j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (j </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> CHUNKSIZE;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r-&gt;next;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(j </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p-&gt;next;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 复制S2中的数据</span></span>
<span class="line"><span style="color:#24292E;">    j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> S2.head;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(count </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; count </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> S2.curlen; count</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        r-&gt;ch[i] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p-&gt;ch[j];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (i </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> CHUNKSIZE;</span></span>
<span class="line"><span style="color:#24292E;">        j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (j </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> CHUNKSIZE;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r-&gt;next;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(j </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p-&gt;next;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 多余的空间填充非串值字符</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">while</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> CHUNKSIZE) {</span></span>
<span class="line"><span style="color:#24292E;">            r-&gt;ch[i] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;</span><span style="color:#005CC5;">\\0</span><span style="color:#032F62;">&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="查找" tabindex="-1">查找 <a class="header-anchor" href="#查找" aria-label="Permalink to &quot;查找&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 从pos处开始搜索模式串T在主串S中首次出现的位置，如果不存在，则返回0。</span></span>
<span class="line"><span style="color:#6A737D;"> * 如果查找成功，返回匹配的位置。</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> *【注】</span></span>
<span class="line"><span style="color:#6A737D;"> * 1.此实现需要依赖串的最小操作子集</span></span>
<span class="line"><span style="color:#6A737D;"> * 2.该实现比较低效</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Index</span><span style="color:#E1E4E8;">(LString </span><span style="color:#FFAB70;">S</span><span style="color:#E1E4E8;">, LString </span><span style="color:#FFAB70;">T</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">pos</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i, s, t;</span></span>
<span class="line"><span style="color:#E1E4E8;">    LString sub;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(pos </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> pos </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> S.curlen </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">StrEmpty</span><span style="color:#E1E4E8;">(T)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    s </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> S.curlen;</span><span style="color:#6A737D;">                //主串S长度</span></span>
<span class="line"><span style="color:#E1E4E8;">    t </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> T.curlen;</span><span style="color:#6A737D;">                //模式串T长度</span></span>
<span class="line"><span style="color:#E1E4E8;">    i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pos;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> t </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> s) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 获取S[i, i+m-1]</span></span>
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
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">                        //找不到匹配的则返回0</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 从pos处开始搜索模式串T在主串S中首次出现的位置，如果不存在，则返回0。</span></span>
<span class="line"><span style="color:#6A737D;"> * 如果查找成功，返回匹配的位置。</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> *【注】</span></span>
<span class="line"><span style="color:#6A737D;"> * 1.此实现需要依赖串的最小操作子集</span></span>
<span class="line"><span style="color:#6A737D;"> * 2.该实现比较低效</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Index</span><span style="color:#24292E;">(LString </span><span style="color:#E36209;">S</span><span style="color:#24292E;">, LString </span><span style="color:#E36209;">T</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">pos</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i, s, t;</span></span>
<span class="line"><span style="color:#24292E;">    LString sub;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(pos </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> pos </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> S.curlen </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">StrEmpty</span><span style="color:#24292E;">(T)) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    s </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> S.curlen;</span><span style="color:#6A737D;">                //主串S长度</span></span>
<span class="line"><span style="color:#24292E;">    t </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> T.curlen;</span><span style="color:#6A737D;">                //模式串T长度</span></span>
<span class="line"><span style="color:#24292E;">    i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pos;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">while</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> t </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> s) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 获取S[i, i+m-1]</span></span>
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
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">                        //找不到匹配的则返回0</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="替换" tabindex="-1">替换 <a class="header-anchor" href="#替换" aria-label="Permalink to &quot;替换&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 用V替换主串S中出现的所有与T相等的且不重叠的子串。</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> *【注】</span></span>
<span class="line"><span style="color:#6A737D;"> * 1.该操作依赖最小操作子集</span></span>
<span class="line"><span style="color:#6A737D;"> * 2.该实现比较低效</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">Replace</span><span style="color:#E1E4E8;">(LString</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">S</span><span style="color:#E1E4E8;">, LString </span><span style="color:#FFAB70;">T</span><span style="color:#E1E4E8;">, LString </span><span style="color:#FFAB70;">V</span><span style="color:#E1E4E8;">) {</span></span>
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
<span class="line"><span style="color:#E1E4E8;">        i </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">StrLength</span><span style="color:#E1E4E8;">(V);</span><span style="color:#6A737D;">      // i切换到下一个位置</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Index</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">S, T, i);</span><span style="color:#6A737D;">    // 查找下一个匹配的字符串</span></span>
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
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">Replace</span><span style="color:#24292E;">(LString</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">S</span><span style="color:#24292E;">, LString </span><span style="color:#E36209;">T</span><span style="color:#24292E;">, LString </span><span style="color:#E36209;">V</span><span style="color:#24292E;">) {</span></span>
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
<span class="line"><span style="color:#24292E;">        i </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">StrLength</span><span style="color:#24292E;">(V);</span><span style="color:#6A737D;">      // i切换到下一个位置</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Index</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">S, T, i);</span><span style="color:#6A737D;">    // 查找下一个匹配的字符串</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,49),C=[D];function u(h,S,g,d,B,f){return n(),a("div",null,C)}const U=s(A,[["render",u]]);export{N as __pageData,U as default};
