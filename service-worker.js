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
    "revision": "4188f81f9781029fdf6075b55de8c53d"
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
    "url": "assets/js/27.2b88103d.js",
    "revision": "58deec0386b60f413594cc5739c394bd"
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
    "url": "assets/js/app.afdb9981.js",
    "revision": "658ddf503286b9e4b56a91ab850435fd"
  },
  {
    "url": "Bots.html",
    "revision": "f6fafe6781dc43bf66cfbd20de16295d"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "54980911fe20eef984a748b4f9c05224"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "0a010267ab4336fe1f35f2007a21e276"
  },
  {
    "url": "console/Appendix.html",
    "revision": "a1ff8f9f2aa329192cab8c625e5a3d76"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "e210ba9a47953f868f83ec0817510ac4"
  },
  {
    "url": "console/Commands.html",
    "revision": "318b874ec934ffce5b81cee6f88df68a"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "0c76c17072ddf14ca690112bd88c364b"
  },
  {
    "url": "console/Contributing.html",
    "revision": "f76914c11d61b61f97f6dc53195330ba"
  },
  {
    "url": "console/Extensions.html",
    "revision": "add82a9fe9102da766f0dfaed5e8a9b2"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "f93eed4d76a8dee333f396adc17731e7"
  },
  {
    "url": "console/index.html",
    "revision": "406dca933b4228765060484d01b9b56e"
  },
  {
    "url": "console/Permissions.html",
    "revision": "da616141afb7e3ebc33df6a9195c879d"
  },
  {
    "url": "console/PluginData.html",
    "revision": "a5d7e9e2bc5f4075d48d22922920ad46"
  },
  {
    "url": "console/Plugins.html",
    "revision": "ce8c74ee0c23312102b973b95c9c5f83"
  },
  {
    "url": "console/QA.html",
    "revision": "da26729dcc727ce7d5b07ef2c2dbf6ed"
  },
  {
    "url": "console/Run.html",
    "revision": "2e89e0c29713dbdda291b75fcbde3398"
  },
  {
    "url": "Contacts.html",
    "revision": "70a0861f23c5391ee17b94b02fa54d77"
  },
  {
    "url": "CoreAPI.html",
    "revision": "4708a575b405bd359baee3c50832278d"
  },
  {
    "url": "DebuggingNetwork.html",
    "revision": "d4dca69f006eab2878a50067ba6a0ae0"
  },
  {
    "url": "EventList.html",
    "revision": "756414ca6eb35312d5eaf945b9d2fbaa"
  },
  {
    "url": "Events.html",
    "revision": "2d4f24c3e8753c32638ec2d90629ce85"
  },
  {
    "url": "Evolution.html",
    "revision": "54d2f5901028ec3d7fb220fabaf9d47d"
  },
  {
    "url": "index.html",
    "revision": "aa076b2c6417c427137a3880534e32d6"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "64c4810d162ebbaa87dc56c992cdb811"
  },
  {
    "url": "mcl/index.html",
    "revision": "5df87e4a2d68d47bfe8cdce90af54707"
  },
  {
    "url": "mcl/Plugin.html",
    "revision": "452eb664405704561e989790008fe931"
  },
  {
    "url": "mcl/Script.html",
    "revision": "bbbfc80eb5823aa0c950e8d74b11c9ba"
  },
  {
    "url": "Messages.html",
    "revision": "836131a4c211b719b399e9aebfb59d30"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "520464d3bea005bf7ca97f33801c1cbe"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "32d781c3321aaba438f0e0d195ad9703"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "6dcca0dc4d47746e6a1a0ed45177ce1a"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "c3600447968bca08b43874c1c52ddab8"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "5f2eef320429985aadd144e04981a30d"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "d2f6000856a8784c6ea659f26740b989"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "27e220a6eb700fd2bc5af4fa3b7a32ff"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "091a11356e85b3c270ee0cf12b62a7de"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "05d4acf1caf3d0d16eafc0ac3b7029a7"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "f11dd43ad916d8d0b52023ad37250b35"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "a37baa42c279ed25fcbbc76d73e993cf"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "002f4094ad6dd188435f4ba15a51ce89"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "749f4b42214f479b6e4db5c37bcc0c2d"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "e532f265265bc57b90b6ed49155f9f08"
  },
  {
    "url": "Preparations.html",
    "revision": "63daf6f1a7f297c833ce54a521758c6c"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "5798238be947b202808f143b416b54f8"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "054f6333437551bf182821bdd81c240f"
  },
  {
    "url": "UserManual.html",
    "revision": "e97b3867953b58c9211ce80b1b1929fa"
  },
  {
    "url": "UsingSnapshots.html",
    "revision": "d36cd74f85310beb5ecf90027ac7e398"
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
