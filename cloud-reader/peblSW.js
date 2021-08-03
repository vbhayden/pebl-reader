var timestamp="01:59:59.045942080",CACHE_PREFIX="PeBLV",CACHE_NAME=CACHE_PREFIX+timestamp,FILES_TO_CACHE=["./css/pebl-login-widget.css","./css/annotations.css","./scripts/zip/deflate.js","./scripts/zip/inflate.js","./scripts/zip/z-worker.js","./fonts/glyphicons-halflings-regular.woff2","./webfonts/fa-regular-400.woff2","./manifest.json","./images/pebl-icons-search.svg","./images/PEBL-icon-16.ico","./images/epub_favicon.ico","./images/epub-touch-icon.png","./images/glyphicons_115_text_smaller.png","./images/glyphicons_116_text_bigger.png","./images/ico_doublepage_up.png","./images/ico_singlepage_up.png","./images/library_arrow.png","./images/margin1_off.png","./images/margin4_off.png","./images/pagination.svg","./images/pagination1.svg","./images/PEBL-icon-48.png","./images/PEBL-icon-144.png","./images/PEBL-icon-192.png","./images/webreader_logo_eduworks.png","./images/usmc-android-chrome-192x192.png","./images/usmc-android-chrome-512x512.png","./images/usmc-apple-touch-icon.png","./images/usmc-favicon.ico","./images/usmc-favicon-16x16.png","./images/usmc-favicon-32x32.png","./images/PEBL-Logo-Color-small.png","./images/pebl-icons-light_bookmark-list.svg","./images/pebl-icons-light_download.svg","./images/pebl-icons-light_grid-view.svg","./images/pebl-icons-light_highlight-list.svg","./images/pebl-icons-light_list-view.svg","./images/pebl-icons-light_login.svg","./images/pebl-icons-light_logout.svg","./images/pebl-icons-light_new-book.svg","./images/pebl-icons-light_new-bookmark.svg","./images/pebl-icons-light_new-highlight.svg","./images/pebl-icons-light_settings.svg","./images/pebl-icons-light_toc.svg","./images/pebl-icons-wip_bookmark-list.svg","./images/pebl-icons-wip_download.svg","./images/pebl-icons-wip_grid-view.svg","./images/pebl-icons-wip_highlight-list.svg","./images/pebl-icons-wip_list-view.svg","./images/pebl-icons-wip_login.svg","./images/pebl-icons-wip_logout.svg","./images/pebl-icons-wip_new-book.svg","./images/pebl-icons-wip_new-bookmark.svg","./images/pebl-icons-wip_new-highlight.svg","./images/pebl-icons-wip_settings.svg","./images/pebl-icons-wip_toc.svg","./images/covers/cover1.jpg","./images/covers/cover2.jpg","./images/covers/cover3.jpg","./images/covers/cover4.jpg","./images/covers/cover5.jpg","./images/covers/cover6.jpg","./images/covers/cover7.jpg","./images/covers/cover8.jpg","./css/all.min.css","./webfonts/fa-brands-400.woff2","./webfonts/fa-solid-900.woff2","./css/readium-all.css","./scripts/pack.js"];let batchFetchFiles=async(e,s,i,a)=>{let o,g=s.slice(0),t={};o="string"==typeof i?await caches.open(i):i;let n=async e=>{a&&sendMsg(a,"addToCacheProgress",{total:s.length,remaining:g.length});let i=e||g.pop();if(i&&await o.add(i).catch(e=>{if(t[i]||(t[i]=0),t[i]=t[i]+1,t[i]<7)return n(i);console.log("Failed to retrieve",i,e)}),g.length>0)return n()},c=[];for(let s=0;s<e;s++)c.push(n());for(let s=0;s<e;s++)await c[s]};self.addEventListener("install",e=>{e.waitUntil(batchFetchFiles(4,FILES_TO_CACHE,CACHE_NAME))});let sendMsg=(e,s,i)=>{s&&(i.eventName=s),e.postMessage(i)},updateWorker=()=>{skipWaiting()},addToCache=async(e,s)=>{s.root.endsWith("/")||(s.root=s.root+"/");let i=await caches.open(s.root),a=await i.keys(),o={};for(let e of a)o[e.url]=!0;let g=[];for(let e of s.items)o[e]||g.push(e);g.length>0&&await batchFetchFiles(4,g,i,e),sendMsg(e,"addedToCache",{})},removeCache=async(e,s)=>{s.root.endsWith("/")||(s.root=s.root+"/"),await caches.delete(s.root),sendMsg(e,"removedCache",{})},removeFromCache=async(e,s)=>{s.root.endsWith("/")||(s.root=s.root+"/");let i=await caches.open(s.root);await i.delete(s.target),sendMsg(e,"removedFromCache",{})},dispatchFns={addToCache:addToCache,removeCache:removeCache,removeFromCache:removeFromCache,updateWorker:updateWorker},dispatch=(e,s,i)=>{let a=dispatchFns[s];a&&a(e,i)};self.addEventListener("message",e=>{dispatch(e.source,e.data.eventName,e.data)}),self.addEventListener("activate",async()=>{let e=await caches.keys();for(let s of e)s!==CACHE_NAME&&await caches.delete(s)}),self.addEventListener("fetch",e=>{if("GET"!=e.request.method)return;var s=e.request,i=new URL(s.url);let a,o=i.href.indexOf("/OEBPS/");-1!=o&&(a=i.href.substring(0,o+"/OEBPS/".length)),i.origin==location.origin&&e.respondWith((async()=>{let i=await caches.open(a||CACHE_NAME),o=await i.match(e.request);if(o)return o;{let s=new URL(e.request.url);if(""!==s.search&&(o=await i.match(s.origin+s.pathname),o))return o}let g=await fetch(e.request);return g&&g.status<206&&i.put(s,g.clone()),g})())});