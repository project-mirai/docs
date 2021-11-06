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
    "revision": "bcfb1e5b8312c4720fece627ee886506"
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
    "url": "assets/js/22.7a863887.js",
    "revision": "cbc39bca5f0b8555149fd44765221bdf"
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
    "url": "assets/js/app.25e4cb8d.js",
    "revision": "ce2b743315565ca0cbff37704a6797c2"
  },
  {
    "url": "Bots.html",
    "revision": "0bd74e8a350ef4300246e5acf9fe3534"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "23c57e38830cacadadc4ece2af93539f"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "8dc47208b1dd360b8e70db9de4cac033"
  },
  {
    "url": "console/Appendix.html",
    "revision": "6eeb04752ce53d8ce02e7d89df51da01"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "dcf994132d4fc5a3f0f5824d84c69696"
  },
  {
    "url": "console/Commands.html",
    "revision": "b2185aa8d389ee14de20aade07e60938"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "2972db0f642ba994fbf7e9eed6bf16b4"
  },
  {
    "url": "console/Contributing.html",
    "revision": "a2ed302357cebd6215fee3ade16d6299"
  },
  {
    "url": "console/Extensions.html",
    "revision": "25ee489347fce78be44132eb91cd8842"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "131efc9cc9515dfe525f4e7080fb762c"
  },
  {
    "url": "console/index.html",
    "revision": "f8e9677ea42aa79a5b5792fa86d04e12"
  },
  {
    "url": "console/Permissions.html",
    "revision": "c88d7ef29440da20780e5e72c218a5c2"
  },
  {
    "url": "console/PluginData.html",
    "revision": "55893d65a1e2907712a061a953e4d00d"
  },
  {
    "url": "console/Plugins.html",
    "revision": "a895a788267ade2d8cf91ed778e0dfe2"
  },
  {
    "url": "console/QA.html",
    "revision": "f83703d40b51fa511bb1e7beefe480df"
  },
  {
    "url": "console/Run.html",
    "revision": "b5d9dedfbed9694d6ccd162c3d62dfd3"
  },
  {
    "url": "Contacts.html",
    "revision": "aa1ec51290a4121c4043b1f4366a77ac"
  },
  {
    "url": "CoreAPI.html",
    "revision": "8e13e41a5343b1d4257ae403884586d2"
  },
  {
    "url": "DebuggingNetwork.html",
    "revision": "d8c6c311bf6492a57c2e7fbdad01bd12"
  },
  {
    "url": "EventList.html",
    "revision": "735791a80a0874448068fa2b736b2c9b"
  },
  {
    "url": "Events.html",
    "revision": "63bd9dc6a620f6e8ed1a1ae610343506"
  },
  {
    "url": "Evolution.html",
    "revision": "6dbff5ae38be215ab25eb205757161d0"
  },
  {
    "url": "index.html",
    "revision": "83c34147410ea80f92da61575747d6b3"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "5601678457e87253a105e14e61b1ef48"
  },
  {
    "url": "mcl/index.html",
    "revision": "7f7d3859d87a8428c475119eb7e6de03"
  },
  {
    "url": "mcl/Plugin.html",
    "revision": "430b360f88256dc21e7db3c1b23630bc"
  },
  {
    "url": "mcl/Script.html",
    "revision": "b7758beae5744420ed38ad9101fdaf90"
  },
  {
    "url": "Messages.html",
    "revision": "da1864147429652ae94c9cbc89c6d3d6"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "7a81d3b1d4bfe6e52ede98518b364503"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "2c6863a4c1d811887339e377aae8c58b"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "5b27bcfed4b52b9e8648badc665d4349"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "4073011e653075d09469c1f36a3d5ae4"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "29b63ad4186be1729b2d971e5bedf751"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "86166eb51c6d344459637d791f22b755"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "a8d69d130eef0adefb5d923bedd216fe"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "d4e0d79ab88e58304aaffad0d9fa9e0c"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "daf165575be39b2e69471b0580a4a2f7"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "91652599de9cfb7bd384b0630928efae"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "f5f356621b092323bf0b917c07d0d8a7"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "745ddb3d8398da57ab96a281f25bcff8"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "350de096be742e492eac8d246df6e394"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "5377ef66ae77033f4c3f6f70c6bedddf"
  },
  {
    "url": "Preparations.html",
    "revision": "0d975bde70b9dd176d3c78b83d5c602c"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "a4a655e6584da50f099ee66ed5ddbadc"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "6aefeaf29df57c9f4068ff046b0d954a"
  },
  {
    "url": "UserManual.html",
    "revision": "61e0a14e969cc835e05351abccc9896d"
  },
  {
    "url": "UsingSnapshots.html",
    "revision": "78817802d3563528d0c57447a68d4534"
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
