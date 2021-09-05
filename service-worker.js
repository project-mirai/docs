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
    "revision": "1c22fdb78ff37baf60209b5515d761dd"
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
    "url": "assets/js/app.2bdb0a88.js",
    "revision": "b5f2d690fd2983a409c9cfd14c7551bb"
  },
  {
    "url": "Bots.html",
    "revision": "2b2e40326d10b4baea9f0ac30b343a4b"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "906feb90fa72ac2d038ccf9cc7b5c994"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "45a3b584d8a95449b24f0467dd6a8c8b"
  },
  {
    "url": "console/Appendix.html",
    "revision": "5fd85366b2da81420e56a74aac4627d4"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "f4bd50eab7e6f8346bb0d25904708568"
  },
  {
    "url": "console/Commands.html",
    "revision": "757c87be9d02154a3085e8cac317eefb"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "971f8f2abafa9408f4a25a9d87e099c4"
  },
  {
    "url": "console/Contributing.html",
    "revision": "e048566b7590807443e27f73bc492e42"
  },
  {
    "url": "console/Extensions.html",
    "revision": "31fd11099adee58ae55240fab26e0fd3"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "f24cff1403f0028049fd59abfa7001b1"
  },
  {
    "url": "console/index.html",
    "revision": "7850d442a9e88e545d507f4b67e99b95"
  },
  {
    "url": "console/Permissions.html",
    "revision": "7eaf769109008cbf9a2404fb42a5c594"
  },
  {
    "url": "console/PluginData.html",
    "revision": "f4e1a97aa34391d11e90cb7cafa4e164"
  },
  {
    "url": "console/Plugins.html",
    "revision": "05b63eccdb31eb1cb832781d644d2474"
  },
  {
    "url": "console/QA.html",
    "revision": "c0ec1525c11e93e2f155e57ac506793c"
  },
  {
    "url": "console/Run.html",
    "revision": "347182150c95ccd7ec4c834a4daec98e"
  },
  {
    "url": "Contacts.html",
    "revision": "b53398f1ab74762979d3be343c1462cf"
  },
  {
    "url": "CoreAPI.html",
    "revision": "04f64a527f753bc009a540ab26478b39"
  },
  {
    "url": "DebuggingNetwork.html",
    "revision": "3daa042687401ce3c90360c951144328"
  },
  {
    "url": "EventList.html",
    "revision": "7301c3c5bef18fc52d71cdf6a587ebc1"
  },
  {
    "url": "Events.html",
    "revision": "7494fa88c3b52c11bdc24752a1c86ea0"
  },
  {
    "url": "Evolution.html",
    "revision": "9e2ee0c69416b2b4de004630bc405160"
  },
  {
    "url": "index.html",
    "revision": "f818ac14a08cc24cc3e87809fd576220"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "a26019891aea4ef39af8ec707355bc55"
  },
  {
    "url": "mcl/index.html",
    "revision": "ced6d25bc7e384d65cbcfe554d3b6548"
  },
  {
    "url": "mcl/Plugin.html",
    "revision": "e1caa449ed1a15fb473b4c03d6790ad8"
  },
  {
    "url": "mcl/Script.html",
    "revision": "e85567dc57b2e1d91c55cc494cba4e00"
  },
  {
    "url": "Messages.html",
    "revision": "68c28720ab1ce4733676d228bf039948"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "e3fa4f12d4f0beb9eef8239c868b7348"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "4960f01055c83448d2738763b612d0ea"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "3970b4eb35961e6b05b71bf864c3007b"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "247cf173f2ec2397e9d3756930cf5047"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "14e80c0514a899f5a275be8819a99bf7"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "e2d5aefc60aa1d885e4e05d89c8962bf"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "b3342d55ec8ba0872b506c29a42c1364"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "b0cd512762b4189d52ae3e0d974215cf"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "f1b13a94b7bc12c3719262d98be1f7ae"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "fbf21a35c73cf55ce8de8aa8de43d850"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "775ca00619a37872d3197405327f399a"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "ca588c2a0f6f7cd8a8deb7903df7ba47"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "858054e0008e267a7e9395dc61e2de64"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "6ee025bb54881cbeb69498d22afb63fc"
  },
  {
    "url": "Preparations.html",
    "revision": "77a1f26f2f59874cba2837709d5795e3"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "6219e7d2baf97917e331d2e51f1fbc29"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "d6f99a9cdd9ab050da8a5e7d10184495"
  },
  {
    "url": "UserManual.html",
    "revision": "ceb22b9c81a7b8bc5b66594b8562024b"
  },
  {
    "url": "UsingSnapshots.html",
    "revision": "95b97cc27de97beb3809cb1fe4ac388c"
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
