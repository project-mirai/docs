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
    "revision": "02f2d4ac14b23c2b8395c108de7ac9d1"
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
    "url": "assets/js/11.e8f3daec.js",
    "revision": "c9f619b1919a80ae3e9ec1d6bb21652f"
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
    "url": "assets/js/22.51ac2ec6.js",
    "revision": "4ee7688c52ded697b4421500775715d9"
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
    "url": "assets/js/app.a94029a5.js",
    "revision": "36bdf4bf12e61f79f65128c3dd13e2fd"
  },
  {
    "url": "Bots.html",
    "revision": "5b62c3d96aa5a5360ae48c50b8986f68"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "c607caedcdad80688307da6a56cdd933"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "8ed25f23c70fdcafe574880520a22129"
  },
  {
    "url": "console/Appendix.html",
    "revision": "d136e0d237e93705402bbf7c95939f75"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "434f323cc944425bda441ba23d4d7a23"
  },
  {
    "url": "console/Commands.html",
    "revision": "fe94a111d4e27d13cd8771169bc7ee86"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "dee4b63cd29de079b5fc2fdbf1687b32"
  },
  {
    "url": "console/Contributing.html",
    "revision": "0f1ae70f1ed2b428d5e9affdf956f562"
  },
  {
    "url": "console/Extensions.html",
    "revision": "ec640a035749ce43f36c70ea1587b74a"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "67f226af859576c70e8768fb0f70fbc0"
  },
  {
    "url": "console/index.html",
    "revision": "a1489afbea303f115942cd32791fbf14"
  },
  {
    "url": "console/Permissions.html",
    "revision": "8dea5748100686b20d1ce3521162e330"
  },
  {
    "url": "console/PluginData.html",
    "revision": "0f2817ccf73cde8ab9302d24faa7b924"
  },
  {
    "url": "console/Plugins.html",
    "revision": "e6da357590a2630adbfeced8ff32784c"
  },
  {
    "url": "console/QA.html",
    "revision": "ca8b854df0244444a8d3e55d734a3f89"
  },
  {
    "url": "console/Run.html",
    "revision": "cff7275c6134e2609025df639d5e84c0"
  },
  {
    "url": "Contacts.html",
    "revision": "5017454e1c0af3ff9136892f6cb45e87"
  },
  {
    "url": "CoreAPI.html",
    "revision": "73933ee57bb3aef59f5888490e0a8a15"
  },
  {
    "url": "DebuggingNetwork.html",
    "revision": "5bb1babcb82742e54052a2495750c4ee"
  },
  {
    "url": "EventList.html",
    "revision": "079b89356b66c8208142cd108f0a3824"
  },
  {
    "url": "Events.html",
    "revision": "564a4e60ef174285e9fa782b5a7961d6"
  },
  {
    "url": "Evolution.html",
    "revision": "a6fbea9a5ce6bd68b6491a2beaf5a8f0"
  },
  {
    "url": "index.html",
    "revision": "515e4914e688b61e37a0e1d100c92e41"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "952f6302e78de446d721e17e576e7517"
  },
  {
    "url": "mcl/index.html",
    "revision": "228fa04cc08a8f73897e36dd24828b91"
  },
  {
    "url": "mcl/Plugin.html",
    "revision": "b7bf772844923ceb0f516800be155977"
  },
  {
    "url": "mcl/Script.html",
    "revision": "2f61167347ca57a6feb3c02c097c00f9"
  },
  {
    "url": "Messages.html",
    "revision": "7886e10997f1123d9f0b1c658d976232"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "64fb6e403cbf3f6b342e430d85de1496"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "c168e0e04363982fe1977cdfe7890fc3"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "4b9aa94f45c9b3aea5cd5821ce06af70"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "f282c84037f1ac14f382ac95a4ca3dbe"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "5572931ad8e7cc7ea7420aa5441c6809"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "2082bc2aa603819a467ee6d1e87970b7"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "aa39a1af287ae39b0a4fd796dcc5214a"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "d17e9cfd5edba176e5c524d885690fe4"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "aa2ba8085ad7e72e6aae70f04d89af55"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "d172ab839479c939448581eea05c10c9"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "c672f4fe81af529a9d4d4d0d15e8f871"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "3b97b4c9e55a12c5b5b240a4dca621f5"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "ebcad3edb2346c6f24256262f925d1b8"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "0168d3398317e3267594668a045a0a92"
  },
  {
    "url": "Preparations.html",
    "revision": "efeb47682128b335b3dbf0aa1b689d24"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "abe893f49e7772d75f262cd45d761ff3"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "336842a20ae346c1318d3691361802a0"
  },
  {
    "url": "UserManual.html",
    "revision": "f4d6387de25207e21777022132f74fe2"
  },
  {
    "url": "UsingSnapshots.html",
    "revision": "7d556c964a61f2bfb7ff8b15f2d68de9"
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
