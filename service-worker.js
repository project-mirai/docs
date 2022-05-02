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
    "revision": "46092419984a0c8694aacd277dd738a8"
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
    "url": "assets/js/23.38382095.js",
    "revision": "0eece500a54a49f81dd75fb3589855b9"
  },
  {
    "url": "assets/js/24.96dad9bf.js",
    "revision": "1e2e69acd77005bb343cb246234b99ee"
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
    "url": "assets/js/35.368c481d.js",
    "revision": "ddd62f9d7dd368cff4b53ec3a9aa6bc5"
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
    "url": "assets/js/app.7b9b5b64.js",
    "revision": "b4d6786b2a6f5da4cf0003c8a54a1253"
  },
  {
    "url": "Bots.html",
    "revision": "b13cfe44054e6df0b8e3e73ae6c97414"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "c4bfd4a98b94eb859ee638d460933cb4"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "8298c2b1952e184c3dddb023276fef79"
  },
  {
    "url": "console/Appendix.html",
    "revision": "afbd4e37cc3acad10b9192b82113e347"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "61f8ea72e1cc3fcd4f0383bad57927da"
  },
  {
    "url": "console/Commands.html",
    "revision": "3b857e9c85280b9d25fb778cbead6643"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "92e3a86a5a7ed8f6191dda5c191e11b2"
  },
  {
    "url": "console/Contributing.html",
    "revision": "14431dc6c236e518bae16abcaaa7df1d"
  },
  {
    "url": "console/Extensions.html",
    "revision": "845c990d56b3e9270d51ec2cb921987e"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "a024173c5165d2181ae203ead8ac0200"
  },
  {
    "url": "console/index.html",
    "revision": "40b332a480ea11706ccafe50be9223f4"
  },
  {
    "url": "console/Permissions.html",
    "revision": "ef1fe1279eaf04062fc234bb818c484e"
  },
  {
    "url": "console/plugin/JVMPlugin-Appendix.html",
    "revision": "352f52ba02425c741a8f035bebcf8a70"
  },
  {
    "url": "console/plugin/JVMPlugin.html",
    "revision": "6215e1e3ce7a8b6b69ce05e4421f8ace"
  },
  {
    "url": "console/plugin/Plugins.html",
    "revision": "94fd12dd46400d25a4793dfa1b283256"
  },
  {
    "url": "console/PluginData.html",
    "revision": "b7e0644f39bd3c29c142fd591433cc63"
  },
  {
    "url": "console/QA.html",
    "revision": "a84243e8f8c39c90f422cce1586a07af"
  },
  {
    "url": "console/Run.html",
    "revision": "5197fd1ae545dad058c8b7058492db99"
  },
  {
    "url": "Contacts.html",
    "revision": "b766ae1fd7a7a12f4d6b4d561d87d004"
  },
  {
    "url": "CoreAPI.html",
    "revision": "39b21bc547c45c3d34aba1d8945abca4"
  },
  {
    "url": "DebuggingNetwork.html",
    "revision": "7d14508ff78613426a8839d6e22f4c14"
  },
  {
    "url": "EventList.html",
    "revision": "b314250a9766de7a743b7d7c3e1a9f2c"
  },
  {
    "url": "Events.html",
    "revision": "c1104d2b349d8c65867a037b1fff7f1d"
  },
  {
    "url": "Evolution.html",
    "revision": "2eafe4a827df29b8844c5fcf35af7b69"
  },
  {
    "url": "index.html",
    "revision": "a680161dae249a6eca66bc2db601f3f7"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "79923eac9252779a53e27538e3a4a406"
  },
  {
    "url": "mcl/index.html",
    "revision": "c1373d1948f620eed074f3d71b3ad6e8"
  },
  {
    "url": "mcl/Module.html",
    "revision": "39d359568a0814cf993e545e58b63212"
  },
  {
    "url": "mcl/Plugin.html",
    "revision": "720924372c32996cd2dd6b94848664fb"
  },
  {
    "url": "Messages.html",
    "revision": "574a71387a447fa703f07a7c0570f3f8"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "533bff941efef2b328a0add1d85035a5"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "f410abb373c7cff1097a51e80e97554e"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "3a9af6d4b47b8bfe0bc91c0e1a39424f"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "f831c619af064ec75673c2d79645311c"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "74dff4a53b574c47c69efe5ac225f8a0"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "574003297dc97a902d200db5d82faa07"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "da5866ce49fd204a2183c101536adb08"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "100d1ac4f06b90a7d8873de8dcdf624e"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "89b209d35d69102d4a163ae48e34280d"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "5d9f82e9c1c62c2204efaeb60217623c"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "bfac73a4942c6b39dba6f431c5b095b3"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "95b97e47779aee6bb8eb71eb395360ab"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "7292fd9fdc2481dfe0cd9d1eade4e24a"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "03b32ea791ae01e1b07914583ab4280e"
  },
  {
    "url": "Preparations.html",
    "revision": "61cf6cc06dd2b8c540e278d4cd210b4e"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "a893b1856f31aa485fef6a6219e7c47a"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "ea075795515431935d3a023ba9bcd5c2"
  },
  {
    "url": "UserManual.html",
    "revision": "fe6897d75d6817dcb0f36628024ed01e"
  },
  {
    "url": "UsingSnapshots.html",
    "revision": "27b142b2e638dd234a8af84bb2da0c7e"
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
