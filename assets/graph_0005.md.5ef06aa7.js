import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.91000686.js";const l="/data_structure/assets/image-20231214130227953.29f319cf.png",o="/data_structure/assets/image-20231214111329530.8adaa7cd.png",e="/data_structure/assets/image-20231214105023606.7bce3c40.png",c="/data_structure/assets/image-20231214113656183.9514e274.png",u=JSON.parse('{"title":"无向图的生成树","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"graph/0005.md","filePath":"graph/0005.md"}'),t={name:"graph/0005.md"},r=p('<h1 id="无向图的生成树" tabindex="-1">无向图的生成树 <a class="header-anchor" href="#无向图的生成树" aria-label="Permalink to &quot;无向图的生成树&quot;">​</a></h1><p><img src="'+l+'" alt="image-20231214130227953"></p><p>图的邻接矩阵</p><p><img src="'+o+'" alt="image-20231214111329530"></p><p>首先访问<code>A</code>，A的下一个邻接点为11即<code>L</code>，L的下一个邻接点为12即<code>M</code>，M的下一个邻接点为11即<code>L</code>，<code>L</code>已经被访问，访问M的下一个邻接点9即<code>J</code>依次遍历得到第一颗生成树</p><p><img src="'+e+`" alt="image-20231214105023606"></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>DFSForest</code> 创建每一颗树二叉树(兄弟结点存储)</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(v </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; v </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> G.vexnum; v</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 跳过已访问过的顶点</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">visited</span><span style="color:#E1E4E8;">[v]) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">continue</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">for</span><span style="color:#24292E;">(v </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; v </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> G.vexnum; v</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 跳过已访问过的顶点</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#E36209;">visited</span><span style="color:#24292E;">[v]) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">continue</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p><code>DFSTree</code> 通过深度遍历创建</p><p><img src="`+c+`" alt="image-20231214113656183"></p></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-bqwLC" id="tab-vidCjHy" checked="checked"><label for="tab-vidCjHy">SpanningTree.c</label><input type="radio" name="group-bqwLC" id="tab-DGPcgMS"><label for="tab-DGPcgMS">main.c</label><input type="radio" name="group-bqwLC" id="tab-3_X9G8Q"><label for="tab-3_X9G8Q">TestData_UDG.txt</label></div><div class="blocks"><div class="language-c vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*==================</span></span>
<span class="line"><span style="color:#6A737D;"> * 无向图的生成树</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * 包含算法: 7.7、7.8</span></span>
<span class="line"><span style="color:#6A737D;"> ===================*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">#include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;SpanningTree.h&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 访问标志数组，记录访问过的顶点</span></span>
<span class="line"><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Boolean</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">visited</span><span style="color:#E1E4E8;">[MAX_VERTEX_NUM];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 构造无向图的生成树(森林)</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">DFSForest</span><span style="color:#E1E4E8;">(MGraph </span><span style="color:#FFAB70;">G</span><span style="color:#E1E4E8;">, CSTree</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">T</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> v;</span></span>
<span class="line"><span style="color:#E1E4E8;">    CSTree p, q;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">InitTree</span><span style="color:#E1E4E8;">(T);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(v </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; v </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> G.vexnum; v</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FFAB70;">visited</span><span style="color:#E1E4E8;">[v] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">FALSE</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(v </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; v </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> G.vexnum; v</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 跳过已访问过的顶点</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">visited</span><span style="color:#E1E4E8;">[v]) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">continue</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (CSTree) </span><span style="color:#B392F0;">malloc</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">sizeof</span><span style="color:#E1E4E8;">(CSNode));</span><span style="color:#6A737D;">    // 分配根结点</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">p) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        p-&gt;data </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">GetVex</span><span style="color:#E1E4E8;">(G, v);</span></span>
<span class="line"><span style="color:#E1E4E8;">        p-&gt;firstchild </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p-&gt;nextsibling </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T)) {</span><span style="color:#6A737D;">                            // 是第一棵生成树的根</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span><span style="color:#6A737D;">                               // 是其他生成树的根（前一棵树根的兄弟）</span></span>
<span class="line"><span style="color:#E1E4E8;">            q-&gt;nextsibling </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        q </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p;</span><span style="color:#6A737D;">                                 // q指示当前生成树的根</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">DFSTree</span><span style="color:#E1E4E8;">(G, v, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">p);</span><span style="color:#6A737D;">                     // 建立以p为根的生成树</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 通过深度优先遍历各结点，构造结点v起始的树</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">DFSTree</span><span style="color:#E1E4E8;">(MGraph </span><span style="color:#FFAB70;">G</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">v</span><span style="color:#E1E4E8;">, CSTree</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">T</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    Status first;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> w;</span></span>
<span class="line"><span style="color:#E1E4E8;">    CSTree p, q;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">visited</span><span style="color:#E1E4E8;">[v] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">TRUE</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    first </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">TRUE</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// for循环的意义在于找出v结点的所有孩子</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(w </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">FirstAdjVex</span><span style="color:#E1E4E8;">(G, G.vexs[v]); w</span><span style="color:#F97583;">&gt;=</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; w </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">NextAdjVex</span><span style="color:#E1E4E8;">(G, G.vexs[v], G.vexs[w]))     {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 跳过已访问过的顶点</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">visited</span><span style="color:#E1E4E8;">[w]) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">continue</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 构造孩子结点</span></span>
<span class="line"><span style="color:#E1E4E8;">        p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (CSTree) </span><span style="color:#B392F0;">malloc</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">sizeof</span><span style="color:#E1E4E8;">(CSNode));</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">p) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        p-&gt;data </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">GetVex</span><span style="color:#E1E4E8;">(G, w);</span></span>
<span class="line"><span style="color:#E1E4E8;">        p-&gt;firstchild </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p-&gt;nextsibling </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 如果是第一个孩子</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(first) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">T)-&gt;firstchild </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"><span style="color:#E1E4E8;">            first </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">FALSE</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 如果不是第一个孩子，则添加为兄弟结点</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            q-&gt;nextsibling </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        q </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 递归获取子树</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">DFSTree</span><span style="color:#E1E4E8;">(G, w, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">q);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*==================</span></span>
<span class="line"><span style="color:#6A737D;"> * 无向图的生成树</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * 包含算法: 7.7、7.8</span></span>
<span class="line"><span style="color:#6A737D;"> ===================*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;SpanningTree.h&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 访问标志数组，记录访问过的顶点</span></span>
<span class="line"><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Boolean</span><span style="color:#24292E;"> </span><span style="color:#E36209;">visited</span><span style="color:#24292E;">[MAX_VERTEX_NUM];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 构造无向图的生成树(森林)</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">DFSForest</span><span style="color:#24292E;">(MGraph </span><span style="color:#E36209;">G</span><span style="color:#24292E;">, CSTree</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">T</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> v;</span></span>
<span class="line"><span style="color:#24292E;">    CSTree p, q;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">InitTree</span><span style="color:#24292E;">(T);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(v </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; v </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> G.vexnum; v</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#E36209;">visited</span><span style="color:#24292E;">[v] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">FALSE</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(v </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; v </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> G.vexnum; v</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 跳过已访问过的顶点</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#E36209;">visited</span><span style="color:#24292E;">[v]) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">continue</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (CSTree) </span><span style="color:#6F42C1;">malloc</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">sizeof</span><span style="color:#24292E;">(CSNode));</span><span style="color:#6A737D;">    // 分配根结点</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">p) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">exit</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        p-&gt;data </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">GetVex</span><span style="color:#24292E;">(G, v);</span></span>
<span class="line"><span style="color:#24292E;">        p-&gt;firstchild </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p-&gt;nextsibling </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T)) {</span><span style="color:#6A737D;">                            // 是第一棵生成树的根</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p;</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span><span style="color:#6A737D;">                               // 是其他生成树的根（前一棵树根的兄弟）</span></span>
<span class="line"><span style="color:#24292E;">            q-&gt;nextsibling </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        q </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p;</span><span style="color:#6A737D;">                                 // q指示当前生成树的根</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">DFSTree</span><span style="color:#24292E;">(G, v, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">p);</span><span style="color:#6A737D;">                     // 建立以p为根的生成树</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 通过深度优先遍历各结点，构造结点v起始的树</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">DFSTree</span><span style="color:#24292E;">(MGraph </span><span style="color:#E36209;">G</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">v</span><span style="color:#24292E;">, CSTree</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">T</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    Status first;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> w;</span></span>
<span class="line"><span style="color:#24292E;">    CSTree p, q;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">visited</span><span style="color:#24292E;">[v] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">TRUE</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    first </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">TRUE</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// for循环的意义在于找出v结点的所有孩子</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(w </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">FirstAdjVex</span><span style="color:#24292E;">(G, G.vexs[v]); w</span><span style="color:#D73A49;">&gt;=</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; w </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">NextAdjVex</span><span style="color:#24292E;">(G, G.vexs[v], G.vexs[w]))     {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 跳过已访问过的顶点</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#E36209;">visited</span><span style="color:#24292E;">[w]) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">continue</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 构造孩子结点</span></span>
<span class="line"><span style="color:#24292E;">        p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (CSTree) </span><span style="color:#6F42C1;">malloc</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">sizeof</span><span style="color:#24292E;">(CSNode));</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">p) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">exit</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        p-&gt;data </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">GetVex</span><span style="color:#24292E;">(G, w);</span></span>
<span class="line"><span style="color:#24292E;">        p-&gt;firstchild </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p-&gt;nextsibling </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 如果是第一个孩子</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(first) {</span></span>
<span class="line"><span style="color:#24292E;">            (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">T)-&gt;firstchild </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p;</span></span>
<span class="line"><span style="color:#24292E;">            first </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">FALSE</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 如果不是第一个孩子，则添加为兄弟结点</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            q-&gt;nextsibling </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        q </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 递归获取子树</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">DFSTree</span><span style="color:#24292E;">(G, w, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">q);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">#include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&lt;stdio.h&gt;</span></span>
<span class="line"><span style="color:#F97583;">#include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;MGraph.h&quot;</span></span>
<span class="line"><span style="color:#F97583;">#include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;SpanningTree.h&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    MGraph G;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">char*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">path</span><span style="color:#E1E4E8;">[</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">path</span><span style="color:#E1E4E8;">[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">path</span><span style="color:#E1E4E8;">[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">path</span><span style="color:#E1E4E8;">[</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;TestData_UDG.txt&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">path</span><span style="color:#E1E4E8;">[</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 创建图</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">CreateGraph</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">G, path);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">PrintGraph</span><span style="color:#E1E4E8;">(G);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    CSTree T;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;构造无向图的生成树（森林）... </span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">DFSForest</span><span style="color:#E1E4E8;">(G, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">T);</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">PrintTree</span><span style="color:#E1E4E8;">(T);</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&lt;stdio.h&gt;</span></span>
<span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;MGraph.h&quot;</span></span>
<span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;SpanningTree.h&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    MGraph G;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">char*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">path</span><span style="color:#24292E;">[</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">path</span><span style="color:#24292E;">[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">path</span><span style="color:#24292E;">[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">path</span><span style="color:#24292E;">[</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;TestData_UDG.txt&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">path</span><span style="color:#24292E;">[</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 创建图</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">CreateGraph</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">G, path);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">PrintGraph</span><span style="color:#24292E;">(G);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    CSTree T;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;构造无向图的生成树（森林）... </span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">DFSForest</span><span style="color:#24292E;">(G, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">T);</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">PrintTree</span><span style="color:#24292E;">(T);</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">图类型→2（无向图）</span></span>
<span class="line"><span style="color:#e1e4e8;">顶点数→13</span></span>
<span class="line"><span style="color:#e1e4e8;">边数→13</span></span>
<span class="line"><span style="color:#e1e4e8;">边是否带有其他信息→0</span></span>
<span class="line"><span style="color:#e1e4e8;">顶点集→【A，L，M，J，B，F，C，D，E，G，K，H，I】</span></span>
<span class="line"><span style="color:#e1e4e8;">边的集合→【A，L】【A，B】【A，F】【A，C】【L，M】【L，J】【M，J】【M，B】【D，E】【G，K】【G，H】【G，I】【K，H】</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">图类型→2（无向图）</span></span>
<span class="line"><span style="color:#24292e;">顶点数→13</span></span>
<span class="line"><span style="color:#24292e;">边数→13</span></span>
<span class="line"><span style="color:#24292e;">边是否带有其他信息→0</span></span>
<span class="line"><span style="color:#24292e;">顶点集→【A，L，M，J，B，F，C，D，E，G，K，H，I】</span></span>
<span class="line"><span style="color:#24292e;">边的集合→【A，L】【A，B】【A，F】【A，C】【L，M】【L，J】【M，J】【M，B】【D，E】【G，K】【G，H】【G，I】【K，H】</span></span></code></pre></div></div></div>`,8),E=[r];function y(i,F,A,D,d,v){return n(),a("div",null,E)}const g=s(t,[["render",y]]);export{u as __pageData,g as default};
