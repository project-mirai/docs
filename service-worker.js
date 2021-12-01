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
    "revision": "3d53d701bf40da673fc076091ac86b26"
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
    "url": "assets/js/16.fc86a359.js",
    "revision": "cfa1ab13d5629d3ef43192a4be7a8438"
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
    "url": "assets/js/app.9ec4a08b.js",
    "revision": "eaab04d06f0652abcb8ef904d6b355a5"
  },
  {
    "url": "Bots.html",
    "revision": "8964d4078fea23ab0f8518ad71759c63"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "0bbe806231bfabe3c9b28f4b9ab6c34d"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "4cdbc6b908a0a40927cec71fb491db20"
  },
  {
    "url": "console/Appendix.html",
    "revision": "57ca7cdee1697d4fea7d8fb826ee3446"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "59cd7645696eb9cfabf75979a36ed00c"
  },
  {
    "url": "console/Commands.html",
    "revision": "cef3e14d6186267cb20a815933964baa"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "c0255672d2fe82c4f95d57e0f74f6d49"
  },
  {
    "url": "console/Contributing.html",
    "revision": "a63b9b1ed03e8d0290a1505b5f9f4ebc"
  },
  {
    "url": "console/Extensions.html",
    "revision": "832b77bf517c0c4bd0eacf24d04139f5"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "67a160fe14a2f5571de3c4ad1999555a"
  },
  {
    "url": "console/index.html",
    "revision": "cb7828ea793e983e89e96969bd19aa7c"
  },
  {
    "url": "console/Permissions.html",
    "revision": "900f486ce0b9c47ec5f0a7c9f680963d"
  },
  {
    "url": "console/PluginData.html",
    "revision": "4c4ed147cd493b3709f2584f3fe19529"
  },
  {
    "url": "console/Plugins.html",
    "revision": "dbc35c1777752dc398c1c4a6e8695d1e"
  },
  {
    "url": "console/QA.html",
    "revision": "15b73423cc792f33ddda4c59855afade"
  },
  {
    "url": "console/Run.html",
    "revision": "50b5e6703ef959d51aedc2d4a2b37b56"
  },
  {
    "url": "Contacts.html",
    "revision": "f024a46bc1b26186aeb59754bd829c71"
  },
  {
    "url": "CoreAPI.html",
    "revision": "406f4a9f7566e5130dcf8603394bdadb"
  },
  {
    "url": "DebuggingNetwork.html",
    "revision": "739cf030be262d02dfe6c9c714e9e240"
  },
  {
    "url": "EventList.html",
    "revision": "e8273b2622afd34cde1d155dd3ec2e27"
  },
  {
    "url": "Events.html",
    "revision": "75b490f28f0b55902d67f957465c106d"
  },
  {
    "url": "Evolution.html",
    "revision": "c25cddd7224d720de18c1cd520da929f"
  },
  {
    "url": "index.html",
    "revision": "da99dbe3e86565de100db655bd61452c"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "619c93e62e480a7f399be2a66c77bc2b"
  },
  {
    "url": "mcl/index.html",
    "revision": "5800bf6fa132d4063e5da0b00b08eaad"
  },
  {
    "url": "mcl/Plugin.html",
    "revision": "6295234aed4f92603d5e28c151d51e4f"
  },
  {
    "url": "mcl/Script.html",
    "revision": "4111eb2951cac96bd3c57e9c82096143"
  },
  {
    "url": "Messages.html",
    "revision": "3f7f83144d28f6ccca8794c108fc23c4"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "98dcd2a1114fce66f8ac3d41b536880d"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "843036c8f07ca467e0ce32385753a6b9"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "25db6e7c5983f6a29b223d95b2eaa3ca"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "9ac0ce00a2c50ceba4c851d70b318183"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "46d3ea09161e2512a90f97f7f552b507"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "a3f1a1519a359fefde954e6b3ec52971"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "fc9cd5bda01f7a8c732ada072c5a95ba"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "6dad5c8840f2f4871edf33087a4c17f8"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "67956169b39acc37ebfdb887865c0e67"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "a5a9ffe6bd6b82bedb56d92b2e673170"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "40834db1f6e1769b086cc40c54acf1be"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "7cc316775a8282d1eee85dbf0e6b64fc"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "39d57669352824e23756d6d302a8a43b"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "dedc1be39c3c64b87a50caa1153bf0ed"
  },
  {
    "url": "Preparations.html",
    "revision": "175b3adc152c2263eb398029721b5e3f"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "6573dbbe29c1c4b125661ef812e528f8"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "125525aa41995c46b0d22fb8693656c6"
  },
  {
    "url": "UserManual.html",
    "revision": "021560ff378b2662e8165e9b82b89f81"
  },
  {
    "url": "UsingSnapshots.html",
    "revision": "9d4b32793364c5b1e4343543dcca288b"
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
