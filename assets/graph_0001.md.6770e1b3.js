import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.91000686.js";const l="/data_structure/assets/image-20231206145625508.dfdcfc95.png",o="/data_structure/assets/image-20231206150601590.c8d74e35.png",e="/data_structure/assets/image-20231206151314984.2dba5482.png",c="/data_structure/assets/2-220H4153114520.acda9228.gif",t="/data_structure/assets/2-220H4153114520.acda9228.gif",B=JSON.parse('{"title":"图的数组(邻接矩阵)存储表示","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"graph/0001.md","filePath":"graph/0001.md"}'),r={name:"graph/0001.md"},E=p('<h1 id="图的数组-邻接矩阵-存储表示" tabindex="-1">图的数组(邻接矩阵)存储表示 <a class="header-anchor" href="#图的数组-邻接矩阵-存储表示" aria-label="Permalink to &quot;图的数组(邻接矩阵)存储表示&quot;">​</a></h1><h3 id="无向图存储" tabindex="-1">无向图存储 <a class="header-anchor" href="#无向图存储" aria-label="Permalink to &quot;无向图存储&quot;">​</a></h3><p><img src="'+l+'" alt="image-20231206145625508"></p><p>对于<code>V1</code>对应0 1 0 1 0 arcs[0][1] = 1和arcs[0][3]=1 <code>V2</code>和<code>V4</code>有边存在</p><p>对于<code>V2</code>对应1 0 1 0 0 arcs[1][0] = 1和arcs[1][2]=1 <code>V1</code>和<code>V3</code>有边存在</p><p>对于<code>V3</code>对应0 1 0 1 1 arcs[2][1] = 1、arcs[2][3]=1和arcs[2][4]=1 <code>V2</code>、<code>V4</code>和<code>V5</code>有边存在</p><p>对于<code>V4</code>对应1 0 1 0 0 arcs[3][0] = 1和arcs[3][2]=1 <code>V1</code>和<code>V3</code>有边存在</p><p>对于<code>V5</code>对应0 0 1 0 0 arcs[4][2] = 1<code>V3</code>有边存在</p><h3 id="有向图存储" tabindex="-1">有向图存储 <a class="header-anchor" href="#有向图存储" aria-label="Permalink to &quot;有向图存储&quot;">​</a></h3><p><img src="'+o+'" alt="image-20231206150601590"></p><p>对于<code>V1</code>对应0 1 1 0 arcs[0][1] = 1和arcs[0][2]=1有出度 <code>V2</code>和<code>V3</code></p><p>对于<code>V2</code>对应0 0 0 0 没有出度</p><p>对于<code>V3</code>对应0 0 0 1 arcs[2][3] = 1 有出度<code>V4</code></p><p>对于<code>V4</code>对应1 0 0 0 arcs[4][0] = 1 有出度<code>V1</code></p><h3 id="有向网" tabindex="-1">有向网 <a class="header-anchor" href="#有向网" aria-label="Permalink to &quot;有向网&quot;">​</a></h3><p><img src="'+e+`" alt="image-20231206151314984"></p><p>两个结点之间有出度则填写对应的权值</p><h2 id="结构定义" tabindex="-1">结构定义 <a class="header-anchor" href="#结构定义" aria-label="Permalink to &quot;结构定义&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/* 宏定义 */</span></span>
<span class="line"><span style="color:#F97583;">#define</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">INFINITE</span><span style="color:#E1E4E8;"> INT_MAX</span><span style="color:#6A737D;">    // 最大值，用来表示网中的两个顶点不直接连接</span></span>
<span class="line"><span style="color:#F97583;">#define</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">MAX_VERTEX_NUM</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">26</span><span style="color:#6A737D;">   // 最大顶点个数</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 图的类型</span></span>
<span class="line"><span style="color:#F97583;">typedef</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">enum</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    DG,</span><span style="color:#6A737D;">     // 0-有向图</span></span>
<span class="line"><span style="color:#E1E4E8;">    DN,</span><span style="color:#6A737D;">     // 1-有向网(带权值)</span></span>
<span class="line"><span style="color:#E1E4E8;">    UDG,</span><span style="color:#6A737D;">    // 2-无向图</span></span>
<span class="line"><span style="color:#E1E4E8;">    UDN</span><span style="color:#6A737D;">     // 3-无向网(带权值)</span></span>
<span class="line"><span style="color:#E1E4E8;">} GraphKind;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 顶点类型</span></span>
<span class="line"><span style="color:#F97583;">typedef</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">char</span><span style="color:#E1E4E8;"> VertexType;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 顶点关系类型</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * 在无权图中，该值通常为0或1，表示两顶点是否直接连通；</span></span>
<span class="line"><span style="color:#6A737D;"> * 在有权图中，该值通常为权值。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">typedef</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> VRType;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 边的相关附加信息</span></span>
<span class="line"><span style="color:#F97583;">typedef</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 如果有的话，后续会添加相应的属性</span></span>
<span class="line"><span style="color:#E1E4E8;">} InfoType;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 边的类型，每条边上可能有附加信息info</span></span>
<span class="line"><span style="color:#F97583;">typedef</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> ArcCell {</span></span>
<span class="line"><span style="color:#E1E4E8;">    VRType adj;</span><span style="color:#6A737D;">  // 顶点关系，在有权图跟无权图中的含义不同</span></span>
<span class="line"><span style="color:#E1E4E8;">    InfoType</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> info;</span><span style="color:#6A737D;"> // 边的附加信息，通常忽略</span></span>
<span class="line"><span style="color:#E1E4E8;">} ArcCell;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 图/网的数组(邻接矩阵)存储表示类型定义 */</span></span>
<span class="line"><span style="color:#F97583;">typedef</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    VertexType </span><span style="color:#FFAB70;">vexs</span><span style="color:#E1E4E8;">[MAX_VERTEX_NUM];</span><span style="color:#6A737D;">               // 顶点向量</span></span>
<span class="line"><span style="color:#E1E4E8;">    ArcCell </span><span style="color:#FFAB70;">arcs</span><span style="color:#E1E4E8;">[MAX_VERTEX_NUM][MAX_VERTEX_NUM];</span><span style="color:#6A737D;">  // 邻接矩阵</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> vexnum, arcnum;</span><span style="color:#6A737D;">                            // 图/网的顶点数和弧数</span></span>
<span class="line"><span style="color:#E1E4E8;">    GraphKind kind;</span><span style="color:#6A737D;">                                // 图的类型标志</span></span>
<span class="line"><span style="color:#E1E4E8;">} MGraph;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 边/弧上是否存在附加信息</span></span>
<span class="line"><span style="color:#F97583;">extern</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Boolean</span><span style="color:#E1E4E8;"> IncInfo;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/* 宏定义 */</span></span>
<span class="line"><span style="color:#D73A49;">#define</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">INFINITE</span><span style="color:#24292E;"> INT_MAX</span><span style="color:#6A737D;">    // 最大值，用来表示网中的两个顶点不直接连接</span></span>
<span class="line"><span style="color:#D73A49;">#define</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MAX_VERTEX_NUM</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">26</span><span style="color:#6A737D;">   // 最大顶点个数</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 图的类型</span></span>
<span class="line"><span style="color:#D73A49;">typedef</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">enum</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    DG,</span><span style="color:#6A737D;">     // 0-有向图</span></span>
<span class="line"><span style="color:#24292E;">    DN,</span><span style="color:#6A737D;">     // 1-有向网(带权值)</span></span>
<span class="line"><span style="color:#24292E;">    UDG,</span><span style="color:#6A737D;">    // 2-无向图</span></span>
<span class="line"><span style="color:#24292E;">    UDN</span><span style="color:#6A737D;">     // 3-无向网(带权值)</span></span>
<span class="line"><span style="color:#24292E;">} GraphKind;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 顶点类型</span></span>
<span class="line"><span style="color:#D73A49;">typedef</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">char</span><span style="color:#24292E;"> VertexType;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 顶点关系类型</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * 在无权图中，该值通常为0或1，表示两顶点是否直接连通；</span></span>
<span class="line"><span style="color:#6A737D;"> * 在有权图中，该值通常为权值。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">typedef</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> VRType;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 边的相关附加信息</span></span>
<span class="line"><span style="color:#D73A49;">typedef</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">struct</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 如果有的话，后续会添加相应的属性</span></span>
<span class="line"><span style="color:#24292E;">} InfoType;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 边的类型，每条边上可能有附加信息info</span></span>
<span class="line"><span style="color:#D73A49;">typedef</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">struct</span><span style="color:#24292E;"> ArcCell {</span></span>
<span class="line"><span style="color:#24292E;">    VRType adj;</span><span style="color:#6A737D;">  // 顶点关系，在有权图跟无权图中的含义不同</span></span>
<span class="line"><span style="color:#24292E;">    InfoType</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> info;</span><span style="color:#6A737D;"> // 边的附加信息，通常忽略</span></span>
<span class="line"><span style="color:#24292E;">} ArcCell;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 图/网的数组(邻接矩阵)存储表示类型定义 */</span></span>
<span class="line"><span style="color:#D73A49;">typedef</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">struct</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    VertexType </span><span style="color:#E36209;">vexs</span><span style="color:#24292E;">[MAX_VERTEX_NUM];</span><span style="color:#6A737D;">               // 顶点向量</span></span>
<span class="line"><span style="color:#24292E;">    ArcCell </span><span style="color:#E36209;">arcs</span><span style="color:#24292E;">[MAX_VERTEX_NUM][MAX_VERTEX_NUM];</span><span style="color:#6A737D;">  // 邻接矩阵</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> vexnum, arcnum;</span><span style="color:#6A737D;">                            // 图/网的顶点数和弧数</span></span>
<span class="line"><span style="color:#24292E;">    GraphKind kind;</span><span style="color:#6A737D;">                                // 图的类型标志</span></span>
<span class="line"><span style="color:#24292E;">} MGraph;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 边/弧上是否存在附加信息</span></span>
<span class="line"><span style="color:#D73A49;">extern</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Boolean</span><span style="color:#24292E;"> IncInfo;</span></span></code></pre></div><h2 id="创建图-表" tabindex="-1">创建图/表 <a class="header-anchor" href="#创建图-表" aria-label="Permalink to &quot;创建图/表&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 创建图/表</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">CreateGraph</span><span style="color:#E1E4E8;">(MGraph</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">G</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">char*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">path</span><span style="color:#F97583;">[]</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> kind;</span></span>
<span class="line"><span style="color:#E1E4E8;">    Status flag;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;请输入图的类型(0-有向图 │ 1-有向网 │ 2-无向图 │ 3-无向网)：&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">scanf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%d</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">kind);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 类型不合规</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(kind </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> kind </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 需要从文件读取</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 打开文件，准备读取测试数据</span></span>
<span class="line"><span style="color:#E1E4E8;">    fp </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fopen</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">path</span><span style="color:#E1E4E8;">[kind], </span><span style="color:#9ECBFF;">&quot;r&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(fp </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 录入图的类型</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">ReadData</span><span style="color:#E1E4E8;">(fp, </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%d</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">((</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).kind));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 随机创建有向图/网或无向图/网的一种</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">switch</span><span style="color:#E1E4E8;">((</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).kind) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> DG:</span></span>
<span class="line"><span style="color:#E1E4E8;">            flag </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">CreateDG</span><span style="color:#E1E4E8;">(G);</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> DN:</span></span>
<span class="line"><span style="color:#E1E4E8;">            flag </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">CreateDN</span><span style="color:#E1E4E8;">(G);</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> UDG:</span></span>
<span class="line"><span style="color:#E1E4E8;">            flag </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">CreateUDG</span><span style="color:#E1E4E8;">(G);</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> UDN:</span></span>
<span class="line"><span style="color:#E1E4E8;">            flag </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">CreateUDN</span><span style="color:#E1E4E8;">(G);</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            flag </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ERROR;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(fp </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">fclose</span><span style="color:#E1E4E8;">(fp);</span></span>
<span class="line"><span style="color:#E1E4E8;">        fp </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> flag;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 创建图/表</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">CreateGraph</span><span style="color:#24292E;">(MGraph</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">G</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">char*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">path</span><span style="color:#D73A49;">[]</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> kind;</span></span>
<span class="line"><span style="color:#24292E;">    Status flag;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;请输入图的类型(0-有向图 │ 1-有向网 │ 2-无向图 │ 3-无向网)：&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">scanf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%d</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">kind);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 类型不合规</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(kind </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> kind </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 需要从文件读取</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 打开文件，准备读取测试数据</span></span>
<span class="line"><span style="color:#24292E;">    fp </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fopen</span><span style="color:#24292E;">(</span><span style="color:#E36209;">path</span><span style="color:#24292E;">[kind], </span><span style="color:#032F62;">&quot;r&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(fp </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 录入图的类型</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">ReadData</span><span style="color:#24292E;">(fp, </span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%d</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">((</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).kind));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 随机创建有向图/网或无向图/网的一种</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">switch</span><span style="color:#24292E;">((</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).kind) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> DG:</span></span>
<span class="line"><span style="color:#24292E;">            flag </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">CreateDG</span><span style="color:#24292E;">(G);</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> DN:</span></span>
<span class="line"><span style="color:#24292E;">            flag </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">CreateDN</span><span style="color:#24292E;">(G);</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> UDG:</span></span>
<span class="line"><span style="color:#24292E;">            flag </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">CreateUDG</span><span style="color:#24292E;">(G);</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> UDN:</span></span>
<span class="line"><span style="color:#24292E;">            flag </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">CreateUDN</span><span style="color:#24292E;">(G);</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">default</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            flag </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ERROR;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(fp </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">fclose</span><span style="color:#24292E;">(fp);</span></span>
<span class="line"><span style="color:#24292E;">        fp </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> flag;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="查找" tabindex="-1">查找 <a class="header-anchor" href="#查找" aria-label="Permalink to &quot;查找&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 返回顶点u在图/网中的位置</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">LocateVex</span><span style="color:#E1E4E8;">(MGraph </span><span style="color:#FFAB70;">G</span><span style="color:#E1E4E8;">, VertexType </span><span style="color:#FFAB70;">u</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> G.vexnum; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(G.vexs[i] </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> u){</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> i;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 返回顶点u在图/网中的位置</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">LocateVex</span><span style="color:#24292E;">(MGraph </span><span style="color:#E36209;">G</span><span style="color:#24292E;">, VertexType </span><span style="color:#E36209;">u</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> G.vexnum; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(G.vexs[i] </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> u){</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> i;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="构造有向图" tabindex="-1">构造有向图 <a class="header-anchor" href="#构造有向图" aria-label="Permalink to &quot;构造有向图&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>vexnum</code> 顶点数6</p><p><code>arcnum</code> 弧数14</p><p>1.录入顶点集[A，X，B，C，D，E]</p><p>2.初始化有向图的邻接矩阵为全0</p><p>3.录入弧的信息</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).</span><span style="color:#FFAB70;">arcs</span><span style="color:#E1E4E8;">[i][j].adj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).</span><span style="color:#E36209;">arcs</span><span style="color:#24292E;">[i][j].adj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span></code></pre></div></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-whjb6" id="tab-mSbGwbp" checked="checked"><label for="tab-mSbGwbp">MGraph.c</label><input type="radio" name="group-whjb6" id="tab-uEUxhUj"><label for="tab-uEUxhUj">TestData_DG.txt</label></div><div class="blocks"><div class="language-c vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 构造有向图</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> Status </span><span style="color:#B392F0;">CreateDG</span><span style="color:#E1E4E8;">(MGraph</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">G</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i, j, k;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ArcCell arcs </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">};</span><span style="color:#6A737D;">   // 有向图每条边的初始值</span></span>
<span class="line"><span style="color:#E1E4E8;">    VertexType v1, v2;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">ReadData</span><span style="color:#E1E4E8;">(fp, </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%d</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">((</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).vexnum));</span><span style="color:#6A737D;"> // 录入顶点数</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">ReadData</span><span style="color:#E1E4E8;">(fp, </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%d</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">((</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).arcnum));</span><span style="color:#6A737D;"> // 录入弧数</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">ReadData</span><span style="color:#E1E4E8;">(fp, </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%d</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">IncInfo);</span><span style="color:#6A737D;">       // 判断弧上是否包含附加信息</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 录入顶点集</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).vexnum; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 跳过空白，寻找下一个&quot;可读&quot;符号</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">skipBlank</span><span style="color:#E1E4E8;">(fp);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">ReadData</span><span style="color:#E1E4E8;">(fp, </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%c</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">((</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).vexs[i]));</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 初始化有向图的邻接矩阵</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).vexnum; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).vexnum; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).arcs[i][j] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> arcs;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 录入弧的信息</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(k </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; k </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).arcnum; k</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 跳过空白，寻找下一个可读符号</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">skipBlank</span><span style="color:#E1E4E8;">(fp);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">ReadData</span><span style="color:#E1E4E8;">(fp, </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%c%c</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">v1, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">v2);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">LocateVex</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G, v1);</span><span style="color:#6A737D;">  // 获取顶点v1在顶点集中的位置</span></span>
<span class="line"><span style="color:#E1E4E8;">        j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">LocateVex</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G, v2);</span><span style="color:#6A737D;">  // 获取顶点v2在顶点集中的位置</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 将指定的顶点关系设置为1，指示这两个顶点是直接连接的(注：这里没有验证下标是否越界)</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).arcs[i][j].adj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 从文件中读取数据时，最后其实应当判断一下是否读到了足够的信息</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 构造有向图</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">static</span><span style="color:#24292E;"> Status </span><span style="color:#6F42C1;">CreateDG</span><span style="color:#24292E;">(MGraph</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">G</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i, j, k;</span></span>
<span class="line"><span style="color:#24292E;">    ArcCell arcs </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">};</span><span style="color:#6A737D;">   // 有向图每条边的初始值</span></span>
<span class="line"><span style="color:#24292E;">    VertexType v1, v2;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">ReadData</span><span style="color:#24292E;">(fp, </span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%d</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">((</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).vexnum));</span><span style="color:#6A737D;"> // 录入顶点数</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">ReadData</span><span style="color:#24292E;">(fp, </span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%d</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">((</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).arcnum));</span><span style="color:#6A737D;"> // 录入弧数</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">ReadData</span><span style="color:#24292E;">(fp, </span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%d</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">IncInfo);</span><span style="color:#6A737D;">       // 判断弧上是否包含附加信息</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 录入顶点集</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).vexnum; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 跳过空白，寻找下一个&quot;可读&quot;符号</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">skipBlank</span><span style="color:#24292E;">(fp);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">ReadData</span><span style="color:#24292E;">(fp, </span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%c</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">((</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).vexs[i]));</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 初始化有向图的邻接矩阵</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).vexnum; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; j </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).vexnum; j</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).arcs[i][j] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> arcs;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 录入弧的信息</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(k </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; k </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).arcnum; k</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 跳过空白，寻找下一个可读符号</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">skipBlank</span><span style="color:#24292E;">(fp);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">ReadData</span><span style="color:#24292E;">(fp, </span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%c%c</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">v1, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">v2);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">LocateVex</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G, v1);</span><span style="color:#6A737D;">  // 获取顶点v1在顶点集中的位置</span></span>
<span class="line"><span style="color:#24292E;">        j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">LocateVex</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G, v2);</span><span style="color:#6A737D;">  // 获取顶点v2在顶点集中的位置</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 将指定的顶点关系设置为1，指示这两个顶点是直接连接的(注：这里没有验证下标是否越界)</span></span>
<span class="line highlighted"><span style="color:#24292E;">        (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).arcs[i][j].adj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 从文件中读取数据时，最后其实应当判断一下是否读到了足够的信息</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">图类型→0（有向图）</span></span>
<span class="line"><span style="color:#e1e4e8;">顶点数→6</span></span>
<span class="line"><span style="color:#e1e4e8;">弧数→14</span></span>
<span class="line"><span style="color:#e1e4e8;">弧是否带有其他信息→0</span></span>
<span class="line"><span style="color:#e1e4e8;">顶点集→【A，X，B，C，D，E】</span></span>
<span class="line"><span style="color:#e1e4e8;">弧的集合→【A，B】【A，C】【A，D】【B，C】【B，D】【B，E】【C，B】【C，E】【C，X】【E，A】【E，D】【E，X】【X，A】【X，D】</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">图类型→0（有向图）</span></span>
<span class="line"><span style="color:#24292e;">顶点数→6</span></span>
<span class="line"><span style="color:#24292e;">弧数→14</span></span>
<span class="line"><span style="color:#24292e;">弧是否带有其他信息→0</span></span>
<span class="line"><span style="color:#24292e;">顶点集→【A，X，B，C，D，E】</span></span>
<span class="line"><span style="color:#24292e;">弧的集合→【A，B】【A，C】【A，D】【B，C】【B，D】【B，E】【C，B】【C，E】【C，X】【E，A】【E，D】【E，X】【X，A】【X，D】</span></span></code></pre></div></div></div><p>输出</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">    A  X  B  C  D  E</span></span>
<span class="line"><span style="color:#e1e4e8;">A   -  -  1  1  1  -</span></span>
<span class="line"><span style="color:#e1e4e8;">X   1  -  -  -  1  -</span></span>
<span class="line"><span style="color:#e1e4e8;">B   -  -  -  1  1  1</span></span>
<span class="line"><span style="color:#e1e4e8;">C   -  1  1  -  -  1</span></span>
<span class="line"><span style="color:#e1e4e8;">D   -  -  -  -  -  -</span></span>
<span class="line"><span style="color:#e1e4e8;">E   1  1  -  -  1  -</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">    A  X  B  C  D  E</span></span>
<span class="line"><span style="color:#24292e;">A   -  -  1  1  1  -</span></span>
<span class="line"><span style="color:#24292e;">X   1  -  -  -  1  -</span></span>
<span class="line"><span style="color:#24292e;">B   -  -  -  1  1  1</span></span>
<span class="line"><span style="color:#24292e;">C   -  1  1  -  -  1</span></span>
<span class="line"><span style="color:#24292e;">D   -  -  -  -  -  -</span></span>
<span class="line"><span style="color:#24292e;">E   1  1  -  -  1  -</span></span></code></pre></div><h2 id="构造无向图" tabindex="-1">构造无向图 <a class="header-anchor" href="#构造无向图" aria-label="Permalink to &quot;构造无向图&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>vexnum</code> 顶点数6</p><p><code>arcnum</code> 边数13</p><p>1.录入顶点集[A，X，B，C，D，E]</p><p>2.初始化有向图的邻接矩阵为全0</p><p>3.录入弧的信息(无向图是双向的需要双向录入)</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> 将指定的顶点关系设置为1，指示这两个顶点是直接连接的(注：这里没有验证下标是否越界)</span></span>
<span class="line"><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).</span><span style="color:#FFAB70;">arcs</span><span style="color:#E1E4E8;">[i][j].adj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 填充对称点</span></span>
<span class="line"><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).</span><span style="color:#FFAB70;">arcs</span><span style="color:#E1E4E8;">[j][i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).</span><span style="color:#FFAB70;">arcs</span><span style="color:#E1E4E8;">[i][j];</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">/</span><span style="color:#24292E;"> 将指定的顶点关系设置为1，指示这两个顶点是直接连接的(注：这里没有验证下标是否越界)</span></span>
<span class="line"><span style="color:#24292E;">(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).</span><span style="color:#E36209;">arcs</span><span style="color:#24292E;">[i][j].adj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 填充对称点</span></span>
<span class="line"><span style="color:#24292E;">(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).</span><span style="color:#E36209;">arcs</span><span style="color:#24292E;">[j][i] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).</span><span style="color:#E36209;">arcs</span><span style="color:#24292E;">[i][j];</span></span></code></pre></div></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-PcO8B" id="tab-PP3WxdM" checked="checked"><label for="tab-PP3WxdM">MGraph.c</label><input type="radio" name="group-PcO8B" id="tab-ylyapCd"><label for="tab-ylyapCd">TestData_UDG.txt</label></div><div class="blocks"><div class="language-c vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 构造无向图</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> Status </span><span style="color:#B392F0;">CreateUDG</span><span style="color:#E1E4E8;">(MGraph</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">G</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i, j, k;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ArcCell arcs </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">};</span><span style="color:#6A737D;">   // 无向图每条边的初始值</span></span>
<span class="line"><span style="color:#E1E4E8;">    VertexType v1, v2;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">ReadData</span><span style="color:#E1E4E8;">(fp, </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%d</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">((</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).vexnum));</span><span style="color:#6A737D;"> // 录入顶点数</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">ReadData</span><span style="color:#E1E4E8;">(fp, </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%d</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">((</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).arcnum));</span><span style="color:#6A737D;"> // 录入边数</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">ReadData</span><span style="color:#E1E4E8;">(fp, </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%d</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">IncInfo);</span><span style="color:#6A737D;">       // 判断边上是否包含附加信息</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 录入顶点集</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).vexnum; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 跳过空白，寻找下一个&quot;可读&quot;符号</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">skipBlank</span><span style="color:#E1E4E8;">(fp);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">ReadData</span><span style="color:#E1E4E8;">(fp, </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%c</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">((</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).vexs[i]));</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 初始化无向图的邻接矩阵</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).vexnum; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).vexnum; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).arcs[i][j] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> arcs;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 录入边的信息</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(k </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; k </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).arcnum; k</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 跳过空白，寻找下一个可读符号</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">skipBlank</span><span style="color:#E1E4E8;">(fp);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">ReadData</span><span style="color:#E1E4E8;">(fp, </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%c%c</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">v1, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">v2);</span></span>
<span class="line"><span style="color:#E1E4E8;">        i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">LocateVex</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G, v1);</span><span style="color:#6A737D;">  // 获取顶点v1在顶点集中的位置</span></span>
<span class="line"><span style="color:#E1E4E8;">        j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">LocateVex</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G, v2);</span><span style="color:#6A737D;">  // 获取顶点v2在顶点集中的位置</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 将指定的顶点关系设置为1，指示这两个顶点是直接连接的(注：这里没有验证下标是否越界)</span></span>
<span class="line"><span style="color:#E1E4E8;">        (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).arcs[i][j].adj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 填充对称点</span></span>
<span class="line"><span style="color:#E1E4E8;">        (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).arcs[j][i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).arcs[i][j];</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 从文件中读取数据时，最后其实应当判断一下是否读到了足够的信息</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 构造无向图</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">static</span><span style="color:#24292E;"> Status </span><span style="color:#6F42C1;">CreateUDG</span><span style="color:#24292E;">(MGraph</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">G</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i, j, k;</span></span>
<span class="line"><span style="color:#24292E;">    ArcCell arcs </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">};</span><span style="color:#6A737D;">   // 无向图每条边的初始值</span></span>
<span class="line"><span style="color:#24292E;">    VertexType v1, v2;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">ReadData</span><span style="color:#24292E;">(fp, </span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%d</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">((</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).vexnum));</span><span style="color:#6A737D;"> // 录入顶点数</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">ReadData</span><span style="color:#24292E;">(fp, </span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%d</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">((</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).arcnum));</span><span style="color:#6A737D;"> // 录入边数</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">ReadData</span><span style="color:#24292E;">(fp, </span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%d</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">IncInfo);</span><span style="color:#6A737D;">       // 判断边上是否包含附加信息</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 录入顶点集</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).vexnum; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 跳过空白，寻找下一个&quot;可读&quot;符号</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">skipBlank</span><span style="color:#24292E;">(fp);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">ReadData</span><span style="color:#24292E;">(fp, </span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%c</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">((</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).vexs[i]));</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 初始化无向图的邻接矩阵</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).vexnum; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; j </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).vexnum; j</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).arcs[i][j] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> arcs;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 录入边的信息</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(k </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; k </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).arcnum; k</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 跳过空白，寻找下一个可读符号</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">skipBlank</span><span style="color:#24292E;">(fp);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">ReadData</span><span style="color:#24292E;">(fp, </span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%c%c</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">v1, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">v2);</span></span>
<span class="line"><span style="color:#24292E;">        i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">LocateVex</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G, v1);</span><span style="color:#6A737D;">  // 获取顶点v1在顶点集中的位置</span></span>
<span class="line"><span style="color:#24292E;">        j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">LocateVex</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G, v2);</span><span style="color:#6A737D;">  // 获取顶点v2在顶点集中的位置</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 将指定的顶点关系设置为1，指示这两个顶点是直接连接的(注：这里没有验证下标是否越界)</span></span>
<span class="line"><span style="color:#24292E;">        (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).arcs[i][j].adj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 填充对称点</span></span>
<span class="line"><span style="color:#24292E;">        (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).arcs[j][i] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).arcs[i][j];</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 从文件中读取数据时，最后其实应当判断一下是否读到了足够的信息</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">图类型→2（无向图）</span></span>
<span class="line"><span style="color:#e1e4e8;">顶点数→6</span></span>
<span class="line"><span style="color:#e1e4e8;">边数→13</span></span>
<span class="line"><span style="color:#e1e4e8;">边是否带有其他信息→0</span></span>
<span class="line"><span style="color:#e1e4e8;">顶点集→【A，X，B，C，D，E】</span></span>
<span class="line"><span style="color:#e1e4e8;">边的集合→【A，B】【A，C】【A，D】【B，C】【B，D】【B，E】【C，E】【C，X】【E，A】【E，D】【E，X】【X，A】【X，D】</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">图类型→2（无向图）</span></span>
<span class="line"><span style="color:#24292e;">顶点数→6</span></span>
<span class="line"><span style="color:#24292e;">边数→13</span></span>
<span class="line"><span style="color:#24292e;">边是否带有其他信息→0</span></span>
<span class="line"><span style="color:#24292e;">顶点集→【A，X，B，C，D，E】</span></span>
<span class="line"><span style="color:#24292e;">边的集合→【A，B】【A，C】【A，D】【B，C】【B，D】【B，E】【C，E】【C，X】【E，A】【E，D】【E，X】【X，A】【X，D】</span></span></code></pre></div></div></div><p>输出</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">    A  X  B  C  D  E</span></span>
<span class="line"><span style="color:#e1e4e8;">A   -  1  1  1  1  1</span></span>
<span class="line"><span style="color:#e1e4e8;">X   1  -  -  1  1  1</span></span>
<span class="line"><span style="color:#e1e4e8;">B   1  -  -  1  1  1</span></span>
<span class="line"><span style="color:#e1e4e8;">C   1  1  1  -  -  1</span></span>
<span class="line"><span style="color:#e1e4e8;">D   1  1  1  -  -  1</span></span>
<span class="line"><span style="color:#e1e4e8;">E   1  1  1  1  1  -</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">    A  X  B  C  D  E</span></span>
<span class="line"><span style="color:#24292e;">A   -  1  1  1  1  1</span></span>
<span class="line"><span style="color:#24292e;">X   1  -  -  1  1  1</span></span>
<span class="line"><span style="color:#24292e;">B   1  -  -  1  1  1</span></span>
<span class="line"><span style="color:#24292e;">C   1  1  1  -  -  1</span></span>
<span class="line"><span style="color:#24292e;">D   1  1  1  -  -  1</span></span>
<span class="line"><span style="color:#24292e;">E   1  1  1  1  1  -</span></span></code></pre></div><h2 id="构造有向网" tabindex="-1">构造有向网 <a class="header-anchor" href="#构造有向网" aria-label="Permalink to &quot;构造有向网&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>vexnum</code> 顶点数6</p><p><code>arcnum</code> 弧数14</p><p>1.录入顶点集[A，X，B，C，D，E]</p><p>2.初始化有向网的邻接矩阵为全INFINITE</p><p>3.录入弧的信息(值为权值)</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 在指定的顶点关系上记录权值(注：这里没有验证下标是否越界)</span></span>
<span class="line"><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).</span><span style="color:#FFAB70;">arcs</span><span style="color:#E1E4E8;">[i][j].adj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> w;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 在指定的顶点关系上记录权值(注：这里没有验证下标是否越界)</span></span>
<span class="line"><span style="color:#24292E;">(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).</span><span style="color:#E36209;">arcs</span><span style="color:#24292E;">[i][j].adj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> w;</span></span></code></pre></div></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-qIKhq" id="tab-2RwlItR" checked="checked"><label for="tab-2RwlItR">MGraph.c</label><input type="radio" name="group-qIKhq" id="tab-oo4dV70"><label for="tab-oo4dV70">TestData_DN.txt</label></div><div class="blocks"><div class="language-c vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 构造有向网</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> Status </span><span style="color:#B392F0;">CreateDN</span><span style="color:#E1E4E8;">(MGraph</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">G</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i, j, k;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ArcCell arcs </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {INFINITE, </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">};</span><span style="color:#6A737D;">    // 有向网每条弧的初始值</span></span>
<span class="line"><span style="color:#E1E4E8;">    VertexType v1, v2;</span></span>
<span class="line"><span style="color:#E1E4E8;">    VRType w;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">ReadData</span><span style="color:#E1E4E8;">(fp, </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%d</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">((</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).vexnum));</span><span style="color:#6A737D;"> // 录入顶点数</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">ReadData</span><span style="color:#E1E4E8;">(fp, </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%d</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">((</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).arcnum));</span><span style="color:#6A737D;"> // 录入弧数</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">ReadData</span><span style="color:#E1E4E8;">(fp, </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%d</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">IncInfo);</span><span style="color:#6A737D;">       // 判断弧上是否包含附加信息</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 录入顶点集</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).vexnum; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 跳过空白，寻找下一个&quot;可读&quot;符号</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">skipBlank</span><span style="color:#E1E4E8;">(fp);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">ReadData</span><span style="color:#E1E4E8;">(fp, </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%c</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">((</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).vexs[i]));</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 初始化有向网的邻接矩阵</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).vexnum; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).vexnum; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).arcs[i][j] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> arcs;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 录入弧的信息</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(k </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; k </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).arcnum; k</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 跳过空白，寻找下一个可读符号</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">skipBlank</span><span style="color:#E1E4E8;">(fp);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">ReadData</span><span style="color:#E1E4E8;">(fp, </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%c%c%d</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">v1, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">v2, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">w);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">LocateVex</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G, v1);</span><span style="color:#6A737D;">  // 获取顶点v1在顶点集中的位置</span></span>
<span class="line"><span style="color:#E1E4E8;">        j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">LocateVex</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G, v2);</span><span style="color:#6A737D;">  // 获取顶点v2在顶点集中的位置</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 在指定的顶点关系上记录权值(注：这里没有验证下标是否越界)</span></span>
<span class="line"><span style="color:#E1E4E8;">        (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).arcs[i][j].adj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> w;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 从文件中读取数据时，最后其实应当判断一下是否读到了足够的信息</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 构造有向网</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">static</span><span style="color:#24292E;"> Status </span><span style="color:#6F42C1;">CreateDN</span><span style="color:#24292E;">(MGraph</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">G</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i, j, k;</span></span>
<span class="line"><span style="color:#24292E;">    ArcCell arcs </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {INFINITE, </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">};</span><span style="color:#6A737D;">    // 有向网每条弧的初始值</span></span>
<span class="line"><span style="color:#24292E;">    VertexType v1, v2;</span></span>
<span class="line"><span style="color:#24292E;">    VRType w;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">ReadData</span><span style="color:#24292E;">(fp, </span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%d</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">((</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).vexnum));</span><span style="color:#6A737D;"> // 录入顶点数</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">ReadData</span><span style="color:#24292E;">(fp, </span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%d</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">((</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).arcnum));</span><span style="color:#6A737D;"> // 录入弧数</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">ReadData</span><span style="color:#24292E;">(fp, </span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%d</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">IncInfo);</span><span style="color:#6A737D;">       // 判断弧上是否包含附加信息</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 录入顶点集</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).vexnum; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 跳过空白，寻找下一个&quot;可读&quot;符号</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">skipBlank</span><span style="color:#24292E;">(fp);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">ReadData</span><span style="color:#24292E;">(fp, </span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%c</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">((</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).vexs[i]));</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 初始化有向网的邻接矩阵</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).vexnum; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; j </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).vexnum; j</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).arcs[i][j] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> arcs;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 录入弧的信息</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(k </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; k </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).arcnum; k</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 跳过空白，寻找下一个可读符号</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">skipBlank</span><span style="color:#24292E;">(fp);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">ReadData</span><span style="color:#24292E;">(fp, </span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%c%c%d</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">v1, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">v2, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">w);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">LocateVex</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G, v1);</span><span style="color:#6A737D;">  // 获取顶点v1在顶点集中的位置</span></span>
<span class="line"><span style="color:#24292E;">        j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">LocateVex</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G, v2);</span><span style="color:#6A737D;">  // 获取顶点v2在顶点集中的位置</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 在指定的顶点关系上记录权值(注：这里没有验证下标是否越界)</span></span>
<span class="line"><span style="color:#24292E;">        (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).arcs[i][j].adj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> w;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 从文件中读取数据时，最后其实应当判断一下是否读到了足够的信息</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">图类型→1（有向网）</span></span>
<span class="line"><span style="color:#e1e4e8;">顶点数→6</span></span>
<span class="line"><span style="color:#e1e4e8;">弧数→14</span></span>
<span class="line"><span style="color:#e1e4e8;">弧是否带有其他信息→0</span></span>
<span class="line"><span style="color:#e1e4e8;">顶点集→【A，X，B，C，D，E】</span></span>
<span class="line"><span style="color:#e1e4e8;">弧的集合→【A，B，3】【A，C，8】【A，D，11】【B，C，7】【B，D，4】【B，E，1】【C，B，5】【C，E，17】【C，X，3】【E，A，6】【E，D，4】【E，X，2】【X，A，8】【X，D，10】</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">图类型→1（有向网）</span></span>
<span class="line"><span style="color:#24292e;">顶点数→6</span></span>
<span class="line"><span style="color:#24292e;">弧数→14</span></span>
<span class="line"><span style="color:#24292e;">弧是否带有其他信息→0</span></span>
<span class="line"><span style="color:#24292e;">顶点集→【A，X，B，C，D，E】</span></span>
<span class="line"><span style="color:#24292e;">弧的集合→【A，B，3】【A，C，8】【A，D，11】【B，C，7】【B，D，4】【B，E，1】【C，B，5】【C，E，17】【C，X，3】【E，A，6】【E，D，4】【E，X，2】【X，A，8】【X，D，10】</span></span></code></pre></div></div></div><p>输出</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">    A  X  B  C  D  E</span></span>
<span class="line"><span style="color:#e1e4e8;">A   -  -  3  8 11  -</span></span>
<span class="line"><span style="color:#e1e4e8;">X   8  -  -  - 10  -</span></span>
<span class="line"><span style="color:#e1e4e8;">B   -  -  -  7  4  1</span></span>
<span class="line"><span style="color:#e1e4e8;">C   -  3  5  -  - 17</span></span>
<span class="line"><span style="color:#e1e4e8;">D   -  -  -  -  -  -</span></span>
<span class="line"><span style="color:#e1e4e8;">E   6  2  -  -  4  -</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">    A  X  B  C  D  E</span></span>
<span class="line"><span style="color:#24292e;">A   -  -  3  8 11  -</span></span>
<span class="line"><span style="color:#24292e;">X   8  -  -  - 10  -</span></span>
<span class="line"><span style="color:#24292e;">B   -  -  -  7  4  1</span></span>
<span class="line"><span style="color:#24292e;">C   -  3  5  -  - 17</span></span>
<span class="line"><span style="color:#24292e;">D   -  -  -  -  -  -</span></span>
<span class="line"><span style="color:#24292e;">E   6  2  -  -  4  -</span></span></code></pre></div><h2 id="构造无向网" tabindex="-1">构造无向网 <a class="header-anchor" href="#构造无向网" aria-label="Permalink to &quot;构造无向网&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>vexnum</code> 顶点数6</p><p><code>arcnum</code> 边数13</p><p>1.录入顶点集[A，X，B，C，D，E]</p><p>2.初始化有无网的邻接矩阵为全INFINITE</p><p>3.录入弧的信息(值为权值)</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 在指定的顶点关系上记录权值(注：这里没有验证下标是否越界)</span></span>
<span class="line"><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).</span><span style="color:#FFAB70;">arcs</span><span style="color:#E1E4E8;">[i][j].adj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> w;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 填充对称点</span></span>
<span class="line"><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).</span><span style="color:#FFAB70;">arcs</span><span style="color:#E1E4E8;">[j][i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).</span><span style="color:#FFAB70;">arcs</span><span style="color:#E1E4E8;">[i][j];</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 在指定的顶点关系上记录权值(注：这里没有验证下标是否越界)</span></span>
<span class="line"><span style="color:#24292E;">(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).</span><span style="color:#E36209;">arcs</span><span style="color:#24292E;">[i][j].adj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> w;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 填充对称点</span></span>
<span class="line"><span style="color:#24292E;">(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).</span><span style="color:#E36209;">arcs</span><span style="color:#24292E;">[j][i] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).</span><span style="color:#E36209;">arcs</span><span style="color:#24292E;">[i][j];</span></span></code></pre></div></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-NZMtG" id="tab-vqx_rmW" checked="checked"><label for="tab-vqx_rmW">MGraph.c</label><input type="radio" name="group-NZMtG" id="tab-KcPXLPR"><label for="tab-KcPXLPR">TestData_UDN.txt</label></div><div class="blocks"><div class="language-c vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 构造无向网</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> Status </span><span style="color:#B392F0;">CreateUDN</span><span style="color:#E1E4E8;">(MGraph</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">G</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i, j, k;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ArcCell arcs </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {INFINITE, </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">};</span><span style="color:#6A737D;">    // 无向网每条边的初始值</span></span>
<span class="line"><span style="color:#E1E4E8;">    VertexType v1, v2;</span></span>
<span class="line"><span style="color:#E1E4E8;">    VRType w;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">ReadData</span><span style="color:#E1E4E8;">(fp, </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%d</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">((</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).vexnum));</span><span style="color:#6A737D;"> // 录入顶点数</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">ReadData</span><span style="color:#E1E4E8;">(fp, </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%d</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">((</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).arcnum));</span><span style="color:#6A737D;"> // 录入边数</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">ReadData</span><span style="color:#E1E4E8;">(fp, </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%d</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">IncInfo);</span><span style="color:#6A737D;">       // 判断边上是否包含附加信息</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 录入顶点集</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).vexnum; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 跳过空白，寻找下一个&quot;可读&quot;符号</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">skipBlank</span><span style="color:#E1E4E8;">(fp);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">ReadData</span><span style="color:#E1E4E8;">(fp, </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%c</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">((</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).vexs[i]));</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 初始化无向网的邻接矩阵</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).vexnum; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).vexnum; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).arcs[i][j] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> arcs;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 录入边的信息</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(k </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; k </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).arcnum; k</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 跳过空白，寻找下一个可读符号</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">skipBlank</span><span style="color:#E1E4E8;">(fp);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">ReadData</span><span style="color:#E1E4E8;">(fp, </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%c%c%d</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">v1, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">v2, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">w);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">LocateVex</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G, v1);</span><span style="color:#6A737D;">  // 获取顶点v1在顶点集中的位置</span></span>
<span class="line"><span style="color:#E1E4E8;">        j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">LocateVex</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G, v2);</span><span style="color:#6A737D;">  // 获取顶点v2在顶点集中的位置</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 在指定的顶点关系上记录权值(注：这里没有验证下标是否越界)</span></span>
<span class="line"><span style="color:#E1E4E8;">        (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).arcs[i][j].adj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> w;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 填充对称点</span></span>
<span class="line"><span style="color:#E1E4E8;">        (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).arcs[j][i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).arcs[i][j];</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 从文件中读取数据时，最后其实应当判断一下是否读到了足够的信息</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 构造无向网</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">static</span><span style="color:#24292E;"> Status </span><span style="color:#6F42C1;">CreateUDN</span><span style="color:#24292E;">(MGraph</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">G</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i, j, k;</span></span>
<span class="line"><span style="color:#24292E;">    ArcCell arcs </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {INFINITE, </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">};</span><span style="color:#6A737D;">    // 无向网每条边的初始值</span></span>
<span class="line"><span style="color:#24292E;">    VertexType v1, v2;</span></span>
<span class="line"><span style="color:#24292E;">    VRType w;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">ReadData</span><span style="color:#24292E;">(fp, </span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%d</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">((</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).vexnum));</span><span style="color:#6A737D;"> // 录入顶点数</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">ReadData</span><span style="color:#24292E;">(fp, </span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%d</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">((</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).arcnum));</span><span style="color:#6A737D;"> // 录入边数</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">ReadData</span><span style="color:#24292E;">(fp, </span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%d</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">IncInfo);</span><span style="color:#6A737D;">       // 判断边上是否包含附加信息</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 录入顶点集</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).vexnum; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 跳过空白，寻找下一个&quot;可读&quot;符号</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">skipBlank</span><span style="color:#24292E;">(fp);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">ReadData</span><span style="color:#24292E;">(fp, </span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%c</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">((</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).vexs[i]));</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 初始化无向网的邻接矩阵</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).vexnum; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; j </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).vexnum; j</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).arcs[i][j] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> arcs;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 录入边的信息</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(k </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; k </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).arcnum; k</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 跳过空白，寻找下一个可读符号</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">skipBlank</span><span style="color:#24292E;">(fp);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">ReadData</span><span style="color:#24292E;">(fp, </span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%c%c%d</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">v1, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">v2, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">w);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">LocateVex</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G, v1);</span><span style="color:#6A737D;">  // 获取顶点v1在顶点集中的位置</span></span>
<span class="line"><span style="color:#24292E;">        j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">LocateVex</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G, v2);</span><span style="color:#6A737D;">  // 获取顶点v2在顶点集中的位置</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 在指定的顶点关系上记录权值(注：这里没有验证下标是否越界)</span></span>
<span class="line"><span style="color:#24292E;">        (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).arcs[i][j].adj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> w;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 填充对称点</span></span>
<span class="line"><span style="color:#24292E;">        (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).arcs[j][i] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).arcs[i][j];</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 从文件中读取数据时，最后其实应当判断一下是否读到了足够的信息</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">图类型→3（无向网）</span></span>
<span class="line"><span style="color:#e1e4e8;">顶点数→6</span></span>
<span class="line"><span style="color:#e1e4e8;">边数→13</span></span>
<span class="line"><span style="color:#e1e4e8;">边是否带有其他信息→0</span></span>
<span class="line"><span style="color:#e1e4e8;">顶点集→【A，X，B，C，D，E】</span></span>
<span class="line"><span style="color:#e1e4e8;">边的集合→【A，B，3】【A，C，8】【A，D，11】【B，C，7】【B，D，4】【B，E，1】【C，E，17】【C，X，3】【E，A，6】【E，D，4】【E，X，2】【X，A，8】【X，D，10】</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">图类型→3（无向网）</span></span>
<span class="line"><span style="color:#24292e;">顶点数→6</span></span>
<span class="line"><span style="color:#24292e;">边数→13</span></span>
<span class="line"><span style="color:#24292e;">边是否带有其他信息→0</span></span>
<span class="line"><span style="color:#24292e;">顶点集→【A，X，B，C，D，E】</span></span>
<span class="line"><span style="color:#24292e;">边的集合→【A，B，3】【A，C，8】【A，D，11】【B，C，7】【B，D，4】【B，E，1】【C，E，17】【C，X，3】【E，A，6】【E，D，4】【E，X，2】【X，A，8】【X，D，10】</span></span></code></pre></div></div></div><p>输出</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">    A  X  B  C  D  E</span></span>
<span class="line"><span style="color:#e1e4e8;">A   -  8  3  8 11  6</span></span>
<span class="line"><span style="color:#e1e4e8;">X   8  -  -  3 10  2</span></span>
<span class="line"><span style="color:#e1e4e8;">B   3  -  -  7  4  1</span></span>
<span class="line"><span style="color:#e1e4e8;">C   8  3  7  -  - 17</span></span>
<span class="line"><span style="color:#e1e4e8;">D  11 10  4  -  -  4</span></span>
<span class="line"><span style="color:#e1e4e8;">E   6  2  1 17  4  -</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">    A  X  B  C  D  E</span></span>
<span class="line"><span style="color:#24292e;">A   -  8  3  8 11  6</span></span>
<span class="line"><span style="color:#24292e;">X   8  -  -  3 10  2</span></span>
<span class="line"><span style="color:#24292e;">B   3  -  -  7  4  1</span></span>
<span class="line"><span style="color:#24292e;">C   8  3  7  -  - 17</span></span>
<span class="line"><span style="color:#24292e;">D  11 10  4  -  -  4</span></span>
<span class="line"><span style="color:#24292e;">E   6  2  1 17  4  -</span></span></code></pre></div><h2 id="销毁" tabindex="-1">销毁 <a class="header-anchor" href="#销毁" aria-label="Permalink to &quot;销毁&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 邻接矩阵存储的图无需释放内存，只需重置相关遍历即可。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">DestroyGraph</span><span style="color:#E1E4E8;">(MGraph</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">G</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).vexnum </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).arcnum </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    IncInfo </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 邻接矩阵存储的图无需释放内存，只需重置相关遍历即可。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">DestroyGraph</span><span style="color:#24292E;">(MGraph</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">G</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).vexnum </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).arcnum </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    IncInfo </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="取值" tabindex="-1">取值 <a class="header-anchor" href="#取值" aria-label="Permalink to &quot;取值&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>返回索引v处的顶点值</p><p>顶点集[A，X，B，C，D，E]</p></div><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 返回索引v处的顶点值</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">VertexType </span><span style="color:#B392F0;">GetVex</span><span style="color:#E1E4E8;">(MGraph </span><span style="color:#FFAB70;">G</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">v</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(v </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> v </span><span style="color:#F97583;">&gt;=</span><span style="color:#E1E4E8;"> G.vexnum){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\0</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">    // 指定的顶点不存在</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> G.vexs[v];</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 返回索引v处的顶点值</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">VertexType </span><span style="color:#6F42C1;">GetVex</span><span style="color:#24292E;">(MGraph </span><span style="color:#E36209;">G</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">v</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(v </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> v </span><span style="color:#D73A49;">&gt;=</span><span style="color:#24292E;"> G.vexnum){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;</span><span style="color:#005CC5;">\\0</span><span style="color:#032F62;">&#39;</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">    // 指定的顶点不存在</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> G.vexs[v];</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="赋值" tabindex="-1">赋值 <a class="header-anchor" href="#赋值" aria-label="Permalink to &quot;赋值&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>顶点集[A，X，B，C，D，E]</p><p>将B赋值为W</p><p>顶点集[A，X，W，C，D，E]</p></div><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 将顶点v赋值为value</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">PutVex</span><span style="color:#E1E4E8;">(MGraph</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">G</span><span style="color:#E1E4E8;">, VertexType </span><span style="color:#FFAB70;">v</span><span style="color:#E1E4E8;">, VertexType </span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> k;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 首先需要判断该顶点是否存在</span></span>
<span class="line"><span style="color:#E1E4E8;">    k </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">LocateVex</span><span style="color:#E1E4E8;">((</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G),v);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(k </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span><span style="color:#6A737D;">    // 指定的顶点不存在</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).vexs[k] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> value;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 将顶点v赋值为value</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">PutVex</span><span style="color:#24292E;">(MGraph</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">G</span><span style="color:#24292E;">, VertexType </span><span style="color:#E36209;">v</span><span style="color:#24292E;">, VertexType </span><span style="color:#E36209;">value</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> k;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 首先需要判断该顶点是否存在</span></span>
<span class="line"><span style="color:#24292E;">    k </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">LocateVex</span><span style="color:#24292E;">((</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G),v);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(k </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span><span style="color:#6A737D;">    // 指定的顶点不存在</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).vexs[k] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> value;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="首个邻接点" tabindex="-1">首个邻接点 <a class="header-anchor" href="#首个邻接点" aria-label="Permalink to &quot;首个邻接点&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">INFO</p><p>首个邻接点的<code>vexs</code>索引</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">    A  X  B  C  D  E</span></span>
<span class="line"><span style="color:#E1E4E8;">A   </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-</span></span>
<span class="line"><span style="color:#E1E4E8;">X   </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-</span></span>
<span class="line"><span style="color:#E1E4E8;">B   </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">C   </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 顶点A的第一个邻接顶点为</span></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> k </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">FirstAdjVex</span><span style="color:#E1E4E8;">(G, </span><span style="color:#9ECBFF;">&#39;A&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%c\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, G.</span><span style="color:#FFAB70;">vexs</span><span style="color:#E1E4E8;">[k]);</span><span style="color:#6A737D;"> // B</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">    A  X  B  C  D  E</span></span>
<span class="line"><span style="color:#24292E;">A   </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span></span>
<span class="line"><span style="color:#24292E;">X   </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span></span>
<span class="line"><span style="color:#24292E;">B   </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">C   </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 顶点A的第一个邻接顶点为</span></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> k </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">FirstAdjVex</span><span style="color:#24292E;">(G, </span><span style="color:#032F62;">&#39;A&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%c\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, G.</span><span style="color:#E36209;">vexs</span><span style="color:#24292E;">[k]);</span><span style="color:#6A737D;"> // B</span></span></code></pre></div></div><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 首个邻接点</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * 返回顶点v的首个邻接点</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">FirstAdjVex</span><span style="color:#E1E4E8;">(MGraph </span><span style="color:#FFAB70;">G</span><span style="color:#E1E4E8;">, VertexType </span><span style="color:#FFAB70;">v</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> kv, j;</span></span>
<span class="line"><span style="color:#E1E4E8;">    VRType adj;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 查找所在行</span></span>
<span class="line"><span style="color:#E1E4E8;">    kv </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">LocateVex</span><span style="color:#E1E4E8;">(G, v);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(kv </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">    // 指定的顶点不存在</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 确定一个非连通标记</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(G.kind </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> DG </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> G.kind </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> UDG) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        adj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">            // 图</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(G.kind </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> DN </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> G.kind </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> UDN) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        adj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> INFINITE;</span><span style="color:#6A737D;">     // 网</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 从头开始查找</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> G.vexnum; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 找到与v直接连接的顶点</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(G.arcs[kv][j].adj </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> adj) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> j;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 首个邻接点</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * 返回顶点v的首个邻接点</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">FirstAdjVex</span><span style="color:#24292E;">(MGraph </span><span style="color:#E36209;">G</span><span style="color:#24292E;">, VertexType </span><span style="color:#E36209;">v</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> kv, j;</span></span>
<span class="line"><span style="color:#24292E;">    VRType adj;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 查找所在行</span></span>
<span class="line"><span style="color:#24292E;">    kv </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">LocateVex</span><span style="color:#24292E;">(G, v);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(kv </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">    // 指定的顶点不存在</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 确定一个非连通标记</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(G.kind </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> DG </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> G.kind </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> UDG) {</span></span>
<span class="line"><span style="color:#24292E;">        adj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">            // 图</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(G.kind </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> DN </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> G.kind </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> UDN) {</span></span>
<span class="line"><span style="color:#24292E;">        adj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> INFINITE;</span><span style="color:#6A737D;">     // 网</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 从头开始查找</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; j </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> G.vexnum; j</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 找到与v直接连接的顶点</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(G.arcs[kv][j].adj </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> adj) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> j;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="下一个邻接点" tabindex="-1">下一个邻接点 <a class="header-anchor" href="#下一个邻接点" aria-label="Permalink to &quot;下一个邻接点&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">INFO</p><p>首个邻接点的<code>vexs</code>索引</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">    A  X  B  C  D  E</span></span>
<span class="line"><span style="color:#E1E4E8;">A   </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-</span></span>
<span class="line"><span style="color:#E1E4E8;">X   </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-</span></span>
<span class="line"><span style="color:#E1E4E8;">B   </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">C   </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 顶点A的下一个邻接顶点为(从C开始查找)</span></span>
<span class="line"><span style="color:#E1E4E8;">k </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">NextAdjVex</span><span style="color:#E1E4E8;">(G, </span><span style="color:#9ECBFF;">&#39;A&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;C&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%c\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, G.</span><span style="color:#FFAB70;">vexs</span><span style="color:#E1E4E8;">[k]);</span><span style="color:#6A737D;">  // D</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">    A  X  B  C  D  E</span></span>
<span class="line"><span style="color:#24292E;">A   </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span></span>
<span class="line"><span style="color:#24292E;">X   </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span></span>
<span class="line"><span style="color:#24292E;">B   </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">C   </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 顶点A的下一个邻接顶点为(从C开始查找)</span></span>
<span class="line"><span style="color:#24292E;">k </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">NextAdjVex</span><span style="color:#24292E;">(G, </span><span style="color:#032F62;">&#39;A&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;C&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%c\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, G.</span><span style="color:#E36209;">vexs</span><span style="color:#24292E;">[k]);</span><span style="color:#6A737D;">  // D</span></span></code></pre></div></div><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 下一个邻接点</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * 返回顶点v的(相对于w的)下一个邻接点</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">NextAdjVex</span><span style="color:#E1E4E8;">(MGraph </span><span style="color:#FFAB70;">G</span><span style="color:#E1E4E8;">, VertexType </span><span style="color:#FFAB70;">v</span><span style="color:#E1E4E8;">, VertexType </span><span style="color:#FFAB70;">w</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> kv, kw, j;</span></span>
<span class="line"><span style="color:#E1E4E8;">    VRType adj;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    kv </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">LocateVex</span><span style="color:#E1E4E8;">(G, v);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(kv </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">    // 指定的顶点不存在</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    kw </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">LocateVex</span><span style="color:#E1E4E8;">(G, w);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(kw </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">    // 指定的顶点不存在</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 确定一个非连通标记</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(G.kind </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> DG </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> G.kind </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> UDG) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        adj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">        // 图</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(G.kind </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> DN </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> G.kind </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> UDN) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        adj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> INFINITE;</span><span style="color:#6A737D;"> // 网</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 从顶点w后开始查找</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> kw </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> G.vexnum; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 找到与v直接连接的顶点</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(G.arcs[kv][j].adj </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> adj) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> j;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 下一个邻接点</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * 返回顶点v的(相对于w的)下一个邻接点</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">NextAdjVex</span><span style="color:#24292E;">(MGraph </span><span style="color:#E36209;">G</span><span style="color:#24292E;">, VertexType </span><span style="color:#E36209;">v</span><span style="color:#24292E;">, VertexType </span><span style="color:#E36209;">w</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> kv, kw, j;</span></span>
<span class="line"><span style="color:#24292E;">    VRType adj;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    kv </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">LocateVex</span><span style="color:#24292E;">(G, v);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(kv </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">    // 指定的顶点不存在</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    kw </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">LocateVex</span><span style="color:#24292E;">(G, w);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(kw </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">    // 指定的顶点不存在</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 确定一个非连通标记</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(G.kind </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> DG </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> G.kind </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> UDG) {</span></span>
<span class="line"><span style="color:#24292E;">        adj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">        // 图</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(G.kind </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> DN </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> G.kind </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> UDN) {</span></span>
<span class="line"><span style="color:#24292E;">        adj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> INFINITE;</span><span style="color:#6A737D;"> // 网</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 从顶点w后开始查找</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> kw </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">; j </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> G.vexnum; j</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 找到与v直接连接的顶点</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(G.arcs[kv][j].adj </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> adj) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> j;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="插入顶点" tabindex="-1">插入顶点 <a class="header-anchor" href="#插入顶点" aria-label="Permalink to &quot;插入顶点&quot;">​</a></h2><p>1.判断是否存在</p><p>2.在顶点集中添加顶点</p><p>3.在邻接矩阵中补上0或INFINITE</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 插入顶点</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * 将指定的顶点v追加到顶点集中，未建立该顶点与其他顶点的关系</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">InsertVex</span><span style="color:#E1E4E8;">(MGraph</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">G</span><span style="color:#E1E4E8;">, VertexType </span><span style="color:#FFAB70;">v</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i, k;</span></span>
<span class="line"><span style="color:#E1E4E8;">    VRType adj;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 顶点数过多</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">((</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).vexnum </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> MAX_VERTEX_NUM) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 首先需要判断该顶点是否存在</span></span>
<span class="line"><span style="color:#E1E4E8;">    k </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">LocateVex</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G, v);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(k </span><span style="color:#F97583;">&gt;=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span><span style="color:#6A737D;">    // 指定的顶点存在时，无需重复添加</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 确定一个非连通标记</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">((</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).kind </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> DG </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).kind </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> UDG) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        adj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">        // 图</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">((</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).kind </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> DN </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).kind </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> UDN) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        adj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> INFINITE;</span><span style="color:#6A737D;"> // 网</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).vexs[(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).vexnum] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> v;</span></span>
<span class="line"><span style="color:#E1E4E8;">    (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).vexnum</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 补上0或INFINITE</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).vexnum; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).arcs[i][(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).vexnum </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">].adj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> adj;</span></span>
<span class="line"><span style="color:#E1E4E8;">        (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).arcs[(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).vexnum </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">][i].adj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> adj;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 插入顶点</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * 将指定的顶点v追加到顶点集中，未建立该顶点与其他顶点的关系</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">InsertVex</span><span style="color:#24292E;">(MGraph</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">G</span><span style="color:#24292E;">, VertexType </span><span style="color:#E36209;">v</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i, k;</span></span>
<span class="line"><span style="color:#24292E;">    VRType adj;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 顶点数过多</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">((</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).vexnum </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> MAX_VERTEX_NUM) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 首先需要判断该顶点是否存在</span></span>
<span class="line"><span style="color:#24292E;">    k </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">LocateVex</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G, v);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(k </span><span style="color:#D73A49;">&gt;=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span><span style="color:#6A737D;">    // 指定的顶点存在时，无需重复添加</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 确定一个非连通标记</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">((</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).kind </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> DG </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).kind </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> UDG) {</span></span>
<span class="line"><span style="color:#24292E;">        adj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">        // 图</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">((</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).kind </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> DN </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).kind </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> UDN) {</span></span>
<span class="line"><span style="color:#24292E;">        adj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> INFINITE;</span><span style="color:#6A737D;"> // 网</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).vexs[(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).vexnum] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> v;</span></span>
<span class="line"><span style="color:#24292E;">    (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).vexnum</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 补上0或INFINITE</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).vexnum; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).arcs[i][(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).vexnum </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">].adj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> adj;</span></span>
<span class="line"><span style="color:#24292E;">        (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).arcs[(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).vexnum </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">][i].adj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> adj;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="删除顶点" tabindex="-1">删除顶点 <a class="header-anchor" href="#删除顶点" aria-label="Permalink to &quot;删除顶点&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">INFO</p><p>1.更新边/弧数量</p><p>2.将邻接矩阵中的顶点关系左移；将邻接矩阵中的顶点关系上移</p><p>3.从顶点集中删除当前元素</p><p>4.顶点数量减一</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 删除顶点X</span></span>
<span class="line"><span style="color:#B392F0;">DeleteVex</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">&amp;</span><span style="color:#FFAB70;">G</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;X&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    A  X  B  C  D  E              A  B  C  D  E</span></span>
<span class="line"><span style="color:#E1E4E8;">A   </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">          A   </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-</span></span>
<span class="line"><span style="color:#E1E4E8;">X   </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">          B   </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">B   </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">===&gt;</span><span style="color:#E1E4E8;">  C   </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">C   </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">          D   </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-</span></span>
<span class="line"><span style="color:#E1E4E8;">D   </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">          E   </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-</span></span>
<span class="line"><span style="color:#E1E4E8;">E   </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 删除顶点X</span></span>
<span class="line"><span style="color:#6F42C1;">DeleteVex</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">&amp;</span><span style="color:#E36209;">G</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;X&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    A  X  B  C  D  E              A  B  C  D  E</span></span>
<span class="line"><span style="color:#24292E;">A   </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">          A   </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span></span>
<span class="line"><span style="color:#24292E;">X   </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">          B   </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">B   </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">    </span><span style="color:#D73A49;">===&gt;</span><span style="color:#24292E;">  C   </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">C   </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">          D   </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span></span>
<span class="line"><span style="color:#24292E;">D   </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">          E   </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span></span>
<span class="line"><span style="color:#24292E;">E   </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span></span></code></pre></div></div><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 删除顶点</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * 从顶点集中删除指定的顶点v，注意需要更新相关的顶点关系</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">DeleteVex</span><span style="color:#E1E4E8;">(MGraph</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">G</span><span style="color:#E1E4E8;">, VertexType </span><span style="color:#FFAB70;">v</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i, j, k;</span></span>
<span class="line"><span style="color:#E1E4E8;">    VRType adj;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    k </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">LocateVex</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G, v);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(k </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span><span style="color:#6A737D;">    // 指定的顶点不存在</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 确定一个非连通标记</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">((</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).kind </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> DG </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).kind </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> UDG) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        adj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">        // 图</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">((</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).kind </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> DN </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).kind </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> UDN) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        adj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> INFINITE;</span><span style="color:#6A737D;"> // 网</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 更新边/弧的数量</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).vexnum; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 如果存在从顶点v出发的边，则边的数量减一</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">((</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).arcs[k][i].adj </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> adj) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).arcnum</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 如果这是有向的图/网，依然需要更新边/弧的数量</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">((</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).kind </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> DG </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).kind </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> DN) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 如果存在到达顶点v的边，则边的数量减一</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">((</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).arcs[i][k].adj </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> adj) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).arcnum</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 将邻接矩阵中的顶点关系左移</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> k </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).vexnum; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).vexnum; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).arcs[i][j </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).arcs[i][j];</span><span style="color:#6A737D;">    // 右边的列挪到左边的列</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 将邻接矩阵中的顶点关系上移</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> k </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).vexnum; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 注，由于上面进行左移的关系，所以这里的j是小于(*G).vexnum - 1</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).vexnum </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).arcs[i </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">][j] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).arcs[i][j];</span><span style="color:#6A737D;">    // 下一行挪到上一行</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 将该顶点从顶点集中移除</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> k </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).vexnum; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).vexs[i </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).vexs[i];</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 顶点数减一</span></span>
<span class="line"><span style="color:#E1E4E8;">    (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).vexnum</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 删除顶点</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * 从顶点集中删除指定的顶点v，注意需要更新相关的顶点关系</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">DeleteVex</span><span style="color:#24292E;">(MGraph</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">G</span><span style="color:#24292E;">, VertexType </span><span style="color:#E36209;">v</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i, j, k;</span></span>
<span class="line"><span style="color:#24292E;">    VRType adj;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    k </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">LocateVex</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G, v);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(k </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span><span style="color:#6A737D;">    // 指定的顶点不存在</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 确定一个非连通标记</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">((</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).kind </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> DG </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).kind </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> UDG) {</span></span>
<span class="line"><span style="color:#24292E;">        adj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">        // 图</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">((</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).kind </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> DN </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).kind </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> UDN) {</span></span>
<span class="line"><span style="color:#24292E;">        adj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> INFINITE;</span><span style="color:#6A737D;"> // 网</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 更新边/弧的数量</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).vexnum; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 如果存在从顶点v出发的边，则边的数量减一</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">((</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).arcs[k][i].adj </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> adj) {</span></span>
<span class="line"><span style="color:#24292E;">            (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).arcnum</span><span style="color:#D73A49;">--</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 如果这是有向的图/网，依然需要更新边/弧的数量</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">((</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).kind </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> DG </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).kind </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> DN) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 如果存在到达顶点v的边，则边的数量减一</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">((</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).arcs[i][k].adj </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> adj) {</span></span>
<span class="line"><span style="color:#24292E;">                (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).arcnum</span><span style="color:#D73A49;">--</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 将邻接矩阵中的顶点关系左移</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> k </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">; j </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).vexnum; j</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).vexnum; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).arcs[i][j </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).arcs[i][j];</span><span style="color:#6A737D;">    // 右边的列挪到左边的列</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 将邻接矩阵中的顶点关系上移</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> k </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).vexnum; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 注，由于上面进行左移的关系，所以这里的j是小于(*G).vexnum - 1</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; j </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).vexnum </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">; j</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).arcs[i </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">][j] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).arcs[i][j];</span><span style="color:#6A737D;">    // 下一行挪到上一行</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 将该顶点从顶点集中移除</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> k </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).vexnum; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).vexs[i </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).vexs[i];</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 顶点数减一</span></span>
<span class="line"><span style="color:#24292E;">    (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).vexnum</span><span style="color:#D73A49;">--</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="插入边-弧" tabindex="-1">插入边/弧 <a class="header-anchor" href="#插入边-弧" aria-label="Permalink to &quot;插入边/弧&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>有权值的需要设置邻接矩阵的值为权值</p></div><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 插入边</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(G.kind </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> DG </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> G.kind </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> UDG) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 插入无权值的边：&lt;E, C&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">InsertArc</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">G, </span><span style="color:#9ECBFF;">&#39;E&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;C&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 网</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(G.kind </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> DN </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> G.kind </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> UDN) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 插入带权值的边：&lt;E, C, 8&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">InsertArc</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">G, </span><span style="color:#9ECBFF;">&#39;E&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;C&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 插入边</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;">(G.kind </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> DG </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> G.kind </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> UDG) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 插入无权值的边：&lt;E, C&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">InsertArc</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">G, </span><span style="color:#032F62;">&#39;E&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;C&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 网</span></span>
<span class="line"><span style="color:#24292E;">} </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(G.kind </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> DN </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> G.kind </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> UDN) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 插入带权值的边：&lt;E, C, 8&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">InsertArc</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">G, </span><span style="color:#032F62;">&#39;E&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;C&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">8</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 插入边/弧&lt;v, w&gt;</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * 如果当前图/网是无向的，则插入一条弧需要增加两个顶点关系，但弧的数量只增一。</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * 对于图来说，可以在可变参数中列出边/弧的附加信息；</span></span>
<span class="line"><span style="color:#6A737D;"> * 对于网来说，可以在可变参数中依次列出边/弧的权值以及附加信息。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">InsertArc</span><span style="color:#E1E4E8;">(MGraph</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">G</span><span style="color:#E1E4E8;">, VertexType </span><span style="color:#FFAB70;">v</span><span style="color:#E1E4E8;">, VertexType </span><span style="color:#FFAB70;">w</span><span style="color:#E1E4E8;">, ...) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> kv, kw;</span></span>
<span class="line"><span style="color:#E1E4E8;">    VRType adj;</span><span style="color:#6A737D;">                 // 顶点关系</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">Boolean</span><span style="color:#E1E4E8;"> overlay </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">FALSE</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">    // 是否为覆盖添加</span></span>
<span class="line"><span style="color:#E1E4E8;">    InfoType</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> info </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">      // 边/弧的附加信息</span></span>
<span class="line"><span style="color:#E1E4E8;">    va_list ap;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    kv </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">LocateVex</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G, v);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(kv </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span><span style="color:#6A737D;">    // 指定的顶点不存在</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    kw </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">LocateVex</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G, w);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(kw </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span><span style="color:#6A737D;">    // 指定的顶点不存在</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 拒绝环</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(kv </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> kw) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /* 确定一个顶点关系 */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 对于图来说，连通关系用1表示</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">((</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).kind </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> DG </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).kind </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> UDG) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        adj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 如果边/弧上存在附加信息</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(IncInfo) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">va_start</span><span style="color:#E1E4E8;">(ap, w);</span><span style="color:#6A737D;">                // 在w后查询首个可变参数</span></span>
<span class="line"><span style="color:#E1E4E8;">            info </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">va_arg</span><span style="color:#E1E4E8;">(ap, InfoType</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">);</span><span style="color:#6A737D;">   // 获取附加信息</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">va_end</span><span style="color:#E1E4E8;">(ap);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        overlay </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).arcs[kv][kw].adj </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 对于网来说，此处需要从可变参数中获取权值信息</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">((</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).kind </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> DN </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).kind </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> UDN) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">va_start</span><span style="color:#E1E4E8;">(ap, w);</span><span style="color:#6A737D;">    // 在w后查询首个可变参数</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        adj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">va_arg</span><span style="color:#E1E4E8;">(ap, VRType);</span><span style="color:#6A737D;">   // 获取权值信息</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 如果边/弧上存在附加信息</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(IncInfo) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            info </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">va_arg</span><span style="color:#E1E4E8;">(ap, InfoType</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">);</span><span style="color:#6A737D;">   // 获取附加信息</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">va_end</span><span style="color:#E1E4E8;">(ap);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        overlay </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).arcs[kv][kw].adj </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> INFINITE;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).arcs[kv][kw].adj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> adj;</span><span style="color:#6A737D;">    // 记录顶点关系</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 如果边/弧上存在附加信息，则记录附加关系</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(IncInfo) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).arcs[kv][kw].info </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> info;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 如果是无向图/网，需要考虑对称性</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">((</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).kind </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> UDG </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).kind </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> UDN) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).arcs[kw][kv] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).arcs[kv][kw];</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 在非覆盖的情形下，才考虑更新边/弧的数量</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">overlay) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).arcnum</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">  // 不论有向无向，边/弧数只增一</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 插入边/弧&lt;v, w&gt;</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * 如果当前图/网是无向的，则插入一条弧需要增加两个顶点关系，但弧的数量只增一。</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * 对于图来说，可以在可变参数中列出边/弧的附加信息；</span></span>
<span class="line"><span style="color:#6A737D;"> * 对于网来说，可以在可变参数中依次列出边/弧的权值以及附加信息。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">InsertArc</span><span style="color:#24292E;">(MGraph</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">G</span><span style="color:#24292E;">, VertexType </span><span style="color:#E36209;">v</span><span style="color:#24292E;">, VertexType </span><span style="color:#E36209;">w</span><span style="color:#24292E;">, ...) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> kv, kw;</span></span>
<span class="line"><span style="color:#24292E;">    VRType adj;</span><span style="color:#6A737D;">                 // 顶点关系</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">Boolean</span><span style="color:#24292E;"> overlay </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">FALSE</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">    // 是否为覆盖添加</span></span>
<span class="line"><span style="color:#24292E;">    InfoType</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> info </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">      // 边/弧的附加信息</span></span>
<span class="line"><span style="color:#24292E;">    va_list ap;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    kv </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">LocateVex</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G, v);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(kv </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span><span style="color:#6A737D;">    // 指定的顶点不存在</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    kw </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">LocateVex</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G, w);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(kw </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span><span style="color:#6A737D;">    // 指定的顶点不存在</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 拒绝环</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(kv </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> kw) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /* 确定一个顶点关系 */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 对于图来说，连通关系用1表示</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">((</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).kind </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> DG </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).kind </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> UDG) {</span></span>
<span class="line"><span style="color:#24292E;">        adj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 如果边/弧上存在附加信息</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(IncInfo) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">va_start</span><span style="color:#24292E;">(ap, w);</span><span style="color:#6A737D;">                // 在w后查询首个可变参数</span></span>
<span class="line"><span style="color:#24292E;">            info </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">va_arg</span><span style="color:#24292E;">(ap, InfoType</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">);</span><span style="color:#6A737D;">   // 获取附加信息</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">va_end</span><span style="color:#24292E;">(ap);</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        overlay </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).arcs[kv][kw].adj </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 对于网来说，此处需要从可变参数中获取权值信息</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">((</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).kind </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> DN </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).kind </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> UDN) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">va_start</span><span style="color:#24292E;">(ap, w);</span><span style="color:#6A737D;">    // 在w后查询首个可变参数</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        adj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">va_arg</span><span style="color:#24292E;">(ap, VRType);</span><span style="color:#6A737D;">   // 获取权值信息</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 如果边/弧上存在附加信息</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(IncInfo) {</span></span>
<span class="line"><span style="color:#24292E;">            info </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">va_arg</span><span style="color:#24292E;">(ap, InfoType</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">);</span><span style="color:#6A737D;">   // 获取附加信息</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">va_end</span><span style="color:#24292E;">(ap);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        overlay </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).arcs[kv][kw].adj </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> INFINITE;</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).arcs[kv][kw].adj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> adj;</span><span style="color:#6A737D;">    // 记录顶点关系</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 如果边/弧上存在附加信息，则记录附加关系</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(IncInfo) {</span></span>
<span class="line"><span style="color:#24292E;">        (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).arcs[kv][kw].info </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> info;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 如果是无向图/网，需要考虑对称性</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">((</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).kind </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> UDG </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).kind </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> UDN) {</span></span>
<span class="line"><span style="color:#24292E;">        (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).arcs[kw][kv] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).arcs[kv][kw];</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 在非覆盖的情形下，才考虑更新边/弧的数量</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">overlay) {</span></span>
<span class="line"><span style="color:#24292E;">        (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).arcnum</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">  // 不论有向无向，边/弧数只增一</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>输出</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">==== 有向图 ====</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    A  B  C  D  E               A  B  C  D  E</span></span>
<span class="line"><span style="color:#e1e4e8;">A   -  1  1  1  -           A   -  1  1  1  -</span></span>
<span class="line"><span style="color:#e1e4e8;">B   -  -  1  1  1           B   -  -  1  1  1</span></span>
<span class="line"><span style="color:#e1e4e8;">C   -  1  -  -  1   ===&gt;    C   -  1  -  -  1</span></span>
<span class="line"><span style="color:#e1e4e8;">D   -  -  -  -  -           D   -  -  -  -  -</span></span>
<span class="line"><span style="color:#e1e4e8;">E   1  -  -  1  -           E   1  -  1  1  -</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">==== 有向网 ====</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    A  B  C  D  E               A  B  C  D  E</span></span>
<span class="line"><span style="color:#e1e4e8;">A   -  3  8 11  -           A   -  3  8 11  -</span></span>
<span class="line"><span style="color:#e1e4e8;">B   -  -  7  4  1           B   -  -  7  4  1</span></span>
<span class="line"><span style="color:#e1e4e8;">C   -  5  -  - 17   ===&gt;    C   -  5  -  - 17</span></span>
<span class="line"><span style="color:#e1e4e8;">D   -  -  -  -  -           D   -  -  -  -  -</span></span>
<span class="line"><span style="color:#e1e4e8;">E   6  -  -  4  -           E   6  -  8  4  -</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">==== 有向图 ====</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    A  B  C  D  E               A  B  C  D  E</span></span>
<span class="line"><span style="color:#24292e;">A   -  1  1  1  -           A   -  1  1  1  -</span></span>
<span class="line"><span style="color:#24292e;">B   -  -  1  1  1           B   -  -  1  1  1</span></span>
<span class="line"><span style="color:#24292e;">C   -  1  -  -  1   ===&gt;    C   -  1  -  -  1</span></span>
<span class="line"><span style="color:#24292e;">D   -  -  -  -  -           D   -  -  -  -  -</span></span>
<span class="line"><span style="color:#24292e;">E   1  -  -  1  -           E   1  -  1  1  -</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">==== 有向网 ====</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    A  B  C  D  E               A  B  C  D  E</span></span>
<span class="line"><span style="color:#24292e;">A   -  3  8 11  -           A   -  3  8 11  -</span></span>
<span class="line"><span style="color:#24292e;">B   -  -  7  4  1           B   -  -  7  4  1</span></span>
<span class="line"><span style="color:#24292e;">C   -  5  -  - 17   ===&gt;    C   -  5  -  - 17</span></span>
<span class="line"><span style="color:#24292e;">D   -  -  -  -  -           D   -  -  -  -  -</span></span>
<span class="line"><span style="color:#24292e;">E   6  -  -  4  -           E   6  -  8  4  -</span></span></code></pre></div><h2 id="删除边-弧" tabindex="-1">删除边/弧 <a class="header-anchor" href="#删除边-弧" aria-label="Permalink to &quot;删除边/弧&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>标记边/弧为0或INFINITE</p><p>边/弧数量-1</p><p>删除&lt;A,B&gt;边<code>DeleteArc(&amp;G,&#39;A&#39;,&#39;B&#39;)</code></p></div><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 删除边/弧</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * 此删除只是更新边/弧的连通关系</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">DeleteArc</span><span style="color:#E1E4E8;">(MGraph</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">G</span><span style="color:#E1E4E8;">, VertexType </span><span style="color:#FFAB70;">v</span><span style="color:#E1E4E8;">, VertexType </span><span style="color:#FFAB70;">w</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> kv, kw;</span></span>
<span class="line"><span style="color:#E1E4E8;">    VRType adj;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">Boolean</span><span style="color:#E1E4E8;"> found </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">FALSE</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">  // 是否存在待删除的边/弧</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    kv </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">LocateVex</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G, v);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(kv </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span><span style="color:#6A737D;">    // 指定的顶点不存在</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    kw </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">LocateVex</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G, w);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(kw </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span><span style="color:#6A737D;">    // 指定的顶点不存在</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 确定一个非连通标记</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">((</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).kind </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> DG </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).kind </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> UDG) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        adj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">        // 图</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        found </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).arcs[kv][kw].adj </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">((</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).kind </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> DN </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).kind </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> UDN) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        adj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> INFINITE;</span><span style="color:#6A737D;"> // 网</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        found </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).arcs[kv][kw].adj </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> INFINITE;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 标记这两个顶点已断开连接</span></span>
<span class="line"><span style="color:#E1E4E8;">    (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).arcs[kv][kw].adj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> adj;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 如果是无向图/网，需要考虑对称性</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">((</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).kind </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> UDG </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).kind </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> UDN) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).arcs[kw][kv] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).arcs[kv][kw];</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 在找到了指定的弧时，才考虑更新边/弧的数量</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(found) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).arcnum</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">  // 不论有向无向，边/弧数只减一</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 删除边/弧</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * 此删除只是更新边/弧的连通关系</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">DeleteArc</span><span style="color:#24292E;">(MGraph</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">G</span><span style="color:#24292E;">, VertexType </span><span style="color:#E36209;">v</span><span style="color:#24292E;">, VertexType </span><span style="color:#E36209;">w</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> kv, kw;</span></span>
<span class="line"><span style="color:#24292E;">    VRType adj;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">Boolean</span><span style="color:#24292E;"> found </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">FALSE</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">  // 是否存在待删除的边/弧</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    kv </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">LocateVex</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G, v);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(kv </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span><span style="color:#6A737D;">    // 指定的顶点不存在</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    kw </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">LocateVex</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G, w);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(kw </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span><span style="color:#6A737D;">    // 指定的顶点不存在</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 确定一个非连通标记</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">((</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).kind </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> DG </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).kind </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> UDG) {</span></span>
<span class="line"><span style="color:#24292E;">        adj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">        // 图</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        found </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).arcs[kv][kw].adj </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">((</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).kind </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> DN </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).kind </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> UDN) {</span></span>
<span class="line"><span style="color:#24292E;">        adj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> INFINITE;</span><span style="color:#6A737D;"> // 网</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        found </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).arcs[kv][kw].adj </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> INFINITE;</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 标记这两个顶点已断开连接</span></span>
<span class="line"><span style="color:#24292E;">    (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).arcs[kv][kw].adj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> adj;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 如果是无向图/网，需要考虑对称性</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">((</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).kind </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> UDG </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).kind </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> UDN) {</span></span>
<span class="line"><span style="color:#24292E;">        (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).arcs[kw][kv] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).arcs[kv][kw];</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 在找到了指定的弧时，才考虑更新边/弧的数量</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(found) {</span></span>
<span class="line"><span style="color:#24292E;">        (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).arcnum</span><span style="color:#D73A49;">--</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">  // 不论有向无向，边/弧数只减一</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="深度优先遍历-dfs" tabindex="-1">深度优先遍历(DFS) <a class="header-anchor" href="#深度优先遍历-dfs" aria-label="Permalink to &quot;深度优先遍历(DFS)&quot;">​</a></h2><p><img src="`+c+`" alt="img"></p><p>从<code>V1</code>顶点开始访问[V1,V2,V4,V8,V5,V3,V6,V7]</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>1.设置所有的访问状态为false</p><p>2.从第一个顶点开始访问调用<code>DFS</code></p><p>3.对尚未访问的顶点调用<code>DFS</code></p></div><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 深度优先遍历(此处借助递归实现)</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">DFSTraverse</span><span style="color:#E1E4E8;">(MGraph </span><span style="color:#FFAB70;">G</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">Status</span><span style="color:#E1E4E8;">(Visit)(VertexType)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> v;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 使用全局变量VisitFunc，使得DFS不必设置函数指针参数</span></span>
<span class="line"><span style="color:#E1E4E8;">    VisitFunc </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Visit;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 访问标志数组初始化</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(v </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; v </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> G.vexnum; v</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FFAB70;">visited</span><span style="color:#E1E4E8;">[v] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">FALSE</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 此处需要遍历的原因是并不能保证所有顶点都连接在了一起</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(v </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; v </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> G.vexnum; v</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">!</span><span style="color:#FFAB70;">visited</span><span style="color:#E1E4E8;">[v]) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">DFS</span><span style="color:#E1E4E8;">(G, v);</span><span style="color:#6A737D;">  // 对尚未访问的顶点调用DFS</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 深度优先遍历核心函数</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">DFS</span><span style="color:#E1E4E8;">(MGraph </span><span style="color:#FFAB70;">G</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">v</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> w;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 从第v个顶点出发递归地深度优先遍历图G</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">visited</span><span style="color:#E1E4E8;">[v] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">TRUE</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 访问第v个顶点</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">VisitFunc</span><span style="color:#E1E4E8;">(G.vexs[v]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(w </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">FirstAdjVex</span><span style="color:#E1E4E8;">(G, G.vexs[v]);w </span><span style="color:#F97583;">&gt;=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;w </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">NextAdjVex</span><span style="color:#E1E4E8;">(G, G.vexs[v], G.vexs[w]))    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">!</span><span style="color:#FFAB70;">visited</span><span style="color:#E1E4E8;">[w]) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">DFS</span><span style="color:#E1E4E8;">(G, w);</span><span style="color:#6A737D;">  // 对尚未访问的顶点调用DFS</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 深度优先遍历(此处借助递归实现)</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">DFSTraverse</span><span style="color:#24292E;">(MGraph </span><span style="color:#E36209;">G</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">Status</span><span style="color:#24292E;">(Visit)(VertexType)) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> v;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 使用全局变量VisitFunc，使得DFS不必设置函数指针参数</span></span>
<span class="line"><span style="color:#24292E;">    VisitFunc </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Visit;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 访问标志数组初始化</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(v </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; v </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> G.vexnum; v</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#E36209;">visited</span><span style="color:#24292E;">[v] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">FALSE</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 此处需要遍历的原因是并不能保证所有顶点都连接在了一起</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(v </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; v </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> G.vexnum; v</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#E36209;">visited</span><span style="color:#24292E;">[v]) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">DFS</span><span style="color:#24292E;">(G, v);</span><span style="color:#6A737D;">  // 对尚未访问的顶点调用DFS</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 深度优先遍历核心函数</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">DFS</span><span style="color:#24292E;">(MGraph </span><span style="color:#E36209;">G</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">v</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> w;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 从第v个顶点出发递归地深度优先遍历图G</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">visited</span><span style="color:#24292E;">[v] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">TRUE</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 访问第v个顶点</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">VisitFunc</span><span style="color:#24292E;">(G.vexs[v]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(w </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">FirstAdjVex</span><span style="color:#24292E;">(G, G.vexs[v]);w </span><span style="color:#D73A49;">&gt;=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;w </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">NextAdjVex</span><span style="color:#24292E;">(G, G.vexs[v], G.vexs[w]))    {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#E36209;">visited</span><span style="color:#24292E;">[w]) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">DFS</span><span style="color:#24292E;">(G, w);</span><span style="color:#6A737D;">  // 对尚未访问的顶点调用DFS</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="广度优先遍历-bfs" tabindex="-1">广度优先遍历(BFS) <a class="header-anchor" href="#广度优先遍历-bfs" aria-label="Permalink to &quot;广度优先遍历(BFS)&quot;">​</a></h2><p><img src="`+t+`" alt="img"></p><p>从<code>V1</code>顶点开始访问[V1,V2,V3,V4,V5,V6,V7,V8]</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">    A  B  C  D  E</span></span>
<span class="line"><span style="color:#e1e4e8;">A   -  1  1  1  -</span></span>
<span class="line"><span style="color:#e1e4e8;">B   -  -  1  1  1</span></span>
<span class="line"><span style="color:#e1e4e8;">C   -  1  -  -  1</span></span>
<span class="line"><span style="color:#e1e4e8;">D   -  -  -  -  -</span></span>
<span class="line"><span style="color:#e1e4e8;">E   1  -  1  1  -</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">    A  B  C  D  E</span></span>
<span class="line"><span style="color:#24292e;">A   -  1  1  1  -</span></span>
<span class="line"><span style="color:#24292e;">B   -  -  1  1  1</span></span>
<span class="line"><span style="color:#24292e;">C   -  1  -  -  1</span></span>
<span class="line"><span style="color:#24292e;">D   -  -  -  -  -</span></span>
<span class="line"><span style="color:#24292e;">E   1  -  1  1  -</span></span></code></pre></div><p>A入队，队列Q=[A]</p><p>A出队，u = A；访问顶点A。队列Q=[]</p><p>访问A的首个邻接点B,访问B结点，B结点入队Q=[B]</p><p>w=2(从B开始查找的邻接点C所在下标),访问C结点，C结点入队Q=[B,C]</p><p>w=3(从C开始查找的邻接点D所在下标),访问D结点，D结点入队Q=[B,C,D]</p><p>w=-1(从D开始查找的邻接点查找失败)</p><p>队列不为空，弹出B</p><p>B的首个邻接点C，C已被访问</p><p>w=2(从C开始查找的邻接点D所在下标)，D已被访问</p><p>w=3(从D开始查找的邻接点E所在下标)，访问E结点</p><p>访问顺序为ABCDE</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 广度优先遍历(此处借助队列实现)</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">BFSTraverse</span><span style="color:#E1E4E8;">(MGraph </span><span style="color:#FFAB70;">G</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">Status</span><span style="color:#E1E4E8;">(Visit)(VertexType)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> v, w;</span></span>
<span class="line"><span style="color:#E1E4E8;">    LinkQueue Q;</span></span>
<span class="line"><span style="color:#E1E4E8;">    QElemType u;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 初始化为未访问</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(v </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; v </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> G.vexnum; v</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FFAB70;">visited</span><span style="color:#E1E4E8;">[v] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">FALSE</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 置空辅助队列</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">InitQueue</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">Q);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(v </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; v </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> G.vexnum; v</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 如果该顶点已访问过，则直接忽略</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">visited</span><span style="color:#E1E4E8;">[v]) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">continue</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 标记该顶点已访问</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FFAB70;">visited</span><span style="color:#E1E4E8;">[v] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">TRUE</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 访问顶点</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">Visit</span><span style="color:#E1E4E8;">(G.vexs[v]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">EnQueue</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">Q, v);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">!</span><span style="color:#B392F0;">QueueEmpty</span><span style="color:#E1E4E8;">(Q)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">DeQueue</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">Q, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">u);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 先集中访问顶点v的邻接顶点，随后再访问邻接顶点的邻接顶点</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(w </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">FirstAdjVex</span><span style="color:#E1E4E8;">(G, G.vexs[u]);w </span><span style="color:#F97583;">&gt;=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;w </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">NextAdjVex</span><span style="color:#E1E4E8;">(G, G.vexs[u], G.vexs[w])) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">!</span><span style="color:#FFAB70;">visited</span><span style="color:#E1E4E8;">[w]) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#FFAB70;">visited</span><span style="color:#E1E4E8;">[w] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">TRUE</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#B392F0;">Visit</span><span style="color:#E1E4E8;">(G.vexs[w]);</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#B392F0;">EnQueue</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">Q, w);</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 广度优先遍历(此处借助队列实现)</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">BFSTraverse</span><span style="color:#24292E;">(MGraph </span><span style="color:#E36209;">G</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">Status</span><span style="color:#24292E;">(Visit)(VertexType)) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> v, w;</span></span>
<span class="line"><span style="color:#24292E;">    LinkQueue Q;</span></span>
<span class="line"><span style="color:#24292E;">    QElemType u;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 初始化为未访问</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(v </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; v </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> G.vexnum; v</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#E36209;">visited</span><span style="color:#24292E;">[v] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">FALSE</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 置空辅助队列</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">InitQueue</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">Q);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(v </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; v </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> G.vexnum; v</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 如果该顶点已访问过，则直接忽略</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#E36209;">visited</span><span style="color:#24292E;">[v]) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">continue</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 标记该顶点已访问</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#E36209;">visited</span><span style="color:#24292E;">[v] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">TRUE</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 访问顶点</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">Visit</span><span style="color:#24292E;">(G.vexs[v]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">EnQueue</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">Q, v);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">while</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#6F42C1;">QueueEmpty</span><span style="color:#24292E;">(Q)) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">DeQueue</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">Q, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">u);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 先集中访问顶点v的邻接顶点，随后再访问邻接顶点的邻接顶点</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(w </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">FirstAdjVex</span><span style="color:#24292E;">(G, G.vexs[u]);w </span><span style="color:#D73A49;">&gt;=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;w </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">NextAdjVex</span><span style="color:#24292E;">(G, G.vexs[u], G.vexs[w])) {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#E36209;">visited</span><span style="color:#24292E;">[w]) {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#E36209;">visited</span><span style="color:#24292E;">[w] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">TRUE</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6F42C1;">Visit</span><span style="color:#24292E;">(G.vexs[w]);</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6F42C1;">EnQueue</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">Q, w);</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,95),y=[E];function i(F,D,A,d,C,v){return n(),a("div",null,y)}const G=s(r,[["render",i]]);export{B as __pageData,G as default};
