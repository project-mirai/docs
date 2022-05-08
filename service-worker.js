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
    "revision": "56f8a061c078c6eaa8ec3a81b798bea2"
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
    "url": "assets/js/14.58fe2572.js",
    "revision": "b133671c747e904fbfa085d325c64c74"
  },
  {
    "url": "assets/js/15.324b5334.js",
    "revision": "ab7615388d48807a2d847ef9d29a49be"
  },
  {
    "url": "assets/js/16.0f5fa17d.js",
    "revision": "ce8e9b6d4709f03afea9a14d73b68ec4"
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
    "url": "assets/js/21.fb2dad42.js",
    "revision": "10b9aceaf802369fc9f057ac5b464d67"
  },
  {
    "url": "assets/js/22.b882bdf8.js",
    "revision": "fe26a576e416d1d5b4e74c85de51d9b3"
  },
  {
    "url": "assets/js/23.396dfaf3.js",
    "revision": "1316e678000aa845f7305ac308cca993"
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
    "url": "assets/js/3.29ccd162.js",
    "revision": "d73b1f91190c7d29bba735c72a360df2"
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
    "url": "assets/js/32.c019804e.js",
    "revision": "6fb5715545d0254f862475d751505bb2"
  },
  {
    "url": "assets/js/33.3e49409c.js",
    "revision": "41c8a4403589733c7a8e5d24f90f6559"
  },
  {
    "url": "assets/js/34.f0eadf88.js",
    "revision": "6ab149a0c842d1b3d1d4bff537590e85"
  },
  {
    "url": "assets/js/35.9c2d964e.js",
    "revision": "3444ac2c31bb80b1a05a76f2b19abb05"
  },
  {
    "url": "assets/js/36.70dedf5c.js",
    "revision": "ccb8b8c9046923907b5251d87cb4f71a"
  },
  {
    "url": "assets/js/37.0b9bc3af.js",
    "revision": "8824bea1a7d73a5d6c7abcc114a8f1bf"
  },
  {
    "url": "assets/js/38.fce86ee4.js",
    "revision": "b03c4ea9a5f09e0f33d56c4b576c356f"
  },
  {
    "url": "assets/js/39.0c0e1bd5.js",
    "revision": "f2bee7e632b4cb650e35ae706fdfd790"
  },
  {
    "url": "assets/js/4.b00f486f.js",
    "revision": "ba2f373ff5adf26f9dceaa08c3ff7bb7"
  },
  {
    "url": "assets/js/40.de805666.js",
    "revision": "b54719c217bf6d957812300c831785fd"
  },
  {
    "url": "assets/js/41.9020bd7d.js",
    "revision": "b7a2502c1c464310fbe1884a879713b3"
  },
  {
    "url": "assets/js/42.0b1db445.js",
    "revision": "81156e598691ba6180597c73a46eb0e6"
  },
  {
    "url": "assets/js/43.5ad6aeff.js",
    "revision": "c11d930c68ffd988347dba0c06568f9a"
  },
  {
    "url": "assets/js/44.120b29d8.js",
    "revision": "40f7edc2f53136f69c750c4a2ce9b19a"
  },
  {
    "url": "assets/js/45.135711de.js",
    "revision": "b774a22947b5aac0bfe85ddfba9ac0d3"
  },
  {
    "url": "assets/js/46.bed24c94.js",
    "revision": "f9063bc45d9801fbf43d0d028330b1db"
  },
  {
    "url": "assets/js/47.6a6df050.js",
    "revision": "7671abac3c551f2a6e2e55350fbfa89f"
  },
  {
    "url": "assets/js/48.96a58c8a.js",
    "revision": "865ffa289539b4dd24b6b7674e0cdc9c"
  },
  {
    "url": "assets/js/49.e948dfa8.js",
    "revision": "8c6cbbd26dd780dd7729d4a3fec9ef71"
  },
  {
    "url": "assets/js/5.8e3f1496.js",
    "revision": "15d4abadb0c130b4e4f3d7c79971d583"
  },
  {
    "url": "assets/js/50.27138b30.js",
    "revision": "3acae2311f6b7f56e8a46be9134ba7bb"
  },
  {
    "url": "assets/js/51.e9f0ebeb.js",
    "revision": "633a03ffc682f56805ec31fe2aa20e1d"
  },
  {
    "url": "assets/js/52.feff50c8.js",
    "revision": "252181768a11df2212beb42b5496ac3d"
  },
  {
    "url": "assets/js/53.6b34daf9.js",
    "revision": "3160978f0fd7e3e68529c67a1494334b"
  },
  {
    "url": "assets/js/54.b994e5de.js",
    "revision": "dff372fba35452761974de445ea70fcb"
  },
  {
    "url": "assets/js/55.7b3b99cc.js",
    "revision": "58dc86124f222299cedb52db4dfd0880"
  },
  {
    "url": "assets/js/56.b8a08e49.js",
    "revision": "eec200cc843ef3b645d15fcf3d9e0d2d"
  },
  {
    "url": "assets/js/57.b377fe05.js",
    "revision": "36f48d7cde7850d887aa137e806448a3"
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
    "url": "assets/js/9.e4fd915c.js",
    "revision": "8598074f12e4deef586cbda2f6899cde"
  },
  {
    "url": "assets/js/app.5d5a4b12.js",
    "revision": "172d6e308663b0746ebd5f5c54bd5e1c"
  },
  {
    "url": "Bots.html",
    "revision": "b65903bc8090b08f3a3d340332afc21a"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "6e42d93b728a9b14153c52b6c376611d"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "f1531d38d55d8dfc1cffd748fb2bf219"
  },
  {
    "url": "console/Appendix.html",
    "revision": "e82cc724b4ae27b24fcc9209f3cadf0f"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "0d2e9d2ee7dfea458921a64deffcfb83"
  },
  {
    "url": "console/Commands.html",
    "revision": "38f4c08c6ac1fd7b87169ed65a73916d"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "f14810021a188512fb645cba70b9c044"
  },
  {
    "url": "console/Contributing.html",
    "revision": "31fbdaf42d9339a5c8eca26989e3beed"
  },
  {
    "url": "console/Extensions.html",
    "revision": "5e48e246d921ed6732053886ffc0d36a"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "80e0c994485c2a3a474c87bded3da156"
  },
  {
    "url": "console/index.html",
    "revision": "55edef2758421516b4d795ba7d4bdaea"
  },
  {
    "url": "console/Permissions.html",
    "revision": "84015bde936ddaa7aaaccd25e62a5d19"
  },
  {
    "url": "console/plugin/JVMPlugin-Appendix.html",
    "revision": "7bcf92f4e034f65970a4881b87be5c53"
  },
  {
    "url": "console/plugin/JVMPlugin.html",
    "revision": "49cf010e377cc1050cca6a2bd0d7fd75"
  },
  {
    "url": "console/plugin/Plugins.html",
    "revision": "6c13a867e82f78eec15498731f5ec44f"
  },
  {
    "url": "console/PluginData.html",
    "revision": "82be670992bf4606dd8c234eb2bd19e3"
  },
  {
    "url": "console/QA.html",
    "revision": "bd2798c2221a1417f56aef3bb93d2350"
  },
  {
    "url": "console/Run.html",
    "revision": "4cf0cf9860d78a0ef2b4bcc4d568d366"
  },
  {
    "url": "Contacts.html",
    "revision": "9f9dddcbbddf480811a73d6de8d7c33d"
  },
  {
    "url": "CoreAPI.html",
    "revision": "e311508839b01d4cd9bc64e1081ad1f9"
  },
  {
    "url": "DebuggingNetwork.html",
    "revision": "a8e5ee7850597be40120bed3a1f476e7"
  },
  {
    "url": "EventList.html",
    "revision": "2e53eef458fc824e0f7ad120822d354a"
  },
  {
    "url": "Events.html",
    "revision": "ee5844bba52eebd86765a83846bcd683"
  },
  {
    "url": "Evolution.html",
    "revision": "ec7bd782f61372878144a3912a03cea5"
  },
  {
    "url": "index.html",
    "revision": "6169cbd76a68299b4b25580ceb8788d4"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "7dce38a9645e65026f75967e27768f67"
  },
  {
    "url": "mcl/index.html",
    "revision": "fe202ad1c1f2ebaff073e7e2fe18d640"
  },
  {
    "url": "mcl/Module.html",
    "revision": "e6bfee2aad7c9b9e6f8f8bbc385dda33"
  },
  {
    "url": "mcl/Plugin.html",
    "revision": "518a0f607baf975ae7e5d5973de0d9ea"
  },
  {
    "url": "Messages.html",
    "revision": "aebb20ad9d3b3aa3d7212d1c55a03101"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "898fdadc29d77db6455ec38bff5affe2"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "823d886c90a1a8f55953c2a536375a66"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "ad4581641092c194677959188f91a8bd"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "75c18da1dea486075b08a2c7a10d8829"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "b25282b35246ac26c269ecd4f70f92e3"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "0ab932173972e52c06019af1ff28a276"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "4274d27196ad9737841844b38f81d905"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "6984abcf920c5730072dc3344741bce0"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "e052378de7da4bb10d72a2d10c4aaf39"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "767f84a4a8af1e1e15f5d44a77f052a5"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "c215ec49722d87cd792dca9854070743"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "ee92e4e5254b07972137cdf19e7c7959"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "28e9c65be22a88f24cffae543bc6bf24"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "1455c9238a2ad0828cc3a8b831f496d3"
  },
  {
    "url": "Preparations.html",
    "revision": "8bda57b7c690f5691ce45bb19875e0df"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "f844b3e3626e3b1b970d12508f08b07e"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "a74ff0301d1838c6703102f4410f831d"
  },
  {
    "url": "UserManual.html",
    "revision": "fdbbfc8e32c55d929f6aa215f68e6497"
  },
  {
    "url": "UsingSnapshots.html",
    "revision": "1da51731bae4496b9d24c9a0953c50de"
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
