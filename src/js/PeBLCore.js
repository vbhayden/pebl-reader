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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Platform.js <https://mths.be/platform>
 * Copyright 2014-2018 Benjamin Tan <https://bnjmnt4n.now.sh/>
 * Copyright 2011-2013 John-David Dalton <http://allyoucanleet.com/>
 * Available under MIT license <https://mths.be/mit>
 */
;(function() {
  'use strict';

  /** Used to determine if values are of the language type `Object`. */
  var objectTypes = {
    'function': true,
    'object': true
  };

  /** Used as a reference to the global object. */
  var root = (objectTypes[typeof window] && window) || this;

  /** Backup possible global object. */
  var oldRoot = root;

  /** Detect free variable `exports`. */
  var freeExports = objectTypes[typeof exports] && exports;

  /** Detect free variable `module`. */
  var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;

  /** Detect free variable `global` from Node.js or Browserified code and use it as `root`. */
  var freeGlobal = freeExports && freeModule && typeof global == 'object' && global;
  if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal)) {
    root = freeGlobal;
  }

  /**
   * Used as the maximum length of an array-like object.
   * See the [ES6 spec](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength)
   * for more details.
   */
  var maxSafeInteger = Math.pow(2, 53) - 1;

  /** Regular expression to detect Opera. */
  var reOpera = /\bOpera/;

  /** Possible global object. */
  var thisBinding = this;

  /** Used for native method references. */
  var objectProto = Object.prototype;

  /** Used to check for own properties of an object. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /** Used to resolve the internal `[[Class]]` of values. */
  var toString = objectProto.toString;

  /*--------------------------------------------------------------------------*/

  /**
   * Capitalizes a string value.
   *
   * @private
   * @param {string} string The string to capitalize.
   * @returns {string} The capitalized string.
   */
  function capitalize(string) {
    string = String(string);
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  /**
   * A utility function to clean up the OS name.
   *
   * @private
   * @param {string} os The OS name to clean up.
   * @param {string} [pattern] A `RegExp` pattern matching the OS name.
   * @param {string} [label] A label for the OS.
   */
  function cleanupOS(os, pattern, label) {
    // Platform tokens are defined at:
    // http://msdn.microsoft.com/en-us/library/ms537503(VS.85).aspx
    // http://web.archive.org/web/20081122053950/http://msdn.microsoft.com/en-us/library/ms537503(VS.85).aspx
    var data = {
      '10.0': '10',
      '6.4':  '10 Technical Preview',
      '6.3':  '8.1',
      '6.2':  '8',
      '6.1':  'Server 2008 R2 / 7',
      '6.0':  'Server 2008 / Vista',
      '5.2':  'Server 2003 / XP 64-bit',
      '5.1':  'XP',
      '5.01': '2000 SP1',
      '5.0':  '2000',
      '4.0':  'NT',
      '4.90': 'ME'
    };
    // Detect Windows version from platform tokens.
    if (pattern && label && /^Win/i.test(os) && !/^Windows Phone /i.test(os) &&
        (data = data[/[\d.]+$/.exec(os)])) {
      os = 'Windows ' + data;
    }
    // Correct character case and cleanup string.
    os = String(os);

    if (pattern && label) {
      os = os.replace(RegExp(pattern, 'i'), label);
    }

    os = format(
      os.replace(/ ce$/i, ' CE')
        .replace(/\bhpw/i, 'web')
        .replace(/\bMacintosh\b/, 'Mac OS')
        .replace(/_PowerPC\b/i, ' OS')
        .replace(/\b(OS X) [^ \d]+/i, '$1')
        .replace(/\bMac (OS X)\b/, '$1')
        .replace(/\/(\d)/, ' $1')
        .replace(/_/g, '.')
        .replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, '')
        .replace(/\bx86\.64\b/gi, 'x86_64')
        .replace(/\b(Windows Phone) OS\b/, '$1')
        .replace(/\b(Chrome OS \w+) [\d.]+\b/, '$1')
        .split(' on ')[0]
    );

    return os;
  }

  /**
   * An iteration utility for arrays and objects.
   *
   * @private
   * @param {Array|Object} object The object to iterate over.
   * @param {Function} callback The function called per iteration.
   */
  function each(object, callback) {
    var index = -1,
        length = object ? object.length : 0;

    if (typeof length == 'number' && length > -1 && length <= maxSafeInteger) {
      while (++index < length) {
        callback(object[index], index, object);
      }
    } else {
      forOwn(object, callback);
    }
  }

  /**
   * Trim and conditionally capitalize string values.
   *
   * @private
   * @param {string} string The string to format.
   * @returns {string} The formatted string.
   */
  function format(string) {
    string = trim(string);
    return /^(?:webOS|i(?:OS|P))/.test(string)
      ? string
      : capitalize(string);
  }

  /**
   * Iterates over an object's own properties, executing the `callback` for each.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} callback The function executed per own property.
   */
  function forOwn(object, callback) {
    for (var key in object) {
      if (hasOwnProperty.call(object, key)) {
        callback(object[key], key, object);
      }
    }
  }

  /**
   * Gets the internal `[[Class]]` of a value.
   *
   * @private
   * @param {*} value The value.
   * @returns {string} The `[[Class]]`.
   */
  function getClassOf(value) {
    return value == null
      ? capitalize(value)
      : toString.call(value).slice(8, -1);
  }

  /**
   * Host objects can return type values that are different from their actual
   * data type. The objects we are concerned with usually return non-primitive
   * types of "object", "function", or "unknown".
   *
   * @private
   * @param {*} object The owner of the property.
   * @param {string} property The property to check.
   * @returns {boolean} Returns `true` if the property value is a non-primitive, else `false`.
   */
  function isHostType(object, property) {
    var type = object != null ? typeof object[property] : 'number';
    return !/^(?:boolean|number|string|undefined)$/.test(type) &&
      (type == 'object' ? !!object[property] : true);
  }

  /**
   * Prepares a string for use in a `RegExp` by making hyphens and spaces optional.
   *
   * @private
   * @param {string} string The string to qualify.
   * @returns {string} The qualified string.
   */
  function qualify(string) {
    return String(string).replace(/([ -])(?!$)/g, '$1?');
  }

  /**
   * A bare-bones `Array#reduce` like utility function.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} callback The function called per iteration.
   * @returns {*} The accumulated result.
   */
  function reduce(array, callback) {
    var accumulator = null;
    each(array, function(value, index) {
      accumulator = callback(accumulator, value, index, array);
    });
    return accumulator;
  }

  /**
   * Removes leading and trailing whitespace from a string.
   *
   * @private
   * @param {string} string The string to trim.
   * @returns {string} The trimmed string.
   */
  function trim(string) {
    return String(string).replace(/^ +| +$/g, '');
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Creates a new platform object.
   *
   * @memberOf platform
   * @param {Object|string} [ua=navigator.userAgent] The user agent string or
   *  context object.
   * @returns {Object} A platform object.
   */
  function parse(ua) {

    /** The environment context object. */
    var context = root;

    /** Used to flag when a custom context is provided. */
    var isCustomContext = ua && typeof ua == 'object' && getClassOf(ua) != 'String';

    // Juggle arguments.
    if (isCustomContext) {
      context = ua;
      ua = null;
    }

    /** Browser navigator object. */
    var nav = context.navigator || {};

    /** Browser user agent string. */
    var userAgent = nav.userAgent || '';

    ua || (ua = userAgent);

    /** Used to flag when `thisBinding` is the [ModuleScope]. */
    var isModuleScope = isCustomContext || thisBinding == oldRoot;

    /** Used to detect if browser is like Chrome. */
    var likeChrome = isCustomContext
      ? !!nav.likeChrome
      : /\bChrome\b/.test(ua) && !/internal|\n/i.test(toString.toString());

    /** Internal `[[Class]]` value shortcuts. */
    var objectClass = 'Object',
        airRuntimeClass = isCustomContext ? objectClass : 'ScriptBridgingProxyObject',
        enviroClass = isCustomContext ? objectClass : 'Environment',
        javaClass = (isCustomContext && context.java) ? 'JavaPackage' : getClassOf(context.java),
        phantomClass = isCustomContext ? objectClass : 'RuntimeObject';

    /** Detect Java environments. */
    var java = /\bJava/.test(javaClass) && context.java;

    /** Detect Rhino. */
    var rhino = java && getClassOf(context.environment) == enviroClass;

    /** A character to represent alpha. */
    var alpha = java ? 'a' : '\u03b1';

    /** A character to represent beta. */
    var beta = java ? 'b' : '\u03b2';

    /** Browser document object. */
    var doc = context.document || {};

    /**
     * Detect Opera browser (Presto-based).
     * http://www.howtocreate.co.uk/operaStuff/operaObject.html
     * http://dev.opera.com/articles/view/opera-mini-web-content-authoring-guidelines/#operamini
     */
    var opera = context.operamini || context.opera;

    /** Opera `[[Class]]`. */
    var operaClass = reOpera.test(operaClass = (isCustomContext && opera) ? opera['[[Class]]'] : getClassOf(opera))
      ? operaClass
      : (opera = null);

    /*------------------------------------------------------------------------*/

    /** Temporary variable used over the script's lifetime. */
    var data;

    /** The CPU architecture. */
    var arch = ua;

    /** Platform description array. */
    var description = [];

    /** Platform alpha/beta indicator. */
    var prerelease = null;

    /** A flag to indicate that environment features should be used to resolve the platform. */
    var useFeatures = ua == userAgent;

    /** The browser/environment version. */
    var version = useFeatures && opera && typeof opera.version == 'function' && opera.version();

    /** A flag to indicate if the OS ends with "/ Version" */
    var isSpecialCasedOS;

    /* Detectable layout engines (order is important). */
    var layout = getLayout([
      { 'label': 'EdgeHTML', 'pattern': 'Edge' },
      'Trident',
      { 'label': 'WebKit', 'pattern': 'AppleWebKit' },
      'iCab',
      'Presto',
      'NetFront',
      'Tasman',
      'KHTML',
      'Gecko'
    ]);

    /* Detectable browser names (order is important). */
    var name = getName([
      'Adobe AIR',
      'Arora',
      'Avant Browser',
      'Breach',
      'Camino',
      'Electron',
      'Epiphany',
      'Fennec',
      'Flock',
      'Galeon',
      'GreenBrowser',
      'iCab',
      'Iceweasel',
      'K-Meleon',
      'Konqueror',
      'Lunascape',
      'Maxthon',
      { 'label': 'Microsoft Edge', 'pattern': 'Edge' },
      'Midori',
      'Nook Browser',
      'PaleMoon',
      'PhantomJS',
      'Raven',
      'Rekonq',
      'RockMelt',
      { 'label': 'Samsung Internet', 'pattern': 'SamsungBrowser' },
      'SeaMonkey',
      { 'label': 'Silk', 'pattern': '(?:Cloud9|Silk-Accelerated)' },
      'Sleipnir',
      'SlimBrowser',
      { 'label': 'SRWare Iron', 'pattern': 'Iron' },
      'Sunrise',
      'Swiftfox',
      'Waterfox',
      'WebPositive',
      'Opera Mini',
      { 'label': 'Opera Mini', 'pattern': 'OPiOS' },
      'Opera',
      { 'label': 'Opera', 'pattern': 'OPR' },
      'Chrome',
      { 'label': 'Chrome Mobile', 'pattern': '(?:CriOS|CrMo)' },
      { 'label': 'Firefox', 'pattern': '(?:Firefox|Minefield)' },
      { 'label': 'Firefox for iOS', 'pattern': 'FxiOS' },
      { 'label': 'IE', 'pattern': 'IEMobile' },
      { 'label': 'IE', 'pattern': 'MSIE' },
      'Safari'
    ]);

    /* Detectable products (order is important). */
    var product = getProduct([
      { 'label': 'BlackBerry', 'pattern': 'BB10' },
      'BlackBerry',
      { 'label': 'Galaxy S', 'pattern': 'GT-I9000' },
      { 'label': 'Galaxy S2', 'pattern': 'GT-I9100' },
      { 'label': 'Galaxy S3', 'pattern': 'GT-I9300' },
      { 'label': 'Galaxy S4', 'pattern': 'GT-I9500' },
      { 'label': 'Galaxy S5', 'pattern': 'SM-G900' },
      { 'label': 'Galaxy S6', 'pattern': 'SM-G920' },
      { 'label': 'Galaxy S6 Edge', 'pattern': 'SM-G925' },
      { 'label': 'Galaxy S7', 'pattern': 'SM-G930' },
      { 'label': 'Galaxy S7 Edge', 'pattern': 'SM-G935' },
      'Google TV',
      'Lumia',
      'iPad',
      'iPod',
      'iPhone',
      'Kindle',
      { 'label': 'Kindle Fire', 'pattern': '(?:Cloud9|Silk-Accelerated)' },
      'Nexus',
      'Nook',
      'PlayBook',
      'PlayStation Vita',
      'PlayStation',
      'TouchPad',
      'Transformer',
      { 'label': 'Wii U', 'pattern': 'WiiU' },
      'Wii',
      'Xbox One',
      { 'label': 'Xbox 360', 'pattern': 'Xbox' },
      'Xoom'
    ]);

    /* Detectable manufacturers. */
    var manufacturer = getManufacturer({
      'Apple': { 'iPad': 1, 'iPhone': 1, 'iPod': 1 },
      'Archos': {},
      'Amazon': { 'Kindle': 1, 'Kindle Fire': 1 },
      'Asus': { 'Transformer': 1 },
      'Barnes & Noble': { 'Nook': 1 },
      'BlackBerry': { 'PlayBook': 1 },
      'Google': { 'Google TV': 1, 'Nexus': 1 },
      'HP': { 'TouchPad': 1 },
      'HTC': {},
      'LG': {},
      'Microsoft': { 'Xbox': 1, 'Xbox One': 1 },
      'Motorola': { 'Xoom': 1 },
      'Nintendo': { 'Wii U': 1,  'Wii': 1 },
      'Nokia': { 'Lumia': 1 },
      'Samsung': { 'Galaxy S': 1, 'Galaxy S2': 1, 'Galaxy S3': 1, 'Galaxy S4': 1 },
      'Sony': { 'PlayStation': 1, 'PlayStation Vita': 1 }
    });

    /* Detectable operating systems (order is important). */
    var os = getOS([
      'Windows Phone',
      'Android',
      'CentOS',
      { 'label': 'Chrome OS', 'pattern': 'CrOS' },
      'Debian',
      'Fedora',
      'FreeBSD',
      'Gentoo',
      'Haiku',
      'Kubuntu',
      'Linux Mint',
      'OpenBSD',
      'Red Hat',
      'SuSE',
      'Ubuntu',
      'Xubuntu',
      'Cygwin',
      'Symbian OS',
      'hpwOS',
      'webOS ',
      'webOS',
      'Tablet OS',
      'Tizen',
      'Linux',
      'Mac OS X',
      'Macintosh',
      'Mac',
      'Windows 98;',
      'Windows '
    ]);

    /*------------------------------------------------------------------------*/

    /**
     * Picks the layout engine from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {null|string} The detected layout engine.
     */
    function getLayout(guesses) {
      return reduce(guesses, function(result, guess) {
        return result || RegExp('\\b' + (
          guess.pattern || qualify(guess)
        ) + '\\b', 'i').exec(ua) && (guess.label || guess);
      });
    }

    /**
     * Picks the manufacturer from an array of guesses.
     *
     * @private
     * @param {Array} guesses An object of guesses.
     * @returns {null|string} The detected manufacturer.
     */
    function getManufacturer(guesses) {
      return reduce(guesses, function(result, value, key) {
        // Lookup the manufacturer by product or scan the UA for the manufacturer.
        return result || (
          value[product] ||
          value[/^[a-z]+(?: +[a-z]+\b)*/i.exec(product)] ||
          RegExp('\\b' + qualify(key) + '(?:\\b|\\w*\\d)', 'i').exec(ua)
        ) && key;
      });
    }

    /**
     * Picks the browser name from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {null|string} The detected browser name.
     */
    function getName(guesses) {
      return reduce(guesses, function(result, guess) {
        return result || RegExp('\\b' + (
          guess.pattern || qualify(guess)
        ) + '\\b', 'i').exec(ua) && (guess.label || guess);
      });
    }

    /**
     * Picks the OS name from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {null|string} The detected OS name.
     */
    function getOS(guesses) {
      return reduce(guesses, function(result, guess) {
        var pattern = guess.pattern || qualify(guess);
        if (!result && (result =
              RegExp('\\b' + pattern + '(?:/[\\d.]+|[ \\w.]*)', 'i').exec(ua)
            )) {
          result = cleanupOS(result, pattern, guess.label || guess);
        }
        return result;
      });
    }

    /**
     * Picks the product name from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {null|string} The detected product name.
     */
    function getProduct(guesses) {
      return reduce(guesses, function(result, guess) {
        var pattern = guess.pattern || qualify(guess);
        if (!result && (result =
              RegExp('\\b' + pattern + ' *\\d+[.\\w_]*', 'i').exec(ua) ||
              RegExp('\\b' + pattern + ' *\\w+-[\\w]*', 'i').exec(ua) ||
              RegExp('\\b' + pattern + '(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)', 'i').exec(ua)
            )) {
          // Split by forward slash and append product version if needed.
          if ((result = String((guess.label && !RegExp(pattern, 'i').test(guess.label)) ? guess.label : result).split('/'))[1] && !/[\d.]+/.test(result[0])) {
            result[0] += ' ' + result[1];
          }
          // Correct character case and cleanup string.
          guess = guess.label || guess;
          result = format(result[0]
            .replace(RegExp(pattern, 'i'), guess)
            .replace(RegExp('; *(?:' + guess + '[_-])?', 'i'), ' ')
            .replace(RegExp('(' + guess + ')[-_.]?(\\w)', 'i'), '$1 $2'));
        }
        return result;
      });
    }

    /**
     * Resolves the version using an array of UA patterns.
     *
     * @private
     * @param {Array} patterns An array of UA patterns.
     * @returns {null|string} The detected version.
     */
    function getVersion(patterns) {
      return reduce(patterns, function(result, pattern) {
        return result || (RegExp(pattern +
          '(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)', 'i').exec(ua) || 0)[1] || null;
      });
    }

    /**
     * Returns `platform.description` when the platform object is coerced to a string.
     *
     * @name toString
     * @memberOf platform
     * @returns {string} Returns `platform.description` if available, else an empty string.
     */
    function toStringPlatform() {
      return this.description || '';
    }

    /*------------------------------------------------------------------------*/

    // Convert layout to an array so we can add extra details.
    layout && (layout = [layout]);

    // Detect product names that contain their manufacturer's name.
    if (manufacturer && !product) {
      product = getProduct([manufacturer]);
    }
    // Clean up Google TV.
    if ((data = /\bGoogle TV\b/.exec(product))) {
      product = data[0];
    }
    // Detect simulators.
    if (/\bSimulator\b/i.test(ua)) {
      product = (product ? product + ' ' : '') + 'Simulator';
    }
    // Detect Opera Mini 8+ running in Turbo/Uncompressed mode on iOS.
    if (name == 'Opera Mini' && /\bOPiOS\b/.test(ua)) {
      description.push('running in Turbo/Uncompressed mode');
    }
    // Detect IE Mobile 11.
    if (name == 'IE' && /\blike iPhone OS\b/.test(ua)) {
      data = parse(ua.replace(/like iPhone OS/, ''));
      manufacturer = data.manufacturer;
      product = data.product;
    }
    // Detect iOS.
    else if (/^iP/.test(product)) {
      name || (name = 'Safari');
      os = 'iOS' + ((data = / OS ([\d_]+)/i.exec(ua))
        ? ' ' + data[1].replace(/_/g, '.')
        : '');
    }
    // Detect Kubuntu.
    else if (name == 'Konqueror' && !/buntu/i.test(os)) {
      os = 'Kubuntu';
    }
    // Detect Android browsers.
    else if ((manufacturer && manufacturer != 'Google' &&
        ((/Chrome/.test(name) && !/\bMobile Safari\b/i.test(ua)) || /\bVita\b/.test(product))) ||
        (/\bAndroid\b/.test(os) && /^Chrome/.test(name) && /\bVersion\//i.test(ua))) {
      name = 'Android Browser';
      os = /\bAndroid\b/.test(os) ? os : 'Android';
    }
    // Detect Silk desktop/accelerated modes.
    else if (name == 'Silk') {
      if (!/\bMobi/i.test(ua)) {
        os = 'Android';
        description.unshift('desktop mode');
      }
      if (/Accelerated *= *true/i.test(ua)) {
        description.unshift('accelerated');
      }
    }
    // Detect PaleMoon identifying as Firefox.
    else if (name == 'PaleMoon' && (data = /\bFirefox\/([\d.]+)\b/.exec(ua))) {
      description.push('identifying as Firefox ' + data[1]);
    }
    // Detect Firefox OS and products running Firefox.
    else if (name == 'Firefox' && (data = /\b(Mobile|Tablet|TV)\b/i.exec(ua))) {
      os || (os = 'Firefox OS');
      product || (product = data[1]);
    }
    // Detect false positives for Firefox/Safari.
    else if (!name || (data = !/\bMinefield\b/i.test(ua) && /\b(?:Firefox|Safari)\b/.exec(name))) {
      // Escape the `/` for Firefox 1.
      if (name && !product && /[\/,]|^[^(]+?\)/.test(ua.slice(ua.indexOf(data + '/') + 8))) {
        // Clear name of false positives.
        name = null;
      }
      // Reassign a generic name.
      if ((data = product || manufacturer || os) &&
          (product || manufacturer || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(os))) {
        name = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(os) ? os : data) + ' Browser';
      }
    }
    // Add Chrome version to description for Electron.
    else if (name == 'Electron' && (data = (/\bChrome\/([\d.]+)\b/.exec(ua) || 0)[1])) {
      description.push('Chromium ' + data);
    }
    // Detect non-Opera (Presto-based) versions (order is important).
    if (!version) {
      version = getVersion([
        '(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))',
        'Version',
        qualify(name),
        '(?:Firefox|Minefield|NetFront)'
      ]);
    }
    // Detect stubborn layout engines.
    if ((data =
          layout == 'iCab' && parseFloat(version) > 3 && 'WebKit' ||
          /\bOpera\b/.test(name) && (/\bOPR\b/.test(ua) ? 'Blink' : 'Presto') ||
          /\b(?:Midori|Nook|Safari)\b/i.test(ua) && !/^(?:Trident|EdgeHTML)$/.test(layout) && 'WebKit' ||
          !layout && /\bMSIE\b/i.test(ua) && (os == 'Mac OS' ? 'Tasman' : 'Trident') ||
          layout == 'WebKit' && /\bPlayStation\b(?! Vita\b)/i.test(name) && 'NetFront'
        )) {
      layout = [data];
    }
    // Detect Windows Phone 7 desktop mode.
    if (name == 'IE' && (data = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(ua) || 0)[1])) {
      name += ' Mobile';
      os = 'Windows Phone ' + (/\+$/.test(data) ? data : data + '.x');
      description.unshift('desktop mode');
    }
    // Detect Windows Phone 8.x desktop mode.
    else if (/\bWPDesktop\b/i.test(ua)) {
      name = 'IE Mobile';
      os = 'Windows Phone 8.x';
      description.unshift('desktop mode');
      version || (version = (/\brv:([\d.]+)/.exec(ua) || 0)[1]);
    }
    // Detect IE 11 identifying as other browsers.
    else if (name != 'IE' && layout == 'Trident' && (data = /\brv:([\d.]+)/.exec(ua))) {
      if (name) {
        description.push('identifying as ' + name + (version ? ' ' + version : ''));
      }
      name = 'IE';
      version = data[1];
    }
    // Leverage environment features.
    if (useFeatures) {
      // Detect server-side environments.
      // Rhino has a global function while others have a global object.
      if (isHostType(context, 'global')) {
        if (java) {
          data = java.lang.System;
          arch = data.getProperty('os.arch');
          os = os || data.getProperty('os.name') + ' ' + data.getProperty('os.version');
        }
        if (rhino) {
          try {
            version = context.require('ringo/engine').version.join('.');
            name = 'RingoJS';
          } catch(e) {
            if ((data = context.system) && data.global.system == context.system) {
              name = 'Narwhal';
              os || (os = data[0].os || null);
            }
          }
          if (!name) {
            name = 'Rhino';
          }
        }
        else if (
          typeof context.process == 'object' && !context.process.browser &&
          (data = context.process)
        ) {
          if (typeof data.versions == 'object') {
            if (typeof data.versions.electron == 'string') {
              description.push('Node ' + data.versions.node);
              name = 'Electron';
              version = data.versions.electron;
            } else if (typeof data.versions.nw == 'string') {
              description.push('Chromium ' + version, 'Node ' + data.versions.node);
              name = 'NW.js';
              version = data.versions.nw;
            }
          }
          if (!name) {
            name = 'Node.js';
            arch = data.arch;
            os = data.platform;
            version = /[\d.]+/.exec(data.version);
            version = version ? version[0] : null;
          }
        }
      }
      // Detect Adobe AIR.
      else if (getClassOf((data = context.runtime)) == airRuntimeClass) {
        name = 'Adobe AIR';
        os = data.flash.system.Capabilities.os;
      }
      // Detect PhantomJS.
      else if (getClassOf((data = context.phantom)) == phantomClass) {
        name = 'PhantomJS';
        version = (data = data.version || null) && (data.major + '.' + data.minor + '.' + data.patch);
      }
      // Detect IE compatibility modes.
      else if (typeof doc.documentMode == 'number' && (data = /\bTrident\/(\d+)/i.exec(ua))) {
        // We're in compatibility mode when the Trident version + 4 doesn't
        // equal the document mode.
        version = [version, doc.documentMode];
        if ((data = +data[1] + 4) != version[1]) {
          description.push('IE ' + version[1] + ' mode');
          layout && (layout[1] = '');
          version[1] = data;
        }
        version = name == 'IE' ? String(version[1].toFixed(1)) : version[0];
      }
      // Detect IE 11 masking as other browsers.
      else if (typeof doc.documentMode == 'number' && /^(?:Chrome|Firefox)\b/.test(name)) {
        description.push('masking as ' + name + ' ' + version);
        name = 'IE';
        version = '11.0';
        layout = ['Trident'];
        os = 'Windows';
      }
      os = os && format(os);
    }
    // Detect prerelease phases.
    if (version && (data =
          /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(version) ||
          /(?:alpha|beta)(?: ?\d)?/i.exec(ua + ';' + (useFeatures && nav.appMinorVersion)) ||
          /\bMinefield\b/i.test(ua) && 'a'
        )) {
      prerelease = /b/i.test(data) ? 'beta' : 'alpha';
      version = version.replace(RegExp(data + '\\+?$'), '') +
        (prerelease == 'beta' ? beta : alpha) + (/\d+\+?/.exec(data) || '');
    }
    // Detect Firefox Mobile.
    if (name == 'Fennec' || name == 'Firefox' && /\b(?:Android|Firefox OS)\b/.test(os)) {
      name = 'Firefox Mobile';
    }
    // Obscure Maxthon's unreliable version.
    else if (name == 'Maxthon' && version) {
      version = version.replace(/\.[\d.]+/, '.x');
    }
    // Detect Xbox 360 and Xbox One.
    else if (/\bXbox\b/i.test(product)) {
      if (product == 'Xbox 360') {
        os = null;
      }
      if (product == 'Xbox 360' && /\bIEMobile\b/.test(ua)) {
        description.unshift('mobile mode');
      }
    }
    // Add mobile postfix.
    else if ((/^(?:Chrome|IE|Opera)$/.test(name) || name && !product && !/Browser|Mobi/.test(name)) &&
        (os == 'Windows CE' || /Mobi/i.test(ua))) {
      name += ' Mobile';
    }
    // Detect IE platform preview.
    else if (name == 'IE' && useFeatures) {
      try {
        if (context.external === null) {
          description.unshift('platform preview');
        }
      } catch(e) {
        description.unshift('embedded');
      }
    }
    // Detect BlackBerry OS version.
    // http://docs.blackberry.com/en/developers/deliverables/18169/HTTP_headers_sent_by_BB_Browser_1234911_11.jsp
    else if ((/\bBlackBerry\b/.test(product) || /\bBB10\b/.test(ua)) && (data =
          (RegExp(product.replace(/ +/g, ' *') + '/([.\\d]+)', 'i').exec(ua) || 0)[1] ||
          version
        )) {
      data = [data, /BB10/.test(ua)];
      os = (data[1] ? (product = null, manufacturer = 'BlackBerry') : 'Device Software') + ' ' + data[0];
      version = null;
    }
    // Detect Opera identifying/masking itself as another browser.
    // http://www.opera.com/support/kb/view/843/
    else if (this != forOwn && product != 'Wii' && (
          (useFeatures && opera) ||
          (/Opera/.test(name) && /\b(?:MSIE|Firefox)\b/i.test(ua)) ||
          (name == 'Firefox' && /\bOS X (?:\d+\.){2,}/.test(os)) ||
          (name == 'IE' && (
            (os && !/^Win/.test(os) && version > 5.5) ||
            /\bWindows XP\b/.test(os) && version > 8 ||
            version == 8 && !/\bTrident\b/.test(ua)
          ))
        ) && !reOpera.test((data = parse.call(forOwn, ua.replace(reOpera, '') + ';'))) && data.name) {
      // When "identifying", the UA contains both Opera and the other browser's name.
      data = 'ing as ' + data.name + ((data = data.version) ? ' ' + data : '');
      if (reOpera.test(name)) {
        if (/\bIE\b/.test(data) && os == 'Mac OS') {
          os = null;
        }
        data = 'identify' + data;
      }
      // When "masking", the UA contains only the other browser's name.
      else {
        data = 'mask' + data;
        if (operaClass) {
          name = format(operaClass.replace(/([a-z])([A-Z])/g, '$1 $2'));
        } else {
          name = 'Opera';
        }
        if (/\bIE\b/.test(data)) {
          os = null;
        }
        if (!useFeatures) {
          version = null;
        }
      }
      layout = ['Presto'];
      description.push(data);
    }
    // Detect WebKit Nightly and approximate Chrome/Safari versions.
    if ((data = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(ua) || 0)[1])) {
      // Correct build number for numeric comparison.
      // (e.g. "532.5" becomes "532.05")
      data = [parseFloat(data.replace(/\.(\d)$/, '.0$1')), data];
      // Nightly builds are postfixed with a "+".
      if (name == 'Safari' && data[1].slice(-1) == '+') {
        name = 'WebKit Nightly';
        prerelease = 'alpha';
        version = data[1].slice(0, -1);
      }
      // Clear incorrect browser versions.
      else if (version == data[1] ||
          version == (data[2] = (/\bSafari\/([\d.]+\+?)/i.exec(ua) || 0)[1])) {
        version = null;
      }
      // Use the full Chrome version when available.
      data[1] = (/\bChrome\/([\d.]+)/i.exec(ua) || 0)[1];
      // Detect Blink layout engine.
      if (data[0] == 537.36 && data[2] == 537.36 && parseFloat(data[1]) >= 28 && layout == 'WebKit') {
        layout = ['Blink'];
      }
      // Detect JavaScriptCore.
      // http://stackoverflow.com/questions/6768474/how-can-i-detect-which-javascript-engine-v8-or-jsc-is-used-at-runtime-in-androi
      if (!useFeatures || (!likeChrome && !data[1])) {
        layout && (layout[1] = 'like Safari');
        data = (data = data[0], data < 400 ? 1 : data < 500 ? 2 : data < 526 ? 3 : data < 533 ? 4 : data < 534 ? '4+' : data < 535 ? 5 : data < 537 ? 6 : data < 538 ? 7 : data < 601 ? 8 : '8');
      } else {
        layout && (layout[1] = 'like Chrome');
        data = data[1] || (data = data[0], data < 530 ? 1 : data < 532 ? 2 : data < 532.05 ? 3 : data < 533 ? 4 : data < 534.03 ? 5 : data < 534.07 ? 6 : data < 534.10 ? 7 : data < 534.13 ? 8 : data < 534.16 ? 9 : data < 534.24 ? 10 : data < 534.30 ? 11 : data < 535.01 ? 12 : data < 535.02 ? '13+' : data < 535.07 ? 15 : data < 535.11 ? 16 : data < 535.19 ? 17 : data < 536.05 ? 18 : data < 536.10 ? 19 : data < 537.01 ? 20 : data < 537.11 ? '21+' : data < 537.13 ? 23 : data < 537.18 ? 24 : data < 537.24 ? 25 : data < 537.36 ? 26 : layout != 'Blink' ? '27' : '28');
      }
      // Add the postfix of ".x" or "+" for approximate versions.
      layout && (layout[1] += ' ' + (data += typeof data == 'number' ? '.x' : /[.+]/.test(data) ? '' : '+'));
      // Obscure version for some Safari 1-2 releases.
      if (name == 'Safari' && (!version || parseInt(version) > 45)) {
        version = data;
      }
    }
    // Detect Opera desktop modes.
    if (name == 'Opera' &&  (data = /\bzbov|zvav$/.exec(os))) {
      name += ' ';
      description.unshift('desktop mode');
      if (data == 'zvav') {
        name += 'Mini';
        version = null;
      } else {
        name += 'Mobile';
      }
      os = os.replace(RegExp(' *' + data + '$'), '');
    }
    // Detect Chrome desktop mode.
    else if (name == 'Safari' && /\bChrome\b/.exec(layout && layout[1])) {
      description.unshift('desktop mode');
      name = 'Chrome Mobile';
      version = null;

      if (/\bOS X\b/.test(os)) {
        manufacturer = 'Apple';
        os = 'iOS 4.3+';
      } else {
        os = null;
      }
    }
    // Strip incorrect OS versions.
    if (version && version.indexOf((data = /[\d.]+$/.exec(os))) == 0 &&
        ua.indexOf('/' + data + '-') > -1) {
      os = trim(os.replace(data, ''));
    }
    // Add layout engine.
    if (layout && !/\b(?:Avant|Nook)\b/.test(name) && (
        /Browser|Lunascape|Maxthon/.test(name) ||
        name != 'Safari' && /^iOS/.test(os) && /\bSafari\b/.test(layout[1]) ||
        /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(name) && layout[1])) {
      // Don't add layout details to description if they are falsey.
      (data = layout[layout.length - 1]) && description.push(data);
    }
    // Combine contextual information.
    if (description.length) {
      description = ['(' + description.join('; ') + ')'];
    }
    // Append manufacturer to description.
    if (manufacturer && product && product.indexOf(manufacturer) < 0) {
      description.push('on ' + manufacturer);
    }
    // Append product to description.
    if (product) {
      description.push((/^on /.test(description[description.length - 1]) ? '' : 'on ') + product);
    }
    // Parse the OS into an object.
    if (os) {
      data = / ([\d.+]+)$/.exec(os);
      isSpecialCasedOS = data && os.charAt(os.length - data[0].length - 1) == '/';
      os = {
        'architecture': 32,
        'family': (data && !isSpecialCasedOS) ? os.replace(data[0], '') : os,
        'version': data ? data[1] : null,
        'toString': function() {
          var version = this.version;
          return this.family + ((version && !isSpecialCasedOS) ? ' ' + version : '') + (this.architecture == 64 ? ' 64-bit' : '');
        }
      };
    }
    // Add browser/OS architecture.
    if ((data = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(arch)) && !/\bi686\b/i.test(arch)) {
      if (os) {
        os.architecture = 64;
        os.family = os.family.replace(RegExp(' *' + data), '');
      }
      if (
          name && (/\bWOW64\b/i.test(ua) ||
          (useFeatures && /\w(?:86|32)$/.test(nav.cpuClass || nav.platform) && !/\bWin64; x64\b/i.test(ua)))
      ) {
        description.unshift('32-bit');
      }
    }
    // Chrome 39 and above on OS X is always 64-bit.
    else if (
        os && /^OS X/.test(os.family) &&
        name == 'Chrome' && parseFloat(version) >= 39
    ) {
      os.architecture = 64;
    }

    ua || (ua = null);

    /*------------------------------------------------------------------------*/

    /**
     * The platform object.
     *
     * @name platform
     * @type Object
     */
    var platform = {};

    /**
     * The platform description.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.description = ua;

    /**
     * The name of the browser's layout engine.
     *
     * The list of common layout engines include:
     * "Blink", "EdgeHTML", "Gecko", "Trident" and "WebKit"
     *
     * @memberOf platform
     * @type string|null
     */
    platform.layout = layout && layout[0];

    /**
     * The name of the product's manufacturer.
     *
     * The list of manufacturers include:
     * "Apple", "Archos", "Amazon", "Asus", "Barnes & Noble", "BlackBerry",
     * "Google", "HP", "HTC", "LG", "Microsoft", "Motorola", "Nintendo",
     * "Nokia", "Samsung" and "Sony"
     *
     * @memberOf platform
     * @type string|null
     */
    platform.manufacturer = manufacturer;

    /**
     * The name of the browser/environment.
     *
     * The list of common browser names include:
     * "Chrome", "Electron", "Firefox", "Firefox for iOS", "IE",
     * "Microsoft Edge", "PhantomJS", "Safari", "SeaMonkey", "Silk",
     * "Opera Mini" and "Opera"
     *
     * Mobile versions of some browsers have "Mobile" appended to their name:
     * eg. "Chrome Mobile", "Firefox Mobile", "IE Mobile" and "Opera Mobile"
     *
     * @memberOf platform
     * @type string|null
     */
    platform.name = name;

    /**
     * The alpha/beta release indicator.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.prerelease = prerelease;

    /**
     * The name of the product hosting the browser.
     *
     * The list of common products include:
     *
     * "BlackBerry", "Galaxy S4", "Lumia", "iPad", "iPod", "iPhone", "Kindle",
     * "Kindle Fire", "Nexus", "Nook", "PlayBook", "TouchPad" and "Transformer"
     *
     * @memberOf platform
     * @type string|null
     */
    platform.product = product;

    /**
     * The browser's user agent string.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.ua = ua;

    /**
     * The browser/environment version.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.version = name && version;

    /**
     * The name of the operating system.
     *
     * @memberOf platform
     * @type Object
     */
    platform.os = os || {

      /**
       * The CPU architecture the OS is built for.
       *
       * @memberOf platform.os
       * @type number|null
       */
      'architecture': null,

      /**
       * The family of the OS.
       *
       * Common values include:
       * "Windows", "Windows Server 2008 R2 / 7", "Windows Server 2008 / Vista",
       * "Windows XP", "OS X", "Ubuntu", "Debian", "Fedora", "Red Hat", "SuSE",
       * "Android", "iOS" and "Windows Phone"
       *
       * @memberOf platform.os
       * @type string|null
       */
      'family': null,

      /**
       * The version of the OS.
       *
       * @memberOf platform.os
       * @type string|null
       */
      'version': null,

      /**
       * Returns the OS string.
       *
       * @memberOf platform.os
       * @returns {string} The OS string.
       */
      'toString': function() { return 'null'; }
    };

    platform.parse = parse;
    platform.toString = toStringPlatform;

    if (platform.version) {
      description.unshift(version);
    }
    if (platform.name) {
      description.unshift(name);
    }
    if (os && name && !(os == String(os).split(' ')[0] && (os == name.split(' ')[0] || product))) {
      description.push(product ? '(' + os + ')' : 'on ' + os);
    }
    if (description.length) {
      platform.description = description.join(' ');
    }
    return platform;
  }

  /*--------------------------------------------------------------------------*/

  // Export platform.
  var platform = parse();

  // Some AMD build optimizers, like r.js, check for condition patterns like the following:
  if (true) {
    // Expose platform on the global object to prevent errors when platform is
    // loaded by a script tag in the presence of an AMD loader.
    // See http://requirejs.org/docs/errors.html#mismatch for more details.
    root.platform = platform;

    // Define as an anonymous module so platform can be aliased through path mapping.
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return platform;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
  // Check for `exports` after `define` in case a build optimizer adds an `exports` object.
  else {}
}.call(this));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)(module), __webpack_require__(2)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 3 */
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
        if (this["object"].definition) {
            var extensions = this["object"].definition.extensions;
            this.browserName = extensions[PREFIX_PEBL_EXTENSION + "browserName"];
            this.browserVersion = extensions[PREFIX_PEBL_EXTENSION + "browserVersion"];
            this.osName = extensions[PREFIX_PEBL_EXTENSION + "osName"];
            this.osVersion = extensions[PREFIX_PEBL_EXTENSION + "osVersion"];
            this.contextOrigin = extensions[PREFIX_PEBL_EXTENSION + "contextOrigin"];
            this.contextUrl = extensions[PREFIX_PEBL_EXTENSION + "contextUrl"];
            this.currentTeam = extensions[PREFIX_PEBL_EXTENSION + "currentTeam"];
            this.currentClass = extensions[PREFIX_PEBL_EXTENSION + "currentClass"];
        }
    }
    XApiStatement.prototype.toXAPI = function () {
        return new XApiStatement(this);
    };
    XApiStatement.prototype.getActorId = function () {
        return this.actor.mbox || this.actor.openid ||
            (this.actor.account && this.actor.account.name);
    };
    XApiStatement.is = function (x) {
        if (x.verb)
            return true;
        else
            return false;
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
        _this.name = _this.object.definition.name["en-US"];
        var extensions = _this["object"].definition.extensions;
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
        return (verb == "commented") || (verb == "bookmarked") || (verb == "annotated");
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
        _this.book = _this.object.id;
        if (_this.book.indexOf(PREFIX_PEBL) != -1)
            _this.book = _this.book.substring(_this.book.indexOf(PREFIX_PEBL) + PREFIX_PEBL.length);
        else if (_this.book.indexOf(PREFIX_PEBL_THREAD) != -1)
            _this.book = _this.book.substring(_this.book.indexOf(PREFIX_PEBL_THREAD) + PREFIX_PEBL_THREAD.length);
        if (_this.object.definition) {
            _this.name = _this.object.definition.name && _this.object.definition.name["en-US"];
            _this.description = _this.object.definition.description && _this.object.definition.description["en-US"];
            var extensions = _this.object.definition.extensions;
            if (extensions) {
                _this.target = extensions[PREFIX_PEBL_EXTENSION + "target"];
                _this.type = extensions[PREFIX_PEBL_EXTENSION + "type"];
                _this.idref = extensions[PREFIX_PEBL_EXTENSION + "idref"];
                _this.cfi = extensions[PREFIX_PEBL_EXTENSION + "cfi"];
            }
        }
        return _this;
    }
    Action.is = function (x) {
        var verb = x.verb.display["en-US"];
        return (verb == "preferred") || (verb == "morphed") || (verb == "interacted") || (verb == "experienced") || (verb == "disliked") ||
            (verb == "liked") || (verb == "accessed") || (verb == "hid") || (verb == "showed") || (verb == "displayed") || (verb == "undisplayed") ||
            (verb == "searched") || (verb == "selected") || (verb == "unbookmarked") || (verb == "discarded") || (verb == "unshared") || (verb == "unannotated") ||
            (verb == "submitted");
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
        _this.book = _this.object.id;
        if (_this.book.indexOf(PREFIX_PEBL) != -1)
            _this.book = _this.book.substring(_this.book.indexOf(PREFIX_PEBL) + PREFIX_PEBL.length);
        else if (_this.book.indexOf(PREFIX_PEBL_THREAD) != -1)
            _this.book = _this.book.substring(_this.book.indexOf(PREFIX_PEBL_THREAD) + PREFIX_PEBL_THREAD.length);
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
        _this.text = _this.result.response;
        var extensions = _this.object.definition.extensions;
        if (extensions) {
            _this.access = extensions[PREFIX_PEBL_EXTENSION + "access"];
            _this.type = extensions[PREFIX_PEBL_EXTENSION + "type"];
            _this.replyThread = extensions[PREFIX_PEBL_EXTENSION + "replyThread"];
            _this.groupId = extensions[PREFIX_PEBL_EXTENSION + "groupId"];
            _this.isPrivate = extensions[PREFIX_PEBL_EXTENSION + "isPrivate"];
            _this.book = extensions[PREFIX_PEBL_EXTENSION + "book"];
            _this.cfi = extensions[PREFIX_PEBL_EXTENSION + "cfi"];
            _this.idRef = extensions[PREFIX_PEBL_EXTENSION + "idRef"];
            _this.peblAction = extensions[PREFIX_PEBL_EXTENSION + "peblAction"];
            if (extensions[PREFIX_PEBL_EXTENSION + "thread"])
                _this.thread = extensions[PREFIX_PEBL_EXTENSION + "thread"];
        }
        return _this;
    }
    Message.is = function (x) {
        var verb = x.verb.display["en-US"];
        return (verb == "responded") || (verb == "noted");
    };
    return Message;
}(XApiStatement));

