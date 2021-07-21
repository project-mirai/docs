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
    "revision": "f5f67fedb4fac89efe1302b6f199a4f1"
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
    "url": "assets/js/11.c773278e.js",
    "revision": "03a49bd459c67ee83ed1c11a41bb6b2a"
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
    "url": "assets/js/21.05b662ae.js",
    "revision": "83b964aed7ae69e52f25bc8b8f9e7a7c"
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
    "url": "assets/js/29.e32be9d0.js",
    "revision": "e59b6b9c102838f2af1ff6dadee8ad75"
  },
  {
    "url": "assets/js/3.26ab4a98.js",
    "revision": "1483e2eabbed1f7082a7b42568af17ca"
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
    "url": "assets/js/34.ad938a77.js",
    "revision": "6eb2da130d62da1a0d4e77a94f970994"
  },
  {
    "url": "assets/js/35.a11a47ab.js",
    "revision": "63f37ef165b036acf2f1e84b9f723933"
  },
  {
    "url": "assets/js/36.d8d8540f.js",
    "revision": "5d9ba30dc18bfa97854b6fc068a19642"
  },
  {
    "url": "assets/js/37.14fd81e7.js",
    "revision": "b7e0c237af730341a6020e2f518ba19e"
  },
  {
    "url": "assets/js/38.f5d0d416.js",
    "revision": "547d307ba7e9b0a4c6cc5b2debed8fce"
  },
  {
    "url": "assets/js/39.afef12c4.js",
    "revision": "72a8c706761e9be95682732ea9594dff"
  },
  {
    "url": "assets/js/4.dc44f699.js",
    "revision": "d0731ad386c1da5c9fca8a306f6e94a0"
  },
  {
    "url": "assets/js/40.93cd745a.js",
    "revision": "79e82f72718a6371f6dc331af6197e3b"
  },
  {
    "url": "assets/js/41.e1127ca2.js",
    "revision": "e1a8a5775e38120e995b621f644a9e16"
  },
  {
    "url": "assets/js/42.6e0adf39.js",
    "revision": "c110705e8b2e74b053c8982f16ac41a1"
  },
  {
    "url": "assets/js/43.6d62f2a0.js",
    "revision": "1b000e106f7063aa547c9b8ceb9e7a68"
  },
  {
    "url": "assets/js/44.71facd2b.js",
    "revision": "f38ffa09769b71d27ffa6bbdd8628679"
  },
  {
    "url": "assets/js/45.c1a838ca.js",
    "revision": "f3dd524e2ba8d61ed30d0af3247d5cc6"
  },
  {
    "url": "assets/js/46.6c181704.js",
    "revision": "6297e6842daa521f296f17d79868496c"
  },
  {
    "url": "assets/js/47.f3058f88.js",
    "revision": "71a6a7b6cd7bc89adc8b0b11d4b7cd35"
  },
  {
    "url": "assets/js/48.17f31634.js",
    "revision": "37e9115fa4cd94ceef28e5cd1d048358"
  },
  {
    "url": "assets/js/5.1ed72318.js",
    "revision": "61503600dd8e180ca1749149472da5bc"
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
    "url": "assets/js/9.aa9afcac.js",
    "revision": "424c5f55de7d68b2a79289d71f362d7f"
  },
  {
    "url": "assets/js/app.36296405.js",
    "revision": "f00a617d22b9255e06d0340ab7f2fc30"
  },
  {
    "url": "Bots.html",
    "revision": "d33c8a6fcf904c5ab0f2dbc50fd59b90"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "ff15a44adb0f782d7cb7f21a40446d96"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "76eb91b6589415ddca365b595f468087"
  },
  {
    "url": "console/Appendix.html",
    "revision": "8e6c6633612ae5c75642c32ddba2f29e"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "b4985f135539bd7b684c21fa80f3043d"
  },
  {
    "url": "console/Commands.html",
    "revision": "9706864b0e9d6313b8e40ad612b9244e"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "0268f1322f3b05d73926e8cd167760e4"
  },
  {
    "url": "console/Contributing.html",
    "revision": "bd01c9a61a755d9598aa7a29b32b2e5c"
  },
  {
    "url": "console/Extensions.html",
    "revision": "fe19ebdfa6c9328f65d4515ca64001fa"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "a323acb55841d85aa7c6a8ff2316421f"
  },
  {
    "url": "console/index.html",
    "revision": "0469820bc7b614317de14d53dfbe910e"
  },
  {
    "url": "console/Permissions.html",
    "revision": "ed3686eed0395a3eec6bc7dad41f06ba"
  },
  {
    "url": "console/PluginData.html",
    "revision": "6bec609924c0d54633f45ab2ad990349"
  },
  {
    "url": "console/Plugins.html",
    "revision": "f8a93ecb47733ccccbda48023ebd993b"
  },
  {
    "url": "console/QA.html",
    "revision": "5d04620f88b01c58b1108ff6fe32427b"
  },
  {
    "url": "console/Run.html",
    "revision": "9afce0368816e44576ea1ce166db06ba"
  },
  {
    "url": "Contacts.html",
    "revision": "10ff85e60630558d8e5144be46c920f8"
  },
  {
    "url": "CoreAPI.html",
    "revision": "2c950a62f0c0d43e7bb2a1ad13ff66ff"
  },
  {
    "url": "EventList.html",
    "revision": "b5cdc1aad3906ce520a6c840c3702e80"
  },
  {
    "url": "Events.html",
    "revision": "e0a12c13c4104d4590f81731a8a52764"
  },
  {
    "url": "Evolution.html",
    "revision": "d2f112b2ecb30203372641e0aac3e6ca"
  },
  {
    "url": "index.html",
    "revision": "a9a5bc4a3de7dab2a448b64946302fba"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "89337e00afe85b3f96325a7458ca256f"
  },
  {
    "url": "Messages.html",
    "revision": "7d37fdded5274054e50a6676607d5868"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "1aab440e8a1786e43c2a8ab77e17197f"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "699ef3d9005f6a4bcb2a3fa503724258"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "4a750915647b1dc85fdee286eb79a74b"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "3c1513a4270dfb0b27d57bc38a79435a"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "3ab2e7fac80ea047e62295109fc52579"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "846b4ce3098ab2d7b5015c386a6525ce"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "78468171c3429de49fe2c8b87e592c3c"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "d01a32534ba320911bf8782e6476fc74"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "34038e7c593dbd374dd2f7bfbcb94412"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "617e203b9c86dad62f5f56770a63771b"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "82c00cf3910e3f6e3d208fc77043cac9"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "038315c1090125bd24fc25c14df67191"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "945573b936aa19bfde2471d6fa274289"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "b10350073ee01a96d380e3bd6b79a9ef"
  },
  {
    "url": "Preparations.html",
    "revision": "2c535152be4292853abd7620d7d45d7b"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "c8656874d42d6915e5c440751ed7dfad"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "f004d2b651398d6dbb4b53ec5ff06d41"
  },
  {
    "url": "UserManual.html",
    "revision": "dcb91e373a3fe1d51543a4a86c1b8767"
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
