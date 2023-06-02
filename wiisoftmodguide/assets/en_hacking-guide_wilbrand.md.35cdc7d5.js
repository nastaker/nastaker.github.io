import{_ as o,o as t,c as e,O as i}from"./chunks/framework.0a4d7c04.js";const m=JSON.parse('{"title":"Wilbrand","description":"","frontmatter":{},"headers":[],"relativePath":"en/hacking-guide/wilbrand.md","filePath":"en/hacking-guide/wilbrand.md"}'),n={name:"en/hacking-guide/wilbrand.md"},r=i('<h1 id="wilbrand" tabindex="-1">Wilbrand <a class="header-anchor" href="#wilbrand" aria-label="Permalink to &quot;Wilbrand&quot;">​</a></h1><p><strong>Wilbrand</strong> is an exploit for the Wii that uses a bug in the Wii&#39;s message board (similarly to <a href="/wiisoftmodguide/en/hacking-guide/letterbomb.html">Letterbomb</a>).</p><p>Trivia: This exploit was named after Julius Wilbrand, the person who discovered TNT.</p><p>Some people incorrectly refer to it as Wiibrand.</p><p>Required:</p><ul><li>An SD card (Best results are with non-SDHC cards, SDHC will only work on 4.0 or above) formatted to FAT(32).</li></ul><p>Links:</p><ul><li>Wilbrand Launcher: <a href="http://goo.gl/h3CbS" target="_blank" rel="noreferrer">http://goo.gl/h3CbS</a> (<a href="http://goo.gl/3vKYp" target="_blank" rel="noreferrer">Source code</a>)</li></ul><p>Guide:</p><p><img src="https://lh6.googleusercontent.com/wCfm1kAanQgF2XK4mLEczjWFIncNA7T4dIivNnndwz0X8jHlDScOwcuS39xFEe54t2KIIw=w1280" alt=""></p><p><strong>Wii ----------------------</strong></p><p><em>(If you already know how to get your Wii&#39;s WiFi MAC Address, skip to step 2)</em></p><ol><li>Go to your Wii&#39;s Settings menu. Select &quot;Internet&quot; on page 2. Select &quot;Console Information&quot;. Record your Wii&#39;s MAC Address for use in the next step.</li></ol><p><img src="https://lh6.googleusercontent.com/RIeVwVcpEpmEb3U6Pzol81ubKcqsG-Mc5fySFdepLNp0U3TX11Y6Ee12wYZRy1eoGauKzw=w1280" alt=""></p><p><strong>Computer ----------------------</strong></p><ol start="2"><li><p>Download the <a href="http://goo.gl/h3CbS" target="_blank" rel="noreferrer">Wilbrand Launcher</a> and extract the Zip file.</p></li><li><p>Enter the MAC address of your Wii. Enter your system menu region and version. Make sure to leave &quot;Bundle the Hackmii installer for me&quot; enabled. Optionally specify your SD card for &quot;Copy directly to device&quot;.</p></li><li><p>Click the button with the green envelope to start the download.</p></li></ol><p>If you didn&#39;t specify your SD card in step 4, you will find two new folders in the Wilbrand folder: COPY_TO_SD and HACKMII_INSTALLER.</p><p>Copy the <strong>contents</strong> of the COPY_TO_SD folder to the root of the SD card.</p><p><img src="https://lh3.googleusercontent.com/6WFt5Lzo5wkR8uWdBIoy4v4S5O0F77KCeoaZYV9RfYy0IJaceo3n5GzgInCCcEk2ZZM5kA=w1280" alt=""></p><p><strong>Wii ----------------------</strong></p><ol start="5"><li><p>Insert the SD card into your Wii.</p></li><li><p>Go to your Message Board (button on bottom-right of Menu) and navigate to &quot;Yesterday&quot; (depending on your timezone, the exploit could show up under &quot;Today&quot;).</p></li><li><p>Click on the green envelope with the pink &quot;Bobomb&quot; to run the HackMii installer.</p></li></ol><p><strong>Additional Hackmii installer steps:</strong></p><ol start="8"><li>You will see a Scam warning screen.</li></ol><p>Wait for the message at the bottom to appear, then press <strong>1</strong>.</p><ol start="9"><li>You will see a screen like this one:</li></ol><p><img src="https://lh5.googleusercontent.com/WDWr0lUu6bz8T4QsUKrSNDR2aF0PNuyo5C6vuQlEikKmM-UV6JLHiwHKGxqqXxLD8szrCe1HBH8BpQNR_Z1Z7bsgNLUhOOPVURbp0_mIvboTHftD=w1280" alt=""></p><p>Depending on your wii, it will show different things behind <strong>BootMii:</strong>.</p><ul><li><p>If you see <strong>Can be installed</strong>, you can get BootMii as <strong>boot2</strong> (which gives the <strong>best brick protection</strong> there is).</p></li><li><p>If you see <strong>Can only be installed as an IOS</strong>, you can only get BootMii as <strong>IOS</strong> (which will give you <strong>NO brick protection</strong> on its own).</p></li></ul><p>Press <strong>A</strong> to continue.</p><p>Now we get to the <strong>main menu</strong>, where we can install everything.</p><p>First install the <strong>Homebrew Channel</strong> (choose <strong>Yes, continue</strong>).</p><p>The Homebrew Channel will now be installed on your Wii.</p><p><strong>Optional (Recommended) Steps: Installing BootMii</strong></p><p>BootMii is a helps greatly with Brick protection and it is recommended to install it.</p><p>It is not required however.</p><p><strong>These steps don&#39;t work on WiiU</strong></p><ol start="10"><li><p>In the HackMii main menu, choose <strong>BootMii...</strong> and press <strong>A</strong>. You will get another menu.</p></li><li><p>Before BootMii will work, we need to <strong>prepare our SD card</strong>, so do that first with the third option.</p></li><li><p>Install BootMii as <strong>IOS</strong>. This will always work.</p></li><li><p>If you&#39;re one of the lucky winners, choose <strong>install</strong> <strong>Bootmii as</strong> <strong>Boot2,</strong> then <strong>Yes, continue</strong> and let it install.</p></li></ol><p>Once you&#39;re done, return to the Main menu and choose <strong>Exit</strong>. It will launch the Homebrew Channel. You can press <strong>Home</strong> to bring up a menu and reboot the console.</p><p><strong>If you installed BootMii (Wii only)</strong></p><p>If you installed BootMii, regardless whether it was as boot2 or IOS, it is recommended you use it to create a NAND backup. This backup can be used to restore the Wii to a working state in case you brick it.</p><p>You can learn about launching BootMii and making a backup on the <a href="/wiisoftmodguide/en/how-to-use/bootmii.html">BootMii page</a>.</p><p>If you installed BootMii as Boot2, the BootMii menu will appear every time you boot your Wii.</p><ul><li><p>If you don&#39;t want this, <strong>rename/move</strong> the &quot;bootmii&quot; folder on the SD card.</p></li><li><p>Alternatively, you can enable Wii menu auto-boot in the configuration file.</p></li></ul><p><strong>So, what&#39;s next?</strong></p><p>It mostly depends on what you want to do.</p><p><strong>I want to run basic homebrew applications:</strong></p><p>=&gt; You are already done! Visit the <a href="http://www.google.com/url?q=http%3A%2F%2Fwiibrew.org%2Fwiki%2FList_of_homebrew_applications&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw2u6QcxyywF1HovIQxe_v6W" target="_blank" rel="noreferrer">list of Homebrew Applications</a> on Wiibrew. You can also view our <a href="/wiisoftmodguide/en/how-to-use/homebrew-channel.html">Homebrew Channel page</a> if you need help setting things up.</p><p><strong>I want to load backup games from a USB drive, install WADs:</strong></p><p>=&gt; Continue on to <a href="/wiisoftmodguide/en/backup-launchers/installation.html">install a cIOS</a> which will allow you to use these more advanced apps.</p><p><strong>I want to change the system menu theme (Wii only, will brick WiiU):</strong></p><p>=&gt; First install <a href="/wiisoftmodguide/en/system-hacks/priiloader.html">Priiloader</a> for additional brick protection, then read up on <a href="/wiisoftmodguide/en/system-hacks/Mymenuify.html">MyMenuify</a>, the app which allows you to change the system menu theme.</p>',51),s=[r];function a(l,p,h,u,g,d){return t(),e("div",null,s)}const w=o(n,[["render",a]]);export{m as __pageData,w as default};
