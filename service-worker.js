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
    "revision": "6fe3a1d3b767ddf4bad6b3066df1b68e"
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
    "url": "assets/js/10.4acdb1de.js",
    "revision": "ddbeabb21076c3ad02021871cb00eeb3"
  },
  {
    "url": "assets/js/11.c1a3ab55.js",
    "revision": "738dd23495484dbb40f02f1a7ff5764a"
  },
  {
    "url": "assets/js/12.9aead096.js",
    "revision": "dd6ccd0f2a7a7f990bb5df26a2a1c981"
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
    "url": "assets/js/15.e886b38c.js",
    "revision": "a2b548535381f95a576b683de83ef909"
  },
  {
    "url": "assets/js/16.27f844b1.js",
    "revision": "f27eed6c80820d832fdfc0c993304c3b"
  },
  {
    "url": "assets/js/17.9df56af4.js",
    "revision": "edd031cd1c87455bb6e4e6d314f2795a"
  },
  {
    "url": "assets/js/18.660a2c13.js",
    "revision": "f86292ac5a45d8405e5332f195e03584"
  },
  {
    "url": "assets/js/19.c82ba9d6.js",
    "revision": "63d65821f90788f0f75d239efd89506f"
  },
  {
    "url": "assets/js/2.71842359.js",
    "revision": "469d0079c3255826bb1dedffb7325a64"
  },
  {
    "url": "assets/js/20.1c6e0d92.js",
    "revision": "a90e0dc3e2f367c79eacbbcfa48383e4"
  },
  {
    "url": "assets/js/21.5c94bc16.js",
    "revision": "559a54fef38f1ccdff9652ebcc66cd72"
  },
  {
    "url": "assets/js/22.fe0f19d8.js",
    "revision": "02a6a0457097832ff3ebb4dfca636fbc"
  },
  {
    "url": "assets/js/23.bb0afac4.js",
    "revision": "4ce7fc4787df4bb7662616f59494e7c2"
  },
  {
    "url": "assets/js/24.f09a1176.js",
    "revision": "93f1e7c2748abdb6e8fcaf06301d956b"
  },
  {
    "url": "assets/js/25.57cfa818.js",
    "revision": "da791e96b9c3e1b0b5f60d1009d34129"
  },
  {
    "url": "assets/js/26.8f106b7a.js",
    "revision": "de11eb76790733c8908eb5221955d841"
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
    "url": "assets/js/29.c674e2b2.js",
    "revision": "6854c966b423df5b3c860615f863af53"
  },
  {
    "url": "assets/js/3.91c205a5.js",
    "revision": "925509aac949f49d567b489b33b0d3b6"
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
    "url": "assets/js/6.3e134e58.js",
    "revision": "85d8fe546992b247af3c5b2a2fcd82ed"
  },
  {
    "url": "assets/js/7.68cc2776.js",
    "revision": "4353ae9282675482d244304cb16cd3e4"
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
    "url": "assets/js/app.d7e23b94.js",
    "revision": "7048c0d85f9f4664b8158c1da84f8a25"
  },
  {
    "url": "Bots.html",
    "revision": "eadbb3650107b2e82473da1cc98858ea"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "ff035864bdb74f8bbfe929afaf3ed757"
  },
  {
    "url": "console/Appendix.html",
    "revision": "e82f82593a90c45f9b61a465ca220fe9"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "3114815abbd64ef06cc54b2a0b5884e4"
  },
  {
    "url": "console/Commands.html",
    "revision": "76db85ff88b579715a5b5367101e8eaa"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "7ae2c492ab9f3ca82ffd977a3e34a367"
  },
  {
    "url": "console/Contributing.html",
    "revision": "44bf9de1ca891df26c224e446b489449"
  },
  {
    "url": "console/Extensions.html",
    "revision": "5c468a3af64d5b551fca2cb9c021b813"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "e39776535c98a0bc805ca5bc371a0f1c"
  },
  {
    "url": "console/index.html",
    "revision": "c9b4b72477b29490e51b8fa9fb2b34d9"
  },
  {
    "url": "console/Permissions.html",
    "revision": "b7cbbf896f2ba0cddc0449534e3ca2a2"
  },
  {
    "url": "console/PluginData.html",
    "revision": "e4a1e2d93db270c823c1be5e74bf37a6"
  },
  {
    "url": "console/Plugins.html",
    "revision": "c488342da1faa2f3a1afb4b69c5aa70e"
  },
  {
    "url": "console/QA.html",
    "revision": "6108835307b76dfb4d771e8bb2a16c06"
  },
  {
    "url": "console/Run.html",
    "revision": "788be2e2be0a0e717f113078f0ba447a"
  },
  {
    "url": "Contacts.html",
    "revision": "5206dce98e227946920ce6febdc8c829"
  },
  {
    "url": "CoreAPI.html",
    "revision": "f316cd08b4e5e74f14e6755d2149c0c9"
  },
  {
    "url": "Events.html",
    "revision": "9c7e1252c41760445dd3a5bc06f47f68"
  },
  {
    "url": "Evolution.html",
    "revision": "4b08999c721a5f544ae5dcd7a2d7ca97"
  },
  {
    "url": "index.html",
    "revision": "fc636bc887aaeca8914de5a1659c3aa3"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "2c1c0dd997d361cb63009379a36f48a5"
  },
  {
    "url": "Messages.html",
    "revision": "7288f3ad46fe87a22c889cb51f15c120"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "e235721460ebada578ce8abf9f0559a4"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "91fa83ba39b50b53bbc555212bed7633"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "0ec4641cb8a94cf0069cc7aabb2e2a41"
  },
  {
    "url": "Preparations.html",
    "revision": "a256815481fba020ec44ae3f78e738a2"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "264152e0df3c3ef70c2b8019e5af5bb9"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "3dcfa2f1c4d4cc9ef61c4f3d610e46ed"
  },
  {
    "url": "UserManual.html",
    "revision": "66aa3ef49792155ec38af93266c9e3d9"
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
