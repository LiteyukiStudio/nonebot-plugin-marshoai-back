import{_ as i,c as a,ae as t,o as n}from"./chunks/framework.BzDBnRMZ.js";const g=JSON.parse('{"title":"index","description":"","frontmatter":{"title":"index","order":100,"collapsed":true},"headers":[],"relativePath":"en/dev/api/plugins_test/marshoai_basic/index.md","filePath":"en/dev/api/plugins_test/marshoai_basic/index.md","lastUpdated":null}'),e={name:"en/dev/api/plugins_test/marshoai_basic/index.md"};function h(l,s,p,r,k,d){return n(),a("div",null,s[0]||(s[0]=[t('<h1 id="module-nonebot-plugin-marshoai-plugins-test-marshoai-basic" tabindex="-1"><strong>Module</strong> <code>nonebot_plugin_marshoai.plugins_test.marshoai_basic</code> <a class="header-anchor" href="#module-nonebot-plugin-marshoai-plugins-test-marshoai-basic" aria-label="Permalink to &quot;**Module** `nonebot_plugin_marshoai.plugins_test.marshoai_basic`&quot;">​</a></h1><hr><p><code>@on_function_call(description=&#39;获取当前时间，日期和星期&#39;)</code></p><h3 id="async-func-get-current-time-str" tabindex="-1"><em><strong>async func</strong></em> <code>get_current_time() -&gt; str</code> <a class="header-anchor" href="#async-func-get-current-time-str" aria-label="Permalink to &quot;***async func*** `get_current_time() -&gt; str`&quot;">​</a></h3><p><strong>Description</strong>: 获取当前的时间和日期</p><details><summary><b>Source code</b> or <a href="https://github.com/LiteyukiStudio/nonebot-plugin-marshoai/tree/main/nonebot_plugin_marshoai/plugins_test/marshoai_basic/__init__.py#L20" target="_blank">View on GitHub</a></summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@on_function_call</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">description</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;获取当前时间，日期和星期&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> get_current_time</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() -&gt; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    current_time </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DateTime.now()</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    time_prompt </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;现在的时间是 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">，</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">，</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">。&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.format(current_time.strftime(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;%Y.%m.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> %H:%M:%S&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), weekdays[current_time.weekday()], current_time.chinesize.date_hanzify(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;农历</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{干支年}{生肖}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">年 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{月份}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">月</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{数序日}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> time_prompt</span></span></code></pre></div></details>',6)]))}const c=i(e,[["render",h]]);export{g as __pageData,c as default};
