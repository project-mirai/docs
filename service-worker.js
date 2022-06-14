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
    "revision": "eb625dfeae3364ed180a2789252bb334"
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
    "url": "assets/js/14.9bb9d8a0.js",
    "revision": "392888f2cb5bf24b178d912339bedf63"
  },
  {
    "url": "assets/js/15.324b5334.js",
    "revision": "ab7615388d48807a2d847ef9d29a49be"
  },
  {
    "url": "assets/js/16.f01caa1c.js",
    "revision": "0044cb98d47933fcfa339c200232fe4f"
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
    "url": "assets/js/21.b2a906d2.js",
    "revision": "807a1366b16a41bf2484035e4b4f233e"
  },
  {
    "url": "assets/js/22.e7e74f4a.js",
    "revision": "00387130de9f46cd4e5ce0efa15d1975"
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
    "url": "assets/js/33.01babea8.js",
    "revision": "57b1b99d44a4f859ed497688b54dfbde"
  },
  {
    "url": "assets/js/34.f0eadf88.js",
    "revision": "6ab149a0c842d1b3d1d4bff537590e85"
  },
  {
    "url": "assets/js/35.4a0df702.js",
    "revision": "aa4eb1e13354243a5e41a7f7a2717ec3"
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
    "url": "assets/js/38.787f62b4.js",
    "revision": "c3d6055ef5c65d8c5f62fb5059c930c1"
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
    "url": "assets/js/49.da4a2204.js",
    "revision": "3c6beae9f9ac12283059614b41a9d2ca"
  },
  {
    "url": "assets/js/5.8e3f1496.js",
    "revision": "15d4abadb0c130b4e4f3d7c79971d583"
  },
  {
    "url": "assets/js/50.909e27e9.js",
    "revision": "276c120e6227164cf0d4c3ca373defe7"
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
    "url": "assets/js/9.2bfadbf8.js",
    "revision": "ddb7efa8bf9e6beeb77b51bc44481adb"
  },
  {
    "url": "assets/js/app.8867a9ed.js",
    "revision": "bfa9a8a801cb99edb0c13b68e770b4e8"
  },
  {
    "url": "Bots.html",
    "revision": "b7d21ddbb2a112fe88a5e5e1f9dc043c"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "a6d6f91d2f18685d1734711d925876cf"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "e03b075898b26807ef00fe083aefdbc8"
  },
  {
    "url": "console/Appendix.html",
    "revision": "ce79cfb24043ae628945e50242dce51f"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "ece5b83f1364a302d817acf3980e3803"
  },
  {
    "url": "console/Commands.html",
    "revision": "fc6e9e16ef41407c9fb6fbeccf8bb746"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "9416d337f6862b890b30d21571d97785"
  },
  {
    "url": "console/Contributing.html",
    "revision": "a001ba974bbd8d56d5560a5793012d9d"
  },
  {
    "url": "console/Extensions.html",
    "revision": "169a756bb2886ccb27b18319bad0f7c4"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "ddef7173a07a67456458901e0a2c4759"
  },
  {
    "url": "console/index.html",
    "revision": "8d0fea164ffd6ffd73f7b3954b53a628"
  },
  {
    "url": "console/Permissions.html",
    "revision": "b3591169d3ac4e53abf088d189cf1dda"
  },
  {
    "url": "console/plugin/JVMPlugin-Appendix.html",
    "revision": "5c44115a81d6987a17062e706b7e02be"
  },
  {
    "url": "console/plugin/JVMPlugin.html",
    "revision": "0523573ffd7dd83681c26971f6c13c16"
  },
  {
    "url": "console/plugin/Plugins.html",
    "revision": "71d7be4459b4f596d6d4cde8e5b24355"
  },
  {
    "url": "console/PluginData.html",
    "revision": "0e8bac37dee078d80027e6c7ffd68216"
  },
  {
    "url": "console/QA.html",
    "revision": "4275bcc38306ff6242294b868ce6284b"
  },
  {
    "url": "console/Run.html",
    "revision": "be735171b43b8e2b7baa0cbea3227fd0"
  },
  {
    "url": "Contacts.html",
    "revision": "f22b8f0601413368c801f8b32f1301a5"
  },
  {
    "url": "CoreAPI.html",
    "revision": "0cbd6b4f8334eaa9b5b439c47f1bf364"
  },
  {
    "url": "DebuggingNetwork.html",
    "revision": "937f59a1a06fc696a91a87a9f68b83aa"
  },
  {
    "url": "EventList.html",
    "revision": "38d30acaf9b31053be49e01d9bd4d20d"
  },
  {
    "url": "Events.html",
    "revision": "c3b4453d3e02287a0fb86ccd906a4925"
  },
  {
    "url": "Evolution.html",
    "revision": "8ee8cf08b39584617dc347ff9aa10b02"
  },
  {
    "url": "index.html",
    "revision": "a7f7dad7db94f8ab41caaf4463b3355f"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "bbe6948f45234b8402f8d47b01997d1a"
  },
  {
    "url": "mcl/index.html",
    "revision": "a6b74e405431b80dedb2fd17695869fa"
  },
  {
    "url": "mcl/Module.html",
    "revision": "f296312513b074b2ae956821cbcde9bc"
  },
  {
    "url": "mcl/Plugin.html",
    "revision": "2f02255af09433a42e5a8d4ff8a6a4bb"
  },
  {
    "url": "Messages.html",
    "revision": "fc61f6b6fd01d80a0b47015ecaf4b3e5"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "43862b8eea844879c9e88e94577689f9"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "1c66d70c84611e4990aab100daed65a5"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "daa29f215c530cfcd855896ff50fc0c8"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "290d9162b1c02a006abf991c653662e0"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "5c1374aff5c6f9678d5339e9673b14e0"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "c5f1e52ebd6d5730b4897f222e8d9d7d"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "5be051a536d899ae33d497eeb5e26bb7"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "e8de391c8585b19bffe604e7a7edfa27"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "85dcfa639f539bc2496ad2db091a9e22"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "6637a89bd387de1317df569be338c3e8"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "28046574322ff9faf90f005eb33f8663"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "57570c138ca1ca85ecc0c22c61d2ba52"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "be9c3b78c53fe5bb181035163c1e7b5b"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "690489173c2ebcde821dd86014a93336"
  },
  {
    "url": "Preparations.html",
    "revision": "bc8203d2ec46228e43422b68da0543c2"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "c82053cf08f2415f24f71d51ee3812eb"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "8ceb3f67bbad318b022afdc9da778b61"
  },
  {
    "url": "UserManual.html",
    "revision": "4a0c4e21bc443e00c986c541e67c39af"
  },
  {
    "url": "UsingSnapshots.html",
    "revision": "2e875911a1fb85364373a04ac81be779"
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
