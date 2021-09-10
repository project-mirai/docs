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
    "revision": "ad49003fc6758cd9de47b06b9251eff6"
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
    "url": "assets/js/47.b7b32af4.js",
    "revision": "090093e63b51caed5f7839875de62c74"
  },
  {
    "url": "assets/js/48.134dbbc5.js",
    "revision": "c588ce9f796c18eb91a8ffe1c761f859"
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
    "url": "assets/js/app.e0d6ae16.js",
    "revision": "f9443433a25b0c29023edfd2b4499f3d"
  },
  {
    "url": "Bots.html",
    "revision": "164ad772a69b6ca96da70f81b9bc4071"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "a157b4ff5f33a544fb1a0043bfd44cf7"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "b0c4568138376b94d56f15dd29a7f0b0"
  },
  {
    "url": "console/Appendix.html",
    "revision": "8400bf4b7cddf5257fccc9991ff3c07c"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "4dabadbe7356d546da609959247e43f3"
  },
  {
    "url": "console/Commands.html",
    "revision": "ecd30da2f9386b53a5b9e67f9e801385"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "1d9809c6143d25f830b3de5e4c321deb"
  },
  {
    "url": "console/Contributing.html",
    "revision": "489661616c8870f528bc477463624ab0"
  },
  {
    "url": "console/Extensions.html",
    "revision": "6dd836cbd2e2dfe90495f9b2142057a9"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "afa013bebbb05534ab6c8a02785cf14a"
  },
  {
    "url": "console/index.html",
    "revision": "7ba394b5055b2a817ea4d2f09a542bd1"
  },
  {
    "url": "console/Permissions.html",
    "revision": "156ebd7b7c48cce172a6c1e62d47c7c3"
  },
  {
    "url": "console/PluginData.html",
    "revision": "60f6e96fedab11c2602b55864d9023a5"
  },
  {
    "url": "console/Plugins.html",
    "revision": "c5cd993c050125fc4c244f82255a02da"
  },
  {
    "url": "console/QA.html",
    "revision": "bc86df9a376c128f6f9cd19bdf5cfa92"
  },
  {
    "url": "console/Run.html",
    "revision": "d998977558f1f465db27b159e9e58dda"
  },
  {
    "url": "Contacts.html",
    "revision": "e20896228b6712b32d040343914526c6"
  },
  {
    "url": "CoreAPI.html",
    "revision": "5068b6dd2471360d30c92542f981fb12"
  },
  {
    "url": "DebuggingNetwork.html",
    "revision": "b8ca50b48191104722c2d019b018d33b"
  },
  {
    "url": "EventList.html",
    "revision": "4b7391c516ff9e69cb75aae58f874264"
  },
  {
    "url": "Events.html",
    "revision": "f21225b836c059a46f38e0f616ed2cf3"
  },
  {
    "url": "Evolution.html",
    "revision": "825ff8974501084e9c58caae38a5a3b5"
  },
  {
    "url": "index.html",
    "revision": "b6ec886705e130c8b5df6cea7509f7d7"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "03021b5c7ef31cc5111235f77bb2932f"
  },
  {
    "url": "mcl/index.html",
    "revision": "374e7d673a6c4911d8b3ea0de889028f"
  },
  {
    "url": "mcl/Plugin.html",
    "revision": "d66a50e3e2908430a99dd8dd4e7e8d75"
  },
  {
    "url": "mcl/Script.html",
    "revision": "0e76a9cf8ea4fd939cb34ff0dfa79a1e"
  },
  {
    "url": "Messages.html",
    "revision": "d9c9f712e11d87b4ca61711eedb376ef"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "6e4b73d374a9a8ad987102aba375062d"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "bc595da419cc3dd52ec909eed8fd433a"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "2092c83709b7d28982f790911e53e0af"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "9a7f4f6c0949de1a8ec049965b635654"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "bcd0067d379dd28e89183caa2adea68e"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "4812d1736c108ace05c3d2f72cbf2b63"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "614924b4e280d607361c1e0b8a826e86"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "4e770eab178cdd3fea8de9ff81334f52"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "061008e1bafa452f47ca7a78b31119b0"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "54988803e677b713dc3d8bbf7c8f58e1"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "84c0bca480722e8dcb22846818ad99bb"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "c21e4a83009a0d365e54eaf65242877a"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "8f6197b0b0505b09d2fdd732af38d6e2"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "681cd53a268a695b413cf894359804c9"
  },
  {
    "url": "Preparations.html",
    "revision": "594968c970f85f90f3455c17fe497195"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "0ee057263725cec2bb6dea8259e1a15f"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "46880046b10a57696675f5ddfb0c927f"
  },
  {
    "url": "UserManual.html",
    "revision": "13124b54a277b5c1e1a45f6269926ae6"
  },
  {
    "url": "UsingSnapshots.html",
    "revision": "45a1e0830f880fb44a3d64b3468720f3"
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
