var globalPebl="object"==typeof globalPebl?globalPebl:{};globalPebl.extension=globalPebl.extension||{},globalPebl.extension.PeblDiscussionWidget=function(e){var t={};function s(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}return s.m=e,s.c=t,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(i,n,function(t){return e[t]}.bind(null,n));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/dist/",s(s.s=4)}([function(e,t){e.exports=Vue},function(e,t,s){var i=s(2);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,s(5).default)("917b5598",i,!0,{})},function(e,t,s){(e.exports=s(3)(!1)).push([e.i,'.pebl__discussion--lightbox{position:fixed;top:10vh;left:0;right:0;min-height:400px;height:80vh;background-color:var(--background-light);z-index:5000;max-width:700px;margin:0 auto;display:flex;flex-direction:column;-webkit-box-shadow:var(--boxshadow-4);box-shadow:var(--boxshadow-4)}.pebl__discussion--lightbox__textarea{display:block;box-sizing:border-box;width:calc(100% - 1em);max-width:700px;word-wrap:break-word;height:6em;resize:vertical;margin:.5em;color:#222;font-weight:normal;padding:0.5em;font-size:1.2em;line-height:1.5em;border-radius:var(--container-radius);border:0.1em solid var(--background-light)}.pebl__discussion--lightbox__content{display:flex;background-color:var(--background-lighter);flex-direction:column;flex-grow:1;min-height:0}.pebl__discussion--lightbox__header{display:flex;background-color:var(--secondary-color-light);justify-content:space-between;align-items:center;color:white;padding:1em;font-family:var(--font-family-secondary)}.discussionLightboxCloseButtonContainer{width:1em;height:1em;font-size:1.5em;display:flex;align-items:center;justify-content:center;cursor:pointer}.discussionInputBody{display:flex;flex-direction:column;margin:1em;min-height:135px}.discussionButtonContainer{display:flex;flex-direction:row-reverse;flex-shrink:0}.discussionResponseBody{display:flex;flex-direction:column;flex-grow:1;flex-shrink:500;min-height:0;overflow:auto;-webkit-overflow-scrolling:touch;font-family:"Helvetica Neue", sans-serif;font-style:normal;font-weight:normal;font-size:14px;border-top:1px solid #aaa;clear:both;margin-top:2em;scroll-behavior:smooth}.discussionResponseBody .response{position:relative;padding:1em 1em 1em 1em;margin:0;background:none}.discussionResponseBody .response.pinned{background-color:var(--pinned-color);cursor:pointer}.discussionResponseBody .response.pinned:hover{opacity:.5}.discussionResponseBody .your.response>.userId{color:var(--primary-color);font-weight:600}.discussionResponseBody .response .userId{font-weight:500;font-size:1.1em}.discussionResponseBody .response .timestamp{margin-left:.5em;float:right;font-size:.8em;color:var(--dark-font)}.discussionResponseBody .response .message{font-style:normal;font-weight:normal;margin:.5em 0em 1em}.discussionResponseBody .response .pinMessage{font-style:italic;font-weight:normal;margin:.5em 0em 1em}.discussionSubmitButton,.replySubmitButton{cursor:pointer;-webkit-border-radius:var(--button-radius);-moz-border-radius:var(--button-radius);border-radius:var(--button-radius);padding:.5rem 2rem .5rem 2rem;text-decoration:none;margin:0rem 1em 1em 0em;border:none;background:var(--primary-color);color:#ffffff}.replyContainer{display:block}.replyTextArea{flex-shrink:0;font-size:1em;width:calc(100% - 32px);padding:1em;border:0.1em solid var(--background-light);border-radius:var(--container-radius);margin-bottom:1em;height:3em}.messageReplyButton{color:var(--primary-color-dark);cursor:pointer;float:right;text-decoration:underline}button.replySubmitButton{float:right}button.replyCloseButton{cursor:pointer;-webkit-border-radius:var(--button-radius);-moz-border-radius:var(--button-radius);border-radius:var(--button-radius);padding:.5rem 2rem .5rem 2rem;text-decoration:none;margin:0em 1em 1em 1em;float:right;border:none;color:#ffffff;background:var(--secondary-color)}.chatReplies{padding-top:2em;padding-left:.5rem}.chatReplies>div.yourResponse,.chatReplies>div.response{border-left:2px solid var(--background-light)}.callout>button.chat{display:flex;flex-direction:row-reverse;align-items:center;justify-content:center;padding-left:2em;background-image:none;float:right;background-color:var(--primary-button-color)}.callout p{font-weight:bolder;font-style:italic;margin:0;padding:0}button.chat>i{font-size:1.25em;margin-right:0.5em}.messageControls i{margin-left:.5em;margin-right:.5em;cursor:pointer}.messageControls i:hover{opacity:.5}.discussionDetailTextContainer{padding-left:1em;font-family:var(--font-family-secondary)}\n',""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var s=function(e,t){var s=e[1]||"",i=e[3];if(!i)return s;if(t&&"function"==typeof btoa){var n=(r=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),o=i.sources.map((function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"}));return[s].concat(o).concat([n]).join("\n")}var r;return[s].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+s+"}":s})).join("")},t.i=function(e,s){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},n=0;n<this.length;n++){var o=this[n][0];"number"==typeof o&&(i[o]=!0)}for(n=0;n<e.length;n++){var r=e[n];"number"==typeof r[0]&&i[r[0]]||(s&&!r[2]?r[2]=s:s&&(r[2]="("+r[2]+") and ("+s+")"),t.push(r))}},t}},function(e,t,s){"use strict";s.r(t),s.d(t,"insertExtensions",(function(){return h})),s.d(t,"createDiscussion",(function(){return g})),s.d(t,"resetExtension",(function(){return m})),s.d(t,"handleChatButtonClick",(function(){return b}));s(1);var i=s(0),n=s.n(i);function o(e,t,s,i,n,o,r,a){var l=typeof(e=e||{}).default;"object"!==l&&"function"!==l||(e=e.default);var d,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=s,u._compiled=!0),i&&(u.functional=!0),o&&(u._scopeId=o),r?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},u._ssrRegister=d):n&&(d=a?function(){n.call(this,this.$root.$options.shadowRoot)}:n),d)if(u.functional){u._injectStyles=d;var c=u.render;u.render=function(e,t){return d.call(t),c(e,t)}}else{var p=u.beforeCreate;u.beforeCreate=p?[].concat(p,d):[d]}return{exports:e,options:u}}var r=o(n.a.extend({name:"Widget",props:["globalPebl","globalReadium","globalConfiguration","globalLightbox","insertID","buttonText","question","thread","detailText","sharing","peblAction","propertiesObject"],mounted(){},computed:{},data:()=>({brTag:"<br/>"}),methods:{}}),(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{"data-propertiesobject":e.propertiesObject,"data-theme-target":e.insertID,contenteditable:"false"}},[s("div",{staticClass:"callout"},[s("button",{staticClass:"chat",attrs:{id:e.thread,"data-theme-target":e.insertID,"data-peblAction":e.peblAction,detailText:e.detailText,"data-sharing":e.sharing}},[e._v("\n                "+e._s(e.buttonText.replace(/\&/g," and "))+"\n                "),s("i",{staticClass:"fa fa-comments"})]),e._v(" "),s("p",[e._v("\n                "+e._s(e.question.replace(/<br\/>/g,e.brTag).replace(/\&/g," and "))+"\n            ")])])])}),[],!1,null,null,null).exports,a=o(n.a.extend({name:"Response",props:["globalPebl","globalReadium","message","replies","thread","deletePermission","pinPermission","isPinned","reportPermission"],computed:{replyToPlaceholder:function(){return"Reply to "+this.message.name}},data:()=>({discussionReplyButtonText:"Reply",replying:!1,replySubmitButtonText:"Submit",replyCloseButtonText:"Cancel",replyText:"",pinText:"",pinTextPlaceholder:"Add description for this pinned message",pinSubmitButtonText:"Pin",pinCloseButtonText:"Cancel",pinning:!1}),methods:{replyDiscussion:function(){this.replying=!0,this.pinning=!1},replyCancel:function(){this.replying=!1,this.replyText=""},replySubmit:function(){this.replyText.trim().length>0&&this.globalPebl.storage.getCurrentBook(e=>{let t={prompt:this.message.text,thread:this.thread,text:this.replyText,replyThread:this.message.id,isPrivate:!1,groupId:this.message.groupId,book:e,peblAction:this.message.peblAction,activityType:"discussion",activivityId:this.thread,cfi:void 0,idRef:void 0};if(this.globalReadium){let e=this.globalReadium.reader.bookmarkCurrentPage();e&&(e=JSON.parse(e)),t.cfi=e.contentCFI,t.idRef=e.idref}this.globalPebl.emitEvent(this.globalPebl.events.newMessage,t),this.replyCancel()})},pinCancel:function(){this.pinning=!1,this.pinText=""},pinSubmit:function(){this.$emit("pin-message",{id:this.message.id,replyThread:this.message.replyThread,pinMessage:this.pinText}),this.pinCancel()},pinMessage:function(){this.pinning=!0,this.replying=!1}}}),(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"response",class:{your:e.message.mine,pinned:e.isPinned},attrs:{id:e.isPinned?void 0:e.message.id},on:{click:function(t){return e.$emit("scroll-to")}}},[s("span",{staticClass:"userId"},[e.isPinned?s("i",{staticClass:"fa fa-star"}):e._e(),e._v(" "+e._s(e.message.name))]),e._v(" "),s("span",{staticClass:"timestamp"},[e._v(e._s(new Date(e.message.timestamp).toLocaleString()))]),e._v(" "),s("p",{staticClass:"message"},[e._v(e._s(e.message.text))]),e._v(" "),e.isPinned&&e.message.pinMessage&&e.message.pinMessage.length>0?s("p",{staticClass:"pinMessage"},[e._v(e._s(e.message.pinMessage))]):e._e(),e._v(" "),s("div",{staticClass:"messageControls"},[e.deletePermission&&!e.isPinned?s("i",{staticClass:"fa fa-trash",attrs:{title:"Delete Message"},on:{click:function(t){return e.$emit("delete-message",{id:e.message.id,replyThread:e.message.replyThread})}}}):e._e(),e._v(" "),!e.pinPermission||e.isPinned||e.message.pinned?e._e():s("i",{staticClass:"fa fa-thumbtack",attrs:{title:"Pin Message"},on:{click:e.pinMessage}}),e._v(" "),e.pinPermission&&e.isPinned?s("i",{staticClass:"fa fa-trash",attrs:{title:"Unpin Message"},on:{click:function(t){return t.stopPropagation(),e.$emit("unpin-message",{id:e.message.id,replyThread:e.message.replyThread})}}}):e._e(),e._v(" "),e.reportPermission&&!e.isPinned?s("i",{staticClass:"fa fa-flag",attrs:{title:"Report Message"},on:{click:function(t){return e.$emit("report-message",{id:e.message.id,replyThread:e.message.replyThread})}}}):e._e()]),e._v(" "),e.isPinned||e.message.isPrivate?e._e():s("a",{staticClass:"messageReplyButton",on:{click:e.replyDiscussion}},[e._v(e._s(e.discussionReplyButtonText))]),e._v(" "),e.replying?s("div",{staticClass:"replyContainer"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.replyText,expression:"replyText"}],staticClass:"replyTextArea",attrs:{autofocus:"autofocus",placeholder:e.replyToPlaceholder},domProps:{value:e.replyText},on:{input:function(t){t.target.composing||(e.replyText=t.target.value)}}}),e._v(" "),s("button",{staticClass:"replySubmitButton",on:{click:e.replySubmit}},[e._v(e._s(e.replySubmitButtonText))]),e._v(" "),s("button",{staticClass:"replyCloseButton",on:{click:e.replyCancel}},[e._v(e._s(e.replyCloseButtonText))])]):e._e(),e._v(" "),e.pinning?s("div",{attrs:{clas:"replyContainer"}},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.pinText,expression:"pinText"}],staticClass:"replyTextArea",attrs:{autofocus:"autofocus","aria-placeholder":e.pinTextPlaceholder},domProps:{value:e.pinText},on:{input:function(t){t.target.composing||(e.pinText=t.target.value)}}}),e._v(" "),s("button",{staticClass:"replySubmitButton",on:{click:e.pinSubmit}},[e._v(e._s(e.pinSubmitButtonText))]),e._v(" "),s("button",{staticClass:"replyCloseButton",on:{click:e.pinCancel}},[e._v(e._s(e.pinCloseButtonText))])]):e._e(),e._v(" "),e.isPinned?e._e():s("div",{staticClass:"chatReplies",attrs:{"data-replyId":e.message.id}},e._l(e.replies[e.message.id],(function(t){return s("Response",{key:t.id,attrs:{message:t,replies:e.replies,globalPebl:e.globalPebl,globalReadium:e.globalReadium,thread:e.thread,deletePermission:e.deletePermission,pinPermission:e.pinPermission,reportPermission:e.reportPermission},on:{"delete-message":function(t){return e.$emit("delete-message",t)},"pin-message":function(t){return e.$emit("pin-message",t)},"report-message":function(t){return e.$emit("report-message",t)}}})})),1)])}),[],!1,null,null,null).exports,l=o(n.a.extend({name:"Popup",props:["globalPebl","globalReadium","globalConfiguration","globalLightbox","question","element","options"],components:{Response:a},mounted(){this.globalPebl.user.getUser(e=>{this.thread=this.element.id,this.element.hasAttribute("data-sharing")&&(this.sharing=this.element.getAttribute("data-sharing")),"team"!==this.sharing||e.currentTeam||(this.sharing="class"),"class"!==this.sharing||e.currentClass||(this.sharing="all"),"private"===this.sharing&&(this.private=!0),"team"===this.sharing?(this.groupId=e.currentTeam,e.role&&("instructor"===e.role||"admin"===e.role?(this.deletePermission=!0,this.pinPermission=!0):this.reportPermission=!0)):"class"===this.sharing&&(this.groupId=e.currentClass,e.role&&("instructor"===e.role||"admin"===e.role?(this.deletePermission=!0,this.pinPermission=!0):this.reportPermission=!0)),this.groupId&&(!e.role||"instructor"!==e.role&&"admin"!==e.role?this.reportPermission=!0:(this.deletePermission=!0,this.pinPermission=!0)),this.element.hasAttribute("data-peblAction")&&(this.peblAction=this.element.getAttribute("data-peblAction")),this.element.hasAttribute("data-detailText")&&(this.detailText=this.element.getAttribute("data-detailText")),this.id=this.element.getAttribute("data-theme-target"),this.globalPebl.subscribeThread(this.thread,!1,this.messageHandler(),{isPrivate:this.private,groupId:this.groupId,peblAction:this.peblAction})})},computed:{},data:()=>({brTag:"<br/>",private:!1,thread:"",sharing:"all",id:"",groupId:void 0,peblAction:void 0,detailText:void 0,discussionTextModel:"",discussionSubmitButtonText:"Submit",discussionMessages:[],discussionReplies:{},pinnedMessages:[],deletePermission:!1,pinPermission:!1,reportPermission:!1,uniqueMessages:{},uniquePinnedMessages:{}}),methods:{scrollToMessage:function(e){let t=document.getElementById(e);t&&t.scrollIntoView()},reportMessage:function(e){if(window.confirm("Report this message?"))if(e.replyThread){for(let t=0;t<this.discussionReplies[e.replyThread].length;t++)if(this.discussionReplies[e.replyThread][t].id===e.id){this.globalPebl.emitEvent(this.globalPebl.events.reportedMessage,{message:this.discussionReplies[e.replyThread][t],activityId:this.thread,activityType:"discussion"});break}}else for(let t=0;t<this.discussionMessages.length;t++)if(this.discussionMessages[t].id===e.id){this.globalPebl.emitEvent(this.globalPebl.events.reportedMessage,{message:this.discussionMessages[t],activityId:this.thread,activityType:"discussion"});break}},pinMessage:function(e){if(window.confirm("Pin this message?"))if(e.replyThread){for(let t=0;t<this.discussionReplies[e.replyThread].length;t++)if(this.discussionReplies[e.replyThread][t].id===e.id){this.$set(this.discussionReplies[e.replyThread][t],"pinned",!0),this.$set(this.discussionReplies[e.replyThread][t],"pinMessage",e.pinMessage),this.pinnedMessages.unshift(this.discussionReplies[e.replyThread][t]),this.globalPebl.emitEvent(this.globalPebl.events.pinnedMessage,{message:this.discussionReplies[e.replyThread][t],activityId:this.thread,activityType:"discussion"});break}}else for(let t=0;t<this.discussionMessages.length;t++)if(this.discussionMessages[t].id===e.id){this.$set(this.discussionMessages[t],"pinned",!0),this.$set(this.discussionMessages[t],"pinMessage",e.pinMessage),this.pinnedMessages.unshift(this.discussionMessages[t]),this.globalPebl.emitEvent(this.globalPebl.events.pinnedMessage,{message:this.discussionMessages[t],activityId:this.thread,activityType:"discussion"});break}},unpinMessage:function(e){if(window.confirm("Unpin this message?")){if(e.replyThread){for(let t=0;t<this.discussionReplies[e.replyThread].length;t++)if(this.discussionReplies[e.replyThread][t].id===e.id){this.$set(this.discussionReplies[e.replyThread][t],"pinned",!1),this.$set(this.discussionReplies[e.replyThread][t],"pinMessage",void 0),this.globalPebl.emitEvent(this.globalPebl.events.unpinnedMessage,{message:this.discussionReplies[e.replyThread][t],activityId:this.thread,activityType:"discussion"});break}}else for(let t=0;t<this.discussionMessages.length;t++)if(this.discussionMessages[t].id===e.id){this.$set(this.discussionMessages[t],"pinned",!1),this.$set(this.discussionMessages[t],"pinMessage",void 0),this.globalPebl.emitEvent(this.globalPebl.events.unpinnedMessage,{message:this.discussionMessages[t],activityId:this.thread,activityType:"discussion"});break}for(let t=0;t<this.pinnedMessages.length;t++)if(this.pinnedMessages[t].id===e.id){this.pinnedMessages.splice(t,1);break}}},deleteMessage:function(e){if(window.confirm("Delete this message? This action cannot be undone.")){let t=!1;if(e.replyThread){for(let s=0;s<this.discussionReplies[e.replyThread].length;s++)if(this.discussionReplies[e.replyThread][s].id===e.id){this.discussionReplies[e.replyThread][s].pinned&&(t=!0);let i=JSON.parse(JSON.stringify(this.discussionReplies[e.replyThread][s]));this.discussionReplies[e.replyThread].splice(s,1),this.globalPebl.emitEvent(this.globalPebl.events.removedMessage,{message:i,activityId:this.thread,activityType:"discussion"});break}}else for(let s=0;s<this.discussionMessages.length;s++)if(this.discussionMessages[s].id===e.id){this.discussionMessages[s].pinned&&(t=!0);let e=JSON.parse(JSON.stringify(this.discussionMessages[s]));this.discussionMessages.splice(s,1),this.globalPebl.emitEvent(this.globalPebl.events.removedMessage,{message:e,activityId:this.thread,activityType:"discussion"});break}if(t)for(let t=0;t<this.pinnedMessages.length;t++)if(this.pinnedMessages[t].id===e.id){let e=JSON.parse(JSON.stringify(this.pinnedMessages[t]));this.pinnedMessages.splice(t,1),this.globalPebl.emitEvent(this.globalPebl.events.unpinnedMessage,{message:e,activityId:this.thread,activityType:"discussion"});break}}},closePopup:function(){this.$destroy(),jQuery("#pebl__discussion--lightbox").remove()},messageHandler:function(){return e=>{e.sort(this.sortMessages),this.globalPebl.user.getUser(t=>{if(t)for(let s of e){if("voided"===s.verb.display["en-US"])return;let e=t.identity===s.actor.account.name;s.mine=e,this.uniqueMessages[s.id]||(s.replyThread?(this.discussionReplies[s.replyThread]||this.$set(this.discussionReplies,s.replyThread,[]),this.discussionReplies[s.replyThread].unshift(s)):this.discussionMessages.unshift(s),this.uniqueMessages[s.id]=!0),s.pinned&&(this.uniquePinnedMessages[s.id]||(this.pinnedMessages.unshift(s),this.uniquePinnedMessages[s.id]=!0))}})}},sortMessages:function(e,t){return new Date(e.timestamp).getTime()-new Date(t.timestamp).getTime()},createThread:function(){this.discussionTextModel.trim().length>0&&this.globalPebl.storage.getCurrentBook(e=>{let t={prompt:this.question,thread:this.thread,text:this.discussionTextModel,isPrivate:this.private,groupId:this.groupId,book:e,peblAction:this.peblAction,activityType:"discussion",activityId:this.thread,cfi:void 0,idRef:void 0};if(this.globalReadium){let e=this.globalReadium.reader.bookmarkCurrentPage();e&&(e=JSON.parse(e)),t.cfi=e.contentCFI,t.idRef=e.idref}this.private?this.globalPebl.emitEvent(this.globalPebl.events.eventNoted,t):this.globalPebl.emitEvent(this.globalPebl.events.newMessage,t),this.discussionTextModel=""})}}}),(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"pebl__discussion--lightbox peblModal",attrs:{id:"pebl__discussion--lightbox","data-theme-target":e.id}},[s("div",{staticClass:"pebl__discussion--lightbox__content"},[s("div",{staticClass:"pebl__discussion--lightbox__header"},[s("div",{staticClass:"discussionPromptContainer"},[s("span",{staticClass:"discussionPrompt"},[e._v(e._s(e.question.replace(/<br\/>/g,e.brTag).replace(/\&/g," and ")))])]),e._v(" "),s("div",{staticClass:"discussionLightboxCloseButtonContainer"},[s("i",{staticClass:"fa fa-times",on:{click:e.closePopup}})])]),e._v(" "),s("div",{staticClass:"discussionInputBody"},[s("div",{staticClass:"discussionDetailTextContainer"},[e.detailText?s("span",{staticClass:"discussionDetailText"},[e._v(e._s(e.detailText.replace(/<br\/>/g,e.brTag).replace(/\&/g," and ")))]):e._e()]),e._v(" "),s("div",{staticClass:"discussionTextAreaContainer"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.discussionTextModel,expression:"discussionTextModel"}],staticClass:"pebl__discussion--lightbox__textarea",attrs:{autofocus:"autofocus"},domProps:{value:e.discussionTextModel},on:{input:function(t){t.target.composing||(e.discussionTextModel=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"discussionButtonContainer"},[s("button",{staticClass:"discussionSubmitButton",on:{click:e.createThread}},[e._v(e._s(e.discussionSubmitButtonText))])])]),e._v(" "),s("div",{staticClass:"discussionResponseBody"},[e._l(e.pinnedMessages,(function(t){return s("Response",{key:t.id,attrs:{isPinned:!0,message:t,globalPebl:e.globalPebl,globalReadium:e.globalReadium,thread:e.thread,deletePermission:e.deletePermission,pinPermission:e.pinPermission},on:{"scroll-to":function(s){return e.scrollToMessage(t.id)},"delete-message":e.deleteMessage,"unpin-message":e.unpinMessage}})})),e._v(" "),e._l(e.discussionMessages,(function(t){return s("Response",{key:t.id,attrs:{message:t,replies:e.discussionReplies,globalPebl:e.globalPebl,globalReadium:e.globalReadium,thread:e.thread,deletePermission:e.deletePermission,pinPermission:e.pinPermission,reportPermission:e.reportPermission},on:{"delete-message":e.deleteMessage,"pin-message":e.pinMessage,"report-message":e.reportMessage}})}))],2)])])}),[],!1,null,null,null).exports,d=window.parent&&window.parent.PeBL?window.parent.PeBL:window.PeBL?window.PeBL:null,u=window.parent.READIUM,c=window.parent.Configuration,p=window.parent.Lightbox;function h(){jQuery('.discussion_discussionExtension, .peblExtension[data-peblextension="discussion"], .peblExtension[data-peblExtension="discussion"]').each((function(){var e=this.getAttribute("data-buttonText")||jQuery(this)[0].getAttribute("data-buttontext"),t=this.getAttribute("data-prompt"),s=this.getAttribute("data-id");s||(s=this.getAttribute("id"));var i=this.hasAttribute("data-detailText")?jQuery(this)[0].getAttribute("data-detailText"):void 0,n=this.getAttribute("id");g('[id="'+n+'"]',n,e,t,s,i,this.hasAttribute("data-sharing")?jQuery(this)[0].getAttribute("data-sharing"):void 0,this.hasAttribute("data-peblAction")?this.getAttribute("data-peblAction"):void 0,this.hasAttribute("data-propertiesobject")?this.getAttribute("data-propertiesobject"):void 0)}))}function g(e,t,s,i,o,a,l,h,g){new n.a({el:e,render:e=>e(r,{props:{globalPebl:d,globalReadium:u,globalConfiguration:c,globalLightbox:p,insertID:t,buttonText:s,question:i,thread:o,detailText:a,sharing:l,peblAction:h,propertiesObject:g}})})}function m(){jQuery(".pebl__discussion--lightbox").remove()}function b(e,t){let s=document.createElement("div"),i=d.utils.getUuid();s.id=i,document.body.appendChild(s),d.user.isLoggedIn(s=>{if(!s&&p)p.createLoginForm();else{jQuery(".lightBox").remove();let s=t&&t.prompt?t.prompt:jQuery(e).parent().children("p:first").html();null!=e.id&&""!=e.id&&0==jQuery(e).parent().children(".chatBox").length&&new n.a({el:'[id="'+i+'"]',render:i=>i(l,{props:{globalPebl:d,globalReadium:u,globalConfiguration:c,globalLightbox:p,question:s,element:e,options:t}})})}})}jQuery(document).ready(()=>{window.parent.PeBLConfig&&window.parent.PeBLConfig.isAuthoring?document.addEventListener("pebleditorready",()=>{h()}):h(),jQuery(document.body).on("click",".chat",e=>{d.extension.PeblDiscussionWidget.handleChatButtonClick(e.currentTarget)})}),jQuery(document).mouseup(e=>{var t=jQuery(".peblModal");t.is(e.target)||0!==t.has(e.target).length||t.remove()})},function(e,t,s){"use strict";function i(e,t){for(var s=[],i={},n=0;n<t.length;n++){var o=t[n],r=o[0],a={id:e+":"+n,css:o[1],media:o[2],sourceMap:o[3]};i[r]?i[r].parts.push(a):s.push(i[r]={id:r,parts:[a]})}return s}s.r(t),s.d(t,"default",(function(){return h}));var n="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!n)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},r=n&&(document.head||document.getElementsByTagName("head")[0]),a=null,l=0,d=!1,u=function(){},c=null,p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(e,t,s,n){d=s,c=n||{};var r=i(e,t);return g(r),function(t){for(var s=[],n=0;n<r.length;n++){var a=r[n];(l=o[a.id]).refs--,s.push(l)}t?g(r=i(e,t)):r=[];for(n=0;n<s.length;n++){var l;if(0===(l=s[n]).refs){for(var d=0;d<l.parts.length;d++)l.parts[d]();delete o[l.id]}}}}function g(e){for(var t=0;t<e.length;t++){var s=e[t],i=o[s.id];if(i){i.refs++;for(var n=0;n<i.parts.length;n++)i.parts[n](s.parts[n]);for(;n<s.parts.length;n++)i.parts.push(b(s.parts[n]));i.parts.length>s.parts.length&&(i.parts.length=s.parts.length)}else{var r=[];for(n=0;n<s.parts.length;n++)r.push(b(s.parts[n]));o[s.id]={id:s.id,refs:1,parts:r}}}}function m(){var e=document.createElement("style");return e.type="text/css",r.appendChild(e),e}function b(e){var t,s,i=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(i){if(d)return u;i.parentNode.removeChild(i)}if(p){var n=l++;i=a||(a=m()),t=y.bind(null,i,n,!1),s=y.bind(null,i,n,!0)}else i=m(),t=x.bind(null,i),s=function(){i.parentNode.removeChild(i)};return t(e),function(i){if(i){if(i.css===e.css&&i.media===e.media&&i.sourceMap===e.sourceMap)return;t(e=i)}else s()}}var f,v=(f=[],function(e,t){return f[e]=t,f.filter(Boolean).join("\n")});function y(e,t,s,i){var n=s?"":i.css;if(e.styleSheet)e.styleSheet.cssText=v(t,n);else{var o=document.createTextNode(n),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(o,r[t]):e.appendChild(o)}}function x(e,t){var s=t.css,i=t.media,n=t.sourceMap;if(i&&e.setAttribute("media",i),c.ssrId&&e.setAttribute("data-vue-ssr-id",t.id),n&&(s+="\n/*# sourceURL="+n.sources[0]+" */",s+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),e.styleSheet)e.styleSheet.cssText=s;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(s))}}}]);