/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/xapi.ts
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var NAMESPACE_USER_MESSAGES = "user-";
var PREFIX_PEBL_THREAD = "peblThread://";
var PREFIX_PEBL = "pebl://";
var PREFIX_PEBL_EXTENSION = "https://www.peblproject.com/definitions.html#";
// -------------------------------
var XApiStatement = /** @class */ (function () {
    function XApiStatement(raw) {
        this.id = raw.id;
        this.actor = raw.actor;
        this.verb = raw.verb;
        this.context = raw.context;
        this.stored = raw.stored;
        this.timestamp = raw.timestamp;
        this.result = raw.result;
        this["object"] = raw.object;
        this.attachments = raw.attachments;
    }
    XApiStatement.prototype.toXAPI = function () {
        return new XApiStatement(this);
    };
    XApiStatement.prototype.getActorId = function () {
        return this.actor.mbox || this.actor.openid ||
            (this.actor.account && this.actor.account.name);
    };
    return XApiStatement;
}());

// -------------------------------
var Reference = /** @class */ (function (_super) {
    __extends(Reference, _super);
    function Reference(raw) {
        var _this = _super.call(this, raw) || this;
        _this.thread = _this["object"].id;
        if (_this.thread.indexOf(PREFIX_PEBL_THREAD) != -1)
            _this.thread = _this.thread.substring(PREFIX_PEBL_THREAD.length);
        var extensions = _this["object"].extensions;
        _this.name = _this.object.definition.name["en-US"];
        _this.book = extensions[PREFIX_PEBL_EXTENSION + "book"];
        _this.docType = extensions[PREFIX_PEBL_EXTENSION + "docType"];
        _this.location = extensions[PREFIX_PEBL_EXTENSION + "location"];
        _this.card = extensions[PREFIX_PEBL_EXTENSION + "card"];
        _this.url = extensions[PREFIX_PEBL_EXTENSION + "url"];
        _this.target = extensions[PREFIX_PEBL_EXTENSION + "target"];
        _this.externalURL = extensions[PREFIX_PEBL_EXTENSION + "externalURL"];
        return _this;
    }
    Reference.is = function (x) {
        var verb = x.verb.display["en-US"];
        return (verb == "pushed") || (verb == "pulled");
    };
    return Reference;
}(XApiStatement));

// -------------------------------
var Annotation = /** @class */ (function (_super) {
    __extends(Annotation, _super);
    function Annotation(raw) {
        var _this = _super.call(this, raw) || this;
        _this.title = _this.object.definition.name && _this.object.definition.name["en-US"];
        _this.text = _this.object.definition.description && _this.object.definition.description["en-US"];
        _this.book = _this.object.id;
        if (_this.book.indexOf(PREFIX_PEBL) != -1)
            _this.book = _this.book.substring(_this.book.indexOf(PREFIX_PEBL) + PREFIX_PEBL.length);
        else if (_this.book.indexOf(PREFIX_PEBL_THREAD) != -1)
            _this.book = _this.book.substring(_this.book.indexOf(PREFIX_PEBL_THREAD) + PREFIX_PEBL_THREAD.length);
        _this.owner = _this.getActorId();
        var extensions = _this.object.definition.extensions;
        _this.type = extensions[PREFIX_PEBL_EXTENSION + "type"];
        _this.cfi = extensions[PREFIX_PEBL_EXTENSION + "cfi"];
        _this.idRef = extensions[PREFIX_PEBL_EXTENSION + "idRef"];
        _this.style = extensions[PREFIX_PEBL_EXTENSION + "style"];
        return _this;
    }
    Annotation.is = function (x) {
        var verb = x.verb.display["en-US"];
        return (verb == "commented");
    };
    return Annotation;
}(XApiStatement));

// -------------------------------
var SharedAnnotation = /** @class */ (function (_super) {
    __extends(SharedAnnotation, _super);
    function SharedAnnotation(raw) {
        return _super.call(this, raw) || this;
    }
    SharedAnnotation.is = function (x) {
        var verb = x.verb.display["en-US"];
        return (verb == "shared");
    };
    return SharedAnnotation;
}(Annotation));

// -------------------------------
var Action = /** @class */ (function (_super) {
    __extends(Action, _super);
    function Action(raw) {
        var _this = _super.call(this, raw) || this;
        _this.activityId = _this.object.id;
        _this.action = _this.verb.display["en-US"];
        if (_this.object.definition) {
            _this.name = _this.object.definition.name && _this.object.definition.name["en-US"];
            _this.description = _this.object.definition.description && _this.object.definition.description["en-US"];
            var extensions = _this.object.definition.extensions;
            if (extensions) {
                _this.target = extensions[PREFIX_PEBL_EXTENSION + "target"];
                _this.type = extensions[PREFIX_PEBL_EXTENSION + "type"];
            }
        }
        return _this;
    }
    Action.is = function (x) {
        var verb = x.verb.display["en-US"];
        return (verb == "preferred") || (verb == "morphed") || (verb == "interacted");
    };
    return Action;
}(XApiStatement));

// -------------------------------
var Navigation = /** @class */ (function (_super) {
    __extends(Navigation, _super);
    function Navigation(raw) {
        var _this = _super.call(this, raw) || this;
        _this.type = _this.verb.display["en-US"];
        _this.activityId = _this.object.id;
        var extensions = _this.object.definition.extensions;
        if (extensions) {
            _this.firstCfi = extensions[PREFIX_PEBL_EXTENSION + "firstCfi"];
            _this.lastCfi = extensions[PREFIX_PEBL_EXTENSION + "lastCfi"];
        }
        return _this;
    }
    Navigation.is = function (x) {
        var verb = x.verb.display["en-US"];
        return (verb == "paged-next") || (verb == "paged-prev") || (verb == "paged-jump") || (verb == "interacted") ||
            (verb == "completed");
    };
    return Navigation;
}(XApiStatement));

// -------------------------------
var Message = /** @class */ (function (_super) {
    __extends(Message, _super);
    function Message(raw) {
        var _this = _super.call(this, raw) || this;
        _this.thread = _this.object.id;
        if (_this.thread.indexOf(PREFIX_PEBL_THREAD) != -1)
            _this.thread = _this.thread.substring(PREFIX_PEBL_THREAD.length);
        _this.prompt = _this.object.definition.name["en-US"];
        _this.name = _this.actor.name;
        _this.direct = _this.thread == (NAMESPACE_USER_MESSAGES + _this.getActorId());
        _this.text = _this.object.definition.description["en-US"];
        return _this;
    }
    Message.is = function (x) {
        var verb = x.verb.display["en-US"];
        return (verb == "responded");
    };
    return Message;
}(XApiStatement));

// -------------------------------
var Voided = /** @class */ (function (_super) {
    __extends(Voided, _super);
    function Voided(raw) {
        var _this = _super.call(this, raw) || this;
        _this.thread = _this.context.contextActivities.parent[0].id;
        if (_this.thread.indexOf(PREFIX_PEBL_THREAD) != -1)
            _this.thread = _this.thread.substring(PREFIX_PEBL_THREAD.length);
        _this.target = _this.object.id;
        return _this;
    }
    Voided.is = function (x) {
        var verb = x.verb.display["en-US"];
        return (verb == "voided");
    };
    return Voided;
}(XApiStatement));

// -------------------------------
var Question = /** @class */ (function (_super) {
    __extends(Question, _super);
    function Question(raw) {
        var _this = _super.call(this, raw) || this;
        _this.score = _this.result.score.raw;
        _this.min = _this.result.score.min;
        _this.max = _this.result.score.max;
        _this.completion = _this.result.completion;
        _this.success = _this.result.success;
        _this.response = _this.result.response;
        _this.prompt = _this.object.definition.description["en-US"];
        _this.activityId = _this.object.id;
        var choices = _this.object.definition.choices;
        _this.answers = [];
        for (var _i = 0, _a = Object.keys(choices); _i < _a.length; _i++) {
            var key = _a[_i];
            _this.answers.push(choices[key].description["en-US"]);
        }
        return _this;
    }
    Question.is = function (x) {
        var verb = x.verb.display["en-US"];
        return (verb == "answered");
    };
    return Question;
}(XApiStatement));

// -------------------------------
var Quiz = /** @class */ (function (_super) {
    __extends(Quiz, _super);
    function Quiz(raw) {
        var _this = _super.call(this, raw) || this;
        _this.score = _this.result.score.raw;
        _this.min = _this.result.score.min;
        _this.max = _this.result.score.max;
        _this.completion = _this.result.completion;
        _this.success = _this.result.success;
        _this.quizId = _this.object.definition.name["en-US"];
        _this.quizName = _this.object.definition.description["en-US"];
        _this.activityId = _this.object.id;
        return _this;
    }
    Quiz.is = function (x) {
        var verb = x.verb.display["en-US"];
        return (verb == "failed") || (verb == "passed");
    };
    return Quiz;
}(XApiStatement));

// -------------------------------
var Session = /** @class */ (function (_super) {
    __extends(Session, _super);
    function Session(raw) {
        var _this = _super.call(this, raw) || this;
        _this.activityId = _this.object.id;
        if (_this.object.definition) {
            _this.activityName = _this.object.definition.name && _this.object.definition.name["en-US"];
            _this.activityDescription = _this.object.definition.description && _this.object.definition.description["en-US"];
        }
        _this.type = _this.verb.display["en-US"];
        return _this;
    }
    Session.is = function (x) {
        var verb = x.verb.display["en-US"];
        return (verb == "entered") || (verb == "exited") || (verb == "logged-in") ||
            (verb == "logged-out") || (verb == "terminated") || (verb == "initialized");
    };
    return Session;
}(XApiStatement));

// -------------------------------

// CONCATENATED MODULE: ./src/storage.ts

