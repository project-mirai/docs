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
    "revision": "93b0548d7ed21fb8a677d542f464eca8"
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
    "url": "assets/img/img1.523ba04c.png",
    "revision": "523ba04c3cd53330296404976c6d4660"
  },
  {
    "url": "assets/img/img2.02fc09b5.png",
    "revision": "02fc09b5e0de5482512275fd725dd50c"
  },
  {
    "url": "assets/img/img3.58a61018.png",
    "revision": "58a61018b781c0b78d7ce41619b4301b"
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
    "url": "assets/js/3.7f5a2c84.js",
    "revision": "9ccb8e09245363ab0d07dd2a538fb867"
  },
  {
    "url": "assets/js/30.63095119.js",
    "revision": "842e60bcd908c2c8c367d3e93452dca1"
  },
  {
    "url": "assets/js/31.96089e4d.js",
    "revision": "0c88dde8254d9300cdc7e28f657ac961"
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
    "url": "assets/js/6.3e134e58.js",
    "revision": "85d8fe546992b247af3c5b2a2fcd82ed"
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
    "url": "assets/js/app.079e73c4.js",
    "revision": "c78be09a7a1e1e00f3ac2ca8ca66d108"
  },
  {
    "url": "Bots.html",
    "revision": "b78673cfe49ced7c38459ca13d4b84e3"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "1ffe2aaba53122c16c9256957a37622e"
  },
  {
    "url": "console/Appendix.html",
    "revision": "93751da3e94c2621bd1ccbd211b56c96"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "8ac85e39c126f614f40c78089a7412b5"
  },
  {
    "url": "console/Commands.html",
    "revision": "69b5a5bbb3279c76fa66d714b8cc5d32"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "87108794cf4c823c5f995f118396f060"
  },
  {
    "url": "console/Contributing.html",
    "revision": "7a5c74fbae990ad06754b79a47834473"
  },
  {
    "url": "console/Extensions.html",
    "revision": "e5e1acffc776eff062eb8aabead8f0b8"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "9e447df43285ec536db1a2613ef58ce0"
  },
  {
    "url": "console/index.html",
    "revision": "ee7b4f02714ba8553aad5b11535c8918"
  },
  {
    "url": "console/Permissions.html",
    "revision": "17e584bc52376f16c48942291a366613"
  },
  {
    "url": "console/PluginData.html",
    "revision": "f919a833154e6ba806cef724d1e2282b"
  },
  {
    "url": "console/Plugins.html",
    "revision": "4299c387befc4596d8c4b0ea1a0af452"
  },
  {
    "url": "console/QA.html",
    "revision": "92469ff5455f51c59e5905554013679b"
  },
  {
    "url": "console/Run.html",
    "revision": "22d108270d45cc9efe543a51f6260912"
  },
  {
    "url": "Contacts.html",
    "revision": "2262a615f72a4e0e46fe4d9296ac1423"
  },
  {
    "url": "CoreAPI.html",
    "revision": "74a43c3589a87fed45e4f06e96e20a70"
  },
  {
    "url": "Events.html",
    "revision": "f2693989205640f953adc41f7c0eb508"
  },
  {
    "url": "Evolution.html",
    "revision": "0262662b99555515dc36de45aa54f415"
  },
  {
    "url": "index.html",
    "revision": "19316b1e20cf943cb42590d256131997"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "09bc83e6ea940c8e95efb4a1ca4cc531"
  },
  {
    "url": "Messages.html",
    "revision": "960b8264f02bea8d5c7fca92957a3b80"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "a04a442386994cdc974f3a1f7179b83a"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "1a593cd28d139bbf37b31998afc06e5f"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "567159ed5975e93d8b9037052712cf3d"
  },
  {
    "url": "Preparations.html",
    "revision": "8c520cf5f2e6ad52a3a4885c6e96e589"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "bcb261c3107ce44d817b2ef0c5cda6cf"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "e7e0f7e921d837291c93b71fb773a4b3"
  },
  {
    "url": "UserManual.html",
    "revision": "2719309ac5a594060870a4e902a20df6"
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
