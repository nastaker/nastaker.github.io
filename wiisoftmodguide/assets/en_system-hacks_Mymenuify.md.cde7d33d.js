import{_ as e,o as s,c as t,O as n}from"./chunks/framework.0a4d7c04.js";const d=JSON.parse('{"title":"Mymenuify (Custom Themes)","description":"","frontmatter":{},"headers":[],"relativePath":"en/system-hacks/Mymenuify.md","filePath":"en/system-hacks/Mymenuify.md"}'),o={name:"en/system-hacks/Mymenuify.md"},a=n(`<h1 id="mymenuify-custom-themes" tabindex="-1">Mymenuify (Custom Themes) <a class="header-anchor" href="#mymenuify-custom-themes" aria-label="Permalink to &quot;Mymenuify (Custom Themes)&quot;">​</a></h1><p>Mymenuify is a custom theme installer for the System menu. If you don&#39;t like the White theme, change it with this app.</p><p>icon.png</p><p>meta.xml</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; standalone=&quot;yes&quot;?&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;app version=&quot;1&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;name&gt;MyMenuify GUI&lt;/name&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;version&gt;2.2&lt;/version&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;release_date&gt;20090529194500&lt;/release_date&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;coder&gt;Xuzz&lt;/coder&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;short_description&gt;Install Wii cSM&lt;/short_description&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;long_description&gt;WARNING: This program allows you to make modifications to your Wii that could cause a brick! Be certain to have brick protection installed! Preloader .29 or bootmii installed as boot2 highly advised!</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">This version of MyMenuify features a GUI interface and allows cSMs to be stored anywhere on your card as well as faster install speeds.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Check for newer versions at http://www.wadder.net in the MyMenu forum. There is also a wiki located at http://www.wadder.net/wiki</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/long_description&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/app&gt;</span></span></code></pre></div><p>Only for</p><p>Wii with System menu versions: 3.2, 4.0, 4.1, 4.2 and 4.3</p><p><strong>Don&#39;t use on the WiiU! This will instantly brick the console!</strong></p><p>Required</p><ul><li><p>An SD card (Best results are with non-SDHC cards, SDHC will only work on 4.0 or above) or USB device formatted to FAT(32).</p></li><li><p>A MYM file of the theme you want. The MYM file needs to be for your System menu VERSION (3.2, 4.0 or 4.1), but can be applied on ANY REGION</p></li><li><p><a href="/wiisoftmodguide/en/useful-tools/nus-downloader.html">NUS Downloader</a></p></li></ul><p><img src="https://lh3.googleusercontent.com/zHwggfjiZkA_r-y-UOkE9lPoUfabk6BngQMvd8gbESJ3Q3VIWN09d1m_IELpC8v06954Cg=w1280" alt=""></p><p><img src="https://lh6.googleusercontent.com/wdeQ-WaHlqKEDVQEe5537GwO8zMlB1P63mRTOKO3md3B7okDn9s8ZT0jYXrYpKhJZVpesQ=w1280" alt=""></p><p><strong>TIP</strong></p><p>A lot of MYM files can be found <a href="http://www.google.com/url?q=http%3A%2F%2Fgbatemp.net%2Fthreads%2Fwii-theme-team-creations.260327%2F&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw0qRZZIAMk6I-TtdT3yBnvf" target="_blank" rel="noreferrer">here</a></p><p><strong>WARNING</strong></p><p>The steps below are dangerous to do. It is HIGHLY RECOMMENDED to install <a href="/wiisoftmodguide/en/system-hacks/priiloader.html">Priiloader</a> or BOOTMII as BOOT2 !</p><p><strong>NOTE: You can also use a .csm file (be sure its for your System menu</strong> <strong>VERSION AND REGION</strong>**!). In that case, skip to step 6**</p><p>Links</p><ul><li>MyMenuPack</li></ul><p>Result</p><ul><li>Changes the theme of the system menu on your Wii.</li></ul><p>Danger Level</p><ul><li><strong>HIGH</strong> - Brick protection required! Only use trusted sources for .mym/.csm files!</li></ul><p>Guide</p><p><img src="https://lh4.googleusercontent.com/gRQg7hly4K9grtsK9y3hTfQoBgG3MvBjavBiorYMr_1qgRnG9MIbHlRWDo7v4YXvUaZeYw=w1280" alt=""></p><p><strong>Computer ----------------------</strong></p><ol><li><em>Downloading &amp; stuff</em></li></ol><ul><li><p>Download the mymenu pack and extract it. Copy the <strong>Mymenuify</strong> folder to the apps folder on the SD card.</p></li><li><p>Run the <strong>Mymenu Setup</strong> and let it install.</p></li></ul><ol start="2"><li>Run the <strong>NUS Downloader</strong>. At the bottom, check <strong>Pack -&gt; Wad</strong>. Also check <strong>Create</strong> <strong>Decrypted Contents</strong>.</li></ol><ul><li><p>Navigate with the database of NUS to System &gt; System menu &gt; <em>Your current system menu version</em></p></li><li><p>Start the NUS download and let it finish.</p></li></ul><ol start="3"><li>Go to the NUS Directory (extras -&gt; open NUSD directory), go to <strong>titles</strong>, then <strong>0000000100000002</strong> and finally the version you just downloaded. You will see a lot of <strong>.app</strong> files here. The one you need to find is different for each system menu:</li></ol><p>Copy the one you need to a place where you can easily find it (like the desktop).</p><ol start="4"><li><p>Run Mymenu. Browse for the source file (the <strong>000000XX.app</strong>) and the <strong>mym</strong> file. Now click <strong>Create Mymenu</strong>. It will generate a <strong>.csm</strong> file. Use <strong>Esc</strong> to get out of Mymenu.</p></li><li><p>Create a new folder on the SD card/USB device (like <strong>CSM</strong>) and place your <strong>csm</strong> file there.</p></li></ol><p><img src="https://lh3.googleusercontent.com/SQgkdMvcwv9KrXHFqLvnMhW3gZiwpn85f7lXd2R67L2wug5kRteGPWlh04iEs5nnZuqzPA=w1280" alt=""></p><p><strong>Wii ----------------------</strong></p><ol start="6"><li>Launch <strong>Mymenuify</strong> and browse for your theme and let it install. Done, Reboot your Wii to see the result!</li></ol><p>If the Wii gives an error or black screen, Run BootMii or Priiloader and install another theme. (Or restore a BootMii backup if you have one).</p>`,37),l=[a];function r(i,p,c,u,g,m){return s(),t("div",null,l)}const y=e(o,[["render",r]]);export{d as __pageData,y as default};