// -------------------------------
var Voided = /** @class */ (function (_super) {
    __extends(Voided, _super);
    function Voided(raw) {
        var _this = _super.call(this, raw) || this;
        _this.thread = (_this.context && _this.context.contextActivities && _this.context.contextActivities.parent) ? _this.context.contextActivities.parent[0].id : "";
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
        _this.book = _this.object.id;
        if (_this.book.indexOf(PREFIX_PEBL) != -1)
            _this.book = _this.book.substring(_this.book.indexOf(PREFIX_PEBL) + PREFIX_PEBL.length);
        else if (_this.book.indexOf(PREFIX_PEBL_THREAD) != -1)
            _this.book = _this.book.substring(_this.book.indexOf(PREFIX_PEBL_THREAD) + PREFIX_PEBL_THREAD.length);
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
        return (verb == "attempted");
    };
    return Question;
}(XApiStatement));

// -------------------------------
var Quiz = /** @class */ (function (_super) {
    __extends(Quiz, _super);
    function Quiz(raw) {
        var _this = _super.call(this, raw) || this;
        _this.book = _this.object.id;
        if (_this.book.indexOf(PREFIX_PEBL) != -1)
            _this.book = _this.book.substring(_this.book.indexOf(PREFIX_PEBL) + PREFIX_PEBL.length);
        else if (_this.book.indexOf(PREFIX_PEBL_THREAD) != -1)
            _this.book = _this.book.substring(_this.book.indexOf(PREFIX_PEBL_THREAD) + PREFIX_PEBL_THREAD.length);
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
        _this.book = _this.object.id;
        if (_this.book.indexOf(PREFIX_PEBL) != -1)
            _this.book = _this.book.substring(_this.book.indexOf(PREFIX_PEBL) + PREFIX_PEBL.length);
        else if (_this.book.indexOf(PREFIX_PEBL_THREAD) != -1)
            _this.book = _this.book.substring(_this.book.indexOf(PREFIX_PEBL_THREAD) + PREFIX_PEBL_THREAD.length);
        _this.type = _this.verb.display["en-US"];
        return _this;
    }
    Session.is = function (x) {
        var verb = x.verb.display["en-US"];
        return (verb == "entered") || (verb == "exited") || (verb == "logged-in") ||
            (verb == "logged-out") || (verb == "terminated") || (verb == "initialized") || (verb == "launched");
    };
    return Session;
}(XApiStatement));

// -------------------------------
var Membership = /** @class */ (function (_super) {
    __extends(Membership, _super);
    function Membership(raw) {
        var _this = _super.call(this, raw) || this;
        _this.thread = _this.object.id;
        if (_this.thread.indexOf(PREFIX_PEBL_THREAD) != -1)
            _this.thread = _this.thread.substring(PREFIX_PEBL_THREAD.length);
        _this.membershipId = _this.object.definition.name["en-US"];
        _this.description = _this.object.definition.description && _this.object.definition.description["en-US"];
        var extensions = _this.object.definition.extensions;
        _this.role = extensions[PREFIX_PEBL_EXTENSION + "role"];
        _this.activityType = extensions[PREFIX_PEBL_EXTENSION + "activityType"];
        _this.organization = extensions[PREFIX_PEBL_EXTENSION + "organization"];
        _this.organizationName = extensions[PREFIX_PEBL_EXTENSION + "organizationName"];
        return _this;
    }
    Membership.is = function (x) {
        var verb = x.verb.display["en-US"];
        return (verb == "joined");
    };
    return Membership;
}(XApiStatement));

// -------------------------------
var Artifact = /** @class */ (function (_super) {
    __extends(Artifact, _super);
    function Artifact(raw) {
        var _this = _super.call(this, raw) || this;
        _this.thread = _this.object.id;
        if (_this.thread.indexOf(PREFIX_PEBL_THREAD) != -1)
            _this.thread = _this.thread.substring(PREFIX_PEBL_THREAD.length);
        _this.artifactId = _this.object.definition.name["en-US"];
        _this.artifactDescription = _this.object.definition.description && _this.object.definition.description["en-US"];
        var extensions = _this.object.definition.extensions;
        _this.body = extensions[PREFIX_PEBL_EXTENSION + "body"];
        return _this;
    }
    Artifact.is = function (x) {
        var verb = x.verb.display["en-US"];
        return (verb == "artifactCreated");
    };
    return Artifact;
}(XApiStatement));

// -------------------------------
var Invitation = /** @class */ (function (_super) {
    __extends(Invitation, _super);
    function Invitation(raw) {
        var _this = _super.call(this, raw) || this;
        var extensions = _this.object.definition.extensions;
        _this.token = _this.object.definition.name["en-US"];
        _this.programId = extensions[PREFIX_PEBL_EXTENSION + "programId"];
        return _this;
    }
    Invitation.is = function (x) {
        var verb = x.verb.display["en-US"];
        return (verb == "invited");
    };
    return Invitation;
}(XApiStatement));

// -------------------------------
var ProgramAction = /** @class */ (function (_super) {
    __extends(ProgramAction, _super);
    function ProgramAction(raw) {
        var _this = _super.call(this, raw) || this;
        _this.thread = _this.object.id;
        var extensions = _this.object.definition.extensions;
        _this.programId = _this.object.definition.name["en-US"];
        _this.previousValue = extensions[PREFIX_PEBL_EXTENSION + "previousValue"];
        _this.newValue = extensions[PREFIX_PEBL_EXTENSION + "newValue"];
        _this.action = extensions[PREFIX_PEBL_EXTENSION + "action"];
        return _this;
    }
    ProgramAction.is = function (x) {
        var verb = x.verb.display["en-US"];
        return (verb == "programLevelUp") || (verb == "programLevelDown") || (verb == "programInvited") || (verb == "programUninvited")
            || (verb == "programExpelled") || (verb == "programJoined") || (verb == "programActivityLaunched")
            || (verb == "programActivityCompleted") || (verb == "programActivityTeamCompleted") || (verb == "programModified")
            || (verb == "programDeleted") || (verb == "programCompleted") || (verb == "programCopied") || (verb == "programDiscussed");
    };
    return ProgramAction;
}(XApiStatement));

// -------------------------------
var CompatibilityTest = /** @class */ (function (_super) {
    __extends(CompatibilityTest, _super);
    function CompatibilityTest(raw) {
        var _this = _super.call(this, raw) || this;
        var extensions = _this.object.definition.extensions;
        _this.readerName = extensions[PREFIX_PEBL_EXTENSION + "readerName"];
        _this.osName = extensions[PREFIX_PEBL_EXTENSION + "osName"];
        _this.osVersion = extensions[PREFIX_PEBL_EXTENSION + "osVersion"];
        _this.browserName = extensions[PREFIX_PEBL_EXTENSION + "browserName"];
        _this.browserVersion = extensions[PREFIX_PEBL_EXTENSION + "browserVersion"];
        _this.userAgent = extensions[PREFIX_PEBL_EXTENSION + "userAgent"];
        _this.appVersion = extensions[PREFIX_PEBL_EXTENSION + "appVersion"];
        _this.platform = extensions[PREFIX_PEBL_EXTENSION + "platform"];
        _this.vendor = extensions[PREFIX_PEBL_EXTENSION + "vendor"];
        _this.testResults = JSON.parse(extensions[PREFIX_PEBL_EXTENSION + "testResults"]);
        return _this;
    }
    CompatibilityTest.is = function (x) {
        var verb = x.verb.display["en-US"];
        return (verb == "compatibilityTested");
    };
    return CompatibilityTest;
}(XApiStatement));

// -------------------------------
var ModuleEvent = /** @class */ (function (_super) {
    __extends(ModuleEvent, _super);
    function ModuleEvent(raw) {
        return _super.call(this, raw) || this;
    }
    return ModuleEvent;
}(XApiStatement));

var ModuleRating = /** @class */ (function (_super) {
    __extends(ModuleRating, _super);
    function ModuleRating(raw) {
        var _this = _super.call(this, raw) || this;
        var extensions = _this.object.definition.extensions;
        _this.rating = _this.object.definition.name["en-US"];
        _this.idref = extensions[PREFIX_PEBL_EXTENSION + "idref"];
        _this.programId = extensions[PREFIX_PEBL_EXTENSION + "programId"];
        return _this;
    }
    ModuleRating.is = function (x) {
        var verb = x.verb.display["en-US"];
        return (verb == "moduleRating");
    };
    return ModuleRating;
}(ModuleEvent));

var ModuleFeedback = /** @class */ (function (_super) {
    __extends(ModuleFeedback, _super);
    function ModuleFeedback(raw) {
        var _this = _super.call(this, raw) || this;
        var extensions = _this.object.definition.extensions;
        _this.feedback = _this.object.definition.name["en-US"];
        _this.willingToDiscuss = extensions[PREFIX_PEBL_EXTENSION + "willingToDiscuss"];
        _this.idref = extensions[PREFIX_PEBL_EXTENSION + "idref"];
        _this.programId = extensions[PREFIX_PEBL_EXTENSION + "programId"];
        return _this;
    }
    ModuleFeedback.is = function (x) {
        var verb = x.verb.display["en-US"];
        return (verb == "moduleFeedback");
    };
    return ModuleFeedback;
}(ModuleEvent));

var ModuleExample = /** @class */ (function (_super) {
    __extends(ModuleExample, _super);
    function ModuleExample(raw) {
        var _this = _super.call(this, raw) || this;
        var extensions = _this.object.definition.extensions;
        _this.example = _this.object.definition.name["en-US"];
        _this.description = _this.object.definition.description["en-US"];
        _this.idref = extensions[PREFIX_PEBL_EXTENSION + "idref"];
        _this.youtubeUrl = extensions[PREFIX_PEBL_EXTENSION + "youtubeUrl"];
        _this.imageUrl = extensions[PREFIX_PEBL_EXTENSION + "imageUrl"];
        _this.websiteUrl = extensions[PREFIX_PEBL_EXTENSION + "websiteUrl"];
        _this.quotedPerson = extensions[PREFIX_PEBL_EXTENSION + "quotedPerson"];
        _this.quotedTeam = extensions[PREFIX_PEBL_EXTENSION + "quotedTeam"];
        return _this;
    }
    ModuleExample.is = function (x) {
        var verb = x.verb.display["en-US"];
        return (verb == "moduleExample");
    };
    return ModuleExample;
}(ModuleEvent));

var ModuleExampleRating = /** @class */ (function (_super) {
    __extends(ModuleExampleRating, _super);
    function ModuleExampleRating(raw) {
        var _this = _super.call(this, raw) || this;
        var extensions = _this.object.definition.extensions;
        _this.rating = _this.object.definition.name["en-US"];
        _this.idref = extensions[PREFIX_PEBL_EXTENSION + "idref"];
        _this.programId = extensions[PREFIX_PEBL_EXTENSION + "programId"];
        _this.exampleId = extensions[PREFIX_PEBL_EXTENSION + "exampleId"];
        return _this;
    }
    ModuleExampleRating.is = function (x) {
        var verb = x.verb.display["en-US"];
        return (verb == "moduleExampleRating");
    };
    return ModuleExampleRating;
}(ModuleEvent));

var ModuleExampleFeedback = /** @class */ (function (_super) {
    __extends(ModuleExampleFeedback, _super);
    function ModuleExampleFeedback(raw) {
        var _this = _super.call(this, raw) || this;
        var extensions = _this.object.definition.extensions;
        _this.feedback = _this.object.definition.name["en-US"];
        _this.willingToDiscuss = extensions[PREFIX_PEBL_EXTENSION + "willingToDiscuss"];
        _this.idref = extensions[PREFIX_PEBL_EXTENSION + "idref"];
        _this.programId = extensions[PREFIX_PEBL_EXTENSION + "programId"];
        _this.exampleId = extensions[PREFIX_PEBL_EXTENSION + "exampleId"];
        return _this;
    }
    ModuleExampleFeedback.is = function (x) {
        var verb = x.verb.display["en-US"];
        return (verb == "moduleExampleFeedback");
    };
    return ModuleExampleFeedback;
}(ModuleEvent));

var ModuleRemovedEvent = /** @class */ (function (_super) {
    __extends(ModuleRemovedEvent, _super);
    function ModuleRemovedEvent(raw) {
        var _this = _super.call(this, raw) || this;
        var extensions = _this.object.definition.extensions;
        _this.idref = _this.object.definition.name["en-US"];
        _this.eventId = _this.object.definition.description["en-US"];
        _this.type = extensions[PREFIX_PEBL_EXTENSION + "type"];
        return _this;
    }
    ModuleRemovedEvent.is = function (x) {
        var verb = x.verb.display["en-US"];
        return (verb == "moduleRemovedEvent");
    };
    return ModuleRemovedEvent;
}(ModuleEvent));

var Notification = /** @class */ (function (_super) {
    __extends(Notification, _super);
    function Notification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Notification;
}(XApiStatement));


// CONCATENATED MODULE: ./src/models.ts
// -------------------------------
var UserProfile = /** @class */ (function () {
    function UserProfile(raw) {
        this.identity = raw.identity;
        this.name = raw.name;
        this.homePage = raw.homePage;
        this.preferredName = raw.preferredName;
        if (raw.registryEndpoint)
            this.registryEndpoint = new Endpoint(raw.registryEndpoint);
        this.currentTeam = raw.currentTeam ? raw.currentTeam : 'guestTeam';
        this.currentClass = raw.currentClass ? raw.currentClass : 'guestClass';
        this.endpoints = [];
        this.metadata = raw.metadata;
        if (raw.endpoints)
            for (var _i = 0, _a = raw.endpoints; _i < _a.length; _i++) {
                var endpointObj = _a[_i];
                this.endpoints.push(new Endpoint(endpointObj));
            }
        if (this.homePage == null)
            this.homePage = "acct:keycloak-server";
        if (raw.firstName)
            this.firstName = raw.firstName;
        if (raw.lastName)
            this.lastName = raw.lastName;
        if (raw.avatar)
            this.avatar = raw.avatar;
        if (raw.email)
            this.email = raw.email;
        if (raw.phoneNumber)
            this.phoneNumber = raw.phoneNumber;
        if (raw.streetAddress)
            this.streetAddress = raw.streetAddress;
        if (raw.city)
            this.city = raw.city;
        if (raw.state)
            this.state = raw.state;
        if (raw.zipCode)
            this.zipCode = raw.zipCode;
        if (raw.country)
            this.country = raw.country;
    }
    UserProfile.prototype.toObject = function () {
        var urls = {};
        for (var _i = 0, _a = this.endpoints; _i < _a.length; _i++) {
            var e = _a[_i];
            urls[e.url] = e.toObject();
        }
        var obj = {
            "identity": this.identity,
            "name": this.name,
            "homePage": this.homePage,
            "preferredName": this.preferredName,
            "lrsUrls": urls,
            "metadata": {},
            "registryEndpoint": this.registryEndpoint,
            "currentTeam": this.currentTeam,
            "currentClass": this.currentClass,
            "firstName": this.firstName,
            "lastName": this.lastName,
            "avatar": this.avatar,
            "email": this.email,
            "phoneNumber": this.phoneNumber,
            "streetAddress": this.streetAddress,
            "city": this.city,
            "state": this.state,
            "zipCode": this.zipCode,
            "country": this.country
        };
        if (this.metadata)
            obj.metadata = this.metadata;
        return obj;
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
        this.lastSyncedActivityEvents = {};
        this.lastSyncedModules = {};
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
            lastSyncedBooksShared: this.lastSyncedBooksMine,
            lastSyncedActivityEvents: this.lastSyncedActivityEvents,
            lastSyncedModules: this.lastSyncedModules
        };
    };
    return Endpoint;
}());

// -------------------------------
var TempMembership = /** @class */ (function () {
    function TempMembership(raw) {
        this.id = raw.id;
        this.identity = raw.identity;
        this.actor = raw.actor;
        this.inviteId = raw.inviteId;
        this.inviteLink = raw.inviteLink;
        this.status = raw.status;
        this.role = raw.role;
        this.inviteRole = raw.inviteRole;
    }
    TempMembership.is = function (x) {
        if (x.id && x.identity && x.actor && x.actor.name && x.inviteLink && x.status && x.role && x.inviteRole)
            return true;
        else
            return false;
    };
    return TempMembership;
}());


