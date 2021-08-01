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
    "revision": "90776e6cf188f730e44f999ce068e7c9"
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
    "url": "assets/js/22.5af4abf3.js",
    "revision": "92ba9cdac12f3db0fe06dbd3dc3ad4ac"
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
    "url": "assets/js/26.198a2a35.js",
    "revision": "db2de05d0244d2ac0181387e6c98e966"
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
    "url": "assets/js/41.fa4fbc7d.js",
    "revision": "1e4e7c3f453c6349b1d4d7cf0561e056"
  },
  {
    "url": "assets/js/42.836b7294.js",
    "revision": "201ac633a3655d5cba728ff100aa859d"
  },
  {
    "url": "assets/js/43.68268f34.js",
    "revision": "5d4639b8c5e436bb35946727369168a9"
  },
  {
    "url": "assets/js/44.a93cfadc.js",
    "revision": "f2e955621e4846a3f8618245a619ef0a"
  },
  {
    "url": "assets/js/45.edadcdd2.js",
    "revision": "776be96ea468c014a64b8ca7a93a1679"
  },
  {
    "url": "assets/js/46.65a9dbd0.js",
    "revision": "3cdd828e6414dcbb7a7e3cdfeb09d09f"
  },
  {
    "url": "assets/js/47.0859ee45.js",
    "revision": "9a977199cfa7fb4291126fae88afd90a"
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
    "url": "assets/js/app.2a9f569d.js",
    "revision": "5d1d8b9972c01d84d3eced265dbc9899"
  },
  {
    "url": "Bots.html",
    "revision": "0ee801cf1460eef2279c8d9247a52835"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "90bae8802fcbc9f7402011781edb7193"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "ffc8371c6ddc506477c0129c27515c12"
  },
  {
    "url": "console/Appendix.html",
    "revision": "ca4f98340c66096301c957794417fab8"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "f80ac4a873bcc701754b0c0b6d99f910"
  },
  {
    "url": "console/Commands.html",
    "revision": "71ec62b5c7028826792f8b84c679df0b"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "f5bd71575c835d410bb76116ceaf37b9"
  },
  {
    "url": "console/Contributing.html",
    "revision": "d988f922766d7895f32118516ace7111"
  },
  {
    "url": "console/Extensions.html",
    "revision": "1dc434f0abd235421fe5e352a4cf9d78"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "2207520153fa6465af91ec232a1fd736"
  },
  {
    "url": "console/index.html",
    "revision": "df1f689a0b4c445e305bcc5361fa62f6"
  },
  {
    "url": "console/Permissions.html",
    "revision": "9dd5312b7390a60fdeb041e703e2ae4f"
  },
  {
    "url": "console/PluginData.html",
    "revision": "df1352036500b2bd4ac91a295d27cfc3"
  },
  {
    "url": "console/Plugins.html",
    "revision": "430f2754a50ce9990879ddf90a00d664"
  },
  {
    "url": "console/QA.html",
    "revision": "49ecdb5f9dbcac19a2714a544e054573"
  },
  {
    "url": "console/Run.html",
    "revision": "ea384b1bb2b9bab8c1b1d15cd4389991"
  },
  {
    "url": "Contacts.html",
    "revision": "16ac20b6da2f20673d1ae8b83e5aacc3"
  },
  {
    "url": "CoreAPI.html",
    "revision": "9d6bf1db9a614c0a5cc0782ecc500610"
  },
  {
    "url": "DebuggingNetwork.html",
    "revision": "8861638633d1110244e5dd67227e9d4b"
  },
  {
    "url": "EventList.html",
    "revision": "c5be02bb72d05563e4d211c6c5bf3717"
  },
  {
    "url": "Events.html",
    "revision": "66ffab9945da85848138cd6950024bea"
  },
  {
    "url": "Evolution.html",
    "revision": "f34b921f7740f8d0539fd3c5bfb76ea5"
  },
  {
    "url": "index.html",
    "revision": "bbd31f27bab2691a8578366a887ba3f9"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "ceb547f7b1003c5cd448daf3351062ce"
  },
  {
    "url": "mcl/index.html",
    "revision": "493e030f8899e94f42d57991a8a5521c"
  },
  {
    "url": "mcl/Plugin.html",
    "revision": "702f730feb024c9d8b596c5350936593"
  },
  {
    "url": "mcl/Script.html",
    "revision": "3af9242d0e4bfb72ffe1a8a466f86475"
  },
  {
    "url": "Messages.html",
    "revision": "14d87a095f95f9149fe4d6b932ed8765"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "287ebeaad79d7ff0f49609fba2538b7a"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "b15b965a5b027b01cf4b77332a38c949"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "00f1a4a2355e79278d3de9ce6ff5980e"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "a0fd0cd60b5dcc6db14088c3c06451bb"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "df47877b49f53f086b459dda7cdbd6cc"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "b03445bb65e3b32ff36ce434793c0bb3"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "b93c5710f10528d49d47a81dd957bf63"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "43714ae74846fbd8149440166ee23df1"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "09c0a18d7589efca836b71177d89b96a"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "7a730069e46328cb0e72c7638891238a"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "bac6bc696f7735e2fdabf2b652e3074d"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "74e2abd934769176611bb636350581ce"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "0d5ebbc6a4c57c8ca034bff4a05804e1"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "6c489e3d671ffa253577377c364888ab"
  },
  {
    "url": "Preparations.html",
    "revision": "e6ebb7a69f568195a3d9dc42965bafc8"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "0aa054799833e063af4417cf76492389"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "4a4495ae4f3be6e9d344960116281553"
  },
  {
    "url": "UserManual.html",
    "revision": "4deb58d8bb6bdabe7454110fca48fed8"
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
