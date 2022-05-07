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
    "revision": "346d81771b4b811fc219d8d9bb051282"
  },
  {
    "url": "assets/css/0.styles.0e64e68b.css",
    "revision": "07073dfb5e846838113ccd0a63a3a117"
  },
  {
    "url": "assets/img/img10.08dfeead.png",
    "revision": "08dfeead3acef92c8e17923bac6c158d"
  },
  {
    "url": "assets/img/img11.b63b43f3.png",
    "revision": "b63b43f3d45cfa697d3ea2a803030460"
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
    "url": "assets/img/img7.a38a4bf7.png",
    "revision": "a38a4bf72208b16bb6fd2862b0393e5c"
  },
  {
    "url": "assets/img/img8.ed544e74.png",
    "revision": "ed544e7480f907c8aa62c946a74d6121"
  },
  {
    "url": "assets/img/img9.d0cfd554.png",
    "revision": "d0cfd55403c83d085ce7e98e94b9c798"
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
    "url": "assets/js/10.6c61c21c.js",
    "revision": "382fcbc6922e6d7104958312eef6d321"
  },
  {
    "url": "assets/js/11.9ef0780b.js",
    "revision": "ca8f2152d822f727c9c65fb1bab5821b"
  },
  {
    "url": "assets/js/12.b9058b68.js",
    "revision": "4deec8712470d8cac22dd9bc04760de9"
  },
  {
    "url": "assets/js/13.53317bba.js",
    "revision": "5dcc7b165aa65ef0b8a71a4712c84a56"
  },
  {
    "url": "assets/js/14.58fe2572.js",
    "revision": "b133671c747e904fbfa085d325c64c74"
  },
  {
    "url": "assets/js/15.324b5334.js",
    "revision": "ab7615388d48807a2d847ef9d29a49be"
  },
  {
    "url": "assets/js/16.0f5fa17d.js",
    "revision": "ce8e9b6d4709f03afea9a14d73b68ec4"
  },
  {
    "url": "assets/js/17.7971991e.js",
    "revision": "de2eef1dd1daa2a5872b86c65a452539"
  },
  {
    "url": "assets/js/18.59faa561.js",
    "revision": "1169bb01ecb8ae560559e082cf3f58fc"
  },
  {
    "url": "assets/js/19.0ad10e8b.js",
    "revision": "a4df1fc526664462e16b03040326ec7e"
  },
  {
    "url": "assets/js/2.265a42b6.js",
    "revision": "64d5ece46a1e798d5a6a6c593b3ebeab"
  },
  {
    "url": "assets/js/20.b5acad73.js",
    "revision": "67403b73b26ce0131f9b556a660e57db"
  },
  {
    "url": "assets/js/21.fb2dad42.js",
    "revision": "10b9aceaf802369fc9f057ac5b464d67"
  },
  {
    "url": "assets/js/22.b882bdf8.js",
    "revision": "fe26a576e416d1d5b4e74c85de51d9b3"
  },
  {
    "url": "assets/js/23.396dfaf3.js",
    "revision": "1316e678000aa845f7305ac308cca993"
  },
  {
    "url": "assets/js/24.4e225608.js",
    "revision": "a749725657929cda48edb60c507573c4"
  },
  {
    "url": "assets/js/25.f9d33e69.js",
    "revision": "32f8d95b9940012889d3da62dad1b5dd"
  },
  {
    "url": "assets/js/26.2b58add6.js",
    "revision": "06aa20e198cb342abb1a147ad3e552d4"
  },
  {
    "url": "assets/js/27.f1d257a0.js",
    "revision": "abf3233bc7974ee4e07bb60954b7eb86"
  },
  {
    "url": "assets/js/28.4160142f.js",
    "revision": "5bad63c4251abc59502086e35145cc5c"
  },
  {
    "url": "assets/js/29.1251a666.js",
    "revision": "07ba1dd7a45057fa289ee4f755ec6d92"
  },
  {
    "url": "assets/js/3.29ccd162.js",
    "revision": "d73b1f91190c7d29bba735c72a360df2"
  },
  {
    "url": "assets/js/30.a9b09d8b.js",
    "revision": "bcef9c0e60bb130eef74c111ebeda6a9"
  },
  {
    "url": "assets/js/31.4aad943a.js",
    "revision": "6ac05353c99e231ca257a50e1f5c0916"
  },
  {
    "url": "assets/js/32.c019804e.js",
    "revision": "6fb5715545d0254f862475d751505bb2"
  },
  {
    "url": "assets/js/33.3e49409c.js",
    "revision": "41c8a4403589733c7a8e5d24f90f6559"
  },
  {
    "url": "assets/js/34.f0eadf88.js",
    "revision": "6ab149a0c842d1b3d1d4bff537590e85"
  },
  {
    "url": "assets/js/35.9c2d964e.js",
    "revision": "3444ac2c31bb80b1a05a76f2b19abb05"
  },
  {
    "url": "assets/js/36.70dedf5c.js",
    "revision": "ccb8b8c9046923907b5251d87cb4f71a"
  },
  {
    "url": "assets/js/37.0b9bc3af.js",
    "revision": "8824bea1a7d73a5d6c7abcc114a8f1bf"
  },
  {
    "url": "assets/js/38.a53dae6f.js",
    "revision": "a2a1566248e8fdf804e03eb4ca11ee63"
  },
  {
    "url": "assets/js/39.0c0e1bd5.js",
    "revision": "f2bee7e632b4cb650e35ae706fdfd790"
  },
  {
    "url": "assets/js/4.b00f486f.js",
    "revision": "ba2f373ff5adf26f9dceaa08c3ff7bb7"
  },
  {
    "url": "assets/js/40.de805666.js",
    "revision": "b54719c217bf6d957812300c831785fd"
  },
  {
    "url": "assets/js/41.9020bd7d.js",
    "revision": "b7a2502c1c464310fbe1884a879713b3"
  },
  {
    "url": "assets/js/42.0b1db445.js",
    "revision": "81156e598691ba6180597c73a46eb0e6"
  },
  {
    "url": "assets/js/43.5ad6aeff.js",
    "revision": "c11d930c68ffd988347dba0c06568f9a"
  },
  {
    "url": "assets/js/44.120b29d8.js",
    "revision": "40f7edc2f53136f69c750c4a2ce9b19a"
  },
  {
    "url": "assets/js/45.135711de.js",
    "revision": "b774a22947b5aac0bfe85ddfba9ac0d3"
  },
  {
    "url": "assets/js/46.bed24c94.js",
    "revision": "f9063bc45d9801fbf43d0d028330b1db"
  },
  {
    "url": "assets/js/47.6a6df050.js",
    "revision": "7671abac3c551f2a6e2e55350fbfa89f"
  },
  {
    "url": "assets/js/48.96a58c8a.js",
    "revision": "865ffa289539b4dd24b6b7674e0cdc9c"
  },
  {
    "url": "assets/js/49.e948dfa8.js",
    "revision": "8c6cbbd26dd780dd7729d4a3fec9ef71"
  },
  {
    "url": "assets/js/5.8e3f1496.js",
    "revision": "15d4abadb0c130b4e4f3d7c79971d583"
  },
  {
    "url": "assets/js/50.27138b30.js",
    "revision": "3acae2311f6b7f56e8a46be9134ba7bb"
  },
  {
    "url": "assets/js/51.e9f0ebeb.js",
    "revision": "633a03ffc682f56805ec31fe2aa20e1d"
  },
  {
    "url": "assets/js/52.feff50c8.js",
    "revision": "252181768a11df2212beb42b5496ac3d"
  },
  {
    "url": "assets/js/53.6b34daf9.js",
    "revision": "3160978f0fd7e3e68529c67a1494334b"
  },
  {
    "url": "assets/js/54.b994e5de.js",
    "revision": "dff372fba35452761974de445ea70fcb"
  },
  {
    "url": "assets/js/55.7b3b99cc.js",
    "revision": "58dc86124f222299cedb52db4dfd0880"
  },
  {
    "url": "assets/js/56.b8a08e49.js",
    "revision": "eec200cc843ef3b645d15fcf3d9e0d2d"
  },
  {
    "url": "assets/js/57.b377fe05.js",
    "revision": "36f48d7cde7850d887aa137e806448a3"
  },
  {
    "url": "assets/js/6.b7c459a1.js",
    "revision": "af3cc1950283852c05fb33f2c3bf3111"
  },
  {
    "url": "assets/js/7.e8484398.js",
    "revision": "0ca50408b1e4f3dd55a56f5d96702411"
  },
  {
    "url": "assets/js/8.1e8ae3bf.js",
    "revision": "27894370f8fbbd99f1697fb384f124b1"
  },
  {
    "url": "assets/js/9.e4fd915c.js",
    "revision": "8598074f12e4deef586cbda2f6899cde"
  },
  {
    "url": "assets/js/app.e04ddc8c.js",
    "revision": "a915119bc825042d1c406bebd9baf70b"
  },
  {
    "url": "Bots.html",
    "revision": "5dd7bed8fb55835f5abbe2e29416f74a"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "6806ca1ce8e7c338cae798e5fabf24a9"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "0e89cf006babb3fb71e6a5b27391e5ab"
  },
  {
    "url": "console/Appendix.html",
    "revision": "285c8b5350559a5a6fe2f2d8bed35247"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "89a2e28d127ba39af9de0fd859b3ffa4"
  },
  {
    "url": "console/Commands.html",
    "revision": "7b4d9612a1574e98b2baae5f00c4479f"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "25d9157d696bc12416c69352a44c177f"
  },
  {
    "url": "console/Contributing.html",
    "revision": "6ac6f0eae1b24754cd70dc845d9abca2"
  },
  {
    "url": "console/Extensions.html",
    "revision": "aec277c634283f862a75865363695fe4"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "5cc400cfeb561f6f8dbe176be0237dba"
  },
  {
    "url": "console/index.html",
    "revision": "ad4c9e87b29d284c27f8b053b764fff5"
  },
  {
    "url": "console/Permissions.html",
    "revision": "13cfe6ebf0cfe7785c0e39c2bd98f4f2"
  },
  {
    "url": "console/plugin/JVMPlugin-Appendix.html",
    "revision": "a26af3a5aada14a24c12a0d84226aeee"
  },
  {
    "url": "console/plugin/JVMPlugin.html",
    "revision": "3001e279a10714785e04964061d0fca1"
  },
  {
    "url": "console/plugin/Plugins.html",
    "revision": "9e4be97336bc1ddeafe35dfab33ae497"
  },
  {
    "url": "console/PluginData.html",
    "revision": "1696e571ccc7137068feb3b316effe2d"
  },
  {
    "url": "console/QA.html",
    "revision": "69db9f2580ca0317b38f21fb5317e2bc"
  },
  {
    "url": "console/Run.html",
    "revision": "80384a659849c08db72f44dca21d99d8"
  },
  {
    "url": "Contacts.html",
    "revision": "4840c4f0d8b97c43c2a1eb3fa90fc571"
  },
  {
    "url": "CoreAPI.html",
    "revision": "8100b5e2591582367f67455c02258f96"
  },
  {
    "url": "DebuggingNetwork.html",
    "revision": "5a8acd973291d1a79949460573c78b2a"
  },
  {
    "url": "EventList.html",
    "revision": "6b5c514fb7b0844fb9f9d01b3f9c84f0"
  },
  {
    "url": "Events.html",
    "revision": "bf62fe11bf680787af151fa4a407c8fc"
  },
  {
    "url": "Evolution.html",
    "revision": "c8cae5209027a3d5f9359d40eccb20bb"
  },
  {
    "url": "index.html",
    "revision": "ddc07d97217e2224ff2c57b444f38aaa"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "d20f2ae2bb1330ed47947067c5f0c505"
  },
  {
    "url": "mcl/index.html",
    "revision": "79f9cc22bb28980df8a84a5580ffb7a4"
  },
  {
    "url": "mcl/Module.html",
    "revision": "a2d270d771cab757aa25078cb90ca72d"
  },
  {
    "url": "mcl/Plugin.html",
    "revision": "2f81ad6d9793622d9ce07204f4a64843"
  },
  {
    "url": "Messages.html",
    "revision": "54ed83048653005c46a569a629ef98d7"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "5a63faed5d82c4424eda10a5fb2f6d7f"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "2ddf2c3f0fd320f4343031047d1d5099"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "e1b9ef4e8d068225f39958fd8260ff79"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "d236b1aab68972d7d996163a4323e018"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "8cedc5b396e2fcf97a3558db3e8a0a5a"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "2e65ca3bde0249e653adae3082a446d0"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "0eab95e931070e6c2525e7b5586e04db"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "bfa257f8e44ad03ccb15a35213722e14"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "fd3e29da5dc1702d9458648af9ee58a4"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "b0dadfbb2e903a1ffc53beddb543b62c"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "547a9f9f5b01f20ca15751c0864775a0"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "78df43da33aafea96a5a06633da71216"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "bbb5e459c96d1d0ee293a14c9755c7e9"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "82b88fa209bf1bef4bbbb9be9c197875"
  },
  {
    "url": "Preparations.html",
    "revision": "65e6fab33fd0c83e15cf2090fdc49749"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "68539fd49772460ab81cdfe946995c5e"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "0a65e97cc875dde33b6e7441461b32b3"
  },
  {
    "url": "UserManual.html",
    "revision": "01a5a9ba3863355bd219453e5a1d35b4"
  },
  {
    "url": "UsingSnapshots.html",
    "revision": "76baa08210e9e5279bdcc3a315749d68"
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
