import{_ as a,o as i,c as e,O as n}from"./chunks/framework.0a4d7c04.js";const m=JSON.parse('{"title":"软解指南","description":"","frontmatter":{},"headers":[],"relativePath":"cn/hacking-guide/index.md","filePath":"cn/hacking-guide/index.md"}'),t={name:"cn/hacking-guide/index.md"},r=n('<h1 id="软解指南" tabindex="-1">软解指南 <a class="header-anchor" href="#软解指南" aria-label="Permalink to &quot;软解指南&quot;">​</a></h1><p>欢迎来到<strong>软解指南</strong>！</p><p>这是在应用其他技巧之前必须遵循的初始指南。</p><p>在本教程中，我们将安装 <strong>Homebrew Channel</strong>，这个应用程序允许你在游戏机上运行自制程序。</p><p>对于想要使用 Wii 做更多事情的人，我们将提供一些额外的步骤。</p><p><span style="color:#3333ff;font-weight:bold;">Wii U用户请注意：虽然以下一些漏洞利用可以软解virtual Wii (vWii)，但建议改用专用的Wii U指南。</span></p><div class="danger custom-block"><p class="custom-block-title">使用了非韩版系统的韩版机器用户注意</p><p>如果你的机器工作正常，请不要使用本指南，使用非韩版系统更新到4.3版本会导致003错误，机器将无法启动。</p></div><h1 id="选择一个漏洞" tabindex="-1">选择一个漏洞 <a class="header-anchor" href="#选择一个漏洞" aria-label="Permalink to &quot;选择一个漏洞&quot;">​</a></h1><p>根据您拥有的游戏机以及可用的游戏或硬件配置，可以使用不同的漏洞利用程序在您的游戏机上安装自制软件。请从下面的列表中选择一个合适的漏洞利用（所有结果都是一样的）</p><div class="tip custom-block"><p class="custom-block-title">个人建议</p><p>如果你有完善的网络环境，直接初始化游戏机，然后更新到最新版4.3系统，使用信件炸弹（LetterBomb）的方式软解。</p></div><h2 id="信件炸弹-letterbomb" tabindex="-1"><a href="/wiisoftmodguide/cn/hacking-guide/4-3-guide.html">信件炸弹（LetterBomb）</a> <a class="header-anchor" href="#信件炸弹-letterbomb" aria-label="Permalink to &quot;[信件炸弹（LetterBomb）](/cn/hacking-guide/4-3-guide)&quot;">​</a></h2><p>Wii 内置留言板的漏洞。需要SD卡。</p><p>适用于带有4.3系统版本的Wii游戏机；不适用于Wii U 或Wii Mini</p><h2 id="flashhax" tabindex="-1"><a href="/wiisoftmodguide/cn/hacking-guide/flashhax.html">flashhax</a> <a class="header-anchor" href="#flashhax" aria-label="Permalink to &quot;[flashhax](/cn/hacking-guide/flashhax)&quot;">​</a></h2><p>Wii Internet Channel中的一个漏洞。 需要有效的互联网连接并安装有Internet Channel（在 Wii 商店中不再提供下载）。</p><p>适用于带有4.3系统版本的Wii游戏机；不适用于Wii U 或Wii Mini</p><h2 id="bannerbomb" tabindex="-1"><a href="/wiisoftmodguide/cn/hacking-guide/bannerbomb.html">Bannerbomb</a> <a class="header-anchor" href="#bannerbomb" aria-label="Permalink to &quot;[Bannerbomb](/cn/hacking-guide/bannerbomb)&quot;">​</a></h2><p>利用格式错误的Channel横幅，使系统菜单崩溃的漏洞（类似于banner brick）。</p><p>适用于4.2或低于4.2系统版本的Wii游戏机；不适用于Wii U 或Wii Mini</p><h2 id="str2hax" tabindex="-1">str2hax <a class="header-anchor" href="#str2hax" aria-label="Permalink to &quot;str2hax&quot;">​</a></h2><p>Wii 内置EULA协议屏幕中的漏洞。EULA协议需要有效的互联网连接。</p><p>适用于带有4.3系统版本的Wii游戏机；不适用于Wii U 或Wii Mini</p><h2 id="wilbrand" tabindex="-1">Wilbrand <a class="header-anchor" href="#wilbrand" aria-label="Permalink to &quot;Wilbrand&quot;">​</a></h2><p>Wii 内置留言板的另一个漏洞。</p><p>适用于3.0 - 4.3系统版本的Wii游戏机；不适用于Wii Mini</p><h2 id="smash-stack" tabindex="-1">Smash Stack <a class="header-anchor" href="#smash-stack" aria-label="Permalink to &quot;Smash Stack&quot;">​</a></h2><p>Super Smash Bros. Brawl(《任天堂全明星大乱斗X》) 游戏中的漏洞。</p><p>适用于所有系统版本的Wii游戏机；不适用于Wii Mini</p><h2 id="twilight-hack" tabindex="-1">Twilight Hack <a class="header-anchor" href="#twilight-hack" aria-label="Permalink to &quot;Twilight Hack&quot;">​</a></h2><p>The Legend of Zelda: Twilight Princess（《塞尔达传说：暮光公主》）游戏中的漏洞。</p><p>适用于1.0 - 3.4系统版本的Wii游戏机；不适用于Wii U 或Wii Mini.</p><h2 id="indiana-pwns" tabindex="-1">Indiana Pwns <a class="header-anchor" href="#indiana-pwns" aria-label="Permalink to &quot;Indiana Pwns&quot;">​</a></h2><p>LEGO Indiana Jones: The Original Adventures（《乐高印第安纳琼斯：最初冒险》） 游戏中的漏洞</p><p>适用于1.0 - 4.3系统版本的Wii游戏机；不适用于Wii Mini</p><h2 id="bathaxx" tabindex="-1">Bathaxx <a class="header-anchor" href="#bathaxx" aria-label="Permalink to &quot;Bathaxx&quot;">​</a></h2><p>LEGO Batman: The Video Game（《乐高蝙蝠侠》）游戏中的漏洞</p><p>适用于1.0 - 4.3系统版本的Wii游戏机；不适用于Wii Mini</p><h2 id="return-of-the-jodi" tabindex="-1">Return of the Jodi <a class="header-anchor" href="#return-of-the-jodi" aria-label="Permalink to &quot;Return of the Jodi&quot;">​</a></h2><p>LEGO Star Wars: The Complete Saga（《乐高星球大战：完整的传奇》）游戏中的漏洞</p><p>适用于1.0 - 4.3系统版本的Wii游戏机；不适用于Wii Mini</p><h2 id="bluebomb" tabindex="-1">Bluebomb <a class="header-anchor" href="#bluebomb" aria-label="Permalink to &quot;Bluebomb&quot;">​</a></h2><p>Wii 蓝牙模块的漏洞。 适用于 Wii Mini。</p>',42),h=[r];function o(l,s,d,c,p,b){return i(),e("div",null,h)}const f=a(t,[["render",o]]);export{m as __pageData,f as default};