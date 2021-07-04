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
    "revision": "38fd062615fb1901cbf4c6097f722f4b"
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
    "url": "assets/js/30.d6337455.js",
    "revision": "06f29c59ae74f9b0a1c17fb81e916016"
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
    "url": "assets/js/app.0d881350.js",
    "revision": "eb392521e044578cb13f346143dc4e9e"
  },
  {
    "url": "Bots.html",
    "revision": "dc801ac40bdca0b0a9bcc9705bacd963"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "46446ba06382a22c4232ff5eee1ded3b"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "c33ec1526c3a120652c8eea0609b8c21"
  },
  {
    "url": "console/Appendix.html",
    "revision": "fdf57a67438ae41414e1c961ceafa5c8"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "c7c88b81b9fd4fdb445257b26a9ea64b"
  },
  {
    "url": "console/Commands.html",
    "revision": "884031b31b1913d3a742fc0f474b41bd"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "6e69b4a666375cf78a1eb5ae1b0b0d96"
  },
  {
    "url": "console/Contributing.html",
    "revision": "62f1b85ac5a4487423fa119f6909ca34"
  },
  {
    "url": "console/Extensions.html",
    "revision": "2264ce89fedca1e1f4a9d2c13e4eda37"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "1ed7853bdbea87a22081e62136b4c59e"
  },
  {
    "url": "console/index.html",
    "revision": "73ccda513decf79ce3eba2be4f822259"
  },
  {
    "url": "console/Permissions.html",
    "revision": "e0358387f69b52474719f5f4868446d4"
  },
  {
    "url": "console/PluginData.html",
    "revision": "f19367fb4d39e0426f52bfe17522d6ff"
  },
  {
    "url": "console/Plugins.html",
    "revision": "e3bee934d47977e01ad703809a01b41b"
  },
  {
    "url": "console/QA.html",
    "revision": "7e02ab9150dfaeda9f90274a4b096798"
  },
  {
    "url": "console/Run.html",
    "revision": "994a84d1b5f29403ec6c56b986f62fbb"
  },
  {
    "url": "Contacts.html",
    "revision": "267678f083df86d88cf4ff742522bba1"
  },
  {
    "url": "CoreAPI.html",
    "revision": "1a179e3d7c41dcf4a15e690fa5cb53e2"
  },
  {
    "url": "EventList.html",
    "revision": "d1841ddd388349bd41a886fcf8e40735"
  },
  {
    "url": "Events.html",
    "revision": "e94d86e81224c7ecff43dc47367a3dff"
  },
  {
    "url": "Evolution.html",
    "revision": "3456035514b4fc8a4a85cff891e16d1d"
  },
  {
    "url": "index.html",
    "revision": "f6539c379ee05a8344703ca3307f9240"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "c027a57d2b5e99297c53844cd2f63380"
  },
  {
    "url": "Messages.html",
    "revision": "830ea947e7d9f8549306c3ac9bcaafd4"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "dfd3e8b0295d466b94128e57fdc4049a"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "c18c1e8d54b6403f7634d968d5f2350d"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "9d1380c7a7f365e720bc247d3aac9877"
  },
  {
    "url": "Preparations.html",
    "revision": "e848fb605faee2f7fdf2c4335564f2de"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "118a741e8316180af281e889bdba67b2"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "5fb8b86b13b4337809c0edb2e4d8f5c5"
  },
  {
    "url": "UserManual.html",
    "revision": "97038c0c5c3e23bc90e2f488ee3a32cc"
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
