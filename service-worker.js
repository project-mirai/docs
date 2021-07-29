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
    "revision": "2301bb9eba62e3de1fd5d85b32475913"
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
    "url": "assets/js/46.cf4db710.js",
    "revision": "0f9b97271f4c80d05386082bd0a22c30"
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
    "url": "assets/js/app.ff256f97.js",
    "revision": "2e73e9a79e3ef5fee864694de345913b"
  },
  {
    "url": "Bots.html",
    "revision": "5c9b3f98e8ca90831b884327caa7b7fe"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "0aa8a4fd8452ce556e1616ee9452ed70"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "0276ada3940ac09979eaf221535b2fd1"
  },
  {
    "url": "console/Appendix.html",
    "revision": "f2cd2ed2efc7c1e1503d483fcb42bcde"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "cd4a84350ba025c0ac016eda081f4146"
  },
  {
    "url": "console/Commands.html",
    "revision": "f20153b4fc7a82e3b6a436675558cd6c"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "5d062ed2903527691bd416e10e126f34"
  },
  {
    "url": "console/Contributing.html",
    "revision": "af38ccba377cc2fbfb904ac091da2f87"
  },
  {
    "url": "console/Extensions.html",
    "revision": "82acec6386d6956fcd13df1b597d976d"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "f87046b106dd7b57b7b635c66ac48fef"
  },
  {
    "url": "console/index.html",
    "revision": "c65c7649ebedd593759182f7d94f38be"
  },
  {
    "url": "console/Permissions.html",
    "revision": "538d97ab14649cdbb55d87bf051a8c12"
  },
  {
    "url": "console/PluginData.html",
    "revision": "09a664482dfa1f20ea7727d57b488b64"
  },
  {
    "url": "console/Plugins.html",
    "revision": "0984ee6e7474c5fbca2929c6d17c0355"
  },
  {
    "url": "console/QA.html",
    "revision": "345f2eaa9f89f6149a40e7f5fd45dcd5"
  },
  {
    "url": "console/Run.html",
    "revision": "00f528b6a3b50ca38975b9bc2d6dba8a"
  },
  {
    "url": "Contacts.html",
    "revision": "8c2e5077a289043ef70e81b3b4841641"
  },
  {
    "url": "CoreAPI.html",
    "revision": "8ff5399da2eaa8fcbfe7edad72290064"
  },
  {
    "url": "DebuggingNetwork.html",
    "revision": "2d00bd953c07fd5bda258cad27b633b9"
  },
  {
    "url": "EventList.html",
    "revision": "228f76f90f1d386cb54f3ee3534849bf"
  },
  {
    "url": "Events.html",
    "revision": "dcdc47f0624a076b1adc4f0319eb0255"
  },
  {
    "url": "Evolution.html",
    "revision": "41e4ee95b019405e1b3303502884dc70"
  },
  {
    "url": "index.html",
    "revision": "f315f411a61c294e90486c03fadc98f0"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "beae61e60f63047817a432e40a2ab3dc"
  },
  {
    "url": "mcl/index.html",
    "revision": "aaa9737cf7e8acbe88594e62728db25e"
  },
  {
    "url": "mcl/Plugin.html",
    "revision": "dc6469e25aa0d82b5bdd541376bf6996"
  },
  {
    "url": "mcl/Script.html",
    "revision": "c84ee901b6bee567cf63d40628b2782c"
  },
  {
    "url": "Messages.html",
    "revision": "9a252168be1f952fb153f18cf8dee269"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "90e7ec768f85b5468fb33b185591ce48"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "6f843c8704c10361987f52a16344d160"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "019f5b96f7ff9d94de6560ff3ad8260b"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "7ebe1fdfda7ddd0fdf87dc1496351c36"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "d581f56ae62525fdce18e83078392ae3"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "7b512034210bd4c5640cb269002d99ab"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "d8c843226b1ec8590c216aab09724c2a"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "0da47b751aae2a2b81e6cce58ef067f0"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "d4ea59db3176ca74820bc6b417ab0491"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "15dc8e507284e5b68389df84b335bac9"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "4662b0813089e0cd526895a6191be5ce"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "b6b04e16ca408cac73d72e050660deef"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "483a7803d72e5f98d9167950721a13ec"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "68459344f1b6798c0e8c58de00c7e28a"
  },
  {
    "url": "Preparations.html",
    "revision": "66064c809a799a6d728897a45dd76dfc"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "4ffdf5cb594d375a0485ebafa8351635"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "6b8fefd198a4e8e5de60bd270f9a1546"
  },
  {
    "url": "UserManual.html",
    "revision": "2a61edd679fa4a42e9a778df51e5b25f"
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
