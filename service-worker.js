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
    "revision": "b985bfefd0115f59a89a65d9f07cb600"
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
    "url": "assets/js/17.a7a95f7d.js",
    "revision": "bc7f29794d3121277f6cee103fb9ba60"
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
    "url": "assets/js/app.af6f974f.js",
    "revision": "7717330cf1bd5d25efc5b71b7c3559a3"
  },
  {
    "url": "Bots.html",
    "revision": "34744b1fc361ee46fb9e8010d930deea"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "51ae00c8d8e3734c55b36a38250310d6"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "569a52144799e9180ebc685830bc1087"
  },
  {
    "url": "console/Appendix.html",
    "revision": "33dea31102f4f20cf8afce585619891d"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "13ae3fb761f8af84b03f1e9ff9a9ee37"
  },
  {
    "url": "console/Commands.html",
    "revision": "03b8343129ac45848e550c4a1f43d5d7"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "1b0c2542226f7ae1287ee468afb5d4e6"
  },
  {
    "url": "console/Contributing.html",
    "revision": "5a8efb68eeabfa715854567905a7825f"
  },
  {
    "url": "console/Extensions.html",
    "revision": "2cd3be3447a800f6965dc4165fa084e0"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "4a28cdd9e08adaab749872569b822e77"
  },
  {
    "url": "console/index.html",
    "revision": "cf64a29eacd912ce1e1457b1e4213fa7"
  },
  {
    "url": "console/Permissions.html",
    "revision": "3ae7c4d528299c815eae8c184a5be4bb"
  },
  {
    "url": "console/PluginData.html",
    "revision": "ba3e2af6aa73ce21b54e9eca5635f689"
  },
  {
    "url": "console/Plugins.html",
    "revision": "035696163369b9b056960a54f4bceac3"
  },
  {
    "url": "console/QA.html",
    "revision": "24457ba65d67dcdc42dfb2ce98a559e5"
  },
  {
    "url": "console/Run.html",
    "revision": "5ae38e7a3c9e152f1924f503e24ceb8c"
  },
  {
    "url": "Contacts.html",
    "revision": "5a4a7fe5ee49f80bfe44d4bc21825464"
  },
  {
    "url": "CoreAPI.html",
    "revision": "122b3c5f39f63dfb777a5103298a8d5f"
  },
  {
    "url": "DebuggingNetwork.html",
    "revision": "271aee638d8dabf55146639622a6e78e"
  },
  {
    "url": "EventList.html",
    "revision": "990624082de56f6fcdd9b80023aecce4"
  },
  {
    "url": "Events.html",
    "revision": "c2cc492ae7db3ac2781bfbb6b5c5f3c0"
  },
  {
    "url": "Evolution.html",
    "revision": "c78766880292dc9d8655458bb2629e0f"
  },
  {
    "url": "index.html",
    "revision": "eb9eae9e16b4f964b35f042d61566fe4"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "73c137e89c332003cd5506f18f51d687"
  },
  {
    "url": "mcl/index.html",
    "revision": "97051e2326751a0f5b670d5b1cb6fc3e"
  },
  {
    "url": "mcl/Plugin.html",
    "revision": "80d2be4ef6e815c317e3c82c3c30600b"
  },
  {
    "url": "mcl/Script.html",
    "revision": "2ea741c4c425410bf6e47803b4b6fdf6"
  },
  {
    "url": "Messages.html",
    "revision": "23ff0a104d00287ce33bf5ae2eff92e3"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "0413e3cc0247c0b4484dc9f701eecab9"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "2697bcfbb379067233c7102099566cd0"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "038753ae7b2b8a7978be62c8f563e5d9"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "9e2d694e18dc0365dd427df3d59b6bfa"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "0fc127547d5e4cd125ea79094933eccb"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "13ef2229e8d02a898d90ac5513a2d7c3"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "7f1e6af51b1d9284b61178c5c012fbc0"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "fdee45c5101e9e5b9a2bef796fcbfca6"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "fd7298e13397796fa3f2d16b37c284d4"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "271c60c1e4d76b9b49f66ceae48c0291"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "e7c01f1c94607699827ad95e97a7defe"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "b9ab95feece9a003543c80f90c2fcfb0"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "5f9107e64489fdd8527954a67d204912"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "b420dcd63b6f515fcb54826f8c2a78ef"
  },
  {
    "url": "Preparations.html",
    "revision": "03a6fc08b0902ab08b06064dba4f781e"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "272aef58391bc9fb720c29f8087e3677"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "157a1a5d50ba129f3ef9e57c407a39dd"
  },
  {
    "url": "UserManual.html",
    "revision": "0f620943dd2ff42f6819fc09fdc3c19d"
  },
  {
    "url": "UsingSnapshots.html",
    "revision": "71820a51f7a3f3a33830e02eb115e619"
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
