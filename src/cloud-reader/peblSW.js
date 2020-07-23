/*
Copyright 2020 Eduworks Corporation
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

var CACHE_NAME = "peblV2";

var FILES_TO_CACHE = [
    "./",
    "./?",


    "./css/all.min.css",
    "./css/readium-all.css",
    "./css/pebl-login-widget.css",
    "./css/annotations.css",


    // "./scripts/jquery-3.3.1.min.js",
    // "./scripts/PeBLCore.js",
    // "./scripts/readium-js-viewer_all.js",
    // "./scripts/pebl-login-widget.js",
    // "./scripts/readium-js-viewer_CLOUDAPP-WORKER.js",
    // "./scripts/mathjax/MathJax.js",
    "./scripts/zip/deflate.js",
    "./scripts/zip/inflate.js",
    "./scripts/zip/z-worker.js",
    "./scripts/pack.js",
    // "./scripts/config.js",


    // "./font-faces/fonts.js",
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
    "./webfonts/fa-brands-400.eot",
    "./webfonts/fa-brands-400.svg",
    "./webfonts/fa-brands-400.ttf",
    "./webfonts/fa-brands-400.woff2",
    "./webfonts/fa-brands-400.woff",
    "./webfonts/fa-regular-400.eot",
    "./webfonts/fa-regular-400.svg",
    "./webfonts/fa-regular-400.ttf",
    "./webfonts/fa-regular-400.woff2",
    "./webfonts/fa-regular-400.woff",
    "./webfonts/fa-solid-900.eot",
    "./webfonts/fa-solid-900.svg",
    "./webfonts/fa-solid-900.ttf",
    "./webfonts/fa-solid-900.woff2",
    "./webfonts/fa-solid-900.woff",


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
    "./images/about_readium_logo.png",
    "./images/eXtension-icon_small.png",
    "./images/PEBL-Logo-Color-small.png",
    "./images/pebl-icons-light_bookmark-list.svg",
    "./images/pebl-icons-light_download.svg",
    "./images/pebl-icons-light_grid-view.svg",
    "./images/pebl-icons-light_highlight-list.svg",
    "./images/pebl-icons-light_list-view.svg",
    "./images/pebl-icons-light_login.svg",
    "./images/pebl-icons-light_logout.svg",
    "./images/pebl-icons-light_new-book.svg",
    "./images/pebl-icons-light_new-bookmark.svg",
    "./images/pebl-icons-light_new-highlight.svg",
    "./images/pebl-icons-light_settings.svg",
    "./images/pebl-icons-light_toc.svg",
    "./images/pebl-icons-wip_bookmark-list.svg",
    "./images/pebl-icons-wip_download.svg",
    "./images/pebl-icons-wip_grid-view.svg",
    "./images/pebl-icons-wip_highlight-list.svg",
    "./images/pebl-icons-wip_list-view.svg",
    "./images/pebl-icons-wip_login.svg",
    "./images/pebl-icons-wip_logout.svg",
    "./images/pebl-icons-wip_new-book.svg",
    "./images/pebl-icons-wip_new-bookmark.svg",
    "./images/pebl-icons-wip_new-highlight.svg",
    "./images/pebl-icons-wip_settings.svg",
    "./images/pebl-icons-wip_toc.svg"
];

self.addEventListener('install',
    (event) => {
        event.waitUntil(
            caches.open(CACHE_NAME).then((openCache) => {
                return openCache.addAll(FILES_TO_CACHE);
            })
        );
    });

let sendMsg = (client, eventName, payload) => {
    if (eventName) {
        payload.eventName = eventName;
    }
    client.postMessage(payload);
}

let addToCache = (client, payload) => {
    let resp = () => {
        sendMsg(client, "addedToCache", true);
    };
    caches.open(payload.rootUrl).then((openCache) => {
        openCache.addAll(payload.items).then(resp).catch(resp);
    });
};

let removeFromCache = (client, payload) => {

};

let dispatchFns = {
    addToCache: addToCache,
    removeFromCache: removeFromCache
}

let dispatch = (source, eventName, payload) => {
    let dispatchFn = dispatchFns[eventName];
    if (dispatchFn) {
        dispatchFn(source, payload);
    }
};

self.addEventListener('message', (event) => {
    dispatch(event.source, event.data.eventName, event.data);
});

self.addEventListener('activate',
    (e) => {
        caches.delete(CACHE_NAME).then(() => {

        });
    });

self.addEventListener('fetch', event => {
    if (event.request.method != 'GET') return;

    var request = event.request;

    var url = new URL(request.url);
    console.log(url);

    if (url.origin == location.origin) {
        event.respondWith(
            fetch(event.request).then(function(response) {
                return caches.open(CACHE_NAME).then(function(openCache) {
                    if (response.status != 206) {
                        openCache.put(request, response.clone());
                    }
                    return response;
                });
            }).catch(function() {
                return caches.match(request);
            }));
    } else
        event.respondWith(fetch(event.request));
});
