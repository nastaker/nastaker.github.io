import{_ as i}from"./chunks/letterbombstuck.63488c02.js";import{_ as o}from"./chunks/letterbomb.92f81f46.js";import{_ as t}from"./chunks/bannerbomb1.4496f07a.js";import{_ as e,o as r,c as a,O as l}from"./chunks/framework.0a4d7c04.js";const W=JSON.parse('{"title":"信件炸弹","description":"","frontmatter":{"title":"信件炸弹"},"headers":[],"relativePath":"cn/hacking-guide/4-3-guide.md","filePath":"cn/hacking-guide/4-3-guide.md"}'),p={name:"cn/hacking-guide/4-3-guide.md"},n=l('<h1 id="初始自制程序设置" tabindex="-1">初始自制程序设置 <a class="header-anchor" href="#初始自制程序设置" aria-label="Permalink to &quot;初始自制程序设置&quot;">​</a></h1><p><strong>Homebrew Channel</strong> 是武器库中的主要武器。 它使 Wii 进入等待加载您选择的 <strong>boot.dol/elf</strong> 的状态，这基本上是开发人员编写的程序（有点像 Windows 的 .exe）。 这些程序的范围包括从您的 Wii 播放媒体、安装和更新 IOS、管理您的 USB 驱动器或 SD 卡上的文件，以及<strong>更多</strong>。 自制软件的可能性简直是无穷无尽的。 将 Homebrew Channel 连接到您的 Wii 将使您能够在您自己的 Wii 上运行这些 <strong>定制程序</strong>。</p><p><a href="/wiisoftmodguide/en/how-to-use/homebrew-channel.html">有关Homebrew Channel的更多信息</a> | <a href="/wiisoftmodguide/en/how-to-use/bootmii.html">有关BootMii的更多信息</a></p><div class="tip custom-block"><p class="custom-block-title">提示</p><p>本指南仅适用于系统版本为4.3的Wii游戏机。<br> 如果您的Wii系统版本低于4.3，请按照本指南更新它，或访问<a href="/wiisoftmodguide/en/hacking-guide/the-basics.html">&lt;=4.2系统版本指南</a>.</p></div><p>如果你是Wii U主机，请访问<a href="/wiisoftmodguide/cn/hacking-guide/">软解指南</a>.</p><p><u>需要准备的东西</u></p><ul><li>系统版本为4.3的Wii游戏机</li><li>[仅使用方法1] The Internet Channel（Wii商店已经不再提供下载）</li><li>[仅使用方法2] 一张FAT32格式的SD卡 (最好是非SDHC的)</li></ul><h1 id="指南" tabindex="-1">指南 <a class="header-anchor" href="#指南" aria-label="Permalink to &quot;指南&quot;">​</a></h1><h2 id="第1部分-启动-hackmii-安装程序" tabindex="-1">第1部分: 启动 HackMii 安装程序 <a class="header-anchor" href="#第1部分-启动-hackmii-安装程序" aria-label="Permalink to &quot;第1部分: 启动 HackMii 安装程序&quot;">​</a></h2><p>HackMii 安装器是我们可以用来安装 Homebrew Channel 的安装工具； 这将使我们能够以方便的方式启动 Homebrew。</p><p>提供了两种进入 HackMii 安装程序的方法。 第一种方法； FlashHax 更新更容易，但它需要使用游戏机上的WiFi。</p><p>如果您没有WiFi，或者FlashHax方法无效，请尝试第二种方法。</p><p>方法1：FlashHax</p><p>本指南需要：</p><ol><li>Wii游戏机上WiFi正常工作。</li><li>Wii游戏机上安装有 Internet Channel。</li></ol><p>如果不符合条件，您必须使用<a href="#方法2-letterbomb">方法2</a>。</p><p><strong>在Wii游戏机上的操作</strong></p><ol><li><p>从 Wii 菜单打开 Internet Channel。</p></li><li><p>打开网站：flashhax.com</p></li></ol><p>（按 WWW 按钮输入网址）</p><ol start="3"><li><p>如果系统询问，请为你的游戏机选择正确的区域。</p></li><li><p>页面打开后，您将看到一条消息：“将此页面添加为书签”。</p></li></ol><p>单击底部的星形图标，然后单击“添加到收藏夹”按钮。</p><p>一个名为“Exploit”的新磁贴会被添加到收藏夹</p><p>5.在“收藏夹”页面中，单击“Exploit”磁贴。</p><p>该页面会再次加载，安装程序将会被下载。</p><ol start="6"><li>几秒钟后； HackMii 安装程序的诈骗警告界面应该会弹出。如下图所示： <img src="'+i+'" alt="诈骗警告界面" title="诈骗警告界面"></li></ol><p>等待1-3分钟，会有消息出现在底部，按下手柄的<strong>①</strong>继续。</p><p><a href="#第2部分-安装homebrew-channel和bootmii">恭喜你已经完成了一半，跳过下面的内容，点击这里从Part 2的部分开始阅读。</a></p><p>如果警告屏幕显示时间很长； 它可能卡死了游戏机（有时会发生）。</p><p>按住游戏机上的电源按钮强制关闭它。 然后重新启动互联网频道并尝试再次从收藏夹中打开页面。</p><p>重试直到成功，或尝试方法 2。</p><div class="tip custom-block"><p class="custom-block-title">提示</p><p>若一直卡死，请参阅：<a href="/wiisoftmodguide/cn/problems/letterbombstuck.html">4.3系统使用LetterBomb卡死</a></p></div><h2 id="方法2-letterbomb" tabindex="-1">方法2：LetterBomb <a class="header-anchor" href="#方法2-letterbomb" aria-label="Permalink to &quot;方法2：LetterBomb&quot;">​</a></h2><p><strong>在Wii游戏机上的操作</strong></p><ol start="0"><li>设置Wii游戏机的日期为当天（很重要，第5步如果找不到红色信件，请查看是否完成了本条设置）</li></ol><p>（如果您已经知道Wii的MAC地址，请看在电脑上的操作）</p><ol><li>进入 Wii 的设置菜单。</li></ol><p>选择第2页上的“Internet”，如果是日版机器，则会显示为“インターネット”。</p><p>选择“游戏机信息”查看MAC地址。</p><p>记录您的Wii的MAC地址以供下一步使用。</p><p><strong>在电脑上的操作</strong></p><ol start="2"><li><p>进入Hackmii网站：<a href="http://please.hackmii.com" target="_blank" rel="noreferrer">http://please.hackmii.com</a></p></li><li><p>确保选中“Bundle the HackMii Installer for Me”。 选择您的系统区域，输入您的 Wii 的 MAC 地址，填写验证码（需要良好的网络环境），然后点击下面的任意一个按钮（红色蓝色都可以）。</p></li><li><p>将新下载的zip文件的内容解压缩到SD卡的根目录中。</p></li></ol><p><strong>在Wii游戏机上的操作</strong></p><ol start="5"><li><p>将 SD 卡插入 Wii。（不需要关机）</p></li><li><p>转到您的Message（菜单右下角的按钮）并查看“昨天”的信件（根据您所在的时区，该漏洞可能会显示在“今天”或另一个最近的日期下）。</p></li></ol><div class="tip custom-block"><p class="custom-block-title">提示</p><p>如果找不到，请确认</p><ol><li>使用的SD卡是否被Wii游戏机读取到，推荐使用非SDHC的小容量（&lt;32GB）SD卡</li><li>是否已经设置游戏机的日期为当天</li></ol></div><ol start="7"><li><p>单击带有炸弹的粉红色信封，漏洞将执行（您会看到屏幕上出现一些白色文本） <img src="'+o+'" alt="Letter Bomb" title="邮件炸弹"></p></li><li><p>片刻之后，您将看到诈骗警告屏幕，如下图所示。 <img src="'+i+'" alt="诈骗警告界面" title="诈骗警告界面"></p></li></ol><p>等待底部的消息出现，然后按下手柄的<strong>①</strong>继续。</p><p><a href="#第2部分-安装homebrew-channel和bootmii">继续阅读第2部分。</a></p><p>如果警告屏幕显示时间很长； 它可能卡死了游戏机（有时会发生）。</p><p>按住游戏机上的电源按钮强制关闭它。 然后重新从第6步开始操作。</p><div class="tip custom-block"><p class="custom-block-title">提示</p><p>若一直卡死，请参阅：<a href="/wiisoftmodguide/cn/problems/letterbombstuck.html">4.3系统使用LetterBomb卡死</a></p></div><h2 id="第2部分-安装homebrew-channel和bootmii" tabindex="-1">第2部分：安装Homebrew Channel和BootMii <a class="header-anchor" href="#第2部分-安装homebrew-channel和bootmii" aria-label="Permalink to &quot;第2部分：安装Homebrew Channel和BootMii&quot;">​</a></h2><p>你会在屏幕上看到如图所示画面： <img src="'+t+'" alt="图片1" title="Scam Warning"></p><p>根据您的Wii游戏机情况，它会在 <strong>BootMii</strong>: 后面显示不同的内容。</p><p>如果你看见<strong style="color:#38761d;font-family:&#39;Bitter&#39;;">Can be installed</strong>，你就能以<strong>boot2</strong>方式安装BootMii (提供<strong>最好的防砖保护</strong>).</p><p>如果你看见<strong style="color:#741b47;font-family:&#39;Bitter&#39;;">Can only be installed as an IOS</strong>，则只能作为<strong>IOS</strong>安装BootMii(<strong>不带有任何防砖保护</strong>)。</p><p>按手柄上的<strong>A</strong>继续。</p><p>现在我们进入<strong>main menu</strong>，我们可以在这里安装所有东西。</p><p>使用方向键向上，移动到选项“<strong>Install the Homebrew Channel</strong>”，然后按 <strong>A</strong>。</p><p>继续使用方向键向上，移动到选项<strong>Yes, continue</strong>，然后按<strong>A</strong>。</p><p>这将在您的Wii上安装Homebrew Channel。完成后按<strong>A</strong>返回主菜单。</p><p><strong>可选（推荐）步骤：安装 BootMii</strong></p><blockquote><p>BootMii对防砖有很大帮助，推荐安装。</p><ol start="10"><li><p>在 HackMii 主菜单中，选择 <strong>BootMii...</strong> 并按 <strong>A</strong>。 你会得到另一个菜单。</p></li><li><p>将 BootMii 作为 <strong>IOS</strong> 安装。 这将永远有效。</p></li><li><p>如果您是其中一位幸运儿，请选择 <strong>install Bootmii as Boot2</strong>，然后选择 <strong>Yes, continue</strong> 并让它安装。</p></li></ol></blockquote><p>完成后，返回主菜单并选择退出。</p><p>它会自动启动 Homebrew 频道。 除非您已经下载了一些应用程序，否则您可能只会看到背景。</p><p>您可以按 <strong>Home</strong> 调出菜单并回到Wii主界面。</p><p><strong>如果你安装了BootMii</strong></p><p>如果你安装了BootMii，不管是boot2还是IOS，都推荐你用它来做NAND备份。 此备份可用于将 Wii 恢复到工作状态，以防您将其变砖。</p><p>您可以在 BootMii 页面上了解如何启动 BootMii 和进行备份。</p><p>如果您将 BootMii 安装为 Boot2，每次启动 Wii 时都会出现 BootMii 菜单（这个菜单下手柄按键无效，需要按开机键（确认）、弹出光碟键（选择）来移动光标选择项目进入）。</p><blockquote><p>如果您不想这样，请重命名/移动 SD 卡上的“bootmii”文件夹。<br> 或者，您可以在BootMii配置文件中启用 Wii 菜单自动启动。</p></blockquote><h2 id="下一个是什么" tabindex="-1">下一个是什么？ <a class="header-anchor" href="#下一个是什么" aria-label="Permalink to &quot;下一个是什么？&quot;">​</a></h2><p>这主要取决于你想做什么。</p><p><strong>我想运行基本的自制应用程序：</strong></p><p>=&gt; 你已经完成了！请访问<a href="http://www.google.com/url?q=http%3A%2F%2Fwiibrew.org%2Fwiki%2FList_of_homebrew_applications&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw2u6QcxyywF1HovIQxe_v6W" target="_blank" rel="noreferrer">Homebrew自制应用程序列表</a>。如果您需要帮助进行设置，也可以访问我们的<a href="/wiisoftmodguide/en/how-to-use/homebrew-channel.html">Homebrew自制应用程序</a>。</p><p><strong>我想从 USB 驱动器加载备份游戏，安装 WAD：</strong></p><p>=&gt; 请参阅<a href="/wiisoftmodguide/cn/backup-launchers/installation.html">安装cIOS</a>，这将允许您使用这些更高级的应用程序。</p><p><strong>我想更改系统菜单主题：</strong></p><p>=&gt; 先安装<a href="/wiisoftmodguide/en/system-hacks/priiloader.html">Priiloader</a>，他提供额外的防砖保护，然后继续阅读<a href="/wiisoftmodguide/en/system-hacks/Mymenuify.html">MyMenuify</a>，该应用程序允许您更改系统菜单主题。</p>',78),s=[n];function m(c,h,g,b,d,u){return r(),a("div",null,s)}const B=e(p,[["render",m]]);export{W as __pageData,B as default};