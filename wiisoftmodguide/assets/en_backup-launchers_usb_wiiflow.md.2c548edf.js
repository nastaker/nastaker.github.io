import{_ as e,o,c as a,O as n}from"./chunks/framework.0a4d7c04.js";const w=JSON.parse('{"title":"WiiFlow","description":"","frontmatter":{},"headers":[],"relativePath":"en/backup-launchers/usb/wiiflow.md","filePath":"en/backup-launchers/usb/wiiflow.md"}'),t={name:"en/backup-launchers/usb/wiiflow.md"},s=n(`<h1 id="wiiflow" tabindex="-1">WiiFlow <a class="header-anchor" href="#wiiflow" aria-label="Permalink to &quot;WiiFlow&quot;">​</a></h1><p>Wiiflow is a USB loader based on Coverflow, but this one can be customized in many ways. Unlike other USB loaders, however, it lacks a textual list of games.</p><p>icon.png</p><p><img src="https://lh3.googleusercontent.com/-ehrzUcx2etnAMWMTWArWI_KqPopelMboC_iWrRqsHh911qs4zDqP3Y7iVmCnrtFDfQ1K1TFqlkIV782Ce_AXpTP25oGpM30k9gy0Sra2dZ8m5Bn=w1280" alt=""></p><p>meta.xml</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; standalone=&quot;yes&quot; ?&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;app version=&quot;2.0&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;name&gt;WiiFlow&lt;/name&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;coder&gt;Hibernatus&lt;/coder&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;version&gt;2.0&lt;/version&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;release_date&gt;19.06.2010&lt;/release_date&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;short_description&gt;Wiiflow (IOS249)&lt;/short_description&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;long_description&gt;WiiFlow is a GUI for USB Loader that can be installed on HDD or SD. If you have a FAT partition on your HDD, WiiFlow will always use it instead of your SD card. See the readme to learn how to give priority to an SD card.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/long_description&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/app&gt;</span></span></code></pre></div><p>Official Support Thread: <a href="http://www.google.com/url?q=http%3A%2F%2Fgbatemp.net%2Fthreads%2Fwiiflow-an-open-source-gui-usb-loader.204106%2F&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw2fYcrLp7dd4-_hIiLFDMim" target="_blank" rel="noreferrer">http://gbatemp.net/threads/wiiflow-an-open-source-gui-usb-loader.204106/</a></p><p><strong>Installation</strong></p><p>Download one of the packs at the Wiiflow site: <a href="http://code.google.com/p/wiiflow/downloads/list" target="_blank" rel="noreferrer">http://code.google.com/p/wiiflow/downloads/list</a></p><p>Whatever pack you choose, all you have to do is to extract it to the SD card/USB device (depending on where your homebrew apps are)</p><p>It is recommended to also grab the latest <a href="https://www.google.com/url?q=https%3A%2F%2Fwww.mediafire.com%2Ffolder%2Fbrjas76ggraea%2Fbeta_versions&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw0ONjq_mXCX6qrr_orUtFNr" target="_blank" rel="noreferrer">beta version</a>, and overriding the files from the pack you downloaded above.</p><p>This version has improved support for GameCube backup loading and various other fixes.</p><p>Once setup, you can run WiiFlow with the Homebrew Channel. Alternatively, you can install the forwarder below.</p><p><strong>Forwarder Channel</strong></p><p>Like with any USB loader, Fowarder channels are available to launch the App directly from the Wii menu instead of the Homebrew channel.</p><p>You can find some of them here: <a href="http://www.google.com/url?q=http%3A%2F%2Fsites.google.com%2Fsite%2Fwiiflowiki4%2Fforwarder-channels&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw0d7ZOXq-hsta_BTdCEM2Zb" target="_blank" rel="noreferrer">https://sites.google.com/site/wiiflowiki4/forwarder-channels</a></p><p>To install the channel, place the WAD file on your SD card in SD:/wad/</p><p>You can then install the channel with a <a href="/wiisoftmodguide/en/how-to-use/wad-manager.html">WAD manager</a>.</p><p><strong>Reloading the cache</strong></p><p>WiiFlow uses a cache in order to increase performance. If you make any external changes (eg. installing a game from your computer), you will likely need to clear this cache in order to actually see the changes.</p><p>The cache can be cleared from WiiFlow itself in the Settings menu (option &quot;Reload Cache&quot;).</p><p>Alternatively, you can manually clear the cache by removing the contents of the cache folder. This folder can be found in USB:/wiiflow or SD:/wiiflow depending on your setup (or a different location if configured in wiiflow.ini).</p><p><strong>Additional Configuration</strong></p><p>Wiiflow can be configured through its own <strong>wiiflow.ini</strong> file.</p><p>This file is located in wiiflow&#39;s app folder on the SD card (same place as the boot.dol is). Sometimes it can be in SD:/wiiflow/wiiflow.ini instead.</p><p>Here are some additional lines you can add to this file to configure it.</p><p>They should all be in the [GENERAL] category.</p><p>Note that these settings may already be present, in which case you have to change the existing line.</p><p><strong>Disable Data on USB (load covers and config from SD)</strong></p><p>data_on_usb=no</p><p><strong>Change number of buffered covers (usually not needed, 120 recommended)</strong></p><p>cover_buffer=120</p><p><strong>Disable WiiMote rumble</strong></p><p>rumble=no</p><p><strong>Controls</strong></p><p><strong>Main menu (coverflow)</strong></p><p>-- Up / Down ~ Previous / next game (vertical)</p><p>-- Left / Right ~ Previous / next game (horizontal)</p><p>-- Minus / Plus ~ Previous / next page</p><p>-- B+Minus / B+Plus ~ Alphabetic search</p><p>-- A ~ Select game</p><p>-- B+A ~ Launch game immediately</p><p>-- B+Home ~ Reload</p><p>-- Home ~ Exit</p><p>-- 1 / 2 ~ Previous / next mode</p><p><strong>Game</strong></p><p>-- A on box ~ Show the backside</p><p>-- A out of screen ~ Launch game</p><p>-- B ~ Back to coverflow</p><p>-- Minus / Plus ~ Previous / next game (vertical)</p><p>-- Left / Right ~ Previous / next game (horizontal)</p><p><strong>Settings menus</strong></p><p>-- Minus / Plus ~ Previous / next page</p><p><strong>Coverflow settings</strong></p><p>-- B+Minus / B+Plus ~ Previous / next page</p><p>-- B ~ Faster adjustement (B+A instead of just A to click a button)</p><p>-- B+1 ~ Copy whole coverflow</p><p>-- B+2 ~ Paste coverflow</p><p><strong>More information</strong></p><p>Please visit the <a href="http://www.google.com/url?q=http%3A%2F%2Fsites.google.com%2Fsite%2Fwiiflowiki4%2F&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw0b5jOLFGOI7SdDylaFj0Yz" target="_blank" rel="noreferrer">WiiFloWiki</a> if you need more information about this loader!</p>`,60),l=[s];function i(r,p,c,h,d,g){return o(),a("div",null,l)}const f=e(t,[["render",i]]);export{w as __pageData,f as default};
