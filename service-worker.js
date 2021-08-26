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
    "revision": "f588919c77cd11afad9a9b96f44b45f6"
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
    "url": "assets/js/11.6ae957df.js",
    "revision": "323b1cf5ebb6dc897e1648a2c9499b6b"
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
    "url": "assets/js/app.2b41f93b.js",
    "revision": "e22c97127c60d4390e1bcb05693ea3e5"
  },
  {
    "url": "Bots.html",
    "revision": "4ae885b289782ab560d09817cc416efd"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "c6ea5f0f8e33c66fb4164c9deb580d0f"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "da3c46822dc8cd29d936a7e16a2965c6"
  },
  {
    "url": "console/Appendix.html",
    "revision": "66ccf501803e39671661ae7b8aa4cf4f"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "e0500c9c464e5c3de3a2016d5ebddaf3"
  },
  {
    "url": "console/Commands.html",
    "revision": "e9d4399935f250b525d5aced6946c9b5"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "f53576395cea133d5b28fac1b26091cd"
  },
  {
    "url": "console/Contributing.html",
    "revision": "3b787027745fcc38fe881a5496b08585"
  },
  {
    "url": "console/Extensions.html",
    "revision": "ed48c5e3f586fc4c12b22d99e3f4711c"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "17e0df794bb7b9a70387b7db2087690f"
  },
  {
    "url": "console/index.html",
    "revision": "30665b6dd263ac26e5c54bf298701859"
  },
  {
    "url": "console/Permissions.html",
    "revision": "a5a95d45d9a1fc02b6549ea43d596330"
  },
  {
    "url": "console/PluginData.html",
    "revision": "101e8cd6bd5ce355f60ae9003c073910"
  },
  {
    "url": "console/Plugins.html",
    "revision": "cb3f34eb91b0f31625139a17f4eb2745"
  },
  {
    "url": "console/QA.html",
    "revision": "e9382bfe8afa09dd65e1b306e7124204"
  },
  {
    "url": "console/Run.html",
    "revision": "a25f8941d8281cbcc2a8e6ee6d2bdd34"
  },
  {
    "url": "Contacts.html",
    "revision": "1c8c6127e388d6c81c3ac688f9c34c37"
  },
  {
    "url": "CoreAPI.html",
    "revision": "bcdaeef912c499166dc17c3631e090c1"
  },
  {
    "url": "DebuggingNetwork.html",
    "revision": "bd75c897b192f6dd851beaff44cbace8"
  },
  {
    "url": "EventList.html",
    "revision": "79f3856934b79566687421d2219a743f"
  },
  {
    "url": "Events.html",
    "revision": "3b5788041c3bd47a9605b058e7ebd861"
  },
  {
    "url": "Evolution.html",
    "revision": "2bfbd194bee3c7f2e6c1a591bf0efe1f"
  },
  {
    "url": "index.html",
    "revision": "e8a36116a7b8cbbd7b82776fcd10405d"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "d10660bf3752306e77e44c15b1f4cbc5"
  },
  {
    "url": "mcl/index.html",
    "revision": "1508334872d43f38841f274d8de7d6d9"
  },
  {
    "url": "mcl/Plugin.html",
    "revision": "66910d528ffc58cee15b3cd54ae0af43"
  },
  {
    "url": "mcl/Script.html",
    "revision": "7d5d6a17d6f633701ddc83642da07196"
  },
  {
    "url": "Messages.html",
    "revision": "525f1cee539020a77db514f64691bf6a"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "eefc8ed435e0ac51e76d69ca55607038"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "b129783ae3d0541de4996b70bc4ea3b9"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "376bf9646572cbf79cf148997ed26c96"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "838b38b0646cd2a246a413601fd39f43"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "a4a1cb1c174e2cde79a7d1439b1214fd"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "47df306248f5d4ab18de29622b44ecff"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "df6aa90d438a03583f2403a6b77eba33"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "f36e7a648ce4375ace27f9f6c8941461"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "31f7596bec4343b9a9c589bed768f8b1"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "a494a95fc947b259ad1c4032e1dbcc84"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "43f601aa362cf21e5087af12ea8a770b"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "47c69bcb7ce65096913ee6f7d39e0d09"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "6a26e3250f5693fed9e412658d706046"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "94fb76780ecbcea564c242cb63c893a8"
  },
  {
    "url": "Preparations.html",
    "revision": "54b2b19dd442cb4647b01ef2e4db61e1"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "a6b6328442fa73e47ee0f77d84d1c3bb"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "6ce9cffc405b44a0de3fd9ae28e40ab4"
  },
  {
    "url": "UserManual.html",
    "revision": "4058bde323931b6219302b6e4ab632fb"
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
