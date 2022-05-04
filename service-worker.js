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
    "revision": "f452c1ddb8d454d0a97bec0d490a146c"
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
    "url": "assets/js/24.96dad9bf.js",
    "revision": "1e2e69acd77005bb343cb246234b99ee"
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
    "url": "assets/js/30.a9b09d8b.js",
    "revision": "bcef9c0e60bb130eef74c111ebeda6a9"
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
    "url": "assets/js/35.368c481d.js",
    "revision": "ddd62f9d7dd368cff4b53ec3a9aa6bc5"
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
    "url": "assets/js/38.a53dae6f.js",
    "revision": "a2a1566248e8fdf804e03eb4ca11ee63"
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
    "url": "assets/js/45.2e3c0a93.js",
    "revision": "23476acd33614c1b2f89bf56de6893fc"
  },
  {
    "url": "assets/js/46.e968e54e.js",
    "revision": "4a3df9415855a9f6006c5c5cf6997566"
  },
  {
    "url": "assets/js/47.33a4191e.js",
    "revision": "c21ba02420b8b252d847c736eb0fa6d1"
  },
  {
    "url": "assets/js/48.a4b1516b.js",
    "revision": "ff0f6e71478cd33bb1c90f0a3707399f"
  },
  {
    "url": "assets/js/49.06f558b3.js",
    "revision": "1a35a71509a7667e1629ed40dc4726d7"
  },
  {
    "url": "assets/js/5.8e3f1496.js",
    "revision": "15d4abadb0c130b4e4f3d7c79971d583"
  },
  {
    "url": "assets/js/50.6092198f.js",
    "revision": "a042d1012a0482597eaf399d19dc1d7c"
  },
  {
    "url": "assets/js/51.9467bdc1.js",
    "revision": "b3463b2cffe356936f7f762014a25ec8"
  },
  {
    "url": "assets/js/52.037e0250.js",
    "revision": "ec9a6e4e83085463767ad65cb35f4592"
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
    "url": "assets/js/app.bf8cc61a.js",
    "revision": "45f38c13060cebe48add3219c52f03c0"
  },
  {
    "url": "Bots.html",
    "revision": "b2e0a9a4340fa1366f8ad0f956fc67b5"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "969936bc1b741011613520db9ac653de"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "07c927160f8a0c6205f5c9c4d81e6939"
  },
  {
    "url": "console/Appendix.html",
    "revision": "4af12827d46e8dab52ce019515a0400b"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "4535ca070834c908249fc2edfe496a0d"
  },
  {
    "url": "console/Commands.html",
    "revision": "39bb128f1431c274c0c160c08050f57a"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "531bfa3e210937a0f27e646cdb9b3ede"
  },
  {
    "url": "console/Contributing.html",
    "revision": "8c0880af0bd8c8206058733336a8f962"
  },
  {
    "url": "console/Extensions.html",
    "revision": "0b52468ba650107a6d68cb07f2f31d8a"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "77b110d6c021545e1905969ba6c8ada1"
  },
  {
    "url": "console/index.html",
    "revision": "0c3e590fc3e6ec5a8d3558fcf8f4433b"
  },
  {
    "url": "console/Permissions.html",
    "revision": "4af8bcf4271aee668d5a8b96faeb9eb7"
  },
  {
    "url": "console/plugin/JVMPlugin-Appendix.html",
    "revision": "76dc391f2970235cbfc027848e97440d"
  },
  {
    "url": "console/plugin/JVMPlugin.html",
    "revision": "3d9a45a26e067c370b3f814782ecbbc5"
  },
  {
    "url": "console/plugin/Plugins.html",
    "revision": "0fe73968da7fcb8d9d00105a8b60818f"
  },
  {
    "url": "console/PluginData.html",
    "revision": "f0a5ca8f580f54919795d8d8eece2e9e"
  },
  {
    "url": "console/QA.html",
    "revision": "91a35d31049fabd2e59a6df4c0e2b526"
  },
  {
    "url": "console/Run.html",
    "revision": "5c2daa756917adf49ac0791c54e2861c"
  },
  {
    "url": "Contacts.html",
    "revision": "7bd826946ecb9bbe70d553dff02ebf06"
  },
  {
    "url": "CoreAPI.html",
    "revision": "35c44681524d2589434468768d739f14"
  },
  {
    "url": "DebuggingNetwork.html",
    "revision": "05e54e25c7a792d7c529eb525f48cd90"
  },
  {
    "url": "EventList.html",
    "revision": "95022f1ff0efdc20cb8c664f3b830566"
  },
  {
    "url": "Events.html",
    "revision": "e5d5faf1a27222b8c3457a15f87a7fe4"
  },
  {
    "url": "Evolution.html",
    "revision": "3aca8267ca74eb28b23d63d5e6fe6cae"
  },
  {
    "url": "index.html",
    "revision": "e3e7ab0820149b9faf35704f56a2977b"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "41ea6f84bea99f26b7559e2b901142ad"
  },
  {
    "url": "mcl/index.html",
    "revision": "3b1465f8de138065e2323a3fdcda5a5d"
  },
  {
    "url": "mcl/Module.html",
    "revision": "9959e78e73b0280a8b5cc433849e9b02"
  },
  {
    "url": "mcl/Plugin.html",
    "revision": "a1eee777de3598fff975a8ab8fb36bf8"
  },
  {
    "url": "Messages.html",
    "revision": "3b6d1069fa428c0bd8f19166429bbaee"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "c7ddec1a940617ab359c63843548568c"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "a53b95dfd9761e7383bb1230c55f7440"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "9b8abee7fa7ce10b7060b8760707ca78"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "a6526c4037aa247a0e923c93f1bff2c9"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "92b835e1ab75470d39cda37a465038f6"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "a9db5fc5ec2e5f2c7760accb281a9d70"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "b40a04c7f833d8b5d87ffbca17a28f57"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "69b9a95db5a2923923e0519116f040e4"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "a5f7c142423a106fd2a3330bc8b0d735"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "1bfe80f0c60613fd31ed950ccebda950"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "da03dc47cbefe3c373257023efeb02d4"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "267a25c14b7308b04148b855b0b5d093"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "bbe8b0b230b86819e2bb77c02e3b88fc"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "aacb19f71ac1e98c2acc6a990350f40d"
  },
  {
    "url": "Preparations.html",
    "revision": "ea0af5573a9d2516cad7b8586aefee5a"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "37897b366fc1b99031aed0f5caf3936c"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "14b3dcf798739fffbaf3dc393484ae98"
  },
  {
    "url": "UserManual.html",
    "revision": "19af9f0527f09dd730e4e32f21d020d1"
  },
  {
    "url": "UsingSnapshots.html",
    "revision": "f5c4c78d20339b0f234a74c6a2ae72a4"
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
