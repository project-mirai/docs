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
    "revision": "d134bc3df9f8199b3fa6c697686e310b"
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
    "url": "assets/js/27.986693a6.js",
    "revision": "34fc7b9cc2ed5206be94ab7492082dfc"
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
    "url": "assets/js/app.4db61bb8.js",
    "revision": "6f56539702a3d511fa43341e45177978"
  },
  {
    "url": "Bots.html",
    "revision": "d9bbe4476a7cabea5d9680ff258c7732"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "1ddb3cba8346a3870afcc6e1dfd368e0"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "046505fcdde840e97d6a2ad026c14cd0"
  },
  {
    "url": "console/Appendix.html",
    "revision": "a44bee6c8c31b353b30bafef3f3ff314"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "0d153451b6906b92142579153a44d562"
  },
  {
    "url": "console/Commands.html",
    "revision": "3c396ec8e2268814b85c2385624b69f7"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "86108bf52d8d064c0f207e1529298084"
  },
  {
    "url": "console/Contributing.html",
    "revision": "1e735652f1c59c1409077d6b98e62ee7"
  },
  {
    "url": "console/Extensions.html",
    "revision": "e06e1a25ce7bbcf3e9ff314c567219f5"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "f1c1c7fd03006615ec0ef940815e4538"
  },
  {
    "url": "console/index.html",
    "revision": "51147b79aa046bc2c46fba13ff5cde94"
  },
  {
    "url": "console/Permissions.html",
    "revision": "2696fdb88d9e2e364cfcc28a1a4fdd99"
  },
  {
    "url": "console/PluginData.html",
    "revision": "ed6c4414bc2a1a290a09d25aa02bd6fb"
  },
  {
    "url": "console/Plugins.html",
    "revision": "02d4e246dbae4b2db6caaa295f6efe44"
  },
  {
    "url": "console/QA.html",
    "revision": "7ad5e86a1a461a7d3c896c5bfd87ac35"
  },
  {
    "url": "console/Run.html",
    "revision": "a864535100502cb732dea6f7ea11450e"
  },
  {
    "url": "Contacts.html",
    "revision": "0d31480ea96a07bfbbddd5fe6e2304cc"
  },
  {
    "url": "CoreAPI.html",
    "revision": "30c33caf9b7caf18b8c089eb99f1ffaf"
  },
  {
    "url": "DebuggingNetwork.html",
    "revision": "deca65b988f5f2d7ac37b6a8fff6ff1e"
  },
  {
    "url": "EventList.html",
    "revision": "28fba01b2904410607e833b7dac9d052"
  },
  {
    "url": "Events.html",
    "revision": "1bc48d7855b4b33c96353dede89ee462"
  },
  {
    "url": "Evolution.html",
    "revision": "473a3a878f799d53d0908d791d2f1eed"
  },
  {
    "url": "index.html",
    "revision": "f5ea65b1f97b6eb1133d396e47cd4383"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "894e06ac7e92feca33288e6d17472acd"
  },
  {
    "url": "mcl/index.html",
    "revision": "e29902b71c5d2834642ebb3b250be8e1"
  },
  {
    "url": "mcl/Module.html",
    "revision": "211c9bedd1a9c2a850b7f70398492298"
  },
  {
    "url": "mcl/Plugin.html",
    "revision": "2e0c9053d94499f293b350c6d6b5024b"
  },
  {
    "url": "Messages.html",
    "revision": "87bebc35714ec92f2cc7f603e2e5907f"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "f60dcda6f13fbba1733c8129a403d790"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "81c6e525e94ca42b9b8885bfffe835ee"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "4d587525d25fd8bfa7ec70983c4dc5a6"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "f54808ee1fc450b383b3f9874b90e7d1"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "14742eee51499e6c8b082e129da23393"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "29a35426a06ce022e9e77189f3d6625b"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "0c9fc85bb3840ea3d3849eadb8bbfb7f"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "07cc5817e680f630a068e4d54e2b41dc"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "7ed2cde2cce139876be2a96c687a16d2"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "59d32ce347a9aee2f3295b9b45f4c5fc"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "16c4cd726b1cd2b60c88cd3d83d78b08"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "2880cbe5595b76df9e5c2852f1d3eec4"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "08e91a1a6c74ee4079d1587ff2017cfa"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "0877011b6dfd400ad175ee209e1d8005"
  },
  {
    "url": "Preparations.html",
    "revision": "f1d31a16c90d5dcf8d2f50240b5a3f5e"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "640d89a90acda5f2a27617893fd2d444"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "62fc869bca6a6060331bcb6b8c16fb72"
  },
  {
    "url": "UserManual.html",
    "revision": "f3af7e747025da9f0341df5ce5cc11f5"
  },
  {
    "url": "UsingSnapshots.html",
    "revision": "1528dbd23926a4c767b7c47a18ba30de"
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
