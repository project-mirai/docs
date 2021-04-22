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
    "revision": "fa37fa2aade5a103609cf21bc54caa73"
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
    "url": "assets/js/10.796fe97a.js",
    "revision": "6734907e9e9a3ef6089fd9e7ba384d7e"
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
    "url": "assets/js/app.1f1ec6da.js",
    "revision": "8b94a10a1cfb232e0520a64638c6bc88"
  },
  {
    "url": "Bots.html",
    "revision": "c1bdee588bbb2988d10a268f1592348a"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "39aef87142a06a46136de3726dde5e6e"
  },
  {
    "url": "console/Appendix.html",
    "revision": "05e64060b9e6628aaf228823fce30fb6"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "d345765d9605974a43ab69539857dcf2"
  },
  {
    "url": "console/Commands.html",
    "revision": "5d5f4ac4c339a138d6169b24b6d16ad7"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "3e27c11aaf4c8d1d1f11bcc5817afcf6"
  },
  {
    "url": "console/Contributing.html",
    "revision": "d02d64e0ccd09d4d50ddd2e9dc29d3b0"
  },
  {
    "url": "console/Extensions.html",
    "revision": "07ab67aed122b732785c2fe388bcd2e0"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "f125ea7fdf5c87b89eb19c09d8196405"
  },
  {
    "url": "console/index.html",
    "revision": "763e6331995fb080e61613a1745c1166"
  },
  {
    "url": "console/Permissions.html",
    "revision": "9e8282303b5c8779bc1703b210bd73c5"
  },
  {
    "url": "console/PluginData.html",
    "revision": "a43597b2baed65df2e68c4ad65aff3e3"
  },
  {
    "url": "console/Plugins.html",
    "revision": "5a3047f168eef3c2729afe4a69a828f7"
  },
  {
    "url": "console/QA.html",
    "revision": "eaa1f83d3a1580ccbe93735752854bf5"
  },
  {
    "url": "console/Run.html",
    "revision": "3dfc72f63a7ea6fe7cb2490895ce0013"
  },
  {
    "url": "Contacts.html",
    "revision": "cd2643a03a236e7a7cc90f51c547e425"
  },
  {
    "url": "CoreAPI.html",
    "revision": "49cca61399c93bb0669c0f51f0e86c50"
  },
  {
    "url": "Events.html",
    "revision": "b877faa2e4f5fcbbd823bd80d28e3864"
  },
  {
    "url": "Evolution.html",
    "revision": "401784a02d6340f2920b6e75904f028c"
  },
  {
    "url": "index.html",
    "revision": "5eb9dfaf4afe6aab8ab95d951d26eeab"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "eaa6bfa5e43bf0b71842c30d8b8c1f09"
  },
  {
    "url": "Messages.html",
    "revision": "c7596460930b5f478c44cf08f35cdafb"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "b9b70ec057cacd0e2d11f4e507047164"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "3c4c7dec5a4cca72bccda9bcf14dcc76"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "78376f544e77fe86054330ba17b219b3"
  },
  {
    "url": "Preparations.html",
    "revision": "cff6b248a63e9f214bb1c05ebd404152"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "9bff48bff8b627cdf49cef6b567285ee"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "c8d6c32bc6ff7b4a59d35cf3770923fd"
  },
  {
    "url": "UserManual.html",
    "revision": "d2856df0c7c216166f6013eedab6c49b"
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
