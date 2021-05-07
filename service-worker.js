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
    "revision": "b7f642a12e0dddb4672220fcec55bb7e"
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
    "url": "assets/js/app.78b77e74.js",
    "revision": "c6be5aaa4a2279d13e6032ea4e073a1d"
  },
  {
    "url": "Bots.html",
    "revision": "dd8af7d56a676e9b795e9f93e5349c99"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "8a769510e13cb5a9a00a53c102972efe"
  },
  {
    "url": "console/Appendix.html",
    "revision": "e306e7f905278a9531a1e6f50800f89e"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "bb592365992a8130407c08ac8bebff65"
  },
  {
    "url": "console/Commands.html",
    "revision": "d442393df9100feeb82346da79a64618"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "ee845f0d229cc5d626d8b6871af25a9e"
  },
  {
    "url": "console/Contributing.html",
    "revision": "02e743719d44b63fe684174efde0ad43"
  },
  {
    "url": "console/Extensions.html",
    "revision": "41de7a3e1983fecb8d3d07cf15b25e6d"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "ae5fa39734f4099607022d49fdd6798a"
  },
  {
    "url": "console/index.html",
    "revision": "d15d730976e8322ef3358353d76fda45"
  },
  {
    "url": "console/Permissions.html",
    "revision": "1c86e628112b199d1dbb3fde1ae8b1c6"
  },
  {
    "url": "console/PluginData.html",
    "revision": "0510415fe036af215ca8724e321cddfb"
  },
  {
    "url": "console/Plugins.html",
    "revision": "4eaaaa09f102e4c2f8ef9059ff9c7764"
  },
  {
    "url": "console/QA.html",
    "revision": "8be120d23fede3859e1a7e3ce107c2ca"
  },
  {
    "url": "console/Run.html",
    "revision": "ea7a941f674a9188104d8ced1a99fb2a"
  },
  {
    "url": "Contacts.html",
    "revision": "0744927eb0c0bdc9df9d2dc31b9e70b0"
  },
  {
    "url": "CoreAPI.html",
    "revision": "16c6f36e5444aa1385840471748b1de4"
  },
  {
    "url": "Events.html",
    "revision": "05f23ba34b74208021d2a9ba186c85f9"
  },
  {
    "url": "Evolution.html",
    "revision": "5fb6eaa3e7bb805af0155a9f16104b06"
  },
  {
    "url": "index.html",
    "revision": "d492b795f26ecb111a823eb53e51bde3"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "86be38ba5c23e7b0c61482d396da528c"
  },
  {
    "url": "Messages.html",
    "revision": "93b9522dc4384aabd045693f92cca4ae"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "93c81e54dccd8bbe43766f9b2f585175"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "7c52a69659bdbcd33f2aa52a7d458c4a"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "d880b14dfa67d9ba651bd8c02218d86e"
  },
  {
    "url": "Preparations.html",
    "revision": "f0ce6546d9dd10a7adca6d30c762897c"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "fc15535ad8ddfe8f692a66330ecd583a"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "72d6fdd69b2ac5409e9f209d31cb727c"
  },
  {
    "url": "UserManual.html",
    "revision": "ed9b82beda4f7289673b1ea653275f92"
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
