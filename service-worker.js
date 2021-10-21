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
    "revision": "b4eae475e65cf8d4e082f7f0c9771988"
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
    "url": "assets/js/22.686da2ed.js",
    "revision": "fa9b466d1b1994265f089e664b7ed5b1"
  },
  {
    "url": "assets/js/23.1f5dd63b.js",
    "revision": "b0fe11fc1f65386f78b1a9e4e1383524"
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
    "url": "assets/js/app.daf5f0de.js",
    "revision": "eada5088b3168056cb70a5447be2c2eb"
  },
  {
    "url": "Bots.html",
    "revision": "020ee138870054d7c8b489b089af3686"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "a661075faf1050d5036c81c89af7fdc2"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "d9632da9c834fc82970a52c6709b7e37"
  },
  {
    "url": "console/Appendix.html",
    "revision": "31568132d351fd8a189aacc5ee89a5c8"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "de0994db8c93a1f8982f3caf618ad25a"
  },
  {
    "url": "console/Commands.html",
    "revision": "4ffab80e78ddb3b50b0d013b460f0154"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "f5c7d7084deadcd910fe3de673b784b7"
  },
  {
    "url": "console/Contributing.html",
    "revision": "7d56c76f26f5bdb9d79694fc36019ad9"
  },
  {
    "url": "console/Extensions.html",
    "revision": "0785d5d719fcee21bfd55e1261135139"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "be586385bf48dfe56e3a89fbdd43ac4f"
  },
  {
    "url": "console/index.html",
    "revision": "787f40ab194366feef7f1750c4974752"
  },
  {
    "url": "console/Permissions.html",
    "revision": "2cd564aa7294fce757aa14715a82bef4"
  },
  {
    "url": "console/PluginData.html",
    "revision": "56ed7bc14317050fad64cd63ee3ab6be"
  },
  {
    "url": "console/Plugins.html",
    "revision": "d3c85c5941ad58ded622eaddc63da15d"
  },
  {
    "url": "console/QA.html",
    "revision": "24523add71b77512a18e138c208a66d8"
  },
  {
    "url": "console/Run.html",
    "revision": "c2fe57f048b791d410c7e54973a297d2"
  },
  {
    "url": "Contacts.html",
    "revision": "99660d85b1c846feba13d0e7116a940c"
  },
  {
    "url": "CoreAPI.html",
    "revision": "8c65bb751a8bc33b864c5a7dad7d7866"
  },
  {
    "url": "DebuggingNetwork.html",
    "revision": "5c3874322eb6f762f82711c0b3e5862f"
  },
  {
    "url": "EventList.html",
    "revision": "f3ae35089c2f781147efef75e07cef1e"
  },
  {
    "url": "Events.html",
    "revision": "ca2449a8e7a9783f73678e6101709162"
  },
  {
    "url": "Evolution.html",
    "revision": "f3d0d6dce896a5ba782179fd3a7bc7ca"
  },
  {
    "url": "index.html",
    "revision": "358f500111cb6aaa4af8587c2978d411"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "84811cb9eb30abfed2b4996c0b96e94b"
  },
  {
    "url": "mcl/index.html",
    "revision": "3b8f1d264789a17b26a3cc7e5d64ac6e"
  },
  {
    "url": "mcl/Plugin.html",
    "revision": "ab572dc4a8196f7a008815ff2d0e147e"
  },
  {
    "url": "mcl/Script.html",
    "revision": "6c27e93583ec93d226c4ecaddda995aa"
  },
  {
    "url": "Messages.html",
    "revision": "b243b3ef5beb061c592c98898b668945"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "f9ca8c456f07eede5612836623a0121d"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "89156be898693df59906aab9771f605a"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "d54255878e2aaab2de1a469e31ae022b"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "7bf38899387ce684f21a44f90b20cae5"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "6163d14cdab262404e8e07e82d10898e"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "9d9682b7b712995b3ab0b26a757dd7eb"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "bed8391d6d253df1f461cf27bbbf96b4"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "8e29cbc8336d2272e96bbadc7820fee6"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "08aa1d49b45fd956cce4785a8ed04fb7"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "4760d31267252e032f20abdf198c5543"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "e60c6cab21f6b792fa492faa99e9970b"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "f17ed00802ea5382f3d06184e78cfaaa"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "9efe2795a10fa5ab89bb837ceab1a146"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "5516df5bb7f5ac62776adda6f29f0ff5"
  },
  {
    "url": "Preparations.html",
    "revision": "3a8e7ba3d73b4fb784d8fb2ee1c2b900"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "edb25056a490f2372ab4fd1b1fba4375"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "41c663c1e738e7893fa2d8535d6e5000"
  },
  {
    "url": "UserManual.html",
    "revision": "cbf8019a3923eafe3263bee0165543be"
  },
  {
    "url": "UsingSnapshots.html",
    "revision": "b28efc2a8bf72d781bcba199d4b7be5b"
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
