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
    "revision": "7e5ce5955e8f3659b9f3d011c3d7cba7"
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
    "url": "assets/js/11.46b0ad45.js",
    "revision": "77ff097a664c319379c4ca639add485e"
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
    "url": "assets/js/22.2e93621a.js",
    "revision": "2b0092f6797dff5dcb92df5b8eb16928"
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
    "url": "assets/js/app.10df482a.js",
    "revision": "362af01341f5d1a92da01c9525e540b5"
  },
  {
    "url": "Bots.html",
    "revision": "ab0f677342cd00deee592158f1c09a8d"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "c4e702735c08d613e8b9bf0eec69ef59"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "238f67d909cc1b5242b2892079683439"
  },
  {
    "url": "console/Appendix.html",
    "revision": "acacf19f71cfd086ae52294739d67288"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "1c1f87925f23bd809f9b1a156325b01e"
  },
  {
    "url": "console/Commands.html",
    "revision": "c4f52246fba1bc59f87d25737abdb9c8"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "19127433088f507adfe5f238191a122a"
  },
  {
    "url": "console/Contributing.html",
    "revision": "100f8699994127d35c7b30c33524a813"
  },
  {
    "url": "console/Extensions.html",
    "revision": "aa73e7f25e7fa16d2bf3452728c58f57"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "499c787b75a89ea31973a3b38ca698ba"
  },
  {
    "url": "console/index.html",
    "revision": "17e67b4ce79196e0a777b9107802f84a"
  },
  {
    "url": "console/Permissions.html",
    "revision": "2b426a003eb3105d753b5b58d7e24c66"
  },
  {
    "url": "console/PluginData.html",
    "revision": "64bd8a26c235a6695d1acad04b000f7c"
  },
  {
    "url": "console/Plugins.html",
    "revision": "aeddb7f1d668372db213205a0f878355"
  },
  {
    "url": "console/QA.html",
    "revision": "2dc9d286471cb2cb962a2526a4c62705"
  },
  {
    "url": "console/Run.html",
    "revision": "f97bcbf20597aacdac46d9f4e4ee291e"
  },
  {
    "url": "Contacts.html",
    "revision": "0129a0ef9a414f9ac5f38a9a3a753364"
  },
  {
    "url": "CoreAPI.html",
    "revision": "837dfce29146e0e8e9355efc6c44a08e"
  },
  {
    "url": "DebuggingNetwork.html",
    "revision": "1cf361656dd8772965366d66e9cfe071"
  },
  {
    "url": "EventList.html",
    "revision": "82d5f261db11c49000e5121e69ade00d"
  },
  {
    "url": "Events.html",
    "revision": "8f27e1b6b6728527a0ee8f527d0133a0"
  },
  {
    "url": "Evolution.html",
    "revision": "ed94e402ed8bc0257f6374e9dd0210ad"
  },
  {
    "url": "index.html",
    "revision": "c991b1cfd909c1b428fbf2a5d6663457"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "a6ea5d863e847564227de8113fca56e0"
  },
  {
    "url": "mcl/index.html",
    "revision": "89645d3eac58f25ce4ecfffffda438ee"
  },
  {
    "url": "mcl/Plugin.html",
    "revision": "931b85b036754934da6b16a94608ff35"
  },
  {
    "url": "mcl/Script.html",
    "revision": "6288fb94ac35d59d8921fe2b5adb992c"
  },
  {
    "url": "Messages.html",
    "revision": "c6b7deefd66445c7ade3a92f742de290"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "967969aa70208529fb3b466b02788810"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "c0b7205def33c997c669ce2a05b78882"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "8f091b576560146d41b8ab29f391085e"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "b2eb100c817198565a4635b8fdc4289c"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "32b5814f361601dfc79c81aee0eaca56"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "d6b99df77f80efd7b7bb0f76f2d14bc4"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "79a0fc58b9baba883bb3c8a17e463e70"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "43bc78419ed12bc638a8b2e23754db24"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "e153b8cbd83776382a0d74238de05d7f"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "4b416acc9eaaa57d7ed5b0acf4eca64d"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "45aea8110b35ea51441e73da877a6e59"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "9244b07be7d5bf9385fba53c4b3e33de"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "12864cda094c995239bc3128215d63c8"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "72d77df21a096e0b2c0ee1f32e2f8b7f"
  },
  {
    "url": "Preparations.html",
    "revision": "12a0c5ced2e910bfb38aadd4b8af2582"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "e3ca971b5ff6fdddee2665ad9ce06279"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "84541b58eba8ea99fca171288e16b6e8"
  },
  {
    "url": "UserManual.html",
    "revision": "ac7ed17cb87fda245305b8ab3af9c898"
  },
  {
    "url": "UsingSnapshots.html",
    "revision": "391b17a9713767e44e2b5dad89c2cc68"
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
