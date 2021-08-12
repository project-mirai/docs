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
    "revision": "91c23e4a0486905dde96ab1dae1211ff"
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
    "url": "assets/js/9.22e23935.js",
    "revision": "b2ce9d9a5fd93399650aee17c9b8d3e0"
  },
  {
    "url": "assets/js/app.03c23229.js",
    "revision": "b5b4292ba1263c2d0677ef8208d75ee6"
  },
  {
    "url": "Bots.html",
    "revision": "57995f805fe13cbe654aaf8d80cbea31"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "90b30a844199d14ee9a2d0e0af174603"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "f11cfe04ad6ee1e7e871d5b50bda004f"
  },
  {
    "url": "console/Appendix.html",
    "revision": "fb4bc01e2ac66fde55abe51a9d11b4dd"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "51b4f43bfc41519805bd2276dbcb8150"
  },
  {
    "url": "console/Commands.html",
    "revision": "9cb1f5f3b4f28d44145826c1230c32af"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "b845165a31295dd4c09c71b8e926d84a"
  },
  {
    "url": "console/Contributing.html",
    "revision": "005582d6e4277437b6d64b806627edc8"
  },
  {
    "url": "console/Extensions.html",
    "revision": "a253adbf56164e06500a6de3a3ed2867"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "cf21d23903f9d1984929d0d7c318b833"
  },
  {
    "url": "console/index.html",
    "revision": "1e34581ec226fff7f43e2b9e9cb2423f"
  },
  {
    "url": "console/Permissions.html",
    "revision": "5739f9a2ae0dd48c82f428c801038aee"
  },
  {
    "url": "console/PluginData.html",
    "revision": "6782cf95075f00b2b09a08c556ed3f41"
  },
  {
    "url": "console/Plugins.html",
    "revision": "f3eeeeed5ecde41f72afebaf0bd19eec"
  },
  {
    "url": "console/QA.html",
    "revision": "62bb4bfdc41410488d4087baf0a087eb"
  },
  {
    "url": "console/Run.html",
    "revision": "f2286a9f73b1fce874a2c4304d302246"
  },
  {
    "url": "Contacts.html",
    "revision": "cf0ef52664807662568c5e80ce8ae56b"
  },
  {
    "url": "CoreAPI.html",
    "revision": "868aa5ff1096d5a7eef19bc267e4e5d5"
  },
  {
    "url": "DebuggingNetwork.html",
    "revision": "9090ac7dd0c8876958757fc2a63008b1"
  },
  {
    "url": "EventList.html",
    "revision": "7c6bc25c2dd4d136429c1e058e755226"
  },
  {
    "url": "Events.html",
    "revision": "a5d9a76b10b375d9a711f2c56b915a7f"
  },
  {
    "url": "Evolution.html",
    "revision": "d6379ad3d296ef17120aa5fedf99cc0f"
  },
  {
    "url": "index.html",
    "revision": "d62910964363c24b170309b551f0eed9"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "17d19c6eed9765933db725d68f823cdc"
  },
  {
    "url": "mcl/index.html",
    "revision": "f57787a49987b9a3969246266a22059b"
  },
  {
    "url": "mcl/Plugin.html",
    "revision": "3463f479e3ae4d1d162a301e34cf7387"
  },
  {
    "url": "mcl/Script.html",
    "revision": "bcc6d1da11fb89d7b83ed923ab2f0c37"
  },
  {
    "url": "Messages.html",
    "revision": "79e85a6ad56e06184bbac652c19ad510"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "cde6db044d63285a6d4d818d0337bca1"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "a83ca6100b151f2177a721c51909169d"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "2aead6c27e78db256f178e9e810fd926"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "6a42e9a5b8f368e10980d0d9768418ba"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "4266f76106665b73d31c33fe5fd4b4fc"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "519ce0827ecb53edb28d425ab0ee2cbc"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "e06c56c1a275c8b8ef3128d99baf949b"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "414f69cb2e17ba4e1094d62729e1dbb4"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "2d4f5638d2f7b844b2521df98b2e6c22"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "d1276a371b63bd2adedf7c57915b39f1"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "751c8b3ebc9f22da0e710d6f51050e46"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "55874df5d1779a7675d4a60c3ef8d291"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "f4f8f96a8b15f709ac0fc59b90de8298"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "6d6506a7d43d98caabaf44a80618cfbf"
  },
  {
    "url": "Preparations.html",
    "revision": "f1bea419d90f2d3371653c8dafbdc635"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "0c38b8f698cf16f8fb1c9d09705e2a09"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "99d80852d5aeb26712271e47386e1213"
  },
  {
    "url": "UserManual.html",
    "revision": "4e0d4ddcd9ec625470cd4e24b37a4c32"
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
