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
    "revision": "ee3d137e5b42781127d517eb6afed3e2"
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
    "url": "assets/js/19.9cccafcd.js",
    "revision": "91911c3932910a2d8878bed4b5d87fce"
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
    "url": "assets/js/21.5dbec692.js",
    "revision": "a56b902a920c9264becbc50d2908a76d"
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
    "url": "assets/js/3.f6866a7f.js",
    "revision": "bb8c1126b872c85d4364668a9c6287da"
  },
  {
    "url": "assets/js/30.ba55532d.js",
    "revision": "f4ca094a333a82bb9a4002ae67751c3a"
  },
  {
    "url": "assets/js/31.a3f61a47.js",
    "revision": "e88e62833a74d48afbe510489596dd44"
  },
  {
    "url": "assets/js/32.542ed60c.js",
    "revision": "b005ae27d899933ed299b46a6d932ba4"
  },
  {
    "url": "assets/js/33.a6e1168e.js",
    "revision": "f8bc4ff5847d3f9cd22022a6de57deb2"
  },
  {
    "url": "assets/js/34.0bcd825a.js",
    "revision": "dabac8df9cccb854de39a933de5be4f0"
  },
  {
    "url": "assets/js/35.cf13f812.js",
    "revision": "5dbfb8b07ab7da044fa0b41b4d27f25d"
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
    "url": "assets/js/app.58eb4c79.js",
    "revision": "61fadceec71526f6806b7ceaebbda2c3"
  },
  {
    "url": "Bots.html",
    "revision": "e52f0006a98b855a12fd1919c2b6a09c"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "8725fe695d8cf58b1c71a76654847574"
  },
  {
    "url": "console/Appendix.html",
    "revision": "5208defb679596af95f88fda697640e1"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "b1ff2a084fcf7a1c627c3912deefb297"
  },
  {
    "url": "console/Commands.html",
    "revision": "73f54c1a12b5ff85a5f88859f31868d3"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "36357c299dbf4882b77189d8589aaaa2"
  },
  {
    "url": "console/Contributing.html",
    "revision": "6a871946142bc8d32120f7ef7d1af33c"
  },
  {
    "url": "console/Extensions.html",
    "revision": "a4485e84292a4dc3009da1bfd560781e"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "b45e912eb53c95f493c8883d7b7c092a"
  },
  {
    "url": "console/index.html",
    "revision": "899d11550de7d73b6bb8b1cbf7d8acf4"
  },
  {
    "url": "console/Permissions.html",
    "revision": "d1ecc4fcffe912da01e1d383706e6197"
  },
  {
    "url": "console/PluginData.html",
    "revision": "47746e08e8fdb9437b13588086e6736d"
  },
  {
    "url": "console/Plugins.html",
    "revision": "23eca38304737e1b353d42ca84fbb6a3"
  },
  {
    "url": "console/QA.html",
    "revision": "985362df0317fb635b5b5f4135986d11"
  },
  {
    "url": "console/Run.html",
    "revision": "156c03467b6a5367a34ee3b25f32b643"
  },
  {
    "url": "Contacts.html",
    "revision": "5a631d65e71b1afdf9a8c0fab2e984fb"
  },
  {
    "url": "CoreAPI.html",
    "revision": "23f3459c7e0cef216aeaa91dacc467c7"
  },
  {
    "url": "EventList.html",
    "revision": "b9ea8416cd4f737a4949a3582c0e35f8"
  },
  {
    "url": "Events.html",
    "revision": "7465928927f1e27fc5b7921d5bd6d4d0"
  },
  {
    "url": "Evolution.html",
    "revision": "dfe0fe53456b22c33cb60a1407f080f1"
  },
  {
    "url": "index.html",
    "revision": "9d0df2357edeaa227a2257c9aff72077"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "5f612364e3dc0ab58aeec3b3950df279"
  },
  {
    "url": "Messages.html",
    "revision": "2c2f3cfd91dc1472d76e10ed2de27c7f"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "7f0432c52b2b91638dc6bb75734e497f"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "6cc016b4b01ac7f65cd166e64c0cfb7d"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "d07a94c678b0a7e0afef1978a53961c2"
  },
  {
    "url": "Preparations.html",
    "revision": "cfdd3c470762b07a798c60d88aa6dd2c"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "54973459b50ce27fee8dec9b1fc06922"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "988af80f0b8db1aeaf84d9fde9acf949"
  },
  {
    "url": "UserManual.html",
    "revision": "80a47cc4d08c481d27208517d3e0cb4d"
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