// CONCATENATED MODULE: ./src/activity.ts
var activity_extends = (undefined && undefined.__extends) || (function () {
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
// import { PEBL } from "./pebl";



var Activity = /** @class */ (function () {
    function Activity(raw) {
        this.isNew = false;
        this.dirtyEdits = {};
        if (!raw.id) {
            /*!
              Excerpt from: Math.uuid.js (v1.4)
              http://www.broofa.com
              mailto:robert@broofa.com
              Copyright (c) 2010 Robert Kieffer
              Dual licensed under the MIT and GPL licenses.
            */
            this.id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
            this.isNew = true;
        }
        else {
            this.id = raw.id;
            this.isNew = false;
        }
        this.timestamp = (typeof (raw.timestamp) === "string") ? new Date(Date.parse(raw.timestamp)) : new Date();
        this.etag = raw.etag;
        this.type = raw.type;
        this.delete = raw.delete;
    }
    Activity.is = function (raw) {
        return (raw.id && raw.type) != null;
    };
    Activity.prototype.clearDirtyEdits = function () {
        this.dirtyEdits = {};
    };
    Activity.prototype.toTransportFormat = function () {
        return {
            type: this.type,
            timestamp: this.timestamp ? this.timestamp.toISOString() : (new Date()).toISOString(),
            id: this.id
        };
    };
    ;
    Activity.merge = function (oldActivity, newActivity) {
        var mergedActivity = {};
        var oldKeys = Object.keys(oldActivity);
        var newKeys = Object.keys(newActivity);
        for (var _i = 0, oldKeys_1 = oldKeys; _i < oldKeys_1.length; _i++) {
            var key = oldKeys_1[_i];
            mergedActivity[key] = oldActivity[key];
        }
        for (var _a = 0, newKeys_1 = newKeys; _a < newKeys_1.length; _a++) {
            var key = newKeys_1[_a];
            // Null properties were set for a reason and should not be changed.
            if (mergedActivity[key] == null) {
                // Leave it
            }
            else {
                mergedActivity[key] = newActivity[key];
            }
        }
        // If either is flagged for deletion, that should not be changed.
        if ((oldActivity.delete && oldActivity.delete == true) || (newActivity.delete && newActivity.delete == true)) {
            mergedActivity.delete = true;
        }
        // If either is flagged as completed, that should not be changed.
        if ((oldActivity.completed && oldActivity.completed == true) || (newActivity.completed && newActivity.completed == true)) {
            mergedActivity.completed = true;
        }
        return mergedActivity;
    };
    return Activity;
}());

var Learnlet = /** @class */ (function (_super) {
    activity_extends(Learnlet, _super);
    function Learnlet(raw) {
        var _this = this;
        raw.type = "learnlet";
        _this = _super.call(this, raw) || this;
        _this._cfi = raw.cfi;
        _this._level = raw.level;
        _this.programTitle = raw.name;
        _this._description = raw.description;
        return _this;
    }
    Object.defineProperty(Learnlet.prototype, "name", {
        get: function () { return this.programTitle; },
        set: function (arg) {
            this.dirtyEdits["name"] = true;
            this.programTitle = arg;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Learnlet.prototype, "description", {
        get: function () { return this._description; },
        set: function (arg) {
            this.dirtyEdits["description"] = true;
            this._description = arg;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Learnlet.prototype, "level", {
        get: function () { return this._level; },
        set: function (arg) {
            this.dirtyEdits["level"] = true;
            this._level = arg;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Learnlet.prototype, "cfi", {
        get: function () { return this._cfi; },
        set: function (arg) {
            this.dirtyEdits["cfi"] = true;
            this._cfi = arg;
        },
        enumerable: true,
        configurable: true
    });
    Learnlet.is = function (raw) {
        return raw.type == "learnlet";
    };
    Learnlet.prototype.toTransportFormat = function () {
        var sObj = _super.prototype.toTransportFormat.call(this);
        var obj = {};
        if (this.dirtyEdits["name"] || this.isNew)
            sObj.name = this.programTitle;
        if (this.dirtyEdits["description"] || this.isNew)
            sObj.description = this._description;
        if (this.dirtyEdits["description"] || this.isNew)
            sObj.description = this._description;
        if (this.dirtyEdits["cfi"] || this.isNew)
            sObj.cfi = this._cfi;
        if (this.dirtyEdits["level"] || this.isNew)
            sObj.level = this._level;
        obj[this.id] = sObj;
        return obj;
    };
    return Learnlet;
}(Activity));

// -------------------------------
var activity_Program = /** @class */ (function (_super) {
    activity_extends(Program, _super);
    function Program(raw) {
        var _this = this;
        raw.type = "program";
        _this = _super.call(this, raw) || this;
        var self = _this;
        // Translate legacy member format to new format
        var members = [];
        if (raw.members)
            members = typeof (raw.members) === "string" ? JSON.parse(decodeURIComponent(raw.members)) : (raw.members ? raw.members : []);
        if (members.length > 0) {
            for (var _i = 0, members_1 = members; _i < members_1.length; _i++) {
                var member = members_1[_i];
                self.addMember(member);
            }
        }
        var rawKeys = Object.keys(raw);
        for (var _a = 0, rawKeys_1 = rawKeys; _a < rawKeys_1.length; _a++) {
            var key = rawKeys_1[_a];
            if (key.indexOf('member-') !== -1) {
                var member = typeof (raw[key]) === "string" ? JSON.parse(decodeURIComponent(raw[key])) : (raw[key] ? raw[key] : null);
                if (member == null || (XApiStatement.is(member) && Membership.is(member)) || TempMembership.is(member)) {
                    self[key] = member;
                }
            }
        }
        _this.programLevelStepsComplete = raw.programLevelStepsComplete || 0;
        _this.programLevels = raw.programLevels || [];
        _this.programTitle = raw.programTitle || "";
        _this.programShortDescription = raw.programShortDescription || "";
        _this.programLongDescription = raw.programLongDescription || "";
        _this.programLevel = raw.programLevel || 0;
        _this.programIssues = raw.programIssues ? raw.programIssues : [];
        _this.programCommunities = raw.programCommunities ? raw.programCommunities : [];
        _this.programInstitutions = raw.programInstitutions ? raw.programInstitutions : [];
        _this.programAvatar = raw.programAvatar;
        _this.programTeamName = raw.programTeamName;
        _this.programFocus = raw.programFocus;
        _this.completed = raw.completed ? new Date(raw.completed) : undefined;
        _this.created = raw.created ? new Date(raw.created) : undefined;
        // Estimate created time to backfill older programs, find oldest member and use their timestamp
        if (!_this.created) {
            if (_this.isNew) {
                _this.created = new Date();
            }
            else {
                var oldestMember = null;
                var keys = Object.keys(_this);
                for (var _b = 0, keys_1 = keys; _b < keys_1.length; _b++) {
                    var key = keys_1[_b];
                    if (key.indexOf('member-') !== -1) {
                        var member = typeof (_this[key]) === "string" ? JSON.parse(decodeURIComponent(_this[key])) : (_this[key] ? _this[key] : null);
                        if (member && XApiStatement.is(member) && Membership.is(member)) {
                            if (!oldestMember || (new Date(member.timestamp) < new Date(oldestMember.timestamp)))
                                oldestMember = member;
                        }
                    }
                }
                if (oldestMember)
                    _this.created = new Date(oldestMember.timestamp);
            }
        }
        _this.members = typeof (raw.members) === "string" ? JSON.parse(decodeURIComponent(raw.members)) : (raw.members ? raw.members : []);
        return _this;
    }
    Program.is = function (raw) {
        return raw.type == "program";
    };
    Program.prototype.toTransportFormat = function () {
        var obj = _super.prototype.toTransportFormat.call(this);
        var self = this;
        var keys = Object.keys(this);
        for (var _i = 0, keys_2 = keys; _i < keys_2.length; _i++) {
            var key = keys_2[_i];
            if (key.indexOf('member-') !== -1) {
                if (self[key] == null) {
                    obj[key] = self[key];
                }
                else if ((XApiStatement.is(self[key]) && Membership.is(self[key])) || TempMembership.is(self[key])) {
                    obj[key] = encodeURIComponent(JSON.stringify(self[key]));
                }
            }
        }
        obj.programLevelStepsComplete = this.programLevelStepsComplete;
        obj.programLevels = this.programLevels;
        obj.programTitle = this.programTitle;
        obj.programShortDescription = this.programShortDescription;
        obj.programLongDescription = this.programLongDescription;
        obj.programLevel = this.programLevel;
        obj.programIssues = this.programIssues;
        obj.programAvatar = this.programAvatar;
        obj.programTeamName = this.programTeamName;
        obj.programFocus = this.programFocus;
        obj.programCommunities = this.programCommunities;
        obj.programInstitutions = this.programInstitutions;
        obj.completed = this.completed ? this.completed.toISOString() : undefined,
            obj.created = this.created ? this.created.toISOString() : undefined,
            obj.members = encodeURIComponent(JSON.stringify(this.members));
        return obj;
    };
    Program.prototype.addMember = function (membership) {
        this['member-' + membership.id] = membership;
    };
    Program.iterateMembers = function (program, callback) {
        var keys = Object.keys(program);
        for (var _i = 0, keys_3 = keys; _i < keys_3.length; _i++) {
            var key = keys_3[_i];
            if (key.indexOf('member-') !== -1 && program[key]) {
                if (XApiStatement.is(program[key]) && Membership.is(program[key])) {
                    callback(key, program[key]);
                }
                else if (TempMembership.is(program[key])) {
                    callback(key, program[key]);
                }
            }
        }
    };
    Program.getMembers = function (program) {
        var members = [];
        var keys = Object.keys(program);
        for (var _i = 0, keys_4 = keys; _i < keys_4.length; _i++) {
            var key = keys_4[_i];
            if (key.indexOf('member-') !== -1 && program[key]) {
                if (XApiStatement.is(program[key]) && Membership.is(program[key])) {
                    members.push(program[key]);
                }
            }
        }
        return members;
    };
    Program.isMember = function (program, userIdentity) {
        var isMember = false;
        var keys = Object.keys(program);
        for (var _i = 0, keys_5 = keys; _i < keys_5.length; _i++) {
            var key = keys_5[_i];
            if (key.indexOf('member-') !== -1 && program[key]) {
                if (program[key].identity === userIdentity) {
                    isMember = true;
                }
            }
        }
        return isMember;
    };
    Program.isNew = function (program) {
        var isNew = true;
        var keys = Object.keys(program);
        for (var _i = 0, keys_6 = keys; _i < keys_6.length; _i++) {
            var key = keys_6[_i];
            if (key.indexOf('member-') !== -1) {
                isNew = false;
            }
        }
        return isNew;
    };
    return Program;
}(Activity));

var activity_Institution = /** @class */ (function (_super) {
    activity_extends(Institution, _super);
    function Institution(raw) {
        var _this = this;
        raw.type = "institution";
        _this = _super.call(this, raw) || this;
        var self = _this;
        var rawKeys = Object.keys(raw);
        for (var _i = 0, rawKeys_2 = rawKeys; _i < rawKeys_2.length; _i++) {
            var key = rawKeys_2[_i];
            if (key.indexOf('member-') !== -1) {
                var member = typeof (raw[key]) === "string" ? JSON.parse(decodeURIComponent(raw[key])) : (raw[key] ? raw[key] : null);
                if (member == null || (XApiStatement.is(member) && Membership.is(member)) || TempMembership.is(member)) {
                    self[key] = member;
                }
            }
            else if (key.indexOf('program-') !== -1) {
                var program = typeof (raw[key]) === "string" ? JSON.parse(decodeURIComponent(raw[key])) : (raw[key] ? raw[key] : null);
                if (program == null || (activity_Program.is(program))) {
                    self[key] = program;
                }
            }
        }
        _this.institutionName = raw.institutionName || "";
        _this.institutionDescription = raw.institutionDescription || "";
        _this.institutionAvatar = raw.institutionAvatar;
        return _this;
    }
    Institution.is = function (raw) {
        return raw.type == "institution";
    };
    Institution.prototype.toTransportFormat = function () {
        var obj = _super.prototype.toTransportFormat.call(this);
        var self = this;
        var keys = Object.keys(this);
        for (var _i = 0, keys_7 = keys; _i < keys_7.length; _i++) {
            var key = keys_7[_i];
            if (key.indexOf('member-') !== -1) {
                if (self[key] == null) {
                    obj[key] = self[key];
                }
                else if ((XApiStatement.is(self[key]) && Membership.is(self[key])) || TempMembership.is(self[key])) {
                    obj[key] = encodeURIComponent(JSON.stringify(self[key]));
                }
            }
            else if (key.indexOf('program-') !== -1) {
                if (self[key] == null) {
                    obj[key] = self[key];
                }
                else if (activity_Program.is(self[key])) {
                    obj[key] = encodeURIComponent(JSON.stringify(self[key]));
                }
            }
        }
        obj.institutionName = this.institutionName;
        obj.institutionDescription = this.institutionDescription;
        obj.institutionAvatar = this.institutionAvatar;
        return obj;
    };
    Institution.prototype.addMember = function (membership) {
        this['member-' + membership.id] = membership;
    };
    Institution.prototype.addProgram = function (program) {
        this['program-' + program.id] = program;
    };
    Institution.iterateMembers = function (institution, callback) {
        var keys = Object.keys(institution);
        for (var _i = 0, keys_8 = keys; _i < keys_8.length; _i++) {
            var key = keys_8[_i];
            if (key.indexOf('member-') !== -1 && institution[key]) {
                if (XApiStatement.is(institution[key]) && Membership.is(institution[key])) {
                    callback(key, institution[key]);
                }
                else if (TempMembership.is(institution[key])) {
                    callback(key, institution[key]);
                }
            }
        }
    };
    Institution.isMember = function (institution, userIdentity) {
        var isMember = false;
        var keys = Object.keys(institution);
        for (var _i = 0, keys_9 = keys; _i < keys_9.length; _i++) {
            var key = keys_9[_i];
            if (key.indexOf('member-') !== -1 && institution[key]) {
                if (institution[key].identity === userIdentity) {
                    isMember = true;
                }
            }
        }
        return isMember;
    };
    Institution.iteratePrograms = function (institution, callback) {
        var keys = Object.keys(institution);
        for (var _i = 0, keys_10 = keys; _i < keys_10.length; _i++) {
            var key = keys_10[_i];
            if (key.indexOf('program-') !== -1 && institution[key]) {
                if (activity_Program.is(institution[key])) {
                    callback(key, institution[key]);
                }
            }
        }
    };
    Institution.isProgram = function (institution, programId) {
        var isProgram = false;
        var keys = Object.keys(institution);
        for (var _i = 0, keys_11 = keys; _i < keys_11.length; _i++) {
            var key = keys_11[_i];
            if (key.indexOf('program-') !== -1 && institution[key]) {
                if (institution[key].id === programId) {
                    isProgram = true;
                }
            }
        }
        return isProgram;
    };
    Institution.isNew = function (institution) {
        var isNew = true;
        var keys = Object.keys(institution);
        for (var _i = 0, keys_12 = keys; _i < keys_12.length; _i++) {
            var key = keys_12[_i];
            if (key.indexOf('member-') !== -1) {
                isNew = false;
            }
        }
        return isNew;
    };
    return Institution;
}(Activity));

var activity_System = /** @class */ (function (_super) {
    activity_extends(System, _super);
    function System(raw) {
        var _this = this;
        raw.type = "system";
        _this = _super.call(this, raw) || this;
        var self = _this;
        var rawKeys = Object.keys(raw);
        for (var _i = 0, rawKeys_3 = rawKeys; _i < rawKeys_3.length; _i++) {
            var key = rawKeys_3[_i];
            if (key.indexOf('member-') !== -1) {
                var member = typeof (raw[key]) === "string" ? JSON.parse(decodeURIComponent(raw[key])) : (raw[key] ? raw[key] : null);
                if (member == null || (XApiStatement.is(member) && Membership.is(member)) || TempMembership.is(member)) {
                    self[key] = member;
                }
            }
        }
        _this.systemName = raw.systemName || "";
        _this.systemDescription = raw.systemDescription || "";
        return _this;
    }
    System.is = function (raw) {
        return raw.type == "system";
    };
    System.prototype.toTransportFormat = function () {
        var obj = _super.prototype.toTransportFormat.call(this);
        var self = this;
        var keys = Object.keys(this);
        for (var _i = 0, keys_13 = keys; _i < keys_13.length; _i++) {
            var key = keys_13[_i];
            if (key.indexOf('member-') !== -1) {
                if (self[key] == null) {
                    obj[key] = self[key];
                }
                else if ((XApiStatement.is(self[key]) && Membership.is(self[key])) || TempMembership.is(self[key])) {
                    obj[key] = encodeURIComponent(JSON.stringify(self[key]));
                }
            }
        }
        obj.systemName = this.systemName;
        obj.systemDescription = this.systemDescription;
        return obj;
    };
    System.prototype.addMember = function (membership) {
        this['member-' + membership.id] = membership;
    };
    System.iterateMembers = function (system, callback) {
        var keys = Object.keys(system);
        for (var _i = 0, keys_14 = keys; _i < keys_14.length; _i++) {
            var key = keys_14[_i];
            if (key.indexOf('member-') !== -1 && system[key]) {
                if (XApiStatement.is(system[key]) && Membership.is(system[key])) {
                    callback(key, system[key]);
                }
                else if (TempMembership.is(system[key])) {
                    callback(key, system[key]);
                }
            }
        }
    };
    System.isMember = function (system, userIdentity) {
        var isMember = false;
        var keys = Object.keys(system);
        for (var _i = 0, keys_15 = keys; _i < keys_15.length; _i++) {
            var key = keys_15[_i];
            if (key.indexOf('member-') !== -1 && system[key]) {
                if (system[key].identity === userIdentity) {
                    isMember = true;
                }
            }
        }
        return isMember;
    };
    System.isNew = function (system) {
        var isNew = true;
        var keys = Object.keys(system);
        for (var _i = 0, keys_16 = keys; _i < keys_16.length; _i++) {
            var key = keys_16[_i];
            if (key.indexOf('member-') !== -1) {
                isNew = false;
            }
        }
        return isNew;
    };
    return System;
}(Activity));

// -------------------------------
var Presence = /** @class */ (function (_super) {
    activity_extends(Presence, _super);
    function Presence() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Presence.is = function (raw) {
        return raw.type == "presence";
    };
    return Presence;
}(Activity));

// -------------------------------
function toActivity(obj) {
    var act = null;
    if (activity_Program.is(obj)) {
        act = new activity_Program(obj);
    }
    else if (Learnlet.is(obj)) {
        act = new Learnlet(obj);
    }
    else if (Learnlet.is(obj)) {
        act = new Presence(obj);
    }
    else if (activity_Institution.is(obj)) {
        act = new activity_Institution(obj);
    }
    else if (activity_System.is(obj)) {
        act = new activity_System(obj);
    }
    else
        new Error("Unknown activity type");
    return act;
}

// CONCATENATED MODULE: ./src/storage.ts


var MASTER_INDEX = "master";
var CURRENT_BOOK = "peblCurrentBook";
var CURRENT_BOOK_TITLE = "peblCurrentBookTitle";
var CURRENT_BOOK_ID = "peblCurrentBookId";
var CURRENT_USER = "peblCurrentUser";
// const VERB_INDEX = "verbs";
var storage_IndexedDBStorageAdapter = /** @class */ (function () {
    function IndexedDBStorageAdapter(callback) {
        this.invocationQueue = [];
        var request = window.indexedDB.open("pebl", 26);
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
            var outgoingXApiStore = db.createObjectStore("outgoingXApi", { keyPath: ["identity", "id"] });
            var outgoingActivityStore = db.createObjectStore("outgoingActivity", { keyPath: ["identity", "id"] });
            var messageStore = db.createObjectStore("messages", { keyPath: ["identity", "id"] });
            var groupStore = db.createObjectStore("groups", { keyPath: ["identity", "id"] });
            db.createObjectStore("user", { keyPath: "identity" });
            db.createObjectStore("state", { keyPath: "id" });
            db.createObjectStore("assets", { keyPath: ["identity", "id"] });
            var queuedReferences = db.createObjectStore("queuedReferences", { keyPath: ["identity", "id"] });
            var notificationStore = db.createObjectStore("notifications", { keyPath: ["identity", "id"] });
            var tocStore = db.createObjectStore("tocs", { keyPath: ["identity", "book", "section", "pageKey"] });
            db.createObjectStore("lrsAuth", { keyPath: "id" });
            var activityStore = db.createObjectStore("activity", { keyPath: ["identity", "type", "id"] });
            var activityEventStore = db.createObjectStore("activityEvents", { keyPath: ["id", "programId"] });
            var moduleEventStore = db.createObjectStore("moduleEvents", { keyPath: ["id", "idref"] });
            activityStore.createIndex(MASTER_INDEX, ["identity", "type"]);
            activityEventStore.createIndex(MASTER_INDEX, ["programId"]);
            moduleEventStore.createIndex(MASTER_INDEX, ["idref"]);
            eventStore.createIndex(MASTER_INDEX, ["identity", "book"]);
            annotationStore.createIndex(MASTER_INDEX, ["identity", "book"]);
            competencyStore.createIndex(MASTER_INDEX, "identity");
            generalAnnotationStore.createIndex(MASTER_INDEX, "book");
            outgoingActivityStore.createIndex(MASTER_INDEX, "identity");
            outgoingXApiStore.createIndex(MASTER_INDEX, "identity");
            groupStore.createIndex(MASTER_INDEX, "identity");
            messageStore.createIndex(MASTER_INDEX, ["identity", "thread"]);
            queuedReferences.createIndex(MASTER_INDEX, ["identity", "book"]);
            notificationStore.createIndex(MASTER_INDEX, "identity");
            tocStore.createIndex(MASTER_INDEX, ["identity", "book"]);
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
            var param = book;
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
    IndexedDBStorageAdapter.prototype.saveCurrentBookTitle = function (book, callback) {
        var pack = {
            value: book,
            id: CURRENT_BOOK_TITLE
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
            var self_18 = this;
            this.invocationQueue.push(function () {
                self_18.saveCurrentBookTitle(book, callback);
            });
        }
    };
    IndexedDBStorageAdapter.prototype.getCurrentBookTitle = function (callback) {
        if (this.db) {
            var request_5 = this.db.transaction(["state"], "readonly").objectStore("state").get(CURRENT_BOOK_TITLE);
            request_5.onerror = function (e) {
                console.log(e);
            };
            request_5.onsuccess = function () {
                var r = request_5.result;
                if (callback != null) {
                    if (r != null)
                        callback(r.value);
                    else
                        callback();
                }
            };
        }
        else {
            var self_19 = this;
            this.invocationQueue.push(function () {
                self_19.getCurrentBookTitle(callback);
            });
        }
    };
    // -------------------------------
    IndexedDBStorageAdapter.prototype.saveCurrentBookId = function (book, callback) {
        var pack = {
            value: book,
            id: CURRENT_BOOK_ID
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
            var self_20 = this;
            this.invocationQueue.push(function () {
                self_20.saveCurrentBookId(book, callback);
            });
        }
    };
    IndexedDBStorageAdapter.prototype.getCurrentBookId = function (callback) {
        if (this.db) {
            var request_6 = this.db.transaction(["state"], "readonly").objectStore("state").get(CURRENT_BOOK_ID);
            request_6.onerror = function (e) {
                console.log(e);
            };
            request_6.onsuccess = function () {
                var r = request_6.result;
                if (callback != null) {
                    if (r != null)
                        callback(r.value);
                    else
                        callback();
                }
            };
        }
        else {
            var self_21 = this;
            this.invocationQueue.push(function () {
                self_21.getCurrentBookId(callback);
            });
        }
    };
    // -------------------------------
    IndexedDBStorageAdapter.prototype.saveSyncTimestamps = function (identity, key, data, callback) {
        var _this = this;
        if (this.db) {
            var request = this.db.transaction(["state"], "readwrite").objectStore("state").put({
                id: identity + key,
                data: data
            });
            request.onerror = function (e) {
                console.log(e);
                callback(false);
            };
            request.onsuccess = function () {
                callback(true);
            };
        }
        else {
            this.invocationQueue.push(function () {
                _this.saveSyncTimestamps(identity, key, data, callback);
            });
        }
    };
    IndexedDBStorageAdapter.prototype.getSyncTimestamps = function (identity, key, callback) {
        var _this = this;
        if (this.db) {
            var request_7 = this.db.transaction(["state"], "readonly").objectStore("state").get(identity + key);
            request_7.onerror = function (e) {
                console.log(e);
                callback(-1);
            };
            request_7.onsuccess = function () {
                if (request_7.result) {
                    callback(request_7.result.data);
                }
                else {
                    callback(-1);
                }
            };
        }
        else {
            this.invocationQueue.push(function () {
                _this.getSyncTimestamps(identity, key, callback);
            });
        }
    };
    IndexedDBStorageAdapter.prototype.saveCompoundSyncTimestamps = function (identity, key, data, callback) {
        var _this = this;
        if (this.db) {
            var request = this.db.transaction(["state"], "readwrite").objectStore("state").put({
                id: identity + key,
                data: data
            });
            request.onerror = function (e) {
                console.log(e);
                callback(false);
            };
            request.onsuccess = function () {
                callback(true);
            };
        }
        else {
            this.invocationQueue.push(function () {
                _this.saveCompoundSyncTimestamps(identity, key, data, callback);
            });
        }
    };
    IndexedDBStorageAdapter.prototype.getCompoundSyncTimestamps = function (identity, key, callback) {
        var _this = this;
        if (this.db) {
            var request_8 = this.db.transaction(["state"], "readonly").objectStore("state").get(identity + key);
            request_8.onerror = function (e) {
                console.log(e);
                callback({});
            };
            request_8.onsuccess = function () {
                if (request_8.result)
                    callback(request_8.result.data);
                else
                    callback({});
            };
        }
        else {
            this.invocationQueue.push(function () {
                _this.getCompoundSyncTimestamps(identity, key, callback);
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
                var self_22 = this;
                var processCallback_3 = function () {
                    var record = stmtsCopy_3.pop();
                    if (record) {
                        var clone = record;
                        clone.identity = userProfile.identity;
                        var request = objectStore_3.put(self_22.cleanRecord(clone));
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
            var self_23 = this;
            this.invocationQueue.push(function () {
                self_23.saveEvent(userProfile, events, callback);
            });
        }
    };
    IndexedDBStorageAdapter.prototype.getEvents = function (userProfile, book, callback) {
        if (this.db) {
            var index = this.db.transaction(["events"], "readonly").objectStore("events").index(MASTER_INDEX);
            var param = [userProfile.identity, book];
            var self_24 = this;
            self_24.getAll(index, IDBKeyRange.only(param), callback);
        }
        else {
            var self_25 = this;
            this.invocationQueue.push(function () {
                self_25.getEvents(userProfile, book, callback);
            });
        }
    };
    // -------------------------------
    IndexedDBStorageAdapter.prototype.getCompetencies = function (userProfile, callback) {
        if (this.db) {
            var os = this.db.transaction(["competencies"], "readonly").objectStore("competencies");
            var index_1 = os.index(MASTER_INDEX);
            var param_1 = userProfile.identity;
            var self_26 = this;
            this.getAll(index_1, IDBKeyRange.only(param_1), function (arr) {
                if (arr.length == 0)
                    self_26.getAll(index_1, IDBKeyRange.only([param_1]), callback);
                else
                    callback(arr);
            });
        }
        else {
            var self_27 = this;
            this.invocationQueue.push(function () {
                self_27.getCompetencies(userProfile, callback);
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
            var self_28 = this;
            var processCallback_4 = function () {
                if (competencies.length > 0) {
                    var record = competencies.pop();
                    var request = os_1.put(self_28.cleanRecord(record));
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
            var self_29 = this;
            this.invocationQueue.push(function () {
                self_29.saveCompetencies(userProfile, competencies, callback);
            });
        }
    };
    // -------------------------------
    IndexedDBStorageAdapter.prototype.saveOutgoingXApi = function (userProfile, stmt, callback) {
        if (this.db) {
            var clone = stmt;
            clone.identity = userProfile.identity;
            var request = this.db.transaction(["outgoingXApi"], "readwrite").objectStore("outgoingXApi").put(this.cleanRecord(clone));
            request.onerror = function (e) {
                console.log(e);
            };
            request.onsuccess = function () {
                if (callback)
                    callback();
            };
        }
        else {
            var self_30 = this;
            this.invocationQueue.push(function () {
                self_30.saveOutgoingXApi(userProfile, stmt, callback);
            });
        }
    };
    IndexedDBStorageAdapter.prototype.getOutgoingXApi = function (userProfile, callback) {
        if (this.db) {
            var os = this.db.transaction(["outgoingXApi"], "readonly").objectStore("outgoingXApi");
            var index_2 = os.index(MASTER_INDEX);
            var param_2 = userProfile.identity;
            var self_31 = this;
            this.getAll(index_2, IDBKeyRange.only(param_2), function (arr) {
                if (arr.length == 0)
                    self_31.getAll(index_2, IDBKeyRange.only([param_2]), callback);
                else
                    callback(arr);
            });
        }
        else {
            var self_32 = this;
            this.invocationQueue.push(function () {
                self_32.getOutgoingXApi(userProfile, callback);
            });
        }
    };
    IndexedDBStorageAdapter.prototype.removeOutgoingXApi = function (userProfile, toClear, callback) {
        if (this.db) {
            var objectStore_4 = this.db.transaction(["outgoingXApi"], "readwrite").objectStore("outgoingXApi");
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
            var self_33 = this;
            this.invocationQueue.push(function () {
                self_33.removeOutgoingXApi(userProfile, toClear, callback);
            });
        }
    };
    // -------------------------------
    IndexedDBStorageAdapter.prototype.saveMessages = function (userProfile, stmts, callback) {
        if (this.db) {
            if (stmts instanceof Message) {
                var clone = stmts;
                clone.identity = userProfile.identity;
                if (clone.isPrivate)
                    clone.thread += '_user-' + userProfile.identity;
                else if (clone.groupId)
                    clone.thread += '_group-' + clone.groupId;
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
                var self_34 = this;
                var processCallback_6 = function () {
                    var record = stmtsCopy_4.pop();
                    if (record) {
                        var clone = record;
                        clone.identity = userProfile.identity;
                        if (clone.isPrivate)
                            clone.thread += '_user-' + userProfile.identity;
                        else if (clone.groupId)
                            clone.thread += '_group-' + clone.groupId;
                        var request = objectStore_5.put(self_34.cleanRecord(clone));
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
            var self_35 = this;
            this.invocationQueue.push(function () {
                self_35.saveMessages(userProfile, stmts, callback);
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
            var self_36 = this;
            this.invocationQueue.push(function () {
                self_36.removeMessage(userProfile, id, callback);
            });
        }
    };
    IndexedDBStorageAdapter.prototype.getMessages = function (userProfile, thread, callback) {
        if (this.db) {
            var index = this.db.transaction(["messages"], "readonly").objectStore("messages").index(MASTER_INDEX);
            this.getAll(index, IDBKeyRange.only([userProfile.identity, thread]), callback);
        }
        else {
            var self_37 = this;
            this.invocationQueue.push(function () {
                self_37.getMessages(userProfile, thread, callback);
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
            var self_38 = this;
            this.invocationQueue.push(function () {
                self_38.saveQueuedReference(userProfile, ref, callback);
            });
        }
    };
    IndexedDBStorageAdapter.prototype.getQueuedReference = function (userProfile, currentBook, callback) {
        if (this.db) {
            var os = this.db.transaction(["queuedReferences"], "readonly").objectStore("queuedReferences");
            var index_3 = os.index(MASTER_INDEX);
            var request_9 = index_3.openCursor(IDBKeyRange.only([userProfile.identity, currentBook]));
            request_9.onerror = function (e) {
                console.log(e);
            };
            request_9.onsuccess = function () {
                if (request_9.result == null) {
                    var req = index_3.openCursor(IDBKeyRange.only([userProfile.identity, currentBook]));
                    req.onerror = function (e) {
                        console.log(e);
                    };
                    req.onsuccess = function () {
                        if (callback && request_9.result)
                            callback(request_9.result.value);
                        else
                            callback();
                    };
                }
                else if (callback && request_9.result)
                    callback(request_9.result.value);
                else
                    callback();
            };
        }
        else {
            var self_39 = this;
            this.invocationQueue.push(function () {
                self_39.getQueuedReference(userProfile, currentBook, callback);
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
            var self_40 = this;
            this.invocationQueue.push(function () {
                self_40.removeQueuedReference(userProfile, refId, callback);
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
            var self_41 = this;
            this.invocationQueue.push(function () {
                self_41.saveToc(userProfile, book, data, callback);
            });
        }
    };
    IndexedDBStorageAdapter.prototype.getToc = function (userProfile, book, callback) {
        //TODO Remove me
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
            var self_42 = this;
            this.invocationQueue.push(function () {
                self_42.getToc(userProfile, book, callback);
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
            var self_43 = this;
            this.invocationQueue.push(function () {
                self_43.removeToc(userProfile, book, section, id, callback);
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
            var self_44 = this;
            this.invocationQueue.push(function () {
                self_44.saveNotification(userProfile, notification, callback);
            });
        }
    };
    IndexedDBStorageAdapter.prototype.getNotifications = function (userProfile, callback) {
        if (this.db) {
            var os = this.db.transaction(["notifications"], "readonly").objectStore("notifications");
            var index_4 = os.index(MASTER_INDEX);
            var param_3 = userProfile.identity;
            var self_45 = this;
            this.getAll(index_4, IDBKeyRange.only(param_3), function (arr) {
                if (arr.length == 0)
                    self_45.getAll(index_4, IDBKeyRange.only([param_3]), callback);
                else
                    callback(arr);
            });
        }
        else {
            var self_46 = this;
            this.invocationQueue.push(function () {
                self_46.getNotifications(userProfile, callback);
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
            var self_47 = this;
            this.invocationQueue.push(function () {
                self_47.removeNotification(userProfile, notificationId, callback);
            });
        }
    };
    // -------------------------------
    IndexedDBStorageAdapter.prototype.saveGroupMembership = function (userProfile, stmts, callback) {
        if (this.db) {
            if (stmts instanceof Membership) {
                var ga = stmts;
                ga.identity = userProfile.identity;
                var request = this.db.transaction(["groups"], "readwrite").objectStore("groups").put(ga);
                request.onerror = function (e) {
                    console.log(e);
                };
                request.onsuccess = function () {
                    if (callback)
                        callback();
                };
            }
            else {
                var objectStore_6 = this.db.transaction(["groups"], "readwrite").objectStore("groups");
                var stmtsCopy_5 = stmts.slice(0);
                var self_48 = this;
                var processCallback_7 = function () {
                    var record = stmtsCopy_5.pop();
                    if (record) {
                        var clone = record;
                        clone.identity = userProfile.identity;
                        var request = objectStore_6.put(self_48.cleanRecord(clone));
                        request.onerror = processCallback_7;
                        request.onsuccess = processCallback_7;
                    }
                    else {
                        if (callback)
                            callback();
                    }
                };
                processCallback_7();
            }
        }
        else {
            var self_49 = this;
            this.invocationQueue.push(function () {
                self_49.saveGroupMembership(userProfile, stmts, callback);
            });
        }
    };
    IndexedDBStorageAdapter.prototype.getGroupMembership = function (userProfile, callback) {
        if (this.db) {
            var os = this.db.transaction(["groups"], "readonly").objectStore("groups");
            var index_5 = os.index(MASTER_INDEX);
            var param_4 = userProfile.identity;
            var self_50 = this;
            this.getAll(index_5, IDBKeyRange.only(param_4), function (arr) {
                if (arr.length == 0)
                    self_50.getAll(index_5, IDBKeyRange.only([param_4]), callback);
                else
                    callback(arr);
            });
        }
        else {
            var self_51 = this;
            this.invocationQueue.push(function () {
                self_51.getGroupMembership(userProfile, callback);
            });
        }
    };
    IndexedDBStorageAdapter.prototype.removeGroupMembership = function (userProfile, xId, callback) {
        if (this.db) {
            var request = this.db.transaction(["groups"], "readwrite").objectStore("groups").delete(IDBKeyRange.only([userProfile.identity, xId]));
            request.onerror = function (e) {
                console.log(e);
            };
            request.onsuccess = function () {
                if (callback)
                    callback();
            };
        }
        else {
            var self_52 = this;
            this.invocationQueue.push(function () {
                self_52.removeGroupMembership(userProfile, xId, callback);
            });
        }
    };
    // -------------------------------
    IndexedDBStorageAdapter.prototype.getActivityEvent = function (programId, callback) {
        if (this.db) {
            var os = this.db.transaction(["activityEvents"], "readonly").objectStore("activityEvents");
            var index_6 = os.index(MASTER_INDEX);
            var param_5 = programId;
            var self_53 = this;
            this.getAll(index_6, IDBKeyRange.only(param_5), function (arr) {
                if (arr.length == 0)
                    self_53.getAll(index_6, IDBKeyRange.only([param_5]), callback);
                else
                    callback(arr);
            });
        }
        else {
            var self_54 = this;
            this.invocationQueue.push(function () {
                self_54.getActivityEvent(programId, callback);
            });
        }
    };
    IndexedDBStorageAdapter.prototype.saveActivityEvent = function (userProfile, stmts, callback) {
        if (this.db) {
            if (stmts instanceof ProgramAction) {
                var ga = stmts;
                ga.identity = ga.actor.account.name;
                var request = this.db.transaction(["activityEvents"], "readwrite").objectStore("activityEvents").put(ga);
                request.onerror = function (e) {
                    console.log(e);
                };
                request.onsuccess = function () {
                    if (callback)
                        callback();
                };
            }
            else {
                var objectStore_7 = this.db.transaction(["activityEvents"], "readwrite").objectStore("activityEvents");
                var stmtsCopy_6 = stmts.slice(0);
                var self_55 = this;
                var processCallback_8 = function () {
                    var record = stmtsCopy_6.pop();
                    if (record) {
                        var clone = record;
                        clone.identity = clone.actor.account.name;
                        var request = objectStore_7.put(self_55.cleanRecord(clone));
                        request.onerror = processCallback_8;
                        request.onsuccess = processCallback_8;
                    }
                    else {
                        if (callback)
                            callback();
                    }
                };
                processCallback_8();
            }
        }
        else {
            var self_56 = this;
            this.invocationQueue.push(function () {
                self_56.saveActivityEvent(userProfile, stmts, callback);
            });
        }
    };
    // -------------------------------
    IndexedDBStorageAdapter.prototype.getModuleEvent = function (idref, callback) {
        if (this.db) {
            var os = this.db.transaction(["moduleEvents"], "readonly").objectStore("moduleEvents");
            var index_7 = os.index(MASTER_INDEX);
            var param_6 = idref;
            var self_57 = this;
            this.getAll(index_7, IDBKeyRange.only(param_6), function (arr) {
                if (arr.length == 0)
                    self_57.getAll(index_7, IDBKeyRange.only([param_6]), callback);
                else
                    callback(arr);
            });
        }
        else {
            var self_58 = this;
            this.invocationQueue.push(function () {
                self_58.getModuleEvent(idref, callback);
            });
        }
    };
    IndexedDBStorageAdapter.prototype.saveModuleEvent = function (userProfile, stmts, callback) {
        if (this.db) {
            if (stmts instanceof ModuleEvent) {
                var ga = stmts;
                ga.identity = ga.actor.account.name;
                var request = this.db.transaction(["moduleEvents"], "readwrite").objectStore("moduleEvents").put(ga);
                request.onerror = function (e) {
                    console.log(e);
                };
                request.onsuccess = function () {
                    if (callback)
                        callback();
                };
            }
            else {
                var objectStore_8 = this.db.transaction(["moduleEvents"], "readwrite").objectStore("moduleEvents");
                var stmtsCopy_7 = stmts.slice(0);
                var self_59 = this;
                var processCallback_9 = function () {
                    var record = stmtsCopy_7.pop();
                    if (record) {
                        var clone = record;
                        clone.identity = clone.actor.account.name;
                        var request = objectStore_8.put(self_59.cleanRecord(clone));
                        request.onerror = processCallback_9;
                        request.onsuccess = processCallback_9;
                    }
                    else {
                        if (callback)
                            callback();
                    }
                };
                processCallback_9();
            }
        }
        else {
            var self_60 = this;
            this.invocationQueue.push(function () {
                self_60.saveModuleEvent(userProfile, stmts, callback);
            });
        }
    };
    IndexedDBStorageAdapter.prototype.removeModuleEvent = function (idref, xId, callback) {
        if (this.db) {
            var request = this.db.transaction(["moduleEvents"], "readwrite").objectStore("moduleEvents").delete(IDBKeyRange.only([xId, idref]));
            request.onerror = function (e) {
                console.log(e);
            };
            request.onsuccess = function () {
                if (callback)
                    callback();
            };
        }
        else {
            var self_61 = this;
            this.invocationQueue.push(function () {
                self_61.removeModuleEvent(idref, xId, callback);
            });
        }
    };
    // -------------------------------
    IndexedDBStorageAdapter.prototype.saveActivity = function (userProfile, stmts, callback) {
        if (this.db) {
            if ((stmts instanceof Activity) || Activity.is(stmts)) {
                var ga = (stmts instanceof Activity) ? stmts : toActivity(stmts);
                if (ga) {
                    ga.identity = userProfile.identity;
                    var request = this.db.transaction(["activity"], "readwrite").objectStore("activity").put(ga);
                    request.onerror = function (e) {
                        console.log(e);
                    };
                    request.onsuccess = function () {
                        if (callback)
                            callback();
                    };
                }
            }
            else {
                var objectStore_9 = this.db.transaction(["activity"], "readwrite").objectStore("activity");
                var stmtsCopy_8 = stmts.slice(0);
                var self_62 = this;
                var processCallback_10 = function () {
                    var record = stmtsCopy_8.pop();
                    if (record) {
                        var clone = record;
                        clone.identity = userProfile.identity;
                        var request = objectStore_9.put(self_62.cleanRecord(clone));
                        request.onerror = processCallback_10;
                        request.onsuccess = processCallback_10;
                    }
                    else {
                        if (callback)
                            callback();
                    }
                };
                processCallback_10();
            }
        }
        else {
            var self_63 = this;
            this.invocationQueue.push(function () {
                self_63.saveActivity(userProfile, stmts, callback);
            });
        }
    };
    IndexedDBStorageAdapter.prototype.getActivity = function (userProfile, activityType, callback) {
        if (this.db) {
            var os = this.db.transaction(["activity"], "readonly").objectStore("activity");
            var index = os.index(MASTER_INDEX);
            var param = [userProfile.identity, activityType];
            var self_64 = this;
            self_64.getAll(index, IDBKeyRange.only(param), callback);
        }
        else {
            var self_65 = this;
            this.invocationQueue.push(function () {
                self_65.getActivity(userProfile, activityType, callback);
            });
        }
    };
    IndexedDBStorageAdapter.prototype.getActivityById = function (userProfile, activityType, activityId, callback) {
        if (this.db) {
            var param = [userProfile.identity, activityType, activityId];
            var request_10 = this.db.transaction(["activity"], "readonly").objectStore("activity").get(param);
            request_10.onerror = function (e) {
                console.log(e);
            };
            request_10.onsuccess = function () {
                var r = request_10.result;
                if (r != null)
                    callback(r);
                else
                    callback();
            };
        }
        else {
            var self_66 = this;
            this.invocationQueue.push(function () {
                self_66.getActivityById(userProfile, activityType, activityId, callback);
            });
        }
    };
    IndexedDBStorageAdapter.prototype.removeActivity = function (userProfile, xId, activityType, callback) {
        if (this.db) {
            var request = this.db.transaction(["activity"], "readwrite").objectStore("activity").delete(IDBKeyRange.only([userProfile.identity, activityType, xId]));
            request.onerror = function (e) {
                console.log(e);
            };
            request.onsuccess = function () {
                if (callback)
                    callback();
            };
        }
        else {
            var self_67 = this;
            this.invocationQueue.push(function () {
                self_67.removeActivity(userProfile, xId, activityType, callback);
            });
        }
    };
    // -------------------------------
    IndexedDBStorageAdapter.prototype.saveOutgoingActivity = function (userProfile, stmt, callback) {
        if (this.db) {
            var clone = stmt;
            clone.identity = userProfile.identity;
            var request = this.db.transaction(["outgoingActivity"], "readwrite").objectStore("outgoingActivity").put(clone);
            request.onerror = function (e) {
                console.log(e);
            };
            request.onsuccess = function () {
                if (callback)
                    callback();
            };
        }
        else {
            var self_68 = this;
            this.invocationQueue.push(function () {
                self_68.saveOutgoingActivity(userProfile, stmt, callback);
            });
        }
    };
    IndexedDBStorageAdapter.prototype.getOutgoingActivity = function (userProfile, callback) {
        if (this.db) {
            var os = this.db.transaction(["outgoingActivity"], "readonly").objectStore("outgoingActivity");
            var index_8 = os.index(MASTER_INDEX);
            var param_7 = userProfile.identity;
            var self_69 = this;
            this.getAll(index_8, IDBKeyRange.only(param_7), function (arr) {
                if (arr.length == 0)
                    self_69.getAll(index_8, IDBKeyRange.only([param_7]), callback);
                else
                    callback(arr);
            });
        }
        else {
            var self_70 = this;
            this.invocationQueue.push(function () {
                self_70.getOutgoingActivity(userProfile, callback);
            });
        }
    };
    IndexedDBStorageAdapter.prototype.removeOutgoingActivity = function (userProfile, toClear, callback) {
        if (this.db) {
            var objectStore = this.db.transaction(["outgoingActivity"], "readwrite").objectStore("outgoingActivity");
            var request = objectStore.delete(IDBKeyRange.only([userProfile.identity, toClear.id]));
            if (callback) {
                request.onerror = callback;
                request.onsuccess = callback;
            }
        }
        else {
            var self_71 = this;
            this.invocationQueue.push(function () {
                self_71.removeOutgoingActivity(userProfile, toClear, callback);
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
    return User;
}());


// CONCATENATED MODULE: ./src/constants.ts
var SYNC_ANNOTATIONS = "annotations";
var SYNC_SHARED_ANNOTATIONS = "sharedAnnotations";
var SYNC_THREAD = "threads";
var SYNC_PRIVATE_THREAD = "privateThreads";
var SYNC_GROUP_THREAD = "groupThreads";
var SYNC_REFERENCES = "references";
var SYNC_NOTIFICATIONS = "notifications";

// CONCATENATED MODULE: ./src/syncing.ts
var USER_PREFIX = "_user-";
var GROUP_PREFIX = "_group-";


var syncing_LLSyncAction = /** @class */ (function () {
    function LLSyncAction(pebl) {
        var _this = this;
        this.DEFAULT_RECONNECTION_BACKOFF = 1000;
        var self = this;
        this.pebl = pebl;
        this.reconnectionBackoff = this.DEFAULT_RECONNECTION_BACKOFF;
        this.active = false;
        console.log(this.pebl.config && this.pebl.config.PeBLServicesWSURL);
        this.messageHandlers = {};
        this.messageHandlers.getReferences = function (userProfile, payload) {
            _this.pebl.storage.getSyncTimestamps(userProfile.identity, SYNC_REFERENCES, function (timestamp) {
                for (var _i = 0, _a = payload.data; _i < _a.length; _i++) {
                    var stmt = _a[_i];
                    if (Voided.is(stmt)) {
                        //TODO
                        console.log('TODO');
                    }
                    else {
                        var ref = new Reference(stmt);
                        self.pebl.storage.saveQueuedReference(userProfile, ref);
                        var stored = new Date(ref.stored).getTime();
                        if (stored > timestamp)
                            timestamp = stored;
                    }
                }
                _this.pebl.storage.saveSyncTimestamps(userProfile.identity, SYNC_REFERENCES, timestamp, function () { });
            });
        };
        this.messageHandlers.newReference = function (userProfile, payload) {
            _this.pebl.storage.getSyncTimestamps(userProfile.identity, SYNC_REFERENCES, function (timestamp) {
                if (Voided.is(payload.data)) {
                    //TODO
                    console.log('TODO');
                }
                else {
                    var ref = new Reference(payload.data);
                    self.pebl.storage.saveQueuedReference(userProfile, ref);
                    var stored = new Date(ref.stored).getTime();
                    if (stored > timestamp)
                        timestamp = stored;
                    _this.pebl.storage.saveSyncTimestamps(userProfile.identity, SYNC_REFERENCES, timestamp, function () { });
                }
            });
        };
        this.messageHandlers.getNotifications = function (userProfile, payload) {
            _this.pebl.storage.getSyncTimestamps(userProfile.identity, SYNC_NOTIFICATIONS, function (timestamp) {
                var stmts = payload.data.map(function (stmt) {
                    if (Voided.is(stmt)) {
                        var voided = new Voided(stmt);
                        self.pebl.storage.removeNotification(userProfile, voided.target);
                        var stored = new Date(voided.stored).getTime();
                        if (stored > timestamp)
                            timestamp = stored;
                        return voided;
                    }
                    else {
                        var n = void 0;
                        if (Reference.is(stmt))
                            n = new Reference(stmt);
                        else if (Message.is(stmt))
                            n = new Message(stmt);
                        else if (SharedAnnotation.is(stmt))
                            n = new SharedAnnotation(stmt);
                        else
                            n = new Notification(stmt);
                        self.pebl.storage.saveNotification(userProfile, n);
                        var stored = new Date(n.stored).getTime();
                        if (stored > timestamp)
                            timestamp = stored;
                        return n;
                    }
                });
                _this.pebl.storage.saveSyncTimestamps(userProfile.identity, SYNC_NOTIFICATIONS, timestamp, function () {
                    _this.pebl.emitEvent(self.pebl.events.incomingNotifications, stmts);
                });
            });
        };
        this.messageHandlers.getThreadedMessages = function (userProfile, payload) {
            var threads;
            if (payload.data instanceof Array) {
                threads = payload.data;
            }
            else {
                threads = [payload.data];
            }
            _this.pebl.utils.getThreadTimestamps(userProfile.identity, function (threadSyncTimestamps, privateThreadSyncTimestamps, groupThreadSyncTimestamps) {
                threads.forEach(function (payload) {
                    var groupId = payload.options && payload.options.groupId;
                    var isPrivate = payload.options && payload.options.isPrivate;
                    var thread = payload.thread;
                    for (var _i = 0, _a = payload.data; _i < _a.length; _i++) {
                        var stmt = _a[_i];
                        if (groupId) {
                            self.handleGroupMessage(userProfile, stmt, thread, groupId, groupThreadSyncTimestamps);
                        }
                        else if (isPrivate) {
                            self.handlePrivateMessage(userProfile, stmt, thread, privateThreadSyncTimestamps);
                        }
                        else {
                            self.handleMessage(userProfile, stmt, thread, threadSyncTimestamps);
                        }
                    }
                });
                _this.pebl.utils.saveThreadTimestamps(userProfile.identity, threadSyncTimestamps, privateThreadSyncTimestamps, groupThreadSyncTimestamps, function () { });
            });
        };
        this.messageHandlers.newThreadedMessage = function (userProfile, payload) {
            var groupId = payload.options && payload.options.groupId;
            var isPrivate = payload.options && payload.options.isPrivate;
            var thread = payload.thread;
            _this.pebl.utils.getThreadTimestamps(userProfile.identity, function (threadSyncTimestamps, privateThreadSyncTimestamps, groupThreadSyncTimestamps) {
                if (groupId) {
                    _this.handleGroupMessage(userProfile, payload.data, thread, groupId, groupThreadSyncTimestamps);
                }
                else if (isPrivate) {
                    _this.handlePrivateMessage(userProfile, payload.data, thread, privateThreadSyncTimestamps);
                }
                else {
                    _this.handleMessage(userProfile, payload.data, thread, threadSyncTimestamps);
                }
                _this.pebl.utils.saveThreadTimestamps(userProfile.identity, threadSyncTimestamps, privateThreadSyncTimestamps, groupThreadSyncTimestamps, function () { });
            });
        };
        this.messageHandlers.getSubscribedThreads = function (userProfile, payload) {
            if (self.websocket && self.websocket.readyState === 1) {
                _this.pebl.utils.getThreadTimestamps(userProfile.identity, function (threadSyncTimestamps, privateThreadSyncTimestamps, groupThreadSyncTimestamps) {
                    var messageSet = [];
                    for (var _i = 0, _a = payload.data.threads; _i < _a.length; _i++) {
                        var thread = _a[_i];
                        var message = {
                            thread: thread,
                            timestamp: threadSyncTimestamps[thread] ? threadSyncTimestamps[thread] : 1
                        };
                        messageSet.push(message);
                    }
                    for (var _b = 0, _c = payload.data.privateThreads; _b < _c.length; _b++) {
                        var thread = _c[_b];
                        var message = {
                            thread: thread,
                            options: { isPrivate: true },
                            timestamp: privateThreadSyncTimestamps[thread] ? privateThreadSyncTimestamps[thread] : 1
                        };
                        messageSet.push(message);
                    }
                    for (var groupId in payload.data.groupThreads) {
                        for (var _d = 0, _e = payload.data.groupThreads[groupId]; _d < _e.length; _d++) {
                            var thread = _e[_d];
                            var groupTime = void 0;
                            if (groupThreadSyncTimestamps[groupId]) {
                                groupTime = groupThreadSyncTimestamps[groupId][thread];
                            }
                            else {
                                groupTime = 1;
                            }
                            var message = {
                                thread: thread,
                                options: { groupId: groupId },
                                timestamp: groupTime
                            };
                            messageSet.push(message);
                        }
                    }
                    if (_this.websocket) {
                        _this.websocket.send(JSON.stringify({
                            requestType: "getThreadedMessages",
                            identity: userProfile.identity,
                            requests: messageSet
                        }));
                    }
                });
            }
        };
        this.messageHandlers.getAnnotations = function (userProfile, payload) {
            console.log(payload);
            _this.pebl.storage.getSyncTimestamps(userProfile.identity, SYNC_ANNOTATIONS, function (timestamp) {
                var stmts = payload.data.map(function (stmt) {
                    if (Voided.is(stmt)) {
                        var voided = new Voided(stmt);
                        _this.pebl.storage.removeAnnotation(userProfile, voided.target);
                        var stored = new Date(voided.stored).getTime();
                        if (stored > timestamp)
                            timestamp = stored;
                        return voided;
                    }
                    else {
                        var a = new Annotation(stmt);
                        _this.pebl.storage.saveAnnotations(userProfile, [a]);
                        var stored = new Date(a.stored).getTime();
                        if (stored > timestamp)
                            timestamp = stored;
                        return a;
                    }
                });
                _this.pebl.storage.saveSyncTimestamps(userProfile.identity, SYNC_ANNOTATIONS, timestamp, function () {
                    _this.pebl.emitEvent(_this.pebl.events.incomingAnnotations, stmts);
                });
            });
        };
        this.messageHandlers.getSharedAnnotations = function (userProfile, payload) {
            _this.pebl.storage.getSyncTimestamps(userProfile.identity, SYNC_SHARED_ANNOTATIONS, function (timestamp) {
                var stmts = payload.data.map(function (stmt) {
                    if (Voided.is(stmt)) {
                        var voided = new Voided(stmt);
                        self.pebl.storage.removeSharedAnnotation(userProfile, voided.target);
                        var stored = new Date(voided.stored).getTime();
                        if (stored > timestamp)
                            timestamp = stored;
                        return voided;
                    }
                    else {
                        var sa = new SharedAnnotation(stmt);
                        self.pebl.storage.saveSharedAnnotations(userProfile, [sa]);
                        var stored = new Date(sa.stored).getTime();
                        if (stored > timestamp)
                            timestamp = stored;
                        return sa;
                    }
                });
                _this.pebl.storage.saveSyncTimestamps(userProfile.identity, SYNC_SHARED_ANNOTATIONS, timestamp, function () {
                    self.pebl.emitEvent(self.pebl.events.incomingSharedAnnotations, stmts);
                });
            });
        };
        this.messageHandlers.newAnnotation = function (userProfile, payload) {
            var allAnnotations;
            if (payload.data instanceof Array) {
                allAnnotations = payload.data;
            }
            else {
                allAnnotations = [payload.data];
            }
            _this.pebl.storage.getSyncTimestamps(userProfile.identity, SYNC_ANNOTATIONS, function (timestamp) {
                var stmts = allAnnotations.map(function (a) {
                    if (Voided.is(a)) {
                        a = new Voided(a);
                        self.pebl.storage.removeAnnotation(userProfile, a.target);
                    }
                    else {
                        a = new Annotation(a);
                        self.pebl.storage.saveAnnotations(userProfile, [a]);
                    }
                    var stored = new Date(a.stored).getTime();
                    if (stored > timestamp)
                        timestamp = stored;
                    return a;
                });
                _this.pebl.storage.saveSyncTimestamps(userProfile.identity, SYNC_ANNOTATIONS, timestamp, function () {
                    self.pebl.emitEvent(self.pebl.events.incomingAnnotations, stmts);
                });
            });
        };
        this.messageHandlers.newSharedAnnotation = function (userProfile, payload) {
            var allSharedAnnotations;
            if (payload.data instanceof Array) {
                allSharedAnnotations = payload.data;
            }
            else {
                allSharedAnnotations = [payload.data];
            }
            _this.pebl.storage.getSyncTimestamps(userProfile.identity, SYNC_SHARED_ANNOTATIONS, function (timestamp) {
                var stmts = allSharedAnnotations.map(function (sa) {
                    if (Voided.is(sa)) {
                        sa = new Voided(sa);
                        self.pebl.storage.removeSharedAnnotation(userProfile, sa.target);
                    }
                    else {
                        sa = new SharedAnnotation(sa);
                        self.pebl.storage.saveSharedAnnotations(userProfile, [sa]);
                    }
                    var stored = new Date(sa.stored).getTime();
                    if (stored > timestamp)
                        timestamp = stored;
                    return sa;
                });
                _this.pebl.storage.saveSyncTimestamps(userProfile.identity, SYNC_SHARED_ANNOTATIONS, timestamp, function () {
                    self.pebl.emitEvent(self.pebl.events.incomingSharedAnnotations, stmts);
                });
            });
        };
        this.messageHandlers.loggedOut = function (userProfile, payload) {
            self.pebl.storage.removeCurrentUser(function () {
                self.pebl.emitEvent(self.pebl.events.eventRefreshLogin, null);
            });
        };
        this.messageHandlers.error = function (userProfile, payload) {
            console.log("Message failed", payload);
        };
    }
    LLSyncAction.prototype.activate = function (callback) {
        var _this = this;
        if (!this.active) {
            this.active = true;
            this.reconnectionBackoff = this.DEFAULT_RECONNECTION_BACKOFF;
            var makeWebSocketConnection_1 = function () {
                if (_this.pebl.config && _this.pebl.config.PeBLServicesWSURL) {
                    if (_this.websocket) {
                        _this.websocket.close();
                        _this.websocket = undefined;
                    }
                    _this.websocket = new WebSocket(_this.pebl.config.PeBLServicesWSURL);
                    _this.websocket.onopen = function () {
                        console.log('websocket opened');
                        _this.pullNotifications();
                        _this.pullAnnotations();
                        _this.pullSharedAnnotations();
                        _this.pullReferences();
                        _this.pullSubscribedThreads();
                        _this.reconnectionBackoffResetHandler = setTimeout(function () {
                            _this.reconnectionBackoff = _this.DEFAULT_RECONNECTION_BACKOFF;
                        }, _this.DEFAULT_RECONNECTION_BACKOFF);
                    };
                    _this.websocket.onclose = function () {
                        console.log("Web socket closed retrying in " + _this.reconnectionBackoff, event);
                        if (_this.active) {
                            if (_this.reconnectionBackoffResetHandler) {
                                clearTimeout(_this.reconnectionBackoffResetHandler);
                                _this.reconnectionBackoffResetHandler = undefined;
                            }
                            if (_this.reconnectionTimeoutHandler) {
                                clearTimeout(_this.reconnectionTimeoutHandler);
                            }
                            _this.reconnectionTimeoutHandler = setTimeout(function () {
                                makeWebSocketConnection_1();
                                _this.reconnectionBackoff *= 2;
                                if (_this.reconnectionBackoff > 60000) {
                                    _this.reconnectionBackoff = 60000;
                                }
                            }, _this.reconnectionBackoff);
                        }
                    };
                    _this.websocket.onerror = function (event) {
                        console.log("Web socket error retrying in " + _this.reconnectionBackoff, event);
                        if (_this.active) {
                            if (_this.reconnectionBackoffResetHandler) {
                                clearTimeout(_this.reconnectionBackoffResetHandler);
                                _this.reconnectionBackoffResetHandler = undefined;
                            }
                            if (_this.reconnectionTimeoutHandler) {
                                clearTimeout(_this.reconnectionTimeoutHandler);
                            }
                            _this.reconnectionTimeoutHandler = setTimeout(function () {
                                makeWebSocketConnection_1();
                                _this.reconnectionBackoff *= 2;
                                if (_this.reconnectionBackoff > 60000) {
                                    _this.reconnectionBackoff = 60000;
                                }
                            }, _this.reconnectionBackoff);
                        }
                    };
                    _this.websocket.onmessage = function (message) {
                        _this.pebl.user.getUser(function (userProfile) {
                            if (userProfile) {
                                console.log('message recieved');
                                var parsedMessage = JSON.parse(message.data);
                                if (_this.messageHandlers[parsedMessage.requestType]) {
                                    _this.messageHandlers[parsedMessage.requestType](userProfile, parsedMessage);
                                }
                                else {
                                    console.log("Unknown request type", parsedMessage.requestType, parsedMessage);
                                }
                            }
                        });
                    };
                }
            };
            makeWebSocketConnection_1();
        }
        if (callback) {
            callback();
        }
    };
    LLSyncAction.prototype.disable = function (callback) {
        var _this = this;
        if (this.active) {
            this.active = false;
            if (this.reconnectionTimeoutHandler) {
                clearTimeout(this.reconnectionTimeoutHandler);
                this.reconnectionTimeoutHandler = undefined;
            }
            if (this.websocket) {
                var processDisable_1 = function () {
                    if (_this.websocket) {
                        if (_this.websocket.bufferedAmount > 0) {
                            setTimeout(processDisable_1, 50);
                        }
                        else {
                            _this.websocket.close();
                            if (callback) {
                                callback();
                            }
                        }
                    }
                };
                processDisable_1();
            }
        }
        else {
            if (callback) {
                callback();
            }
        }
    };
    LLSyncAction.prototype.push = function (outgoing, callback) {
        var _this = this;
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile && _this.websocket && _this.websocket.readyState === 1) {
                _this.websocket.send(JSON.stringify({
                    requestType: "bulkPush",
                    identity: userProfile.identity,
                    data: outgoing
                }));
                callback(true);
            }
            else {
                callback(false);
            }
        });
    };
    LLSyncAction.prototype.pushActivity = function (outgoing, callback) {
        var _this = this;
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile && _this.websocket && _this.websocket.readyState === 1) {
                for (var _i = 0, outgoing_1 = outgoing; _i < outgoing_1.length; _i++) {
                    var message = outgoing_1[_i];
                    console.log(message);
                    _this.websocket.send(JSON.stringify(message));
                }
                callback(true);
            }
            else {
                callback(false);
            }
        });
    };
    LLSyncAction.prototype.pullNotifications = function () {
        var _this = this;
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile && _this.websocket && _this.websocket.readyState === 1) {
                _this.pebl.storage.getSyncTimestamps(userProfile.identity, SYNC_NOTIFICATIONS, function (timestamp) {
                    var message = {
                        identity: userProfile.identity,
                        requestType: "getNotifications",
                        timestamp: timestamp + 1
                    };
                    if (_this.websocket) {
                        _this.websocket.send(JSON.stringify(message));
                    }
                });
            }
        });
    };
    LLSyncAction.prototype.pullAnnotations = function () {
        var _this = this;
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile && _this.websocket && _this.websocket.readyState === 1) {
                _this.pebl.storage.getSyncTimestamps(userProfile.identity, SYNC_ANNOTATIONS, function (timestamp) {
                    var message = {
                        identity: userProfile.identity,
                        requestType: "getAnnotations",
                        timestamp: timestamp + 1
                    };
                    if (_this.websocket) {
                        _this.websocket.send(JSON.stringify(message));
                    }
                });
            }
        });
    };
    LLSyncAction.prototype.pullSharedAnnotations = function () {
        var _this = this;
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile && _this.websocket && _this.websocket.readyState === 1) {
                _this.pebl.storage.getSyncTimestamps(userProfile.identity, SYNC_SHARED_ANNOTATIONS, function (timestamp) {
                    var message = {
                        identity: userProfile.identity,
                        requestType: "getSharedAnnotations",
                        timestamp: timestamp + 1
                    };
                    if (_this.websocket) {
                        _this.websocket.send(JSON.stringify(message));
                    }
                });
            }
        });
    };
    LLSyncAction.prototype.pullReferences = function () {
        var _this = this;
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile && _this.websocket && _this.websocket.readyState === 1) {
                _this.pebl.storage.getSyncTimestamps(userProfile.identity, SYNC_REFERENCES, function (timestamp) {
                    var message = {
                        identity: userProfile.identity,
                        requestType: "getReferences",
                        timestamp: timestamp + 1
                    };
                    if (_this.websocket) {
                        _this.websocket.send(JSON.stringify(message));
                    }
                });
            }
        });
    };
    LLSyncAction.prototype.pullSubscribedThreads = function () {
        var _this = this;
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile && _this.websocket && _this.websocket.readyState === 1) {
                var message = {
                    identity: userProfile.identity,
                    requestType: "getSubscribedThreads"
                };
                _this.websocket.send(JSON.stringify(message));
            }
        });
    };
    LLSyncAction.prototype.handlePrivateMessage = function (userProfile, message, thread, privateThreadSyncTimestamps) {
        var m;
        if (Voided.is(message)) {
            m = new Voided(message);
            this.pebl.storage.removeMessage(userProfile, m.target);
        }
        else {
            m = new Message(message);
            this.pebl.storage.saveMessages(userProfile, [m]);
        }
        var stored = new Date(m.stored).getTime();
        if (!privateThreadSyncTimestamps[thread])
            privateThreadSyncTimestamps[thread] = 1;
        if (stored > privateThreadSyncTimestamps[thread])
            privateThreadSyncTimestamps[thread] = stored;
        this.pebl.emitEvent(thread + USER_PREFIX + userProfile.identity, [m]);
    };
    LLSyncAction.prototype.handleGroupMessage = function (userProfile, message, thread, groupId, groupThreadSyncTimestamps) {
        var m;
        if (Voided.is(message)) {
            m = new Voided(message);
            this.pebl.storage.removeMessage(userProfile, m.target);
        }
        else {
            m = new Message(message);
            this.pebl.storage.saveMessages(userProfile, [m]);
        }
        var stored = new Date(m.stored).getTime();
        if (!groupThreadSyncTimestamps[groupId])
            groupThreadSyncTimestamps[groupId] = {};
        if (!groupThreadSyncTimestamps[groupId][thread])
            groupThreadSyncTimestamps[groupId][thread] = 1;
        if (stored > groupThreadSyncTimestamps[groupId][thread])
            groupThreadSyncTimestamps[groupId][thread] = stored;
        this.pebl.emitEvent(thread + GROUP_PREFIX + groupId, [m]);
    };
    LLSyncAction.prototype.handleMessage = function (userProfile, message, thread, threadSyncTimestamps) {
        var m;
        if (Voided.is(message)) {
            m = new Voided(message);
            this.pebl.storage.removeMessage(userProfile, m.target);
        }
        else {
            m = new Message(message);
            this.pebl.storage.saveMessages(userProfile, [m]);
        }
        var stored = new Date(m.stored).getTime();
        if (!threadSyncTimestamps[thread])
            threadSyncTimestamps[thread] = 1;
        if (stored > threadSyncTimestamps[thread])
            threadSyncTimestamps[thread] = stored;
        this.pebl.emitEvent(thread, [m]);
    };
    return LLSyncAction;
}());


// CONCATENATED MODULE: ./src/network.ts

// import { Activity } from "./activity";
var network_Network = /** @class */ (function () {
    function Network(pebl) {
        this.pushTimeout = undefined;
        this.pushActivityTimeout = undefined;
        this.pullAssetTimeout = undefined;
        this.pebl = pebl;
        this.running = false;
        this.syncingProcess = new syncing_LLSyncAction(pebl);
    }
    Network.prototype.activate = function (callback) {
        var _this = this;
        if (!this.running) {
            this.running = true;
            this.syncingProcess.activate(function () {
                _this.push();
                _this.pushActivity();
                _this.pullAsset();
                if (callback)
                    callback();
            });
        }
        else {
            if (callback)
                callback();
        }
    };
    Network.prototype.queueReference = function (ref) {
        var self = this;
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile)
                self.pebl.storage.saveQueuedReference(userProfile, ref, self.pullAsset.bind(self));
        });
    };
    Network.prototype.retrievePresence = function () {
        // for (let sync of this.syncingProcess)
        //     sync.retrievePresence();
    };
    Network.prototype.pullAsset = function () {
        var _this = this;
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile && userProfile.registryEndpoint) {
                _this.pebl.storage.getCurrentBook(function (currentBook) {
                    if (currentBook) {
                        _this.pebl.storage.getQueuedReference(userProfile, currentBook, function (ref) {
                            if (ref) {
                                _this.pebl.storage.getToc(userProfile, ref.book, function (toc) {
                                    //Wait to add resources until the static TOC has been initialized, otherwise it never gets intialized
                                    if (toc.length > 0) {
                                        // this.pebl.storage.saveNotification(userProfile, ref);
                                        var tocEntry = {
                                            "url": ref.url,
                                            "documentName": ref.name,
                                            "section": ref.location,
                                            "pageKey": ref.id,
                                            "docType": ref.docType,
                                            "card": ref.card,
                                            "externalURL": ref.externalURL
                                        };
                                        _this.pebl.storage.saveToc(userProfile, ref.book, tocEntry);
                                        _this.pebl.emitEvent(_this.pebl.events.incomingNotification, ref);
                                        _this.pebl.emitEvent(_this.pebl.events.updatedToc, ref.book);
                                        _this.pebl.storage.removeQueuedReference(userProfile, ref.id);
                                        if (_this.running)
                                            _this.pullAssetTimeout = setTimeout(_this.pullAsset.bind(_this), 5000);
                                        // The below requires an API that is currently unavailable and also not needed at this time
                                        // let xhr = new XMLHttpRequest();
                                        // xhr.addEventListener("load", function() {
                                        //     this.pebl.storage.saveNotification(userProfile, ref);
                                        //     let tocEntry: { [key: string]: any } = {
                                        //         "url": ref.url,
                                        //         "documentName": ref.name,
                                        //         "section": ref.location,
                                        //         "pageKey": ref.id,
                                        //         "docType": ref.docType,
                                        //         "card": ref.card,
                                        //         "externalURL": ref.externalURL
                                        //     };
                                        //     this.pebl.storage.saveToc(userProfile, ref.book, tocEntry);
                                        //     this.pebl.emitEvent(this.pebl.events.incomingNotification, ref);
                                        //     this.pebl.storage.removeQueuedReference(userProfile, ref.id);
                                        //     if (this.running)
                                        //         this.pullAssetTimeout = setTimeout(this.pullAsset.bind(this), 5000);
                                        // });
                                        // xhr.addEventListener("error", function() {
                                        //     this.pebl.storage.saveNotification(userProfile, ref);
                                        //     this.pebl.emitEvent(this.pebl.events.incomingNotification, ref);
                                        //     this.pebl.storage.removeQueuedReference(userProfile, ref.id);
                                        //     if (this.running)
                                        //         this.pullAssetTimeout = setTimeout(this.pullAsset.bind(this), 5000);
                                        // });
                                        // let url = userProfile.registryEndpoint && userProfile.registryEndpoint.url;
                                        // if (url) {
                                        //     xhr.open("GET", url + ref.url);
                                        //     xhr.send();
                                        // } else if (this.running)
                                        //     this.pullAssetTimeout = setTimeout(this.pullAsset.bind(this), 5000);
                                    }
                                    else {
                                        _this.pullAssetTimeout = setTimeout(_this.pullAsset.bind(_this), 5000);
                                    }
                                });
                            }
                            else {
                                if (_this.running)
                                    _this.pullAssetTimeout = setTimeout(_this.pullAsset.bind(_this), 5000);
                            }
                        });
                    }
                    else if (_this.running) {
                        _this.pullAssetTimeout = setTimeout(_this.pullAsset.bind(_this), 5000);
                    }
                });
            }
            else if (_this.running)
                _this.pullAssetTimeout = setTimeout(_this.pullAsset.bind(_this), 5000);
        });
    };
    Network.prototype.disable = function (callback) {
        if (this.running) {
            this.running = false;
            if (this.pushTimeout)
                clearTimeout(this.pushTimeout);
            this.pushTimeout = undefined;
            if (this.pullAssetTimeout)
                clearTimeout(this.pullAssetTimeout);
            this.pullAssetTimeout = undefined;
            this.syncingProcess.disable(function () {
                if (callback)
                    callback();
            });
        }
        else {
            if (callback) {
                callback();
            }
        }
    };
    Network.prototype.pushActivity = function (finished) {
        var _this = this;
        if (this.pushActivityTimeout) {
            clearTimeout(this.pushActivityTimeout);
            this.pushActivityTimeout = undefined;
        }
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                _this.pebl.storage.getOutgoingActivity(userProfile, function (stmts) {
                    if (stmts.length > 0) {
                        _this.syncingProcess.pushActivity(stmts, function (success) {
                            if (success)
                                _this.pebl.storage.removeOutgoingActivity(userProfile, stmts);
                            if (_this.running)
                                _this.pushActivityTimeout = setTimeout(_this.pushActivity.bind(_this), 5000);
                            if (finished)
                                finished();
                        });
                    }
                    else {
                        if (_this.running)
                            _this.pushActivityTimeout = setTimeout(_this.pushActivity.bind(_this), 5000);
                        if (finished)
                            finished();
                    }
                });
            }
            else if (_this.running)
                _this.pushActivityTimeout = setTimeout(_this.pushActivity.bind(_this), 5000);
        });
    };
    Network.prototype.push = function (finished) {
        var _this = this;
        if (this.pushTimeout) {
            clearTimeout(this.pushTimeout);
            this.pushTimeout = undefined;
        }
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                _this.pebl.storage.getOutgoingXApi(userProfile, function (stmts) {
                    if (stmts.length > 0) {
                        _this.syncingProcess.push(stmts, function (success) {
                            if (success)
                                _this.pebl.storage.removeOutgoingXApi(userProfile, stmts);
                            if (_this.running)
                                _this.pushTimeout = setTimeout(_this.push.bind(_this), 2000);
                            if (finished)
                                finished();
                        });
                    }
                    else {
                        if (_this.running)
                            _this.pushTimeout = setTimeout(_this.push.bind(_this), 2000);
                        if (finished)
                            finished();
                    }
                });
            }
            else {
                if (_this.running)
                    _this.pushTimeout = setTimeout(_this.push.bind(_this), 2000);
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
        this.incomingPresence = "incomingPresence";
        this.incomingLearnlet = "incomingLearnlet";
        this.incomingProgram = "incomingProgram";
        this.incomingInstitution = "incomingInstitution";
        this.incomingSystem = "incomingSystem";
        this.incomingArtifact = "incomingArtifact";
        this.incomingMembership = "incomingMembership";
        this.incomingActivityEvents = "incomingActivityEvents";
        this.incomingModuleEvents = "incomingModuleEvents";
        this.incomingErrors = "incomingErrors";
        this.updatedToc = "updatedToc";
        this.saveProgram = "saveProgram";
        this.saveProgramConflict = "saveProgramConflict";
        this.saveProgramSuccess = "saveProgramSuccess";
        this.saveProgramError = "saveProgramError";
        this.saveInstitution = "saveInstitution";
        this.saveSystem = "saveSystem";
        this.newBookNoReset = "newBookNoReset";
        this.newLearnlet = "newLearnlet";
        this.newBook = "newBook";
        this.newMessage = "newMessage";
        this.newActivity = "newActivity";
        this.newAnnotation = "newAnnotation";
        this.newReference = "newReference";
        this.newPresence = "newPresence";
        this.newMembership = "newMembership";
        this.newSharedAnnotation = "newSharedAnnotation";
        this.newArtifact = "newArtifact";
        this.modifiedMembership = "modifiedMembership";
        this.removedPresence = "removedPresence";
        this.removedMembership = "removedMembership";
        this.removedAnnotation = "removedAnnotation";
        this.removedSharedAnnotation = "removedSharedAnnotation";
        this.removedLearnlet = "removedLearnlet";
        this.removedProgram = "removedProgram";
        this.removedMessage = "removedMessage";
        this.eventRefreshLogin = "eventRefreshLogin";
        this.eventLoggedIn = "eventLoggedIn";
        this.eventLoggedOut = "eventLoggedOut";
        this.eventLogin = "eventLogin";
        this.eventLogout = "eventLogout";
        this.eventFinishedLogin = "eventFinishedLogin";
        this.eventSessionStart = "eventSessionStart";
        this.eventSessionStop = "eventSessionStop";
        this.eventNextPage = "eventNextPage";
        this.eventPrevPage = "eventPrevPage";
        this.eventJumpPage = "eventJumpPage";
        this.eventInitialized = "eventInitialized";
        this.eventTerminated = "eventTerminated";
        this.eventInteracted = "eventInteracted";
        this.eventAttempted = "eventAttempted";
        this.eventPassed = "eventPassed";
        this.eventFailed = "eventFailed";
        this.eventPreferred = "eventPreferred";
        this.eventContentMorphed = "eventContentMorphed";
        this.eventExperienced = "eventExperienced";
        this.eventDisliked = "eventDisliked";
        this.eventLiked = "eventLiked";
        this.eventAccessed = "eventAccessed";
        this.eventHid = "eventHid";
        this.eventShowed = "eventShowed";
        this.eventDisplayed = "eventDisplayed";
        this.eventUndisplayed = "eventUndisplayed";
        this.eventSelected = "eventSelected";
        this.eventDiscarded = "eventDiscarded";
        this.eventBookmarked = "eventBookmarked";
        this.eventUnbookmarked = "eventUnbookmarked";
        this.eventUnsharedAnnotation = "eventUnsharedAnnotation";
        this.eventAnnotated = "eventAnnotated";
        this.eventUnannotated = "eventUnannotated";
        this.eventNoted = "eventNoted";
        this.eventSearched = "eventSearched";
        this.eventCompleted = "eventCompleted";
        this.eventLaunched = "eventLaunched";
        this.eventCompatibilityTested = "eventCompatibilityTested";
        this.eventChecklisted = "eventChecklisted";
        this.eventHelped = "eventHelped";
        this.eventInvited = "eventInvited";
        this.eventUninvited = "eventUninvited";
        this.eventSubmitted = "eventSubmitted";
        this.eventProgramLevelUp = "eventProgramLevelUp";
        this.eventProgramLevelDown = "eventProgramLevelDown";
        this.eventProgramInvited = "eventProgramInvited";
        this.eventProgramUninvited = "eventProgramUninvited";
        this.eventProgramJoined = "eventProgramJoined";
        this.eventProgramExpelled = "eventProgramExpelled";
        this.eventProgramActivityLaunched = "eventProgramActivityLaunched";
        this.eventProgramActivityCompleted = "eventProgramActivityCompleted";
        this.eventProgramActivityTeamCompleted = "eventProgramActivityTeamCompleted";
        this.eventProgramModified = "eventProgramModified";
        this.eventProgramDeleted = "eventProgramDeleted";
        this.eventProgramCompleted = "eventProgramCompleted";
        this.eventProgramCopied = "eventProgramCopied";
        this.eventProgramDiscussed = "eventProgramDiscussed";
        this.eventModuleRating = "eventModuleRating";
        this.eventModuleFeedback = "eventModuleFeedback";
        this.eventModuleExample = "eventModuleExample";
        this.eventModuleExampleRating = "eventModuleExampleRating";
        this.eventModuleExampleFeedback = "eventModuleExampleFeedback";
        this.moduleRemovedEvent = "moduleRemovedEvent";
        this.totalInstitutionActivities = "totalInstitutionActivities";
    }
    return EventSet;
}());


// CONCATENATED MODULE: ./src/utils.ts



var utils_platform = __webpack_require__(0); //https://github.com/bestiejs/platform.js
var utils_Utils = /** @class */ (function () {
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
    Utils.prototype.initializeToc = function (data) {
        var self = this;
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                self.pebl.storage.getCurrentBook(function (book) {
                    if (book) {
                        self.pebl.storage.getToc(userProfile, book, function (toc) {
                            if (toc.length == 0) {
                                for (var section in data) {
                                    var pages = data[section];
                                    for (var pageKey in pages) {
                                        var pageMetadata = pages[pageKey];
                                        if (pageKey == "DynamicContent") {
                                            var documents = pageMetadata["documents"];
                                            for (var dynamicPageKey in documents) {
                                                var documentMetadata = documents[dynamicPageKey];
                                                documentMetadata["pageKey"] = dynamicPageKey;
                                                self.pebl.storage.saveToc(userProfile, book, documentMetadata);
                                            }
                                        }
                                        else {
                                            pageMetadata["pageKey"] = pageKey;
                                            pageMetadata["section"] = section;
                                            self.pebl.storage.saveToc(userProfile, book, pageMetadata);
                                        }
                                    }
                                }
                            }
                        });
                    }
                });
            }
        });
    };
    Utils.prototype.getToc = function (callback) {
        var self = this;
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                self.pebl.storage.getCurrentBook(function (book) {
                    if (book)
                        self.pebl.storage.getToc(userProfile, book, function (entries) {
                            var toc = {};
                            for (var i = 0; i < entries.length; i++) {
                                var entry = entries[i];
                                var sectionKey = entry["section"];
                                if (toc[sectionKey] == null) {
                                    toc[sectionKey] = {};
                                }
                                var section = toc[sectionKey];
                                if (sectionKey == "DynamicContent") {
                                    if (section["documents"] == null) {
                                        section["location"] = entry["location"];
                                        section["documents"] = {};
                                    }
                                    var dynamicSection = section["documents"];
                                    dynamicSection[entry["pageKey"]] = entry;
                                }
                                else
                                    section[entry["pageKey"]] = entry;
                            }
                            callback(toc);
                        });
                    else
                        callback({});
                });
            }
            else
                callback({});
        });
    };
    Utils.prototype.removeToc = function (id, section) {
        var self = this;
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile)
                self.pebl.storage.getCurrentBook(function (book) {
                    if (book)
                        self.pebl.storage.removeToc(userProfile, book, section, id);
                });
        });
    };
    Utils.prototype.pullProgram = function (programId, callback) {
        var self = this;
        self.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                var network = self.pebl.network;
                if (network && network.syncingProcess && network.syncingProcess.length > 0) {
                    network.syncingProcess[0].pullActivity('program', programId, function (activity) {
                        if (activity) {
                            callback(activity);
                        }
                        else {
                            callback();
                        }
                    });
                }
            }
        });
    };
    Utils.prototype.mergePrograms = function (oldProgram, newProgram) {
        var mergedProgram = activity_Program.merge(oldProgram, newProgram);
        return mergedProgram;
    };
    Utils.prototype.mergeInstitutions = function (oldInstitution, newInstitution) {
        var mergedInstitution = activity_Institution.merge(oldInstitution, newInstitution);
        return mergedInstitution;
    };
    Utils.prototype.mergeSystems = function (oldSystem, newSystem) {
        var mergedSystem = activity_System.merge(oldSystem, newSystem);
        return mergedSystem;
    };
    Utils.prototype.getProgram = function (programId, callback) {
        var self = this;
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                self.pebl.storage.getActivityById(userProfile, "program", programId, function (activity) {
                    if (activity)
                        callback(activity);
                    else
                        callback();
                });
            }
        });
    };
    Utils.prototype.getInstitution = function (institutionId, callback) {
        var self = this;
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                self.pebl.storage.getActivityById(userProfile, "institution", institutionId, function (activity) {
                    if (activity)
                        callback(activity);
                    else
                        callback();
                });
            }
        });
    };
    Utils.prototype.getSystem = function (systemId, callback) {
        var self = this;
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                self.pebl.storage.getActivityById(userProfile, "system", systemId, function (activity) {
                    if (activity)
                        callback(activity);
                    else
                        callback();
                });
            }
        });
    };
    Utils.prototype.isProgramMember = function (program, userIdentity) {
        return activity_Program.isMember(program, userIdentity);
    };
    Utils.prototype.isInstitutionMember = function (institution, userIdentity) {
        return activity_Institution.isMember(institution, userIdentity);
    };
    Utils.prototype.isProgramMemberOfInstitution = function (institution, programId) {
        return activity_Institution.isProgram(institution, programId);
    };
    Utils.prototype.isSystemMember = function (system, userIdentity) {
        return activity_System.isMember(system, userIdentity);
    };
    Utils.prototype.removeProgram = function (programId, callback) {
        var self = this;
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                self.pebl.storage.removeActivity(userProfile, programId, 'program', callback);
            }
        });
    };
    Utils.prototype.removeInstitution = function (institutionId, callback) {
        var self = this;
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                self.pebl.storage.removeActivity(userProfile, institutionId, 'institution', callback);
            }
        });
    };
    Utils.prototype.newEmptyProgram = function (callback) {
        callback(new activity_Program({}));
    };
    Utils.prototype.newEmptyInstitution = function (callback) {
        callback(new activity_Institution({}));
    };
    Utils.prototype.newEmptySystem = function (callback) {
        callback(new activity_System({}));
    };
    Utils.prototype.getGroupMemberships = function (callback) {
        var self = this;
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                self.pebl.storage.getGroupMembership(userProfile, callback);
            }
            else
                callback([]);
        });
    };
    Utils.prototype.getSpecificGroupMembership = function (groupId, callback) {
        var self = this;
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                self.pebl.storage.getGroupMembership(userProfile, function (memberships) {
                    var result = null;
                    for (var _i = 0, memberships_1 = memberships; _i < memberships_1.length; _i++) {
                        var membership = memberships_1[_i];
                        if (membership.membershipId === groupId)
                            result = membership;
                    }
                    callback(result);
                });
            }
            else
                callback(null);
        });
    };
    Utils.prototype.removeGroupMembership = function (groupId, callback) {
        var self = this;
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                self.pebl.storage.removeGroupMembership(userProfile, groupId, callback);
            }
        });
    };
    Utils.prototype.getPrograms = function (callback) {
        var self = this;
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                self.pebl.storage.getActivity(userProfile, "program", function (activities) {
                    callback(activities);
                });
            }
            else
                callback([]);
        });
    };
    Utils.prototype.getInstitutions = function (callback) {
        var self = this;
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                self.pebl.storage.getActivity(userProfile, "institution", function (activities) {
                    callback(activities);
                });
            }
            else
                callback([]);
        });
    };
    Utils.prototype.getSystems = function (callback) {
        var self = this;
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                self.pebl.storage.getActivity(userProfile, "system", function (activities) {
                    callback(activities);
                });
            }
            else
                callback([]);
        });
    };
    Utils.prototype.getUuid = function () {
        /*!
          Excerpt from: Math.uuid.js (v1.4)
          http://www.broofa.com
          mailto:robert@broofa.com
          Copyright (c) 2010 Robert Kieffer
          Dual licensed under the MIT and GPL licenses.
        */
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
        return uuid;
    };
    Utils.prototype.getInviteToken = function (token, callback) {
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                var xhr_1 = new XMLHttpRequest();
                //TODO: multiple endpoints?
                var endpoint = userProfile.endpoints[0];
                var pipeline = [{
                        "$match": {
                            "$and": [{
                                    "statement.verb.id": {
                                        "$in": [
                                            "http://www.peblproject.com/definitions.html#invited"
                                        ]
                                    }
                                },
                                {
                                    "statement.object.definition.name.en-US": {
                                        "$in": [
                                            token
                                        ]
                                    }
                                }]
                        }
                    }];
                xhr_1.addEventListener("load", function () {
                    var result = JSON.parse(xhr_1.responseText);
                    for (var i = 0; i < result.length; i++) {
                        var rec = result[i];
                        if (!rec.voided)
                            result[i] = rec.statement;
                        else
                            result.splice(i, 1);
                    }
                    if (callback != null) {
                        callback(result);
                    }
                });
                xhr_1.addEventListener("error", function () {
                    callback([]);
                });
                xhr_1.open("GET", endpoint.url + "api/statements/aggregate?pipeline=" + encodeURIComponent(JSON.stringify(pipeline)), true);
                xhr_1.setRequestHeader("Authorization", "Basic " + endpoint.token);
                xhr_1.setRequestHeader("Content-Type", "application/json");
                xhr_1.send();
            }
        });
    };
    Utils.prototype.getProgramActivityEvents = function (programId, callback) {
        var self = this;
        this.pebl.storage.getActivityEvent(programId, function (events) {
            callback(events.sort(self.sortByTimestamp));
        });
    };
    Utils.prototype.sortByTimestamp = function (a, b) {
        return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
    };
    Utils.prototype.iterateProgramMembers = function (program, callback) {
        activity_Program.iterateMembers(program, callback);
    };
    Utils.prototype.getProgramMembers = function (program) {
        return activity_Program.getMembers(program);
    };
    Utils.prototype.iterateInstitutionMembers = function (institution, callback) {
        activity_Institution.iterateMembers(institution, callback);
    };
    Utils.prototype.iterateInstitutionPrograms = function (institution, callback) {
        activity_Institution.iteratePrograms(institution, callback);
    };
    Utils.prototype.iterateSystemMembers = function (system, callback) {
        activity_System.iterateMembers(system, callback);
    };
    Utils.prototype.newTempMember = function (obj, callback) {
        var tm = new TempMembership(obj);
        callback(tm);
    };
    Utils.prototype.getNotifications = function (callback) {
        var self = this;
        self.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                self.pebl.storage.getNotifications(userProfile, function (notifications) {
                    callback(notifications);
                });
            }
            else {
                callback([]);
            }
        });
    };
    Utils.prototype.removeNotification = function (notificationId) {
        var self = this;
        self.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                self.pebl.storage.removeNotification(userProfile, notificationId);
                self.pebl.storage.saveOutgoingXApi(userProfile, {
                    id: self.pebl.utils.getUuid(),
                    identity: userProfile.identity,
                    requestType: "deleteNotification",
                    xId: notificationId
                });
            }
        });
    };
    Utils.prototype.getMessages = function (thread, callback) {
        var self = this;
        self.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                self.pebl.storage.getMessages(userProfile, thread, function (messages) {
                    callback(messages);
                });
            }
            else {
                callback([]);
            }
        });
    };
    Utils.prototype.getModuleEvents = function (idref, callback, type) {
        var self = this;
        self.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                self.pebl.storage.getModuleEvent(idref, function (moduleEvents) {
                    if (type) {
                        callback(moduleEvents.filter(function (event) { return event.verb.display['en-US'] === type; }));
                    }
                    else {
                        callback(moduleEvents);
                    }
                });
            }
            else {
                callback([]);
            }
        });
    };
    Utils.prototype.removeModuleEvent = function (idref, id) {
        var self = this;
        self.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                self.pebl.storage.removeModuleEvent(idref, id);
            }
        });
    };
    Utils.prototype.getEvents = function (callback) {
        var self = this;
        self.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                self.pebl.storage.getCurrentBook(function (book) {
                    if (book) {
                        self.pebl.storage.getEvents(userProfile, book, callback);
                    }
                    else {
                        callback([]);
                    }
                });
            }
            else {
                callback([]);
            }
        });
    };
    Utils.prototype.getThreadTimestamps = function (identity, callback) {
        var _this = this;
        this.pebl.storage.getCompoundSyncTimestamps(identity, SYNC_THREAD, function (threadSyncTimestamps) {
            _this.pebl.storage.getCompoundSyncTimestamps(identity, SYNC_PRIVATE_THREAD, function (privateThreadSyncTimestamps) {
                _this.pebl.storage.getCompoundSyncTimestamps(identity, SYNC_GROUP_THREAD, function (groupThreadSyncTimestamps) {
                    callback(threadSyncTimestamps, privateThreadSyncTimestamps, groupThreadSyncTimestamps);
                });
            });
        });
    };
    Utils.prototype.saveThreadTimestamps = function (identity, threads, privateThreads, groupThreads, callback) {
        var _this = this;
        this.pebl.storage.saveCompoundSyncTimestamps(identity, SYNC_THREAD, threads, function () {
            _this.pebl.storage.saveCompoundSyncTimestamps(identity, SYNC_PRIVATE_THREAD, privateThreads, function () {
                _this.pebl.storage.saveCompoundSyncTimestamps(identity, SYNC_GROUP_THREAD, groupThreads, function () {
                    callback();
                });
            });
        });
    };
    return Utils;
}());

