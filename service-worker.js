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
    "revision": "db32e1df495c2263bd016f79dac8c944"
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
    "url": "assets/js/42.54bd8cdf.js",
    "revision": "27a7f5ad787b9999825b726b6d16ca4c"
  },
  {
    "url": "assets/js/43.93c9ce81.js",
    "revision": "5cca0c140b887ba609425c0872fe01a8"
  },
  {
    "url": "assets/js/44.b18ba07c.js",
    "revision": "5b863acc393a11e568cc91f6f8255147"
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
    "url": "assets/js/47.f90c5835.js",
    "revision": "f57a6272efefa58acb6b37f44b179c24"
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
    "url": "assets/js/app.5d175a94.js",
    "revision": "b3b08806f3edd172c9903dd14cba45e7"
  },
  {
    "url": "Bots.html",
    "revision": "58a08aea2879772839fa439752a54a7e"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "9a8aac934afda2f0febdf0d030f970b5"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "7c3411b9e37958c5ff8ab81cd013680e"
  },
  {
    "url": "console/Appendix.html",
    "revision": "d31a185c612b5ee008f4b4ab1d4b2dfa"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "fe3edbde2f99ea610bf340194c23f49c"
  },
  {
    "url": "console/Commands.html",
    "revision": "81d6ca1c7307764e65ce32eded457681"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "6b7b8458873c0e9818a833fa0460d165"
  },
  {
    "url": "console/Contributing.html",
    "revision": "8f3d36105e0ab18ad5830ca98d3aa94e"
  },
  {
    "url": "console/Extensions.html",
    "revision": "f9922d1a2bc211c477a5144d468a2b73"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "ea205732d24382b12731e320f2c05335"
  },
  {
    "url": "console/index.html",
    "revision": "c58b9dc774776ac12369f1950b8f6f7a"
  },
  {
    "url": "console/Permissions.html",
    "revision": "0f5bee5ba61299e2c901817bb6e1e28a"
  },
  {
    "url": "console/PluginData.html",
    "revision": "dcb925a60e7f37494ae67dcfa2235df9"
  },
  {
    "url": "console/Plugins.html",
    "revision": "1340ec91bd1149a5810a950c8be484a9"
  },
  {
    "url": "console/QA.html",
    "revision": "12121ca5a98505c72be31a90ad4384d4"
  },
  {
    "url": "console/Run.html",
    "revision": "56d916525c4bac7c0b24eaa4b4bcb752"
  },
  {
    "url": "Contacts.html",
    "revision": "5a261cefc6d775031f61436549f4bf62"
  },
  {
    "url": "CoreAPI.html",
    "revision": "de3330180cef888389982471830c2259"
  },
  {
    "url": "DebuggingNetwork.html",
    "revision": "9241679a194e5606c8b0abe3e88c79a1"
  },
  {
    "url": "EventList.html",
    "revision": "e0c5234ca8d31a44647660ce85e5e144"
  },
  {
    "url": "Events.html",
    "revision": "13fe6c3bd403251b319970c76f30c01b"
  },
  {
    "url": "Evolution.html",
    "revision": "0ccd7ffd364481527be580433d856b07"
  },
  {
    "url": "index.html",
    "revision": "9b55f2d738fbdc5870345899bd7134d8"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "a0cca66cc048b2fb7fb2aa4cfdb756e8"
  },
  {
    "url": "mcl/index.html",
    "revision": "1e5e7a178e4b5afbd1e6e04ecd7fa6c7"
  },
  {
    "url": "mcl/Plugin.html",
    "revision": "1f8f797392674baaec949b30ffc73591"
  },
  {
    "url": "mcl/Script.html",
    "revision": "8d9d230ed8edc201def9228cf0978789"
  },
  {
    "url": "Messages.html",
    "revision": "fc4ab03133af773d1b29647fb8c58761"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "bb186d36701ff505b994f2cf7ab8260f"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "1fbd38df2f85090450c45f8622bae7a9"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "d5bc26a691e233eaaae3ddd3faaef414"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "2815e0ff4e12bed6c815d83ad2a05ada"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "b09c56d2f44713eb78ab8dc9008bcb12"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "113747dcfbf2ec11cd5f62c9849faa06"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "8f0786c071d22e7954152c90379f3f54"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "e53ab7c2c845b3fef668538971b2f0bf"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "174fed0aca8c14417cb0e645cc2f1722"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "4d7ab5f20092ba71239eeef3d4ff0124"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "99af57bf8707e053594a2d51fdf9a308"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "e5de5e47515117a28a1447653d505a3b"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "184a9d79a11c58497e1a57a89773213d"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "47c98a666ba4f8bbd1e0cd146bba37a7"
  },
  {
    "url": "Preparations.html",
    "revision": "5a9ebbed2c51990a087547e44112eac2"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "6a1c469fc439aa90288d50d1b1ef08b5"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "6c147cfdc60e3b620ffd4496aa302206"
  },
  {
    "url": "UserManual.html",
    "revision": "22234cfa5bfc50e103496a459c3c3fe8"
  },
  {
    "url": "UsingSnapshots.html",
    "revision": "1535a6b4d0ef96a0ad3b15dc603643ed"
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
