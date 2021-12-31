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
    "revision": "8865edb2ec40721cbbc614f6009ac6e9"
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
    "url": "assets/js/21.77f06e1f.js",
    "revision": "194fa58941d65d392ed81568320038a4"
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
    "url": "assets/js/app.b09cbbc5.js",
    "revision": "b7bd4480febd25bd423c3eb8d754b002"
  },
  {
    "url": "Bots.html",
    "revision": "8d7755dafdb4e1fb6b30fb776ab72045"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "cbbfe92f1648a33614952438f1e1e5f6"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "33f8c653fb05d5fc8b19de7d1e2e4897"
  },
  {
    "url": "console/Appendix.html",
    "revision": "86ef9ab40b55a2ab49c494310fb06d23"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "9560a99b0bc9a90734ff8ded9010af5b"
  },
  {
    "url": "console/Commands.html",
    "revision": "61d95b58aac672f24a9a55ac57b1006b"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "6bc961f19d104ee84ee10c385f590f24"
  },
  {
    "url": "console/Contributing.html",
    "revision": "b9c30308e4d4ceb42cb7c81a2fbafd35"
  },
  {
    "url": "console/Extensions.html",
    "revision": "6eaac4da76f7136d456128674e43e307"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "632e56b9691ce32043c742ec81a756f5"
  },
  {
    "url": "console/index.html",
    "revision": "29232552b0b83dd5274f41068a3203c7"
  },
  {
    "url": "console/Permissions.html",
    "revision": "6633b13d02c2bc92e52eb2b3df0a0d0f"
  },
  {
    "url": "console/PluginData.html",
    "revision": "26f4350c644170140da10c91ae4dabf4"
  },
  {
    "url": "console/Plugins.html",
    "revision": "8964d70ccf54ac5837a5c07f710d4ec7"
  },
  {
    "url": "console/QA.html",
    "revision": "d30eaa81ade802492d1648bf028cb4c8"
  },
  {
    "url": "console/Run.html",
    "revision": "d20a6834e3dcef42df8b672fe80ec211"
  },
  {
    "url": "Contacts.html",
    "revision": "eb59b2d14e6740be03d6feddc7d41bbd"
  },
  {
    "url": "CoreAPI.html",
    "revision": "96327a8214369836357d6146f8a56cae"
  },
  {
    "url": "DebuggingNetwork.html",
    "revision": "8c34a4bdbaa1a2ca8aa3f1fdec03b8b6"
  },
  {
    "url": "EventList.html",
    "revision": "705897614938855db6022566e374b0ba"
  },
  {
    "url": "Events.html",
    "revision": "b56490ee264535a157610bbe187dd762"
  },
  {
    "url": "Evolution.html",
    "revision": "d7cf7e74d079e170adf8961314228ba0"
  },
  {
    "url": "index.html",
    "revision": "368aac415d10bbf910a0da5d6fd23c23"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "369b5b8816c47021408f949b096b7748"
  },
  {
    "url": "mcl/index.html",
    "revision": "0b5a1ab449514eec31ad307f3045f7a6"
  },
  {
    "url": "mcl/Plugin.html",
    "revision": "bfee17a04a1319c24e346254e1a12d19"
  },
  {
    "url": "mcl/Script.html",
    "revision": "74be29647c17efb47191dc40ea0a9f6b"
  },
  {
    "url": "Messages.html",
    "revision": "30d8f4e8b2ac0d89ece4ae5548900fe4"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "b76c3c5fc5d93e5285d1e336caeba9b0"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "4e4f93e8d27c882ec64aad27093828ce"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "7550042638d668fde3ab349ddbe17904"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "b51f0206a86079de9ca929c31e1ab930"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "c7bc396399c696c5fb1c3e50255bf1f0"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "0a93aef89b7a732e6f568febd6a50889"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "2b3273f140972887048384660273d3a9"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "995444e02c1baf566fb2e408910ea298"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "1dd0661347d48f72dd5bacdc81a4e321"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "4beafbe6923d7d1240d75348d4308f86"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "68d12fc36e3b238f5c6249952898887d"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "f950e01f537310cfc81906a1480e89e3"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "745363ce3c6d6de1b993545ffb6b37ff"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "9b007bc1f3f6bd3be0604856dfea235e"
  },
  {
    "url": "Preparations.html",
    "revision": "e5f09e994cd69de78e3003d09ade1d17"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "9222ce87fa6f0237b353e716cd33bbb9"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "b36d719578c8609fcd716a176ecdb9d2"
  },
  {
    "url": "UserManual.html",
    "revision": "199687b9a020de2e4605b4e21ef55fa5"
  },
  {
    "url": "UsingSnapshots.html",
    "revision": "48f6bc238b447eacf769725388a024f7"
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
