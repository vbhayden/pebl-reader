var globalPebl="object"==typeof globalPebl?globalPebl:{};globalPebl.extension=globalPebl.extension||{},globalPebl.extension.PeblCarouselWidget=function(e){var t={};function r(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(i,a,function(t){return e[t]}.bind(null,a));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=4)}([function(e,t){e.exports=Vue},function(e,t,r){var i=r(2);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,r(5).default)("917b5598",i,!0,{})},function(e,t,r){(e.exports=r(3)(!1)).push([e.i,".carousel_wrapper{display:inline-block;vertical-align:top;width:100%}.carousel_carouselContainer{display:flex;flex-flow:row wrap;background-color:var(--background-light);width:100%;height:400 px}.carousel_carouselHeader{display:flex;background-color:var(--primary-color-dark);width:100%;height:auto}.carousel_carouselBody{position:relative;width:100%;height:360px;overflow:hidden;will-change:transform}.carousel_controlsContainer{display:inline-flex;margin:.5rem;justify-content:space-around;align-items:center;background-color:var(--primary-color-dark);width:100%}.carousel_dotsContainer{display:inline-flex;flex-wrap:wrap}.carousel_dotWrapper{margin-left:5px;margin-right:5px}.carousel_dot,.carousel_leftButton,.carousel_rightButton{background-color:var(--primary-color-dark);padding:0;color:var(--light-font);border:none;cursor:pointer}.carousel_dot:hover,.carousel_leftButton:hover,.carousel_rightButton:hover{background-color:transparent}.carousel_leftButtonImage,.carousel_rightButtonImage{color:var(--light-font);text-shadow:none}.carousel_dotImage{color:var(--primary-color-light);text-shadow:none}.carousel_leftButtonImage,.carousel_rightButtonImage{font-size:1.25rem}.carousel_slide.carousel_imageOnly>.carousel_imageContainer{height:360px !important}.carousel_slide{position:relative;background-color:var(--background-lightest);display:none;height:100%}.carousel_slide.carousel_activeSlide{display:flex;flex-direction:column}.carousel_animateNext{visibility:hidden;opacity:0;z-index:3 !important;width:100% !important}.carousel_animatePrev{visibility:hidden;opacity:0;z-index:1 !important;width:100% !important}.carousel_imageContainer{height:calc(100% - 5em)}.carousel_imageContainer img{object-fit:contain;height:100%;max-height:100% !important;max-width:100% !important;display:block;margin:auto}.carousel_captionContainer{display:flex;padding:var(--spacing-s);overflow:auto;height:5em;font-family:var(--font-family-primary);background-color:var(--background-lighter);border-top:solid 1px var(--background-darker)}\n",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=function(e,t){var r=e[1]||"",i=e[3];if(!i)return r;if(t&&"function"==typeof btoa){var a=(o=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),n=i.sources.map((function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"}));return[r].concat(n).concat([a]).join("\n")}var o;return[r].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r})).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},a=0;a<this.length;a++){var n=this[a][0];"number"==typeof n&&(i[n]=!0)}for(a=0;a<e.length;a++){var o=e[a];"number"==typeof o[0]&&i[o[0]]||(r&&!o[2]?o[2]=r:r&&(o[2]="("+o[2]+") and ("+r+")"),t.push(o))}},t}},function(e,t,r){"use strict";r.r(t);r(1);var i=r(0),a=r.n(i);var n=function(e,t,r,i,a,n,o,s){var l=typeof(e=e||{}).default;"object"!==l&&"function"!==l||(e=e.default);var c,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=r,u._compiled=!0),i&&(u.functional=!0),n&&(u._scopeId=n),o?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},u._ssrRegister=c):a&&(c=s?function(){a.call(this,this.$root.$options.shadowRoot)}:a),c)if(u.functional){u._injectStyles=c;var d=u.render;u.render=function(e,t){return c.call(t),d(e,t)}}else{var p=u.beforeCreate;u.beforeCreate=p?[].concat(p,c):[c]}return{exports:e,options:u}}(a.a.extend({name:"Widget",props:["globalPebl","imagesArray","captionsArray","insertID","zoomable","propertiesObject"],mounted(){},computed:{},data:()=>({imagesArray:[],captionsArray:[],insertID:"",zoomable:!1,activeSlide:0,initialExperienced:!0,globalPebl:null}),methods:{getAltText:function(e){return this.captionsArray&&this.captionsArray.length>0?this.captionsArray[e].replace("&","&#38;"):""},getCaption:function(e){return this.captionsArray&&this.captionsArray.length>0?this.captionsArray[e].replace("&","&#38;"):""},prevSlide:function(){this.initialExperienced&&this.emitExperienced(this.activeSlide),0===this.activeSlide?this.activeSlide=this.imagesArray.length-1:this.activeSlide--,this.emitExperienced(this.activeSlide)},nextSlide:function(){this.initialExperienced&&this.emitExperienced(this.activeSlide),this.activeSlide===this.imagesArray.length-1?this.activeSlide=0:this.activeSlide++,this.emitExperienced(this.activeSlide)},nSlide:function(e){this.initialExperienced&&this.emitExperienced(this.activeSlide),this.activeSlide=e,this.emitExperienced(e)},emitExperienced:function(e){this.globalPebl&&(this.globalPebl.emitEvent(this.globalPebl.events.eventExperienced,{activityType:"slide-carousel",activityId:this.insertID,type:"carousel",description:void 0,name:e.toString()}),this.initialExperienced=!1)}}}),(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"carousel_wrapper",attrs:{"data-theme-target":e.insertID,contenteditable:"false","data-propertiesobject":e.propertiesObject}},[r("div",{staticClass:"carousel_carouselContainer",attrs:{id:e.insertID}},[r("div",{staticClass:"carousel_carouselBody"},e._l(e.imagesArray,(function(t,i){return r("div",{key:t,staticClass:"carousel_slide",class:[e.captionsArray&&0!==e.captionsArray.length&&0!==e.captionsArray[i].length?"":"carousel_imageOnly",e.activeSlide===i?"carousel_activeSlide":""]},[r("div",{staticClass:"carousel_imageContainer"},[r("img",{staticClass:"carousel_image",class:{zoomable:!0===e.zoomable},attrs:{src:t,alt:e.getAltText(i)}})]),e._v(" "),e.captionsArray&&e.captionsArray.length>0?r("div",{staticClass:"carousel_captionContainer"},[r("span",{staticClass:"carousel_caption",domProps:{innerHTML:e._s(e.getCaption(i))}})]):e._e()])})),0),e._v(" "),r("div",{staticClass:"carousel_carouselHeader"},[r("div",{staticClass:"carousel_controlsContainer"},[r("div",{staticClass:"carousel_leftButtonContainer"},[r("button",{staticClass:"carousel_leftButton",on:{click:function(t){return e.prevSlide()}}},[r("i",{staticClass:"fa fa-arrow-left carousel_leftButtonImage"})])]),e._v(" "),r("div",{staticClass:"carousel_dotsContainer"},e._l(e.imagesArray,(function(t,i){return r("div",{key:t,staticClass:"carousel_dotWrapper"},[r("button",{staticClass:"carousel_dot",on:{click:function(t){return e.nSlide(i)}}},[r("i",{staticClass:"fa-circle carousel_dotImage",class:[e.activeSlide===i?"fa":"far"]})])])})),0),e._v(" "),r("div",{staticClass:"carousel_rightButtonContainer"},[r("button",{staticClass:"carousel_rightButton",on:{click:function(t){return e.nextSlide()}}},[r("i",{staticClass:"fa fa-arrow-right carousel_rightButtonImage"})])])])])])])}),[],!1,null,null,null).exports;r.d(t,"insertExtensions",(function(){return s})),r.d(t,"createCarousel",(function(){return l}));var o=window.parent&&window.parent.PeBL?window.parent.PeBL:window.PeBL?window.PeBL:null;function s(){jQuery('.carousel_carouselExtension, .peblExtension[data-peblextension="carousel"], .peblExtension[data-peblExtension="carousel"]').each((function(){var e=this.hasAttribute("id")?this.getAttribute("id"):null,t=this.hasAttribute("data-images")?JSON.parse(this.getAttribute("data-images")):null,r=this.hasAttribute("data-captions")?JSON.parse(this.getAttribute("data-captions")):null,i=!!this.hasAttribute("data-zoomable")&&this.getAttribute("data-zoomable");i="true"===i;var a=this.hasAttribute("data-propertiesobject")?this.getAttribute("data-propertiesobject"):void 0;e&&t&&r&&l('[id="'+e+'"]',e,t,r,i,a)}))}function l(e,t,r,i,s,l){new a.a({el:e,render:e=>e(n,{props:{globalPebl:o,insertID:t,imagesArray:r,captionsArray:i,zoomable:s,propertiesObject:l}})})}jQuery(document).ready((function(){window.parent.PeBLConfig&&window.parent.PeBLConfig.isAuthoring?document.addEventListener("pebleditorready",()=>{s()}):s()}))},function(e,t,r){"use strict";function i(e,t){for(var r=[],i={},a=0;a<t.length;a++){var n=t[a],o=n[0],s={id:e+":"+a,css:n[1],media:n[2],sourceMap:n[3]};i[o]?i[o].parts.push(s):r.push(i[o]={id:o,parts:[s]})}return r}r.r(t),r.d(t,"default",(function(){return f}));var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var n={},o=a&&(document.head||document.getElementsByTagName("head")[0]),s=null,l=0,c=!1,u=function(){},d=null,p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function f(e,t,r,a){c=r,d=a||{};var o=i(e,t);return h(o),function(t){for(var r=[],a=0;a<o.length;a++){var s=o[a];(l=n[s.id]).refs--,r.push(l)}t?h(o=i(e,t)):o=[];for(a=0;a<r.length;a++){var l;if(0===(l=r[a]).refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete n[l.id]}}}}function h(e){for(var t=0;t<e.length;t++){var r=e[t],i=n[r.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(v(r.parts[a]));i.parts.length>r.parts.length&&(i.parts.length=r.parts.length)}else{var o=[];for(a=0;a<r.parts.length;a++)o.push(v(r.parts[a]));n[r.id]={id:r.id,refs:1,parts:o}}}}function g(){var e=document.createElement("style");return e.type="text/css",o.appendChild(e),e}function v(e){var t,r,i=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(i){if(c)return u;i.parentNode.removeChild(i)}if(p){var a=l++;i=s||(s=g()),t=y.bind(null,i,a,!1),r=y.bind(null,i,a,!0)}else i=g(),t=_.bind(null,i),r=function(){i.parentNode.removeChild(i)};return t(e),function(i){if(i){if(i.css===e.css&&i.media===e.media&&i.sourceMap===e.sourceMap)return;t(e=i)}else r()}}var m,b=(m=[],function(e,t){return m[e]=t,m.filter(Boolean).join("\n")});function y(e,t,r,i){var a=r?"":i.css;if(e.styleSheet)e.styleSheet.cssText=b(t,a);else{var n=document.createTextNode(a),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(n,o[t]):e.appendChild(n)}}function _(e,t){var r=t.css,i=t.media,a=t.sourceMap;if(i&&e.setAttribute("media",i),d.ssrId&&e.setAttribute("data-vue-ssr-id",t.id),a&&(r+="\n/*# sourceURL="+a.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}}]);