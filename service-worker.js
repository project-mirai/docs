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
    "revision": "d080bd323cf38d67a202aad61f7b40de"
  },
  {
    "url": "assets/css/0.styles.f46ac581.css",
    "revision": "3d76e72705323794d7506bfe2ab22931"
  },
  {
    "url": "assets/img/a6a3b24b.7c79ea3c.png",
    "revision": "7c79ea3c4208f77aa204907923a53d39"
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
    "url": "assets/img/search.867d45d8.svg",
    "revision": "867d45d8f9c0da0e3e733dd5e7a8d263"
  },
  {
    "url": "assets/js/10.5a817418.js",
    "revision": "b7fa0617d6117ee2b9cdd0b81cf20a82"
  },
  {
    "url": "assets/js/11.c773278e.js",
    "revision": "03a49bd459c67ee83ed1c11a41bb6b2a"
  },
  {
    "url": "assets/js/12.dec58767.js",
    "revision": "d7fe7f0da04c5c592f3e6b2a01a04ba5"
  },
  {
    "url": "assets/js/13.b10e5efb.js",
    "revision": "6abf7a5712f23af75d80231f784d2131"
  },
  {
    "url": "assets/js/14.33f9015a.js",
    "revision": "74d5d23aa1b8bc4c4bcf39d853678a99"
  },
  {
    "url": "assets/js/15.968ced5d.js",
    "revision": "0752ee260fda0d6f3dc3ca628b05fddb"
  },
  {
    "url": "assets/js/16.3b1dfbed.js",
    "revision": "a21ee6e345271ab4f71f9b1a54fdf9ef"
  },
  {
    "url": "assets/js/17.312069e7.js",
    "revision": "12b9822884632efd30263fc5b8b34e74"
  },
  {
    "url": "assets/js/18.dbc2fbda.js",
    "revision": "8a40c1c5225eba86df395ea899dc1727"
  },
  {
    "url": "assets/js/19.18483acb.js",
    "revision": "835d35c35ba88a7db997ec8b69baf601"
  },
  {
    "url": "assets/js/2.71842359.js",
    "revision": "469d0079c3255826bb1dedffb7325a64"
  },
  {
    "url": "assets/js/20.cdad554a.js",
    "revision": "074956d23b4e6400e8679040f3188e9e"
  },
  {
    "url": "assets/js/21.75e66d7b.js",
    "revision": "026530790063aec2dd9b9c7f51805a7f"
  },
  {
    "url": "assets/js/22.6e78b238.js",
    "revision": "6a73c3c0d27b6077ac575b848406ce23"
  },
  {
    "url": "assets/js/23.d3c1dcef.js",
    "revision": "8e549d621df4f5d12331dbf549bc71b0"
  },
  {
    "url": "assets/js/24.133611b1.js",
    "revision": "d5262f5ac5c8115c716dbd4f9cd112fa"
  },
  {
    "url": "assets/js/25.5a99e6d5.js",
    "revision": "d0a8817feead6568a7ebd1465d3f7865"
  },
  {
    "url": "assets/js/26.2c1de861.js",
    "revision": "21220d28fd4dd28171c855f6e4c0dee4"
  },
  {
    "url": "assets/js/27.4ff24b19.js",
    "revision": "ed4e1a969c4f7d33a2ad8b3763f7a6a3"
  },
  {
    "url": "assets/js/28.c0925e4f.js",
    "revision": "c83c172678ba49e881b1d927a2f7a3a3"
  },
  {
    "url": "assets/js/29.b61d6406.js",
    "revision": "d6df2c6725213565e13a52ff01c9fced"
  },
  {
    "url": "assets/js/3.47847c8f.js",
    "revision": "f53f7696f8657b84a03cf912c0ad7daa"
  },
  {
    "url": "assets/js/30.21f26006.js",
    "revision": "36a1cea1952e02db6a851550f133399b"
  },
  {
    "url": "assets/js/31.f3242a8f.js",
    "revision": "1ab073ae12f7fb1d0c6d1df6739723e6"
  },
  {
    "url": "assets/js/32.69daed69.js",
    "revision": "a7e198117a22eac79ac436a94c86ae1f"
  },
  {
    "url": "assets/js/33.07c9027f.js",
    "revision": "485b73ef56d58a5804db1f92f4b55b40"
  },
  {
    "url": "assets/js/34.e6c526af.js",
    "revision": "f47d20fd0f052fa0507e38df8ffa3afb"
  },
  {
    "url": "assets/js/35.ad37c64b.js",
    "revision": "bfda5e6014a5f857c2be5017775db4a7"
  },
  {
    "url": "assets/js/36.c8a8e4c9.js",
    "revision": "460e0bd76db9cdec1c3b66c96c871cc0"
  },
  {
    "url": "assets/js/37.d47722e5.js",
    "revision": "a1b5cd462cf5e6b5a611911ce1d30124"
  },
  {
    "url": "assets/js/38.470dfdc9.js",
    "revision": "7cdcb886d5c33724e27764e7254d43a4"
  },
  {
    "url": "assets/js/39.8b5aee78.js",
    "revision": "65fc91817edf04e5318c311f7b9870d4"
  },
  {
    "url": "assets/js/4.dc44f699.js",
    "revision": "d0731ad386c1da5c9fca8a306f6e94a0"
  },
  {
    "url": "assets/js/40.cdffffc8.js",
    "revision": "4366f9c2226a7ca794b0ea9fc5d33df4"
  },
  {
    "url": "assets/js/41.4fbd9222.js",
    "revision": "64d135cdb8d7225c5d26c92892b688f7"
  },
  {
    "url": "assets/js/42.199588b2.js",
    "revision": "d9e66634b17ccf548e4b32137d21a45f"
  },
  {
    "url": "assets/js/43.68268f34.js",
    "revision": "5d4639b8c5e436bb35946727369168a9"
  },
  {
    "url": "assets/js/44.f4e9bc26.js",
    "revision": "2f096499b1f2d0fcc37f3c0250ade454"
  },
  {
    "url": "assets/js/45.ee380177.js",
    "revision": "d52e1b1ecc7de8ae2885972223313b00"
  },
  {
    "url": "assets/js/46.f78ee139.js",
    "revision": "01d526dbf3b774111e891bffb19c7758"
  },
  {
    "url": "assets/js/47.0e81ac16.js",
    "revision": "33821ee6b025bdb54cd90f95e6c9b7b8"
  },
  {
    "url": "assets/js/48.4ae81fc2.js",
    "revision": "083ed4fafec46388b58a533c88a72d31"
  },
  {
    "url": "assets/js/49.59eed58d.js",
    "revision": "1318e18203dddd12a39df806ef6ec79c"
  },
  {
    "url": "assets/js/5.22e5bd53.js",
    "revision": "b06eb37fd1e99f0eeeadd84171aea3e9"
  },
  {
    "url": "assets/js/50.93fac17c.js",
    "revision": "fd48063ecfbce759e28b3b694825935e"
  },
  {
    "url": "assets/js/51.13d31d54.js",
    "revision": "918fa53488946ae9dd7f97b5076aa822"
  },
  {
    "url": "assets/js/52.ab3c8093.js",
    "revision": "32b9a46cc6fe21599b3d63062b015f39"
  },
  {
    "url": "assets/js/6.afd0de69.js",
    "revision": "e0a2b9a812fd721917d481ba36f97eb5"
  },
  {
    "url": "assets/js/7.c5288a2b.js",
    "revision": "648c0a6a85b6ebf56c82fa05b056a42a"
  },
  {
    "url": "assets/js/8.c17033b8.js",
    "revision": "48c1032521ca986c018097bd6a73d1b3"
  },
  {
    "url": "assets/js/9.aa9afcac.js",
    "revision": "424c5f55de7d68b2a79289d71f362d7f"
  },
  {
    "url": "assets/js/app.a5d2b82f.js",
    "revision": "c0e9b0477fe6504fbfc95d5f4b625e43"
  },
  {
    "url": "Bots.html",
    "revision": "fa28e362bf859e0e0599b236fdcd065d"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "d2c42bc36936be0c29430d35622ebdb0"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "8687ad965f0aed019955a69885f1bc1d"
  },
  {
    "url": "console/Appendix.html",
    "revision": "fcbc08189688156af5c38b3224c931cc"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "862ddf1bb64623f0fea3701cc33a3626"
  },
  {
    "url": "console/Commands.html",
    "revision": "139d4259c5843938c57f620170e394e5"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "20711bb941398a7c29f3e5187657cad9"
  },
  {
    "url": "console/Contributing.html",
    "revision": "6affd8497c5cd260c2af44173cd63e56"
  },
  {
    "url": "console/Extensions.html",
    "revision": "4a1fc1ae755471a286ef027ba0ac6adb"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "1748d187b3a1b8d285e7347099e29ddf"
  },
  {
    "url": "console/index.html",
    "revision": "d19ec7408f16dc02a3c0ffacf1366eb1"
  },
  {
    "url": "console/Permissions.html",
    "revision": "5d22b521a5ae7cc0eac268686d17300e"
  },
  {
    "url": "console/PluginData.html",
    "revision": "be25049694d8d713eae36a010e9390d9"
  },
  {
    "url": "console/Plugins.html",
    "revision": "0f1147ebcf0db0e412cd7dc7f527d903"
  },
  {
    "url": "console/QA.html",
    "revision": "7c3dba880bf5e802c3d5f6ebd7fbe113"
  },
  {
    "url": "console/Run.html",
    "revision": "c88b0105d26e7e52a767083979039d91"
  },
  {
    "url": "Contacts.html",
    "revision": "d3dc8d528df31b3b6156998771463fb9"
  },
  {
    "url": "CoreAPI.html",
    "revision": "387c75abdf039ea2f268ff3a6a0d2d31"
  },
  {
    "url": "DebuggingNetwork.html",
    "revision": "3a4fb434495516d406e18efa42213405"
  },
  {
    "url": "EventList.html",
    "revision": "67bdccdba0e472b2465c3a7dde3877c3"
  },
  {
    "url": "Events.html",
    "revision": "f06e0a54e2ffcd43c2792d0078338b29"
  },
  {
    "url": "Evolution.html",
    "revision": "ccfca0a74684ed6374f893d13b1416c7"
  },
  {
    "url": "index.html",
    "revision": "bdf5b94eaf18676ab87d83d664878ad7"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "10cae4cf71cca6da9c82310fcc9a329f"
  },
  {
    "url": "mcl/index.html",
    "revision": "2c70155e0498644e597ea7924db011b3"
  },
  {
    "url": "mcl/Plugin.html",
    "revision": "69748c0bbbfe3ffb0fabd100a3032a97"
  },
  {
    "url": "mcl/Script.html",
    "revision": "41091c6b2adf04fb72550bac2dc16293"
  },
  {
    "url": "Messages.html",
    "revision": "c6c0a1ff746bdb4766a48cfa21e81b0c"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "57329141c5940af1399d1d5c03476ace"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "1163df18e66b27486b09eb52bacc03bf"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "3af859614e8460c1b3cdfa3f404161fd"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "1d8eb078aa5fd9b5115fd699d3459980"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "7cd10d6b1eb45c453b8e878e5ac0a7ac"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "ada778868fffe8fa6f6b030f00f3e888"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "d17ceed04c0a3d6b2ffc92682b92c1fd"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "d0764beeb0442622f8b8ec304be20256"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "dbf9bd5f9d58f6485814ed28723fba5c"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "70f78c695a64df08236659ac2154a98f"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "e049eb11734570ece2ff6b6e6f78c6b8"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "8cf7dfaf2298aeeb2564a533e0fccc42"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "9d2a7e2392d72845880eac025d6e851e"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "67aa631d5dd280760dd20a017eb171aa"
  },
  {
    "url": "Preparations.html",
    "revision": "a84000b75693b6c63ba0bf5e831c40a5"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "3866281a31893efac6b9c13ba4496eb9"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "ee208a5d18d24f923aa8c1cc67de0ec9"
  },
  {
    "url": "UserManual.html",
    "revision": "83a960609514908e12d8729c79b94b9c"
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
