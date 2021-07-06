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
    "revision": "98dd14143428893488e342679d9609ec"
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
    "url": "assets/js/10.5a817418.js",
    "revision": "b7fa0617d6117ee2b9cdd0b81cf20a82"
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
    "url": "assets/js/app.8742209b.js",
    "revision": "46d3c9c491925ec8cc7ef6861b227297"
  },
  {
    "url": "Bots.html",
    "revision": "c6e1e22dd2260c8ffa5a5e654d36fd7e"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "b1860bc7a0948b9c164d6b5ec5aa79ba"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "d2eb3476ba718d00dbc14659aca85c90"
  },
  {
    "url": "console/Appendix.html",
    "revision": "f439e860237c8ee74da03235fb983d87"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "b99509589cff4ca0955f61b7e40d7e7a"
  },
  {
    "url": "console/Commands.html",
    "revision": "eb4057bee0de937ac4cb9d29e018c877"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "61a41ef3c8e17243edb680b3cc931df8"
  },
  {
    "url": "console/Contributing.html",
    "revision": "a56e796c62481679d8869c0d7ae06eef"
  },
  {
    "url": "console/Extensions.html",
    "revision": "0cc6aadad8593715639ff75935561e1e"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "8216795f89a24ab808fe816356e6f7a4"
  },
  {
    "url": "console/index.html",
    "revision": "c38737d5fe8ed1e6f187a938139e0053"
  },
  {
    "url": "console/Permissions.html",
    "revision": "a3d54bf2d08889b249f03ea2bec16c50"
  },
  {
    "url": "console/PluginData.html",
    "revision": "2e23361ed9817c17fe18f62f4da2655a"
  },
  {
    "url": "console/Plugins.html",
    "revision": "bda69317acaf7bc0f9b7574bc06bdc42"
  },
  {
    "url": "console/QA.html",
    "revision": "fb0f1cd4574f0395303cdfe567cb9d46"
  },
  {
    "url": "console/Run.html",
    "revision": "03da30cfdebf50867f1c955306f45930"
  },
  {
    "url": "Contacts.html",
    "revision": "4bef54e59fd03d964311c132b6df7f32"
  },
  {
    "url": "CoreAPI.html",
    "revision": "db0681b9c3258e7e40aede3d078afec6"
  },
  {
    "url": "EventList.html",
    "revision": "964cb2103284abfa8ea5ad936b25ff44"
  },
  {
    "url": "Events.html",
    "revision": "4ba3fb745526013ecba6404503862ad3"
  },
  {
    "url": "Evolution.html",
    "revision": "eb6d0d8e22f921a87bff1754871611ff"
  },
  {
    "url": "index.html",
    "revision": "f75d66b1f0e1b40b801600aaeebc580c"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "ac15ebb6242abacb9b74d37d194d99bd"
  },
  {
    "url": "Messages.html",
    "revision": "5bd6fc9f764a926357bc4efd54d2dd54"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "784737ece757e643d177c8b5f5224994"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "ea493a1b57df9d88ef19b19847c8effa"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "6359254719e27aeb91ab3bc198c096db"
  },
  {
    "url": "Preparations.html",
    "revision": "b916ecd51107af58de4608c39208352b"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "baa1de78b73f703d857d0e87f60baf5b"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "76fba1650beeff0ec86a773cace3485a"
  },
  {
    "url": "UserManual.html",
    "revision": "72e9bdc0e4b9c2d5461a74f3b3796b84"
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
