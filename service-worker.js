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
    "revision": "f11f8198713455d609bdae95e1d6c21c"
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
    "url": "assets/js/10.4270945d.js",
    "revision": "2c06f6039879e54fef647a2dcf35f144"
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
    "url": "assets/js/22.d7cea073.js",
    "revision": "280d3f09c00d9d099cdedb4d8c3ee9cc"
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
    "url": "assets/js/9.bee4da1d.js",
    "revision": "6f031717ef1d36699bd6b282b90cc0ef"
  },
  {
    "url": "assets/js/app.832a9c1d.js",
    "revision": "af78b82d8e629f2751aa4ed0749e581e"
  },
  {
    "url": "Bots.html",
    "revision": "c1db2ff8fcfa7cb7d6be310974b24f19"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "cc074ca78b6158853a4296fda054af59"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "542055fac2cd2bb1380c14fcee2862c5"
  },
  {
    "url": "console/Appendix.html",
    "revision": "20eab3119f925ca6fded4c381aa5be50"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "1f5ac92a61b76d6bbd74e2415025aa49"
  },
  {
    "url": "console/Commands.html",
    "revision": "3752d300311da0a4f18b15a4eeb8c707"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "fecdf535f2ba1738a40ab724ec58d929"
  },
  {
    "url": "console/Contributing.html",
    "revision": "2f79d0dd6959898070e9c9dd07e054a4"
  },
  {
    "url": "console/Extensions.html",
    "revision": "6a9510113b1e2dc18cee661b50282950"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "31a92c2e2284c2771fc0311d59c0b9e6"
  },
  {
    "url": "console/index.html",
    "revision": "f044ee84fa109c66361608298a7776b1"
  },
  {
    "url": "console/Permissions.html",
    "revision": "6b2fd06d4c341a4f05e4610e7b6683a4"
  },
  {
    "url": "console/PluginData.html",
    "revision": "6b132e8e5a2c2481c02e28261bbfe70d"
  },
  {
    "url": "console/Plugins.html",
    "revision": "f796aa3800d6b355261315fba0e77e25"
  },
  {
    "url": "console/QA.html",
    "revision": "bfc3ec66db8526faff72811034fb1880"
  },
  {
    "url": "console/Run.html",
    "revision": "a7383510e9a4242ae80bd516277716d7"
  },
  {
    "url": "Contacts.html",
    "revision": "cdbe90ab48c4a6c098c30ed7046ad1ad"
  },
  {
    "url": "CoreAPI.html",
    "revision": "c1e2520650399062345880660a366255"
  },
  {
    "url": "DebuggingNetwork.html",
    "revision": "57e738c701988b35510b9cf388cc45ee"
  },
  {
    "url": "EventList.html",
    "revision": "89ad7c5cb6de0b37fa86e4ccdab21098"
  },
  {
    "url": "Events.html",
    "revision": "05f1e58347b307346d036dccbd063f29"
  },
  {
    "url": "Evolution.html",
    "revision": "971bb5bd3e8a222d37e6f8892ceab078"
  },
  {
    "url": "index.html",
    "revision": "39f9f0ab84e27ac94c1d1455e7559dda"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "779e56275a4c09c21b565978204625c6"
  },
  {
    "url": "mcl/index.html",
    "revision": "c250483fd5db3ee5591799193675836c"
  },
  {
    "url": "mcl/Plugin.html",
    "revision": "eabf86869412493543d2ad8a96fe0565"
  },
  {
    "url": "mcl/Script.html",
    "revision": "cc56237c551b4f17b7bc6d2fead0b45e"
  },
  {
    "url": "Messages.html",
    "revision": "107d139a1cf3fbb9ae01b5c2500d7759"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "657372d72f6d6bdee33be850f168fca8"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "b4e7b1020240b76a15d8500de6884a2c"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "6e2985e42119d2f213b1d4e9b32ce588"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "2bc3ea793d1b18b7c8e8359c4ddc7a4f"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "5c62d45593692ec07e3195a0c79702fe"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "89262928ad6a6426ec019983c5472475"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "12ad7bc556270cad2f1c21b262da56ac"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "a3645c3fc653f3d346bbabb394e3c0c4"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "e3f310b38a06db9d7ac174715c6e32c0"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "8608f1dcdf39050979b9c18cf8e90489"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "2449942c036020e7be1aa0b21659cf78"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "2fd8ef98044c62cead26f5ba964c07dd"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "31643ef7482be50a7de42d813d0737e8"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "2fafe0353e1fae1541765b63d6c56046"
  },
  {
    "url": "Preparations.html",
    "revision": "9e894b7daa36f745fb3e4cb423c119ba"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "413859b6d828f68ea6a505bfea11214e"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "f296e9a5866953a3c04e37fce2346fd4"
  },
  {
    "url": "UserManual.html",
    "revision": "9190092c9dc770b61d77c97063c44a5c"
  },
  {
    "url": "UsingSnapshots.html",
    "revision": "a7881aa5c4217e3fb6fc4e805b401711"
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
