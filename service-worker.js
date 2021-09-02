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
    "revision": "8b2e8c627a9a6954a84e533dca72a331"
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
    "url": "assets/js/14.33f9015a.js",
    "revision": "74d5d23aa1b8bc4c4bcf39d853678a99"
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
    "url": "assets/js/22.6e78b238.js",
    "revision": "6a73c3c0d27b6077ac575b848406ce23"
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
    "url": "assets/js/42.54bd8cdf.js",
    "revision": "27a7f5ad787b9999825b726b6d16ca4c"
  },
  {
    "url": "assets/js/43.93c9ce81.js",
    "revision": "5cca0c140b887ba609425c0872fe01a8"
  },
  {
    "url": "assets/js/44.f8067691.js",
    "revision": "35aea57bc9915ffaee17df58c51e9c10"
  },
  {
    "url": "assets/js/45.91407e6b.js",
    "revision": "dc40fcb5f580967c4ba4c4b821ceb101"
  },
  {
    "url": "assets/js/46.28676d9b.js",
    "revision": "c4342bc082f2e59aa0bdf14c2086ff1c"
  },
  {
    "url": "assets/js/47.b806ee9a.js",
    "revision": "7ead5209e294cb86c36b0ef29235dae8"
  },
  {
    "url": "assets/js/48.d929d6a2.js",
    "revision": "72e75753f500319c799d942b9676e6fb"
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
    "url": "assets/js/app.acc4c538.js",
    "revision": "21a6ca9a387671e3f268a4ed03721988"
  },
  {
    "url": "Bots.html",
    "revision": "a54f35dc2184558bceb669c379c70018"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "54265808d4b46afffa7f055224e12dfc"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "78a8d52f491a2da43d23b499214d036b"
  },
  {
    "url": "console/Appendix.html",
    "revision": "dac6c2b0804b4b1cf495eac2251730ed"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "4dad5ed538abcd63b729ae1d66b169c7"
  },
  {
    "url": "console/Commands.html",
    "revision": "ab4ca2bfcd402a7025fae6687b5686a8"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "9fefeeda4721b2399e6b735d9d33260b"
  },
  {
    "url": "console/Contributing.html",
    "revision": "7ed5c7af134c6e99a9506a1e36ad6fbe"
  },
  {
    "url": "console/Extensions.html",
    "revision": "6d2d97eae92ae21bb06b2f2b72839609"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "e4bb1d1a4286ce23e165602e2f42158b"
  },
  {
    "url": "console/index.html",
    "revision": "7a77549417e57ba048a9d797f1812897"
  },
  {
    "url": "console/Permissions.html",
    "revision": "e353a32465d6bf95521ba3f36608cd48"
  },
  {
    "url": "console/PluginData.html",
    "revision": "0d65f0b92c5a17edbc33639b2e397fd4"
  },
  {
    "url": "console/Plugins.html",
    "revision": "d0b6ae50b07a05970e9f3f852516ce3c"
  },
  {
    "url": "console/QA.html",
    "revision": "ad9d5b1fc1f8e2058bbe6f293756636f"
  },
  {
    "url": "console/Run.html",
    "revision": "dece14450c85d0aaa22637262e81d4c7"
  },
  {
    "url": "Contacts.html",
    "revision": "8f86d39f3a8e91803d1945ebd413eadf"
  },
  {
    "url": "CoreAPI.html",
    "revision": "989b0d6424e64ff96a0001a2e9e0e8ff"
  },
  {
    "url": "DebuggingNetwork.html",
    "revision": "c4d089aa8f2790dd12b9ef0b9016ba20"
  },
  {
    "url": "EventList.html",
    "revision": "8c0d4c396287f4f8bd52ffbc93cdeb3d"
  },
  {
    "url": "Events.html",
    "revision": "be1c2c0fe818c762b031a4b76ac556ae"
  },
  {
    "url": "Evolution.html",
    "revision": "7d2dc3c5c0b3f4e74ba4e1557baeca13"
  },
  {
    "url": "index.html",
    "revision": "300b7fbbe4b027d6c10a90bb8121139b"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "0d3fe6e12276da855f304a2b8b348bdf"
  },
  {
    "url": "mcl/index.html",
    "revision": "ad6949a1322ef7fd35a83c496b37e084"
  },
  {
    "url": "mcl/Plugin.html",
    "revision": "37e764373644cdd786b402faf90e3d36"
  },
  {
    "url": "mcl/Script.html",
    "revision": "30335d8c213f1a2ab261eb2f1b514356"
  },
  {
    "url": "Messages.html",
    "revision": "a44eea6a3605824314c43e20f2d40472"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "b5135597ee9281f27d55b351e9826c47"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "6f75a182b630e32eaecf6b5843b656ce"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "47068a28d9c3fe060b8dd390acfc39ca"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "86606102fa316c64593d993ee5626a5c"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "f5d14e8176e954b33849e896391522b1"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "1a8f199a1c11c626bedb00ba245734d9"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "a3578610eda3ae03a9e152ede25d5f3f"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "7b125dd08d33bb3955512a2ab34718c4"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "f79c645df7731da55175dbe9b8198710"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "db448b2c317ba02849a8339484e0062f"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "7e2b1d8ce441970d7e12f221bf62f77f"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "32d7e0f158857ad78d74213267f3845d"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "ac520894ad5d943063bdd89265de4993"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "9849e6040a9eba3ffec4f38f735d1e43"
  },
  {
    "url": "Preparations.html",
    "revision": "584aa4be45fd9f0350909c32daec8a3f"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "6577b0d3f819024318da801aa81dc858"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "ba5473881fbf94b05a95f123a0efd17e"
  },
  {
    "url": "UserManual.html",
    "revision": "ea582feb25eff5981f9258e570257f43"
  },
  {
    "url": "UsingSnapshots.html",
    "revision": "fc501f2a460f861102bb64f66d3ff6f4"
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