function getBrowserMetadata() {
    return utils_platform;
}

// CONCATENATED MODULE: ./src/xapiGenerator.ts
var xapiGenerator_PREFIX_PEBL_EXTENSION = "https://www.peblproject.com/definitions.html#";
var PEBL_ACTIVITY_PREFIX = "http://www.peblproject.com/activities/";

var xapiGenerator_XApiGenerator = /** @class */ (function () {
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
            if (!stmt.result.extensions)
                stmt.result.extensions = {};
            for (var _i = 0, _a = Object.keys(extensions); _i < _a.length; _i++) {
                var key = _a[_i];
                stmt.result.extensions[key] = extensions[key];
            }
        }
        return stmt;
    };
    XApiGenerator.prototype.addResultResponse = function (stmt, response, complete, duration, extensions) {
        if (!stmt.result)
            stmt.result = {};
        stmt.result.response = response;
        stmt.result.completion = complete;
        if (duration)
            stmt.result.duration = duration;
        if (extensions) {
            if (!stmt.result.extensions)
                stmt.result.extensions = {};
            for (var _i = 0, _a = Object.keys(extensions); _i < _a.length; _i++) {
                var key = _a[_i];
                stmt.result.extensions[key] = extensions[key];
            }
        }
        return stmt;
    };
    XApiGenerator.prototype.addObject = function (stmt, activityId, name, description, activityType, extensions) {
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
        if (activityType)
            stmt.object.definition.type = activityType;
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
    XApiGenerator.prototype.addObjectInteraction = function (stmt, activityId, name, prompt, interaction, answers, correctAnswers, extensions) {
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
        if (extensions)
            stmt.object.definition.extensions = extensions;
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
    XApiGenerator.prototype.addPeblContextExtensions = function (obj, userProfile) {
        var platform = getBrowserMetadata();
        obj.browserName = platform.name;
        obj.browserVersion = platform.version;
        obj.osName = platform.os.family;
        obj.osVersion = platform.os.version;
        obj.contextOrigin = window.location.origin;
        obj.contextUrl = window.location.href;
        if (userProfile.currentTeam)
            obj.currentTeam = userProfile.currentTeam;
        if (userProfile.currentClass)
            obj.currentClass = userProfile.currentClass;
        return obj;
    };
    XApiGenerator.prototype.addPeblActivity = function (activityURI, activityType, activityId) {
        if (activityURI)
            return activityURI;
        if (activityType) {
            var peblActivity = PEBL_ACTIVITY_PREFIX + activityType;
            if (activityId)
                peblActivity += ('?id=' + activityId);
            return peblActivity;
        }
        return '';
    };
    return XApiGenerator;
}());


