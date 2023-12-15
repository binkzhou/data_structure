import{_ as s}from"./chunks/1011191502-1.6d36e32b.js";import{_ as n,o as a,c as p,Q as l}from"./chunks/framework.91000686.js";const o="/data_structure/assets/10111a313-0.801a4285.gif",e="/data_structure/assets/image-20231128105322870.b67cd4fd.png",g=JSON.parse('{"title":"广义表的头尾链表存储表示","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"array/0005.md","filePath":"array/0005.md"}'),c={name:"array/0005.md"},t=l('<h1 id="广义表的头尾链表存储表示" tabindex="-1">广义表的头尾链表存储表示 <a class="header-anchor" href="#广义表的头尾链表存储表示" aria-label="Permalink to &quot;广义表的头尾链表存储表示&quot;">​</a></h1><p>广义表（Generalized Table）是一种数据结构，它可以表示任何二维表，包括二进制表、三角表、矩阵、树形表、图表等。广义表的特点是可以表示任何二维表，并且广义表的表示方法与具体的二维表无关。</p><p>我们可以创建一个整形数组去存储<code>{1,2,3}</code>，我们也可以创建一个二维整形数组去存储<span><code>{{1,2,3},{4,5,6}}</code></span>，但数组不适合用来存储类似<span><code>{1,{1,2,3}}</code></span>这样的数据。</p><p>广义表的两种结点：原子结点用来存储数据，表结点用了存储表结点或原子结点</p><p><img src="'+o+'" alt="广义表节点的两种类型"></p><p>广义表<code>(a,(b,c,d))</code>：原子 a 和子表 (b,c,d) 构成，而子表 (b,c,d) 又是由原子 b、c 和 d 构成</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>对于 (a,(b,c,d)) 来说，原子 a 和子表 (b,c,d) 是并列的，而在子表 (b,c,d) 中原子 b、c、d 是并列的。</p></div><p><img src="'+s+`" alt="广义表 {a,{b,c,d}} 的结构示意图"></p><h2 id="结构定义" tabindex="-1">结构定义 <a class="header-anchor" href="#结构定义" aria-label="Permalink to &quot;结构定义&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/* 原子元素类型 */</span></span>
<span class="line"><span style="color:#F97583;">typedef</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">char</span><span style="color:#E1E4E8;"> AtomType;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 广义表结点标记</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * Atom-0：原子结点</span></span>
<span class="line"><span style="color:#6A737D;"> * List-1：表结点</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">typedef</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">enum</span><span style="color:#E1E4E8;"> { Atom, List } ElemTag;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"> /* 广义表（头尾链表存储表示）类型定义 */</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">typedef</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> GLNode{</span></span>
<span class="line"><span style="color:#E1E4E8;">     ElemTag tag;</span><span style="color:#6A737D;">   // 公共标记，用于区分原子结点和表结点</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#6A737D;">// 原子结点和表结点的联合部分</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#F97583;">union</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">         AtomType atom;</span><span style="color:#6A737D;">  // atom是原子结点的值域，AtomType由用户定义</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">             </span><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> GLNode</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> hp;</span><span style="color:#6A737D;">  // 指向表头</span></span>
<span class="line"><span style="color:#E1E4E8;">             </span><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> GLNode</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> tp;</span><span style="color:#6A737D;">  // 指向表尾</span></span>
<span class="line"><span style="color:#E1E4E8;">         } ptr;</span></span>
<span class="line"><span style="color:#E1E4E8;">     } Node;</span></span>
<span class="line"><span style="color:#E1E4E8;"> } GLNode;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 广义表类型 */</span></span>
<span class="line"><span style="color:#F97583;">typedef</span><span style="color:#E1E4E8;"> GLNode</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> GList;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/* 原子元素类型 */</span></span>
<span class="line"><span style="color:#D73A49;">typedef</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">char</span><span style="color:#24292E;"> AtomType;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 广义表结点标记</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * Atom-0：原子结点</span></span>
<span class="line"><span style="color:#6A737D;"> * List-1：表结点</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;">typedef</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">enum</span><span style="color:#24292E;"> { Atom, List } ElemTag;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"> /* 广义表（头尾链表存储表示）类型定义 */</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;">typedef</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">struct</span><span style="color:#24292E;"> GLNode{</span></span>
<span class="line"><span style="color:#24292E;">     ElemTag tag;</span><span style="color:#6A737D;">   // 公共标记，用于区分原子结点和表结点</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#6A737D;">// 原子结点和表结点的联合部分</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#D73A49;">union</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">         AtomType atom;</span><span style="color:#6A737D;">  // atom是原子结点的值域，AtomType由用户定义</span></span>
<span class="line"><span style="color:#24292E;">         </span><span style="color:#D73A49;">struct</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">             </span><span style="color:#D73A49;">struct</span><span style="color:#24292E;"> GLNode</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> hp;</span><span style="color:#6A737D;">  // 指向表头</span></span>
<span class="line"><span style="color:#24292E;">             </span><span style="color:#D73A49;">struct</span><span style="color:#24292E;"> GLNode</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> tp;</span><span style="color:#6A737D;">  // 指向表尾</span></span>
<span class="line"><span style="color:#24292E;">         } ptr;</span></span>
<span class="line"><span style="color:#24292E;">     } Node;</span></span>
<span class="line"><span style="color:#24292E;"> } GLNode;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 广义表类型 */</span></span>
<span class="line"><span style="color:#D73A49;">typedef</span><span style="color:#24292E;"> GLNode</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> GList;</span></span></code></pre></div><h2 id="初始化" tabindex="-1">初始化 <a class="header-anchor" href="#初始化" aria-label="Permalink to &quot;初始化&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 初始化空的广义表，长度为0，深度为1。</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> *【注】</span></span>
<span class="line"><span style="color:#6A737D;"> * 需要对每一层去掉括号考察</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">InitGList</span><span style="color:#E1E4E8;">(GList</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">L</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(L </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">L </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 初始化空的广义表，长度为0，深度为1。</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> *【注】</span></span>
<span class="line"><span style="color:#6A737D;"> * 需要对每一层去掉括号考察</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">InitGList</span><span style="color:#24292E;">(GList</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">L</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(L </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">L </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="获取子串" tabindex="-1">获取子串 <a class="header-anchor" href="#获取子串" aria-label="Permalink to &quot;获取子串&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>S</code> = <code>(a,(b,c,d),(e,f)) </code></p><p><code>str</code>为去掉()的值 = <code>a,(b,c,d),(e,f)</code></p><p>第一次遍历: <code>hstr</code> = <code>a</code>，<code>str</code>变为<code>(b,c,d),(e,f)</code>,原子结点直接追加</p><p>第二次遍历：<code>hstr</code> = <code>(b,c,d)</code>，<code>str</code>变为<code>(e,f)</code>,对于广义表<code>hstr</code>会进行递归遍历</p><p>第三次遍历：<code>hstr</code> = <code>(e,f)</code>，<code>str</code>变为空,对于广义表<code>hstr</code>会进行递归遍历</p></div><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">sever</span><span style="color:#E1E4E8;">(SString </span><span style="color:#FFAB70;">hstr</span><span style="color:#E1E4E8;">, SString </span><span style="color:#FFAB70;">str</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i, k, n;</span></span>
<span class="line"><span style="color:#E1E4E8;">    SString ch;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// str a,(b,c,d)</span></span>
<span class="line"><span style="color:#E1E4E8;">    n </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">StrLength</span><span style="color:#E1E4E8;">(str);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">  // 遍历字符串时的游标</span></span>
<span class="line"><span style="color:#E1E4E8;">    k </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">  // 标记遇到的未配对括号数量</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">do</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">i;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 截取str第一个字符</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">SubString</span><span style="color:#E1E4E8;">(ch, str, i, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">ch</span><span style="color:#E1E4E8;">[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;(&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">k;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">ch</span><span style="color:#E1E4E8;">[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;)&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">k;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">ch</span><span style="color:#E1E4E8;">[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;,&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> k </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 如果存在多个广义表结点</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> n) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">SubString</span><span style="color:#E1E4E8;">(hstr, str, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, i </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">SubString</span><span style="color:#E1E4E8;">(str, str, i </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, n </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> i);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 只有一个广义表结点</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">StrCopy</span><span style="color:#E1E4E8;">(hstr, str);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">ClearString</span><span style="color:#E1E4E8;">(str);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">sever</span><span style="color:#24292E;">(SString </span><span style="color:#E36209;">hstr</span><span style="color:#24292E;">, SString </span><span style="color:#E36209;">str</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i, k, n;</span></span>
<span class="line"><span style="color:#24292E;">    SString ch;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// str a,(b,c,d)</span></span>
<span class="line"><span style="color:#24292E;">    n </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">StrLength</span><span style="color:#24292E;">(str);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">  // 遍历字符串时的游标</span></span>
<span class="line"><span style="color:#24292E;">    k </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">  // 标记遇到的未配对括号数量</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">do</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">++</span><span style="color:#24292E;">i;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 截取str第一个字符</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">SubString</span><span style="color:#24292E;">(ch, str, i, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#E36209;">ch</span><span style="color:#24292E;">[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;(&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">++</span><span style="color:#24292E;">k;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#E36209;">ch</span><span style="color:#24292E;">[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;)&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">k;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">while</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> n </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">ch</span><span style="color:#24292E;">[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;,&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> k </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 如果存在多个广义表结点</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> n) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">SubString</span><span style="color:#24292E;">(hstr, str, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, i </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">SubString</span><span style="color:#24292E;">(str, str, i </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, n </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> i);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 只有一个广义表结点</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">StrCopy</span><span style="color:#24292E;">(hstr, str);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">ClearString</span><span style="color:#24292E;">(str);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="创建" tabindex="-1">创建 <a class="header-anchor" href="#创建" aria-label="Permalink to &quot;创建&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">INFO</p><p>如果为<code>()</code>创建一个空的广义表</p><p>如果只有一个字符如<code>a</code>则创建一个原子</p><p>如果多个字符的广义表如<code>(b,c,d)</code>则创建一个广义表</p></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-oP8-I" id="tab-IQa5VXu" checked="checked"><label for="tab-IQa5VXu">GList-HT.c</label><input type="radio" name="group-oP8-I" id="tab-3oAjd1r"><label for="tab-3oAjd1r">main.c</label></div><div class="blocks"><div class="language-c vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 由字符串S创建广义表L。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">CreateGList</span><span style="color:#E1E4E8;">(GList</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">L</span><span style="color:#E1E4E8;">, SString </span><span style="color:#FFAB70;">S</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    SString emp;</span><span style="color:#6A737D;">        // 代表空广义表的字符串</span></span>
<span class="line"><span style="color:#E1E4E8;">    SString hsub, sub;</span></span>
<span class="line"><span style="color:#E1E4E8;">    GList p, q;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(L </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 清理字符串S中的空白，包括清理不可打印字符和清理空格</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">ClearBlank</span><span style="color:#E1E4E8;">(S);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">StrEmpty</span><span style="color:#E1E4E8;">(S)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">StrAssign</span><span style="color:#E1E4E8;">(emp, </span><span style="color:#9ECBFF;">&quot;()&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /*</span></span>
<span class="line"><span style="color:#6A737D;">     * 如果输入串为()，则代表需要创建空的广义表</span></span>
<span class="line"><span style="color:#6A737D;">     *</span></span>
<span class="line"><span style="color:#6A737D;">     *【注】</span></span>
<span class="line"><span style="color:#6A737D;">     * 教材这里的代码是有问题的。</span></span>
<span class="line"><span style="color:#6A737D;">     * StrCompare的返回值指示的是两个字符串的大小，而不是指示两个字符串是否相等。</span></span>
<span class="line"><span style="color:#6A737D;">     * 如果给定的S与()相等，返回值应当是0。</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">!</span><span style="color:#B392F0;">StrCompare</span><span style="color:#E1E4E8;">(S, emp)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">L </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">L </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (GList) </span><span style="color:#B392F0;">malloc</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">sizeof</span><span style="color:#E1E4E8;">(GLNode));</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">L </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 创建原子</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">StrLength</span><span style="color:#E1E4E8;">(S) </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">L)-&gt;tag </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Atom;</span></span>
<span class="line"><span style="color:#E1E4E8;">            (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">L)-&gt;Node.atom </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">S</span><span style="color:#E1E4E8;">[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">L)-&gt;tag </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> List;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">L;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 去掉最外层括号</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">SubString</span><span style="color:#E1E4E8;">(sub, S, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">StrLength</span><span style="color:#E1E4E8;">(S) </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 重复建n个子表</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">do</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// 从sub中分离出表头串hsub，分离完成后，sub也会发生变化</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">sever</span><span style="color:#E1E4E8;">(hsub, sub);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// 递归创建广义表</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">CreateGList</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">(p-&gt;Node.ptr.hp), hsub);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">                q </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// 如果表尾不为空，需要继续处理表尾</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">!</span><span style="color:#B392F0;">StrEmpty</span><span style="color:#E1E4E8;">(sub)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (GList) </span><span style="color:#B392F0;">malloc</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">sizeof</span><span style="color:#E1E4E8;">(GLNode));</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(p </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">                    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">                    p-&gt;tag </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> List;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">                    q-&gt;Node.ptr.tp </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">            } </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">!</span><span style="color:#B392F0;">StrEmpty</span><span style="color:#E1E4E8;">(sub));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            q-&gt;Node.ptr.tp </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 由字符串S创建广义表L。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">CreateGList</span><span style="color:#24292E;">(GList</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">L</span><span style="color:#24292E;">, SString </span><span style="color:#E36209;">S</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    SString emp;</span><span style="color:#6A737D;">        // 代表空广义表的字符串</span></span>
<span class="line"><span style="color:#24292E;">    SString hsub, sub;</span></span>
<span class="line"><span style="color:#24292E;">    GList p, q;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(L </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 清理字符串S中的空白，包括清理不可打印字符和清理空格</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">ClearBlank</span><span style="color:#24292E;">(S);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">StrEmpty</span><span style="color:#24292E;">(S)) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">StrAssign</span><span style="color:#24292E;">(emp, </span><span style="color:#032F62;">&quot;()&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /*</span></span>
<span class="line"><span style="color:#6A737D;">     * 如果输入串为()，则代表需要创建空的广义表</span></span>
<span class="line"><span style="color:#6A737D;">     *</span></span>
<span class="line"><span style="color:#6A737D;">     *【注】</span></span>
<span class="line"><span style="color:#6A737D;">     * 教材这里的代码是有问题的。</span></span>
<span class="line"><span style="color:#6A737D;">     * StrCompare的返回值指示的是两个字符串的大小，而不是指示两个字符串是否相等。</span></span>
<span class="line"><span style="color:#6A737D;">     * 如果给定的S与()相等，返回值应当是0。</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#6F42C1;">StrCompare</span><span style="color:#24292E;">(S, emp)) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">L </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">L </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (GList) </span><span style="color:#6F42C1;">malloc</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">sizeof</span><span style="color:#24292E;">(GLNode));</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">L </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">exit</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 创建原子</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">StrLength</span><span style="color:#24292E;">(S) </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">L)-&gt;tag </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Atom;</span></span>
<span class="line"><span style="color:#24292E;">            (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">L)-&gt;Node.atom </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#E36209;">S</span><span style="color:#24292E;">[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">L)-&gt;tag </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> List;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">L;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 去掉最外层括号</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">SubString</span><span style="color:#24292E;">(sub, S, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">StrLength</span><span style="color:#24292E;">(S) </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 重复建n个子表</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">do</span><span style="color:#24292E;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// 从sub中分离出表头串hsub，分离完成后，sub也会发生变化</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">sever</span><span style="color:#24292E;">(hsub, sub);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// 递归创建广义表</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">CreateGList</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">(p-&gt;Node.ptr.hp), hsub);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">                q </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// 如果表尾不为空，需要继续处理表尾</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#6F42C1;">StrEmpty</span><span style="color:#24292E;">(sub)) {</span></span>
<span class="line"><span style="color:#24292E;">                    p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (GList) </span><span style="color:#6F42C1;">malloc</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">sizeof</span><span style="color:#24292E;">(GLNode));</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(p </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#6F42C1;">exit</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">                    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">                    p-&gt;tag </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> List;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">                    q-&gt;Node.ptr.tp </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p;</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">            } </span><span style="color:#D73A49;">while</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#6F42C1;">StrEmpty</span><span style="color:#24292E;">(sub));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            q-&gt;Node.ptr.tp </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">#include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&lt;stdio.h&gt;</span></span>
<span class="line"><span style="color:#F97583;">#include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;GList-HT.h&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    GList g3;</span></span>
<span class="line"><span style="color:#E1E4E8;">    SString S3;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 创建广义表</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">char*</span><span style="color:#E1E4E8;"> s3 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;(a,(b,c,d),(e,f))&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">StrAssign</span><span style="color:#E1E4E8;">(S3,s3);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">CreateGList</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">g3,S3);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&lt;stdio.h&gt;</span></span>
<span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;GList-HT.h&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    GList g3;</span></span>
<span class="line"><span style="color:#24292E;">    SString S3;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 创建广义表</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">char*</span><span style="color:#24292E;"> s3 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;(a,(b,c,d),(e,f))&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">StrAssign</span><span style="color:#24292E;">(S3,s3);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">CreateGList</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">g3,S3);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></div></div><h2 id="销毁" tabindex="-1">销毁 <a class="header-anchor" href="#销毁" aria-label="Permalink to &quot;销毁&quot;">​</a></h2><p><img src="`+e+`" alt="image-20231128105322870"></p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 销毁</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * 释放广义表所占内存。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">DestroyGList</span><span style="color:#E1E4E8;">(GList</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">L</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    GList head, tail;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(L </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">L </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 删除原子结点</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">((</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">L)-&gt;tag </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> Atom) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">free</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">L);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">L </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 删除子表结点</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        head </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">L)-&gt;Node.ptr.hp;</span></span>
<span class="line"><span style="color:#E1E4E8;">        tail </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">L)-&gt;Node.ptr.tp;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">free</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">L);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">L </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">DestroyGList</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">head);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">DestroyGList</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">tail);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 销毁</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * 释放广义表所占内存。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">DestroyGList</span><span style="color:#24292E;">(GList</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">L</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    GList head, tail;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(L </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">L </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 删除原子结点</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">((</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">L)-&gt;tag </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> Atom) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">free</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">L);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">L </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 删除子表结点</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        head </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">L)-&gt;Node.ptr.hp;</span></span>
<span class="line"><span style="color:#24292E;">        tail </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">L)-&gt;Node.ptr.tp;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">free</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">L);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">L </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">DestroyGList</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">head);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">DestroyGList</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">tail);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="复制" tabindex="-1">复制 <a class="header-anchor" href="#复制" aria-label="Permalink to &quot;复制&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">INFO</p><p>如果是原子结点直接复制</p><p>如果是表结点递归复制</p></div><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 由广义表L复制得到广义表T。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">CopyGList</span><span style="color:#E1E4E8;">(GList</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">T</span><span style="color:#E1E4E8;">, GList </span><span style="color:#FFAB70;">L</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(T </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(L </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 新建广义表结点</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (GList) </span><span style="color:#B392F0;">malloc</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">sizeof</span><span style="color:#E1E4E8;">(GLNode));</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T)-&gt;tag </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> L-&gt;tag;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 复制单原子</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(L-&gt;tag </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> Atom) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T)-&gt;Node.atom </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> L-&gt;Node.atom;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 复制表头和表尾</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">CopyGList</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">((</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T)-&gt;Node.ptr.hp), L-&gt;Node.ptr.hp);</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">CopyGList</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">((</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T)-&gt;Node.ptr.tp), L-&gt;Node.ptr.tp);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 由广义表L复制得到广义表T。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">CopyGList</span><span style="color:#24292E;">(GList</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">T</span><span style="color:#24292E;">, GList </span><span style="color:#E36209;">L</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(T </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(L </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 新建广义表结点</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (GList) </span><span style="color:#6F42C1;">malloc</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">sizeof</span><span style="color:#24292E;">(GLNode));</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">exit</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T)-&gt;tag </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> L-&gt;tag;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 复制单原子</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(L-&gt;tag </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> Atom) {</span></span>
<span class="line"><span style="color:#24292E;">            (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T)-&gt;Node.atom </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> L-&gt;Node.atom;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 复制表头和表尾</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">CopyGList</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">((</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T)-&gt;Node.ptr.hp), L-&gt;Node.ptr.hp);</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">CopyGList</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">((</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T)-&gt;Node.ptr.tp), L-&gt;Node.ptr.tp);</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="计数" tabindex="-1">计数 <a class="header-anchor" href="#计数" aria-label="Permalink to &quot;计数&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">INFO</p><p>只包含最外层的数量，如<code>(a,(b,c,d),(e,f))</code> 的长度为3</p></div><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 返回广义表的长度。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">GListLength</span><span style="color:#E1E4E8;">(GList </span><span style="color:#FFAB70;">L</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> count </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> (L </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">        count</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        L </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> L-&gt;Node.ptr.tp;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> count;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 返回广义表的长度。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">GListLength</span><span style="color:#24292E;">(GList </span><span style="color:#E36209;">L</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> count </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (L </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        count</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        L </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> L-&gt;Node.ptr.tp;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> count;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="深度" tabindex="-1">深度 <a class="header-anchor" href="#深度" aria-label="Permalink to &quot;深度&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 返回广义表的深度</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">GListDepth</span><span style="color:#E1E4E8;">(GList </span><span style="color:#FFAB70;">L</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> max, deep;</span></span>
<span class="line"><span style="color:#E1E4E8;">    GList p;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 空表深度为1</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(L </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 原子深度为0</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(L-&gt;tag </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> Atom) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 递归求子表深度</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(max </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> L; p </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">; p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p-&gt;Node.ptr.tp) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        deep </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">GListDepth</span><span style="color:#E1E4E8;">(p-&gt;Node.ptr.hp);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(deep </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> max) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            max </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> deep;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 非空表的深度是各子元素最大深度加一</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> max </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 返回广义表的深度</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">GListDepth</span><span style="color:#24292E;">(GList </span><span style="color:#E36209;">L</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> max, deep;</span></span>
<span class="line"><span style="color:#24292E;">    GList p;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 空表深度为1</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(L </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 原子深度为0</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(L-&gt;tag </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> Atom) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 递归求子表深度</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(max </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> L; p </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">; p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p-&gt;Node.ptr.tp) {</span></span>
<span class="line"><span style="color:#24292E;">        deep </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">GListDepth</span><span style="color:#24292E;">(p-&gt;Node.ptr.hp);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(deep </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> max) {</span></span>
<span class="line"><span style="color:#24292E;">            max </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> deep;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 非空表的深度是各子元素最大深度加一</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> max </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="判空" tabindex="-1">判空 <a class="header-anchor" href="#判空" aria-label="Permalink to &quot;判空&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 判断广义表是否为空。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">GListEmpty</span><span style="color:#E1E4E8;">(GList </span><span style="color:#FFAB70;">L</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> L </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">TRUE</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">FALSE</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 判断广义表是否为空。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">GListEmpty</span><span style="color:#24292E;">(GList </span><span style="color:#E36209;">L</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> L </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">TRUE</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">FALSE</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="获取表头" tabindex="-1">获取表头 <a class="header-anchor" href="#获取表头" aria-label="Permalink to &quot;获取表头&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 表头</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">GList </span><span style="color:#B392F0;">GetHead</span><span style="color:#E1E4E8;">(GList </span><span style="color:#FFAB70;">L</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">    GList p;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 空表无表头，这里不能返回NULL，不然分不清是失败了还是返回了空表</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(L </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">CopyGList</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">p,L-&gt;Node.ptr.hp);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 表头</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">GList </span><span style="color:#6F42C1;">GetHead</span><span style="color:#24292E;">(GList </span><span style="color:#E36209;">L</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">    GList p;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 空表无表头，这里不能返回NULL，不然分不清是失败了还是返回了空表</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(L </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">exit</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">CopyGList</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">p,L-&gt;Node.ptr.hp);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> p;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="获取表尾" tabindex="-1">获取表尾 <a class="header-anchor" href="#获取表尾" aria-label="Permalink to &quot;获取表尾&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 表尾</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">GList </span><span style="color:#B392F0;">GetTail</span><span style="color:#E1E4E8;">(GList </span><span style="color:#FFAB70;">L</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">    GList p;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 空表无表尾，这里不能返回NULL，不然分不清是失败了还是返回了空表</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(L </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(ERROR);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">CopyGList</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">p,L-&gt;Node.ptr.tp);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 表尾</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">GList </span><span style="color:#6F42C1;">GetTail</span><span style="color:#24292E;">(GList </span><span style="color:#E36209;">L</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">    GList p;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 空表无表尾，这里不能返回NULL，不然分不清是失败了还是返回了空表</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(L </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">exit</span><span style="color:#24292E;">(ERROR);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">CopyGList</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">p,L-&gt;Node.ptr.tp);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> p;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="头插" tabindex="-1">头插 <a class="header-anchor" href="#头插" aria-label="Permalink to &quot;头插&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 将元素e插入为广义表L的第一个元素。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">InsertFirst</span><span style="color:#E1E4E8;">(GList</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">L</span><span style="color:#E1E4E8;">, GList </span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    GList g;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(L </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    g </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (GList) </span><span style="color:#B392F0;">malloc</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">sizeof</span><span style="color:#E1E4E8;">(GLNode));</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(g </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    g-&gt;tag </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> List;</span></span>
<span class="line"><span style="color:#E1E4E8;">    g-&gt;Node.ptr.hp </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> e;</span></span>
<span class="line"><span style="color:#E1E4E8;">    g-&gt;Node.ptr.tp </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">L;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">L </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> g;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 将元素e插入为广义表L的第一个元素。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">InsertFirst</span><span style="color:#24292E;">(GList</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">L</span><span style="color:#24292E;">, GList </span><span style="color:#E36209;">e</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    GList g;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(L </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    g </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (GList) </span><span style="color:#6F42C1;">malloc</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">sizeof</span><span style="color:#24292E;">(GLNode));</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(g </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">exit</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    g-&gt;tag </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> List;</span></span>
<span class="line"><span style="color:#24292E;">    g-&gt;Node.ptr.hp </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> e;</span></span>
<span class="line"><span style="color:#24292E;">    g-&gt;Node.ptr.tp </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">L;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">L </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> g;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="删除" tabindex="-1">删除 <a class="header-anchor" href="#删除" aria-label="Permalink to &quot;删除&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 将广义表L的第一个元素删除，并用e返回。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">DeleteFirst</span><span style="color:#E1E4E8;">(GList</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">L</span><span style="color:#E1E4E8;">, GList</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    GList p;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 空表无法删除</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(L </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">L </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">L;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">L </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">L)-&gt;Node.ptr.tp;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">CopyGList</span><span style="color:#E1E4E8;">(e, p-&gt;Node.ptr.hp);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">free</span><span style="color:#E1E4E8;">(p);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 将广义表L的第一个元素删除，并用e返回。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">DeleteFirst</span><span style="color:#24292E;">(GList</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">L</span><span style="color:#24292E;">, GList</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">e</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    GList p;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 空表无法删除</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(L </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">L </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">L;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">L </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">L)-&gt;Node.ptr.tp;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">CopyGList</span><span style="color:#24292E;">(e, p-&gt;Node.ptr.hp);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">free</span><span style="color:#24292E;">(p);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="遍历" tabindex="-1">遍历 <a class="header-anchor" href="#遍历" aria-label="Permalink to &quot;遍历&quot;">​</a></h2><p><code>(a,(b,c,d),(e,f))</code> ==&gt; <code>a b c d e f</code></p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 用visit函数访问广义表L。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Traverse</span><span style="color:#E1E4E8;">(GList </span><span style="color:#FFAB70;">L</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;">(Visit)(AtomType)) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(L </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(L-&gt;tag </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> Atom) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">Visit</span><span style="color:#E1E4E8;">(L-&gt;Node.atom);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">Traverse</span><span style="color:#E1E4E8;">(L-&gt;Node.ptr.hp, Visit);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">Traverse</span><span style="color:#E1E4E8;">(L-&gt;Node.ptr.tp, Visit);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 用visit函数访问广义表L。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Traverse</span><span style="color:#24292E;">(GList </span><span style="color:#E36209;">L</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">void</span><span style="color:#24292E;">(Visit)(AtomType)) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(L </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(L-&gt;tag </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> Atom) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">Visit</span><span style="color:#24292E;">(L-&gt;Node.atom);</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">Traverse</span><span style="color:#24292E;">(L-&gt;Node.ptr.hp, Visit);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">Traverse</span><span style="color:#24292E;">(L-&gt;Node.ptr.tp, Visit);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,42),r=[t];function E(y,i,F,A,d,D){return a(),p("div",null,r)}const u=n(c,[["render",E]]);export{g as __pageData,u as default};
