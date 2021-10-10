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
    "revision": "64b20794f487741b270c68293be8db3b"
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
    "url": "assets/js/22.2e93621a.js",
    "revision": "2b0092f6797dff5dcb92df5b8eb16928"
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
    "url": "assets/js/app.6dd911e8.js",
    "revision": "82042e398a360f93accef6ed93f3856a"
  },
  {
    "url": "Bots.html",
    "revision": "528ce767793ee2a0a5bb41efc2008fb0"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "48ccc0bf1b083b30cbcd46d8563cb0fd"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "1164ee68a22f1b8aa63de06df4cbc74c"
  },
  {
    "url": "console/Appendix.html",
    "revision": "83a5d209fc35d058a049cae14318e287"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "e6f6c0d76cd7570909f544a2ff3bca56"
  },
  {
    "url": "console/Commands.html",
    "revision": "288d8149edd863cbfbdebf24178e8c90"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "89d64f0d0635f3430e11e3ae750e6ca0"
  },
  {
    "url": "console/Contributing.html",
    "revision": "85305d3ab504368d799a64f67816c974"
  },
  {
    "url": "console/Extensions.html",
    "revision": "fccfbe0ad1d22b6291c567da5f59c1c5"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "4e5375b95cc7c49caeb84f16f99c78e7"
  },
  {
    "url": "console/index.html",
    "revision": "a83f13038c27645e4039e56205699137"
  },
  {
    "url": "console/Permissions.html",
    "revision": "b23aafccb05cc92f748c2d7244573829"
  },
  {
    "url": "console/PluginData.html",
    "revision": "97d49b6e0ae0c82498d9d735babc92a6"
  },
  {
    "url": "console/Plugins.html",
    "revision": "cb93694a90221ef931108a62e5c928e0"
  },
  {
    "url": "console/QA.html",
    "revision": "f45e70cf35371fee858bf91b05a6982e"
  },
  {
    "url": "console/Run.html",
    "revision": "99511729c548f9852115f31c0ad1b139"
  },
  {
    "url": "Contacts.html",
    "revision": "6cd4c195d6704df114b1eae14472be61"
  },
  {
    "url": "CoreAPI.html",
    "revision": "328e029f20292e31c48dd8e82e6990ff"
  },
  {
    "url": "DebuggingNetwork.html",
    "revision": "41f993aede3d1e77e8945b2cdbf054b7"
  },
  {
    "url": "EventList.html",
    "revision": "c3db7fd51b85822d1100078b96d09068"
  },
  {
    "url": "Events.html",
    "revision": "300f4a306fc9a455c84236a75bf8852d"
  },
  {
    "url": "Evolution.html",
    "revision": "f47cdab68341f4f7bb41961d86add935"
  },
  {
    "url": "index.html",
    "revision": "31e2ad8ea4ebfb128f7ba2cf390865dc"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "dfc6f825da985a629a76054866e3f9c0"
  },
  {
    "url": "mcl/index.html",
    "revision": "0c75c3247358502ebd51d312256830ad"
  },
  {
    "url": "mcl/Plugin.html",
    "revision": "c17acfb4739d0867c96bd4a3a11488b3"
  },
  {
    "url": "mcl/Script.html",
    "revision": "63a60af3170ce0e046dd865b1c99b4a4"
  },
  {
    "url": "Messages.html",
    "revision": "61b24873662326858573b1646cce6c3f"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "d2fa1bd95882e4f526ce6b11271a950f"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "1b23907cc85964b8c4860b6a9c7dd31d"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "bc2d8e5044bf4b38ef6e9eb8500f521b"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "ff20bda878508d1f074754208d00158d"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "08c75f3082017e2ea03b3eb3897f3c48"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "d52cdbe7c4d06ffebe0aa615549561ed"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "f9eab5b147b22c9a5d98b08c594be5b1"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "005e8e6ae157fb8dad06e73001ef5fdc"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "75095e56f4d6807fa11f292d698212b0"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "7db27d1f844945bf47e8280191c79c74"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "4b3bfce2015624f272eca707b6b36198"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "f1037096223becccd95c6256bc26919c"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "78f720bc40c5f18f9c4f07411e225e7e"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "2a4ce32c8d3c8a02d7985d5bdb5062ab"
  },
  {
    "url": "Preparations.html",
    "revision": "66b0b97689d5e14a04b0611c71cfdcc8"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "0f74e5f8df90fcfb7345395f8346b7d8"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "2da1184fbf4cd7682302d44c788ed046"
  },
  {
    "url": "UserManual.html",
    "revision": "e42909dcd64cbc5946745e3fb7b45630"
  },
  {
    "url": "UsingSnapshots.html",
    "revision": "a09fba3a0994e802313ffeac3f4df43f"
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
