import{_ as t}from"./chunks/bannerbomb1.4496f07a.js";import{_ as e,o,c as i,O as n}from"./chunks/framework.0a4d7c04.js";const f=JSON.parse('{"title":"flashhax","description":"","frontmatter":{},"headers":[],"relativePath":"cn/hacking-guide/flashhax.md","filePath":"cn/hacking-guide/flashhax.md"}'),a={name:"cn/hacking-guide/flashhax.md"},s=n('<h1 id="flashhax" tabindex="-1">flashhax <a class="header-anchor" href="#flashhax" aria-label="Permalink to &quot;flashhax&quot;">​</a></h1><h2 id="flashhax-is-a-software-exploit-in-the-wii-internet-channel" tabindex="-1"><strong>FlashHax</strong> is a software exploit in the Wii Internet Channel. <a class="header-anchor" href="#flashhax-is-a-software-exploit-in-the-wii-internet-channel" aria-label="Permalink to &quot;**FlashHax** is a software exploit in the Wii Internet Channel.&quot;">​</a></h2><p><u>Required</u>:</p><ul><li>A Wii with an internet connection and the Internet Channel already installed (it is no longer available for download)</li><li>(Optional) To install BootMii (recommended), you will need an SD card (not SDXC, preferably not SDHC as well)</li></ul><p><strong>Wii</strong></p><ol><li>Open the Internet Channel from the Wii menu.</li><li>Navigate the browser to the site flashhax.com (press the WWW button to enter a web address)</li><li>If asked, choose the correct region for your console.</li><li>You will see a message to bookmark this page. Click the Star icon on the bottom and click the &quot;Add to favorites&quot; button. A new tile will be added for the site with the name &quot;Exploit&quot;</li><li>From the Favorites page, click on the &quot;Exploit&quot; tile. The page should load again; but this time is should download a payload for the installer. It is possible that your console freezes (cursor is unresponsive). In that case, shut down the console by holding the power button (on the console itself) and try again from this step. If you cannot get it to work after multiple tries, try another exploit.</li><li>After a few seconds; the Scam warning screen of the HackMii installer should pop up. Wait until the message appears on the bottom and press 1 to continue.</li></ol><p><img src="'+t+'" alt="图片1" title="Scam Warning"></p><p>Depending on your wii, it will show different things behind <strong>BootMii</strong>:.</p><p>If you see <strong style="color:#38761d;font-family:&#39;Bitter&#39;;">Can be installed</strong>, you can get BootMii as <strong>boot2</strong> (which gives the <strong>best brick protection</strong> there is).</p><p>If you see <strong style="color:#741b47;font-family:&#39;Bitter&#39;;">Can only be installed as an IOS</strong>, you can only get BootMii as <strong>IOS</strong> (which will give you <strong>NO brick protection</strong> on its own).</p><p>Press <strong>A</strong> to continue.</p><p>Now we get to the <strong>main menu</strong>, where we can install everything.</p><p>First install the <strong>Homebrew Channel</strong> (choose <strong>Yes, continue</strong>).</p><p>The Homebrew Channel will now be installed on your Wii.</p><p><strong>Optional (Recommended) Steps: Installing BootMii</strong></p><blockquote><p>BootMii is a helps greatly with Brick protection and it is recommended to install it.</p><ol start="7"><li><p>In the HackMii main menu, choose <strong>BootMii...</strong> and press <strong>A</strong>. You will get another menu.</p></li><li><p>Install BootMii as <strong>IOS</strong>. This will always work.</p></li><li><p>If you&#39;re one of the lucky winners, choose <strong>install Bootmii as Boot2</strong>, then <strong>Yes, continue</strong> and let it install.</p></li></ol></blockquote><p>Once you&#39;re done, return to the Main menu and choose Exit. It will reboot the Wii.</p><ol start="13"><li><strong>Now you have to delete bannerbomb of the SD card!</strong> (just delete the &quot;atkn&quot; folder inside private/wii/title/).</li></ol><p>Don&#39;t forget to restore your old private folder if you had one!</p><p><strong>If you installed BootMii</strong></p><p>If you installed BootMii, regardless whether it was as boot2 or IOS, it is recommended you use it to create a NAND backup. This backup can be used to restore the Wii to a working state in case you brick it.</p><p>You can learn about launching BootMii and making a backup on the BootMii page.</p><p>If you installed BootMii as Boot2, the BootMii menu will appear every time you boot your Wii.</p><blockquote><p>If you don&#39;t want this, rename/move the &quot;bootmii&quot; folder on the SD card.<br> Alternatively, you can enable Wii menu auto-boot in the configuration file.</p></blockquote><h2 id="so-what-s-next" tabindex="-1">So, what&#39;s next? <a class="header-anchor" href="#so-what-s-next" aria-label="Permalink to &quot;So, what&#39;s next?&quot;">​</a></h2><p>It mostly depends on what you want to do.</p><p><strong>I want to run basic homebrew applications:</strong></p><p>=&gt; You are already done! Visit the <a href="http://www.google.com/url?q=http%3A%2F%2Fwiibrew.org%2Fwiki%2FList_of_homebrew_applications&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw2u6QcxyywF1HovIQxe_v6W" target="_blank" rel="noreferrer">list of Homebrew Applications</a> on Wiibrew. You can also view our <a href="/wiisoftmodguide/en/how-to-use/homebrew-channel.html">Homebrew Channel page</a> if you need help setting things up.</p><p><strong>I want to load backup games from a USB drive, install WADs:</strong></p><p>=&gt; Continue on to <a href="/wiisoftmodguide/en/backup-launchers/installation.html">install a cIOS</a> which will allow you to use these more advanced apps.</p><p><strong>I want to change the system menu theme:</strong></p><p>=&gt; First install <a href="/wiisoftmodguide/en/system-hacks/priiloader.html">Priiloader</a> for additional brick protection, then read up on <a href="/wiisoftmodguide/en/system-hacks/Mymenuify.html">MyMenuify</a>, the app which allows you to change the system menu theme.</p>',32),r=[s];function l(h,p,c,u,d,g){return o(),i("div",null,r)}const b=e(a,[["render",l]]);export{f as __pageData,b as default};