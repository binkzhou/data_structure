import{_ as n,o as a,c as p,Q as l}from"./chunks/framework.91000686.js";const o="/data_structure/assets/image-20231214153621433.84eb756f.png",e="/data_structure/assets/image-20231214153739043.1f0eb51d.png",s="/data_structure/assets/image-20231215113113388.6e96873b.png",c="/data_structure/assets/image-20231215113309188.b8444c62.png",t="/data_structure/assets/image-20231215113404317.fa409150.png",r="/data_structure/assets/image-20231215113433211.14599e76.png",E="/data_structure/assets/image-20231215113511276.b52b69d5.png",y="/data_structure/assets/image-20231215113549468.21e58a5f.png",i="/data_structure/assets/image-20231215113610439.da046489.png",A="/data_structure/assets/image-20231215113701707.a4c55497.png",d="/data_structure/assets/image-20231215113740201.8b531d80.png",g="/data_structure/assets/image-20231215113850955.da8e7cd3.png",F="/data_structure/assets/image-20231215113922970.df02a65c.png",D="/data_structure/assets/image-20231215113950053.9633d9ec.png",m="/data_structure/assets/image-20231215114015336.9fec5c6e.png",_="/data_structure/assets/image-20231215114441934.cb424465.png",R=JSON.parse('{"title":"AOV-网(有向图)的拓扑排序","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"graph/0007.md","filePath":"graph/0007.md"}'),u={name:"graph/0007.md"},h=l('<h1 id="aov-网-有向图-的拓扑排序" tabindex="-1">AOV-网(有向图)的拓扑排序 <a class="header-anchor" href="#aov-网-有向图-的拓扑排序" aria-label="Permalink to &quot;AOV-网(有向图)的拓扑排序&quot;">​</a></h1><p><img src="'+o+'" alt="image-20231214153621433"></p><p><img src="'+e+'" alt="image-20231214153739043"></p><p><strong>AOV网络与拓扑排序</strong></p><ul><li>在网络中选择一个入度为0的顶点输出；</li><li>在图中删除该顶点及所有以该顶点为起点的边；</li><li>重复上述过程，直至所有边均被输出。</li></ul><h2 id="算法图解" tabindex="-1"><strong>算法图解</strong> <a class="header-anchor" href="#算法图解" aria-label="Permalink to &quot;**算法图解**&quot;">​</a></h2><p><img src="'+s+'" alt="image-20231215113113388"></p><p>选择一个入度为0的顶点输出<code>F</code>，删除该顶点及所有以该顶点为起点的边</p><p><img src="'+c+'" alt="image-20231215113309188"></p><p>选择一个入度为0的顶点输出<code>J</code>，删除该顶点及所有以该顶点为起点的边</p><p><img src="'+t+'" alt="image-20231215113404317"></p><p>选择一个入度为0的顶点输出<code>B</code>，删除该顶点及所有以该顶点为起点的边</p><p><img src="'+r+'" alt="image-20231215113433211"></p><p>选择一个入度为0的顶点输出<code>C</code>，删除该顶点及所有以该顶点为起点的边</p><p><img src="'+E+'" alt="image-20231215113511276"></p><p>选择一个入度为0的顶点输出<code>I</code>，删除该顶点及所有以该顶点为起点的边</p><p><img src="'+y+'" alt="image-20231215113549468"></p><p>选择一个入度为0的顶点输出<code>H</code>，删除该顶点及所有以该顶点为起点的边</p><p><img src="'+i+'" alt="image-20231215113610439"></p><p>选择一个入度为0的顶点输出<code>D</code>，删除该顶点及所有以该顶点为起点的边</p><p><img src="'+A+'" alt="image-20231215113701707"></p><p>选择一个入度为0的顶点输出<code>L</code>，删除该顶点及所有以该顶点为起点的边</p><p><img src="'+d+'" alt="image-20231215113740201"></p><p>选择一个入度为0的顶点输出<code>A</code>，删除该顶点及所有以该顶点为起点的边</p><p><img src="'+g+'" alt="image-20231215113850955"></p><p>选择一个入度为0的顶点输出<code>K</code>，删除该顶点及所有以该顶点为起点的边</p><p><img src="'+F+'" alt="image-20231215113922970"></p><p>选择一个入度为0的顶点输出<code>E</code>，删除该顶点及所有以该顶点为起点的边</p><p><img src="'+D+'" alt="image-20231215113950053"></p><p>选择一个入度为0的顶点输出<code>G</code>，删除该顶点及所有以该顶点为起点的边</p><p><img src="'+m+'" alt="image-20231215114015336"></p><p>拓扑序列为：F J B C I H D L A K E G</p><h2 id="计算各顶点的入度" tabindex="-1">计算各顶点的入度 <a class="header-anchor" href="#计算各顶点的入度" aria-label="Permalink to &quot;计算各顶点的入度&quot;">​</a></h2><p><img src="'+s+'" alt="image-20231215113113388"></p><p>对初始化的图求得的入度为</p><p>A入度为3，B入度为1，C的入度为2，D的入度为0，E的入度为1，F的入度为0，G的入度为2，H的入度为2，I的入度为2，J的入度为1，K的入度为1，L的入度为1</p><p><img src="'+_+`" alt="image-20231215114441934"></p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 计算各顶点的入度</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">FindInDegree</span><span style="color:#E1E4E8;">(ALGraph </span><span style="color:#FFAB70;">G</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">indegree</span><span style="color:#E1E4E8;">[MAX_VERTEX_NUM]) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ArcNode</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 初始化所有顶点的入度为0</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> G.vexnum; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FFAB70;">indegree</span><span style="color:#E1E4E8;">[i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 遍历所有顶点</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> G.vexnum; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 指向该顶点的首个邻接点</span></span>
<span class="line"><span style="color:#E1E4E8;">        p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> G.vertices[i].firstarc;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 遍历该顶点的所有邻接点，统计各顶点的入度</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;">(p </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#FFAB70;">indegree</span><span style="color:#E1E4E8;">[p-&gt;adjvex]</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p-&gt;nextarc;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 计算各顶点的入度</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">FindInDegree</span><span style="color:#24292E;">(ALGraph </span><span style="color:#E36209;">G</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">indegree</span><span style="color:#24292E;">[MAX_VERTEX_NUM]) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i;</span></span>
<span class="line"><span style="color:#24292E;">    ArcNode</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> p;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 初始化所有顶点的入度为0</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> G.vexnum; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#E36209;">indegree</span><span style="color:#24292E;">[i] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 遍历所有顶点</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> G.vexnum; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 指向该顶点的首个邻接点</span></span>
<span class="line"><span style="color:#24292E;">        p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> G.vertices[i].firstarc;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 遍历该顶点的所有邻接点，统计各顶点的入度</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">while</span><span style="color:#24292E;">(p </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#E36209;">indegree</span><span style="color:#24292E;">[p-&gt;adjvex]</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p-&gt;nextarc;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="拓扑排序" tabindex="-1">拓扑排序 <a class="header-anchor" href="#拓扑排序" aria-label="Permalink to &quot;拓扑排序&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 如果有向图G无回路，则输出它的一个拓扑序列并返回OK；否则，返回FALSE。</span></span>
<span class="line"><span style="color:#6A737D;"> * 拓扑序列通常不唯一，但是必须保证某些关键节点的先后次序。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">TopologicalSort</span><span style="color:#E1E4E8;">(ALGraph </span><span style="color:#FFAB70;">G</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">topo</span><span style="color:#E1E4E8;">[MAX_VERTEX_NUM]) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i, k, count;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">indegree</span><span style="color:#E1E4E8;">[MAX_VERTEX_NUM];</span></span>
<span class="line"><span style="color:#E1E4E8;">    SqStack S;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ArcNode</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 对各顶点求入度</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">FindInDegree</span><span style="color:#E1E4E8;">(G, indegree);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 初始化零入度顶点栈</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">InitStack</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">S);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 建立入度为0的顶点栈</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> G.vexnum; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 将入度为0的顶点添加到栈中</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">indegree</span><span style="color:#E1E4E8;">[i] </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">Push</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">S, i);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 对拓扑序列中的顶点计数</span></span>
<span class="line"><span style="color:#E1E4E8;">    count </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 遍历顶点栈</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">!</span><span style="color:#B392F0;">StackEmpty</span><span style="color:#E1E4E8;">(S)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 获取一个零入度顶点</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">Pop</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">S, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">i);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 将各顶点的序号暂存起来</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FFAB70;">topo</span><span style="color:#E1E4E8;">[count</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> i;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 遍历i号顶点的邻接点</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> G.vertices[i].firstarc; p </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">; p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p-&gt;nextarc) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 获取顶点序号</span></span>
<span class="line"><span style="color:#E1E4E8;">            k </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p-&gt;adjvex;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">            /*</span></span>
<span class="line"><span style="color:#6A737D;">             * 将i号顶点每个邻接点的入度减一，这相当于切段i号顶点到其它邻接点的联系。</span></span>
<span class="line"><span style="color:#6A737D;">             * 如果出现了新的入度为0的顶点，继续将其入栈。</span></span>
<span class="line"><span style="color:#6A737D;">             */</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">((</span><span style="color:#F97583;">--</span><span style="color:#FFAB70;">indegree</span><span style="color:#E1E4E8;">[k]) </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">Push</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">S, k);</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 如果遇到了回路，则返回ERROR</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(count </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> G.vexnum) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 如果有向图G无回路，则输出它的一个拓扑序列并返回OK；否则，返回FALSE。</span></span>
<span class="line"><span style="color:#6A737D;"> * 拓扑序列通常不唯一，但是必须保证某些关键节点的先后次序。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">TopologicalSort</span><span style="color:#24292E;">(ALGraph </span><span style="color:#E36209;">G</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">topo</span><span style="color:#24292E;">[MAX_VERTEX_NUM]) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i, k, count;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">indegree</span><span style="color:#24292E;">[MAX_VERTEX_NUM];</span></span>
<span class="line"><span style="color:#24292E;">    SqStack S;</span></span>
<span class="line"><span style="color:#24292E;">    ArcNode</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> p;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 对各顶点求入度</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">FindInDegree</span><span style="color:#24292E;">(G, indegree);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 初始化零入度顶点栈</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">InitStack</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">S);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 建立入度为0的顶点栈</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> G.vexnum; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 将入度为0的顶点添加到栈中</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#E36209;">indegree</span><span style="color:#24292E;">[i] </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">Push</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">S, i);</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 对拓扑序列中的顶点计数</span></span>
<span class="line"><span style="color:#24292E;">    count </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 遍历顶点栈</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">while</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#6F42C1;">StackEmpty</span><span style="color:#24292E;">(S)) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 获取一个零入度顶点</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">Pop</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">S, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">i);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 将各顶点的序号暂存起来</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#E36209;">topo</span><span style="color:#24292E;">[count</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> i;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 遍历i号顶点的邻接点</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> G.vertices[i].firstarc; p </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">; p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p-&gt;nextarc) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 获取顶点序号</span></span>
<span class="line"><span style="color:#24292E;">            k </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p-&gt;adjvex;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">            /*</span></span>
<span class="line"><span style="color:#6A737D;">             * 将i号顶点每个邻接点的入度减一，这相当于切段i号顶点到其它邻接点的联系。</span></span>
<span class="line"><span style="color:#6A737D;">             * 如果出现了新的入度为0的顶点，继续将其入栈。</span></span>
<span class="line"><span style="color:#6A737D;">             */</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">((</span><span style="color:#D73A49;">--</span><span style="color:#E36209;">indegree</span><span style="color:#24292E;">[k]) </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">Push</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">S, k);</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 如果遇到了回路，则返回ERROR</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(count </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> G.vexnum) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,40),f=[h];function C(v,B,S,k,G,b){return a(),p("div",null,f)}const L=n(u,[["render",C]]);export{R as __pageData,L as default};
