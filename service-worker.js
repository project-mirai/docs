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
    "revision": "a90a8484b922b5cea17e344f6f5f943c"
  },
  {
    "url": "assets/css/0.styles.f46ac581.css",
    "revision": "3d76e72705323794d7506bfe2ab22931"
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
    "url": "assets/js/10.120617a9.js",
    "revision": "92c729ffe3588b9b75466420ced93571"
  },
  {
    "url": "assets/js/11.ec80d428.js",
    "revision": "5f263ead273e43528b88e61998aa2b73"
  },
  {
    "url": "assets/js/12.c300f0ec.js",
    "revision": "d142cd79db66885f6dd27441230b4086"
  },
  {
    "url": "assets/js/13.8af7bc9c.js",
    "revision": "f3c6bd0e4594e59099cc633b18d0a5c4"
  },
  {
    "url": "assets/js/14.b976bce3.js",
    "revision": "2dea0cc873e58a11eeb0d1ab2a75709a"
  },
  {
    "url": "assets/js/15.593ef550.js",
    "revision": "27b38010aea2d689ab646d8e681ea142"
  },
  {
    "url": "assets/js/16.0a693d7e.js",
    "revision": "34432d89f0d4106e25bcad336cc6fda4"
  },
  {
    "url": "assets/js/17.56fd678c.js",
    "revision": "09d7d5c48e14edf4180da3b11977f4f5"
  },
  {
    "url": "assets/js/18.f408782f.js",
    "revision": "ba1b9613f50461f91d914536f33490a5"
  },
  {
    "url": "assets/js/19.988ef68a.js",
    "revision": "bf37d4a650f9ca8ef2f4e0fdb6c26eb5"
  },
  {
    "url": "assets/js/2.f90a0583.js",
    "revision": "ea6400ec5c3a94d787327d1402bef6cc"
  },
  {
    "url": "assets/js/20.538d2ef8.js",
    "revision": "6ea7c918ff64562a34fed0e531a236ef"
  },
  {
    "url": "assets/js/21.3a5fdaf8.js",
    "revision": "10e7a6fa4906a52c7688b01d7b6e8508"
  },
  {
    "url": "assets/js/22.58326bdb.js",
    "revision": "e3985623a9c3797eb617777efc28a052"
  },
  {
    "url": "assets/js/23.f7932b79.js",
    "revision": "cca2a8052ad6a1423338502eb869dcef"
  },
  {
    "url": "assets/js/24.80efdde0.js",
    "revision": "2790733aa2691f6f257818cecdd3febc"
  },
  {
    "url": "assets/js/25.e02f526b.js",
    "revision": "4a2e3238d15b84607f5710c19e4ea1e8"
  },
  {
    "url": "assets/js/26.c85d0d95.js",
    "revision": "00e4737e41d3b46b4786b8c9d4dd3ad4"
  },
  {
    "url": "assets/js/27.84d49de0.js",
    "revision": "108a039afa59b244d28ec560c5c8d858"
  },
  {
    "url": "assets/js/28.da3c0aab.js",
    "revision": "569e0a484b1d762005fce0be436138ec"
  },
  {
    "url": "assets/js/29.ba0e2ef7.js",
    "revision": "190887459803968f0f28ebdeb44e183e"
  },
  {
    "url": "assets/js/3.5811f5a7.js",
    "revision": "8b1693ee6abbb4467b8dab7a09e6d510"
  },
  {
    "url": "assets/js/30.07018851.js",
    "revision": "d2244bd66d05301b66d0db67b722be91"
  },
  {
    "url": "assets/js/31.8ebbe279.js",
    "revision": "a9359cc2bbeb3bdc2abb2e3f7c046098"
  },
  {
    "url": "assets/js/32.5d6824ef.js",
    "revision": "6dc0c4bc69ec0718f407851b670f6542"
  },
  {
    "url": "assets/js/33.f132df7e.js",
    "revision": "3f24d54d8eefd47d380b2d32cb746163"
  },
  {
    "url": "assets/js/34.45a66968.js",
    "revision": "8ae12f30587a1363782d788889ac0b56"
  },
  {
    "url": "assets/js/35.7b5d0d01.js",
    "revision": "4f743631f97eb8f79bfe9088549a2810"
  },
  {
    "url": "assets/js/36.c9d5cd1a.js",
    "revision": "bcd491a1c025334be4b40d6f99d16255"
  },
  {
    "url": "assets/js/37.b5cd342f.js",
    "revision": "4b6fcadc01e87c4e1a2d98aa8a726dab"
  },
  {
    "url": "assets/js/38.0c26044b.js",
    "revision": "12cab6844d9181bb83f8f68a14c5d36b"
  },
  {
    "url": "assets/js/39.377a3105.js",
    "revision": "01f9811d4ae7424a95b01fc97744d56a"
  },
  {
    "url": "assets/js/4.a5d5bd95.js",
    "revision": "9a94ded30dbe6557013a5443dc1be18d"
  },
  {
    "url": "assets/js/40.3a8158bc.js",
    "revision": "8e169e829ed76977e2250e585f8698f7"
  },
  {
    "url": "assets/js/41.fb1643a6.js",
    "revision": "e88e2837f90f9f633986ebb9a1adc8ae"
  },
  {
    "url": "assets/js/42.9b69c85b.js",
    "revision": "a451ec1bd905c4687aa153567a6fd690"
  },
  {
    "url": "assets/js/43.6ba4e18d.js",
    "revision": "cf39c5e9de35acbbaeef6005840112a4"
  },
  {
    "url": "assets/js/44.1c17cf60.js",
    "revision": "c2fc1b10be92be37591f4f1c2da82a65"
  },
  {
    "url": "assets/js/45.66a3562b.js",
    "revision": "a80c8a4adcbc09572f38eb48678620da"
  },
  {
    "url": "assets/js/46.e8ce733b.js",
    "revision": "82414beae51f9a8f0d909bd8acfc3712"
  },
  {
    "url": "assets/js/47.caebd31e.js",
    "revision": "57e69b4731e41f9a1348045167af2f1b"
  },
  {
    "url": "assets/js/48.bd4f9d2f.js",
    "revision": "ca5b3586ea95aaa956dbe0727c7257e0"
  },
  {
    "url": "assets/js/49.3b77e41a.js",
    "revision": "35cec3293c9ad81c7d9f0505e429bbbd"
  },
  {
    "url": "assets/js/5.fe8a779b.js",
    "revision": "4b5231f817c7456991a5abbaa6e2adfa"
  },
  {
    "url": "assets/js/50.7d69da7b.js",
    "revision": "6eb42025844a11e8179fc33a034173f5"
  },
  {
    "url": "assets/js/51.e609dc89.js",
    "revision": "647f7248d21a9a84c578e9d2901ea861"
  },
  {
    "url": "assets/js/52.c9bac9ca.js",
    "revision": "4b8b6cb13432eed7dedb5e1950a26107"
  },
  {
    "url": "assets/js/53.ac6139f9.js",
    "revision": "81e54461be887697e91bdb9f768f574f"
  },
  {
    "url": "assets/js/6.d77009a1.js",
    "revision": "cd56096c5a3a4ae3ac5cb567c1665b12"
  },
  {
    "url": "assets/js/7.ca6e6b60.js",
    "revision": "8673484a72bf3918619626757772ac6a"
  },
  {
    "url": "assets/js/8.bbb87dbd.js",
    "revision": "e68f9eed4504b8df600a94e9a4a0a7ea"
  },
  {
    "url": "assets/js/9.5a6a6860.js",
    "revision": "32f496b2b28c14bd8e41ac00ee1628a0"
  },
  {
    "url": "assets/js/app.b72b7cfb.js",
    "revision": "7a80e19c34c1bbfde213ae51d3924bc6"
  },
  {
    "url": "Bots.html",
    "revision": "07339345f57a13b75f481e6ea86c0512"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "0c8d3a58965971cd6f171a735461faa8"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "8d5f355c211d2312288f79526e4a6b8b"
  },
  {
    "url": "console/Appendix.html",
    "revision": "1b8fe47d81addc4b86b65cd665234d32"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "1cc1be3189a8cdc2696b4269f85d0f98"
  },
  {
    "url": "console/Commands.html",
    "revision": "c92b3efd9790a8316cbeb301c70c7da3"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "5b22e34f00de1db26a0e24c09ea3b9b6"
  },
  {
    "url": "console/Contributing.html",
    "revision": "b0248be2c116b610b971c235e7f48d90"
  },
  {
    "url": "console/Extensions.html",
    "revision": "9ae57d5476168a4d85592bb33c70dda5"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "281dae14ca64a12986734b2a1ad1d8de"
  },
  {
    "url": "console/index.html",
    "revision": "3bdbc35f9aa78db3e7c2d6e5b62889ab"
  },
  {
    "url": "console/Permissions.html",
    "revision": "62ebf1bb7b52b4eb9f38c021a472895d"
  },
  {
    "url": "console/PluginData.html",
    "revision": "88e649010bed5cf801ab10680f3a5f56"
  },
  {
    "url": "console/Plugins.html",
    "revision": "e46dd25c4109eb9b1a9125211210e573"
  },
  {
    "url": "console/QA.html",
    "revision": "4191160ded2afab8d5c272dcc9475cba"
  },
  {
    "url": "console/Run.html",
    "revision": "637c992e1704a9c384921cf228d999da"
  },
  {
    "url": "Contacts.html",
    "revision": "3fd443b387a4ecde2cee1adce3dcd5eb"
  },
  {
    "url": "CoreAPI.html",
    "revision": "00ed0bd59027bd4fcdc8abf2237d35e0"
  },
  {
    "url": "DebuggingNetwork.html",
    "revision": "e04f9a71b36222060745551e65350e5d"
  },
  {
    "url": "EventList.html",
    "revision": "d052334d96a22fe26cae8a9f015a2764"
  },
  {
    "url": "Events.html",
    "revision": "4b8a6c6e7bcab2ff7ea06fac0ae1667f"
  },
  {
    "url": "Evolution.html",
    "revision": "87ec70d13f2796156894775d324237ac"
  },
  {
    "url": "index.html",
    "revision": "251cefd51756bb247526764ebf929c2c"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "9795e4ccc19de559166c4c036f1783e6"
  },
  {
    "url": "mcl/index.html",
    "revision": "38e68f4f1b42f6bab035729cb97b50ad"
  },
  {
    "url": "mcl/Plugin.html",
    "revision": "6889f8545d9b5311d67a211dd475cd0a"
  },
  {
    "url": "mcl/Script.html",
    "revision": "e48ba6945198e661c364a8f875e3efe7"
  },
  {
    "url": "Messages.html",
    "revision": "1662fe83155679c94f97b00dea43ce93"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "f9d7460cd12a96d546303acfbc159927"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "74227188976146abb2d99ba9244b460d"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "2fb6a9ebe9c3c1c0e60366537bb457e6"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "e3d17b6369090caab40c60d8ca180941"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "ebf8a507fd638c66191bedebb6e93d60"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "acb54a8ff399d42916048286e080aafd"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "c4df1bfe8e7ffa574a0604afff661327"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "4b3f6aeab63114866c66c6aa16945e8b"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "d8f03c7db3491811fae7bffa6f6c8701"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "c7f40140fabad04c32e2f048cfbf9612"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "ac94b99419ed873e90d7898103dea3dd"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "f0e949dc14f241b54f7d8b65699e7947"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "8bded8000fd648e4a33807e073cbd209"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "f257c06bf85caff6ef442423fd455079"
  },
  {
    "url": "Preparations.html",
    "revision": "e4f8e82791b5ecd067af4931b8e16403"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "db344035ed73b354238559642e025101"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "a9ab44dd047ecf11f9384530be3146a6"
  },
  {
    "url": "UserManual.html",
    "revision": "7a9fec0820692fddcfb456719eb6f899"
  },
  {
    "url": "UsingSnapshots.html",
    "revision": "96d661ee9507c5456aafeeacfae9620e"
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
