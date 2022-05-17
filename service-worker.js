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
    "revision": "f156c0c4262ed9787f57aaaab1cb6e82"
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
    "url": "assets/js/49.da4a2204.js",
    "revision": "3c6beae9f9ac12283059614b41a9d2ca"
  },
  {
    "url": "assets/js/5.8e3f1496.js",
    "revision": "15d4abadb0c130b4e4f3d7c79971d583"
  },
  {
    "url": "assets/js/50.909e27e9.js",
    "revision": "276c120e6227164cf0d4c3ca373defe7"
  },
  {
    "url": "assets/js/51.e9f0ebeb.js",
    "revision": "633a03ffc682f56805ec31fe2aa20e1d"
  },
  {
    "url": "assets/js/52.b57139d8.js",
    "revision": "f68d12259ff7572cdf4abb1593742f0e"
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
    "url": "assets/js/app.75e220c6.js",
    "revision": "f41255fabbe3698b312fd16cea00745a"
  },
  {
    "url": "Bots.html",
    "revision": "9f430c2e2bff875b8b541de3f09192ca"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "3c1d84c1e0a782b009a638dc374be385"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "c75fbb906ceeea73683ce3b4264db44e"
  },
  {
    "url": "console/Appendix.html",
    "revision": "f3c9bbdc8572490a7ba0b73369a27e04"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "17bc4928e6427d662af3b57a351b0266"
  },
  {
    "url": "console/Commands.html",
    "revision": "6f1e9399a748ebbf17eb3031592ff5ca"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "9da8c277c323b5d513a00ab4fb2bc406"
  },
  {
    "url": "console/Contributing.html",
    "revision": "945115726a363c7c46345bb591a17d67"
  },
  {
    "url": "console/Extensions.html",
    "revision": "fc5a827dbebcb165fa762f6fcfb40f6d"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "3845d5f9d34da90fff22a93d8bdfd399"
  },
  {
    "url": "console/index.html",
    "revision": "d5e0c8b01efd3bd8116b532e98ca00e2"
  },
  {
    "url": "console/Permissions.html",
    "revision": "0a387af17a2a0c9f35ec4cdccc861267"
  },
  {
    "url": "console/plugin/JVMPlugin-Appendix.html",
    "revision": "676c198e74ae8e2f7757d3c1c9eb5b93"
  },
  {
    "url": "console/plugin/JVMPlugin.html",
    "revision": "d4909177665ccff36b5531f122bd393f"
  },
  {
    "url": "console/plugin/Plugins.html",
    "revision": "94070796f7dee0625b77a5cf5ccb93e2"
  },
  {
    "url": "console/PluginData.html",
    "revision": "4904b103a1ee87129af20077032f7939"
  },
  {
    "url": "console/QA.html",
    "revision": "ec7442c38da36e3e1b438cd0105ea7cc"
  },
  {
    "url": "console/Run.html",
    "revision": "5b63b5c3e9eb72ce1a571f7f2f82d49c"
  },
  {
    "url": "Contacts.html",
    "revision": "55aef5cc84caa28bbfadb78a37ed6eb0"
  },
  {
    "url": "CoreAPI.html",
    "revision": "0cba312fb43ae0c3e84ed7b1d8c50f4e"
  },
  {
    "url": "DebuggingNetwork.html",
    "revision": "9d62e0a0228abaf718f921ae2fd6e30e"
  },
  {
    "url": "EventList.html",
    "revision": "dd9bbdc92291158b73f85a57a76dc7da"
  },
  {
    "url": "Events.html",
    "revision": "bf716af1847c144239c6772247299434"
  },
  {
    "url": "Evolution.html",
    "revision": "7dbbc2635760172f126335a78639e4d1"
  },
  {
    "url": "index.html",
    "revision": "97de699d481176e8204ee547d369fc4a"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "1f3beece58b224fae114441bab97986a"
  },
  {
    "url": "mcl/index.html",
    "revision": "3ab8b72b73a6b272df8d0410b5602a9c"
  },
  {
    "url": "mcl/Module.html",
    "revision": "a8314854f60eb145dea11c354589df48"
  },
  {
    "url": "mcl/Plugin.html",
    "revision": "8e3f9c345935464900457c0c2ea5461c"
  },
  {
    "url": "Messages.html",
    "revision": "6089f3e1eddb43e2f5336c95be5f9a24"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "a1c0cd5380b0531b49592f491c7dfb02"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "c8f0038c22014b9696ea341b0c380b80"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "b808645c2eb4b779c922f6ca4fb354da"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "0c60c4933e8e7b057906ce686df9fd5d"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "36f3cf561a811d66f99743a5db342d66"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "2ca4d76fd8ed67eb2fdf015ad195c18f"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "768d18dd01a7098ef5e1943cc57d2e6f"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "a73ac13ac74c5d06d6ecfe0aa0863d56"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "0a29513e95a13c96849da2bee25ef686"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "682fabcb7c79e58ad740c8cb22d23a5e"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "ac6141c2c0bd8832c38e288293007c35"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "e46126a26d5efbf99e78c1bdf9ab767a"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "06460c962990f0f845fc94a9a5347d20"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "ab9b3fd3ce153eb36aab93ab3f640100"
  },
  {
    "url": "Preparations.html",
    "revision": "62dbdad3d5d11d54811bf7f45405c165"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "7245c347c2a80435504b9f277521994e"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "dde37c6c1ff7b5e6f508036f3e6d84d9"
  },
  {
    "url": "UserManual.html",
    "revision": "b360ac19375774fc7132a0957eb45d63"
  },
  {
    "url": "UsingSnapshots.html",
    "revision": "1a43124de5f2ceae5f5e3b7179e8c9c9"
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
