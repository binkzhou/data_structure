import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.91000686.js";const p="/data_structure/assets/0707.b71871d6.png",o="/data_structure/assets/image-20231214141619396.ce1e3642.png",e="/data_structure/assets/image-20231214141517838.dc97461b.png",c="/data_structure/assets/image-20231214142814361.402d05f6.png",t="/data_structure/assets/image-20231214143840996.4d90bf70.png",r="/data_structure/assets/image-20231214145906506.e2cbaa2f.png",C=JSON.parse('{"title":"最小生成树","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"graph/0006.md","filePath":"graph/0006.md"}'),E={name:"graph/0006.md"},y=l('<h1 id="最小生成树" tabindex="-1">最小生成树 <a class="header-anchor" href="#最小生成树" aria-label="Permalink to &quot;最小生成树&quot;">​</a></h1><p>假设要在 个城市之间建立通信联络网，则连通 个城市只需要 n-1 条线路。这 时，自然会考虑这样一个问题，如何在最节省经费的前提下建立这个通信网。</p><p>对于给定的连通网，求最小生成树常用的算法有两个，分别叫做普里姆Prim算法和克鲁斯卡尔Kruskal算法。</p><p><img src="'+p+'" alt="0707.png"></p><h2 id="prim算法" tabindex="-1">Prim算法 <a class="header-anchor" href="#prim算法" aria-label="Permalink to &quot;Prim算法&quot;">​</a></h2><p>该算法的耗时部分是对顶点的遍历，与网中的边数无关，因为适用于边比较稠密的网</p><p><img src="'+o+`" alt="image-20231214141619396"></p><p>获取A结点到V-U的代价最小的边</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 返回顶点u在无向网中的位置</span></span>
<span class="line"><span style="color:#E1E4E8;">k </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">LocateVex</span><span style="color:#E1E4E8;">(G, u);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 辅助数组初始化，将顶点u加入了顶点子集U</span></span>
<span class="line"><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> G.vexnum; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(j </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> k) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FFAB70;">closedge</span><span style="color:#E1E4E8;">[j].adjvex </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> u;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FFAB70;">closedge</span><span style="color:#E1E4E8;">[j].lowcost </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> G.arcs[k][j].adj;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 赋值为0意味着顶点k已进入顶点子集U</span></span>
<span class="line"><span style="color:#FFAB70;">closedge</span><span style="color:#E1E4E8;">[k].lowcost </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 返回顶点u在无向网中的位置</span></span>
<span class="line"><span style="color:#24292E;">k </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">LocateVex</span><span style="color:#24292E;">(G, u);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 辅助数组初始化，将顶点u加入了顶点子集U</span></span>
<span class="line"><span style="color:#D73A49;">for</span><span style="color:#24292E;">(j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; j </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> G.vexnum; j</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(j </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> k) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#E36209;">closedge</span><span style="color:#24292E;">[j].adjvex </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> u;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#E36209;">closedge</span><span style="color:#24292E;">[j].lowcost </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> G.arcs[k][j].adj;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 赋值为0意味着顶点k已进入顶点子集U</span></span>
<span class="line"><span style="color:#E36209;">closedge</span><span style="color:#24292E;">[k].lowcost </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span></code></pre></div><p><img src="`+e+`" alt="image-20231214141517838"></p><p>获取<strong>最小值</strong>结点索引<code>k = minimum(G)</code> = 2 对应值C</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 将顶点k加入到顶点子集U</span></span>
<span class="line"><span style="color:#FFAB70;">closedge</span><span style="color:#E1E4E8;">[k].lowcost </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 新顶点进入顶点子集U后，需要更新顶点子集U与顶点子集V-U的边的信息</span></span>
<span class="line"><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> G.vexnum; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(G.arcs[k][j].adj </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">closedge</span><span style="color:#E1E4E8;">[j].lowcost) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FFAB70;">closedge</span><span style="color:#E1E4E8;">[j].adjvex </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> G.vexs[k];</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FFAB70;">closedge</span><span style="color:#E1E4E8;">[j].lowcost </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> G.arcs[k][j].adj;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 将顶点k加入到顶点子集U</span></span>
<span class="line"><span style="color:#E36209;">closedge</span><span style="color:#24292E;">[k].lowcost </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 新顶点进入顶点子集U后，需要更新顶点子集U与顶点子集V-U的边的信息</span></span>
<span class="line"><span style="color:#D73A49;">for</span><span style="color:#24292E;">(j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; j </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> G.vexnum; j</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(G.arcs[k][j].adj </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#E36209;">closedge</span><span style="color:#24292E;">[j].lowcost) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#E36209;">closedge</span><span style="color:#24292E;">[j].adjvex </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> G.vexs[k];</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#E36209;">closedge</span><span style="color:#24292E;">[j].lowcost </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> G.arcs[k][j].adj;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p><img src="`+c+'" alt="image-20231214142814361"></p><p>[0]A已经被访问</p><p>C到[1]B的权为5</p><p>[2]C已经被访问</p><p>C到[3]D的权为5和A到D的权相对不用修改</p><p>C到[4]E的权为6</p><p>C到[5]F的权为4</p><p>获取<strong>最小值</strong>结点索引<code>k = minimum(G)</code> = 5 对应值F</p><p><img src="'+t+`" alt="image-20231214143840996"></p><p>[0]A已经被访问</p><p>F到[1]B的权为无穷，保持之前C到B的值5</p><p>[2]C已经被访问</p><p>F到[3]D的权为2</p><p>F到[4]E权为6和C到E的权相同，保持之前</p><p>F到[5]已经被访问</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 普里姆算法中用到的辅助数组，</span></span>
<span class="line"><span style="color:#6A737D;"> * 用来记录从顶点子集U到顶点子集V-U的代价最小的边</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    VertexType adjvex;</span><span style="color:#6A737D;">      // 顶点子集U中的顶点</span></span>
<span class="line"><span style="color:#E1E4E8;">    VRType lowcost;</span><span style="color:#6A737D;">         // 顶点子集V-U到当前顶点的边的权值</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#FFAB70;">closedge</span><span style="color:#E1E4E8;">[MAX_VERTEX_NUM];</span><span style="color:#6A737D;"> // 辅助数组</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 普里姆算法</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * 从第u个顶点出发构造无向网G的最小生成树T，输出T的各条边。</span></span>
<span class="line"><span style="color:#6A737D;"> * 该算法的耗时部分是对顶点的遍历，与网中的边数无关，因为适用于边比较稠密的网</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * 注：预设图的权值均大于0，允许调整</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">MinSpanTree_PRIM</span><span style="color:#E1E4E8;">(MGraph </span><span style="color:#FFAB70;">G</span><span style="color:#E1E4E8;">, VertexType </span><span style="color:#FFAB70;">u</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i, j, k;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 返回顶点u在无向网中的位置</span></span>
<span class="line"><span style="color:#E1E4E8;">    k </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">LocateVex</span><span style="color:#E1E4E8;">(G, u);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 辅助数组初始化，将顶点u加入了顶点子集U</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> G.vexnum; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(j </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> k) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#FFAB70;">closedge</span><span style="color:#E1E4E8;">[j].adjvex </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> u;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#FFAB70;">closedge</span><span style="color:#E1E4E8;">[j].lowcost </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> G.arcs[k][j].adj;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 赋值为0意味着顶点k已进入顶点子集U</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">closedge</span><span style="color:#E1E4E8;">[k].lowcost </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 选择其余G.vexnum-1个顶点</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> G.vexnum; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 从顶点子集V-U中选出下一个候选顶点以便后续加入到最小生成树</span></span>
<span class="line"><span style="color:#E1E4E8;">        k </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">minimum</span><span style="color:#E1E4E8;">(G);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 打印顶点和边的信息</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%c</span><span style="color:#9ECBFF;"> --</span><span style="color:#79B8FF;">%d</span><span style="color:#9ECBFF;">-- </span><span style="color:#79B8FF;">%c\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">closedge</span><span style="color:#E1E4E8;">[k].adjvex, </span><span style="color:#FFAB70;">closedge</span><span style="color:#E1E4E8;">[k].lowcost, G.vexs[k]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 将顶点k加入到顶点子集U</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FFAB70;">closedge</span><span style="color:#E1E4E8;">[k].lowcost </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 新顶点进入顶点子集U后，需要更新顶点子集U与顶点子集V-U的边的信息</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> G.vexnum; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(G.arcs[k][j].adj </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">closedge</span><span style="color:#E1E4E8;">[j].lowcost) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#FFAB70;">closedge</span><span style="color:#E1E4E8;">[j].adjvex </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> G.vexs[k];</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#FFAB70;">closedge</span><span style="color:#E1E4E8;">[j].lowcost </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> G.arcs[k][j].adj;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 获取权值最小的边</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">minimum</span><span style="color:#E1E4E8;">(MGraph </span><span style="color:#FFAB70;">G</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i, k </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> min </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> INT_MAX;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 从权值不为0的边中选择拥有最小权值的边</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> G.vexnum; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">closedge</span><span style="color:#E1E4E8;">[i].lowcost </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">closedge</span><span style="color:#E1E4E8;">[i].lowcost </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> min) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            min </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">closedge</span><span style="color:#E1E4E8;">[i].lowcost;</span></span>
<span class="line"><span style="color:#E1E4E8;">            k </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> i;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> k;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 普里姆算法中用到的辅助数组，</span></span>
<span class="line"><span style="color:#6A737D;"> * 用来记录从顶点子集U到顶点子集V-U的代价最小的边</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">struct</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    VertexType adjvex;</span><span style="color:#6A737D;">      // 顶点子集U中的顶点</span></span>
<span class="line"><span style="color:#24292E;">    VRType lowcost;</span><span style="color:#6A737D;">         // 顶点子集V-U到当前顶点的边的权值</span></span>
<span class="line"><span style="color:#24292E;">} </span><span style="color:#E36209;">closedge</span><span style="color:#24292E;">[MAX_VERTEX_NUM];</span><span style="color:#6A737D;"> // 辅助数组</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 普里姆算法</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * 从第u个顶点出发构造无向网G的最小生成树T，输出T的各条边。</span></span>
<span class="line"><span style="color:#6A737D;"> * 该算法的耗时部分是对顶点的遍历，与网中的边数无关，因为适用于边比较稠密的网</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * 注：预设图的权值均大于0，允许调整</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MinSpanTree_PRIM</span><span style="color:#24292E;">(MGraph </span><span style="color:#E36209;">G</span><span style="color:#24292E;">, VertexType </span><span style="color:#E36209;">u</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i, j, k;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 返回顶点u在无向网中的位置</span></span>
<span class="line"><span style="color:#24292E;">    k </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">LocateVex</span><span style="color:#24292E;">(G, u);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 辅助数组初始化，将顶点u加入了顶点子集U</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; j </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> G.vexnum; j</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(j </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> k) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#E36209;">closedge</span><span style="color:#24292E;">[j].adjvex </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> u;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#E36209;">closedge</span><span style="color:#24292E;">[j].lowcost </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> G.arcs[k][j].adj;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 赋值为0意味着顶点k已进入顶点子集U</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">closedge</span><span style="color:#24292E;">[k].lowcost </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 选择其余G.vexnum-1个顶点</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> G.vexnum; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 从顶点子集V-U中选出下一个候选顶点以便后续加入到最小生成树</span></span>
<span class="line"><span style="color:#24292E;">        k </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">minimum</span><span style="color:#24292E;">(G);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 打印顶点和边的信息</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%c</span><span style="color:#032F62;"> --</span><span style="color:#005CC5;">%d</span><span style="color:#032F62;">-- </span><span style="color:#005CC5;">%c\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, </span><span style="color:#E36209;">closedge</span><span style="color:#24292E;">[k].adjvex, </span><span style="color:#E36209;">closedge</span><span style="color:#24292E;">[k].lowcost, G.vexs[k]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 将顶点k加入到顶点子集U</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#E36209;">closedge</span><span style="color:#24292E;">[k].lowcost </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 新顶点进入顶点子集U后，需要更新顶点子集U与顶点子集V-U的边的信息</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; j </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> G.vexnum; j</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(G.arcs[k][j].adj </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#E36209;">closedge</span><span style="color:#24292E;">[j].lowcost) {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#E36209;">closedge</span><span style="color:#24292E;">[j].adjvex </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> G.vexs[k];</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#E36209;">closedge</span><span style="color:#24292E;">[j].lowcost </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> G.arcs[k][j].adj;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 获取权值最小的边</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">minimum</span><span style="color:#24292E;">(MGraph </span><span style="color:#E36209;">G</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i, k </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> min </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> INT_MAX;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 从权值不为0的边中选择拥有最小权值的边</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> G.vexnum; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#E36209;">closedge</span><span style="color:#24292E;">[i].lowcost </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> </span><span style="color:#E36209;">closedge</span><span style="color:#24292E;">[i].lowcost </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> min) {</span></span>
<span class="line"><span style="color:#24292E;">            min </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#E36209;">closedge</span><span style="color:#24292E;">[i].lowcost;</span></span>
<span class="line"><span style="color:#24292E;">            k </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> i;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> k;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>输出</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">A --1-- C</span></span>
<span class="line"><span style="color:#e1e4e8;">C --4-- F</span></span>
<span class="line"><span style="color:#e1e4e8;">F --2-- D</span></span>
<span class="line"><span style="color:#e1e4e8;">C --5-- B</span></span>
<span class="line"><span style="color:#e1e4e8;">B --3-- E</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">A --1-- C</span></span>
<span class="line"><span style="color:#24292e;">C --4-- F</span></span>
<span class="line"><span style="color:#24292e;">F --2-- D</span></span>
<span class="line"><span style="color:#24292e;">C --5-- B</span></span>
<span class="line"><span style="color:#24292e;">B --3-- E</span></span></code></pre></div><h2 id="kruskal算法" tabindex="-1">Kruskal算法 <a class="header-anchor" href="#kruskal算法" aria-label="Permalink to &quot;Kruskal算法&quot;">​</a></h2><p>该算法的耗时部分是对边的遍历，与网中的顶点无关，因为适用于边比较稀疏的网</p><p><img src="`+r+`" alt="image-20231214145906506"></p><p>对于第5次遍历时有3条边的权值为5，但是其它权值会形成回路被舍弃</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 克鲁斯卡尔算法</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * 从第u个顶点出发构造无向网G的最小生成树T，输出T的各条边</span></span>
<span class="line"><span style="color:#6A737D;"> * 该算法的耗时部分是对边的遍历，与网中的顶点无关，因为适用于边比较稀疏的网</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * 可以改进之处：对已有边排序时可以采用第9章介绍的堆排序</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">MinSpanTree_KRUSKAL</span><span style="color:#E1E4E8;">(MGraph </span><span style="color:#FFAB70;">G</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i, j, k;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> s1, s2;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 边集</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> Edge {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> v1;</span><span style="color:#6A737D;">         // 顶点1的下标</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> v2;</span><span style="color:#6A737D;">         // 顶点2的下标</span></span>
<span class="line"><span style="color:#E1E4E8;">        VRType adj;</span><span style="color:#6A737D;">     // 权值</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> edges, tmp;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 记录已经加入到最小生成树的顶点集，这里使用集合的目的是快速判断候选顶点是否会造成环路</span></span>
<span class="line"><span style="color:#E1E4E8;">    MFSet S;</span></span>
<span class="line"><span style="color:#E1E4E8;">    Relation relation;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 边集的容量就是边的数量</span></span>
<span class="line"><span style="color:#E1E4E8;">    edges </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> Edge</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">)</span><span style="color:#B392F0;">malloc</span><span style="color:#E1E4E8;">(G.arcnum</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">sizeof</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> Edge));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 对边计数</span></span>
<span class="line"><span style="color:#E1E4E8;">    k </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 获取所有的边</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> G.vexnum; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 由于网是无向的，所以只遍历一半的边就可以</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> i; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 只对有效的边进行统计</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(G.arcs[i][j].adj </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> INFINITE) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#FFAB70;">edges</span><span style="color:#E1E4E8;">[k].v1 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> i;</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#FFAB70;">edges</span><span style="color:#E1E4E8;">[k].v2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> j;</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#FFAB70;">edges</span><span style="color:#E1E4E8;">[k].adj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> G.arcs[i][j].adj;</span></span>
<span class="line"><span style="color:#E1E4E8;">                k</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 根据权值从小到大对边进行排序，这里只是简单使用了效率较低的冒泡排序</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> G.arcnum </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> G.arcnum </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 每轮遍历都将权值大的往后挪</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">edges</span><span style="color:#E1E4E8;">[j].adj </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">edges</span><span style="color:#E1E4E8;">[j </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">].adj) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                tmp </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">edges</span><span style="color:#E1E4E8;">[j];</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#FFAB70;">edges</span><span style="color:#E1E4E8;">[j] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">edges</span><span style="color:#E1E4E8;">[j </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#FFAB70;">edges</span><span style="color:#E1E4E8;">[j </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> tmp;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 初始化顶点集合</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">initial_mfset</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">S, G.vexnum);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 从边集中依次选择权值最小，且不构成环路的边加入到最小生成树</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> G.arcnum; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        s1 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">find_mfset</span><span style="color:#E1E4E8;">(S, </span><span style="color:#FFAB70;">edges</span><span style="color:#E1E4E8;">[i].v1);</span></span>
<span class="line"><span style="color:#E1E4E8;">        s2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">find_mfset</span><span style="color:#E1E4E8;">(S, </span><span style="color:#FFAB70;">edges</span><span style="color:#E1E4E8;">[i].v2);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 如果这两个端点位于同一个集合，则跳过该条边</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(s1 </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> s2) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">continue</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 构造二元关系</span></span>
<span class="line"><span style="color:#E1E4E8;">        relation.n </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        relation.pairs[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">edges</span><span style="color:#E1E4E8;">[i].v1;</span></span>
<span class="line"><span style="color:#E1E4E8;">        relation.pairs[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">edges</span><span style="color:#E1E4E8;">[i].v2;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">build_mfset</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">S, relation);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 打印顶点和边的信息</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%c</span><span style="color:#9ECBFF;"> --</span><span style="color:#79B8FF;">%d</span><span style="color:#9ECBFF;">-- </span><span style="color:#79B8FF;">%c\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">GetVex</span><span style="color:#E1E4E8;">(G, </span><span style="color:#FFAB70;">edges</span><span style="color:#E1E4E8;">[i].v1), </span><span style="color:#FFAB70;">edges</span><span style="color:#E1E4E8;">[i].adj, </span><span style="color:#B392F0;">GetVex</span><span style="color:#E1E4E8;">(G, </span><span style="color:#FFAB70;">edges</span><span style="color:#E1E4E8;">[i].v2));</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 克鲁斯卡尔算法</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * 从第u个顶点出发构造无向网G的最小生成树T，输出T的各条边</span></span>
<span class="line"><span style="color:#6A737D;"> * 该算法的耗时部分是对边的遍历，与网中的顶点无关，因为适用于边比较稀疏的网</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * 可以改进之处：对已有边排序时可以采用第9章介绍的堆排序</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MinSpanTree_KRUSKAL</span><span style="color:#24292E;">(MGraph </span><span style="color:#E36209;">G</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i, j, k;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> s1, s2;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 边集</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">struct</span><span style="color:#24292E;"> Edge {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> v1;</span><span style="color:#6A737D;">         // 顶点1的下标</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> v2;</span><span style="color:#6A737D;">         // 顶点2的下标</span></span>
<span class="line"><span style="color:#24292E;">        VRType adj;</span><span style="color:#6A737D;">     // 权值</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> edges, tmp;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 记录已经加入到最小生成树的顶点集，这里使用集合的目的是快速判断候选顶点是否会造成环路</span></span>
<span class="line"><span style="color:#24292E;">    MFSet S;</span></span>
<span class="line"><span style="color:#24292E;">    Relation relation;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 边集的容量就是边的数量</span></span>
<span class="line"><span style="color:#24292E;">    edges </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">struct</span><span style="color:#24292E;"> Edge</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">)</span><span style="color:#6F42C1;">malloc</span><span style="color:#24292E;">(G.arcnum</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">sizeof</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">struct</span><span style="color:#24292E;"> Edge));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 对边计数</span></span>
<span class="line"><span style="color:#24292E;">    k </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 获取所有的边</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> G.vexnum; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 由于网是无向的，所以只遍历一半的边就可以</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; j </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> i; j</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 只对有效的边进行统计</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(G.arcs[i][j].adj </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> INFINITE) {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#E36209;">edges</span><span style="color:#24292E;">[k].v1 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> i;</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#E36209;">edges</span><span style="color:#24292E;">[k].v2 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> j;</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#E36209;">edges</span><span style="color:#24292E;">[k].adj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> G.arcs[i][j].adj;</span></span>
<span class="line"><span style="color:#24292E;">                k</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 根据权值从小到大对边进行排序，这里只是简单使用了效率较低的冒泡排序</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> G.arcnum </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; j </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> G.arcnum </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">; j</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 每轮遍历都将权值大的往后挪</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#E36209;">edges</span><span style="color:#24292E;">[j].adj </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#E36209;">edges</span><span style="color:#24292E;">[j </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">].adj) {</span></span>
<span class="line"><span style="color:#24292E;">                tmp </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#E36209;">edges</span><span style="color:#24292E;">[j];</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#E36209;">edges</span><span style="color:#24292E;">[j] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#E36209;">edges</span><span style="color:#24292E;">[j </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#E36209;">edges</span><span style="color:#24292E;">[j </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> tmp;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 初始化顶点集合</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">initial_mfset</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">S, G.vexnum);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 从边集中依次选择权值最小，且不构成环路的边加入到最小生成树</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> G.arcnum; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        s1 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">find_mfset</span><span style="color:#24292E;">(S, </span><span style="color:#E36209;">edges</span><span style="color:#24292E;">[i].v1);</span></span>
<span class="line"><span style="color:#24292E;">        s2 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">find_mfset</span><span style="color:#24292E;">(S, </span><span style="color:#E36209;">edges</span><span style="color:#24292E;">[i].v2);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 如果这两个端点位于同一个集合，则跳过该条边</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(s1 </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> s2) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">continue</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 构造二元关系</span></span>
<span class="line"><span style="color:#24292E;">        relation.n </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        relation.pairs[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">].i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#E36209;">edges</span><span style="color:#24292E;">[i].v1;</span></span>
<span class="line"><span style="color:#24292E;">        relation.pairs[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">].j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#E36209;">edges</span><span style="color:#24292E;">[i].v2;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">build_mfset</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">S, relation);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 打印顶点和边的信息</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%c</span><span style="color:#032F62;"> --</span><span style="color:#005CC5;">%d</span><span style="color:#032F62;">-- </span><span style="color:#005CC5;">%c\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">GetVex</span><span style="color:#24292E;">(G, </span><span style="color:#E36209;">edges</span><span style="color:#24292E;">[i].v1), </span><span style="color:#E36209;">edges</span><span style="color:#24292E;">[i].adj, </span><span style="color:#6F42C1;">GetVex</span><span style="color:#24292E;">(G, </span><span style="color:#E36209;">edges</span><span style="color:#24292E;">[i].v2));</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,35),i=[y];function F(A,D,d,g,j,u){return n(),a("div",null,i)}const B=s(E,[["render",F]]);export{C as __pageData,B as default};
