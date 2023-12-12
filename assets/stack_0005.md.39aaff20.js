import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.91000686.js";const h=JSON.parse('{"title":"行编辑程序","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"stack/0005.md","filePath":"stack/0005.md"}'),l={name:"stack/0005.md"},o=p(`<h1 id="行编辑程序" tabindex="-1">行编辑程序 <a class="header-anchor" href="#行编辑程序" aria-label="Permalink to &quot;行编辑程序&quot;">​</a></h1><p>输入</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">whli##ilr#</span><span style="color:#B392F0;">e</span><span style="color:#E1E4E8;">(s#</span><span style="color:#F97583;">*</span><span style="color:#FFAB70;">s</span><span style="color:#E1E4E8;">)\\noutcha@    </span><span style="color:#B392F0;">putchar</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">s</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">#</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">whli##ilr#</span><span style="color:#6F42C1;">e</span><span style="color:#24292E;">(s#</span><span style="color:#D73A49;">*</span><span style="color:#E36209;">s</span><span style="color:#24292E;">)\\noutcha@    </span><span style="color:#6F42C1;">putchar</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">s</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">#</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">);</span></span></code></pre></div><table><thead><tr><th>符号</th><th>含义</th></tr></thead><tbody><tr><td>#</td><td>代表删除上一元素</td></tr><tr><td>@</td><td>代表删除当前输入行</td></tr><tr><td>\\n</td><td>换行</td></tr><tr><td>\\0</td><td>结束符</td></tr></tbody></table><p>输出</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">while</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">s)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">putchar</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">s</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">while</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">s)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">putchar</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">s</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">);</span></span></code></pre></div><h2 id="定义结束标志" tabindex="-1">定义结束标志 <a class="header-anchor" href="#定义结束标志" aria-label="Permalink to &quot;定义结束标志&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 模拟文件中的文本结束标记，需要覆盖已有的定义</span></span>
<span class="line"><span style="color:#F97583;">#ifdef</span><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">EOF</span></span>
<span class="line"><span style="color:#F97583;">#undef</span><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">EOF</span></span>
<span class="line"><span style="color:#F97583;">#define</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">EOF</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\0</span><span style="color:#9ECBFF;">&#39;</span></span>
<span class="line"><span style="color:#F97583;">#endif</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 模拟文件中的文本结束标记，需要覆盖已有的定义</span></span>
<span class="line"><span style="color:#D73A49;">#ifdef</span><span style="color:#24292E;">  </span><span style="color:#6F42C1;">EOF</span></span>
<span class="line"><span style="color:#D73A49;">#undef</span><span style="color:#24292E;">  </span><span style="color:#6F42C1;">EOF</span></span>
<span class="line"><span style="color:#D73A49;">#define</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">EOF</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;</span><span style="color:#005CC5;">\\0</span><span style="color:#032F62;">&#39;</span></span>
<span class="line"><span style="color:#D73A49;">#endif</span></span></code></pre></div><h2 id="行编辑程序-1" tabindex="-1">行编辑程序 <a class="header-anchor" href="#行编辑程序-1" aria-label="Permalink to &quot;行编辑程序&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-CtdHn" id="tab-U-xyX94" checked="checked"><label for="tab-U-xyX94">LineEdit.c</label><input type="radio" name="group-CtdHn" id="tab-_fzYkwW"><label for="tab-_fzYkwW">main.c</label></div><div class="blocks"><div class="language-c vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 行编辑程序，模拟编辑文本时的退格与清空行的操作。</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> *【注】</span></span>
<span class="line"><span style="color:#6A737D;"> * 教材使用的是控制台输入，这里为了便于测试，直接改为从形参接收参数</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">LineEdit</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">char</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">buffer</span><span style="color:#F97583;">[]</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">    SqStack S;</span><span style="color:#6A737D;">  // 接收输入的字符</span></span>
<span class="line"><span style="color:#E1E4E8;">    SElemType e;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">char</span><span style="color:#E1E4E8;"> ch;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 初始化栈</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">InitStack</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">S);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ch </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">buffer</span><span style="color:#E1E4E8;">[i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 如果未达文本末尾 EOF 为 &#39;\\0&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> (ch </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> EOF){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 如果未达文本末尾，且本行未结束（未遇到换行）</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> (ch </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> EOF </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> ch </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">switch</span><span style="color:#E1E4E8;"> (ch) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;#&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#B392F0;">Pop</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">&amp;</span><span style="color:#FFAB70;">S</span><span style="color:#E1E4E8;">,</span><span style="color:#F97583;">&amp;</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">);</span><span style="color:#6A737D;">     // 遇到&#39;#&#39;表示删除一个字符</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#B392F0;">ClearStack</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">&amp;</span><span style="color:#FFAB70;">S</span><span style="color:#E1E4E8;">);</span><span style="color:#6A737D;"> // 遇到&#39;@&#39;表示清空当前行</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#B392F0;">Push</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">&amp;</span><span style="color:#FFAB70;">S</span><span style="color:#E1E4E8;">,ch);</span><span style="color:#6A737D;">  // 有效字符入栈</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 识别下一个字符</span></span>
<span class="line"><span style="color:#E1E4E8;">            ch </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">buffer</span><span style="color:#E1E4E8;">[i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 清空之前打印当前栈的内容</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">StackTraverse</span><span style="color:#E1E4E8;">(S,Print);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 清空改行的缓冲区</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">ClearStack</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">S);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 如果未到文本末尾，说明遇到了&#39;\\n&#39;，即该行结束了</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(ch </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> EOF){</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 进入下一行</span></span>
<span class="line"><span style="color:#E1E4E8;">            ch </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">buffer</span><span style="color:#E1E4E8;">[i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 已经到了文本末尾，输出目前栈中的元素</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">StackTraverse</span><span style="color:#E1E4E8;">(S,Print);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 销毁栈</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">DestroyStack</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">S);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 测试函数，打印元素</span></span>
<span class="line"><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Print</span><span style="color:#E1E4E8;">(SElemType </span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%c</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, e);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 行编辑程序，模拟编辑文本时的退格与清空行的操作。</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> *【注】</span></span>
<span class="line"><span style="color:#6A737D;"> * 教材使用的是控制台输入，这里为了便于测试，直接改为从形参接收参数</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">LineEdit</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">char</span><span style="color:#24292E;"> </span><span style="color:#E36209;">buffer</span><span style="color:#D73A49;">[]</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">    SqStack S;</span><span style="color:#6A737D;">  // 接收输入的字符</span></span>
<span class="line"><span style="color:#24292E;">    SElemType e;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">char</span><span style="color:#24292E;"> ch;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 初始化栈</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">InitStack</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">S);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    ch </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#E36209;">buffer</span><span style="color:#24292E;">[i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 如果未达文本末尾 EOF 为 &#39;\\0&#39;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (ch </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> EOF){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 如果未达文本末尾，且本行未结束（未遇到换行）</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (ch </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> EOF </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> ch </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&#39;</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">switch</span><span style="color:#24292E;"> (ch) {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;#&#39;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6F42C1;">Pop</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">&amp;</span><span style="color:#E36209;">S</span><span style="color:#24292E;">,</span><span style="color:#D73A49;">&amp;</span><span style="color:#E36209;">e</span><span style="color:#24292E;">);</span><span style="color:#6A737D;">     // 遇到&#39;#&#39;表示删除一个字符</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@&#39;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6F42C1;">ClearStack</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">&amp;</span><span style="color:#E36209;">S</span><span style="color:#24292E;">);</span><span style="color:#6A737D;"> // 遇到&#39;@&#39;表示清空当前行</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">default</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6F42C1;">Push</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">&amp;</span><span style="color:#E36209;">S</span><span style="color:#24292E;">,ch);</span><span style="color:#6A737D;">  // 有效字符入栈</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 识别下一个字符</span></span>
<span class="line"><span style="color:#24292E;">            ch </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#E36209;">buffer</span><span style="color:#24292E;">[i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 清空之前打印当前栈的内容</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">StackTraverse</span><span style="color:#24292E;">(S,Print);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 清空改行的缓冲区</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">ClearStack</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">S);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 如果未到文本末尾，说明遇到了&#39;\\n&#39;，即该行结束了</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(ch </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> EOF){</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 进入下一行</span></span>
<span class="line"><span style="color:#24292E;">            ch </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#E36209;">buffer</span><span style="color:#24292E;">[i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 已经到了文本末尾，输出目前栈中的元素</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">StackTraverse</span><span style="color:#24292E;">(S,Print);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 销毁栈</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">DestroyStack</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">S);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 测试函数，打印元素</span></span>
<span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Print</span><span style="color:#24292E;">(SElemType </span><span style="color:#E36209;">e</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%c</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, e);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">#include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&lt;stdio.h&gt;</span></span>
<span class="line"><span style="color:#F97583;">#include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;LineEdit.h&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">char*</span><span style="color:#E1E4E8;"> buf </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;whli##ilr#e(s#*s)</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">outcha@    putchar(*s=#++);&quot;</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">   //需要录入的内容</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">LineEdit</span><span style="color:#E1E4E8;">(buf);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&lt;stdio.h&gt;</span></span>
<span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;LineEdit.h&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">char*</span><span style="color:#24292E;"> buf </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;whli##ilr#e(s#*s)</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">outcha@    putchar(*s=#++);&quot;</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">   //需要录入的内容</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">LineEdit</span><span style="color:#24292E;">(buf);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></div></div>`,10),e=[o];function c(t,r,E,y,i,F){return n(),a("div",null,e)}const A=s(l,[["render",c]]);export{h as __pageData,A as default};