var MASTER_INDEX = "master";
var CURRENT_BOOK = "peblCurrentBook";
var CURRENT_USER = "peblCurrentUser";
// const VERB_INDEX = "verbs";
var storage_IndexedDBStorageAdapter = /** @class */ (function () {
    function IndexedDBStorageAdapter(callback) {
        this.invocationQueue = [];
        var request = window.indexedDB.open("pebl", 11);
        var self = this;
        request.onupgradeneeded = function () {
            var db = request.result;
            var objectStores = db.objectStoreNames;
            for (var i = 0; i < objectStores.length; i++)
                db.deleteObjectStore(objectStores[i]);
            var eventStore = db.createObjectStore("events", { keyPath: ["identity", "id"] });
            var annotationStore = db.createObjectStore("annotations", { keyPath: ["identity", "id"] });
            var competencyStore = db.createObjectStore("competencies", { keyPath: ["url", "identity"] });
            var generalAnnotationStore = db.createObjectStore("sharedAnnotations", { keyPath: ["identity", "id"] });
            var outgoingStore = db.createObjectStore("outgoing", { keyPath: ["identity", "id"] });
            var messageStore = db.createObjectStore("messages", { keyPath: ["identity", "id"] });
            db.createObjectStore("user", { keyPath: "identity" });
            db.createObjectStore("state", { keyPath: "id" });
            db.createObjectStore("assets", { keyPath: ["identity", "id"] });
            var queuedReferences = db.createObjectStore("queuedReferences", { keyPath: ["identity", "id"] });
            var notificationStore = db.createObjectStore("notifications", { keyPath: ["identity", "id"] });
            var tocStore = db.createObjectStore("tocs", { keyPath: ["identity", "containerPath", "section", "pageKey"] });
            db.createObjectStore("lrsAuth", { keyPath: "id" });
            eventStore.createIndex(MASTER_INDEX, ["identity", "book"]);
            annotationStore.createIndex(MASTER_INDEX, ["identity", "book"]);
            competencyStore.createIndex(MASTER_INDEX, "identity");
            generalAnnotationStore.createIndex(MASTER_INDEX, "book");
            outgoingStore.createIndex(MASTER_INDEX, "identity");
            messageStore.createIndex(MASTER_INDEX, ["identity", "thread"]);
            queuedReferences.createIndex(MASTER_INDEX, "identity");
            notificationStore.createIndex(MASTER_INDEX, "identity");
            tocStore.createIndex(MASTER_INDEX, ["identity", "containerPath"]);
        };
        request.onsuccess = function () {
            self.db = request.result;
            callback();
            for (var i = 0; i < self.invocationQueue.length; i++)
                self.invocationQueue[i]();
            self.invocationQueue = [];
        };
        request.onerror = function (event) {
            console.log("error opening indexeddb", event);
        };
    }
    IndexedDBStorageAdapter.prototype.getAll = function (index, query, callback) {
        var request = index.openCursor(query);
        var result = [];
        request.onerror = function (e) {
            console.log("Error", query, e);
        };
        request.onsuccess = function () {
            var r = request.result;
            if (result) {
                if (r) {
                    result.push(r.value);
                    r.continue();
                }
                else if (callback != null)
                    callback(result);
            }
            else {
                if (callback != null) {
                    if (r != null)
                        callback(r.value);
                    else
                        callback([]);
                }
            }
        };
    };
    IndexedDBStorageAdapter.prototype.cleanRecord = function (r) {
        var recordType = typeof (r);
        if (r && (recordType == "object")) {
            var rec = r;
            for (var _i = 0, _a = Object.keys(r); _i < _a.length; _i++) {
                var p = _a[_i];
                var v = rec[p];
                var t = typeof (v);
                if (t == "function")
                    delete rec[p];
                else if (t == "array")
                    for (var i = 0; i < v.length; i++)
                        this.cleanRecord(v[i]);
                else if (t == "object")
                    this.cleanRecord(v);
            }
        }
        else if (recordType == "array") {
            var rec = r;
            for (var i = 0; i < rec.length; i++)
                this.cleanRecord(rec[i]);
        }
        return r;
    };
    // -------------------------------
    IndexedDBStorageAdapter.prototype.saveSharedAnnotations = function (userProfile, stmts, callback) {
        if (this.db) {
            if (stmts instanceof SharedAnnotation) {
                var ga = stmts;
                ga.identity = userProfile.identity;
                var request = this.db.transaction(["sharedAnnotations"], "readwrite").objectStore("sharedAnnotations").put(ga);
                request.onerror = function (e) {
                    console.log(e);
                };
                request.onsuccess = function () {
                    if (callback)
                        callback();
                };
            }
            else {
                var objectStore_1 = this.db.transaction(["sharedAnnotations"], "readwrite").objectStore("sharedAnnotations");
                var stmtsCopy_1 = stmts.slice(0);
                var processCallback_1 = function () {
                    var record = stmtsCopy_1.pop();
                    if (record) {
                        var ga = record;
                        ga.identity = userProfile.identity;
                        var request = objectStore_1.put(ga);
                        request.onerror = processCallback_1;
                        request.onsuccess = processCallback_1;
                    }
                    else {
                        if (callback)
                            callback();
                    }
                };
                processCallback_1();
            }
        }
        else {
            var self_1 = this;
            this.invocationQueue.push(function () {
                self_1.saveSharedAnnotations(userProfile, stmts, callback);
            });
        }
    };
    IndexedDBStorageAdapter.prototype.getSharedAnnotations = function (userProfile, book, callback) {
        if (this.db) {
            var index = this.db.transaction(["sharedAnnotations"], "readonly").objectStore("sharedAnnotations").index(MASTER_INDEX);
            var param = [userProfile.identity, book];
            this.getAll(index, IDBKeyRange.only(param), callback);
        }
        else {
            var self_2 = this;
            this.invocationQueue.push(function () {
                self_2.getSharedAnnotations(userProfile, book, callback);
            });
        }
    };
    IndexedDBStorageAdapter.prototype.removeSharedAnnotation = function (userProfile, id, callback) {
        if (this.db) {
            var request = this.db.transaction(["sharedAnnotations"], "readwrite").objectStore("sharedAnnotations").delete(IDBKeyRange.only([userProfile.identity, id]));
            request.onerror = function (e) {
                console.log(e);
            };
            request.onsuccess = function () {
                if (callback)
                    callback();
            };
        }
        else {
            var self_3 = this;
            this.invocationQueue.push(function () {
                self_3.removeSharedAnnotation(userProfile, id, callback);
            });
        }
    };
    // -------------------------------
    IndexedDBStorageAdapter.prototype.getAnnotations = function (userProfile, book, callback) {
        if (this.db) {
            var index = this.db.transaction(["annotations"], "readonly").objectStore("annotations").index(MASTER_INDEX);
            var param = [userProfile.identity, book];
            this.getAll(index, IDBKeyRange.only(param), callback);
        }
        else {
            var self_4 = this;
            this.invocationQueue.push(function () {
                self_4.getAnnotations(userProfile, book, callback);
            });
        }
    };
    IndexedDBStorageAdapter.prototype.saveAnnotations = function (userProfile, stmts, callback) {
        if (this.db) {
            if (stmts instanceof Annotation) {
                var ga = stmts;
                ga.identity = userProfile.identity;
                var request = this.db.transaction(["annotations"], "readwrite").objectStore("annotations").put(ga);
                request.onerror = function (e) {
                    console.log(e);
                };
                request.onsuccess = function () {
                    if (callback)
                        callback();
                };
            }
            else {
                var objectStore_2 = this.db.transaction(["annotations"], "readwrite").objectStore("annotations");
                var stmtsCopy_2 = stmts.slice(0);
                var self_5 = this;
                var processCallback_2 = function () {
                    var record = stmtsCopy_2.pop();
                    if (record) {
                        var clone = record;
                        clone.identity = userProfile.identity;
                        var request = objectStore_2.put(self_5.cleanRecord(clone));
                        request.onerror = processCallback_2;
                        request.onsuccess = processCallback_2;
                    }
                    else {
                        if (callback)
                            callback();
                    }
                };
                processCallback_2();
            }
        }
        else {
            var self_6 = this;
            this.invocationQueue.push(function () {
                self_6.saveAnnotations(userProfile, stmts, callback);
            });
        }
    };
    IndexedDBStorageAdapter.prototype.removeAnnotation = function (userProfile, id, callback) {
        if (this.db) {
            var request = this.db.transaction(["annotations"], "readwrite").objectStore("annotations").delete(IDBKeyRange.only([userProfile.identity, id]));
            request.onerror = function (e) {
                console.log(e);
            };
            request.onsuccess = function () {
                if (callback)
                    callback();
            };
        }
        else {
            var self_7 = this;
            this.invocationQueue.push(function () {
                self_7.removeAnnotation(userProfile, id, callback);
            });
        }
    };
    // -------------------------------
    IndexedDBStorageAdapter.prototype.removeCurrentUser = function (callback) {
        if (this.db) {
            var request = this.db.transaction(["state"], "readwrite").objectStore("state").delete(IDBKeyRange.only(CURRENT_USER));
            request.onerror = function (e) {
                console.log(e);
            };
            request.onsuccess = function () {
                if (callback)
                    callback();
            };
        }
        else {
            var self_8 = this;
            this.invocationQueue.push(function () {
                self_8.removeCurrentUser(callback);
            });
        }
    };
    IndexedDBStorageAdapter.prototype.saveCurrentUser = function (userProfile, callback) {
        var pack = {
            id: CURRENT_USER,
            value: userProfile.identity
        };
        if (this.db) {
            var request = this.db.transaction(["state"], "readwrite").objectStore("state").put(this.cleanRecord(pack));
            request.onerror = function (e) {
                console.log(e);
            };
            request.onsuccess = function () {
                if (callback)
                    callback();
            };
        }
        else {
            var self_9 = this;
            this.invocationQueue.push(function () {
                self_9.saveCurrentUser(userProfile, callback);
            });
        }
    };
    IndexedDBStorageAdapter.prototype.getCurrentUser = function (callback) {
        if (this.db) {
            var request_1 = this.db.transaction(["state"], "readonly").objectStore("state").get(CURRENT_USER);
            request_1.onerror = function (e) {
                console.log(e);
            };
            request_1.onsuccess = function () {
                var r = request_1.result;
                if (r != null)
                    callback(r.value);
                else
                    callback();
            };
        }
        else {
            var self_10 = this;
            this.invocationQueue.push(function () {
                self_10.getCurrentUser(callback);
            });
        }
    };
    // -------------------------------
    IndexedDBStorageAdapter.prototype.getUserProfile = function (userIdentity, callback) {
        if (this.db) {
            var request_2 = this.db.transaction(["user"], "readonly").objectStore("user").get(userIdentity);
            request_2.onerror = function (e) {
                console.log(e);
            };
            request_2.onsuccess = function () {
                var r = request_2.result;
                if (r != null)
                    callback(r);
                else
                    callback();
            };
        }
        else {
            var self_11 = this;
            this.invocationQueue.push(function () {
                self_11.getUserProfile(userIdentity, callback);
            });
        }
    };
    IndexedDBStorageAdapter.prototype.saveUserProfile = function (userProfile, callback) {
        if (this.db) {
            var request = this.db.transaction(["user"], "readwrite").objectStore("user").put(this.cleanRecord(userProfile));
            request.onerror = function (e) {
                console.log(e);
            };
            request.onsuccess = function () {
                if (callback)
                    callback();
            };
        }
        else {
            var self_12 = this;
            this.invocationQueue.push(function () {
                self_12.saveUserProfile(userProfile, callback);
            });
        }
    };
    // -------------------------------
    IndexedDBStorageAdapter.prototype.saveCurrentActivity = function (book, callback) {
        var pack = {
            value: book,
            id: CURRENT_BOOK
        };
        if (this.db) {
            var request = this.db.transaction(["state"], "readwrite").objectStore("state").put(this.cleanRecord(pack));
            request.onerror = function (e) {
                console.log(e);
            };
            request.onsuccess = function () {
                if (callback)
                    callback();
            };
        }
        else {
            var self_13 = this;
            this.invocationQueue.push(function () {
                self_13.saveCurrentActivity(book, callback);
            });
        }
    };
    IndexedDBStorageAdapter.prototype.getCurrentActivity = function (callback) {
        if (this.db) {
            var request_3 = this.db.transaction(["state"], "readonly").objectStore("state").get(CURRENT_BOOK);
            request_3.onerror = function (e) {
                console.log(e);
            };
            request_3.onsuccess = function () {
                var r = request_3.result;
                if (callback != null) {
                    if (r != null)
                        callback(r.value);
                    else
                        callback();
                }
            };
        }
        else {
            var self_14 = this;
            this.invocationQueue.push(function () {
                self_14.getCurrentActivity(callback);
            });
        }
    };
    IndexedDBStorageAdapter.prototype.removeCurrentActivity = function (callback) {
        if (this.db) {
            var request = this.db.transaction(["state"], "readwrite").objectStore("state").delete(IDBKeyRange.only(CURRENT_BOOK));
            request.onerror = function (e) {
                console.log(e);
            };
            request.onsuccess = function () {
                if (callback)
                    callback();
            };
        }
        else {
            var self_15 = this;
            this.invocationQueue.push(function () {
                self_15.removeCurrentActivity(callback);
            });
        }
    };
    // -------------------------------
    IndexedDBStorageAdapter.prototype.saveCurrentBook = function (book, callback) {
        var pack = {
            value: book,
            id: CURRENT_BOOK
        };
        if (this.db) {
            var request = this.db.transaction(["state"], "readwrite").objectStore("state").put(this.cleanRecord(pack));
            request.onerror = function (e) {
                console.log(e);
            };
            request.onsuccess = function () {
                if (callback)
                    callback();
            };
        }
        else {
            var self_16 = this;
            this.invocationQueue.push(function () {
                self_16.saveCurrentBook(book, callback);
            });
        }
    };
    IndexedDBStorageAdapter.prototype.getCurrentBook = function (callback) {
        if (this.db) {
            var request_4 = this.db.transaction(["state"], "readonly").objectStore("state").get(CURRENT_BOOK);
            request_4.onerror = function (e) {
                console.log(e);
            };
            request_4.onsuccess = function () {
                var r = request_4.result;
                if (callback != null) {
                    if (r != null)
                        callback(r.value);
                    else
                        callback();
                }
            };
        }
        else {
            var self_17 = this;
            this.invocationQueue.push(function () {
                self_17.getCurrentBook(callback);
            });
        }
    };
    // -------------------------------
    IndexedDBStorageAdapter.prototype.saveEvent = function (userProfile, events, callback) {
        if (this.db) {
            if (events instanceof XApiStatement) {
                var ga = events;
                ga.identity = userProfile.identity;
                var request = this.db.transaction(["events"], "readwrite").objectStore("events").put(ga);
                request.onerror = function (e) {
                    console.log(e);
                };
                request.onsuccess = function () {
                    if (callback)
                        callback();
                };
            }
            else {
                var objectStore_3 = this.db.transaction(["events"], "readwrite").objectStore("events");
                var stmtsCopy_3 = events.slice(0);
                var self_18 = this;
                var processCallback_3 = function () {
                    var record = stmtsCopy_3.pop();
                    if (record) {
                        var clone = record;
                        clone.identity = userProfile.identity;
                        var request = objectStore_3.put(self_18.cleanRecord(clone));
                        request.onerror = processCallback_3;
                        request.onsuccess = processCallback_3;
                    }
                    else {
                        if (callback)
                            callback();
                    }
                };
                processCallback_3();
            }
        }
        else {
            var self_19 = this;
            this.invocationQueue.push(function () {
                self_19.saveEvent(userProfile, events, callback);
            });
        }
    };
    IndexedDBStorageAdapter.prototype.getEvents = function (userProfile, book, callback) {
        if (this.db) {
            var index = this.db.transaction(["events"], "readonly").objectStore("events").index(MASTER_INDEX);
            var param = [userProfile.identity, book];
            var self_20 = this;
            self_20.getAll(index, IDBKeyRange.only(param), callback);
        }
        else {
            var self_21 = this;
            this.invocationQueue.push(function () {
                self_21.getEvents(userProfile, book, callback);
            });
        }
    };
    // -------------------------------
    IndexedDBStorageAdapter.prototype.getCompetencies = function (userProfile, callback) {
        if (this.db) {
            var os = this.db.transaction(["competencies"], "readonly").objectStore("competencies");
            var index_1 = os.index(MASTER_INDEX);
            var param_1 = userProfile.identity;
            var self_22 = this;
            this.getAll(index_1, IDBKeyRange.only(param_1), function (arr) {
                if (arr.length == 0)
                    self_22.getAll(index_1, IDBKeyRange.only([param_1]), callback);
                else
                    callback(arr);
            });
        }
        else {
            var self_23 = this;
            this.invocationQueue.push(function () {
                self_23.getCompetencies(userProfile, callback);
            });
        }
    };
    IndexedDBStorageAdapter.prototype.saveCompetencies = function (userProfile, competencies, callback) {
        if (this.db) {
            var os_1 = this.db.transaction(["competencies"], "readwrite").objectStore("competencies");
            for (var _i = 0, _a = Object.keys(competencies); _i < _a.length; _i++) {
                var p = _a[_i];
                var c = competencies[p];
                c.url = p;
                c.identity = userProfile.identity;
                competencies.push(c);
            }
            var self_24 = this;
            var processCallback_4 = function () {
                if (competencies.length > 0) {
                    var record = competencies.pop();
                    var request = os_1.put(self_24.cleanRecord(record));
                    request.onerror = processCallback_4;
                    request.onsuccess = processCallback_4;
                }
                else {
                    if (callback)
                        callback();
                }
            };
            processCallback_4();
        }
        else {
            var self_25 = this;
            this.invocationQueue.push(function () {
                self_25.saveCompetencies(userProfile, competencies, callback);
            });
        }
    };
    // -------------------------------
    IndexedDBStorageAdapter.prototype.saveOutgoing = function (userProfile, stmt, callback) {
        if (this.db) {
            var clone = stmt.toXAPI();
            clone.identity = userProfile.identity;
            var request = this.db.transaction(["outgoing"], "readwrite").objectStore("outgoing").put(this.cleanRecord(clone));
            request.onerror = function (e) {
                console.log(e);
            };
            request.onsuccess = function () {
                if (callback)
                    callback();
            };
        }
        else {
            var self_26 = this;
            this.invocationQueue.push(function () {
                self_26.saveOutgoing(userProfile, stmt, callback);
            });
        }
    };
    IndexedDBStorageAdapter.prototype.getOutgoing = function (userProfile, callback) {
        if (this.db) {
            var os = this.db.transaction(["outgoing"], "readonly").objectStore("outgoing");
            var index_2 = os.index(MASTER_INDEX);
            var param_2 = userProfile.identity;
            var self_27 = this;
            this.getAll(index_2, IDBKeyRange.only(param_2), function (arr) {
                if (arr.length == 0)
                    self_27.getAll(index_2, IDBKeyRange.only([param_2]), callback);
                else
                    callback(arr);
            });
        }
        else {
            var self_28 = this;
            this.invocationQueue.push(function () {
                self_28.getOutgoing(userProfile, callback);
            });
        }
    };
    IndexedDBStorageAdapter.prototype.removeOutgoing = function (userProfile, toClear, callback) {
        if (this.db) {
            var objectStore_4 = this.db.transaction(["outgoing"], "readwrite").objectStore("outgoing");
            var toClearCopy_1 = toClear.slice(0);
            var processCallback_5 = function () {
                if (toClear.length > 0) {
                    var record = toClearCopy_1.pop();
                    if (record) {
                        var request = objectStore_4.delete(IDBKeyRange.only([userProfile.identity, record.id]));
                        request.onerror = processCallback_5;
                        request.onsuccess = processCallback_5;
                    }
                    else {
                        if (callback)
                            callback();
                    }
                }
            };
            processCallback_5();
        }
        else {
            var self_29 = this;
            this.invocationQueue.push(function () {
                self_29.removeOutgoing(userProfile, toClear, callback);
            });
        }
    };
    // -------------------------------
    IndexedDBStorageAdapter.prototype.saveMessages = function (userProfile, stmts, callback) {
        if (this.db) {
            if (stmts instanceof Message) {
                var clone = stmts;
                clone.identity = userProfile.identity;
                var request = this.db.transaction(["messages"], "readwrite").objectStore("messages").put(this.cleanRecord(clone));
                request.onerror = function (e) {
                    console.log(e);
                };
                request.onsuccess = function () {
                    if (callback)
                        callback();
                };
            }
            else {
                var objectStore_5 = this.db.transaction(["messages"], "readwrite").objectStore("messages");
                var stmtsCopy_4 = stmts.slice(0);
                var self_30 = this;
                var processCallback_6 = function () {
                    var record = stmtsCopy_4.pop();
                    if (record) {
                        var clone = record;
                        clone.identity = userProfile.identity;
                        var request = objectStore_5.put(self_30.cleanRecord(clone));
                        request.onerror = processCallback_6;
                        request.onsuccess = processCallback_6;
                    }
                    else if (callback)
                        callback();
                };
                processCallback_6();
            }
        }
        else {
            var self_31 = this;
            this.invocationQueue.push(function () {
                self_31.saveMessages(userProfile, stmts, callback);
            });
        }
    };
    IndexedDBStorageAdapter.prototype.removeMessage = function (userProfile, id, callback) {
        if (this.db) {
            var request = this.db.transaction(["messages"], "readwrite").objectStore("messages").delete(IDBKeyRange.only([userProfile.identity, id]));
            request.onerror = function (e) {
                console.log(e);
            };
            request.onsuccess = function () {
                if (callback)
                    callback();
            };
        }
        else {
            var self_32 = this;
            this.invocationQueue.push(function () {
                self_32.removeMessage(userProfile, id, callback);
            });
        }
    };
    IndexedDBStorageAdapter.prototype.getMessages = function (userProfile, thread, callback) {
        if (this.db) {
            var index = this.db.transaction(["messages"], "readonly").objectStore("messages").index(MASTER_INDEX);
            this.getAll(index, IDBKeyRange.only([userProfile.identity, thread]), callback);
        }
        else {
            var self_33 = this;
            this.invocationQueue.push(function () {
                self_33.getMessages(userProfile, thread, callback);
            });
        }
    };
    // -------------------------------
    IndexedDBStorageAdapter.prototype.saveAsset = function (assetId, data, callback) {
        // data.id = id;
        // data.content = new Blob([data.content.response], { type: data.content.getResponseHeader("Content-Type") });
        // let request = this.db.transaction(["assets"], "readwrite").objectStore("assets").put(cleanRecord(data));
        // request.onerror = function(e) {
        //     // console.log(e);
        // };
        // request.onabort = function(e) {
        //     console.log("Abort", query, e);
        // };
        // request.onsuccess = function(e) {
        //     // console.log(e);
        // };
        throw new Error("Method not implemented.");
    };
    IndexedDBStorageAdapter.prototype.getAsset = function (assetId, callback) {
        // let request = this.db.transaction(["assets"], "readonly").objectStore("assets").get(id);
        // request.onerror = function(e) {
        //     //console.log(e);
        // };
        // request.onsuccess = function(e) {
        //     if (callback != null)
        //         callback(e.target.result);
        // };
        throw new Error("Method not implemented.");
    };
    // -------------------------------
    IndexedDBStorageAdapter.prototype.saveQueuedReference = function (userProfile, ref, callback) {
        if (this.db) {
            ref.identity = userProfile.identity;
            var request = this.db.transaction(["queuedReferences"], "readwrite").objectStore("queuedReferences").put(this.cleanRecord(ref));
            request.onerror = function (e) {
                console.log(e);
            };
            request.onsuccess = function () {
                if (callback)
                    callback();
            };
        }
        else {
            var self_34 = this;
            this.invocationQueue.push(function () {
                self_34.saveQueuedReference(userProfile, ref, callback);
            });
        }
    };
    IndexedDBStorageAdapter.prototype.getQueuedReference = function (userProfile, callback) {
        if (this.db) {
            var os = this.db.transaction(["queuedReferences"], "readonly").objectStore("queuedReferences");
            var index_3 = os.index(MASTER_INDEX);
            var request_5 = index_3.openCursor(IDBKeyRange.only(userProfile.identity));
            request_5.onerror = function (e) {
                console.log(e);
            };
            request_5.onsuccess = function () {
                if (request_5.result == null) {
                    var req = index_3.openCursor(IDBKeyRange.only([userProfile.identity]));
                    req.onerror = function (e) {
                        console.log(e);
                    };
                    req.onsuccess = function () {
                        if (callback && request_5.result)
                            callback(request_5.result.value);
                        else
                            callback();
                    };
                }
                else if (callback && request_5.result)
                    callback(request_5.result.value);
                else
                    callback();
            };
        }
        else {
            var self_35 = this;
            this.invocationQueue.push(function () {
                self_35.getQueuedReference(userProfile, callback);
            });
        }
    };
    IndexedDBStorageAdapter.prototype.removeQueuedReference = function (userProfile, refId, callback) {
        if (this.db) {
            var request = this.db.transaction(["queuedReferences"], "readwrite").objectStore("queuedReferences").delete(IDBKeyRange.only([userProfile.identity, refId]));
            request.onerror = function (e) {
                console.log(e);
            };
            request.onsuccess = function () {
                if (callback)
                    callback();
            };
        }
        else {
            var self_36 = this;
            this.invocationQueue.push(function () {
                self_36.removeQueuedReference(userProfile, refId, callback);
            });
        }
    };
    // -------------------------------
    IndexedDBStorageAdapter.prototype.saveToc = function (userProfile, book, data, callback) {
        if (this.db) {
            data.identity = userProfile.identity;
            data.book = book;
            var request = this.db.transaction(["tocs"], "readwrite").objectStore("tocs").put(this.cleanRecord(data));
            request.onerror = function (e) {
                console.log(e);
            };
            request.onsuccess = function () {
                if (callback)
                    callback();
            };
        }
        else {
            var self_37 = this;
            this.invocationQueue.push(function () {
                self_37.saveToc(userProfile, book, data, callback);
            });
        }
    };
    IndexedDBStorageAdapter.prototype.getToc = function (userProfile, book, callback) {
        if (book == null) {
            callback([]);
            return;
        }
        if (this.db) {
            var os = this.db.transaction(["tocs"], "readonly").objectStore("tocs");
            var index = os.index(MASTER_INDEX);
            this.getAll(index, IDBKeyRange.only([userProfile.identity, book]), callback);
        }
        else {
            var self_38 = this;
            this.invocationQueue.push(function () {
                self_38.getToc(userProfile, book, callback);
            });
        }
    };
    IndexedDBStorageAdapter.prototype.removeToc = function (userProfile, book, section, id, callback) {
        if (this.db) {
            var request = this.db.transaction(["tocs"], "readwrite").objectStore("tocs").delete(IDBKeyRange.only([userProfile.identity, book, section, id]));
            request.onerror = function (e) {
                console.log(e);
            };
            request.onsuccess = function () {
                if (callback)
                    callback();
            };
        }
        else {
            var self_39 = this;
            this.invocationQueue.push(function () {
                self_39.removeToc(userProfile, book, section, id, callback);
            });
        }
    };
    // -------------------------------
    IndexedDBStorageAdapter.prototype.saveNotification = function (userProfile, notification, callback) {
        if (this.db) {
            notification.identity = userProfile.identity;
            var request = this.db.transaction(["notifications"], "readwrite").objectStore("notifications").put(this.cleanRecord(notification));
            request.onerror = function (e) {
                console.log(e);
            };
            request.onsuccess = function () {
                if (callback)
                    callback();
            };
        }
        else {
            var self_40 = this;
            this.invocationQueue.push(function () {
                self_40.saveNotification(userProfile, notification, callback);
            });
        }
    };
    IndexedDBStorageAdapter.prototype.getNotifications = function (userProfile, callback) {
        if (this.db) {
            var os = this.db.transaction(["notifications"], "readonly").objectStore("notifications");
            var index_4 = os.index(MASTER_INDEX);
            var param_3 = userProfile.identity;
            var self_41 = this;
            this.getAll(index_4, IDBKeyRange.only(param_3), function (arr) {
                if (arr.length == 0)
                    self_41.getAll(index_4, IDBKeyRange.only([param_3]), callback);
                else
                    callback(arr);
            });
        }
        else {
            var self_42 = this;
            this.invocationQueue.push(function () {
                self_42.getNotifications(userProfile, callback);
            });
        }
    };
    IndexedDBStorageAdapter.prototype.removeNotification = function (userProfile, notificationId, callback) {
        if (this.db) {
            var request = this.db.transaction(["notifications"], "readwrite").objectStore("notifications").delete(IDBKeyRange.only([userProfile.identity, notificationId]));
            request.onerror = function (e) {
                console.log(e);
            };
            request.onsuccess = function () {
                if (callback)
                    callback();
            };
        }
        else {
            var self_43 = this;
            this.invocationQueue.push(function () {
                self_43.removeNotification(userProfile, notificationId, callback);
            });
        }
    };
    return IndexedDBStorageAdapter;
}());