// CONCATENATED MODULE: ./src/eventHandlers.ts
var PEBL_PREFIX = "";
// const PEBL_THREAD_PREFIX = "peblThread://";
var PEBL_THREAD_USER_PREFIX = "peblThread://user-";
// const PEBL_THREAD_ARTIFACT_PREFIX = "peblThread://artifact-";
var PEBL_THREAD_GROUP_PREFIX = "peblThread://group-";




var eventHandlers_PEBLEventHandlers = /** @class */ (function () {
    function PEBLEventHandlers(pebl) {
        this.pebl = pebl;
        this.xapiGen = new xapiGenerator_XApiGenerator();
    }
    // -------------------------------
    PEBLEventHandlers.prototype.newBook = function (event) {
        var payload = event.detail;
        var book = payload.book;
        var bookTitle = payload.bookTitle;
        var bookId = payload.bookId;
        var self = this;
        // if (book.indexOf("/") != -1)
        //     book = book.substring(book.lastIndexOf("/") + 1);
        this.pebl.storage.getCurrentBook(function (currentBook) {
            if (currentBook != book) {
                if (currentBook)
                    self.pebl.emitEvent(self.pebl.events.eventTerminated, currentBook);
                self.pebl.storage.removeCurrentActivity();
                // self.pebl.emitEvent(self.pebl.events.eventInteracted, {
                //     activity: book
                // });
                self.pebl.unsubscribeAllEvents();
                self.pebl.unsubscribeAllThreads();
                self.pebl.storage.saveCurrentBook(book);
                self.pebl.storage.saveCurrentBookTitle(bookTitle);
                self.pebl.storage.saveCurrentBookId(bookId);
            }
            else {
                self.pebl.emitEvent(self.pebl.events.eventJumpPage, {});
            }
            self.pebl.emitEvent(self.pebl.events.eventLaunched, {});
        });
    };
    PEBLEventHandlers.prototype.newBookNoReset = function (event) {
        var payload = event.detail;
        var book = payload.book;
        var bookTitle = payload.bookTitle;
        var bookId = payload.bookId;
        var self = this;
        // if (book.indexOf("/") != -1)
        //     book = book.substring(book.lastIndexOf("/") + 1);
        this.pebl.storage.getCurrentBook(function (currentBook) {
            if (currentBook != book) {
                if (currentBook)
                    self.pebl.emitEvent(self.pebl.events.eventTerminated, currentBook);
                self.pebl.storage.removeCurrentActivity();
                self.pebl.emitEvent(self.pebl.events.eventInteracted, {
                    activity: book,
                    target: book
                });
                self.pebl.storage.saveCurrentBook(book);
                self.pebl.storage.saveCurrentBookTitle(bookTitle);
                self.pebl.storage.saveCurrentBookId(bookId);
            }
            else {
                self.pebl.emitEvent(self.pebl.events.eventJumpPage, {});
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
            externalURL: payload.externalURL,
            target: payload.target
        };
        this.pebl.storage.getCurrentActivity(function (activity) {
            self.pebl.storage.getCurrentBook(function (book) {
                self.pebl.user.getUser(function (userProfile) {
                    if (userProfile) {
                        self.xapiGen.addId(xapi);
                        self.xapiGen.addTimestamp(xapi);
                        self.xapiGen.addActorAccount(xapi, userProfile);
                        self.xapiGen.addObject(xapi, self.xapiGen.addPeblActivity(payload.activityURI, payload.activityType, payload.activityId), payload.name, payload.description, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(self.xapiGen.addPeblContextExtensions(exts, userProfile)));
                        var pulled = userProfile.identity == payload.target;
                        if (pulled)
                            self.xapiGen.addVerb(xapi, "http://www.peblproject.com/definitions.html#pulled", "pulled");
                        else
                            self.xapiGen.addVerb(xapi, "http://www.peblproject.com/definitions.html#pushed", "pushed");
                        if (activity || book)
                            self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + (activity || book));
                        var s = new Reference(xapi);
                        self.pebl.storage.saveOutgoingXApi(userProfile, {
                            identity: userProfile.identity,
                            id: s.id,
                            requestType: "saveReferences",
                            references: [s]
                        });
                        self.pebl.storage.saveQueuedReference(userProfile, s);
                        if (pulled)
                            self.pebl.emitEvent(PEBL_THREAD_USER_PREFIX + payload.target, [s]);
                    }
                });
            });
        });
    };
    PEBLEventHandlers.prototype.newMessage = function (event) {
        var payload = event.detail;
        var xapi = {};
        var self = this;
        var exts = {
            access: payload.access,
            type: payload.type,
            replyThread: payload.replyThread,
            groupId: payload.groupId,
            isPrivate: payload.isPrivate,
            book: payload.book,
            idRef: payload.idRef,
            cfi: payload.cfi,
            peblAction: payload.peblAction,
            thread: payload.thread
        };
        self.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                self.pebl.storage.getCurrentActivity(function (activity) {
                    self.pebl.storage.getCurrentBook(function (book) {
                        self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + (activity || book));
                        self.xapiGen.addId(xapi);
                        self.xapiGen.addVerb(xapi, "http://adlnet.gov/expapi/verbs/responded", "responded");
                        self.xapiGen.addTimestamp(xapi);
                        self.xapiGen.addObject(xapi, self.xapiGen.addPeblActivity(payload.activityURI, payload.activityType, payload.activityId), payload.prompt, payload.description, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(self.xapiGen.addPeblContextExtensions(exts, userProfile)));
                        self.xapiGen.addResultResponse(xapi, payload.text, true, payload.duration, payload.additionalResultData ? self.xapiGen.addExtensions(payload.additionalResultData) : undefined);
                        self.xapiGen.addActorAccount(xapi, userProfile);
                        var message = new Message(xapi);
                        var clone = JSON.parse(JSON.stringify(message));
                        self.pebl.storage.saveMessages(userProfile, message);
                        self.pebl.storage.saveOutgoingXApi(userProfile, {
                            identity: userProfile.identity,
                            id: message.id,
                            requestType: "saveThreadedMessage",
                            message: clone
                        });
                        self.pebl.emitEvent(message.thread, [message]);
                    });
                });
            }
        });
    };
    PEBLEventHandlers.prototype.eventNoted = function (event) {
        var payload = event.detail;
        var xapi = {};
        var self = this;
        var exts = {
            access: payload.access,
            type: payload.type,
            isPrivate: payload.isPrivate,
            book: payload.book,
            idRef: payload.idRef,
            cfi: payload.cfi,
            peblAction: payload.peblAction,
            thread: payload.thread
        };
        self.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                self.pebl.storage.getCurrentActivity(function (activity) {
                    self.pebl.storage.getCurrentBook(function (book) {
                        self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + (activity || book));
                        self.xapiGen.addId(xapi);
                        self.xapiGen.addVerb(xapi, "http://adlnet.gov/expapi/verbs/noted", "noted");
                        self.xapiGen.addTimestamp(xapi);
                        self.xapiGen.addObject(xapi, self.xapiGen.addPeblActivity(payload.activityURI, payload.activityType, payload.activityId), payload.prompt, payload.description, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(self.xapiGen.addPeblContextExtensions(exts, userProfile)));
                        self.xapiGen.addResultResponse(xapi, payload.text, true, payload.duration, payload.additionalResultData ? self.xapiGen.addExtensions(payload.additionalResultData) : undefined);
                        self.xapiGen.addActorAccount(xapi, userProfile);
                        var message = new Message(xapi);
                        var clone = JSON.parse(JSON.stringify(message));
                        self.pebl.storage.saveMessages(userProfile, message);
                        self.pebl.storage.saveOutgoingXApi(userProfile, {
                            identity: userProfile.identity,
                            id: message.id,
                            requestType: "saveThreadedMessage",
                            message: clone
                        });
                        self.pebl.emitEvent(message.thread, [message]);
                    });
                });
            }
        });
    };
    PEBLEventHandlers.prototype.removedMessage = function (event) {
        var xId = event.detail;
        var self = this;
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                self.pebl.storage.getCurrentActivity(function (activity) {
                    self.pebl.storage.getCurrentBook(function (book) {
                        self.pebl.storage.saveOutgoingXApi(userProfile, {
                            identity: userProfile.identity,
                            id: xId,
                            xId: xId,
                            requestType: "deleteMessage"
                        });
                        self.pebl.storage.removeMessage(userProfile, xId);
                    });
                });
            }
        });
    };
    PEBLEventHandlers.prototype.newLearnlet = function (event) {
        // let payload = event.detail;
        var xapi = {};
        var self = this;
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                // let exts = {
                //     cfi: payload.cfi
                // };
                self.pebl.storage.getCurrentActivity(function (activity) {
                    self.pebl.storage.getCurrentBook(function (book) {
                        // self.xapiGen.addId(xapi);
                        // self.xapiGen.addTimestamp(xapi);
                        // self.xapiGen.addActorAccount(xapi, userProfile);
                        // self.xapiGen.addObject(xapi, PEBL_THREAD_USER_PREFIX + payload.thread, payload.learnletId, payload.learnletDescription, exts);
                        // self.xapiGen.addVerb(xapi, "http://www.peblproject.com/definitions.html#learnletCreated", "learnletCreated");
                        // if (book || activity)
                        //     self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + (book || activity));
                        var m = new Learnlet(xapi);
                        self.pebl.storage.saveOutgoingActivity(userProfile, {
                            identity: userProfile.identity,
                            id: m.id,
                            requestType: "saveActivities",
                            activities: [m]
                        });
                        // self.pebl.storage.saveEvent(userProfile, m);
                    });
                });
            }
        });
    };
    PEBLEventHandlers.prototype.saveProgram = function (event) {
        var payload = event.detail;
        var prog = event.detail;
        var xapi = {};
        var self = this;
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                var exts_1 = {
                    role: "owner",
                    activityType: "program"
                };
                self.pebl.storage.getCurrentActivity(function (activity) {
                    self.pebl.storage.getCurrentBook(function (book) {
                        if (activity_Program.isNew(prog)) {
                            self.xapiGen.addId(xapi);
                            self.xapiGen.addTimestamp(xapi);
                            self.xapiGen.addActorAccount(xapi, userProfile);
                            self.xapiGen.addObject(xapi, PEBL_THREAD_USER_PREFIX + userProfile.identity, prog.id, prog.programShortDescription, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(exts_1));
                            self.xapiGen.addVerb(xapi, "http://www.peblproject.com/definitions.html#joined", "joined");
                            if (book || activity)
                                self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + (book || activity));
                            var m = new Membership(xapi);
                            prog.addMember(m);
                            self.pebl.storage.saveGroupMembership(userProfile, m);
                            self.pebl.storage.saveOutgoingXApi(userProfile, {
                                identity: userProfile.identity,
                                id: m.id,
                                requestType: "saveMemberships",
                                memberships: [m]
                            });
                        }
                        self.pebl.storage.saveOutgoingActivity(userProfile, {
                            identity: userProfile.identity,
                            id: prog.id,
                            requestType: "saveActivities",
                            activities: [prog]
                        });
                        self.pebl.storage.saveActivity(userProfile, prog);
                        self.pebl.emitEvent(self.pebl.events.incomingProgram, [prog]);
                    });
                });
            }
        });
    };
    PEBLEventHandlers.prototype.saveInstitution = function (event) {
        var payload = event.detail;
        var inst = new activity_Institution(event.detail);
        var xapi = {};
        var self = this;
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                var exts_2 = {
                    role: "owner",
                    activityType: "institution"
                };
                self.pebl.storage.getCurrentActivity(function (activity) {
                    self.pebl.storage.getCurrentBook(function (book) {
                        if (activity_Institution.isNew(inst)) {
                            self.xapiGen.addId(xapi);
                            self.xapiGen.addTimestamp(xapi);
                            self.xapiGen.addActorAccount(xapi, userProfile);
                            self.xapiGen.addObject(xapi, PEBL_THREAD_USER_PREFIX + userProfile.identity, inst.id, inst.description, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(exts_2));
                            self.xapiGen.addVerb(xapi, "http://www.peblproject.com/definitions.html#joined", "joined");
                            if (book || activity)
                                self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + (book || activity));
                            var m = new Membership(xapi);
                            inst.addMember(m);
                            self.pebl.storage.saveGroupMembership(userProfile, m);
                            self.pebl.storage.saveOutgoingXApi(userProfile, {
                                identity: userProfile.identity,
                                id: m.id,
                                requestType: "saveMemberships",
                                memberships: [m]
                            });
                        }
                        self.pebl.storage.saveOutgoingActivity(userProfile, {
                            identity: userProfile.identity,
                            id: inst.id,
                            requestType: "saveActivities",
                            activities: [inst]
                        });
                        self.pebl.storage.saveActivity(userProfile, inst);
                        self.pebl.emitEvent(self.pebl.events.incomingInstitition, [inst]);
                    });
                });
            }
        });
    };
    PEBLEventHandlers.prototype.saveSystem = function (event) {
        var payload = event.detail;
        var system = new activity_System(event.detail);
        var xapi = {};
        var self = this;
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                var exts_3 = {
                    role: "owner",
                    activityType: "system"
                };
                self.pebl.storage.getCurrentActivity(function (activity) {
                    self.pebl.storage.getCurrentBook(function (book) {
                        if (activity_System.isNew(system)) {
                            self.xapiGen.addId(xapi);
                            self.xapiGen.addTimestamp(xapi);
                            self.xapiGen.addActorAccount(xapi, userProfile);
                            self.xapiGen.addObject(xapi, PEBL_THREAD_USER_PREFIX + userProfile.identity, system.id, system.description, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(exts_3));
                            self.xapiGen.addVerb(xapi, "http://www.peblproject.com/definitions.html#joined", "joined");
                            if (book || activity)
                                self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + (book || activity));
                            var m = new Membership(xapi);
                            system.addMember(m);
                            self.pebl.storage.saveGroupMembership(userProfile, m);
                            self.pebl.storage.saveOutgoingXApi(userProfile, {
                                identity: userProfile.identity,
                                id: m.id,
                                requestType: "saveMemberships",
                                memberships: [m]
                            });
                        }
                        self.pebl.storage.saveOutgoingActivity(userProfile, {
                            identity: userProfile.identity,
                            id: system.id,
                            requestType: "saveActivities",
                            activities: [system]
                        });
                        self.pebl.storage.saveActivity(userProfile, system);
                        self.pebl.emitEvent(self.pebl.events.incomingSystem, [system]);
                    });
                });
            }
        });
    };
    // newArtifact(event: CustomEvent) {
    //     let payload = event.detail;
    //     let xapi = {};
    //     let self = this;
    //     this.pebl.user.getUser(function(userProfile) {
    //         if (userProfile) {
    //             let exts = {
    //                 role: payload.role
    //             };
    //             self.pebl.storage.getCurrentActivity(function(activity) {
    //                 self.pebl.storage.getCurrentBook(function(book) {
    //                     self.xapiGen.addId(xapi);
    //                     self.xapiGen.addTimestamp(xapi);
    //                     self.xapiGen.addActorAccount(xapi, userProfile);
    //                     self.xapiGen.addObject(xapi, PEBL_THREAD_ARTIFACT_PREFIX + payload.thread, payload.artifactId, payload.artifactDescription, self.xapiGen.addExtensions(exts));
    //                     self.xapiGen.addVerb(xapi, "http://www.peblproject.com/definitions.html#artifactCreated", "artifactCreated");
    //                     if (book || activity)
    //                         self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + (book || activity));
    //                     let m = new Artifact(xapi);
    //                     self.pebl.storage.saveOutgoingXApi(userProfile, m);
    //                     self.pebl.storage.saveEvent(userProfile, m);
    //                 });
    //             });
    //         }
    //     });
    // }
    PEBLEventHandlers.prototype.newMembership = function (event) {
        var payload = event.detail;
        var xapi = {};
        var self = this;
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                var exts_4 = {
                    role: payload.role,
                    activityType: payload.activityType,
                    organization: payload.organization,
                    organizationName: payload.organizationName
                };
                self.pebl.storage.getCurrentActivity(function (activity) {
                    self.pebl.storage.getCurrentBook(function (book) {
                        self.xapiGen.addId(xapi);
                        self.xapiGen.addTimestamp(xapi);
                        self.xapiGen.addActorAccount(xapi, userProfile);
                        self.xapiGen.addObject(xapi, PEBL_THREAD_USER_PREFIX + payload.thread, payload.groupId, payload.groupDescription, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(exts_4));
                        self.xapiGen.addVerb(xapi, "http://www.peblproject.com/definitions.html#joined", "joined");
                        if (book || activity)
                            self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + (book || activity));
                        var m = new Membership(xapi);
                        self.pebl.storage.saveOutgoingXApi(userProfile, {
                            identity: userProfile.identity,
                            id: m.id,
                            requestType: "saveMemberships",
                            memberships: [m]
                        });
                        self.pebl.emitEvent(self.pebl.events.incomingMembership, [m]);
                        if (payload.thread == userProfile.identity)
                            self.pebl.storage.saveGroupMembership(userProfile, m);
                    });
                });
            }
        });
    };
    PEBLEventHandlers.prototype.modifiedMembership = function (event) {
        var payload = event.detail;
        var oldMembership = payload.oldMembership;
        var newMembership = payload.newMembership;
        var xapiVoided = {};
        var xapiNew = {
            id: ''
        };
        var self = this;
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                var newUserProfile_1 = new UserProfile({
                    identity: oldMembership.actor.account.name,
                    name: oldMembership.actor.name,
                    homePage: oldMembership.actor.account.homePage,
                    preferredName: oldMembership.actor.name
                });
                // First void the old membership
                self.xapiGen.addId(xapiVoided);
                self.xapiGen.addVerb(xapiVoided, "http://adlnet.gov/expapi/verbs/voided", "voided");
                self.xapiGen.addTimestamp(xapiVoided);
                self.xapiGen.addStatementRef(xapiVoided, oldMembership.id);
                self.xapiGen.addActorAccount(xapiVoided, newUserProfile_1);
                self.xapiGen.addParentActivity(xapiVoided, PEBL_PREFIX + oldMembership.id);
                var m = new Voided(xapiVoided);
                // If modifying my own membership
                self.pebl.storage.saveOutgoingXApi(userProfile, {
                    identity: userProfile.identity,
                    id: m.id,
                    xId: oldMembership.id,
                    requestType: "deleteMembership"
                });
                if (newUserProfile_1.identity === userProfile.identity)
                    self.pebl.storage.removeGroupMembership(newUserProfile_1, oldMembership.id);
                self.pebl.emitEvent(self.pebl.events.incomingMembership, [m]);
                // Then send out a new one
                if (newMembership) {
                    var exts_5 = {
                        role: newMembership.role,
                        activityType: newMembership.activityType,
                        organization: newMembership.organization,
                        organizationName: newMembership.organizationName
                    };
                    self.pebl.storage.getCurrentActivity(function (activity) {
                        self.pebl.storage.getCurrentBook(function (book) {
                            xapiNew.id = newMembership.id;
                            self.xapiGen.addTimestamp(xapiNew);
                            self.xapiGen.addActorAccount(xapiNew, newUserProfile_1);
                            self.xapiGen.addObject(xapiNew, PEBL_THREAD_USER_PREFIX + newUserProfile_1.identity, newMembership.membershipId, newMembership.groupDescription, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(exts_5));
                            self.xapiGen.addVerb(xapiNew, "http://www.peblproject.com/definitions.html#joined", "joined");
                            if (book || activity)
                                self.xapiGen.addParentActivity(xapiNew, PEBL_PREFIX + (book || activity));
                            var n = new Membership(xapiNew);
                            self.pebl.storage.saveOutgoingXApi(userProfile, {
                                identity: userProfile.identity,
                                id: n.id,
                                requestType: "saveMemberships",
                                memberships: [n]
                            });
                            self.pebl.emitEvent(self.pebl.events.incomingMembership, [n]);
                            if (newUserProfile_1.identity === userProfile.identity)
                                self.pebl.storage.saveGroupMembership(userProfile, n);
                        });
                    });
                }
            }
        });
    };
    PEBLEventHandlers.prototype.removedMembership = function (event) {
        var xId = event.detail;
        var xapi = {};
        var self = this;
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                self.pebl.storage.getCurrentActivity(function (activity) {
                    self.pebl.storage.getCurrentBook(function (book) {
                        self.xapiGen.addId(xapi);
                        self.xapiGen.addVerb(xapi, "http://adlnet.gov/expapi/verbs/voided", "voided");
                        self.xapiGen.addTimestamp(xapi);
                        self.xapiGen.addStatementRef(xapi, xId);
                        self.xapiGen.addActorAccount(xapi, userProfile);
                        self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + xId);
                        var m = new Voided(xapi);
                        self.pebl.storage.removeGroupMembership(userProfile, xId);
                        self.pebl.storage.saveOutgoingXApi(userProfile, {
                            identity: userProfile.identity,
                            id: m.id,
                            xId: xId,
                            requestType: "deleteMembership"
                        });
                        self.pebl.emitEvent(self.pebl.events.incomingMembership, [m]);
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
                var exts_6 = {
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
                        self.xapiGen.addObject(xapi, PEBL_PREFIX + book, payload.title, payload.text, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(self.xapiGen.addPeblContextExtensions(exts_6, userProfile)));
                        self.xapiGen.addActorAccount(xapi, userProfile);
                        var annotation = new Annotation(xapi);
                        self.pebl.storage.saveAnnotations(userProfile, annotation);
                        self.pebl.storage.saveOutgoingXApi(userProfile, {
                            identity: userProfile.identity,
                            id: annotation.id,
                            requestType: "saveAnnotations",
                            stmts: [annotation]
                        });
                        self.pebl.emitEvent(self.pebl.events.incomingAnnotations, [annotation]);
                    });
                });
            }
        });
    };
    PEBLEventHandlers.prototype.eventBookmarked = function (event) {
        var payload = event.detail;
        var xapi = {};
        var self = this;
        self.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                var exts_7 = {
                    type: payload.type,
                    cfi: payload.cfi,
                    idRef: payload.idRef,
                    style: payload.style
                };
                self.pebl.storage.getCurrentActivity(function (activity) {
                    self.pebl.storage.getCurrentBook(function (book) {
                        self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + (activity || book));
                        self.xapiGen.addId(xapi);
                        self.xapiGen.addVerb(xapi, "http://www.peblproject.com/definitions.html#bookmarked", "bookmarked");
                        self.xapiGen.addTimestamp(xapi);
                        self.xapiGen.addObject(xapi, PEBL_PREFIX + book, payload.title, payload.text, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(self.xapiGen.addPeblContextExtensions(exts_7, userProfile)));
                        self.xapiGen.addActorAccount(xapi, userProfile);
                        var annotation = new Annotation(xapi);
                        self.pebl.storage.saveAnnotations(userProfile, annotation);
                        self.pebl.storage.saveOutgoingXApi(userProfile, {
                            identity: userProfile.identity,
                            id: annotation.id,
                            requestType: "saveAnnotations",
                            stmts: [annotation]
                        });
                        self.pebl.emitEvent(self.pebl.events.incomingAnnotations, [annotation]);
                    });
                });
            }
        });
    };
    PEBLEventHandlers.prototype.eventUnbookmarked = function (event) {
        var payload = event.detail;
        var xapi = {};
        var self = this;
        var exts = {
            idref: payload.idref,
            cfi: payload.cfi
        };
        this.pebl.storage.getCurrentActivity(function (activity) {
            self.pebl.storage.getCurrentBook(function (book) {
                self.pebl.user.getUser(function (userProfile) {
                    if (userProfile) {
                        self.xapiGen.addId(xapi);
                        self.xapiGen.addTimestamp(xapi);
                        self.xapiGen.addActorAccount(xapi, userProfile);
                        self.xapiGen.addObject(xapi, PEBL_PREFIX + book, payload.name, payload.description, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(self.xapiGen.addPeblContextExtensions(exts, userProfile)));
                        self.xapiGen.addVerb(xapi, "http://www.peblproject.com/definitions.html#unbookmarked", "unbookmarked");
                        self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + activity);
                        var s = new Action(xapi);
                        self.pebl.storage.saveOutgoingXApi(userProfile, {
                            identity: userProfile.identity,
                            id: s.id,
                            requestType: "saveActions",
                            actions: [s]
                        });
                        self.pebl.storage.saveEvent(userProfile, s);
                    }
                });
            });
        });
    };
    PEBLEventHandlers.prototype.eventAnnotated = function (event) {
        var payload = event.detail;
        var xapi = {};
        var self = this;
        self.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                var exts_8 = {
                    type: payload.type,
                    cfi: payload.cfi,
                    idRef: payload.idRef,
                    style: payload.style
                };
                self.pebl.storage.getCurrentActivity(function (activity) {
                    self.pebl.storage.getCurrentBook(function (book) {
                        self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + (activity || book));
                        self.xapiGen.addId(xapi);
                        self.xapiGen.addVerb(xapi, "http://www.peblproject.com/definitions.html#annotated", "annotated");
                        self.xapiGen.addTimestamp(xapi);
                        self.xapiGen.addObject(xapi, self.xapiGen.addPeblActivity(payload.activityURI, payload.activityType, payload.activityId), payload.title, payload.text, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(self.xapiGen.addPeblContextExtensions(exts_8, userProfile)));
                        self.xapiGen.addActorAccount(xapi, userProfile);
                        var annotation = new Annotation(xapi);
                        self.pebl.storage.saveAnnotations(userProfile, annotation);
                        self.pebl.storage.saveOutgoingXApi(userProfile, {
                            identity: userProfile.identity,
                            id: annotation.id,
                            requestType: "saveAnnotations",
                            stmts: [annotation]
                        });
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
                var exts_9 = {
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
                        self.xapiGen.addObject(xapi, self.xapiGen.addPeblActivity(payload.activityURI, payload.activityType, payload.activityId), payload.title, payload.text, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(self.xapiGen.addPeblContextExtensions(exts_9, userProfile)));
                        self.xapiGen.addActorAccount(xapi, userProfile);
                        var annotation = new SharedAnnotation(xapi);
                        self.pebl.storage.saveSharedAnnotations(userProfile, annotation);
                        self.pebl.storage.saveOutgoingXApi(userProfile, {
                            identity: userProfile.identity,
                            id: annotation.id,
                            requestType: "saveSharedAnnotations",
                            stmts: [annotation]
                        });
                        self.pebl.emitEvent(self.pebl.events.incomingSharedAnnotations, [annotation]);
                    });
                });
            }
        });
    };
    PEBLEventHandlers.prototype.eventUnsharedAnnotation = function (event) {
        var payload = event.detail;
        var xapi = {};
        var self = this;
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                var exts_10 = {
                    cfi: payload.cfi,
                    idRef: payload.idRef
                };
                self.pebl.storage.getCurrentActivity(function (activity) {
                    self.pebl.storage.getCurrentBook(function (book) {
                        self.xapiGen.addId(xapi);
                        self.xapiGen.addTimestamp(xapi);
                        self.xapiGen.addActorAccount(xapi, userProfile);
                        self.xapiGen.addObject(xapi, self.xapiGen.addPeblActivity(payload.activityURI, payload.activityType, payload.activityId), payload.name, payload.description, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(self.xapiGen.addPeblContextExtensions(exts_10, userProfile)));
                        self.xapiGen.addVerb(xapi, "http://www.peblproject.com/definitions.html#unshared", "unshared");
                        self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + activity);
                        var s = new Action(xapi);
                        self.pebl.storage.saveOutgoingXApi(userProfile, {
                            identity: userProfile.identity,
                            id: s.id,
                            requestType: "saveActions",
                            actions: [s]
                        });
                        self.pebl.storage.saveEvent(userProfile, s);
                    });
                });
            }
        });
    };
    PEBLEventHandlers.prototype.eventUnannotated = function (event) {
        var payload = event.detail;
        var xapi = {};
        var self = this;
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                var exts_11 = {
                    cfi: payload.cfi,
                    idRef: payload.idRef
                };
                self.pebl.storage.getCurrentActivity(function (activity) {
                    self.pebl.storage.getCurrentBook(function (book) {
                        self.xapiGen.addId(xapi);
                        self.xapiGen.addTimestamp(xapi);
                        self.xapiGen.addActorAccount(xapi, userProfile);
                        self.xapiGen.addObject(xapi, self.xapiGen.addPeblActivity(payload.activityURI, payload.activityType, payload.activityId), payload.name, payload.description, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(self.xapiGen.addPeblContextExtensions(exts_11, userProfile)));
                        self.xapiGen.addVerb(xapi, "http://www.peblproject.com/definitions.html#unannotated", "unannotated");
                        self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + activity);
                        var s = new Action(xapi);
                        self.pebl.storage.saveOutgoingXApi(userProfile, {
                            identity: userProfile.identity,
                            id: s.id,
                            requestType: "saveActions",
                            actions: [s]
                        });
                        self.pebl.storage.saveEvent(userProfile, s);
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
                        self.pebl.storage.saveOutgoingXApi(userProfile, {
                            identity: userProfile.identity,
                            id: annotation.id,
                            xId: xId,
                            requestType: "deleteAnnotation"
                        });
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
                        self.pebl.storage.removeSharedAnnotation(userProfile, xId);
                        self.pebl.storage.saveOutgoingXApi(userProfile, {
                            identity: userProfile.identity,
                            id: annotation.id,
                            xId: xId,
                            requestType: "deleteSharedAnnotation"
                        });
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
                self.pebl.network.activate(function () {
                    if (userP.identity != currentIdentity) {
                        self.pebl.emitEvent(self.pebl.events.eventLogin, userP);
                    }
                });
            });
        });
    };
    PEBLEventHandlers.prototype.eventLoggedOut = function (event) {
        var self = this;
        this.pebl.user.getUser(function (currentUser) {
            self.pebl.network.disable(function () {
                self.pebl.storage.removeCurrentUser(function () {
                    self.pebl.emitEvent(self.pebl.events.eventLogout, currentUser);
                });
            });
        });
    };
    // -------------------------------
    PEBLEventHandlers.prototype.eventSessionStart = function (event) {
        var payload = event.detail;
        var xapi = {};
        var self = this;
        var exts = {};
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                self.pebl.storage.getCurrentActivity(function (activity) {
                    self.pebl.storage.getCurrentBook(function (book) {
                        self.xapiGen.addId(xapi);
                        self.xapiGen.addTimestamp(xapi);
                        self.xapiGen.addActorAccount(xapi, userProfile);
                        self.xapiGen.addObject(xapi, PEBL_PREFIX + book, undefined, undefined, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(self.xapiGen.addPeblContextExtensions(exts, userProfile)));
                        self.xapiGen.addVerb(xapi, "http://www.peblproject.com/definitions.html#entered", "entered");
                        if (book || activity)
                            self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + (book || activity));
                        var s = new Session(xapi);
                        self.pebl.storage.saveOutgoingXApi(userProfile, {
                            identity: userProfile.identity,
                            id: s.id,
                            requestType: "saveSessions",
                            sessions: [s]
                        });
                        self.pebl.storage.saveEvent(userProfile, s);
                    });
                });
            }
        });
    };
    PEBLEventHandlers.prototype.eventSessionStop = function (event) {
        var payload = event.detail;
        var xapi = {};
        var self = this;
        var exts = {};
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                self.pebl.storage.getCurrentActivity(function (activity) {
                    self.pebl.storage.getCurrentBook(function (book) {
                        self.xapiGen.addId(xapi);
                        self.xapiGen.addTimestamp(xapi);
                        self.xapiGen.addActorAccount(xapi, userProfile);
                        self.xapiGen.addObject(xapi, PEBL_PREFIX + book, undefined, undefined, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(self.xapiGen.addPeblContextExtensions(exts, userProfile)));
                        self.xapiGen.addVerb(xapi, "http://www.peblproject.com/definitions.html#exited", "exited");
                        if (book || activity)
                            self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + (book || activity));
                        var s = new Session(xapi);
                        self.pebl.storage.saveOutgoingXApi(userProfile, {
                            identity: userProfile.identity,
                            id: s.id,
                            requestType: "saveSessions",
                            sessions: [s]
                        });
                        self.pebl.storage.saveEvent(userProfile, s);
                    });
                });
            }
        });
    };
    PEBLEventHandlers.prototype.eventLaunched = function (event) {
        var payload = event.detail;
        var xapi = {};
        var self = this;
        var exts = {};
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                self.pebl.storage.getCurrentActivity(function (activity) {
                    self.pebl.storage.getCurrentBook(function (book) {
                        self.xapiGen.addId(xapi);
                        self.xapiGen.addTimestamp(xapi);
                        self.xapiGen.addActorAccount(xapi, userProfile);
                        self.xapiGen.addObject(xapi, PEBL_PREFIX + book, undefined, undefined, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(self.xapiGen.addPeblContextExtensions(exts, userProfile)));
                        self.xapiGen.addVerb(xapi, "http://www.peblproject.com/definitions.html#launched", "launched");
                        if (book || activity)
                            self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + (book || activity));
                        var s = new Session(xapi);
                        self.pebl.storage.saveOutgoingXApi(userProfile, {
                            identity: userProfile.identity,
                            id: s.id,
                            requestType: "saveSessions",
                            sessions: [s]
                        });
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
        var exts = {};
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                self.xapiGen.addId(xapi);
                self.xapiGen.addTimestamp(xapi);
                self.xapiGen.addActorAccount(xapi, userProfile);
                self.xapiGen.addObject(xapi, PEBL_PREFIX + payload, undefined, undefined, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(self.xapiGen.addPeblContextExtensions(exts, userProfile)));
                self.xapiGen.addVerb(xapi, "http://adlnet.gov/expapi/verbs/terminated", "terminated");
                self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + payload);
                var s = new Session(xapi);
                self.pebl.storage.saveOutgoingXApi(userProfile, {
                    identity: userProfile.identity,
                    id: s.id,
                    requestType: "saveSessions",
                    sessions: [s]
                });
                self.pebl.storage.saveEvent(userProfile, s);
            }
        });
    };
    PEBLEventHandlers.prototype.eventInitialized = function (event) {
        var payload = event.detail;
        var xapi = {};
        var self = this;
        var exts = {};
        this.pebl.storage.getCurrentBook(function (book) {
            self.pebl.user.getUser(function (userProfile) {
                if (userProfile) {
                    self.xapiGen.addId(xapi);
                    self.xapiGen.addTimestamp(xapi);
                    self.xapiGen.addActorAccount(xapi, userProfile);
                    self.xapiGen.addObject(xapi, PEBL_PREFIX + book, payload.name, payload.description, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(self.xapiGen.addPeblContextExtensions(exts, userProfile)));
                    self.xapiGen.addVerb(xapi, "http://adlnet.gov/expapi/verbs/initialized", "initialized");
                    self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + payload.activity);
                    var s = new Session(xapi);
                    self.pebl.storage.saveOutgoingXApi(userProfile, {
                        identity: userProfile.identity,
                        id: s.id,
                        requestType: "saveSessions",
                        sessions: [s]
                    });
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
                self.xapiGen.addObject(xapi, self.xapiGen.addPeblActivity(payload.activityURI, payload.activityType, payload.activityId), payload.name, payload.description, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(self.xapiGen.addPeblContextExtensions(exts, userProfile)));
                self.xapiGen.addVerb(xapi, "http://adlnet.gov/expapi/verbs/interacted", "interacted");
                self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + payload.activity);
                var s = new Action(xapi);
                self.pebl.storage.saveOutgoingXApi(userProfile, {
                    identity: userProfile.identity,
                    id: s.id,
                    requestType: "saveActions",
                    actions: [s]
                });
                self.pebl.storage.saveEvent(userProfile, s);
            }
        });
    };
    PEBLEventHandlers.prototype.eventJumpPage = function (event) {
        var payload = event.detail;
        var xapi = {};
        var self = this;
        var exts = {};
        this.pebl.storage.getCurrentBook(function (book) {
            self.pebl.storage.getCurrentActivity(function (activity) {
                self.pebl.user.getUser(function (userProfile) {
                    if (userProfile) {
                        self.xapiGen.addId(xapi);
                        self.xapiGen.addTimestamp(xapi);
                        self.xapiGen.addActorAccount(xapi, userProfile);
                        self.xapiGen.addObject(xapi, PEBL_PREFIX + book, payload.name, payload.description, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(self.xapiGen.addPeblContextExtensions(exts, userProfile)));
                        self.xapiGen.addVerb(xapi, "http://www.peblproject.com/definitions.html#paged-jump", "paged-jump");
                        if (activity)
                            self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + activity);
                        var s = new Navigation(xapi);
                        self.pebl.storage.saveOutgoingXApi(userProfile, {
                            identity: userProfile.identity,
                            id: s.id,
                            requestType: "saveNavigations",
                            navigations: [s]
                        });
                        self.pebl.storage.saveEvent(userProfile, s);
                    }
                });
            });
        });
    };
    // -------------------------------
    PEBLEventHandlers.prototype.eventAttempted = function (event) {
        var payload = event.detail;
        var xapi = {};
        var self = this;
        var exts = {};
        this.pebl.storage.getCurrentActivity(function (activity) {
            self.pebl.storage.getCurrentActivity(function (book) {
                self.pebl.user.getUser(function (userProfile) {
                    if (userProfile) {
                        self.xapiGen.addId(xapi);
                        self.xapiGen.addTimestamp(xapi);
                        self.xapiGen.addActorAccount(xapi, userProfile);
                        self.xapiGen.addObjectInteraction(xapi, self.xapiGen.addPeblActivity(payload.activityURI, payload.activityType, payload.activityId), payload.name, payload.prompt, "choice", payload.answers, payload.correctAnswers, self.xapiGen.addExtensions(self.xapiGen.addPeblContextExtensions(exts, userProfile)));
                        self.xapiGen.addResult(xapi, payload.score, payload.minScore, payload.maxScore, payload.complete, payload.success, payload.answered);
                        self.xapiGen.addVerb(xapi, "http://www.peblproject.com/definitions.html#attempted", "attempted");
                        self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + (activity || book));
                        var s = new Question(xapi);
                        self.pebl.storage.saveOutgoingXApi(userProfile, {
                            identity: userProfile.identity,
                            id: s.id,
                            requestType: "saveQuestions",
                            questions: [s]
                        });
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
        var exts = {};
        this.pebl.storage.getCurrentActivity(function (activity) {
            self.pebl.storage.getCurrentActivity(function (book) {
                self.pebl.user.getUser(function (userProfile) {
                    if (userProfile) {
                        self.xapiGen.addId(xapi);
                        self.xapiGen.addTimestamp(xapi);
                        self.xapiGen.addActorAccount(xapi, userProfile);
                        self.xapiGen.addObject(xapi, self.xapiGen.addPeblActivity(payload.activityURI, payload.activityType, payload.activityId), payload.name, payload.description, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(self.xapiGen.addPeblContextExtensions(exts, userProfile)));
                        self.xapiGen.addResult(xapi, payload.score, payload.minScore, payload.maxScore, payload.complete, payload.success);
                        self.xapiGen.addVerb(xapi, "http://adlnet.gov/expapi/verbs/passed", "passed");
                        self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + (activity || book));
                        var s = new Quiz(xapi);
                        self.pebl.storage.saveOutgoingXApi(userProfile, {
                            identity: userProfile.identity,
                            id: s.id,
                            requestType: "saveQuizes",
                            quizes: [s]
                        });
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
        var exts = {};
        this.pebl.storage.getCurrentActivity(function (activity) {
            self.pebl.storage.getCurrentActivity(function (book) {
                self.pebl.user.getUser(function (userProfile) {
                    if (userProfile) {
                        self.xapiGen.addId(xapi);
                        self.xapiGen.addTimestamp(xapi);
                        self.xapiGen.addActorAccount(xapi, userProfile);
                        self.xapiGen.addObject(xapi, self.xapiGen.addPeblActivity(payload.activityURI, payload.activityType, payload.activityId), payload.name, payload.description, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(self.xapiGen.addPeblContextExtensions(exts, userProfile)));
                        self.xapiGen.addResult(xapi, payload.score, payload.minScore, payload.maxScore, payload.complete, payload.success);
                        self.xapiGen.addVerb(xapi, "http://adlnet.gov/expapi/verbs/failed", "failed");
                        self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + (activity || book));
                        var s = new Quiz(xapi);
                        self.pebl.storage.saveOutgoingXApi(userProfile, {
                            identity: userProfile.identity,
                            id: s.id,
                            requestType: "saveQuizes",
                            quizes: [s]
                        });
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
                        self.xapiGen.addObject(xapi, self.xapiGen.addPeblActivity(payload.activityURI, payload.activityType, payload.activityId), payload.name, payload.description, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(self.xapiGen.addPeblContextExtensions(exts, userProfile)));
                        self.xapiGen.addVerb(xapi, "http://adlnet.gov/expapi/verbs/preferred", "preferred");
                        self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + (activity || book));
                        var s = new Action(xapi);
                        self.pebl.storage.saveOutgoingXApi(userProfile, {
                            identity: userProfile.identity,
                            id: s.id,
                            requestType: "saveActions",
                            actions: [s]
                        });
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
                        self.xapiGen.addObject(xapi, self.xapiGen.addPeblActivity(payload.activityURI, payload.activityType, payload.activityId), payload.name, payload.description, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(self.xapiGen.addPeblContextExtensions(exts, userProfile)));
                        self.xapiGen.addVerb(xapi, "http://www.peblproject.com/definitions.html#morphed", "morphed");
                        self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + activity);
                        var s = new Action(xapi);
                        self.pebl.storage.saveOutgoingXApi(userProfile, {
                            identity: userProfile.identity,
                            id: s.id,
                            requestType: "saveActions",
                            actions: [s]
                        });
                        self.pebl.storage.saveEvent(userProfile, s);
                    }
                });
            });
        });
    };
    PEBLEventHandlers.prototype.eventExperienced = function (event) {
        var payload = event.detail;
        var xapi = {};
        var self = this;
        var exts = {
            idref: payload.idref,
            cfi: payload.cfi,
            type: payload.type
        };
        this.pebl.storage.getCurrentActivity(function (activity) {
            self.pebl.storage.getCurrentBook(function (book) {
                self.pebl.user.getUser(function (userProfile) {
                    if (userProfile) {
                        self.xapiGen.addId(xapi);
                        self.xapiGen.addTimestamp(xapi);
                        self.xapiGen.addActorAccount(xapi, userProfile);
                        self.xapiGen.addObject(xapi, self.xapiGen.addPeblActivity(payload.activityURI, payload.activityType, payload.activityId), payload.name, payload.description, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(self.xapiGen.addPeblContextExtensions(exts, userProfile)));
                        self.xapiGen.addVerb(xapi, "http://www.peblproject.com/definitions.html#experienced", "experienced");
                        self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + activity);
                        var s = new Action(xapi);
                        self.pebl.storage.saveOutgoingXApi(userProfile, {
                            identity: userProfile.identity,
                            id: s.id,
                            requestType: "saveActions",
                            actions: [s]
                        });
                        self.pebl.storage.saveEvent(userProfile, s);
                    }
                });
            });
        });
    };
    PEBLEventHandlers.prototype.eventDisliked = function (event) {
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
                        self.xapiGen.addObject(xapi, self.xapiGen.addPeblActivity(payload.activityURI, payload.activityType, payload.activityId), payload.name, payload.description, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(self.xapiGen.addPeblContextExtensions(exts, userProfile)));
                        self.xapiGen.addVerb(xapi, "http://www.peblproject.com/definitions.html#disliked", "disliked");
                        self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + activity);
                        var s = new Action(xapi);
                        self.pebl.storage.saveOutgoingXApi(userProfile, {
                            identity: userProfile.identity,
                            id: s.id,
                            requestType: "saveActions",
                            actions: [s]
                        });
                        self.pebl.storage.saveEvent(userProfile, s);
                    }
                });
            });
        });
    };
    PEBLEventHandlers.prototype.eventLiked = function (event) {
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
                        self.xapiGen.addObject(xapi, self.xapiGen.addPeblActivity(payload.activityURI, payload.activityType, payload.activityId), payload.name, payload.description, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(self.xapiGen.addPeblContextExtensions(exts, userProfile)));
                        self.xapiGen.addVerb(xapi, "http://www.peblproject.com/definitions.html#liked", "liked");
                        self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + activity);
                        var s = new Action(xapi);
                        self.pebl.storage.saveOutgoingXApi(userProfile, {
                            identity: userProfile.identity,
                            id: s.id,
                            requestType: "saveActions",
                            actions: [s]
                        });
                        self.pebl.storage.saveEvent(userProfile, s);
                    }
                });
            });
        });
    };
    PEBLEventHandlers.prototype.eventAccessed = function (event) {
        var payload = event.detail;
        var xapi = {};
        var self = this;
        var exts = {
            idref: payload.idref,
            cfi: payload.cfi,
            type: payload.type
        };
        this.pebl.storage.getCurrentActivity(function (activity) {
            self.pebl.storage.getCurrentBook(function (book) {
                self.pebl.user.getUser(function (userProfile) {
                    if (userProfile) {
                        self.xapiGen.addId(xapi);
                        self.xapiGen.addTimestamp(xapi);
                        self.xapiGen.addActorAccount(xapi, userProfile);
                        self.xapiGen.addObject(xapi, self.xapiGen.addPeblActivity(payload.activityURI, payload.activityType, payload.activityId), payload.name, payload.description, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(self.xapiGen.addPeblContextExtensions(exts, userProfile)));
                        self.xapiGen.addVerb(xapi, "http://www.peblproject.com/definitions.html#accessed", "accessed");
                        self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + activity);
                        var s = new Action(xapi);
                        self.pebl.storage.saveOutgoingXApi(userProfile, {
                            identity: userProfile.identity,
                            id: s.id,
                            requestType: "saveActions",
                            actions: [s]
                        });
                        self.pebl.storage.saveEvent(userProfile, s);
                    }
                });
            });
        });
    };
    PEBLEventHandlers.prototype.eventSubmitted = function (event) {
        var payload = event.detail;
        var xapi = {};
        var self = this;
        var exts = {
            idref: payload.idref,
            cfi: payload.cfi,
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
                        self.xapiGen.addObject(xapi, self.xapiGen.addPeblActivity(payload.activityURI, payload.activityType, payload.activityId), payload.name, payload.description, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(self.xapiGen.addPeblContextExtensions(exts, userProfile)));
                        self.xapiGen.addVerb(xapi, "http://www.peblproject.com/definitions.html#submitted", "submitted");
                        self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + activity);
                        var s = new Action(xapi);
                        self.pebl.storage.saveOutgoingXApi(userProfile, {
                            identity: userProfile.identity,
                            id: s.id,
                            requestType: "saveActions",
                            actions: [s]
                        });
                        self.pebl.storage.saveEvent(userProfile, s);
                    }
                });
            });
        });
    };
    PEBLEventHandlers.prototype.eventHid = function (event) {
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
                        self.xapiGen.addObject(xapi, self.xapiGen.addPeblActivity(payload.activityURI, payload.activityType, payload.activityId), payload.name, payload.description, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(self.xapiGen.addPeblContextExtensions(exts, userProfile)));
                        self.xapiGen.addVerb(xapi, "http://www.peblproject.com/definitions.html#hid", "hid");
                        self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + activity);
                        var s = new Action(xapi);
                        self.pebl.storage.saveOutgoingXApi(userProfile, {
                            identity: userProfile.identity,
                            id: s.id,
                            requestType: "saveActions",
                            actions: [s]
                        });
                        self.pebl.storage.saveEvent(userProfile, s);
                    }
                });
            });
        });
    };
    PEBLEventHandlers.prototype.eventShowed = function (event) {
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
                        self.xapiGen.addObject(xapi, self.xapiGen.addPeblActivity(payload.activityURI, payload.activityType, payload.activityId), payload.name, payload.description, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(self.xapiGen.addPeblContextExtensions(exts, userProfile)));
                        self.xapiGen.addVerb(xapi, "http://www.peblproject.com/definitions.html#showed", "showed");
                        self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + activity);
                        var s = new Action(xapi);
                        self.pebl.storage.saveOutgoingXApi(userProfile, {
                            identity: userProfile.identity,
                            id: s.id,
                            requestType: "saveActions",
                            actions: [s]
                        });
                        self.pebl.storage.saveEvent(userProfile, s);
                    }
                });
            });
        });
    };
    PEBLEventHandlers.prototype.eventDisplayed = function (event) {
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
                        self.xapiGen.addObject(xapi, self.xapiGen.addPeblActivity(payload.activityURI, payload.activityType, payload.activityId), payload.name, payload.description, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(self.xapiGen.addPeblContextExtensions(exts, userProfile)));
                        self.xapiGen.addVerb(xapi, "http://www.peblproject.com/definitions.html#displayed", "displayed");
                        self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + activity);
                        var s = new Action(xapi);
                        self.pebl.storage.saveOutgoingXApi(userProfile, {
                            identity: userProfile.identity,
                            id: s.id,
                            requestType: "saveActions",
                            actions: [s]
                        });
                        self.pebl.storage.saveEvent(userProfile, s);
                    }
                });
            });
        });
    };
    PEBLEventHandlers.prototype.eventUndisplayed = function (event) {
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
                        self.xapiGen.addObject(xapi, PEBL_PREFIX + book, payload.name, payload.description, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(self.xapiGen.addPeblContextExtensions(exts, userProfile)));
                        self.xapiGen.addVerb(xapi, "http://www.peblproject.com/definitions.html#undisplayed", "undisplayed");
                        self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + activity);
                        var s = new Action(xapi);
                        self.pebl.storage.saveOutgoingXApi(userProfile, {
                            identity: userProfile.identity,
                            id: s.id,
                            requestType: "saveActions",
                            actions: [s]
                        });
                        self.pebl.storage.saveEvent(userProfile, s);
                    }
                });
            });
        });
    };
    PEBLEventHandlers.prototype.eventSearched = function (event) {
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
                        self.xapiGen.addObject(xapi, PEBL_PREFIX + book, payload.name, payload.description, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(self.xapiGen.addPeblContextExtensions(exts, userProfile)));
                        self.xapiGen.addVerb(xapi, "http://www.peblproject.com/definitions.html#searched", "searched");
                        self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + activity);
                        var s = new Action(xapi);
                        self.pebl.storage.saveOutgoingXApi(userProfile, {
                            identity: userProfile.identity,
                            id: s.id,
                            requestType: "saveActions",
                            actions: [s]
                        });
                        self.pebl.storage.saveEvent(userProfile, s);
                    }
                });
            });
        });
    };
    PEBLEventHandlers.prototype.eventSelected = function (event) {
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
                        self.xapiGen.addObject(xapi, PEBL_PREFIX + book, payload.name, payload.description, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(self.xapiGen.addPeblContextExtensions(exts, userProfile)));
                        self.xapiGen.addVerb(xapi, "http://www.peblproject.com/definitions.html#selected", "selected");
                        self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + activity);
                        var s = new Action(xapi);
                        self.pebl.storage.saveOutgoingXApi(userProfile, {
                            identity: userProfile.identity,
                            id: s.id,
                            requestType: "saveActions",
                            actions: [s]
                        });
                        self.pebl.storage.saveEvent(userProfile, s);
                    }
                });
            });
        });
    };
    PEBLEventHandlers.prototype.eventDiscarded = function (event) {
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
                        self.xapiGen.addObject(xapi, PEBL_PREFIX + book, payload.name, payload.description, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(self.xapiGen.addPeblContextExtensions(exts, userProfile)));
                        self.xapiGen.addVerb(xapi, "http://www.peblproject.com/definitions.html#discarded", "discarded");
                        self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + activity);
                        var s = new Action(xapi);
                        self.pebl.storage.saveOutgoingXApi(userProfile, {
                            identity: userProfile.identity,
                            id: s.id,
                            requestType: "saveActions",
                            actions: [s]
                        });
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
                        self.xapiGen.addObject(xapi, PEBL_PREFIX + book, payload.name, payload.description, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(self.xapiGen.addPeblContextExtensions(exts, userProfile)));
                        self.xapiGen.addVerb(xapi, "http://www.peblproject.com/definitions.html#paged-next", "paged-next");
                        if (activity)
                            self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + activity);
                        var s = new Navigation(xapi);
                        self.pebl.storage.saveOutgoingXApi(userProfile, {
                            identity: userProfile.identity,
                            id: s.id,
                            requestType: "saveNavigations",
                            navigations: [s]
                        });
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
                        self.xapiGen.addObject(xapi, PEBL_PREFIX + book, payload.name, payload.description, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(self.xapiGen.addPeblContextExtensions(exts, userProfile)));
                        self.xapiGen.addVerb(xapi, "http://www.peblproject.com/definitions.html#paged-prev", "paged-prev");
                        if (activity)
                            self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + activity);
                        var s = new Navigation(xapi);
                        self.pebl.storage.saveOutgoingXApi(userProfile, {
                            identity: userProfile.identity,
                            id: s.id,
                            requestType: "saveNavigations",
                            navigations: [s]
                        });
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
        var exts = {};
        this.pebl.storage.getCurrentBook(function (book) {
            self.pebl.storage.getCurrentActivity(function (activity) {
                self.pebl.user.getUser(function (userProfile) {
                    if (userProfile) {
                        self.xapiGen.addId(xapi);
                        self.xapiGen.addTimestamp(xapi);
                        self.xapiGen.addActorAccount(xapi, userProfile);
                        self.xapiGen.addObject(xapi, PEBL_PREFIX + book, payload.name, payload.description, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(self.xapiGen.addPeblContextExtensions(exts, userProfile)));
                        self.xapiGen.addVerb(xapi, "http://adlnet.gov/expapi/verbs/completed", "completed");
                        if (activity)
                            self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + activity);
                        var s = new Navigation(xapi);
                        self.pebl.storage.saveOutgoingXApi(userProfile, {
                            identity: userProfile.identity,
                            id: s.id,
                            requestType: "saveNavigations",
                            navigations: [s]
                        });
                        self.pebl.storage.saveEvent(userProfile, s);
                    }
                });
            });
        });
    };
    PEBLEventHandlers.prototype.eventCompatibilityTested = function (event) {
        var payload = event.detail;
        var xapi = {};
        var self = this;
        var exts = {
            readerName: payload.readerName,
            osName: payload.osName,
            osVersion: payload.osVersion,
            browserName: payload.browserName,
            browserVersion: payload.browserVersion,
            userAgent: payload.userAgent,
            appVersion: payload.appVersion,
            platform: payload.platform,
            vendor: payload.vendor,
            testResults: payload.testResults
        };
        this.pebl.storage.getCurrentBook(function (book) {
            self.pebl.storage.getCurrentActivity(function (activity) {
                self.pebl.user.getUser(function (userProfile) {
                    if (userProfile) {
                        self.xapiGen.addId(xapi);
                        self.xapiGen.addTimestamp(xapi);
                        self.xapiGen.addActorAccount(xapi, userProfile);
                        self.xapiGen.addObject(xapi, PEBL_PREFIX + book, payload.name, payload.description, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(self.xapiGen.addPeblContextExtensions(exts, userProfile)));
                        self.xapiGen.addVerb(xapi, "http://www.peblproject.com/definitions.html#compatibilityTested", "compatibilityTested");
                        if (activity)
                            self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + activity);
                        var test = new CompatibilityTest(xapi);
                        self.pebl.storage.saveOutgoingXApi(userProfile, {
                            identity: userProfile.identity,
                            id: test.id,
                            requestType: "saveCompatibilityTests",
                            tests: [test]
                        });
                    }
                });
            });
        });
    };
    PEBLEventHandlers.prototype.eventChecklisted = function (event) {
    };
    PEBLEventHandlers.prototype.eventHelped = function (event) {
        var payload = event.detail;
        var xapi = {};
        var self = this;
        var exts = {};
        this.pebl.storage.getCurrentBook(function (book) {
            self.pebl.storage.getCurrentActivity(function (activity) {
                self.pebl.user.getUser(function (userProfile) {
                    if (userProfile) {
                        self.xapiGen.addId(xapi);
                        self.xapiGen.addTimestamp(xapi);
                        self.xapiGen.addActorAccount(xapi, userProfile);
                        self.xapiGen.addObject(xapi, PEBL_PREFIX + book, payload.name, payload.description, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(self.xapiGen.addPeblContextExtensions(exts, userProfile)));
                        self.xapiGen.addVerb(xapi, "http://www.peblproject.com/definitions.html#helped", "helped");
                        if (activity)
                            self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + activity);
                        var s = new Navigation(xapi);
                        self.pebl.storage.saveOutgoingXApi(userProfile, {
                            identity: userProfile.identity,
                            id: s.id,
                            requestType: "saveNavigations",
                            navigations: [s]
                        });
                        self.pebl.storage.saveEvent(userProfile, s);
                    }
                });
            });
        });
    };
    PEBLEventHandlers.prototype.eventInvited = function (event) {
        var payload = event.detail;
        var xapi = {};
        var self = this;
        var exts = {
            programId: payload.programId,
            programRole: payload.programRole
        };
        this.pebl.storage.getCurrentBook(function (book) {
            self.pebl.storage.getCurrentActivity(function (activity) {
                self.pebl.user.getUser(function (userProfile) {
                    if (userProfile) {
                        self.xapiGen.addId(xapi);
                        self.xapiGen.addTimestamp(xapi);
                        self.xapiGen.addActorAccount(xapi, userProfile);
                        self.xapiGen.addObject(xapi, PEBL_PREFIX + 'Harness', payload.token, payload.description, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(exts));
                        self.xapiGen.addVerb(xapi, "http://www.peblproject.com/definitions.html#invited", "invited");
                        if (activity)
                            self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + activity);
                        var invite = new Invitation(xapi);
                        self.pebl.storage.saveOutgoingXApi(userProfile, {
                            identity: userProfile.identity,
                            id: invite.id,
                            requestType: "saveInvites",
                            invites: [invite]
                        }); //TODO
                    }
                });
            });
        });
    };
    PEBLEventHandlers.prototype.eventUninvited = function (event) {
        var xId = event.detail;
        var xapi = {};
        var self = this;
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                self.pebl.storage.getCurrentActivity(function (activity) {
                    self.pebl.storage.getCurrentBook(function (book) {
                        self.xapiGen.addId(xapi);
                        self.xapiGen.addVerb(xapi, "http://adlnet.gov/expapi/verbs/voided", "voided");
                        self.xapiGen.addTimestamp(xapi);
                        self.xapiGen.addStatementRef(xapi, xId);
                        self.xapiGen.addActorAccount(xapi, userProfile);
                        self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + 'Harness');
                        var uninvite = new Voided(xapi);
                        self.pebl.storage.saveOutgoingXApi(userProfile, {
                            identity: userProfile.identity,
                            id: uninvite.id,
                            xId: xId,
                            requestType: "deleteInvite"
                        });
                    });
                });
            }
        });
    };
    PEBLEventHandlers.prototype.eventProgramLevelUp = function (event) {
        var payload = event.detail;
        var xapi = {};
        var self = this;
        var exts = {
            previousValue: payload.previousValue,
            newValue: payload.newValue,
            action: payload.action
        };
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                self.xapiGen.addId(xapi);
                self.xapiGen.addVerb(xapi, "http://www.peblproject.com/definitions.html#programLevelUp", "programLevelUp");
                self.xapiGen.addTimestamp(xapi);
                self.xapiGen.addActorAccount(xapi, userProfile);
                self.xapiGen.addObject(xapi, PEBL_THREAD_GROUP_PREFIX + payload.programId, payload.programId, payload.description, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(exts));
                var pa = new ProgramAction(xapi);
                self.pebl.storage.saveOutgoingXApi(userProfile, {
                    identity: userProfile.identity,
                    id: pa.id,
                    requestType: "saveActivityEvents",
                    events: [pa]
                });
            }
        });
    };
    PEBLEventHandlers.prototype.eventProgramLevelDown = function (event) {
        var payload = event.detail;
        var xapi = {};
        var self = this;
        var exts = {
            previousValue: payload.previousValue,
            newValue: payload.newValue,
            action: payload.action
        };
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                self.xapiGen.addId(xapi);
                self.xapiGen.addVerb(xapi, "http://www.peblproject.com/definitions.html#programLevelDown", "programLevelDown");
                self.xapiGen.addTimestamp(xapi);
                self.xapiGen.addActorAccount(xapi, userProfile);
                self.xapiGen.addObject(xapi, PEBL_THREAD_GROUP_PREFIX + payload.programId, payload.programId, payload.description, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(exts));
                var pa = new ProgramAction(xapi);
                self.pebl.storage.saveOutgoingXApi(userProfile, {
                    identity: userProfile.identity,
                    id: pa.id,
                    requestType: "saveActivityEvents",
                    events: [pa]
                });
            }
        });
    };
    PEBLEventHandlers.prototype.eventProgramInvited = function (event) {
        var payload = event.detail;
        var xapi = {};
        var self = this;
        var exts = {
            previousValue: payload.previousValue,
            newValue: payload.newValue,
            action: payload.action
        };
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                self.xapiGen.addId(xapi);
                self.xapiGen.addVerb(xapi, "http://www.peblproject.com/definitions.html#programInvited", "programInvited");
                self.xapiGen.addTimestamp(xapi);
                self.xapiGen.addActorAccount(xapi, userProfile);
                self.xapiGen.addObject(xapi, PEBL_THREAD_GROUP_PREFIX + payload.programId, payload.programId, payload.description, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(exts));
                var pa = new ProgramAction(xapi);
                self.pebl.storage.saveOutgoingXApi(userProfile, {
                    identity: userProfile.identity,
                    id: pa.id,
                    requestType: "saveActivityEvents",
                    events: [pa]
                });
            }
        });
    };
    PEBLEventHandlers.prototype.eventProgramUninvited = function (event) {
        var payload = event.detail;
        var xapi = {};
        var self = this;
        var exts = {
            previousValue: payload.previousValue,
            newValue: payload.newValue,
            action: payload.action
        };
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                self.xapiGen.addId(xapi);
                self.xapiGen.addVerb(xapi, "http://www.peblproject.com/definitions.html#programUninvited", "programUninvited");
                self.xapiGen.addTimestamp(xapi);
                self.xapiGen.addActorAccount(xapi, userProfile);
                self.xapiGen.addObject(xapi, PEBL_THREAD_GROUP_PREFIX + payload.programId, payload.programId, payload.description, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(exts));
                var pa = new ProgramAction(xapi);
                self.pebl.storage.saveOutgoingXApi(userProfile, {
                    identity: userProfile.identity,
                    id: pa.id,
                    requestType: "saveActivityEvents",
                    events: [pa]
                });
            }
        });
    };
    PEBLEventHandlers.prototype.eventProgramJoined = function (event) {
        var payload = event.detail;
        var xapi = {};
        var self = this;
        var exts = {
            previousValue: payload.previousValue,
            newValue: payload.newValue,
            action: payload.action
        };
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                self.xapiGen.addId(xapi);
                self.xapiGen.addVerb(xapi, "http://www.peblproject.com/definitions.html#programJoined", "programJoined");
                self.xapiGen.addTimestamp(xapi);
                self.xapiGen.addActorAccount(xapi, userProfile);
                self.xapiGen.addObject(xapi, PEBL_THREAD_GROUP_PREFIX + payload.programId, payload.programId, payload.description, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(exts));
                var pa = new ProgramAction(xapi);
                self.pebl.storage.saveOutgoingXApi(userProfile, {
                    identity: userProfile.identity,
                    id: pa.id,
                    requestType: "saveActivityEvents",
                    events: [pa]
                });
            }
        });
    };
    PEBLEventHandlers.prototype.eventProgramExpelled = function (event) {
        var payload = event.detail;
        var xapi = {};
        var self = this;
        var exts = {
            previousValue: payload.previousValue,
            newValue: payload.newValue,
            action: payload.action
        };
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                self.xapiGen.addId(xapi);
                self.xapiGen.addVerb(xapi, "http://www.peblproject.com/definitions.html#programExpelled", "programExpelled");
                self.xapiGen.addTimestamp(xapi);
                self.xapiGen.addActorAccount(xapi, userProfile);
                self.xapiGen.addObject(xapi, PEBL_THREAD_GROUP_PREFIX + payload.programId, payload.programId, payload.description, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(exts));
                var pa = new ProgramAction(xapi);
                self.pebl.storage.saveOutgoingXApi(userProfile, {
                    identity: userProfile.identity,
                    id: pa.id,
                    requestType: "saveActivityEvents",
                    events: [pa]
                });
            }
        });
    };
    PEBLEventHandlers.prototype.eventProgramActivityLaunched = function (event) {
        var payload = event.detail;
        var xapi = {};
        var self = this;
        var exts = {
            newValue: payload.newValue,
            action: payload.action
        };
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                self.xapiGen.addId(xapi);
                self.xapiGen.addVerb(xapi, "http://www.peblproject.com/definitions.html#programActivityLaunched", "programActivityLaunched");
                self.xapiGen.addTimestamp(xapi);
                self.xapiGen.addActorAccount(xapi, userProfile);
                self.xapiGen.addObject(xapi, PEBL_THREAD_GROUP_PREFIX + payload.programId, payload.programId, payload.description, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(exts));
                var pa = new ProgramAction(xapi);
                self.pebl.storage.saveOutgoingXApi(userProfile, {
                    identity: userProfile.identity,
                    id: pa.id,
                    requestType: "saveActivityEvents",
                    events: [pa]
                });
            }
        });
    };
    PEBLEventHandlers.prototype.eventProgramActivityCompleted = function (event) {
        var payload = event.detail;
        var xapi = {};
        var self = this;
        var exts = {
            newValue: payload.newValue,
            action: payload.action
        };
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                self.xapiGen.addId(xapi);
                self.xapiGen.addVerb(xapi, "http://www.peblproject.com/definitions.html#programActivityCompleted", "programActivityCompleted");
                self.xapiGen.addTimestamp(xapi);
                self.xapiGen.addActorAccount(xapi, userProfile);
                self.xapiGen.addObject(xapi, PEBL_THREAD_GROUP_PREFIX + payload.programId, payload.programId, payload.description, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(exts));
                var pa = new ProgramAction(xapi);
                self.pebl.storage.saveOutgoingXApi(userProfile, {
                    identity: userProfile.identity,
                    id: pa.id,
                    requestType: "saveActivityEvents",
                    events: [pa]
                });
            }
        });
    };
    PEBLEventHandlers.prototype.eventProgramActivityTeamCompleted = function (event) {
        var payload = event.detail;
        var xapi = {};
        var self = this;
        var exts = {
            newValue: payload.newValue,
            action: payload.action
        };
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                self.xapiGen.addId(xapi);
                self.xapiGen.addVerb(xapi, "http://www.peblproject.com/definitions.html#programActivityTeamCompleted", "programActivityTeamCompleted");
                self.xapiGen.addTimestamp(xapi);
                self.xapiGen.addActorAccount(xapi, userProfile);
                self.xapiGen.addObject(xapi, PEBL_THREAD_GROUP_PREFIX + payload.programId, payload.programId, payload.description, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(exts));
                var pa = new ProgramAction(xapi);
                self.pebl.storage.saveOutgoingXApi(userProfile, {
                    identity: userProfile.identity,
                    id: pa.id,
                    requestType: "saveActivityEvents",
                    events: [pa]
                });
            }
        });
    };
    PEBLEventHandlers.prototype.eventProgramModified = function (event) {
        var payload = event.detail;
        var xapi = {};
        var self = this;
        var exts = {
            previousValue: payload.previousValue,
            newValue: payload.newValue,
            action: payload.action
        };
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                self.xapiGen.addId(xapi);
                self.xapiGen.addVerb(xapi, "http://www.peblproject.com/definitions.html#programModified", "programModified");
                self.xapiGen.addTimestamp(xapi);
                self.xapiGen.addActorAccount(xapi, userProfile);
                self.xapiGen.addObject(xapi, PEBL_THREAD_GROUP_PREFIX + payload.programId, payload.programId, payload.description, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(exts));
                var pa = new ProgramAction(xapi);
                self.pebl.storage.saveOutgoingXApi(userProfile, {
                    identity: userProfile.identity,
                    id: pa.id,
                    requestType: "saveActivityEvents",
                    events: [pa]
                });
            }
        });
    };
    PEBLEventHandlers.prototype.eventProgramDeleted = function (event) {
        var payload = event.detail;
        var xapi = {};
        var self = this;
        var exts = {
            previousValue: payload.previousValue,
            newValue: payload.newValue,
            action: payload.action
        };
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                self.xapiGen.addId(xapi);
                self.xapiGen.addVerb(xapi, "http://www.peblproject.com/definitions.html#programDeleted", "programDeleted");
                self.xapiGen.addTimestamp(xapi);
                self.xapiGen.addActorAccount(xapi, userProfile);
                self.xapiGen.addObject(xapi, PEBL_THREAD_GROUP_PREFIX + payload.programId, payload.programId, payload.description, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(exts));
                var pa = new ProgramAction(xapi);
                self.pebl.storage.saveOutgoingXApi(userProfile, {
                    identity: userProfile.identity,
                    id: pa.id,
                    requestType: "saveActivityEvents",
                    events: [pa]
                });
            }
        });
    };
    PEBLEventHandlers.prototype.eventProgramCompleted = function (event) {
        var payload = event.detail;
        var xapi = {};
        var self = this;
        var exts = {
            action: payload.action
        };
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                self.xapiGen.addId(xapi);
                self.xapiGen.addVerb(xapi, "http://www.peblproject.com/definitions.html#programCompleted", "programCompleted");
                self.xapiGen.addTimestamp(xapi);
                self.xapiGen.addActorAccount(xapi, userProfile);
                self.xapiGen.addObject(xapi, PEBL_THREAD_GROUP_PREFIX + payload.programId, payload.programId, payload.description, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(exts));
                var pa = new ProgramAction(xapi);
                self.pebl.storage.saveOutgoingXApi(userProfile, {
                    identity: userProfile.identity,
                    id: pa.id,
                    requestType: "saveActivityEvents",
                    events: [pa]
                });
            }
        });
    };
    PEBLEventHandlers.prototype.eventProgramCopied = function (event) {
        var payload = event.detail;
        var xapi = {};
        var self = this;
        var exts = {
            previousValue: payload.previousValue,
            newValue: payload.newValue,
            action: payload.action
        };
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                self.xapiGen.addId(xapi);
                self.xapiGen.addVerb(xapi, "http://www.peblproject.com/definitions.html#programCopied", "programCopied");
                self.xapiGen.addTimestamp(xapi);
                self.xapiGen.addActorAccount(xapi, userProfile);
                self.xapiGen.addObject(xapi, PEBL_THREAD_GROUP_PREFIX + payload.programId, payload.programId, payload.description, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(exts));
                var pa = new ProgramAction(xapi);
                self.pebl.storage.saveOutgoingXApi(userProfile, {
                    identity: userProfile.identity,
                    id: pa.id,
                    requestType: "saveActivityEvents",
                    events: [pa]
                });
            }
        });
    };
    PEBLEventHandlers.prototype.eventProgramDiscussed = function (event) {
        var payload = event.detail;
        var xapi = {};
        var self = this;
        var exts = {
            previousValue: payload.previousValue,
            newValue: payload.newValue,
            action: payload.action
        };
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                self.xapiGen.addId(xapi);
                self.xapiGen.addVerb(xapi, "http://www.peblproject.com/definitions.html#programDiscussed", "programDiscussed");
                self.xapiGen.addTimestamp(xapi);
                self.xapiGen.addActorAccount(xapi, userProfile);
                self.xapiGen.addObject(xapi, PEBL_THREAD_GROUP_PREFIX + payload.programId, payload.programId, payload.description, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(exts));
                var pa = new ProgramAction(xapi);
                self.pebl.storage.saveOutgoingXApi(userProfile, {
                    identity: userProfile.identity,
                    id: pa.id,
                    requestType: "saveActivityEvents",
                    events: [pa]
                });
            }
        });
    };
    // -------------------------------
    PEBLEventHandlers.prototype.eventLogin = function (event) {
        var payload = event.detail;
        var userProfile = event.detail;
        var xapi = {};
        var self = this;
        var exts = {};
        this.pebl.storage.saveCurrentUser(userProfile, function () {
            if (userProfile) {
                self.xapiGen.addId(xapi);
                self.xapiGen.addTimestamp(xapi);
                self.xapiGen.addVerb(xapi, "http://adlnet.gov/expapi/verbs/logged-in", "logged-in");
                self.pebl.storage.getCurrentBook(function (book) {
                    if (book)
                        self.xapiGen.addObject(xapi, PEBL_PREFIX + book, undefined, undefined, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(self.xapiGen.addPeblContextExtensions(exts, userProfile)));
                    else
                        self.xapiGen.addObject(xapi, PEBL_PREFIX + "Harness", undefined, undefined, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(self.xapiGen.addPeblContextExtensions(exts, userProfile)));
                    self.xapiGen.addActorAccount(xapi, userProfile);
                    var session = new Session(xapi);
                    self.pebl.storage.saveEvent(userProfile, session);
                    self.pebl.storage.saveOutgoingXApi(userProfile, {
                        identity: userProfile.identity,
                        id: session.id,
                        requestType: "saveSessions",
                        sessions: [session]
                    });
                });
            }
        });
    };
    PEBLEventHandlers.prototype.eventLogout = function (event) {
        var payload = event.detail;
        var xapi = {};
        var self = this;
        var exts = {};
        self.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                self.xapiGen.addId(xapi);
                self.xapiGen.addTimestamp(xapi);
                self.xapiGen.addVerb(xapi, "http://adlnet.gov/expapi/verbs/logged-out", "logged-out");
                self.pebl.storage.getCurrentBook(function (book) {
                    if (book)
                        self.xapiGen.addObject(xapi, PEBL_PREFIX + book, undefined, undefined, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(self.xapiGen.addPeblContextExtensions(exts, userProfile)));
                    else
                        self.xapiGen.addObject(xapi, PEBL_PREFIX + "Harness", undefined, undefined, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(self.xapiGen.addPeblContextExtensions(exts, userProfile)));
                    self.xapiGen.addActorAccount(xapi, userProfile);
                    var session = new Session(xapi);
                    self.pebl.storage.saveEvent(userProfile, session);
                    self.pebl.storage.saveOutgoingXApi(userProfile, {
                        identity: userProfile.identity,
                        id: session.id,
                        requestType: "saveSessions",
                        sessions: [session]
                    });
                });
            }
        });
    };
    // -------------------------------
    PEBLEventHandlers.prototype.eventModuleRating = function (event) {
        var payload = event.detail;
        var xapi = {};
        var self = this;
        var exts = {
            idref: payload.idref,
            programId: payload.programId
        };
        this.pebl.storage.getCurrentBook(function (book) {
            self.pebl.storage.getCurrentActivity(function (activity) {
                self.pebl.user.getUser(function (userProfile) {
                    if (userProfile) {
                        self.xapiGen.addId(xapi);
                        self.xapiGen.addVerb(xapi, "http://www.peblproject.com/definitions.html#moduleRating", "moduleRating");
                        self.xapiGen.addTimestamp(xapi);
                        self.xapiGen.addActorAccount(xapi, userProfile);
                        self.xapiGen.addObject(xapi, PEBL_PREFIX + book, payload.rating, payload.description, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(self.xapiGen.addPeblContextExtensions(exts, userProfile)));
                        if (activity)
                            self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + activity);
                        var mr = new ModuleRating(xapi);
                        self.pebl.storage.saveOutgoingXApi(userProfile, {
                            identity: userProfile.identity,
                            id: mr.id,
                            requestType: "saveModuleEvents",
                            events: [mr]
                        });
                    }
                });
            });
        });
    };
    PEBLEventHandlers.prototype.eventModuleFeedback = function (event) {
        var payload = event.detail;
        var xapi = {};
        var self = this;
        var exts = {
            willingToDiscuss: payload.willingToDiscuss,
            idref: payload.idref,
            programId: payload.programId
        };
        this.pebl.storage.getCurrentBook(function (book) {
            self.pebl.storage.getCurrentActivity(function (activity) {
                self.pebl.user.getUser(function (userProfile) {
                    if (userProfile) {
                        self.xapiGen.addId(xapi);
                        self.xapiGen.addVerb(xapi, "http://www.peblproject.com/definitions.html#moduleFeedback", "moduleFeedback");
                        self.xapiGen.addTimestamp(xapi);
                        self.xapiGen.addActorAccount(xapi, userProfile);
                        self.xapiGen.addObject(xapi, self.xapiGen.addPeblActivity(payload.activityURI, payload.activityType, payload.activityId), payload.feedback, payload.description, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(self.xapiGen.addPeblContextExtensions(exts, userProfile)));
                        if (activity)
                            self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + activity);
                        var mf = new ModuleFeedback(xapi);
                        self.pebl.storage.saveOutgoingXApi(userProfile, {
                            identity: userProfile.identity,
                            id: mf.id,
                            requestType: "saveModuleEvents",
                            events: [mf]
                        });
                    }
                });
            });
        });
    };
    PEBLEventHandlers.prototype.eventModuleExample = function (event) {
        var payload = event.detail;
        var xapi = {};
        var self = this;
        var exts = {
            idref: payload.idref,
            youtubeUrl: payload.youtubeUrl,
            imageUrl: payload.imageUrl,
            websiteUrl: payload.websiteUrl,
            quotedPerson: payload.quotedPerson,
            quotedTeam: payload.quotedTeam
        };
        this.pebl.storage.getCurrentBook(function (book) {
            self.pebl.storage.getCurrentActivity(function (activity) {
                self.pebl.user.getUser(function (userProfile) {
                    if (userProfile) {
                        self.xapiGen.addId(xapi);
                        self.xapiGen.addVerb(xapi, "http://www.peblproject.com/definitions.html#moduleExample", "moduleExample");
                        self.xapiGen.addTimestamp(xapi);
                        self.xapiGen.addActorAccount(xapi, userProfile);
                        self.xapiGen.addObject(xapi, PEBL_PREFIX + book, payload.example, payload.description, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(self.xapiGen.addPeblContextExtensions(exts, userProfile)));
                        if (activity)
                            self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + activity);
                        var me = new ModuleExample(xapi);
                        self.pebl.storage.saveOutgoingXApi(userProfile, {
                            identity: userProfile.identity,
                            id: me.id,
                            requestType: "saveModuleEvents",
                            events: [me]
                        });
                        self.pebl.emitEvent(self.pebl.events.incomingModuleEvents, [me]);
                    }
                });
            });
        });
    };
    PEBLEventHandlers.prototype.eventModuleExampleRating = function (event) {
        var payload = event.detail;
        var xapi = {};
        var self = this;
        var exts = {
            idref: payload.idref,
            programId: payload.programId,
            exampleId: payload.exampleId
        };
        this.pebl.storage.getCurrentBook(function (book) {
            self.pebl.storage.getCurrentActivity(function (activity) {
                self.pebl.user.getUser(function (userProfile) {
                    if (userProfile) {
                        self.xapiGen.addId(xapi);
                        self.xapiGen.addVerb(xapi, "http://www.peblproject.com/definitions.html#moduleExampleRating", "moduleExampleRating");
                        self.xapiGen.addTimestamp(xapi);
                        self.xapiGen.addActorAccount(xapi, userProfile);
                        self.xapiGen.addObject(xapi, PEBL_PREFIX + book, payload.rating, payload.description, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(exts));
                        if (activity)
                            self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + activity);
                        var mer = new ModuleExampleRating(xapi);
                        self.pebl.storage.saveOutgoingXApi(userProfile, {
                            identity: userProfile.identity,
                            id: mer.id,
                            requestType: "saveModuleEvents",
                            events: [mer]
                        });
                    }
                });
            });
        });
    };
    PEBLEventHandlers.prototype.eventModuleExampleFeedback = function (event) {
        var payload = event.detail;
        var xapi = {};
        var self = this;
        var exts = {
            willingToDiscuss: payload.willingToDiscuss,
            idref: payload.idref,
            programId: payload.programId,
            exampleId: payload.exampleId
        };
        this.pebl.storage.getCurrentBook(function (book) {
            self.pebl.storage.getCurrentActivity(function (activity) {
                self.pebl.user.getUser(function (userProfile) {
                    if (userProfile) {
                        self.xapiGen.addId(xapi);
                        self.xapiGen.addVerb(xapi, "http://www.peblproject.com/definitions.html#moduleExampleFeedback", "moduleExampleFeedback");
                        self.xapiGen.addTimestamp(xapi);
                        self.xapiGen.addActorAccount(xapi, userProfile);
                        self.xapiGen.addObject(xapi, PEBL_PREFIX + book, payload.feedback, payload.description, self.xapiGen.addPeblActivity(undefined, payload.activityType, undefined), self.xapiGen.addExtensions(exts));
                        if (activity)
                            self.xapiGen.addParentActivity(xapi, PEBL_PREFIX + activity);
                        var mef = new ModuleExampleFeedback(xapi);
                        self.pebl.storage.saveOutgoingXApi(userProfile, {
                            identity: userProfile.identity,
                            id: mef.id,
                            requestType: "saveModuleEvents",
                            events: [mef]
                        });
                    }
                });
            });
        });
    };
    PEBLEventHandlers.prototype.moduleRemovedEvent = function (event) {
        var payload = event.detail;
        var voidXapi = {};
        // let eventXapi = {};
        var self = this;
        // let exts = {
        //     type: payload.type
        // }
        this.pebl.user.getUser(function (userProfile) {
            if (userProfile) {
                self.pebl.storage.getCurrentActivity(function (activity) {
                    self.pebl.storage.getCurrentBook(function (book) {
                        self.xapiGen.addId(voidXapi);
                        self.xapiGen.addVerb(voidXapi, "http://adlnet.gov/expapi/verbs/voided", "voided");
                        self.xapiGen.addTimestamp(voidXapi);
                        self.xapiGen.addStatementRef(voidXapi, payload.eventId);
                        self.xapiGen.addActorAccount(voidXapi, userProfile);
                        if (activity)
                            self.xapiGen.addParentActivity(voidXapi, PEBL_PREFIX + activity);
                        var voided = new Voided(voidXapi);
                        self.pebl.storage.saveOutgoingXApi(userProfile, {
                            identity: userProfile.identity,
                            id: voided.id,
                            xId: payload.eventId,
                            requestType: "deleteModuleEvent"
                        });
                        // Send event to everyone to remove that module event from their local storage
                        // self.xapiGen.addId(eventXapi);
                        // self.xapiGen.addVerb(eventXapi, "http://www.peblproject.com/definitions.html#moduleRemovedEvent", "moduleRemovedEvent");
                        // self.xapiGen.addTimestamp(eventXapi);
                        // self.xapiGen.addActorAccount(eventXapi, userProfile);
                        // self.xapiGen.addObject(eventXapi, PEBL_PREFIX + book, payload.idref, payload.eventId, self.xapiGen.addExtensions(exts));
                        // if (activity)
                        //     self.xapiGen.addParentActivity(eventXapi, PEBL_PREFIX + activity);
                        // let mre = new ModuleRemovedEvent(eventXapi);
                        // self.pebl.storage.saveOutgoingXApi(userProfile, mre);
                        // self.pebl.emitEvent(self.pebl.events.incomingModuleEvents, [mre]); //TODO
                    });
                });
            }
        });
    };
    PEBLEventHandlers.prototype.incomingModuleEvents = function (event) {
        var self = this;
        var events = event.detail;
        for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
            var event_1 = events_1[_i];
            if (event_1.verb.display['en-US'] === 'moduleRemovedEvent') {
                self.pebl.storage.removeModuleEvent(event_1.idref, event_1.eventId);
            }
        }
    };
    return PEBLEventHandlers;
}());


