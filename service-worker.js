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
    "revision": "573e5a9ce5ec7a77c104da87476e7b5e"
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
    "url": "assets/js/30.989d9b88.js",
    "revision": "1d290dfabc3bc314085cab7f47f89bbf"
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
    "url": "assets/js/38.fce86ee4.js",
    "revision": "b03c4ea9a5f09e0f33d56c4b576c356f"
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
    "url": "assets/js/52.b57139d8.js",
    "revision": "f68d12259ff7572cdf4abb1593742f0e"
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
    "url": "assets/js/app.231c316e.js",
    "revision": "fc9f76cac458120ecf329979b1efe75e"
  },
  {
    "url": "Bots.html",
    "revision": "4c91feb2bdc7c60dbc88d62017b979cc"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "32bcf0cd1771770504ffe50e38d417ed"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "2c3a37767f92f9662e38e5b13df089f1"
  },
  {
    "url": "console/Appendix.html",
    "revision": "6e566ce58d18a856999f58a6441487e8"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "6b41f261d28ab7cd58f94243c00b98b7"
  },
  {
    "url": "console/Commands.html",
    "revision": "05c93f493548ffd8dd4634320c3ebdfc"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "8363ebe88975b32c709c1c536048cc0a"
  },
  {
    "url": "console/Contributing.html",
    "revision": "a2e525dff62bf289d6b299df152cd7d1"
  },
  {
    "url": "console/Extensions.html",
    "revision": "7c5b038c24acf33bae16dc70f967b835"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "366a943c0daa9ac96251099b9357281e"
  },
  {
    "url": "console/index.html",
    "revision": "7e44320fdd67503697b1c73efb52559b"
  },
  {
    "url": "console/Permissions.html",
    "revision": "28aa937a5b1c6a37321c574cc27fe450"
  },
  {
    "url": "console/plugin/JVMPlugin-Appendix.html",
    "revision": "fe7421ff4fe1fd26ecf1246b246cb088"
  },
  {
    "url": "console/plugin/JVMPlugin.html",
    "revision": "27425ba609a9d7fbde302199a24b5506"
  },
  {
    "url": "console/plugin/Plugins.html",
    "revision": "cead7d509fc1bf258ba028e63583a524"
  },
  {
    "url": "console/PluginData.html",
    "revision": "0177790aad016d25845caf2bb61be806"
  },
  {
    "url": "console/QA.html",
    "revision": "184ff28acc7f7ab9733a2bc117a32ae1"
  },
  {
    "url": "console/Run.html",
    "revision": "9c65c1c190cb8bb6e75b1a7325d22586"
  },
  {
    "url": "Contacts.html",
    "revision": "687c78181e0211490a9d016a3641b6a2"
  },
  {
    "url": "CoreAPI.html",
    "revision": "b49b5bdefb4c0940d78b4e5545ed7800"
  },
  {
    "url": "DebuggingNetwork.html",
    "revision": "b93b866c901023ee4e1d30b7b268ec32"
  },
  {
    "url": "EventList.html",
    "revision": "369d35070bdbc5b2b4d708a31e8e65fc"
  },
  {
    "url": "Events.html",
    "revision": "8a3d8469727a655a473fec1eafc3bdca"
  },
  {
    "url": "Evolution.html",
    "revision": "ed3a59b46ffb0dda605187ffb698ccb8"
  },
  {
    "url": "index.html",
    "revision": "8fdbaaa2d2d16a078cc6d7f5fb68926e"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "8617f6e4c623ad9dd6032c2e54b035fe"
  },
  {
    "url": "mcl/index.html",
    "revision": "4c165fe23adbe19c185b46c85a22b515"
  },
  {
    "url": "mcl/Module.html",
    "revision": "18bf41e448721c5bfe25e20b20bde12e"
  },
  {
    "url": "mcl/Plugin.html",
    "revision": "5252fdc71aab37d26871c8ede5d056a3"
  },
  {
    "url": "Messages.html",
    "revision": "44aef447eb10e6cea89c170352d30e4e"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "70d717ae9aa8380becf800e32e2cae0a"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "4cfcb40df6728a0f50e0323418c5c06c"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "ea5cc0642e0630d7cacdf8931352bff0"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "8bcfb659e3212b1fd70b9aaa59dd27e0"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "3481a6b729b8d75209abc395f21a6f32"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "c761d08a8c51c8319b45ad33321880b3"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "7b6a9064d7b39572a4c10961e364db37"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "891f4db181114c4526e822711ff5bb13"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "0504503df21941516e8884c288079974"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "a00f3c786872bf723d9a3cb18953a7f9"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "59518c8f929fd5750055f4b1f2597f42"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "62e9b80769a3922b912236a10caad6b5"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "32479c020fd60d9100ba98c1037e1752"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "47e7f68a418906dcc8a23ff474c365fa"
  },
  {
    "url": "Preparations.html",
    "revision": "40c8967d5550da9cbbae1b7f06843267"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "89319dc5d0f9575c4dcbd9ae088bc9d7"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "5df0f8007e83bfb7f685e4b1f4899106"
  },
  {
    "url": "UserManual.html",
    "revision": "4c73471beb565a0bf559eea559ffe384"
  },
  {
    "url": "UsingSnapshots.html",
    "revision": "dc793fffef659f962e15733bfd273ad0"
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
