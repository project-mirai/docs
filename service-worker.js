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
    "revision": "bb8f029fe2196782fe499dff7049efb8"
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
    "url": "assets/js/11.f137c4e5.js",
    "revision": "1f40f920b9d6a2cf00504f936614e971"
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
    "url": "assets/js/app.792616b4.js",
    "revision": "fb9ef29bb1b377e0d24c02802768e39e"
  },
  {
    "url": "Bots.html",
    "revision": "4367a9f91ab4553d52eb5e2c6fc688c3"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "c2a07104bc4995dab62ebeff2e5e4bad"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "be04b286b487fafa8c2f79f99025e02e"
  },
  {
    "url": "console/Appendix.html",
    "revision": "bff6034f6cc6681b5c545591501d866c"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "d745c36ae2d4aa0de7e401c7161e20ff"
  },
  {
    "url": "console/Commands.html",
    "revision": "ed95f7c497239fe516fc8c2382244e06"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "2b16a2d19487796081553455a80dd174"
  },
  {
    "url": "console/Contributing.html",
    "revision": "3bd144b7d70f785dc63c92774b20741c"
  },
  {
    "url": "console/Extensions.html",
    "revision": "098a881e9a74dd055534c7a95bd6a3ce"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "f84f400bca32555faeb2cd3082dcfe17"
  },
  {
    "url": "console/index.html",
    "revision": "882ae0fde768475167f76eb4d5a944cd"
  },
  {
    "url": "console/Permissions.html",
    "revision": "48a61aa673297c1e96a414291104df7d"
  },
  {
    "url": "console/PluginData.html",
    "revision": "de5040383738697c1afcdcfa476d1112"
  },
  {
    "url": "console/Plugins.html",
    "revision": "a90132d06016c456c9deadf5ffb0f744"
  },
  {
    "url": "console/QA.html",
    "revision": "0ddf00527328935065458637c136ab53"
  },
  {
    "url": "console/Run.html",
    "revision": "4ed5409147e527ce2d5f23a316b574a6"
  },
  {
    "url": "Contacts.html",
    "revision": "0558f8de5ecaad9aa0305e93643e16ca"
  },
  {
    "url": "CoreAPI.html",
    "revision": "d6af704a0c3cbf93ce1e99e75848b400"
  },
  {
    "url": "DebuggingNetwork.html",
    "revision": "2d9c87c5b4b26df230f60d5013bd852d"
  },
  {
    "url": "EventList.html",
    "revision": "eb7deb8dd692067a3617b9808b796521"
  },
  {
    "url": "Events.html",
    "revision": "ba148840041db7dff229a987de32a4ba"
  },
  {
    "url": "Evolution.html",
    "revision": "8a5fb8108ddad39da7aef96af94bd1ff"
  },
  {
    "url": "index.html",
    "revision": "7393924b96d14acce2f95c725d315668"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "45c7b9c9acdaf85e8bc81c2cb96b2265"
  },
  {
    "url": "mcl/index.html",
    "revision": "b3550ed40b6f310233bc0f215ebf81d1"
  },
  {
    "url": "mcl/Plugin.html",
    "revision": "a6919fec8069342670502f816bcbf627"
  },
  {
    "url": "mcl/Script.html",
    "revision": "6092a963109c8bdee5cf373945fc89d5"
  },
  {
    "url": "Messages.html",
    "revision": "05c94ac96eeaba154a583e43ba88de3d"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "3d0768082e77cd4744b15184cc7718c0"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "1db03f23778149d1cb1a80363cbd9016"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "c9b09d89c030f661e07fca239f9bcb86"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "bffdb8ff74cce5a34ae9b77890e2ff7f"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "38aa4e19e3f685bbb23d919a3de53d9f"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "38fd6bf38a6528d1b7e1952f06e0548f"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "2828897032e73b0698cd33926287cf47"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "44eecd2ae69d466e11fa0fb7e1fbba14"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "4e89d0c1511eac719aa8bc69c7934f15"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "a6a2db45d608512db92d9ba84b53fb8d"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "7abf7123e567b30b51d0360a6eb569c9"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "50ec7269b89dd1b23d94a424eed97979"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "ff6895a4a22d2f49fffe572dba74c346"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "b114b69ef3e093298c4fec7456363a75"
  },
  {
    "url": "Preparations.html",
    "revision": "4226fa287fae9153b7082d1faaa1a967"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "42fcfbad33dc354340ea502a06cf3ea3"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "33b78a7da3e07d56f70c1c8377df0f4d"
  },
  {
    "url": "UserManual.html",
    "revision": "f333a8261dc3d622261847e5c9854c52"
  },
  {
    "url": "UsingSnapshots.html",
    "revision": "9c300911c992eac9dd95dea6606e03b7"
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
