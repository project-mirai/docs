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
    "revision": "9e73b1c222ff1fb9b5d2cc9a1e0ca161"
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
    "url": "assets/js/22.07d17871.js",
    "revision": "354428df05ce591f1528aac2d7b95c0e"
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
    "url": "assets/js/app.418a22cf.js",
    "revision": "cb429d136c0e3df279c23291320fa32d"
  },
  {
    "url": "Bots.html",
    "revision": "e48e7aa7d70f5761cecb18ee8d9a2fd1"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "a6e4f6b94cb3da3f9f6bd01d052bd045"
  },
  {
    "url": "console/Appendix.html",
    "revision": "51b1126c162fd17517468832404905ff"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "6550afe11ed221d0b49afefc1e876f86"
  },
  {
    "url": "console/Commands.html",
    "revision": "848c6ef803abb135ac9b41427098f20d"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "7c3d3eb9c0731ed2c96ed6626d7cb16e"
  },
  {
    "url": "console/Contributing.html",
    "revision": "f804f70beceab73b6bc4f5ede2208b01"
  },
  {
    "url": "console/Extensions.html",
    "revision": "d67c2c9fa30941a7619ddc17d99d7084"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "3fd9ab686d66b30d1942099134cfdd97"
  },
  {
    "url": "console/index.html",
    "revision": "5ef3dcbbd9d69d45f412c6de8adfe0fe"
  },
  {
    "url": "console/Permissions.html",
    "revision": "fdf770b5d8bec0f818843f598c8291c7"
  },
  {
    "url": "console/PluginData.html",
    "revision": "c080812e379b6c6d2e7fdba40e85ced3"
  },
  {
    "url": "console/Plugins.html",
    "revision": "d82eabfb2f84799a5d5bb83f64203ac2"
  },
  {
    "url": "console/QA.html",
    "revision": "59ae70992a179a8e9aa35aa3894f3153"
  },
  {
    "url": "console/Run.html",
    "revision": "00db8b8ebf765b5c9909323ea1fbacad"
  },
  {
    "url": "Contacts.html",
    "revision": "421ea6ab5876803c093123dd377f9e97"
  },
  {
    "url": "CoreAPI.html",
    "revision": "437e37ffce3c762d4ad420b9ea3efad9"
  },
  {
    "url": "Events.html",
    "revision": "6c6fafa2caa9108b8c0f2b7c596a9bf5"
  },
  {
    "url": "Evolution.html",
    "revision": "73503da77ba085cc89bfc689d0383fb5"
  },
  {
    "url": "index.html",
    "revision": "78603169f26b3fede28bb5d343020754"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "c93a8d6bc3c7e21e849acddd3ee7c631"
  },
  {
    "url": "Messages.html",
    "revision": "a3895ba53a6419f62b7657252953a5e9"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "a0c91924e5068fa5cc9ce630b4354740"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "12726c1b7467f2052d6fe02519b52fa3"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "bfcdd30bb12d454bc82d7a2915a53f0a"
  },
  {
    "url": "Preparations.html",
    "revision": "b875475ac0823f83dd2a9105db9a722f"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "f66b7b28a1b552c8c2587b16f18e76cf"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "0e7a9fd03a6bdfa785037056e387710e"
  },
  {
    "url": "UserManual.html",
    "revision": "4961eeed4e936f315d756baf515d13e2"
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
