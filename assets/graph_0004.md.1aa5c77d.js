import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.91000686.js";const p="/data_structure/assets/2-220H41529315O.fea576f7.gif",d=JSON.parse('{"title":"图的邻接多重表存储表示","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"graph/0004.md","filePath":"graph/0004.md"}'),o={name:"graph/0004.md"},e=l('<h1 id="图的邻接多重表存储表示" tabindex="-1">图的邻接多重表存储表示 <a class="header-anchor" href="#图的邻接多重表存储表示" aria-label="Permalink to &quot;图的邻接多重表存储表示&quot;">​</a></h1><p>邻接多重表（Adjacency Multilist）是一种专门存储无向图（网）的结构。</p><p>邻接多重表存储无向图的方式，可以看作是邻接表和十字链表的结合体，具体来讲就是：将图中的所有顶点存储到顺序表（也可以用链表）中，同时为每个顶点配备一个链表，链表的各个结点中存储的都是和当前顶点有直接关联的边。</p><p><img src="'+p+`" alt="img"></p><h2 id="结构定义" tabindex="-1">结构定义 <a class="header-anchor" href="#结构定义" aria-label="Permalink to &quot;结构定义&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/* 宏定义 */</span></span>
<span class="line"><span style="color:#F97583;">#define</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">MAX_VERTEX_NUM</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">26</span><span style="color:#6A737D;">                       // 最大顶点个数</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 图的类型</span></span>
<span class="line"><span style="color:#F97583;">typedef</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">enum</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    DG,</span><span style="color:#6A737D;">     // 0-有向图；此处不支持</span></span>
<span class="line"><span style="color:#E1E4E8;">    DN,</span><span style="color:#6A737D;">     // 1-有向网(带权值)；此处不支持</span></span>
<span class="line"><span style="color:#E1E4E8;">    UDG,</span><span style="color:#6A737D;">    // 2-无向图</span></span>
<span class="line"><span style="color:#E1E4E8;">    UDN</span><span style="color:#6A737D;">     // 3-无向网(带权值)</span></span>
<span class="line"><span style="color:#E1E4E8;">} GraphKind;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 无向图（邻接多重表）类型定义 */</span></span>
<span class="line"><span style="color:#F97583;">typedef</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">enum</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    unvisit, visit</span></span>
<span class="line"><span style="color:#E1E4E8;">} VisitIf;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 顶点类型</span></span>
<span class="line"><span style="color:#F97583;">typedef</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">char</span><span style="color:#E1E4E8;"> VertexType;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 边的相关附加信息</span></span>
<span class="line"><span style="color:#F97583;">typedef</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">    /*</span></span>
<span class="line"><span style="color:#6A737D;">     * 注：</span></span>
<span class="line"><span style="color:#6A737D;">     * 教材中给出的结构只考虑了无权图，而没考虑有权图(网)。</span></span>
<span class="line"><span style="color:#6A737D;">     * 这里为了把“网”的情形也考虑进去，特在附加信息中增加了&quot;权重&quot;属性。</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> weight;</span></span>
<span class="line"><span style="color:#E1E4E8;">} InfoType;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 边结点 */</span></span>
<span class="line"><span style="color:#F97583;">typedef</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> EBox {</span></span>
<span class="line"><span style="color:#E1E4E8;">    VisitIf mark;</span><span style="color:#6A737D;">       // 访问标记</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> ivex;</span><span style="color:#6A737D;">           // 该边依附的两个顶点的位置</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> jvex;</span><span style="color:#6A737D;">           // 该边依附的两个顶点的位置</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> EBox</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> ilink;</span><span style="color:#6A737D;"> // 分别指向依附这两个顶点的下一条边</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> EBox</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> jlink;</span><span style="color:#6A737D;"> // 分别指向依附这两个顶点的下一条边</span></span>
<span class="line"><span style="color:#E1E4E8;">    InfoType</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> info;</span></span>
<span class="line"><span style="color:#E1E4E8;">} EBox;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 每个链表的头结点</span></span>
<span class="line"><span style="color:#F97583;">typedef</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> VexBox {</span></span>
<span class="line"><span style="color:#E1E4E8;">    VertexType data;</span><span style="color:#6A737D;">    // 顶点信息</span></span>
<span class="line"><span style="color:#E1E4E8;">    EBox</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> firstedge;</span><span style="color:#6A737D;">    // 指向第一条依附该顶点的边的指针</span></span>
<span class="line"><span style="color:#E1E4E8;">} VexBox;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 图的邻接多重表存储表示类型定义 */</span></span>
<span class="line"><span style="color:#F97583;">typedef</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    VexBox </span><span style="color:#FFAB70;">adjmulist</span><span style="color:#E1E4E8;">[MAX_VERTEX_NUM];</span><span style="color:#6A737D;">   // 表头向量</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> vexnum, edgenum;</span><span style="color:#6A737D;">                // 图/网的顶点数和边数</span></span>
<span class="line"><span style="color:#E1E4E8;">    GraphKind kind;</span><span style="color:#6A737D;">                     // 图的类型标志</span></span>
<span class="line"><span style="color:#E1E4E8;">} AMLGraph;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 边/弧上是否存在附加信息</span></span>
<span class="line"><span style="color:#F97583;">extern</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Boolean</span><span style="color:#E1E4E8;"> IncInfo;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/* 宏定义 */</span></span>
<span class="line"><span style="color:#D73A49;">#define</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MAX_VERTEX_NUM</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">26</span><span style="color:#6A737D;">                       // 最大顶点个数</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 图的类型</span></span>
<span class="line"><span style="color:#D73A49;">typedef</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">enum</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    DG,</span><span style="color:#6A737D;">     // 0-有向图；此处不支持</span></span>
<span class="line"><span style="color:#24292E;">    DN,</span><span style="color:#6A737D;">     // 1-有向网(带权值)；此处不支持</span></span>
<span class="line"><span style="color:#24292E;">    UDG,</span><span style="color:#6A737D;">    // 2-无向图</span></span>
<span class="line"><span style="color:#24292E;">    UDN</span><span style="color:#6A737D;">     // 3-无向网(带权值)</span></span>
<span class="line"><span style="color:#24292E;">} GraphKind;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 无向图（邻接多重表）类型定义 */</span></span>
<span class="line"><span style="color:#D73A49;">typedef</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">enum</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    unvisit, visit</span></span>
<span class="line"><span style="color:#24292E;">} VisitIf;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 顶点类型</span></span>
<span class="line"><span style="color:#D73A49;">typedef</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">char</span><span style="color:#24292E;"> VertexType;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 边的相关附加信息</span></span>
<span class="line"><span style="color:#D73A49;">typedef</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">struct</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6A737D;">    /*</span></span>
<span class="line"><span style="color:#6A737D;">     * 注：</span></span>
<span class="line"><span style="color:#6A737D;">     * 教材中给出的结构只考虑了无权图，而没考虑有权图(网)。</span></span>
<span class="line"><span style="color:#6A737D;">     * 这里为了把“网”的情形也考虑进去，特在附加信息中增加了&quot;权重&quot;属性。</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> weight;</span></span>
<span class="line"><span style="color:#24292E;">} InfoType;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 边结点 */</span></span>
<span class="line"><span style="color:#D73A49;">typedef</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">struct</span><span style="color:#24292E;"> EBox {</span></span>
<span class="line"><span style="color:#24292E;">    VisitIf mark;</span><span style="color:#6A737D;">       // 访问标记</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> ivex;</span><span style="color:#6A737D;">           // 该边依附的两个顶点的位置</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> jvex;</span><span style="color:#6A737D;">           // 该边依附的两个顶点的位置</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">struct</span><span style="color:#24292E;"> EBox</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> ilink;</span><span style="color:#6A737D;"> // 分别指向依附这两个顶点的下一条边</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">struct</span><span style="color:#24292E;"> EBox</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> jlink;</span><span style="color:#6A737D;"> // 分别指向依附这两个顶点的下一条边</span></span>
<span class="line"><span style="color:#24292E;">    InfoType</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> info;</span></span>
<span class="line"><span style="color:#24292E;">} EBox;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 每个链表的头结点</span></span>
<span class="line"><span style="color:#D73A49;">typedef</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">struct</span><span style="color:#24292E;"> VexBox {</span></span>
<span class="line"><span style="color:#24292E;">    VertexType data;</span><span style="color:#6A737D;">    // 顶点信息</span></span>
<span class="line"><span style="color:#24292E;">    EBox</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> firstedge;</span><span style="color:#6A737D;">    // 指向第一条依附该顶点的边的指针</span></span>
<span class="line"><span style="color:#24292E;">} VexBox;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 图的邻接多重表存储表示类型定义 */</span></span>
<span class="line"><span style="color:#D73A49;">typedef</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">struct</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    VexBox </span><span style="color:#E36209;">adjmulist</span><span style="color:#24292E;">[MAX_VERTEX_NUM];</span><span style="color:#6A737D;">   // 表头向量</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> vexnum, edgenum;</span><span style="color:#6A737D;">                // 图/网的顶点数和边数</span></span>
<span class="line"><span style="color:#24292E;">    GraphKind kind;</span><span style="color:#6A737D;">                     // 图的类型标志</span></span>
<span class="line"><span style="color:#24292E;">} AMLGraph;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 边/弧上是否存在附加信息</span></span>
<span class="line"><span style="color:#D73A49;">extern</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Boolean</span><span style="color:#24292E;"> IncInfo;</span></span></code></pre></div><h2 id="创建图-表" tabindex="-1">创建图/表 <a class="header-anchor" href="#创建图-表" aria-label="Permalink to &quot;创建图/表&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 创建</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">CreateGraph</span><span style="color:#E1E4E8;">(AMLGraph</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">G</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">char*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">path</span><span style="color:#F97583;">[]</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> readFromConsole;</span><span style="color:#6A737D;">    // 是否从控制台读取数据</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> kind;</span></span>
<span class="line"><span style="color:#E1E4E8;">    Status flag;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;请输入图的类型(2-无向图 │ 3-无向网)：&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">scanf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%d</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">kind);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 类型不合规(只接受无向的图/网)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(kind </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> kind </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 如果没有文件路径信息，则从控制台读取输入</span></span>
<span class="line"><span style="color:#E1E4E8;">    readFromConsole </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (path </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">strcmp</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">path</span><span style="color:#E1E4E8;">[kind], </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 需要从文件读取</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(readFromConsole) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).kind </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> kind;</span><span style="color:#6A737D;">   // 记录图/网的类型</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 打开文件，准备读取测试数据</span></span>
<span class="line"><span style="color:#E1E4E8;">        fp </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fopen</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">path</span><span style="color:#E1E4E8;">[kind], </span><span style="color:#9ECBFF;">&quot;r&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(fp </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 录入图的类型</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">ReadData</span><span style="color:#E1E4E8;">(fp, </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%d</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">((</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).kind));</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 随机创建无向图或无向网的一种</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">switch</span><span style="color:#E1E4E8;">((</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).kind) {</span></span>
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
<span class="line"><span style="color:#6A737D;"> * 创建</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">CreateGraph</span><span style="color:#24292E;">(AMLGraph</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">G</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">char*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">path</span><span style="color:#D73A49;">[]</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> readFromConsole;</span><span style="color:#6A737D;">    // 是否从控制台读取数据</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> kind;</span></span>
<span class="line"><span style="color:#24292E;">    Status flag;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;请输入图的类型(2-无向图 │ 3-无向网)：&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">scanf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%d</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">kind);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 类型不合规(只接受无向的图/网)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(kind </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> kind </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 如果没有文件路径信息，则从控制台读取输入</span></span>
<span class="line"><span style="color:#24292E;">    readFromConsole </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (path </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">strcmp</span><span style="color:#24292E;">(</span><span style="color:#E36209;">path</span><span style="color:#24292E;">[kind], </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 需要从文件读取</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(readFromConsole) {</span></span>
<span class="line"><span style="color:#24292E;">        (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).kind </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> kind;</span><span style="color:#6A737D;">   // 记录图/网的类型</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 打开文件，准备读取测试数据</span></span>
<span class="line"><span style="color:#24292E;">        fp </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fopen</span><span style="color:#24292E;">(</span><span style="color:#E36209;">path</span><span style="color:#24292E;">[kind], </span><span style="color:#032F62;">&quot;r&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(fp </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 录入图的类型</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">ReadData</span><span style="color:#24292E;">(fp, </span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%d</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">((</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).kind));</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 随机创建无向图或无向网的一种</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">switch</span><span style="color:#24292E;">((</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).kind) {</span></span>
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
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="录入边的相关附加信息" tabindex="-1">录入边的相关附加信息 <a class="header-anchor" href="#录入边的相关附加信息" aria-label="Permalink to &quot;录入边的相关附加信息&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 录入边的相关附加信息</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Input</span><span style="color:#E1E4E8;">(AMLGraph </span><span style="color:#FFAB70;">G</span><span style="color:#E1E4E8;">, InfoType</span><span style="color:#F97583;">**</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">info</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> weight;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 在&quot;网&quot;的情形下需要录入权值信息</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(G.kind </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> UDN) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">info </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (InfoType</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">) </span><span style="color:#B392F0;">malloc</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">sizeof</span><span style="color:#E1E4E8;">(InfoType));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(fp </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">scanf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%d</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">weight);</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">ReadData</span><span style="color:#E1E4E8;">(fp, </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%d</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">weight);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">info)-&gt;weight </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> weight;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 录入边的相关附加信息</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Input</span><span style="color:#24292E;">(AMLGraph </span><span style="color:#E36209;">G</span><span style="color:#24292E;">, InfoType</span><span style="color:#D73A49;">**</span><span style="color:#24292E;"> </span><span style="color:#E36209;">info</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> weight;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 在&quot;网&quot;的情形下需要录入权值信息</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(G.kind </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> UDN) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">info </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (InfoType</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">) </span><span style="color:#6F42C1;">malloc</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">sizeof</span><span style="color:#24292E;">(InfoType));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(fp </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">scanf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%d</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">weight);</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">ReadData</span><span style="color:#24292E;">(fp, </span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%d</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">weight);</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">info)-&gt;weight </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> weight;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="查找" tabindex="-1">查找 <a class="header-anchor" href="#查找" aria-label="Permalink to &quot;查找&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 查找</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * 返回顶点u在图/网中的位置</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">LocateVex</span><span style="color:#E1E4E8;">(AMLGraph </span><span style="color:#FFAB70;">G</span><span style="color:#E1E4E8;">, VertexType </span><span style="color:#FFAB70;">u</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> G.vexnum; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(G.adjmulist[i].data </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> u) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> i;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 查找</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * 返回顶点u在图/网中的位置</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">LocateVex</span><span style="color:#24292E;">(AMLGraph </span><span style="color:#E36209;">G</span><span style="color:#24292E;">, VertexType </span><span style="color:#E36209;">u</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> G.vexnum; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(G.adjmulist[i].data </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> u) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> i;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="构造一个边结点" tabindex="-1">构造一个边结点 <a class="header-anchor" href="#构造一个边结点" aria-label="Permalink to &quot;构造一个边结点&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 构造一个边结点(仅限内部使用)</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> EBox</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">newEBoxPtr</span><span style="color:#E1E4E8;">(VisitIf </span><span style="color:#FFAB70;">mark</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">ivex</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">jvex</span><span style="color:#E1E4E8;">, EBox</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">ilink</span><span style="color:#E1E4E8;">, EBox</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">jlink</span><span style="color:#E1E4E8;">, InfoType</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">info</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    EBox</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (EBox</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">) </span><span style="color:#B392F0;">malloc</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">sizeof</span><span style="color:#E1E4E8;">(EBox));</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">p) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">exit</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    p-&gt;mark </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> mark;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    p-&gt;ivex </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ivex;</span></span>
<span class="line"><span style="color:#E1E4E8;">    p-&gt;jvex </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> jvex;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    p-&gt;ilink </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ilink;</span></span>
<span class="line"><span style="color:#E1E4E8;">    p-&gt;jlink </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> jlink;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    p-&gt;info </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> info;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 构造一个边结点(仅限内部使用)</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">static</span><span style="color:#24292E;"> EBox</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">newEBoxPtr</span><span style="color:#24292E;">(VisitIf </span><span style="color:#E36209;">mark</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">ivex</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">jvex</span><span style="color:#24292E;">, EBox</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">ilink</span><span style="color:#24292E;">, EBox</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">jlink</span><span style="color:#24292E;">, InfoType</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">info</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    EBox</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (EBox</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">) </span><span style="color:#6F42C1;">malloc</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">sizeof</span><span style="color:#24292E;">(EBox));</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">p) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">exit</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    p-&gt;mark </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> mark;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    p-&gt;ivex </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ivex;</span></span>
<span class="line"><span style="color:#24292E;">    p-&gt;jvex </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> jvex;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    p-&gt;ilink </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ilink;</span></span>
<span class="line"><span style="color:#24292E;">    p-&gt;jlink </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> jlink;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    p-&gt;info </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> info;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> p;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="插入边" tabindex="-1">插入边 <a class="header-anchor" href="#插入边" aria-label="Permalink to &quot;插入边&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 插入边&lt;v, w&gt;</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * 当前图/网是无向的，且由于特殊的结构，使得插入一条边时只需要增加一对顶点关系，边的数量依然增一。</span></span>
<span class="line"><span style="color:#6A737D;"> * 对于图/网来说，可以在可变参数中列出边的附加信息。</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * 注：此处接收的参数与MGraph有些不一样：网的附加信息中包含了各条边的权值。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">InsertArc</span><span style="color:#E1E4E8;">(AMLGraph</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">G</span><span style="color:#E1E4E8;">, VertexType </span><span style="color:#FFAB70;">v</span><span style="color:#E1E4E8;">, VertexType </span><span style="color:#FFAB70;">w</span><span style="color:#E1E4E8;">, ...) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> tail, head, k;</span></span>
<span class="line"><span style="color:#E1E4E8;">    EBox</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"><span style="color:#E1E4E8;">    EBox</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> pre;</span></span>
<span class="line"><span style="color:#E1E4E8;">    EBox</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> r;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">Boolean</span><span style="color:#E1E4E8;"> overlay </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">FALSE</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">   // 是否为覆盖添加</span></span>
<span class="line"><span style="color:#E1E4E8;">    InfoType</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> info </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">     // 边的附加信息</span></span>
<span class="line"><span style="color:#E1E4E8;">    va_list ap;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    tail </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">LocateVex</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G, v);</span><span style="color:#6A737D;"> // 获取顶点v在顶点集中的位置</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(tail </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span><span style="color:#6A737D;">  // 指定的顶点不存在</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    head </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">LocateVex</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G, w);</span><span style="color:#6A737D;"> // 获取顶点w在顶点集中的位置</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(head </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span><span style="color:#6A737D;">  // 指定的顶点不存在</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 拒绝环</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(tail </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> head) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 如果边上存在附加信息</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(IncInfo) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">va_start</span><span style="color:#E1E4E8;">(ap, w);</span><span style="color:#6A737D;">                // 在w后查询首个可变参数</span></span>
<span class="line"><span style="color:#E1E4E8;">        info </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">va_arg</span><span style="color:#E1E4E8;">(ap, InfoType</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">);</span><span style="color:#6A737D;">   // 获取附加信息</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">va_end</span><span style="color:#E1E4E8;">(ap);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /* 接下来，需要查找合适的插入位置 */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    pre </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> G-&gt;adjmulist[tail].firstedge;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;">(r </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(r-&gt;ivex </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> tail </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> r-&gt;jvex </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> head) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            pre </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r;</span></span>
<span class="line"><span style="color:#E1E4E8;">            r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r-&gt;ilink;</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(r-&gt;jvex </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> tail </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> r-&gt;ivex </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> head) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            pre </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r;</span></span>
<span class="line"><span style="color:#E1E4E8;">            r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r-&gt;jlink;</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(r </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> r-&gt;ivex </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> tail </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> r-&gt;jvex </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> head) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        r-&gt;info </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> info;</span><span style="color:#6A737D;"> // 复用该结点</span></span>
<span class="line"><span style="color:#E1E4E8;">        overlay </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">TRUE</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;"> // 发生了覆盖</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(r </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> r-&gt;jvex </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> tail </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> r-&gt;ivex </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> head) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        r-&gt;info </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> info;</span><span style="color:#6A737D;"> // 复用该结点</span></span>
<span class="line"><span style="color:#E1E4E8;">        overlay </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">TRUE</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;"> // 发生了覆盖</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">newEBoxPtr</span><span style="color:#E1E4E8;">(unvisit, tail, head, r, </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">, info);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(pre </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            G-&gt;adjmulist[tail].firstedge </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(pre-&gt;ivex </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> tail) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                pre-&gt;ilink </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"><span style="color:#E1E4E8;">            } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(pre-&gt;jvex </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> tail) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                pre-&gt;jlink </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"><span style="color:#E1E4E8;">            } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// 没有其他可能</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">overlay) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        pre </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> G-&gt;adjmulist[head].firstedge;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;">(r </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(r-&gt;ivex </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> head </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> r-&gt;jvex </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> tail) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                pre </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r;</span></span>
<span class="line"><span style="color:#E1E4E8;">                r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r-&gt;ilink;</span></span>
<span class="line"><span style="color:#E1E4E8;">            } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(r-&gt;jvex </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> head </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> r-&gt;ivex </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> tail) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                pre </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r;</span></span>
<span class="line"><span style="color:#E1E4E8;">                r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r-&gt;jlink;</span></span>
<span class="line"><span style="color:#E1E4E8;">            } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        p-&gt;jlink </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(pre </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            G-&gt;adjmulist[head].firstedge </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(pre-&gt;ivex </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> head) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                pre-&gt;ilink </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"><span style="color:#E1E4E8;">            } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(pre-&gt;jvex </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> head) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                pre-&gt;jlink </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"><span style="color:#E1E4E8;">            } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// 没有其他可能</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).edgenum</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">  // 边数增一</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 插入边&lt;v, w&gt;</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * 当前图/网是无向的，且由于特殊的结构，使得插入一条边时只需要增加一对顶点关系，边的数量依然增一。</span></span>
<span class="line"><span style="color:#6A737D;"> * 对于图/网来说，可以在可变参数中列出边的附加信息。</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * 注：此处接收的参数与MGraph有些不一样：网的附加信息中包含了各条边的权值。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">InsertArc</span><span style="color:#24292E;">(AMLGraph</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">G</span><span style="color:#24292E;">, VertexType </span><span style="color:#E36209;">v</span><span style="color:#24292E;">, VertexType </span><span style="color:#E36209;">w</span><span style="color:#24292E;">, ...) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> tail, head, k;</span></span>
<span class="line"><span style="color:#24292E;">    EBox</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> p;</span></span>
<span class="line"><span style="color:#24292E;">    EBox</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> pre;</span></span>
<span class="line"><span style="color:#24292E;">    EBox</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> r;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">Boolean</span><span style="color:#24292E;"> overlay </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">FALSE</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">   // 是否为覆盖添加</span></span>
<span class="line"><span style="color:#24292E;">    InfoType</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> info </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">     // 边的附加信息</span></span>
<span class="line"><span style="color:#24292E;">    va_list ap;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    tail </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">LocateVex</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G, v);</span><span style="color:#6A737D;"> // 获取顶点v在顶点集中的位置</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(tail </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span><span style="color:#6A737D;">  // 指定的顶点不存在</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    head </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">LocateVex</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G, w);</span><span style="color:#6A737D;"> // 获取顶点w在顶点集中的位置</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(head </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span><span style="color:#6A737D;">  // 指定的顶点不存在</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 拒绝环</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(tail </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> head) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 如果边上存在附加信息</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(IncInfo) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">va_start</span><span style="color:#24292E;">(ap, w);</span><span style="color:#6A737D;">                // 在w后查询首个可变参数</span></span>
<span class="line"><span style="color:#24292E;">        info </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">va_arg</span><span style="color:#24292E;">(ap, InfoType</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">);</span><span style="color:#6A737D;">   // 获取附加信息</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">va_end</span><span style="color:#24292E;">(ap);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /* 接下来，需要查找合适的插入位置 */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    pre </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> G-&gt;adjmulist[tail].firstedge;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">while</span><span style="color:#24292E;">(r </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(r-&gt;ivex </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> tail </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> r-&gt;jvex </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> head) {</span></span>
<span class="line"><span style="color:#24292E;">            pre </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r;</span></span>
<span class="line"><span style="color:#24292E;">            r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r-&gt;ilink;</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(r-&gt;jvex </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> tail </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> r-&gt;ivex </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> head) {</span></span>
<span class="line"><span style="color:#24292E;">            pre </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r;</span></span>
<span class="line"><span style="color:#24292E;">            r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r-&gt;jlink;</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(r </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> r-&gt;ivex </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> tail </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> r-&gt;jvex </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> head) {</span></span>
<span class="line"><span style="color:#24292E;">        r-&gt;info </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> info;</span><span style="color:#6A737D;"> // 复用该结点</span></span>
<span class="line"><span style="color:#24292E;">        overlay </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">TRUE</span><span style="color:#24292E;">;</span><span style="color:#6A737D;"> // 发生了覆盖</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(r </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> r-&gt;jvex </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> tail </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> r-&gt;ivex </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> head) {</span></span>
<span class="line"><span style="color:#24292E;">        r-&gt;info </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> info;</span><span style="color:#6A737D;"> // 复用该结点</span></span>
<span class="line"><span style="color:#24292E;">        overlay </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">TRUE</span><span style="color:#24292E;">;</span><span style="color:#6A737D;"> // 发生了覆盖</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">newEBoxPtr</span><span style="color:#24292E;">(unvisit, tail, head, r, </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">, info);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(pre </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            G-&gt;adjmulist[tail].firstedge </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p;</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(pre-&gt;ivex </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> tail) {</span></span>
<span class="line"><span style="color:#24292E;">                pre-&gt;ilink </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p;</span></span>
<span class="line"><span style="color:#24292E;">            } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(pre-&gt;jvex </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> tail) {</span></span>
<span class="line"><span style="color:#24292E;">                pre-&gt;jlink </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p;</span></span>
<span class="line"><span style="color:#24292E;">            } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// 没有其他可能</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">overlay) {</span></span>
<span class="line"><span style="color:#24292E;">        pre </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> G-&gt;adjmulist[head].firstedge;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">while</span><span style="color:#24292E;">(r </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(r-&gt;ivex </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> head </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> r-&gt;jvex </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> tail) {</span></span>
<span class="line"><span style="color:#24292E;">                pre </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r;</span></span>
<span class="line"><span style="color:#24292E;">                r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r-&gt;ilink;</span></span>
<span class="line"><span style="color:#24292E;">            } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(r-&gt;jvex </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> head </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> r-&gt;ivex </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> tail) {</span></span>
<span class="line"><span style="color:#24292E;">                pre </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r;</span></span>
<span class="line"><span style="color:#24292E;">                r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r-&gt;jlink;</span></span>
<span class="line"><span style="color:#24292E;">            } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        p-&gt;jlink </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(pre </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            G-&gt;adjmulist[head].firstedge </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p;</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(pre-&gt;ivex </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> head) {</span></span>
<span class="line"><span style="color:#24292E;">                pre-&gt;ilink </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p;</span></span>
<span class="line"><span style="color:#24292E;">            } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(pre-&gt;jvex </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> head) {</span></span>
<span class="line"><span style="color:#24292E;">                pre-&gt;jlink </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p;</span></span>
<span class="line"><span style="color:#24292E;">            } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// 没有其他可能</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).edgenum</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">  // 边数增一</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="构造无向图" tabindex="-1">构造无向图 <a class="header-anchor" href="#构造无向图" aria-label="Permalink to &quot;构造无向图&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 构造无向图</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> Status </span><span style="color:#B392F0;">CreateUDG</span><span style="color:#E1E4E8;">(AMLGraph</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">G</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i, k;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> vexnum, arcnum;</span></span>
<span class="line"><span style="color:#E1E4E8;">    VertexType v1, v2;</span></span>
<span class="line"><span style="color:#E1E4E8;">    InfoType</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> info </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).vexnum </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).edgenum </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">ReadData</span><span style="color:#E1E4E8;">(fp, </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%d</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">vexnum);</span><span style="color:#6A737D;"> // 录入顶点数</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">ReadData</span><span style="color:#E1E4E8;">(fp, </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%d</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">arcnum);</span><span style="color:#6A737D;"> // 录入边数</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">ReadData</span><span style="color:#E1E4E8;">(fp, </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%d</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">IncInfo);</span><span style="color:#6A737D;">// 判断边上是否包含附加信息</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 录入顶点集</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> vexnum; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 跳过空白，寻找下一个&quot;可读&quot;符号</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">skipBlank</span><span style="color:#E1E4E8;">(fp);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">ReadData</span><span style="color:#E1E4E8;">(fp, </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%c</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">((</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).adjmulist[i].data));</span></span>
<span class="line"><span style="color:#E1E4E8;">        (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).adjmulist[i].firstedge </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).vexnum</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 录入边的信息</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(k </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; k </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> arcnum; k</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 跳过空白，寻找下一个可读符号</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">skipBlank</span><span style="color:#E1E4E8;">(fp);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">ReadData</span><span style="color:#E1E4E8;">(fp, </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%c%c</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">v1, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">v2);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 如果需要录入边的其他附加信息</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(IncInfo) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 最后录入附加信息</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">Input</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">info);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 插入边&lt;v1, v2&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">InsertArc</span><span style="color:#E1E4E8;">(G, v1, v2, info);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 从文件中读取数据时，最后其实应当判断一下是否读到了足够的信息</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 构造无向图</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">static</span><span style="color:#24292E;"> Status </span><span style="color:#6F42C1;">CreateUDG</span><span style="color:#24292E;">(AMLGraph</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">G</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i, k;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> vexnum, arcnum;</span></span>
<span class="line"><span style="color:#24292E;">    VertexType v1, v2;</span></span>
<span class="line"><span style="color:#24292E;">    InfoType</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> info </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).vexnum </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).edgenum </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">ReadData</span><span style="color:#24292E;">(fp, </span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%d</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">vexnum);</span><span style="color:#6A737D;"> // 录入顶点数</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">ReadData</span><span style="color:#24292E;">(fp, </span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%d</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">arcnum);</span><span style="color:#6A737D;"> // 录入边数</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">ReadData</span><span style="color:#24292E;">(fp, </span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%d</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">IncInfo);</span><span style="color:#6A737D;">// 判断边上是否包含附加信息</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 录入顶点集</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> vexnum; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 跳过空白，寻找下一个&quot;可读&quot;符号</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">skipBlank</span><span style="color:#24292E;">(fp);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">ReadData</span><span style="color:#24292E;">(fp, </span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%c</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">((</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).adjmulist[i].data));</span></span>
<span class="line"><span style="color:#24292E;">        (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).adjmulist[i].firstedge </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).vexnum</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 录入边的信息</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(k </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; k </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> arcnum; k</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 跳过空白，寻找下一个可读符号</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">skipBlank</span><span style="color:#24292E;">(fp);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">ReadData</span><span style="color:#24292E;">(fp, </span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%c%c</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">v1, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">v2);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 如果需要录入边的其他附加信息</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(IncInfo) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 最后录入附加信息</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">Input</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">info);</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 插入边&lt;v1, v2&gt;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">InsertArc</span><span style="color:#24292E;">(G, v1, v2, info);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 从文件中读取数据时，最后其实应当判断一下是否读到了足够的信息</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="构造无向网" tabindex="-1">构造无向网 <a class="header-anchor" href="#构造无向网" aria-label="Permalink to &quot;构造无向网&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 构造无向网</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> Status </span><span style="color:#B392F0;">CreateUDN</span><span style="color:#E1E4E8;">(AMLGraph</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">G</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i, k;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> vexnum, arcnum;</span></span>
<span class="line"><span style="color:#E1E4E8;">    VertexType v1, v2;</span></span>
<span class="line"><span style="color:#E1E4E8;">    InfoType</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> info </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).vexnum </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).edgenum </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">ReadData</span><span style="color:#E1E4E8;">(fp, </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%d</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">vexnum);</span><span style="color:#6A737D;"> // 录入顶点数</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">ReadData</span><span style="color:#E1E4E8;">(fp, </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%d</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">arcnum);</span><span style="color:#6A737D;"> // 录入边数</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">ReadData</span><span style="color:#E1E4E8;">(fp, </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%d</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">IncInfo);</span><span style="color:#6A737D;">// 判断边上是否包含附加信息</span></span>
<span class="line"><span style="color:#E1E4E8;">    IncInfo </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">    // 强制将权值录入到附加信息中</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 录入顶点集</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> vexnum; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 跳过空白，寻找下一个&quot;可读&quot;符号</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">skipBlank</span><span style="color:#E1E4E8;">(fp);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">ReadData</span><span style="color:#E1E4E8;">(fp, </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%c</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">((</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).adjmulist[i].data));</span></span>
<span class="line"><span style="color:#E1E4E8;">        (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).adjmulist[i].firstedge </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).vexnum</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 录入边的信息</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(k </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; k </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> arcnum; k</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 跳过空白，寻找下一个可读符号</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">skipBlank</span><span style="color:#E1E4E8;">(fp);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">ReadData</span><span style="color:#E1E4E8;">(fp, </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%c%c</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">v1, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">v2);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 如果需要录入边的其他附加信息</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(IncInfo) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 最后录入附加信息(此处需要录入网的权值)</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">Input</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">info);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 插入边&lt;v1, v2&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">InsertArc</span><span style="color:#E1E4E8;">(G, v1, v2, info);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 从文件中读取数据时，最后其实应当判断一下是否读到了足够的信息</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 构造无向网</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">static</span><span style="color:#24292E;"> Status </span><span style="color:#6F42C1;">CreateUDN</span><span style="color:#24292E;">(AMLGraph</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">G</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i, k;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> vexnum, arcnum;</span></span>
<span class="line"><span style="color:#24292E;">    VertexType v1, v2;</span></span>
<span class="line"><span style="color:#24292E;">    InfoType</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> info </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).vexnum </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).edgenum </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">ReadData</span><span style="color:#24292E;">(fp, </span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%d</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">vexnum);</span><span style="color:#6A737D;"> // 录入顶点数</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">ReadData</span><span style="color:#24292E;">(fp, </span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%d</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">arcnum);</span><span style="color:#6A737D;"> // 录入边数</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">ReadData</span><span style="color:#24292E;">(fp, </span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%d</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">IncInfo);</span><span style="color:#6A737D;">// 判断边上是否包含附加信息</span></span>
<span class="line"><span style="color:#24292E;">    IncInfo </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">    // 强制将权值录入到附加信息中</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 录入顶点集</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> vexnum; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 跳过空白，寻找下一个&quot;可读&quot;符号</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">skipBlank</span><span style="color:#24292E;">(fp);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">ReadData</span><span style="color:#24292E;">(fp, </span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%c</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">((</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).adjmulist[i].data));</span></span>
<span class="line"><span style="color:#24292E;">        (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).adjmulist[i].firstedge </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).vexnum</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 录入边的信息</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(k </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; k </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> arcnum; k</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 跳过空白，寻找下一个可读符号</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">skipBlank</span><span style="color:#24292E;">(fp);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">ReadData</span><span style="color:#24292E;">(fp, </span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%c%c</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">v1, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">v2);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 如果需要录入边的其他附加信息</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(IncInfo) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 最后录入附加信息(此处需要录入网的权值)</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">Input</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">info);</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 插入边&lt;v1, v2&gt;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">InsertArc</span><span style="color:#24292E;">(G, v1, v2, info);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 从文件中读取数据时，最后其实应当判断一下是否读到了足够的信息</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="销毁" tabindex="-1">销毁 <a class="header-anchor" href="#销毁" aria-label="Permalink to &quot;销毁&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 销毁</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * 邻接表存储的图需要释放内存。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">DestroyGraph</span><span style="color:#E1E4E8;">(AMLGraph</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">G</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> k, other;</span></span>
<span class="line"><span style="color:#E1E4E8;">    EBox</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> p, </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> r;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 逆序遍历</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(k </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> G-&gt;vexnum</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">; k </span><span style="color:#F97583;">&gt;=</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; k</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> G-&gt;adjmulist[k].firstedge;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 删除ivex处为k的边，保留jvex处为k的边</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;">(r </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(r-&gt;ivex </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> k) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                other </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r-&gt;jvex;</span></span>
<span class="line"><span style="color:#E1E4E8;">            } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(r-&gt;jvex</span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;">k) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                other </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r-&gt;ivex;</span></span>
<span class="line"><span style="color:#E1E4E8;">            } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// 不会至此</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 暂时保存这条边</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(other</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">k) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(r-&gt;ivex </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> k) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r-&gt;ilink;</span></span>
<span class="line"><span style="color:#E1E4E8;">                } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(r-&gt;jvex</span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;">k) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r-&gt;jlink;</span></span>
<span class="line"><span style="color:#E1E4E8;">                } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#6A737D;">// 不会至此</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// 删除这条边</span></span>
<span class="line"><span style="color:#E1E4E8;">            } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(p</span><span style="color:#F97583;">==</span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(r-&gt;ivex </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> k) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                        G-&gt;adjmulist[k].firstedge </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r-&gt;ilink;</span></span>
<span class="line"><span style="color:#E1E4E8;">                    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(r-&gt;jvex</span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;">k) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                        G-&gt;adjmulist[k].firstedge </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r-&gt;jlink;</span></span>
<span class="line"><span style="color:#E1E4E8;">                    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#6A737D;">// 不会至此</span></span>
<span class="line"><span style="color:#E1E4E8;">                    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#B392F0;">free</span><span style="color:#E1E4E8;">(r);</span></span>
<span class="line"><span style="color:#E1E4E8;">                    r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> G-&gt;adjmulist[k].firstedge;</span></span>
<span class="line"><span style="color:#E1E4E8;">                } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(p-&gt;ivex</span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;">k) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(r-&gt;ivex </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> k) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                            p-&gt;ilink </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r-&gt;ilink;</span></span>
<span class="line"><span style="color:#E1E4E8;">                        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(r-&gt;jvex</span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;">k) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                            p-&gt;ilink </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r-&gt;jlink;</span></span>
<span class="line"><span style="color:#E1E4E8;">                        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                            </span><span style="color:#6A737D;">// 不会至此</span></span>
<span class="line"><span style="color:#E1E4E8;">                        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#B392F0;">free</span><span style="color:#E1E4E8;">(r);</span></span>
<span class="line"><span style="color:#E1E4E8;">                        r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p-&gt;ilink;</span></span>
<span class="line"><span style="color:#E1E4E8;">                    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(p-&gt;jvex</span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;">k) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(r-&gt;ivex </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> k) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                            p-&gt;jlink </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r-&gt;ilink;</span></span>
<span class="line"><span style="color:#E1E4E8;">                        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(r-&gt;jvex</span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;">k) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                            p-&gt;jlink </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r-&gt;jlink;</span></span>
<span class="line"><span style="color:#E1E4E8;">                        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                            </span><span style="color:#6A737D;">// 不会至此</span></span>
<span class="line"><span style="color:#E1E4E8;">                        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#B392F0;">free</span><span style="color:#E1E4E8;">(r);</span></span>
<span class="line"><span style="color:#E1E4E8;">                        r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p-&gt;jlink;</span></span>
<span class="line"><span style="color:#E1E4E8;">                    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#6A737D;">// 不会至此</span></span>
<span class="line"><span style="color:#E1E4E8;">                    }</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).vexnum </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).edgenum </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    IncInfo </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 销毁</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * 邻接表存储的图需要释放内存。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">DestroyGraph</span><span style="color:#24292E;">(AMLGraph</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">G</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> k, other;</span></span>
<span class="line"><span style="color:#24292E;">    EBox</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> p, </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> r;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 逆序遍历</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(k </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> G-&gt;vexnum</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">; k </span><span style="color:#D73A49;">&gt;=</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; k</span><span style="color:#D73A49;">--</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> G-&gt;adjmulist[k].firstedge;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 删除ivex处为k的边，保留jvex处为k的边</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">while</span><span style="color:#24292E;">(r </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(r-&gt;ivex </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> k) {</span></span>
<span class="line"><span style="color:#24292E;">                other </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r-&gt;jvex;</span></span>
<span class="line"><span style="color:#24292E;">            } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(r-&gt;jvex</span><span style="color:#D73A49;">==</span><span style="color:#24292E;">k) {</span></span>
<span class="line"><span style="color:#24292E;">                other </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r-&gt;ivex;</span></span>
<span class="line"><span style="color:#24292E;">            } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// 不会至此</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 暂时保存这条边</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(other</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">k) {</span></span>
<span class="line"><span style="color:#24292E;">                p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(r-&gt;ivex </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> k) {</span></span>
<span class="line"><span style="color:#24292E;">                    r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r-&gt;ilink;</span></span>
<span class="line"><span style="color:#24292E;">                } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(r-&gt;jvex</span><span style="color:#D73A49;">==</span><span style="color:#24292E;">k) {</span></span>
<span class="line"><span style="color:#24292E;">                    r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r-&gt;jlink;</span></span>
<span class="line"><span style="color:#24292E;">                } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6A737D;">// 不会至此</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// 删除这条边</span></span>
<span class="line"><span style="color:#24292E;">            } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(p</span><span style="color:#D73A49;">==</span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(r-&gt;ivex </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> k) {</span></span>
<span class="line"><span style="color:#24292E;">                        G-&gt;adjmulist[k].firstedge </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r-&gt;ilink;</span></span>
<span class="line"><span style="color:#24292E;">                    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(r-&gt;jvex</span><span style="color:#D73A49;">==</span><span style="color:#24292E;">k) {</span></span>
<span class="line"><span style="color:#24292E;">                        G-&gt;adjmulist[k].firstedge </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r-&gt;jlink;</span></span>
<span class="line"><span style="color:#24292E;">                    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#6A737D;">// 不会至此</span></span>
<span class="line"><span style="color:#24292E;">                    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6F42C1;">free</span><span style="color:#24292E;">(r);</span></span>
<span class="line"><span style="color:#24292E;">                    r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> G-&gt;adjmulist[k].firstedge;</span></span>
<span class="line"><span style="color:#24292E;">                } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(p-&gt;ivex</span><span style="color:#D73A49;">==</span><span style="color:#24292E;">k) {</span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(r-&gt;ivex </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> k) {</span></span>
<span class="line"><span style="color:#24292E;">                            p-&gt;ilink </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r-&gt;ilink;</span></span>
<span class="line"><span style="color:#24292E;">                        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(r-&gt;jvex</span><span style="color:#D73A49;">==</span><span style="color:#24292E;">k) {</span></span>
<span class="line"><span style="color:#24292E;">                            p-&gt;ilink </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r-&gt;jlink;</span></span>
<span class="line"><span style="color:#24292E;">                        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                            </span><span style="color:#6A737D;">// 不会至此</span></span>
<span class="line"><span style="color:#24292E;">                        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#6F42C1;">free</span><span style="color:#24292E;">(r);</span></span>
<span class="line"><span style="color:#24292E;">                        r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p-&gt;ilink;</span></span>
<span class="line"><span style="color:#24292E;">                    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(p-&gt;jvex</span><span style="color:#D73A49;">==</span><span style="color:#24292E;">k) {</span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(r-&gt;ivex </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> k) {</span></span>
<span class="line"><span style="color:#24292E;">                            p-&gt;jlink </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r-&gt;ilink;</span></span>
<span class="line"><span style="color:#24292E;">                        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(r-&gt;jvex</span><span style="color:#D73A49;">==</span><span style="color:#24292E;">k) {</span></span>
<span class="line"><span style="color:#24292E;">                            p-&gt;jlink </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r-&gt;jlink;</span></span>
<span class="line"><span style="color:#24292E;">                        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                            </span><span style="color:#6A737D;">// 不会至此</span></span>
<span class="line"><span style="color:#24292E;">                        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#6F42C1;">free</span><span style="color:#24292E;">(r);</span></span>
<span class="line"><span style="color:#24292E;">                        r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p-&gt;jlink;</span></span>
<span class="line"><span style="color:#24292E;">                    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#6A737D;">// 不会至此</span></span>
<span class="line"><span style="color:#24292E;">                    }</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).vexnum </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).edgenum </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    IncInfo </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="取值" tabindex="-1">取值 <a class="header-anchor" href="#取值" aria-label="Permalink to &quot;取值&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 取值</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * 返回索引v处的顶点值</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">VertexType </span><span style="color:#B392F0;">GetVex</span><span style="color:#E1E4E8;">(AMLGraph </span><span style="color:#FFAB70;">G</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">v</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(v </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> v </span><span style="color:#F97583;">&gt;=</span><span style="color:#E1E4E8;"> G.vexnum) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\0</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">    // 指定的顶点不存在</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> G.adjmulist[v].data;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 取值</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * 返回索引v处的顶点值</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">VertexType </span><span style="color:#6F42C1;">GetVex</span><span style="color:#24292E;">(AMLGraph </span><span style="color:#E36209;">G</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">v</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(v </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> v </span><span style="color:#D73A49;">&gt;=</span><span style="color:#24292E;"> G.vexnum) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;</span><span style="color:#005CC5;">\\0</span><span style="color:#032F62;">&#39;</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">    // 指定的顶点不存在</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> G.adjmulist[v].data;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="赋值" tabindex="-1">赋值 <a class="header-anchor" href="#赋值" aria-label="Permalink to &quot;赋值&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 赋值</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * 将顶点v赋值为value</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">PutVex</span><span style="color:#E1E4E8;">(AMLGraph</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">G</span><span style="color:#E1E4E8;">, VertexType </span><span style="color:#FFAB70;">v</span><span style="color:#E1E4E8;">, VertexType </span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> k;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 首先需要判断该顶点是否存在</span></span>
<span class="line"><span style="color:#E1E4E8;">    k </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">LocateVex</span><span style="color:#E1E4E8;">((</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G), v);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(k </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span><span style="color:#6A737D;">    // 指定的顶点不存在</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 替换头结点</span></span>
<span class="line"><span style="color:#E1E4E8;">    (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).adjmulist[k].data </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> value;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /* 链表中的元素存储的是顶点的位置，所以无需遍历链表来替换目标值 */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 赋值</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * 将顶点v赋值为value</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">PutVex</span><span style="color:#24292E;">(AMLGraph</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">G</span><span style="color:#24292E;">, VertexType </span><span style="color:#E36209;">v</span><span style="color:#24292E;">, VertexType </span><span style="color:#E36209;">value</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> k;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 首先需要判断该顶点是否存在</span></span>
<span class="line"><span style="color:#24292E;">    k </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">LocateVex</span><span style="color:#24292E;">((</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G), v);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(k </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span><span style="color:#6A737D;">    // 指定的顶点不存在</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 替换头结点</span></span>
<span class="line"><span style="color:#24292E;">    (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).adjmulist[k].data </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> value;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /* 链表中的元素存储的是顶点的位置，所以无需遍历链表来替换目标值 */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="首个邻接点" tabindex="-1">首个邻接点 <a class="header-anchor" href="#首个邻接点" aria-label="Permalink to &quot;首个邻接点&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 首个邻接点</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * 返回顶点v的首个邻接点</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">FirstAdjVex</span><span style="color:#E1E4E8;">(AMLGraph </span><span style="color:#FFAB70;">G</span><span style="color:#E1E4E8;">, VertexType </span><span style="color:#FFAB70;">v</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> k;</span></span>
<span class="line"><span style="color:#E1E4E8;">    EBox</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> r;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 首先需要判断该顶点是否存在</span></span>
<span class="line"><span style="color:#E1E4E8;">    k </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">LocateVex</span><span style="color:#E1E4E8;">(G, v);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(k </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">    // 指定的顶点不存在</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> G.adjmulist[k].firstedge;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(r </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(r-&gt;ivex </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> k) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> r-&gt;jvex;</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(r-&gt;jvex</span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;">k) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> r-&gt;ivex;</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">  // 不会至此</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 首个邻接点</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * 返回顶点v的首个邻接点</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">FirstAdjVex</span><span style="color:#24292E;">(AMLGraph </span><span style="color:#E36209;">G</span><span style="color:#24292E;">, VertexType </span><span style="color:#E36209;">v</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> k;</span></span>
<span class="line"><span style="color:#24292E;">    EBox</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> r;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 首先需要判断该顶点是否存在</span></span>
<span class="line"><span style="color:#24292E;">    k </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">LocateVex</span><span style="color:#24292E;">(G, v);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(k </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">    // 指定的顶点不存在</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> G.adjmulist[k].firstedge;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(r </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(r-&gt;ivex </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> k) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> r-&gt;jvex;</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(r-&gt;jvex</span><span style="color:#D73A49;">==</span><span style="color:#24292E;">k) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> r-&gt;ivex;</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">  // 不会至此</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="下一个邻接点" tabindex="-1">下一个邻接点 <a class="header-anchor" href="#下一个邻接点" aria-label="Permalink to &quot;下一个邻接点&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 下一个邻接点</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * 返回顶点v的(相对于w的)下一个邻接点</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">NextAdjVex</span><span style="color:#E1E4E8;">(AMLGraph </span><span style="color:#FFAB70;">G</span><span style="color:#E1E4E8;">, VertexType </span><span style="color:#FFAB70;">v</span><span style="color:#E1E4E8;">, VertexType </span><span style="color:#FFAB70;">w</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> kv, kw;</span></span>
<span class="line"><span style="color:#E1E4E8;">    EBox</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> r;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 首先需要判断该顶点是否存在</span></span>
<span class="line"><span style="color:#E1E4E8;">    kv </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">LocateVex</span><span style="color:#E1E4E8;">(G, v);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(kv </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">    // 指定的顶点不存在</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 首先需要判断该顶点是否存在</span></span>
<span class="line"><span style="color:#E1E4E8;">    kw </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">LocateVex</span><span style="color:#E1E4E8;">(G, w);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(kw </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">    // 指定的顶点不存在</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> G.adjmulist[kv].firstedge;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(r </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">    // 链表为空</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 在链表中查找w</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;">(r </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(r-&gt;ivex </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> kv </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> r-&gt;jvex </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> kw) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r-&gt;ilink;</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(r-&gt;jvex </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> kv </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> r-&gt;ivex </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> kw) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r-&gt;jlink;</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 如果没找到w</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(r </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 如果找到了w，但是w后面没有别的顶点，那么也无法返回邻接点</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(r-&gt;ivex </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> kv </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> r-&gt;jvex </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> kw </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> r-&gt;ilink</span><span style="color:#F97583;">!=</span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r-&gt;ilink;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(r-&gt;jvex </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> kv </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> r-&gt;ivex </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> kw </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> r-&gt;jlink</span><span style="color:#F97583;">!=</span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r-&gt;jlink;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 向相邻的边中获取到相邻顶点</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(r-&gt;ivex</span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;">kv) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> r-&gt;jvex;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(r-&gt;jvex</span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;">kv) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> r-&gt;ivex;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">  // 不会至此</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 下一个邻接点</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * 返回顶点v的(相对于w的)下一个邻接点</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">NextAdjVex</span><span style="color:#24292E;">(AMLGraph </span><span style="color:#E36209;">G</span><span style="color:#24292E;">, VertexType </span><span style="color:#E36209;">v</span><span style="color:#24292E;">, VertexType </span><span style="color:#E36209;">w</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> kv, kw;</span></span>
<span class="line"><span style="color:#24292E;">    EBox</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> r;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 首先需要判断该顶点是否存在</span></span>
<span class="line"><span style="color:#24292E;">    kv </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">LocateVex</span><span style="color:#24292E;">(G, v);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(kv </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">    // 指定的顶点不存在</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 首先需要判断该顶点是否存在</span></span>
<span class="line"><span style="color:#24292E;">    kw </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">LocateVex</span><span style="color:#24292E;">(G, w);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(kw </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">    // 指定的顶点不存在</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> G.adjmulist[kv].firstedge;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(r </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">    // 链表为空</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 在链表中查找w</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">while</span><span style="color:#24292E;">(r </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(r-&gt;ivex </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> kv </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> r-&gt;jvex </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> kw) {</span></span>
<span class="line"><span style="color:#24292E;">            r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r-&gt;ilink;</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(r-&gt;jvex </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> kv </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> r-&gt;ivex </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> kw) {</span></span>
<span class="line"><span style="color:#24292E;">            r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r-&gt;jlink;</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 如果没找到w</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(r </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 如果找到了w，但是w后面没有别的顶点，那么也无法返回邻接点</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(r-&gt;ivex </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> kv </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> r-&gt;jvex </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> kw </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> r-&gt;ilink</span><span style="color:#D73A49;">!=</span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r-&gt;ilink;</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(r-&gt;jvex </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> kv </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> r-&gt;ivex </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> kw </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> r-&gt;jlink</span><span style="color:#D73A49;">!=</span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r-&gt;jlink;</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 向相邻的边中获取到相邻顶点</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(r-&gt;ivex</span><span style="color:#D73A49;">==</span><span style="color:#24292E;">kv) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> r-&gt;jvex;</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(r-&gt;jvex</span><span style="color:#D73A49;">==</span><span style="color:#24292E;">kv) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> r-&gt;ivex;</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">  // 不会至此</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="插入顶点" tabindex="-1">插入顶点 <a class="header-anchor" href="#插入顶点" aria-label="Permalink to &quot;插入顶点&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 插入顶点</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * 将指定的顶点v追加到顶点集中，未建立该顶点与其他顶点的关系</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">InsertVex</span><span style="color:#E1E4E8;">(AMLGraph</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">G</span><span style="color:#E1E4E8;">, VertexType </span><span style="color:#FFAB70;">v</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> k;</span></span>
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
<span class="line"><span style="color:#E1E4E8;">    G-&gt;adjmulist[(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).vexnum].data </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> v;</span></span>
<span class="line"><span style="color:#E1E4E8;">    G-&gt;adjmulist[(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).vexnum].firstedge </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).vexnum</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 插入顶点</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * 将指定的顶点v追加到顶点集中，未建立该顶点与其他顶点的关系</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">InsertVex</span><span style="color:#24292E;">(AMLGraph</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">G</span><span style="color:#24292E;">, VertexType </span><span style="color:#E36209;">v</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> k;</span></span>
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
<span class="line"><span style="color:#24292E;">    G-&gt;adjmulist[(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).vexnum].data </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> v;</span></span>
<span class="line"><span style="color:#24292E;">    G-&gt;adjmulist[(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).vexnum].firstedge </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).vexnum</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="删除顶点" tabindex="-1">删除顶点 <a class="header-anchor" href="#删除顶点" aria-label="Permalink to &quot;删除顶点&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 删除顶点</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * 从顶点集中删除指定的顶点v，注意需要更新相关的顶点关系</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">DeleteVex</span><span style="color:#E1E4E8;">(AMLGraph</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">G</span><span style="color:#E1E4E8;">, VertexType </span><span style="color:#FFAB70;">v</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i, k, other;</span></span>
<span class="line"><span style="color:#E1E4E8;">    EBox</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"><span style="color:#E1E4E8;">    EBox</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> pre, </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> r;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 首先需要判断该顶点是否存在</span></span>
<span class="line"><span style="color:#E1E4E8;">    k </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">LocateVex</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G, v);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(k </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span><span style="color:#6A737D;">    // 指定的顶点不存在</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;">((p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> G-&gt;adjmulist[k].firstedge) </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(p-&gt;ivex </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> k) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            G-&gt;adjmulist[k].firstedge </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p-&gt;ilink;</span></span>
<span class="line"><span style="color:#E1E4E8;">            other </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p-&gt;jvex;</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(p-&gt;jvex </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> k) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            G-&gt;adjmulist[k].firstedge </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p-&gt;jlink;</span></span>
<span class="line"><span style="color:#E1E4E8;">            other </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p-&gt;ivex;</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 没有其他可能</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        pre </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> G-&gt;adjmulist[other].firstedge;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 查找边&lt;other, k&gt;，肯定能找到</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;">(r </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(r-&gt;ivex </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> other </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> r-&gt;jvex </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> k) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                pre </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r;</span></span>
<span class="line"><span style="color:#E1E4E8;">                r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r-&gt;ilink;</span></span>
<span class="line"><span style="color:#E1E4E8;">            } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(r-&gt;jvex </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> other </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> r-&gt;ivex </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> k) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                pre </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r;</span></span>
<span class="line"><span style="color:#E1E4E8;">                r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r-&gt;jlink;</span></span>
<span class="line"><span style="color:#E1E4E8;">            } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(r </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> r-&gt;ivex </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> other </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> r-&gt;jvex </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> k) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(pre </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                G-&gt;adjmulist[other].firstedge </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r-&gt;ilink;</span></span>
<span class="line"><span style="color:#E1E4E8;">            } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(pre-&gt;ivex </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> other) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    pre-&gt;ilink </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r-&gt;ilink;</span></span>
<span class="line"><span style="color:#E1E4E8;">                } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(pre-&gt;jvex </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> other) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    pre-&gt;jlink </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r-&gt;ilink;</span></span>
<span class="line"><span style="color:#E1E4E8;">                } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#6A737D;">// 没有其他可能</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(r </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> r-&gt;jvex </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> other </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> r-&gt;ivex </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> k) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(pre </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                G-&gt;adjmulist[other].firstedge </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r-&gt;jlink;</span></span>
<span class="line"><span style="color:#E1E4E8;">            } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(pre-&gt;ivex </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> other) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    pre-&gt;ilink </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r-&gt;jlink;</span></span>
<span class="line"><span style="color:#E1E4E8;">                } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(pre-&gt;jvex </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> other) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    pre-&gt;jlink </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r-&gt;jlink;</span></span>
<span class="line"><span style="color:#E1E4E8;">                } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#6A737D;">// 没有其他可能</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 不会至此，因为肯定能找到</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">free</span><span style="color:#E1E4E8;">(p);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).edgenum</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">  // 边数减一</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 下标超过k的顶点，需要递减其下标</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> k </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).vexnum; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> G-&gt;adjmulist[i].firstedge;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;">(r</span><span style="color:#F97583;">!=</span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(r-&gt;ivex</span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;">i) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                r-&gt;ivex</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">                r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r-&gt;ilink;</span></span>
<span class="line"><span style="color:#E1E4E8;">            } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(r-&gt;jvex</span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;">i) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                r-&gt;jvex</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">                r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r-&gt;jlink;</span></span>
<span class="line"><span style="color:#E1E4E8;">            } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// 不会至此</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 顶点集前移</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> k </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).vexnum; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        G-&gt;adjmulist[i </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> G-&gt;adjmulist[i];</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 顶点数递减</span></span>
<span class="line"><span style="color:#E1E4E8;">    (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).vexnum</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 删除顶点</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * 从顶点集中删除指定的顶点v，注意需要更新相关的顶点关系</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">DeleteVex</span><span style="color:#24292E;">(AMLGraph</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">G</span><span style="color:#24292E;">, VertexType </span><span style="color:#E36209;">v</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i, k, other;</span></span>
<span class="line"><span style="color:#24292E;">    EBox</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> p;</span></span>
<span class="line"><span style="color:#24292E;">    EBox</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> pre, </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> r;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 首先需要判断该顶点是否存在</span></span>
<span class="line"><span style="color:#24292E;">    k </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">LocateVex</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G, v);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(k </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span><span style="color:#6A737D;">    // 指定的顶点不存在</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">while</span><span style="color:#24292E;">((p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> G-&gt;adjmulist[k].firstedge) </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(p-&gt;ivex </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> k) {</span></span>
<span class="line"><span style="color:#24292E;">            G-&gt;adjmulist[k].firstedge </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p-&gt;ilink;</span></span>
<span class="line"><span style="color:#24292E;">            other </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p-&gt;jvex;</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(p-&gt;jvex </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> k) {</span></span>
<span class="line"><span style="color:#24292E;">            G-&gt;adjmulist[k].firstedge </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p-&gt;jlink;</span></span>
<span class="line"><span style="color:#24292E;">            other </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p-&gt;ivex;</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 没有其他可能</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        pre </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> G-&gt;adjmulist[other].firstedge;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 查找边&lt;other, k&gt;，肯定能找到</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">while</span><span style="color:#24292E;">(r </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(r-&gt;ivex </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> other </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> r-&gt;jvex </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> k) {</span></span>
<span class="line"><span style="color:#24292E;">                pre </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r;</span></span>
<span class="line"><span style="color:#24292E;">                r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r-&gt;ilink;</span></span>
<span class="line"><span style="color:#24292E;">            } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(r-&gt;jvex </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> other </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> r-&gt;ivex </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> k) {</span></span>
<span class="line"><span style="color:#24292E;">                pre </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r;</span></span>
<span class="line"><span style="color:#24292E;">                r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r-&gt;jlink;</span></span>
<span class="line"><span style="color:#24292E;">            } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(r </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> r-&gt;ivex </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> other </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> r-&gt;jvex </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> k) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(pre </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">                G-&gt;adjmulist[other].firstedge </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r-&gt;ilink;</span></span>
<span class="line"><span style="color:#24292E;">            } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(pre-&gt;ivex </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> other) {</span></span>
<span class="line"><span style="color:#24292E;">                    pre-&gt;ilink </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r-&gt;ilink;</span></span>
<span class="line"><span style="color:#24292E;">                } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(pre-&gt;jvex </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> other) {</span></span>
<span class="line"><span style="color:#24292E;">                    pre-&gt;jlink </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r-&gt;ilink;</span></span>
<span class="line"><span style="color:#24292E;">                } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6A737D;">// 没有其他可能</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(r </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> r-&gt;jvex </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> other </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> r-&gt;ivex </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> k) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(pre </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">                G-&gt;adjmulist[other].firstedge </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r-&gt;jlink;</span></span>
<span class="line"><span style="color:#24292E;">            } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(pre-&gt;ivex </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> other) {</span></span>
<span class="line"><span style="color:#24292E;">                    pre-&gt;ilink </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r-&gt;jlink;</span></span>
<span class="line"><span style="color:#24292E;">                } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(pre-&gt;jvex </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> other) {</span></span>
<span class="line"><span style="color:#24292E;">                    pre-&gt;jlink </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r-&gt;jlink;</span></span>
<span class="line"><span style="color:#24292E;">                } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6A737D;">// 没有其他可能</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 不会至此，因为肯定能找到</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">free</span><span style="color:#24292E;">(p);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).edgenum</span><span style="color:#D73A49;">--</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">  // 边数减一</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 下标超过k的顶点，需要递减其下标</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> k </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).vexnum; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> G-&gt;adjmulist[i].firstedge;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">while</span><span style="color:#24292E;">(r</span><span style="color:#D73A49;">!=</span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(r-&gt;ivex</span><span style="color:#D73A49;">==</span><span style="color:#24292E;">i) {</span></span>
<span class="line"><span style="color:#24292E;">                r-&gt;ivex</span><span style="color:#D73A49;">--</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">                r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r-&gt;ilink;</span></span>
<span class="line"><span style="color:#24292E;">            } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(r-&gt;jvex</span><span style="color:#D73A49;">==</span><span style="color:#24292E;">i) {</span></span>
<span class="line"><span style="color:#24292E;">                r-&gt;jvex</span><span style="color:#D73A49;">--</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">                r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r-&gt;jlink;</span></span>
<span class="line"><span style="color:#24292E;">            } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// 不会至此</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 顶点集前移</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> k </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).vexnum; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        G-&gt;adjmulist[i </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> G-&gt;adjmulist[i];</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 顶点数递减</span></span>
<span class="line"><span style="color:#24292E;">    (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).vexnum</span><span style="color:#D73A49;">--</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="删除边" tabindex="-1">删除边 <a class="header-anchor" href="#删除边" aria-label="Permalink to &quot;删除边&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 删除边&lt;v, w&gt;</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">DeleteArc</span><span style="color:#E1E4E8;">(AMLGraph</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">G</span><span style="color:#E1E4E8;">, VertexType </span><span style="color:#FFAB70;">v</span><span style="color:#E1E4E8;">, VertexType </span><span style="color:#FFAB70;">w</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> tail, head;</span></span>
<span class="line"><span style="color:#E1E4E8;">    EBox</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> r;</span></span>
<span class="line"><span style="color:#E1E4E8;">    EBox</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> pre;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    tail </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">LocateVex</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G, v);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(tail </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span><span style="color:#6A737D;">    // 指定的顶点不存在</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    head </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">LocateVex</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G, w);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(head </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span><span style="color:#6A737D;">    // 指定的顶点不存在</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    pre </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> G-&gt;adjmulist[tail].firstedge;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;">(r </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(r-&gt;ivex </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> tail </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> r-&gt;jvex </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> head) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            pre </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r;</span></span>
<span class="line"><span style="color:#E1E4E8;">            r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r-&gt;ilink;</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(r-&gt;jvex </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> tail </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> r-&gt;ivex </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> head) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            pre </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r;</span></span>
<span class="line"><span style="color:#E1E4E8;">            r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r-&gt;jlink;</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(r </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> r-&gt;ivex </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> tail </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> r-&gt;jvex </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> head) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(pre </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            G-&gt;adjmulist[tail].firstedge </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r-&gt;ilink;</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(pre-&gt;ivex </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> tail) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                pre-&gt;ilink </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r-&gt;ilink;</span></span>
<span class="line"><span style="color:#E1E4E8;">            } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(pre-&gt;jvex </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> tail) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                pre-&gt;jlink </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r-&gt;ilink;</span></span>
<span class="line"><span style="color:#E1E4E8;">            } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// 没有其他可能</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(r </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> r-&gt;jvex </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> tail </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> r-&gt;ivex </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> head) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(pre </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            G-&gt;adjmulist[tail].firstedge </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r-&gt;jlink;</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(pre-&gt;ivex </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> tail) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                pre-&gt;ilink </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r-&gt;jlink;</span></span>
<span class="line"><span style="color:#E1E4E8;">            } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(pre-&gt;jvex </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> tail) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                pre-&gt;jlink </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r-&gt;jlink;</span></span>
<span class="line"><span style="color:#E1E4E8;">            } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// 没有其他可能</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span><span style="color:#6A737D;">   // 未找到</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    pre </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> G-&gt;adjmulist[head].firstedge;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;">(r </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(r-&gt;ivex </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> head </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> r-&gt;jvex </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> tail) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            pre </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r;</span></span>
<span class="line"><span style="color:#E1E4E8;">            r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r-&gt;ilink;</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(r-&gt;jvex </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> head </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> r-&gt;ivex </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> tail) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            pre </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r;</span></span>
<span class="line"><span style="color:#E1E4E8;">            r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r-&gt;jlink;</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(r </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> r-&gt;ivex </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> head </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> r-&gt;jvex </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> tail) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(pre </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            G-&gt;adjmulist[head].firstedge </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r-&gt;ilink;</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(pre-&gt;ivex </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> head) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                pre-&gt;ilink </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r-&gt;ilink;</span></span>
<span class="line"><span style="color:#E1E4E8;">            } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(pre-&gt;jvex </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> head) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                pre-&gt;jlink </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r-&gt;ilink;</span></span>
<span class="line"><span style="color:#E1E4E8;">            } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// 没有其他可能</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(r </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> r-&gt;jvex </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> head </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> r-&gt;ivex </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> tail) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(pre </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            G-&gt;adjmulist[head].firstedge </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r-&gt;jlink;</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(pre-&gt;ivex </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> head) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                pre-&gt;ilink </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r-&gt;jlink;</span></span>
<span class="line"><span style="color:#E1E4E8;">            } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(pre-&gt;jvex </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> head) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                pre-&gt;jlink </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> r-&gt;jlink;</span></span>
<span class="line"><span style="color:#E1E4E8;">            } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// 没有其他可能</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 不会至此，因为前面找到了，此处肯定也能找到</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">free</span><span style="color:#E1E4E8;">(r);</span><span style="color:#6A737D;"> // 释放内存</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">G).edgenum</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">  // 边数减一</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 删除边&lt;v, w&gt;</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">DeleteArc</span><span style="color:#24292E;">(AMLGraph</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">G</span><span style="color:#24292E;">, VertexType </span><span style="color:#E36209;">v</span><span style="color:#24292E;">, VertexType </span><span style="color:#E36209;">w</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> tail, head;</span></span>
<span class="line"><span style="color:#24292E;">    EBox</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> r;</span></span>
<span class="line"><span style="color:#24292E;">    EBox</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> pre;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    tail </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">LocateVex</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G, v);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(tail </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span><span style="color:#6A737D;">    // 指定的顶点不存在</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    head </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">LocateVex</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G, w);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(head </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span><span style="color:#6A737D;">    // 指定的顶点不存在</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    pre </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> G-&gt;adjmulist[tail].firstedge;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">while</span><span style="color:#24292E;">(r </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(r-&gt;ivex </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> tail </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> r-&gt;jvex </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> head) {</span></span>
<span class="line"><span style="color:#24292E;">            pre </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r;</span></span>
<span class="line"><span style="color:#24292E;">            r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r-&gt;ilink;</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(r-&gt;jvex </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> tail </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> r-&gt;ivex </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> head) {</span></span>
<span class="line"><span style="color:#24292E;">            pre </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r;</span></span>
<span class="line"><span style="color:#24292E;">            r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r-&gt;jlink;</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(r </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> r-&gt;ivex </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> tail </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> r-&gt;jvex </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> head) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(pre </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            G-&gt;adjmulist[tail].firstedge </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r-&gt;ilink;</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(pre-&gt;ivex </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> tail) {</span></span>
<span class="line"><span style="color:#24292E;">                pre-&gt;ilink </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r-&gt;ilink;</span></span>
<span class="line"><span style="color:#24292E;">            } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(pre-&gt;jvex </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> tail) {</span></span>
<span class="line"><span style="color:#24292E;">                pre-&gt;jlink </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r-&gt;ilink;</span></span>
<span class="line"><span style="color:#24292E;">            } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// 没有其他可能</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(r </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> r-&gt;jvex </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> tail </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> r-&gt;ivex </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> head) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(pre </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            G-&gt;adjmulist[tail].firstedge </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r-&gt;jlink;</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(pre-&gt;ivex </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> tail) {</span></span>
<span class="line"><span style="color:#24292E;">                pre-&gt;ilink </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r-&gt;jlink;</span></span>
<span class="line"><span style="color:#24292E;">            } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(pre-&gt;jvex </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> tail) {</span></span>
<span class="line"><span style="color:#24292E;">                pre-&gt;jlink </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r-&gt;jlink;</span></span>
<span class="line"><span style="color:#24292E;">            } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// 没有其他可能</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span><span style="color:#6A737D;">   // 未找到</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    pre </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> G-&gt;adjmulist[head].firstedge;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">while</span><span style="color:#24292E;">(r </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(r-&gt;ivex </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> head </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> r-&gt;jvex </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> tail) {</span></span>
<span class="line"><span style="color:#24292E;">            pre </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r;</span></span>
<span class="line"><span style="color:#24292E;">            r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r-&gt;ilink;</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(r-&gt;jvex </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> head </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> r-&gt;ivex </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> tail) {</span></span>
<span class="line"><span style="color:#24292E;">            pre </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r;</span></span>
<span class="line"><span style="color:#24292E;">            r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r-&gt;jlink;</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(r </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> r-&gt;ivex </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> head </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> r-&gt;jvex </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> tail) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(pre </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            G-&gt;adjmulist[head].firstedge </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r-&gt;ilink;</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(pre-&gt;ivex </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> head) {</span></span>
<span class="line"><span style="color:#24292E;">                pre-&gt;ilink </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r-&gt;ilink;</span></span>
<span class="line"><span style="color:#24292E;">            } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(pre-&gt;jvex </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> head) {</span></span>
<span class="line"><span style="color:#24292E;">                pre-&gt;jlink </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r-&gt;ilink;</span></span>
<span class="line"><span style="color:#24292E;">            } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// 没有其他可能</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(r </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> r-&gt;jvex </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> head </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> r-&gt;ivex </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> tail) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(pre </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            G-&gt;adjmulist[head].firstedge </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r-&gt;jlink;</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(pre-&gt;ivex </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> head) {</span></span>
<span class="line"><span style="color:#24292E;">                pre-&gt;ilink </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r-&gt;jlink;</span></span>
<span class="line"><span style="color:#24292E;">            } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(pre-&gt;jvex </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> head) {</span></span>
<span class="line"><span style="color:#24292E;">                pre-&gt;jlink </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> r-&gt;jlink;</span></span>
<span class="line"><span style="color:#24292E;">            } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// 没有其他可能</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 不会至此，因为前面找到了，此处肯定也能找到</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">free</span><span style="color:#24292E;">(r);</span><span style="color:#6A737D;"> // 释放内存</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">G).edgenum</span><span style="color:#D73A49;">--</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">  // 边数减一</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="深度优先遍历" tabindex="-1">深度优先遍历 <a class="header-anchor" href="#深度优先遍历" aria-label="Permalink to &quot;深度优先遍历&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 深度优先遍历(此处借助递归实现)</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">DFSTraverse</span><span style="color:#E1E4E8;">(AMLGraph </span><span style="color:#FFAB70;">G</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">Status</span><span style="color:#E1E4E8;">(Visit)(VertexType)) {</span></span>
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
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 深度优先遍历核心函数</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">DFS</span><span style="color:#E1E4E8;">(AMLGraph </span><span style="color:#FFAB70;">G</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">v</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> w;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 从第v个顶点出发递归地深度优先遍历图G</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">visited</span><span style="color:#E1E4E8;">[v] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">TRUE</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 访问第v个顶点</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">VisitFunc</span><span style="color:#E1E4E8;">(G.adjmulist[v].data);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(w </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">FirstAdjVex</span><span style="color:#E1E4E8;">(G, G.adjmulist[v].data);</span></span>
<span class="line"><span style="color:#E1E4E8;">        w </span><span style="color:#F97583;">&gt;=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        w </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">NextAdjVex</span><span style="color:#E1E4E8;">(G, G.adjmulist[v].data, G.adjmulist[w].data)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">!</span><span style="color:#FFAB70;">visited</span><span style="color:#E1E4E8;">[w]) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">DFS</span><span style="color:#E1E4E8;">(G, w);</span><span style="color:#6A737D;">  // 对尚未访问的顶点调用DFS</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 深度优先遍历(此处借助递归实现)</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">DFSTraverse</span><span style="color:#24292E;">(AMLGraph </span><span style="color:#E36209;">G</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">Status</span><span style="color:#24292E;">(Visit)(VertexType)) {</span></span>
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
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 深度优先遍历核心函数</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">DFS</span><span style="color:#24292E;">(AMLGraph </span><span style="color:#E36209;">G</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">v</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> w;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 从第v个顶点出发递归地深度优先遍历图G</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">visited</span><span style="color:#24292E;">[v] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">TRUE</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 访问第v个顶点</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">VisitFunc</span><span style="color:#24292E;">(G.adjmulist[v].data);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(w </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">FirstAdjVex</span><span style="color:#24292E;">(G, G.adjmulist[v].data);</span></span>
<span class="line"><span style="color:#24292E;">        w </span><span style="color:#D73A49;">&gt;=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        w </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">NextAdjVex</span><span style="color:#24292E;">(G, G.adjmulist[v].data, G.adjmulist[w].data)) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#E36209;">visited</span><span style="color:#24292E;">[w]) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">DFS</span><span style="color:#24292E;">(G, w);</span><span style="color:#6A737D;">  // 对尚未访问的顶点调用DFS</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="广度优先遍历" tabindex="-1">广度优先遍历 <a class="header-anchor" href="#广度优先遍历" aria-label="Permalink to &quot;广度优先遍历&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 广度优先遍历(此处借助队列实现)</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">BFSTraverse</span><span style="color:#E1E4E8;">(AMLGraph </span><span style="color:#FFAB70;">G</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">Status</span><span style="color:#E1E4E8;">(Visit)(VertexType)) {</span></span>
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
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">Visit</span><span style="color:#E1E4E8;">(G.adjmulist[v].data);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">EnQueue</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">Q, v);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">!</span><span style="color:#B392F0;">QueueEmpty</span><span style="color:#E1E4E8;">(Q)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">DeQueue</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">Q, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">u);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 先集中访问顶点v的邻接顶点，随后再访问邻接顶点的邻接顶点</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(w </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">FirstAdjVex</span><span style="color:#E1E4E8;">(G, G.adjmulist[u].data);</span></span>
<span class="line"><span style="color:#E1E4E8;">                w </span><span style="color:#F97583;">&gt;=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">                w </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">NextAdjVex</span><span style="color:#E1E4E8;">(G, G.adjmulist[u].data, G.adjmulist[w].data)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">!</span><span style="color:#FFAB70;">visited</span><span style="color:#E1E4E8;">[w]) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#FFAB70;">visited</span><span style="color:#E1E4E8;">[w] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">TRUE</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#B392F0;">Visit</span><span style="color:#E1E4E8;">(G.adjmulist[w].data);</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#B392F0;">EnQueue</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">Q, w);</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 广度优先遍历(此处借助队列实现)</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">BFSTraverse</span><span style="color:#24292E;">(AMLGraph </span><span style="color:#E36209;">G</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">Status</span><span style="color:#24292E;">(Visit)(VertexType)) {</span></span>
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
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">Visit</span><span style="color:#24292E;">(G.adjmulist[v].data);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">EnQueue</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">Q, v);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">while</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#6F42C1;">QueueEmpty</span><span style="color:#24292E;">(Q)) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">DeQueue</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">Q, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">u);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 先集中访问顶点v的邻接顶点，随后再访问邻接顶点的邻接顶点</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(w </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">FirstAdjVex</span><span style="color:#24292E;">(G, G.adjmulist[u].data);</span></span>
<span class="line"><span style="color:#24292E;">                w </span><span style="color:#D73A49;">&gt;=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">                w </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">NextAdjVex</span><span style="color:#24292E;">(G, G.adjmulist[u].data, G.adjmulist[w].data)) {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#E36209;">visited</span><span style="color:#24292E;">[w]) {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#E36209;">visited</span><span style="color:#24292E;">[w] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">TRUE</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6F42C1;">Visit</span><span style="color:#24292E;">(G.adjmulist[w].data);</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6F42C1;">EnQueue</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">Q, w);</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,40),c=[e];function t(r,E,y,i,F,A){return n(),a("div",null,c)}const g=s(o,[["render",t]]);export{d as __pageData,g as default};
