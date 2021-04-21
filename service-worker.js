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
    "revision": "aaa6cc4fa7b6e4c02a958ab0f619a035"
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
    "url": "assets/js/10.28a240a8.js",
    "revision": "b95c674c8c3e5bd31518de2ab7fdb2f3"
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
    "url": "assets/js/16.27f844b1.js",
    "revision": "f27eed6c80820d832fdfc0c993304c3b"
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
    "url": "assets/js/19.c82ba9d6.js",
    "revision": "63d65821f90788f0f75d239efd89506f"
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
    "url": "assets/js/27.f09338b5.js",
    "revision": "fba629801deb46eb7b3ba1277c9532ae"
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
    "url": "assets/js/app.25ae52a6.js",
    "revision": "d76b8fe540a28b5b6e9d9d5957448e70"
  },
  {
    "url": "Bots.html",
    "revision": "33e7a0b2a8e65938247b76076d7e8c14"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "122fbbcc660b45fb078c03f738028f1b"
  },
  {
    "url": "console/Appendix.html",
    "revision": "5cd467ea39f0892f1e3583aa2191c372"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "c2ae688a6d4a09fcb6355c4d7b598f6f"
  },
  {
    "url": "console/Commands.html",
    "revision": "461229ef1a04abc32170de7383c61ade"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "bbf57a38e8108c380cc6618f991cf4bb"
  },
  {
    "url": "console/Contributing.html",
    "revision": "7da193fd9c99127598724458b44f5f36"
  },
  {
    "url": "console/Extensions.html",
    "revision": "c6453bb844273a69c0cebc4a1f770474"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "36eab4491e920f7c735ca7b4f4efc6ab"
  },
  {
    "url": "console/index.html",
    "revision": "50444aecc37ba65ad1d0539313190094"
  },
  {
    "url": "console/Permissions.html",
    "revision": "f10efca25bba496f68350f7fccbc9497"
  },
  {
    "url": "console/PluginData.html",
    "revision": "6657179c90808291ac93a42231e066a4"
  },
  {
    "url": "console/Plugins.html",
    "revision": "1a26186e5a4a8e486dc9d9e496847cfb"
  },
  {
    "url": "console/QA.html",
    "revision": "9dd21bf2be81ae0f8bfdb53cb0e3f613"
  },
  {
    "url": "console/Run.html",
    "revision": "1cbde0263dee5012adc1bd7186908fc6"
  },
  {
    "url": "Contacts.html",
    "revision": "ceb25985ec3701695d78fbb648b2d4b6"
  },
  {
    "url": "CoreAPI.html",
    "revision": "0e3a1454d2805794176d73c22fc51cdf"
  },
  {
    "url": "Events.html",
    "revision": "4ea0a80e075dc108f74d9f6af99bb89d"
  },
  {
    "url": "Evolution.html",
    "revision": "87f4f1aa1d5d496d8fb6d5938c2a582e"
  },
  {
    "url": "index.html",
    "revision": "e61a1ba85fefee72e16cbe2498b0903d"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "976899e23b0b7a0d22082151bae08250"
  },
  {
    "url": "Messages.html",
    "revision": "416f21ee5ece9eb7f7e79fc4960be36c"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "2759aadda12099b72e72146b7b6c9557"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "04ca08d90d928544cc602b02d388b6c9"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "150fa325f24124cd7026db1ff49027eb"
  },
  {
    "url": "Preparations.html",
    "revision": "e755e87980cae2db1787d9cd662f8893"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "e5734ae8ac589c5571d773fee265cf8a"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "81c36955c54766ab3df180005758adf4"
  },
  {
    "url": "UserManual.html",
    "revision": "d4df92ca89e9b8a675195df923e19222"
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
