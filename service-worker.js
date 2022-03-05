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
    "revision": "a6286efc1cedb2586fa8e12cc6db381e"
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
    "url": "assets/js/app.b1c3dbe5.js",
    "revision": "816f27890e44f37d79dfe3751df5a70d"
  },
  {
    "url": "Bots.html",
    "revision": "39330e4a3e720f58762f1e1b115f6af4"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "2ff2296e959e61c8352908513b8e9567"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "1e59ccf4a7a67ea8a07ccd25bfeeaf00"
  },
  {
    "url": "console/Appendix.html",
    "revision": "300c96de9430efce39cc6897a8d1f641"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "76f01f56e1da6fac01d99088e05264c5"
  },
  {
    "url": "console/Commands.html",
    "revision": "cfef401d84f6b33980b7b6b50120afbd"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "f224966314320efe14f638b53711def1"
  },
  {
    "url": "console/Contributing.html",
    "revision": "da92af5d4afa3b0b842772e799b67e03"
  },
  {
    "url": "console/Extensions.html",
    "revision": "34df92f9ab09e0f7a93ca0e2b8607e3e"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "2ba35b30f7bb2d3257cf57c56ad4fbcb"
  },
  {
    "url": "console/index.html",
    "revision": "7e19cd2932b7557a7f83b6ec0d386bb2"
  },
  {
    "url": "console/Permissions.html",
    "revision": "f94d4eb553ca83df3f352b1f4d109574"
  },
  {
    "url": "console/PluginData.html",
    "revision": "85c477135e068927baa539b56d5f2aa6"
  },
  {
    "url": "console/Plugins.html",
    "revision": "67432d01b20a9d157e7d258f9f523b53"
  },
  {
    "url": "console/QA.html",
    "revision": "9a2c79ae2379989d4bbb25877f84ae78"
  },
  {
    "url": "console/Run.html",
    "revision": "b8510e870d6b064783f2c2c1304941f8"
  },
  {
    "url": "Contacts.html",
    "revision": "071f56594419131157706c6615ee833b"
  },
  {
    "url": "CoreAPI.html",
    "revision": "d0d3e71097e5a3470f4bea44744d9978"
  },
  {
    "url": "DebuggingNetwork.html",
    "revision": "0b2d1dcd73ec8362fdf3242571a3ff86"
  },
  {
    "url": "EventList.html",
    "revision": "f929608f34358c8eec8a2bb0a8781828"
  },
  {
    "url": "Events.html",
    "revision": "82aa2f843d204fb519affd447405fd6f"
  },
  {
    "url": "Evolution.html",
    "revision": "c817a98d9b6c057086dd90345028c873"
  },
  {
    "url": "index.html",
    "revision": "ca3a59d7f29656fc312ca9665e389005"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "42d9e401cf7aeb918bce5ae7a1be292d"
  },
  {
    "url": "mcl/index.html",
    "revision": "412a6b2a18f47d87d8520e92e5c60189"
  },
  {
    "url": "mcl/Plugin.html",
    "revision": "ba5e98137e59379b4375cd3498f5664c"
  },
  {
    "url": "mcl/Script.html",
    "revision": "dbc6e6a8732a28d200bfa41b3caaf7b8"
  },
  {
    "url": "Messages.html",
    "revision": "d23547614cd09d6228dbe8ddcb66b62b"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "484bf46ab02cadcfe46e55b39ebe2a1c"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "8f62a4d046bcd0580b4a2580bab26422"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "d6e40b44ace9c24a70234f8648e3c7ea"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "01dfd19b77602f1e2697293dd6938d9e"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "096ac53bfd23b837a59d426e2f18a250"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "0d1b2a09b1b533631f77b22a2e8c04e5"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "cd65afe2ef274f2f5df1153704c2c672"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "6fc27c682dc27816dad360877027d0c2"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "d7686068639c9dd66a5ec70a9ca45f68"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "7aa93f05689db84fa976d647e74a5250"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "402195d6e87c19753106544c1b74fa92"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "534b6ccffc894b49f0de1680a84c712c"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "c6f48bf581efb702e0dc16ffbcbe5dbd"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "bb35c8d537a09c22fdbccb7b20b6b107"
  },
  {
    "url": "Preparations.html",
    "revision": "4a3f6c1a754d0c892dec05db18848b87"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "def63554d377f1321ce412397ab4c290"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "a76e5355aaddaaeab63a07a2395975e4"
  },
  {
    "url": "UserManual.html",
    "revision": "81a9a72420d0359c9058de5f03ba340f"
  },
  {
    "url": "UsingSnapshots.html",
    "revision": "7573dc41c3206c616debe0439e0c5fd5"
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
