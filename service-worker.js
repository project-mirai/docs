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
    "revision": "887021e71a6a6f505fd7b023a40fbbea"
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
    "url": "assets/js/16.f89e861d.js",
    "revision": "9d01e5cd9f219dbbf81a4c0a76c5eecb"
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
    "url": "assets/js/3.f864fde9.js",
    "revision": "c5a371e6c5dd49e03ef857eff7cbe1d3"
  },
  {
    "url": "assets/js/30.63095119.js",
    "revision": "842e60bcd908c2c8c367d3e93452dca1"
  },
  {
    "url": "assets/js/31.f47e9479.js",
    "revision": "04b7f13e8b80d7c9ca108baa563ce19f"
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
    "url": "assets/js/app.c43f5f14.js",
    "revision": "4c4e6bba5115059cf58e655ff1a5f796"
  },
  {
    "url": "Bots.html",
    "revision": "d9b84c999b9f2b399132ff6bbcc441c4"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "08f1771defb0b2df25ad842785fae672"
  },
  {
    "url": "console/Appendix.html",
    "revision": "be38e3eb54f6dd1ea66b0f3d3f7bbbcb"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "bb4e02330db654baa404a0f37939879c"
  },
  {
    "url": "console/Commands.html",
    "revision": "b7c3b0de5a68dc69d4314cba8a13dc34"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "edac2b884a4010e82dc99cd4bd7af52b"
  },
  {
    "url": "console/Contributing.html",
    "revision": "979c21c5bf19f6fbab73c102e4bba53f"
  },
  {
    "url": "console/Extensions.html",
    "revision": "271f97014f72f399e9015933cefb8fbc"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "68c91deef6cb8b888882ea0a00f81279"
  },
  {
    "url": "console/index.html",
    "revision": "f797bd32b0be3714457de25fc7657734"
  },
  {
    "url": "console/Permissions.html",
    "revision": "d7b06004cc7a16afef59701b09848413"
  },
  {
    "url": "console/PluginData.html",
    "revision": "e88c958738133f9a8c2839aa2769be7a"
  },
  {
    "url": "console/Plugins.html",
    "revision": "afeb74ce0bad75616492187637574a30"
  },
  {
    "url": "console/QA.html",
    "revision": "2312c9c476d78922e8cbb1c8f6a6f9a4"
  },
  {
    "url": "console/Run.html",
    "revision": "7543de5eba721c098d0139e633793f6e"
  },
  {
    "url": "Contacts.html",
    "revision": "40a615c3bf7c0e8f864087901e73b916"
  },
  {
    "url": "CoreAPI.html",
    "revision": "a97463415c6ff1a29413e2bd0e594fa0"
  },
  {
    "url": "Events.html",
    "revision": "f75b9aa23d94e38b63084dfd25bc2e6b"
  },
  {
    "url": "Evolution.html",
    "revision": "8bbfadd1d84e882ef408e76e0942cd77"
  },
  {
    "url": "index.html",
    "revision": "480f3b4a8fd73194d8a573649b4bac6b"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "b22ea335ae6e6cb1ef23b1b05116a667"
  },
  {
    "url": "Messages.html",
    "revision": "ed394325aec04932dd830fbfe452bc44"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "512e92d9910b9b4e3984e3004a02fa28"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "4349c73e55e4ee7006d080b288252df2"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "fbaa8c212eb1f0051d2a38af815982d5"
  },
  {
    "url": "Preparations.html",
    "revision": "9131c5dc61f1c4ce4f1b9c8727f57615"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "86c52d1aba3b989a039cbdf2fca13abf"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "c894ee0bf45625aef4998d4261b19d95"
  },
  {
    "url": "UserManual.html",
    "revision": "276b189af544354fda2d5da1b820cfc3"
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