// CONCATENATED MODULE: ./src/user.ts
var User = /** @class */ (function () {
    function User(pebl) {
        this.pebl = pebl;
    }
    User.prototype.isLoggedIn = function (callback) {
        this.pebl.storage.getCurrentUser(function (currentUser) {
            callback(currentUser != null);
        });
    };
    User.prototype.getUser = function (callback) {
        var self = this;
        this.pebl.storage.getCurrentUser(function (currentUser) {
            if (currentUser) {
                self.pebl.storage.getUserProfile(currentUser, function (userProfile) {
                    if (userProfile)
                        callback(userProfile);
                    else
                        callback();
                });
            }
            else
                callback();
        });
    };
    User.prototype.login = function (userProfile, callback) {
        var self = this;
        this.pebl.storage.saveUserProfile(userProfile, function () {
            self.pebl.storage.saveCurrentUser(userProfile, callback);
        });
    };
    User.prototype.logout = function (callback) {
        if (callback != null)
            this.pebl.storage.removeCurrentUser(callback);
        else
            this.pebl.storage.removeCurrentUser();
    };
    return User;
}());


// CONCATENATED MODULE: ./src/syncing.ts

var syncing_LLSyncAction = /** @class */ (function () {
    function LLSyncAction(pebl, endpoint) {
        this.bookPoll = null;
        this.threadPoll = null;
        this.running = false;
        this.pebl = pebl;
        this.endpoint = endpoint;
        this.pull();
    }
    LLSyncAction.prototype.clearTimeouts = function () {
        if (this.bookPoll)
            clearTimeout(this.bookPoll);
        this.bookPoll = null;
        if (this.threadPoll)
            clearTimeout(this.threadPoll);
        this.threadPoll = null;
    };
    LLSyncAction.prototype.toVoidRecord = function (rec) {
        var o = {
            "context": {
                "contextActivities": {
                    "parent": [{
                            "id": (rec.object) ? rec.object.id : "",
                            "objectType": "Activity"
                        }]
                }
            },
            "actor": rec.actor,
            "verb": {
                "display": {
                    "en-US": "voided"
                },
                "id": "http://adlnet.gov/expapi/verbs/voided"
            },
            "object": {
                "id": rec.id,
                "objectType": "StatementRef"
            },
            "stored": rec.stored,
            "timestamp": rec.timestamp,
            "id": "v-" + rec.id
        };
        return new Voided(o);
    };
    LLSyncAction.prototype.bookPollingCallback = function () {
        var self = this;
        this.pebl.storage.getCurrentBook(function (book) {
            if (book) {
                var lastSynced = self.endpoint.lastSyncedBooksMine[book];
                if (lastSynced == null) {
                    lastSynced = new Date("2017-06-05T21:07:49-07:00");
                    self.endpoint.lastSyncedBooksMine[book] = lastSynced;
                }
                self.pullBook(lastSynced, book);
            }
            else if (self.running)
                self.bookPoll = setTimeout(self.bookPollingCallback.bind(self), 5000);
        });
    };
    LLSyncAction.prototype.threadPollingCallback = function () {
        var self = this;
        var threadPairs = [];
        for (var _i = 0, _a = Object.keys(this.pebl.subscribedThreadHandlers); _i < _a.length; _i++) {
            var thread = _a[_i];
            var timeStr = self.endpoint.lastSyncedThreads[thread];
            var timestamp = timeStr == null ? new Date("2017-06-05T21:07:49-07:00") : timeStr;
            self.endpoint.lastSyncedThreads[thread] = timestamp;
            threadPairs.push({
                "statement.stored": {
                    "$gt": timestamp.toISOString()
                },
                "statement.object.id": "peblThread://" + thread
            });
        }
        if ((threadPairs.length == 0) && self.running)
            self.threadPoll = setTimeout(self.threadPollingCallback.bind(self), 2000);
        else
            self.pullMessages({ "$or": threadPairs });
    };
    LLSyncAction.prototype.pullHelper = function (pipeline, callback) {
        var self = this;
        var xhr = new XMLHttpRequest();
        xhr.addEventListener("load", function () {
            var result = JSON.parse(xhr.responseText);
            for (var i = 0; i < result.length; i++) {
                var rec = result[i];
                if (!rec.voided)
                    result[i] = rec.statement;
                else
                    result[i] = self.toVoidRecord(rec.statement);
            }
            if (callback != null) {
                callback(result);
            }
        });
        xhr.addEventListener("error", function () {
            callback([]);
        });
        xhr.open("GET", self.endpoint.url + "api/statements/aggregate?pipeline=" + encodeURIComponent(JSON.stringify(pipeline)), true);
        xhr.setRequestHeader("Authorization", "Basic " + self.endpoint.token);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send();
    };
    LLSyncAction.prototype.pullMessages = function (params) {
        var pipeline = [
            {
                "$sort": {
                    "stored": -1,
                    "_id": 1
                }
            },
            {
                "$match": params
            },
            {
                "$limit": 1500
            },
            {
                "$project": {
                    "statement": 1,
                    "_id": 0,
                    "voided": 1
                }
            }
        ];
        var self = this;
        this.pullHelper(pipeline, function (stmts) {
            var buckets = {};
            var deleteIds = [];
            for (var i = 0; i < stmts.length; i++) {
                var xapi = stmts[i];
                var thread = null;
                var tsd = null;
                if (Message.is(xapi)) {
                    var m = new Message(xapi);
                    thread = m.thread;
                    tsd = m;
                }
                else if (Reference.is(xapi)) {
                    var r = new Reference(xapi);
                    self.pebl.network.queueReference(r);
                    tsd = r;
                    thread = r.thread;
                }
                else if (Voided.is(xapi)) {
                    var v = new Voided(xapi);
                    deleteIds.push(v);
                    thread = v.thread;
                }
                if (thread != null) {
                    if (tsd != null) {
                        var stmts_1 = buckets[thread];
                        if (stmts_1 == null) {
                            stmts_1 = {};
                            buckets[thread] = stmts_1;
                        }
                        stmts_1[tsd.id] = tsd;
                    }
                    var temp = new Date(xapi.stored);
                    var lastSyncedDate = self.endpoint.lastSyncedThreads[thread];
                    if (lastSyncedDate.getTime() < temp.getTime())
                        self.endpoint.lastSyncedThreads[thread] = temp;
                }
            }
            self.pebl.user.getUser(function (userProfile) {
                if (userProfile) {
                    for (var i = 0; i < deleteIds.length; i++) {
                        var v = deleteIds[i];
                        var thread = v.thread;
                        var bucket = buckets[thread];
                        if (bucket != null) {
                            delete bucket[v.target];
                        }
                        self.pebl.storage.removeMessage(userProfile, v.target);
                    }
                    for (var _i = 0, _a = Object.keys(buckets); _i < _a.length; _i++) {
                        var thread = _a[_i];
                        var bucket = buckets[thread];
                        var cleanMessages = [];
                        for (var _b = 0, _c = Object.keys(bucket); _b < _c.length; _b++) {
                            var messageId = _c[_b];
                            var rec = bucket[messageId];
                            if (rec instanceof Message)
                                cleanMessages.push(rec);
                        }
                        if (cleanMessages.length > 0) {
                            cleanMessages.sort();
                            self.pebl.storage.saveMessages(userProfile, cleanMessages);
                            self.pebl.emitEvent(thread, cleanMessages);
                        }
                    }
                    self.pebl.storage.saveUserProfile(userProfile);
                    if (self.running)
                        self.threadPoll = setTimeout(self.threadPollingCallback.bind(self), 2000);
                }
            });
        });
    };
    LLSyncAction.prototype.pullBook = function (lastSynced, book) {
        var teacherPack = {
            "statement.object.id": "pebl://" + book,
            "statement.stored": {
                "$gt": lastSynced.toISOString()
            }
        };
        var self = this;
        var pipeline = [
            {
                "$sort": {
                    "stored": -1,
                    "_id": 1
                }
            },
            {
                "$match": {
                    "$or": [
                        teacherPack,
                        {
                            "statement.object.id": "pebl://" + book,
                            "statement.stored": {
                                "$gt": lastSynced.toISOString()
                            },
                            "statement.verb.id": "http://adlnet.gov/expapi/verbs/shared"
                        }
                    ]
                }
            },
            {
                "$limit": 1500
            },
            {
                "$project": {
                    "statement": 1,
                    "_id": 0,
                    "voided": 1
                }
            }
        ];
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                if (!self.pebl.teacher)
                    teacherPack["agents"] = userProfile.homePage + "|" + userProfile.identity;
                self.pullHelper(pipeline, function (stmts) {
                    var annotations = {};
                    var sharedAnnotations = {};
                    var events = {};
                    var deleted = [];
                    for (var i = 0; i < stmts.length; i++) {
                        var xapi = stmts[i];
                        if (Annotation.is(xapi)) {
                            var a = new Annotation(xapi);
                            annotations[a.id] = a;
                        }
                        else if (Reference.is(xapi)) {
                            var a = new SharedAnnotation(xapi);
                            sharedAnnotations[a.id] = a;
                        }
                        else if (Voided.is(xapi)) {
                            var v = new Voided(xapi);
                            deleted.push(v);
                        }
                        else if (Session.is(xapi)) {
                            var s = new Session(xapi);
                            events[s.id] = s;
                        }
                        else if (Action.is(xapi)) {
                            var a = new Action(xapi);
                            events[a.id] = a;
                        }
                        else if (Navigation.is(xapi)) {
                            var a = new Navigation(xapi);
                            events[a.id] = a;
                        }
                        else if (Quiz.is(xapi)) {
                            var q = new Quiz(xapi);
                            events[q.id] = q;
                        }
                        else if (Question.is(xapi)) {
                            var q = new Question(xapi);
                            events[q.id] = q;
                        }
                        else {
                            new Error("Unknown Statement type");
                        }
                        var temp = new Date(xapi.stored);
                        var lastSyncedDate = self.endpoint.lastSyncedBooksMine[book];
                        if (lastSyncedDate.getTime() < temp.getTime())
                            self.endpoint.lastSyncedBooksMine[book] = temp;
                    }
                    for (var i = 0; i < deleted.length; i++) {
                        var v = deleted[i];
                        delete annotations[v.target];
                        delete sharedAnnotations[v.target];
                        // delete events[v.target];
                        self.pebl.storage.removeAnnotation(userProfile, v.target);
                        self.pebl.storage.removeSharedAnnotation(userProfile, v.target);
                        // self.pebl.storage.removeEvent(userProfile, v.target);
                    }
                    var cleanAnnotations = [];
                    for (var _i = 0, _a = Object.keys(annotations); _i < _a.length; _i++) {
                        var id = _a[_i];
                        cleanAnnotations.push(annotations[id]);
                    }
                    if (cleanAnnotations.length > 0) {
                        cleanAnnotations.sort();
                        self.pebl.storage.saveAnnotations(userProfile, cleanAnnotations);
                        self.pebl.emitEvent(self.pebl.events.incomingAnnotations, cleanAnnotations);
                    }
                    var cleanSharedAnnotations = [];
                    for (var _b = 0, _c = Object.keys(sharedAnnotations); _b < _c.length; _b++) {
                        var id = _c[_b];
                        cleanSharedAnnotations.push(annotations[id]);
                    }
                    if (cleanAnnotations.length > 0) {
                        cleanSharedAnnotations.sort();
                        self.pebl.storage.saveSharedAnnotations(userProfile, cleanSharedAnnotations);
                        self.pebl.emitEvent(self.pebl.events.incomingSharedAnnotations, cleanSharedAnnotations);
                    }
                    var cleanEvents = [];
                    for (var _d = 0, _e = Object.keys(events); _d < _e.length; _d++) {
                        var id = _e[_d];
                        cleanEvents.push(events[id]);
                    }
                    if (cleanEvents.length > 0) {
                        cleanEvents.sort();
                        self.pebl.storage.saveEvent(userProfile, cleanEvents);
                        self.pebl.emitEvent(self.pebl.events.incomingEvents, cleanEvents);
                    }
                    self.pebl.storage.saveUserProfile(userProfile);
                    if (self.running)
                        self.threadPoll = setTimeout(self.bookPollingCallback.bind(self), 5000);
                });
            }
        });
    };
    LLSyncAction.prototype.pull = function () {
        this.running = true;
        this.clearTimeouts();
        this.bookPollingCallback();
        this.threadPollingCallback();
    };
    LLSyncAction.prototype.push = function (outgoing, callback) {
        var xhr = new XMLHttpRequest();
        xhr.addEventListener("load", function () {
            callback(true);
        });
        xhr.addEventListener("error", function () {
            callback(false);
        });
        xhr.open("POST", this.endpoint.url + "data/xapi/statements");
        xhr.setRequestHeader("Authorization", "Basic " + this.endpoint.token);
        xhr.setRequestHeader("X-Experience-API-Version", "1.0.3");
        xhr.setRequestHeader("Content-Type", "application/json");
        outgoing.forEach(function (rec) {
            delete rec.identity;
        });
        xhr.send(JSON.stringify(outgoing));
    };
    LLSyncAction.prototype.terminate = function () {
        this.running = false;
        this.clearTimeouts();
    };
    return LLSyncAction;
}());