// CONCATENATED MODULE: ./src/pebl.ts
var pebl_USER_PREFIX = "_user-";
var pebl_GROUP_PREFIX = "_group-";

// import { Activity } from "./activity";


// import { Messenger } from "./messenger";



var pebl_PEBL = /** @class */ (function () {
    // readonly launcher: LauncherAdapter;
    function PEBL(config, callback) {
        this.firedEvents = [];
        this.subscribedEventHandlers = {};
        this.subscribedSingularEventHandlers = {};
        this.subscribedThreadHandlers = {};
        this.loaded = false;
        this.extension = {};
        // this.extension.shared = {};
        this.config = config;
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
        this.utils = new utils_Utils(this);
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
        for (var _d = 0, _e = Object.keys(this.subscribedSingularEventHandlers); _d < _e.length; _d++) {
            var key = _e[_d];
            for (var _f = 0, _g = Object.keys(this.subscribedSingularEventHandlers[key]); _f < _g.length; _f++) {
                var pack = _g[_f];
                document.removeEventListener(key, this.subscribedSingularEventHandlers[key][pack].modifiedFn);
            }
            delete this.subscribedSingularEventHandlers[key];
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
        if (this.subscribedEventHandlers[eventName]) {
            for (var _i = 0, _a = this.subscribedEventHandlers[eventName]; _i < _a.length; _i++) {
                var pack = _a[_i];
                if ((pack.once == once) && (pack.fn == callback)) {
                    document.removeEventListener(eventName, pack.modifiedFn);
                    this.subscribedEventHandlers[eventName].splice(i, 1);
                    return;
                }
                i++;
            }
        }
    };
    PEBL.prototype.unsubscribeSingularEvent = function (eventName, id) {
        if (this.subscribedSingularEventHandlers[eventName] && this.subscribedSingularEventHandlers[eventName][id]) {
            document.removeEventListener(eventName, this.subscribedSingularEventHandlers[eventName][id].modifiedFn);
            delete this.subscribedSingularEventHandlers[eventName][id];
        }
    };
    PEBL.prototype.unsubscribeThread = function (baseThread, once, callback, options) {
        var _this = this;
        this.user.getUser(function (userProfile) {
            if (userProfile) {
                var thread = baseThread;
                if (options && options.groupId) {
                    thread = baseThread + pebl_GROUP_PREFIX + options.groupId;
                }
                else if (options && options.isPrivate) {
                    thread = baseThread + pebl_USER_PREFIX + userProfile.identity;
                }
                var message = {
                    id: _this.utils.getUuid(),
                    identity: userProfile.identity,
                    requestType: "unsubscribeThread",
                    thread: baseThread,
                    options: options
                };
                _this.storage.saveOutgoingXApi(userProfile, message);
                var i = 0;
                if (_this.subscribedThreadHandlers[thread]) {
                    for (var _i = 0, _a = _this.subscribedThreadHandlers[thread]; _i < _a.length; _i++) {
                        var pack = _a[_i];
                        if ((pack.once == once) && (pack.fn == callback)) {
                            document.removeEventListener(thread, pack.modifiedFn);
                            _this.subscribedThreadHandlers[thread].splice(i, 1);
                            return;
                        }
                        i++;
                    }
                }
            }
        });
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
        if (eventName == self.events.incomingAnnotations) {
            self.utils.getAnnotations(function (annotations) {
                callback(annotations);
            });
        }
        else if (eventName == self.events.incomingSharedAnnotations) {
            self.utils.getSharedAnnotations(function (annotations) {
                callback(annotations);
            });
        }
        else if (eventName == self.events.incomingPresence) {
            self.network.retrievePresence();
        }
        else if (eventName == self.events.incomingProgram) {
            self.utils.getPrograms(function (programs) {
                callback(programs);
            });
        }
        else if (eventName == self.events.incomingMembership) {
            self.utils.getGroupMemberships(function (groups) {
                callback(groups);
            });
        }
    };
    PEBL.prototype.subscribeSingularEvent = function (eventName, id, once, callback) {
        this.unsubscribeSingularEvent(eventName, id);
        if (!this.subscribedSingularEventHandlers[eventName])
            this.subscribedSingularEventHandlers[eventName] = {};
        var self = this;
        if (once) {
            var modifiedHandler = function (e) {
                self.unsubscribeSingularEvent(eventName, id);
                callback(e.detail);
            };
            document.addEventListener(eventName, modifiedHandler, { once: once });
            this.subscribedSingularEventHandlers[eventName][id] = { once: once, fn: callback, modifiedFn: modifiedHandler };
        }
        else {
            var modifiedHandler = function (e) { callback(e.detail); };
            document.addEventListener(eventName, modifiedHandler);
            this.subscribedSingularEventHandlers[eventName][id] = { once: once, fn: callback, modifiedFn: modifiedHandler };
        }
        if (eventName == self.events.incomingAnnotations) {
            self.utils.getAnnotations(function (annotations) {
                callback(annotations);
            });
        }
        else if (eventName == self.events.incomingSharedAnnotations) {
            self.utils.getSharedAnnotations(function (annotations) {
                callback(annotations);
            });
        }
        else if (eventName == self.events.incomingPresence) {
            self.network.retrievePresence();
        }
        else if (eventName == self.events.incomingProgram) {
            self.utils.getPrograms(function (programs) {
                callback(programs);
            });
        }
        else if (eventName == self.events.incomingMembership) {
            self.utils.getGroupMemberships(function (groups) {
                callback(groups);
            });
        }
    };
    //fix once for return of getMessages
    PEBL.prototype.subscribeThread = function (baseThread, once, callback, options) {
        var _this = this;
        this.user.getUser(function (userProfile) {
            if (userProfile) {
                var thread_1 = baseThread;
                if (options && options.groupId) {
                    thread_1 = thread_1 + pebl_GROUP_PREFIX + options.groupId;
                }
                else if (options && options.isPrivate) {
                    thread_1 = thread_1 + pebl_USER_PREFIX + userProfile.identity;
                }
                var firstRegistration = true;
                var threadCallbacks = _this.subscribedThreadHandlers[thread_1];
                if (!threadCallbacks) {
                    threadCallbacks = [];
                    _this.subscribedThreadHandlers[thread_1] = threadCallbacks;
                }
                else {
                    firstRegistration = false;
                }
                if (once) {
                    var modifiedHandler = (function (e) {
                        _this.unsubscribeEvent(thread_1, once, callback);
                        callback(e.detail);
                    });
                    document.addEventListener(thread_1, modifiedHandler, { once: once });
                    threadCallbacks.push({ once: once, fn: callback, modifiedFn: modifiedHandler });
                }
                else {
                    var modifiedHandler = (function (e) { callback(e.detail); });
                    document.addEventListener(thread_1, modifiedHandler);
                    threadCallbacks.push({ once: once, fn: callback, modifiedFn: modifiedHandler });
                }
                if (firstRegistration) {
                    _this.storage.saveOutgoingXApi(userProfile, {
                        id: _this.utils.getUuid(),
                        identity: userProfile.identity,
                        requestType: "getThreadedMessages",
                        requests: [{
                                thread: baseThread,
                                options: options,
                                timestamp: 1
                            }]
                    });
                    _this.storage.saveOutgoingXApi(userProfile, {
                        id: _this.utils.getUuid(),
                        identity: userProfile.identity,
                        requestType: "subscribeThread",
                        thread: baseThread,
                        options: options
                    });
                }
                _this.storage.getMessages(userProfile, thread_1, callback);
            }
            else {
                callback([]);
            }
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });

var core = new pebl_PEBL(window.PeBLConfig, window.PeBLLoaded);
var install = function (vue, options) {
    vue.prototype.$PeBL = core;
    vue.prototype.$PeBLEvents = core.events;
    vue.prototype.$PeBLUtils = core.utils;
    vue.prototype.$PeBLUser = core.user;
};
if (typeof window !== 'undefined') {
    window.PeBL = core;
    if (window.Vue) {
        window.Vue.use({ install: install });
    }
}


/***/ })
/******/ ]);