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
    "revision": "beebb7d54d080f987c32ad835f8277af"
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
    "url": "assets/js/13.b2b0587c.js",
    "revision": "dd215ce8538905c132e7f246dd6d95de"
  },
  {
    "url": "assets/js/14.633936b3.js",
    "revision": "75de890f2ab0cf2973d719ce2a2b52c9"
  },
  {
    "url": "assets/js/15.4c3a98ed.js",
    "revision": "d1ba302beec5c945b937593619b5afc5"
  },
  {
    "url": "assets/js/16.4bfe7f9b.js",
    "revision": "4d75d62c188bef8933d3f55a2dffbcf3"
  },
  {
    "url": "assets/js/17.34197137.js",
    "revision": "c5e51199bb9a9b1f75bebb167386e689"
  },
  {
    "url": "assets/js/18.51994263.js",
    "revision": "fdb259f00194116a80c6b4e93e02286b"
  },
  {
    "url": "assets/js/19.64da3014.js",
    "revision": "8b1747cd505572f327c8a3ab04b4418a"
  },
  {
    "url": "assets/js/2.71842359.js",
    "revision": "469d0079c3255826bb1dedffb7325a64"
  },
  {
    "url": "assets/js/20.87bfb576.js",
    "revision": "3c0502e7c192fe48e31dfffe099a5538"
  },
  {
    "url": "assets/js/21.05b662ae.js",
    "revision": "83b964aed7ae69e52f25bc8b8f9e7a7c"
  },
  {
    "url": "assets/js/22.5ccd7cbc.js",
    "revision": "e1c3c4a6e442bca4272a702eb2fbe55e"
  },
  {
    "url": "assets/js/23.35eace4e.js",
    "revision": "5f9ae8582585fcf42b8e651f61502a07"
  },
  {
    "url": "assets/js/24.44878d20.js",
    "revision": "a669d1d4172bfc87c8f7953680da10b9"
  },
  {
    "url": "assets/js/25.81bbf09a.js",
    "revision": "7f97a1852f7ddb6824ca44321735724e"
  },
  {
    "url": "assets/js/26.1695b129.js",
    "revision": "7f14990c7adcf00d79537bd624beffae"
  },
  {
    "url": "assets/js/27.0c0caa4a.js",
    "revision": "4ae2180146de7bb6848ffa7924e91c2f"
  },
  {
    "url": "assets/js/28.463df814.js",
    "revision": "7d270c7384791ff24527fa7d672bdafd"
  },
  {
    "url": "assets/js/29.6788dd80.js",
    "revision": "885607ff28926083a7d5f828d069daf0"
  },
  {
    "url": "assets/js/3.26ab4a98.js",
    "revision": "1483e2eabbed1f7082a7b42568af17ca"
  },
  {
    "url": "assets/js/30.d6337455.js",
    "revision": "06f29c59ae74f9b0a1c17fb81e916016"
  },
  {
    "url": "assets/js/31.225d2815.js",
    "revision": "2fcfec616518567fb278121c214140e6"
  },
  {
    "url": "assets/js/32.f85aa24a.js",
    "revision": "9392f497c6d2c78ea2ebcdb9edd2891e"
  },
  {
    "url": "assets/js/33.67ba2f3e.js",
    "revision": "9cf883ecf3a65d11c9e7fbc51063ab3e"
  },
  {
    "url": "assets/js/34.ad938a77.js",
    "revision": "6eb2da130d62da1a0d4e77a94f970994"
  },
  {
    "url": "assets/js/35.a11a47ab.js",
    "revision": "63f37ef165b036acf2f1e84b9f723933"
  },
  {
    "url": "assets/js/36.9627dedf.js",
    "revision": "66d5afcd80d24df2924192b84337564c"
  },
  {
    "url": "assets/js/37.dda03d69.js",
    "revision": "a416b2bd1a552821cb67abf833f44b74"
  },
  {
    "url": "assets/js/38.f5d0d416.js",
    "revision": "547d307ba7e9b0a4c6cc5b2debed8fce"
  },
  {
    "url": "assets/js/39.afef12c4.js",
    "revision": "72a8c706761e9be95682732ea9594dff"
  },
  {
    "url": "assets/js/4.dc44f699.js",
    "revision": "d0731ad386c1da5c9fca8a306f6e94a0"
  },
  {
    "url": "assets/js/40.67f4a923.js",
    "revision": "8461e68c7986bf9821da0d1ffec09087"
  },
  {
    "url": "assets/js/41.dc5a2a25.js",
    "revision": "ea6ced63de885da7d2c5c5ca0eba7bc5"
  },
  {
    "url": "assets/js/42.6e0adf39.js",
    "revision": "c110705e8b2e74b053c8982f16ac41a1"
  },
  {
    "url": "assets/js/43.c2abb93a.js",
    "revision": "c4d9fc17afd2f0cd557b0c590492f5bb"
  },
  {
    "url": "assets/js/44.49811eef.js",
    "revision": "e95b0031264704ccf75848d212a3607e"
  },
  {
    "url": "assets/js/45.c1a838ca.js",
    "revision": "f3dd524e2ba8d61ed30d0af3247d5cc6"
  },
  {
    "url": "assets/js/46.6c181704.js",
    "revision": "6297e6842daa521f296f17d79868496c"
  },
  {
    "url": "assets/js/47.f3058f88.js",
    "revision": "71a6a7b6cd7bc89adc8b0b11d4b7cd35"
  },
  {
    "url": "assets/js/48.17f31634.js",
    "revision": "37e9115fa4cd94ceef28e5cd1d048358"
  },
  {
    "url": "assets/js/5.1ed72318.js",
    "revision": "61503600dd8e180ca1749149472da5bc"
  },
  {
    "url": "assets/js/6.0e6149bf.js",
    "revision": "1d9d0100841a7ff918f1b807e591859a"
  },
  {
    "url": "assets/js/7.4283167d.js",
    "revision": "b6afb057ffa9e76377bb0e256615e671"
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
    "url": "assets/js/app.2405a2fa.js",
    "revision": "46583b1b982a275bccbd55408c8293af"
  },
  {
    "url": "Bots.html",
    "revision": "20632519522c3c7926042669b9b3eda7"
  },
  {
    "url": "ConciseAPI.html",
    "revision": "f7ac3e74dd411e0d3ff2c3575438e532"
  },
  {
    "url": "ConfiguringProjects.html",
    "revision": "02368b344cb1885a9087b0d4983d63cd"
  },
  {
    "url": "console/Appendix.html",
    "revision": "2f617a0ae4a1306e02dfb5ca73d50392"
  },
  {
    "url": "console/BuiltInCommands.html",
    "revision": "a88438a13cef3da2a87d7177301d0708"
  },
  {
    "url": "console/Commands.html",
    "revision": "650ebda5015f0569a0b53959ecf1f0c9"
  },
  {
    "url": "console/ConfiguringProjects.html",
    "revision": "e752dde766cc9b7a3899271201ff5f08"
  },
  {
    "url": "console/Contributing.html",
    "revision": "c090e19b1f7cd88b7439295542032274"
  },
  {
    "url": "console/Extensions.html",
    "revision": "ed13f4e3ed4a2ae01917b2c9bd4f085b"
  },
  {
    "url": "console/FrontEnd.html",
    "revision": "4ea4be1bba3d0f9fb8f937156729fd79"
  },
  {
    "url": "console/index.html",
    "revision": "508cd1c002972caaf44e6a58eb4020c9"
  },
  {
    "url": "console/Permissions.html",
    "revision": "38651aaa6007dfa204b0b10dff541a42"
  },
  {
    "url": "console/PluginData.html",
    "revision": "b8b56ba5c224f330a91934b4ff8b05e8"
  },
  {
    "url": "console/Plugins.html",
    "revision": "748eacf020d83dc8549db0c84ef917e6"
  },
  {
    "url": "console/QA.html",
    "revision": "e2cbb881479a3fb61ba19768db3162a0"
  },
  {
    "url": "console/Run.html",
    "revision": "94888ab31c07720730c127be4232e2d8"
  },
  {
    "url": "Contacts.html",
    "revision": "8d64d549054fe9f3890b67115e4f0add"
  },
  {
    "url": "CoreAPI.html",
    "revision": "87257f7b40afb28d21e1b1210d017589"
  },
  {
    "url": "EventList.html",
    "revision": "71249f7cd5cb9c1d00d6b0c9e863b161"
  },
  {
    "url": "Events.html",
    "revision": "5f8f9fc52fe1187d96bfe7b814bade9e"
  },
  {
    "url": "Evolution.html",
    "revision": "93cac635d308173d38deefc5ad315041"
  },
  {
    "url": "index.html",
    "revision": "1af81691e62db92327e8437e132496a8"
  },
  {
    "url": "KotlinAndJava.html",
    "revision": "ef94764c2a1cbb316aecb8dc59ba33bf"
  },
  {
    "url": "Messages.html",
    "revision": "3e1c4c6ed7c90e8c00c2b8e29d5d5075"
  },
  {
    "url": "MigrationFrom1x.html",
    "revision": "fc2b2df4646317c089a9befdf5f115a1"
  },
  {
    "url": "mirai-api-http/adapter/Adapter.html",
    "revision": "7927421ad3f0e0557358c0e5d00fcc1a"
  },
  {
    "url": "mirai-api-http/adapter/CustomizedAdapter.html",
    "revision": "e06dcab6c653ae5f0722757dc980f469"
  },
  {
    "url": "mirai-api-http/adapter/HttpAdapter.html",
    "revision": "390424b2d4ebb03c72148fd86d7b8aba"
  },
  {
    "url": "mirai-api-http/adapter/ReverseWebsocketAdapter.html",
    "revision": "9a3289719e8b5eaec6c5bb79716ee5e3"
  },
  {
    "url": "mirai-api-http/adapter/WebhookAdapter.html",
    "revision": "ccdf67ec9601379343d4bd81a3da3f6e"
  },
  {
    "url": "mirai-api-http/adapter/WebsocketAdapter.html",
    "revision": "066c0d615c09b74938c0ec330bf83e57"
  },
  {
    "url": "mirai-api-http/api/API.html",
    "revision": "6b91c5b0c4cf47b3316d5ed0e8d54907"
  },
  {
    "url": "mirai-api-http/api/EventType.html",
    "revision": "79522edf959c2e57a26fe8aeea8d80d8"
  },
  {
    "url": "mirai-api-http/api/MessageType.html",
    "revision": "48e848deb171fd49d0c4e0dcdae51349"
  },
  {
    "url": "mirai-api-http/index.html",
    "revision": "366f24d8c14fbb2c94a7d8bf75c73b08"
  },
  {
    "url": "mirai-api-http/misc/Migration2.html",
    "revision": "9845e1ea269c5dd017a831c84d4e1acb"
  },
  {
    "url": "mirai-ecology.html",
    "revision": "e51de11424585246671bfcc1a62cf83e"
  },
  {
    "url": "mirai-login-solver-selenium/index.html",
    "revision": "997e413eac367bc782ce0e7be7e80899"
  },
  {
    "url": "Preparations.html",
    "revision": "be68acddd8af1d7270afdb9895bf6838"
  },
  {
    "url": "src/Contacts.mermaid.html",
    "revision": "340742f2aadc6872fdfb575c6d5000c5"
  },
  {
    "url": "src/Messages.mermaid.html",
    "revision": "fd2a527d6befe0790cfe522c574d05c2"
  },
  {
    "url": "UserManual.html",
    "revision": "7c83b63f32803a45bf4e45e928e602b5"
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
