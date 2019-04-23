var CACHE_NAME = "peblV2";

var FILES_TO_CACHE = [
    "./",
    "./?",

    
    "./css/readium-all.css",
    "./css/pebl-discussion-widget.css",
    "./css/annotations.css",

    
    "./scripts/jquery-3.3.1.min.js",
    "./scripts/PEBLCore.js",
    "./scripts/readium-js-viewer_all.js",
    "./scripts/pebl-login-widget.js",
    "./scripts/readium-js-viewer_CLOUDAPP-WORKER.js",
    "./scripts/mathjax/MathJax.js",
    "./scripts/zip/deflate.js",
    "./scripts/zip/inflate.js",
    "./scripts/zip/z-worker.js",
    "./scripts/config.js",

    
    "./font-faces/fonts.js",
    "./fonts/glyphicons-halflings-regular.eot",
    "./fonts/glyphicons-halflings-regular.svg",
    "./fonts/glyphicons-halflings-regular.ttf",
    "./fonts/glyphicons-halflings-regular.woff",
    "./fonts/glyphicons-halflings-regular.woff2",
    "./font-faces/Noto-Serif/Noto-Serif.css",
    "./font-faces/Noto-Serif/Noto-Serif-700.woff",
    "./font-faces/Noto-Serif/Noto-Serif-700italic.woff",
    "./font-faces/Noto-Serif/Noto-Serif-italic.woff",
    "./font-faces/Noto-Serif/Noto-Serif-regular.woff",
    "./font-faces/OpenDyslexic/OpenDyslexic.css",
    "./font-faces/OpenDyslexic/OpenDyslexic-Bold.woff",
    "./font-faces/OpenDyslexic/OpenDyslexic-BoldItalic.woff",
    "./font-faces/OpenDyslexic/OpenDyslexic-Italic.woff",
    "./font-faces/OpenDyslexic/OpenDyslexic-Regular.woff",
    "./font-faces/Open-Sans/Open-Sans.css",
    "./font-faces/Open-Sans/Open-Sans-700.woff",
    "./font-faces/Open-Sans/Open-Sans-700italic.woff",
    "./font-faces/Open-Sans/Open-Sans-italic.woff",
    "./font-faces/Open-Sans/Open-Sans-regular.woff",

    
    "./manifest.json",
    
    
    "./images/PEBL-icon-16.ico",
    "./images/covers/cover1.jpg",
    "./images/covers/cover2.jpg",
    "./images/covers/cover3.jpg",
    "./images/covers/cover4.jpg",
    "./images/covers/cover5.jpg",
    "./images/covers/cover6.jpg",
    "./images/covers/cover7.jpg",
    "./images/covers/cover8.jpg",
    "./images/epub_favicon.ico",
    "./images/epub-touch-icon.png",
    "./images/glyphicons_115_text_smaller.png",
    "./images/glyphicons_116_text_bigger.png",
    "./images/ico_doublepage_up.png",
    "./images/ico_singlepage_up.png",
    "./images/library_arrow.png",
    "./images/margin1_off.png",
    "./images/margin4_off.png",
    "./images/pagination.svg",
    "./images/pagination1.svg",
    "./images/partner_logos.png",
    "./images/PEBL-icon-48.png",
    "./images/PEBL-icon-144.png",
    "./images/PEBL-icon-192.png",
    "./images/webreader_logo_eduworks.png",
    "./images/about_readium_logo.png"
];

self.addEventListener('install',
                      function (event) {
                          event.waitUntil(
                              caches.open(CACHE_NAME).then(function (openCache) {
                                  return openCache.addAll(FILES_TO_CACHE);
                              })
                          );
                      });

self.addEventListener('activate',
                      function (e) {
                          
                      });

self.addEventListener('fetch', event => {
    if (event.request.method != 'GET') return;

    var request = event.request;
    
    var url = new URL(request.url);
    
    if (url.origin == location.origin) {
        event.respondWith(
            fetch(event.request).then(function (response) {
                return caches.open(CACHE_NAME).then(function (openCache) {                    
                    if (response.status != 206) {
                        openCache.put(request, response.clone());
                    }
                    return response;
                });             
            }).catch(function () {
                return caches.match(request);
            }));
    } else
        event.respondWith(fetch(event.request));
});
