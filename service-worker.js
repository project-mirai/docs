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
    "revision": "380b584acd6b7d50abb3feef98022588"
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
    "url": "assets/js/19.8df0690f.js",
    "revision": "35ef72bfe69e3612469d18420d6b8223"
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
    "url": "assets/js/52.69048ddf.js",
    "revision": "ad5633eb87aa559c4f2940bde122b7b4"
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
    "url": "assets/js/app.a329947d.js",
    "revision": "a3e7a427ae69d675e28ceb1b4b7e4fff"
  },
  {
    "url": "Bots.html",
    "revision": "9271cbe327286a35e02d34ecd1a2700d"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "ef6ed79d87eda9370c508c5e9f12f1f3"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "c16e2abc296956cc5cd23e5bb049d767"
  },
  {
    "url": "console/Appendix.html",
    "revision": "9554b8900d08bbe8dcf645a5378533fa"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "d0e494ed4d82c0eaba754bd16afb50a5"
  },
  {
    "url": "console/Commands.html",
    "revision": "9e67b17744cd1f24cc9a9ca71f07a077"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "79d515593b8d088e5ff2d3c6e00281b4"
  },
  {
    "url": "console/Contributing.html",
    "revision": "91bc9959d2779f57eaea2793f8625fa3"
  },
  {
    "url": "console/Extensions.html",
    "revision": "73f18225310d62f6b598bdec8ec84c21"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "e1df1b93cc47da29282c791f440a1e3c"
  },
  {
    "url": "console/index.html",
    "revision": "f5e40f041cb8f91b5597da8eab93ca1c"
  },
  {
    "url": "console/Permissions.html",
    "revision": "00b470e4f4b9892482dd74276dc85aa4"
  },
  {
    "url": "console/PluginData.html",
    "revision": "3f2d9a993b0dbb8225074b30febe0f05"
  },
  {
    "url": "console/Plugins.html",
    "revision": "1c6e4066cda3bfb34bf16b4814a3e153"
  },
  {
    "url": "console/QA.html",
    "revision": "c296b7a6e9e8c9b72586db4b2f8bb38c"
  },
  {
    "url": "console/Run.html",
    "revision": "ae973e2a0442cddf3509ca62f26c3f8b"
  },
  {
    "url": "Contacts.html",
    "revision": "b30f9e14620ac3978bde0200e9a236f3"
  },
  {
    "url": "CoreAPI.html",
    "revision": "917c1b0110de7def1f00eda7915eeb6d"
  },
  {
    "url": "DebuggingNetwork.html",
    "revision": "9f10f32083fa0c0ff47c4a28a2c6d182"
  },
  {
    "url": "EventList.html",
    "revision": "acf78471ad780a888e926ca77e86793b"
  },
  {
    "url": "Events.html",
    "revision": "ff82b5c24035245b311acf0a86e16bc4"
  },
  {
    "url": "Evolution.html",
    "revision": "85a60f67f18f633bcdd4831f6c08fe9e"
  },
  {
    "url": "index.html",
    "revision": "d6573747d6b465eec534567ea15da630"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "fb462c2658061ce160afb2c62f161207"
  },
  {
    "url": "mcl/index.html",
    "revision": "db5ad28bdf80b6cedbef0ab67c7602da"
  },
  {
    "url": "mcl/Plugin.html",
    "revision": "bc52bfe57d19afaff24112be97efc12f"
  },
  {
    "url": "mcl/Script.html",
    "revision": "ec5846a92a17d8e4f9c632b3da55af1e"
  },
  {
    "url": "Messages.html",
    "revision": "3de0d5ba9a47792973e9e4425627ab33"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "26d2e0980523d65ea7cc723ba57774e9"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "b128a046fdf4810812dbe241c0718ccd"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "3431e8bd217333a8ac22118130c7b6cd"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "51b9fb0293c945a1a60425c9aec346ae"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "0c775a73a4a48d7bbd96a86c3102fa99"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "3dfafb5c4360b89366a212586605f58f"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "a969791ea02e0ade0a22a007cedb2bb1"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "991e1bfaa6d1175b8b5813615996c9c9"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "522e0958f5047f65e7f2cd924eacb3a8"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "07c994410c8a0f307d172ee1f6f82c26"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "5fde27fa42e2ef82bef846c6d89f2281"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "d27741534c9aea0739b05794a819d30d"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "cfedca5384e8c2a8b50e2cffc2e09928"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "62ad3a6c8b2d6d04387797d793fcf740"
  },
  {
    "url": "Preparations.html",
    "revision": "2de3b481a57db4021ab7faa978fb5be1"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "af7533e342543e5dbd3cf1967be4dbb3"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "6d8c381ac57130dbdfdcf5b6a308f4fd"
  },
  {
    "url": "UserManual.html",
    "revision": "9054799ba7a7a647ae65f9fc5b0fc1fd"
  },
  {
    "url": "UsingSnapshots.html",
    "revision": "956f4c248e7c5deaab1bb4a3825d85ea"
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
