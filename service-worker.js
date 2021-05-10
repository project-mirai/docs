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
    "revision": "65f75f6c757b10540056e5af49ca813d"
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
    "url": "assets/img/img1.523ba04c.png",
    "revision": "523ba04c3cd53330296404976c6d4660"
  },
  {
    "url": "assets/img/img2.02fc09b5.png",
    "revision": "02fc09b5e0de5482512275fd725dd50c"
  },
  {
    "url": "assets/img/img3.58a61018.png",
    "revision": "58a61018b781c0b78d7ce41619b4301b"
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
    "url": "assets/js/10.12a26488.js",
    "revision": "1071aee2b0f07702a37e56e9c633d3ee"
  },
  {
    "url": "assets/js/11.d74c8905.js",
    "revision": "fe359a7a2b05c813a627307c72ddda83"
  },
  {
    "url": "assets/js/12.a7be1734.js",
    "revision": "82eeff5e53c055496b9591b6354aa22c"
  },
  {
    "url": "assets/js/13.fd60c179.js",
    "revision": "d1e3c50c1e2e9de99efd73262b7047e3"
  },
  {
    "url": "assets/js/14.0f632cbe.js",
    "revision": "a1d66483116518b232c491e4201512a1"
  },
  {
    "url": "assets/js/15.9fc90449.js",
    "revision": "fa0d62d4530bd9895ed365b0a24d44ac"
  },
  {
    "url": "assets/js/16.5a995378.js",
    "revision": "7af0a7df6e8d841fa970e09e0160ebae"
  },
  {
    "url": "assets/js/17.9df56af4.js",
    "revision": "edd031cd1c87455bb6e4e6d314f2795a"
  },
  {
    "url": "assets/js/18.1a7d4af8.js",
    "revision": "23e2c7e668fbe8a994ce6bbd7cf5f141"
  },
  {
    "url": "assets/js/19.a7427688.js",
    "revision": "905e47550a114c441da9037cc1f973d0"
  },
  {
    "url": "assets/js/2.71842359.js",
    "revision": "469d0079c3255826bb1dedffb7325a64"
  },
  {
    "url": "assets/js/20.29844860.js",
    "revision": "63c3302da54ca75723b73348b45e1862"
  },
  {
    "url": "assets/js/21.6c4f183a.js",
    "revision": "9d6c2e48a6002c46bbdbe883ab187fcc"
  },
  {
    "url": "assets/js/22.97922dcf.js",
    "revision": "fd4253fb8432a1ce326e81e09b6f2731"
  },
  {
    "url": "assets/js/23.d3ad2fd0.js",
    "revision": "6f8d727fd9b14322f1e936853d70c20a"
  },
  {
    "url": "assets/js/24.e5b29d6e.js",
    "revision": "b95b4f5efd629de4b58db1d9dbccba5a"
  },
  {
    "url": "assets/js/25.dbc68b82.js",
    "revision": "d8147aedcce50ba250f48f117ed9aaa7"
  },
  {
    "url": "assets/js/26.9412e85b.js",
    "revision": "441b428dccb5e3b7ffb1ea175b7f924a"
  },
  {
    "url": "assets/js/27.f09338b5.js",
    "revision": "fba629801deb46eb7b3ba1277c9532ae"
  },
  {
    "url": "assets/js/28.6610a1b2.js",
    "revision": "2d87c7fa421de3046a64157d430c3204"
  },
  {
    "url": "assets/js/29.f29206d0.js",
    "revision": "25469391f9b64cab154bd9988101ab03"
  },
  {
    "url": "assets/js/3.7f5a2c84.js",
    "revision": "9ccb8e09245363ab0d07dd2a538fb867"
  },
  {
    "url": "assets/js/30.63095119.js",
    "revision": "842e60bcd908c2c8c367d3e93452dca1"
  },
  {
    "url": "assets/js/31.96089e4d.js",
    "revision": "0c88dde8254d9300cdc7e28f657ac961"
  },
  {
    "url": "assets/js/32.b1eb39aa.js",
    "revision": "ccd583458f50530fc2040391fcd6ca6b"
  },
  {
    "url": "assets/js/33.f199e465.js",
    "revision": "a46d5609fe92c82daa0ba41142b4817f"
  },
  {
    "url": "assets/js/34.8b923d54.js",
    "revision": "394cdcafae9fe6ad18c60ef1066403fc"
  },
  {
    "url": "assets/js/35.996d9d5e.js",
    "revision": "732d02bab7ee9b9fac18f348d2b6d148"
  },
  {
    "url": "assets/js/4.255b9dc1.js",
    "revision": "2e2d049cb20953ed789f09bd27b3c54d"
  },
  {
    "url": "assets/js/5.8eacb8a9.js",
    "revision": "9c8c2f896ab4754358055424089e105a"
  },
  {
    "url": "assets/js/6.09511aa2.js",
    "revision": "59a07c3d81c012c0cb46ebeca254e730"
  },
  {
    "url": "assets/js/7.e23987ed.js",
    "revision": "350c0c4dca3f4aba4a4ac66f96f8007c"
  },
  {
    "url": "assets/js/8.c17033b8.js",
    "revision": "48c1032521ca986c018097bd6a73d1b3"
  },
  {
    "url": "assets/js/9.c4dc1efc.js",
    "revision": "bf6703c62c06be342d0a80ce62bdb442"
  },
  {
    "url": "assets/js/app.91cbd88f.js",
    "revision": "4b4ddaad194d81535070e2a325523bb7"
  },
  {
    "url": "Bots.html",
    "revision": "f196d09fd0fb7c78fee61506babff342"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "74767c2d9f630dbe48a408ef2c7424d2"
  },
  {
    "url": "console/Appendix.html",
    "revision": "170bd5dc1dcb41b1b96d5feb200f6f0b"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "64f4d1a77d0cbf92755d7fa441165afc"
  },
  {
    "url": "console/Commands.html",
    "revision": "1172d1ca7396d5938a626b5335d7c1a4"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "86fad92b013c4db5a6875c9e88b14b7b"
  },
  {
    "url": "console/Contributing.html",
    "revision": "c5f879a0d553201aacff2caf5465a5f0"
  },
  {
    "url": "console/Extensions.html",
    "revision": "0a47e47ef9ebdefb43b58481508f1eca"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "6c3086cd10fc248a96b5d6f0a23aa193"
  },
  {
    "url": "console/index.html",
    "revision": "dbb144f2e36287b11f1c6deb0ed286ae"
  },
  {
    "url": "console/Permissions.html",
    "revision": "348b4bafd53f9850702f1c3b1f0fcfea"
  },
  {
    "url": "console/PluginData.html",
    "revision": "76882b7fba7bf932d79928e084162498"
  },
  {
    "url": "console/Plugins.html",
    "revision": "abc662d33cb23026f2b9347cc3e1d4a1"
  },
  {
    "url": "console/QA.html",
    "revision": "a3b35addd9c972d0b9d9ec1fc51f7811"
  },
  {
    "url": "console/Run.html",
    "revision": "7184d04aa561d6c411a08b9f2d2762dc"
  },
  {
    "url": "Contacts.html",
    "revision": "8699b5a02c314de8f514601c4570d721"
  },
  {
    "url": "CoreAPI.html",
    "revision": "e359d2790155d732b8fcbe00a207c686"
  },
  {
    "url": "Events.html",
    "revision": "9d74fc3af1e5585a436b0b2ade9636ba"
  },
  {
    "url": "Evolution.html",
    "revision": "ca7dbc8acf149547247d0ff77d0673da"
  },
  {
    "url": "index.html",
    "revision": "12cc98ce3f7f1421cdfb87590fca1816"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "604702123cc5f00a75af024cdb946937"
  },
  {
    "url": "Messages.html",
    "revision": "5e0eda222eedf953f1e2f60e331a7340"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "70cca64ef5682f1994459d2bb29c9e31"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "dc01013317fd2b68ebbda98efc617411"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "6f9b8d952779cb4897c1134aec104906"
  },
  {
    "url": "Preparations.html",
    "revision": "433ddf030177e5a31323bf2ff916287b"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "feefbc135f3770760b20174324f97e09"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "592b2ec7e259eda8210d2d7c8ff722a4"
  },
  {
    "url": "UserManual.html",
    "revision": "b0c1a7d1978b72f1c86336e8c9d40961"
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
