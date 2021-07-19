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
    "revision": "3ee0cfc7039f66e54b95aa65ca8872f5"
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
    "url": "assets/js/29.34093938.js",
    "revision": "6dfe5f8b608dad56470268a86974b787"
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
    "url": "assets/js/app.79181702.js",
    "revision": "fba97543f59fdea3115ea9812edac5f4"
  },
  {
    "url": "Bots.html",
    "revision": "518e9ac933770ad91894100f1503c545"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "4d6be99563e8f998f7c3d1a271d3f37e"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "de3e5ff93c8db0b51c80b9b51665d772"
  },
  {
    "url": "console/Appendix.html",
    "revision": "f7bb0e51f0a4d98eb713e842763baa57"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "fd47f3a5f83007c834c9d03b93a151e2"
  },
  {
    "url": "console/Commands.html",
    "revision": "4ed61659afa9fd34def01a4be99219ee"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "543ab089a130ac0af1acfd896ce06fe6"
  },
  {
    "url": "console/Contributing.html",
    "revision": "b718631cacb375017e0098ee3c5295a6"
  },
  {
    "url": "console/Extensions.html",
    "revision": "5bcf3dd2124a269bfb94787f94094af5"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "8ad77199d33616509f38df249e66f2f2"
  },
  {
    "url": "console/index.html",
    "revision": "86a9605ff7c488125869f96e895d95f0"
  },
  {
    "url": "console/Permissions.html",
    "revision": "fa4a81e5be2fd47cd83c002a0d0101d2"
  },
  {
    "url": "console/PluginData.html",
    "revision": "e46bd8e748bf3557ffc0ff156b2aed35"
  },
  {
    "url": "console/Plugins.html",
    "revision": "5aedb08b9c55d589b12f7c8bae9db7cc"
  },
  {
    "url": "console/QA.html",
    "revision": "f199cd8edbbaf7db9508e900d3af5aa4"
  },
  {
    "url": "console/Run.html",
    "revision": "943db2a01234eb5aae3a7418b1246ed0"
  },
  {
    "url": "Contacts.html",
    "revision": "38b8cd3536286312b2b5761f91d4f0c5"
  },
  {
    "url": "CoreAPI.html",
    "revision": "a9c6adb3b5e59e07c93b0a699866c680"
  },
  {
    "url": "EventList.html",
    "revision": "fc2ad46b58e2bcca674fcba8d02f487f"
  },
  {
    "url": "Events.html",
    "revision": "c79dcad843cdfeab35c6ccfc18e14d6b"
  },
  {
    "url": "Evolution.html",
    "revision": "3f4575875cf76b1d4c6181ae1f488530"
  },
  {
    "url": "index.html",
    "revision": "d92a2d03f702af53cf35cd7c5930f5ec"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "9899750f43143c5188fe81f1faeed859"
  },
  {
    "url": "Messages.html",
    "revision": "d66c4ff0ae5581c71138b68739c63746"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "4b8de7949e52df51fe98d70aa6a80a9d"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "838fc9318b3853ca359e95d0abab90c9"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "0b1aff4d90b9d20d6413d278b3f707e8"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "6f30485dbd871e81e059f7f36638b046"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "fe33a9d64a0b46a1eb115ea0a9059988"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "d8fd93f3aad77526a5d604709dadaab6"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "937b5bd51fd85d2d3ecd849c052f3f91"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "67500c5f10a58171246bdfe70b9f3d19"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "8eb03523e68919536ee8af5a12d9070e"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "e615122ffa145bbd74e3ed27f5bf174e"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "1561c1562b2b830c14f4f479d5181dfc"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "08d71e1e4425a4da713583996f2e4cdb"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "3e45548d4522a32042369cdf5b326acb"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "96bc3a647ac10ff52347fdc2dc2d7cb7"
  },
  {
    "url": "Preparations.html",
    "revision": "11de5737102fcf419ae5f2c60d47a5f4"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "bd549c14721a71c606283a0c4541dcfd"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "3124cbe2eeb1162ddcfea5dac229696e"
  },
  {
    "url": "UserManual.html",
    "revision": "03212f9b25cfda9099f6f0b232c276ba"
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
