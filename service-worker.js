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
    "revision": "8aa6eb3fc2dbf8733479d5a91b0600d6"
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
    "url": "assets/js/10.502fe409.js",
    "revision": "9d60af30576e6404ab016bf4d2e877ab"
  },
  {
    "url": "assets/js/11.08f98bca.js",
    "revision": "ee58b1f249c20cff27dc989faa8b0ee1"
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
    "url": "assets/js/14.15c7455a.js",
    "revision": "4f8608caeeb4f18d70003620b76cefa7"
  },
  {
    "url": "assets/js/15.4ed1daf1.js",
    "revision": "782d438930fc278f8771a5dae385788d"
  },
  {
    "url": "assets/js/16.a1287144.js",
    "revision": "c762f347e9c427f01a88e69ca0d672a0"
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
    "url": "assets/js/22.07eb79b5.js",
    "revision": "a0c3419c0e104164d6c16c0be2ff21db"
  },
  {
    "url": "assets/js/23.d3c1dcef.js",
    "revision": "8e549d621df4f5d12331dbf549bc71b0"
  },
  {
    "url": "assets/js/24.5867f17d.js",
    "revision": "7f5769fbd89fb6b1ba6346c323859eb7"
  },
  {
    "url": "assets/js/25.4756c9b4.js",
    "revision": "7fbcde9bf1de6a835223999ea6a3c753"
  },
  {
    "url": "assets/js/26.8e21fbae.js",
    "revision": "8a4f07b31b60711a07a6c6cc665b4ed4"
  },
  {
    "url": "assets/js/27.b7ee4be8.js",
    "revision": "f5d7f30f5a50e26ed2dadd5d90215bfb"
  },
  {
    "url": "assets/js/28.882e03c5.js",
    "revision": "3f48b335033fbd0631e00253375499aa"
  },
  {
    "url": "assets/js/29.c40b407d.js",
    "revision": "a2dfbb3630b29a9ca3c0e7cbffff2b3a"
  },
  {
    "url": "assets/js/3.e9ff196d.js",
    "revision": "d780d0f889fd552a6859d9bee5bf69af"
  },
  {
    "url": "assets/js/30.dbcac99a.js",
    "revision": "d5592cc17854c55da954091577187004"
  },
  {
    "url": "assets/js/31.39144206.js",
    "revision": "6c5fade49aedb17972ca62de9f0530ce"
  },
  {
    "url": "assets/js/32.00923ebf.js",
    "revision": "61de277bd39e68ee1757c1c426096f21"
  },
  {
    "url": "assets/js/33.c5243f59.js",
    "revision": "3121645b9de72752e13f77720689ce27"
  },
  {
    "url": "assets/js/34.bade98ed.js",
    "revision": "f58f8c0fcb4bdd080193e7237dff1168"
  },
  {
    "url": "assets/js/35.dca82da9.js",
    "revision": "356a56021abc0f8b5faee2924c51b237"
  },
  {
    "url": "assets/js/36.9ffe0c98.js",
    "revision": "3b33432a6a63bb8eab304dd5d10d7609"
  },
  {
    "url": "assets/js/37.4f7c89bf.js",
    "revision": "ddf9020602081f30417c6607e7ce676d"
  },
  {
    "url": "assets/js/38.d2d0bb6b.js",
    "revision": "a339ac990ee8708913662b146825ea85"
  },
  {
    "url": "assets/js/39.08bd5bf0.js",
    "revision": "4a28a82fab1768cdab2fdba39a3e5bbf"
  },
  {
    "url": "assets/js/4.dc44f699.js",
    "revision": "d0731ad386c1da5c9fca8a306f6e94a0"
  },
  {
    "url": "assets/js/40.3b40f3b1.js",
    "revision": "9ec07767bb5c42b9f337940ab01e75f9"
  },
  {
    "url": "assets/js/41.b9014e80.js",
    "revision": "eca212d08ceebeeec7744cecd87958d0"
  },
  {
    "url": "assets/js/42.3ae607f7.js",
    "revision": "ca7495e9c8a0f61cb8ec154de77c3a30"
  },
  {
    "url": "assets/js/43.ab3cf7cf.js",
    "revision": "989ff0691aaa741c2396ec104576b34d"
  },
  {
    "url": "assets/js/44.8cb70bb2.js",
    "revision": "97a13d2199de9f51de8aabd86ff9810d"
  },
  {
    "url": "assets/js/45.4ce201eb.js",
    "revision": "73e6138031d8532abb3e8ddefb9177a3"
  },
  {
    "url": "assets/js/46.fcf7aa27.js",
    "revision": "ef26cc7b45fc308c0b5203f40314e5bd"
  },
  {
    "url": "assets/js/47.6c8fd275.js",
    "revision": "f70cc53ecabf9001a05ae19a375a3085"
  },
  {
    "url": "assets/js/48.003ca446.js",
    "revision": "517ded98604d6ba341e25f2211800856"
  },
  {
    "url": "assets/js/49.2274f977.js",
    "revision": "8c49255cfa17da0a0549215e158cb35e"
  },
  {
    "url": "assets/js/5.8a2fb531.js",
    "revision": "48341358e3b07fd5e8adcc046134c2df"
  },
  {
    "url": "assets/js/50.4b9bc227.js",
    "revision": "670f6a13a6f6f2c01af6896e4b1e944a"
  },
  {
    "url": "assets/js/51.b192d40b.js",
    "revision": "972168bc84d278a64e66676744988f63"
  },
  {
    "url": "assets/js/52.4b1ae782.js",
    "revision": "f64c1de29d02d49c81e60fdddde65e04"
  },
  {
    "url": "assets/js/53.0c70a478.js",
    "revision": "743d9bdb031bdc3968c6a2c43626e19c"
  },
  {
    "url": "assets/js/6.61af2989.js",
    "revision": "b0f5af2f222f0cc85b9c6f15020a9fc9"
  },
  {
    "url": "assets/js/7.5e7e149c.js",
    "revision": "795781f61252d562ccfb64e730605aa3"
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
    "url": "assets/js/app.1c01dd69.js",
    "revision": "00f1a942a772f2db51769851c88b27ab"
  },
  {
    "url": "Bots.html",
    "revision": "3b5e5f3a0cba21890c0f1cc2f36b1745"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "7a0c11b6da127680ea1baf95ad204684"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "72a3d4d0e4888d8bf08ca53260fa9a9d"
  },
  {
    "url": "console/Appendix.html",
    "revision": "d598b56e72eaa52f7321aa35c15643d2"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "1c2a469a4c925dc0eff678560e576d5e"
  },
  {
    "url": "console/Commands.html",
    "revision": "087a0450011f967d26ff94cc8210f382"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "0b2d3e51a801de2079576fb5fb3b5d8c"
  },
  {
    "url": "console/Contributing.html",
    "revision": "1b11d05cfaeb8f85bafe1334633cd765"
  },
  {
    "url": "console/Extensions.html",
    "revision": "76e86b73ccf9ff7b9176ce3ba1d909c1"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "31f4c7a3e7e3c812f052e97f1ba6bfe7"
  },
  {
    "url": "console/index.html",
    "revision": "da56ca71570da46d4c1ac99faf90da15"
  },
  {
    "url": "console/Permissions.html",
    "revision": "8ce24de7a73b28f932927b28a44db21f"
  },
  {
    "url": "console/PluginData.html",
    "revision": "87c486323e0bf13a987240a010fac33f"
  },
  {
    "url": "console/Plugins.html",
    "revision": "0b274e5707a9a97386c5adec69abc167"
  },
  {
    "url": "console/QA.html",
    "revision": "17e91a850292ee0cb0530e32623a0451"
  },
  {
    "url": "console/Run.html",
    "revision": "b5bf1a3631e5041aaee2ca0334837e3d"
  },
  {
    "url": "Contacts.html",
    "revision": "69e0b2a36a77e6c4b140e8541556b5ed"
  },
  {
    "url": "CoreAPI.html",
    "revision": "d99ba95125c9fce1eab7b2ae7f741562"
  },
  {
    "url": "DebuggingNetwork.html",
    "revision": "8e38376613040990e28f2e21d3abf900"
  },
  {
    "url": "EventList.html",
    "revision": "317b69d4cf5e45ad29859b37edbaed7c"
  },
  {
    "url": "Events.html",
    "revision": "ec8a48c06ace352b5bf23e4d13b3094d"
  },
  {
    "url": "Evolution.html",
    "revision": "7a81e29b609fbff6e2008be27e3af8d8"
  },
  {
    "url": "index.html",
    "revision": "a5c47a665329f13c755799bfc75ad12d"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "503dd72d38b03bbe52a6069d13ce28df"
  },
  {
    "url": "mcl/index.html",
    "revision": "0d6aedf88eabdf70767fd0587b366f40"
  },
  {
    "url": "mcl/Plugin.html",
    "revision": "4db866a605b52c2474b9ca6fdf87fa30"
  },
  {
    "url": "mcl/Script.html",
    "revision": "ca6f00bedc2730c4db59b6d5e0f6fdb3"
  },
  {
    "url": "Messages.html",
    "revision": "dcc7ce0db196f6d72cb284577cde7e53"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "df01a193f97c7cc9e0fc5d0419fa9099"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "68a86dd3a430fd40f71a2831ac5b40c6"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "6e751ebd04238bae4ec481cf3cbf8dff"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "ee0a13a58bc2fb4372847b404e211188"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "39811a3368a60f439aaaf208964a125f"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "f65cbd8bddead801f4a3122656b0e07f"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "568998c20343a83203c892a59f6bc6fe"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "063f1c1c83b5f0cbe2328692a98018af"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "5b5eb27f32afe7a50b637dc3172a6edc"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "133efa79b62f564a70ac628e03c25c7e"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "0fecaa05eb95075bf666b0e171504a1e"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "e0f82212268224cc3c693ecb496fa6bd"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "13e573fc063f6a80e0b4c4bcf0db3c37"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "cf4991a7025366b75abbf7e4cf5aed01"
  },
  {
    "url": "Preparations.html",
    "revision": "495bc8be20720ff2f27d30b0a07365e1"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "50d88dc7d969cbe96bc1b25b7ef9dcd2"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "6ed5507a2e6eb262e16180e145c1114b"
  },
  {
    "url": "UserManual.html",
    "revision": "54b67d882fadf182c7acae2da881b53b"
  },
  {
    "url": "UsingSnapshots.html",
    "revision": "284d0958626239115746539c7cd27c10"
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
