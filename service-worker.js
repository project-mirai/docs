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
    "revision": "02575d6d41c3a8a4529268b0b927b361"
  },
  {
    "url": "assets/css/0.styles.0e64e68b.css",
    "revision": "07073dfb5e846838113ccd0a63a3a117"
  },
  {
    "url": "assets/img/img10.08dfeead.png",
    "revision": "08dfeead3acef92c8e17923bac6c158d"
  },
  {
    "url": "assets/img/img11.b63b43f3.png",
    "revision": "b63b43f3d45cfa697d3ea2a803030460"
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
    "url": "assets/img/img7.a38a4bf7.png",
    "revision": "a38a4bf72208b16bb6fd2862b0393e5c"
  },
  {
    "url": "assets/img/img8.ed544e74.png",
    "revision": "ed544e7480f907c8aa62c946a74d6121"
  },
  {
    "url": "assets/img/img9.d0cfd554.png",
    "revision": "d0cfd55403c83d085ce7e98e94b9c798"
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
    "url": "assets/js/10.6c61c21c.js",
    "revision": "382fcbc6922e6d7104958312eef6d321"
  },
  {
    "url": "assets/js/11.9ef0780b.js",
    "revision": "ca8f2152d822f727c9c65fb1bab5821b"
  },
  {
    "url": "assets/js/12.b9058b68.js",
    "revision": "4deec8712470d8cac22dd9bc04760de9"
  },
  {
    "url": "assets/js/13.53317bba.js",
    "revision": "5dcc7b165aa65ef0b8a71a4712c84a56"
  },
  {
    "url": "assets/js/14.9bb9d8a0.js",
    "revision": "392888f2cb5bf24b178d912339bedf63"
  },
  {
    "url": "assets/js/15.324b5334.js",
    "revision": "ab7615388d48807a2d847ef9d29a49be"
  },
  {
    "url": "assets/js/16.f01caa1c.js",
    "revision": "0044cb98d47933fcfa339c200232fe4f"
  },
  {
    "url": "assets/js/17.7971991e.js",
    "revision": "de2eef1dd1daa2a5872b86c65a452539"
  },
  {
    "url": "assets/js/18.59faa561.js",
    "revision": "1169bb01ecb8ae560559e082cf3f58fc"
  },
  {
    "url": "assets/js/19.0ad10e8b.js",
    "revision": "a4df1fc526664462e16b03040326ec7e"
  },
  {
    "url": "assets/js/2.265a42b6.js",
    "revision": "64d5ece46a1e798d5a6a6c593b3ebeab"
  },
  {
    "url": "assets/js/20.b5acad73.js",
    "revision": "67403b73b26ce0131f9b556a660e57db"
  },
  {
    "url": "assets/js/21.b2a906d2.js",
    "revision": "807a1366b16a41bf2484035e4b4f233e"
  },
  {
    "url": "assets/js/22.e7e74f4a.js",
    "revision": "00387130de9f46cd4e5ce0efa15d1975"
  },
  {
    "url": "assets/js/23.1cb54675.js",
    "revision": "ede7ed1fda209fe5664099ca4218fda9"
  },
  {
    "url": "assets/js/24.4e225608.js",
    "revision": "a749725657929cda48edb60c507573c4"
  },
  {
    "url": "assets/js/25.f9d33e69.js",
    "revision": "32f8d95b9940012889d3da62dad1b5dd"
  },
  {
    "url": "assets/js/26.2b58add6.js",
    "revision": "06aa20e198cb342abb1a147ad3e552d4"
  },
  {
    "url": "assets/js/27.f1d257a0.js",
    "revision": "abf3233bc7974ee4e07bb60954b7eb86"
  },
  {
    "url": "assets/js/28.4160142f.js",
    "revision": "5bad63c4251abc59502086e35145cc5c"
  },
  {
    "url": "assets/js/29.1251a666.js",
    "revision": "07ba1dd7a45057fa289ee4f755ec6d92"
  },
  {
    "url": "assets/js/3.8cd33e14.js",
    "revision": "fccf295909a2da6348ca1ebe6c857530"
  },
  {
    "url": "assets/js/30.989d9b88.js",
    "revision": "1d290dfabc3bc314085cab7f47f89bbf"
  },
  {
    "url": "assets/js/31.4aad943a.js",
    "revision": "6ac05353c99e231ca257a50e1f5c0916"
  },
  {
    "url": "assets/js/32.caec8d32.js",
    "revision": "c125706391d0465886a0b5f07bb6d094"
  },
  {
    "url": "assets/js/33.f8516ca2.js",
    "revision": "172189c0dcaf3139fb4ce4b1d0ee50cd"
  },
  {
    "url": "assets/js/34.0f2f6fa1.js",
    "revision": "195b1348dc2ec7ba0b7c60da9eca2e6d"
  },
  {
    "url": "assets/js/35.62567bac.js",
    "revision": "399028083cdeb0a914efe6e995d5958f"
  },
  {
    "url": "assets/js/36.f82285f7.js",
    "revision": "09e43514f0980258a56a13d5bbc9a70a"
  },
  {
    "url": "assets/js/37.4ab579c4.js",
    "revision": "4f00cc7fee384ae542de4674b77d1a40"
  },
  {
    "url": "assets/js/38.446a7fa7.js",
    "revision": "1b9f2d931963dae2cf1b34a9dbd78571"
  },
  {
    "url": "assets/js/39.500b709a.js",
    "revision": "a52546e9241e13307a2d3d5e40aa54b1"
  },
  {
    "url": "assets/js/4.b00f486f.js",
    "revision": "ba2f373ff5adf26f9dceaa08c3ff7bb7"
  },
  {
    "url": "assets/js/40.fd7db09c.js",
    "revision": "7c1e990138e942ceccbd1986abc626ce"
  },
  {
    "url": "assets/js/41.742b9da4.js",
    "revision": "8ac2d9b58dcb33a885716d3e782b8ff0"
  },
  {
    "url": "assets/js/42.4c57b3bb.js",
    "revision": "467bb9f9fe169930718dcd3a12651ff3"
  },
  {
    "url": "assets/js/43.4d51860f.js",
    "revision": "7d4a71fcd2b99b14d41dab8405335ed5"
  },
  {
    "url": "assets/js/44.74971151.js",
    "revision": "2d1a056edfe969cc6c2a3069bd467504"
  },
  {
    "url": "assets/js/45.6c5c0768.js",
    "revision": "d32534160619b2f0a4c75dcc7d3a3a88"
  },
  {
    "url": "assets/js/46.05bf810d.js",
    "revision": "ff0ec5a373af9018a631f7e8d48ac3c7"
  },
  {
    "url": "assets/js/47.4e2bbae7.js",
    "revision": "78af5f6cc130fe660a249c93baed8cd5"
  },
  {
    "url": "assets/js/48.a0e0dee4.js",
    "revision": "77d3816abcccb9fe0d18daf4f38a87b9"
  },
  {
    "url": "assets/js/49.005675fe.js",
    "revision": "fdbbfa60259c83fbac2dfbfd70667880"
  },
  {
    "url": "assets/js/5.c6a3f119.js",
    "revision": "2383a080b6a4b37ac483387620584f0f"
  },
  {
    "url": "assets/js/50.7fec143e.js",
    "revision": "badb073461eeaffb89ba904961bfd81e"
  },
  {
    "url": "assets/js/51.82efd1ec.js",
    "revision": "b6942307490faf6f72650b00528c2c91"
  },
  {
    "url": "assets/js/52.067fe05e.js",
    "revision": "36ddfcf818cbb5a13f9ef2ded1c8ab2a"
  },
  {
    "url": "assets/js/53.311757ca.js",
    "revision": "f44e38a1e3c670bb1e724817c9bd1487"
  },
  {
    "url": "assets/js/54.cef9b30e.js",
    "revision": "6e63d4d6a7e97ad6197dbdfe94ade76c"
  },
  {
    "url": "assets/js/55.7c8273da.js",
    "revision": "4032b1c9c79e53515cc01d8daa5d0731"
  },
  {
    "url": "assets/js/56.ddc4e993.js",
    "revision": "3cf958fb579d1aad4cc0f6bc42bae3ab"
  },
  {
    "url": "assets/js/57.76395a74.js",
    "revision": "6a54345d866dbea834975ded850da3f2"
  },
  {
    "url": "assets/js/58.6f9c1822.js",
    "revision": "402570d733a75222ef1deb3094d615c5"
  },
  {
    "url": "assets/js/6.b7c459a1.js",
    "revision": "af3cc1950283852c05fb33f2c3bf3111"
  },
  {
    "url": "assets/js/7.e8484398.js",
    "revision": "0ca50408b1e4f3dd55a56f5d96702411"
  },
  {
    "url": "assets/js/8.1e8ae3bf.js",
    "revision": "27894370f8fbbd99f1697fb384f124b1"
  },
  {
    "url": "assets/js/9.2bfadbf8.js",
    "revision": "ddb7efa8bf9e6beeb77b51bc44481adb"
  },
  {
    "url": "assets/js/app.8806ca2f.js",
    "revision": "d92f4d184fddb3abd2a11cb1843853ad"
  },
  {
    "url": "Bots.html",
    "revision": "3f4fe465a0a704969e7cbb59ab0649d1"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "d3390f23a0ffac66312ca565306d6161"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "d530770ed6c34d9848d624127fb8b06e"
  },
  {
    "url": "console/Appendix.html",
    "revision": "3d2d60fa7ed83bef61369d7b60881240"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "1f0d18ba8c5adb5272eca82ec0632053"
  },
  {
    "url": "console/Commands.html",
    "revision": "7895c9c30d29cd5439fbc9fa2caca348"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "6890ec1892dfd2017ad0336753a23247"
  },
  {
    "url": "console/Contributing.html",
    "revision": "3f854c753d25bfd82668df93f6394775"
  },
  {
    "url": "console/Extensions.html",
    "revision": "72854a49049c4c42709e9629f148c47a"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "f09ae96703ffa62aabc0cae1bacf0145"
  },
  {
    "url": "console/index.html",
    "revision": "1b08832904ff4ae440e2a7ce43b56e60"
  },
  {
    "url": "console/Logging.html",
    "revision": "a963241f5e1d7ca3c1b2bb9de57c588f"
  },
  {
    "url": "console/Permissions.html",
    "revision": "93d8c091e69558fde2327f053d7fde38"
  },
  {
    "url": "console/plugin/JVMPlugin-Appendix.html",
    "revision": "578ad3441588c4ed48af3dde71fd376f"
  },
  {
    "url": "console/plugin/JVMPlugin.html",
    "revision": "1cb40b804ec2bcb3fb6a731eb137f020"
  },
  {
    "url": "console/plugin/Plugins.html",
    "revision": "e2044b3489bf5652f3a0d59f61888619"
  },
  {
    "url": "console/PluginData.html",
    "revision": "30475d7db1cc570c265926be10558241"
  },
  {
    "url": "console/QA.html",
    "revision": "1b17509feb76dfe4c73721bfae5ea782"
  },
  {
    "url": "console/Run.html",
    "revision": "d47f1e588d03d44e1794f76748c0124d"
  },
  {
    "url": "Contacts.html",
    "revision": "569fe8c680cd67731e27d4cd4501020b"
  },
  {
    "url": "CoreAPI.html",
    "revision": "2577540721590d01888f49f31fbb4a7c"
  },
  {
    "url": "DebuggingNetwork.html",
    "revision": "663acc8226e57a5b5870a7d7b2f63187"
  },
  {
    "url": "EventList.html",
    "revision": "88e1e5b2fd1b59176e87ca37c1ed9107"
  },
  {
    "url": "Events.html",
    "revision": "7198d9b0346fa8a1de459df52997f684"
  },
  {
    "url": "Evolution.html",
    "revision": "6aed301b81a8e33c019a055b31f59336"
  },
  {
    "url": "index.html",
    "revision": "aae0a766b947acbdd88cb996e2bd5ba7"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "e5cfe25035b3dc7ebd6a59907c6c89f8"
  },
  {
    "url": "mcl/index.html",
    "revision": "4e54d76b14042d1dd38def3c5ec71bd8"
  },
  {
    "url": "mcl/Module.html",
    "revision": "a33cc140d07cd709c76ac8027ef7d2e1"
  },
  {
    "url": "mcl/Plugin.html",
    "revision": "cf7e07236566a0ca7dabc51f1e1190e2"
  },
  {
    "url": "Messages.html",
    "revision": "1d1f81bd077c12b42854bd3fac76679b"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "cfde19345eed15499ad15aa27692ad0a"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "4b91345617b13bffd36bdc5035a965cf"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "98b1d58a7fd224323150dfeac5b69c11"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "4d69fcef35ae1de8b1514dd6a58cd263"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "3da35cb497bf2fd8d00a639f00c1ec1a"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "fb824682304c31787e2aa7bcaa69baf9"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "cc11a089a55142e41d7e8d2478f58e93"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "51be4a3207e0efe5a53ddb481b346747"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "cf8d850972c9118ba98265dc61f5d227"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "ebf5f58d38b94f234f3c90fcf0aa1cec"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "788adb2b2f5fa440711a417ca65bfacb"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "9cd3087626183f6c3d1abe936c084b6a"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "c73474961ba651dc630a1e43100743e2"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "e365ec99332377378057d36c19036d14"
  },
  {
    "url": "Preparations.html",
    "revision": "3a84330613852d0c4cc76ee90da2e091"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "9a8e0b48e55366f85911dc15f8fcd2a8"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "79168b97d50565bae77bdf085b3a9a0f"
  },
  {
    "url": "UserManual.html",
    "revision": "1fc8f5e9a05e943534f5f6f1babd3785"
  },
  {
    "url": "UsingSnapshots.html",
    "revision": "c9ef9869f95fd54a52509748480c6491"
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
