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
    "revision": "fdddf3763e1f3e55d77d51eff1a6c5a5"
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
    "url": "assets/js/46.f25c0ab7.js",
    "revision": "b09611f2b0429d961d5a8dfdc43bc844"
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
    "url": "assets/js/app.c9275c0f.js",
    "revision": "a805cb905cae845c816cb03c6748efa1"
  },
  {
    "url": "Bots.html",
    "revision": "d2bdf30b76b6212899b0ea63a4b60775"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "e820f73386f6a7a9272f3d20afeaa042"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "2cacc8682d2b0f9d3859788bf60069cc"
  },
  {
    "url": "console/Appendix.html",
    "revision": "3b9b09452aa35790e8510116fd8ffada"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "a97076663016bffb58a08ec8131e3a27"
  },
  {
    "url": "console/Commands.html",
    "revision": "c4eeed8b14c0ab09cff9e7cdf9e3bb4e"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "a0451b34e5aee8b5ebb4d99eb8e4cf9f"
  },
  {
    "url": "console/Contributing.html",
    "revision": "0017d95c8ce1ab2c700083efbb06c7d7"
  },
  {
    "url": "console/Extensions.html",
    "revision": "23798e5d87320aab88ae43471ffdc90b"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "f750aa0dd64dbf0cfa36c64273255d1e"
  },
  {
    "url": "console/index.html",
    "revision": "7312dd5752f0d0f0bc7e500476a82f51"
  },
  {
    "url": "console/Permissions.html",
    "revision": "fb2d366f808ddfb9a5ac7643c299b628"
  },
  {
    "url": "console/PluginData.html",
    "revision": "35dd7866fa05678702653995ff37bbbc"
  },
  {
    "url": "console/Plugins.html",
    "revision": "350b8e48cb04363d34262a4898745b30"
  },
  {
    "url": "console/QA.html",
    "revision": "329809174a8f569daf6bc75c216757dc"
  },
  {
    "url": "console/Run.html",
    "revision": "26885db23f159fc85ed3b01359a746ec"
  },
  {
    "url": "Contacts.html",
    "revision": "942c4b245aeab35e0b6e1793c9e803c3"
  },
  {
    "url": "CoreAPI.html",
    "revision": "b0993092e20711626927187e52e987ab"
  },
  {
    "url": "DebuggingNetwork.html",
    "revision": "de462a086c866e2744489af8d08c3e12"
  },
  {
    "url": "EventList.html",
    "revision": "d95861b9336444f5f143011fec93c8c0"
  },
  {
    "url": "Events.html",
    "revision": "1ed8fb3ff8f1044f89a43e3b62a43f57"
  },
  {
    "url": "Evolution.html",
    "revision": "199d574cc19e4c4515cfcdad3bbd3435"
  },
  {
    "url": "index.html",
    "revision": "e769a06abb97232c554f6bc190f71f06"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "23489a6f9671b0db265c422193eb4bd5"
  },
  {
    "url": "mcl/index.html",
    "revision": "a55beaecc02036f606902de2945281ff"
  },
  {
    "url": "mcl/Plugin.html",
    "revision": "47dcf75395d2048952f023432f89e790"
  },
  {
    "url": "mcl/Script.html",
    "revision": "2385c74c23352a1ff9fa3c26c04dd74d"
  },
  {
    "url": "Messages.html",
    "revision": "ec01459fffd653610dd6254565f10232"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "9d9331506adfc848182592b00b560274"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "4d0e7c223f8fa65e78b2b77a077c2029"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "d545b190f97bed37f03af059db62a6b6"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "34959bf19a6eba45abbc584a19e7adcf"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "2ea1dfaada43d4027d4068708e5d6903"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "aef26fc52558ebee5816f08e69f2ac48"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "6da1afaf92019660d250de55d615fb45"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "e958b8274156d6583bfee2c23dd8cb54"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "afaa558658783b483a636bc200a6db25"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "ae2653c793e8c036040153a7dab57180"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "85b818bc3374221bb70a84e3254ddfb2"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "6fda9426bb9e20765d85936b153df0d0"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "ce4e4c80914cda882eac53500e67436e"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "31578af4e23bde655bd9596f45df8360"
  },
  {
    "url": "Preparations.html",
    "revision": "56aeaa48399276193825fbaba09bbbbb"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "88dbfaccd554c74cefdf4f29ba33a499"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "b2045b02a961a3fc686be39c87bf5226"
  },
  {
    "url": "UserManual.html",
    "revision": "6531bc83cb392d066287eb8cfef69d6d"
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
