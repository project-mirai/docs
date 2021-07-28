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
    "revision": "b0bc5abe8f2e8635fc14a2b640d0829f"
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
    "url": "assets/js/11.c773278e.js",
    "revision": "03a49bd459c67ee83ed1c11a41bb6b2a"
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
    "url": "assets/js/14.33f9015a.js",
    "revision": "74d5d23aa1b8bc4c4bcf39d853678a99"
  },
  {
    "url": "assets/js/15.968ced5d.js",
    "revision": "0752ee260fda0d6f3dc3ca628b05fddb"
  },
  {
    "url": "assets/js/16.3b1dfbed.js",
    "revision": "a21ee6e345271ab4f71f9b1a54fdf9ef"
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
    "url": "assets/js/19.18483acb.js",
    "revision": "835d35c35ba88a7db997ec8b69baf601"
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
    "url": "assets/js/22.5af4abf3.js",
    "revision": "92ba9cdac12f3db0fe06dbd3dc3ad4ac"
  },
  {
    "url": "assets/js/23.d3c1dcef.js",
    "revision": "8e549d621df4f5d12331dbf549bc71b0"
  },
  {
    "url": "assets/js/24.133611b1.js",
    "revision": "d5262f5ac5c8115c716dbd4f9cd112fa"
  },
  {
    "url": "assets/js/25.5a99e6d5.js",
    "revision": "d0a8817feead6568a7ebd1465d3f7865"
  },
  {
    "url": "assets/js/26.198a2a35.js",
    "revision": "db2de05d0244d2ac0181387e6c98e966"
  },
  {
    "url": "assets/js/27.4ff24b19.js",
    "revision": "ed4e1a969c4f7d33a2ad8b3763f7a6a3"
  },
  {
    "url": "assets/js/28.c0925e4f.js",
    "revision": "c83c172678ba49e881b1d927a2f7a3a3"
  },
  {
    "url": "assets/js/29.b61d6406.js",
    "revision": "d6df2c6725213565e13a52ff01c9fced"
  },
  {
    "url": "assets/js/3.5ea51bcf.js",
    "revision": "e9bf603e2e91eddb9f248cfdc173a60a"
  },
  {
    "url": "assets/js/30.21f26006.js",
    "revision": "36a1cea1952e02db6a851550f133399b"
  },
  {
    "url": "assets/js/31.f3242a8f.js",
    "revision": "1ab073ae12f7fb1d0c6d1df6739723e6"
  },
  {
    "url": "assets/js/32.69daed69.js",
    "revision": "a7e198117a22eac79ac436a94c86ae1f"
  },
  {
    "url": "assets/js/33.07c9027f.js",
    "revision": "485b73ef56d58a5804db1f92f4b55b40"
  },
  {
    "url": "assets/js/34.e6c526af.js",
    "revision": "f47d20fd0f052fa0507e38df8ffa3afb"
  },
  {
    "url": "assets/js/35.d8bed113.js",
    "revision": "01d4f9d68d1d70a9a5b270402056b154"
  },
  {
    "url": "assets/js/36.2e2732cb.js",
    "revision": "a77d109d0dc3cc3f838c1106f0ad5e9e"
  },
  {
    "url": "assets/js/37.48258812.js",
    "revision": "1c7a7b68e7d0ed50e13e72f571d21448"
  },
  {
    "url": "assets/js/38.d7a7092c.js",
    "revision": "46986f2fcbc3d3742bbdc67f2976f0ae"
  },
  {
    "url": "assets/js/39.4e6da6e0.js",
    "revision": "4e8fee647350d0a13c07fb8c95798aac"
  },
  {
    "url": "assets/js/4.dc44f699.js",
    "revision": "d0731ad386c1da5c9fca8a306f6e94a0"
  },
  {
    "url": "assets/js/40.9c8421dd.js",
    "revision": "93161dbf8a2eba6600c452fa351e82c8"
  },
  {
    "url": "assets/js/41.8f567fd1.js",
    "revision": "fb47819c080bc04c1895884ef12fc555"
  },
  {
    "url": "assets/js/42.8b750119.js",
    "revision": "9a21e226104b1e0485cf3083b986e898"
  },
  {
    "url": "assets/js/43.a6548d35.js",
    "revision": "61893ad6e0da22068910b59320f1590b"
  },
  {
    "url": "assets/js/44.cb271e51.js",
    "revision": "6ab674dcfc872cef63876ac0b9e751ae"
  },
  {
    "url": "assets/js/45.7f46525c.js",
    "revision": "8e0833c3eb8acddf4ca783f1fd18bff6"
  },
  {
    "url": "assets/js/46.ea53088a.js",
    "revision": "621855a329084918aa311fdf3d1aa7c9"
  },
  {
    "url": "assets/js/47.53c0e8c3.js",
    "revision": "cc6dff69199c39e5fc3c0c3f5d827090"
  },
  {
    "url": "assets/js/48.dbe1c8b5.js",
    "revision": "f92d0a2723915ff2b26c245fa83b2d64"
  },
  {
    "url": "assets/js/49.176c0ea3.js",
    "revision": "4c3f2331c6e13eabdc7b64b616bd57c3"
  },
  {
    "url": "assets/js/5.3dc313b2.js",
    "revision": "4044739dc9ef398deded5f6d12053345"
  },
  {
    "url": "assets/js/6.afd0de69.js",
    "revision": "e0a2b9a812fd721917d481ba36f97eb5"
  },
  {
    "url": "assets/js/7.c5288a2b.js",
    "revision": "648c0a6a85b6ebf56c82fa05b056a42a"
  },
  {
    "url": "assets/js/8.c17033b8.js",
    "revision": "48c1032521ca986c018097bd6a73d1b3"
  },
  {
    "url": "assets/js/9.aa9afcac.js",
    "revision": "424c5f55de7d68b2a79289d71f362d7f"
  },
  {
    "url": "assets/js/app.ce3e74a0.js",
    "revision": "65cc33bc132c8e36bbb6ec110dc0cd86"
  },
  {
    "url": "Bots.html",
    "revision": "fcd4ff52c15b8f3e01ac9111ed5f3b02"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "24b3d89009e215f16425111ef88db5f5"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "787eabe2b33f668e91b36737047c818b"
  },
  {
    "url": "console/Appendix.html",
    "revision": "e7ed56d43e3184b0899a64aaca9f16aa"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "83f4808919583e4b1acd114376728677"
  },
  {
    "url": "console/Commands.html",
    "revision": "2bd2bb2d658a1265492fab82d279a67e"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "a10c3eb373882c1a80ee74b948d6b97f"
  },
  {
    "url": "console/Contributing.html",
    "revision": "3075c44843a9c7035d7e92615b3172b2"
  },
  {
    "url": "console/Extensions.html",
    "revision": "a66389ba6f989183daaa58f852a3fc0e"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "261a056aacc1328f517dc44ad9f36af9"
  },
  {
    "url": "console/index.html",
    "revision": "35c8325f71bc2f016863dc1e5777a439"
  },
  {
    "url": "console/Permissions.html",
    "revision": "6dc92232f1abcf00846536d060cba61e"
  },
  {
    "url": "console/PluginData.html",
    "revision": "2a8bef9076172afcd51a78546140a8f7"
  },
  {
    "url": "console/Plugins.html",
    "revision": "4c0452ad3cf8e5fae2d8272bb8a30d40"
  },
  {
    "url": "console/QA.html",
    "revision": "f2e9c602fba60b60cd2e1962af5cb261"
  },
  {
    "url": "console/Run.html",
    "revision": "265c3fb0dea15be63f2a3c87ab840d35"
  },
  {
    "url": "Contacts.html",
    "revision": "df0e88c4041b9417e10e27f12ea26bb5"
  },
  {
    "url": "CoreAPI.html",
    "revision": "03b9c6dc8269531ef7e750c26668f56c"
  },
  {
    "url": "DebuggingNetwork.html",
    "revision": "adaf0c30a7f67be9549d396a45988265"
  },
  {
    "url": "EventList.html",
    "revision": "c1d054ccbbcab095b51895c52c16cd18"
  },
  {
    "url": "Events.html",
    "revision": "acb26b893a2cb647d0053517a87fe643"
  },
  {
    "url": "Evolution.html",
    "revision": "a6a412ed5c191b486fd31405006599c3"
  },
  {
    "url": "index.html",
    "revision": "a8db70aedb6a13373418ea896c0e4215"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "1eb98cec09ebb46e970e179e98e93a65"
  },
  {
    "url": "Messages.html",
    "revision": "15bcc3de2beab646654afb73b47a0303"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "c55514e5cda5c96a6c58e793299f026f"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "a7ba66eec0e354897dd305cb46ea69ae"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "9b211e7e43a879c9b7d3ad8908f9a3c8"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "5d7860489ae250e5157cea537c3fdf03"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "1f5f45741ffe87d3c06c83e8c25fdae8"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "8600489b7761ebd59fa4093bedd7cfad"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "a1b31ed3ee04f6b4357df9dee4564b47"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "1a251f4b9ae1522ed86831ce0ce0ebb6"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "cddf722d684ac1ac15e14e6d8cf08120"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "9a36236dd889f81ca3a9f30a4b6c07b9"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "03d41b108a05de10bd237e47b670c5af"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "19d11c027b0aa674d8602d11ed6362b7"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "1722f14e84074b1d10b7c45dc8aa5afd"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "0f1b0cccd26bd25c46e007137c7a60c5"
  },
  {
    "url": "Preparations.html",
    "revision": "09b2ad000e1c3361a8819eeb3af7078d"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "9ad7ef069db38d4ce0cd7b9d37b4bf4f"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "2d589959a10075f8daf478c8bf8565a3"
  },
  {
    "url": "UserManual.html",
    "revision": "36a330bfcae1333b6ab60a79a2c70e6e"
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
