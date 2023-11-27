import{_ as n,o as a,c as p,Q as l}from"./chunks/framework.91000686.js";const s="/data_structure/assets/0954464147-0.69d2468f.gif",g=JSON.parse('{"title":"稀疏矩阵(十字链表)","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"array/0004.md","filePath":"array/0004.md"}'),o={name:"array/0004.md"},e=l('<h1 id="稀疏矩阵-十字链表" tabindex="-1">稀疏矩阵(十字链表) <a class="header-anchor" href="#稀疏矩阵-十字链表" aria-label="Permalink to &quot;稀疏矩阵(十字链表)&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>介于数组 &quot;不利于插入和删除数据&quot; 的特点，以上两种压缩存储方式都不适合解决类似 &quot;向矩阵中添加或删除非 0 元素&quot; 的问题。</p></div><p><img src="'+s+'" alt="img"></p><p><code>chead</code> 列链表头指针：分别指向每一列</p><p><code>rhead</code> 行链表头指针：分别指向每一行</p><h2 id="创建矩阵" tabindex="-1">创建矩阵 <a class="header-anchor" href="#创建矩阵" aria-label="Permalink to &quot;创建矩阵&quot;">​</a></h2><p><img src="'+s+`" alt="img"></p><p>该行该列还没有元素：插入(1,1,3)行和列还没有元素</p><p>该行前已有元素：插入(1,4,5),该行前有(1,1,3)</p><p>该列前已有元素：插入(3,1,2),该列前有(1,1,3)</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 创建稀疏矩阵M</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">CreateSMatrix</span><span style="color:#E1E4E8;">(CrossList</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">M</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">char*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">path</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i,j,k;</span></span>
<span class="line"><span style="color:#E1E4E8;">    OLNode</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> p, </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">q;</span></span>
<span class="line"><span style="color:#E1E4E8;">    FILE</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> fp;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> readFromConsole;</span><span style="color:#6A737D;">    // 是否从控制台读取数据</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 如果没有文件路径信息，则从控制台读取输入</span></span>
<span class="line"><span style="color:#E1E4E8;">    readFromConsole </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> path </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">strcmp</span><span style="color:#E1E4E8;">(path, </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(readFromConsole) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;请输入行数：&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">scanf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%d</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">((</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">M).mu));</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;请输入列数：&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">scanf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%d</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">((</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">M).nu));</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;请输入非零元素个数：&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">scanf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%d</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">((</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">M).tu));</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;请输入</span><span style="color:#79B8FF;">%d</span><span style="color:#9ECBFF;">个三元组信息</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">M).tu);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        fp </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fopen</span><span style="color:#E1E4E8;">(path, </span><span style="color:#9ECBFF;">&quot;r&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">ReadData</span><span style="color:#E1E4E8;">(fp, </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%d%d%d</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">((</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">M).mu), </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">((</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">M).nu), </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">((</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">M).tu));</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 创建行链（类似行索引，0号单元弃用）</span></span>
<span class="line"><span style="color:#E1E4E8;">    M-&gt;rhead </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (OLink</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">) </span><span style="color:#B392F0;">malloc</span><span style="color:#E1E4E8;">((M-&gt;nu </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">sizeof</span><span style="color:#E1E4E8;">(OLink));</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(M-&gt;chead </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 创建列链 (类似列索引，0号单元弃用)</span></span>
<span class="line"><span style="color:#E1E4E8;">    M-&gt;chead </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (OLink</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">) </span><span style="color:#B392F0;">malloc</span><span style="color:#E1E4E8;">((M-&gt;nu </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">*sizeof</span><span style="color:#E1E4E8;">(OLink) );</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(M-&gt;chead </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 初始化行链索引为NULL</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(k </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; k </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">M).mu; </span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">k){</span></span>
<span class="line"><span style="color:#E1E4E8;">        M-&gt;rhead[k] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 初始化列索引为NULL</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(k </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; k </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> M-&gt;nu; </span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">k){</span></span>
<span class="line"><span style="color:#E1E4E8;">        M-&gt;chead[k] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 依次录入非零元素</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(k </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">; k </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> M-&gt;tu; </span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">k){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 创建三元组结点</span></span>
<span class="line"><span style="color:#E1E4E8;">        p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (OLNode </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">) </span><span style="color:#B392F0;">malloc</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">sizeof</span><span style="color:#E1E4E8;">(OLNode));</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(p </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(readFromConsole) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;第</span><span style="color:#79B8FF;">%2d</span><span style="color:#9ECBFF;">组：&quot;</span><span style="color:#E1E4E8;">, k);</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">scanf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%d%d%d</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">i, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">j, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">(p-&gt;e));</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">ReadData</span><span style="color:#E1E4E8;">(fp, </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%d%d%d</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">i, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">j, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">(p-&gt;e));</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        p-&gt;i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> i;</span><span style="color:#6A737D;"> // 行号</span></span>
<span class="line"><span style="color:#E1E4E8;">        p-&gt;j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> j;</span><span style="color:#6A737D;"> // 列号</span></span>
<span class="line"><span style="color:#E1E4E8;">        p-&gt;right </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p-&gt;down </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">        /*</span></span>
<span class="line"><span style="color:#6A737D;">         * 开始行的插入</span></span>
<span class="line"><span style="color:#6A737D;">         */</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 如果该行还没有元素，或已有元素均位于该元素右侧，则可以直接插入</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(M-&gt;rhead[i] </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> M-&gt;rhead[i]-&gt;j </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> j){</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 定位行表中的插入位置</span></span>
<span class="line"><span style="color:#E1E4E8;">            p-&gt;right </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> M-&gt;rhead[i];</span></span>
<span class="line"><span style="color:#E1E4E8;">            M-&gt;rhead[i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 寻找插入位置的前一个位置</span></span>
<span class="line"><span style="color:#E1E4E8;">            q </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> M-&gt;rhead[i];</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> (q-&gt;right </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> q-&gt;right-&gt;j </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> j){</span></span>
<span class="line"><span style="color:#E1E4E8;">                q </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> q-&gt;right;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 判断此位置是否被占</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(q-&gt;j </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> p-&gt;j </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> q-&gt;right </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> q-&gt;right-&gt;j </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> p-&gt;j){</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;此位置已被占用！！</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(ERROR);</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            p-&gt;right </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> q-&gt;right;</span></span>
<span class="line"><span style="color:#E1E4E8;">            q-&gt;right </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">        /**</span></span>
<span class="line"><span style="color:#6A737D;">         * 开始列的插入</span></span>
<span class="line"><span style="color:#6A737D;">         */</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 如果该列还没有元素，或已有元素均位于该元素下侧，则可以直接插入</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(M-&gt;chead[j] </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> M-&gt;chead[j]-&gt;i </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> i){</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 定位列表中的插入位置</span></span>
<span class="line"><span style="color:#E1E4E8;">            p-&gt;down </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> M-&gt;chead[j];</span></span>
<span class="line"><span style="color:#E1E4E8;">            M-&gt;chead[j] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 寻找插入位置的前一个位置</span></span>
<span class="line"><span style="color:#E1E4E8;">            q </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> M-&gt;chead[j];</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> (q-&gt;down </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> q-&gt;down-&gt;i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> i){</span></span>
<span class="line"><span style="color:#E1E4E8;">                q </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> q-&gt;down;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(q-&gt;i </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> p-&gt;i </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> q-&gt;down </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> q-&gt;down-&gt;i </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> p-&gt;i){</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;此位置已被占用！！</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(ERROR);</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            p-&gt;down </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> q-&gt;down;</span></span>
<span class="line"><span style="color:#E1E4E8;">            q-&gt;down </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">readFromConsole) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">fclose</span><span style="color:#E1E4E8;">(fp);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 创建稀疏矩阵M</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">CreateSMatrix</span><span style="color:#24292E;">(CrossList</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">M</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">char*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">path</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i,j,k;</span></span>
<span class="line"><span style="color:#24292E;">    OLNode</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> p, </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">q;</span></span>
<span class="line"><span style="color:#24292E;">    FILE</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> fp;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> readFromConsole;</span><span style="color:#6A737D;">    // 是否从控制台读取数据</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 如果没有文件路径信息，则从控制台读取输入</span></span>
<span class="line"><span style="color:#24292E;">    readFromConsole </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> path </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">strcmp</span><span style="color:#24292E;">(path, </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(readFromConsole) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;请输入行数：&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">scanf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%d</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">((</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">M).mu));</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;请输入列数：&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">scanf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%d</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">((</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">M).nu));</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;请输入非零元素个数：&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">scanf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%d</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">((</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">M).tu));</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;请输入</span><span style="color:#005CC5;">%d</span><span style="color:#032F62;">个三元组信息</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">M).tu);</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        fp </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fopen</span><span style="color:#24292E;">(path, </span><span style="color:#032F62;">&quot;r&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">ReadData</span><span style="color:#24292E;">(fp, </span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%d%d%d</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">((</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">M).mu), </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">((</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">M).nu), </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">((</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">M).tu));</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 创建行链（类似行索引，0号单元弃用）</span></span>
<span class="line"><span style="color:#24292E;">    M-&gt;rhead </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (OLink</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">) </span><span style="color:#6F42C1;">malloc</span><span style="color:#24292E;">((M-&gt;nu </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">sizeof</span><span style="color:#24292E;">(OLink));</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(M-&gt;chead </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">exit</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 创建列链 (类似列索引，0号单元弃用)</span></span>
<span class="line"><span style="color:#24292E;">    M-&gt;chead </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (OLink</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">) </span><span style="color:#6F42C1;">malloc</span><span style="color:#24292E;">((M-&gt;nu </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">*sizeof</span><span style="color:#24292E;">(OLink) );</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(M-&gt;chead </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">exit</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 初始化行链索引为NULL</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(k </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; k </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">M).mu; </span><span style="color:#D73A49;">++</span><span style="color:#24292E;">k){</span></span>
<span class="line"><span style="color:#24292E;">        M-&gt;rhead[k] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 初始化列索引为NULL</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(k </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; k </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> M-&gt;nu; </span><span style="color:#D73A49;">++</span><span style="color:#24292E;">k){</span></span>
<span class="line"><span style="color:#24292E;">        M-&gt;chead[k] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 依次录入非零元素</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(k </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">; k </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> M-&gt;tu; </span><span style="color:#D73A49;">++</span><span style="color:#24292E;">k){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 创建三元组结点</span></span>
<span class="line"><span style="color:#24292E;">        p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (OLNode </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">) </span><span style="color:#6F42C1;">malloc</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">sizeof</span><span style="color:#24292E;">(OLNode));</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(p </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">exit</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(readFromConsole) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;第</span><span style="color:#005CC5;">%2d</span><span style="color:#032F62;">组：&quot;</span><span style="color:#24292E;">, k);</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">scanf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%d%d%d</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">i, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">j, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">(p-&gt;e));</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">ReadData</span><span style="color:#24292E;">(fp, </span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%d%d%d</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">i, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">j, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">(p-&gt;e));</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        p-&gt;i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> i;</span><span style="color:#6A737D;"> // 行号</span></span>
<span class="line"><span style="color:#24292E;">        p-&gt;j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> j;</span><span style="color:#6A737D;"> // 列号</span></span>
<span class="line"><span style="color:#24292E;">        p-&gt;right </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p-&gt;down </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">        /*</span></span>
<span class="line"><span style="color:#6A737D;">         * 开始行的插入</span></span>
<span class="line"><span style="color:#6A737D;">         */</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 如果该行还没有元素，或已有元素均位于该元素右侧，则可以直接插入</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(M-&gt;rhead[i] </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> M-&gt;rhead[i]-&gt;j </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> j){</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 定位行表中的插入位置</span></span>
<span class="line"><span style="color:#24292E;">            p-&gt;right </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> M-&gt;rhead[i];</span></span>
<span class="line"><span style="color:#24292E;">            M-&gt;rhead[i] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p;</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 寻找插入位置的前一个位置</span></span>
<span class="line"><span style="color:#24292E;">            q </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> M-&gt;rhead[i];</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (q-&gt;right </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> q-&gt;right-&gt;j </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> j){</span></span>
<span class="line"><span style="color:#24292E;">                q </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> q-&gt;right;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 判断此位置是否被占</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(q-&gt;j </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> p-&gt;j </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> q-&gt;right </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> q-&gt;right-&gt;j </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> p-&gt;j){</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;此位置已被占用！！</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">exit</span><span style="color:#24292E;">(ERROR);</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            p-&gt;right </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> q-&gt;right;</span></span>
<span class="line"><span style="color:#24292E;">            q-&gt;right </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">        /**</span></span>
<span class="line"><span style="color:#6A737D;">         * 开始列的插入</span></span>
<span class="line"><span style="color:#6A737D;">         */</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 如果该列还没有元素，或已有元素均位于该元素下侧，则可以直接插入</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(M-&gt;chead[j] </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> M-&gt;chead[j]-&gt;i </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> i){</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 定位列表中的插入位置</span></span>
<span class="line"><span style="color:#24292E;">            p-&gt;down </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> M-&gt;chead[j];</span></span>
<span class="line"><span style="color:#24292E;">            M-&gt;chead[j] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p;</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 寻找插入位置的前一个位置</span></span>
<span class="line"><span style="color:#24292E;">            q </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> M-&gt;chead[j];</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (q-&gt;down </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> q-&gt;down-&gt;i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> i){</span></span>
<span class="line"><span style="color:#24292E;">                q </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> q-&gt;down;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(q-&gt;i </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> p-&gt;i </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> q-&gt;down </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> q-&gt;down-&gt;i </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> p-&gt;i){</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;此位置已被占用！！</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">exit</span><span style="color:#24292E;">(ERROR);</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            p-&gt;down </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> q-&gt;down;</span></span>
<span class="line"><span style="color:#24292E;">            q-&gt;down </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">readFromConsole) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">fclose</span><span style="color:#24292E;">(fp);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="输出矩阵" tabindex="-1">输出矩阵 <a class="header-anchor" href="#输出矩阵" aria-label="Permalink to &quot;输出矩阵&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">* 输出矩阵</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PrintSMatrix</span><span style="color:#E1E4E8;">(CrossList </span><span style="color:#FFAB70;">M</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i,j;</span></span>
<span class="line"><span style="color:#E1E4E8;">    OLNode</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> M.mu; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">        p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> M.rhead[i];</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> M.nu; </span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">j){</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(p </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> p-&gt;j </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> j){</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%3d</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">,p-&gt;e);</span></span>
<span class="line"><span style="color:#E1E4E8;">                p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p-&gt;right;</span></span>
<span class="line"><span style="color:#E1E4E8;">            } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%3d</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">* 输出矩阵</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PrintSMatrix</span><span style="color:#24292E;">(CrossList </span><span style="color:#E36209;">M</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i,j;</span></span>
<span class="line"><span style="color:#24292E;">    OLNode</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> p;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> M.mu; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> M.rhead[i];</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">; j </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> M.nu; </span><span style="color:#D73A49;">++</span><span style="color:#24292E;">j){</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(p </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> p-&gt;j </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> j){</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%3d</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">,p-&gt;e);</span></span>
<span class="line"><span style="color:#24292E;">                p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p-&gt;right;</span></span>
<span class="line"><span style="color:#24292E;">            } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%3d</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="销毁稀疏矩阵" tabindex="-1">销毁稀疏矩阵 <a class="header-anchor" href="#销毁稀疏矩阵" aria-label="Permalink to &quot;销毁稀疏矩阵&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 销毁稀疏矩阵</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">DestroySMatrix</span><span style="color:#E1E4E8;">(CrossList</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">M</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i;</span></span>
<span class="line"><span style="color:#E1E4E8;">    OLNode</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> p, </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> q;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 无论从按行还是按列，只需要朝着一个方向去遍历销毁就可以了</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">M).mu; </span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">i) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">M).rhead[i];</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;">(p </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            q </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"><span style="color:#E1E4E8;">            p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p-&gt;right;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">free</span><span style="color:#E1E4E8;">(q);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">free</span><span style="color:#E1E4E8;">((</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">M).rhead);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">free</span><span style="color:#E1E4E8;">((</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">M).chead);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">M).rhead </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">M).chead </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">M).mu </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">M).nu </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">M).tu </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 销毁稀疏矩阵</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">DestroySMatrix</span><span style="color:#24292E;">(CrossList</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">M</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i;</span></span>
<span class="line"><span style="color:#24292E;">    OLNode</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> p, </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> q;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 无论从按行还是按列，只需要朝着一个方向去遍历销毁就可以了</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">M).mu; </span><span style="color:#D73A49;">++</span><span style="color:#24292E;">i) {</span></span>
<span class="line"><span style="color:#24292E;">        p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">M).rhead[i];</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">while</span><span style="color:#24292E;">(p </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            q </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p;</span></span>
<span class="line"><span style="color:#24292E;">            p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p-&gt;right;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">free</span><span style="color:#24292E;">(q);</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">free</span><span style="color:#24292E;">((</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">M).rhead);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">free</span><span style="color:#24292E;">((</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">M).chead);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">M).rhead </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">M).chead </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">M).mu </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">M).nu </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">M).tu </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="矩阵复制" tabindex="-1">矩阵复制 <a class="header-anchor" href="#矩阵复制" aria-label="Permalink to &quot;矩阵复制&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 创建一个新矩阵T，该矩阵包含了从矩阵M中包含的数据。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">CopySMatrix</span><span style="color:#E1E4E8;">(CrossList </span><span style="color:#FFAB70;">M</span><span style="color:#E1E4E8;">, CrossList</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">T</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> k;</span></span>
<span class="line"><span style="color:#E1E4E8;">    OLNode</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> p, </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> q, </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> r, </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> l;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(T </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 复制行列信息</span></span>
<span class="line"><span style="color:#E1E4E8;">    (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T).mu </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> M.mu;</span></span>
<span class="line"><span style="color:#E1E4E8;">    (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T).nu </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> M.nu;</span></span>
<span class="line"><span style="color:#E1E4E8;">    (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T).tu </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> M.tu;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 创建行链（类似行索引，0号单元弃用）</span></span>
<span class="line"><span style="color:#E1E4E8;">    (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T).rhead </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (OLink</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">) </span><span style="color:#B392F0;">malloc</span><span style="color:#E1E4E8;">(((</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T).mu </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">sizeof</span><span style="color:#E1E4E8;">(OLink));</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">((</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T).rhead </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 创建列链（类似列索引，0号单元弃用）</span></span>
<span class="line"><span style="color:#E1E4E8;">    (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T).chead </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (OLink</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">) </span><span style="color:#B392F0;">malloc</span><span style="color:#E1E4E8;">(((</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T).nu </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">sizeof</span><span style="color:#E1E4E8;">(OLink));</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">((</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T).chead </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 初始化行链索引为NULL</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(k </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; k </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T).mu; </span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">k) {</span><span style="color:#6A737D;">                                //初始化行列头指针向量为空</span></span>
<span class="line"><span style="color:#E1E4E8;">        (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T).rhead[k] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 初始化列链索引为NULL</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(k </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; k </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T).nu; </span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">k) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T).chead[k] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 按行扫描，依次复制非零元</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(k </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">; k </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> M.mu; </span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">k) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        q </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> M.rhead[k];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 如果当前行没有元素，直接跳过</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(q </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">continue</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;">(q </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 创建三元组结点</span></span>
<span class="line"><span style="color:#E1E4E8;">            p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (OLNode</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">) </span><span style="color:#B392F0;">malloc</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">sizeof</span><span style="color:#E1E4E8;">(OLNode));</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(p </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 为结点赋值</span></span>
<span class="line"><span style="color:#E1E4E8;">            p-&gt;i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> q-&gt;i;</span></span>
<span class="line"><span style="color:#E1E4E8;">            p-&gt;j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> q-&gt;j;</span></span>
<span class="line"><span style="color:#E1E4E8;">            p-&gt;e </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> q-&gt;e;</span></span>
<span class="line"><span style="color:#E1E4E8;">            p-&gt;right </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p-&gt;down </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">            /*</span></span>
<span class="line"><span style="color:#6A737D;">             * 开始行的插入</span></span>
<span class="line"><span style="color:#6A737D;">             */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(r </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T).rhead[q-&gt;i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"><span style="color:#E1E4E8;">            } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                r-&gt;right </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// r指向当前行新插入的结点</span></span>
<span class="line"><span style="color:#E1E4E8;">            r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">            /*</span></span>
<span class="line"><span style="color:#6A737D;">             * 开始列的插入</span></span>
<span class="line"><span style="color:#6A737D;">             */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 在列链中寻找插入位置</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">((</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T).chead[q-&gt;j] </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T).chead[q-&gt;j]-&gt;i </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> q-&gt;i) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                r-&gt;down </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T).chead[q-&gt;j];</span></span>
<span class="line"><span style="color:#E1E4E8;">                (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T).chead[q-&gt;j] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r;</span></span>
<span class="line"><span style="color:#E1E4E8;">            } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// 寻找插入位置的前一个位置</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(l </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T).chead[q-&gt;j]; (l-&gt;down) </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> (l-&gt;down-&gt;i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> q-&gt;i); l </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> l-&gt;down) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">                r-&gt;down </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> l-&gt;down;</span></span>
<span class="line"><span style="color:#E1E4E8;">                l-&gt;down </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            q </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> q-&gt;right;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 创建一个新矩阵T，该矩阵包含了从矩阵M中包含的数据。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">CopySMatrix</span><span style="color:#24292E;">(CrossList </span><span style="color:#E36209;">M</span><span style="color:#24292E;">, CrossList</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">T</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> k;</span></span>
<span class="line"><span style="color:#24292E;">    OLNode</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> p, </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> q, </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> r, </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> l;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(T </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 复制行列信息</span></span>
<span class="line"><span style="color:#24292E;">    (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T).mu </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> M.mu;</span></span>
<span class="line"><span style="color:#24292E;">    (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T).nu </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> M.nu;</span></span>
<span class="line"><span style="color:#24292E;">    (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T).tu </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> M.tu;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 创建行链（类似行索引，0号单元弃用）</span></span>
<span class="line"><span style="color:#24292E;">    (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T).rhead </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (OLink</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">) </span><span style="color:#6F42C1;">malloc</span><span style="color:#24292E;">(((</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T).mu </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">sizeof</span><span style="color:#24292E;">(OLink));</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">((</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T).rhead </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">exit</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 创建列链（类似列索引，0号单元弃用）</span></span>
<span class="line"><span style="color:#24292E;">    (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T).chead </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (OLink</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">) </span><span style="color:#6F42C1;">malloc</span><span style="color:#24292E;">(((</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T).nu </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">sizeof</span><span style="color:#24292E;">(OLink));</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">((</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T).chead </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">exit</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 初始化行链索引为NULL</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(k </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; k </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T).mu; </span><span style="color:#D73A49;">++</span><span style="color:#24292E;">k) {</span><span style="color:#6A737D;">                                //初始化行列头指针向量为空</span></span>
<span class="line"><span style="color:#24292E;">        (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T).rhead[k] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 初始化列链索引为NULL</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(k </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; k </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T).nu; </span><span style="color:#D73A49;">++</span><span style="color:#24292E;">k) {</span></span>
<span class="line"><span style="color:#24292E;">        (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T).chead[k] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 按行扫描，依次复制非零元</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(k </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">; k </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> M.mu; </span><span style="color:#D73A49;">++</span><span style="color:#24292E;">k) {</span></span>
<span class="line"><span style="color:#24292E;">        q </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> M.rhead[k];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 如果当前行没有元素，直接跳过</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(q </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">continue</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">while</span><span style="color:#24292E;">(q </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 创建三元组结点</span></span>
<span class="line"><span style="color:#24292E;">            p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (OLNode</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">) </span><span style="color:#6F42C1;">malloc</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">sizeof</span><span style="color:#24292E;">(OLNode));</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(p </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">exit</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 为结点赋值</span></span>
<span class="line"><span style="color:#24292E;">            p-&gt;i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> q-&gt;i;</span></span>
<span class="line"><span style="color:#24292E;">            p-&gt;j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> q-&gt;j;</span></span>
<span class="line"><span style="color:#24292E;">            p-&gt;e </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> q-&gt;e;</span></span>
<span class="line"><span style="color:#24292E;">            p-&gt;right </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p-&gt;down </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">            /*</span></span>
<span class="line"><span style="color:#6A737D;">             * 开始行的插入</span></span>
<span class="line"><span style="color:#6A737D;">             */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(r </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">                (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T).rhead[q-&gt;i] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p;</span></span>
<span class="line"><span style="color:#24292E;">            } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                r-&gt;right </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// r指向当前行新插入的结点</span></span>
<span class="line"><span style="color:#24292E;">            r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">            /*</span></span>
<span class="line"><span style="color:#6A737D;">             * 开始列的插入</span></span>
<span class="line"><span style="color:#6A737D;">             */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 在列链中寻找插入位置</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">((</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T).chead[q-&gt;j] </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T).chead[q-&gt;j]-&gt;i </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> q-&gt;i) {</span></span>
<span class="line"><span style="color:#24292E;">                r-&gt;down </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T).chead[q-&gt;j];</span></span>
<span class="line"><span style="color:#24292E;">                (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T).chead[q-&gt;j] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r;</span></span>
<span class="line"><span style="color:#24292E;">            } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// 寻找插入位置的前一个位置</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(l </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T).chead[q-&gt;j]; (l-&gt;down) </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> (l-&gt;down-&gt;i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> q-&gt;i); l </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> l-&gt;down) {</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">                r-&gt;down </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> l-&gt;down;</span></span>
<span class="line"><span style="color:#24292E;">                l-&gt;down </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            q </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> q-&gt;right;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="矩阵加法" tabindex="-1">矩阵加法 <a class="header-anchor" href="#矩阵加法" aria-label="Permalink to &quot;矩阵加法&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * Q = M + N。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">AddSMatrix</span><span style="color:#E1E4E8;">(CrossList </span><span style="color:#FFAB70;">M</span><span style="color:#E1E4E8;">, CrossList </span><span style="color:#FFAB70;">N</span><span style="color:#E1E4E8;">, CrossList</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">Q</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i;</span></span>
<span class="line"><span style="color:#E1E4E8;">    OLNode</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> pm, </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> pn, </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> p, </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> r, </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> l;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(M.mu </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> N.mu </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> M.nu </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> N.nu) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;两矩阵的行数、列数不满足相加条件！！</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 初始化Q的行列信息</span></span>
<span class="line"><span style="color:#E1E4E8;">    Q-&gt;mu </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> M.mu;</span></span>
<span class="line"><span style="color:#E1E4E8;">    Q-&gt;nu </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> M.nu;</span></span>
<span class="line"><span style="color:#E1E4E8;">    Q-&gt;tu </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 创建行链（类似行索引，0号单元弃用）</span></span>
<span class="line"><span style="color:#E1E4E8;">    Q-&gt;rhead </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (OLink</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">) </span><span style="color:#B392F0;">malloc</span><span style="color:#E1E4E8;">((Q-&gt;mu </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">sizeof</span><span style="color:#E1E4E8;">(OLink));</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">Q-&gt;rhead) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 创建列链（类似列索引，0号单元弃用）</span></span>
<span class="line"><span style="color:#E1E4E8;">    Q-&gt;chead </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (OLink</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">) </span><span style="color:#B392F0;">malloc</span><span style="color:#E1E4E8;">((Q-&gt;nu </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">sizeof</span><span style="color:#E1E4E8;">(OLink));</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">Q-&gt;chead) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 初始化行链索引为NULL</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> Q-&gt;mu; </span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">i) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        Q-&gt;rhead[i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 初始化列链索引为NULL</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> Q-&gt;nu; </span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">i) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        Q-&gt;chead[i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 从第一行往下遍历</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> M.mu; </span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">i) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        pm </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> M.rhead[i];</span></span>
<span class="line"><span style="color:#E1E4E8;">        pn </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> N.rhead[i];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 如果M与N的当前行中均有未处理的非零元</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;">(pm </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> pn </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 处理特殊情形</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(pm-&gt;j </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> pn-&gt;j </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> pm-&gt;e </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> pn-&gt;e </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                pm </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pm-&gt;right;</span></span>
<span class="line"><span style="color:#E1E4E8;">                pn </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pn-&gt;right;</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">continue</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 创建结点</span></span>
<span class="line"><span style="color:#E1E4E8;">            p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (OLNode</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">) </span><span style="color:#B392F0;">malloc</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">sizeof</span><span style="color:#E1E4E8;">(OLNode));</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">p) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// M中的三元组列下标较小</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(pm-&gt;j </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> pn-&gt;j) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                p-&gt;i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pm-&gt;i;</span></span>
<span class="line"><span style="color:#E1E4E8;">                p-&gt;j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pm-&gt;j;</span></span>
<span class="line"><span style="color:#E1E4E8;">                p-&gt;e </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pm-&gt;e;</span></span>
<span class="line"><span style="color:#E1E4E8;">                pm </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pm-&gt;right;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// N中的三元组列下标较小</span></span>
<span class="line"><span style="color:#E1E4E8;">            } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(pm-&gt;j </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> pn-&gt;j) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                p-&gt;i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pn-&gt;i;</span></span>
<span class="line"><span style="color:#E1E4E8;">                p-&gt;j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pn-&gt;j;</span></span>
<span class="line"><span style="color:#E1E4E8;">                p-&gt;e </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pn-&gt;e;</span></span>
<span class="line"><span style="color:#E1E4E8;">                pn </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pn-&gt;right;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// M与N中的三元组列下标一致，需要进行加法运算</span></span>
<span class="line"><span style="color:#E1E4E8;">            } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                p-&gt;i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pm-&gt;i;</span></span>
<span class="line"><span style="color:#E1E4E8;">                p-&gt;j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pm-&gt;j;</span></span>
<span class="line"><span style="color:#E1E4E8;">                p-&gt;e </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pm-&gt;e </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> pn-&gt;e;</span></span>
<span class="line"><span style="color:#E1E4E8;">                pm </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pm-&gt;right;</span></span>
<span class="line"><span style="color:#E1E4E8;">                pn </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pn-&gt;right;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            p-&gt;right </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p-&gt;down </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            Q-&gt;tu</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">    // Q中非零元个数增一</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">            /*</span></span>
<span class="line"><span style="color:#6A737D;">             * 开始行的插入</span></span>
<span class="line"><span style="color:#6A737D;">             */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(Q-&gt;rhead[p-&gt;i] </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                Q-&gt;rhead[p-&gt;i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"><span style="color:#E1E4E8;">            } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                r-&gt;right </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// r指向当前行新插入的结点</span></span>
<span class="line"><span style="color:#E1E4E8;">            r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">            /*</span></span>
<span class="line"><span style="color:#6A737D;">             * 开始列的插入</span></span>
<span class="line"><span style="color:#6A737D;">             */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 在列链中寻找插入位置</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(Q-&gt;chead[p-&gt;j] </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> Q-&gt;chead[p-&gt;j]-&gt;i </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> p-&gt;i) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                r-&gt;down </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Q-&gt;chead[p-&gt;j];</span></span>
<span class="line"><span style="color:#E1E4E8;">                Q-&gt;chead[p-&gt;j] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r;</span></span>
<span class="line"><span style="color:#E1E4E8;">            } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// 寻找插入位置的前一个位置</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(l </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Q-&gt;chead[p-&gt;j]; (l-&gt;down) </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> (l-&gt;down-&gt;i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> p-&gt;i); l </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> l-&gt;down) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">                r-&gt;down </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> l-&gt;down;</span></span>
<span class="line"><span style="color:#E1E4E8;">                l-&gt;down </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 如果M的当前行中仍有未处理的非零元</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;">(pm </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (OLNode</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">) </span><span style="color:#B392F0;">malloc</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">sizeof</span><span style="color:#E1E4E8;">(OLNode));</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(p </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            p-&gt;i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pm-&gt;i;</span></span>
<span class="line"><span style="color:#E1E4E8;">            p-&gt;j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pm-&gt;j;</span></span>
<span class="line"><span style="color:#E1E4E8;">            p-&gt;e </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pm-&gt;e;</span></span>
<span class="line"><span style="color:#E1E4E8;">            p-&gt;right </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p-&gt;down </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            Q-&gt;tu</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">    // Q中非零元个数增一</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(Q-&gt;rhead[p-&gt;i] </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                Q-&gt;rhead[p-&gt;i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"><span style="color:#E1E4E8;">            } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                r-&gt;right </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// r指向当前行新插入的结点</span></span>
<span class="line"><span style="color:#E1E4E8;">            r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 在列链中寻找插入位置</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(Q-&gt;chead[p-&gt;j] </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> Q-&gt;chead[p-&gt;j]-&gt;i </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> p-&gt;i) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                r-&gt;down </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Q-&gt;chead[p-&gt;j];</span></span>
<span class="line"><span style="color:#E1E4E8;">                Q-&gt;chead[p-&gt;j] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r;</span></span>
<span class="line"><span style="color:#E1E4E8;">            } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// 寻找插入位置的前一个位置</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(l </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Q-&gt;chead[p-&gt;j]; (l-&gt;down) </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> (l-&gt;down-&gt;i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> p-&gt;i); l </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> l-&gt;down) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">                r-&gt;down </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> l-&gt;down;</span></span>
<span class="line"><span style="color:#E1E4E8;">                l-&gt;down </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            pm </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pm-&gt;right;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 如果N的当前行中仍有未处理的非零元</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;">(pn </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (OLNode</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">) </span><span style="color:#B392F0;">malloc</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">sizeof</span><span style="color:#E1E4E8;">(OLNode));</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(p </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            p-&gt;i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pn-&gt;i;</span></span>
<span class="line"><span style="color:#E1E4E8;">            p-&gt;j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pn-&gt;j;</span></span>
<span class="line"><span style="color:#E1E4E8;">            p-&gt;e </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pn-&gt;e;</span></span>
<span class="line"><span style="color:#E1E4E8;">            p-&gt;right </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p-&gt;down </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            Q-&gt;tu</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">    // Q中非零元个数增一</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(Q-&gt;rhead[p-&gt;i] </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                Q-&gt;rhead[p-&gt;i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"><span style="color:#E1E4E8;">            } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                r-&gt;right </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// r指向当前行新插入的结点</span></span>
<span class="line"><span style="color:#E1E4E8;">            r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 在列链中寻找插入位置</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(Q-&gt;chead[p-&gt;j] </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> Q-&gt;chead[p-&gt;j]-&gt;i </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> p-&gt;i) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                r-&gt;down </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Q-&gt;chead[p-&gt;j];</span></span>
<span class="line"><span style="color:#E1E4E8;">                Q-&gt;chead[p-&gt;j] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r;</span></span>
<span class="line"><span style="color:#E1E4E8;">            } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// 寻找插入位置的前一个位置</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(l </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Q-&gt;chead[p-&gt;j]; (l-&gt;down) </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> (l-&gt;down-&gt;i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> p-&gt;i); l </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> l-&gt;down) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">                r-&gt;down </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> l-&gt;down;</span></span>
<span class="line"><span style="color:#E1E4E8;">                l-&gt;down </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            pn </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pn-&gt;right;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * Q = M + N。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">AddSMatrix</span><span style="color:#24292E;">(CrossList </span><span style="color:#E36209;">M</span><span style="color:#24292E;">, CrossList </span><span style="color:#E36209;">N</span><span style="color:#24292E;">, CrossList</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">Q</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i;</span></span>
<span class="line"><span style="color:#24292E;">    OLNode</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> pm, </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> pn, </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> p, </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> r, </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> l;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(M.mu </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> N.mu </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> M.nu </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> N.nu) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;两矩阵的行数、列数不满足相加条件！！</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 初始化Q的行列信息</span></span>
<span class="line"><span style="color:#24292E;">    Q-&gt;mu </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> M.mu;</span></span>
<span class="line"><span style="color:#24292E;">    Q-&gt;nu </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> M.nu;</span></span>
<span class="line"><span style="color:#24292E;">    Q-&gt;tu </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 创建行链（类似行索引，0号单元弃用）</span></span>
<span class="line"><span style="color:#24292E;">    Q-&gt;rhead </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (OLink</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">) </span><span style="color:#6F42C1;">malloc</span><span style="color:#24292E;">((Q-&gt;mu </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">sizeof</span><span style="color:#24292E;">(OLink));</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">Q-&gt;rhead) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">exit</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 创建列链（类似列索引，0号单元弃用）</span></span>
<span class="line"><span style="color:#24292E;">    Q-&gt;chead </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (OLink</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">) </span><span style="color:#6F42C1;">malloc</span><span style="color:#24292E;">((Q-&gt;nu </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">sizeof</span><span style="color:#24292E;">(OLink));</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">Q-&gt;chead) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">exit</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 初始化行链索引为NULL</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> Q-&gt;mu; </span><span style="color:#D73A49;">++</span><span style="color:#24292E;">i) {</span></span>
<span class="line"><span style="color:#24292E;">        Q-&gt;rhead[i] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 初始化列链索引为NULL</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> Q-&gt;nu; </span><span style="color:#D73A49;">++</span><span style="color:#24292E;">i) {</span></span>
<span class="line"><span style="color:#24292E;">        Q-&gt;chead[i] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 从第一行往下遍历</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> M.mu; </span><span style="color:#D73A49;">++</span><span style="color:#24292E;">i) {</span></span>
<span class="line"><span style="color:#24292E;">        pm </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> M.rhead[i];</span></span>
<span class="line"><span style="color:#24292E;">        pn </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> N.rhead[i];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 如果M与N的当前行中均有未处理的非零元</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">while</span><span style="color:#24292E;">(pm </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> pn </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 处理特殊情形</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(pm-&gt;j </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> pn-&gt;j </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> pm-&gt;e </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> pn-&gt;e </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">                pm </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pm-&gt;right;</span></span>
<span class="line"><span style="color:#24292E;">                pn </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pn-&gt;right;</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">continue</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 创建结点</span></span>
<span class="line"><span style="color:#24292E;">            p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (OLNode</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">) </span><span style="color:#6F42C1;">malloc</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">sizeof</span><span style="color:#24292E;">(OLNode));</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">p) {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">exit</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// M中的三元组列下标较小</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(pm-&gt;j </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> pn-&gt;j) {</span></span>
<span class="line"><span style="color:#24292E;">                p-&gt;i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pm-&gt;i;</span></span>
<span class="line"><span style="color:#24292E;">                p-&gt;j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pm-&gt;j;</span></span>
<span class="line"><span style="color:#24292E;">                p-&gt;e </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pm-&gt;e;</span></span>
<span class="line"><span style="color:#24292E;">                pm </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pm-&gt;right;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// N中的三元组列下标较小</span></span>
<span class="line"><span style="color:#24292E;">            } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(pm-&gt;j </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> pn-&gt;j) {</span></span>
<span class="line"><span style="color:#24292E;">                p-&gt;i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pn-&gt;i;</span></span>
<span class="line"><span style="color:#24292E;">                p-&gt;j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pn-&gt;j;</span></span>
<span class="line"><span style="color:#24292E;">                p-&gt;e </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pn-&gt;e;</span></span>
<span class="line"><span style="color:#24292E;">                pn </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pn-&gt;right;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// M与N中的三元组列下标一致，需要进行加法运算</span></span>
<span class="line"><span style="color:#24292E;">            } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                p-&gt;i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pm-&gt;i;</span></span>
<span class="line"><span style="color:#24292E;">                p-&gt;j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pm-&gt;j;</span></span>
<span class="line"><span style="color:#24292E;">                p-&gt;e </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pm-&gt;e </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> pn-&gt;e;</span></span>
<span class="line"><span style="color:#24292E;">                pm </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pm-&gt;right;</span></span>
<span class="line"><span style="color:#24292E;">                pn </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pn-&gt;right;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            p-&gt;right </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p-&gt;down </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            Q-&gt;tu</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">    // Q中非零元个数增一</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">            /*</span></span>
<span class="line"><span style="color:#6A737D;">             * 开始行的插入</span></span>
<span class="line"><span style="color:#6A737D;">             */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(Q-&gt;rhead[p-&gt;i] </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">                Q-&gt;rhead[p-&gt;i] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p;</span></span>
<span class="line"><span style="color:#24292E;">            } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                r-&gt;right </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// r指向当前行新插入的结点</span></span>
<span class="line"><span style="color:#24292E;">            r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">            /*</span></span>
<span class="line"><span style="color:#6A737D;">             * 开始列的插入</span></span>
<span class="line"><span style="color:#6A737D;">             */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 在列链中寻找插入位置</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(Q-&gt;chead[p-&gt;j] </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> Q-&gt;chead[p-&gt;j]-&gt;i </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> p-&gt;i) {</span></span>
<span class="line"><span style="color:#24292E;">                r-&gt;down </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Q-&gt;chead[p-&gt;j];</span></span>
<span class="line"><span style="color:#24292E;">                Q-&gt;chead[p-&gt;j] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r;</span></span>
<span class="line"><span style="color:#24292E;">            } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// 寻找插入位置的前一个位置</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(l </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Q-&gt;chead[p-&gt;j]; (l-&gt;down) </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> (l-&gt;down-&gt;i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> p-&gt;i); l </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> l-&gt;down) {</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">                r-&gt;down </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> l-&gt;down;</span></span>
<span class="line"><span style="color:#24292E;">                l-&gt;down </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 如果M的当前行中仍有未处理的非零元</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">while</span><span style="color:#24292E;">(pm </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (OLNode</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">) </span><span style="color:#6F42C1;">malloc</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">sizeof</span><span style="color:#24292E;">(OLNode));</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(p </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">exit</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            p-&gt;i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pm-&gt;i;</span></span>
<span class="line"><span style="color:#24292E;">            p-&gt;j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pm-&gt;j;</span></span>
<span class="line"><span style="color:#24292E;">            p-&gt;e </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pm-&gt;e;</span></span>
<span class="line"><span style="color:#24292E;">            p-&gt;right </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p-&gt;down </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            Q-&gt;tu</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">    // Q中非零元个数增一</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(Q-&gt;rhead[p-&gt;i] </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">                Q-&gt;rhead[p-&gt;i] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p;</span></span>
<span class="line"><span style="color:#24292E;">            } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                r-&gt;right </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// r指向当前行新插入的结点</span></span>
<span class="line"><span style="color:#24292E;">            r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 在列链中寻找插入位置</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(Q-&gt;chead[p-&gt;j] </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> Q-&gt;chead[p-&gt;j]-&gt;i </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> p-&gt;i) {</span></span>
<span class="line"><span style="color:#24292E;">                r-&gt;down </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Q-&gt;chead[p-&gt;j];</span></span>
<span class="line"><span style="color:#24292E;">                Q-&gt;chead[p-&gt;j] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r;</span></span>
<span class="line"><span style="color:#24292E;">            } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// 寻找插入位置的前一个位置</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(l </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Q-&gt;chead[p-&gt;j]; (l-&gt;down) </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> (l-&gt;down-&gt;i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> p-&gt;i); l </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> l-&gt;down) {</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">                r-&gt;down </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> l-&gt;down;</span></span>
<span class="line"><span style="color:#24292E;">                l-&gt;down </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            pm </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pm-&gt;right;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 如果N的当前行中仍有未处理的非零元</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">while</span><span style="color:#24292E;">(pn </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (OLNode</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">) </span><span style="color:#6F42C1;">malloc</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">sizeof</span><span style="color:#24292E;">(OLNode));</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(p </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">exit</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            p-&gt;i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pn-&gt;i;</span></span>
<span class="line"><span style="color:#24292E;">            p-&gt;j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pn-&gt;j;</span></span>
<span class="line"><span style="color:#24292E;">            p-&gt;e </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pn-&gt;e;</span></span>
<span class="line"><span style="color:#24292E;">            p-&gt;right </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p-&gt;down </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            Q-&gt;tu</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">    // Q中非零元个数增一</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(Q-&gt;rhead[p-&gt;i] </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">                Q-&gt;rhead[p-&gt;i] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p;</span></span>
<span class="line"><span style="color:#24292E;">            } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                r-&gt;right </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// r指向当前行新插入的结点</span></span>
<span class="line"><span style="color:#24292E;">            r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 在列链中寻找插入位置</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(Q-&gt;chead[p-&gt;j] </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> Q-&gt;chead[p-&gt;j]-&gt;i </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> p-&gt;i) {</span></span>
<span class="line"><span style="color:#24292E;">                r-&gt;down </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Q-&gt;chead[p-&gt;j];</span></span>
<span class="line"><span style="color:#24292E;">                Q-&gt;chead[p-&gt;j] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r;</span></span>
<span class="line"><span style="color:#24292E;">            } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// 寻找插入位置的前一个位置</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(l </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Q-&gt;chead[p-&gt;j]; (l-&gt;down) </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> (l-&gt;down-&gt;i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> p-&gt;i); l </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> l-&gt;down) {</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">                r-&gt;down </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> l-&gt;down;</span></span>
<span class="line"><span style="color:#24292E;">                l-&gt;down </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            pn </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pn-&gt;right;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="矩阵减法" tabindex="-1">矩阵减法 <a class="header-anchor" href="#矩阵减法" aria-label="Permalink to &quot;矩阵减法&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * Q = M - N。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">SubSMatrix</span><span style="color:#E1E4E8;">(CrossList </span><span style="color:#FFAB70;">M</span><span style="color:#E1E4E8;">, CrossList </span><span style="color:#FFAB70;">N</span><span style="color:#E1E4E8;">, CrossList</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">Q</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i;</span></span>
<span class="line"><span style="color:#E1E4E8;">    OLNode</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> pm, </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> pn, </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> p, </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> r, </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> l;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(M.mu </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> N.mu </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> M.nu </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> N.nu) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;两矩阵的行数、列数不满足相减条件！！</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 初始化Q的行列信息</span></span>
<span class="line"><span style="color:#E1E4E8;">    Q-&gt;mu </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> M.mu;</span></span>
<span class="line"><span style="color:#E1E4E8;">    Q-&gt;nu </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> M.nu;</span></span>
<span class="line"><span style="color:#E1E4E8;">    Q-&gt;tu </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 创建行链（类似行索引，0号单元弃用）</span></span>
<span class="line"><span style="color:#E1E4E8;">    Q-&gt;rhead </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (OLink</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">) </span><span style="color:#B392F0;">malloc</span><span style="color:#E1E4E8;">((Q-&gt;mu </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">sizeof</span><span style="color:#E1E4E8;">(OLink));</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">Q-&gt;rhead) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 创建列链（类似列索引，0号单元弃用）</span></span>
<span class="line"><span style="color:#E1E4E8;">    Q-&gt;chead </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (OLink</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">) </span><span style="color:#B392F0;">malloc</span><span style="color:#E1E4E8;">((Q-&gt;nu </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">sizeof</span><span style="color:#E1E4E8;">(OLink));</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">Q-&gt;chead) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 初始化行链索引为NULL</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> Q-&gt;mu; </span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">i) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        Q-&gt;rhead[i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 初始化列链索引为NULL</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> Q-&gt;nu; </span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">i) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        Q-&gt;chead[i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 从第一行往下遍历</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> M.mu; </span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">i) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        pm </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> M.rhead[i];</span></span>
<span class="line"><span style="color:#E1E4E8;">        pn </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> N.rhead[i];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 如果M与N的当前行中均有未处理的非零元</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;">(pm </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> pn </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 处理特殊情形</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(pm-&gt;j </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> pn-&gt;j </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> pm-&gt;e </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> pn-&gt;e </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                pm </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pm-&gt;right;</span></span>
<span class="line"><span style="color:#E1E4E8;">                pn </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pn-&gt;right;</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">continue</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 创建结点</span></span>
<span class="line"><span style="color:#E1E4E8;">            p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (OLNode</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">) </span><span style="color:#B392F0;">malloc</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">sizeof</span><span style="color:#E1E4E8;">(OLNode));</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">p) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// M中的三元组列下标较小</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(pm-&gt;j </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> pn-&gt;j) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                p-&gt;i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pm-&gt;i;</span></span>
<span class="line"><span style="color:#E1E4E8;">                p-&gt;j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pm-&gt;j;</span></span>
<span class="line"><span style="color:#E1E4E8;">                p-&gt;e </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pm-&gt;e;</span></span>
<span class="line"><span style="color:#E1E4E8;">                pm </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pm-&gt;right;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// N中的三元组列下标较小</span></span>
<span class="line"><span style="color:#E1E4E8;">            } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(pm-&gt;j </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> pn-&gt;j) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                p-&gt;i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pn-&gt;i;</span></span>
<span class="line"><span style="color:#E1E4E8;">                p-&gt;j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pn-&gt;j;</span></span>
<span class="line"><span style="color:#E1E4E8;">                p-&gt;e </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">pn-&gt;e;</span><span style="color:#6A737D;">      // 加负号</span></span>
<span class="line"><span style="color:#E1E4E8;">                pn </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pn-&gt;right;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// M与N中的三元组列下标一致，需要进行减法运算</span></span>
<span class="line"><span style="color:#E1E4E8;">            } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                p-&gt;i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pm-&gt;i;</span></span>
<span class="line"><span style="color:#E1E4E8;">                p-&gt;j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pm-&gt;j;</span></span>
<span class="line"><span style="color:#E1E4E8;">                p-&gt;e </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pm-&gt;e </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> pn-&gt;e;</span></span>
<span class="line"><span style="color:#E1E4E8;">                pm </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pm-&gt;right;</span></span>
<span class="line"><span style="color:#E1E4E8;">                pn </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pn-&gt;right;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            p-&gt;right </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p-&gt;down </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            Q-&gt;tu</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">    // Q中非零元个数增一</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">            /*</span></span>
<span class="line"><span style="color:#6A737D;">             * 开始行的插入</span></span>
<span class="line"><span style="color:#6A737D;">             */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(Q-&gt;rhead[p-&gt;i] </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                Q-&gt;rhead[p-&gt;i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"><span style="color:#E1E4E8;">            } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                r-&gt;right </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// r指向当前行新插入的结点</span></span>
<span class="line"><span style="color:#E1E4E8;">            r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">            /*</span></span>
<span class="line"><span style="color:#6A737D;">             * 开始列的插入</span></span>
<span class="line"><span style="color:#6A737D;">             */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 在列链中寻找插入位置</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(Q-&gt;chead[p-&gt;j] </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> Q-&gt;chead[p-&gt;j]-&gt;i </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> p-&gt;i) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                r-&gt;down </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Q-&gt;chead[p-&gt;j];</span></span>
<span class="line"><span style="color:#E1E4E8;">                Q-&gt;chead[p-&gt;j] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r;</span></span>
<span class="line"><span style="color:#E1E4E8;">            } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">//寻找插入位置的前一个位置</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(l </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Q-&gt;chead[p-&gt;j]; (l-&gt;down) </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> (l-&gt;down-&gt;i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> p-&gt;i); l </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> l-&gt;down) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">                r-&gt;down </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> l-&gt;down;</span></span>
<span class="line"><span style="color:#E1E4E8;">                l-&gt;down </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 如果M的当前行中仍有未处理的非零元</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;">(pm </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (OLNode</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">) </span><span style="color:#B392F0;">malloc</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">sizeof</span><span style="color:#E1E4E8;">(OLNode));</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">p) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            p-&gt;i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pm-&gt;i;</span></span>
<span class="line"><span style="color:#E1E4E8;">            p-&gt;j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pm-&gt;j;</span></span>
<span class="line"><span style="color:#E1E4E8;">            p-&gt;e </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pm-&gt;e;</span></span>
<span class="line"><span style="color:#E1E4E8;">            p-&gt;right </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p-&gt;down </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            Q-&gt;tu</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">    // Q中非零元个数增一</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(Q-&gt;rhead[p-&gt;i] </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                Q-&gt;rhead[p-&gt;i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"><span style="color:#E1E4E8;">            } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                r-&gt;right </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// r指向当前行新插入的结点</span></span>
<span class="line"><span style="color:#E1E4E8;">            r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 在列链中寻找插入位置</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(Q-&gt;chead[p-&gt;j] </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> Q-&gt;chead[p-&gt;j]-&gt;i </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> p-&gt;i) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                r-&gt;down </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Q-&gt;chead[p-&gt;j];</span></span>
<span class="line"><span style="color:#E1E4E8;">                Q-&gt;chead[p-&gt;j] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r;</span></span>
<span class="line"><span style="color:#E1E4E8;">            } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// 寻找插入位置的前一个位置</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(l </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Q-&gt;chead[p-&gt;j]; (l-&gt;down) </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> (l-&gt;down-&gt;i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> p-&gt;i); l </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> l-&gt;down) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">                r-&gt;down </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> l-&gt;down;</span></span>
<span class="line"><span style="color:#E1E4E8;">                l-&gt;down </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            pm </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pm-&gt;right;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 如果N的当前行中仍有未处理的非零元</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;">(pn </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (OLNode</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">) </span><span style="color:#B392F0;">malloc</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">sizeof</span><span style="color:#E1E4E8;">(OLNode));</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">p) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            p-&gt;i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pn-&gt;i;</span></span>
<span class="line"><span style="color:#E1E4E8;">            p-&gt;j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pn-&gt;j;</span></span>
<span class="line"><span style="color:#E1E4E8;">            p-&gt;e </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">pn-&gt;e;</span><span style="color:#6A737D;">              // 加负号</span></span>
<span class="line"><span style="color:#E1E4E8;">            p-&gt;right </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p-&gt;down </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            Q-&gt;tu</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">    // Q中非零元个数增一</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(Q-&gt;rhead[p-&gt;i] </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                Q-&gt;rhead[p-&gt;i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"><span style="color:#E1E4E8;">            } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                r-&gt;right </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// r指向当前行新插入的结点</span></span>
<span class="line"><span style="color:#E1E4E8;">            r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 在列链中寻找插入位置</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(Q-&gt;chead[p-&gt;j] </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> Q-&gt;chead[p-&gt;j]-&gt;i </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> p-&gt;i) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                r-&gt;down </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Q-&gt;chead[p-&gt;j];</span></span>
<span class="line"><span style="color:#E1E4E8;">                Q-&gt;chead[p-&gt;j] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r;</span></span>
<span class="line"><span style="color:#E1E4E8;">            } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// 寻找插入位置的前一个位置</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(l </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Q-&gt;chead[p-&gt;j]; (l-&gt;down) </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> (l-&gt;down-&gt;i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> p-&gt;i); l </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> l-&gt;down) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">                r-&gt;down </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> l-&gt;down;</span></span>
<span class="line"><span style="color:#E1E4E8;">                l-&gt;down </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            pn </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pn-&gt;right;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * Q = M - N。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">SubSMatrix</span><span style="color:#24292E;">(CrossList </span><span style="color:#E36209;">M</span><span style="color:#24292E;">, CrossList </span><span style="color:#E36209;">N</span><span style="color:#24292E;">, CrossList</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">Q</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i;</span></span>
<span class="line"><span style="color:#24292E;">    OLNode</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> pm, </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> pn, </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> p, </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> r, </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> l;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(M.mu </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> N.mu </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> M.nu </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> N.nu) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;两矩阵的行数、列数不满足相减条件！！</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 初始化Q的行列信息</span></span>
<span class="line"><span style="color:#24292E;">    Q-&gt;mu </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> M.mu;</span></span>
<span class="line"><span style="color:#24292E;">    Q-&gt;nu </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> M.nu;</span></span>
<span class="line"><span style="color:#24292E;">    Q-&gt;tu </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 创建行链（类似行索引，0号单元弃用）</span></span>
<span class="line"><span style="color:#24292E;">    Q-&gt;rhead </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (OLink</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">) </span><span style="color:#6F42C1;">malloc</span><span style="color:#24292E;">((Q-&gt;mu </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">sizeof</span><span style="color:#24292E;">(OLink));</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">Q-&gt;rhead) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">exit</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 创建列链（类似列索引，0号单元弃用）</span></span>
<span class="line"><span style="color:#24292E;">    Q-&gt;chead </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (OLink</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">) </span><span style="color:#6F42C1;">malloc</span><span style="color:#24292E;">((Q-&gt;nu </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">sizeof</span><span style="color:#24292E;">(OLink));</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">Q-&gt;chead) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">exit</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 初始化行链索引为NULL</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> Q-&gt;mu; </span><span style="color:#D73A49;">++</span><span style="color:#24292E;">i) {</span></span>
<span class="line"><span style="color:#24292E;">        Q-&gt;rhead[i] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 初始化列链索引为NULL</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> Q-&gt;nu; </span><span style="color:#D73A49;">++</span><span style="color:#24292E;">i) {</span></span>
<span class="line"><span style="color:#24292E;">        Q-&gt;chead[i] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 从第一行往下遍历</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> M.mu; </span><span style="color:#D73A49;">++</span><span style="color:#24292E;">i) {</span></span>
<span class="line"><span style="color:#24292E;">        pm </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> M.rhead[i];</span></span>
<span class="line"><span style="color:#24292E;">        pn </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> N.rhead[i];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 如果M与N的当前行中均有未处理的非零元</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">while</span><span style="color:#24292E;">(pm </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> pn </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 处理特殊情形</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(pm-&gt;j </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> pn-&gt;j </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> pm-&gt;e </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> pn-&gt;e </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">                pm </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pm-&gt;right;</span></span>
<span class="line"><span style="color:#24292E;">                pn </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pn-&gt;right;</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">continue</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 创建结点</span></span>
<span class="line"><span style="color:#24292E;">            p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (OLNode</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">) </span><span style="color:#6F42C1;">malloc</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">sizeof</span><span style="color:#24292E;">(OLNode));</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">p) {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">exit</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// M中的三元组列下标较小</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(pm-&gt;j </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> pn-&gt;j) {</span></span>
<span class="line"><span style="color:#24292E;">                p-&gt;i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pm-&gt;i;</span></span>
<span class="line"><span style="color:#24292E;">                p-&gt;j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pm-&gt;j;</span></span>
<span class="line"><span style="color:#24292E;">                p-&gt;e </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pm-&gt;e;</span></span>
<span class="line"><span style="color:#24292E;">                pm </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pm-&gt;right;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// N中的三元组列下标较小</span></span>
<span class="line"><span style="color:#24292E;">            } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(pm-&gt;j </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> pn-&gt;j) {</span></span>
<span class="line"><span style="color:#24292E;">                p-&gt;i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pn-&gt;i;</span></span>
<span class="line"><span style="color:#24292E;">                p-&gt;j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pn-&gt;j;</span></span>
<span class="line"><span style="color:#24292E;">                p-&gt;e </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">pn-&gt;e;</span><span style="color:#6A737D;">      // 加负号</span></span>
<span class="line"><span style="color:#24292E;">                pn </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pn-&gt;right;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// M与N中的三元组列下标一致，需要进行减法运算</span></span>
<span class="line"><span style="color:#24292E;">            } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                p-&gt;i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pm-&gt;i;</span></span>
<span class="line"><span style="color:#24292E;">                p-&gt;j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pm-&gt;j;</span></span>
<span class="line"><span style="color:#24292E;">                p-&gt;e </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pm-&gt;e </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> pn-&gt;e;</span></span>
<span class="line"><span style="color:#24292E;">                pm </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pm-&gt;right;</span></span>
<span class="line"><span style="color:#24292E;">                pn </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pn-&gt;right;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            p-&gt;right </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p-&gt;down </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            Q-&gt;tu</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">    // Q中非零元个数增一</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">            /*</span></span>
<span class="line"><span style="color:#6A737D;">             * 开始行的插入</span></span>
<span class="line"><span style="color:#6A737D;">             */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(Q-&gt;rhead[p-&gt;i] </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">                Q-&gt;rhead[p-&gt;i] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p;</span></span>
<span class="line"><span style="color:#24292E;">            } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                r-&gt;right </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// r指向当前行新插入的结点</span></span>
<span class="line"><span style="color:#24292E;">            r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">            /*</span></span>
<span class="line"><span style="color:#6A737D;">             * 开始列的插入</span></span>
<span class="line"><span style="color:#6A737D;">             */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 在列链中寻找插入位置</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(Q-&gt;chead[p-&gt;j] </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> Q-&gt;chead[p-&gt;j]-&gt;i </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> p-&gt;i) {</span></span>
<span class="line"><span style="color:#24292E;">                r-&gt;down </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Q-&gt;chead[p-&gt;j];</span></span>
<span class="line"><span style="color:#24292E;">                Q-&gt;chead[p-&gt;j] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r;</span></span>
<span class="line"><span style="color:#24292E;">            } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">//寻找插入位置的前一个位置</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(l </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Q-&gt;chead[p-&gt;j]; (l-&gt;down) </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> (l-&gt;down-&gt;i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> p-&gt;i); l </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> l-&gt;down) {</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">                r-&gt;down </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> l-&gt;down;</span></span>
<span class="line"><span style="color:#24292E;">                l-&gt;down </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 如果M的当前行中仍有未处理的非零元</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">while</span><span style="color:#24292E;">(pm </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (OLNode</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">) </span><span style="color:#6F42C1;">malloc</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">sizeof</span><span style="color:#24292E;">(OLNode));</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">p) {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">exit</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            p-&gt;i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pm-&gt;i;</span></span>
<span class="line"><span style="color:#24292E;">            p-&gt;j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pm-&gt;j;</span></span>
<span class="line"><span style="color:#24292E;">            p-&gt;e </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pm-&gt;e;</span></span>
<span class="line"><span style="color:#24292E;">            p-&gt;right </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p-&gt;down </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            Q-&gt;tu</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">    // Q中非零元个数增一</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(Q-&gt;rhead[p-&gt;i] </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">                Q-&gt;rhead[p-&gt;i] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p;</span></span>
<span class="line"><span style="color:#24292E;">            } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                r-&gt;right </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// r指向当前行新插入的结点</span></span>
<span class="line"><span style="color:#24292E;">            r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 在列链中寻找插入位置</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(Q-&gt;chead[p-&gt;j] </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> Q-&gt;chead[p-&gt;j]-&gt;i </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> p-&gt;i) {</span></span>
<span class="line"><span style="color:#24292E;">                r-&gt;down </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Q-&gt;chead[p-&gt;j];</span></span>
<span class="line"><span style="color:#24292E;">                Q-&gt;chead[p-&gt;j] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r;</span></span>
<span class="line"><span style="color:#24292E;">            } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// 寻找插入位置的前一个位置</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(l </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Q-&gt;chead[p-&gt;j]; (l-&gt;down) </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> (l-&gt;down-&gt;i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> p-&gt;i); l </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> l-&gt;down) {</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">                r-&gt;down </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> l-&gt;down;</span></span>
<span class="line"><span style="color:#24292E;">                l-&gt;down </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            pm </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pm-&gt;right;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 如果N的当前行中仍有未处理的非零元</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">while</span><span style="color:#24292E;">(pn </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (OLNode</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">) </span><span style="color:#6F42C1;">malloc</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">sizeof</span><span style="color:#24292E;">(OLNode));</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">p) {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">exit</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            p-&gt;i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pn-&gt;i;</span></span>
<span class="line"><span style="color:#24292E;">            p-&gt;j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pn-&gt;j;</span></span>
<span class="line"><span style="color:#24292E;">            p-&gt;e </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">pn-&gt;e;</span><span style="color:#6A737D;">              // 加负号</span></span>
<span class="line"><span style="color:#24292E;">            p-&gt;right </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p-&gt;down </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            Q-&gt;tu</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">    // Q中非零元个数增一</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(Q-&gt;rhead[p-&gt;i] </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">                Q-&gt;rhead[p-&gt;i] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p;</span></span>
<span class="line"><span style="color:#24292E;">            } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                r-&gt;right </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// r指向当前行新插入的结点</span></span>
<span class="line"><span style="color:#24292E;">            r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 在列链中寻找插入位置</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(Q-&gt;chead[p-&gt;j] </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> Q-&gt;chead[p-&gt;j]-&gt;i </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> p-&gt;i) {</span></span>
<span class="line"><span style="color:#24292E;">                r-&gt;down </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Q-&gt;chead[p-&gt;j];</span></span>
<span class="line"><span style="color:#24292E;">                Q-&gt;chead[p-&gt;j] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r;</span></span>
<span class="line"><span style="color:#24292E;">            } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// 寻找插入位置的前一个位置</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(l </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Q-&gt;chead[p-&gt;j]; (l-&gt;down) </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> (l-&gt;down-&gt;i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> p-&gt;i); l </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> l-&gt;down) {</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">                r-&gt;down </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> l-&gt;down;</span></span>
<span class="line"><span style="color:#24292E;">                l-&gt;down </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            pn </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pn-&gt;right;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="矩阵乘法" tabindex="-1">矩阵乘法 <a class="header-anchor" href="#矩阵乘法" aria-label="Permalink to &quot;矩阵乘法&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * Q = M * N。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">MultSMatrix</span><span style="color:#E1E4E8;">(CrossList </span><span style="color:#FFAB70;">M</span><span style="color:#E1E4E8;">, CrossList </span><span style="color:#FFAB70;">N</span><span style="color:#E1E4E8;">, CrossList</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">Q</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> m_row, n_col, i;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ElemType e;</span></span>
<span class="line"><span style="color:#E1E4E8;">    OLNode</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> pm, </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> pn, </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> p, </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> r, </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> l;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// M的列数需要等于N的行数</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(M.nu </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> N.mu) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;两矩阵的行数、列数不满足相乘条件！！</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 初始化Q的行列信息</span></span>
<span class="line"><span style="color:#E1E4E8;">    Q-&gt;mu </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> M.mu;</span></span>
<span class="line"><span style="color:#E1E4E8;">    Q-&gt;nu </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> N.nu;</span></span>
<span class="line"><span style="color:#E1E4E8;">    Q-&gt;tu </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 创建行链（类似行索引，0号单元弃用）</span></span>
<span class="line"><span style="color:#E1E4E8;">    Q-&gt;rhead </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (OLink</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">) </span><span style="color:#B392F0;">malloc</span><span style="color:#E1E4E8;">((Q-&gt;mu </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">sizeof</span><span style="color:#E1E4E8;">(OLink));</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">Q-&gt;rhead) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 创建列链（类似列索引，0号单元弃用）</span></span>
<span class="line"><span style="color:#E1E4E8;">    Q-&gt;chead </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (OLink</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">) </span><span style="color:#B392F0;">malloc</span><span style="color:#E1E4E8;">((Q-&gt;nu </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">sizeof</span><span style="color:#E1E4E8;">(OLink));</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">Q-&gt;chead) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 初始化行链索引为NULL</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> Q-&gt;mu; </span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">i) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        Q-&gt;rhead[i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 初始化列链索引为NULL</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> Q-&gt;nu; </span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">i) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        Q-&gt;chead[i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// Q是非零矩阵</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(M.tu </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> N.tu) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(m_row </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">; m_row </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> M.mu; </span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">m_row) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(n_col </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">; n_col </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> N.nu; </span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">n_col) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                pm </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> M.rhead[m_row];</span></span>
<span class="line"><span style="color:#E1E4E8;">                pn </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> N.chead[n_col];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">                e </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// M的行与N的列相乘</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;">(pm </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> pn) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(pm-&gt;j </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> pn-&gt;i) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                        pm </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pm-&gt;right;</span></span>
<span class="line"><span style="color:#E1E4E8;">                    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(pm-&gt;j </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> pn-&gt;i) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                        pn </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pn-&gt;down;</span></span>
<span class="line"><span style="color:#E1E4E8;">                    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                        e </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> pm-&gt;e </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> pn-&gt;e;</span></span>
<span class="line"><span style="color:#E1E4E8;">                        pm </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pm-&gt;right;</span></span>
<span class="line"><span style="color:#E1E4E8;">                        pn </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pn-&gt;down;</span></span>
<span class="line"><span style="color:#E1E4E8;">                    }</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(e </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#F97583;">continue</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">                p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (OLNode</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">) </span><span style="color:#B392F0;">malloc</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">sizeof</span><span style="color:#E1E4E8;">(OLNode));</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">p) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// 为结点赋值</span></span>
<span class="line"><span style="color:#E1E4E8;">                p-&gt;i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> M.rhead[m_row]-&gt;i;</span></span>
<span class="line"><span style="color:#E1E4E8;">                p-&gt;j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> N.chead[n_col]-&gt;j;</span></span>
<span class="line"><span style="color:#E1E4E8;">                p-&gt;e </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> e;</span></span>
<span class="line"><span style="color:#E1E4E8;">                p-&gt;right </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p-&gt;down </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">                Q-&gt;tu</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">    // Q中非零元个数增一</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(Q-&gt;rhead[p-&gt;i] </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    Q-&gt;rhead[p-&gt;i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"><span style="color:#E1E4E8;">                } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    r-&gt;right </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// r指向当前行新插入的结点</span></span>
<span class="line"><span style="color:#E1E4E8;">                r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// 在列链中寻找插入位置</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(Q-&gt;chead[p-&gt;j] </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> Q-&gt;chead[p-&gt;j]-&gt;i </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> p-&gt;i) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    r-&gt;down </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Q-&gt;chead[p-&gt;j];</span></span>
<span class="line"><span style="color:#E1E4E8;">                    Q-&gt;chead[p-&gt;j] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r;</span></span>
<span class="line"><span style="color:#E1E4E8;">                } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#6A737D;">// 寻找插入位置的前一个位置</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(l </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Q-&gt;chead[p-&gt;j]; (l-&gt;down) </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> (l-&gt;down-&gt;i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> p-&gt;i); l </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> l-&gt;down) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">                    r-&gt;down </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> l-&gt;down;</span></span>
<span class="line"><span style="color:#E1E4E8;">                    l-&gt;down </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r;</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * Q = M * N。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">MultSMatrix</span><span style="color:#24292E;">(CrossList </span><span style="color:#E36209;">M</span><span style="color:#24292E;">, CrossList </span><span style="color:#E36209;">N</span><span style="color:#24292E;">, CrossList</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">Q</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> m_row, n_col, i;</span></span>
<span class="line"><span style="color:#24292E;">    ElemType e;</span></span>
<span class="line"><span style="color:#24292E;">    OLNode</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> pm, </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> pn, </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> p, </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> r, </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> l;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// M的列数需要等于N的行数</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(M.nu </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> N.mu) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;两矩阵的行数、列数不满足相乘条件！！</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 初始化Q的行列信息</span></span>
<span class="line"><span style="color:#24292E;">    Q-&gt;mu </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> M.mu;</span></span>
<span class="line"><span style="color:#24292E;">    Q-&gt;nu </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> N.nu;</span></span>
<span class="line"><span style="color:#24292E;">    Q-&gt;tu </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 创建行链（类似行索引，0号单元弃用）</span></span>
<span class="line"><span style="color:#24292E;">    Q-&gt;rhead </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (OLink</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">) </span><span style="color:#6F42C1;">malloc</span><span style="color:#24292E;">((Q-&gt;mu </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">sizeof</span><span style="color:#24292E;">(OLink));</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">Q-&gt;rhead) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">exit</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 创建列链（类似列索引，0号单元弃用）</span></span>
<span class="line"><span style="color:#24292E;">    Q-&gt;chead </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (OLink</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">) </span><span style="color:#6F42C1;">malloc</span><span style="color:#24292E;">((Q-&gt;nu </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">sizeof</span><span style="color:#24292E;">(OLink));</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">Q-&gt;chead) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">exit</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 初始化行链索引为NULL</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> Q-&gt;mu; </span><span style="color:#D73A49;">++</span><span style="color:#24292E;">i) {</span></span>
<span class="line"><span style="color:#24292E;">        Q-&gt;rhead[i] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 初始化列链索引为NULL</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> Q-&gt;nu; </span><span style="color:#D73A49;">++</span><span style="color:#24292E;">i) {</span></span>
<span class="line"><span style="color:#24292E;">        Q-&gt;chead[i] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// Q是非零矩阵</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(M.tu </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> N.tu) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(m_row </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">; m_row </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> M.mu; </span><span style="color:#D73A49;">++</span><span style="color:#24292E;">m_row) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(n_col </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">; n_col </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> N.nu; </span><span style="color:#D73A49;">++</span><span style="color:#24292E;">n_col) {</span></span>
<span class="line"><span style="color:#24292E;">                pm </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> M.rhead[m_row];</span></span>
<span class="line"><span style="color:#24292E;">                pn </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> N.chead[n_col];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">                e </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// M的行与N的列相乘</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">while</span><span style="color:#24292E;">(pm </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> pn) {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(pm-&gt;j </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> pn-&gt;i) {</span></span>
<span class="line"><span style="color:#24292E;">                        pm </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pm-&gt;right;</span></span>
<span class="line"><span style="color:#24292E;">                    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(pm-&gt;j </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> pn-&gt;i) {</span></span>
<span class="line"><span style="color:#24292E;">                        pn </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pn-&gt;down;</span></span>
<span class="line"><span style="color:#24292E;">                    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                        e </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> pm-&gt;e </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> pn-&gt;e;</span></span>
<span class="line"><span style="color:#24292E;">                        pm </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pm-&gt;right;</span></span>
<span class="line"><span style="color:#24292E;">                        pn </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pn-&gt;down;</span></span>
<span class="line"><span style="color:#24292E;">                    }</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(e </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#D73A49;">continue</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">                p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (OLNode</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">) </span><span style="color:#6F42C1;">malloc</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">sizeof</span><span style="color:#24292E;">(OLNode));</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">p) {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6F42C1;">exit</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// 为结点赋值</span></span>
<span class="line"><span style="color:#24292E;">                p-&gt;i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> M.rhead[m_row]-&gt;i;</span></span>
<span class="line"><span style="color:#24292E;">                p-&gt;j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> N.chead[n_col]-&gt;j;</span></span>
<span class="line"><span style="color:#24292E;">                p-&gt;e </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> e;</span></span>
<span class="line"><span style="color:#24292E;">                p-&gt;right </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p-&gt;down </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">                Q-&gt;tu</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">    // Q中非零元个数增一</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(Q-&gt;rhead[p-&gt;i] </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">                    Q-&gt;rhead[p-&gt;i] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p;</span></span>
<span class="line"><span style="color:#24292E;">                } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                    r-&gt;right </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p;</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// r指向当前行新插入的结点</span></span>
<span class="line"><span style="color:#24292E;">                r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// 在列链中寻找插入位置</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(Q-&gt;chead[p-&gt;j] </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> Q-&gt;chead[p-&gt;j]-&gt;i </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> p-&gt;i) {</span></span>
<span class="line"><span style="color:#24292E;">                    r-&gt;down </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Q-&gt;chead[p-&gt;j];</span></span>
<span class="line"><span style="color:#24292E;">                    Q-&gt;chead[p-&gt;j] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r;</span></span>
<span class="line"><span style="color:#24292E;">                } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6A737D;">// 寻找插入位置的前一个位置</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(l </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Q-&gt;chead[p-&gt;j]; (l-&gt;down) </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> (l-&gt;down-&gt;i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> p-&gt;i); l </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> l-&gt;down) {</span></span>
<span class="line"><span style="color:#24292E;">                    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">                    r-&gt;down </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> l-&gt;down;</span></span>
<span class="line"><span style="color:#24292E;">                    l-&gt;down </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r;</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="矩阵转置" tabindex="-1">矩阵转置 <a class="header-anchor" href="#矩阵转置" aria-label="Permalink to &quot;矩阵转置&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 矩阵转置</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">TransposeSMatrix</span><span style="color:#E1E4E8;">(CrossList </span><span style="color:#FFAB70;">M</span><span style="color:#E1E4E8;">, CrossList</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">T</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i;</span></span>
<span class="line"><span style="color:#E1E4E8;">    OLNode</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> p, </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> q, </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> r, </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> l;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 初始化Q的行列信息</span></span>
<span class="line"><span style="color:#E1E4E8;">    (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T).mu </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> M.nu;</span></span>
<span class="line"><span style="color:#E1E4E8;">    (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T).nu </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> M.mu;</span></span>
<span class="line"><span style="color:#E1E4E8;">    (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T).tu </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> M.tu;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 创建行链（类似行索引，0号单元弃用）</span></span>
<span class="line"><span style="color:#E1E4E8;">    (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T).rhead </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (OLink</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">) </span><span style="color:#B392F0;">malloc</span><span style="color:#E1E4E8;">(((</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T).mu </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">sizeof</span><span style="color:#E1E4E8;">(OLink));</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T).rhead) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 创建列链（类似列索引，0号单元弃用）</span></span>
<span class="line"><span style="color:#E1E4E8;">    (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T).chead </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (OLink</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">) </span><span style="color:#B392F0;">malloc</span><span style="color:#E1E4E8;">(((</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T).nu </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">sizeof</span><span style="color:#E1E4E8;">(OLink));</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T).chead) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 初始化行链索引为NULL</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T).mu; </span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">i) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T).rhead[i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 初始化列链索引为NULL</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T).nu; </span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">i) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T).chead[i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 零矩阵</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T).tu) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 按列扫描</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> M.nu; </span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">i) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        q </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> M.chead[i];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 如果当前行没有元素，直接跳过</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(q </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">continue</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;">(q </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 创建三元组结点</span></span>
<span class="line"><span style="color:#E1E4E8;">            p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (OLNode</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">) </span><span style="color:#B392F0;">malloc</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">sizeof</span><span style="color:#E1E4E8;">(OLNode));</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">p) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 为结点赋值，行变列，列变行</span></span>
<span class="line"><span style="color:#E1E4E8;">            p-&gt;i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> q-&gt;j;</span></span>
<span class="line"><span style="color:#E1E4E8;">            p-&gt;j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> q-&gt;i;</span></span>
<span class="line"><span style="color:#E1E4E8;">            p-&gt;e </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> q-&gt;e;</span></span>
<span class="line"><span style="color:#E1E4E8;">            p-&gt;right </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p-&gt;down </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">            /*</span></span>
<span class="line"><span style="color:#6A737D;">             * 开始行的插入</span></span>
<span class="line"><span style="color:#6A737D;">             */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">((</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T).rhead[p-&gt;i] </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T).rhead[p-&gt;i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"><span style="color:#E1E4E8;">            } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                r-&gt;right </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// r指向当前行新插入的结点</span></span>
<span class="line"><span style="color:#E1E4E8;">            r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">            /*</span></span>
<span class="line"><span style="color:#6A737D;">             * 开始列的插入</span></span>
<span class="line"><span style="color:#6A737D;">             */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 在列链中寻找插入位置</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">((</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T).chead[p-&gt;j] </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T).chead[p-&gt;j]-&gt;i </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> p-&gt;i) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                r-&gt;down </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T).chead[p-&gt;j];</span></span>
<span class="line"><span style="color:#E1E4E8;">                (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T).chead[p-&gt;j] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r;</span></span>
<span class="line"><span style="color:#E1E4E8;">            } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// 寻找插入位置的前一个位置</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(l </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T).chead[p-&gt;j]; (l-&gt;down) </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> (l-&gt;down-&gt;i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> p-&gt;i); l </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> l-&gt;down) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">                r-&gt;down </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> l-&gt;down;</span></span>
<span class="line"><span style="color:#E1E4E8;">                l-&gt;down </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            q </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> q-&gt;down;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 矩阵转置</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">TransposeSMatrix</span><span style="color:#24292E;">(CrossList </span><span style="color:#E36209;">M</span><span style="color:#24292E;">, CrossList</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">T</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i;</span></span>
<span class="line"><span style="color:#24292E;">    OLNode</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> p, </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> q, </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> r, </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> l;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 初始化Q的行列信息</span></span>
<span class="line"><span style="color:#24292E;">    (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T).mu </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> M.nu;</span></span>
<span class="line"><span style="color:#24292E;">    (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T).nu </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> M.mu;</span></span>
<span class="line"><span style="color:#24292E;">    (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T).tu </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> M.tu;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 创建行链（类似行索引，0号单元弃用）</span></span>
<span class="line"><span style="color:#24292E;">    (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T).rhead </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (OLink</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">) </span><span style="color:#6F42C1;">malloc</span><span style="color:#24292E;">(((</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T).mu </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">sizeof</span><span style="color:#24292E;">(OLink));</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T).rhead) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">exit</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 创建列链（类似列索引，0号单元弃用）</span></span>
<span class="line"><span style="color:#24292E;">    (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T).chead </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (OLink</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">) </span><span style="color:#6F42C1;">malloc</span><span style="color:#24292E;">(((</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T).nu </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">sizeof</span><span style="color:#24292E;">(OLink));</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T).chead) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">exit</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 初始化行链索引为NULL</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T).mu; </span><span style="color:#D73A49;">++</span><span style="color:#24292E;">i) {</span></span>
<span class="line"><span style="color:#24292E;">        (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T).rhead[i] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 初始化列链索引为NULL</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T).nu; </span><span style="color:#D73A49;">++</span><span style="color:#24292E;">i) {</span></span>
<span class="line"><span style="color:#24292E;">        (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T).chead[i] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 零矩阵</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T).tu) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 按列扫描</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> M.nu; </span><span style="color:#D73A49;">++</span><span style="color:#24292E;">i) {</span></span>
<span class="line"><span style="color:#24292E;">        q </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> M.chead[i];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 如果当前行没有元素，直接跳过</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(q </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">continue</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">while</span><span style="color:#24292E;">(q </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 创建三元组结点</span></span>
<span class="line"><span style="color:#24292E;">            p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (OLNode</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">) </span><span style="color:#6F42C1;">malloc</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">sizeof</span><span style="color:#24292E;">(OLNode));</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">p) {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">exit</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 为结点赋值，行变列，列变行</span></span>
<span class="line"><span style="color:#24292E;">            p-&gt;i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> q-&gt;j;</span></span>
<span class="line"><span style="color:#24292E;">            p-&gt;j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> q-&gt;i;</span></span>
<span class="line"><span style="color:#24292E;">            p-&gt;e </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> q-&gt;e;</span></span>
<span class="line"><span style="color:#24292E;">            p-&gt;right </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p-&gt;down </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">            /*</span></span>
<span class="line"><span style="color:#6A737D;">             * 开始行的插入</span></span>
<span class="line"><span style="color:#6A737D;">             */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">((</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T).rhead[p-&gt;i] </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">                (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T).rhead[p-&gt;i] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p;</span></span>
<span class="line"><span style="color:#24292E;">            } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                r-&gt;right </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// r指向当前行新插入的结点</span></span>
<span class="line"><span style="color:#24292E;">            r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">            /*</span></span>
<span class="line"><span style="color:#6A737D;">             * 开始列的插入</span></span>
<span class="line"><span style="color:#6A737D;">             */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 在列链中寻找插入位置</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">((</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T).chead[p-&gt;j] </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T).chead[p-&gt;j]-&gt;i </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> p-&gt;i) {</span></span>
<span class="line"><span style="color:#24292E;">                r-&gt;down </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T).chead[p-&gt;j];</span></span>
<span class="line"><span style="color:#24292E;">                (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T).chead[p-&gt;j] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r;</span></span>
<span class="line"><span style="color:#24292E;">            } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// 寻找插入位置的前一个位置</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(l </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T).chead[p-&gt;j]; (l-&gt;down) </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> (l-&gt;down-&gt;i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> p-&gt;i); l </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> l-&gt;down) {</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">                r-&gt;down </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> l-&gt;down;</span></span>
<span class="line"><span style="color:#24292E;">                l-&gt;down </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            q </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> q-&gt;down;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,25),c=[e];function t(E,r,y,i,F,A){return a(),p("div",null,c)}const d=n(o,[["render",t]]);export{g as __pageData,d as default};
