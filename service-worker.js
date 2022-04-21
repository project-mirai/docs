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
    "revision": "29dc831f1a1674b55751f87713d7b5ca"
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
    "url": "assets/js/app.6c1249e9.js",
    "revision": "5d9659939cb26779e4370321f52889db"
  },
  {
    "url": "Bots.html",
    "revision": "d6bea6449087fbb5d53eeffd5028b16d"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "0762254b250f8847aa8874b7941a2093"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "65554997b0253b7a11527597e86234a7"
  },
  {
    "url": "console/Appendix.html",
    "revision": "0ccb5946cadf398e0aea4b98e025bd45"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "3aee4550ef6f4613c7d913c66cc41bd1"
  },
  {
    "url": "console/Commands.html",
    "revision": "8b9c67cbca89f33a734c60a05b69675d"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "d3736a58f8f61336acedb6e4a10ffea8"
  },
  {
    "url": "console/Contributing.html",
    "revision": "f7abf55a5599492d2ecbbe4bca7690b3"
  },
  {
    "url": "console/Extensions.html",
    "revision": "70dc3915ccc6300397a3baf63495509b"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "f9d25a10725cd7221c0ab3a381bdd17b"
  },
  {
    "url": "console/index.html",
    "revision": "f590a222d897c80402befec97adbe2f6"
  },
  {
    "url": "console/Permissions.html",
    "revision": "8c296b65cee44ceb7d633a762c63674c"
  },
  {
    "url": "console/PluginData.html",
    "revision": "9d71a723da0a9edbb369f1a861741d63"
  },
  {
    "url": "console/Plugins.html",
    "revision": "38dce6ba112ae76c94c9b84a469688c0"
  },
  {
    "url": "console/QA.html",
    "revision": "654e0b589d32bb114aec1d6aec99f075"
  },
  {
    "url": "console/Run.html",
    "revision": "36bff6e4b42b80b0f05490d3b18abdc8"
  },
  {
    "url": "Contacts.html",
    "revision": "b255e1eedced510e1f4635cf88e4f4f3"
  },
  {
    "url": "CoreAPI.html",
    "revision": "4c5b33e10c57a952cec8d1be37ecf778"
  },
  {
    "url": "DebuggingNetwork.html",
    "revision": "1cb17558d17a2b8cdd5abb7ac8ff0d48"
  },
  {
    "url": "EventList.html",
    "revision": "e6e939e79c8a5a625bcbca21f16f0126"
  },
  {
    "url": "Events.html",
    "revision": "7795c6447e2a050c9554b34a10dc8f00"
  },
  {
    "url": "Evolution.html",
    "revision": "d79c56b80feeced4450c3ed64dff7b31"
  },
  {
    "url": "index.html",
    "revision": "673188a5f6aa91f00ba591dc282a3a6a"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "fe423e0b6fff6fca066372601689084f"
  },
  {
    "url": "mcl/index.html",
    "revision": "90f0a011e203d9723db312957087af2b"
  },
  {
    "url": "mcl/Module.html",
    "revision": "d801b33a7ea67f6adf87d98759c6eea4"
  },
  {
    "url": "mcl/Plugin.html",
    "revision": "14314b081e0fcdfc57e00001e19dffe7"
  },
  {
    "url": "Messages.html",
    "revision": "28791770e7d4c27a6d52e798b89aa464"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "4fdd3be3ce411352933f1da38f7d93c0"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "a9be8ebfd775f6bd09548815a59ecab5"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "c3f03f2ae74712b70b81ec535e5f58f5"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "432b7acd4ac653ad041ce6f53ed89aa4"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "0b9fb41638b647f4139f41754ceb3ab7"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "9849fb263dff19bb72ff27c585a8c45e"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "b0898565a914e731c197152848ab9d73"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "e5e78a61d466690eee4c7112e635aed2"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "103f82ef875b1f99c0ded6abb4c37888"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "390ea26ce5e905c209889b8777fbf678"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "2a293ff714f850421ffe826553679b9b"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "289e56047986e2f89743dfcb744cc4fd"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "b0286ff7d0cb039f582c1245eb1fa4f4"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "133a95e41da7d5fc9d1a573c3e8ee537"
  },
  {
    "url": "Preparations.html",
    "revision": "f6813dc0a8965272b2adc898e55d23c1"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "966c363781ed2ef6c71f12da4a2dac69"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "a3f14307717ef23d42ad1284c7917abc"
  },
  {
    "url": "UserManual.html",
    "revision": "3e7795f5b8774997a5f7c0211515ed00"
  },
  {
    "url": "UsingSnapshots.html",
    "revision": "4a4182a0607ef2bd257a2a94834bea95"
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
