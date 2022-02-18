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
    "revision": "91dc7340e65332349498b2511bf0b271"
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
    "url": "assets/js/14.0874a161.js",
    "revision": "93e514d1aa59c78046be392ff9ba6f24"
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
    "url": "assets/js/22.ad21a412.js",
    "revision": "32fe8e3379ad290b846609ceeeb65935"
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
    "url": "assets/js/app.4c16aa50.js",
    "revision": "3bd4f10399885709352d56e97c7d76b4"
  },
  {
    "url": "Bots.html",
    "revision": "b9221f85ba3a6f0c998a8d4b9b128915"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "a1156dfcd73d29a4e11b86bf1eee770c"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "967621857d9f81da50cb712a570e3096"
  },
  {
    "url": "console/Appendix.html",
    "revision": "a9b261d158618b5e4ae3d46125da5b10"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "4a0f03d2376b73dedb3ce2f2717dff20"
  },
  {
    "url": "console/Commands.html",
    "revision": "a03d200a02e4a3adb66aa23a323abadd"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "21ecec84cbd7543a68e8fd0525497b34"
  },
  {
    "url": "console/Contributing.html",
    "revision": "e927bf0f7d266330c579994ecf193426"
  },
  {
    "url": "console/Extensions.html",
    "revision": "bb8e3d39c8216db36b04e171dd564011"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "06ff71b04b866963af3a72a60f370c0a"
  },
  {
    "url": "console/index.html",
    "revision": "d8ba7c377fead2ce0dbe575467a36518"
  },
  {
    "url": "console/Permissions.html",
    "revision": "ab0014b492b34370d9320b4dcc18e2f6"
  },
  {
    "url": "console/PluginData.html",
    "revision": "fa029e4d6c9d5ab16913faf38df579ce"
  },
  {
    "url": "console/Plugins.html",
    "revision": "7bc5839ab025063f0addda3ed6152f29"
  },
  {
    "url": "console/QA.html",
    "revision": "ecd1ba05a7d6ab88e9f41e6be4d572ab"
  },
  {
    "url": "console/Run.html",
    "revision": "549cfdc767c91d1ff9a003cdbdf6afc5"
  },
  {
    "url": "Contacts.html",
    "revision": "0d50862f92f2c5d1e195998d695ec5dd"
  },
  {
    "url": "CoreAPI.html",
    "revision": "f0dfe053092cda544b473ee27bc976e3"
  },
  {
    "url": "DebuggingNetwork.html",
    "revision": "34a9874290b558e4cb244720e1aa3357"
  },
  {
    "url": "EventList.html",
    "revision": "13210c999b9b3ef3b943dcbbc492c17a"
  },
  {
    "url": "Events.html",
    "revision": "7df3c026e61faab7ba211654421981ee"
  },
  {
    "url": "Evolution.html",
    "revision": "a60c4c7976f3268d0148994020677372"
  },
  {
    "url": "index.html",
    "revision": "30e78f69f166409a426a311b3fe9ebfb"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "6328ef61821a4d1d9f47d8855b510464"
  },
  {
    "url": "mcl/index.html",
    "revision": "e5d16938d7531a9720581e9807963b92"
  },
  {
    "url": "mcl/Plugin.html",
    "revision": "7f464488c6156d3e48298fc229fc41fa"
  },
  {
    "url": "mcl/Script.html",
    "revision": "6ad959a7e179c6d145e2412fd38a6a36"
  },
  {
    "url": "Messages.html",
    "revision": "b1b321619bb30d9305da48bf02dce450"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "a7e065b720a7d73b7440124ebc7a4d36"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "a6cf541158531df937f6752a491a3995"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "3d3f9785c7a2eda65e6171c209dc66d8"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "3c6ebadbcb069c08c6d5e18e5a7e914e"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "2103cabf1de6a5370db69f30c983bfc1"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "5f09e88dfcfe144f66bfd93cb183b0e1"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "aafb00592be22898c5d02de55c3b6acd"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "7059d0ab4f7f92cbf372307eb6a26428"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "6df458c62a9ad444f72e608730d7d765"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "be6ba049f5a591267bb664f6ff034df4"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "23a5c81b1cddd25251a8f831a6fe62fe"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "3392ba2379f8fdfe4a36ca4515366c5d"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "91336f1bce372fc546d301cb67887f5d"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "3eac4da4933b95e9b44740e579be3323"
  },
  {
    "url": "Preparations.html",
    "revision": "69a5d3c4efa0023992f1a56a0895e2eb"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "a47ea75b0c43ccd1c64c8c892a6b044c"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "6320b4f9f005b824461f4881f3cbb5f5"
  },
  {
    "url": "UserManual.html",
    "revision": "37218543536db416ff2363b5b0f22a0c"
  },
  {
    "url": "UsingSnapshots.html",
    "revision": "2eff1ff5fc8ef386891ccb2ece9d66b8"
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
