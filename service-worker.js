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
    "revision": "3e45680cc0316bc5d5f62deeec39ca59"
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
    "url": "assets/js/45.7f1d75a0.js",
    "revision": "1b3ebd922c4a738938fc4cf1bd694891"
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
    "url": "assets/js/app.44a69b5b.js",
    "revision": "32bc45035e7707f298c4b111e4fcded0"
  },
  {
    "url": "Bots.html",
    "revision": "d1aba30cb7ec4bb27554f02abd60632a"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "b51f26256b9d3551513ee0878fba9d5c"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "099bd1d38e4a4152e726ba5801f4b423"
  },
  {
    "url": "console/Appendix.html",
    "revision": "e71a5628e96c3461e643c668ec6ea213"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "d63af8a9c2649d482fc3a9e99b95deae"
  },
  {
    "url": "console/Commands.html",
    "revision": "eedfcc77b95c055bfad3212f6dc2d6e1"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "580a140752a1c293464470a8d52cbc17"
  },
  {
    "url": "console/Contributing.html",
    "revision": "fa888f4a4ce68a8e03eb25b0c3bd8d89"
  },
  {
    "url": "console/Extensions.html",
    "revision": "cac113fff7d7ecb3aca31ecf345b4305"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "d82cf1c2f6cfd4d996fe123cbdcefd75"
  },
  {
    "url": "console/index.html",
    "revision": "54aa3dc88813c816b7dcb60c12e0f889"
  },
  {
    "url": "console/Permissions.html",
    "revision": "b7d8be7c1c8b4fc8813c463b98e7d2ee"
  },
  {
    "url": "console/PluginData.html",
    "revision": "b2d6a3f0beda1ea74f914da153f0d582"
  },
  {
    "url": "console/Plugins.html",
    "revision": "c4c89ec025a02defa9cf872fc67e98a0"
  },
  {
    "url": "console/QA.html",
    "revision": "3445e59857f54dc01c606f590562c527"
  },
  {
    "url": "console/Run.html",
    "revision": "a8c02d735c5009ed87c3648a540a6e1f"
  },
  {
    "url": "Contacts.html",
    "revision": "276030ef3296c24c27e2bb9c817407e4"
  },
  {
    "url": "CoreAPI.html",
    "revision": "bac7d2793d0fce731616b06b6d5c334a"
  },
  {
    "url": "DebuggingNetwork.html",
    "revision": "7c930e980d19f951ddc862d0efc9f596"
  },
  {
    "url": "EventList.html",
    "revision": "68f705661692e05d74071857093f4b58"
  },
  {
    "url": "Events.html",
    "revision": "5402acfc60055b5e89b1d01f0c30f3f6"
  },
  {
    "url": "Evolution.html",
    "revision": "8e5ebf56f53919cae32cc52a9f16d293"
  },
  {
    "url": "index.html",
    "revision": "8351158c6434ba89e58dfe1b488a3c1f"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "3cdad60ce5a0280b857a4107e3a69cc6"
  },
  {
    "url": "mcl/index.html",
    "revision": "00aa404447d09d2ebdb49cef666c43f5"
  },
  {
    "url": "mcl/Plugin.html",
    "revision": "0e414913caa65de05511211ad0199ae8"
  },
  {
    "url": "mcl/Script.html",
    "revision": "9bf483d6a8facc5aaa9e13ed4cf01bdf"
  },
  {
    "url": "Messages.html",
    "revision": "010bed4cdb3c3929dc00d066495c0584"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "503f81cd05ee0217dd74f9d7cd2e5621"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "a6382883394e85b58740fdfaf38e4d2c"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "bdf8dfa832a1e3c1b658f081a29fbaa4"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "df731431c88e976207d1ef3afb12bf62"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "e4217b9bdaba093340af10796f7eae98"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "70a282547e651cf4b5e317e4f7eaf55f"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "b9d230fe12f885db7ad5d8b9a4904469"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "22d2de62227ed52b2a1ed4af5b2941c4"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "586d9e955e5b337fe65f3a18271e6a5a"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "9b3979e1f9dea16aceacbed8c981e22d"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "959503344c4ae51869e032f0cb80bf47"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "4f25ed4e4455472abdd684241a9d7cc3"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "a83acf244fca039b89beb380d8794376"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "060e12b68cbda5259a1d2743ebd49e83"
  },
  {
    "url": "Preparations.html",
    "revision": "f370e936040679d71197bba145902288"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "246ec3bd973290af09b7256c388750ac"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "b6fd661479d506dde9acddb070a24c15"
  },
  {
    "url": "UserManual.html",
    "revision": "17b0d1fcf2c49f3ba1861c8612eabce1"
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
