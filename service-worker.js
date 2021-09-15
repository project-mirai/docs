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
    "revision": "8f80fc4f5fd69cfef39b5bf528f33c57"
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
    "url": "assets/js/11.7ff51bff.js",
    "revision": "dc669c3931a52a7cde3a3db785d8373f"
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
    "url": "assets/js/22.3305f9f6.js",
    "revision": "cb564f85c42b0384db9a16ec506ff2c6"
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
    "url": "assets/js/51.871cd0c7.js",
    "revision": "0861fde03a91f4441738405e4b042cf1"
  },
  {
    "url": "assets/js/52.cf872ed0.js",
    "revision": "62fa76cc7d0aced5a1ba2b6d83cd5e6c"
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
    "url": "assets/js/app.d2a40305.js",
    "revision": "f2a9d55052a1b4d2039ea46cee8b1b69"
  },
  {
    "url": "Bots.html",
    "revision": "f54316f8744034caf86ad2afccbccba6"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "bc51777798de5be95dbd82ee363a8ef7"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "52065ce0cc542c621555ceeea41e199a"
  },
  {
    "url": "console/Appendix.html",
    "revision": "12efd465dc6d3a0d0124316bbd1a9cdd"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "199988dd6b0e59de415f311d1176fe00"
  },
  {
    "url": "console/Commands.html",
    "revision": "b6463ba9eef4dfe5d29740c808491ea0"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "97cd8ee89b65ba3f9b6f6758329798ea"
  },
  {
    "url": "console/Contributing.html",
    "revision": "42cc07bb902a31d7bfc7c0e2250ecb19"
  },
  {
    "url": "console/Extensions.html",
    "revision": "9932d15097fb198ebcb7739136f01e54"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "ffe1e3a9f04f872b897df314cf130fb1"
  },
  {
    "url": "console/index.html",
    "revision": "35bee055c9816db99a28d3861eff32fc"
  },
  {
    "url": "console/Permissions.html",
    "revision": "a617ab5ae55997fa29b7659716c0cc11"
  },
  {
    "url": "console/PluginData.html",
    "revision": "24d6693540b9a29410f110ea1da47bbb"
  },
  {
    "url": "console/Plugins.html",
    "revision": "9e83057bc66e93966192861e1069da41"
  },
  {
    "url": "console/QA.html",
    "revision": "d90f1bafd7fa2c74a38a3917a81d16e5"
  },
  {
    "url": "console/Run.html",
    "revision": "9542f442656f5ebde4dcb87dcd1b64e3"
  },
  {
    "url": "Contacts.html",
    "revision": "17aab625627e601f0477e5b7ddf3943a"
  },
  {
    "url": "CoreAPI.html",
    "revision": "f90d5fc0dafba810672209c2b4036ef9"
  },
  {
    "url": "DebuggingNetwork.html",
    "revision": "74b359bb2e94432c471ba837107dbcb5"
  },
  {
    "url": "EventList.html",
    "revision": "fb99bc709e2fb784028dfcd65fed9206"
  },
  {
    "url": "Events.html",
    "revision": "79796a84130243bb2f9e5d8e82520cd7"
  },
  {
    "url": "Evolution.html",
    "revision": "65e49fa93ecafc53b917e31913a53f72"
  },
  {
    "url": "index.html",
    "revision": "09d076f03967560ed1cb16c02a4c325d"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "5f76d9f50e830ca9289bb0a5df615e8b"
  },
  {
    "url": "mcl/index.html",
    "revision": "1921b66e40081871cba6431809c6557e"
  },
  {
    "url": "mcl/Plugin.html",
    "revision": "ca1b43b5d58d7d816a98640fafc5e3a4"
  },
  {
    "url": "mcl/Script.html",
    "revision": "992987e6df3dab3740b059afab8589d9"
  },
  {
    "url": "Messages.html",
    "revision": "033dffbf3d8ddfeafdf152c196f2ff46"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "bb1dfa8b56de5096194a7454f62d55a2"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "19aaca1a117d2fdc594b9a6e57a69888"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "acc2e9f912f01cfcc9ab85a01dbf05c1"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "6adeda62baeb3ca3fc5f07fc5da436fa"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "2be91fb1548a83be70be7d0cc8a08465"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "1d6aa287d21c8054422f5b3b0c5534c2"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "68d269259dcb1db843e19ff5d717d1ae"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "daf878a3e3b91a915ddb840ae96c0a41"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "116469b79777e5f3289a551b0bb42b4a"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "4f2306c0ae241a801214dda2e49b5057"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "dced86ea3c5dd82bfec3f137a854fdf3"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "d161f031673af0b708783ed0d514def3"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "076c0f471a048ab822eb6ff456e7f336"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "b498c56e048102fac1e76f082ef0232e"
  },
  {
    "url": "Preparations.html",
    "revision": "27a6b1c437176e5ca886275e7a3d5657"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "21a2dfcbb01d51bd2646837c221bf0ac"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "13df6e75b2b2bef93f355956376ff481"
  },
  {
    "url": "UserManual.html",
    "revision": "eeb1117ae906e8bc9846a3fb1d836693"
  },
  {
    "url": "UsingSnapshots.html",
    "revision": "976fc5704e405490bb238a933527748b"
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
