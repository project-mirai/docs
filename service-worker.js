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
    "revision": "73a9c6982854a6fbe1e464a5f461d92a"
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
    "url": "assets/js/17.5992875d.js",
    "revision": "cd21e287a12be29538c431c1c2fd54f5"
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
    "url": "assets/js/21.666b509b.js",
    "revision": "dbc2c8fb1025e31f59785c36e2535d40"
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
    "url": "assets/js/25.2efe62f0.js",
    "revision": "53d7f94127d065514b402516b0f93086"
  },
  {
    "url": "assets/js/26.e75731d1.js",
    "revision": "bde4e5acd1495c5dbefa46f680cc62fe"
  },
  {
    "url": "assets/js/27.84d49de0.js",
    "revision": "108a039afa59b244d28ec560c5c8d858"
  },
  {
    "url": "assets/js/28.692ff608.js",
    "revision": "e0ad24847022f0d5b2e70c9cef67e826"
  },
  {
    "url": "assets/js/29.c15cd312.js",
    "revision": "5768d2be7c10c1441100ae3a80b0a95f"
  },
  {
    "url": "assets/js/3.5811f5a7.js",
    "revision": "8b1693ee6abbb4467b8dab7a09e6d510"
  },
  {
    "url": "assets/js/30.ede4ca39.js",
    "revision": "81c162a7deff3af90b1cf5d90ff781a8"
  },
  {
    "url": "assets/js/31.45527327.js",
    "revision": "888cc3bca5619237fce218a7ab43cffd"
  },
  {
    "url": "assets/js/32.9d8d9b16.js",
    "revision": "889a1cd4416b10942964ee385ab445bb"
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
    "url": "assets/js/8.45078279.js",
    "revision": "ade47ae80fe1c536f331c7fb9c55bdef"
  },
  {
    "url": "assets/js/9.5a6a6860.js",
    "revision": "32f496b2b28c14bd8e41ac00ee1628a0"
  },
  {
    "url": "assets/js/app.d2805d64.js",
    "revision": "bf74b72188a15e2dc8146aa9e7e645c0"
  },
  {
    "url": "Bots.html",
    "revision": "6271802646fa019abf7e03f29cfabb01"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "44e47743424813d6471c17a6fb84f128"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "267a55a5645c52bae9295422a818e779"
  },
  {
    "url": "console/Appendix.html",
    "revision": "1f328d54978fcc4383608ef243e05981"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "28dfbc0e413eeaf60c2d3b05e3a8f325"
  },
  {
    "url": "console/Commands.html",
    "revision": "253c763ee32e437b22b1177b967d9d9c"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "6c03f4c6f6a52593fdd2e5d89b603479"
  },
  {
    "url": "console/Contributing.html",
    "revision": "81ece2a3c19919c938381cc98fd4fae5"
  },
  {
    "url": "console/Extensions.html",
    "revision": "8ada57ebc3d4a726edd1464656e369df"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "09eaf171f0cb3ca5076708b249ce66f0"
  },
  {
    "url": "console/index.html",
    "revision": "ed76de5a60cc91c7fe691792f02b9f67"
  },
  {
    "url": "console/Permissions.html",
    "revision": "03fa3d664fde562c5c6f10bc11daa065"
  },
  {
    "url": "console/PluginData.html",
    "revision": "be50b76d5bdac66d1c7edc0a5b3f0286"
  },
  {
    "url": "console/Plugins.html",
    "revision": "aa3ce85a2364b03e3b3cf4f0cb64b229"
  },
  {
    "url": "console/QA.html",
    "revision": "75852298255a64145b61274cda079066"
  },
  {
    "url": "console/Run.html",
    "revision": "a1db51f5c110da4d4e354d121fa06a51"
  },
  {
    "url": "Contacts.html",
    "revision": "75e07b37f97d6e21d87a343c692d351e"
  },
  {
    "url": "CoreAPI.html",
    "revision": "62331b75419e3aa844e4bc3ae50ac51e"
  },
  {
    "url": "DebuggingNetwork.html",
    "revision": "e2d01f428ac278ebe2eb90eed717df14"
  },
  {
    "url": "EventList.html",
    "revision": "272e2d75488be08ef5c2376618a3c07a"
  },
  {
    "url": "Events.html",
    "revision": "daab67c09247a576e5f6b85f7db6bdd3"
  },
  {
    "url": "Evolution.html",
    "revision": "2b5150a8298ce9de1ff64fbd47851157"
  },
  {
    "url": "index.html",
    "revision": "e4a908fa1b1bdd8dd0a0801d3a432c26"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "e15282913033c31b87154c021645477a"
  },
  {
    "url": "mcl/index.html",
    "revision": "1353e2bd7b4a9d01a085a2d7ba3252eb"
  },
  {
    "url": "mcl/Plugin.html",
    "revision": "bb61e8b163c0f45f6a6a7849218e5b21"
  },
  {
    "url": "mcl/Script.html",
    "revision": "d23b868a086b0b36ce812512500643b2"
  },
  {
    "url": "Messages.html",
    "revision": "cf3a977ec62fdf3a0e5e055cc5fd869c"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "567d55e475277095afff88d8cdb66043"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "b60eaf3585d3282727e102e10f46d462"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "42999c5d47f8ca664163104419b28f9d"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "7b45e502389e03396e3e1d9a86fe4cb7"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "c7af09e3f04de149be007bca701b98a7"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "0e8651922fc5002fb1b58cc4523b90ab"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "79a21b5729e6b617f81fe3aa82ba3f44"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "d4f683f1e6b86c8837bfe09751c25482"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "1f03b12499d4658db7f1009c1f325395"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "5b1b2e6d193e1edb1112bdf6851d4207"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "7a2551199ae605311b33107438d50d15"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "2973066347bd3e3e5e53441befb26bd2"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "a8a1b7fbe6c8cffbfbb557e41fea5989"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "f9219483f31d4fb0ae3b27407d320878"
  },
  {
    "url": "Preparations.html",
    "revision": "4751e69289af80fd0b328c3eaf938c74"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "14e6b094edb899265a875fe109ce315c"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "a9dcff78f3a8b5ac94cc1db88a39ed15"
  },
  {
    "url": "UserManual.html",
    "revision": "7bd76aef4f0ae8db51c0798bc94e9b7c"
  },
  {
    "url": "UsingSnapshots.html",
    "revision": "0cec5fa21a242d53d248557cb46daaa1"
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
