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
    "revision": "fc8c1197d31914bc3a9fa20d435231e6"
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
    "url": "assets/js/38.7f731fbd.js",
    "revision": "1284fd43c5921a18a19dc612944b5612"
  },
  {
    "url": "assets/js/39.47f54173.js",
    "revision": "553e3be18ff5d1871ea0facc7aa9a34a"
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
    "url": "assets/js/app.f5b31f90.js",
    "revision": "48da21d3a449a62cc43dd71f64ebbf1a"
  },
  {
    "url": "Bots.html",
    "revision": "904718f00813ef27127f16576b719860"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "ed0dac2f33ad3b57cacd7e59dc0ac74a"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "0bef695bc4e9f25eb511d0fd264fab7c"
  },
  {
    "url": "console/Appendix.html",
    "revision": "b48f34707eba6592755176a7833df45a"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "ac3ac00cfc60ca7dfb5f49ba20b783f2"
  },
  {
    "url": "console/Commands.html",
    "revision": "23046999612a9aa9e1ec2f5f60670a0b"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "da53c482e31aa9860bdedef03735c43b"
  },
  {
    "url": "console/Contributing.html",
    "revision": "a37242ca3dedc201433a757ae8832bdc"
  },
  {
    "url": "console/Extensions.html",
    "revision": "b6f56e603e641ecbad334922e95dba56"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "6e658aeefcd56e99b6076727af5755d3"
  },
  {
    "url": "console/index.html",
    "revision": "a28eec4a1f5523e6d0c0ad58ccf454e9"
  },
  {
    "url": "console/Permissions.html",
    "revision": "362cf3bb9abe67412c0b33a9f7157e8e"
  },
  {
    "url": "console/PluginData.html",
    "revision": "7f20f3b43a210f088e5f2ab0f08fe33f"
  },
  {
    "url": "console/Plugins.html",
    "revision": "acb221a5a4b690942621125af23e29a1"
  },
  {
    "url": "console/QA.html",
    "revision": "760d899d90493f896138983192f519a8"
  },
  {
    "url": "console/Run.html",
    "revision": "50f4f07d52bf61845be0128b9320d1a5"
  },
  {
    "url": "Contacts.html",
    "revision": "6cfedd5c163fc796f1b354bbbe9733ce"
  },
  {
    "url": "CoreAPI.html",
    "revision": "65783d8ce16f9f97eb417bdd3c22d931"
  },
  {
    "url": "DebuggingNetwork.html",
    "revision": "73a407dc8d3ab30de6bdc392012b22ba"
  },
  {
    "url": "EventList.html",
    "revision": "073b9745e03bf355f9afbac7077be9ec"
  },
  {
    "url": "Events.html",
    "revision": "c4f12b0516f99891ee7c1e2dc3a9640d"
  },
  {
    "url": "Evolution.html",
    "revision": "67c9382ab196a2cfb15c78c4009ebd1f"
  },
  {
    "url": "index.html",
    "revision": "6ed804c99c073302d7df4fd46a3af715"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "58844e359280651c4798f4d5cd009bd8"
  },
  {
    "url": "mcl/index.html",
    "revision": "901749efc1d4f30b3ac686bf94941368"
  },
  {
    "url": "mcl/Module.html",
    "revision": "f145082385e7b9ac5feab25022bd5859"
  },
  {
    "url": "mcl/Plugin.html",
    "revision": "3c76d88da8ba87bdd395352af3a056e7"
  },
  {
    "url": "Messages.html",
    "revision": "b01bbd2bff22b5ed99f20ea6bcb9da27"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "e8c10176eceeb5d92aebe7e9858b6158"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "98e95611dbf3a7078f4f5447f9411acc"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "127282e582f6d2eb9c8b7dd816466fa6"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "0c82ebdfd54f6829bb580adf2d169fd4"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "55e58ac101736afe5311fd31dfdf261f"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "090e9517a388fb89e88623228d2ac10f"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "5394634ababb9f88f7455c2ad5371151"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "2b56490b6a35fd1cf6ae4370a540c8fc"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "9616b8f4e5308181b40358d5767049ab"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "c7c8dbd66e6341b55ea61f7092e57015"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "7e2a76df7437fb573561c0ca05f98059"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "5b1222e2f52e6b17673299cb7f844ec5"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "99fda609f006543232fd641ab44c67e3"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "76b848310b61cc8bc0063bfa231e3b65"
  },
  {
    "url": "Preparations.html",
    "revision": "d8e430f9a226ba87d0bffcc77f386647"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "2e0471afdd10276635eae78e97bb8c96"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "8e0a6b3b708622685d34f0381c4acec5"
  },
  {
    "url": "UserManual.html",
    "revision": "0f391cef4f1392d8400117e76b77f272"
  },
  {
    "url": "UsingSnapshots.html",
    "revision": "94bc260e3fd5a2680d0f70b5b06117f4"
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
