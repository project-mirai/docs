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
    "revision": "c179b757618102cf24fae9d8206cd86a"
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
    "url": "assets/js/12.a55bc776.js",
    "revision": "9911d387e7e92175582856f25465b752"
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
    "url": "assets/js/17.e99fc27d.js",
    "revision": "654410f4b192a576c3e77be330ec25bf"
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
    "url": "assets/js/20.f3a25a66.js",
    "revision": "c6cc350c6d35d362ab2c7f9c04f2663e"
  },
  {
    "url": "assets/js/21.862f7545.js",
    "revision": "fddbb50a67517a9d12c35efe70f5f693"
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
    "url": "assets/js/33.5d5844bf.js",
    "revision": "5c882082aee443e7896c53edb81d7b37"
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
    "url": "assets/js/app.1f7fd54f.js",
    "revision": "28f3e4a495d069fc582f4b5eaf14288c"
  },
  {
    "url": "Bots.html",
    "revision": "58de52ca5e50d4791313bdde8ecf0d38"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "07eb8edd78681aec2d30d66e64d7a906"
  },
  {
    "url": "console/Appendix.html",
    "revision": "01493abdc949a6be32b43d123a3da33e"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "c53c398212d17c334f58bbe621e913ab"
  },
  {
    "url": "console/Commands.html",
    "revision": "1a4c3b18c70e62bf4785d7a6e66cd2e0"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "66f7acb74f479ede551cb10df735fcc9"
  },
  {
    "url": "console/Contributing.html",
    "revision": "0c6e66e10238a77336bdba4875bffb14"
  },
  {
    "url": "console/Extensions.html",
    "revision": "279bd4223eb68adf5460068a2d9065f7"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "94a64c3d8cc6503df0e06c8b2eb63950"
  },
  {
    "url": "console/index.html",
    "revision": "01b135988678b7a3c8671b2ff8b12ca4"
  },
  {
    "url": "console/Permissions.html",
    "revision": "ac297867a312c171e9dc534908e94be1"
  },
  {
    "url": "console/PluginData.html",
    "revision": "8998cb03be4ad53683ff71421461c06a"
  },
  {
    "url": "console/Plugins.html",
    "revision": "d680ffb9b98b8ae500cdfbad2ad28c49"
  },
  {
    "url": "console/QA.html",
    "revision": "a7270f27a576ff90b4505bd35ccc9839"
  },
  {
    "url": "console/Run.html",
    "revision": "18e51510f2dfa6915414afa6a69ae750"
  },
  {
    "url": "Contacts.html",
    "revision": "7457fc6ffa3a464c0443402f657f76c2"
  },
  {
    "url": "CoreAPI.html",
    "revision": "ccf096883cb7f6796992e6c3dcd13931"
  },
  {
    "url": "EventList.html",
    "revision": "4b4093dacc457c57cad31a63034e69fa"
  },
  {
    "url": "Events.html",
    "revision": "aa5eb688887b0d3e97abfd52ff8eb326"
  },
  {
    "url": "Evolution.html",
    "revision": "0aa9c47388a86217b7a8db350bc6503a"
  },
  {
    "url": "index.html",
    "revision": "049c5a5469cf6daf67a913faafacb271"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "5a86f78419f88d08a9399e73f24f62a5"
  },
  {
    "url": "Messages.html",
    "revision": "3b04475c8d69bff2f5777a0039efed92"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "316401afab644ffbcfb5e084b611c4f4"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "601bdb51ce373afe90fbdf3a9e260d1f"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "d330b304a75fb4a4763e70baae012fc2"
  },
  {
    "url": "Preparations.html",
    "revision": "5adfc9aa52b8ee6e1f58af8e125947be"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "1babe304b79790798cd9d90985794558"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "581d164aa877afd9c10c84812582a746"
  },
  {
    "url": "UserManual.html",
    "revision": "c3f0f85bbeb51c654aa63821d13a700d"
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
