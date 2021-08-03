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
    "revision": "96bf96006b0a4502d64d5c4441561bd3"
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
    "url": "assets/js/app.9c25f22f.js",
    "revision": "06f7019fa3ee15a799916de85b896122"
  },
  {
    "url": "Bots.html",
    "revision": "2ad67206c439bbda67dbe726d38aedc1"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "a322d14f040176afe229233e31c3ab38"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "809ad1042d96e0c82b79474453347058"
  },
  {
    "url": "console/Appendix.html",
    "revision": "d3053243e5568b5c5d875db5a04bea59"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "14cdb89eb9dc458c720b5e45d32f2216"
  },
  {
    "url": "console/Commands.html",
    "revision": "f634110e34ee9211e7cc3de128a13fde"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "3a804f2046c4d01785994d9d037ea9ab"
  },
  {
    "url": "console/Contributing.html",
    "revision": "00ec099d61c72b24461715479a8fda37"
  },
  {
    "url": "console/Extensions.html",
    "revision": "b46c7d6f0888099e224e895796398747"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "6adf8bdfcd4a45cd477f055f2b591526"
  },
  {
    "url": "console/index.html",
    "revision": "82de5bce555b9da0f1ce843d24afa83e"
  },
  {
    "url": "console/Permissions.html",
    "revision": "01910c864f7f35f0bde6f5cc5eef39e2"
  },
  {
    "url": "console/PluginData.html",
    "revision": "ab3d628779fa9c31610350a87d448765"
  },
  {
    "url": "console/Plugins.html",
    "revision": "6a8fc6b11fd2994ce7ae23eb8dc45421"
  },
  {
    "url": "console/QA.html",
    "revision": "5e21b86b1018b0a520a0e56ea8cefeb3"
  },
  {
    "url": "console/Run.html",
    "revision": "a5be1840466e31b13c20adaaa03dcff9"
  },
  {
    "url": "Contacts.html",
    "revision": "c5d9210b99ebcf5e377881d44665673a"
  },
  {
    "url": "CoreAPI.html",
    "revision": "3963f16c6845dd837979786b52a8b0ee"
  },
  {
    "url": "DebuggingNetwork.html",
    "revision": "285e7192d0f16003bf0049b78d099240"
  },
  {
    "url": "EventList.html",
    "revision": "192765597af98e67d76c7a51e8c7cc47"
  },
  {
    "url": "Events.html",
    "revision": "4d1284218562405c45f4ee32f5caaff1"
  },
  {
    "url": "Evolution.html",
    "revision": "12efcbb837faeaf8ae6713c29c924d0c"
  },
  {
    "url": "index.html",
    "revision": "d928f09e9056bc27bf7c6ad9426a0871"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "f58b54a4e15921fe8208d91550431ba9"
  },
  {
    "url": "mcl/index.html",
    "revision": "18898e8bba4245894ed24441e817d7dc"
  },
  {
    "url": "mcl/Plugin.html",
    "revision": "631663167886d2ab293c0fde6e67cfde"
  },
  {
    "url": "mcl/Script.html",
    "revision": "c1e2f4875a5a5e9582af98bec086550d"
  },
  {
    "url": "Messages.html",
    "revision": "df9aedc37a7a26910a023721786cb934"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "7089beb7e1e21950c7d1063252aedfa6"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "8e3b5aad08724c0e68bb553040de9210"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "050da52c43eb1343dfe21ac2547262a6"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "526600e794dcd472eb69534c8475479e"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "9ab82409559bd20855796fc45a6da09a"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "4427c429b74d1be7634fd05963e74724"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "cf975b142d88efddac0563a21b0db27d"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "bbe47aa7c0c0f2e58ee02f422f17e3c7"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "3d18ee731ba952ac8136b241f6d0d90f"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "6fc6f6eb790b84a5a4e8c69f523aa9d7"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "dbdc49308a8380df0d709ce69e506948"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "b701b6ff14565fa3230e6355afcfcbff"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "d368c6654755661eacc2c8a1dc8d005d"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "ccebe62f1b089873f96f869581ee63ae"
  },
  {
    "url": "Preparations.html",
    "revision": "34887e0b6ba91e8f4cae0b3eb820d01a"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "dbba6990cf1056303445de56cdf82e28"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "4cfa3cc0018b3b2d9a684ad4b63dc3a1"
  },
  {
    "url": "UserManual.html",
    "revision": "5c001be68645370ae0bee9831852c219"
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
