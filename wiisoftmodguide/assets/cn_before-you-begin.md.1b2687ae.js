import{_ as i,o as a,c as e,O as l}from"./chunks/framework.0a4d7c04.js";const b=JSON.parse('{"title":"在你开始之前","description":"","frontmatter":{},"headers":[],"relativePath":"cn/before-you-begin.md","filePath":"cn/before-you-begin.md"}'),r={name:"cn/before-you-begin.md"},t=l('<h1 id="在你开始之前" tabindex="-1">在你开始之前 <a class="header-anchor" href="#在你开始之前" aria-label="Permalink to &quot;在你开始之前&quot;">​</a></h1><p>在你软解你的Wii之前，这里有一些重要信息，<strong>请务必阅读完所有内容！</strong></p><div class="danger custom-block"><p class="custom-block-title">使用了非韩版系统的韩版机器用户注意</p><p>如果你的机器工作正常，请不要使用本指南，使用非韩版系统更新到4.3版本会导致003错误，机器将无法启动。</p></div><h2 id="这合法吗" tabindex="-1">这合法吗？ <a class="header-anchor" href="#这合法吗" aria-label="Permalink to &quot;这合法吗？&quot;">​</a></h2><p>当然。软解Wii百分百合法。然而这违反了任天堂的服务条款，所以你将失去质保（更别提你现在早就失去质保了）。</p><p>根据你所采取的步骤，你的主机将允许运行备份后的Wii（和GameCube）游戏。这仅适用于法律允许创建合法备份的地区。本指南不提倡盗版，也不帮助您使用盗版。</p><h2 id="有什么风险" tabindex="-1">有什么风险？ <a class="header-anchor" href="#有什么风险" aria-label="Permalink to &quot;有什么风险？&quot;">​</a></h2><p><strong>总会</strong>有一点小小的风险，使你的Wii变砖（完全失去使用以及维修价值）。这不是本指南所独有的，所有指南都会存在这个问题。不过，信誉良好的指南往往风险非常低。例如，初始的破解变砖概率极低，其他更高级的步骤确实需要一些额外的保护防止变砖。在涉及这些可能导致变砖的步骤时，本指南将提前提及。</p><p>提醒一下，这些步骤比破解安卓手机或者是Xbox游戏机<strong>简单很多</strong>。实际上，Wii主机可能是史上最容易破解并且也是能最安全破解的机器之一。</p><h2 id="这会付出什么代价" tabindex="-1">这会付出什么代价？ <a class="header-anchor" href="#这会付出什么代价" aria-label="Permalink to &quot;这会付出什么代价？&quot;">​</a></h2><p>一点你的空闲时间。😉</p><p>提示：不要花钱购买任何破解指南。</p><h2 id="我需要什么" tabindex="-1">我需要什么？ <a class="header-anchor" href="#我需要什么" aria-label="Permalink to &quot;我需要什么？&quot;">​</a></h2><ul><li>一台Wii主机（或者在虚拟Wii模式的WiiU主机）。</li><li>一张SD卡。SDHC仅能使用在系统版本4.0及更高的版本中，并且一些漏洞完全不支持SDHC。SDXC可能可以使用，但是技术上讲Wii游戏机完全不支持。</li><li>一台可以读取SD卡的电脑，或者你有一个读卡器。</li><li>如果你正在软解一台<strong>Wii</strong>，<strong>你并不需要任何游戏</strong>。</li><li>如果你正在软解一台<strong>Wii U (Virtual Wii)</strong>，你需要使用合适的<strong>漏洞</strong>。现存的WiiU可用漏洞需要一款特定游戏 <ul><li>提示：对于WiiU，也同样可能（并且也推荐）去软解WiiU相关的部分，然后再从软解的WiiU去修改Virtual Wii。这篇指南并不涵盖Wii U部分相关的破解。但是你可以从网上找到许多其他的指南。</li></ul></li></ul><h2 id="在我的wii上可以使用吗" tabindex="-1">在我的Wii上可以使用吗？ <a class="header-anchor" href="#在我的wii上可以使用吗" aria-label="Permalink to &quot;在我的Wii上可以使用吗？&quot;">​</a></h2><p>除了Wii Mini外，这篇指南将适用于所有版本的Wii。这里也有很多其他的方法去软解一台Wii Mini，但是这篇指南目前并不涵盖这一部分。</p><p>指南<strong>完全</strong>适用于：</p><ul><li>硬解芯片的Wii</li><li>所有颜色的Wii： 白色，黑色，红色，蓝色，紫罗兰色，……</li><li>所有区域：PAL，NTSC-U，NTSC-J，韩国</li><li>已经被软解过的Wii主机</li><li>“家庭版”Wii（阉割了GameCube接口）</li></ul><h2 id="在我的wii-u-virtual-wii-上可以使用吗" tabindex="-1">在我的Wii U (virtual Wii)上可以使用吗? <a class="header-anchor" href="#在我的wii-u-virtual-wii-上可以使用吗" aria-label="Permalink to &quot;在我的Wii U (virtual Wii)上可以使用吗?&quot;">​</a></h2><p>本指南确实包含WiiU下的vWii模式破解。然而我们建议将WiiU破解，这样会自动开启vWii部分的功能，本指南目前并不涵盖这一部分。</p><p>注意，部分homebrew程序并不适配vWii。在安装程序到NAND中时请小心：</p><ul><li>Homebrew Channel: 100% 安全</li><li>cIOS: 遵从指南，基本安全</li><li>Priiloader: 千万<em>不要</em>安装，安装后vWii即刻变砖</li><li>Channels (WAD files): 请多多确认是否是配vWii</li><li>Custom Themes: 千万<em>不要</em>安装，会使vWii变砖</li></ul><p>任何不安装程序的homebrew都是安全的。</p><p>提示：如果你不小心把vWii变砖，WiiU模式依然可以工作。目前没有任何可能从vWii下使Wii U变砖。</p><h2 id="我会失去什么" tabindex="-1">我会失去什么？ <a class="header-anchor" href="#我会失去什么" aria-label="Permalink to &quot;我会失去什么？&quot;">​</a></h2><p>功能方面，Wii不会丢失任何东西。一切仍将像软解之前一样工作。所以软解只会给你<strong>附加功能</strong>。</p><p>我们保证您唯一可以失去的只有您的保修；但是，由于Wii的停产，这应该不是问题。</p><h2 id="我会得到什么" tabindex="-1">我会得到什么？ <a class="header-anchor" href="#我会得到什么" aria-label="Permalink to &quot;我会得到什么？&quot;">​</a></h2><p>当然，如果没有任何好处，这样做是没有意义的。</p><p>取决于你所做的修改，你可以得到：</p><ul><li>运行无数的Homebrew自制程序</li><li>你可以备份游戏，从USB设备或SD卡中游玩</li><li>你可以运行其他地区的游戏（解除锁区）</li><li>重新激活联网功能（RiiConnect24）；包括天气、新闻平岛还有多人在线模式</li><li>把你的Wii变成影音中心（从USB设备、SD卡或DVD*中播放电影、音乐）</li><li>自制系统菜单主题</li><li>移动你的光盘频道</li><li>使用模拟器游玩各种老游戏</li><li>使用游戏外挂，比如大乱斗模组和贴图修改</li><li>还有更多！</li></ul><p>* DVDs仅能在老版本Wii上工作。新版本的Wii仅能从SD卡或USB设备中播放。这是由于硬件的修改导致的。</p><h2 id="可以撤销我所作的软解吗" tabindex="-1">可以撤销我所作的软解吗？ <a class="header-anchor" href="#可以撤销我所作的软解吗" aria-label="Permalink to &quot;可以撤销我所作的软解吗？&quot;">​</a></h2><p>技术上来说是可以的。不过，这些操作非常危险，很容易使你的Wii变砖，所以我们并不提供这个教程。</p><p>即使你撤销了软解，你所做过的修改还是可以被追踪到。任天堂可以轻易的看到你对设备的一切改动。所以你并不能因此重新获取你的保修，并且任天堂可能对修复额外收取费用。</p><p>结论：一旦软解后，他就始终是软解过的机器了。</p><p>不过，软解的Wii可以做到普通Wii所有的一切，没有理由去“反软解”他。软解也并不影响将来对主机的任何修改。</p><h2 id="好多页要读-我该首先做什么呢" tabindex="-1">好多页要读……我该首先做什么呢？ <a class="header-anchor" href="#好多页要读-我该首先做什么呢" aria-label="Permalink to &quot;好多页要读……我该首先做什么呢？&quot;">​</a></h2><p>第一步就是初始化软解程序。这个步骤非常简单，只需要5分钟即可完成。</p><p>在这篇指南中，初始化软解程序被称为<strong>软解指南</strong>。指南可以从左侧轻易找到，或者直接点击下面的“下一页”按钮。</p><p>初始化软解完成后，你就可以随你喜好安装自制程序了。如果需要完成页面的其他步骤，您可以在页面顶部的“必需”部分找到此信息。</p>',41),o=[t];function n(s,h,p,u,c,W){return a(),e("div",null,o)}const m=i(r,[["render",n]]);export{b as __pageData,m as default};
