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
    "url": "1.jpeg",
    "revision": "e01e6434c0106d634b27e693cd9c13a2"
  },
  {
    "url": "2.jpeg",
    "revision": "8a01e649a335bde2478c53f6e04a2d30"
  },
  {
    "url": "3.jpeg",
    "revision": "c83fbf16b12b4f9ddd83b79235a94f09"
  },
  {
    "url": "4.jpeg",
    "revision": "b016e356a0ea52104f6f466de76bc66a"
  },
  {
    "url": "404.html",
    "revision": "77a329677d8ffeeaa5be698b18a647ab"
  },
  {
    "url": "5.jpeg",
    "revision": "ff00ccffeeeedebacc53fb2f02e52fea"
  },
  {
    "url": "assets/css/0.styles.2163bcaa.css",
    "revision": "89e8f5db8c8e289cb03f24f1635c6ce4"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.470dfb6d.js",
    "revision": "45cdf76ce126783974cf1e64dc40d187"
  },
  {
    "url": "assets/js/11.3ef22147.js",
    "revision": "44d80c123076201339d8cc6b6c71a1ab"
  },
  {
    "url": "assets/js/12.1078b9db.js",
    "revision": "130a92d3679daa5c8ea754c1a2d44cfc"
  },
  {
    "url": "assets/js/13.e30e191f.js",
    "revision": "e49b0b8f388edcce598a0363f96930b1"
  },
  {
    "url": "assets/js/14.7e523d97.js",
    "revision": "585add958a064329f0f96eb126d271a1"
  },
  {
    "url": "assets/js/15.214073fb.js",
    "revision": "a369083a68050987bbba5d8b157c1ccd"
  },
  {
    "url": "assets/js/16.d405661d.js",
    "revision": "c4452ce83b3116c9e260f6f53907272b"
  },
  {
    "url": "assets/js/17.e7074638.js",
    "revision": "e5a5e0c6ed5d129f1f7c690d75f7491b"
  },
  {
    "url": "assets/js/18.ac700e96.js",
    "revision": "674afc0ab38f2adf5aedf4f9248930c6"
  },
  {
    "url": "assets/js/19.4ed32732.js",
    "revision": "d15c3fcca3796d646f862beb81cf087c"
  },
  {
    "url": "assets/js/20.92dbd837.js",
    "revision": "4cca68133f505a66c046a18e2db82faf"
  },
  {
    "url": "assets/js/21.d37ecdb8.js",
    "revision": "dd2b3811ac4bbfc74e257ae1d06d69de"
  },
  {
    "url": "assets/js/22.d5462217.js",
    "revision": "ec45bd68fb0202deedb59e0b319cadb5"
  },
  {
    "url": "assets/js/23.ee59309e.js",
    "revision": "281c677230879d81bc408e831c15a5da"
  },
  {
    "url": "assets/js/24.0a02ff84.js",
    "revision": "7de77ddf20e6168ebb0e768878df7ad8"
  },
  {
    "url": "assets/js/25.2570222d.js",
    "revision": "84c87d3aac6aff303d7b653630cb5a29"
  },
  {
    "url": "assets/js/26.a25f3552.js",
    "revision": "e1285814e0e26ed822ee18abb346d6a7"
  },
  {
    "url": "assets/js/27.7623e189.js",
    "revision": "b618848914861c7badb44c356cfb6f99"
  },
  {
    "url": "assets/js/28.7b29409a.js",
    "revision": "3bb5d4fd74c291d537bfa247bf4816c4"
  },
  {
    "url": "assets/js/29.7479f75f.js",
    "revision": "3990bdf50f38095f81a6625ecb53b144"
  },
  {
    "url": "assets/js/3.43011e0b.js",
    "revision": "5797deaa03045b030430492a8e0011b9"
  },
  {
    "url": "assets/js/30.d95ba395.js",
    "revision": "ee4e4c070bf222efb497cd70fa4dc6b8"
  },
  {
    "url": "assets/js/31.fa21b093.js",
    "revision": "6d249099fd9f1a2f041b160a239cd5ec"
  },
  {
    "url": "assets/js/32.9a9832fa.js",
    "revision": "8b6f63202f24af4defa237f766c8c1c1"
  },
  {
    "url": "assets/js/4.a48f21e3.js",
    "revision": "7d38217966a9fddd7df10ac2859bf85a"
  },
  {
    "url": "assets/js/5.eed9ec6e.js",
    "revision": "68cc6aa016ddd721401876b530aceca9"
  },
  {
    "url": "assets/js/6.94a14664.js",
    "revision": "65287ea1215ffad237081e484b710c69"
  },
  {
    "url": "assets/js/7.52aff822.js",
    "revision": "12ff1643e4d3edc9d3488daffc0e4a30"
  },
  {
    "url": "assets/js/8.6e89422d.js",
    "revision": "fc3b99511e95704d8b93a0d268167d75"
  },
  {
    "url": "assets/js/9.aadac41b.js",
    "revision": "9c0067f8986efe6e701b6d25f25b0073"
  },
  {
    "url": "assets/js/app.29ff8a9b.js",
    "revision": "a8df458b80fcb96860e69e3650dff864"
  },
  {
    "url": "assets/js/vendors~notification.c4421e20.js",
    "revision": "76078ea184902799882af0b3ccb56b70"
  },
  {
    "url": "chat.png",
    "revision": "39fad2947246c8676d8ae34c47939d10"
  },
  {
    "url": "coffee.jpeg",
    "revision": "f4fb651968cef56e279e1c10ed51b053"
  },
  {
    "url": "frp.png",
    "revision": "ddd3398a3de5a3ea2ba77881487787e5"
  },
  {
    "url": "guide/common/accesstoken.html",
    "revision": "add2dcef3e054b52dd88d83598808601"
  },
  {
    "url": "guide/common/init.html",
    "revision": "2240f2736a4c41ea93b01ff0f600d85c"
  },
  {
    "url": "guide/donate/index.html",
    "revision": "67df86c46b201465880255ab5b8d0652"
  },
  {
    "url": "guide/index.html",
    "revision": "5bfa635feaabb9dd14b9dcaea1ab27b5"
  },
  {
    "url": "guide/miniprogram/login.html",
    "revision": "573c13d70c1e89a49db00d4fb6b61760"
  },
  {
    "url": "guide/miniprogram/ocr.html",
    "revision": "fe3198ca7562b5a99ef81d4c678458f1"
  },
  {
    "url": "guide/miniprogram/qrcode.html",
    "revision": "4d5af5d6937fef7f38454243104c57fe"
  },
  {
    "url": "guide/miniprogram/subscribemsg.html",
    "revision": "76f1bea72778276f6fdaa08bd17ffed6"
  },
  {
    "url": "guide/tools/frp.html",
    "revision": "bc5f1e236412bcf90bc0a2c31c68a522"
  },
  {
    "url": "guide/wxcp/callback.html",
    "revision": "9bb4f69c6f820b864b2787a0edf1ed26"
  },
  {
    "url": "guide/wxcp/handmsg.html",
    "revision": "97c34160293501b98aba036866a98bcd"
  },
  {
    "url": "guide/wxcp/media.html",
    "revision": "e2485cbb2dce6aa31173da6531d950e1"
  },
  {
    "url": "guide/wxcp/oauth.html",
    "revision": "8c3da13206c36b42055d4a1609ee94d6"
  },
  {
    "url": "guide/wxcp/sendmsg.html",
    "revision": "2e33dce74f33ed8b9e262bfa2b984b0e"
  },
  {
    "url": "guide/wxmp/callback.html",
    "revision": "03a0b0cf752bb763fed42a0af9246c7f"
  },
  {
    "url": "guide/wxmp/custom_menu.html",
    "revision": "7b88ced19108b936f4d39ffce1c817b4"
  },
  {
    "url": "guide/wxmp/jssdk.html",
    "revision": "10292e16b6e5483c18b9ec7062cc19f9"
  },
  {
    "url": "guide/wxmp/oauth.html",
    "revision": "5732d9f441f13534b02159c89e1c51a5"
  },
  {
    "url": "guide/wxmp/sendmsg.html",
    "revision": "53f95c95c7a958eb4ae1266fb05dbd1f"
  },
  {
    "url": "guide/wxmp/templatemsg.html",
    "revision": "da4ea1fb8e305663c3144cfa4a116f5b"
  },
  {
    "url": "guide/wxpay/api-v2.html",
    "revision": "3cd499eef24866d9de4e9500eba16562"
  },
  {
    "url": "guide/wxpay/api-v3.html",
    "revision": "308f484539696e7e2a4248f8e3ad5b4a"
  },
  {
    "url": "guide/wxpay/index.html",
    "revision": "fb0c55dc0c341e454982f6636e9ac47c"
  },
  {
    "url": "index.html",
    "revision": "5be2c5514895e8c496a1a85230613787"
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
