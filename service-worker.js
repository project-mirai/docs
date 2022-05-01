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
    "revision": "73aa7cdec7a9602259f1d19cb1eb2238"
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
    "url": "assets/js/21.844496df.js",
    "revision": "cc698123c1859b93519a59fd5737319e"
  },
  {
    "url": "assets/js/22.b882bdf8.js",
    "revision": "fe26a576e416d1d5b4e74c85de51d9b3"
  },
  {
    "url": "assets/js/23.38382095.js",
    "revision": "0eece500a54a49f81dd75fb3589855b9"
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
    "url": "assets/js/3.1ae95b70.js",
    "revision": "132ced3e8f2d2ba89aabdd66d3af9dac"
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
    "url": "assets/js/34.6c62ca37.js",
    "revision": "3769e436a03e1148cbae8f16ac80aba8"
  },
  {
    "url": "assets/js/35.62567bac.js",
    "revision": "399028083cdeb0a914efe6e995d5958f"
  },
  {
    "url": "assets/js/36.6139adb3.js",
    "revision": "fc4a1922c2b8c9c7536e8d1bf4c8b612"
  },
  {
    "url": "assets/js/37.4ab579c4.js",
    "revision": "4f00cc7fee384ae542de4674b77d1a40"
  },
  {
    "url": "assets/js/38.af199c62.js",
    "revision": "caee8696e0ace7aa82fc18bdd37f9108"
  },
  {
    "url": "assets/js/39.ba3f1649.js",
    "revision": "0f0364f5ba14ade337d20eea1be0e591"
  },
  {
    "url": "assets/js/4.b00f486f.js",
    "revision": "ba2f373ff5adf26f9dceaa08c3ff7bb7"
  },
  {
    "url": "assets/js/40.ff9b9f8c.js",
    "revision": "7c13d818fab1cef8ff2d08cb0dd48602"
  },
  {
    "url": "assets/js/41.3de1c1e6.js",
    "revision": "01b2ec7cfbff61cc6734349039516dd3"
  },
  {
    "url": "assets/js/42.23fbf1b1.js",
    "revision": "3ff9143b56e2d41c4822a042c1791983"
  },
  {
    "url": "assets/js/43.9f373e33.js",
    "revision": "3ae44fb8603853a27a7d0b4ee7013a04"
  },
  {
    "url": "assets/js/44.aec4540b.js",
    "revision": "be17c4b3331216069ddd9e76855c897c"
  },
  {
    "url": "assets/js/45.27fbf41c.js",
    "revision": "169e18625b88785c11ef6985adab1ccd"
  },
  {
    "url": "assets/js/46.2aac7002.js",
    "revision": "bb5c5ba1ea6a2f8045ddbb4db9f410d5"
  },
  {
    "url": "assets/js/47.fe649c83.js",
    "revision": "b1f4017a16dcc4ac8ee7e4858d829d49"
  },
  {
    "url": "assets/js/48.ef7937e1.js",
    "revision": "5f4d05d67ac98de4edb18b7ad7412019"
  },
  {
    "url": "assets/js/49.ac94b6b3.js",
    "revision": "1008e5b3e68a801242bbc801d788a507"
  },
  {
    "url": "assets/js/5.03de214e.js",
    "revision": "c1a8df8218b13148fea98bf2798025ff"
  },
  {
    "url": "assets/js/50.f23f4318.js",
    "revision": "9cd883f37da143b8c9bef66cf799fc17"
  },
  {
    "url": "assets/js/51.16dfef31.js",
    "revision": "030d257c6693926576423b116a63df9f"
  },
  {
    "url": "assets/js/52.593fa1b9.js",
    "revision": "ff007bc169ae33f96e86b571a65fef8c"
  },
  {
    "url": "assets/js/53.2a1a0493.js",
    "revision": "8242ea9c2d866d15f86a91bc63afe535"
  },
  {
    "url": "assets/js/54.655eef8f.js",
    "revision": "d1e3c6f186b6596f596fa68f602343a2"
  },
  {
    "url": "assets/js/55.60af0e26.js",
    "revision": "6c62f42f7c6be73f95a775a5aa8ead22"
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
    "url": "assets/js/app.e9488cce.js",
    "revision": "40e6da9b4213ee01f581c9ab26a3a15e"
  },
  {
    "url": "Bots.html",
    "revision": "ea4f8f82ef468910e8d106cf30e713ae"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "a45dd59cb2984a2daefd619beedbe7c9"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "4d25b59f6df8f276e5755cacd3586141"
  },
  {
    "url": "console/Appendix.html",
    "revision": "3de6c5176ac798cad09506b437a003cb"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "3962b2c8d3e6c7eb6b93e8b6e7962bfb"
  },
  {
    "url": "console/Commands.html",
    "revision": "87937b93661bc470af0bd25bc029ba84"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "dd06e4083ee7345e6122d0b8f6da61b7"
  },
  {
    "url": "console/Contributing.html",
    "revision": "19e95206d73fa19b114db46fc40ca905"
  },
  {
    "url": "console/Extensions.html",
    "revision": "2e1deafda3eda5ba43bf9b343bf7f1f2"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "a3aad7e0503c0737028d2492cf74763c"
  },
  {
    "url": "console/index.html",
    "revision": "c9e63a3fd154ffe5ed9c09384fe4d927"
  },
  {
    "url": "console/Permissions.html",
    "revision": "622cafd214d86e055270feba09191d3d"
  },
  {
    "url": "console/PluginData.html",
    "revision": "ab32fbf22da5658ddb8ec1bca13be2a5"
  },
  {
    "url": "console/Plugins.html",
    "revision": "df29fe07210586669027a9b4373cb957"
  },
  {
    "url": "console/QA.html",
    "revision": "716d2579fe1b93aec16a6777a70b8aad"
  },
  {
    "url": "console/Run.html",
    "revision": "ea6c0108ea416bc268efa51f26d92ed9"
  },
  {
    "url": "Contacts.html",
    "revision": "baf1d18a52b4b31e4dfae6158bb633fb"
  },
  {
    "url": "CoreAPI.html",
    "revision": "d161bb304198b72ecde9475375032f1e"
  },
  {
    "url": "DebuggingNetwork.html",
    "revision": "4356d04e72d15ac50df084d8ddd7b03d"
  },
  {
    "url": "EventList.html",
    "revision": "515ec94e4f0b922c34519197c54ab748"
  },
  {
    "url": "Events.html",
    "revision": "881395648cccbcebe52d0e4b68b3b439"
  },
  {
    "url": "Evolution.html",
    "revision": "e811f2cb7f379a9b787eafc957ba4e31"
  },
  {
    "url": "index.html",
    "revision": "daee7f30dc650192e321ee060b46785d"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "1f525c48a3d170e21e693511f6ed5bd1"
  },
  {
    "url": "mcl/index.html",
    "revision": "b98e301d656a23c42ce79146704100fe"
  },
  {
    "url": "mcl/Module.html",
    "revision": "3be524afd9ad323772305614549c936e"
  },
  {
    "url": "mcl/Plugin.html",
    "revision": "b9dd6da7e9bfce7de6989372adcffb65"
  },
  {
    "url": "Messages.html",
    "revision": "2e8b30ebf6aa47c8afe4792b8be2d19d"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "9bddd4d2faed2dc6b45ef41d2a822021"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "1f28f0fb33b8179abda2e35b6094ec2b"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "b78deab12a0c1c8ef18aaff7cbd0eb3d"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "fd953d840642a7a19bdacf761bd62d09"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "6b4a4d3e04f0886b61dfddcf9b0d218a"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "7b55d0c07bff9cca1422cf5f2c0ac524"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "b7e33f8689dc4762d7aa0aea519e9383"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "e0af6c759cc71dfe7ac696f9088e527d"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "f5930059bf326ef366ae4849267e5ec7"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "b47ae11d8045b7c65c54df4f9c7873e3"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "2596257ff4b2ff3e9ff63f826d85b29f"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "cc4f7e57ce10a9dc11571a9aa4441c88"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "70b8cba3d65e663f5cb8dfbd9700bb1a"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "4406ead1266208d8263f5617b76de8e1"
  },
  {
    "url": "Preparations.html",
    "revision": "0484fb262b4bb9c8ade989dcd2d1e00f"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "98961ff2ef6ec5c1fa034bbe2bc97567"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "592d538fb5c144e3ab7c9d76fee95752"
  },
  {
    "url": "UserManual.html",
    "revision": "6be0e5799e37b35825c848f4205b924e"
  },
  {
    "url": "UsingSnapshots.html",
    "revision": "1aa838eb479993fc7cfb837d104500e7"
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
