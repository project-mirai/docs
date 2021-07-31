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
    "revision": "44e3750a3936ae7771932d4748fb07a8"
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
    "url": "assets/js/app.26d2204c.js",
    "revision": "5b2e7f1aed47b0d39d89aabc14c8f335"
  },
  {
    "url": "Bots.html",
    "revision": "53e421785cbea40f2eab32f1bfcb3886"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "b578e6eb8d527abea2ec19e70eaac877"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "f0132a3f0c613e735b0f733c208d1b3f"
  },
  {
    "url": "console/Appendix.html",
    "revision": "7e7eb3dc904bb306ee42ece7fe2c6e21"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "dec52a97a16a57324b79362e661d0f96"
  },
  {
    "url": "console/Commands.html",
    "revision": "9f0bdd9ea5cc6651079703eb9cfe324b"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "a98352305751543f2c588f2aee055190"
  },
  {
    "url": "console/Contributing.html",
    "revision": "2f4cc3bafec1292d3ba318f85020fb7b"
  },
  {
    "url": "console/Extensions.html",
    "revision": "c22e5cd4b1dabb0d3528c359faa0d805"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "ceb8b69748a6518c3ebb0f0c8d6fbb4f"
  },
  {
    "url": "console/index.html",
    "revision": "db230d9051fcdc445c1164151a9dabe3"
  },
  {
    "url": "console/Permissions.html",
    "revision": "7f7799c9629e4e45e3d8313a080a544b"
  },
  {
    "url": "console/PluginData.html",
    "revision": "8122f32b37d0689bba74a92838785429"
  },
  {
    "url": "console/Plugins.html",
    "revision": "c8319bccb2364e94b06187d6332460db"
  },
  {
    "url": "console/QA.html",
    "revision": "f650e6e41a0ff7455ce1221c947ed6c6"
  },
  {
    "url": "console/Run.html",
    "revision": "f6288a5969150a116c107c7920008d15"
  },
  {
    "url": "Contacts.html",
    "revision": "02118e584981fc78b3a82f9f70b28bba"
  },
  {
    "url": "CoreAPI.html",
    "revision": "d2323b0cbf4e0ddf36a36611f048fe58"
  },
  {
    "url": "DebuggingNetwork.html",
    "revision": "1041b52701102fb31c0ac1aa9addd57b"
  },
  {
    "url": "EventList.html",
    "revision": "50ccd7fce8532cc8f2a1257bf0903db6"
  },
  {
    "url": "Events.html",
    "revision": "f46bd72c881f44e9a75f9d6d996b9aa3"
  },
  {
    "url": "Evolution.html",
    "revision": "9f14ad79added8b82ca13f323b31d249"
  },
  {
    "url": "index.html",
    "revision": "8e5d21b5e5ee555f0784c31e7a745172"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "60cb202f8d386cbb450a0f3e89d4e0d1"
  },
  {
    "url": "mcl/index.html",
    "revision": "da1a434d95f4c93999ab15ae3e1648dd"
  },
  {
    "url": "mcl/Plugin.html",
    "revision": "872cd6922a108e9045c2d21d8e8e175f"
  },
  {
    "url": "mcl/Script.html",
    "revision": "46137d005c2075535d78be278a876b46"
  },
  {
    "url": "Messages.html",
    "revision": "07f770515ab48aa8783b41d4a8a2f39d"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "4c94a3730cc2a47ae85c57d7d78d1ea6"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "942ddadd77118f9556b96846b025c548"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "d37ac677856e376764618b7e655298ef"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "669e3b90511ac7cea32d51d8a4249af5"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "fc9bb4c5dee582618cc9349f48be77e4"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "ab0bc5e72b885b700ac49a56628f585e"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "093d0af2b5e9a7baad365795f1bd642b"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "4308320673ba39e24b3d8e734d49af4c"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "02a67fe19cc18cb7813767a60dffbce6"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "705521562e0ed6da63ebf529ff8a4718"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "668a710d80a891ec0b7bf377874f0e57"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "9cb49625e7baabf4ba31cdfdb1c82d0c"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "203329d909eda73e323e88c02a61fbb1"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "92e7866886148c981b31db6401be6f58"
  },
  {
    "url": "Preparations.html",
    "revision": "1e28debd96be3f62dc4deff34574b4d9"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "bb51ca23954b9feadf2b69cb9ed4d640"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "f2ce9d827cc162a96cfc8c23019425f8"
  },
  {
    "url": "UserManual.html",
    "revision": "7190272c70586c58f61d9abc6efa2f61"
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
