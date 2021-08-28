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
    "revision": "249c553480ee7377d9af817cb99bd32e"
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
    "url": "assets/js/11.2c9e4dd1.js",
    "revision": "498b9b0b18415a07dcdba1aa50547059"
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
    "url": "assets/js/16.8b239dc7.js",
    "revision": "7bbffe94ccb8dadb6b1b5ab07460abd3"
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
    "url": "assets/js/19.298b3e7d.js",
    "revision": "742400b24d0fcb6e3aa3bb36af271551"
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
    "url": "assets/js/26.dbb95bbb.js",
    "revision": "ea48334c03e99a127349300da0835f8b"
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
    "url": "assets/js/6.f20a55e7.js",
    "revision": "62be6397ff24b6d0243ac53925fc1057"
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
    "url": "assets/js/9.05cbb4d4.js",
    "revision": "b2ce9d9a5fd93399650aee17c9b8d3e0"
  },
  {
    "url": "assets/js/app.46f6e7a9.js",
    "revision": "b504ddaa458f0ab4a01191bd613c1167"
  },
  {
    "url": "Bots.html",
    "revision": "7f4d4ad39f87bbdb03d6e52a986be42f"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "9c008ac47c9cfc7c10ab7866f8180ad7"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "f8a0e9f12fda08c61d66e4b5839fdf6b"
  },
  {
    "url": "console/Appendix.html",
    "revision": "601ac4ee51747a8937cc78e02d5129ce"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "1175fd689e3a52c5ffed4062e8d594c2"
  },
  {
    "url": "console/Commands.html",
    "revision": "88fa7621d5fa7bb5030d480c90d56b65"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "eefacfeae8cefda788171e8153170329"
  },
  {
    "url": "console/Contributing.html",
    "revision": "7c9bf9bd78b38141e695055ec6c89492"
  },
  {
    "url": "console/Extensions.html",
    "revision": "acc52512a86295bb77f4e6fecead4809"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "34110b196abc32c723fd6953649e1d0b"
  },
  {
    "url": "console/index.html",
    "revision": "66ba70b50cf0a009d097d7a20e3cb760"
  },
  {
    "url": "console/Permissions.html",
    "revision": "da2285e71db773a3f88e9f398019aace"
  },
  {
    "url": "console/PluginData.html",
    "revision": "d66e9f22a9baf3bb258db6f3c0501651"
  },
  {
    "url": "console/Plugins.html",
    "revision": "698322686038e6d1c801303bd4048d52"
  },
  {
    "url": "console/QA.html",
    "revision": "bd28bbed1e742bba9c9ccbaed06723da"
  },
  {
    "url": "console/Run.html",
    "revision": "ed58516c18a9bfcc3836647d2b2d2d79"
  },
  {
    "url": "Contacts.html",
    "revision": "202f02e6e0a9e8774bdf646a78354f72"
  },
  {
    "url": "CoreAPI.html",
    "revision": "e384f302cbc32ac8e8d02213d00c9231"
  },
  {
    "url": "DebuggingNetwork.html",
    "revision": "afa108b690630ed43381d30808af4b26"
  },
  {
    "url": "EventList.html",
    "revision": "605bb90e7228d44488a859db02073a81"
  },
  {
    "url": "Events.html",
    "revision": "f872e49fc0701aee606cab1d4510ce3b"
  },
  {
    "url": "Evolution.html",
    "revision": "c1f3442e6f9cd4f4f45f16851ececcc9"
  },
  {
    "url": "index.html",
    "revision": "a83ae662093a583a471ceaba703b6644"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "d021aa5aaba4c87542772d97a18bfd0d"
  },
  {
    "url": "mcl/index.html",
    "revision": "fdeedb339709818ba534355575098a96"
  },
  {
    "url": "mcl/Plugin.html",
    "revision": "d6b9d9415c77bfc22a93555e574fcb13"
  },
  {
    "url": "mcl/Script.html",
    "revision": "717af87d6497ef241dacfdf967b48aca"
  },
  {
    "url": "Messages.html",
    "revision": "7eb1ea3ce3638cd0e653d0901e80eae9"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "8c42c3897c87f82db9fdeb6835d77933"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "31a2be8551945902dea6fe87a8b3c2ef"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "0157343c70f51608d5676ed5c527aae8"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "2a94ff8d1174e6e9bf77f7e86f69ac51"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "62473bf8b600018d9220ae56c1d4ae2f"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "894946b425c5eeb4282125dfc85fc565"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "388f82af755ce0b2130b7839e2599326"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "857d8d08fa8aaf73d148214f91aa1daa"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "503fba323ba2dc6af714ae7ca49864d9"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "6c057c1a9073284e672cf790923845c6"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "8d1e08f4b518a90fe020d46eefc0134f"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "2821cd582c6daef98fbeeda3cebd7f50"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "d89fa228e214d8b029bb1a1b565f89b2"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "34d3e48a902300ed44817fd75486f551"
  },
  {
    "url": "Preparations.html",
    "revision": "dc897d8ecc81bd436405bd48664a3109"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "f784437b52ba8cbb4a0fe42847e006ed"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "4b9f8c1bffb6727d12f88a06a3f5f1f1"
  },
  {
    "url": "UserManual.html",
    "revision": "8910320ce927375309f5e5f4e03cac9d"
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
