/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "36cddce5129806b01bb441dffb13af44"
  },
  {
    "url": "assets/css/0.styles.f46ac581.css",
    "revision": "3d76e72705323794d7506bfe2ab22931"
  },
  {
    "url": "assets/img/a6a3b24b.7c79ea3c.png",
    "revision": "7c79ea3c4208f77aa204907923a53d39"
  },
  {
    "url": "assets/img/img4.595b3088.png",
    "revision": "595b3088a0ae9a0dfce52b4203783581"
  },
  {
    "url": "assets/img/img5.417d99f5.png",
    "revision": "417d99f55149aefc7b721f904197b410"
  },
  {
    "url": "assets/img/img6.c537e515.png",
    "revision": "c537e515c512c40733f820b04e72faec"
  },
  {
    "url": "assets/img/mirai.a2af7a4d.svg",
    "revision": "a2af7a4d5ebeced62ddab5f990362b8c"
  },
  {
    "url": "assets/img/mirai.a6a3d797.png",
    "revision": "a6a3d797a9c97452666c561dc8a708a3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/search.867d45d8.svg",
    "revision": "867d45d8f9c0da0e3e733dd5e7a8d263"
  },
  {
    "url": "assets/js/10.168c5088.js",
    "revision": "5c789a20118df3f5249412a881690f3f"
  },
  {
    "url": "assets/js/11.d6f88faa.js",
    "revision": "6df139a166aacd472626dbd26aadb42a"
  },
  {
    "url": "assets/js/12.9aead096.js",
    "revision": "dd6ccd0f2a7a7f990bb5df26a2a1c981"
  },
  {
    "url": "assets/js/13.21a0ba16.js",
    "revision": "240700c9c2cfb986ecd33578a4887f93"
  },
  {
    "url": "assets/js/14.5aaa4217.js",
    "revision": "2ae56d637f88d22f3af86142b83e3e5d"
  },
  {
    "url": "assets/js/15.28e2a9b3.js",
    "revision": "ffeb72bf6ca6d423b1bafcd726dc88e9"
  },
  {
    "url": "assets/js/16.844b1b62.js",
    "revision": "23f78924e9d4a78cfa72779d856c12ff"
  },
  {
    "url": "assets/js/17.f6bc20ce.js",
    "revision": "021504a9c5a3e101eb49bc5372049a4c"
  },
  {
    "url": "assets/js/18.b7b9b6fc.js",
    "revision": "8fe62452cdf59b8c9b82bbce193ea017"
  },
  {
    "url": "assets/js/19.1f3f1238.js",
    "revision": "34cdf883ddf2b214d0f8e5b708d81b74"
  },
  {
    "url": "assets/js/2.71842359.js",
    "revision": "469d0079c3255826bb1dedffb7325a64"
  },
  {
    "url": "assets/js/20.d9250a0a.js",
    "revision": "1d6533d1fe71864d326f9d29b6abfd34"
  },
  {
    "url": "assets/js/21.85bbf2d0.js",
    "revision": "8d3568a48c4a95d0383e47ee25b34805"
  },
  {
    "url": "assets/js/22.1c609d25.js",
    "revision": "ffd8a77ff396dd7d6b077b719202020a"
  },
  {
    "url": "assets/js/23.6ec3915d.js",
    "revision": "2c1230b5a089240114ee868d09a735ac"
  },
  {
    "url": "assets/js/24.40a073fe.js",
    "revision": "b5a6c45b10e796d060574e9f318c4a0e"
  },
  {
    "url": "assets/js/25.12533ed9.js",
    "revision": "7f04ca4ed9a8b0d6648c79b75cd85354"
  },
  {
    "url": "assets/js/26.5bfea068.js",
    "revision": "8b0b7c5b47b8c6557fd533c982b64abd"
  },
  {
    "url": "assets/js/27.050fe302.js",
    "revision": "dcb1b943cd874d5aa2cf2a6fdd9c529c"
  },
  {
    "url": "assets/js/28.4245df28.js",
    "revision": "09bb7f84bc21820270c497199e29aa8d"
  },
  {
    "url": "assets/js/29.8bed2800.js",
    "revision": "cc836a9da67bae66e3c713894a453128"
  },
  {
    "url": "assets/js/3.f864fde9.js",
    "revision": "c5a371e6c5dd49e03ef857eff7cbe1d3"
  },
  {
    "url": "assets/js/30.f20bb851.js",
    "revision": "73b311bb7ba78a62490573006fb42020"
  },
  {
    "url": "assets/js/31.2f6718a9.js",
    "revision": "664c22cdffc3fa72a3022b4eae6ee325"
  },
  {
    "url": "assets/js/32.e4b08ec6.js",
    "revision": "cc83180c56af226d0c0af2a4933f47f0"
  },
  {
    "url": "assets/js/33.496344d0.js",
    "revision": "a5a958705c1838fd6b07c3c9e36c3f57"
  },
  {
    "url": "assets/js/34.cc62bc15.js",
    "revision": "17900b77d41ac6759d9e37847eac797e"
  },
  {
    "url": "assets/js/35.763f7e12.js",
    "revision": "be0f9faab6a69395b7dbef2ffdee5ae2"
  },
  {
    "url": "assets/js/36.7e80386c.js",
    "revision": "17fe03fc3ee616ea80ead8bf514f6607"
  },
  {
    "url": "assets/js/4.592c417a.js",
    "revision": "3175e409f7f7c5cff1f5230da8ddeca8"
  },
  {
    "url": "assets/js/5.9de30eb9.js",
    "revision": "8bec0931878fb71122538247d35fda27"
  },
  {
    "url": "assets/js/6.0e6149bf.js",
    "revision": "1d9d0100841a7ff918f1b807e591859a"
  },
  {
    "url": "assets/js/7.e23987ed.js",
    "revision": "350c0c4dca3f4aba4a4ac66f96f8007c"
  },
  {
    "url": "assets/js/8.c17033b8.js",
    "revision": "48c1032521ca986c018097bd6a73d1b3"
  },
  {
    "url": "assets/js/9.314063c8.js",
    "revision": "b566e67ba211f4b2ace26b2907aa48ab"
  },
  {
    "url": "assets/js/app.b96e8d80.js",
    "revision": "bdcd1a7bb7af8edc01b2ff3e1c31d61a"
  },
  {
    "url": "Bots.html",
    "revision": "cb8571c90c41e7ad18866723cd746ab5"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "b01367fc63e9cfd49cfa6e47915a4008"
  },
  {
    "url": "console/Appendix.html",
    "revision": "c074c954b5dac3095c319000ab88ad21"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "94e9c77889e0ddd6e5270612feb4ca82"
  },
  {
    "url": "console/Commands.html",
    "revision": "169d7c543a62ad288f0d6ded6bd97c79"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "c8a237c12475d62030d8bcc519736bd5"
  },
  {
    "url": "console/Contributing.html",
    "revision": "196807a61585618e2e479b05b2a8b1cf"
  },
  {
    "url": "console/Extensions.html",
    "revision": "35f167625bf240361f2818cbc43011e0"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "ccc1fb67adfb4f11641f16a21ef4309a"
  },
  {
    "url": "console/index.html",
    "revision": "3667a29732d50bc0019c17701661d7ea"
  },
  {
    "url": "console/Permissions.html",
    "revision": "133b6e41646412ef270dda5b5097cef2"
  },
  {
    "url": "console/PluginData.html",
    "revision": "ba4be96a4273b185068160f51ca0529f"
  },
  {
    "url": "console/Plugins.html",
    "revision": "8a3c0a6d9e299cb78accf1537db1176d"
  },
  {
    "url": "console/QA.html",
    "revision": "93b6493c00ceb5311eb076ab9f9af7b8"
  },
  {
    "url": "console/Run.html",
    "revision": "c352cfb9c2fb1deda3e5f547c703d69a"
  },
  {
    "url": "Contacts.html",
    "revision": "e6097d85c82b97d3071a568835fbf818"
  },
  {
    "url": "CoreAPI.html",
    "revision": "a51f0f7ba5604bd5655e240a157be4ed"
  },
  {
    "url": "EventList.html",
    "revision": "9c64632ecf081f0717678ba2fed9a992"
  },
  {
    "url": "Events.html",
    "revision": "ec61867876fedcc38c4bf57f66a2424c"
  },
  {
    "url": "Evolution.html",
    "revision": "b2ada7df896929c2f0ed245462ba496c"
  },
  {
    "url": "index.html",
    "revision": "46bd214b5497f35b73978e2b49905d2f"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "f7a49dfbc52f0de5bd286c0f08388553"
  },
  {
    "url": "Messages.html",
    "revision": "f1c37ac0084e51fb36fb4d8aaeb5e910"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "37a8cbfd60fb50cdd9ef7b8c0b06de2c"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "ad980666c88c5f7aef442427c24f31c5"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "fbeefe04082ed57385331064ed4c7c9c"
  },
  {
    "url": "Preparations.html",
    "revision": "c644f900f15cc5417200e0bfad671428"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "52f5d43af18d83eb5191c9498a2769a1"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "766ef57de21df04712f7b3eb09df82fe"
  },
  {
    "url": "UserManual.html",
    "revision": "fa1918afdaf0b7d93401aeabe5448904"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
