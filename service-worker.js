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
    "revision": "c4e1e46aac1339b9d5076c122199e9ee"
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
    "url": "assets/js/11.8f15cece.js",
    "revision": "5e9316359065ce2668d682509a5ba494"
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
    "url": "assets/js/app.c891e648.js",
    "revision": "93b54e8dc79a8d43819796d7e0eb59f8"
  },
  {
    "url": "Bots.html",
    "revision": "8695b753f6cab08a688adc44e637d65d"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "62c4bd46e7b26814cf8e28c4b7801dc3"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "47344f6edcfa23bebac6e1e846c6c217"
  },
  {
    "url": "console/Appendix.html",
    "revision": "07141229a4fb742078ab2e97573bb2d7"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "1e6de78989c5517d7c17f9387c02ffd4"
  },
  {
    "url": "console/Commands.html",
    "revision": "c6f3fdc01ea8db13974d6d012cc8aa11"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "d26996674cab9b76cd89081d5a635808"
  },
  {
    "url": "console/Contributing.html",
    "revision": "15e2a72b1a69aaf89c7af1ce79c90e63"
  },
  {
    "url": "console/Extensions.html",
    "revision": "f31fe032b9e258bd5db17f9e87802f88"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "b5db8a1fd052db6fabb922ee94a66d5b"
  },
  {
    "url": "console/index.html",
    "revision": "8b3f28eff2ddf39adf0cd15ffe97024d"
  },
  {
    "url": "console/Permissions.html",
    "revision": "c0814e7dd5d5d3db3b6507344ec35016"
  },
  {
    "url": "console/PluginData.html",
    "revision": "6c05dabfc8c408aa35bd39702e39710b"
  },
  {
    "url": "console/Plugins.html",
    "revision": "865dff8707450dc332260f27e151a1e6"
  },
  {
    "url": "console/QA.html",
    "revision": "0db0d5bd7787a6f8dcf4827a345b3acf"
  },
  {
    "url": "console/Run.html",
    "revision": "7476543083dcb7adea0717479c0eff65"
  },
  {
    "url": "Contacts.html",
    "revision": "381c321fa7dc04a6ed2d59c948128892"
  },
  {
    "url": "CoreAPI.html",
    "revision": "2ad9ab715b4e1e2d361faa282b0e4a6c"
  },
  {
    "url": "DebuggingNetwork.html",
    "revision": "439cb72e610009779b0aa0056ad74360"
  },
  {
    "url": "EventList.html",
    "revision": "c7e5c8eb6ca460491419ada7d5c562d4"
  },
  {
    "url": "Events.html",
    "revision": "ac63ca8f7f6dc71d4bf559a09bb0d361"
  },
  {
    "url": "Evolution.html",
    "revision": "d69c37c884c0c7fbaf99852a4d828c8d"
  },
  {
    "url": "index.html",
    "revision": "d830ca7b698053cc2e55ac204ecc7689"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "383e16d19356e19265c376c1ed858e89"
  },
  {
    "url": "mcl/index.html",
    "revision": "fe36dbad0118c5738b4c5228e3d94d97"
  },
  {
    "url": "mcl/Plugin.html",
    "revision": "aa55e2290f49467a2a9c13049b172425"
  },
  {
    "url": "mcl/Script.html",
    "revision": "8a291a3a089dfefaa29bead43f4d7924"
  },
  {
    "url": "Messages.html",
    "revision": "a07ab6e1b4c90573b679c4766c62ba4a"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "d375c4c6329e7c8bae1cae125e6a018a"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "da32dd444f7af8ee663042cbdbefd9bc"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "90a0ff3a07055d011cef664a1a301acf"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "ae3c48ad5be3effc52995985a907b371"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "7f19a6bb62ca6d1909e0fecc9bdcd1d9"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "108ad53ed1c0321a9b0635f275c0733f"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "cd8b7de1a3800c3329721f1c1648c44f"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "02d597b49f46da40ddc402cc0392b9ca"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "551670eb61c250529c36528de95d0dcd"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "0cdd544fc8884748c3fae056a070b745"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "e4cbd73078fc9be0a89275524e775e12"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "3b65bf32c90b9560aac1e2b5fda3c344"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "41a34a76982a0e2683eb400cc70f67b3"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "51266fb4a49e561511e20327580c9198"
  },
  {
    "url": "Preparations.html",
    "revision": "30d801d44f8f67a5d35098e2e2414234"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "a130f09c02d84aff422832b7cf5996e9"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "14fd96406650c93af02726d03e94b7b0"
  },
  {
    "url": "UserManual.html",
    "revision": "0b17c6af62990b8ec83ba06236e5f85d"
  },
  {
    "url": "UsingSnapshots.html",
    "revision": "d710924de083984b9d0504662181dcc9"
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
