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
    "revision": "5e6dcea09d3a8bf6dcb0b9596305595b"
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
    "url": "assets/js/3.91c205a5.js",
    "revision": "925509aac949f49d567b489b33b0d3b6"
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
    "url": "assets/js/app.43a195ea.js",
    "revision": "f5e62dbb5790f8c3e21618161c787d44"
  },
  {
    "url": "Bots.html",
    "revision": "4614f9678be924d6c6068a039dae9cd8"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "11ca5f1357b9bf4a7765d1c625da8714"
  },
  {
    "url": "console/Appendix.html",
    "revision": "74fad90ed38241901d506143045bcfa3"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "42c9645af1fba560e902d1b7d0320691"
  },
  {
    "url": "console/Commands.html",
    "revision": "3bec91278f3a48cd18cd8109d2d08795"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "9555a410a0eea13e04b228b1dc51203f"
  },
  {
    "url": "console/Contributing.html",
    "revision": "1e99c1c1a6f76acc6862773ff285d507"
  },
  {
    "url": "console/Extensions.html",
    "revision": "9dbe3a39e7cff11fc5e92bba7f54a8cc"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "196363a5aa63e9e32105d8d2b2d92f5b"
  },
  {
    "url": "console/index.html",
    "revision": "dc54e7f08b43a0f4715dbfe26055a5af"
  },
  {
    "url": "console/Permissions.html",
    "revision": "088724f07c21aa95aa59246d28b96ddc"
  },
  {
    "url": "console/PluginData.html",
    "revision": "6c88022f56a5c9c9a7a8d73ddd4446dc"
  },
  {
    "url": "console/Plugins.html",
    "revision": "90f0ad19c241b67846bf89637df0b5ed"
  },
  {
    "url": "console/QA.html",
    "revision": "34e2653bf729461030b536a503c6784b"
  },
  {
    "url": "console/Run.html",
    "revision": "f8a5463f3650248c049da24df831f2be"
  },
  {
    "url": "Contacts.html",
    "revision": "75bdd7f1371ec99e8382da1e884e08be"
  },
  {
    "url": "CoreAPI.html",
    "revision": "8207db251b32cd596362d2f7798b8b38"
  },
  {
    "url": "Events.html",
    "revision": "39ecf2f71f8eb5f75d1262c2ceb49ed2"
  },
  {
    "url": "Evolution.html",
    "revision": "935f6d5a74fd0656a5b6b5c41283db6e"
  },
  {
    "url": "index.html",
    "revision": "1bf7e63fe2c1c765bb07926c3ab80546"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "e4083a750f6e1ce4543294daac9ce3d6"
  },
  {
    "url": "Messages.html",
    "revision": "2884cd18ed12a5f0f3ef1a39ae6ddf4f"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "30f9b42c2fed8fe42f1eb1352d95312e"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "ed5585eeae856cb534be77c928913c9c"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "9f324dc90d283fcba54ad9092b40c296"
  },
  {
    "url": "Preparations.html",
    "revision": "d9b893614c6dfd11cad24e096b87cf04"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "27362ac3e40f73903779979e5d85ee48"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "42a71eebcdc397a1293def1e555cdd80"
  },
  {
    "url": "UserManual.html",
    "revision": "6fdafc6d0e81c3cb31b54a0dc68836ed"
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
