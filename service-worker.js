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
    "revision": "64dbcc3fb32c4512a5f46ff3ddb6a116"
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
    "url": "assets/js/app.6b522f98.js",
    "revision": "122cded32298d0525579d60548b02f7f"
  },
  {
    "url": "Bots.html",
    "revision": "6521bc9086787bef5b1a64bd1c13b455"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "6dd44356bbb351234539dacd0651a35c"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "bedc1180e37af85fe12ce127d70ba975"
  },
  {
    "url": "console/Appendix.html",
    "revision": "994e86dae6d12ede794b4c0caecd9671"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "8df5858981b2707167278989371cd61c"
  },
  {
    "url": "console/Commands.html",
    "revision": "b45f9be61b9d5b647f71516e4f47a55a"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "33a792ad2b3d68f71cc9ee99bdf40976"
  },
  {
    "url": "console/Contributing.html",
    "revision": "c4c70e3178670889994c723340db5dd0"
  },
  {
    "url": "console/Extensions.html",
    "revision": "6c8314a883962ba7a46eec05384354a8"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "2a03e97fc3320edcd47c071c6c87c06a"
  },
  {
    "url": "console/index.html",
    "revision": "fcc243219acd7d3b752efbc612f5b24f"
  },
  {
    "url": "console/Permissions.html",
    "revision": "d63a654dc66c2b63e674bb17e5a44660"
  },
  {
    "url": "console/PluginData.html",
    "revision": "31c33751f09631c8387aa430cbb62d5f"
  },
  {
    "url": "console/Plugins.html",
    "revision": "e31a6d385b237b44e00ca331cea55953"
  },
  {
    "url": "console/QA.html",
    "revision": "352e5666b8dcab7b9fc1198fb773a586"
  },
  {
    "url": "console/Run.html",
    "revision": "be0672805db3af681581972b215171b1"
  },
  {
    "url": "Contacts.html",
    "revision": "395430f57c52dc4d297bf8e09dddafc7"
  },
  {
    "url": "CoreAPI.html",
    "revision": "aa355bfa29af9587f4c76e2a18d645ab"
  },
  {
    "url": "DebuggingNetwork.html",
    "revision": "80b4bb9f0fa42ec7ed1f56de67a31257"
  },
  {
    "url": "EventList.html",
    "revision": "003e70a850b8f6d554c40d2dd5451aef"
  },
  {
    "url": "Events.html",
    "revision": "3295f881d062accd5eb0d7cacfdb41cc"
  },
  {
    "url": "Evolution.html",
    "revision": "1c2832c6f7817db318ae3f0880aa96cd"
  },
  {
    "url": "index.html",
    "revision": "20d3f49d78a69eae650c48a1ff128ff7"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "45c79a6338e354c0d2af0b5e69c5285f"
  },
  {
    "url": "mcl/index.html",
    "revision": "0436a342d68615bc2f88fe0a786d6a62"
  },
  {
    "url": "mcl/Plugin.html",
    "revision": "138629771358f1a69ec9a5e5159a9577"
  },
  {
    "url": "mcl/Script.html",
    "revision": "540a89ab7e2d5830b0f36de22552b6d6"
  },
  {
    "url": "Messages.html",
    "revision": "1994f32446c705e69ba3d0523f8181ad"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "484d8f7a3ceba7a8328189879c25edc2"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "735ee82adbfad652b2078655d7a2fcea"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "a5c1cdc5ef7e3d3669de955cc97feb16"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "5ce77685b1ce26df8786222ebcc2a717"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "6a5b2a8e106bf068790d45fd2e8ccca4"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "d8e37c12ca882f9a44ee671c6c7e7869"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "9b3db871df0ebc630ab39f75b45cb04e"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "9cbcb586299ec6940946f5ccb24b8dec"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "352d6b52f3bcae3aae3933f9d7d80cdb"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "06048c03b7ec96a0b9e0227ed9cb558f"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "6a5d83f65a3d39da57e06f88bfd44e78"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "01595e6a03e29fe047fb8147a0ce622f"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "76566b37cecb21a3f835f8419305d0ae"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "5f368edddb2237e1fbbba2028d58a99f"
  },
  {
    "url": "Preparations.html",
    "revision": "d75cc0d1afc2157ef2896cf804218ec5"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "ecd29e60653b0a5db862e23173459d82"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "c2927f7d5bd602e6c58580ad5ec7e5f8"
  },
  {
    "url": "UserManual.html",
    "revision": "016716ca4f7b50de9aea2afa45f2e7fe"
  },
  {
    "url": "UsingSnapshots.html",
    "revision": "b571e4350f18411a955f7f3f3faf63da"
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