// CONCATENATED MODULE: ./src/network.ts

var network_Network = /** @class */ (function () {
    function Network(pebl) {
        this.pushTimeout = undefined;
        this.pullAssetTimeout = undefined;
        this.pebl = pebl;
        this.running = false;
        this.syncingProcess = [];
    }
    Network.prototype.activate = function (callback) {
        var self = this;
        self.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                var endpoints = userProfile.endpoints;
                if (!self.running) {
                    self.syncingProcess = [];
                    for (var _i = 0, endpoints_1 = endpoints; _i < endpoints_1.length; _i++) {
                        var e = endpoints_1[_i];
                        self.syncingProcess.push(new syncing_LLSyncAction(self.pebl, e));
                    }
                    self.push();
                    self.pullAsset();
                    self.running = true;
                }
                if (callback)
                    callback();
            }
        });
    };
    Network.prototype.queueReference = function (ref) {
        var self = this;
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile)
                self.pebl.storage.saveQueuedReference(userProfile, ref);
        });
    };
    Network.prototype.pullAsset = function () {
        var self = this;
        self.pebl.user.getUser(function (userProfile) {
            if (userProfile && userProfile.registryEndpoint) {
                self.pebl.storage.getQueuedReference(userProfile, function (ref) {
                    if (ref) {
                        var xhr = new XMLHttpRequest();
                        xhr.addEventListener("load", function () {
                            self.pebl.storage.saveNotification(userProfile, ref);
                            var tocEntry = {
                                "url": ref.url,
                                "documentName": ref.name,
                                "section": ref.location,
                                "pageKey": ref.id,
                                "docType": ref.docType,
                                "card": ref.card,
                                "externalURL": ref.externalURL
                            };
                            self.pebl.storage.saveToc(userProfile, ref.book, tocEntry);
                            self.pebl.emitEvent(self.pebl.events.incomingNotification, ref);
                            self.pebl.storage.removeQueuedReference(userProfile, ref.id);
                            if (self.running)
                                self.pullAssetTimeout = setTimeout(self.pullAsset.bind(self), 5000);
                        });
                        xhr.addEventListener("error", function () {
                            self.pebl.storage.saveNotification(userProfile, ref);
                            self.pebl.emitEvent(self.pebl.events.incomingNotification, ref);
                            self.pebl.storage.removeQueuedReference(userProfile, ref.id);
                            if (self.running)
                                self.pullAssetTimeout = setTimeout(self.pullAsset.bind(self), 5000);
                        });
                        var url = userProfile.registryEndpoint && userProfile.registryEndpoint.url;
                        if (url) {
                            xhr.open("GET", url + ref.url);
                            xhr.send();
                        }
                    }
                });
            }
        });
    };
    Network.prototype.disable = function (callback) {
        this.running = false;
        if (this.pushTimeout)
            clearTimeout(this.pushTimeout);
        this.pushTimeout = undefined;
        if (this.pullAssetTimeout)
            clearTimeout(this.pullAssetTimeout);
        this.pullAssetTimeout = undefined;
        if (callback)
            callback();
    };
    Network.prototype.push = function (finished) {
        var self = this;
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile)
                self.pebl.storage.getOutgoing(userProfile, function (stmts) {
                    if (self.syncingProcess.length == 1) {
                        if (stmts.length > 0) {
                            self.syncingProcess[0].push(stmts, function (success) {
                                if (success)
                                    self.pebl.storage.removeOutgoing(userProfile, stmts);
                                if (self.running)
                                    self.pushTimeout = setTimeout(self.push.bind(self), 5000);
                                if (finished)
                                    finished();
                            });
                        }
                        else {
                            if (self.running)
                                self.pushTimeout = setTimeout(self.push.bind(self), 5000);
                            if (finished)
                                finished();
                        }
                    }
                });
            else {
                if (self.running)
                    self.pushTimeout = setTimeout(self.push.bind(self), 5000);
                if (finished)
                    finished();
            }
        });
    };
    return Network;
}());


