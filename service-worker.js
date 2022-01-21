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
    "revision": "c6660971b20323f367e319870a9d337e"
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
    "url": "assets/js/22.c4b1d348.js",
    "revision": "b21f303893494c3bb9d8cad047f3cf36"
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
    "url": "assets/js/app.117a0817.js",
    "revision": "cebd063aa278489cc51e582303bad6a1"
  },
  {
    "url": "Bots.html",
    "revision": "e6d467c316a983cd1b05a9839ee8e271"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "3dea02d02580271c5bb74bdb7ce1bc19"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "554c31a74a2d052a6ad5fec0df6c80e1"
  },
  {
    "url": "console/Appendix.html",
    "revision": "59b701d69f367ddc981cad79e8ef5ade"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "8f0e437dea6157b548f18f7129a0d482"
  },
  {
    "url": "console/Commands.html",
    "revision": "87d999b62499ebf0245e536e83e90222"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "bd10e6ca0ab5dea770bf47dce178129b"
  },
  {
    "url": "console/Contributing.html",
    "revision": "1318538544d4216d9f027466639b0285"
  },
  {
    "url": "console/Extensions.html",
    "revision": "58deca5fd19b66801a0db3aaf54576db"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "a6e213b4e78d6b1899719311bf899d92"
  },
  {
    "url": "console/index.html",
    "revision": "25f48c5dc51ebca96e1dbdde0a6770ba"
  },
  {
    "url": "console/Permissions.html",
    "revision": "c0ff407bb9cfb4a65aa316142003a697"
  },
  {
    "url": "console/PluginData.html",
    "revision": "28de084b6322366c200fa44740854b99"
  },
  {
    "url": "console/Plugins.html",
    "revision": "6a86f96e47f3c9326555804bb4454be4"
  },
  {
    "url": "console/QA.html",
    "revision": "e15bd83b5de7259cc1c80ce63c6b682b"
  },
  {
    "url": "console/Run.html",
    "revision": "bf6296b7d4bce746dc97cb002ada343f"
  },
  {
    "url": "Contacts.html",
    "revision": "af8ac5b4d7eeb6743c07b1415ca164be"
  },
  {
    "url": "CoreAPI.html",
    "revision": "59f35ace8a7c7f9d090fbc7924d2323e"
  },
  {
    "url": "DebuggingNetwork.html",
    "revision": "556df640342f3c01c6baae7077c8e95b"
  },
  {
    "url": "EventList.html",
    "revision": "1301e7947a0062dadf9afeb0a2e7257b"
  },
  {
    "url": "Events.html",
    "revision": "7196e133b5c1b98b23feebbab83c7c8c"
  },
  {
    "url": "Evolution.html",
    "revision": "e505689307d7654d4698b569de100efe"
  },
  {
    "url": "index.html",
    "revision": "37f8cfa59bdf9e853838c766378ff829"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "de3144740a8dfd7d14d5e84e0aec7088"
  },
  {
    "url": "mcl/index.html",
    "revision": "630db8ab931fe6632a3cbeceb0b8851c"
  },
  {
    "url": "mcl/Plugin.html",
    "revision": "bf3e963199575f2d6f131c952ff5461b"
  },
  {
    "url": "mcl/Script.html",
    "revision": "0df40fc0877acc1b0e40a1e23a819429"
  },
  {
    "url": "Messages.html",
    "revision": "01b0e59333de315f4d4f8b0ed9492aff"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "18bd8425a901ab859d6e1de862aaee81"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "cd0053418796b414f980e87d639cd30e"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "0b73b03faa275f7e124cd19bc9a3cbc5"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "eb8a383cf4d8fe240da97fc8d169a9a6"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "ddef013e9f7ebe368a209419ff89f82b"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "c92f05f46771f7f207890487fc041bc2"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "c8872b4b60ec8c383c6a782cd0147a29"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "281c1e8eb8c8715c4c9b056ba0546120"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "ee38df34c4e324fd4bfc340935276516"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "0846e7705803c9850c123d4c4f6de89c"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "5dddfa14c4d49fde7fdca50ee2f06ab1"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "318d6493c8eb475d56c9919a0c58550e"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "2e9dbf6a2f4ac9302413fcd305046f0d"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "cd2c3fd765246886734e9c3863ea6d71"
  },
  {
    "url": "Preparations.html",
    "revision": "1c0415cf61c322353397f02b2cefbcb7"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "85d040fdd97232d152b420d93b72a5c5"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "7af81387c4ba6bb129f5113ea63540e5"
  },
  {
    "url": "UserManual.html",
    "revision": "f20a09112f02bc2cd7a0ed067cfa9a7c"
  },
  {
    "url": "UsingSnapshots.html",
    "revision": "1d89a79de4e6ec44f5901da0cd434246"
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
