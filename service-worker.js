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
    "revision": "fb5ddd4f88dacb574419ac5354f40e69"
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
    "url": "assets/js/14.1bdeba8b.js",
    "revision": "3a21148e3c0f7615d01c79ba362c7575"
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
    "url": "assets/js/27.8a36cba8.js",
    "revision": "17be2b87c6a2b2af52b0136a3ba178c8"
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
    "url": "assets/js/32.2e2ec3dd.js",
    "revision": "1e8c13a296c353f8d018d3dd276fe5bc"
  },
  {
    "url": "assets/js/33.c658ccaf.js",
    "revision": "0a4fde5050f192c82037989cde195a74"
  },
  {
    "url": "assets/js/34.328ac839.js",
    "revision": "ac570dcf2b08b62d12c2eb0a54545a19"
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
    "url": "assets/js/38.7f731fbd.js",
    "revision": "1284fd43c5921a18a19dc612944b5612"
  },
  {
    "url": "assets/js/39.9d3b2828.js",
    "revision": "ed4bcff99317121a582b1cd6e1053146"
  },
  {
    "url": "assets/js/4.2582db3f.js",
    "revision": "c6960956d45e1231af9b2530af50e1c5"
  },
  {
    "url": "assets/js/40.cc18043d.js",
    "revision": "225ce3a1d02f359bc455b7f73fbd2c15"
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
    "url": "assets/js/app.59b05f3c.js",
    "revision": "5fb9dd77672ffe0b485b05986d0e817e"
  },
  {
    "url": "Bots.html",
    "revision": "ebe5a2b30be67ea96d340540f101b8b2"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "d662094d7557ade23d5a880d35c39d6f"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "15ba72a4358c4d1cf5231452b645adee"
  },
  {
    "url": "console/Appendix.html",
    "revision": "6f6056631f2e8517ad935d70923e6c7d"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "881e35b52d85862f9a7f3e01694077b2"
  },
  {
    "url": "console/Commands.html",
    "revision": "b39b8aeff25acc4ce73848b7ffde27a5"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "cc5cba7792f900ed320659ed523fe250"
  },
  {
    "url": "console/Contributing.html",
    "revision": "b083920962eb17b18a141f8083256ecc"
  },
  {
    "url": "console/Extensions.html",
    "revision": "b52d1bbeb12fdf96cdc5f3b318d892b0"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "463c22398671b747f974eb90b279ddb9"
  },
  {
    "url": "console/index.html",
    "revision": "5d9ee065cd191c9e4b4f7efaca30b1cd"
  },
  {
    "url": "console/Permissions.html",
    "revision": "84c03ec2502b6c05c9b6d56296e4030c"
  },
  {
    "url": "console/PluginData.html",
    "revision": "53ace6e5e42fb2613bf7b2acbd335053"
  },
  {
    "url": "console/Plugins.html",
    "revision": "9b6df38e45f5c536a4ca754248f23305"
  },
  {
    "url": "console/QA.html",
    "revision": "ab2953b5ca86ba4ac36d39563b9833d7"
  },
  {
    "url": "console/Run.html",
    "revision": "8126e21ccab49588d3332c9dd6844d3e"
  },
  {
    "url": "Contacts.html",
    "revision": "a2ed2233dc2d3ca8c8a23aae23b1832b"
  },
  {
    "url": "CoreAPI.html",
    "revision": "088546c0c311d949c17ca78f309e0492"
  },
  {
    "url": "DebuggingNetwork.html",
    "revision": "cb358a9a1998621daca6981ddd4126c8"
  },
  {
    "url": "EventList.html",
    "revision": "76f5936065d17a07e3c3528ee9a484ad"
  },
  {
    "url": "Events.html",
    "revision": "45857d179015f6930e1864eadc3fcfbf"
  },
  {
    "url": "Evolution.html",
    "revision": "7867826667675ec8e63bda125770ab2e"
  },
  {
    "url": "index.html",
    "revision": "3fb14157ba52d473844ab466998b37c2"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "f1ff1c0042d0612706a1328c1449aa4c"
  },
  {
    "url": "mcl/index.html",
    "revision": "1bf7e3c37f58587a5ae50f713fd0d182"
  },
  {
    "url": "mcl/Module.html",
    "revision": "848f67e1c1133775671088d41640b5f7"
  },
  {
    "url": "mcl/Plugin.html",
    "revision": "0f5a2474009f07af3527ec526734d660"
  },
  {
    "url": "Messages.html",
    "revision": "b2e2fc7e4df24f22ce585baafce71e37"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "6de0e38248e4ba38bc4ae24ea2616380"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "743669c15d81825f0ec291238b7f035d"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "36f23056308965eb5e1c01a3c24db67e"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "41ee0d47facd7bd1062383d8106831fc"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "e0edb97f21fad49ef555aad86663978c"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "8cce9a89ae9be01fff6dab9200e701ac"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "62cb147cc360764c52d35a7b08d1409a"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "59af8e6d8f617a34dbe5ba683ac82188"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "c8fdd71bcd200f7faca7419a303393ea"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "172247ac846709ecde17c8f05d8b15ca"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "9089cdcc20f78a28b478b593b501f087"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "fefb1b93e4091baecbc642067bcf1360"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "f96aba62f5409f59c04cf87e391119d7"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "bd23aff6318ced9e92a7835113e970f3"
  },
  {
    "url": "Preparations.html",
    "revision": "2b760b10e37cee4d0e43b472b9ea74ed"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "7bd46625acad10a0f8ba0be1cd806922"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "bc18788c65d531d7a04efc7905cb4f3e"
  },
  {
    "url": "UserManual.html",
    "revision": "28053067342ad5ee4d966f0835b801be"
  },
  {
    "url": "UsingSnapshots.html",
    "revision": "5556f67de8a8152a182f284dd5321837"
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
