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
    "revision": "d8731c1b52b0f5ccbc0f9451febfb1be"
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
    "url": "assets/js/33.3e49409c.js",
    "revision": "41c8a4403589733c7a8e5d24f90f6559"
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
    "url": "assets/js/9.3ef62df2.js",
    "revision": "6884c7532041682f6f43ee02fe466e64"
  },
  {
    "url": "assets/js/app.728c7e57.js",
    "revision": "ea01863963906ea753a72f1ae84bf7b4"
  },
  {
    "url": "Bots.html",
    "revision": "aa882e03fff820220e4d13fd3119c119"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "bf1305e6b86a9bc8a8a1e19fddf4dfc2"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "e50a82d62457eb8d367e242bfec0884c"
  },
  {
    "url": "console/Appendix.html",
    "revision": "3ebfb2021a177bd4f9146ff43d3388e3"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "dfb4b65a323f891237f1b74268f2322d"
  },
  {
    "url": "console/Commands.html",
    "revision": "6ca0ee811382a94ebe4263e0aea53789"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "98026a378d077001d01d3a698c73d244"
  },
  {
    "url": "console/Contributing.html",
    "revision": "54b12d06a1668de0bb3d7013029a99cd"
  },
  {
    "url": "console/Extensions.html",
    "revision": "f624628918bfc9271c5e45e0d09d3114"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "d7d0275c70f6f0a56e2e28132b96719c"
  },
  {
    "url": "console/index.html",
    "revision": "5f6bc65e0e009ccbccef0000a88474cf"
  },
  {
    "url": "console/Permissions.html",
    "revision": "b583b6c59e893447365671a554e76cc2"
  },
  {
    "url": "console/plugin/JVMPlugin-Appendix.html",
    "revision": "3cf179de257b9010c68d66811661ec87"
  },
  {
    "url": "console/plugin/JVMPlugin.html",
    "revision": "b181e89c66355be3aa9b94ef76158880"
  },
  {
    "url": "console/plugin/Plugins.html",
    "revision": "0365b3f2b1724ba010816f0522539975"
  },
  {
    "url": "console/PluginData.html",
    "revision": "5b0038c0ef746913a72242ba61a924e4"
  },
  {
    "url": "console/QA.html",
    "revision": "be78b0ca757a10545be46b030c990065"
  },
  {
    "url": "console/Run.html",
    "revision": "f8168b8e12b7e6568f899f2537c9b621"
  },
  {
    "url": "Contacts.html",
    "revision": "96148973642e9808c5d6ef4e88f309b0"
  },
  {
    "url": "CoreAPI.html",
    "revision": "f774e2f5e37db392b27df70f0faf2af0"
  },
  {
    "url": "DebuggingNetwork.html",
    "revision": "892bfe5fbbb57ba1685caf1adcfdca24"
  },
  {
    "url": "EventList.html",
    "revision": "fa98666a2a445541d652873fc82f934a"
  },
  {
    "url": "Events.html",
    "revision": "58cc2ac06a8c14976445a526a6d7bf3e"
  },
  {
    "url": "Evolution.html",
    "revision": "d0d42e69b00ac85496d97bcee84981d1"
  },
  {
    "url": "index.html",
    "revision": "50fba08d907ab898efe39cdef7901831"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "a9e311d17838f5bdf05f6a0160236f0e"
  },
  {
    "url": "mcl/index.html",
    "revision": "4ea89f23e16f7c398cd2daff6c1fa60c"
  },
  {
    "url": "mcl/Module.html",
    "revision": "225c3a12dca244f84a8caa1fcb4fe0d7"
  },
  {
    "url": "mcl/Plugin.html",
    "revision": "d0de314ad27dbe837fd11e1eeec6b8fb"
  },
  {
    "url": "Messages.html",
    "revision": "d87875ffbefb5109026552aa4c6ce6d5"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "1193da8761fb99a2679cd96123e35777"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "02b187806d05abf63b1cbcb513cb6e72"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "6883491b11496bb751fee0b433a5bf5f"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "20a0071e1ab0448305f10b0556be9e6e"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "108f7106914f153e4acc819da4498ee6"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "df081af807a8c7255c76b5e471562986"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "b0023dd758b98d401e20caa4105e3be1"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "323c73f7413ed91f4813debd1c9c4534"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "68a76d7acf7e8021a9324a345be6aa6d"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "3f06172df009a07427611bd99b8f3237"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "bbf5bade6890d9e44d99c5767dff6fe8"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "9b948044eecf83dfca4937fe1c45310f"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "7e22a7869a63ba38dccca5793280b5cd"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "c8fd71944db7fc37b81d0f90d72dce67"
  },
  {
    "url": "Preparations.html",
    "revision": "6699b379235a4129185e9f960ea704d2"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "45ecdfafd1215540786dd0417ed866c3"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "710bbabd060e5212ca1fe97834e25b68"
  },
  {
    "url": "UserManual.html",
    "revision": "127f0d3ef4c597997a07abfbd696a368"
  },
  {
    "url": "UsingSnapshots.html",
    "revision": "f63aa4a996ab1752b5fdc03b8e0db7cf"
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
