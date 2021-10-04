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
    "revision": "6fb2c6834ea07bcc42a644afcbb2ffd2"
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
    "url": "assets/js/app.34249f71.js",
    "revision": "afd526dfa8cdb495b94fad753b618627"
  },
  {
    "url": "Bots.html",
    "revision": "ccdff929253f156bc927363e3253699f"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "7dd5f29f00060007f1dcce2b36fa9c87"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "440484d350d1f71f7c74edb110d1147e"
  },
  {
    "url": "console/Appendix.html",
    "revision": "c1787433ba999791935d72c2f3aa2f5f"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "59b9f6f51e06dc3b4462436fcc17e918"
  },
  {
    "url": "console/Commands.html",
    "revision": "9c48a7683221a5f9e68d05ec3f9e7602"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "9947b66e04839291038b285b610392a6"
  },
  {
    "url": "console/Contributing.html",
    "revision": "d6d0c5357ae2c3a5d5eedba977b5bede"
  },
  {
    "url": "console/Extensions.html",
    "revision": "52463a451239d2b62773de449f6f8249"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "ef23d4317132a374be0c0b9e87eb0eb0"
  },
  {
    "url": "console/index.html",
    "revision": "160f3f0158328b62251ed6ec25b7994c"
  },
  {
    "url": "console/Permissions.html",
    "revision": "61f759501e40ceed5ecd9aaa97dd3806"
  },
  {
    "url": "console/PluginData.html",
    "revision": "b8c5a3e55d6c3293fc924fed3de6ebbc"
  },
  {
    "url": "console/Plugins.html",
    "revision": "66a3bcdcd6113b0e437fefef863399fd"
  },
  {
    "url": "console/QA.html",
    "revision": "51d38fcdc5b4a1cd9639562874256991"
  },
  {
    "url": "console/Run.html",
    "revision": "243361c9def110dab08e55110a1739c7"
  },
  {
    "url": "Contacts.html",
    "revision": "ebf19059db06f36f5b7b9590cc3b65db"
  },
  {
    "url": "CoreAPI.html",
    "revision": "770f5b0b193556a0333c78721b7e23d7"
  },
  {
    "url": "DebuggingNetwork.html",
    "revision": "a83714cffe9ed08135f92f491971154d"
  },
  {
    "url": "EventList.html",
    "revision": "0b37c79ec8123e0300decd2bda57a02a"
  },
  {
    "url": "Events.html",
    "revision": "0a882ec11c8c9654b33a7de0bef6e07f"
  },
  {
    "url": "Evolution.html",
    "revision": "f366c61b791c228f0fc92055d2d78c82"
  },
  {
    "url": "index.html",
    "revision": "78dfee333b8a2f3886795fc2258c36c1"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "eafb67672e6b1a6ed95228a5424af3a0"
  },
  {
    "url": "mcl/index.html",
    "revision": "6e5ec501a839f2cbbaca7cc6a0827ab2"
  },
  {
    "url": "mcl/Plugin.html",
    "revision": "5cadff31c6671fff35bfc5ede716e25d"
  },
  {
    "url": "mcl/Script.html",
    "revision": "531752a0457d20aaa6401d8a894bff49"
  },
  {
    "url": "Messages.html",
    "revision": "f94f8aae2d71e8f6f374775069d42d7a"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "50dbd261fdcef5274c2a8caea291fd9b"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "f088f21937d84952afe402217055b581"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "fcd1c287d317ec296027d685a2dd1296"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "687bee278139b5737724823778820806"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "3edec808d1be9ae7e79f57b500eef6b4"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "2eb50552b2805e21ffb5b1a57c92f968"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "60df2b891e8b76bb99cc1e2c91fc5803"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "48b358abff6c7990a4113d756a7ebd50"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "14bc44de1147fdd8ed7681b3369ee629"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "0e3db0907b4574301ebf7d56a6708dd0"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "3c52768f55fdd81b9bcc53c3d1482efe"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "5802063a9f7e1a803f368d9d2992a078"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "a869c8655f3f3bc5d6a50922d372af03"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "d589b2b95790ae8eb1dfe284dc6ee1a7"
  },
  {
    "url": "Preparations.html",
    "revision": "be5cfe721c920f18618384c3e6f44252"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "b5ac0eff0279849345560ebde97473ea"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "a9c7726efb019063465f39f3ea37d967"
  },
  {
    "url": "UserManual.html",
    "revision": "6817cfa8f63a21ba6ee9a091cc260980"
  },
  {
    "url": "UsingSnapshots.html",
    "revision": "5e828ace5a66969df7b227657801a982"
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