// CONCATENATED MODULE: ./src/eventSet.ts
var EventSet = /** @class */ (function () {
    function EventSet() {
        this.incomingAnnotations = "incomingAnnotations";
        this.incomingSharedAnnotations = "incomingSharedAnnotations";
        this.incomingNotifications = "incomingNotifications";
        this.incomingAssets = "incomingAssets";
        this.incomingEvents = "incomingEvents";
        this.newBook = "newBook";
        this.newMessage = "newMessage";
        this.newActivity = "newActivity";
        this.newAnnotation = "newAnnotation";
        this.newReference = "newReference";
        this.newSharedAnnotation = "newSharedAnnotation";
        this.removedAnnotation = "removedAnnotation";
        this.removedSharedAnnotation = "removedSharedAnnotation";
        this.eventLoggedIn = "eventLoggedIn";
        this.eventLoggedOut = "eventLoggedOut";
        this.eventLogin = "eventLogin";
        this.eventLogout = "eventLogout";
        this.eventSessionStart = "eventSessionStart";
        this.eventSessionStop = "eventSessionStop";
        this.eventNextPage = "eventNextPage";
        this.eventPrevPage = "eventPrevPage";
        this.eventJumpPage = "eventJumpPage";
        this.eventInitialized = "eventInitialized";
        this.eventTerminated = "eventTerminated";
        this.eventInteracted = "eventInteracted";
        this.eventAnswered = "eventAnswered";
        this.eventPassed = "eventPassed";
        this.eventFailed = "eventFailed";
        this.eventPreferred = "eventPreferred";
        this.eventContentMorphed = "eventContentMorphed";
        this.eventCompleted = "eventCompleted";
        this.eventCompatibilityTested = "eventCompatibilityTested";
        this.eventChecklisted = "eventChecklisted";
    }
    return EventSet;
}());


// CONCATENATED MODULE: ./src/utils.ts
var Utils = /** @class */ (function () {
    function Utils(pebl) {
        this.pebl = pebl;
    }
    Utils.prototype.getAnnotations = function (callback) {
        var self = this;
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                self.pebl.storage.getCurrentBook(function (book) {
                    if (book)
                        self.pebl.storage.getAnnotations(userProfile, book, callback);
                    else
                        callback([]);
                });
            }
            else
                callback([]);
        });
    };
    Utils.prototype.getSharedAnnotations = function (callback) {
        var self = this;
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                self.pebl.storage.getCurrentBook(function (book) {
                    if (book)
                        self.pebl.storage.getSharedAnnotations(userProfile, book, callback);
                    else
                        callback([]);
                });
            }
            else
                callback([]);
        });
    };
    return Utils;
}());


// CONCATENATED MODULE: ./src/xapiGenerator.ts
var xapiGenerator_PREFIX_PEBL_EXTENSION = "https://www.peblproject.com/definitions.html#";
var XApiGenerator = /** @class */ (function () {
    function XApiGenerator() {
    }
    XApiGenerator.prototype.addExtensions = function (extensions) {
        var result = {};
        for (var _i = 0, _a = Object.keys(extensions); _i < _a.length; _i++) {
            var key = _a[_i];
            result[xapiGenerator_PREFIX_PEBL_EXTENSION + key] = extensions[key];
        }
        return result;
    };
    XApiGenerator.prototype.addResult = function (stmt, score, minScore, maxScore, complete, success, answered, duration, extensions) {
        if (!stmt.result)
            stmt.result = {};
        stmt.result.success = success;
        stmt.result.completion = complete;
        stmt.result.response = answered;
        if (!stmt.result.score)
            stmt.result.score = {};
        stmt.result.score.raw = score;
        stmt.result.score.duration = duration;
        stmt.result.score.scaled = (score - minScore) / (maxScore - minScore);
        stmt.result.score.min = minScore;
        stmt.result.score.max = maxScore;
        if (extensions) {
            if (!stmt.extensions)
                stmt.extensions = {};
            for (var _i = 0, _a = Object.keys(extensions); _i < _a.length; _i++) {
                var key = _a[_i];
                stmt.extensions[key] = extensions[key];
            }
        }
        return stmt;
    };
    XApiGenerator.prototype.addObject = function (stmt, activityId, name, description, extensions) {
        if (!stmt.object)
            stmt.object = {};
        stmt.object.id = activityId;
        stmt.object.objectType = "Activity";
        if (!stmt.object.definition)
            stmt.object.definition = {};
        if (name) {
            if (!stmt.object.definition.name)
                stmt.object.definition.name = {};
            stmt.object.definition.name["en-US"] = name;
        }
        if (description) {
            if (!stmt.object.definition.description)
                stmt.object.definition.description = {};
            stmt.object.definition.description["en-US"] = description;
        }
        if (extensions)
            stmt.object.definition.extensions = extensions;
        return stmt;
    };
    XApiGenerator.prototype.memberToIndex = function (x, arr) {
        for (var i = 0; i < arr.length; i++)
            if (x == arr[i])
                return i;
        return -1;
    };
    XApiGenerator.prototype.arrayToIndexes = function (arr, indexArr) {
        var clone = arr.slice(0);
        for (var i = 0; i < arr.length; i++) {
            clone[i] = this.memberToIndex(arr[i], indexArr).toString();
        }
        return clone;
    };
    XApiGenerator.prototype.addObjectInteraction = function (stmt, activityId, name, prompt, interaction, answers, correctAnswers) {
        if (!stmt.object)
            stmt.object = {};
        stmt.object.id = activityId;
        stmt.object.objectType = "Activity";
        if (!stmt.object.definition)
            stmt.object.definition = {};
        if (!stmt.object.definition.name)
            stmt.object.definition.name = {};
        stmt.object.definition.type = "http://adlnet.gov/expapi/activities/cmi.interaction";
        stmt.object.definition.interactionType = interaction;
        var answerArr = [];
        for (var _i = 0, correctAnswers_1 = correctAnswers; _i < correctAnswers_1.length; _i++) {
            var corrrectAnswer = correctAnswers_1[_i];
            answerArr.push(this.arrayToIndexes(corrrectAnswer, answers).join("[,]"));
        }
        stmt.object.definition.correctResponsesPattern = answerArr;
        if (interaction == "choice") {
            stmt.object.definition.choices = [];
            var i = 0;
            for (var _a = 0, answers_1 = answers; _a < answers_1.length; _a++) {
                var answer = answers_1[_a];
                stmt.object.definition.choices.push({
                    id: i.toString(),
                    description: {
                        "en-US": answer
                    }
                });
                i++;
            }
        }
        stmt.object.definition.name["en-US"] = name;
        if (!stmt.object.definition.description)
            stmt.object.definition.description = {};
        stmt.object.definition.description["en-US"] = prompt;
        return stmt;
    };
    XApiGenerator.prototype.addVerb = function (stmt, url, name) {
        stmt.verb = {
            id: url,
            display: {
                "en-US": name
            }
        };
        return stmt;
    };
    XApiGenerator.prototype.addActorAccount = function (stmt, userProfile) {
        if (!stmt.actor)
            stmt.actor = {};
        stmt.actor.objectType = "Agent";
        stmt.actor.name = userProfile.name || userProfile.identity;
        stmt.actor.account = {
            homePage: userProfile.homePage,
            name: userProfile.identity
        };
        return stmt;
    };
    XApiGenerator.prototype.addActorMBox = function (stmt, userProfile) {
        if (!stmt.actor)
            stmt.actor = {};
        stmt.actor.objectType = "Agent";
        stmt.actor.name = userProfile.name;
        stmt.actor.mbox = userProfile.identity;
        return stmt;
    };
    XApiGenerator.prototype.addTimestamp = function (stmt) {
        if (!stmt.timestamp)
            stmt.timestamp = new Date().toISOString();
        return stmt;
    };
    XApiGenerator.prototype.addStatementRef = function (stmt, id) {
        if (!stmt.object)
            stmt.object = {};
        stmt.object.objectType = "StatementRef";
        stmt.object.id = id;
        return stmt;
    };
    XApiGenerator.prototype.addId = function (stmt) {
        /*!
          Excerpt from: Math.uuid.js (v1.4)
          http://www.broofa.com
          mailto:robert@broofa.com
          Copyright (c) 2010 Robert Kieffer
          Dual licensed under the MIT and GPL licenses.
        */
        stmt.id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
        return stmt;
    };
    XApiGenerator.prototype.addContext = function (stmt, options) {
        stmt.context = options;
        return stmt;
    };
    XApiGenerator.prototype.addParentActivity = function (stmt, parentId) {
        if (!stmt.context)
            stmt.context = {};
        if (!stmt.context.contextActivities)
            stmt.context.contextActivities = {};
        if (!stmt.context.contextActivities.parent)
            stmt.context.contextActivities.parent = [];
        stmt.context.contextActivities.parent.push({
            objectType: "Activity",
            id: parentId
        });
        return stmt;
    };
    return XApiGenerator;
}());


