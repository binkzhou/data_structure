import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.91000686.js";const l="/data_structure/assets/image-20231206110533117.72010be2.png",o="/data_structure/assets/image-20231206111219257.09caba2e.png",e="/data_structure/assets/image-20231206131543019.b35119d4.png",t="/data_structure/assets/11443031b-0.5813f381.png",B=JSON.parse('{"title":"冪集","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"tree/0011.md","filePath":"tree/0011.md"}'),c={name:"tree/0011.md"},r=p('<h1 id="冪集" tabindex="-1">冪集 <a class="header-anchor" href="#冪集" aria-label="Permalink to &quot;冪集&quot;">​</a></h1><p>回溯算法，又称为“试探法”。解决问题时，每进行一步，都是抱着试试看的态度，如果发现当前选择并不是最好的，或者这么走下去肯定达不到目标，立刻做回退操作重新选择。这种走不通就回退再走的方法就是回溯算法。</p><p><strong>回溯VS递归</strong></p><p>在回溯法中可以看到有递归的身影，但是两者是有区别的。</p><p>回溯法从问题本身出发，寻找可能实现的所有情况。和穷举法的思想相近，不同在于穷举法是将所有的情况都列举出来以后再一一筛选，而回溯法在列举过程如果发现当前情况根本不可能存在，就停止后续的所有工作，返回上一步进行新的尝试。</p><p>递归是从问题的结果出发，例如求 n！，要想知道 n！的结果，就需要知道 n*(n-1)! 的结果，而要想知道 (n-1)! 结果，就需要提前知道 (n-1)*(n-2)!。这样不断地向自己提问，不断地调用自己的思想就是递归。</p><p>回溯和递归唯一的联系就是，回溯法可以用递归思想实现。</p><p><img src="'+l+`" alt="image-20231206110533117"></p><p>设集合A为{1,2,3},</p><p>那么集合A的幂集P(A)应为</p><p>最后一层即为幂集{1,2,3}，{1,2}，{1,3}，{1}, {2,3}, {2}， {3}，{空集};</p><h2 id="结构定义" tabindex="-1">结构定义 <a class="header-anchor" href="#结构定义" aria-label="Permalink to &quot;结构定义&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 冪集中的集合定义，这里使用了线性表。</span></span>
<span class="line"><span style="color:#6A737D;"> * 冪集元素类型也与线性表元素类型一致。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">typedef</span><span style="color:#E1E4E8;"> LinkList List;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 冪集中的集合定义，这里使用了线性表。</span></span>
<span class="line"><span style="color:#6A737D;"> * 冪集元素类型也与线性表元素类型一致。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">typedef</span><span style="color:#24292E;"> LinkList List;</span></span></code></pre></div><h2 id="创建集合a" tabindex="-1">创建集合A <a class="header-anchor" href="#创建集合a" aria-label="Permalink to &quot;创建集合A&quot;">​</a></h2><p>集合A为一个链表</p><p><img src="`+o+`" alt="image-20231206111219257"></p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-NY7y7" id="tab-jFXS-w3" checked="checked"><label for="tab-jFXS-w3">PwerSet.c</label><input type="radio" name="group-NY7y7" id="tab-_6R3Aei"><label for="tab-_6R3Aei">main.c</label><input type="radio" name="group-NY7y7" id="tab-MC2mV64"><label for="tab-MC2mV64">TestData_A.txt</label></div><div class="blocks"><div class="language-c vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*━━━━━━━━━━━━━━━━━━━━━━ 仅限内部使用的函数 ━━━━━━━━━━━━━━━━━━━━━━*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建集合的内部函数</span></span>
<span class="line"><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Create</span><span style="color:#E1E4E8;">(List</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">A</span><span style="color:#E1E4E8;">, FILE</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">fp</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> n, i, e;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">InitList</span><span style="color:#E1E4E8;">(A);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(fp </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;请输入集合元素数量：&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">scanf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%d</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">n);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(i</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;">n; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;请输入第 </span><span style="color:#79B8FF;">%2d</span><span style="color:#9ECBFF;"> 个元素：&quot;</span><span style="color:#E1E4E8;">, i);</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">scanf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%d</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">e);</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">ListInsert</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">A, i, e);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 录入元素数量</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">ReadData</span><span style="color:#E1E4E8;">(fp, </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%d</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">n);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 录入元素</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(i</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;">n; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">ReadData</span><span style="color:#E1E4E8;">(fp, </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%d</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">e);</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">ListInsert</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">A, i, e);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 创建集合A，集合元素类型与线性表元素类型一致。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Status </span><span style="color:#B392F0;">CreatePowerSet</span><span style="color:#E1E4E8;">(List</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">A</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">char*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">path</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    FILE</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> fp;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> readFromConsole;</span><span style="color:#6A737D;">    // 是否从控制台读取数据</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 如果没有文件路径信息，则从控制台读取输入</span></span>
<span class="line"><span style="color:#E1E4E8;">    readFromConsole </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> path </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">strcmp</span><span style="color:#E1E4E8;">(path, </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(readFromConsole) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;请输入集合的元素信息...</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">Create</span><span style="color:#E1E4E8;">(A, </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 打开文件，准备读取测试数据</span></span>
<span class="line"><span style="color:#E1E4E8;">        fp </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fopen</span><span style="color:#E1E4E8;">(path, </span><span style="color:#9ECBFF;">&quot;r&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(fp </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ERROR;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">Create</span><span style="color:#E1E4E8;">(A, fp);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">fclose</span><span style="color:#E1E4E8;">(fp);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OK;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*━━━━━━━━━━━━━━━━━━━━━━ 仅限内部使用的函数 ━━━━━━━━━━━━━━━━━━━━━━*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建集合的内部函数</span></span>
<span class="line"><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Create</span><span style="color:#24292E;">(List</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">A</span><span style="color:#24292E;">, FILE</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">fp</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> n, i, e;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">InitList</span><span style="color:#24292E;">(A);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(fp </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;请输入集合元素数量：&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">scanf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%d</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">n);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(i</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;">n; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;请输入第 </span><span style="color:#005CC5;">%2d</span><span style="color:#032F62;"> 个元素：&quot;</span><span style="color:#24292E;">, i);</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">scanf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%d</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">e);</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">ListInsert</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">A, i, e);</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 录入元素数量</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">ReadData</span><span style="color:#24292E;">(fp, </span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%d</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">n);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 录入元素</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(i</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;">n; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">ReadData</span><span style="color:#24292E;">(fp, </span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%d</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">e);</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">ListInsert</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">A, i, e);</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 创建集合A，集合元素类型与线性表元素类型一致。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Status </span><span style="color:#6F42C1;">CreatePowerSet</span><span style="color:#24292E;">(List</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">A</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">char*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">path</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    FILE</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> fp;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> readFromConsole;</span><span style="color:#6A737D;">    // 是否从控制台读取数据</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 如果没有文件路径信息，则从控制台读取输入</span></span>
<span class="line"><span style="color:#24292E;">    readFromConsole </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> path </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">strcmp</span><span style="color:#24292E;">(path, </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(readFromConsole) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;请输入集合的元素信息...</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">Create</span><span style="color:#24292E;">(A, </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 打开文件，准备读取测试数据</span></span>
<span class="line"><span style="color:#24292E;">        fp </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fopen</span><span style="color:#24292E;">(path, </span><span style="color:#032F62;">&quot;r&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(fp </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ERROR;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">Create</span><span style="color:#24292E;">(A, fp);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">fclose</span><span style="color:#24292E;">(fp);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OK;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">#include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&lt;stdio.h&gt;</span></span>
<span class="line"><span style="color:#F97583;">#include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;PowerSet.h&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    List A;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 创建集合 A</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">CreatePowerSet</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">A, </span><span style="color:#9ECBFF;">&quot;TestData_A.txt&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&lt;stdio.h&gt;</span></span>
<span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;PowerSet.h&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    List A;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 创建集合 A</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">CreatePowerSet</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">A, </span><span style="color:#032F62;">&quot;TestData_A.txt&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">集合元素个数：3</span></span>
<span class="line"><span style="color:#e1e4e8;">集合元素：1 2 3</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">集合元素个数：3</span></span>
<span class="line"><span style="color:#24292e;">集合元素：1 2 3</span></span></code></pre></div></div></div><h2 id="求取集合a的幂集" tabindex="-1">求取集合A的幂集 <a class="header-anchor" href="#求取集合a的幂集" aria-label="Permalink to &quot;求取集合A的幂集&quot;">​</a></h2><p><img src="`+e+'" alt="image-20231206131543019"></p><p>对集合A中前i - 1个元素进行取/舍处理的当前状态(左分支取，右分支舍)</p><p>最后一层为幂集</p><p><img src="'+t+`" alt="img"></p><p>A集合为[x,1,2,3]</p><p>第二层 取A[1] = 1; 取1，B=[1]；然后舍1，B = []</p><p>第三层 左子树，取A[2] = 2; 取2为，B = [1,2]；然后舍2，B=[1]，右子树，取2为B[2]；然后舍2，B=[]</p><p>第四层 取A[3] = 3；[1,2] 树，取3，B=[1,2,3]；然后舍3，B=[1,2]。1树，取3，B=[1,3]，舍3=[1]。</p><p>2树，取3，B=[2,3]；然后舍3，B=[2]。空树，取3，B=[3]；然后舍3，B=[]</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * ████████ 6.14/6.15 ████████</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * 求取集合A的幂集，集合B用来暂存每一次求出的幂集子集。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">GetPowerSet</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">i</span><span style="color:#E1E4E8;">, List </span><span style="color:#FFAB70;">A</span><span style="color:#E1E4E8;">, List </span><span style="color:#FFAB70;">B</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> k;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ElemType e;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// i用来追踪当前深入的层级</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ListLength</span><span style="color:#E1E4E8;">(A)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">PrintPowerSet</span><span style="color:#E1E4E8;">(B);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">GetElem</span><span style="color:#E1E4E8;">(A, i, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">e);</span></span>
<span class="line"><span style="color:#E1E4E8;">        k </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ListLength</span><span style="color:#E1E4E8;">(B);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 取</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">ListInsert</span><span style="color:#E1E4E8;">(B, k </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, e);</span><span style="color:#6A737D;">    //+第i个元素</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">GetPowerSet</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, A, B);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 舍</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">ListDelete</span><span style="color:#E1E4E8;">(B, k </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">e);</span><span style="color:#6A737D;">   //-第i个元素</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">GetPowerSet</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, A, B);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 输出当前集合。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PrintPowerSet</span><span style="color:#E1E4E8;">(List </span><span style="color:#FFAB70;">A</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    LinkList p;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> len;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(A </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    len </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ListLength</span><span style="color:#E1E4E8;">(A);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 输出空集</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(len </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;⊙&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 输出集合中的元素</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> A-&gt;next; p; p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p-&gt;next) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%-2d</span><span style="color:#9ECBFF;"> &quot;</span><span style="color:#E1E4E8;">, p-&gt;data);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * ████████ 6.14/6.15 ████████</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * 求取集合A的幂集，集合B用来暂存每一次求出的幂集子集。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">GetPowerSet</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">i</span><span style="color:#24292E;">, List </span><span style="color:#E36209;">A</span><span style="color:#24292E;">, List </span><span style="color:#E36209;">B</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> k;</span></span>
<span class="line"><span style="color:#24292E;">    ElemType e;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// i用来追踪当前深入的层级</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ListLength</span><span style="color:#24292E;">(A)) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">PrintPowerSet</span><span style="color:#24292E;">(B);</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">GetElem</span><span style="color:#24292E;">(A, i, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">e);</span></span>
<span class="line"><span style="color:#24292E;">        k </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ListLength</span><span style="color:#24292E;">(B);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 取</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">ListInsert</span><span style="color:#24292E;">(B, k </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, e);</span><span style="color:#6A737D;">    //+第i个元素</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">GetPowerSet</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, A, B);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 舍</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">ListDelete</span><span style="color:#24292E;">(B, k </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">e);</span><span style="color:#6A737D;">   //-第i个元素</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">GetPowerSet</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, A, B);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 输出当前集合。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PrintPowerSet</span><span style="color:#24292E;">(List </span><span style="color:#E36209;">A</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    LinkList p;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> len;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(A </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    len </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ListLength</span><span style="color:#24292E;">(A);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 输出空集</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(len </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;⊙&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 输出集合中的元素</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> A-&gt;next; p; p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p-&gt;next) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%-2d</span><span style="color:#032F62;"> &quot;</span><span style="color:#24292E;">, p-&gt;data);</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,28),E=[r];function y(i,F,A,d,D,C){return n(),a("div",null,E)}const h=s(c,[["render",y]]);export{B as __pageData,h as default};
