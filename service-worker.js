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
    "revision": "f5f5d54b9168678f7d30047248457fc3"
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
    "url": "assets/js/app.7ac546be.js",
    "revision": "66ecdfde61afa01a7b90ec55760c519c"
  },
  {
    "url": "Bots.html",
    "revision": "485ddcc4d864d09902531479c74170eb"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "4a400c728545366390ddb609fe6a9fba"
  },
  {
    "url": "console/Appendix.html",
    "revision": "2ddae542f5b1bd6e6396c48ea4298cd8"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "c74acc1a22c5fc5c3f693a55bd5867c2"
  },
  {
    "url": "console/Commands.html",
    "revision": "4963c582d95c3a1a28f19078dd650ab8"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "a767bdb14a7ac35ab562dbb3774bb8a9"
  },
  {
    "url": "console/Contributing.html",
    "revision": "7eb2c4bfd44c9b376f74c6012c7120f7"
  },
  {
    "url": "console/Extensions.html",
    "revision": "ae41e2a3e0f034d5814f78dcd525fa1e"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "917cd3b340aaf75022e4fb350d01c68b"
  },
  {
    "url": "console/index.html",
    "revision": "e2e0a16ab1041cb7d5db672c07129ca0"
  },
  {
    "url": "console/Permissions.html",
    "revision": "b738d00661b5b67360007bce1f410f58"
  },
  {
    "url": "console/PluginData.html",
    "revision": "6ecaa361f724bf4a21841653368e79fd"
  },
  {
    "url": "console/Plugins.html",
    "revision": "fbc5eb6c31f66b85ddbbe5e2b6b23884"
  },
  {
    "url": "console/QA.html",
    "revision": "dc15c87efad2999f51a7593b897dc49a"
  },
  {
    "url": "console/Run.html",
    "revision": "33ef8c7c25dbf3b74b3dc11e16614cbb"
  },
  {
    "url": "Contacts.html",
    "revision": "c89d43c42910632f14dfb30815a06967"
  },
  {
    "url": "CoreAPI.html",
    "revision": "5532d80002039146869c48074f90f011"
  },
  {
    "url": "Events.html",
    "revision": "277c34ceddfe63673a9166d871255e33"
  },
  {
    "url": "Evolution.html",
    "revision": "1a6d4eaf108fe4f230fc83b6ac1971e6"
  },
  {
    "url": "index.html",
    "revision": "31cb1dcecaac778417e9db12b979867d"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "76e1504c72a543a7c630743e5fa59419"
  },
  {
    "url": "Messages.html",
    "revision": "b30ab97f7c11cd6d327a7d2a1275a8ca"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "6e3536f18f390f02e0b1dd524b9ccabe"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "14193fc9ac3e387633beccdc2922bc36"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "72c6a0dbfb124051aa5e313ae4f621da"
  },
  {
    "url": "Preparations.html",
    "revision": "79297bb6f6a00055ad939072a38e8f07"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "f0dc32a9782a5ba8eedcff1dd0170321"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "441641375832a347fa67ec33e43a2535"
  },
  {
    "url": "UserManual.html",
    "revision": "535188d55722780f48cc812584dc999b"
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
