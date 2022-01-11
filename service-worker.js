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
    "revision": "382778d25c4ac16ca6612faa01014e71"
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
    "url": "assets/js/10.b1ed8574.js",
    "revision": "1995b8d07e524430d6daae7aae2d36f8"
  },
  {
    "url": "assets/js/11.160dd749.js",
    "revision": "eadfaddc768e927bcec4996579c99eb1"
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
    "url": "assets/js/14.432cbaf2.js",
    "revision": "190b10d485fe3637ddd398c14f856aaa"
  },
  {
    "url": "assets/js/15.92b513c9.js",
    "revision": "ddd038ab3ffa677b8248ae616e54e791"
  },
  {
    "url": "assets/js/16.ae9639ba.js",
    "revision": "f1e0deff5c43ea351c5b80a53cc4e7ba"
  },
  {
    "url": "assets/js/17.9556d2f4.js",
    "revision": "2624eb7bfbc4ce77a1e094e3e3b3d39b"
  },
  {
    "url": "assets/js/18.28edfa74.js",
    "revision": "b625f0d9a09c5568aee183993985f70e"
  },
  {
    "url": "assets/js/19.8acfdd91.js",
    "revision": "2ea3337490fb637381dd30f5cd48bb09"
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
    "url": "assets/js/22.8269bd46.js",
    "revision": "663a935c9c2b7a5767f9eafd47d5b564"
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
    "url": "assets/js/27.3e0a68c3.js",
    "revision": "51afd60625f7b339bd87aa7393cebdaa"
  },
  {
    "url": "assets/js/28.75174080.js",
    "revision": "78d34b6492d0bc8bbc89cbf947fc7c74"
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
    "url": "assets/js/31.482ccd37.js",
    "revision": "8903dcf5390cf0666f8e4cc3dd9dc556"
  },
  {
    "url": "assets/js/32.1cac7abc.js",
    "revision": "9e4723cd6b39c3398f325d22c74ab0a0"
  },
  {
    "url": "assets/js/33.ae5a6a55.js",
    "revision": "053db46864cdd86c73b480bbf2c2d69a"
  },
  {
    "url": "assets/js/34.8b5d7917.js",
    "revision": "e7790369ba6b87f8fa0b901b7bbce12e"
  },
  {
    "url": "assets/js/35.dfab6440.js",
    "revision": "d7b521a50e05d2402d2c2df8c746d426"
  },
  {
    "url": "assets/js/36.86540d21.js",
    "revision": "e273320deea0632d63c68d5e2d11b3ec"
  },
  {
    "url": "assets/js/37.c8709fe5.js",
    "revision": "e97e6f8b1bfcb53be6ae23a12a64ff4e"
  },
  {
    "url": "assets/js/38.08badec8.js",
    "revision": "a85b577c2f9defa887d3b89f9f2b8138"
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
    "url": "assets/js/44.cd461329.js",
    "revision": "d9d093da9dde6ec092df65d6dad21048"
  },
  {
    "url": "assets/js/45.b3c5a911.js",
    "revision": "893333f887dcd2322448ac0d68d26e1d"
  },
  {
    "url": "assets/js/46.4801e12e.js",
    "revision": "1d32c4d2b4005407a331e45c5eecebb2"
  },
  {
    "url": "assets/js/47.3e192172.js",
    "revision": "b6c396e5d77a1e81bbeb47675d000a6a"
  },
  {
    "url": "assets/js/48.470e3800.js",
    "revision": "42953693dcbb937789cb7b0acd8a7cb6"
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
    "url": "assets/js/50.f4d9bbae.js",
    "revision": "6bad18aa7aa10062f606fd9a03927b0b"
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
    "url": "assets/js/app.4581c2a2.js",
    "revision": "080cd8b988f8a928dc25c213eab0fdcf"
  },
  {
    "url": "Bots.html",
    "revision": "6378c7ff48dc5e1e92331bd5cdd2c1d8"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "9d9a1620dbbe6af55350aa9e970fa7d0"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "592e7946ae73745d4e40609bcfd7b2bb"
  },
  {
    "url": "console/Appendix.html",
    "revision": "b74ff25a02e0b6abe2d158b919c28a86"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "adbb9f7f3bab3aadb24f13c503509793"
  },
  {
    "url": "console/Commands.html",
    "revision": "f4974f0cb46378c23ab1ca3cf3d3c0e7"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "c6593fb04db89fe1eb4740752f3c58db"
  },
  {
    "url": "console/Contributing.html",
    "revision": "796d60f3f192b6973d2c98ea51a41f33"
  },
  {
    "url": "console/Extensions.html",
    "revision": "e00296358d4cc99a7864f7bdc34d420b"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "e436d091304479a674226788900af7eb"
  },
  {
    "url": "console/index.html",
    "revision": "da73d1abdd5bfc56212b6afb3890d988"
  },
  {
    "url": "console/Permissions.html",
    "revision": "7042e79c7e596d2c7ef84b238e17764f"
  },
  {
    "url": "console/PluginData.html",
    "revision": "c8630e0c8cf6b3fb08cad64323548d72"
  },
  {
    "url": "console/Plugins.html",
    "revision": "b27333b434d1f35b02f84b1dd0b07779"
  },
  {
    "url": "console/QA.html",
    "revision": "0a50018c58ce0d637e7c4cc72f79c639"
  },
  {
    "url": "console/Run.html",
    "revision": "e15bb715a1f1c21c6eac1ca19b46f2ea"
  },
  {
    "url": "Contacts.html",
    "revision": "6669b53f282719dae5cc36e7356871f4"
  },
  {
    "url": "CoreAPI.html",
    "revision": "48d1cb486e202c1a5a8ca0c1f92fa74a"
  },
  {
    "url": "DebuggingNetwork.html",
    "revision": "b2a40a7d59b79a7e9aaed9c0e9d1a91d"
  },
  {
    "url": "EventList.html",
    "revision": "83b8aad218c3c9b2597644e2a7de8d80"
  },
  {
    "url": "Events.html",
    "revision": "9d913c81948bcb62a86a25767f1e9fab"
  },
  {
    "url": "Evolution.html",
    "revision": "25f160dc1ccf7bc0cb2d136ad9ec1baf"
  },
  {
    "url": "index.html",
    "revision": "a5fabb978de222e810543468076b6bf9"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "9ab3d3ad3def21e8a257c9cae0a34c8f"
  },
  {
    "url": "mcl/index.html",
    "revision": "e6eb9a2e4df741ba8296607af2b0ecb7"
  },
  {
    "url": "mcl/Plugin.html",
    "revision": "56b6788736841c39dcfc2300f17afd44"
  },
  {
    "url": "mcl/Script.html",
    "revision": "0b4d4a7f12f5a9b5c8d69b35d8315822"
  },
  {
    "url": "Messages.html",
    "revision": "69b11705b6168c2cd463e7c1b1ce071f"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "0055801b82ba537330ca0263502efe3e"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "d4116599801e4ad751edcaa1872d6c23"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "32c04fa841ccdd585a2309a9afbc4a3f"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "c4587fc225c4df51bcb610018a1f6d68"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "54561b30f53aaf36960a217d2071425b"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "97ecff5118eaee6eec5e285b4d80d080"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "bfde9059e1a9cb83456d9eca04cf5078"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "6934a2b4e1b21437b8bde339615595c9"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "2385802dfb170c1df63aa27cea65e88c"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "bc7ec53e2e6e062c5c3db78fc7adcb33"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "633f5d269a62e4882ce582baccaa9c8b"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "af3cc673d36fa4d5dcfafa573dd284bc"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "710be2f18925cdeafbef6765d4037ddb"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "fe39143396be9eb2de39db41df827b58"
  },
  {
    "url": "Preparations.html",
    "revision": "1cc45ca0cd68c62c91e221e6bc856ccf"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "d9bb353cedf8167d460827390cdde91f"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "2302442b362eddfbfd75745d0a2e6110"
  },
  {
    "url": "UserManual.html",
    "revision": "07a742ea44aaca805a3af76f0487f6d4"
  },
  {
    "url": "UsingSnapshots.html",
    "revision": "8b7c3b581c6b626cbee064d1d0071ba8"
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
