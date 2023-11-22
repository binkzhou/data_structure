import{_ as t,o as d,c as e,Q as a}from"./chunks/framework.91000686.js";const b=JSON.parse('{"title":"KMP 算法","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"sstring/0004.md","filePath":"sstring/0004.md"}'),n={name:"sstring/0004.md"},r=a('<h1 id="kmp-算法" tabindex="-1">KMP 算法 <a class="header-anchor" href="#kmp-算法" aria-label="Permalink to &quot;KMP 算法&quot;">​</a></h1><p>手算next</p><table><thead><tr><th style="text-align:center;">序号</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th></tr></thead><tbody><tr><td style="text-align:center;">模式</td><td>a</td><td>b</td><td>a</td><td>a</td><td>b</td><td>c</td></tr><tr><td style="text-align:center;">最大公共前后缀</td><td>0</td><td>0</td><td>0</td><td>1</td><td>1</td><td>2</td></tr><tr><td style="text-align:center;">next数组</td><td>0</td><td>1</td><td>1</td><td>2</td><td>2</td><td>3</td></tr><tr><td style="text-align:center;">nextval数组</td><td>0</td><td>1</td><td>0</td><td>2</td><td>1</td><td>3</td></tr></tbody></table><p>next 数组求法：除1号位其他为最大公共前后缀+1</p><p><strong>求解公共前后缀</strong></p><p>序号1之前没有公共前后缀最大位0</p><p>序号2之前<code>a</code>没有公共前后缀最大位0</p><p>序号3之前<code>ab</code>没有公共前后缀最大位0</p><p>序号4之前<code>aba</code>公共前后缀<code>a</code>最大位1</p><p>序号5之前<code>abaa</code>公共前后缀<code>a</code>最大位1</p><p>序号6之前<code>abab</code>公共前后缀<code>ab</code>最大位2</p><p>公共前后缀为[0,0,0,1,1,2]</p><p><strong>求解next 数组</strong></p><p>除1号位其他为最大公共前后缀+1</p><p>next数组为[0,1,1,2,2,3]</p><p><strong>求解nextval数组</strong></p><p>nextval的值从next而来</p><table><thead><tr><th style="text-align:center;">序号</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th></tr></thead><tbody><tr><td style="text-align:center;">模式</td><td>a</td><td>b</td><td>a</td><td>a</td><td>b</td><td>c</td></tr><tr><td style="text-align:center;">最大公共前后缀</td><td>0</td><td>0</td><td>0</td><td>1</td><td>1</td><td>2</td></tr><tr><td style="text-align:center;">next数组</td><td>0</td><td>1</td><td>1</td><td>2</td><td>2</td><td>3</td></tr><tr><td style="text-align:center;">nextval数组</td><td>直写0</td><td>直写1</td><td>序号1的值0</td><td>直写2</td><td>序号2的值1</td><td>直写3</td></tr></tbody></table><p>序号1的next数组为0，而0没有对应的序号，值为0</p><p>序号2的next数组值为1，而1对应的模式与2对应的模式a≠b,直接写下next的值1</p><p>序号3的next数组值为1，而1对应的模式与3对应的模式a=a,写下序号1对应的next值0</p><p>序号4的next数组值为2，而2对应的模式与4对应的模式b≠a,直接写下next的值2</p><p>序号5的next数组值为2，而2对应的模式与5对应的模式b=b,写下序号2对应的next值1</p><p>序号6的next数组值为3，而3对应的模式与6对应的模式a≠c,直接写下next的值3</p>',24),p=[r];function o(c,s,h,l,x,i){return d(),e("div",null,p)}const g=t(n,[["render",o]]);export{b as __pageData,g as default};
