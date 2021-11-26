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
    "revision": "a096aa48fee900119135fdcbe8f9f4d4"
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
    "url": "assets/js/22.8f766569.js",
    "revision": "61fb8f09ac3ab1a576d3f9d829a1a198"
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
    "url": "assets/js/app.7d9351a2.js",
    "revision": "a46e0d45c0d52774c03cac9f978c95a9"
  },
  {
    "url": "Bots.html",
    "revision": "e2d45c729363f127e823d3c7fb79c95d"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "8c909200ef3efb9bc8f6b1c6cab539c8"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "1e5b920791dc7324d5c27e7875e428e1"
  },
  {
    "url": "console/Appendix.html",
    "revision": "040ec0dc5488e8f140c90ccad0774f9a"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "41f6bbb32843643acab55a1ebe989040"
  },
  {
    "url": "console/Commands.html",
    "revision": "093e03f3311207fd1b9450f3a5066ede"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "71468a4a99aa13216659bf4d2d4b7dfd"
  },
  {
    "url": "console/Contributing.html",
    "revision": "45e7916860823111564b8da1d13074b2"
  },
  {
    "url": "console/Extensions.html",
    "revision": "ec88c4e434b5508434bc1d797e9911e8"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "5912c27d71547c67cc9726fbb6b229f2"
  },
  {
    "url": "console/index.html",
    "revision": "00eeece1f6d5f480ff2132a9fd9a7227"
  },
  {
    "url": "console/Permissions.html",
    "revision": "669b7a53e04dcbce00f290fb3c6051d6"
  },
  {
    "url": "console/PluginData.html",
    "revision": "51e7518202af69b5152a7c4cb20f1e16"
  },
  {
    "url": "console/Plugins.html",
    "revision": "76b6b2072095bd1935e501c1dc43467f"
  },
  {
    "url": "console/QA.html",
    "revision": "b3d2603cf7b3c14ea963dbc91d5018a5"
  },
  {
    "url": "console/Run.html",
    "revision": "deea27fdc8fc5d3398f76cf587eb4a08"
  },
  {
    "url": "Contacts.html",
    "revision": "7a6cce90c69795e21ffe07276c432e53"
  },
  {
    "url": "CoreAPI.html",
    "revision": "f652975ae9cf9592a0a80e33484f3897"
  },
  {
    "url": "DebuggingNetwork.html",
    "revision": "f05dd85bacd6d565c727b82b8c3cbb3d"
  },
  {
    "url": "EventList.html",
    "revision": "ae75027189b1089f0e00e789a4db78e0"
  },
  {
    "url": "Events.html",
    "revision": "5c10e147767fd85d7a768aa3c2aa0bdd"
  },
  {
    "url": "Evolution.html",
    "revision": "86907bbd4fbbdeb7133120a7f75ba58b"
  },
  {
    "url": "index.html",
    "revision": "a5c4c93a84b56a54b0ea459cc1050234"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "f1c1b95edb74f702ded968f84345934a"
  },
  {
    "url": "mcl/index.html",
    "revision": "9557a68dc6f46535ea57f9a12daf11c4"
  },
  {
    "url": "mcl/Plugin.html",
    "revision": "cef1e6726547c1a878536d0d5fa2cd60"
  },
  {
    "url": "mcl/Script.html",
    "revision": "5ba1620644f5cb71d70c7130475eb5b9"
  },
  {
    "url": "Messages.html",
    "revision": "d38815e729974ceb815d75be7b0895b6"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "c369553fe696c6180fb45565b9c21fdd"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "c9c54fded749ccbd415e1fae60c6e7a1"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "55bd228a5788c684bcdd82878069e4cf"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "678ad5af729b4b90e50c786755771e26"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "b49ed0a48746810fe531af83d3981995"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "56a8a99253546a77a947d52a6bd62e54"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "4eb52baae800eb60710d52bcd7c28bba"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "695f500dcf4cbe827dee88409c639f85"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "968880209fa7c09db11b35bd086cb3bd"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "c8700ec1b817b8c0823404d9097e0b68"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "89c338c1bb835be8423de67cc2e46984"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "fac46918e39b1fa1b287d2e5a87972c8"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "6bd28d436d737a228af65c6bf33bfe1c"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "cd160e7391eb02de4eba4586f30105e9"
  },
  {
    "url": "Preparations.html",
    "revision": "6a7d2b990ee9ee36d2d570e1e8234f77"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "ca0722952ef129568b149d88916c0854"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "1fc0a5a45e24c48075e7ffaae8f91878"
  },
  {
    "url": "UserManual.html",
    "revision": "bc7875c609d957e6c0519d65a459f2e3"
  },
  {
    "url": "UsingSnapshots.html",
    "revision": "b56b2d5ff76dc2058d88c7317209bb0b"
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
