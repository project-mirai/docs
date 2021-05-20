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
    "revision": "ad89f9ae3b6cf025ac8c715287e25f93"
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
    "url": "assets/js/10.12a26488.js",
    "revision": "1071aee2b0f07702a37e56e9c633d3ee"
  },
  {
    "url": "assets/js/11.c1a3ab55.js",
    "revision": "738dd23495484dbb40f02f1a7ff5764a"
  },
  {
    "url": "assets/js/12.9aead096.js",
    "revision": "dd6ccd0f2a7a7f990bb5df26a2a1c981"
  },
  {
    "url": "assets/js/13.fd60c179.js",
    "revision": "d1e3c50c1e2e9de99efd73262b7047e3"
  },
  {
    "url": "assets/js/14.0f632cbe.js",
    "revision": "a1d66483116518b232c491e4201512a1"
  },
  {
    "url": "assets/js/15.e886b38c.js",
    "revision": "a2b548535381f95a576b683de83ef909"
  },
  {
    "url": "assets/js/16.53782edc.js",
    "revision": "a05a0278c9a70f8c7cc9b524c4689d26"
  },
  {
    "url": "assets/js/17.9df56af4.js",
    "revision": "edd031cd1c87455bb6e4e6d314f2795a"
  },
  {
    "url": "assets/js/18.660a2c13.js",
    "revision": "f86292ac5a45d8405e5332f195e03584"
  },
  {
    "url": "assets/js/19.284debd8.js",
    "revision": "5dcad9f80691478d3ad527290999767d"
  },
  {
    "url": "assets/js/2.71842359.js",
    "revision": "469d0079c3255826bb1dedffb7325a64"
  },
  {
    "url": "assets/js/20.1c6e0d92.js",
    "revision": "a90e0dc3e2f367c79eacbbcfa48383e4"
  },
  {
    "url": "assets/js/21.5c94bc16.js",
    "revision": "559a54fef38f1ccdff9652ebcc66cd72"
  },
  {
    "url": "assets/js/22.fe0f19d8.js",
    "revision": "02a6a0457097832ff3ebb4dfca636fbc"
  },
  {
    "url": "assets/js/23.bb0afac4.js",
    "revision": "4ce7fc4787df4bb7662616f59494e7c2"
  },
  {
    "url": "assets/js/24.f09a1176.js",
    "revision": "93f1e7c2748abdb6e8fcaf06301d956b"
  },
  {
    "url": "assets/js/25.57cfa818.js",
    "revision": "da791e96b9c3e1b0b5f60d1009d34129"
  },
  {
    "url": "assets/js/26.8f106b7a.js",
    "revision": "de11eb76790733c8908eb5221955d841"
  },
  {
    "url": "assets/js/27.8b40f209.js",
    "revision": "30fd2b3e3b412ae411d16fbbcf83e666"
  },
  {
    "url": "assets/js/28.6610a1b2.js",
    "revision": "2d87c7fa421de3046a64157d430c3204"
  },
  {
    "url": "assets/js/29.c674e2b2.js",
    "revision": "6854c966b423df5b3c860615f863af53"
  },
  {
    "url": "assets/js/3.856c0040.js",
    "revision": "b6228ff2b3ef391578879970b6023f4f"
  },
  {
    "url": "assets/js/30.63095119.js",
    "revision": "842e60bcd908c2c8c367d3e93452dca1"
  },
  {
    "url": "assets/js/31.56418e31.js",
    "revision": "c38278762f6973ee0a8f4bd1729f108b"
  },
  {
    "url": "assets/js/32.b1eb39aa.js",
    "revision": "ccd583458f50530fc2040391fcd6ca6b"
  },
  {
    "url": "assets/js/33.f199e465.js",
    "revision": "a46d5609fe92c82daa0ba41142b4817f"
  },
  {
    "url": "assets/js/34.8b923d54.js",
    "revision": "394cdcafae9fe6ad18c60ef1066403fc"
  },
  {
    "url": "assets/js/35.996d9d5e.js",
    "revision": "732d02bab7ee9b9fac18f348d2b6d148"
  },
  {
    "url": "assets/js/4.255b9dc1.js",
    "revision": "2e2d049cb20953ed789f09bd27b3c54d"
  },
  {
    "url": "assets/js/5.8eacb8a9.js",
    "revision": "9c8c2f896ab4754358055424089e105a"
  },
  {
    "url": "assets/js/6.b9b2b24f.js",
    "revision": "a06d76fe9f7b8458aa2b9a33f08a30a3"
  },
  {
    "url": "assets/js/7.68cc2776.js",
    "revision": "4353ae9282675482d244304cb16cd3e4"
  },
  {
    "url": "assets/js/8.c17033b8.js",
    "revision": "48c1032521ca986c018097bd6a73d1b3"
  },
  {
    "url": "assets/js/9.c4dc1efc.js",
    "revision": "bf6703c62c06be342d0a80ce62bdb442"
  },
  {
    "url": "assets/js/app.3e537aa9.js",
    "revision": "b142acf28d62f5467c9216949c7c02a8"
  },
  {
    "url": "Bots.html",
    "revision": "19f8d58ee228fd108217357f34ec7fc5"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "f32292580af9a3c62603a93862e0b347"
  },
  {
    "url": "console/Appendix.html",
    "revision": "c72d84b08c741e9f44fbc06dc9406363"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "aa1c2f5d4bb47061f82087f7226bb1a6"
  },
  {
    "url": "console/Commands.html",
    "revision": "5012c837c40b5769898da38c2b1f98f1"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "8da5189dbd583b5acccbd060b493fb5a"
  },
  {
    "url": "console/Contributing.html",
    "revision": "73745261310ed1c15e90b24c29f3d38c"
  },
  {
    "url": "console/Extensions.html",
    "revision": "1efe7520dbb0755bab8b4ef77d85fff1"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "b3b5c63dd9408d8d23ce9abd7a5f21bb"
  },
  {
    "url": "console/index.html",
    "revision": "9c431152e6dbfd1c1765cfede1bb5db7"
  },
  {
    "url": "console/Permissions.html",
    "revision": "76080c9f3e535d8f3fb55e6f0cb74bd1"
  },
  {
    "url": "console/PluginData.html",
    "revision": "f83558f4a4993739139db045c979ef9a"
  },
  {
    "url": "console/Plugins.html",
    "revision": "6a09b44e414d101c7ab36ce56764618b"
  },
  {
    "url": "console/QA.html",
    "revision": "b6870a4a0b0eb0151e816bdb36823abb"
  },
  {
    "url": "console/Run.html",
    "revision": "bb78635c1e7bed91b53de36cbc32efdb"
  },
  {
    "url": "Contacts.html",
    "revision": "991b01327804f87f3933edbccce12715"
  },
  {
    "url": "CoreAPI.html",
    "revision": "a86ba3b02ea0d095878f47f7824a49bd"
  },
  {
    "url": "Events.html",
    "revision": "9a846fdafce9c2073e9e6f1233b0de8a"
  },
  {
    "url": "Evolution.html",
    "revision": "584b9b4dada437015d2f3dfde91e11fd"
  },
  {
    "url": "index.html",
    "revision": "28bb4f9508977f4acb7d2a3e910fc205"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "610eaae2bc89672d1dac0e9fe24f0a66"
  },
  {
    "url": "Messages.html",
    "revision": "d9ca3605eb0f08d564bcd04a983491bd"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "341de98346f26fa8946d7a94c6fd4931"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "3d137fb4c41eb67ad274eb3fe1e8eea6"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "cfea60a1051a44980a482c0a70bb79e1"
  },
  {
    "url": "Preparations.html",
    "revision": "cc1fbb786be204647debb3a182c64f7a"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "32fe9573728f1c12ff09804ff9a0a17f"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "af292b515cacc94b9d19b08fc6ad92a6"
  },
  {
    "url": "UserManual.html",
    "revision": "b660f652593ae106176ba4c05e1a4ff9"
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
