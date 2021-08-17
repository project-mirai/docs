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
    "revision": "71b5f7b6a7b4243c801b8cb1452dee0f"
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
    "url": "assets/js/11.448a2e56.js",
    "revision": "9bd460f5e5892c1023026d54cc9b2916"
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
    "url": "assets/js/3.de762076.js",
    "revision": "ba1ce3343ecf8b7ad0813fbe5226df95"
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
    "url": "assets/js/9.22e23935.js",
    "revision": "b2ce9d9a5fd93399650aee17c9b8d3e0"
  },
  {
    "url": "assets/js/app.535861d5.js",
    "revision": "828bcbc8f596f6bd67911615eeff3119"
  },
  {
    "url": "Bots.html",
    "revision": "3de2995e6ba2ff83cc818f71ae72cf43"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "ef17444d3f2aae5814110dab0a41a551"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "2b9a01b4d1996a9250d2a7799bb2be8b"
  },
  {
    "url": "console/Appendix.html",
    "revision": "4870a721e6cbe7950407f493e210ee82"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "aa4e790c503618ec69355d5240ee55d5"
  },
  {
    "url": "console/Commands.html",
    "revision": "6639036d26179f46ab88e6530856d9c2"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "76a892617930ddb6b47085b34643c311"
  },
  {
    "url": "console/Contributing.html",
    "revision": "9759eff469ef01b3e951c8dfb78296cd"
  },
  {
    "url": "console/Extensions.html",
    "revision": "f06f4c7fa838fc99477c6fe103b62805"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "de33d4f0f1a72c41dfa749b53e103291"
  },
  {
    "url": "console/index.html",
    "revision": "36d4eb7db051c906c6244df9fe9fe25e"
  },
  {
    "url": "console/Permissions.html",
    "revision": "71a0fb2b140a086657a0e9516933dddd"
  },
  {
    "url": "console/PluginData.html",
    "revision": "1f7ff8c881dbf80bc1392d3b6b7fee90"
  },
  {
    "url": "console/Plugins.html",
    "revision": "34611cdabd41e51fe0b13ace376b2204"
  },
  {
    "url": "console/QA.html",
    "revision": "ca0636fee605b3b8e6358fd01f27aa59"
  },
  {
    "url": "console/Run.html",
    "revision": "323e1d27bb7def75f1c1c2ea9b6e2ad8"
  },
  {
    "url": "Contacts.html",
    "revision": "a1d24ebb6c73cbf058179f0cca555a68"
  },
  {
    "url": "CoreAPI.html",
    "revision": "7365e041a11cb2a1144718fb0c9d4533"
  },
  {
    "url": "DebuggingNetwork.html",
    "revision": "cd3c4d5a34ffa09a676afa5c29664ce6"
  },
  {
    "url": "EventList.html",
    "revision": "0b132d8d4b4ee05527090bb1c9bb9705"
  },
  {
    "url": "Events.html",
    "revision": "e4c75b7a04b27c545832060285438b69"
  },
  {
    "url": "Evolution.html",
    "revision": "6867d2a56a93350a52a8bef6a4e687a0"
  },
  {
    "url": "index.html",
    "revision": "2e8ca935041d720c94e824afc378513d"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "6f864035d40b0a842762d47343c3bd98"
  },
  {
    "url": "mcl/index.html",
    "revision": "745e6b74bd836a68192b38867e423b5b"
  },
  {
    "url": "mcl/Plugin.html",
    "revision": "57706eaab6f3bfdd58f7090d6f5b8bf3"
  },
  {
    "url": "mcl/Script.html",
    "revision": "655ae6d24f64c6ff80a311eddc0d9a0d"
  },
  {
    "url": "Messages.html",
    "revision": "ec8a65373288de9305d971278d8670e4"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "34257088be574c28c9dbc792565544bf"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "3b017e9c433fd5bd12fd955cd09ec669"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "4ef66d0f4bcaed9bce2017753b75f92c"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "7e44934c3cc9562f877cb7f009b0528e"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "7d20a817524a4551f988cb1a5894c0fe"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "ec2d193c68318dad8dd084728e8e6c5e"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "14b0fe0f17ef443de015e4a29e1e7bad"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "df06324f9b0ef358eb882bb54317daca"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "bd33eff22504872cb9c8ea35f71b17e4"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "cfbb37b5ce424181e4f4fa687eb733f8"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "2226e938097c57160dc4abda63c23f6a"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "8398a36fd9044dc515c487b01e2aa080"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "08057a1242e013c23d4f744d138655ba"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "8e75d1920ea01a40e3fb3f9373ccec38"
  },
  {
    "url": "Preparations.html",
    "revision": "d65e5dba6b91562905b41622ab87bc46"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "d0ed687c4bdb316bb66e84dfd0e9d307"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "6df133afcf26aef00e453d036594045d"
  },
  {
    "url": "UserManual.html",
    "revision": "4024f1a5e15cc1197a3f44d7cb0690e9"
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
