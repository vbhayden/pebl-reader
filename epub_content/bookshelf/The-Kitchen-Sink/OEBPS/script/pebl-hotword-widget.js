var globalPebl="object"==typeof globalPebl?globalPebl:{};globalPebl.extension=globalPebl.extension||{},globalPebl.extension.PeblHotwordWidget=function(t){var e={};function o(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=t,o.c=e,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/dist/",o(o.s=4)}([function(t,e){t.exports=Vue},function(t,e,o){var r=o(2);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,o(5).default)("917b5598",r,!0,{})},function(t,e,o){(t.exports=o(3)(!1)).push([t.i,".tooltip{position:relative;display:inline-block;border-bottom:1px dotted black;text-indent:0px;cursor:pointer}.tooltip .tooltiptext{opacity:0;display:none;cursor:pointer;width:300px;background-color:var(--background-lighter);border-radius:var(--container-radius);padding:var(--spacing-s);position:absolute;z-index:1;line-height:var(--spacing-m);bottom:125%;transition:opacity 1s;box-shadow:var(--boxshadow-3)}.tooltipArrow{content:'';position:absolute;top:100%;left:50%;margin-left:-8px;width:0;height:0;border-top:8px solid var(--dark-cream);border-right:8px solid transparent;border-left:8px solid transparent;display:none !important}.tooltip.active{background-color:lightyellow;border-color:transparent}.tooltip.active .tooltiptext{display:block;opacity:1;word-break:break-word}\n",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var o=function(t,e){var o=t[1]||"",r=t[3];if(!r)return o;if(e&&"function"==typeof btoa){var n=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map((function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"}));return[o].concat(i).concat([n]).join("\n")}var a;return[o].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+o+"}":o})).join("")},e.i=function(t,o){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},n=0;n<this.length;n++){var i=this[n][0];"number"==typeof i&&(r[i]=!0)}for(n=0;n<t.length;n++){var a=t[n];"number"==typeof a[0]&&r[a[0]]||(o&&!a[2]?a[2]=o:o&&(a[2]="("+a[2]+") and ("+o+")"),e.push(a))}},e}},function(t,e,o){"use strict";o.r(e),o.d(e,"insertExtensions",(function(){return d})),o.d(e,"createHotword",(function(){return u}));o(1);var r=o(0),n=o.n(r);var i=function(t,e,o,r,n,i,a,s){var l=typeof(t=t||{}).default;"object"!==l&&"function"!==l||(t=t.default);var d,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=o,u._compiled=!0),r&&(u.functional=!0),i&&(u._scopeId=i),a?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=d):n&&(d=s?function(){n.call(this,this.$root.$options.shadowRoot)}:n),d)if(u.functional){u._injectStyles=d;var c=u.render;u.render=function(t,e){return d.call(e),c(t,e)}}else{var p=u.beforeCreate;u.beforeCreate=p?[].concat(p,d):[d]}return{exports:t,options:u}}(n.a.extend({name:"Widget",props:["eventBus","globalPebl","globalReadium","insertID","hotwordMain","hotwordText","hotwordClass","propertiesObject"],mounted(){this.eventBus.$on("hideTooltips",()=>{this.active&&this.hideTooltip()})},computed:{getHotwordText:function(){return this.hotwordText.replace(/&/g," and ")},getHotwordMain:function(){return this.hotwordMain.replace(/&/g," and ")}},data:()=>({brTag:"<br/>",active:!1,arrowStyle:""}),methods:{hideTooltip:function(){this.active=!1,this.globalPebl.emitEvent(this.globalPebl.events.eventHid,{name:this.hotwordText,activityType:"hotword",activityId:this.insertID,type:"hotword"})},showTooltip:function(){this.active=!0,this.$nextTick(()=>{this.offsetTop(jQuery(this.$refs.tooltipElem)),this.globalPebl.emitEvent(this.globalPebl.events.eventShowed,{name:this.hotwordText,activityType:"hotword",activityId:this.insertID,type:"hotword"})})},toggleTooltip:function(){this.active?this.hideTooltip():this.showTooltip()},offsetTop:function(t){t.removeAttr("style"),t.css("margin",0);var e,o=!1,r=t.height(),n=t.parent()[0].getBoundingClientRect(),i=t[0].getBoundingClientRect();if(r>n.top-70||i.top<0){t.css("bottom","inherit");var a=-4-t.innerHeight();e="border-top-width: 0px;border-bottom-width: 8px;border-bottom-style: solid;border-bottom-color: var(--dark-cream);margin-top: "+a+"px;",o=!0}setTimeout(()=>{this.offsetRight(t,o,e)},10)},offsetRight:function(t,e,o){var r,n=!1,i=t[0].getBoundingClientRect(),a=jQuery(window).width(),s=jQuery(window).height(),l=parseInt(t.css("marginLeft")),d=s>a,u=$("html").css("column-gap");if(i.right>a){var c=a-i.right;t.css("margin-left",c),r="margin-left: "+(l-c-8)+"px;",n=!0}else if(!d&&i.right>a/2&&i.left<a/2){c=(d?a:a/2)-i.right-(d?0:u?parseInt(u):0);t.css("margin-left",c),r="margin-left: "+(l-c-8)+"px;",n=!0}setTimeout(()=>{this.offsetLeft(t,e,o,n,r)},10)},offsetLeft:function(t,e,o,r,n){var i,a=!1,s=t[0].getBoundingClientRect(),l=jQuery(window).width(),d=jQuery(window).height(),u=t.css("left"),c=d>l;if(s.left<0||!c&&s.left<l/2&&s.right>l/2){t.css("left",0);var p=-8+parseInt(u);i="margin-left: "+p+"px;",a=!0}setTimeout(()=>{this.offsetArrow(t,e,o,r,n,a,i)},10)},offsetArrow:function(t,e,o,r,n,i,a){jQuery('<div id="tooltipArrow" class="tooltipArrow"></div>');e&&i?this.arrowStyle=a+o:e&&r?this.arrowStyle=n+o:e?this.arrowStyle=o:i?this.arrowStyle=a:r&&(this.arrowStyle=n)}}}),(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("span",{staticClass:"tooltip",class:[t.hotwordClass,{active:t.active}],attrs:{"data-propertiesobject":t.propertiesObject,"data-theme-target":t.insertID,id:t.insertID,contenteditable:"false"},on:{click:t.toggleTooltip}},[t._v("\n        "+t._s(t.getHotwordMain)+"\n        "),t.active?o("span",{ref:"tooltipElem",staticClass:"tooltiptext"},[t._v("\n            "+t._s(t.getHotwordText)+"\n            "),o("div",{staticClass:"tooltipArrow",style:t.arrowStyle,attrs:{id:"tooltipArrow"}})]):t._e()])}),[],!1,null,null,null).exports,a=window.parent&&window.parent.PeBL?window.parent.PeBL:window.PeBL?window.PeBL:null,s=window.parent.READIUM,l=new n.a({});function d(){jQuery('.hotword_hotwordExtension, .peblExtension[data-peblextension="hotword"], .peblExtension[data-peblExtension="hotword"]').each((function(){var t=this.getAttribute("id");u('[id="'+t+'"]',t,this.getAttribute("data-hotword"),this.getAttribute("data-hotwordText")||this.getAttribute("data-hotwordtext"),this.hasAttribute("data-hotwordClass")?this.getAttribute("data-hotwordClass"):null,this.hasAttribute("data-propertiesobject")?this.getAttribute("data-propertiesobject"):void 0)}))}function u(t,e,o,r,d,u){new n.a({el:t,render:t=>t(i,{props:{eventBus:l,globalPebl:a,globalReadium:s,insertID:e,hotwordMain:o,hotwordText:r,hotwordClass:d,propertiesObject:u}})})}jQuery(document).ready(()=>{jQuery(document).mouseup((function(t){l.$emit("hideTooltips")})),window.parent.PeBLConfig&&window.parent.PeBLConfig.isAuthoring?document.addEventListener("pebleditorready",()=>{d()}):d()})},function(t,e,o){"use strict";function r(t,e){for(var o=[],r={},n=0;n<e.length;n++){var i=e[n],a=i[0],s={id:t+":"+n,css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):o.push(r[a]={id:a,parts:[s]})}return o}o.r(e),o.d(e,"default",(function(){return f}));var n="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!n)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},a=n&&(document.head||document.getElementsByTagName("head")[0]),s=null,l=0,d=!1,u=function(){},c=null,p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function f(t,e,o,n){d=o,c=n||{};var a=r(t,e);return h(a),function(e){for(var o=[],n=0;n<a.length;n++){var s=a[n];(l=i[s.id]).refs--,o.push(l)}e?h(a=r(t,e)):a=[];for(n=0;n<o.length;n++){var l;if(0===(l=o[n]).refs){for(var d=0;d<l.parts.length;d++)l.parts[d]();delete i[l.id]}}}}function h(t){for(var e=0;e<t.length;e++){var o=t[e],r=i[o.id];if(r){r.refs++;for(var n=0;n<r.parts.length;n++)r.parts[n](o.parts[n]);for(;n<o.parts.length;n++)r.parts.push(b(o.parts[n]));r.parts.length>o.parts.length&&(r.parts.length=o.parts.length)}else{var a=[];for(n=0;n<o.parts.length;n++)a.push(b(o.parts[n]));i[o.id]={id:o.id,refs:1,parts:a}}}}function g(){var t=document.createElement("style");return t.type="text/css",a.appendChild(t),t}function b(t){var e,o,r=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(r){if(d)return u;r.parentNode.removeChild(r)}if(p){var n=l++;r=s||(s=g()),e=m.bind(null,r,n,!1),o=m.bind(null,r,n,!0)}else r=g(),e=y.bind(null,r),o=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else o()}}var v,w=(v=[],function(t,e){return v[t]=e,v.filter(Boolean).join("\n")});function m(t,e,o,r){var n=o?"":r.css;if(t.styleSheet)t.styleSheet.cssText=w(e,n);else{var i=document.createTextNode(n),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function y(t,e){var o=e.css,r=e.media,n=e.sourceMap;if(r&&t.setAttribute("media",r),c.ssrId&&t.setAttribute("data-vue-ssr-id",e.id),n&&(o+="\n/*# sourceURL="+n.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}}]);