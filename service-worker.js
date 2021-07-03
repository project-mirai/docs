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
    "revision": "88f410c82616dc0da950c5c7abee7e68"
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
    "url": "assets/js/10.9bdba2fc.js",
    "revision": "188705303dd970acc7ce1a9ebc00f0b0"
  },
  {
    "url": "assets/js/11.7c19f6ad.js",
    "revision": "f4e3b2ac6e5925a125b9102dff33f520"
  },
  {
    "url": "assets/js/12.dec58767.js",
    "revision": "d7fe7f0da04c5c592f3e6b2a01a04ba5"
  },
  {
    "url": "assets/js/13.b10e5efb.js",
    "revision": "6abf7a5712f23af75d80231f784d2131"
  },
  {
    "url": "assets/js/14.34805a6e.js",
    "revision": "fca4908d1ce816c0366c86da4b155235"
  },
  {
    "url": "assets/js/15.4c3a98ed.js",
    "revision": "d1ba302beec5c945b937593619b5afc5"
  },
  {
    "url": "assets/js/16.8c1f6fdd.js",
    "revision": "794b547c5bc528e9bdb35caf377c5c17"
  },
  {
    "url": "assets/js/17.9bcd5a13.js",
    "revision": "93233b55c65dd07a6ef801b9a86d8e7d"
  },
  {
    "url": "assets/js/18.51994263.js",
    "revision": "fdb259f00194116a80c6b4e93e02286b"
  },
  {
    "url": "assets/js/19.2ff56e7d.js",
    "revision": "694dcc22ab6713441317687c8ec84e6f"
  },
  {
    "url": "assets/js/2.71842359.js",
    "revision": "469d0079c3255826bb1dedffb7325a64"
  },
  {
    "url": "assets/js/20.ff48cc5d.js",
    "revision": "3e256b82758acfe5cc2853949d970bb4"
  },
  {
    "url": "assets/js/21.c043f79a.js",
    "revision": "63678554dceb67aa5b675a2efd4e1e7b"
  },
  {
    "url": "assets/js/22.5ccd7cbc.js",
    "revision": "e1c3c4a6e442bca4272a702eb2fbe55e"
  },
  {
    "url": "assets/js/23.35eace4e.js",
    "revision": "5f9ae8582585fcf42b8e651f61502a07"
  },
  {
    "url": "assets/js/24.44878d20.js",
    "revision": "a669d1d4172bfc87c8f7953680da10b9"
  },
  {
    "url": "assets/js/25.d719f050.js",
    "revision": "a6ed15264c90479ac76da0c859ae85db"
  },
  {
    "url": "assets/js/26.1695b129.js",
    "revision": "7f14990c7adcf00d79537bd624beffae"
  },
  {
    "url": "assets/js/27.0c0caa4a.js",
    "revision": "4ae2180146de7bb6848ffa7924e91c2f"
  },
  {
    "url": "assets/js/28.9c9d4ba9.js",
    "revision": "83ae50d8690ad13dfeda402513cf7809"
  },
  {
    "url": "assets/js/29.340c82a0.js",
    "revision": "5578b49931d6b070419ff51e4c07fc17"
  },
  {
    "url": "assets/js/3.6ffed82a.js",
    "revision": "1d94f3f6c27eb3b812f7a919f5dd879c"
  },
  {
    "url": "assets/js/30.0a8140a7.js",
    "revision": "1c46f60c1a80803b643f81dc69495178"
  },
  {
    "url": "assets/js/31.225d2815.js",
    "revision": "2fcfec616518567fb278121c214140e6"
  },
  {
    "url": "assets/js/32.f85aa24a.js",
    "revision": "9392f497c6d2c78ea2ebcdb9edd2891e"
  },
  {
    "url": "assets/js/33.67ba2f3e.js",
    "revision": "9cf883ecf3a65d11c9e7fbc51063ab3e"
  },
  {
    "url": "assets/js/34.abeac824.js",
    "revision": "319acdd81e13e687b35e6a4828e6c193"
  },
  {
    "url": "assets/js/35.122a8cb5.js",
    "revision": "71f60f1c2891e02817c682670476f109"
  },
  {
    "url": "assets/js/36.515b9965.js",
    "revision": "f17f14d88330446ee65a2b2ba30ac084"
  },
  {
    "url": "assets/js/37.f9fb5227.js",
    "revision": "150a2c12468683e173ef94aa54ee692d"
  },
  {
    "url": "assets/js/4.592c417a.js",
    "revision": "3175e409f7f7c5cff1f5230da8ddeca8"
  },
  {
    "url": "assets/js/5.29d2b894.js",
    "revision": "976cd8b5e974879f1bd56557f2c5d4ee"
  },
  {
    "url": "assets/js/6.f44dc1b3.js",
    "revision": "fbf74d80c27718eb4657546c9d047824"
  },
  {
    "url": "assets/js/7.4283167d.js",
    "revision": "b6afb057ffa9e76377bb0e256615e671"
  },
  {
    "url": "assets/js/8.c17033b8.js",
    "revision": "48c1032521ca986c018097bd6a73d1b3"
  },
  {
    "url": "assets/js/9.66c3bfa9.js",
    "revision": "834880204732fb07da0544492a6051d3"
  },
  {
    "url": "assets/js/app.9a8d1f90.js",
    "revision": "13d19517be945da96f807db42030753e"
  },
  {
    "url": "Bots.html",
    "revision": "ea8cf1f980ba6a7cd59d1a618c2cfce9"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "8ddb8d0c4c096b8f27a0516c517d8dc1"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "84f56e247dab70bef1969b624f4a7a2b"
  },
  {
    "url": "console/Appendix.html",
    "revision": "6c8a223319f0b753319efdab0c869ca4"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "0c15008aab3ab9fe2d5c420e40389f62"
  },
  {
    "url": "console/Commands.html",
    "revision": "8c8e2feb222664c72d835ccfb1c6e01c"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "1f6f003a62b8fa90794c12a86f3fbfd9"
  },
  {
    "url": "console/Contributing.html",
    "revision": "f444f6e938e01eacd3e71cf243309654"
  },
  {
    "url": "console/Extensions.html",
    "revision": "656a3a212b539dfebe59e27ad2f2e5c8"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "9e60650eebe6b222b27b1521a58f9a1b"
  },
  {
    "url": "console/index.html",
    "revision": "0a7ae723f01c2c09fb2521b6bf8a528e"
  },
  {
    "url": "console/Permissions.html",
    "revision": "65ec8aa3917261edb2e6a27c28a11c85"
  },
  {
    "url": "console/PluginData.html",
    "revision": "a8c50574f3d208e1b5400f6d2bb376b2"
  },
  {
    "url": "console/Plugins.html",
    "revision": "ca757c45832416eb2fae3fb9c5c27575"
  },
  {
    "url": "console/QA.html",
    "revision": "d138445737f4b241caa76d9ff539a88c"
  },
  {
    "url": "console/Run.html",
    "revision": "f2f6ab35357dec0c3acfd7452489e3f7"
  },
  {
    "url": "Contacts.html",
    "revision": "499d39246feb47bc54e39e9c65c2ee66"
  },
  {
    "url": "CoreAPI.html",
    "revision": "5f41247ff59d32dd0b773f70c754b2e5"
  },
  {
    "url": "EventList.html",
    "revision": "e991d0010a36bae831f1413c375d5836"
  },
  {
    "url": "Events.html",
    "revision": "e8ed864ef82fd8e100c0befeb754f676"
  },
  {
    "url": "Evolution.html",
    "revision": "bdd3a196c25bd9ec57fcfa6710e054c2"
  },
  {
    "url": "index.html",
    "revision": "9e91d27737769ec936d4487abee6d2a2"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "ed2132937a7b2c5993c83a0ca3a2188b"
  },
  {
    "url": "Messages.html",
    "revision": "9556ae21feef7c39d0038a3338e2412e"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "7d49c40f51163e42ce0e6b64fb4b4a4c"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "2823a169d06c91b6b61ac669030a5f11"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "6abd311067dc44de2cb0849d509e4766"
  },
  {
    "url": "Preparations.html",
    "revision": "bd2fe7b3e2f93ec9a1c1a90c4f65f6c8"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "0f765f23fbf7f9f08fdcf25ccec1006c"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "59731a3ca19a1079a37e95d07e84182c"
  },
  {
    "url": "UserManual.html",
    "revision": "1c1d4f515f6ef2650ced011691a54a42"
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
