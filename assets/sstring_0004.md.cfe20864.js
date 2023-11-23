import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.91000686.js";const l="/data_structure/assets/image-20231123095659022.416a1a60.png",o="/data_structure/assets/image-20231123100832450.3808ad5c.png",t="/data_structure/assets/image-20231123101510016.477a40cd.png",e="/data_structure/assets/image-20231123101845347.efe5dd83.png",c="/data_structure/assets/image-20231123102504707.4b1b0726.png",r="/data_structure/assets/image-20231123102534551.e12de35a.png",E="/data_structure/assets/image-20231123103247699.3b72eb5d.png",y="/data_structure/assets/image-20231123112410600.532a9083.png",b=JSON.parse('{"title":"KMP 算法","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"sstring/0004.md","filePath":"sstring/0004.md"}'),i={name:"sstring/0004.md"},d=p('<h1 id="kmp-算法" tabindex="-1">KMP 算法 <a class="header-anchor" href="#kmp-算法" aria-label="Permalink to &quot;KMP 算法&quot;">​</a></h1><p>手算 next</p><table><thead><tr><th style="text-align:center;">序号</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th></tr></thead><tbody><tr><td style="text-align:center;">模式</td><td>a</td><td>b</td><td>a</td><td>a</td><td>b</td><td>c</td></tr><tr><td style="text-align:center;">最大公共前后缀</td><td>0</td><td>0</td><td>0</td><td>1</td><td>1</td><td>2</td></tr><tr><td style="text-align:center;">next 数组</td><td>0</td><td>1</td><td>1</td><td>2</td><td>2</td><td>3</td></tr><tr><td style="text-align:center;">nextval 数组</td><td>0</td><td>1</td><td>0</td><td>2</td><td>1</td><td>3</td></tr></tbody></table><p>next 数组求法：除 1 号位其他为最大公共前后缀+1</p><p><strong>求解公共前后缀</strong></p><p>序号 1 之前没有公共前后缀最大位 0</p><p>序号 2 之前<code>a</code>没有公共前后缀最大位 0</p><p>序号 3 之前<code>ab</code>没有公共前后缀最大位 0</p><p>序号 4 之前<code>aba</code>公共前后缀<code>a</code>最大位 1</p><p>序号 5 之前<code>abaa</code>公共前后缀<code>a</code>最大位 1</p><p>序号 6 之前<code>abab</code>公共前后缀<code>ab</code>最大位 2</p><p>公共前后缀为[0,0,0,1,1,2]</p><p><strong>求解 next 数组</strong></p><p>除 1 号位其他为最大公共前后缀+1</p><p>next 数组为[0,1,1,2,2,3]</p><p><strong>求解 nextval 数组</strong></p><p>nextval 的值从 next 而来</p><table><thead><tr><th style="text-align:center;">序号</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th></tr></thead><tbody><tr><td style="text-align:center;">模式</td><td>a</td><td>b</td><td>a</td><td>a</td><td>b</td><td>c</td></tr><tr><td style="text-align:center;">最大公共前后缀</td><td>0</td><td>0</td><td>0</td><td>1</td><td>1</td><td>2</td></tr><tr><td style="text-align:center;">next 数组</td><td>0</td><td>1</td><td>1</td><td>2</td><td>2</td><td>3</td></tr><tr><td style="text-align:center;">nextval 数组</td><td>直写 0</td><td>直写 1</td><td>序号 1 的值 0</td><td>直写 2</td><td>序号 2 的值 1</td><td>直写 3</td></tr></tbody></table><p>序号 1 的 next 数组为 0，而 0 没有对应的序号，值为 0</p><p>序号 2 的 next 数组值为 1，而 1 对应的模式与 2 对应的模式 a≠b,直接写下 next 的值 1</p><p>序号 3 的 next 数组值为 1，而 1 对应的模式与 3 对应的模式 a=a,写下序号 1 对应的 next 值 0</p><p>序号 4 的 next 数组值为 2，而 2 对应的模式与 4 对应的模式 b≠a,直接写下 next 的值 2</p><p>序号 5 的 next 数组值为 2，而 2 对应的模式与 5 对应的模式 b=b,写下序号 2 对应的 next 值 1</p><p>序号 6 的 next 数组值为 3，而 3 对应的模式与 6 对应的模式 a≠c,直接写下 next 的值 3</p><h2 id="求-next-数组" tabindex="-1">求 next 数组 <a class="header-anchor" href="#求-next-数组" aria-label="Permalink to &quot;求 next 数组&quot;">​</a></h2><p>初始化时next[1] = 0</p><p><img src="'+l+'" alt="image-20231123095659022"></p><p>初始化i=1,j = 0 此时if成立<code>i</code>变成2,<code>j</code>变为1,即next[2] = 1</p><p><img src="'+o+'" alt="image-20231123100832450"></p><p>j=1≠0,对比<code>a</code>和<code>b</code>不相同，j回溯next[1]的位置0；j=0 此时if成立<code>i</code>变成3,<code>j</code>变为1,即next[3] = 1</p><p><img src="'+t+'" alt="image-20231123101510016"></p><p>j=1≠0,对比<code>a</code>和<code>a</code>相同，此时if成立<code>i</code>变成4,<code>j</code>变为2,即next[4] = 2</p><p><img src="'+e+'" alt="image-20231123101845347"></p><p>j=2≠0,对比<code>b</code>和<code>a</code>不相同，j回溯上一个相同的位置next[2]的位置1；j=1#0,对比<code>a</code>和<code>a</code>相同，此时if成立<code>i</code>变成5,<code>j</code>变为2,即next[5] = 2</p><p><img src="'+c+'" alt="image-20231123102504707"></p><p><img src="'+r+'" alt="image-20231123102534551"></p><p>j=2≠0,对比<code>b</code>和<code>b</code>相同，此时不用回溯。此时if成立<code>i</code>变成6,<code>j</code>变为3,即next[6] = 3</p><p><img src="'+E+`" alt="image-20231123103247699"></p><p>此时i=6与T的长度T[0]相等，循环结束</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 计算模式串的“失配数组”，用于KMP算法。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">get_next</span><span style="color:#E1E4E8;">(SString </span><span style="color:#FFAB70;">T</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">next</span><span style="color:#F97583;">[]</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 模式串第一个字符处失配时，模式串需要从头比较，主串需要前进到下一个位置比较</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">next</span><span style="color:#E1E4E8;">[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">T</span><span style="color:#E1E4E8;">[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">]) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(j </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">T</span><span style="color:#E1E4E8;">[i] </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">T</span><span style="color:#E1E4E8;">[j]) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 最大公共后缀加1</span></span>
<span class="line"><span style="color:#E1E4E8;">            j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#FFAB70;">next</span><span style="color:#E1E4E8;">[i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> j;</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">next</span><span style="color:#E1E4E8;">[j];</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 计算模式串的“失配数组”，用于KMP算法。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">get_next</span><span style="color:#24292E;">(SString </span><span style="color:#E36209;">T</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">next</span><span style="color:#D73A49;">[]</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 模式串第一个字符处失配时，模式串需要从头比较，主串需要前进到下一个位置比较</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">next</span><span style="color:#24292E;">[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">while</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#E36209;">T</span><span style="color:#24292E;">[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">]) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(j </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> </span><span style="color:#E36209;">T</span><span style="color:#24292E;">[i] </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#E36209;">T</span><span style="color:#24292E;">[j]) {</span></span>
<span class="line"><span style="color:#24292E;">            i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 最大公共后缀加1</span></span>
<span class="line"><span style="color:#24292E;">            j</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#E36209;">next</span><span style="color:#24292E;">[i] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> j;</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#E36209;">next</span><span style="color:#24292E;">[j];</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="求nextval数组" tabindex="-1">求nextval数组 <a class="header-anchor" href="#求nextval数组" aria-label="Permalink to &quot;求nextval数组&quot;">​</a></h2><table><thead><tr><th style="text-align:center;">序号</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr></thead><tbody><tr><td style="text-align:center;">模式</td><td>a</td><td>a</td><td>a</td><td>a</td><td>b</td></tr><tr><td style="text-align:center;">最大公共前后缀</td><td>0</td><td>0</td><td>1</td><td>2</td><td>3</td></tr><tr><td style="text-align:center;">next 数组</td><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td></tr><tr><td style="text-align:center;">nextval 数组</td><td>0</td><td>0</td><td>0</td><td>0</td><td>4</td></tr></tbody></table><p>对于序号5处时失配，对于next数组j需要向前移动4次，进行4次对比</p><p><img src="`+y+`" alt="image-20231123112410600"></p><p>如果和上一个相同，则赋值上一个j可匹配的值，否则赋值当前值</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 计算模式串的“失配数组”，用于KMP算法。</span></span>
<span class="line"><span style="color:#6A737D;"> * 这是一个优化后的版本，效率较算法4.7有所提高。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">get_nextval</span><span style="color:#E1E4E8;">(SString </span><span style="color:#FFAB70;">T</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">nextval</span><span style="color:#F97583;">[]</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 模式串第一个字符处失配时，模式串需要从头比较，主串需要前进到下一个位置比较</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">nextval</span><span style="color:#E1E4E8;">[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 遍历模式串上的字符</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">T</span><span style="color:#E1E4E8;">[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">]) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(j</span><span style="color:#F97583;">==</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">T</span><span style="color:#E1E4E8;">[i] </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">T</span><span style="color:#E1E4E8;">[j]) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">T</span><span style="color:#E1E4E8;">[i] </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">T</span><span style="color:#E1E4E8;">[j]) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#FFAB70;">nextval</span><span style="color:#E1E4E8;">[i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> j;</span></span>
<span class="line"><span style="color:#E1E4E8;">            } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#FFAB70;">nextval</span><span style="color:#E1E4E8;">[i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">nextval</span><span style="color:#E1E4E8;">[j];</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">nextval</span><span style="color:#E1E4E8;">[j];</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 计算模式串的“失配数组”，用于KMP算法。</span></span>
<span class="line"><span style="color:#6A737D;"> * 这是一个优化后的版本，效率较算法4.7有所提高。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">get_nextval</span><span style="color:#24292E;">(SString </span><span style="color:#E36209;">T</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">nextval</span><span style="color:#D73A49;">[]</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 模式串第一个字符处失配时，模式串需要从头比较，主串需要前进到下一个位置比较</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">nextval</span><span style="color:#24292E;">[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 遍历模式串上的字符</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">while</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#E36209;">T</span><span style="color:#24292E;">[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">]) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(j</span><span style="color:#D73A49;">==</span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> </span><span style="color:#E36209;">T</span><span style="color:#24292E;">[i] </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#E36209;">T</span><span style="color:#24292E;">[j]) {</span></span>
<span class="line"><span style="color:#24292E;">            i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            j</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#E36209;">T</span><span style="color:#24292E;">[i] </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#E36209;">T</span><span style="color:#24292E;">[j]) {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#E36209;">nextval</span><span style="color:#24292E;">[i] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> j;</span></span>
<span class="line"><span style="color:#24292E;">            } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#E36209;">nextval</span><span style="color:#24292E;">[i] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#E36209;">nextval</span><span style="color:#24292E;">[j];</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#E36209;">nextval</span><span style="color:#24292E;">[j];</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="查找" tabindex="-1">查找 <a class="header-anchor" href="#查找" aria-label="Permalink to &quot;查找&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 从pos处开始搜索模式串T在主串S中首次出现的位置，如果不存在，则返回0。</span></span>
<span class="line"><span style="color:#6A737D;"> * 如果查找成功，返回匹配的位置。</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> *【注】</span></span>
<span class="line"><span style="color:#6A737D;"> * 1.该实现用到了KMP算法，是一种比较高效的字符串匹配方式</span></span>
<span class="line"><span style="color:#6A737D;"> * 2.教材中没有next参数</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Index_KMP</span><span style="color:#E1E4E8;">(SString </span><span style="color:#FFAB70;">S</span><span style="color:#E1E4E8;">, SString </span><span style="color:#FFAB70;">T</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">pos</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">next</span><span style="color:#F97583;">[]</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pos;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(pos </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 比较字符串</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;">(i </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">S</span><span style="color:#E1E4E8;">[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">T</span><span style="color:#E1E4E8;">[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">]) {</span></span>
<span class="line"><span style="color:#6A737D;">        /*</span></span>
<span class="line"><span style="color:#6A737D;">         * 两种情形：</span></span>
<span class="line"><span style="color:#6A737D;">         * 1.在模式串的第一个字符处就失配</span></span>
<span class="line"><span style="color:#6A737D;">         * 2.主串和模式串处的字符相等</span></span>
<span class="line"><span style="color:#6A737D;">         */</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(j </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">S</span><span style="color:#E1E4E8;">[i] </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">T</span><span style="color:#E1E4E8;">[j]) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 失配时回到前一个适当的位置</span></span>
<span class="line"><span style="color:#E1E4E8;">            j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">next</span><span style="color:#E1E4E8;">[j];</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(j </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">T</span><span style="color:#E1E4E8;">[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">]) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 匹配成功，返回匹配位置</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">T</span><span style="color:#E1E4E8;">[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 匹配失败</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 从pos处开始搜索模式串T在主串S中首次出现的位置，如果不存在，则返回0。</span></span>
<span class="line"><span style="color:#6A737D;"> * 如果查找成功，返回匹配的位置。</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> *【注】</span></span>
<span class="line"><span style="color:#6A737D;"> * 1.该实现用到了KMP算法，是一种比较高效的字符串匹配方式</span></span>
<span class="line"><span style="color:#6A737D;"> * 2.教材中没有next参数</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Index_KMP</span><span style="color:#24292E;">(SString </span><span style="color:#E36209;">S</span><span style="color:#24292E;">, SString </span><span style="color:#E36209;">T</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">pos</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">next</span><span style="color:#D73A49;">[]</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pos;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(pos </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 比较字符串</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">while</span><span style="color:#24292E;">(i </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> </span><span style="color:#E36209;">S</span><span style="color:#24292E;">[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> j </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> </span><span style="color:#E36209;">T</span><span style="color:#24292E;">[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">]) {</span></span>
<span class="line"><span style="color:#6A737D;">        /*</span></span>
<span class="line"><span style="color:#6A737D;">         * 两种情形：</span></span>
<span class="line"><span style="color:#6A737D;">         * 1.在模式串的第一个字符处就失配</span></span>
<span class="line"><span style="color:#6A737D;">         * 2.主串和模式串处的字符相等</span></span>
<span class="line"><span style="color:#6A737D;">         */</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(j </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> </span><span style="color:#E36209;">S</span><span style="color:#24292E;">[i] </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#E36209;">T</span><span style="color:#24292E;">[j]) {</span></span>
<span class="line"><span style="color:#24292E;">            i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            j</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 失配时回到前一个适当的位置</span></span>
<span class="line"><span style="color:#24292E;">            j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#E36209;">next</span><span style="color:#24292E;">[j];</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(j </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#E36209;">T</span><span style="color:#24292E;">[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">]) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 匹配成功，返回匹配位置</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#E36209;">T</span><span style="color:#24292E;">[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 匹配失败</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,48),F=[d];function A(D,h,x,g,j,_){return n(),a("div",null,F)}const m=s(i,[["render",A]]);export{b as __pageData,m as default};