// CONCATENATED MODULE: ./src/models.ts
// -------------------------------
var UserProfile = /** @class */ (function () {
    function UserProfile(raw) {
        this.identity = raw.identity;
        this.name = raw.name;
        this.homePage = raw.homePage;
        this.preferredName = raw.preferredName;
        if (raw.registryEndPoint)
            this.registryEndpoint = new Endpoint(raw.registryEndPoint);
        this.endpoints = [];
        if (raw.endpoints)
            for (var _i = 0, _a = raw.endpoints; _i < _a.length; _i++) {
                var endpointObj = _a[_i];
                this.endpoints.push(new Endpoint(endpointObj));
            }
        if (this.homePage == null)
            this.homePage = "acct:keycloak-server";
    }
    UserProfile.prototype.toObject = function () {
        var urls = {};
        for (var _i = 0, _a = this.endpoints; _i < _a.length; _i++) {
            var e = _a[_i];
            urls[e.url] = e.toObject();
        }
        return {
            "identity": this.identity,
            "name": this.name,
            "homePage": this.homePage,
            "preferredName": this.preferredName,
            "lrsUrls": urls,
            "registryEndpoint": this.registryEndpoint
        };
    };
    return UserProfile;
}());

// -------------------------------
var Endpoint = /** @class */ (function () {
    function Endpoint(raw) {
        this.url = raw.url;
        this.username = raw.username;
        this.password = raw.password;
        this.token = raw.token;
        if (!this.token) {
            this.token = btoa(this.username + ":" + this.password);
        }
        this.lastSyncedBooksMine = {};
        this.lastSyncedBooksShared = {};
        this.lastSyncedThreads = {};
    }
    Endpoint.prototype.toObject = function (urlPrefix) {
        if (urlPrefix === void 0) { urlPrefix = ""; }
        return {
            url: urlPrefix + this.url,
            username: this.username,
            password: this.password,
            token: this.token,
            lastSyncedThreads: this.lastSyncedThreads,
            lastSyncedBooksMine: this.lastSyncedBooksMine,
            lastSyncedBooksShared: this.lastSyncedBooksMine
        };
    };
    return Endpoint;
}());

// -------------------------------

// CONCATENATED MODULE: ./src/eventHandlers.ts
var PEBL_PREFIX = "pebl://";
var PEBL_THREAD_PREFIX = "peblThread://";



