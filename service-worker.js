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
    "revision": "e74b7188078b42b97ec93cc9caf43413"
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
    "url": "assets/js/32.6da228e6.js",
    "revision": "9014355bf9e93e46589c93ad328bebc1"
  },
  {
    "url": "assets/js/33.59fda798.js",
    "revision": "cca01a1cf240c20fd714b9885bb9855d"
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
    "url": "assets/js/app.7dc143e3.js",
    "revision": "4f7ea5869238af0a7ee9c44c2b849543"
  },
  {
    "url": "Bots.html",
    "revision": "9e2627dd27540f126e9bd193d6097a69"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "93b3ab0c9ee00467162b68996f3e1cfb"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "0ea7e2022a2036084e6d57e233d215a9"
  },
  {
    "url": "console/Appendix.html",
    "revision": "a11eb19b8867faee5b85d1c8747ccf39"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "723cb0334c0719b2b6f3e1e1819828ca"
  },
  {
    "url": "console/Commands.html",
    "revision": "cc5eb324e18f2e8c720be594c0a9413e"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "482f404498d73e198616dd014db81e2e"
  },
  {
    "url": "console/Contributing.html",
    "revision": "c024fc18c6537780b2e04e6f42475983"
  },
  {
    "url": "console/Extensions.html",
    "revision": "f165d229a5567bd7a2c01f0305b18625"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "ebe4b7d329f0649708bd11ce434d20c4"
  },
  {
    "url": "console/index.html",
    "revision": "a1463bdf71da6fc729e3d50b7c888062"
  },
  {
    "url": "console/Permissions.html",
    "revision": "b0aac8c41e719ac9ac119b473cef5a03"
  },
  {
    "url": "console/plugin/JVMPlugin-Appendix.html",
    "revision": "9477f7fb5cc86f5ed3288544bb7f9ddb"
  },
  {
    "url": "console/plugin/JVMPlugin.html",
    "revision": "5166779211fa867e1c6f0e06f5a60d46"
  },
  {
    "url": "console/plugin/Plugins.html",
    "revision": "619e39a749daa35f33cbbca71d54ed27"
  },
  {
    "url": "console/PluginData.html",
    "revision": "42a8c10cd481a6f2c65222966b93e836"
  },
  {
    "url": "console/QA.html",
    "revision": "055ac4b007ee2ecf08e90bb6ac3c0015"
  },
  {
    "url": "console/Run.html",
    "revision": "cf008752cbe6f54e37b296ed3f301870"
  },
  {
    "url": "Contacts.html",
    "revision": "6b3eb4caa10c693dec82f82a46e2f293"
  },
  {
    "url": "CoreAPI.html",
    "revision": "2df0b3df26f1b211f009642c53c6082e"
  },
  {
    "url": "DebuggingNetwork.html",
    "revision": "604b5399ff842967c9cad3d74fe21928"
  },
  {
    "url": "EventList.html",
    "revision": "0e77d5b28832cbca7bbefc4a0d635dc8"
  },
  {
    "url": "Events.html",
    "revision": "ea57fac71adbffb5c5be05520e933faf"
  },
  {
    "url": "Evolution.html",
    "revision": "e183b17aafff2440dc25dfc6ca3af45e"
  },
  {
    "url": "index.html",
    "revision": "6485ee5f846c2b9598ea6092b9acb900"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "e1d7dfddd15712495b60a648c690785a"
  },
  {
    "url": "mcl/index.html",
    "revision": "725042efb97dc36c9602fa2994722f0e"
  },
  {
    "url": "mcl/Module.html",
    "revision": "4c3ded8908bca130e85a277c5a29efb5"
  },
  {
    "url": "mcl/Plugin.html",
    "revision": "4d3572374918ab41f51038a768f9e87a"
  },
  {
    "url": "Messages.html",
    "revision": "0ae5c1ccaa5243eadaedc9363ca3b946"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "9b1e0d69d0728b8f46eeffbd81c6b375"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "b9d09b1bea8572fb99bdbf36cca05d0a"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "0bae85c5b756d6e80e271434bdb8bc2f"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "2771eee4649519b64bdbede7c8ef3f3f"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "363c83dfd1dced0299c1d0cb25151663"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "8d75be18efa10938194790bb455b60b6"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "8657350085b8cb3648cc6e116164616f"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "ff74632d3610a2e3e50935521f7c6af1"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "cb94d83fd35cd7a2418bbc7953cf6580"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "87eccdbda62742cdcc0068313ddbc516"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "81c15f2c8d6a753e6086e2e79356d68a"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "3770f9896ce61da8c23ddf2ab384a89f"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "05f87f4df45decd6deb280c46933cf88"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "9ba8da62cb4e98d3b57ff2e404b84842"
  },
  {
    "url": "Preparations.html",
    "revision": "c2021438412ed5fc6c0552f54e504a86"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "53025ebbfbe62e9807a18975c79c9567"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "42325adcf2fadd8b6c1a7193c40acb1f"
  },
  {
    "url": "UserManual.html",
    "revision": "f7038d0826b384106cd6d4f968ef1857"
  },
  {
    "url": "UsingSnapshots.html",
    "revision": "cc38b8ef9728f9eab7ca545956f57cd9"
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
