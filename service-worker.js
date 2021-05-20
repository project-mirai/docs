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
    "revision": "a0bf38f79d9128cef53dbecf01d016cf"
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
    "url": "assets/js/app.4e51d943.js",
    "revision": "85f32bf5c43281feff9d852f392b5d3e"
  },
  {
    "url": "Bots.html",
    "revision": "042bb51100e800c9f2a29a7ac0e47f98"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "48d8a7558824ffcdcba7d45d374c4545"
  },
  {
    "url": "console/Appendix.html",
    "revision": "b78b4c4211d79aef63aeb76af37b839e"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "b13fee8a946562776844d8ee19068f9c"
  },
  {
    "url": "console/Commands.html",
    "revision": "88033a9ba13ec2b78dbfda3b3a9a1244"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "bbecb18f35807435cb5bf32e65fe644e"
  },
  {
    "url": "console/Contributing.html",
    "revision": "4b2613d7e2ece1380625ada98cfd7404"
  },
  {
    "url": "console/Extensions.html",
    "revision": "81b0dc961cbda4386f709bc3863b3975"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "4e5385546150ae9b1bf956f0b10beb9f"
  },
  {
    "url": "console/index.html",
    "revision": "5e820e9cc65728c419d57d4fb887a382"
  },
  {
    "url": "console/Permissions.html",
    "revision": "d1caba821c4ecc1634f806c5994f3fed"
  },
  {
    "url": "console/PluginData.html",
    "revision": "f4e96fcb125f9fdaf9d2507d2452cd2e"
  },
  {
    "url": "console/Plugins.html",
    "revision": "f1123406b4e02a83dfc52394c50e56ee"
  },
  {
    "url": "console/QA.html",
    "revision": "ca7c5829ab891a448c53e9677bd728fb"
  },
  {
    "url": "console/Run.html",
    "revision": "11f882034ebc6784652445a9babca18b"
  },
  {
    "url": "Contacts.html",
    "revision": "6326ec326e130b865813dfb184d6cf04"
  },
  {
    "url": "CoreAPI.html",
    "revision": "4f825151b1ed77939f8b9a24c55713ad"
  },
  {
    "url": "Events.html",
    "revision": "7afb60d7d4ff77c153919a23f7512de1"
  },
  {
    "url": "Evolution.html",
    "revision": "18cbeea50f57d787dc60c008a1676a21"
  },
  {
    "url": "index.html",
    "revision": "3660c152b1c6bb01e378ca5250adca0e"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "df1391fa58fdf6b4320de0bfbf5c4f3a"
  },
  {
    "url": "Messages.html",
    "revision": "ef21500aa1d82154e59bffdfd059733b"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "d17c147c364327ce5e83dec6dfbf328e"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "56bc8ef3e24b82a9e9610b466b396c17"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "f0972d033e14cd19625dac27301d6ee9"
  },
  {
    "url": "Preparations.html",
    "revision": "e0dc5a3923dedf23f5bb31f779b2a25b"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "e591c7fa78253f4a8040b8d276fc3d73"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "4e98d48f12eb4559d602af2b2f65d4c1"
  },
  {
    "url": "UserManual.html",
    "revision": "ae63b86e36288cfda7591743635b7a56"
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
