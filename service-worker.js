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
    "revision": "d6f229d73d493ad8dc8248ac8c8945cb"
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
    "url": "assets/js/27.e0fafd0f.js",
    "revision": "6c68f14c113a08e7e5ac2b9e8196d9dc"
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
    "url": "assets/js/34.1fdbd249.js",
    "revision": "90cdd532a5ad433dfe13f6db48080509"
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
    "url": "assets/js/app.07b6b9b6.js",
    "revision": "104d32764061d5aafcaa6369fb812d96"
  },
  {
    "url": "Bots.html",
    "revision": "256c9cdc43ec1a554260261900cf0192"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "af0d3aa3331017041630d5b105035d52"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "b6f3470983aebb24ddf60dc2e001178a"
  },
  {
    "url": "console/Appendix.html",
    "revision": "65b54c9f3c64be811fae3d67813791c2"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "e547234935e34498e564f29a4a2b7297"
  },
  {
    "url": "console/Commands.html",
    "revision": "bed989f8e5410a1f41919d88b2a37952"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "b95e2128dd20972af79f1ec4f61f8229"
  },
  {
    "url": "console/Contributing.html",
    "revision": "4bd195e4f95c503c2ac731ae7a987e49"
  },
  {
    "url": "console/Extensions.html",
    "revision": "9deb7eae9c26f12608ce1a93fe5eda09"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "ef462588b576d5b79f070d1c36ff8af9"
  },
  {
    "url": "console/index.html",
    "revision": "8d4aa099c45e3881b3b3ea19935b8ad1"
  },
  {
    "url": "console/Permissions.html",
    "revision": "a09e749d5a28c0f8972e7bfac6b43822"
  },
  {
    "url": "console/PluginData.html",
    "revision": "a6171dca4ae3f83c26bb827777ad0a24"
  },
  {
    "url": "console/Plugins.html",
    "revision": "0d6169a67732b4247e02cc6c9d807637"
  },
  {
    "url": "console/QA.html",
    "revision": "7967182bbe35f41576a4ffa672b7193f"
  },
  {
    "url": "console/Run.html",
    "revision": "e377318fd37a359b6e00f18dd2d170c6"
  },
  {
    "url": "Contacts.html",
    "revision": "9535f2f3998005a0cb62c25efffdf523"
  },
  {
    "url": "CoreAPI.html",
    "revision": "e0dd93f30b1b693e7d5bd60d189ed857"
  },
  {
    "url": "DebuggingNetwork.html",
    "revision": "c44370217b9684ce58e84e2b1b55a61d"
  },
  {
    "url": "EventList.html",
    "revision": "acb49e4311ff9fa26cc1f62ec2d979e4"
  },
  {
    "url": "Events.html",
    "revision": "18992de4aff1716cc41a6c0885e4395d"
  },
  {
    "url": "Evolution.html",
    "revision": "690c917080041b0a38239eb9397b8ba6"
  },
  {
    "url": "index.html",
    "revision": "5e0487748fc07299625abc6524fad0b7"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "1c4e80647d8040a0941a67cf7a85b6f0"
  },
  {
    "url": "mcl/index.html",
    "revision": "e8fcc0e976672946e33a6615b9fec11d"
  },
  {
    "url": "mcl/Plugin.html",
    "revision": "76c78211a576c67a2968c66761dff864"
  },
  {
    "url": "mcl/Script.html",
    "revision": "fd68df4b7f8c61a16f6aa6284004f4c2"
  },
  {
    "url": "Messages.html",
    "revision": "438100122d2f6a26132a4538479f74fe"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "dc73ae203cbe9fc018febe4abba14eac"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "fabd9c6a6013b4e7a19ec199e060fa3e"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "e03b33bbe1d3b8612db76097519f8127"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "80b32eb9291a79ef70e33edde8a77937"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "9a2488e2c7d082ed0d1bceabab52dcd6"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "e8805b165833bcb9a6a22dee06f48794"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "e9045d827e92282579130dd74654819c"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "8b2c082f69cd2d37bb73933905174b92"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "6f8f21220c968ed1ea583926994661b1"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "267e6da583ab10e83aa1550be59a797e"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "52383f1e2d3d9b60b70fbbd27ff464c8"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "43325b567c087e63ab47d08595ec8766"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "dca19731a9a835f2617249cc352e39b4"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "fe06a2f11842fe99a2b4bf4e0bc4df22"
  },
  {
    "url": "Preparations.html",
    "revision": "addebd8eb7c7e2659d8665bf1ad4d0f0"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "a8c51546c9feb3b6a077ff1b9f6cde8e"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "0fdb50dc693c152a8942787390086e77"
  },
  {
    "url": "UserManual.html",
    "revision": "5c5b1baa8b81a97f20980bcd59d06c19"
  },
  {
    "url": "UsingSnapshots.html",
    "revision": "2264233117d9ed97dc4eeb9725d3aee2"
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
