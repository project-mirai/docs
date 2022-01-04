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
    "revision": "260d2297c0f3aa7af4dae3f5f2f1ae5d"
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
    "url": "assets/js/29.9e4ea2f6.js",
    "revision": "c18a3ce3bf94c657434a2b160a268c3b"
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
    "url": "assets/js/app.14909dfe.js",
    "revision": "3952e9b133b18c9313140515026496bc"
  },
  {
    "url": "Bots.html",
    "revision": "cbdcb4af28ae1c150fea9a452baedcff"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "2389a1c9c4bca7b50b0aa231878d7f8f"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "771a3145e9ba683220613f762eb8968c"
  },
  {
    "url": "console/Appendix.html",
    "revision": "e6e3e1a00b0f49d1eab6b780345e9cb5"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "c4fa56ec74a93f9d5aa79824c34f0d33"
  },
  {
    "url": "console/Commands.html",
    "revision": "271af8e07747dc3372ed494b01f6e1d4"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "943ba81ef13d9b9847fd9abe46f01536"
  },
  {
    "url": "console/Contributing.html",
    "revision": "df1b160956fcad97ff2f13a4b75e4174"
  },
  {
    "url": "console/Extensions.html",
    "revision": "0ac440facb5797fa73852efc4bd4e03b"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "c656c6f96d85c290450d02538d895199"
  },
  {
    "url": "console/index.html",
    "revision": "000afc40ac0678cda210e891655f7df1"
  },
  {
    "url": "console/Permissions.html",
    "revision": "0785470e645f1629bd95266afc93e3b3"
  },
  {
    "url": "console/PluginData.html",
    "revision": "710e5f5580af1acca795df69a94b64bc"
  },
  {
    "url": "console/Plugins.html",
    "revision": "6d664a19f74f101d68e297232c3ed6b0"
  },
  {
    "url": "console/QA.html",
    "revision": "6932d3c7fc73bfe4d24078ed56f91b5a"
  },
  {
    "url": "console/Run.html",
    "revision": "daf7a0848de7a81e554f7ad8ff721074"
  },
  {
    "url": "Contacts.html",
    "revision": "d8d36be27c0195f62a1399cedcb89c3c"
  },
  {
    "url": "CoreAPI.html",
    "revision": "6325dc5cd3ad06d430ad5d3a47129d9e"
  },
  {
    "url": "DebuggingNetwork.html",
    "revision": "5e44eb4dfd9cd34652bdc2b1afafbcb0"
  },
  {
    "url": "EventList.html",
    "revision": "409c5b535e70e86a2fdfe4c916e10cef"
  },
  {
    "url": "Events.html",
    "revision": "d4d9d91237cf79e18d69aada6d62e498"
  },
  {
    "url": "Evolution.html",
    "revision": "3ec29a584488d49fedb3487e58604387"
  },
  {
    "url": "index.html",
    "revision": "6f395103037556f2b7dfc034d1722fd3"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "df2f5bba84c63110ac1826b356be8695"
  },
  {
    "url": "mcl/index.html",
    "revision": "82c6e7a8f955cfc05bb1212837282a60"
  },
  {
    "url": "mcl/Plugin.html",
    "revision": "3f73b9e228198abb69006c8ac451e2dc"
  },
  {
    "url": "mcl/Script.html",
    "revision": "1661356387ea1e108a84fe165de9e566"
  },
  {
    "url": "Messages.html",
    "revision": "54fb72d91c18f75c7ba61e6eaa18545d"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "e3293e89a8fb6c34c6bc152351765889"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "be0aa985c014e9362057f7fc8a9d555b"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "7e20f0d504ddb5087a7e9769d15ebfdb"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "c7fc2d1d026d39c02acd34154e5aa011"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "4b058cdd32284b14a0f2a5560274db5d"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "359aac2e5f7f0429573fef1340761fec"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "575694cf47778c111ee375b870cc9f4e"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "6466ebf5a99eb316d4490c8765c8f016"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "4fa7ae70f5bafe797102a97c47ff7428"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "1c43be93e98157266cc46440e3fc0144"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "fcbe9fd7b0e27813e0d1e62abf678cd3"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "c1c530d16d36e93956118828e17222c4"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "f9dba0ea49e16d530817876375011113"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "2d047501df79d7117eb7bc00b8bb8c4f"
  },
  {
    "url": "Preparations.html",
    "revision": "f4502a300f4dce6c470455c343447fea"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "d4f03d456f3358f9751b2bf5518bd868"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "37b38be9a0ec5769a63a2bd34e0a314c"
  },
  {
    "url": "UserManual.html",
    "revision": "8cac8fe65415c8e3c82eab5a1c0479be"
  },
  {
    "url": "UsingSnapshots.html",
    "revision": "3601504c98eab7427363bf722d7f3be5"
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
