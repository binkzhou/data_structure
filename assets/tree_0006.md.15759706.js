import{_ as n,o as a,c as p,Q as l}from"./chunks/framework.91000686.js";const s="/data_structure/assets/1119415Y7-0.a3f3902e.gif",o="/data_structure/assets/111941N20-1.1734b378.gif",e="/data_structure/assets/image-20231205132312298.ffc66571.png",c="/data_structure/assets/image-20231205154123935.3fe5bbda.png",u=JSON.parse('{"title":"树的双亲表存储表示","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"tree/0006.md","filePath":"tree/0006.md"}'),t={name:"tree/0006.md"},r=l('<h1 id="树的双亲表存储表示" tabindex="-1">树的双亲表存储表示 <a class="header-anchor" href="#树的双亲表存储表示" aria-label="Permalink to &quot;树的双亲表存储表示&quot;">​</a></h1><p><img src="'+s+'" alt="普通树存储结构"></p><p>采用顺序存储方式，如果有父元素则存储父元素下标。没有则存储<code>-1</code>。</p><p>例如：A父元素是R，R的下标是0</p><p><img src="'+o+`" alt="双亲表示法存储普通树示意图"></p><h2 id="结构定义" tabindex="-1">结构定义 <a class="header-anchor" href="#结构定义" aria-label="Permalink to &quot;结构定义&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/* 树的最大结点树 */</span></span>
<span class="line"><span style="color:#F97583;">#define</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">MAX_TREE_SIZE</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1024</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 单个结点最大的孩子数量 */</span></span>
<span class="line"><span style="color:#F97583;">#define</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">MAX_CHILD_COUNT</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">8</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 树的元素类型定义，这里假设其元素类型为char */</span></span>
<span class="line"><span style="color:#F97583;">typedef</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">char</span><span style="color:#E1E4E8;"> TElemType;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* (双亲)树的结点定义 */</span></span>
<span class="line"><span style="color:#F97583;">typedef</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> PTNode{</span></span>
<span class="line"><span style="color:#E1E4E8;">    TElemType data;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> parent;</span><span style="color:#6A737D;">       // 双亲位置域</span></span>
<span class="line"><span style="color:#E1E4E8;">} PTNode;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * (双亲)树类型定义</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> *【注】</span></span>
<span class="line"><span style="color:#6A737D;"> * 1.树中结点在nodes中&quot;紧邻&quot;存储，没有空隙</span></span>
<span class="line"><span style="color:#6A737D;"> * 2.树根r可能出现在nodes的任意位置</span></span>
<span class="line"><span style="color:#6A737D;"> * 3.除根结点外，其他结点依次按层序顺着根结点往下排列（这一点与教材图示可能会有区别）</span></span>
<span class="line"><span style="color:#6A737D;"> * 4.nodes数组是循环使用的（这一点教材未提到）</span></span>
<span class="line"><span style="color:#6A737D;"> * 5.这里假设nodes空间是足够大的，可以视需求将其改为动态分配存储</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">typedef</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    PTNode </span><span style="color:#FFAB70;">nodes</span><span style="color:#E1E4E8;">[MAX_TREE_SIZE];</span><span style="color:#6A737D;">    // 存储树中结点</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> r;</span><span style="color:#6A737D;">    // 树根位置(索引)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> n;</span><span style="color:#6A737D;">    // 树的结点数</span></span>
<span class="line"><span style="color:#E1E4E8;">} PTree;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 树中某个结点的信息 */</span></span>
<span class="line"><span style="color:#F97583;">typedef</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> row;</span><span style="color:#6A737D;">          // 当前结点所在的行</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> col;</span><span style="color:#6A737D;">          // 当前结点所在的列</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> childIndex;</span><span style="color:#6A737D;">   // 当前结点是第几个孩子</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> firstChild;</span><span style="color:#6A737D;">   // 当前结点的第一个孩子在树中的索引</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> lastChild;</span><span style="color:#6A737D;">    // 当前结点的最后一个孩子在树中的索引</span></span>
<span class="line"><span style="color:#E1E4E8;">} Pos;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/* 树的最大结点树 */</span></span>
<span class="line"><span style="color:#D73A49;">#define</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MAX_TREE_SIZE</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1024</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 单个结点最大的孩子数量 */</span></span>
<span class="line"><span style="color:#D73A49;">#define</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MAX_CHILD_COUNT</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">8</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 树的元素类型定义，这里假设其元素类型为char */</span></span>
<span class="line"><span style="color:#D73A49;">typedef</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">char</span><span style="color:#24292E;"> TElemType;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* (双亲)树的结点定义 */</span></span>
<span class="line"><span style="color:#D73A49;">typedef</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">struct</span><span style="color:#24292E;"> PTNode{</span></span>
<span class="line"><span style="color:#24292E;">    TElemType data;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> parent;</span><span style="color:#6A737D;">       // 双亲位置域</span></span>
<span class="line"><span style="color:#24292E;">} PTNode;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * (双亲)树类型定义</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> *【注】</span></span>
<span class="line"><span style="color:#6A737D;"> * 1.树中结点在nodes中&quot;紧邻&quot;存储，没有空隙</span></span>
<span class="line"><span style="color:#6A737D;"> * 2.树根r可能出现在nodes的任意位置</span></span>
<span class="line"><span style="color:#6A737D;"> * 3.除根结点外，其他结点依次按层序顺着根结点往下排列（这一点与教材图示可能会有区别）</span></span>
<span class="line"><span style="color:#6A737D;"> * 4.nodes数组是循环使用的（这一点教材未提到）</span></span>
<span class="line"><span style="color:#6A737D;"> * 5.这里假设nodes空间是足够大的，可以视需求将其改为动态分配存储</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">typedef</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">struct</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    PTNode </span><span style="color:#E36209;">nodes</span><span style="color:#24292E;">[MAX_TREE_SIZE];</span><span style="color:#6A737D;">    // 存储树中结点</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> r;</span><span style="color:#6A737D;">    // 树根位置(索引)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> n;</span><span style="color:#6A737D;">    // 树的结点数</span></span>
<span class="line"><span style="color:#24292E;">} PTree;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 树中某个结点的信息 */</span></span>
<span class="line"><span style="color:#D73A49;">typedef</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">struct</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> row;</span><span style="color:#6A737D;">          // 当前结点所在的行</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> col;</span><span style="color:#6A737D;">          // 当前结点所在的列</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> childIndex;</span><span style="color:#6A737D;">   // 当前结点是第几个孩子</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> firstChild;</span><span style="color:#6A737D;">   // 当前结点的第一个孩子在树中的索引</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> lastChild;</span><span style="color:#6A737D;">    // 当前结点的最后一个孩子在树中的索引</span></span>
<span class="line"><span style="color:#24292E;">} Pos;</span></span></code></pre></div><h2 id="初始化" tabindex="-1">初始化 <a class="header-anchor" href="#初始化" aria-label="Permalink to &quot;初始化&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 构造空树。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">InitTree</span><span style="color:#E1E4E8;">(PTree</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">T</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(T </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 树的结点数置零</span></span>
<span class="line"><span style="color:#E1E4E8;">    T-&gt;n </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 所有数据清零</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">memset</span><span style="color:#E1E4E8;">(T-&gt;nodes,</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span><span style="color:#F97583;">sizeof</span><span style="color:#E1E4E8;">(T-&gt;nodes));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 构造空树。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">InitTree</span><span style="color:#24292E;">(PTree</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">T</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(T </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 树的结点数置零</span></span>
<span class="line"><span style="color:#24292E;">    T-&gt;n </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 所有数据清零</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">memset</span><span style="color:#24292E;">(T-&gt;nodes,</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span><span style="color:#D73A49;">sizeof</span><span style="color:#24292E;">(T-&gt;nodes));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="销毁" tabindex="-1">销毁 <a class="header-anchor" href="#销毁" aria-label="Permalink to &quot;销毁&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 释放树所占内存。</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> *【注】</span></span>
<span class="line"><span style="color:#6A737D;"> * 树的双亲表结构无法被销毁</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">DestroyTree</span><span style="color:#E1E4E8;">(PTree</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">T</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 无法销毁</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 释放树所占内存。</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> *【注】</span></span>
<span class="line"><span style="color:#6A737D;"> * 树的双亲表结构无法被销毁</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">DestroyTree</span><span style="color:#24292E;">(PTree</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">T</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 无法销毁</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="置空" tabindex="-1">置空 <a class="header-anchor" href="#置空" aria-label="Permalink to &quot;置空&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 清理树中的数据，使其成为空树。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">ClearTree</span><span style="color:#E1E4E8;">(PTree</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">T</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(T </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 将元素数量归零即可</span></span>
<span class="line"><span style="color:#E1E4E8;">    T-&gt;n </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 所有数据清零</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">memset</span><span style="color:#E1E4E8;">(T-&gt;nodes,</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span><span style="color:#F97583;">sizeof</span><span style="color:#E1E4E8;">(T-&gt;nodes));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 清理树中的数据，使其成为空树。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">ClearTree</span><span style="color:#24292E;">(PTree</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">T</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(T </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 将元素数量归零即可</span></span>
<span class="line"><span style="color:#24292E;">    T-&gt;n </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 所有数据清零</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">memset</span><span style="color:#24292E;">(T-&gt;nodes,</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span><span style="color:#D73A49;">sizeof</span><span style="color:#24292E;">(T-&gt;nodes));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="创建" tabindex="-1">创建 <a class="header-anchor" href="#创建" aria-label="Permalink to &quot;创建&quot;">​</a></h2><p><img src="`+e+`" alt="image-20231205132312298"></p><p>处理的数据</p><p>R入队，队内元素为[<code>5</code>]。nodes元素[<code>\\0</code>,<code>\\0</code>,<code>\\0</code>,<code>\\0</code>,<code>\\0</code>,<code>R</code>]</p><p>录入ABC；队列出队<code>5</code>,队内元素为[]。队列依次入队[<code>6</code>,<code>7</code>,<code>8</code>]。nodes元素[<code>\\0</code>,<code>\\0</code>,<code>\\0</code>,<code>\\0</code>,<code>\\0</code>,<code>R</code>,<code>A</code>,<code>B</code>,<code>C</code>]。ABC的父元素为<code>5</code></p><p>录入DE；队列出队<code>6</code>,队列元素为[<code>7</code>,<code>8</code>]。队列依次入队[<code>7</code>,<code>8</code>,<code>9</code>,<code>10</code>]。nodes元素[<code>\\0</code>,<code>\\0</code>,<code>\\0</code>,<code>\\0</code>,<code>\\0</code>,<code>R</code>,<code>A</code>,<code>B</code>,<code>C</code>,<code>D</code>,<code>E</code>]。</p><p>...</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">根结点位置：5</span></span>
<span class="line"><span style="color:#e1e4e8;">根结点的值：R</span></span>
<span class="line"><span style="color:#e1e4e8;">R的孩子结点：ABC</span></span>
<span class="line"><span style="color:#e1e4e8;">A的孩子结点：DE</span></span>
<span class="line"><span style="color:#e1e4e8;">B的孩子结点：^</span></span>
<span class="line"><span style="color:#e1e4e8;">C的孩子结点：F</span></span>
<span class="line"><span style="color:#e1e4e8;">D的孩子结点：^</span></span>
<span class="line"><span style="color:#e1e4e8;">E的孩子结点：^</span></span>
<span class="line"><span style="color:#e1e4e8;">F的孩子结点：GHK</span></span>
<span class="line"><span style="color:#e1e4e8;">G的孩子结点：^</span></span>
<span class="line"><span style="color:#e1e4e8;">H的孩子结点：^</span></span>
<span class="line"><span style="color:#e1e4e8;">K的孩子结点：^</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">根结点位置：5</span></span>
<span class="line"><span style="color:#24292e;">根结点的值：R</span></span>
<span class="line"><span style="color:#24292e;">R的孩子结点：ABC</span></span>
<span class="line"><span style="color:#24292e;">A的孩子结点：DE</span></span>
<span class="line"><span style="color:#24292e;">B的孩子结点：^</span></span>
<span class="line"><span style="color:#24292e;">C的孩子结点：F</span></span>
<span class="line"><span style="color:#24292e;">D的孩子结点：^</span></span>
<span class="line"><span style="color:#24292e;">E的孩子结点：^</span></span>
<span class="line"><span style="color:#24292e;">F的孩子结点：GHK</span></span>
<span class="line"><span style="color:#24292e;">G的孩子结点：^</span></span>
<span class="line"><span style="color:#24292e;">H的孩子结点：^</span></span>
<span class="line"><span style="color:#24292e;">K的孩子结点：^</span></span></code></pre></div><p>创建函数</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*━━━━━━━━━━━━━━━━━━━━━━ 仅限内部使用的函数 ━━━━━━━━━━━━━━━━━━━━━━*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建树的内部函数</span></span>
<span class="line"><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Create</span><span style="color:#E1E4E8;">(PTree</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">T</span><span style="color:#E1E4E8;">, FILE</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">fp</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> r;</span><span style="color:#6A737D;">          // 树的根结点的位置（索引）</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> n;</span><span style="color:#6A737D;">          // 记录元素数量</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> cur;</span><span style="color:#6A737D;">        // 游标</span></span>
<span class="line"><span style="color:#E1E4E8;">    TElemType ch;</span></span>
<span class="line"><span style="color:#E1E4E8;">    LinkQueue Q;</span></span>
<span class="line"><span style="color:#E1E4E8;">    QElemType e;</span><span style="color:#6A737D;">    // 队列元素指示结点的位置</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">char</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">s</span><span style="color:#E1E4E8;">[MAX_CHILD_COUNT </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">InitQueue</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">Q);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    n </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 读取根结点的位置</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(fp </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;请输入根结点的位置(0~</span><span style="color:#79B8FF;">%d</span><span style="color:#9ECBFF;">)：&quot;</span><span style="color:#E1E4E8;">, MAX_TREE_SIZE </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">scanf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%d</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">r);</span></span>
<span class="line"><span style="color:#E1E4E8;">        cur </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;请输入根结点的值：&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">scanf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%s</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, s);</span></span>
<span class="line"><span style="color:#E1E4E8;">        ch </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">s</span><span style="color:#E1E4E8;">[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 树根入队</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">EnQueue</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">Q, cur);</span></span>
<span class="line"><span style="color:#E1E4E8;">        T-&gt;nodes[cur].data </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ch;</span></span>
<span class="line"><span style="color:#E1E4E8;">        T-&gt;nodes[cur].parent </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        cur </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (cur </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> MAX_TREE_SIZE;</span></span>
<span class="line"><span style="color:#E1E4E8;">        n</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">!</span><span style="color:#B392F0;">QueueEmpty</span><span style="color:#E1E4E8;">(Q)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">DeQueue</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">Q, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">e);</span><span style="color:#6A737D;">    // 父结点位置出队</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;请依次输入 </span><span style="color:#79B8FF;">%c</span><span style="color:#9ECBFF;"> 的孩子结点，不存在孩子时输入一个^：&quot;</span><span style="color:#E1E4E8;">, T-&gt;nodes[e].data);</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">scanf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%s</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, s);</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">strlen</span><span style="color:#E1E4E8;">(s); i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">s</span><span style="color:#E1E4E8;">[i] </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;^&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">EnQueue</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">Q, cur);</span><span style="color:#6A737D;"> // 当前结点位置入队</span></span>
<span class="line"><span style="color:#E1E4E8;">                T-&gt;nodes[cur].data </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">s</span><span style="color:#E1E4E8;">[i];</span></span>
<span class="line"><span style="color:#E1E4E8;">                T-&gt;nodes[cur].parent </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> e;</span></span>
<span class="line"><span style="color:#E1E4E8;">                cur </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (cur </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> MAX_TREE_SIZE;</span></span>
<span class="line"><span style="color:#E1E4E8;">                n</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 录入根结点的位置</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">ReadData</span><span style="color:#E1E4E8;">(fp, </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%d</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">r);</span></span>
<span class="line"><span style="color:#E1E4E8;">        cur </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 录入根结点的值</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">ReadData</span><span style="color:#E1E4E8;">(fp, </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%s</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, s);</span></span>
<span class="line"><span style="color:#E1E4E8;">        ch </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">s</span><span style="color:#E1E4E8;">[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;录入根结点的值：</span><span style="color:#79B8FF;">%c\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, ch);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 树根所在位置入队</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">EnQueue</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">Q, cur);</span></span>
<span class="line"><span style="color:#E1E4E8;">        T-&gt;nodes[cur].data </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ch;</span></span>
<span class="line"><span style="color:#E1E4E8;">        T-&gt;nodes[cur].parent </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        cur </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (cur </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> MAX_TREE_SIZE;</span></span>
<span class="line"><span style="color:#E1E4E8;">        n</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">!</span><span style="color:#B392F0;">QueueEmpty</span><span style="color:#E1E4E8;">(Q)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">ReadData</span><span style="color:#E1E4E8;">(fp, </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%s</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, s);</span></span>
<span class="line"><span style="color:#E1E4E8;">            ch </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">s</span><span style="color:#E1E4E8;">[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;依次录入 </span><span style="color:#79B8FF;">%c</span><span style="color:#9ECBFF;"> 结点的孩子：&quot;</span><span style="color:#E1E4E8;">, ch);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 录入孩子结点</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">ReadData</span><span style="color:#E1E4E8;">(fp, </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%s</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, s);</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%s\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, s);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">DeQueue</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">Q, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">e);</span><span style="color:#6A737D;">    // 父结点位置出队</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 遍历孩子</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">strlen</span><span style="color:#E1E4E8;">(s); i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">s</span><span style="color:#E1E4E8;">[i] </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;^&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">EnQueue</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">Q, cur);</span><span style="color:#6A737D;"> // 当前结点位置入队</span></span>
<span class="line"><span style="color:#E1E4E8;">                T-&gt;nodes[cur].data </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">s</span><span style="color:#E1E4E8;">[i];</span></span>
<span class="line"><span style="color:#E1E4E8;">                T-&gt;nodes[cur].parent </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> e;</span></span>
<span class="line"><span style="color:#E1E4E8;">                cur </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (cur </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> MAX_TREE_SIZE;</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// 增加树的结点数</span></span>
<span class="line"><span style="color:#E1E4E8;">                n</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 树根位置(索引)</span></span>
<span class="line"><span style="color:#E1E4E8;">    T-&gt;r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 树的结点数</span></span>
<span class="line"><span style="color:#E1E4E8;">    T-&gt;n </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> n;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 按照预设的定义来创建树。</span></span>
<span class="line"><span style="color:#6A737D;"> * 这里约定使用【层序序列】来创建树。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">CreateTree</span><span style="color:#E1E4E8;">(PTree</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">T</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">char*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">path</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    FILE</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> fp;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> readFromConsole;</span><span style="color:#6A737D;">    // 是否从控制台读取数据</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 如果没有文件路径信息，则从控制台读取输入</span></span>
<span class="line"><span style="color:#E1E4E8;">    readFromConsole </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> path </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">strcmp</span><span style="color:#E1E4E8;">(path, </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(readFromConsole) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;请输入树的元素信息，对于空结点，使用^代替...</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">Create</span><span style="color:#E1E4E8;">(T, </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 打开文件，准备读取测试数据</span></span>
<span class="line"><span style="color:#E1E4E8;">        fp </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fopen</span><span style="color:#E1E4E8;">(path, </span><span style="color:#9ECBFF;">&quot;r&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(fp </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">Create</span><span style="color:#E1E4E8;">(T, fp);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">fclose</span><span style="color:#E1E4E8;">(fp);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*━━━━━━━━━━━━━━━━━━━━━━ 仅限内部使用的函数 ━━━━━━━━━━━━━━━━━━━━━━*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建树的内部函数</span></span>
<span class="line"><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Create</span><span style="color:#24292E;">(PTree</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">T</span><span style="color:#24292E;">, FILE</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">fp</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> r;</span><span style="color:#6A737D;">          // 树的根结点的位置（索引）</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> n;</span><span style="color:#6A737D;">          // 记录元素数量</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> cur;</span><span style="color:#6A737D;">        // 游标</span></span>
<span class="line"><span style="color:#24292E;">    TElemType ch;</span></span>
<span class="line"><span style="color:#24292E;">    LinkQueue Q;</span></span>
<span class="line"><span style="color:#24292E;">    QElemType e;</span><span style="color:#6A737D;">    // 队列元素指示结点的位置</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">char</span><span style="color:#24292E;"> </span><span style="color:#E36209;">s</span><span style="color:#24292E;">[MAX_CHILD_COUNT </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">InitQueue</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">Q);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    n </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 读取根结点的位置</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(fp </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;请输入根结点的位置(0~</span><span style="color:#005CC5;">%d</span><span style="color:#032F62;">)：&quot;</span><span style="color:#24292E;">, MAX_TREE_SIZE </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">scanf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%d</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">r);</span></span>
<span class="line"><span style="color:#24292E;">        cur </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;请输入根结点的值：&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">scanf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%s</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, s);</span></span>
<span class="line"><span style="color:#24292E;">        ch </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#E36209;">s</span><span style="color:#24292E;">[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 树根入队</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">EnQueue</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">Q, cur);</span></span>
<span class="line"><span style="color:#24292E;">        T-&gt;nodes[cur].data </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ch;</span></span>
<span class="line"><span style="color:#24292E;">        T-&gt;nodes[cur].parent </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        cur </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (cur </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> MAX_TREE_SIZE;</span></span>
<span class="line"><span style="color:#24292E;">        n</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">while</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#6F42C1;">QueueEmpty</span><span style="color:#24292E;">(Q)) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">DeQueue</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">Q, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">e);</span><span style="color:#6A737D;">    // 父结点位置出队</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;请依次输入 </span><span style="color:#005CC5;">%c</span><span style="color:#032F62;"> 的孩子结点，不存在孩子时输入一个^：&quot;</span><span style="color:#24292E;">, T-&gt;nodes[e].data);</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">scanf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%s</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, s);</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">strlen</span><span style="color:#24292E;">(s); i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#E36209;">s</span><span style="color:#24292E;">[i] </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;^&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">EnQueue</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">Q, cur);</span><span style="color:#6A737D;"> // 当前结点位置入队</span></span>
<span class="line"><span style="color:#24292E;">                T-&gt;nodes[cur].data </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#E36209;">s</span><span style="color:#24292E;">[i];</span></span>
<span class="line"><span style="color:#24292E;">                T-&gt;nodes[cur].parent </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> e;</span></span>
<span class="line"><span style="color:#24292E;">                cur </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (cur </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> MAX_TREE_SIZE;</span></span>
<span class="line"><span style="color:#24292E;">                n</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 录入根结点的位置</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">ReadData</span><span style="color:#24292E;">(fp, </span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%d</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">r);</span></span>
<span class="line"><span style="color:#24292E;">        cur </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 录入根结点的值</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">ReadData</span><span style="color:#24292E;">(fp, </span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%s</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, s);</span></span>
<span class="line"><span style="color:#24292E;">        ch </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#E36209;">s</span><span style="color:#24292E;">[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;录入根结点的值：</span><span style="color:#005CC5;">%c\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, ch);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 树根所在位置入队</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">EnQueue</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">Q, cur);</span></span>
<span class="line"><span style="color:#24292E;">        T-&gt;nodes[cur].data </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ch;</span></span>
<span class="line"><span style="color:#24292E;">        T-&gt;nodes[cur].parent </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        cur </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (cur </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> MAX_TREE_SIZE;</span></span>
<span class="line"><span style="color:#24292E;">        n</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">while</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#6F42C1;">QueueEmpty</span><span style="color:#24292E;">(Q)) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">ReadData</span><span style="color:#24292E;">(fp, </span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%s</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, s);</span></span>
<span class="line"><span style="color:#24292E;">            ch </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#E36209;">s</span><span style="color:#24292E;">[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;依次录入 </span><span style="color:#005CC5;">%c</span><span style="color:#032F62;"> 结点的孩子：&quot;</span><span style="color:#24292E;">, ch);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 录入孩子结点</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">ReadData</span><span style="color:#24292E;">(fp, </span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%s</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, s);</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%s\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, s);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">DeQueue</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">Q, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">e);</span><span style="color:#6A737D;">    // 父结点位置出队</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 遍历孩子</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">strlen</span><span style="color:#24292E;">(s); i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#E36209;">s</span><span style="color:#24292E;">[i] </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;^&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">EnQueue</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">Q, cur);</span><span style="color:#6A737D;"> // 当前结点位置入队</span></span>
<span class="line"><span style="color:#24292E;">                T-&gt;nodes[cur].data </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#E36209;">s</span><span style="color:#24292E;">[i];</span></span>
<span class="line"><span style="color:#24292E;">                T-&gt;nodes[cur].parent </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> e;</span></span>
<span class="line"><span style="color:#24292E;">                cur </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (cur </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> MAX_TREE_SIZE;</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// 增加树的结点数</span></span>
<span class="line"><span style="color:#24292E;">                n</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 树根位置(索引)</span></span>
<span class="line"><span style="color:#24292E;">    T-&gt;r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 树的结点数</span></span>
<span class="line"><span style="color:#24292E;">    T-&gt;n </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> n;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 按照预设的定义来创建树。</span></span>
<span class="line"><span style="color:#6A737D;"> * 这里约定使用【层序序列】来创建树。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">CreateTree</span><span style="color:#24292E;">(PTree</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">T</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">char*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">path</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    FILE</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> fp;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> readFromConsole;</span><span style="color:#6A737D;">    // 是否从控制台读取数据</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 如果没有文件路径信息，则从控制台读取输入</span></span>
<span class="line"><span style="color:#24292E;">    readFromConsole </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> path </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">strcmp</span><span style="color:#24292E;">(path, </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(readFromConsole) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;请输入树的元素信息，对于空结点，使用^代替...</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">Create</span><span style="color:#24292E;">(T, </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 打开文件，准备读取测试数据</span></span>
<span class="line"><span style="color:#24292E;">        fp </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fopen</span><span style="color:#24292E;">(path, </span><span style="color:#032F62;">&quot;r&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(fp </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">Create</span><span style="color:#24292E;">(T, fp);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">fclose</span><span style="color:#24292E;">(fp);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="判空" tabindex="-1">判空 <a class="header-anchor" href="#判空" aria-label="Permalink to &quot;判空&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 判断树是否为空树。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">TreeEmpty</span><span style="color:#E1E4E8;">(PTree </span><span style="color:#FFAB70;">T</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> T.n </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">TRUE</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">FALSE</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 判断树是否为空树。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">TreeEmpty</span><span style="color:#24292E;">(PTree </span><span style="color:#E36209;">T</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> T.n </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">TRUE</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">FALSE</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="树深" tabindex="-1">树深 <a class="header-anchor" href="#树深" aria-label="Permalink to &quot;树深&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>因为是层序遍历的，最后一个元素是树中最后一个元素。</p><p>从最后一个元素查询一直向上查找其父元素就可以统计元素个数。</p></div><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 返回树的深度（层数）。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TreeDepth</span><span style="color:#E1E4E8;">(PTree </span><span style="color:#FFAB70;">T</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> k, level;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 遇到空树则无需继续计算</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">TreeEmpty</span><span style="color:#E1E4E8;">(T)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /*</span></span>
<span class="line"><span style="color:#6A737D;">     * 将k初始化为最后一个结点的位置</span></span>
<span class="line"><span style="color:#6A737D;">     * 由于树的结点按层序存储，故最后存储的结点必定位于最大层</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    k </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (T.r </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> T.n </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> MAX_TREE_SIZE;</span></span>
<span class="line"><span style="color:#E1E4E8;">    level </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">do</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        level</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        k </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> T.nodes[k].parent;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;">(k </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> level;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 返回树的深度（层数）。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TreeDepth</span><span style="color:#24292E;">(PTree </span><span style="color:#E36209;">T</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> k, level;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 遇到空树则无需继续计算</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">TreeEmpty</span><span style="color:#24292E;">(T)) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /*</span></span>
<span class="line"><span style="color:#6A737D;">     * 将k初始化为最后一个结点的位置</span></span>
<span class="line"><span style="color:#6A737D;">     * 由于树的结点按层序存储，故最后存储的结点必定位于最大层</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    k </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (T.r </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> T.n </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> MAX_TREE_SIZE;</span></span>
<span class="line"><span style="color:#24292E;">    level </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">do</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        level</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        k </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> T.nodes[k].parent;</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">while</span><span style="color:#24292E;">(k </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> level;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="取值" tabindex="-1">取值 <a class="header-anchor" href="#取值" aria-label="Permalink to &quot;取值&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">INFO</p><p>从头到尾依次查找即可</p></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-o9C5O" id="tab-oiRrGJd" checked="checked"><label for="tab-oiRrGJd">PTree.c</label><input type="radio" name="group-o9C5O" id="tab-XuvnxtS"><label for="tab-XuvnxtS">main.c</label></div><div class="blocks"><div class="language-c vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 返回树结点e的索引，如果不存在，返回-1</span></span>
<span class="line"><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">EIndex</span><span style="color:#E1E4E8;">(PTree </span><span style="color:#FFAB70;">T</span><span style="color:#E1E4E8;">, TElemType </span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> T.r;</span><span style="color:#6A737D;">    // 指向根结点</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 遇到空树则无需继续计算</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">TreeEmpty</span><span style="color:#E1E4E8;">(T)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 在树中查找结点e</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> (T.r </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> T.n) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> MAX_TREE_SIZE) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(T.nodes[i].data </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> e) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> i;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (i </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> MAX_TREE_SIZE;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 取值</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * 返回树中指定结点的值。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">TElemType </span><span style="color:#B392F0;">Value</span><span style="color:#E1E4E8;">(PTree </span><span style="color:#FFAB70;">T</span><span style="color:#E1E4E8;">, TElemType </span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 遇到空树则无需继续计算</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">TreeEmpty</span><span style="color:#E1E4E8;">(T)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\0</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 获取结点e的索引</span></span>
<span class="line"><span style="color:#E1E4E8;">    p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">EIndex</span><span style="color:#E1E4E8;">(T, e);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 如果没有找到元素e</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(p </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\0</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> T.nodes[p].data;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 返回树结点e的索引，如果不存在，返回-1</span></span>
<span class="line"><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">EIndex</span><span style="color:#24292E;">(PTree </span><span style="color:#E36209;">T</span><span style="color:#24292E;">, TElemType </span><span style="color:#E36209;">e</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> T.r;</span><span style="color:#6A737D;">    // 指向根结点</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 遇到空树则无需继续计算</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">TreeEmpty</span><span style="color:#24292E;">(T)) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 在树中查找结点e</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">while</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> (T.r </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> T.n) </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> MAX_TREE_SIZE) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(T.nodes[i].data </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> e) {</span></span>
<span class="line"><span style="color:#24292E;">            p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> i;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (i </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> MAX_TREE_SIZE;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> p;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 取值</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * 返回树中指定结点的值。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">TElemType </span><span style="color:#6F42C1;">Value</span><span style="color:#24292E;">(PTree </span><span style="color:#E36209;">T</span><span style="color:#24292E;">, TElemType </span><span style="color:#E36209;">e</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> p;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 遇到空树则无需继续计算</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">TreeEmpty</span><span style="color:#24292E;">(T)) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;</span><span style="color:#005CC5;">\\0</span><span style="color:#032F62;">&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 获取结点e的索引</span></span>
<span class="line"><span style="color:#24292E;">    p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">EIndex</span><span style="color:#24292E;">(T, e);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 如果没有找到元素e</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(p </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;</span><span style="color:#005CC5;">\\0</span><span style="color:#032F62;">&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> T.nodes[p].data;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">#include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&lt;stdio.h&gt;</span></span>
<span class="line"><span style="color:#F97583;">#include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;PTree.h&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    PTree T;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 初始化空树T</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">InitTree</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">T);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 按先序序列创建数T</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">CreateTree</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">T,</span><span style="color:#9ECBFF;">&quot;TestData_T.txt&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 查找结点E</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">Value</span><span style="color:#E1E4E8;">(T,</span><span style="color:#9ECBFF;">&#39;E&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%c\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">Value</span><span style="color:#E1E4E8;">(T,</span><span style="color:#9ECBFF;">&#39;E&#39;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&lt;stdio.h&gt;</span></span>
<span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;PTree.h&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    PTree T;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 初始化空树T</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">InitTree</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">T);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 按先序序列创建数T</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">CreateTree</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">T,</span><span style="color:#032F62;">&quot;TestData_T.txt&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 查找结点E</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">Value</span><span style="color:#24292E;">(T,</span><span style="color:#032F62;">&#39;E&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%c\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">Value</span><span style="color:#24292E;">(T,</span><span style="color:#032F62;">&#39;E&#39;</span><span style="color:#24292E;">));</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></div></div><h2 id="赋值" tabindex="-1">赋值 <a class="header-anchor" href="#赋值" aria-label="Permalink to &quot;赋值&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">INFO</p><p>从头到尾查找结点所在的索引，然后修改对应索引的值。</p></div><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 为树指定的结点赋值。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">Assign</span><span style="color:#E1E4E8;">(PTree</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">T</span><span style="color:#E1E4E8;">, TElemType </span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">, TElemType </span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 遇到空树则无需继续计算</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">TreeEmpty</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 获取结点e的索引</span></span>
<span class="line"><span style="color:#E1E4E8;">    p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">EIndex</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T, e);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 如果没有找到元素e</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(p </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 进行赋值</span></span>
<span class="line"><span style="color:#E1E4E8;">        T-&gt;nodes[p].data </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> value;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 为树指定的结点赋值。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">Assign</span><span style="color:#24292E;">(PTree</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">T</span><span style="color:#24292E;">, TElemType </span><span style="color:#E36209;">e</span><span style="color:#24292E;">, TElemType </span><span style="color:#E36209;">value</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> p;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 遇到空树则无需继续计算</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">TreeEmpty</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T)) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 获取结点e的索引</span></span>
<span class="line"><span style="color:#24292E;">    p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">EIndex</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T, e);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 如果没有找到元素e</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(p </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 进行赋值</span></span>
<span class="line"><span style="color:#24292E;">        T-&gt;nodes[p].data </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> value;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="根" tabindex="-1">根 <a class="header-anchor" href="#根" aria-label="Permalink to &quot;根&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 返回树的根结点。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">TElemType </span><span style="color:#B392F0;">Root</span><span style="color:#E1E4E8;">(PTree </span><span style="color:#FFAB70;">T</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 遇到空树则无需继续计算</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">TreeEmpty</span><span style="color:#E1E4E8;">(T)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\0</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> T.nodes[T.r].data;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 返回树的根结点。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">TElemType </span><span style="color:#6F42C1;">Root</span><span style="color:#24292E;">(PTree </span><span style="color:#E36209;">T</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 遇到空树则无需继续计算</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">TreeEmpty</span><span style="color:#24292E;">(T)) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;</span><span style="color:#005CC5;">\\0</span><span style="color:#032F62;">&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> T.nodes[T.r].data;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="双亲-父结点" tabindex="-1">双亲(父结点) <a class="header-anchor" href="#双亲-父结点" aria-label="Permalink to &quot;双亲(父结点)&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">INFO</p><p>查找当前节点的索引；获取当前结点的索引，通过当前结点的索引获取父元素的索引来获取值。</p></div><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 返回树中结点e的双亲结点。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">TElemType </span><span style="color:#B392F0;">Parent</span><span style="color:#E1E4E8;">(PTree </span><span style="color:#FFAB70;">T</span><span style="color:#E1E4E8;">, TElemType </span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> p, parent;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 遇到空树则无需继续计算</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">TreeEmpty</span><span style="color:#E1E4E8;">(T)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\0</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 获取结点e的索引</span></span>
<span class="line"><span style="color:#E1E4E8;">    p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">EIndex</span><span style="color:#E1E4E8;">(T, e);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 如果没有找到元素e</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(p </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\0</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        parent </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> T.nodes[p].parent;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 根结点无双亲</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(parent </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\0</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> T.nodes[parent].data;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 返回树中结点e的双亲结点。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">TElemType </span><span style="color:#6F42C1;">Parent</span><span style="color:#24292E;">(PTree </span><span style="color:#E36209;">T</span><span style="color:#24292E;">, TElemType </span><span style="color:#E36209;">e</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> p, parent;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 遇到空树则无需继续计算</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">TreeEmpty</span><span style="color:#24292E;">(T)) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;</span><span style="color:#005CC5;">\\0</span><span style="color:#032F62;">&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 获取结点e的索引</span></span>
<span class="line"><span style="color:#24292E;">    p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">EIndex</span><span style="color:#24292E;">(T, e);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 如果没有找到元素e</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(p </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;</span><span style="color:#005CC5;">\\0</span><span style="color:#032F62;">&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        parent </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> T.nodes[p].parent;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 根结点无双亲</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(parent </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;</span><span style="color:#005CC5;">\\0</span><span style="color:#032F62;">&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> T.nodes[parent].data;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="孩子数量" tabindex="-1">孩子数量 <a class="header-anchor" href="#孩子数量" aria-label="Permalink to &quot;孩子数量&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>1.获取当前结点的索引，从当前索引开始查找第一个parent为当前节点的索引</p><p>2.因为是层序存储，元素是连续的。通过依次遍历既可获取孩子结点数量。</p></div><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 返回树T中结点e的孩子数量。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ChildCount</span><span style="color:#E1E4E8;">(PTree </span><span style="color:#FFAB70;">T</span><span style="color:#E1E4E8;">, TElemType </span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> p, k, count;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 遇到空树则无需继续计算</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">TreeEmpty</span><span style="color:#E1E4E8;">(T)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 获取结点e的索引</span></span>
<span class="line"><span style="color:#E1E4E8;">    p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">EIndex</span><span style="color:#E1E4E8;">(T, e);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 结点e不存在</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(p </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 查找第一个孩子</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(k </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (p </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> MAX_TREE_SIZE; k </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> (T.r </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> T.n) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> MAX_TREE_SIZE; k </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (k </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> MAX_TREE_SIZE) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(T.nodes[k].parent </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> p) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    count </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 统计结点e的孩子数量</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;">(k </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> (T.r </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> T.n) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> MAX_TREE_SIZE </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> T.nodes[k].parent </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> p) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        count</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        k </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (k </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> MAX_TREE_SIZE;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> count;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 返回树T中结点e的孩子数量。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ChildCount</span><span style="color:#24292E;">(PTree </span><span style="color:#E36209;">T</span><span style="color:#24292E;">, TElemType </span><span style="color:#E36209;">e</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> p, k, count;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 遇到空树则无需继续计算</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">TreeEmpty</span><span style="color:#24292E;">(T)) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 获取结点e的索引</span></span>
<span class="line"><span style="color:#24292E;">    p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">EIndex</span><span style="color:#24292E;">(T, e);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 结点e不存在</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(p </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 查找第一个孩子</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(k </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (p </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> MAX_TREE_SIZE; k </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> (T.r </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> T.n) </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> MAX_TREE_SIZE; k </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (k </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> MAX_TREE_SIZE) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(T.nodes[k].parent </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> p) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    count </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 统计结点e的孩子数量</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">while</span><span style="color:#24292E;">(k </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> (T.r </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> T.n) </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> MAX_TREE_SIZE </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> T.nodes[k].parent </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> p) {</span></span>
<span class="line"><span style="color:#24292E;">        count</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        k </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (k </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> MAX_TREE_SIZE;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> count;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="孩子结点" tabindex="-1">孩子结点 <a class="header-anchor" href="#孩子结点" aria-label="Permalink to &quot;孩子结点&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>返回树中结点e的第i个孩子。</p><p>1.获取第一个孩子结点索引</p><p>2.依次遍历到第i个结点</p></div><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 返回树结点e的第i个孩子索引，如果不存在，返回-1</span></span>
<span class="line"><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">CIndex</span><span style="color:#E1E4E8;">(PTree </span><span style="color:#FFAB70;">T</span><span style="color:#E1E4E8;">, TElemType </span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">i</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> p, k, r, count;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 遇到空树则无需继续计算</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">TreeEmpty</span><span style="color:#E1E4E8;">(T)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// i的范围越界</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> MAX_CHILD_COUNT) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 获取结点e的索引</span></span>
<span class="line"><span style="color:#E1E4E8;">    p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">EIndex</span><span style="color:#E1E4E8;">(T, e);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 结点e不存在</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(p </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    k </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (p </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> MAX_TREE_SIZE;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 查找第一个孩子，用k记录</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;">(k </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> (T.r </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> T.n) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> MAX_TREE_SIZE </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> T.nodes[k].parent </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> p) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        k </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (k </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> MAX_TREE_SIZE;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 确保第一个孩子存在</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(k </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> (T.r </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> T.n) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> MAX_TREE_SIZE) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        count </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> k;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;">(count </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> T.nodes[r].parent</span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;">p) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (r </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> MAX_TREE_SIZE;</span></span>
<span class="line"><span style="color:#E1E4E8;">            count</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(count </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> i) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> r;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 返回树中结点e的第i个孩子。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">TElemType </span><span style="color:#B392F0;">Child</span><span style="color:#E1E4E8;">(PTree </span><span style="color:#FFAB70;">T</span><span style="color:#E1E4E8;">, TElemType </span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">i</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 遇到空树则无需继续计算</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">TreeEmpty</span><span style="color:#E1E4E8;">(T)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\0</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// i的范围越界</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> MAX_CHILD_COUNT) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\0</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 获取结点e的第i个孩子索引</span></span>
<span class="line"><span style="color:#E1E4E8;">    p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">CIndex</span><span style="color:#E1E4E8;">(T, e, i);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 结点e第i个孩子不存在</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(p </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\0</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> T.nodes[p].data;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 返回树结点e的第i个孩子索引，如果不存在，返回-1</span></span>
<span class="line"><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">CIndex</span><span style="color:#24292E;">(PTree </span><span style="color:#E36209;">T</span><span style="color:#24292E;">, TElemType </span><span style="color:#E36209;">e</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">i</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> p, k, r, count;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 遇到空树则无需继续计算</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">TreeEmpty</span><span style="color:#24292E;">(T)) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// i的范围越界</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> MAX_CHILD_COUNT) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 获取结点e的索引</span></span>
<span class="line"><span style="color:#24292E;">    p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">EIndex</span><span style="color:#24292E;">(T, e);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 结点e不存在</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(p </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    k </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (p </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> MAX_TREE_SIZE;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 查找第一个孩子，用k记录</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">while</span><span style="color:#24292E;">(k </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> (T.r </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> T.n) </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> MAX_TREE_SIZE </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> T.nodes[k].parent </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> p) {</span></span>
<span class="line"><span style="color:#24292E;">        k </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (k </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> MAX_TREE_SIZE;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 确保第一个孩子存在</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(k </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> (T.r </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> T.n) </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> MAX_TREE_SIZE) {</span></span>
<span class="line"><span style="color:#24292E;">        count </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> k;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">while</span><span style="color:#24292E;">(count </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> T.nodes[r].parent</span><span style="color:#D73A49;">==</span><span style="color:#24292E;">p) {</span></span>
<span class="line"><span style="color:#24292E;">            r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (r </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> MAX_TREE_SIZE;</span></span>
<span class="line"><span style="color:#24292E;">            count</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(count </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> i) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> r;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 返回树中结点e的第i个孩子。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">TElemType </span><span style="color:#6F42C1;">Child</span><span style="color:#24292E;">(PTree </span><span style="color:#E36209;">T</span><span style="color:#24292E;">, TElemType </span><span style="color:#E36209;">e</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">i</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> p;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 遇到空树则无需继续计算</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">TreeEmpty</span><span style="color:#24292E;">(T)) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;</span><span style="color:#005CC5;">\\0</span><span style="color:#032F62;">&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// i的范围越界</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> MAX_CHILD_COUNT) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;</span><span style="color:#005CC5;">\\0</span><span style="color:#032F62;">&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 获取结点e的第i个孩子索引</span></span>
<span class="line"><span style="color:#24292E;">    p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">CIndex</span><span style="color:#24292E;">(T, e, i);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 结点e第i个孩子不存在</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(p </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;</span><span style="color:#005CC5;">\\0</span><span style="color:#032F62;">&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> T.nodes[p].data;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="左兄弟" tabindex="-1">左兄弟 <a class="header-anchor" href="#左兄弟" aria-label="Permalink to &quot;左兄弟&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>返回树中结点e的左兄弟结点。</p><p>1.获取当前结点所在的索引。</p><p>2.通过当前索引-1获取其左兄弟。</p></div><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 返回树中结点e的左兄弟结点。</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> *【注】</span></span>
<span class="line"><span style="color:#6A737D;"> * 由于树的结点可能会包含多个孩子，</span></span>
<span class="line"><span style="color:#6A737D;"> * 因此这里的左兄弟特指左边紧邻该结点的兄弟。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">TElemType </span><span style="color:#B392F0;">LeftSibling</span><span style="color:#E1E4E8;">(PTree </span><span style="color:#FFAB70;">T</span><span style="color:#E1E4E8;">, TElemType </span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> p, ls;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 遇到空树则无需继续计算</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">TreeEmpty</span><span style="color:#E1E4E8;">(T)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\0</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 获取结点e的索引</span></span>
<span class="line"><span style="color:#E1E4E8;">    p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">EIndex</span><span style="color:#E1E4E8;">(T, e);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 结点e不存在</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(p </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\0</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 假设存在左兄弟</span></span>
<span class="line"><span style="color:#E1E4E8;">    ls </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (p </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> MAX_TREE_SIZE) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> MAX_TREE_SIZE;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 如果该结点有效，且与结点e的双亲相同，说明它是兄弟</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(ls </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> p </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> T.nodes[ls].data </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\0</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> T.nodes[ls].parent </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> T.nodes[p].parent) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> T.nodes[ls].data;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\0</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 返回树中结点e的左兄弟结点。</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> *【注】</span></span>
<span class="line"><span style="color:#6A737D;"> * 由于树的结点可能会包含多个孩子，</span></span>
<span class="line"><span style="color:#6A737D;"> * 因此这里的左兄弟特指左边紧邻该结点的兄弟。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">TElemType </span><span style="color:#6F42C1;">LeftSibling</span><span style="color:#24292E;">(PTree </span><span style="color:#E36209;">T</span><span style="color:#24292E;">, TElemType </span><span style="color:#E36209;">e</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> p, ls;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 遇到空树则无需继续计算</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">TreeEmpty</span><span style="color:#24292E;">(T)) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;</span><span style="color:#005CC5;">\\0</span><span style="color:#032F62;">&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 获取结点e的索引</span></span>
<span class="line"><span style="color:#24292E;">    p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">EIndex</span><span style="color:#24292E;">(T, e);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 结点e不存在</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(p </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;</span><span style="color:#005CC5;">\\0</span><span style="color:#032F62;">&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 假设存在左兄弟</span></span>
<span class="line"><span style="color:#24292E;">    ls </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (p </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> MAX_TREE_SIZE) </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> MAX_TREE_SIZE;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 如果该结点有效，且与结点e的双亲相同，说明它是兄弟</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(ls </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> p </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> T.nodes[ls].data </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;</span><span style="color:#005CC5;">\\0</span><span style="color:#032F62;">&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> T.nodes[ls].parent </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> T.nodes[p].parent) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> T.nodes[ls].data;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;</span><span style="color:#005CC5;">\\0</span><span style="color:#032F62;">&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="右兄弟" tabindex="-1">右兄弟 <a class="header-anchor" href="#右兄弟" aria-label="Permalink to &quot;右兄弟&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>返回树中结点e的右兄弟结点。</p><p>1.获取当前结点所在的索引。</p><p>2.通过当前索引+1获取其右兄弟。</p></div><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 返回树中结点e的右兄弟结点。</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> *【注】</span></span>
<span class="line"><span style="color:#6A737D;"> * 由于树的结点可能会包含多个孩子，</span></span>
<span class="line"><span style="color:#6A737D;"> * 因此这里的右兄弟特指右边紧邻该结点的兄弟。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">TElemType </span><span style="color:#B392F0;">RightSibling</span><span style="color:#E1E4E8;">(PTree </span><span style="color:#FFAB70;">T</span><span style="color:#E1E4E8;">, TElemType </span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> p, rs;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 遇到空树则无需继续计算</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">TreeEmpty</span><span style="color:#E1E4E8;">(T)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\0</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 获取结点e的索引</span></span>
<span class="line"><span style="color:#E1E4E8;">    p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">EIndex</span><span style="color:#E1E4E8;">(T, e);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 结点e不存在</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(p </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\0</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 假设存在右兄弟</span></span>
<span class="line"><span style="color:#E1E4E8;">    rs </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (p </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> MAX_TREE_SIZE;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 如果该结点有效，且与结点e的双亲相同，说明它是兄弟</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(rs </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> p </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> T.nodes[rs].data </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\0</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> T.nodes[rs].parent </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> T.nodes[p].parent) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> T.nodes[rs].data;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\0</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 返回树中结点e的右兄弟结点。</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> *【注】</span></span>
<span class="line"><span style="color:#6A737D;"> * 由于树的结点可能会包含多个孩子，</span></span>
<span class="line"><span style="color:#6A737D;"> * 因此这里的右兄弟特指右边紧邻该结点的兄弟。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">TElemType </span><span style="color:#6F42C1;">RightSibling</span><span style="color:#24292E;">(PTree </span><span style="color:#E36209;">T</span><span style="color:#24292E;">, TElemType </span><span style="color:#E36209;">e</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> p, rs;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 遇到空树则无需继续计算</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">TreeEmpty</span><span style="color:#24292E;">(T)) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;</span><span style="color:#005CC5;">\\0</span><span style="color:#032F62;">&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 获取结点e的索引</span></span>
<span class="line"><span style="color:#24292E;">    p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">EIndex</span><span style="color:#24292E;">(T, e);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 结点e不存在</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(p </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;</span><span style="color:#005CC5;">\\0</span><span style="color:#032F62;">&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 假设存在右兄弟</span></span>
<span class="line"><span style="color:#24292E;">    rs </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (p </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> MAX_TREE_SIZE;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 如果该结点有效，且与结点e的双亲相同，说明它是兄弟</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(rs </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> p </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> T.nodes[rs].data </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;</span><span style="color:#005CC5;">\\0</span><span style="color:#032F62;">&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> T.nodes[rs].parent </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> T.nodes[p].parent) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> T.nodes[rs].data;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;</span><span style="color:#005CC5;">\\0</span><span style="color:#032F62;">&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="先序遍历" tabindex="-1">先序遍历 <a class="header-anchor" href="#先序遍历" aria-label="Permalink to &quot;先序遍历&quot;">​</a></h2><p><img src="`+s+'" alt="普通树存储结构"></p><p>先序序列中-&gt;左-&gt;右为RADEBCFGHK</p><p>计算T中结点的位置信息</p><p><img src="'+c+`" alt="image-20231205154123935"></p><p>[5] 对应R结点；第一个孩子索引为6[A]，最后一个索引孩子为8[C]</p><p>[6] 对应A结点；第一个孩子索引为9[D]，最后一个索引孩子为10[E]</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/* 树中某个结点的信息 */</span></span>
<span class="line"><span style="color:#F97583;">typedef</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> row;</span><span style="color:#6A737D;">          // 当前结点所在的行</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> col;</span><span style="color:#6A737D;">          // 当前结点所在的列</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> childIndex;</span><span style="color:#6A737D;">   // 当前结点是第几个孩子</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> firstChild;</span><span style="color:#6A737D;">   // 当前结点的第一个孩子在树中的索引</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> lastChild;</span><span style="color:#6A737D;">    // 当前结点的最后一个孩子在树中的索引</span></span>
<span class="line"><span style="color:#E1E4E8;">} Pos;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 获取树T的结点信息，具体包含哪些信息，请参照Pos类型的定义</span></span>
<span class="line"><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getPos</span><span style="color:#E1E4E8;">(PTree </span><span style="color:#FFAB70;">T</span><span style="color:#E1E4E8;">, Pos </span><span style="color:#FFAB70;">pt</span><span style="color:#F97583;">[]</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    LinkList Lt, Lt_parent, Lt_child;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> m, n, p, k, s;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> level;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">memset</span><span style="color:#E1E4E8;">(pt, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, MAX_TREE_SIZE </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">sizeof</span><span style="color:#E1E4E8;">(Pos));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 遇到空树则无需继续计算</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">TreeEmpty</span><span style="color:#E1E4E8;">(T)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">InitList</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">Lt_parent);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">InitList</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">Lt_child);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 根结点的parent为-1</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">ListInsert</span><span style="color:#E1E4E8;">(Lt_parent, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    level </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    k </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> T.r;</span></span>
<span class="line"><span style="color:#E1E4E8;">    m </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    s </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;"> // 初始化头结点的父结点为-1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;">(k </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> (T.r </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> T.n) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> MAX_TREE_SIZE) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 结点k第一个孩子在树中的索引初始化为-1</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FFAB70;">pt</span><span style="color:#E1E4E8;">[k].firstChild </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 结点k最后一个孩子在树中的索引初始化为-1</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FFAB70;">pt</span><span style="color:#E1E4E8;">[k].lastChild </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 当前结点k的父结点</span></span>
<span class="line"><span style="color:#E1E4E8;">        p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> T.nodes[k].parent;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(p </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> s) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            s </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p;</span><span style="color:#6A737D;">  // 追踪父结点的变化</span></span>
<span class="line"><span style="color:#E1E4E8;">            n </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">  // 父结点改变时，需要重新计数</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 判断当前结点是否为第level-1层结点的孩子</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">LocateElem</span><span style="color:#E1E4E8;">(Lt_parent, p, Equal)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">ListInsert</span><span style="color:#E1E4E8;">(Lt_child, </span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">m, k);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#FFAB70;">pt</span><span style="color:#E1E4E8;">[k].row </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> level;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#FFAB70;">pt</span><span style="color:#E1E4E8;">[k].col </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> m;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#FFAB70;">pt</span><span style="color:#E1E4E8;">[k].childIndex </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">n;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 确保当前结点父结点存在</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(p </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// 第一个孩子在树中的索引</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">pt</span><span style="color:#E1E4E8;">[p].firstChild</span><span style="color:#F97583;">==-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#FFAB70;">pt</span><span style="color:#E1E4E8;">[p].firstChild </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> k;</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// 最后一个孩子在树中的索引</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#FFAB70;">pt</span><span style="color:#E1E4E8;">[p].lastChild </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> k;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            k </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (k </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> MAX_TREE_SIZE;</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            Lt </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Lt_parent;</span></span>
<span class="line"><span style="color:#E1E4E8;">            Lt_parent </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Lt_child;</span></span>
<span class="line"><span style="color:#E1E4E8;">            Lt_child </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Lt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">ClearList</span><span style="color:#E1E4E8;">(Lt_child);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            level</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            m </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">DestroyList</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">Lt_parent);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">DestroyList</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">Lt_child);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 先序遍历的内部实现</span></span>
<span class="line"><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> Status </span><span style="color:#B392F0;">PreTraverse</span><span style="color:#E1E4E8;">(PTree </span><span style="color:#FFAB70;">T</span><span style="color:#E1E4E8;">, Pos </span><span style="color:#FFAB70;">pt</span><span style="color:#F97583;">[]</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">i</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">Status</span><span style="color:#E1E4E8;">(Visit)(TElemType)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> firstChild;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> rightBrother;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 访问当前结点</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">!</span><span style="color:#B392F0;">Visit</span><span style="color:#E1E4E8;">(T.nodes[i].data)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    firstChild </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">pt</span><span style="color:#E1E4E8;">[i].firstChild;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 遍历长子（需要先确定长子的身份）</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(firstChild </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">!</span><span style="color:#B392F0;">PreTraverse</span><span style="color:#E1E4E8;">(T, pt, firstChild, Visit)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    rightBrother </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (i </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> MAX_TREE_SIZE;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 遍历右兄弟（需要先确定右兄弟的身份）</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(T.nodes[i].parent </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> T.nodes[rightBrother].parent </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">!</span><span style="color:#B392F0;">PreTraverse</span><span style="color:#E1E4E8;">(T, pt, rightBrother, Visit)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 先序遍历</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">PreOrderTraverse</span><span style="color:#E1E4E8;">(PTree </span><span style="color:#FFAB70;">T</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">Status</span><span style="color:#E1E4E8;">(Visit)(TElemType)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    Pos </span><span style="color:#FFAB70;">pt</span><span style="color:#E1E4E8;">[MAX_TREE_SIZE];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 遇到空树则无需继续计算</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">TreeEmpty</span><span style="color:#E1E4E8;">(T)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 计算T中结点的位置信息</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">getPos</span><span style="color:#E1E4E8;">(T, pt);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">PreTraverse</span><span style="color:#E1E4E8;">(T, pt, T.r, Visit);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/* 树中某个结点的信息 */</span></span>
<span class="line"><span style="color:#D73A49;">typedef</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">struct</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> row;</span><span style="color:#6A737D;">          // 当前结点所在的行</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> col;</span><span style="color:#6A737D;">          // 当前结点所在的列</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> childIndex;</span><span style="color:#6A737D;">   // 当前结点是第几个孩子</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> firstChild;</span><span style="color:#6A737D;">   // 当前结点的第一个孩子在树中的索引</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> lastChild;</span><span style="color:#6A737D;">    // 当前结点的最后一个孩子在树中的索引</span></span>
<span class="line"><span style="color:#24292E;">} Pos;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 获取树T的结点信息，具体包含哪些信息，请参照Pos类型的定义</span></span>
<span class="line"><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getPos</span><span style="color:#24292E;">(PTree </span><span style="color:#E36209;">T</span><span style="color:#24292E;">, Pos </span><span style="color:#E36209;">pt</span><span style="color:#D73A49;">[]</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    LinkList Lt, Lt_parent, Lt_child;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> m, n, p, k, s;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> level;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">memset</span><span style="color:#24292E;">(pt, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, MAX_TREE_SIZE </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">sizeof</span><span style="color:#24292E;">(Pos));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 遇到空树则无需继续计算</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">TreeEmpty</span><span style="color:#24292E;">(T)) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">InitList</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">Lt_parent);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">InitList</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">Lt_child);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 根结点的parent为-1</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">ListInsert</span><span style="color:#24292E;">(Lt_parent, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    level </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    k </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> T.r;</span></span>
<span class="line"><span style="color:#24292E;">    m </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> n </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    s </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span><span style="color:#6A737D;"> // 初始化头结点的父结点为-1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">while</span><span style="color:#24292E;">(k </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> (T.r </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> T.n) </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> MAX_TREE_SIZE) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 结点k第一个孩子在树中的索引初始化为-1</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#E36209;">pt</span><span style="color:#24292E;">[k].firstChild </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 结点k最后一个孩子在树中的索引初始化为-1</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#E36209;">pt</span><span style="color:#24292E;">[k].lastChild </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 当前结点k的父结点</span></span>
<span class="line"><span style="color:#24292E;">        p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> T.nodes[k].parent;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(p </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> s) {</span></span>
<span class="line"><span style="color:#24292E;">            s </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p;</span><span style="color:#6A737D;">  // 追踪父结点的变化</span></span>
<span class="line"><span style="color:#24292E;">            n </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">  // 父结点改变时，需要重新计数</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 判断当前结点是否为第level-1层结点的孩子</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">LocateElem</span><span style="color:#24292E;">(Lt_parent, p, Equal)) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">ListInsert</span><span style="color:#24292E;">(Lt_child, </span><span style="color:#D73A49;">++</span><span style="color:#24292E;">m, k);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#E36209;">pt</span><span style="color:#24292E;">[k].row </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> level;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#E36209;">pt</span><span style="color:#24292E;">[k].col </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> m;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#E36209;">pt</span><span style="color:#24292E;">[k].childIndex </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">++</span><span style="color:#24292E;">n;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 确保当前结点父结点存在</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(p </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// 第一个孩子在树中的索引</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#E36209;">pt</span><span style="color:#24292E;">[p].firstChild</span><span style="color:#D73A49;">==-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#E36209;">pt</span><span style="color:#24292E;">[p].firstChild </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> k;</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// 最后一个孩子在树中的索引</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#E36209;">pt</span><span style="color:#24292E;">[p].lastChild </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> k;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            k </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (k </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> MAX_TREE_SIZE;</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            Lt </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Lt_parent;</span></span>
<span class="line"><span style="color:#24292E;">            Lt_parent </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Lt_child;</span></span>
<span class="line"><span style="color:#24292E;">            Lt_child </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Lt;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">ClearList</span><span style="color:#24292E;">(Lt_child);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            level</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            m </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">DestroyList</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">Lt_parent);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">DestroyList</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">Lt_child);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 先序遍历的内部实现</span></span>
<span class="line"><span style="color:#D73A49;">static</span><span style="color:#24292E;"> Status </span><span style="color:#6F42C1;">PreTraverse</span><span style="color:#24292E;">(PTree </span><span style="color:#E36209;">T</span><span style="color:#24292E;">, Pos </span><span style="color:#E36209;">pt</span><span style="color:#D73A49;">[]</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">i</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">Status</span><span style="color:#24292E;">(Visit)(TElemType)) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> firstChild;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> rightBrother;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 访问当前结点</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#6F42C1;">Visit</span><span style="color:#24292E;">(T.nodes[i].data)) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    firstChild </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#E36209;">pt</span><span style="color:#24292E;">[i].firstChild;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 遍历长子（需要先确定长子的身份）</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(firstChild </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">!</span><span style="color:#6F42C1;">PreTraverse</span><span style="color:#24292E;">(T, pt, firstChild, Visit)) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    rightBrother </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (i </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> MAX_TREE_SIZE;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 遍历右兄弟（需要先确定右兄弟的身份）</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(T.nodes[i].parent </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> T.nodes[rightBrother].parent </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">!</span><span style="color:#6F42C1;">PreTraverse</span><span style="color:#24292E;">(T, pt, rightBrother, Visit)) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 先序遍历</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">PreOrderTraverse</span><span style="color:#24292E;">(PTree </span><span style="color:#E36209;">T</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">Status</span><span style="color:#24292E;">(Visit)(TElemType)) {</span></span>
<span class="line"><span style="color:#24292E;">    Pos </span><span style="color:#E36209;">pt</span><span style="color:#24292E;">[MAX_TREE_SIZE];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 遇到空树则无需继续计算</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">TreeEmpty</span><span style="color:#24292E;">(T)) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 计算T中结点的位置信息</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">getPos</span><span style="color:#24292E;">(T, pt);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">PreTraverse</span><span style="color:#24292E;">(T, pt, T.r, Visit);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="后序遍历" tabindex="-1">后序遍历 <a class="header-anchor" href="#后序遍历" aria-label="Permalink to &quot;后序遍历&quot;">​</a></h2><p><img src="`+s+`" alt="普通树存储结构"></p><p>左子树-&gt;右子树-&gt;中为DEABGHKFCR</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 后序遍历的内部实现</span></span>
<span class="line"><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> Status </span><span style="color:#B392F0;">PostTraverse</span><span style="color:#E1E4E8;">(PTree </span><span style="color:#FFAB70;">T</span><span style="color:#E1E4E8;">, Pos </span><span style="color:#FFAB70;">pt</span><span style="color:#F97583;">[]</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">i</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">Status</span><span style="color:#E1E4E8;">(Visit)(TElemType)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> firstChild;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> rightBrother;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    firstChild </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">pt</span><span style="color:#E1E4E8;">[i].firstChild;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 遍历长子（需要先确定长子的身份）</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(firstChild </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">!</span><span style="color:#B392F0;">PostTraverse</span><span style="color:#E1E4E8;">(T, pt, firstChild, Visit)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 访问当前结点</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">!</span><span style="color:#B392F0;">Visit</span><span style="color:#E1E4E8;">(T.nodes[i].data)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    rightBrother </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (i </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> MAX_TREE_SIZE;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 遍历右兄弟（需要先确定右兄弟的身份）</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(T.nodes[i].parent </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> T.nodes[rightBrother].parent </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">!</span><span style="color:#B392F0;">PostTraverse</span><span style="color:#E1E4E8;">(T, pt, rightBrother, Visit)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 后序遍历</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">PostOrderTraverse</span><span style="color:#E1E4E8;">(PTree </span><span style="color:#FFAB70;">T</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">Status</span><span style="color:#E1E4E8;">(Visit)(TElemType)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    Pos </span><span style="color:#FFAB70;">pt</span><span style="color:#E1E4E8;">[MAX_TREE_SIZE];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 遇到空树则无需继续计算</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">TreeEmpty</span><span style="color:#E1E4E8;">(T)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 计算T中结点的位置信息</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">getPos</span><span style="color:#E1E4E8;">(T, pt);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">PostTraverse</span><span style="color:#E1E4E8;">(T, pt, T.r, Visit);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 后序遍历的内部实现</span></span>
<span class="line"><span style="color:#D73A49;">static</span><span style="color:#24292E;"> Status </span><span style="color:#6F42C1;">PostTraverse</span><span style="color:#24292E;">(PTree </span><span style="color:#E36209;">T</span><span style="color:#24292E;">, Pos </span><span style="color:#E36209;">pt</span><span style="color:#D73A49;">[]</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">i</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">Status</span><span style="color:#24292E;">(Visit)(TElemType)) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> firstChild;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> rightBrother;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    firstChild </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#E36209;">pt</span><span style="color:#24292E;">[i].firstChild;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 遍历长子（需要先确定长子的身份）</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(firstChild </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">!</span><span style="color:#6F42C1;">PostTraverse</span><span style="color:#24292E;">(T, pt, firstChild, Visit)) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 访问当前结点</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#6F42C1;">Visit</span><span style="color:#24292E;">(T.nodes[i].data)) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    rightBrother </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (i </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> MAX_TREE_SIZE;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 遍历右兄弟（需要先确定右兄弟的身份）</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(T.nodes[i].parent </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> T.nodes[rightBrother].parent </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">!</span><span style="color:#6F42C1;">PostTraverse</span><span style="color:#24292E;">(T, pt, rightBrother, Visit)) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 后序遍历</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">PostOrderTraverse</span><span style="color:#24292E;">(PTree </span><span style="color:#E36209;">T</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">Status</span><span style="color:#24292E;">(Visit)(TElemType)) {</span></span>
<span class="line"><span style="color:#24292E;">    Pos </span><span style="color:#E36209;">pt</span><span style="color:#24292E;">[MAX_TREE_SIZE];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 遇到空树则无需继续计算</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">TreeEmpty</span><span style="color:#24292E;">(T)) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 计算T中结点的位置信息</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">getPos</span><span style="color:#24292E;">(T, pt);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">PostTraverse</span><span style="color:#24292E;">(T, pt, T.r, Visit);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="层序遍历" tabindex="-1">层序遍历 <a class="header-anchor" href="#层序遍历" aria-label="Permalink to &quot;层序遍历&quot;">​</a></h2><p>默认存储即为层序存储，顺序遍历即可</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 层序遍历</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">LevelOrderTraverse</span><span style="color:#E1E4E8;">(PTree </span><span style="color:#FFAB70;">T</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">Status</span><span style="color:#E1E4E8;">(Visit)(TElemType)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 遇到空树则无需继续计算</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">TreeEmpty</span><span style="color:#E1E4E8;">(T)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 顺次遍历所有元素</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> T.r; i </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> (T.r </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> T.n) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> MAX_TREE_SIZE; i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (i </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> MAX_TREE_SIZE) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">!</span><span style="color:#B392F0;">Visit</span><span style="color:#E1E4E8;">(T.nodes[i].data)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 层序遍历</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">LevelOrderTraverse</span><span style="color:#24292E;">(PTree </span><span style="color:#E36209;">T</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">Status</span><span style="color:#24292E;">(Visit)(TElemType)) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 遇到空树则无需继续计算</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">TreeEmpty</span><span style="color:#24292E;">(T)) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 顺次遍历所有元素</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> T.r; i </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> (T.r </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> T.n) </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> MAX_TREE_SIZE; i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (i </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> MAX_TREE_SIZE) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#6F42C1;">Visit</span><span style="color:#24292E;">(T.nodes[i].data)) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,66),E=[r];function y(i,F,A,D,d,T){return a(),p("div",null,E)}const B=n(t,[["render",y]]);export{u as __pageData,B as default};
