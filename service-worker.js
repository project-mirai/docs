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
    "revision": "9da598a9718ea67eeec5e7a34628e8d7"
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
    "url": "assets/js/14.0874a161.js",
    "revision": "93e514d1aa59c78046be392ff9ba6f24"
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
    "url": "assets/js/27.8a36cba8.js",
    "revision": "17be2b87c6a2b2af52b0136a3ba178c8"
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
    "url": "assets/js/38.b7b77f2a.js",
    "revision": "89e9e2fbcbab82c9f42d7d83504d720b"
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
    "url": "assets/js/app.394d353c.js",
    "revision": "fc5dc59a1905c52722da4f198daa5c73"
  },
  {
    "url": "Bots.html",
    "revision": "1422310a5cba1b09f18416425d4df53b"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "83364383029f62e5dfe206b43ac696e9"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "0dd681ff2d5773e3074e2cfcc1f0274f"
  },
  {
    "url": "console/Appendix.html",
    "revision": "3fa0cd6f60670a3f1521cd85a5a3e3af"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "d4d8785b25d4499a6d02b8f83ef04d63"
  },
  {
    "url": "console/Commands.html",
    "revision": "60be1c38dd30166b245050ff48068f40"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "4e1b922e0704d4ae7758df02752ad42b"
  },
  {
    "url": "console/Contributing.html",
    "revision": "2cabb244d3945ce1c562e13d858e8c8c"
  },
  {
    "url": "console/Extensions.html",
    "revision": "bdb2e77dc22d1edddd97faad2af04a36"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "e29ffb1a14211f811d28cf6b6d491608"
  },
  {
    "url": "console/index.html",
    "revision": "aa7c24a0e98bad936d5a83cb3386fdcd"
  },
  {
    "url": "console/Permissions.html",
    "revision": "ead1104cadc6484a3f7f83b9f8eb2df4"
  },
  {
    "url": "console/PluginData.html",
    "revision": "b62f02a18a9f2f749358cba767427e83"
  },
  {
    "url": "console/Plugins.html",
    "revision": "6fad2503e13dfb5aa56e3e3687285b14"
  },
  {
    "url": "console/QA.html",
    "revision": "67f1007c26ab9b6a5bd874025092c35f"
  },
  {
    "url": "console/Run.html",
    "revision": "9eafe1a4840c171af9ffe55a52bbcffa"
  },
  {
    "url": "Contacts.html",
    "revision": "dc5e13ca19da667250a06a5b2f019cb6"
  },
  {
    "url": "CoreAPI.html",
    "revision": "fa8520816040774679dcafa7011091f1"
  },
  {
    "url": "DebuggingNetwork.html",
    "revision": "fe22fdae9f293797e65a1e0d5744fd7a"
  },
  {
    "url": "EventList.html",
    "revision": "b91ca991b60cbeed58a3b35935ffedbe"
  },
  {
    "url": "Events.html",
    "revision": "95592ad715afdf658e20153497b7a2b4"
  },
  {
    "url": "Evolution.html",
    "revision": "a0df25ba39f6fd10f845e0284a91a7ea"
  },
  {
    "url": "index.html",
    "revision": "73069c6c3a8b7b959ff429934a3da351"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "4bce1858eb6c0904f2712a14cc2bd672"
  },
  {
    "url": "mcl/index.html",
    "revision": "479541a184d208934140c695f7bdede8"
  },
  {
    "url": "mcl/Plugin.html",
    "revision": "e9bb47cdfcc1cb432ad0902d540e26b6"
  },
  {
    "url": "mcl/Script.html",
    "revision": "7cf5af6f6ceacd923bb205ca27b64479"
  },
  {
    "url": "Messages.html",
    "revision": "522d26daa72f68e5617a78d2646793d0"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "befa65c3a931dca7346e8cc7ceff2068"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "b4a9cdc70ca7f65661e91e51594b1308"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "0c0ef69a7bef63828b6a0cbec9f097b7"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "eb51a2803cdf6db722b6be9e2efe09cf"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "20e927753421151e4b8da223c1bcbbe1"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "9a1f48dd06d3d4ab52eed61ac3ecda24"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "4b7b88d07819e8775b826f1350c20b23"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "fe9cb93649b9ab399cf740eb98336dff"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "9e029034b076cd8e6d9c26f16cc4df1d"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "c0147be3da780b3fde40e6c3565f85e5"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "1e470cccd511256fd9c0ad09c25dd7a9"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "9106da2ee2226e630b2528a292c0ae36"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "b943be50566cc3c7100fc57b1cb1a598"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "5e62143d9431a6afeb9955c6646c9036"
  },
  {
    "url": "Preparations.html",
    "revision": "67c6fc2a66b77333979607af7461662c"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "f185d561087d056cdf014757d5bc8876"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "b55040987603e563c2419797152dda21"
  },
  {
    "url": "UserManual.html",
    "revision": "2fe70f97fb0a8f9ae9e775f420aece4d"
  },
  {
    "url": "UsingSnapshots.html",
    "revision": "e712640124f50b4bbbaec80e9c724396"
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