var eventHandlers_PEBLEventHandlers = /** @class */ (function () {
    function PEBLEventHandlers(pebl) {
        this.pebl = pebl;
        this.xapiGen = new XApiGenerator();
    }
    // -------------------------------
    PEBLEventHandlers.prototype.newBook = function (event) {
        var book = event.detail;
        var self = this;
        if (book.indexOf("/") != -1)
            book = book.substring(book.lastIndexOf("/") + 1);
        this.pebl.storage.getCurrentBook(function (currentBook) {
            if (currentBook != book) {
                if (currentBook)
                    self.pebl.emitEvent(self.pebl.events.eventTerminated, currentBook);
                self.pebl.storage.removeCurrentActivity();
                self.pebl.emitEvent(self.pebl.events.eventInteracted, {
                    activity: book
                });
                self.pebl.unsubscribeAllEvents();
                self.pebl.unsubscribeAllThreads();
                self.pebl.storage.saveCurrentBook(book);
            }
            else {
                self.pebl.emitEvent(self.pebl.events.eventJumpPage, null);
            }
        });
    };
    PEBLEventHandlers.prototype.newActivity = function (event) {
        var payload = event.detail;
        var self = this;
        this.pebl.storage.getCurrentActivity(function (currentActivity) {
            if (payload.activity != currentActivity) {
                if (currentActivity)
                    self.pebl.emitEvent(self.pebl.events.eventTerminated, currentActivity);
                self.pebl.emitEvent(self.pebl.events.eventInitialized, {
                    name: payload.name,
                    description: payload.description
                });
            }
            self.pebl.storage.saveCurrentActivity(payload.activity);
        });
    };
    PEBLEventHandlers.prototype.newReference = function (event) {
        var payload = event.detail;
        var xapi = {};
        var self = this;
        var exts = {
            docType: payload.docType,
            location: payload.location,
            card: payload.card,
            url: payload.url,
            book: payload.book,
            externalURL: payload.externalURL
        };
        this.pebl.storage.getCurrentActivity(function (activity) {
            self.pebl.storage.getCurrentBook(function (book) {
                self.pebl.user.getUser(function (userProfile) {
                    if (userProfile) {
                        self.xapiGen.addId(xapi);
                        self.xapiGen.addTimestamp(xapi);
                        self.xapiGen.addActorAccount(xapi, userProfile);
                        self.xapiGen.addObject(xapi, PEBL_THREAD_PREFIX + payload.target, payload.name, payload.description, self.xapiGen.addExtensions(exts));
                        if (userProfile.identity == payload.target)
                            self.xapiGen.addVerb(xapi, "http://www.peblproject.com/definitions.html#pulled", "pulled");
                        else
                            self.xapiGen.addVerb(xapi, "http://www.peblproject.com/definitions.html#pushed", "pushed");
                        if (activity || book)
                            self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + (activity || book));
                        var s = new Reference(xapi);
                        self.pebl.storage.saveOutgoing(userProfile, s);
                        self.pebl.storage.saveEvent(userProfile, s);
                        // self.pebl.emitEvent(self.pebl.events.in)
                    }
                });
            });
        });
    };
    PEBLEventHandlers.prototype.newMessage = function (event) {
        var payload = event.detail;
        var xapi = {};
        var self = this;
        self.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                self.pebl.storage.getCurrentActivity(function (activity) {
                    self.pebl.storage.getCurrentBook(function (book) {
                        self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + (activity || book));
                        self.xapiGen.addId(xapi);
                        self.xapiGen.addVerb(xapi, "http://adlnet.gov/expapi/verbs/responded", "responded");
                        self.xapiGen.addTimestamp(xapi);
                        self.xapiGen.addObject(xapi, PEBL_THREAD_PREFIX + payload.thread, payload.prompt, payload.text);
                        self.xapiGen.addActorAccount(xapi, userProfile);
                        var message = new Message(xapi);
                        self.pebl.storage.saveMessages(userProfile, message);
                        self.pebl.storage.saveOutgoing(userProfile, message);
                        self.pebl.emitEvent(message.thread, [message]);
                    });
                });
            }
        });
    };
    PEBLEventHandlers.prototype.newAnnotation = function (event) {
        var payload = event.detail;
        var xapi = {};
        var self = this;
        self.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                var exts_1 = {
                    type: payload.type,
                    cfi: payload.cfi,
                    idRef: payload.idRef,
                    style: payload.style
                };
                self.pebl.storage.getCurrentActivity(function (activity) {
                    self.pebl.storage.getCurrentBook(function (book) {
                        self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + (activity || book));
                        self.xapiGen.addId(xapi);
                        self.xapiGen.addVerb(xapi, "http://adlnet.gov/expapi/verbs/commented", "commented");
                        self.xapiGen.addTimestamp(xapi);
                        self.xapiGen.addObject(xapi, PEBL_PREFIX + book, payload.title, payload.text, self.xapiGen.addExtensions(exts_1));
                        self.xapiGen.addActorAccount(xapi, userProfile);
                        var annotation = new Annotation(xapi);
                        self.pebl.storage.saveAnnotations(userProfile, annotation);
                        self.pebl.storage.saveOutgoing(userProfile, annotation);
                        self.pebl.emitEvent(self.pebl.events.incomingAnnotations, [annotation]);
                    });
                });
            }
        });
    };
    PEBLEventHandlers.prototype.newSharedAnnotation = function (event) {
        var payload = event.detail;
        var xapi = {};
        var self = this;
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                var exts_2 = {
                    type: payload.type,
                    cfi: payload.cfi,
                    idRef: payload.idRef,
                    style: payload.style
                };
                self.pebl.storage.getCurrentActivity(function (activity) {
                    self.pebl.storage.getCurrentBook(function (book) {
                        self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + (activity || book));
                        self.xapiGen.addId(xapi);
                        self.xapiGen.addVerb(xapi, "http://adlnet.gov/expapi/verbs/shared", "shared");
                        self.xapiGen.addTimestamp(xapi);
                        self.xapiGen.addObject(xapi, PEBL_PREFIX + book, payload.title, payload.text, self.xapiGen.addExtensions(exts_2));
                        self.xapiGen.addActorAccount(xapi, userProfile);
                        var annotation = new SharedAnnotation(xapi);
                        self.pebl.storage.saveAnnotations(userProfile, annotation);
                        self.pebl.storage.saveOutgoing(userProfile, annotation);
                        self.pebl.emitEvent(self.pebl.events.incomingSharedAnnotations, [annotation]);
                    });
                });
            }
        });
    };
    PEBLEventHandlers.prototype.removedAnnotation = function (event) {
        var xId = event.detail;
        var xapi = {};
        var self = this;
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                self.pebl.storage.getCurrentActivity(function (activity) {
                    self.pebl.storage.getCurrentBook(function (book) {
                        if (activity)
                            self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + activity);
                        else
                            self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + book);
                        self.xapiGen.addId(xapi);
                        self.xapiGen.addVerb(xapi, "http://adlnet.gov/expapi/verbs/voided", "voided");
                        self.xapiGen.addTimestamp(xapi);
                        self.xapiGen.addStatementRef(xapi, xId);
                        self.xapiGen.addActorAccount(xapi, userProfile);
                        var annotation = new Voided(xapi);
                        self.pebl.storage.removeAnnotation(userProfile, xId);
                        self.pebl.storage.saveOutgoing(userProfile, annotation);
                        self.pebl.emitEvent(self.pebl.events.incomingAnnotations, [annotation]);
                    });
                });
            }
        });
    };
    PEBLEventHandlers.prototype.removedSharedAnnotation = function (event) {
        var xId = event.detail;
        var xapi = {};
        var self = this;
        self.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                self.xapiGen.addId(xapi);
                self.xapiGen.addVerb(xapi, "http://adlnet.gov/expapi/verbs/voided", "voided");
                self.xapiGen.addTimestamp(xapi);
                self.pebl.storage.getCurrentActivity(function (activity) {
                    self.pebl.storage.getCurrentBook(function (book) {
                        if (activity)
                            self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + activity);
                        else
                            self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + book);
                        self.xapiGen.addStatementRef(xapi, xId);
                        self.xapiGen.addActorAccount(xapi, userProfile);
                        var annotation = new Voided(xapi);
                        self.pebl.storage.removeAnnotation(userProfile, xId);
                        self.pebl.storage.saveOutgoing(userProfile, annotation);
                        self.pebl.emitEvent(self.pebl.events.incomingSharedAnnotations, [annotation]);
                    });
                });
            }
        });
    };
    // -------------------------------
    PEBLEventHandlers.prototype.eventLoggedIn = function (event) {
        var userP = new UserProfile(event.detail);
        var self = this;
        this.pebl.storage.getCurrentUser(function (currentIdentity) {
            self.pebl.storage.saveUserProfile(userP, function () {
                if (userP.identity != currentIdentity) {
                    self.pebl.emitEvent(self.pebl.events.eventLogin, userP);
                }
                self.pebl.network.activate();
            });
        });
    };
    PEBLEventHandlers.prototype.eventLoggedOut = function (event) {
        var self = this;
        this.pebl.user.getUser(function (currentUser) {
            self.pebl.network.disable(function () {
                self.pebl.emitEvent(self.pebl.events.eventLogout, currentUser);
            });
        });
    };
    // -------------------------------
    PEBLEventHandlers.prototype.eventSessionStart = function (event) {
        var xapi = {};
        var self = this;
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                self.pebl.storage.getCurrentActivity(function (activity) {
                    self.pebl.storage.getCurrentBook(function (book) {
                        self.xapiGen.addId(xapi);
                        self.xapiGen.addTimestamp(xapi);
                        self.xapiGen.addActorAccount(xapi, userProfile);
                        self.xapiGen.addObject(xapi, PEBL_PREFIX + book);
                        self.xapiGen.addVerb(xapi, "http://www.peblproject.com/definitions.html#entered", "entered");
                        if (book || activity)
                            self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + (book || activity));
                        var s = new Session(xapi);
                        self.pebl.storage.saveOutgoing(userProfile, s);
                        self.pebl.storage.saveEvent(userProfile, s);
                    });
                });
            }
        });
    };
    PEBLEventHandlers.prototype.eventSessionStop = function (event) {
        var xapi = {};
        var self = this;
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                self.pebl.storage.getCurrentActivity(function (activity) {
                    self.pebl.storage.getCurrentBook(function (book) {
                        self.xapiGen.addId(xapi);
                        self.xapiGen.addTimestamp(xapi);
                        self.xapiGen.addActorAccount(xapi, userProfile);
                        self.xapiGen.addObject(xapi, PEBL_PREFIX + book);
                        self.xapiGen.addVerb(xapi, "http://www.peblproject.com/definitions.html#exited", "exited");
                        if (book || activity)
                            self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + (book || activity));
                        var s = new Session(xapi);
                        self.pebl.storage.saveOutgoing(userProfile, s);
                        self.pebl.storage.saveEvent(userProfile, s);
                    });
                });
            }
        });
    };
    // -------------------------------
    PEBLEventHandlers.prototype.eventTerminated = function (event) {
        var payload = event.detail;
        var xapi = {};
        var self = this;
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                self.xapiGen.addId(xapi);
                self.xapiGen.addTimestamp(xapi);
                self.xapiGen.addActorAccount(xapi, userProfile);
                self.xapiGen.addObject(xapi, PEBL_PREFIX + payload);
                self.xapiGen.addVerb(xapi, "http://adlnet.gov/expapi/verbs/terminated", "terminated");
                self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + payload);
                var s = new Session(xapi);
                self.pebl.storage.saveOutgoing(userProfile, s);
                self.pebl.storage.saveEvent(userProfile, s);
            }
        });
    };
    PEBLEventHandlers.prototype.eventInitialized = function (event) {
        var payload = event.detail;
        var xapi = {};
        var self = this;
        this.pebl.storage.getCurrentBook(function (book) {
            self.pebl.user.getUser(function (userProfile) {
                if (userProfile) {
                    self.xapiGen.addId(xapi);
                    self.xapiGen.addTimestamp(xapi);
                    self.xapiGen.addActorAccount(xapi, userProfile);
                    self.xapiGen.addObject(xapi, PEBL_PREFIX + book, payload.name, payload.description);
                    self.xapiGen.addVerb(xapi, "http://adlnet.gov/expapi/verbs/initialized", "initialized");
                    self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + payload.activity);
                    var s = new Session(xapi);
                    self.pebl.storage.saveOutgoing(userProfile, s);
                    self.pebl.storage.saveEvent(userProfile, s);
                }
            });
        });
    };
    PEBLEventHandlers.prototype.eventInteracted = function (event) {
        var payload = event.detail;
        var xapi = {};
        var self = this;
        var exts = {
            target: payload.target,
            type: payload.type
        };
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                self.xapiGen.addId(xapi);
                self.xapiGen.addTimestamp(xapi);
                self.xapiGen.addActorAccount(xapi, userProfile);
                self.xapiGen.addObject(xapi, PEBL_PREFIX + payload.activity, payload.name, payload.description, self.xapiGen.addExtensions(exts));
                self.xapiGen.addVerb(xapi, "http://adlnet.gov/expapi/verbs/interacted", "interacted");
                self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + payload.activity);
                var s = new Action(xapi);
                self.pebl.storage.saveOutgoing(userProfile, s);
                self.pebl.storage.saveEvent(userProfile, s);
            }
        });
    };
    PEBLEventHandlers.prototype.eventJumpedPage = function (event) {
        var payload = event.detail;
        var xapi = {};
        var self = this;
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                self.xapiGen.addId(xapi);
                self.xapiGen.addTimestamp(xapi);
                self.xapiGen.addActorAccount(xapi, userProfile);
                self.xapiGen.addObject(xapi, PEBL_PREFIX + payload.activity, payload.name, payload.description);
                self.xapiGen.addVerb(xapi, "http://www.peblproject.com/definitions.html#paged-jump", "paged-jump");
                self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + payload.activity);
                var s = new Navigation(xapi);
                self.pebl.storage.saveOutgoing(userProfile, s);
                self.pebl.storage.saveEvent(userProfile, s);
            }
        });
    };
    // -------------------------------
    PEBLEventHandlers.prototype.eventAnswered = function (event) {
        var payload = event.detail;
        var xapi = {};
        var self = this;
        this.pebl.storage.getCurrentActivity(function (activity) {
            self.pebl.storage.getCurrentActivity(function (book) {
                self.pebl.user.getUser(function (userProfile) {
                    if (userProfile) {
                        self.xapiGen.addId(xapi);
                        self.xapiGen.addTimestamp(xapi);
                        self.xapiGen.addActorAccount(xapi, userProfile);
                        self.xapiGen.addObjectInteraction(xapi, PEBL_PREFIX + book, payload.name, payload.prompt, "choice", payload.answers, payload.correctAnswers);
                        self.xapiGen.addResult(xapi, payload.score, payload.minScore, payload.maxScore, payload.complete, payload.success, payload.answered);
                        self.xapiGen.addVerb(xapi, "http://adlnet.gov/expapi/verbs/answered", "answered");
                        self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + (activity || book));
                        var s = new Question(xapi);
                        self.pebl.storage.saveOutgoing(userProfile, s);
                        self.pebl.storage.saveEvent(userProfile, s);
                    }
                });
            });
        });
    };
    PEBLEventHandlers.prototype.eventPassed = function (event) {
        var payload = event.detail;
        var xapi = {};
        var self = this;
        this.pebl.storage.getCurrentActivity(function (activity) {
            self.pebl.storage.getCurrentActivity(function (book) {
                self.pebl.user.getUser(function (userProfile) {
                    if (userProfile) {
                        self.xapiGen.addId(xapi);
                        self.xapiGen.addTimestamp(xapi);
                        self.xapiGen.addActorAccount(xapi, userProfile);
                        self.xapiGen.addObject(xapi, PEBL_PREFIX + book, payload.name, payload.description);
                        self.xapiGen.addResult(xapi, payload.score, payload.minScore, payload.maxScore, payload.complete, payload.success);
                        self.xapiGen.addVerb(xapi, "http://adlnet.gov/expapi/verbs/passed", "passed");
                        self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + (activity || book));
                        var s = new Quiz(xapi);
                        self.pebl.storage.saveOutgoing(userProfile, s);
                        self.pebl.storage.saveEvent(userProfile, s);
                    }
                });
            });
        });
    };
    PEBLEventHandlers.prototype.eventFailed = function (event) {
        var payload = event.detail;
        var xapi = {};
        var self = this;
        this.pebl.storage.getCurrentActivity(function (activity) {
            self.pebl.storage.getCurrentActivity(function (book) {
                self.pebl.user.getUser(function (userProfile) {
                    if (userProfile) {
                        self.xapiGen.addId(xapi);
                        self.xapiGen.addTimestamp(xapi);
                        self.xapiGen.addActorAccount(xapi, userProfile);
                        self.xapiGen.addObject(xapi, PEBL_PREFIX + book, payload.name, payload.description);
                        self.xapiGen.addResult(xapi, payload.score, payload.minScore, payload.maxScore, payload.complete, payload.success);
                        self.xapiGen.addVerb(xapi, "http://adlnet.gov/expapi/verbs/failed", "failed");
                        self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + (activity || book));
                        var s = new Quiz(xapi);
                        self.pebl.storage.saveOutgoing(userProfile, s);
                        self.pebl.storage.saveEvent(userProfile, s);
                    }
                });
            });
        });
    };
    // -------------------------------
    PEBLEventHandlers.prototype.eventPreferred = function (event) {
        var payload = event.detail;
        var xapi = {};
        var self = this;
        var exts = {
            target: payload.target,
            type: payload.type
        };
        this.pebl.storage.getCurrentActivity(function (activity) {
            self.pebl.storage.getCurrentActivity(function (book) {
                self.pebl.user.getUser(function (userProfile) {
                    if (userProfile) {
                        self.xapiGen.addId(xapi);
                        self.xapiGen.addTimestamp(xapi);
                        self.xapiGen.addActorAccount(xapi, userProfile);
                        self.xapiGen.addObject(xapi, PEBL_PREFIX + book, payload.name, payload.description, self.xapiGen.addExtensions(exts));
                        self.xapiGen.addVerb(xapi, "http://adlnet.gov/expapi/verbs/preferred", "preferred");
                        self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + (activity || book));
                        var s = new Action(xapi);
                        self.pebl.storage.saveOutgoing(userProfile, s);
                        self.pebl.storage.saveEvent(userProfile, s);
                    }
                });
            });
        });
    };
    PEBLEventHandlers.prototype.eventContentMorphed = function (event) {
        var payload = event.detail;
        var xapi = {};
        var self = this;
        var exts = {
            target: payload.target,
            type: payload.type
        };
        this.pebl.storage.getCurrentActivity(function (activity) {
            self.pebl.storage.getCurrentBook(function (book) {
                self.pebl.user.getUser(function (userProfile) {
                    if (userProfile) {
                        self.xapiGen.addId(xapi);
                        self.xapiGen.addTimestamp(xapi);
                        self.xapiGen.addActorAccount(xapi, userProfile);
                        self.xapiGen.addObject(xapi, PEBL_PREFIX + book, payload.name, payload.description, self.xapiGen.addExtensions(exts));
                        self.xapiGen.addVerb(xapi, "http://www.peblproject.com/definitions.html#morphed", "morphed");
                        self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + activity);
                        var s = new Action(xapi);
                        self.pebl.storage.saveOutgoing(userProfile, s);
                        self.pebl.storage.saveEvent(userProfile, s);
                    }
                });
            });
        });
    };
    PEBLEventHandlers.prototype.eventNextPage = function (event) {
        var payload = event.detail;
        var xapi = {};
        var self = this;
        var exts = {
            firstCfi: payload.firstCfi,
            lastCfi: payload.lastCfi
        };
        this.pebl.storage.getCurrentBook(function (book) {
            self.pebl.storage.getCurrentActivity(function (activity) {
                self.pebl.user.getUser(function (userProfile) {
                    if (userProfile) {
                        self.xapiGen.addId(xapi);
                        self.xapiGen.addTimestamp(xapi);
                        self.xapiGen.addActorAccount(xapi, userProfile);
                        self.xapiGen.addObject(xapi, PEBL_PREFIX + book, payload.name, payload.description, self.xapiGen.addExtensions(exts));
                        self.xapiGen.addVerb(xapi, "http://www.peblproject.com/definitions.html#paged-next", "paged-next");
                        if (activity)
                            self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + activity);
                        var s = new Navigation(xapi);
                        self.pebl.storage.saveOutgoing(userProfile, s);
                        self.pebl.storage.saveEvent(userProfile, s);
                    }
                });
            });
        });
    };
    PEBLEventHandlers.prototype.eventPrevPage = function (event) {
        var payload = event.detail;
        var xapi = {};
        var self = this;
        var exts = {
            firstCfi: payload.firstCfi,
            lastCfi: payload.lastCfi
        };
        this.pebl.storage.getCurrentBook(function (book) {
            self.pebl.storage.getCurrentActivity(function (activity) {
                self.pebl.user.getUser(function (userProfile) {
                    if (userProfile) {
                        self.xapiGen.addId(xapi);
                        self.xapiGen.addTimestamp(xapi);
                        self.xapiGen.addActorAccount(xapi, userProfile);
                        self.xapiGen.addObject(xapi, PEBL_PREFIX + book, payload.name, payload.description, self.xapiGen.addExtensions(exts));
                        self.xapiGen.addVerb(xapi, "http://www.peblproject.com/definitions.html#paged-prev", "paged-prev");
                        if (activity)
                            self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + activity);
                        var s = new Navigation(xapi);
                        self.pebl.storage.saveOutgoing(userProfile, s);
                        self.pebl.storage.saveEvent(userProfile, s);
                    }
                });
            });
        });
    };
    PEBLEventHandlers.prototype.eventCompleted = function (event) {
        var payload = event.detail;
        var xapi = {};
        var self = this;
        this.pebl.storage.getCurrentBook(function (book) {
            self.pebl.storage.getCurrentActivity(function (activity) {
                self.pebl.user.getUser(function (userProfile) {
                    if (userProfile) {
                        self.xapiGen.addId(xapi);
                        self.xapiGen.addTimestamp(xapi);
                        self.xapiGen.addActorAccount(xapi, userProfile);
                        self.xapiGen.addObject(xapi, PEBL_PREFIX + book, payload.name, payload.description);
                        self.xapiGen.addVerb(xapi, "http://adlnet.gov/expapi/verbs/completed", "completed");
                        if (activity)
                            self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + activity);
                        var s = new Navigation(xapi);
                        self.pebl.storage.saveOutgoing(userProfile, s);
                        self.pebl.storage.saveEvent(userProfile, s);
                    }
                });
            });
        });
    };
    PEBLEventHandlers.prototype.eventCompatibilityTested = function (event) {
    };
    PEBLEventHandlers.prototype.eventChecklisted = function (event) {
    };
    // -------------------------------
    PEBLEventHandlers.prototype.eventLogin = function (event) {
        var userProfile = event.detail;
        var xapi = {};
        var self = this;
        this.pebl.storage.saveCurrentUser(userProfile, function () {
            if (userProfile) {
                self.xapiGen.addId(xapi);
                self.xapiGen.addTimestamp(xapi);
                self.xapiGen.addVerb(xapi, "http://adlnet.gov/expapi/verbs/logged-in", "logged-in");
                self.pebl.storage.getCurrentBook(function (book) {
                    if (book)
                        self.xapiGen.addObject(xapi, PEBL_PREFIX + book);
                    else
                        self.xapiGen.addObject(xapi, PEBL_PREFIX + "Harness");
                    self.xapiGen.addActorAccount(xapi, userProfile);
                    var session = new Session(xapi);
                    self.pebl.storage.saveEvent(userProfile, session);
                    self.pebl.storage.saveOutgoing(userProfile, session);
                });
            }
        });
    };
    PEBLEventHandlers.prototype.eventLogout = function (event) {
        var xapi = {};
        var self = this;
        self.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                self.xapiGen.addId(xapi);
                self.xapiGen.addTimestamp(xapi);
                self.xapiGen.addVerb(xapi, "http://adlnet.gov/expapi/verbs/logged-out", "logged-out");
                self.pebl.storage.getCurrentBook(function (book) {
                    if (book)
                        self.xapiGen.addObject(xapi, PEBL_PREFIX + book);
                    else
                        self.xapiGen.addObject(xapi, PEBL_PREFIX + "Harness");
                    self.xapiGen.addActorAccount(xapi, userProfile);
                    var session = new Session(xapi);
                    self.pebl.storage.saveEvent(userProfile, session);
                    self.pebl.storage.saveOutgoing(userProfile, session);
                    self.pebl.storage.removeCurrentUser();
                });
            }
        });
    };
    return PEBLEventHandlers;
}());


