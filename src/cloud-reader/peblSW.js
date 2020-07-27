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

var timestamp = "||timestamp||";
var CACHE_PREFIX = "PeBLV";
var CACHE_NAME = CACHE_PREFIX + timestamp;

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

    // "./fonts/glyphicons-halflings-regular.woff",
    "./webfonts/fa-brands-400.woff",
    "./webfonts/fa-regular-400.woff",
    "./webfonts/fa-solid-900.woff",

    "./manifest.json",

    "./images/pebl-icons-search.svg",
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
    "./images/PEBL-icon-48.png",
    "./images/PEBL-icon-144.png",
    "./images/PEBL-icon-192.png",
    "./images/webreader_logo_eduworks.png",
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

let batchFetchFiles = async (batchSize, incomingFiles, cacheName) => {
    let files = incomingFiles.slice(0);
    let openCache;
    if (typeof cacheName === "string") {
        openCache = await caches.open(cacheName);
    } else {
        openCache = cacheName;
    }
    let p = async () => {
        let pending = [];
        for (let i = 0; i < batchSize; i++) {
            let file = files.pop();
            if (file)
                pending.push(openCache.add(file));
        }
        for (let x = 0; x < pending.length; x++) {
            await pending[x];
        }
        if (files.length > 0) {
            return p();
        }
        return;
    }
    return p();
}

self.addEventListener('install',
    (event) => {
        event.waitUntil(batchFetchFiles(4,
            FILES_TO_CACHE,
            CACHE_NAME));
    });

let sendMsg = (client, eventName, payload) => {
    if (eventName) {
        payload.eventName = eventName;
    }
    client.postMessage(payload);
}

let updateWorker = () => {
    skipWaiting();
}

let addToCache = async (client, payload) => {
    if (!payload.root.endsWith("/")) {
        payload.root = payload.root + "/";
    }
    let defaultCache = await caches.open(CACHE_NAME);
    let openCache = await caches.open(payload.root);
    let cachedRequests = await openCache.keys();
    let cachedDefaultRequests = await defaultCache.keys();
    let keyLookup = {};
    for (let request of cachedRequests) {
        keyLookup[request.url] = true;
    }
    // debugger;
    let toCache = [];
    for (let item of payload.items) {
        if (!keyLookup[item]) {
            toCache.push(item);
        }
    }
    if (toCache.length > 0) {
        await batchFetchFiles(4, toCache, openCache);
    }
    sendMsg(client, "addedToCache", {});
};

let removeCache = async (client, payload) => {
    if (!payload.root.endsWith("/")) {
        payload.root = payload.root + "/";
    }
    await caches.delete(payload.root);
    sendMsg(client, "removedCache", {});
};

let removeFromCache = async (client, payload) => {
    if (!payload.root.endsWith("/")) {
        payload.root = payload.root + "/";
    }
    let openCache = await caches.open(payload.root);
    await openCache.delete(payload.target);
    sendMsg(client, "removedFromCache", {});
};

let dispatchFns = {
    addToCache: addToCache,
    removeCache: removeCache,
    removeFromCache: removeFromCache,
    updateWorker: updateWorker
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
    (async () => {
        let keys = await caches.keys();
        for (let key of keys) {
            if (key !== CACHE_NAME) {
                await caches.delete(key);
            }
        }
    }));

self.addEventListener('fetch', (event) => {
    if (event.request.method != 'GET') return;

    var request = event.request;

    var url = new URL(request.url);

    let root;
    let indexOEBPS = url.href.indexOf("/OEBPS/");
    if (indexOEBPS != -1) {
        root = url.href.substring(0, indexOEBPS + "/OEBPS/".length);
    }

    if (url.origin == location.origin) {
        event.respondWith((async () => {
            let openCache = await caches.open(root || CACHE_NAME);
            let cachedResponse = await openCache.match(event.request);
            if (cachedResponse) {
                return cachedResponse;
            } else {
                let url = new URL(event.request.url);
                if (url.search !== "") {
                    cachedResponse = await openCache.match(url.origin + url.pathname);
                    if (cachedResponse) {
                        return cachedResponse;
                    }
                }
            }

            let externalResponse = await fetch(event.request);
            if (externalResponse && externalResponse.status < 206) {
                openCache.put(request, externalResponse.clone());
            }

            return externalResponse;
        })());
    }
});
