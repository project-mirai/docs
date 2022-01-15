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
    "revision": "72be761f40dd3e569b10eda26e068cbe"
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
    "url": "assets/js/app.32f0a17d.js",
    "revision": "aeb0bb6395771ba2db310d3c14795ee8"
  },
  {
    "url": "Bots.html",
    "revision": "6928cbabd2cd0be38b0a1729a04a4a57"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "bd3d92c9fb5ac9f42acd7dd7a6b5d9bd"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "a881e7f4a709a2ee3693a8bf82e06242"
  },
  {
    "url": "console/Appendix.html",
    "revision": "64b4d469063c286e888892afae56e1f9"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "3b153b0461bd66805ed6111d8e95975b"
  },
  {
    "url": "console/Commands.html",
    "revision": "4e1a376eea0bd69c3e85a75af8a09eea"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "037f9e6cc9280edad2804805fa97e6f3"
  },
  {
    "url": "console/Contributing.html",
    "revision": "e100de44e826f816153021272392d8ef"
  },
  {
    "url": "console/Extensions.html",
    "revision": "bd0387fbb1a2a4b2222b572c805f360c"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "1640e772bf782ff992d78e0ea24da5d2"
  },
  {
    "url": "console/index.html",
    "revision": "ab0c693fa5a3283c9cdd91794bd7b7d7"
  },
  {
    "url": "console/Permissions.html",
    "revision": "3f5d1ab9ce6e31c77d81def697f0b31a"
  },
  {
    "url": "console/PluginData.html",
    "revision": "b4c2877d23b6a3c4d0ae41a70b1de295"
  },
  {
    "url": "console/Plugins.html",
    "revision": "347dc9ee91e083621c2a2013d57993b7"
  },
  {
    "url": "console/QA.html",
    "revision": "4537c0bab41ed4fecdce46d6032042f6"
  },
  {
    "url": "console/Run.html",
    "revision": "fc98af395aacfb78433e4a9becfdac01"
  },
  {
    "url": "Contacts.html",
    "revision": "5a7ef5ab73601da603e39bea37f96dee"
  },
  {
    "url": "CoreAPI.html",
    "revision": "a824b6420804fe1141af14c20773d3a7"
  },
  {
    "url": "DebuggingNetwork.html",
    "revision": "8cc509f233551d1adfd3a53fa28f194a"
  },
  {
    "url": "EventList.html",
    "revision": "af46b5ac6ee180e28c2b60d2911b9ea4"
  },
  {
    "url": "Events.html",
    "revision": "0ea3a1e079c1436c2b8b8fbb81d61063"
  },
  {
    "url": "Evolution.html",
    "revision": "aac32a1c77311f50cf55810f3cc13a70"
  },
  {
    "url": "index.html",
    "revision": "c3019184cd4ec7de34ee54cf155f37a5"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "4609e64bc0e468f9d68cd9cb90650fbf"
  },
  {
    "url": "mcl/index.html",
    "revision": "e430383574fd9a53cd0d09a537fe108d"
  },
  {
    "url": "mcl/Plugin.html",
    "revision": "3c58b046354a7c697868755f0845b76c"
  },
  {
    "url": "mcl/Script.html",
    "revision": "32fea6ecab547f4031369ed91845fe2d"
  },
  {
    "url": "Messages.html",
    "revision": "6237ae710ea5f31ebcd4bb221034ba7d"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "f1f8119e8cdc6663f5fe9865968e1cff"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "f052f3fd2ffc966a5dce47fab481f18e"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "bfe1c9b70fd8c5e82c3805c14cca59ce"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "a3901e8fdce9c7e13dd8e63f21a3597c"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "e8a69925193cfc9b1e3d970d9a86952f"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "5727c98281100052dbede3027e2b593d"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "2c99cb7b4e5e55f862abef3731a10a13"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "089f2ab1937b9ac6dbf3f4ceacad2bfc"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "7935d488d327b20b6f90e7b8b2864e09"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "98eb6e8a4ce06f229fff8603e8c6b3ac"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "202f640bcfc339ccba0c34f16f7ae117"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "34a44ab21188dcd8bbc1634958f9c176"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "8eb63a0bab3f2ae5460e349a0547e98e"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "ab1c82fae52d72472437e479cf1b610a"
  },
  {
    "url": "Preparations.html",
    "revision": "c47c022a4401f582401077e23ced30ba"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "dfb3c9bf2eaf395b1da8169c199e7649"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "1818bc651f7ca91a603fc50d621cc75c"
  },
  {
    "url": "UserManual.html",
    "revision": "bd20051938eab348788cccd45795cd87"
  },
  {
    "url": "UsingSnapshots.html",
    "revision": "2722ec11b8f846918bfaa582bc1e7b7a"
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