// CONCATENATED MODULE: ./src/pebl.ts

// import { Activity } from "./activity";


// import { Messenger } from "./messenger";



var pebl_PEBL = /** @class */ (function () {
    // readonly launcher: LauncherAdapter;
    function PEBL(config, callback) {
        this.firedEvents = [];
        this.subscribedEventHandlers = {};
        this.subscribedThreadHandlers = {};
        this.loaded = false;
        if (config) {
            this.teacher = config.teacher;
            this.enableDirectMessages = config.enableDirectMessages;
            this.useIndexedDB = config.useIndexedDB;
        }
        else {
            this.teacher = false;
            this.enableDirectMessages = true;
            this.useIndexedDB = true;
        }
        this.utils = new Utils(this);
        this.eventHandlers = new eventHandlers_PEBLEventHandlers(this);
        this.events = new EventSet();
        this.user = new User(this);
        this.network = new network_Network(this);
        var self = this;
        // if (this.useIndexedDB) {
        this.storage = new storage_IndexedDBStorageAdapter(function () {
            self.loaded = true;
            self.addSystemEventListeners();
            if (callback)
                callback(self);
            self.processQueuedEvents();
        });
        // } else {
        //     this.storage = new IndexedDBStorageAdapter(function() { });
        //     // if (localStorage != null) {
        //     //     this.storage;
        //     // } else if (sessionStorage != null) {
        //     //     this.storage;
        //     // } else {
        //     //     this.storage;
        //     // }
        //     this.loaded = true;
        //     this.addSystemEventListeners();
        //     if (callback)
        //         callback(this);
        //     self.processQueuedEvents();
        // }
    }
    PEBL.prototype.addListener = function (event, callback) {
        document.removeEventListener(event, callback);
        document.addEventListener(event, callback);
    };
    PEBL.prototype.addSystemEventListeners = function () {
        var events = Object.keys(this.events);
        for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
            var event_1 = events_1[_i];
            var listener = this.eventHandlers[event_1];
            if (listener) {
                var call = listener.bind(this.eventHandlers);
                this.addListener(event_1, call);
            }
        }
    };
    PEBL.prototype.processQueuedEvents = function () {
        for (var _i = 0, _a = this.firedEvents; _i < _a.length; _i++) {
            var e = _a[_i];
            document.dispatchEvent(e);
        }
        this.firedEvents = [];
    };
    PEBL.prototype.unsubscribeAllEvents = function () {
        for (var _i = 0, _a = Object.keys(this.subscribedEventHandlers); _i < _a.length; _i++) {
            var key = _a[_i];
            for (var _b = 0, _c = this.subscribedEventHandlers[key]; _b < _c.length; _b++) {
                var pack = _c[_b];
                document.removeEventListener(key, pack.modifiedFn);
            }
            delete this.subscribedEventHandlers[key];
        }
    };
    PEBL.prototype.unsubscribeAllThreads = function () {
        for (var _i = 0, _a = Object.keys(this.subscribedEventHandlers); _i < _a.length; _i++) {
            var key = _a[_i];
            for (var _b = 0, _c = this.subscribedEventHandlers[key]; _b < _c.length; _b++) {
                var pack = _c[_b];
                document.removeEventListener(key, pack.modifiedFn);
            }
            delete this.subscribedEventHandlers[key];
        }
    };
    PEBL.prototype.unsubscribeEvent = function (eventName, once, callback) {
        var i = 0;
        for (var _i = 0, _a = this.subscribedEventHandlers[eventName]; _i < _a.length; _i++) {
            var pack = _a[_i];
            if ((pack.once == once) && (pack.fn == callback)) {
                document.removeEventListener(eventName, pack.modifiedFn);
                this.subscribedEventHandlers[eventName].splice(i, 1);
                return;
            }
            i++;
        }
    };
    PEBL.prototype.unsubscribeThread = function (thread, once, callback) {
        var i = 0;
        for (var _i = 0, _a = this.subscribedThreadHandlers[thread]; _i < _a.length; _i++) {
            var pack = _a[_i];
            if ((pack.once == once) && (pack.fn == callback)) {
                document.removeEventListener(thread, pack.modifiedFn);
                this.subscribedThreadHandlers[thread].splice(i, 1);
                return;
            }
            i++;
        }
    };
    PEBL.prototype.subscribeEvent = function (eventName, once, callback) {
        if (!this.subscribedEventHandlers[eventName])
            this.subscribedEventHandlers[eventName] = [];
        var self = this;
        //fix once for return of annotations
        if (once) {
            var modifiedHandler = function (e) {
                self.unsubscribeEvent(eventName, once, callback);
                callback(e.detail);
            };
            document.addEventListener(eventName, modifiedHandler, { once: once });
            this.subscribedEventHandlers[eventName].push({ once: once, fn: callback, modifiedFn: modifiedHandler });
        }
        else {
            var modifiedHandler = function (e) { callback(e.detail); };
            document.addEventListener(eventName, modifiedHandler);
            this.subscribedEventHandlers[eventName].push({ once: once, fn: callback, modifiedFn: modifiedHandler });
        }
        this.user.getUser(function (userProfile) {
            self.storage.getCurrentBook(function (book) {
                if (userProfile && book) {
                    if (eventName == self.events.incomingAnnotations) {
                        self.storage.getAnnotations(userProfile, book, function (annotations) {
                            callback(annotations);
                        });
                    }
                    else if (eventName == self.events.incomingSharedAnnotations) {
                        self.storage.getSharedAnnotations(userProfile, book, function (annotations) {
                            callback(annotations);
                        });
                    }
                }
            });
        });
    };
    //fix once for return of getMessages
    PEBL.prototype.subscribeThread = function (thread, once, callback) {
        var threadCallbacks = this.subscribedThreadHandlers[thread];
        if (!threadCallbacks) {
            threadCallbacks = [];
            this.subscribedThreadHandlers[thread] = threadCallbacks;
        }
        if (once) {
            var modifiedHandler = function (e) {
                self.unsubscribeEvent(thread, once, callback);
                callback(e.detail);
            };
            document.addEventListener(thread, modifiedHandler, { once: once });
            threadCallbacks.push({ once: once, fn: callback, modifiedFn: modifiedHandler });
        }
        else {
            var modifiedHandler = function (e) { callback(e.detail); };
            document.addEventListener(thread, modifiedHandler);
            threadCallbacks.push({ once: once, fn: callback, modifiedFn: modifiedHandler });
        }
        var self = this;
        this.user.getUser(function (userProfile) {
            if (userProfile)
                self.storage.getMessages(userProfile, thread, callback);
            else
                callback([]);
        });
    };
    PEBL.prototype.emitEvent = function (eventName, data) {
        var e = document.createEvent("CustomEvent");
        e.initCustomEvent(eventName, true, true, data);
        if (this.loaded)
            document.dispatchEvent(e);
        else
            this.firedEvents.push(e);
    };
    return PEBL;
}());


// CONCATENATED MODULE: ./src/api.ts

// declare let PeBLConfig: ({ [key: string]: any } | undefined);
// declare let PeBLReady: ((PeBL: PEBL) => void) | undefined;
window.PeBL = new pebl_PEBL(window.PeBLConfig, window.PeBLLoaded);


/***/ })
/******/ ]);