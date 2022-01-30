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
    "revision": "5b523a37b6f7dcaa8ed4802d5ecd02c3"
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
    "url": "assets/js/app.d0d242e7.js",
    "revision": "730e389a30fd9bde5962a1afcff3f17b"
  },
  {
    "url": "Bots.html",
    "revision": "4488422cf85acb9c1b40041e21d59188"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "49472450886e7005b6f4214231cd9e7c"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "93ed0fe613b286f0036c6d4dd52a31b1"
  },
  {
    "url": "console/Appendix.html",
    "revision": "bf94b3b09c47ce2f9374e8be38e7c6a6"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "c3da5dc0fc4d9dde24772b939110c4d1"
  },
  {
    "url": "console/Commands.html",
    "revision": "de5092a1a1ae326a13e61d4c46390436"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "458a9188bc91d0419660ffcb2460a211"
  },
  {
    "url": "console/Contributing.html",
    "revision": "8325789f03c2d18f9293e0858cb6ca60"
  },
  {
    "url": "console/Extensions.html",
    "revision": "2234255b1daf33e3e57602a8866f62f0"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "ee5fe0a4ca7cefee44f57435aabfed5c"
  },
  {
    "url": "console/index.html",
    "revision": "5543ce1ee1e21e96b801cf9436bf3703"
  },
  {
    "url": "console/Permissions.html",
    "revision": "bfc6c862f3470ce8b3f02f589a5f5718"
  },
  {
    "url": "console/PluginData.html",
    "revision": "fc38dd0d529471a19ca0fefbe47c19d7"
  },
  {
    "url": "console/Plugins.html",
    "revision": "9b0238d7f0948dc275e8153a2953c9bb"
  },
  {
    "url": "console/QA.html",
    "revision": "3302c519717c8f31b5a95ebbb29645e5"
  },
  {
    "url": "console/Run.html",
    "revision": "1d6743bd9fbb31e36d73a01e60904cfe"
  },
  {
    "url": "Contacts.html",
    "revision": "5478b52a9cc16382bce6f19cebeb6aaf"
  },
  {
    "url": "CoreAPI.html",
    "revision": "e8cdc97daa0d19e4404b67826ddcc5d2"
  },
  {
    "url": "DebuggingNetwork.html",
    "revision": "5bfa3fcf146769fc8bb18a1ea32f2b4b"
  },
  {
    "url": "EventList.html",
    "revision": "3b67c1dbb9d15053f33385e875aba27a"
  },
  {
    "url": "Events.html",
    "revision": "484d21768b2379c5113f45c17801b213"
  },
  {
    "url": "Evolution.html",
    "revision": "b0ce993bf940669ea7e4a020c1f0ed2b"
  },
  {
    "url": "index.html",
    "revision": "b9099b0d7382bcdf70b3d2d2e49206ca"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "fe7e0d462c95914121acefbc032100b8"
  },
  {
    "url": "mcl/index.html",
    "revision": "1be70f9e70ac08b4d1547bedc105b7a2"
  },
  {
    "url": "mcl/Plugin.html",
    "revision": "290dd736127c5351344ede6117a81c20"
  },
  {
    "url": "mcl/Script.html",
    "revision": "75aa8f67dcf11f929e01beafa0cad5bf"
  },
  {
    "url": "Messages.html",
    "revision": "05d3f73ca9af567d6454e26ed26da13e"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "e5d403dc010bf0e2213e274e4b06f24c"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "341f91bcddb18d6b2919bd98e489387a"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "c40533329e7fab42061cb9acd60e44b5"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "865aed0241cc61e0449a12a36c51a250"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "ca6cd887349676c738513f7ba9585094"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "5d60410fe6fb267798721caf98e933a3"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "50ae091bcaae2f6fcc046e7c718fba5a"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "9b8fab52b52113ec8473282656bc213f"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "703c20e19ba7faec7a15c3dd8d4940d5"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "5ed98d3856c51a4227c039ccf0e8ad4d"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "1e672fd203a52a6143edeac88ec834c9"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "3cfe2baa094bcbe944c82caf2dfe1ba1"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "208e53206ace8b5febb6a1e073fda2c9"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "2f41c4914a8e3b6cd15f722a092587d5"
  },
  {
    "url": "Preparations.html",
    "revision": "e6f8ffe16ebaaedafc5effc7e9dc6a84"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "d6207b511d8a7e8581f24f5f5aa5b777"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "295c8a9596a269ddae8c2040facacc3e"
  },
  {
    "url": "UserManual.html",
    "revision": "464c169ae83559f30ccba87068441c2a"
  },
  {
    "url": "UsingSnapshots.html",
    "revision": "76bc55f54dde9b62915e7d372a7e3836"
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
