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
    "revision": "fa46922a3b8d7c64c193e4ef7ee5fa90"
  },
  {
    "url": "assets/css/0.styles.0e64e68b.css",
    "revision": "07073dfb5e846838113ccd0a63a3a117"
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
    "url": "assets/js/10.0c10ad20.js",
    "revision": "d20aa556a72af67e9400152e7bb2718f"
  },
  {
    "url": "assets/js/11.d1857e71.js",
    "revision": "0328268973854d16c3bd6661559ec8b6"
  },
  {
    "url": "assets/js/12.843cb273.js",
    "revision": "03975f2ff92529896bcdc88024f989e6"
  },
  {
    "url": "assets/js/13.ae39057d.js",
    "revision": "7823fe8b908368b9053df4538274be39"
  },
  {
    "url": "assets/js/14.0874a161.js",
    "revision": "93e514d1aa59c78046be392ff9ba6f24"
  },
  {
    "url": "assets/js/15.92b513c9.js",
    "revision": "ddd038ab3ffa677b8248ae616e54e791"
  },
  {
    "url": "assets/js/16.cbb53fd8.js",
    "revision": "97fc48f6fab995815ff071b61c034096"
  },
  {
    "url": "assets/js/17.9556d2f4.js",
    "revision": "2624eb7bfbc4ce77a1e094e3e3b3d39b"
  },
  {
    "url": "assets/js/18.5c8cead2.js",
    "revision": "46feacbe9aab4a317cdc127398a533df"
  },
  {
    "url": "assets/js/19.04e89462.js",
    "revision": "cc09480f1cbdd968dcd899791719fd19"
  },
  {
    "url": "assets/js/2.7c1b4da8.js",
    "revision": "5c1a0d888838a75f6ace50bc60d0fb25"
  },
  {
    "url": "assets/js/20.5e49ba77.js",
    "revision": "42f52fe8ce330b128d8eb6ad55fb0041"
  },
  {
    "url": "assets/js/21.fd6259cd.js",
    "revision": "f038fc192cfe002e6c36066a1b19b5ac"
  },
  {
    "url": "assets/js/22.3dfcb25e.js",
    "revision": "e599945427d957a7564c64da08659b5b"
  },
  {
    "url": "assets/js/23.dd34daa2.js",
    "revision": "74137211e214bf876723e902da2bab3b"
  },
  {
    "url": "assets/js/24.f0f2dc0d.js",
    "revision": "2f387024bd7bc1595d6db12b03dd11f1"
  },
  {
    "url": "assets/js/25.1cbb7e28.js",
    "revision": "4a4b65b4ccd86579f81a316fef54f9f1"
  },
  {
    "url": "assets/js/26.5f8ef010.js",
    "revision": "3806836e6067a7589e72f3a07d191730"
  },
  {
    "url": "assets/js/27.e0fafd0f.js",
    "revision": "6c68f14c113a08e7e5ac2b9e8196d9dc"
  },
  {
    "url": "assets/js/28.f0366b09.js",
    "revision": "43e09fb19d73cd9c30c5349972d647fe"
  },
  {
    "url": "assets/js/29.7521fd23.js",
    "revision": "41840fc3aa2470818b73b165dc24a1c6"
  },
  {
    "url": "assets/js/3.2947b40b.js",
    "revision": "035c5f239b676181a88c256d5c06a443"
  },
  {
    "url": "assets/js/30.12efed9a.js",
    "revision": "b1aa671d0961ec594084a7962c9da16e"
  },
  {
    "url": "assets/js/31.9f0e22ee.js",
    "revision": "39b2d6777df11d2ecb92c9aa4e5c6b77"
  },
  {
    "url": "assets/js/32.1cac7abc.js",
    "revision": "9e4723cd6b39c3398f325d22c74ab0a0"
  },
  {
    "url": "assets/js/33.c658ccaf.js",
    "revision": "0a4fde5050f192c82037989cde195a74"
  },
  {
    "url": "assets/js/34.1fdbd249.js",
    "revision": "90cdd532a5ad433dfe13f6db48080509"
  },
  {
    "url": "assets/js/35.6847e1d0.js",
    "revision": "ac8defab6d095f05572336a2f3f76c14"
  },
  {
    "url": "assets/js/36.86540d21.js",
    "revision": "e273320deea0632d63c68d5e2d11b3ec"
  },
  {
    "url": "assets/js/37.536892b3.js",
    "revision": "9a8f2020a24e2d3aaf070bb5d61dad7e"
  },
  {
    "url": "assets/js/38.b7b77f2a.js",
    "revision": "89e9e2fbcbab82c9f42d7d83504d720b"
  },
  {
    "url": "assets/js/39.daf07ad0.js",
    "revision": "106223b0d706b3abb9704509129221fb"
  },
  {
    "url": "assets/js/4.2582db3f.js",
    "revision": "c6960956d45e1231af9b2530af50e1c5"
  },
  {
    "url": "assets/js/40.2e293bd9.js",
    "revision": "5a56eae664556abb3d2f7a6a80e66f01"
  },
  {
    "url": "assets/js/41.6a9bde7e.js",
    "revision": "fc21eab7b4cd0b006c677132c2651ff1"
  },
  {
    "url": "assets/js/42.296fd00f.js",
    "revision": "c1cd0abe0da6ffc097a4f432651ff311"
  },
  {
    "url": "assets/js/43.0850f017.js",
    "revision": "2b8bb8778559f332168a6728857e47c3"
  },
  {
    "url": "assets/js/44.71362ed5.js",
    "revision": "fffd4b0a8d2bcd5f37990a7a65f30e82"
  },
  {
    "url": "assets/js/45.593a308c.js",
    "revision": "2c258f34fa8cce64930ee955aa81ab02"
  },
  {
    "url": "assets/js/46.e43f2518.js",
    "revision": "a15ba3df78ccd818552052da4fdc6e7f"
  },
  {
    "url": "assets/js/47.77ecf422.js",
    "revision": "a204c8ca279b8da17b0b1e0df592ab39"
  },
  {
    "url": "assets/js/48.64c5ba8b.js",
    "revision": "b76b52400b32164be163e8ade70e5005"
  },
  {
    "url": "assets/js/49.a38da1e4.js",
    "revision": "a0f9b952a55dfdb59b3ee334a7bd5a43"
  },
  {
    "url": "assets/js/5.a91378ee.js",
    "revision": "8c8b222cbb63e3b80deda5b6de97369d"
  },
  {
    "url": "assets/js/50.4e84dd0a.js",
    "revision": "7b6bd86c5b31e9486634e0a5c738b535"
  },
  {
    "url": "assets/js/51.f86a6141.js",
    "revision": "e5c80fa2142355b25b058ffe91f91b56"
  },
  {
    "url": "assets/js/52.b7a9c49d.js",
    "revision": "56d933753d6536e5336a324653e6aa66"
  },
  {
    "url": "assets/js/53.70b42311.js",
    "revision": "c0b1037a0f0fecea7dcf7d766cf70732"
  },
  {
    "url": "assets/js/54.09deeca5.js",
    "revision": "83471f790b1d7b8da1c5acd93f2d7135"
  },
  {
    "url": "assets/js/55.3ce47054.js",
    "revision": "2f2ff69f7c69b31a38cf30d3c6f37fd9"
  },
  {
    "url": "assets/js/6.029d8918.js",
    "revision": "4245ab927ac3342b45ceda6e30f1512a"
  },
  {
    "url": "assets/js/7.5ddfc0ce.js",
    "revision": "14af6c149b1cc52810af0b361f0fd659"
  },
  {
    "url": "assets/js/8.0823eefe.js",
    "revision": "10802b152820bddaf1cbb00a12cc6366"
  },
  {
    "url": "assets/js/9.2245b31c.js",
    "revision": "5e2b413516b61660f0d0451c3ce7ca34"
  },
  {
    "url": "assets/js/app.eca007cf.js",
    "revision": "28896815f3b422f0dc141b7cfa66d109"
  },
  {
    "url": "Bots.html",
    "revision": "e148cc9cca37481ddcdcc2dbba9d49cd"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "1da8fa0ffd9eaff9413ccf67b867fa5a"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "34ff38cb98e4a849f846e84738993bdd"
  },
  {
    "url": "console/Appendix.html",
    "revision": "68fae03ffe206b7339f42d13cccfa185"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "22790597ef4593a5454e6188940c7d50"
  },
  {
    "url": "console/Commands.html",
    "revision": "911bfb629b6aea794a6120b3a38ee953"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "bcdc33c444e280c80e537dba1862483c"
  },
  {
    "url": "console/Contributing.html",
    "revision": "add8f8f372a7a507864a81b8afa887ba"
  },
  {
    "url": "console/Extensions.html",
    "revision": "0dedc096509dbc5772cc377f498728e2"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "c87f6dbf7f6e226b89ff2fb04c2e2c2f"
  },
  {
    "url": "console/index.html",
    "revision": "665f92715734a2be53ca441c0baa984b"
  },
  {
    "url": "console/Permissions.html",
    "revision": "199e9d6b5c61980ab96a6b5026d32a8b"
  },
  {
    "url": "console/PluginData.html",
    "revision": "c637803dd301563caf624f05dc9610a7"
  },
  {
    "url": "console/Plugins.html",
    "revision": "ef7d881eb8c1736f22138950060ff979"
  },
  {
    "url": "console/QA.html",
    "revision": "2489e3167df1f61f4e8aa5462e3fc013"
  },
  {
    "url": "console/Run.html",
    "revision": "47907d56f779beb377bc3e0666ea4e30"
  },
  {
    "url": "Contacts.html",
    "revision": "fdbede2f4cc6a6ba916feac392fe1ae2"
  },
  {
    "url": "CoreAPI.html",
    "revision": "7343dff8bd12b1c3cb48ca4ccf8dd543"
  },
  {
    "url": "DebuggingNetwork.html",
    "revision": "eac87674f7650b66b50576d15d48bcf3"
  },
  {
    "url": "EventList.html",
    "revision": "355b9d56c62961b484146a69870f6680"
  },
  {
    "url": "Events.html",
    "revision": "b05b75bea6443449214472850f131212"
  },
  {
    "url": "Evolution.html",
    "revision": "5d46ac5661d7421665bcb543c746bab0"
  },
  {
    "url": "index.html",
    "revision": "e3e08d76e76ed9bc6443b4f657581d70"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "80e7d10bd78db185da5f16535ffa4b32"
  },
  {
    "url": "mcl/index.html",
    "revision": "07c6421a838b5cd2bea8fe1034fcd907"
  },
  {
    "url": "mcl/Plugin.html",
    "revision": "41d61f33be8e40b8189c0fe6d5716f0b"
  },
  {
    "url": "mcl/Script.html",
    "revision": "2397300b362d3cab7ab9e81377aadd36"
  },
  {
    "url": "Messages.html",
    "revision": "3dd1bdf3553126c7c27c13a2588980e3"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "4d5628e971ab05716eccb9bd10f97943"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "a832cfba4646a6b72214bf64425471ea"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "a61fa03c4c1f86d21e7c8f4b62f2a612"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "494f44cb12b403b6c4ccb7f97723baac"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "990e9525b8c7213d7186b9a514b7b66e"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "1556e95d077ad10a4d17ba6ba501a23d"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "72a1ac532a67eea7e038a83a88af9e0d"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "60a4d0bf654921afb38d09a1f9942aa5"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "539e78fdc564b246d03334ddbf1b843b"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "812bf28f175013677f221caed5ccde27"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "3b63a1d78f966870d4eca7207c2d8820"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "c0d57ef259576dbf87d627b92b45d4b7"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "dd9e1752f6b6f8590575b620a0601e94"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "0e63fa6e000d71eda75d7d3aa4b97570"
  },
  {
    "url": "Preparations.html",
    "revision": "f10009c27cfae59b56047b031fc896f5"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "dcff1c1f2f469e0449d77c86f1c9de96"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "1e961923cd149ac5e900ce2ea65a32c1"
  },
  {
    "url": "UserManual.html",
    "revision": "92609fbb9e9fcae03143ad1d2e38f227"
  },
  {
    "url": "UsingSnapshots.html",
    "revision": "2a656fb35685770508828e24805ad32c"
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
