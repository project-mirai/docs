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
    "revision": "d3edcf0f4fef0464f641d31b2cc534ea"
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
    "url": "assets/js/10.7623ac5d.js",
    "revision": "e5374125d1310895797747c334fd3d8c"
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
    "url": "assets/js/9.3f647540.js",
    "revision": "f06db4d975652053e3f44552fa7e19a0"
  },
  {
    "url": "assets/js/app.51d95779.js",
    "revision": "f1d3fab83140e59290a39cfb4f2dd632"
  },
  {
    "url": "Bots.html",
    "revision": "ea1062fdf3754a06e437fd62f7c8efd1"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "bd780576a0aec4ee6b549a423a0c57b7"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "e743d2301f45049bbdbe9972822f4679"
  },
  {
    "url": "console/Appendix.html",
    "revision": "5bf1f9e3730d8788e2c2eee89c960308"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "165c684f00ca1f0370ed1aca39822a9c"
  },
  {
    "url": "console/Commands.html",
    "revision": "33fd75ed47b72fb1cdec9ca6ce3092b3"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "b3109f7f442fa473bfe246d56072b01f"
  },
  {
    "url": "console/Contributing.html",
    "revision": "5a02525e978a3495547bcb82ea4e4956"
  },
  {
    "url": "console/Extensions.html",
    "revision": "21311ca98bd300ef51d70c24202b3645"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "17865c5a465174037414b2257701169c"
  },
  {
    "url": "console/index.html",
    "revision": "66e70db0e3e6ea9f006a986005d41ab0"
  },
  {
    "url": "console/Permissions.html",
    "revision": "4bfc4bb1970d4384026f09129debd6e4"
  },
  {
    "url": "console/PluginData.html",
    "revision": "2a1c587c0ab036000eb371c673d2e22b"
  },
  {
    "url": "console/Plugins.html",
    "revision": "11ae9276bbf639eb5fda52880a07bdbb"
  },
  {
    "url": "console/QA.html",
    "revision": "887c2888a53347de0f0e9001829589d8"
  },
  {
    "url": "console/Run.html",
    "revision": "2c8fbaf27e9b22778d242bddce4214d1"
  },
  {
    "url": "Contacts.html",
    "revision": "cb5cf21b692072d04288cb4d9cbb5cc9"
  },
  {
    "url": "CoreAPI.html",
    "revision": "cef9875a9b06eb54488747eef9fdd6d6"
  },
  {
    "url": "DebuggingNetwork.html",
    "revision": "1e583102f6953e1b34267861046709f7"
  },
  {
    "url": "EventList.html",
    "revision": "e313fe85ef90f96c555e053cf061c85b"
  },
  {
    "url": "Events.html",
    "revision": "e12e0b3b65dc0c838a7551fe646d348f"
  },
  {
    "url": "Evolution.html",
    "revision": "04a1106c2a8177535b33ba7a33e3eea8"
  },
  {
    "url": "index.html",
    "revision": "90c1862d4e6b385179eb2ccab7aee904"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "08136f656fa36e4149d659bcfc786ffc"
  },
  {
    "url": "mcl/index.html",
    "revision": "e675c71590be37aef448c9410f86157e"
  },
  {
    "url": "mcl/Plugin.html",
    "revision": "7b67bf983c6a3bd5dcf46c80503da4ce"
  },
  {
    "url": "mcl/Script.html",
    "revision": "669658b5ab325381cbc8d9183e127548"
  },
  {
    "url": "Messages.html",
    "revision": "5f74cea0f2477404d86aabd140b1d3d1"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "f499769f43dcb0dc3b2728a4f05ff2c8"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "328b5c322ef0931ac1ac6b9941ba05b6"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "2d198d531c497e00721a25b7e7e9a301"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "0010dc677e0e6ffb1010ad10fe4c47dd"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "58a453618020dad031ee6ad0ca87e0ae"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "9b5419eecc0dcdda1f801d719182d0d2"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "105dd51ac7b03a6d027b340519772784"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "b223ba11228f8d273e69b57f283bcf24"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "29ba44c994545e267b47567b0d52cf4b"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "579c55bf8316b80d8cb039b112a10704"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "8513299687e09b78e7a8ea2e39919fcc"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "797a05dcfd24b296c7b90f7e08965129"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "40978bd17727f0c75691b047f2d66bdd"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "5d371bb7b37ef551433b25ad95e61568"
  },
  {
    "url": "Preparations.html",
    "revision": "c4982e01bf07ccc70ce19f775a6539c3"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "f865fa0f9685896b14bd7d8571aad7db"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "3c015adef4beec457ef0156b39b32a7f"
  },
  {
    "url": "UserManual.html",
    "revision": "1bc85a152a141e0e2b48868b2263df80"
  },
  {
    "url": "UsingSnapshots.html",
    "revision": "348c871452b1d2e3ddce372e4d23fd34"
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
