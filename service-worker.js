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
    "revision": "dac9aef98c7e1d7d53fc10dc710abac5"
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
    "url": "assets/js/app.cb7c7085.js",
    "revision": "2f67dd866fcf19fb8d8ffc59c01332f4"
  },
  {
    "url": "Bots.html",
    "revision": "437c12ba05dbd4ed980fdcafa7fd6683"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "bed92d20e8c2cd729dfe07d84c2de4c7"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "7c7142e5a54090e5548f9de0e5f666f2"
  },
  {
    "url": "console/Appendix.html",
    "revision": "3e2319e9c91506bb689de9626495869b"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "681e335a8a8a5879356d92032edc2d9e"
  },
  {
    "url": "console/Commands.html",
    "revision": "9cd128b981d75f6fa24d82148efd1d83"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "353257074e7108f60eeff95db322b73e"
  },
  {
    "url": "console/Contributing.html",
    "revision": "561361f393f4787e65e534221d93fa51"
  },
  {
    "url": "console/Extensions.html",
    "revision": "c43299f84690a6df87a1164401fd9c83"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "c0f685fceeb00fb68870d6effc453b24"
  },
  {
    "url": "console/index.html",
    "revision": "f6da69e0b1ddeb11dec68f08122e1977"
  },
  {
    "url": "console/Permissions.html",
    "revision": "db74ec8385991c2b9307f3ad668664d5"
  },
  {
    "url": "console/PluginData.html",
    "revision": "5f1357eb07e761107226ef1d946b190a"
  },
  {
    "url": "console/Plugins.html",
    "revision": "0555e0c1b9b863c0721ad94e1771cf84"
  },
  {
    "url": "console/QA.html",
    "revision": "d46dd470f99f3bddb73eaa3110d98521"
  },
  {
    "url": "console/Run.html",
    "revision": "1fdeab541e1a404dd7f4d57d48f1c417"
  },
  {
    "url": "Contacts.html",
    "revision": "03ea8bf4916a26eb43110a94131e6c0f"
  },
  {
    "url": "CoreAPI.html",
    "revision": "5b82ca796c133340df46d93797ccc2de"
  },
  {
    "url": "DebuggingNetwork.html",
    "revision": "bbeff81c1a23d00cbdd3d89913a366e0"
  },
  {
    "url": "EventList.html",
    "revision": "2e1a3d0053a226e8321c8084f5a036bc"
  },
  {
    "url": "Events.html",
    "revision": "f935445df113b39e994715f2a08fdda0"
  },
  {
    "url": "Evolution.html",
    "revision": "e1012d81adb4cfb054a556b6e05cdc08"
  },
  {
    "url": "index.html",
    "revision": "d63ba08b9d728d112e1733c95da76b89"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "ae5bfc3f9855ae9d9d9a27d769e9db0d"
  },
  {
    "url": "mcl/index.html",
    "revision": "485b7142fa0b6d1f31bf3a9d9a6cfc3b"
  },
  {
    "url": "mcl/Plugin.html",
    "revision": "828930482b2f12bf74467a1e1700f9a0"
  },
  {
    "url": "mcl/Script.html",
    "revision": "9292aeb8c2baeeb1107f9231ba56d981"
  },
  {
    "url": "Messages.html",
    "revision": "3584ef247ce0de1b5fbe9193883fe5b3"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "1441bc5bf37168f9ff6dfb85ad8e613a"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "688b713a0b91b9bed0bc745b8b5aab4c"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "6000cd6c7cb727c43dc4e48c48226381"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "279971ac83e80858871a9c45b2c9657f"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "218d1763a101caafd543a01d69f12523"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "ba86d5a956a638ea4bdf04a7de7105b6"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "6474a8f86f37de7fe5f8d6bbc478feb2"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "84e921fb26bf313029e41a000eefe976"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "c0596156c6153d3c9589e47730c0d586"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "bac0056c516906950c6353e8f904d390"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "73bd037d97ddbc2c4fc4692e315c14f6"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "2f4967efab7461e97e6170db1d824661"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "4412fef1ffe1f98063df173ab18e0521"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "22ec48dc508fa5654fd41fce30628287"
  },
  {
    "url": "Preparations.html",
    "revision": "487e7dfd84e0d364dcb9f9d0fd808119"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "d7204f1d86c736fc5d185f4aae19d89c"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "7880b3e4b1aee1299f0a34ccb04a4e84"
  },
  {
    "url": "UserManual.html",
    "revision": "a86ce7622122574dcffb6419de54f545"
  },
  {
    "url": "UsingSnapshots.html",
    "revision": "5e68e213ae4127031c5c6562638d77cf"
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
