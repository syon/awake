/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ((function(modules) {
	// Check all modules for deduplicated modules
	for(var i in modules) {
		if(Object.prototype.hasOwnProperty.call(modules, i)) {
			switch(typeof modules[i]) {
			case "function": break;
			case "object":
				// Module can be created from a template
				modules[i] = (function(_m) {
					var args = _m.slice(1), fn = modules[_m[0]];
					return function (a,b,c) {
						fn.apply(this, [a,b,c].concat(args));
					};
				}(modules[i]));
				break;
			default:
				// Module is a copy of another module
				modules[i] = modules[modules[i]];
				break;
			}
		}
	}
	return modules;
}([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	__webpack_require__(28);
	
	__webpack_require__(8);
	
	__webpack_require__(29);
	
	var _awake = __webpack_require__(5);
	
	var _awake2 = _interopRequireDefault(_awake);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _awake2.default)();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v3.1.1
	 * https://jquery.com/
	 *
	 * Includes Sizzle.js
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * https://jquery.org/license
	 *
	 * Date: 2016-09-22T22:30Z
	 */
	( function( global, factory ) {
	
		"use strict";
	
		if ( typeof module === "object" && typeof module.exports === "object" ) {
	
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}
	
	// Pass this if window is not defined yet
	} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {
	
	// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
	// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
	// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
	// enough that all such attempts are guarded in a try block.
	"use strict";
	
	var arr = [];
	
	var document = window.document;
	
	var getProto = Object.getPrototypeOf;
	
	var slice = arr.slice;
	
	var concat = arr.concat;
	
	var push = arr.push;
	
	var indexOf = arr.indexOf;
	
	var class2type = {};
	
	var toString = class2type.toString;
	
	var hasOwn = class2type.hasOwnProperty;
	
	var fnToString = hasOwn.toString;
	
	var ObjectFunctionString = fnToString.call( Object );
	
	var support = {};
	
	
	
		function DOMEval( code, doc ) {
			doc = doc || document;
	
			var script = doc.createElement( "script" );
	
			script.text = code;
			doc.head.appendChild( script ).parentNode.removeChild( script );
		}
	/* global Symbol */
	// Defining this global in .eslintrc.json would create a danger of using the global
	// unguarded in another place, it seems safer to define global only for this module
	
	
	
	var
		version = "3.1.1",
	
		// Define a local copy of jQuery
		jQuery = function( selector, context ) {
	
			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},
	
		// Support: Android <=4.0 only
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	
		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([a-z])/g,
	
		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};
	
	jQuery.fn = jQuery.prototype = {
	
		// The current version of jQuery being used
		jquery: version,
	
		constructor: jQuery,
	
		// The default length of a jQuery object is 0
		length: 0,
	
		toArray: function() {
			return slice.call( this );
		},
	
		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
	
			// Return all the elements in a clean array
			if ( num == null ) {
				return slice.call( this );
			}
	
			// Return just the one element from the set
			return num < 0 ? this[ num + this.length ] : this[ num ];
		},
	
		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {
	
			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );
	
			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
	
			// Return the newly-formed element set
			return ret;
		},
	
		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},
	
		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},
	
		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},
	
		first: function() {
			return this.eq( 0 );
		},
	
		last: function() {
			return this.eq( -1 );
		},
	
		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},
	
		end: function() {
			return this.prevObject || this.constructor();
		},
	
		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};
	
	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;
	
		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;
	
			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}
	
		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}
	
		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}
	
		for ( ; i < length; i++ ) {
	
			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {
	
				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];
	
					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}
	
					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {
	
						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];
	
						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}
	
						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );
	
					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}
	
		// Return the modified object
		return target;
	};
	
	jQuery.extend( {
	
		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),
	
		// Assume jQuery is ready without the ready module
		isReady: true,
	
		error: function( msg ) {
			throw new Error( msg );
		},
	
		noop: function() {},
	
		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},
	
		isArray: Array.isArray,
	
		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},
	
		isNumeric: function( obj ) {
	
			// As of jQuery 3.0, isNumeric is limited to
			// strings and numbers (primitives or objects)
			// that can be coerced to finite numbers (gh-2662)
			var type = jQuery.type( obj );
			return ( type === "number" || type === "string" ) &&
	
				// parseFloat NaNs numeric-cast false positives ("")
				// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
				// subtraction forces infinities to NaN
				!isNaN( obj - parseFloat( obj ) );
		},
	
		isPlainObject: function( obj ) {
			var proto, Ctor;
	
			// Detect obvious negatives
			// Use toString instead of jQuery.type to catch host objects
			if ( !obj || toString.call( obj ) !== "[object Object]" ) {
				return false;
			}
	
			proto = getProto( obj );
	
			// Objects with no prototype (e.g., `Object.create( null )`) are plain
			if ( !proto ) {
				return true;
			}
	
			// Objects with prototype are plain iff they were constructed by a global Object function
			Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
			return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
		},
	
		isEmptyObject: function( obj ) {
	
			/* eslint-disable no-unused-vars */
			// See https://github.com/eslint/eslint/issues/6125
			var name;
	
			for ( name in obj ) {
				return false;
			}
			return true;
		},
	
		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}
	
			// Support: Android <=2.3 only (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},
	
		// Evaluates a script in a global context
		globalEval: function( code ) {
			DOMEval( code );
		},
	
		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE <=9 - 11, Edge 12 - 13
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},
	
		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},
	
		each: function( obj, callback ) {
			var length, i = 0;
	
			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}
	
			return obj;
		},
	
		// Support: Android <=4.0 only
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},
	
		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];
	
			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}
	
			return ret;
		},
	
		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},
	
		// Support: Android <=4.0 only, PhantomJS 1 only
		// push.apply(_, arraylike) throws on ancient WebKit
		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;
	
			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}
	
			first.length = i;
	
			return first;
		},
	
		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;
	
			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}
	
			return matches;
		},
	
		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];
	
			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );
	
					if ( value != null ) {
						ret.push( value );
					}
				}
	
			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );
	
					if ( value != null ) {
						ret.push( value );
					}
				}
			}
	
			// Flatten any nested arrays
			return concat.apply( [], ret );
		},
	
		// A global GUID counter for objects
		guid: 1,
	
		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;
	
			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}
	
			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}
	
			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};
	
			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;
	
			return proxy;
		},
	
		now: Date.now,
	
		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );
	
	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}
	
	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );
	
	function isArrayLike( obj ) {
	
		// Support: real iOS 8.2 only (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );
	
		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}
	
		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.3.3
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-08-08
	 */
	(function( window ) {
	
	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,
	
		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,
	
		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},
	
		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// https://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},
	
		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
	
		// Regular expressions
	
		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",
	
		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
	
		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",
	
		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",
	
		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),
	
		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
	
		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),
	
		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),
	
		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},
	
		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,
	
		rnative = /^[^{]+\{\s*\[native \w/,
	
		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
	
		rsibling = /[+~]/,
	
		// CSS escapes
		// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},
	
		// CSS string/identifier serialization
		// https://drafts.csswg.org/cssom/#common-serializing-idioms
		rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
		fcssescape = function( ch, asCodePoint ) {
			if ( asCodePoint ) {
	
				// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
				if ( ch === "\0" ) {
					return "\uFFFD";
				}
	
				// Control characters and (dependent upon position) numbers get escaped as code points
				return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
			}
	
			// Other potentially-special ASCII characters get backslash-escaped
			return "\\" + ch;
		},
	
		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		},
	
		disabledAncestor = addCombinator(
			function( elem ) {
				return elem.disabled === true && ("form" in elem || "label" in elem);
			},
			{ dir: "parentNode", next: "legend" }
		);
	
	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?
	
			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :
	
			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}
	
	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, match, groups, newSelector,
			newContext = context && context.ownerDocument,
	
			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;
	
		results = results || [];
	
		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {
	
			return results;
		}
	
		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {
	
			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;
	
			if ( documentIsHTML ) {
	
				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
	
					// ID selector
					if ( (m = match[1]) ) {
	
						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {
	
								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}
	
						// Element context
						} else {
	
							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {
	
								results.push( elem );
								return results;
							}
						}
	
					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;
	
					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {
	
						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}
	
				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
	
					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;
	
					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {
	
						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}
	
						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						while ( i-- ) {
							groups[i] = "#" + nid + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );
	
						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}
	
					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}
	
		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}
	
	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];
	
		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}
	
	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}
	
	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created element and returns a boolean result
	 */
	function assert( fn ) {
		var el = document.createElement("fieldset");
	
		try {
			return !!fn( el );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( el.parentNode ) {
				el.parentNode.removeChild( el );
			}
			// release memory in IE
			el = null;
		}
	}
	
	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;
	
		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}
	
	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				a.sourceIndex - b.sourceIndex;
	
		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}
	
		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}
	
		return a ? 1 : -1;
	}
	
	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for :enabled/:disabled
	 * @param {Boolean} disabled true for :disabled; false for :enabled
	 */
	function createDisabledPseudo( disabled ) {
	
		// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
		return function( elem ) {
	
			// Only certain elements can match :enabled or :disabled
			// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
			// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
			if ( "form" in elem ) {
	
				// Check for inherited disabledness on relevant non-disabled elements:
				// * listed form-associated elements in a disabled fieldset
				//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
				//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
				// * option elements in a disabled optgroup
				//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
				// All such elements have a "form" property.
				if ( elem.parentNode && elem.disabled === false ) {
	
					// Option elements defer to a parent optgroup if present
					if ( "label" in elem ) {
						if ( "label" in elem.parentNode ) {
							return elem.parentNode.disabled === disabled;
						} else {
							return elem.disabled === disabled;
						}
					}
	
					// Support: IE 6 - 11
					// Use the isDisabled shortcut property to check for disabled fieldset ancestors
					return elem.isDisabled === disabled ||
	
						// Where there is no isDisabled, check manually
						/* jshint -W018 */
						elem.isDisabled !== !disabled &&
							disabledAncestor( elem ) === disabled;
				}
	
				return elem.disabled === disabled;
	
			// Try to winnow out elements that can't be disabled before trusting the disabled property.
			// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
			// even exist on them, let alone have a boolean value.
			} else if ( "label" in elem ) {
				return elem.disabled === disabled;
			}
	
			// Remaining elements are neither :enabled nor :disabled
			return false;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;
	
				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}
	
	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}
	
	// Expose support vars for convenience
	support = Sizzle.support = {};
	
	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};
	
	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, subWindow,
			doc = node ? node.ownerDocument || node : preferredDoc;
	
		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}
	
		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );
	
		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( preferredDoc !== document &&
			(subWindow = document.defaultView) && subWindow.top !== subWindow ) {
	
			// Support: IE 11, Edge
			if ( subWindow.addEventListener ) {
				subWindow.addEventListener( "unload", unloadHandler, false );
	
			// Support: IE 9 - 10 only
			} else if ( subWindow.attachEvent ) {
				subWindow.attachEvent( "onunload", unloadHandler );
			}
		}
	
		/* Attributes
		---------------------------------------------------------------------- */
	
		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( el ) {
			el.className = "i";
			return !el.getAttribute("className");
		});
	
		/* getElement(s)By*
		---------------------------------------------------------------------- */
	
		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( el ) {
			el.appendChild( document.createComment("") );
			return !el.getElementsByTagName("*").length;
		});
	
		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );
	
		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programmatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( el ) {
			docElem.appendChild( el ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});
	
		// ID filter and find
		if ( support.getById ) {
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var elem = context.getElementById( id );
					return elem ? [ elem ] : [];
				}
			};
		} else {
			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
	
			// Support: IE 6 - 7 only
			// getElementById is not reliable as a find shortcut
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var node, i, elems,
						elem = context.getElementById( id );
	
					if ( elem ) {
	
						// Verify the id attribute
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
	
						// Fall back on getElementsByName
						elems = context.getElementsByName( id );
						i = 0;
						while ( (elem = elems[i++]) ) {
							node = elem.getAttributeNode("id");
							if ( node && node.value === id ) {
								return [ elem ];
							}
						}
					}
	
					return [];
				}
			};
		}
	
		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );
	
				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :
	
			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );
	
				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}
	
					return tmp;
				}
				return results;
			};
	
		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};
	
		/* QSA/matchesSelector
		---------------------------------------------------------------------- */
	
		// QSA and matchesSelector support
	
		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];
	
		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See https://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];
	
		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( el ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// https://bugs.jquery.com/ticket/12359
				docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";
	
				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( el.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}
	
				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !el.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}
	
				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}
	
				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !el.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}
	
				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibling-combinator selector` fails
				if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});
	
			assert(function( el ) {
				el.innerHTML = "<a href='' disabled='disabled'></a>" +
					"<select disabled='disabled'><option/></select>";
	
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				el.appendChild( input ).setAttribute( "name", "D" );
	
				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( el.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}
	
				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( el.querySelectorAll(":enabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}
	
				// Support: IE9-11+
				// IE's :disabled selector does not pick up the children of disabled fieldsets
				docElem.appendChild( el ).disabled = true;
				if ( el.querySelectorAll(":disabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}
	
				// Opera 10-11 does not throw on post-comma invalid pseudos
				el.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}
	
		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {
	
			assert(function( el ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( el, "*" );
	
				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( el, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}
	
		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );
	
		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );
	
		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};
	
		/* Sorting
		---------------------------------------------------------------------- */
	
		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {
	
			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}
	
			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}
	
			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :
	
				// Otherwise we know they are disconnected
				1;
	
			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {
	
				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}
	
				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}
	
			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}
	
			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];
	
			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
	
			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}
	
			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}
	
			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}
	
			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :
	
				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};
	
		return document;
	};
	
	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};
	
	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}
	
		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );
	
		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {
	
			try {
				var ret = matches.call( elem, expr );
	
				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}
	
		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};
	
	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};
	
	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}
	
		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;
	
		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};
	
	Sizzle.escape = function( sel ) {
		return (sel + "").replace( rcssescape, fcssescape );
	};
	
	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};
	
	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;
	
		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );
	
		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}
	
		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;
	
		return results;
	};
	
	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;
	
		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes
	
		return ret;
	};
	
	Expr = Sizzle.selectors = {
	
		// Can be adjusted by the user
		cacheLength: 50,
	
		createPseudo: markFunction,
	
		match: matchExpr,
	
		attrHandle: {},
	
		find: {},
	
		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},
	
		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );
	
				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );
	
				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}
	
				return match.slice( 0, 4 );
			},
	
			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();
	
				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}
	
					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );
	
				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}
	
				return match;
			},
	
			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];
	
				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}
	
				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";
	
				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {
	
					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}
	
				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},
	
		filter: {
	
			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},
	
			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];
	
				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},
	
			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );
	
					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}
	
					result += "";
	
					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},
	
			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";
	
				return first === 1 && last === 0 ?
	
					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :
	
					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;
	
						if ( parent ) {
	
							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {
	
											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}
	
							start = [ forward ? parent.firstChild : parent.lastChild ];
	
							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {
	
								// Seek `elem` from a previously-cached index
	
								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});
	
								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});
	
								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];
	
								while ( (node = ++nodeIndex && node && node[ dir ] ||
	
									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {
	
									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}
	
							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});
	
									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});
	
									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}
	
								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {
	
										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {
	
											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});
	
												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});
	
												uniqueCache[ type ] = [ dirruns, diff ];
											}
	
											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}
	
							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},
	
			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );
	
				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}
	
				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}
	
				return fn;
			}
		},
	
		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );
	
				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;
	
						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),
	
			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),
	
			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),
	
			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {
	
							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),
	
			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},
	
			"root": function( elem ) {
				return elem === docElem;
			},
	
			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},
	
			// Boolean properties
			"enabled": createDisabledPseudo( false ),
			"disabled": createDisabledPseudo( true ),
	
			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},
	
			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}
	
				return elem.selected === true;
			},
	
			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},
	
			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},
	
			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},
	
			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},
	
			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},
	
			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&
	
					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},
	
			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),
	
			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),
	
			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),
	
			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};
	
	Expr.pseudos["nth"] = Expr.pseudos["eq"];
	
	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}
	
	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();
	
	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];
	
		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}
	
		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;
	
		while ( soFar ) {
	
			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}
	
			matched = false;
	
			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}
	
			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}
	
			if ( !matched ) {
				break;
			}
		}
	
		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};
	
	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}
	
	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			skip = combinator.next,
			key = skip || dir,
			checkNonElements = base && key === "parentNode",
			doneName = done++;
	
		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
				return false;
			} :
	
			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];
	
				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});
	
							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});
	
							if ( skip && skip === elem.nodeName.toLowerCase() ) {
								elem = elem[ dir ] || elem;
							} else if ( (oldCache = uniqueCache[ key ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {
	
								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ key ] = newCache;
	
								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
				return false;
			};
	}
	
	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}
	
	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}
	
	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;
	
		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}
	
		return newUnmatched;
	}
	
	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,
	
				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),
	
				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,
	
				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?
	
						// ...intermediate processing is necessary
						[] :
	
						// ...otherwise use results directly
						results :
					matcherIn;
	
			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}
	
			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );
	
				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}
	
			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}
	
					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {
	
							seed[temp] = !(results[temp] = elem);
						}
					}
				}
	
			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}
	
	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,
	
			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];
	
		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );
	
				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}
	
		return elementMatcher( matchers );
	}
	
	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;
	
				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}
	
				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}
	
					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}
	
						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}
	
				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;
	
				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}
	
					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}
	
						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}
	
					// Add matches to results
					push.apply( results, setMatched );
	
					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {
	
						Sizzle.uniqueSort( results );
					}
				}
	
				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}
	
				return unmatched;
			};
	
		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}
	
	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];
	
		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}
	
			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
	
			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};
	
	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );
	
		results = results || [];
	
		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {
	
			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {
	
				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;
	
				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}
	
				selector = selector.slice( tokens.shift().value.length );
			}
	
			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];
	
				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {
	
						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}
	
						break;
					}
				}
			}
		}
	
		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};
	
	// One-time assignments
	
	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;
	
	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;
	
	// Initialize against the default document
	setDocument();
	
	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( el ) {
		// Should return 1, but returns 4 (following)
		return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
	});
	
	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( el ) {
		el.innerHTML = "<a href='#'></a>";
		return el.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}
	
	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( el ) {
		el.innerHTML = "<input/>";
		el.firstChild.setAttribute( "value", "" );
		return el.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}
	
	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( el ) {
		return el.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}
	
	return Sizzle;
	
	})( window );
	
	
	
	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	
	// Deprecated
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	jQuery.escapeSelector = Sizzle.escape;
	
	
	
	
	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;
	
		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};
	
	
	var siblings = function( n, elem ) {
		var matched = [];
	
		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}
	
		return matched;
	};
	
	
	var rneedsContext = jQuery.expr.match.needsContext;
	
	var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );
	
	
	
	var risSimple = /^.[^:#\[\.,]*$/;
	
	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				return !!qualifier.call( elem, i, elem ) !== not;
			} );
		}
	
		// Single element
		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );
		}
	
		// Arraylike of elements (jQuery, arguments, Array)
		if ( typeof qualifier !== "string" ) {
			return jQuery.grep( elements, function( elem ) {
				return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
			} );
		}
	
		// Simple selector that can be filtered directly, removing non-Elements
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}
	
		// Complex selector, compare the two sets, removing non-Elements
		qualifier = jQuery.filter( qualifier, elements );
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
		} );
	}
	
	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];
	
		if ( not ) {
			expr = ":not(" + expr + ")";
		}
	
		if ( elems.length === 1 && elem.nodeType === 1 ) {
			return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
		}
	
		return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		} ) );
	};
	
	jQuery.fn.extend( {
		find: function( selector ) {
			var i, ret,
				len = this.length,
				self = this;
	
			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}
	
			ret = this.pushStack( [] );
	
			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}
	
			return len > 1 ? jQuery.uniqueSort( ret ) : ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,
	
				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );
	
	
	// Initialize a jQuery object
	
	
	// A central reference to the root jQuery(document)
	var rootjQuery,
	
		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		// Shortcut simple #id case for speed
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
	
		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;
	
			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}
	
			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;
	
			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {
	
					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];
	
				} else {
					match = rquickExpr.exec( selector );
				}
	
				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {
	
					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;
	
						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );
	
						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {
	
								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );
	
								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}
	
						return this;
	
					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );
	
						if ( elem ) {
	
							// Inject the element directly into the jQuery object
							this[ 0 ] = elem;
							this.length = 1;
						}
						return this;
					}
	
				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );
	
				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}
	
			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this[ 0 ] = selector;
				this.length = 1;
				return this;
	
			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :
	
					// Execute immediately if ready is not present
					selector( jQuery );
			}
	
			return jQuery.makeArray( selector, this );
		};
	
	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;
	
	// Initialize central reference
	rootjQuery = jQuery( document );
	
	
	var rparentsprev = /^(?:parents|prev(?:Until|All))/,
	
		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};
	
	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;
	
			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},
	
		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				targets = typeof selectors !== "string" && jQuery( selectors );
	
			// Positional selectors never match, since there's no _selection_ context
			if ( !rneedsContext.test( selectors ) ) {
				for ( ; i < l; i++ ) {
					for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {
	
						// Always skip document fragments
						if ( cur.nodeType < 11 && ( targets ?
							targets.index( cur ) > -1 :
	
							// Don't pass non-elements to Sizzle
							cur.nodeType === 1 &&
								jQuery.find.matchesSelector( cur, selectors ) ) ) {
	
							matched.push( cur );
							break;
						}
					}
				}
			}
	
			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},
	
		// Determine the position of an element within the set
		index: function( elem ) {
	
			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}
	
			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}
	
			// Locate the position of the desired element
			return indexOf.call( this,
	
				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},
	
		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},
	
		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );
	
	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}
	
	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );
	
			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}
	
			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}
	
			if ( this.length > 1 ) {
	
				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}
	
				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}
	
			return this.pushStack( matched );
		};
	} );
	var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );
	
	
	
	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}
	
	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {
	
		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );
	
		var // Flag to know if list is currently firing
			firing,
	
			// Last fire value for non-forgettable lists
			memory,
	
			// Flag to know if list was already fired
			fired,
	
			// Flag to prevent firing
			locked,
	
			// Actual callback list
			list = [],
	
			// Queue of execution data for repeatable lists
			queue = [],
	
			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,
	
			// Fire callbacks
			fire = function() {
	
				// Enforce single-firing
				locked = options.once;
	
				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {
	
						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {
	
							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}
	
				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}
	
				firing = false;
	
				// Clean up if we're done firing for good
				if ( locked ) {
	
					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];
	
					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},
	
			// Actual Callbacks object
			self = {
	
				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {
	
						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}
	
						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {
	
									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );
	
						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},
	
				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );
	
							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},
	
				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},
	
				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},
	
				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},
	
				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory && !firing ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},
	
				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},
	
				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},
	
				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};
	
		return self;
	};
	
	
	function Identity( v ) {
		return v;
	}
	function Thrower( ex ) {
		throw ex;
	}
	
	function adoptValue( value, resolve, reject ) {
		var method;
	
		try {
	
			// Check for promise aspect first to privilege synchronous behavior
			if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
				method.call( value ).done( resolve ).fail( reject );
	
			// Other thenables
			} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
				method.call( value, resolve, reject );
	
			// Other non-thenables
			} else {
	
				// Support: Android 4.0 only
				// Strict mode functions invoked without .call/.apply get global-object context
				resolve.call( undefined, value );
			}
	
		// For Promises/A+, convert exceptions into rejections
		// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
		// Deferred#then to conditionally suppress rejection.
		} catch ( value ) {
	
			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			reject.call( undefined, value );
		}
	}
	
	jQuery.extend( {
	
		Deferred: function( func ) {
			var tuples = [
	
					// action, add listener, callbacks,
					// ... .then handlers, argument index, [final state]
					[ "notify", "progress", jQuery.Callbacks( "memory" ),
						jQuery.Callbacks( "memory" ), 2 ],
					[ "resolve", "done", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 0, "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 1, "rejected" ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					"catch": function( fn ) {
						return promise.then( null, fn );
					},
	
					// Keep pipe for back-compat
					pipe: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
	
						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
	
								// Map tuples (progress, done, fail) to arguments (done, fail, progress)
								var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];
	
								// deferred.progress(function() { bind to newDefer or newDefer.notify })
								// deferred.done(function() { bind to newDefer or newDefer.resolve })
								// deferred.fail(function() { bind to newDefer or newDefer.reject })
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},
					then: function( onFulfilled, onRejected, onProgress ) {
						var maxDepth = 0;
						function resolve( depth, deferred, handler, special ) {
							return function() {
								var that = this,
									args = arguments,
									mightThrow = function() {
										var returned, then;
	
										// Support: Promises/A+ section 2.3.3.3.3
										// https://promisesaplus.com/#point-59
										// Ignore double-resolution attempts
										if ( depth < maxDepth ) {
											return;
										}
	
										returned = handler.apply( that, args );
	
										// Support: Promises/A+ section 2.3.1
										// https://promisesaplus.com/#point-48
										if ( returned === deferred.promise() ) {
											throw new TypeError( "Thenable self-resolution" );
										}
	
										// Support: Promises/A+ sections 2.3.3.1, 3.5
										// https://promisesaplus.com/#point-54
										// https://promisesaplus.com/#point-75
										// Retrieve `then` only once
										then = returned &&
	
											// Support: Promises/A+ section 2.3.4
											// https://promisesaplus.com/#point-64
											// Only check objects and functions for thenability
											( typeof returned === "object" ||
												typeof returned === "function" ) &&
											returned.then;
	
										// Handle a returned thenable
										if ( jQuery.isFunction( then ) ) {
	
											// Special processors (notify) just wait for resolution
											if ( special ) {
												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special )
												);
	
											// Normal processors (resolve) also hook into progress
											} else {
	
												// ...and disregard older resolution values
												maxDepth++;
	
												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special ),
													resolve( maxDepth, deferred, Identity,
														deferred.notifyWith )
												);
											}
	
										// Handle all other returned values
										} else {
	
											// Only substitute handlers pass on context
											// and multiple values (non-spec behavior)
											if ( handler !== Identity ) {
												that = undefined;
												args = [ returned ];
											}
	
											// Process the value(s)
											// Default process is resolve
											( special || deferred.resolveWith )( that, args );
										}
									},
	
									// Only normal processors (resolve) catch and reject exceptions
									process = special ?
										mightThrow :
										function() {
											try {
												mightThrow();
											} catch ( e ) {
	
												if ( jQuery.Deferred.exceptionHook ) {
													jQuery.Deferred.exceptionHook( e,
														process.stackTrace );
												}
	
												// Support: Promises/A+ section 2.3.3.3.4.1
												// https://promisesaplus.com/#point-61
												// Ignore post-resolution exceptions
												if ( depth + 1 >= maxDepth ) {
	
													// Only substitute handlers pass on context
													// and multiple values (non-spec behavior)
													if ( handler !== Thrower ) {
														that = undefined;
														args = [ e ];
													}
	
													deferred.rejectWith( that, args );
												}
											}
										};
	
								// Support: Promises/A+ section 2.3.3.3.1
								// https://promisesaplus.com/#point-57
								// Re-resolve promises immediately to dodge false rejection from
								// subsequent errors
								if ( depth ) {
									process();
								} else {
	
									// Call an optional hook to record the stack, in case of exception
									// since it's otherwise lost when execution goes async
									if ( jQuery.Deferred.getStackHook ) {
										process.stackTrace = jQuery.Deferred.getStackHook();
									}
									window.setTimeout( process );
								}
							};
						}
	
						return jQuery.Deferred( function( newDefer ) {
	
							// progress_handlers.add( ... )
							tuples[ 0 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onProgress ) ?
										onProgress :
										Identity,
									newDefer.notifyWith
								)
							);
	
							// fulfilled_handlers.add( ... )
							tuples[ 1 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onFulfilled ) ?
										onFulfilled :
										Identity
								)
							);
	
							// rejected_handlers.add( ... )
							tuples[ 2 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onRejected ) ?
										onRejected :
										Thrower
								)
							);
						} ).promise();
					},
	
					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};
	
			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 5 ];
	
				// promise.progress = list.add
				// promise.done = list.add
				// promise.fail = list.add
				promise[ tuple[ 1 ] ] = list.add;
	
				// Handle state
				if ( stateString ) {
					list.add(
						function() {
	
							// state = "resolved" (i.e., fulfilled)
							// state = "rejected"
							state = stateString;
						},
	
						// rejected_callbacks.disable
						// fulfilled_callbacks.disable
						tuples[ 3 - i ][ 2 ].disable,
	
						// progress_callbacks.lock
						tuples[ 0 ][ 2 ].lock
					);
				}
	
				// progress_handlers.fire
				// fulfilled_handlers.fire
				// rejected_handlers.fire
				list.add( tuple[ 3 ].fire );
	
				// deferred.notify = function() { deferred.notifyWith(...) }
				// deferred.resolve = function() { deferred.resolveWith(...) }
				// deferred.reject = function() { deferred.rejectWith(...) }
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
					return this;
				};
	
				// deferred.notifyWith = list.fireWith
				// deferred.resolveWith = list.fireWith
				// deferred.rejectWith = list.fireWith
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );
	
			// Make the deferred a promise
			promise.promise( deferred );
	
			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}
	
			// All done!
			return deferred;
		},
	
		// Deferred helper
		when: function( singleValue ) {
			var
	
				// count of uncompleted subordinates
				remaining = arguments.length,
	
				// count of unprocessed arguments
				i = remaining,
	
				// subordinate fulfillment data
				resolveContexts = Array( i ),
				resolveValues = slice.call( arguments ),
	
				// the master Deferred
				master = jQuery.Deferred(),
	
				// subordinate callback factory
				updateFunc = function( i ) {
					return function( value ) {
						resolveContexts[ i ] = this;
						resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( !( --remaining ) ) {
							master.resolveWith( resolveContexts, resolveValues );
						}
					};
				};
	
			// Single- and empty arguments are adopted like Promise.resolve
			if ( remaining <= 1 ) {
				adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject );
	
				// Use .then() to unwrap secondary thenables (cf. gh-3000)
				if ( master.state() === "pending" ||
					jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {
	
					return master.then();
				}
			}
	
			// Multiple arguments are aggregated like Promise.all array elements
			while ( i-- ) {
				adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
			}
	
			return master.promise();
		}
	} );
	
	
	// These usually indicate a programmer mistake during development,
	// warn about them ASAP rather than swallowing them by default.
	var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	
	jQuery.Deferred.exceptionHook = function( error, stack ) {
	
		// Support: IE 8 - 9 only
		// Console exists when dev tools are open, which can happen at any time
		if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
			window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
		}
	};
	
	
	
	
	jQuery.readyException = function( error ) {
		window.setTimeout( function() {
			throw error;
		} );
	};
	
	
	
	
	// The deferred used on DOM ready
	var readyList = jQuery.Deferred();
	
	jQuery.fn.ready = function( fn ) {
	
		readyList
			.then( fn )
	
			// Wrap jQuery.readyException in a function so that the lookup
			// happens at the time of error handling instead of callback
			// registration.
			.catch( function( error ) {
				jQuery.readyException( error );
			} );
	
		return this;
	};
	
	jQuery.extend( {
	
		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,
	
		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,
	
		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},
	
		// Handle when the DOM is ready
		ready: function( wait ) {
	
			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}
	
			// Remember that the DOM is ready
			jQuery.isReady = true;
	
			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}
	
			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );
		}
	} );
	
	jQuery.ready.then = readyList.then;
	
	// The ready event handler and self cleanup method
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}
	
	// Catch cases where $(document).ready() is called
	// after the browser event has already occurred.
	// Support: IE <=9 - 10 only
	// Older IE sometimes signals "interactive" too soon
	if ( document.readyState === "complete" ||
		( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {
	
		// Handle it asynchronously to allow scripts the opportunity to delay ready
		window.setTimeout( jQuery.ready );
	
	} else {
	
		// Use the handy event callback
		document.addEventListener( "DOMContentLoaded", completed );
	
		// A fallback to window.onload, that will always work
		window.addEventListener( "load", completed );
	}
	
	
	
	
	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;
	
		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}
	
		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;
	
			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}
	
			if ( bulk ) {
	
				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;
	
				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}
	
			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}
	
		if ( chainable ) {
			return elems;
		}
	
		// Gets
		if ( bulk ) {
			return fn.call( elems );
		}
	
		return len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {
	
		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};
	
	
	
	
	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}
	
	Data.uid = 1;
	
	Data.prototype = {
	
		cache: function( owner ) {
	
			// Check if the owner object already has a cache
			var value = owner[ this.expando ];
	
			// If not, create one
			if ( !value ) {
				value = {};
	
				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {
	
					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;
	
					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}
	
			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );
	
			// Handle: [ owner, key, value ] args
			// Always use camelCase key (gh-2257)
			if ( typeof data === "string" ) {
				cache[ jQuery.camelCase( data ) ] = value;
	
			// Handle: [ owner, { properties } ] args
			} else {
	
				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ jQuery.camelCase( prop ) ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :
	
				// Always use camelCase key (gh-2257)
				owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
		},
		access: function( owner, key, value ) {
	
			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {
	
				return this.get( owner, key );
			}
	
			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );
	
			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i,
				cache = owner[ this.expando ];
	
			if ( cache === undefined ) {
				return;
			}
	
			if ( key !== undefined ) {
	
				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {
	
					// If key is an array of keys...
					// We always set camelCase keys, so remove that.
					key = key.map( jQuery.camelCase );
				} else {
					key = jQuery.camelCase( key );
	
					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					key = key in cache ?
						[ key ] :
						( key.match( rnothtmlwhite ) || [] );
				}
	
				i = key.length;
	
				while ( i-- ) {
					delete cache[ key[ i ] ];
				}
			}
	
			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {
	
				// Support: Chrome <=35 - 45
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();
	
	var dataUser = new Data();
	
	
	
	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014
	
	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;
	
	function getData( data ) {
		if ( data === "true" ) {
			return true;
		}
	
		if ( data === "false" ) {
			return false;
		}
	
		if ( data === "null" ) {
			return null;
		}
	
		// Only convert to a number if it doesn't change the string
		if ( data === +data + "" ) {
			return +data;
		}
	
		if ( rbrace.test( data ) ) {
			return JSON.parse( data );
		}
	
		return data;
	}
	
	function dataAttr( elem, key, data ) {
		var name;
	
		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );
	
			if ( typeof data === "string" ) {
				try {
					data = getData( data );
				} catch ( e ) {}
	
				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}
	
	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},
	
		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},
	
		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},
	
		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},
	
		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );
	
	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;
	
			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );
	
					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {
	
							// Support: IE 11 only
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}
	
				return data;
			}
	
			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}
	
			return access( this, function( value ) {
				var data;
	
				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {
	
					// Attempt to get data from the cache
					// The key will always be camelCased in Data
					data = dataUser.get( elem, key );
					if ( data !== undefined ) {
						return data;
					}
	
					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, key );
					if ( data !== undefined ) {
						return data;
					}
	
					// We tried really hard, but the data doesn't exist.
					return;
				}
	
				// Set the data...
				this.each( function() {
	
					// We always store the camelCased key
					dataUser.set( this, key, value );
				} );
			}, null, value, arguments.length > 1, null, true );
		},
	
		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );
	
	
	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;
	
			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );
	
				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},
	
		dequeue: function( elem, type ) {
			type = type || "fx";
	
			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};
	
			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}
	
			if ( fn ) {
	
				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}
	
				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}
	
			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},
	
		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );
	
	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;
	
			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}
	
			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}
	
			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );
	
					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );
	
					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},
	
		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};
	
			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";
	
			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;
	
	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );
	
	
	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];
	
	var isHiddenWithinTree = function( elem, el ) {
	
			// isHiddenWithinTree might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
	
			// Inline style trumps all
			return elem.style.display === "none" ||
				elem.style.display === "" &&
	
				// Otherwise, check computed style
				// Support: Firefox <=43 - 45
				// Disconnected elements can have computed display: none, so first confirm that elem is
				// in the document.
				jQuery.contains( elem.ownerDocument, elem ) &&
	
				jQuery.css( elem, "display" ) === "none";
		};
	
	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};
	
		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}
	
		ret = callback.apply( elem, args || [] );
	
		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}
	
		return ret;
	};
	
	
	
	
	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() {
					return tween.cur();
				} :
				function() {
					return jQuery.css( elem, prop, "" );
				},
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),
	
			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );
	
		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {
	
			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];
	
			// Make sure we update the tween properties later on
			valueParts = valueParts || [];
	
			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;
	
			do {
	
				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";
	
				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );
	
			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}
	
		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;
	
			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}
	
	
	var defaultDisplayMap = {};
	
	function getDefaultDisplay( elem ) {
		var temp,
			doc = elem.ownerDocument,
			nodeName = elem.nodeName,
			display = defaultDisplayMap[ nodeName ];
	
		if ( display ) {
			return display;
		}
	
		temp = doc.body.appendChild( doc.createElement( nodeName ) );
		display = jQuery.css( temp, "display" );
	
		temp.parentNode.removeChild( temp );
	
		if ( display === "none" ) {
			display = "block";
		}
		defaultDisplayMap[ nodeName ] = display;
	
		return display;
	}
	
	function showHide( elements, show ) {
		var display, elem,
			values = [],
			index = 0,
			length = elements.length;
	
		// Determine new display value for elements that need to change
		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
	
			display = elem.style.display;
			if ( show ) {
	
				// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
				// check is required in this first loop unless we have a nonempty display value (either
				// inline or about-to-be-restored)
				if ( display === "none" ) {
					values[ index ] = dataPriv.get( elem, "display" ) || null;
					if ( !values[ index ] ) {
						elem.style.display = "";
					}
				}
				if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
					values[ index ] = getDefaultDisplay( elem );
				}
			} else {
				if ( display !== "none" ) {
					values[ index ] = "none";
	
					// Remember what we're overwriting
					dataPriv.set( elem, "display", display );
				}
			}
		}
	
		// Set the display of the elements in a second loop to avoid constant reflow
		for ( index = 0; index < length; index++ ) {
			if ( values[ index ] != null ) {
				elements[ index ].style.display = values[ index ];
			}
		}
	
		return elements;
	}
	
	jQuery.fn.extend( {
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}
	
			return this.each( function() {
				if ( isHiddenWithinTree( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );
	var rcheckableType = ( /^(?:checkbox|radio)$/i );
	
	var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );
	
	var rscriptType = ( /^$|\/(?:java|ecma)script/i );
	
	
	
	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {
	
		// Support: IE <=9 only
		option: [ 1, "<select multiple='multiple'>", "</select>" ],
	
		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
	
		_default: [ 0, "", "" ]
	};
	
	// Support: IE <=9 only
	wrapMap.optgroup = wrapMap.option;
	
	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;
	
	
	function getAll( context, tag ) {
	
		// Support: IE <=9 - 11 only
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret;
	
		if ( typeof context.getElementsByTagName !== "undefined" ) {
			ret = context.getElementsByTagName( tag || "*" );
	
		} else if ( typeof context.querySelectorAll !== "undefined" ) {
			ret = context.querySelectorAll( tag || "*" );
	
		} else {
			ret = [];
		}
	
		if ( tag === undefined || tag && jQuery.nodeName( context, tag ) ) {
			return jQuery.merge( [ context ], ret );
		}
	
		return ret;
	}
	
	
	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;
	
		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}
	
	
	var rhtml = /<|&#?\w+;/;
	
	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;
	
		for ( ; i < l; i++ ) {
			elem = elems[ i ];
	
			if ( elem || elem === 0 ) {
	
				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
	
					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );
	
				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );
	
				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );
	
					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];
	
					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}
	
					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );
	
					// Remember the top-level container
					tmp = fragment.firstChild;
	
					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}
	
		// Remove wrapper from fragment
		fragment.textContent = "";
	
		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {
	
			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}
	
			contains = jQuery.contains( elem.ownerDocument, elem );
	
			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );
	
			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}
	
			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}
	
		return fragment;
	}
	
	
	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );
	
		// Support: Android 4.0 - 4.3 only
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );
	
		div.appendChild( input );
	
		// Support: Android <=4.1 only
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;
	
		// Support: IE <=11 only
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();
	var documentElement = document.documentElement;
	
	
	
	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
	
	function returnTrue() {
		return true;
	}
	
	function returnFalse() {
		return false;
	}
	
	// Support: IE <=9 only
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}
	
	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;
	
		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
	
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
	
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}
	
		if ( data == null && fn == null ) {
	
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
	
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
	
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}
	
		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
	
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
	
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}
	
	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {
	
		global: {},
	
		add: function( elem, types, handler, data, selector ) {
	
			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );
	
			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}
	
			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}
	
			// Ensure that invalid selectors throw exceptions at attach time
			// Evaluate against documentElement in case elem is a non-element node (e.g., document)
			if ( selector ) {
				jQuery.find.matchesSelector( documentElement, selector );
			}
	
			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}
	
			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {
	
					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}
	
			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();
	
				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}
	
				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};
	
				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;
	
				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};
	
				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );
	
				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;
	
					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
	
						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}
	
				if ( special.add ) {
					special.add.call( elem, handleObj );
	
					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}
	
				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}
	
				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}
	
		},
	
		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {
	
			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );
	
			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}
	
			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();
	
				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}
	
				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );
	
				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];
	
					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );
	
						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}
	
				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
	
						jQuery.removeEvent( elem, type, elemData.handle );
					}
	
					delete events[ type ];
				}
			}
	
			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},
	
		dispatch: function( nativeEvent ) {
	
			// Make a writable jQuery.Event from the native event object
			var event = jQuery.event.fix( nativeEvent );
	
			var i, j, ret, matched, handleObj, handlerQueue,
				args = new Array( arguments.length ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};
	
			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;
	
			for ( i = 1; i < arguments.length; i++ ) {
				args[ i ] = arguments[ i ];
			}
	
			event.delegateTarget = this;
	
			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}
	
			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );
	
			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;
	
				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {
	
					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {
	
						event.handleObj = handleObj;
						event.data = handleObj.data;
	
						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );
	
						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}
	
			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}
	
			return event.result;
		},
	
		handlers: function( event, handlers ) {
			var i, handleObj, sel, matchedHandlers, matchedSelectors,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;
	
			// Find delegate handlers
			if ( delegateCount &&
	
				// Support: IE <=9
				// Black-hole SVG <use> instance trees (trac-13180)
				cur.nodeType &&
	
				// Support: Firefox <=42
				// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
				// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
				// Support: IE 11 only
				// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
				!( event.type === "click" && event.button >= 1 ) ) {
	
				for ( ; cur !== this; cur = cur.parentNode || this ) {
	
					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
						matchedHandlers = [];
						matchedSelectors = {};
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];
	
							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";
	
							if ( matchedSelectors[ sel ] === undefined ) {
								matchedSelectors[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matchedSelectors[ sel ] ) {
								matchedHandlers.push( handleObj );
							}
						}
						if ( matchedHandlers.length ) {
							handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
						}
					}
				}
			}
	
			// Add the remaining (directly-bound) handlers
			cur = this;
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
			}
	
			return handlerQueue;
		},
	
		addProp: function( name, hook ) {
			Object.defineProperty( jQuery.Event.prototype, name, {
				enumerable: true,
				configurable: true,
	
				get: jQuery.isFunction( hook ) ?
					function() {
						if ( this.originalEvent ) {
								return hook( this.originalEvent );
						}
					} :
					function() {
						if ( this.originalEvent ) {
								return this.originalEvent[ name ];
						}
					},
	
				set: function( value ) {
					Object.defineProperty( this, name, {
						enumerable: true,
						configurable: true,
						writable: true,
						value: value
					} );
				}
			} );
		},
	
		fix: function( originalEvent ) {
			return originalEvent[ jQuery.expando ] ?
				originalEvent :
				new jQuery.Event( originalEvent );
		},
	
		special: {
			load: {
	
				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {
	
				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {
	
				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},
	
				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},
	
			beforeunload: {
				postDispatch: function( event ) {
	
					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};
	
	jQuery.removeEvent = function( elem, type, handle ) {
	
		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};
	
	jQuery.Event = function( src, props ) {
	
		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}
	
		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;
	
			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&
	
					// Support: Android <=2.3 only
					src.returnValue === false ?
				returnTrue :
				returnFalse;
	
			// Create target properties
			// Support: Safari <=6 - 7 only
			// Target should not be a text node (#504, #13143)
			this.target = ( src.target && src.target.nodeType === 3 ) ?
				src.target.parentNode :
				src.target;
	
			this.currentTarget = src.currentTarget;
			this.relatedTarget = src.relatedTarget;
	
		// Event type
		} else {
			this.type = src;
		}
	
		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}
	
		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();
	
		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};
	
	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,
	
		preventDefault: function() {
			var e = this.originalEvent;
	
			this.isDefaultPrevented = returnTrue;
	
			if ( e && !this.isSimulated ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;
	
			this.isPropagationStopped = returnTrue;
	
			if ( e && !this.isSimulated ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
	
			this.isImmediatePropagationStopped = returnTrue;
	
			if ( e && !this.isSimulated ) {
				e.stopImmediatePropagation();
			}
	
			this.stopPropagation();
		}
	};
	
	// Includes all common event props including KeyEvent and MouseEvent specific props
	jQuery.each( {
		altKey: true,
		bubbles: true,
		cancelable: true,
		changedTouches: true,
		ctrlKey: true,
		detail: true,
		eventPhase: true,
		metaKey: true,
		pageX: true,
		pageY: true,
		shiftKey: true,
		view: true,
		"char": true,
		charCode: true,
		key: true,
		keyCode: true,
		button: true,
		buttons: true,
		clientX: true,
		clientY: true,
		offsetX: true,
		offsetY: true,
		pointerId: true,
		pointerType: true,
		screenX: true,
		screenY: true,
		targetTouches: true,
		toElement: true,
		touches: true,
	
		which: function( event ) {
			var button = event.button;
	
			// Add which for key events
			if ( event.which == null && rkeyEvent.test( event.type ) ) {
				return event.charCode != null ? event.charCode : event.keyCode;
			}
	
			// Add which for click: 1 === left; 2 === middle; 3 === right
			if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
				if ( button & 1 ) {
					return 1;
				}
	
				if ( button & 2 ) {
					return 3;
				}
	
				if ( button & 4 ) {
					return 2;
				}
	
				return 0;
			}
	
			return event.which;
		}
	}, jQuery.event.addProp );
	
	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,
	
			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;
	
				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );
	
	jQuery.fn.extend( {
	
		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {
	
				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {
	
				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {
	
				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );
	
	
	var
	
		/* eslint-disable max-len */
	
		// See https://github.com/eslint/eslint/issues/3229
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
	
		/* eslint-enable */
	
		// Support: IE <=10 - 11, Edge 12 - 13
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,
	
		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
	
	function manipulationTarget( elem, content ) {
		if ( jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {
	
			return elem.getElementsByTagName( "tbody" )[ 0 ] || elem;
		}
	
		return elem;
	}
	
	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );
	
		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}
	
		return elem;
	}
	
	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;
	
		if ( dest.nodeType !== 1 ) {
			return;
		}
	
		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;
	
			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};
	
				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}
	
		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );
	
			dataUser.set( dest, udataCur );
		}
	}
	
	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();
	
		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;
	
		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}
	
	function domManip( collection, args, callback, ignored ) {
	
		// Flatten any nested arrays
		args = concat.apply( [], args );
	
		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );
	
		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}
	
		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;
	
			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}
	
			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;
	
				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;
	
					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );
	
						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {
	
							// Support: Android <=4.0 only, PhantomJS 1 only
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}
	
					callback.call( collection[ i ], node, i );
				}
	
				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;
	
					// Reenable scripts
					jQuery.map( scripts, restoreScript );
	
					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {
	
							if ( node.src ) {
	
								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
							}
						}
					}
				}
			}
		}
	
		return collection;
	}
	
	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;
	
		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}
	
			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}
	
		return elem;
	}
	
	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},
	
		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );
	
			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {
	
				// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );
	
				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}
	
			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );
	
					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}
	
			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}
	
			// Return the cloned set
			return clone;
		},
	
		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;
	
			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );
	
								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}
	
						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {
	
						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );
	
	jQuery.fn.extend( {
		detach: function( selector ) {
			return remove( this, selector, true );
		},
	
		remove: function( selector ) {
			return remove( this, selector );
		},
	
		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},
	
		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},
	
		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},
	
		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},
	
		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},
	
		empty: function() {
			var elem,
				i = 0;
	
			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {
	
					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );
	
					// Remove any remaining nodes
					elem.textContent = "";
				}
			}
	
			return this;
		},
	
		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
	
			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},
	
		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;
	
				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}
	
				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {
	
					value = jQuery.htmlPrefilter( value );
	
					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};
	
							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}
	
						elem = 0;
	
					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}
	
				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},
	
		replaceWith: function() {
			var ignored = [];
	
			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;
	
				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}
	
			// Force callback invocation
			}, ignored );
		}
	} );
	
	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;
	
			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );
	
				// Support: Android <=4.0 only, PhantomJS 1 only
				// .get() because push.apply(_, arraylike) throws on ancient WebKit
				push.apply( ret, elems.get() );
			}
	
			return this.pushStack( ret );
		};
	} );
	var rmargin = ( /^margin/ );
	
	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );
	
	var getStyles = function( elem ) {
	
			// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;
	
			if ( !view || !view.opener ) {
				view = window;
			}
	
			return view.getComputedStyle( elem );
		};
	
	
	
	( function() {
	
		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {
	
			// This is a singleton, we need to execute it only once
			if ( !div ) {
				return;
			}
	
			div.style.cssText =
				"box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );
	
			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";
	
			// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";
	
			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";
	
			documentElement.removeChild( container );
	
			// Nullify the div so it wouldn't be stored in the memory and
			// it will also be a sign that checks already performed
			div = null;
		}
	
		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );
	
		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}
	
		// Support: IE <=9 - 11 only
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";
	
		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );
	
		jQuery.extend( support, {
			pixelPosition: function() {
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				computeStyleTests();
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {
				computeStyleTests();
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {
				computeStyleTests();
				return reliableMarginLeftVal;
			}
		} );
	} )();
	
	
	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;
	
		computed = computed || getStyles( elem );
	
		// Support: IE <=9 only
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {
			ret = computed.getPropertyValue( name ) || computed[ name ];
	
			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}
	
			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// https://drafts.csswg.org/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {
	
				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;
	
				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;
	
				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}
	
		return ret !== undefined ?
	
			// Support: IE <=9 - 11 only
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}
	
	
	function addGetHookIf( conditionFn, hookFn ) {
	
		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {
	
					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}
	
				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}
	
	
	var
	
		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},
	
		cssPrefixes = [ "Webkit", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;
	
	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {
	
		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}
	
		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;
	
		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}
	
	function setPositiveNumber( elem, value, subtract ) {
	
		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?
	
			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}
	
	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i,
			val = 0;
	
		// If we already have the right measurement, avoid augmentation
		if ( extra === ( isBorderBox ? "border" : "content" ) ) {
			i = 4;
	
		// Otherwise initialize for horizontal or vertical properties
		} else {
			i = name === "width" ? 1 : 0;
		}
	
		for ( ; i < 4; i += 2 ) {
	
			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}
	
			if ( isBorderBox ) {
	
				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}
	
				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {
	
				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
	
				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}
	
		return val;
	}
	
	function getWidthOrHeight( elem, name, extra ) {
	
		// Start with offset property, which is equivalent to the border-box value
		var val,
			valueIsBorderBox = true,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";
	
		// Support: IE <=11 only
		// Running getBoundingClientRect on a disconnected node
		// in IE throws an error.
		if ( elem.getClientRects().length ) {
			val = elem.getBoundingClientRect()[ name ];
		}
	
		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {
	
			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}
	
			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}
	
			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );
	
			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}
	
		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}
	
	jQuery.extend( {
	
		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {
	
						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},
	
		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},
	
		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},
	
		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {
	
			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}
	
			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;
	
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );
	
			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
	
			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;
	
				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );
	
					// Fixes bug #9237
					type = "number";
				}
	
				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}
	
				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}
	
				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}
	
				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {
	
					style[ name ] = value;
				}
	
			} else {
	
				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {
	
					return ret;
				}
	
				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},
	
		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );
	
			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );
	
			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
	
			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}
	
			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}
	
			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}
	
			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );
	
	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {
	
					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
	
						// Support: Safari 8+
						// Table columns in Safari have non-zero offsetWidth & zero
						// getBoundingClientRect().width unless display is changed.
						// Support: IE <=11 only
						// Running getBoundingClientRect on a disconnected node
						// in IE throws an error.
						( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},
	
			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);
	
				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {
	
					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}
	
				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );
	
	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);
	
	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},
	
					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];
	
				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}
	
				return expanded;
			}
		};
	
		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );
	
	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;
	
				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;
	
					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}
	
					return map;
				}
	
				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		}
	} );
	
	
	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;
	
	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];
	
			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];
	
			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;
	
			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}
	
			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};
	
	Tween.prototype.init.prototype = Tween.prototype;
	
	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;
	
				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}
	
				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );
	
				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {
	
				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};
	
	// Support: IE <=9 only
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};
	
	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};
	
	jQuery.fx = Tween.prototype.init;
	
	// Back compat <1.8 extension point
	jQuery.fx.step = {};
	
	
	
	
	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;
	
	function raf() {
		if ( timerId ) {
			window.requestAnimationFrame( raf );
			jQuery.fx.tick();
		}
	}
	
	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}
	
	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };
	
		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}
	
		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}
	
		return attrs;
	}
	
	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {
	
				// We're done with this property
				return tween;
			}
		}
	}
	
	function defaultPrefilter( elem, props, opts ) {
		var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
			isBox = "width" in props || "height" in props,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHiddenWithinTree( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );
	
		// Queue-skipping animations hijack the fx hooks
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;
	
			anim.always( function() {
	
				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}
	
		// Detect show/hide animations
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.test( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {
	
					// Pretend to be hidden if this is a "show" and
					// there is still data from a stopped show/hide
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
	
					// Ignore all other no-op show/hide data
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
			}
		}
	
		// Bail out if this is a no-op like .hide().hide()
		propTween = !jQuery.isEmptyObject( props );
		if ( !propTween && jQuery.isEmptyObject( orig ) ) {
			return;
		}
	
		// Restrict "overflow" and "display" styles during box animations
		if ( isBox && elem.nodeType === 1 ) {
	
			// Support: IE <=9 - 11, Edge 12 - 13
			// Record all 3 overflow attributes because IE does not infer the shorthand
			// from identically-valued overflowX and overflowY
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];
	
			// Identify a display type, preferring old show/hide data over the CSS cascade
			restoreDisplay = dataShow && dataShow.display;
			if ( restoreDisplay == null ) {
				restoreDisplay = dataPriv.get( elem, "display" );
			}
			display = jQuery.css( elem, "display" );
			if ( display === "none" ) {
				if ( restoreDisplay ) {
					display = restoreDisplay;
				} else {
	
					// Get nonempty value(s) by temporarily forcing visibility
					showHide( [ elem ], true );
					restoreDisplay = elem.style.display || restoreDisplay;
					display = jQuery.css( elem, "display" );
					showHide( [ elem ] );
				}
			}
	
			// Animate inline elements as inline-block
			if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
				if ( jQuery.css( elem, "float" ) === "none" ) {
	
					// Restore the original display value at the end of pure show/hide animations
					if ( !propTween ) {
						anim.done( function() {
							style.display = restoreDisplay;
						} );
						if ( restoreDisplay == null ) {
							display = style.display;
							restoreDisplay = display === "none" ? "" : display;
						}
					}
					style.display = "inline-block";
				}
			}
		}
	
		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}
	
		// Implement show/hide animations
		propTween = false;
		for ( prop in orig ) {
	
			// General show/hide setup for this element animation
			if ( !propTween ) {
				if ( dataShow ) {
					if ( "hidden" in dataShow ) {
						hidden = dataShow.hidden;
					}
				} else {
					dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
				}
	
				// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
				if ( toggle ) {
					dataShow.hidden = !hidden;
				}
	
				// Show elements before animating them
				if ( hidden ) {
					showHide( [ elem ], true );
				}
	
				/* eslint-disable no-loop-func */
	
				anim.done( function() {
	
				/* eslint-enable no-loop-func */
	
					// The final step of a "hide" animation is actually hiding the element
					if ( !hidden ) {
						showHide( [ elem ] );
					}
					dataPriv.remove( elem, "fxshow" );
					for ( prop in orig ) {
						jQuery.style( elem, prop, orig[ prop ] );
					}
				} );
			}
	
			// Per-property setup
			propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = propTween.start;
				if ( hidden ) {
					propTween.end = propTween.start;
					propTween.start = 0;
				}
			}
		}
	}
	
	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;
	
		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}
	
			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}
	
			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];
	
				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}
	
	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {
	
				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
	
					// Support: Android 2.3 only
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;
	
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( percent );
				}
	
				deferred.notifyWith( elem, [ animation, percent, remaining ] );
	
				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,
	
						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length; index++ ) {
						animation.tweens[ index ].run( 1 );
					}
	
					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;
	
		propFilter( props, animation.opts.specialEasing );
	
		for ( ; index < length; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}
	
		jQuery.map( props, createTween, animation );
	
		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}
	
		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);
	
		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}
	
	jQuery.Animation = jQuery.extend( Animation, {
	
		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},
	
		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnothtmlwhite );
			}
	
			var prop,
				index = 0,
				length = props.length;
	
			for ( ; index < length; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},
	
		prefilters: [ defaultPrefilter ],
	
		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );
	
	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};
	
		// Go to the end state if fx are off or if document is hidden
		if ( jQuery.fx.off || document.hidden ) {
			opt.duration = 0;
	
		} else {
			if ( typeof opt.duration !== "number" ) {
				if ( opt.duration in jQuery.fx.speeds ) {
					opt.duration = jQuery.fx.speeds[ opt.duration ];
	
				} else {
					opt.duration = jQuery.fx.speeds._default;
				}
			}
		}
	
		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}
	
		// Queueing
		opt.old = opt.complete;
	
		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}
	
			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};
	
		return opt;
	};
	
	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {
	
			// Show any hidden elements after setting opacity to 0
			return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()
	
				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {
	
					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );
	
					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;
	
			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};
	
			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}
	
			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );
	
				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}
	
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {
	
						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}
	
				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;
	
				// Enable finishing flag on private data
				data.finish = true;
	
				// Empty the queue first
				jQuery.queue( this, type, [] );
	
				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}
	
				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}
	
				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}
	
				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );
	
	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );
	
	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );
	
	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;
	
		fxNow = jQuery.now();
	
		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];
	
			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}
	
		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};
	
	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};
	
	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.requestAnimationFrame ?
				window.requestAnimationFrame( raf ) :
				window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};
	
	jQuery.fx.stop = function() {
		if ( window.cancelAnimationFrame ) {
			window.cancelAnimationFrame( timerId );
		} else {
			window.clearInterval( timerId );
		}
	
		timerId = null;
	};
	
	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,
	
		// Default speed
		_default: 400
	};
	
	
	// Based off of the plugin by Clint Helfers, with permission.
	// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";
	
		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};
	
	
	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );
	
		input.type = "checkbox";
	
		// Support: Android <=4.3 only
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";
	
		// Support: IE <=11 only
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;
	
		// Support: IE <=11 only
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();
	
	
	var boolHook,
		attrHandle = jQuery.expr.attrHandle;
	
	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},
	
		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );
	
	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;
	
			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}
	
			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}
	
			// Attribute hooks are determined by the lowercase version
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}
	
			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}
	
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}
	
				elem.setAttribute( name, value + "" );
				return value;
			}
	
			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}
	
			ret = jQuery.find.attr( elem, name );
	
			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},
	
		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},
	
		removeAttr: function( elem, value ) {
			var name,
				i = 0,
	
				// Attribute names can contain non-HTML whitespace characters
				// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
				attrNames = value && value.match( rnothtmlwhite );
	
			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					elem.removeAttribute( name );
				}
			}
		}
	} );
	
	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {
	
				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};
	
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;
	
		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle,
				lowercaseName = name.toLowerCase();
	
			if ( !isXML ) {
	
				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ lowercaseName ];
				attrHandle[ lowercaseName ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					lowercaseName :
					null;
				attrHandle[ lowercaseName ] = handle;
			}
			return ret;
		};
	} );
	
	
	
	
	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;
	
	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},
	
		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );
	
	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;
	
			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}
	
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
	
				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}
	
			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}
	
				return ( elem[ name ] = value );
			}
	
			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}
	
			return elem[ name ];
		},
	
		propHooks: {
			tabIndex: {
				get: function( elem ) {
	
					// Support: IE <=9 - 11 only
					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );
	
					if ( tabindex ) {
						return parseInt( tabindex, 10 );
					}
	
					if (
						rfocusable.test( elem.nodeName ) ||
						rclickable.test( elem.nodeName ) &&
						elem.href
					) {
						return 0;
					}
	
					return -1;
				}
			}
		},
	
		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );
	
	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	// eslint rule "no-unused-expressions" is disabled for this code
	// since it considers such accessions noop
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
	
				/* eslint no-unused-expressions: "off" */
	
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {
	
				/* eslint no-unused-expressions: "off" */
	
				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;
	
					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}
	
	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );
	
	
	
	
		// Strip and collapse whitespace according to HTML spec
		// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
		function stripAndCollapse( value ) {
			var tokens = value.match( rnothtmlwhite ) || [];
			return tokens.join( " " );
		}
	
	
	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}
	
	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;
	
			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}
	
			if ( typeof value === "string" && value ) {
				classes = value.match( rnothtmlwhite ) || [];
	
				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );
	
					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}
	
						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}
	
			return this;
		},
	
		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;
	
			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}
	
			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}
	
			if ( typeof value === "string" && value ) {
				classes = value.match( rnothtmlwhite ) || [];
	
				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
	
					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );
	
					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
	
							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}
	
						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}
	
			return this;
		},
	
		toggleClass: function( value, stateVal ) {
			var type = typeof value;
	
			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}
	
			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}
	
			return this.each( function() {
				var className, i, self, classNames;
	
				if ( type === "string" ) {
	
					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnothtmlwhite ) || [];
	
					while ( ( className = classNames[ i++ ] ) ) {
	
						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}
	
				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {
	
						// Store className if set
						dataPriv.set( this, "__className__", className );
					}
	
					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},
	
		hasClass: function( selector ) {
			var className, elem,
				i = 0;
	
			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
						return true;
				}
			}
	
			return false;
		}
	} );
	
	
	
	
	var rreturn = /\r/g;
	
	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];
	
			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];
	
					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}
	
					ret = elem.value;
	
					// Handle most common string cases
					if ( typeof ret === "string" ) {
						return ret.replace( rreturn, "" );
					}
	
					// Handle cases where value is null/undef or number
					return ret == null ? "" : ret;
				}
	
				return;
			}
	
			isFunction = jQuery.isFunction( value );
	
			return this.each( function( i ) {
				var val;
	
				if ( this.nodeType !== 1 ) {
					return;
				}
	
				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}
	
				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";
	
				} else if ( typeof val === "number" ) {
					val += "";
	
				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}
	
				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];
	
				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );
	
	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {
	
					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :
	
						// Support: IE <=10 - 11 only
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						stripAndCollapse( jQuery.text( elem ) );
				}
			},
			select: {
				get: function( elem ) {
					var value, option, i,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one",
						values = one ? null : [],
						max = one ? index + 1 : options.length;
	
					if ( index < 0 ) {
						i = max;
	
					} else {
						i = one ? index : 0;
					}
	
					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];
	
						// Support: IE <=9 only
						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&
	
								// Don't return options that are disabled or in a disabled optgroup
								!option.disabled &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {
	
							// Get the specific value for the option
							value = jQuery( option ).val();
	
							// We don't need an array for one selects
							if ( one ) {
								return value;
							}
	
							// Multi-Selects return an array
							values.push( value );
						}
					}
	
					return values;
				},
	
				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;
	
					while ( i-- ) {
						option = options[ i ];
	
						/* eslint-disable no-cond-assign */
	
						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}
	
						/* eslint-enable no-cond-assign */
					}
	
					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );
	
	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );
	
	
	
	
	// Return jQuery for attributes-only inclusion
	
	
	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;
	
	jQuery.extend( jQuery.event, {
	
		trigger: function( event, data, elem, onlyHandlers ) {
	
			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];
	
			cur = tmp = elem = elem || document;
	
			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}
	
			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}
	
			if ( type.indexOf( "." ) > -1 ) {
	
				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;
	
			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );
	
			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;
	
			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}
	
			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );
	
			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}
	
			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {
	
				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}
	
				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}
	
			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
	
				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;
	
				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}
	
				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;
	
			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {
	
				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {
	
					// Call a native DOM method on the target with the same name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {
	
						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];
	
						if ( tmp ) {
							elem[ ontype ] = null;
						}
	
						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;
	
						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}
	
			return event.result;
		},
	
		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
				}
			);
	
			jQuery.event.trigger( e, null, elem );
		}
	
	} );
	
	jQuery.fn.extend( {
	
		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );
	
	
	jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup contextmenu" ).split( " " ),
		function( i, name ) {
	
		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );
	
	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );
	
	
	
	
	support.focusin = "onfocusin" in window;
	
	
	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {
	
			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};
	
			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );
	
					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;
	
					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );
	
					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;
	
	var nonce = jQuery.now();
	
	var rquery = ( /\?/ );
	
	
	
	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}
	
		// Support: IE 9 - 11 only
		// IE throws on parseFromString with invalid input.
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}
	
		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};
	
	
	var
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;
	
	function buildParams( prefix, obj, traditional, add ) {
		var name;
	
		if ( jQuery.isArray( obj ) ) {
	
			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {
	
					// Treat each array item as a scalar.
					add( prefix, v );
	
				} else {
	
					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );
	
		} else if ( !traditional && jQuery.type( obj ) === "object" ) {
	
			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}
	
		} else {
	
			// Serialize scalar item.
			add( prefix, obj );
		}
	}
	
	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, valueOrFunction ) {
	
				// If value is a function, invoke it and use its return value
				var value = jQuery.isFunction( valueOrFunction ) ?
					valueOrFunction() :
					valueOrFunction;
	
				s[ s.length ] = encodeURIComponent( key ) + "=" +
					encodeURIComponent( value == null ? "" : value );
			};
	
		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
	
			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );
	
		} else {
	
			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}
	
		// Return the resulting serialization
		return s.join( "&" );
	};
	
	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {
	
				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;
	
				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();
	
				if ( val == null ) {
					return null;
				}
	
				if ( jQuery.isArray( val ) ) {
					return jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					} );
				}
	
				return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );
	
	
	var
		r20 = /%20/g,
		rhash = /#.*$/,
		rantiCache = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
	
		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,
	
		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},
	
		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},
	
		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),
	
		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;
	
	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {
	
		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {
	
			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}
	
			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];
	
			if ( jQuery.isFunction( func ) ) {
	
				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {
	
					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );
	
					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}
	
	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {
	
		var inspected = {},
			seekingTransport = ( structure === transports );
	
		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {
	
					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}
	
		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}
	
	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};
	
		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}
	
		return target;
	}
	
	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {
	
		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;
	
		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}
	
		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}
	
		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {
	
			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}
	
			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}
	
		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}
	
	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},
	
			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();
	
		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}
	
		current = dataTypes.shift();
	
		// Convert to each sequential dataType
		while ( current ) {
	
			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}
	
			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}
	
			prev = current;
			current = dataTypes.shift();
	
			if ( current ) {
	
				// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {
	
					current = prev;
	
				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {
	
					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];
	
					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {
	
							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {
	
								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {
	
									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];
	
									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}
	
					// Apply converter (if not an equivalence)
					if ( conv !== true ) {
	
						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}
	
		return { state: "success", data: response };
	}
	
	jQuery.extend( {
	
		// Counter for holding the number of active queries
		active: 0,
	
		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},
	
		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
	
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/
	
			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
	
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
	
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
	
			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {
	
				// Convert anything to text
				"* text": String,
	
				// Text to html (true = no transformation)
				"text html": true,
	
				// Evaluate text as a json expression
				"text json": JSON.parse,
	
				// Parse text as xml
				"text xml": jQuery.parseXML
			},
	
			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},
	
		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?
	
				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :
	
				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},
	
		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),
	
		// Main method
		ajax: function( url, options ) {
	
			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}
	
			// Force options to be an object
			options = options || {};
	
			var transport,
	
				// URL without anti-cache param
				cacheURL,
	
				// Response headers
				responseHeadersString,
				responseHeaders,
	
				// timeout handle
				timeoutTimer,
	
				// Url cleanup var
				urlAnchor,
	
				// Request state (becomes false upon send and true upon completion)
				completed,
	
				// To know if global events are to be dispatched
				fireGlobals,
	
				// Loop variable
				i,
	
				// uncached part of the url
				uncached,
	
				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),
	
				// Callbacks context
				callbackContext = s.context || s,
	
				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,
	
				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),
	
				// Status-dependent callbacks
				statusCode = s.statusCode || {},
	
				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},
	
				// Default abort message
				strAbort = "canceled",
	
				// Fake xhr
				jqXHR = {
					readyState: 0,
	
					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( completed ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},
	
					// Raw string
					getAllResponseHeaders: function() {
						return completed ? responseHeadersString : null;
					},
	
					// Caches the header
					setRequestHeader: function( name, value ) {
						if ( completed == null ) {
							name = requestHeadersNames[ name.toLowerCase() ] =
								requestHeadersNames[ name.toLowerCase() ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},
	
					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( completed == null ) {
							s.mimeType = type;
						}
						return this;
					},
	
					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( completed ) {
	
								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							} else {
	
								// Lazy-add the new callbacks in a way that preserves old ones
								for ( code in map ) {
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							}
						}
						return this;
					},
	
					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};
	
			// Attach deferreds
			deferred.promise( jqXHR );
	
			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" )
				.replace( rprotocol, location.protocol + "//" );
	
			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;
	
			// Extract dataTypes list
			s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];
	
			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );
	
				// Support: IE <=8 - 11, Edge 12 - 13
				// IE throws exception on accessing the href property if url is malformed,
				// e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;
	
					// Support: IE <=8 - 11 only
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {
	
					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}
	
			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}
	
			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );
	
			// If request was aborted inside a prefilter, stop there
			if ( completed ) {
				return jqXHR;
			}
	
			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;
	
			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}
	
			// Uppercase the type
			s.type = s.type.toUpperCase();
	
			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );
	
			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			// Remove hash to simplify url manipulation
			cacheURL = s.url.replace( rhash, "" );
	
			// More options handling for requests with no content
			if ( !s.hasContent ) {
	
				// Remember the hash so we can put it back
				uncached = s.url.slice( cacheURL.length );
	
				// If data is available, append data to url
				if ( s.data ) {
					cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;
	
					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}
	
				// Add or update anti-cache param if needed
				if ( s.cache === false ) {
					cacheURL = cacheURL.replace( rantiCache, "$1" );
					uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
				}
	
				// Put hash and anti-cache on the URL that will be requested (gh-1732)
				s.url = cacheURL + uncached;
	
			// Change '%20' to '+' if this is encoded form body content (gh-2658)
			} else if ( s.data && s.processData &&
				( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
				s.data = s.data.replace( r20, "+" );
			}
	
			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}
	
			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}
	
			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);
	
			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}
	
			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {
	
				// Abort if not done already and return
				return jqXHR.abort();
			}
	
			// Aborting is no longer a cancellation
			strAbort = "abort";
	
			// Install callbacks on deferreds
			completeDeferred.add( s.complete );
			jqXHR.done( s.success );
			jqXHR.fail( s.error );
	
			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );
	
			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;
	
				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}
	
				// If request was aborted inside ajaxSend, stop there
				if ( completed ) {
					return jqXHR;
				}
	
				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}
	
				try {
					completed = false;
					transport.send( requestHeaders, done );
				} catch ( e ) {
	
					// Rethrow post-completion exceptions
					if ( completed ) {
						throw e;
					}
	
					// Propagate others as results
					done( -1, e );
				}
			}
	
			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;
	
				// Ignore repeat invocations
				if ( completed ) {
					return;
				}
	
				completed = true;
	
				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}
	
				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;
	
				// Cache response headers
				responseHeadersString = headers || "";
	
				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;
	
				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;
	
				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}
	
				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );
	
				// If successful, handle type chaining
				if ( isSuccess ) {
	
					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}
	
					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";
	
					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";
	
					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {
	
					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}
	
				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";
	
				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}
	
				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;
	
				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}
	
				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );
	
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
	
					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}
	
			return jqXHR;
		},
	
		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},
	
		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );
	
	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {
	
			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}
	
			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );
	
	
	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,
	
			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			cache: true,
			async: false,
			global: false,
			"throws": true
		} );
	};
	
	
	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;
	
			if ( this[ 0 ] ) {
				if ( jQuery.isFunction( html ) ) {
					html = html.call( this[ 0 ] );
				}
	
				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );
	
				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}
	
				wrap.map( function() {
					var elem = this;
	
					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}
	
					return elem;
				} ).append( this );
			}
	
			return this;
		},
	
		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}
	
			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();
	
				if ( contents.length ) {
					contents.wrapAll( html );
	
				} else {
					self.append( html );
				}
			} );
		},
	
		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );
	
			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},
	
		unwrap: function( selector ) {
			this.parent( selector ).not( "body" ).each( function() {
				jQuery( this ).replaceWith( this.childNodes );
			} );
			return this;
		}
	} );
	
	
	jQuery.expr.pseudos.hidden = function( elem ) {
		return !jQuery.expr.pseudos.visible( elem );
	};
	jQuery.expr.pseudos.visible = function( elem ) {
		return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
	};
	
	
	
	
	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};
	
	var xhrSuccessStatus = {
	
			// File protocol always yields status code 0, assume 200
			0: 200,
	
			// Support: IE <=9 only
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();
	
	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;
	
	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;
	
		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();
	
					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);
	
					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}
	
					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}
	
					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}
	
					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}
	
					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;
	
								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {
	
									// Support: IE <=9 only
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(
	
											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,
	
										// Support: IE <=9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};
	
					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );
	
					// Support: IE 9 only
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {
	
							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {
	
								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}
	
					// Create the abort callback
					callback = callback( "abort" );
	
					try {
	
						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {
	
						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},
	
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );
	
	
	
	
	// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
	jQuery.ajaxPrefilter( function( s ) {
		if ( s.crossDomain ) {
			s.contents.script = false;
		}
	} );
	
	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );
	
	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );
	
	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {
	
		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);
	
					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );
	
	
	
	
	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;
	
	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );
	
	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {
	
		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);
	
		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {
	
			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;
	
			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}
	
			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};
	
			// Force json dataType
			s.dataTypes[ 0 ] = "json";
	
			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};
	
			// Clean-up function (fires after converters)
			jqXHR.always( function() {
	
				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );
	
				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}
	
				// Save back as free
				if ( s[ callbackName ] ) {
	
					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;
	
					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}
	
				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}
	
				responseContainer = overwritten = undefined;
			} );
	
			// Delegate to script
			return "script";
		}
	} );
	
	
	
	
	// Support: Safari 8 only
	// In Safari 8 documents created via document.implementation.createHTMLDocument
	// collapse sibling forms: the second one becomes a child of the first one.
	// Because of that, this security measure has to be disabled in Safari 8.
	// https://bugs.webkit.org/show_bug.cgi?id=137337
	support.createHTMLDocument = ( function() {
		var body = document.implementation.createHTMLDocument( "" ).body;
		body.innerHTML = "<form></form><form></form>";
		return body.childNodes.length === 2;
	} )();
	
	
	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( typeof data !== "string" ) {
			return [];
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
	
		var base, parsed, scripts;
	
		if ( !context ) {
	
			// Stop scripts or inline event handlers from being executed immediately
			// by using document.implementation
			if ( support.createHTMLDocument ) {
				context = document.implementation.createHTMLDocument( "" );
	
				// Set the base href for the created document
				// so any parsed elements with URLs
				// are based on the document's URL (gh-2965)
				base = context.createElement( "base" );
				base.href = document.location.href;
				context.head.appendChild( base );
			} else {
				context = document;
			}
		}
	
		parsed = rsingleTag.exec( data );
		scripts = !keepScripts && [];
	
		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}
	
		parsed = buildFragment( [ data ], context, scripts );
	
		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}
	
		return jQuery.merge( [], parsed.childNodes );
	};
	
	
	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		var selector, type, response,
			self = this,
			off = url.indexOf( " " );
	
		if ( off > -1 ) {
			selector = stripAndCollapse( url.slice( off ) );
			url = url.slice( 0, off );
		}
	
		// If it's a function
		if ( jQuery.isFunction( params ) ) {
	
			// We assume that it's the callback
			callback = params;
			params = undefined;
	
		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}
	
		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,
	
				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {
	
				// Save response for use in complete callback
				response = arguments;
	
				self.html( selector ?
	
					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :
	
					// Otherwise use the full result
					responseText );
	
			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}
	
		return this;
	};
	
	
	
	
	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );
	
	
	
	
	jQuery.expr.pseudos.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};
	
	
	
	
	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}
	
	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};
	
			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}
	
			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;
	
			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;
	
			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}
	
			if ( jQuery.isFunction( options ) ) {
	
				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}
	
			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}
	
			if ( "using" in options ) {
				options.using.call( elem, props );
	
			} else {
				curElem.css( props );
			}
		}
	};
	
	jQuery.fn.extend( {
		offset: function( options ) {
	
			// Preserve chaining for setter
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}
	
			var docElem, win, rect, doc,
				elem = this[ 0 ];
	
			if ( !elem ) {
				return;
			}
	
			// Support: IE <=11 only
			// Running getBoundingClientRect on a
			// disconnected node in IE throws an error
			if ( !elem.getClientRects().length ) {
				return { top: 0, left: 0 };
			}
	
			rect = elem.getBoundingClientRect();
	
			// Make sure element is not hidden (display: none)
			if ( rect.width || rect.height ) {
				doc = elem.ownerDocument;
				win = getWindow( doc );
				docElem = doc.documentElement;
	
				return {
					top: rect.top + win.pageYOffset - docElem.clientTop,
					left: rect.left + win.pageXOffset - docElem.clientLeft
				};
			}
	
			// Return zeros for disconnected and hidden elements (gh-2310)
			return rect;
		},
	
		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}
	
			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };
	
			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {
	
				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();
	
			} else {
	
				// Get *real* offsetParent
				offsetParent = this.offsetParent();
	
				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}
	
				// Add offsetParent borders
				parentOffset = {
					top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
					left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
				};
			}
	
			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},
	
		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;
	
				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}
	
				return offsetParent || documentElement;
			} );
		}
	} );
	
	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;
	
		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );
	
				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}
	
				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);
	
				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );
	
	// Support: Safari <=7 - 9.1, Chrome <=37 - 49
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );
	
					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );
	
	
	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {
	
			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );
	
				return access( this, function( elem, type, value ) {
					var doc;
	
					if ( jQuery.isWindow( elem ) ) {
	
						// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
						return funcName.indexOf( "outer" ) === 0 ?
							elem[ "inner" + name ] :
							elem.document.documentElement[ "client" + name ];
					}
	
					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;
	
						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}
	
					return value === undefined ?
	
						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :
	
						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable );
			};
		} );
	} );
	
	
	jQuery.fn.extend( {
	
		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},
	
		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {
	
			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		}
	} );
	
	jQuery.parseJSON = JSON.parse;
	
	
	
	
	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.
	
	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
	
	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
	
	
	
	
	var
	
		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,
	
		// Map over the $ in case of overwrite
		_$ = window.$;
	
	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}
	
		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}
	
		return jQuery;
	};
	
	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}
	
	
	
	
	
	return jQuery;
	} );


/***/ },
/* 2 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "f4769f9bdb7466be65088239c12046d1.eot";

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  var desc = document.getElementById('desc');
	  desc.className = 'text-center';
	  desc.innerText = "I'm awakening in the new world.";
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports.css = __webpack_require__ (30);
	module.exports.js = __webpack_require__ (7);


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__ (27);
	__webpack_require__ (17);
	__webpack_require__ (18);
	__webpack_require__ (19);
	__webpack_require__ (20);
	__webpack_require__ (21);
	__webpack_require__ (22);
	__webpack_require__ (26);
	__webpack_require__ (23);
	__webpack_require__ (24);
	__webpack_require__ (25);
	__webpack_require__ (16);


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(6);


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(2)();
	// imports
	
	
	// module
	exports.push([module.id, "/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */\n/* FONT PATH\n * -------------------------- */\n@font-face {\n  font-family: 'FontAwesome';\n  src: url(" + __webpack_require__(14) + ");\n  src: url(" + __webpack_require__(13) + "?#iefix&v=4.7.0) format('embedded-opentype'), url(" + __webpack_require__(36) + ") format('woff2'), url(" + __webpack_require__(37) + ") format('woff'), url(" + __webpack_require__(15) + ") format('truetype'), url(" + __webpack_require__(35) + "#fontawesomeregular) format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n.fa {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n/* makes the font 33% larger relative to the icon container */\n.fa-lg {\n  font-size: 1.33333333em;\n  line-height: 0.75em;\n  vertical-align: -15%;\n}\n.fa-2x {\n  font-size: 2em;\n}\n.fa-3x {\n  font-size: 3em;\n}\n.fa-4x {\n  font-size: 4em;\n}\n.fa-5x {\n  font-size: 5em;\n}\n.fa-fw {\n  width: 1.28571429em;\n  text-align: center;\n}\n.fa-ul {\n  padding-left: 0;\n  margin-left: 2.14285714em;\n  list-style-type: none;\n}\n.fa-ul > li {\n  position: relative;\n}\n.fa-li {\n  position: absolute;\n  left: -2.14285714em;\n  width: 2.14285714em;\n  top: 0.14285714em;\n  text-align: center;\n}\n.fa-li.fa-lg {\n  left: -1.85714286em;\n}\n.fa-border {\n  padding: .2em .25em .15em;\n  border: solid 0.08em #eeeeee;\n  border-radius: .1em;\n}\n.fa-pull-left {\n  float: left;\n}\n.fa-pull-right {\n  float: right;\n}\n.fa.fa-pull-left {\n  margin-right: .3em;\n}\n.fa.fa-pull-right {\n  margin-left: .3em;\n}\n/* Deprecated as of 4.4.0 */\n.pull-right {\n  float: right;\n}\n.pull-left {\n  float: left;\n}\n.fa.pull-left {\n  margin-right: .3em;\n}\n.fa.pull-right {\n  margin-left: .3em;\n}\n.fa-spin {\n  animation: fa-spin 2s infinite linear;\n}\n.fa-pulse {\n  animation: fa-spin 1s infinite steps(8);\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(359deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -ms-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -ms-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -ms-transform: rotate(270deg);\n  transform: rotate(270deg);\n}\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -ms-transform: scale(-1, 1);\n  transform: scale(-1, 1);\n}\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -ms-transform: scale(1, -1);\n  transform: scale(1, -1);\n}\n:root .fa-rotate-90, :root .fa-rotate-180, :root .fa-rotate-270, :root .fa-flip-horizontal, :root .fa-flip-vertical {\n  filter: none;\n}\n.fa-stack {\n  position: relative;\n  display: inline-block;\n  width: 2em;\n  height: 2em;\n  line-height: 2em;\n  vertical-align: middle;\n}\n.fa-stack-1x, .fa-stack-2x {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n.fa-stack-1x {\n  line-height: inherit;\n}\n.fa-stack-2x {\n  font-size: 2em;\n}\n.fa-inverse {\n  color: #ffffff;\n}\n/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen\n   readers do not read off random characters that represent icons */\n.fa-glass:before {\n  content: \"\\F000\";\n}\n.fa-music:before {\n  content: \"\\F001\";\n}\n.fa-search:before {\n  content: \"\\F002\";\n}\n.fa-envelope-o:before {\n  content: \"\\F003\";\n}\n.fa-heart:before {\n  content: \"\\F004\";\n}\n.fa-star:before {\n  content: \"\\F005\";\n}\n.fa-star-o:before {\n  content: \"\\F006\";\n}\n.fa-user:before {\n  content: \"\\F007\";\n}\n.fa-film:before {\n  content: \"\\F008\";\n}\n.fa-th-large:before {\n  content: \"\\F009\";\n}\n.fa-th:before {\n  content: \"\\F00A\";\n}\n.fa-th-list:before {\n  content: \"\\F00B\";\n}\n.fa-check:before {\n  content: \"\\F00C\";\n}\n.fa-remove:before, .fa-close:before, .fa-times:before {\n  content: \"\\F00D\";\n}\n.fa-search-plus:before {\n  content: \"\\F00E\";\n}\n.fa-search-minus:before {\n  content: \"\\F010\";\n}\n.fa-power-off:before {\n  content: \"\\F011\";\n}\n.fa-signal:before {\n  content: \"\\F012\";\n}\n.fa-gear:before, .fa-cog:before {\n  content: \"\\F013\";\n}\n.fa-trash-o:before {\n  content: \"\\F014\";\n}\n.fa-home:before {\n  content: \"\\F015\";\n}\n.fa-file-o:before {\n  content: \"\\F016\";\n}\n.fa-clock-o:before {\n  content: \"\\F017\";\n}\n.fa-road:before {\n  content: \"\\F018\";\n}\n.fa-download:before {\n  content: \"\\F019\";\n}\n.fa-arrow-circle-o-down:before {\n  content: \"\\F01A\";\n}\n.fa-arrow-circle-o-up:before {\n  content: \"\\F01B\";\n}\n.fa-inbox:before {\n  content: \"\\F01C\";\n}\n.fa-play-circle-o:before {\n  content: \"\\F01D\";\n}\n.fa-rotate-right:before, .fa-repeat:before {\n  content: \"\\F01E\";\n}\n.fa-refresh:before {\n  content: \"\\F021\";\n}\n.fa-list-alt:before {\n  content: \"\\F022\";\n}\n.fa-lock:before {\n  content: \"\\F023\";\n}\n.fa-flag:before {\n  content: \"\\F024\";\n}\n.fa-headphones:before {\n  content: \"\\F025\";\n}\n.fa-volume-off:before {\n  content: \"\\F026\";\n}\n.fa-volume-down:before {\n  content: \"\\F027\";\n}\n.fa-volume-up:before {\n  content: \"\\F028\";\n}\n.fa-qrcode:before {\n  content: \"\\F029\";\n}\n.fa-barcode:before {\n  content: \"\\F02A\";\n}\n.fa-tag:before {\n  content: \"\\F02B\";\n}\n.fa-tags:before {\n  content: \"\\F02C\";\n}\n.fa-book:before {\n  content: \"\\F02D\";\n}\n.fa-bookmark:before {\n  content: \"\\F02E\";\n}\n.fa-print:before {\n  content: \"\\F02F\";\n}\n.fa-camera:before {\n  content: \"\\F030\";\n}\n.fa-font:before {\n  content: \"\\F031\";\n}\n.fa-bold:before {\n  content: \"\\F032\";\n}\n.fa-italic:before {\n  content: \"\\F033\";\n}\n.fa-text-height:before {\n  content: \"\\F034\";\n}\n.fa-text-width:before {\n  content: \"\\F035\";\n}\n.fa-align-left:before {\n  content: \"\\F036\";\n}\n.fa-align-center:before {\n  content: \"\\F037\";\n}\n.fa-align-right:before {\n  content: \"\\F038\";\n}\n.fa-align-justify:before {\n  content: \"\\F039\";\n}\n.fa-list:before {\n  content: \"\\F03A\";\n}\n.fa-dedent:before, .fa-outdent:before {\n  content: \"\\F03B\";\n}\n.fa-indent:before {\n  content: \"\\F03C\";\n}\n.fa-video-camera:before {\n  content: \"\\F03D\";\n}\n.fa-photo:before, .fa-image:before, .fa-picture-o:before {\n  content: \"\\F03E\";\n}\n.fa-pencil:before {\n  content: \"\\F040\";\n}\n.fa-map-marker:before {\n  content: \"\\F041\";\n}\n.fa-adjust:before {\n  content: \"\\F042\";\n}\n.fa-tint:before {\n  content: \"\\F043\";\n}\n.fa-edit:before, .fa-pencil-square-o:before {\n  content: \"\\F044\";\n}\n.fa-share-square-o:before {\n  content: \"\\F045\";\n}\n.fa-check-square-o:before {\n  content: \"\\F046\";\n}\n.fa-arrows:before {\n  content: \"\\F047\";\n}\n.fa-step-backward:before {\n  content: \"\\F048\";\n}\n.fa-fast-backward:before {\n  content: \"\\F049\";\n}\n.fa-backward:before {\n  content: \"\\F04A\";\n}\n.fa-play:before {\n  content: \"\\F04B\";\n}\n.fa-pause:before {\n  content: \"\\F04C\";\n}\n.fa-stop:before {\n  content: \"\\F04D\";\n}\n.fa-forward:before {\n  content: \"\\F04E\";\n}\n.fa-fast-forward:before {\n  content: \"\\F050\";\n}\n.fa-step-forward:before {\n  content: \"\\F051\";\n}\n.fa-eject:before {\n  content: \"\\F052\";\n}\n.fa-chevron-left:before {\n  content: \"\\F053\";\n}\n.fa-chevron-right:before {\n  content: \"\\F054\";\n}\n.fa-plus-circle:before {\n  content: \"\\F055\";\n}\n.fa-minus-circle:before {\n  content: \"\\F056\";\n}\n.fa-times-circle:before {\n  content: \"\\F057\";\n}\n.fa-check-circle:before {\n  content: \"\\F058\";\n}\n.fa-question-circle:before {\n  content: \"\\F059\";\n}\n.fa-info-circle:before {\n  content: \"\\F05A\";\n}\n.fa-crosshairs:before {\n  content: \"\\F05B\";\n}\n.fa-times-circle-o:before {\n  content: \"\\F05C\";\n}\n.fa-check-circle-o:before {\n  content: \"\\F05D\";\n}\n.fa-ban:before {\n  content: \"\\F05E\";\n}\n.fa-arrow-left:before {\n  content: \"\\F060\";\n}\n.fa-arrow-right:before {\n  content: \"\\F061\";\n}\n.fa-arrow-up:before {\n  content: \"\\F062\";\n}\n.fa-arrow-down:before {\n  content: \"\\F063\";\n}\n.fa-mail-forward:before, .fa-share:before {\n  content: \"\\F064\";\n}\n.fa-expand:before {\n  content: \"\\F065\";\n}\n.fa-compress:before {\n  content: \"\\F066\";\n}\n.fa-plus:before {\n  content: \"\\F067\";\n}\n.fa-minus:before {\n  content: \"\\F068\";\n}\n.fa-asterisk:before {\n  content: \"\\F069\";\n}\n.fa-exclamation-circle:before {\n  content: \"\\F06A\";\n}\n.fa-gift:before {\n  content: \"\\F06B\";\n}\n.fa-leaf:before {\n  content: \"\\F06C\";\n}\n.fa-fire:before {\n  content: \"\\F06D\";\n}\n.fa-eye:before {\n  content: \"\\F06E\";\n}\n.fa-eye-slash:before {\n  content: \"\\F070\";\n}\n.fa-warning:before, .fa-exclamation-triangle:before {\n  content: \"\\F071\";\n}\n.fa-plane:before {\n  content: \"\\F072\";\n}\n.fa-calendar:before {\n  content: \"\\F073\";\n}\n.fa-random:before {\n  content: \"\\F074\";\n}\n.fa-comment:before {\n  content: \"\\F075\";\n}\n.fa-magnet:before {\n  content: \"\\F076\";\n}\n.fa-chevron-up:before {\n  content: \"\\F077\";\n}\n.fa-chevron-down:before {\n  content: \"\\F078\";\n}\n.fa-retweet:before {\n  content: \"\\F079\";\n}\n.fa-shopping-cart:before {\n  content: \"\\F07A\";\n}\n.fa-folder:before {\n  content: \"\\F07B\";\n}\n.fa-folder-open:before {\n  content: \"\\F07C\";\n}\n.fa-arrows-v:before {\n  content: \"\\F07D\";\n}\n.fa-arrows-h:before {\n  content: \"\\F07E\";\n}\n.fa-bar-chart-o:before, .fa-bar-chart:before {\n  content: \"\\F080\";\n}\n.fa-twitter-square:before {\n  content: \"\\F081\";\n}\n.fa-facebook-square:before {\n  content: \"\\F082\";\n}\n.fa-camera-retro:before {\n  content: \"\\F083\";\n}\n.fa-key:before {\n  content: \"\\F084\";\n}\n.fa-gears:before, .fa-cogs:before {\n  content: \"\\F085\";\n}\n.fa-comments:before {\n  content: \"\\F086\";\n}\n.fa-thumbs-o-up:before {\n  content: \"\\F087\";\n}\n.fa-thumbs-o-down:before {\n  content: \"\\F088\";\n}\n.fa-star-half:before {\n  content: \"\\F089\";\n}\n.fa-heart-o:before {\n  content: \"\\F08A\";\n}\n.fa-sign-out:before {\n  content: \"\\F08B\";\n}\n.fa-linkedin-square:before {\n  content: \"\\F08C\";\n}\n.fa-thumb-tack:before {\n  content: \"\\F08D\";\n}\n.fa-external-link:before {\n  content: \"\\F08E\";\n}\n.fa-sign-in:before {\n  content: \"\\F090\";\n}\n.fa-trophy:before {\n  content: \"\\F091\";\n}\n.fa-github-square:before {\n  content: \"\\F092\";\n}\n.fa-upload:before {\n  content: \"\\F093\";\n}\n.fa-lemon-o:before {\n  content: \"\\F094\";\n}\n.fa-phone:before {\n  content: \"\\F095\";\n}\n.fa-square-o:before {\n  content: \"\\F096\";\n}\n.fa-bookmark-o:before {\n  content: \"\\F097\";\n}\n.fa-phone-square:before {\n  content: \"\\F098\";\n}\n.fa-twitter:before {\n  content: \"\\F099\";\n}\n.fa-facebook-f:before, .fa-facebook:before {\n  content: \"\\F09A\";\n}\n.fa-github:before {\n  content: \"\\F09B\";\n}\n.fa-unlock:before {\n  content: \"\\F09C\";\n}\n.fa-credit-card:before {\n  content: \"\\F09D\";\n}\n.fa-feed:before, .fa-rss:before {\n  content: \"\\F09E\";\n}\n.fa-hdd-o:before {\n  content: \"\\F0A0\";\n}\n.fa-bullhorn:before {\n  content: \"\\F0A1\";\n}\n.fa-bell:before {\n  content: \"\\F0F3\";\n}\n.fa-certificate:before {\n  content: \"\\F0A3\";\n}\n.fa-hand-o-right:before {\n  content: \"\\F0A4\";\n}\n.fa-hand-o-left:before {\n  content: \"\\F0A5\";\n}\n.fa-hand-o-up:before {\n  content: \"\\F0A6\";\n}\n.fa-hand-o-down:before {\n  content: \"\\F0A7\";\n}\n.fa-arrow-circle-left:before {\n  content: \"\\F0A8\";\n}\n.fa-arrow-circle-right:before {\n  content: \"\\F0A9\";\n}\n.fa-arrow-circle-up:before {\n  content: \"\\F0AA\";\n}\n.fa-arrow-circle-down:before {\n  content: \"\\F0AB\";\n}\n.fa-globe:before {\n  content: \"\\F0AC\";\n}\n.fa-wrench:before {\n  content: \"\\F0AD\";\n}\n.fa-tasks:before {\n  content: \"\\F0AE\";\n}\n.fa-filter:before {\n  content: \"\\F0B0\";\n}\n.fa-briefcase:before {\n  content: \"\\F0B1\";\n}\n.fa-arrows-alt:before {\n  content: \"\\F0B2\";\n}\n.fa-group:before, .fa-users:before {\n  content: \"\\F0C0\";\n}\n.fa-chain:before, .fa-link:before {\n  content: \"\\F0C1\";\n}\n.fa-cloud:before {\n  content: \"\\F0C2\";\n}\n.fa-flask:before {\n  content: \"\\F0C3\";\n}\n.fa-cut:before, .fa-scissors:before {\n  content: \"\\F0C4\";\n}\n.fa-copy:before, .fa-files-o:before {\n  content: \"\\F0C5\";\n}\n.fa-paperclip:before {\n  content: \"\\F0C6\";\n}\n.fa-save:before, .fa-floppy-o:before {\n  content: \"\\F0C7\";\n}\n.fa-square:before {\n  content: \"\\F0C8\";\n}\n.fa-navicon:before, .fa-reorder:before, .fa-bars:before {\n  content: \"\\F0C9\";\n}\n.fa-list-ul:before {\n  content: \"\\F0CA\";\n}\n.fa-list-ol:before {\n  content: \"\\F0CB\";\n}\n.fa-strikethrough:before {\n  content: \"\\F0CC\";\n}\n.fa-underline:before {\n  content: \"\\F0CD\";\n}\n.fa-table:before {\n  content: \"\\F0CE\";\n}\n.fa-magic:before {\n  content: \"\\F0D0\";\n}\n.fa-truck:before {\n  content: \"\\F0D1\";\n}\n.fa-pinterest:before {\n  content: \"\\F0D2\";\n}\n.fa-pinterest-square:before {\n  content: \"\\F0D3\";\n}\n.fa-google-plus-square:before {\n  content: \"\\F0D4\";\n}\n.fa-google-plus:before {\n  content: \"\\F0D5\";\n}\n.fa-money:before {\n  content: \"\\F0D6\";\n}\n.fa-caret-down:before {\n  content: \"\\F0D7\";\n}\n.fa-caret-up:before {\n  content: \"\\F0D8\";\n}\n.fa-caret-left:before {\n  content: \"\\F0D9\";\n}\n.fa-caret-right:before {\n  content: \"\\F0DA\";\n}\n.fa-columns:before {\n  content: \"\\F0DB\";\n}\n.fa-unsorted:before, .fa-sort:before {\n  content: \"\\F0DC\";\n}\n.fa-sort-down:before, .fa-sort-desc:before {\n  content: \"\\F0DD\";\n}\n.fa-sort-up:before, .fa-sort-asc:before {\n  content: \"\\F0DE\";\n}\n.fa-envelope:before {\n  content: \"\\F0E0\";\n}\n.fa-linkedin:before {\n  content: \"\\F0E1\";\n}\n.fa-rotate-left:before, .fa-undo:before {\n  content: \"\\F0E2\";\n}\n.fa-legal:before, .fa-gavel:before {\n  content: \"\\F0E3\";\n}\n.fa-dashboard:before, .fa-tachometer:before {\n  content: \"\\F0E4\";\n}\n.fa-comment-o:before {\n  content: \"\\F0E5\";\n}\n.fa-comments-o:before {\n  content: \"\\F0E6\";\n}\n.fa-flash:before, .fa-bolt:before {\n  content: \"\\F0E7\";\n}\n.fa-sitemap:before {\n  content: \"\\F0E8\";\n}\n.fa-umbrella:before {\n  content: \"\\F0E9\";\n}\n.fa-paste:before, .fa-clipboard:before {\n  content: \"\\F0EA\";\n}\n.fa-lightbulb-o:before {\n  content: \"\\F0EB\";\n}\n.fa-exchange:before {\n  content: \"\\F0EC\";\n}\n.fa-cloud-download:before {\n  content: \"\\F0ED\";\n}\n.fa-cloud-upload:before {\n  content: \"\\F0EE\";\n}\n.fa-user-md:before {\n  content: \"\\F0F0\";\n}\n.fa-stethoscope:before {\n  content: \"\\F0F1\";\n}\n.fa-suitcase:before {\n  content: \"\\F0F2\";\n}\n.fa-bell-o:before {\n  content: \"\\F0A2\";\n}\n.fa-coffee:before {\n  content: \"\\F0F4\";\n}\n.fa-cutlery:before {\n  content: \"\\F0F5\";\n}\n.fa-file-text-o:before {\n  content: \"\\F0F6\";\n}\n.fa-building-o:before {\n  content: \"\\F0F7\";\n}\n.fa-hospital-o:before {\n  content: \"\\F0F8\";\n}\n.fa-ambulance:before {\n  content: \"\\F0F9\";\n}\n.fa-medkit:before {\n  content: \"\\F0FA\";\n}\n.fa-fighter-jet:before {\n  content: \"\\F0FB\";\n}\n.fa-beer:before {\n  content: \"\\F0FC\";\n}\n.fa-h-square:before {\n  content: \"\\F0FD\";\n}\n.fa-plus-square:before {\n  content: \"\\F0FE\";\n}\n.fa-angle-double-left:before {\n  content: \"\\F100\";\n}\n.fa-angle-double-right:before {\n  content: \"\\F101\";\n}\n.fa-angle-double-up:before {\n  content: \"\\F102\";\n}\n.fa-angle-double-down:before {\n  content: \"\\F103\";\n}\n.fa-angle-left:before {\n  content: \"\\F104\";\n}\n.fa-angle-right:before {\n  content: \"\\F105\";\n}\n.fa-angle-up:before {\n  content: \"\\F106\";\n}\n.fa-angle-down:before {\n  content: \"\\F107\";\n}\n.fa-desktop:before {\n  content: \"\\F108\";\n}\n.fa-laptop:before {\n  content: \"\\F109\";\n}\n.fa-tablet:before {\n  content: \"\\F10A\";\n}\n.fa-mobile-phone:before, .fa-mobile:before {\n  content: \"\\F10B\";\n}\n.fa-circle-o:before {\n  content: \"\\F10C\";\n}\n.fa-quote-left:before {\n  content: \"\\F10D\";\n}\n.fa-quote-right:before {\n  content: \"\\F10E\";\n}\n.fa-spinner:before {\n  content: \"\\F110\";\n}\n.fa-circle:before {\n  content: \"\\F111\";\n}\n.fa-mail-reply:before, .fa-reply:before {\n  content: \"\\F112\";\n}\n.fa-github-alt:before {\n  content: \"\\F113\";\n}\n.fa-folder-o:before {\n  content: \"\\F114\";\n}\n.fa-folder-open-o:before {\n  content: \"\\F115\";\n}\n.fa-smile-o:before {\n  content: \"\\F118\";\n}\n.fa-frown-o:before {\n  content: \"\\F119\";\n}\n.fa-meh-o:before {\n  content: \"\\F11A\";\n}\n.fa-gamepad:before {\n  content: \"\\F11B\";\n}\n.fa-keyboard-o:before {\n  content: \"\\F11C\";\n}\n.fa-flag-o:before {\n  content: \"\\F11D\";\n}\n.fa-flag-checkered:before {\n  content: \"\\F11E\";\n}\n.fa-terminal:before {\n  content: \"\\F120\";\n}\n.fa-code:before {\n  content: \"\\F121\";\n}\n.fa-mail-reply-all:before, .fa-reply-all:before {\n  content: \"\\F122\";\n}\n.fa-star-half-empty:before, .fa-star-half-full:before, .fa-star-half-o:before {\n  content: \"\\F123\";\n}\n.fa-location-arrow:before {\n  content: \"\\F124\";\n}\n.fa-crop:before {\n  content: \"\\F125\";\n}\n.fa-code-fork:before {\n  content: \"\\F126\";\n}\n.fa-unlink:before, .fa-chain-broken:before {\n  content: \"\\F127\";\n}\n.fa-question:before {\n  content: \"\\F128\";\n}\n.fa-info:before {\n  content: \"\\F129\";\n}\n.fa-exclamation:before {\n  content: \"\\F12A\";\n}\n.fa-superscript:before {\n  content: \"\\F12B\";\n}\n.fa-subscript:before {\n  content: \"\\F12C\";\n}\n.fa-eraser:before {\n  content: \"\\F12D\";\n}\n.fa-puzzle-piece:before {\n  content: \"\\F12E\";\n}\n.fa-microphone:before {\n  content: \"\\F130\";\n}\n.fa-microphone-slash:before {\n  content: \"\\F131\";\n}\n.fa-shield:before {\n  content: \"\\F132\";\n}\n.fa-calendar-o:before {\n  content: \"\\F133\";\n}\n.fa-fire-extinguisher:before {\n  content: \"\\F134\";\n}\n.fa-rocket:before {\n  content: \"\\F135\";\n}\n.fa-maxcdn:before {\n  content: \"\\F136\";\n}\n.fa-chevron-circle-left:before {\n  content: \"\\F137\";\n}\n.fa-chevron-circle-right:before {\n  content: \"\\F138\";\n}\n.fa-chevron-circle-up:before {\n  content: \"\\F139\";\n}\n.fa-chevron-circle-down:before {\n  content: \"\\F13A\";\n}\n.fa-html5:before {\n  content: \"\\F13B\";\n}\n.fa-css3:before {\n  content: \"\\F13C\";\n}\n.fa-anchor:before {\n  content: \"\\F13D\";\n}\n.fa-unlock-alt:before {\n  content: \"\\F13E\";\n}\n.fa-bullseye:before {\n  content: \"\\F140\";\n}\n.fa-ellipsis-h:before {\n  content: \"\\F141\";\n}\n.fa-ellipsis-v:before {\n  content: \"\\F142\";\n}\n.fa-rss-square:before {\n  content: \"\\F143\";\n}\n.fa-play-circle:before {\n  content: \"\\F144\";\n}\n.fa-ticket:before {\n  content: \"\\F145\";\n}\n.fa-minus-square:before {\n  content: \"\\F146\";\n}\n.fa-minus-square-o:before {\n  content: \"\\F147\";\n}\n.fa-level-up:before {\n  content: \"\\F148\";\n}\n.fa-level-down:before {\n  content: \"\\F149\";\n}\n.fa-check-square:before {\n  content: \"\\F14A\";\n}\n.fa-pencil-square:before {\n  content: \"\\F14B\";\n}\n.fa-external-link-square:before {\n  content: \"\\F14C\";\n}\n.fa-share-square:before {\n  content: \"\\F14D\";\n}\n.fa-compass:before {\n  content: \"\\F14E\";\n}\n.fa-toggle-down:before, .fa-caret-square-o-down:before {\n  content: \"\\F150\";\n}\n.fa-toggle-up:before, .fa-caret-square-o-up:before {\n  content: \"\\F151\";\n}\n.fa-toggle-right:before, .fa-caret-square-o-right:before {\n  content: \"\\F152\";\n}\n.fa-euro:before, .fa-eur:before {\n  content: \"\\F153\";\n}\n.fa-gbp:before {\n  content: \"\\F154\";\n}\n.fa-dollar:before, .fa-usd:before {\n  content: \"\\F155\";\n}\n.fa-rupee:before, .fa-inr:before {\n  content: \"\\F156\";\n}\n.fa-cny:before, .fa-rmb:before, .fa-yen:before, .fa-jpy:before {\n  content: \"\\F157\";\n}\n.fa-ruble:before, .fa-rouble:before, .fa-rub:before {\n  content: \"\\F158\";\n}\n.fa-won:before, .fa-krw:before {\n  content: \"\\F159\";\n}\n.fa-bitcoin:before, .fa-btc:before {\n  content: \"\\F15A\";\n}\n.fa-file:before {\n  content: \"\\F15B\";\n}\n.fa-file-text:before {\n  content: \"\\F15C\";\n}\n.fa-sort-alpha-asc:before {\n  content: \"\\F15D\";\n}\n.fa-sort-alpha-desc:before {\n  content: \"\\F15E\";\n}\n.fa-sort-amount-asc:before {\n  content: \"\\F160\";\n}\n.fa-sort-amount-desc:before {\n  content: \"\\F161\";\n}\n.fa-sort-numeric-asc:before {\n  content: \"\\F162\";\n}\n.fa-sort-numeric-desc:before {\n  content: \"\\F163\";\n}\n.fa-thumbs-up:before {\n  content: \"\\F164\";\n}\n.fa-thumbs-down:before {\n  content: \"\\F165\";\n}\n.fa-youtube-square:before {\n  content: \"\\F166\";\n}\n.fa-youtube:before {\n  content: \"\\F167\";\n}\n.fa-xing:before {\n  content: \"\\F168\";\n}\n.fa-xing-square:before {\n  content: \"\\F169\";\n}\n.fa-youtube-play:before {\n  content: \"\\F16A\";\n}\n.fa-dropbox:before {\n  content: \"\\F16B\";\n}\n.fa-stack-overflow:before {\n  content: \"\\F16C\";\n}\n.fa-instagram:before {\n  content: \"\\F16D\";\n}\n.fa-flickr:before {\n  content: \"\\F16E\";\n}\n.fa-adn:before {\n  content: \"\\F170\";\n}\n.fa-bitbucket:before {\n  content: \"\\F171\";\n}\n.fa-bitbucket-square:before {\n  content: \"\\F172\";\n}\n.fa-tumblr:before {\n  content: \"\\F173\";\n}\n.fa-tumblr-square:before {\n  content: \"\\F174\";\n}\n.fa-long-arrow-down:before {\n  content: \"\\F175\";\n}\n.fa-long-arrow-up:before {\n  content: \"\\F176\";\n}\n.fa-long-arrow-left:before {\n  content: \"\\F177\";\n}\n.fa-long-arrow-right:before {\n  content: \"\\F178\";\n}\n.fa-apple:before {\n  content: \"\\F179\";\n}\n.fa-windows:before {\n  content: \"\\F17A\";\n}\n.fa-android:before {\n  content: \"\\F17B\";\n}\n.fa-linux:before {\n  content: \"\\F17C\";\n}\n.fa-dribbble:before {\n  content: \"\\F17D\";\n}\n.fa-skype:before {\n  content: \"\\F17E\";\n}\n.fa-foursquare:before {\n  content: \"\\F180\";\n}\n.fa-trello:before {\n  content: \"\\F181\";\n}\n.fa-female:before {\n  content: \"\\F182\";\n}\n.fa-male:before {\n  content: \"\\F183\";\n}\n.fa-gittip:before, .fa-gratipay:before {\n  content: \"\\F184\";\n}\n.fa-sun-o:before {\n  content: \"\\F185\";\n}\n.fa-moon-o:before {\n  content: \"\\F186\";\n}\n.fa-archive:before {\n  content: \"\\F187\";\n}\n.fa-bug:before {\n  content: \"\\F188\";\n}\n.fa-vk:before {\n  content: \"\\F189\";\n}\n.fa-weibo:before {\n  content: \"\\F18A\";\n}\n.fa-renren:before {\n  content: \"\\F18B\";\n}\n.fa-pagelines:before {\n  content: \"\\F18C\";\n}\n.fa-stack-exchange:before {\n  content: \"\\F18D\";\n}\n.fa-arrow-circle-o-right:before {\n  content: \"\\F18E\";\n}\n.fa-arrow-circle-o-left:before {\n  content: \"\\F190\";\n}\n.fa-toggle-left:before, .fa-caret-square-o-left:before {\n  content: \"\\F191\";\n}\n.fa-dot-circle-o:before {\n  content: \"\\F192\";\n}\n.fa-wheelchair:before {\n  content: \"\\F193\";\n}\n.fa-vimeo-square:before {\n  content: \"\\F194\";\n}\n.fa-turkish-lira:before, .fa-try:before {\n  content: \"\\F195\";\n}\n.fa-plus-square-o:before {\n  content: \"\\F196\";\n}\n.fa-space-shuttle:before {\n  content: \"\\F197\";\n}\n.fa-slack:before {\n  content: \"\\F198\";\n}\n.fa-envelope-square:before {\n  content: \"\\F199\";\n}\n.fa-wordpress:before {\n  content: \"\\F19A\";\n}\n.fa-openid:before {\n  content: \"\\F19B\";\n}\n.fa-institution:before, .fa-bank:before, .fa-university:before {\n  content: \"\\F19C\";\n}\n.fa-mortar-board:before, .fa-graduation-cap:before {\n  content: \"\\F19D\";\n}\n.fa-yahoo:before {\n  content: \"\\F19E\";\n}\n.fa-google:before {\n  content: \"\\F1A0\";\n}\n.fa-reddit:before {\n  content: \"\\F1A1\";\n}\n.fa-reddit-square:before {\n  content: \"\\F1A2\";\n}\n.fa-stumbleupon-circle:before {\n  content: \"\\F1A3\";\n}\n.fa-stumbleupon:before {\n  content: \"\\F1A4\";\n}\n.fa-delicious:before {\n  content: \"\\F1A5\";\n}\n.fa-digg:before {\n  content: \"\\F1A6\";\n}\n.fa-pied-piper-pp:before {\n  content: \"\\F1A7\";\n}\n.fa-pied-piper-alt:before {\n  content: \"\\F1A8\";\n}\n.fa-drupal:before {\n  content: \"\\F1A9\";\n}\n.fa-joomla:before {\n  content: \"\\F1AA\";\n}\n.fa-language:before {\n  content: \"\\F1AB\";\n}\n.fa-fax:before {\n  content: \"\\F1AC\";\n}\n.fa-building:before {\n  content: \"\\F1AD\";\n}\n.fa-child:before {\n  content: \"\\F1AE\";\n}\n.fa-paw:before {\n  content: \"\\F1B0\";\n}\n.fa-spoon:before {\n  content: \"\\F1B1\";\n}\n.fa-cube:before {\n  content: \"\\F1B2\";\n}\n.fa-cubes:before {\n  content: \"\\F1B3\";\n}\n.fa-behance:before {\n  content: \"\\F1B4\";\n}\n.fa-behance-square:before {\n  content: \"\\F1B5\";\n}\n.fa-steam:before {\n  content: \"\\F1B6\";\n}\n.fa-steam-square:before {\n  content: \"\\F1B7\";\n}\n.fa-recycle:before {\n  content: \"\\F1B8\";\n}\n.fa-automobile:before, .fa-car:before {\n  content: \"\\F1B9\";\n}\n.fa-cab:before, .fa-taxi:before {\n  content: \"\\F1BA\";\n}\n.fa-tree:before {\n  content: \"\\F1BB\";\n}\n.fa-spotify:before {\n  content: \"\\F1BC\";\n}\n.fa-deviantart:before {\n  content: \"\\F1BD\";\n}\n.fa-soundcloud:before {\n  content: \"\\F1BE\";\n}\n.fa-database:before {\n  content: \"\\F1C0\";\n}\n.fa-file-pdf-o:before {\n  content: \"\\F1C1\";\n}\n.fa-file-word-o:before {\n  content: \"\\F1C2\";\n}\n.fa-file-excel-o:before {\n  content: \"\\F1C3\";\n}\n.fa-file-powerpoint-o:before {\n  content: \"\\F1C4\";\n}\n.fa-file-photo-o:before, .fa-file-picture-o:before, .fa-file-image-o:before {\n  content: \"\\F1C5\";\n}\n.fa-file-zip-o:before, .fa-file-archive-o:before {\n  content: \"\\F1C6\";\n}\n.fa-file-sound-o:before, .fa-file-audio-o:before {\n  content: \"\\F1C7\";\n}\n.fa-file-movie-o:before, .fa-file-video-o:before {\n  content: \"\\F1C8\";\n}\n.fa-file-code-o:before {\n  content: \"\\F1C9\";\n}\n.fa-vine:before {\n  content: \"\\F1CA\";\n}\n.fa-codepen:before {\n  content: \"\\F1CB\";\n}\n.fa-jsfiddle:before {\n  content: \"\\F1CC\";\n}\n.fa-life-bouy:before, .fa-life-buoy:before, .fa-life-saver:before, .fa-support:before, .fa-life-ring:before {\n  content: \"\\F1CD\";\n}\n.fa-circle-o-notch:before {\n  content: \"\\F1CE\";\n}\n.fa-ra:before, .fa-resistance:before, .fa-rebel:before {\n  content: \"\\F1D0\";\n}\n.fa-ge:before, .fa-empire:before {\n  content: \"\\F1D1\";\n}\n.fa-git-square:before {\n  content: \"\\F1D2\";\n}\n.fa-git:before {\n  content: \"\\F1D3\";\n}\n.fa-y-combinator-square:before, .fa-yc-square:before, .fa-hacker-news:before {\n  content: \"\\F1D4\";\n}\n.fa-tencent-weibo:before {\n  content: \"\\F1D5\";\n}\n.fa-qq:before {\n  content: \"\\F1D6\";\n}\n.fa-wechat:before, .fa-weixin:before {\n  content: \"\\F1D7\";\n}\n.fa-send:before, .fa-paper-plane:before {\n  content: \"\\F1D8\";\n}\n.fa-send-o:before, .fa-paper-plane-o:before {\n  content: \"\\F1D9\";\n}\n.fa-history:before {\n  content: \"\\F1DA\";\n}\n.fa-circle-thin:before {\n  content: \"\\F1DB\";\n}\n.fa-header:before {\n  content: \"\\F1DC\";\n}\n.fa-paragraph:before {\n  content: \"\\F1DD\";\n}\n.fa-sliders:before {\n  content: \"\\F1DE\";\n}\n.fa-share-alt:before {\n  content: \"\\F1E0\";\n}\n.fa-share-alt-square:before {\n  content: \"\\F1E1\";\n}\n.fa-bomb:before {\n  content: \"\\F1E2\";\n}\n.fa-soccer-ball-o:before, .fa-futbol-o:before {\n  content: \"\\F1E3\";\n}\n.fa-tty:before {\n  content: \"\\F1E4\";\n}\n.fa-binoculars:before {\n  content: \"\\F1E5\";\n}\n.fa-plug:before {\n  content: \"\\F1E6\";\n}\n.fa-slideshare:before {\n  content: \"\\F1E7\";\n}\n.fa-twitch:before {\n  content: \"\\F1E8\";\n}\n.fa-yelp:before {\n  content: \"\\F1E9\";\n}\n.fa-newspaper-o:before {\n  content: \"\\F1EA\";\n}\n.fa-wifi:before {\n  content: \"\\F1EB\";\n}\n.fa-calculator:before {\n  content: \"\\F1EC\";\n}\n.fa-paypal:before {\n  content: \"\\F1ED\";\n}\n.fa-google-wallet:before {\n  content: \"\\F1EE\";\n}\n.fa-cc-visa:before {\n  content: \"\\F1F0\";\n}\n.fa-cc-mastercard:before {\n  content: \"\\F1F1\";\n}\n.fa-cc-discover:before {\n  content: \"\\F1F2\";\n}\n.fa-cc-amex:before {\n  content: \"\\F1F3\";\n}\n.fa-cc-paypal:before {\n  content: \"\\F1F4\";\n}\n.fa-cc-stripe:before {\n  content: \"\\F1F5\";\n}\n.fa-bell-slash:before {\n  content: \"\\F1F6\";\n}\n.fa-bell-slash-o:before {\n  content: \"\\F1F7\";\n}\n.fa-trash:before {\n  content: \"\\F1F8\";\n}\n.fa-copyright:before {\n  content: \"\\F1F9\";\n}\n.fa-at:before {\n  content: \"\\F1FA\";\n}\n.fa-eyedropper:before {\n  content: \"\\F1FB\";\n}\n.fa-paint-brush:before {\n  content: \"\\F1FC\";\n}\n.fa-birthday-cake:before {\n  content: \"\\F1FD\";\n}\n.fa-area-chart:before {\n  content: \"\\F1FE\";\n}\n.fa-pie-chart:before {\n  content: \"\\F200\";\n}\n.fa-line-chart:before {\n  content: \"\\F201\";\n}\n.fa-lastfm:before {\n  content: \"\\F202\";\n}\n.fa-lastfm-square:before {\n  content: \"\\F203\";\n}\n.fa-toggle-off:before {\n  content: \"\\F204\";\n}\n.fa-toggle-on:before {\n  content: \"\\F205\";\n}\n.fa-bicycle:before {\n  content: \"\\F206\";\n}\n.fa-bus:before {\n  content: \"\\F207\";\n}\n.fa-ioxhost:before {\n  content: \"\\F208\";\n}\n.fa-angellist:before {\n  content: \"\\F209\";\n}\n.fa-cc:before {\n  content: \"\\F20A\";\n}\n.fa-shekel:before, .fa-sheqel:before, .fa-ils:before {\n  content: \"\\F20B\";\n}\n.fa-meanpath:before {\n  content: \"\\F20C\";\n}\n.fa-buysellads:before {\n  content: \"\\F20D\";\n}\n.fa-connectdevelop:before {\n  content: \"\\F20E\";\n}\n.fa-dashcube:before {\n  content: \"\\F210\";\n}\n.fa-forumbee:before {\n  content: \"\\F211\";\n}\n.fa-leanpub:before {\n  content: \"\\F212\";\n}\n.fa-sellsy:before {\n  content: \"\\F213\";\n}\n.fa-shirtsinbulk:before {\n  content: \"\\F214\";\n}\n.fa-simplybuilt:before {\n  content: \"\\F215\";\n}\n.fa-skyatlas:before {\n  content: \"\\F216\";\n}\n.fa-cart-plus:before {\n  content: \"\\F217\";\n}\n.fa-cart-arrow-down:before {\n  content: \"\\F218\";\n}\n.fa-diamond:before {\n  content: \"\\F219\";\n}\n.fa-ship:before {\n  content: \"\\F21A\";\n}\n.fa-user-secret:before {\n  content: \"\\F21B\";\n}\n.fa-motorcycle:before {\n  content: \"\\F21C\";\n}\n.fa-street-view:before {\n  content: \"\\F21D\";\n}\n.fa-heartbeat:before {\n  content: \"\\F21E\";\n}\n.fa-venus:before {\n  content: \"\\F221\";\n}\n.fa-mars:before {\n  content: \"\\F222\";\n}\n.fa-mercury:before {\n  content: \"\\F223\";\n}\n.fa-intersex:before, .fa-transgender:before {\n  content: \"\\F224\";\n}\n.fa-transgender-alt:before {\n  content: \"\\F225\";\n}\n.fa-venus-double:before {\n  content: \"\\F226\";\n}\n.fa-mars-double:before {\n  content: \"\\F227\";\n}\n.fa-venus-mars:before {\n  content: \"\\F228\";\n}\n.fa-mars-stroke:before {\n  content: \"\\F229\";\n}\n.fa-mars-stroke-v:before {\n  content: \"\\F22A\";\n}\n.fa-mars-stroke-h:before {\n  content: \"\\F22B\";\n}\n.fa-neuter:before {\n  content: \"\\F22C\";\n}\n.fa-genderless:before {\n  content: \"\\F22D\";\n}\n.fa-facebook-official:before {\n  content: \"\\F230\";\n}\n.fa-pinterest-p:before {\n  content: \"\\F231\";\n}\n.fa-whatsapp:before {\n  content: \"\\F232\";\n}\n.fa-server:before {\n  content: \"\\F233\";\n}\n.fa-user-plus:before {\n  content: \"\\F234\";\n}\n.fa-user-times:before {\n  content: \"\\F235\";\n}\n.fa-hotel:before, .fa-bed:before {\n  content: \"\\F236\";\n}\n.fa-viacoin:before {\n  content: \"\\F237\";\n}\n.fa-train:before {\n  content: \"\\F238\";\n}\n.fa-subway:before {\n  content: \"\\F239\";\n}\n.fa-medium:before {\n  content: \"\\F23A\";\n}\n.fa-yc:before, .fa-y-combinator:before {\n  content: \"\\F23B\";\n}\n.fa-optin-monster:before {\n  content: \"\\F23C\";\n}\n.fa-opencart:before {\n  content: \"\\F23D\";\n}\n.fa-expeditedssl:before {\n  content: \"\\F23E\";\n}\n.fa-battery-4:before, .fa-battery:before, .fa-battery-full:before {\n  content: \"\\F240\";\n}\n.fa-battery-3:before, .fa-battery-three-quarters:before {\n  content: \"\\F241\";\n}\n.fa-battery-2:before, .fa-battery-half:before {\n  content: \"\\F242\";\n}\n.fa-battery-1:before, .fa-battery-quarter:before {\n  content: \"\\F243\";\n}\n.fa-battery-0:before, .fa-battery-empty:before {\n  content: \"\\F244\";\n}\n.fa-mouse-pointer:before {\n  content: \"\\F245\";\n}\n.fa-i-cursor:before {\n  content: \"\\F246\";\n}\n.fa-object-group:before {\n  content: \"\\F247\";\n}\n.fa-object-ungroup:before {\n  content: \"\\F248\";\n}\n.fa-sticky-note:before {\n  content: \"\\F249\";\n}\n.fa-sticky-note-o:before {\n  content: \"\\F24A\";\n}\n.fa-cc-jcb:before {\n  content: \"\\F24B\";\n}\n.fa-cc-diners-club:before {\n  content: \"\\F24C\";\n}\n.fa-clone:before {\n  content: \"\\F24D\";\n}\n.fa-balance-scale:before {\n  content: \"\\F24E\";\n}\n.fa-hourglass-o:before {\n  content: \"\\F250\";\n}\n.fa-hourglass-1:before, .fa-hourglass-start:before {\n  content: \"\\F251\";\n}\n.fa-hourglass-2:before, .fa-hourglass-half:before {\n  content: \"\\F252\";\n}\n.fa-hourglass-3:before, .fa-hourglass-end:before {\n  content: \"\\F253\";\n}\n.fa-hourglass:before {\n  content: \"\\F254\";\n}\n.fa-hand-grab-o:before, .fa-hand-rock-o:before {\n  content: \"\\F255\";\n}\n.fa-hand-stop-o:before, .fa-hand-paper-o:before {\n  content: \"\\F256\";\n}\n.fa-hand-scissors-o:before {\n  content: \"\\F257\";\n}\n.fa-hand-lizard-o:before {\n  content: \"\\F258\";\n}\n.fa-hand-spock-o:before {\n  content: \"\\F259\";\n}\n.fa-hand-pointer-o:before {\n  content: \"\\F25A\";\n}\n.fa-hand-peace-o:before {\n  content: \"\\F25B\";\n}\n.fa-trademark:before {\n  content: \"\\F25C\";\n}\n.fa-registered:before {\n  content: \"\\F25D\";\n}\n.fa-creative-commons:before {\n  content: \"\\F25E\";\n}\n.fa-gg:before {\n  content: \"\\F260\";\n}\n.fa-gg-circle:before {\n  content: \"\\F261\";\n}\n.fa-tripadvisor:before {\n  content: \"\\F262\";\n}\n.fa-odnoklassniki:before {\n  content: \"\\F263\";\n}\n.fa-odnoklassniki-square:before {\n  content: \"\\F264\";\n}\n.fa-get-pocket:before {\n  content: \"\\F265\";\n}\n.fa-wikipedia-w:before {\n  content: \"\\F266\";\n}\n.fa-safari:before {\n  content: \"\\F267\";\n}\n.fa-chrome:before {\n  content: \"\\F268\";\n}\n.fa-firefox:before {\n  content: \"\\F269\";\n}\n.fa-opera:before {\n  content: \"\\F26A\";\n}\n.fa-internet-explorer:before {\n  content: \"\\F26B\";\n}\n.fa-tv:before, .fa-television:before {\n  content: \"\\F26C\";\n}\n.fa-contao:before {\n  content: \"\\F26D\";\n}\n.fa-500px:before {\n  content: \"\\F26E\";\n}\n.fa-amazon:before {\n  content: \"\\F270\";\n}\n.fa-calendar-plus-o:before {\n  content: \"\\F271\";\n}\n.fa-calendar-minus-o:before {\n  content: \"\\F272\";\n}\n.fa-calendar-times-o:before {\n  content: \"\\F273\";\n}\n.fa-calendar-check-o:before {\n  content: \"\\F274\";\n}\n.fa-industry:before {\n  content: \"\\F275\";\n}\n.fa-map-pin:before {\n  content: \"\\F276\";\n}\n.fa-map-signs:before {\n  content: \"\\F277\";\n}\n.fa-map-o:before {\n  content: \"\\F278\";\n}\n.fa-map:before {\n  content: \"\\F279\";\n}\n.fa-commenting:before {\n  content: \"\\F27A\";\n}\n.fa-commenting-o:before {\n  content: \"\\F27B\";\n}\n.fa-houzz:before {\n  content: \"\\F27C\";\n}\n.fa-vimeo:before {\n  content: \"\\F27D\";\n}\n.fa-black-tie:before {\n  content: \"\\F27E\";\n}\n.fa-fonticons:before {\n  content: \"\\F280\";\n}\n.fa-reddit-alien:before {\n  content: \"\\F281\";\n}\n.fa-edge:before {\n  content: \"\\F282\";\n}\n.fa-credit-card-alt:before {\n  content: \"\\F283\";\n}\n.fa-codiepie:before {\n  content: \"\\F284\";\n}\n.fa-modx:before {\n  content: \"\\F285\";\n}\n.fa-fort-awesome:before {\n  content: \"\\F286\";\n}\n.fa-usb:before {\n  content: \"\\F287\";\n}\n.fa-product-hunt:before {\n  content: \"\\F288\";\n}\n.fa-mixcloud:before {\n  content: \"\\F289\";\n}\n.fa-scribd:before {\n  content: \"\\F28A\";\n}\n.fa-pause-circle:before {\n  content: \"\\F28B\";\n}\n.fa-pause-circle-o:before {\n  content: \"\\F28C\";\n}\n.fa-stop-circle:before {\n  content: \"\\F28D\";\n}\n.fa-stop-circle-o:before {\n  content: \"\\F28E\";\n}\n.fa-shopping-bag:before {\n  content: \"\\F290\";\n}\n.fa-shopping-basket:before {\n  content: \"\\F291\";\n}\n.fa-hashtag:before {\n  content: \"\\F292\";\n}\n.fa-bluetooth:before {\n  content: \"\\F293\";\n}\n.fa-bluetooth-b:before {\n  content: \"\\F294\";\n}\n.fa-percent:before {\n  content: \"\\F295\";\n}\n.fa-gitlab:before {\n  content: \"\\F296\";\n}\n.fa-wpbeginner:before {\n  content: \"\\F297\";\n}\n.fa-wpforms:before {\n  content: \"\\F298\";\n}\n.fa-envira:before {\n  content: \"\\F299\";\n}\n.fa-universal-access:before {\n  content: \"\\F29A\";\n}\n.fa-wheelchair-alt:before {\n  content: \"\\F29B\";\n}\n.fa-question-circle-o:before {\n  content: \"\\F29C\";\n}\n.fa-blind:before {\n  content: \"\\F29D\";\n}\n.fa-audio-description:before {\n  content: \"\\F29E\";\n}\n.fa-volume-control-phone:before {\n  content: \"\\F2A0\";\n}\n.fa-braille:before {\n  content: \"\\F2A1\";\n}\n.fa-assistive-listening-systems:before {\n  content: \"\\F2A2\";\n}\n.fa-asl-interpreting:before, .fa-american-sign-language-interpreting:before {\n  content: \"\\F2A3\";\n}\n.fa-deafness:before, .fa-hard-of-hearing:before, .fa-deaf:before {\n  content: \"\\F2A4\";\n}\n.fa-glide:before {\n  content: \"\\F2A5\";\n}\n.fa-glide-g:before {\n  content: \"\\F2A6\";\n}\n.fa-signing:before, .fa-sign-language:before {\n  content: \"\\F2A7\";\n}\n.fa-low-vision:before {\n  content: \"\\F2A8\";\n}\n.fa-viadeo:before {\n  content: \"\\F2A9\";\n}\n.fa-viadeo-square:before {\n  content: \"\\F2AA\";\n}\n.fa-snapchat:before {\n  content: \"\\F2AB\";\n}\n.fa-snapchat-ghost:before {\n  content: \"\\F2AC\";\n}\n.fa-snapchat-square:before {\n  content: \"\\F2AD\";\n}\n.fa-pied-piper:before {\n  content: \"\\F2AE\";\n}\n.fa-first-order:before {\n  content: \"\\F2B0\";\n}\n.fa-yoast:before {\n  content: \"\\F2B1\";\n}\n.fa-themeisle:before {\n  content: \"\\F2B2\";\n}\n.fa-google-plus-circle:before, .fa-google-plus-official:before {\n  content: \"\\F2B3\";\n}\n.fa-fa:before, .fa-font-awesome:before {\n  content: \"\\F2B4\";\n}\n.fa-handshake-o:before {\n  content: \"\\F2B5\";\n}\n.fa-envelope-open:before {\n  content: \"\\F2B6\";\n}\n.fa-envelope-open-o:before {\n  content: \"\\F2B7\";\n}\n.fa-linode:before {\n  content: \"\\F2B8\";\n}\n.fa-address-book:before {\n  content: \"\\F2B9\";\n}\n.fa-address-book-o:before {\n  content: \"\\F2BA\";\n}\n.fa-vcard:before, .fa-address-card:before {\n  content: \"\\F2BB\";\n}\n.fa-vcard-o:before, .fa-address-card-o:before {\n  content: \"\\F2BC\";\n}\n.fa-user-circle:before {\n  content: \"\\F2BD\";\n}\n.fa-user-circle-o:before {\n  content: \"\\F2BE\";\n}\n.fa-user-o:before {\n  content: \"\\F2C0\";\n}\n.fa-id-badge:before {\n  content: \"\\F2C1\";\n}\n.fa-drivers-license:before, .fa-id-card:before {\n  content: \"\\F2C2\";\n}\n.fa-drivers-license-o:before, .fa-id-card-o:before {\n  content: \"\\F2C3\";\n}\n.fa-quora:before {\n  content: \"\\F2C4\";\n}\n.fa-free-code-camp:before {\n  content: \"\\F2C5\";\n}\n.fa-telegram:before {\n  content: \"\\F2C6\";\n}\n.fa-thermometer-4:before, .fa-thermometer:before, .fa-thermometer-full:before {\n  content: \"\\F2C7\";\n}\n.fa-thermometer-3:before, .fa-thermometer-three-quarters:before {\n  content: \"\\F2C8\";\n}\n.fa-thermometer-2:before, .fa-thermometer-half:before {\n  content: \"\\F2C9\";\n}\n.fa-thermometer-1:before, .fa-thermometer-quarter:before {\n  content: \"\\F2CA\";\n}\n.fa-thermometer-0:before, .fa-thermometer-empty:before {\n  content: \"\\F2CB\";\n}\n.fa-shower:before {\n  content: \"\\F2CC\";\n}\n.fa-bathtub:before, .fa-s15:before, .fa-bath:before {\n  content: \"\\F2CD\";\n}\n.fa-podcast:before {\n  content: \"\\F2CE\";\n}\n.fa-window-maximize:before {\n  content: \"\\F2D0\";\n}\n.fa-window-minimize:before {\n  content: \"\\F2D1\";\n}\n.fa-window-restore:before {\n  content: \"\\F2D2\";\n}\n.fa-times-rectangle:before, .fa-window-close:before {\n  content: \"\\F2D3\";\n}\n.fa-times-rectangle-o:before, .fa-window-close-o:before {\n  content: \"\\F2D4\";\n}\n.fa-bandcamp:before {\n  content: \"\\F2D5\";\n}\n.fa-grav:before {\n  content: \"\\F2D6\";\n}\n.fa-etsy:before {\n  content: \"\\F2D7\";\n}\n.fa-imdb:before {\n  content: \"\\F2D8\";\n}\n.fa-ravelry:before {\n  content: \"\\F2D9\";\n}\n.fa-eercast:before {\n  content: \"\\F2DA\";\n}\n.fa-microchip:before {\n  content: \"\\F2DB\";\n}\n.fa-snowflake-o:before {\n  content: \"\\F2DC\";\n}\n.fa-superpowers:before {\n  content: \"\\F2DD\";\n}\n.fa-wpexplorer:before {\n  content: \"\\F2DE\";\n}\n.fa-meetup:before {\n  content: \"\\F2E0\";\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n}\n", ""]);
	
	// exports


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(2)();
	// imports
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Belleza);", ""]);
	
	// module
	exports.push([module.id, "html, body, #app {\n  height: 100%;\n}\n\nbody {\n  background-image: url(" + __webpack_require__(31) + ");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position-x: 50%;\n}\n\n.example {\n  display: -ms-flexbox;\n  display: flex;\n  transition: all .5s;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background: linear-gradient(to bottom, white, black);\n}\n\n#app .hero {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\n#app .hero-icon {\n  margin-top: 5vh;\n  margin-bottom: -10px;\n  font-size: 18vmax;\n  line-height: 1;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n#app h1 {\n  margin: 0;\n  font-family: 'Belleza', sans-serif;\n  font-size: 12vmax;\n  color: rgba(0, 0, 0, 0.7);\n  font-kerning: normal;\n  text-rendering: optimizeLegibility;\n}\n\n#app #desc {\n  padding: 0 1em;\n  font-size: 2.5vmax;\n  color: rgba(255, 255, 255, 0.3);\n  background-color: rgba(0, 0, 0, 0.7);\n}\n\n#app .btn-group .btn {\n  margin-top: 3vmax;\n  width: 10vmax;\n  font-size: 2vmax;\n  background-color: rgba(255, 255, 255, 0.6);\n  border-color: #aaa;\n}\n", ""]);
	
	// exports


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(2)();
	// imports
	
	
	// module
	exports.push([module.id, "@charset \"UTF-8\";\n\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\n\nhtml {\n  font-family: sans-serif;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n}\n\nbody {\n  margin: 0;\n}\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  vertical-align: baseline;\n}\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n[hidden],\ntemplate {\n  display: none;\n}\n\na {\n  background-color: transparent;\n}\n\na:active,\na:hover {\n  outline: 0;\n}\n\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\nb,\nstrong {\n  font-weight: bold;\n}\n\ndfn {\n  font-style: italic;\n}\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\nmark {\n  background: #ff0;\n  color: #000;\n}\n\nsmall {\n  font-size: 80%;\n}\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nimg {\n  border: 0;\n}\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\nfigure {\n  margin: 1em 40px;\n}\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n}\n\npre {\n  overflow: auto;\n}\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  font: inherit;\n  margin: 0;\n}\n\nbutton {\n  overflow: visible;\n}\n\nbutton,\nselect {\n  text-transform: none;\n}\n\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  cursor: pointer;\n}\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\ninput {\n  line-height: normal;\n}\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  padding: 0;\n}\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  box-sizing: content-box;\n}\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\nlegend {\n  border: 0;\n  padding: 0;\n}\n\ntextarea {\n  overflow: auto;\n}\n\noptgroup {\n  font-weight: bold;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}\n\n/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */\n\n@media print {\n  *,\n  *:before,\n  *:after {\n    background: transparent !important;\n    color: #000 !important;\n    box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n\n  a[href]:after {\n    content: \" (\" attr(href) \")\";\n  }\n\n  abbr[title]:after {\n    content: \" (\" attr(title) \")\";\n  }\n\n  a[href^=\"#\"]:after,\n  a[href^=\"javascript:\"]:after {\n    content: \"\";\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  thead {\n    display: table-header-group;\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n\n  .navbar {\n    display: none;\n  }\n\n  .btn > .caret,\n  .dropup > .btn > .caret {\n    border-top-color: #000 !important;\n  }\n\n  .label {\n    border: 1px solid #000;\n  }\n\n  .table {\n    border-collapse: collapse !important;\n  }\n\n  .table td,\n  .table th {\n    background-color: #fff !important;\n  }\n\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #ddd !important;\n  }\n}\n\n@font-face {\n  font-family: 'Glyphicons Halflings';\n  src: url(" + __webpack_require__(4) + ");\n  src: url(" + __webpack_require__(4) + ") format(\"embedded-opentype\"), url(" + __webpack_require__(34) + ") format(\"woff2\"), url(" + __webpack_require__(33) + ") format(\"woff\"), url(" + __webpack_require__(12) + ") format(\"truetype\"), url(" + __webpack_require__(32) + ") format(\"svg\");\n}\n\n.glyphicon {\n  position: relative;\n  top: 1px;\n  display: inline-block;\n  font-family: 'Glyphicons Halflings';\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.glyphicon-asterisk:before {\n  content: \"*\";\n}\n\n.glyphicon-plus:before {\n  content: \"+\";\n}\n\n.glyphicon-euro:before,\n.glyphicon-eur:before {\n  content: \"\\20AC\";\n}\n\n.glyphicon-minus:before {\n  content: \"\\2212\";\n}\n\n.glyphicon-cloud:before {\n  content: \"\\2601\";\n}\n\n.glyphicon-envelope:before {\n  content: \"\\2709\";\n}\n\n.glyphicon-pencil:before {\n  content: \"\\270F\";\n}\n\n.glyphicon-glass:before {\n  content: \"\\E001\";\n}\n\n.glyphicon-music:before {\n  content: \"\\E002\";\n}\n\n.glyphicon-search:before {\n  content: \"\\E003\";\n}\n\n.glyphicon-heart:before {\n  content: \"\\E005\";\n}\n\n.glyphicon-star:before {\n  content: \"\\E006\";\n}\n\n.glyphicon-star-empty:before {\n  content: \"\\E007\";\n}\n\n.glyphicon-user:before {\n  content: \"\\E008\";\n}\n\n.glyphicon-film:before {\n  content: \"\\E009\";\n}\n\n.glyphicon-th-large:before {\n  content: \"\\E010\";\n}\n\n.glyphicon-th:before {\n  content: \"\\E011\";\n}\n\n.glyphicon-th-list:before {\n  content: \"\\E012\";\n}\n\n.glyphicon-ok:before {\n  content: \"\\E013\";\n}\n\n.glyphicon-remove:before {\n  content: \"\\E014\";\n}\n\n.glyphicon-zoom-in:before {\n  content: \"\\E015\";\n}\n\n.glyphicon-zoom-out:before {\n  content: \"\\E016\";\n}\n\n.glyphicon-off:before {\n  content: \"\\E017\";\n}\n\n.glyphicon-signal:before {\n  content: \"\\E018\";\n}\n\n.glyphicon-cog:before {\n  content: \"\\E019\";\n}\n\n.glyphicon-trash:before {\n  content: \"\\E020\";\n}\n\n.glyphicon-home:before {\n  content: \"\\E021\";\n}\n\n.glyphicon-file:before {\n  content: \"\\E022\";\n}\n\n.glyphicon-time:before {\n  content: \"\\E023\";\n}\n\n.glyphicon-road:before {\n  content: \"\\E024\";\n}\n\n.glyphicon-download-alt:before {\n  content: \"\\E025\";\n}\n\n.glyphicon-download:before {\n  content: \"\\E026\";\n}\n\n.glyphicon-upload:before {\n  content: \"\\E027\";\n}\n\n.glyphicon-inbox:before {\n  content: \"\\E028\";\n}\n\n.glyphicon-play-circle:before {\n  content: \"\\E029\";\n}\n\n.glyphicon-repeat:before {\n  content: \"\\E030\";\n}\n\n.glyphicon-refresh:before {\n  content: \"\\E031\";\n}\n\n.glyphicon-list-alt:before {\n  content: \"\\E032\";\n}\n\n.glyphicon-lock:before {\n  content: \"\\E033\";\n}\n\n.glyphicon-flag:before {\n  content: \"\\E034\";\n}\n\n.glyphicon-headphones:before {\n  content: \"\\E035\";\n}\n\n.glyphicon-volume-off:before {\n  content: \"\\E036\";\n}\n\n.glyphicon-volume-down:before {\n  content: \"\\E037\";\n}\n\n.glyphicon-volume-up:before {\n  content: \"\\E038\";\n}\n\n.glyphicon-qrcode:before {\n  content: \"\\E039\";\n}\n\n.glyphicon-barcode:before {\n  content: \"\\E040\";\n}\n\n.glyphicon-tag:before {\n  content: \"\\E041\";\n}\n\n.glyphicon-tags:before {\n  content: \"\\E042\";\n}\n\n.glyphicon-book:before {\n  content: \"\\E043\";\n}\n\n.glyphicon-bookmark:before {\n  content: \"\\E044\";\n}\n\n.glyphicon-print:before {\n  content: \"\\E045\";\n}\n\n.glyphicon-camera:before {\n  content: \"\\E046\";\n}\n\n.glyphicon-font:before {\n  content: \"\\E047\";\n}\n\n.glyphicon-bold:before {\n  content: \"\\E048\";\n}\n\n.glyphicon-italic:before {\n  content: \"\\E049\";\n}\n\n.glyphicon-text-height:before {\n  content: \"\\E050\";\n}\n\n.glyphicon-text-width:before {\n  content: \"\\E051\";\n}\n\n.glyphicon-align-left:before {\n  content: \"\\E052\";\n}\n\n.glyphicon-align-center:before {\n  content: \"\\E053\";\n}\n\n.glyphicon-align-right:before {\n  content: \"\\E054\";\n}\n\n.glyphicon-align-justify:before {\n  content: \"\\E055\";\n}\n\n.glyphicon-list:before {\n  content: \"\\E056\";\n}\n\n.glyphicon-indent-left:before {\n  content: \"\\E057\";\n}\n\n.glyphicon-indent-right:before {\n  content: \"\\E058\";\n}\n\n.glyphicon-facetime-video:before {\n  content: \"\\E059\";\n}\n\n.glyphicon-picture:before {\n  content: \"\\E060\";\n}\n\n.glyphicon-map-marker:before {\n  content: \"\\E062\";\n}\n\n.glyphicon-adjust:before {\n  content: \"\\E063\";\n}\n\n.glyphicon-tint:before {\n  content: \"\\E064\";\n}\n\n.glyphicon-edit:before {\n  content: \"\\E065\";\n}\n\n.glyphicon-share:before {\n  content: \"\\E066\";\n}\n\n.glyphicon-check:before {\n  content: \"\\E067\";\n}\n\n.glyphicon-move:before {\n  content: \"\\E068\";\n}\n\n.glyphicon-step-backward:before {\n  content: \"\\E069\";\n}\n\n.glyphicon-fast-backward:before {\n  content: \"\\E070\";\n}\n\n.glyphicon-backward:before {\n  content: \"\\E071\";\n}\n\n.glyphicon-play:before {\n  content: \"\\E072\";\n}\n\n.glyphicon-pause:before {\n  content: \"\\E073\";\n}\n\n.glyphicon-stop:before {\n  content: \"\\E074\";\n}\n\n.glyphicon-forward:before {\n  content: \"\\E075\";\n}\n\n.glyphicon-fast-forward:before {\n  content: \"\\E076\";\n}\n\n.glyphicon-step-forward:before {\n  content: \"\\E077\";\n}\n\n.glyphicon-eject:before {\n  content: \"\\E078\";\n}\n\n.glyphicon-chevron-left:before {\n  content: \"\\E079\";\n}\n\n.glyphicon-chevron-right:before {\n  content: \"\\E080\";\n}\n\n.glyphicon-plus-sign:before {\n  content: \"\\E081\";\n}\n\n.glyphicon-minus-sign:before {\n  content: \"\\E082\";\n}\n\n.glyphicon-remove-sign:before {\n  content: \"\\E083\";\n}\n\n.glyphicon-ok-sign:before {\n  content: \"\\E084\";\n}\n\n.glyphicon-question-sign:before {\n  content: \"\\E085\";\n}\n\n.glyphicon-info-sign:before {\n  content: \"\\E086\";\n}\n\n.glyphicon-screenshot:before {\n  content: \"\\E087\";\n}\n\n.glyphicon-remove-circle:before {\n  content: \"\\E088\";\n}\n\n.glyphicon-ok-circle:before {\n  content: \"\\E089\";\n}\n\n.glyphicon-ban-circle:before {\n  content: \"\\E090\";\n}\n\n.glyphicon-arrow-left:before {\n  content: \"\\E091\";\n}\n\n.glyphicon-arrow-right:before {\n  content: \"\\E092\";\n}\n\n.glyphicon-arrow-up:before {\n  content: \"\\E093\";\n}\n\n.glyphicon-arrow-down:before {\n  content: \"\\E094\";\n}\n\n.glyphicon-share-alt:before {\n  content: \"\\E095\";\n}\n\n.glyphicon-resize-full:before {\n  content: \"\\E096\";\n}\n\n.glyphicon-resize-small:before {\n  content: \"\\E097\";\n}\n\n.glyphicon-exclamation-sign:before {\n  content: \"\\E101\";\n}\n\n.glyphicon-gift:before {\n  content: \"\\E102\";\n}\n\n.glyphicon-leaf:before {\n  content: \"\\E103\";\n}\n\n.glyphicon-fire:before {\n  content: \"\\E104\";\n}\n\n.glyphicon-eye-open:before {\n  content: \"\\E105\";\n}\n\n.glyphicon-eye-close:before {\n  content: \"\\E106\";\n}\n\n.glyphicon-warning-sign:before {\n  content: \"\\E107\";\n}\n\n.glyphicon-plane:before {\n  content: \"\\E108\";\n}\n\n.glyphicon-calendar:before {\n  content: \"\\E109\";\n}\n\n.glyphicon-random:before {\n  content: \"\\E110\";\n}\n\n.glyphicon-comment:before {\n  content: \"\\E111\";\n}\n\n.glyphicon-magnet:before {\n  content: \"\\E112\";\n}\n\n.glyphicon-chevron-up:before {\n  content: \"\\E113\";\n}\n\n.glyphicon-chevron-down:before {\n  content: \"\\E114\";\n}\n\n.glyphicon-retweet:before {\n  content: \"\\E115\";\n}\n\n.glyphicon-shopping-cart:before {\n  content: \"\\E116\";\n}\n\n.glyphicon-folder-close:before {\n  content: \"\\E117\";\n}\n\n.glyphicon-folder-open:before {\n  content: \"\\E118\";\n}\n\n.glyphicon-resize-vertical:before {\n  content: \"\\E119\";\n}\n\n.glyphicon-resize-horizontal:before {\n  content: \"\\E120\";\n}\n\n.glyphicon-hdd:before {\n  content: \"\\E121\";\n}\n\n.glyphicon-bullhorn:before {\n  content: \"\\E122\";\n}\n\n.glyphicon-bell:before {\n  content: \"\\E123\";\n}\n\n.glyphicon-certificate:before {\n  content: \"\\E124\";\n}\n\n.glyphicon-thumbs-up:before {\n  content: \"\\E125\";\n}\n\n.glyphicon-thumbs-down:before {\n  content: \"\\E126\";\n}\n\n.glyphicon-hand-right:before {\n  content: \"\\E127\";\n}\n\n.glyphicon-hand-left:before {\n  content: \"\\E128\";\n}\n\n.glyphicon-hand-up:before {\n  content: \"\\E129\";\n}\n\n.glyphicon-hand-down:before {\n  content: \"\\E130\";\n}\n\n.glyphicon-circle-arrow-right:before {\n  content: \"\\E131\";\n}\n\n.glyphicon-circle-arrow-left:before {\n  content: \"\\E132\";\n}\n\n.glyphicon-circle-arrow-up:before {\n  content: \"\\E133\";\n}\n\n.glyphicon-circle-arrow-down:before {\n  content: \"\\E134\";\n}\n\n.glyphicon-globe:before {\n  content: \"\\E135\";\n}\n\n.glyphicon-wrench:before {\n  content: \"\\E136\";\n}\n\n.glyphicon-tasks:before {\n  content: \"\\E137\";\n}\n\n.glyphicon-filter:before {\n  content: \"\\E138\";\n}\n\n.glyphicon-briefcase:before {\n  content: \"\\E139\";\n}\n\n.glyphicon-fullscreen:before {\n  content: \"\\E140\";\n}\n\n.glyphicon-dashboard:before {\n  content: \"\\E141\";\n}\n\n.glyphicon-paperclip:before {\n  content: \"\\E142\";\n}\n\n.glyphicon-heart-empty:before {\n  content: \"\\E143\";\n}\n\n.glyphicon-link:before {\n  content: \"\\E144\";\n}\n\n.glyphicon-phone:before {\n  content: \"\\E145\";\n}\n\n.glyphicon-pushpin:before {\n  content: \"\\E146\";\n}\n\n.glyphicon-usd:before {\n  content: \"\\E148\";\n}\n\n.glyphicon-gbp:before {\n  content: \"\\E149\";\n}\n\n.glyphicon-sort:before {\n  content: \"\\E150\";\n}\n\n.glyphicon-sort-by-alphabet:before {\n  content: \"\\E151\";\n}\n\n.glyphicon-sort-by-alphabet-alt:before {\n  content: \"\\E152\";\n}\n\n.glyphicon-sort-by-order:before {\n  content: \"\\E153\";\n}\n\n.glyphicon-sort-by-order-alt:before {\n  content: \"\\E154\";\n}\n\n.glyphicon-sort-by-attributes:before {\n  content: \"\\E155\";\n}\n\n.glyphicon-sort-by-attributes-alt:before {\n  content: \"\\E156\";\n}\n\n.glyphicon-unchecked:before {\n  content: \"\\E157\";\n}\n\n.glyphicon-expand:before {\n  content: \"\\E158\";\n}\n\n.glyphicon-collapse-down:before {\n  content: \"\\E159\";\n}\n\n.glyphicon-collapse-up:before {\n  content: \"\\E160\";\n}\n\n.glyphicon-log-in:before {\n  content: \"\\E161\";\n}\n\n.glyphicon-flash:before {\n  content: \"\\E162\";\n}\n\n.glyphicon-log-out:before {\n  content: \"\\E163\";\n}\n\n.glyphicon-new-window:before {\n  content: \"\\E164\";\n}\n\n.glyphicon-record:before {\n  content: \"\\E165\";\n}\n\n.glyphicon-save:before {\n  content: \"\\E166\";\n}\n\n.glyphicon-open:before {\n  content: \"\\E167\";\n}\n\n.glyphicon-saved:before {\n  content: \"\\E168\";\n}\n\n.glyphicon-import:before {\n  content: \"\\E169\";\n}\n\n.glyphicon-export:before {\n  content: \"\\E170\";\n}\n\n.glyphicon-send:before {\n  content: \"\\E171\";\n}\n\n.glyphicon-floppy-disk:before {\n  content: \"\\E172\";\n}\n\n.glyphicon-floppy-saved:before {\n  content: \"\\E173\";\n}\n\n.glyphicon-floppy-remove:before {\n  content: \"\\E174\";\n}\n\n.glyphicon-floppy-save:before {\n  content: \"\\E175\";\n}\n\n.glyphicon-floppy-open:before {\n  content: \"\\E176\";\n}\n\n.glyphicon-credit-card:before {\n  content: \"\\E177\";\n}\n\n.glyphicon-transfer:before {\n  content: \"\\E178\";\n}\n\n.glyphicon-cutlery:before {\n  content: \"\\E179\";\n}\n\n.glyphicon-header:before {\n  content: \"\\E180\";\n}\n\n.glyphicon-compressed:before {\n  content: \"\\E181\";\n}\n\n.glyphicon-earphone:before {\n  content: \"\\E182\";\n}\n\n.glyphicon-phone-alt:before {\n  content: \"\\E183\";\n}\n\n.glyphicon-tower:before {\n  content: \"\\E184\";\n}\n\n.glyphicon-stats:before {\n  content: \"\\E185\";\n}\n\n.glyphicon-sd-video:before {\n  content: \"\\E186\";\n}\n\n.glyphicon-hd-video:before {\n  content: \"\\E187\";\n}\n\n.glyphicon-subtitles:before {\n  content: \"\\E188\";\n}\n\n.glyphicon-sound-stereo:before {\n  content: \"\\E189\";\n}\n\n.glyphicon-sound-dolby:before {\n  content: \"\\E190\";\n}\n\n.glyphicon-sound-5-1:before {\n  content: \"\\E191\";\n}\n\n.glyphicon-sound-6-1:before {\n  content: \"\\E192\";\n}\n\n.glyphicon-sound-7-1:before {\n  content: \"\\E193\";\n}\n\n.glyphicon-copyright-mark:before {\n  content: \"\\E194\";\n}\n\n.glyphicon-registration-mark:before {\n  content: \"\\E195\";\n}\n\n.glyphicon-cloud-download:before {\n  content: \"\\E197\";\n}\n\n.glyphicon-cloud-upload:before {\n  content: \"\\E198\";\n}\n\n.glyphicon-tree-conifer:before {\n  content: \"\\E199\";\n}\n\n.glyphicon-tree-deciduous:before {\n  content: \"\\E200\";\n}\n\n.glyphicon-cd:before {\n  content: \"\\E201\";\n}\n\n.glyphicon-save-file:before {\n  content: \"\\E202\";\n}\n\n.glyphicon-open-file:before {\n  content: \"\\E203\";\n}\n\n.glyphicon-level-up:before {\n  content: \"\\E204\";\n}\n\n.glyphicon-copy:before {\n  content: \"\\E205\";\n}\n\n.glyphicon-paste:before {\n  content: \"\\E206\";\n}\n\n.glyphicon-alert:before {\n  content: \"\\E209\";\n}\n\n.glyphicon-equalizer:before {\n  content: \"\\E210\";\n}\n\n.glyphicon-king:before {\n  content: \"\\E211\";\n}\n\n.glyphicon-queen:before {\n  content: \"\\E212\";\n}\n\n.glyphicon-pawn:before {\n  content: \"\\E213\";\n}\n\n.glyphicon-bishop:before {\n  content: \"\\E214\";\n}\n\n.glyphicon-knight:before {\n  content: \"\\E215\";\n}\n\n.glyphicon-baby-formula:before {\n  content: \"\\E216\";\n}\n\n.glyphicon-tent:before {\n  content: \"\\26FA\";\n}\n\n.glyphicon-blackboard:before {\n  content: \"\\E218\";\n}\n\n.glyphicon-bed:before {\n  content: \"\\E219\";\n}\n\n.glyphicon-apple:before {\n  content: \"\\F8FF\";\n}\n\n.glyphicon-erase:before {\n  content: \"\\E221\";\n}\n\n.glyphicon-hourglass:before {\n  content: \"\\231B\";\n}\n\n.glyphicon-lamp:before {\n  content: \"\\E223\";\n}\n\n.glyphicon-duplicate:before {\n  content: \"\\E224\";\n}\n\n.glyphicon-piggy-bank:before {\n  content: \"\\E225\";\n}\n\n.glyphicon-scissors:before {\n  content: \"\\E226\";\n}\n\n.glyphicon-bitcoin:before {\n  content: \"\\E227\";\n}\n\n.glyphicon-btc:before {\n  content: \"\\E227\";\n}\n\n.glyphicon-xbt:before {\n  content: \"\\E227\";\n}\n\n.glyphicon-yen:before {\n  content: \"\\A5\";\n}\n\n.glyphicon-jpy:before {\n  content: \"\\A5\";\n}\n\n.glyphicon-ruble:before {\n  content: \"\\20BD\";\n}\n\n.glyphicon-rub:before {\n  content: \"\\20BD\";\n}\n\n.glyphicon-scale:before {\n  content: \"\\E230\";\n}\n\n.glyphicon-ice-lolly:before {\n  content: \"\\E231\";\n}\n\n.glyphicon-ice-lolly-tasted:before {\n  content: \"\\E232\";\n}\n\n.glyphicon-education:before {\n  content: \"\\E233\";\n}\n\n.glyphicon-option-horizontal:before {\n  content: \"\\E234\";\n}\n\n.glyphicon-option-vertical:before {\n  content: \"\\E235\";\n}\n\n.glyphicon-menu-hamburger:before {\n  content: \"\\E236\";\n}\n\n.glyphicon-modal-window:before {\n  content: \"\\E237\";\n}\n\n.glyphicon-oil:before {\n  content: \"\\E238\";\n}\n\n.glyphicon-grain:before {\n  content: \"\\E239\";\n}\n\n.glyphicon-sunglasses:before {\n  content: \"\\E240\";\n}\n\n.glyphicon-text-size:before {\n  content: \"\\E241\";\n}\n\n.glyphicon-text-color:before {\n  content: \"\\E242\";\n}\n\n.glyphicon-text-background:before {\n  content: \"\\E243\";\n}\n\n.glyphicon-object-align-top:before {\n  content: \"\\E244\";\n}\n\n.glyphicon-object-align-bottom:before {\n  content: \"\\E245\";\n}\n\n.glyphicon-object-align-horizontal:before {\n  content: \"\\E246\";\n}\n\n.glyphicon-object-align-left:before {\n  content: \"\\E247\";\n}\n\n.glyphicon-object-align-vertical:before {\n  content: \"\\E248\";\n}\n\n.glyphicon-object-align-right:before {\n  content: \"\\E249\";\n}\n\n.glyphicon-triangle-right:before {\n  content: \"\\E250\";\n}\n\n.glyphicon-triangle-left:before {\n  content: \"\\E251\";\n}\n\n.glyphicon-triangle-bottom:before {\n  content: \"\\E252\";\n}\n\n.glyphicon-triangle-top:before {\n  content: \"\\E253\";\n}\n\n.glyphicon-console:before {\n  content: \"\\E254\";\n}\n\n.glyphicon-superscript:before {\n  content: \"\\E255\";\n}\n\n.glyphicon-subscript:before {\n  content: \"\\E256\";\n}\n\n.glyphicon-menu-left:before {\n  content: \"\\E257\";\n}\n\n.glyphicon-menu-right:before {\n  content: \"\\E258\";\n}\n\n.glyphicon-menu-down:before {\n  content: \"\\E259\";\n}\n\n.glyphicon-menu-up:before {\n  content: \"\\E260\";\n}\n\n* {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n*:before,\n*:after {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\nhtml {\n  font-size: 10px;\n  -webkit-tap-highlight-color: transparent;\n}\n\nbody {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #333333;\n  background-color: #fff;\n}\n\ninput,\nbutton,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n\na {\n  color: #337ab7;\n  text-decoration: none;\n}\n\na:hover,\na:focus {\n  color: #23527c;\n  text-decoration: underline;\n}\n\na:focus {\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n\nfigure {\n  margin: 0;\n}\n\nimg {\n  vertical-align: middle;\n}\n\n.img-responsive {\n  display: block;\n  max-width: 100%;\n  height: auto;\n}\n\n.img-rounded {\n  border-radius: 6px;\n}\n\n.img-thumbnail {\n  padding: 4px;\n  line-height: 1.42857;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  -webkit-transition: all 0.2s ease-in-out;\n  -o-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  display: inline-block;\n  max-width: 100%;\n  height: auto;\n}\n\n.img-circle {\n  border-radius: 50%;\n}\n\nhr {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  border: 0;\n  border-top: 1px solid #eeeeee;\n}\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n\n.sr-only-focusable:active,\n.sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n}\n\n[role=\"button\"] {\n  cursor: pointer;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\n.h1,\n.h2,\n.h3,\n.h4,\n.h5,\n.h6 {\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit;\n}\n\nh1 small,\nh1 .small,\nh2 small,\nh2 .small,\nh3 small,\nh3 .small,\nh4 small,\nh4 .small,\nh5 small,\nh5 .small,\nh6 small,\nh6 .small,\n.h1 small,\n.h1 .small,\n.h2 small,\n.h2 .small,\n.h3 small,\n.h3 .small,\n.h4 small,\n.h4 .small,\n.h5 small,\n.h5 .small,\n.h6 small,\n.h6 .small {\n  font-weight: normal;\n  line-height: 1;\n  color: #777777;\n}\n\nh1,\n.h1,\nh2,\n.h2,\nh3,\n.h3 {\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n\nh1 small,\nh1 .small,\n.h1 small,\n.h1 .small,\nh2 small,\nh2 .small,\n.h2 small,\n.h2 .small,\nh3 small,\nh3 .small,\n.h3 small,\n.h3 .small {\n  font-size: 65%;\n}\n\nh4,\n.h4,\nh5,\n.h5,\nh6,\n.h6 {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\nh4 small,\nh4 .small,\n.h4 small,\n.h4 .small,\nh5 small,\nh5 .small,\n.h5 small,\n.h5 .small,\nh6 small,\nh6 .small,\n.h6 small,\n.h6 .small {\n  font-size: 75%;\n}\n\nh1,\n.h1 {\n  font-size: 36px;\n}\n\nh2,\n.h2 {\n  font-size: 30px;\n}\n\nh3,\n.h3 {\n  font-size: 24px;\n}\n\nh4,\n.h4 {\n  font-size: 18px;\n}\n\nh5,\n.h5 {\n  font-size: 14px;\n}\n\nh6,\n.h6 {\n  font-size: 12px;\n}\n\np {\n  margin: 0 0 10px;\n}\n\n.lead {\n  margin-bottom: 20px;\n  font-size: 16px;\n  font-weight: 300;\n  line-height: 1.4;\n}\n\n@media (min-width: 768px) {\n  .lead {\n    font-size: 21px;\n  }\n}\n\nsmall,\n.small {\n  font-size: 85%;\n}\n\nmark,\n.mark {\n  background-color: #fcf8e3;\n  padding: .2em;\n}\n\n.text-left {\n  text-align: left;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-justify {\n  text-align: justify;\n}\n\n.text-nowrap {\n  white-space: nowrap;\n}\n\n.text-lowercase {\n  text-transform: lowercase;\n}\n\n.text-uppercase,\n.initialism {\n  text-transform: uppercase;\n}\n\n.text-capitalize {\n  text-transform: capitalize;\n}\n\n.text-muted {\n  color: #777777;\n}\n\n.text-primary {\n  color: #337ab7;\n}\n\na.text-primary:hover,\na.text-primary:focus {\n  color: #286090;\n}\n\n.text-success {\n  color: #3c763d;\n}\n\na.text-success:hover,\na.text-success:focus {\n  color: #2b542c;\n}\n\n.text-info {\n  color: #31708f;\n}\n\na.text-info:hover,\na.text-info:focus {\n  color: #245269;\n}\n\n.text-warning {\n  color: #8a6d3b;\n}\n\na.text-warning:hover,\na.text-warning:focus {\n  color: #66512c;\n}\n\n.text-danger {\n  color: #a94442;\n}\n\na.text-danger:hover,\na.text-danger:focus {\n  color: #843534;\n}\n\n.bg-primary {\n  color: #fff;\n}\n\n.bg-primary {\n  background-color: #337ab7;\n}\n\na.bg-primary:hover,\na.bg-primary:focus {\n  background-color: #286090;\n}\n\n.bg-success {\n  background-color: #dff0d8;\n}\n\na.bg-success:hover,\na.bg-success:focus {\n  background-color: #c1e2b3;\n}\n\n.bg-info {\n  background-color: #d9edf7;\n}\n\na.bg-info:hover,\na.bg-info:focus {\n  background-color: #afd9ee;\n}\n\n.bg-warning {\n  background-color: #fcf8e3;\n}\n\na.bg-warning:hover,\na.bg-warning:focus {\n  background-color: #f7ecb5;\n}\n\n.bg-danger {\n  background-color: #f2dede;\n}\n\na.bg-danger:hover,\na.bg-danger:focus {\n  background-color: #e4b9b9;\n}\n\n.page-header {\n  padding-bottom: 9px;\n  margin: 40px 0 20px;\n  border-bottom: 1px solid #eeeeee;\n}\n\nul,\nol {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n\nul ul,\nul ol,\nol ul,\nol ol {\n  margin-bottom: 0;\n}\n\n.list-unstyled {\n  padding-left: 0;\n  list-style: none;\n}\n\n.list-inline {\n  padding-left: 0;\n  list-style: none;\n  margin-left: -5px;\n}\n\n.list-inline > li {\n  display: inline-block;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\ndl {\n  margin-top: 0;\n  margin-bottom: 20px;\n}\n\ndt,\ndd {\n  line-height: 1.42857;\n}\n\ndt {\n  font-weight: bold;\n}\n\ndd {\n  margin-left: 0;\n}\n\n.dl-horizontal dd:before,\n.dl-horizontal dd:after {\n  content: \" \";\n  display: table;\n}\n\n.dl-horizontal dd:after {\n  clear: both;\n}\n\n@media (min-width: 768px) {\n  .dl-horizontal dt {\n    float: left;\n    width: 160px;\n    clear: left;\n    text-align: right;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  .dl-horizontal dd {\n    margin-left: 180px;\n  }\n}\n\nabbr[title],\nabbr[data-original-title] {\n  cursor: help;\n  border-bottom: 1px dotted #777777;\n}\n\n.initialism {\n  font-size: 90%;\n}\n\nblockquote {\n  padding: 10px 20px;\n  margin: 0 0 20px;\n  font-size: 17.5px;\n  border-left: 5px solid #eeeeee;\n}\n\nblockquote p:last-child,\nblockquote ul:last-child,\nblockquote ol:last-child {\n  margin-bottom: 0;\n}\n\nblockquote footer,\nblockquote small,\nblockquote .small {\n  display: block;\n  font-size: 80%;\n  line-height: 1.42857;\n  color: #777777;\n}\n\nblockquote footer:before,\nblockquote small:before,\nblockquote .small:before {\n  content: '\\2014   \\A0';\n}\n\n.blockquote-reverse,\nblockquote.pull-right {\n  padding-right: 15px;\n  padding-left: 0;\n  border-right: 5px solid #eeeeee;\n  border-left: 0;\n  text-align: right;\n}\n\n.blockquote-reverse footer:before,\n.blockquote-reverse small:before,\n.blockquote-reverse .small:before,\nblockquote.pull-right footer:before,\nblockquote.pull-right small:before,\nblockquote.pull-right .small:before {\n  content: '';\n}\n\n.blockquote-reverse footer:after,\n.blockquote-reverse small:after,\n.blockquote-reverse .small:after,\nblockquote.pull-right footer:after,\nblockquote.pull-right small:after,\nblockquote.pull-right .small:after {\n  content: '\\A0   \\2014';\n}\n\naddress {\n  margin-bottom: 20px;\n  font-style: normal;\n  line-height: 1.42857;\n}\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace;\n}\n\ncode {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #c7254e;\n  background-color: #f9f2f4;\n  border-radius: 4px;\n}\n\nkbd {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #fff;\n  background-color: #333;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.25);\n}\n\nkbd kbd {\n  padding: 0;\n  font-size: 100%;\n  font-weight: bold;\n  box-shadow: none;\n}\n\npre {\n  display: block;\n  padding: 9.5px;\n  margin: 0 0 10px;\n  font-size: 13px;\n  line-height: 1.42857;\n  word-break: break-all;\n  word-wrap: break-word;\n  color: #333333;\n  background-color: #f5f5f5;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n\npre code {\n  padding: 0;\n  font-size: inherit;\n  color: inherit;\n  white-space: pre-wrap;\n  background-color: transparent;\n  border-radius: 0;\n}\n\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll;\n}\n\n.container {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.container:before,\n.container:after {\n  content: \" \";\n  display: table;\n}\n\n.container:after {\n  clear: both;\n}\n\n@media (min-width: 768px) {\n  .container {\n    width: 750px;\n  }\n}\n\n@media (min-width: 992px) {\n  .container {\n    width: 970px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .container {\n    width: 1170px;\n  }\n}\n\n.container-fluid {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.container-fluid:before,\n.container-fluid:after {\n  content: \" \";\n  display: table;\n}\n\n.container-fluid:after {\n  clear: both;\n}\n\n.row {\n  margin-left: -15px;\n  margin-right: -15px;\n}\n\n.row:before,\n.row:after {\n  content: \" \";\n  display: table;\n}\n\n.row:after {\n  clear: both;\n}\n\n.col-xs-1,\n.col-sm-1,\n.col-md-1,\n.col-lg-1,\n.col-xs-2,\n.col-sm-2,\n.col-md-2,\n.col-lg-2,\n.col-xs-3,\n.col-sm-3,\n.col-md-3,\n.col-lg-3,\n.col-xs-4,\n.col-sm-4,\n.col-md-4,\n.col-lg-4,\n.col-xs-5,\n.col-sm-5,\n.col-md-5,\n.col-lg-5,\n.col-xs-6,\n.col-sm-6,\n.col-md-6,\n.col-lg-6,\n.col-xs-7,\n.col-sm-7,\n.col-md-7,\n.col-lg-7,\n.col-xs-8,\n.col-sm-8,\n.col-md-8,\n.col-lg-8,\n.col-xs-9,\n.col-sm-9,\n.col-md-9,\n.col-lg-9,\n.col-xs-10,\n.col-sm-10,\n.col-md-10,\n.col-lg-10,\n.col-xs-11,\n.col-sm-11,\n.col-md-11,\n.col-lg-11,\n.col-xs-12,\n.col-sm-12,\n.col-md-12,\n.col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.col-xs-1,\n.col-xs-2,\n.col-xs-3,\n.col-xs-4,\n.col-xs-5,\n.col-xs-6,\n.col-xs-7,\n.col-xs-8,\n.col-xs-9,\n.col-xs-10,\n.col-xs-11,\n.col-xs-12 {\n  float: left;\n}\n\n.col-xs-1 {\n  width: 8.33333%;\n}\n\n.col-xs-2 {\n  width: 16.66667%;\n}\n\n.col-xs-3 {\n  width: 25%;\n}\n\n.col-xs-4 {\n  width: 33.33333%;\n}\n\n.col-xs-5 {\n  width: 41.66667%;\n}\n\n.col-xs-6 {\n  width: 50%;\n}\n\n.col-xs-7 {\n  width: 58.33333%;\n}\n\n.col-xs-8 {\n  width: 66.66667%;\n}\n\n.col-xs-9 {\n  width: 75%;\n}\n\n.col-xs-10 {\n  width: 83.33333%;\n}\n\n.col-xs-11 {\n  width: 91.66667%;\n}\n\n.col-xs-12 {\n  width: 100%;\n}\n\n.col-xs-pull-0 {\n  right: auto;\n}\n\n.col-xs-pull-1 {\n  right: 8.33333%;\n}\n\n.col-xs-pull-2 {\n  right: 16.66667%;\n}\n\n.col-xs-pull-3 {\n  right: 25%;\n}\n\n.col-xs-pull-4 {\n  right: 33.33333%;\n}\n\n.col-xs-pull-5 {\n  right: 41.66667%;\n}\n\n.col-xs-pull-6 {\n  right: 50%;\n}\n\n.col-xs-pull-7 {\n  right: 58.33333%;\n}\n\n.col-xs-pull-8 {\n  right: 66.66667%;\n}\n\n.col-xs-pull-9 {\n  right: 75%;\n}\n\n.col-xs-pull-10 {\n  right: 83.33333%;\n}\n\n.col-xs-pull-11 {\n  right: 91.66667%;\n}\n\n.col-xs-pull-12 {\n  right: 100%;\n}\n\n.col-xs-push-0 {\n  left: auto;\n}\n\n.col-xs-push-1 {\n  left: 8.33333%;\n}\n\n.col-xs-push-2 {\n  left: 16.66667%;\n}\n\n.col-xs-push-3 {\n  left: 25%;\n}\n\n.col-xs-push-4 {\n  left: 33.33333%;\n}\n\n.col-xs-push-5 {\n  left: 41.66667%;\n}\n\n.col-xs-push-6 {\n  left: 50%;\n}\n\n.col-xs-push-7 {\n  left: 58.33333%;\n}\n\n.col-xs-push-8 {\n  left: 66.66667%;\n}\n\n.col-xs-push-9 {\n  left: 75%;\n}\n\n.col-xs-push-10 {\n  left: 83.33333%;\n}\n\n.col-xs-push-11 {\n  left: 91.66667%;\n}\n\n.col-xs-push-12 {\n  left: 100%;\n}\n\n.col-xs-offset-0 {\n  margin-left: 0%;\n}\n\n.col-xs-offset-1 {\n  margin-left: 8.33333%;\n}\n\n.col-xs-offset-2 {\n  margin-left: 16.66667%;\n}\n\n.col-xs-offset-3 {\n  margin-left: 25%;\n}\n\n.col-xs-offset-4 {\n  margin-left: 33.33333%;\n}\n\n.col-xs-offset-5 {\n  margin-left: 41.66667%;\n}\n\n.col-xs-offset-6 {\n  margin-left: 50%;\n}\n\n.col-xs-offset-7 {\n  margin-left: 58.33333%;\n}\n\n.col-xs-offset-8 {\n  margin-left: 66.66667%;\n}\n\n.col-xs-offset-9 {\n  margin-left: 75%;\n}\n\n.col-xs-offset-10 {\n  margin-left: 83.33333%;\n}\n\n.col-xs-offset-11 {\n  margin-left: 91.66667%;\n}\n\n.col-xs-offset-12 {\n  margin-left: 100%;\n}\n\n@media (min-width: 768px) {\n  .col-sm-1,\n  .col-sm-2,\n  .col-sm-3,\n  .col-sm-4,\n  .col-sm-5,\n  .col-sm-6,\n  .col-sm-7,\n  .col-sm-8,\n  .col-sm-9,\n  .col-sm-10,\n  .col-sm-11,\n  .col-sm-12 {\n    float: left;\n  }\n\n  .col-sm-1 {\n    width: 8.33333%;\n  }\n\n  .col-sm-2 {\n    width: 16.66667%;\n  }\n\n  .col-sm-3 {\n    width: 25%;\n  }\n\n  .col-sm-4 {\n    width: 33.33333%;\n  }\n\n  .col-sm-5 {\n    width: 41.66667%;\n  }\n\n  .col-sm-6 {\n    width: 50%;\n  }\n\n  .col-sm-7 {\n    width: 58.33333%;\n  }\n\n  .col-sm-8 {\n    width: 66.66667%;\n  }\n\n  .col-sm-9 {\n    width: 75%;\n  }\n\n  .col-sm-10 {\n    width: 83.33333%;\n  }\n\n  .col-sm-11 {\n    width: 91.66667%;\n  }\n\n  .col-sm-12 {\n    width: 100%;\n  }\n\n  .col-sm-pull-0 {\n    right: auto;\n  }\n\n  .col-sm-pull-1 {\n    right: 8.33333%;\n  }\n\n  .col-sm-pull-2 {\n    right: 16.66667%;\n  }\n\n  .col-sm-pull-3 {\n    right: 25%;\n  }\n\n  .col-sm-pull-4 {\n    right: 33.33333%;\n  }\n\n  .col-sm-pull-5 {\n    right: 41.66667%;\n  }\n\n  .col-sm-pull-6 {\n    right: 50%;\n  }\n\n  .col-sm-pull-7 {\n    right: 58.33333%;\n  }\n\n  .col-sm-pull-8 {\n    right: 66.66667%;\n  }\n\n  .col-sm-pull-9 {\n    right: 75%;\n  }\n\n  .col-sm-pull-10 {\n    right: 83.33333%;\n  }\n\n  .col-sm-pull-11 {\n    right: 91.66667%;\n  }\n\n  .col-sm-pull-12 {\n    right: 100%;\n  }\n\n  .col-sm-push-0 {\n    left: auto;\n  }\n\n  .col-sm-push-1 {\n    left: 8.33333%;\n  }\n\n  .col-sm-push-2 {\n    left: 16.66667%;\n  }\n\n  .col-sm-push-3 {\n    left: 25%;\n  }\n\n  .col-sm-push-4 {\n    left: 33.33333%;\n  }\n\n  .col-sm-push-5 {\n    left: 41.66667%;\n  }\n\n  .col-sm-push-6 {\n    left: 50%;\n  }\n\n  .col-sm-push-7 {\n    left: 58.33333%;\n  }\n\n  .col-sm-push-8 {\n    left: 66.66667%;\n  }\n\n  .col-sm-push-9 {\n    left: 75%;\n  }\n\n  .col-sm-push-10 {\n    left: 83.33333%;\n  }\n\n  .col-sm-push-11 {\n    left: 91.66667%;\n  }\n\n  .col-sm-push-12 {\n    left: 100%;\n  }\n\n  .col-sm-offset-0 {\n    margin-left: 0%;\n  }\n\n  .col-sm-offset-1 {\n    margin-left: 8.33333%;\n  }\n\n  .col-sm-offset-2 {\n    margin-left: 16.66667%;\n  }\n\n  .col-sm-offset-3 {\n    margin-left: 25%;\n  }\n\n  .col-sm-offset-4 {\n    margin-left: 33.33333%;\n  }\n\n  .col-sm-offset-5 {\n    margin-left: 41.66667%;\n  }\n\n  .col-sm-offset-6 {\n    margin-left: 50%;\n  }\n\n  .col-sm-offset-7 {\n    margin-left: 58.33333%;\n  }\n\n  .col-sm-offset-8 {\n    margin-left: 66.66667%;\n  }\n\n  .col-sm-offset-9 {\n    margin-left: 75%;\n  }\n\n  .col-sm-offset-10 {\n    margin-left: 83.33333%;\n  }\n\n  .col-sm-offset-11 {\n    margin-left: 91.66667%;\n  }\n\n  .col-sm-offset-12 {\n    margin-left: 100%;\n  }\n}\n\n@media (min-width: 992px) {\n  .col-md-1,\n  .col-md-2,\n  .col-md-3,\n  .col-md-4,\n  .col-md-5,\n  .col-md-6,\n  .col-md-7,\n  .col-md-8,\n  .col-md-9,\n  .col-md-10,\n  .col-md-11,\n  .col-md-12 {\n    float: left;\n  }\n\n  .col-md-1 {\n    width: 8.33333%;\n  }\n\n  .col-md-2 {\n    width: 16.66667%;\n  }\n\n  .col-md-3 {\n    width: 25%;\n  }\n\n  .col-md-4 {\n    width: 33.33333%;\n  }\n\n  .col-md-5 {\n    width: 41.66667%;\n  }\n\n  .col-md-6 {\n    width: 50%;\n  }\n\n  .col-md-7 {\n    width: 58.33333%;\n  }\n\n  .col-md-8 {\n    width: 66.66667%;\n  }\n\n  .col-md-9 {\n    width: 75%;\n  }\n\n  .col-md-10 {\n    width: 83.33333%;\n  }\n\n  .col-md-11 {\n    width: 91.66667%;\n  }\n\n  .col-md-12 {\n    width: 100%;\n  }\n\n  .col-md-pull-0 {\n    right: auto;\n  }\n\n  .col-md-pull-1 {\n    right: 8.33333%;\n  }\n\n  .col-md-pull-2 {\n    right: 16.66667%;\n  }\n\n  .col-md-pull-3 {\n    right: 25%;\n  }\n\n  .col-md-pull-4 {\n    right: 33.33333%;\n  }\n\n  .col-md-pull-5 {\n    right: 41.66667%;\n  }\n\n  .col-md-pull-6 {\n    right: 50%;\n  }\n\n  .col-md-pull-7 {\n    right: 58.33333%;\n  }\n\n  .col-md-pull-8 {\n    right: 66.66667%;\n  }\n\n  .col-md-pull-9 {\n    right: 75%;\n  }\n\n  .col-md-pull-10 {\n    right: 83.33333%;\n  }\n\n  .col-md-pull-11 {\n    right: 91.66667%;\n  }\n\n  .col-md-pull-12 {\n    right: 100%;\n  }\n\n  .col-md-push-0 {\n    left: auto;\n  }\n\n  .col-md-push-1 {\n    left: 8.33333%;\n  }\n\n  .col-md-push-2 {\n    left: 16.66667%;\n  }\n\n  .col-md-push-3 {\n    left: 25%;\n  }\n\n  .col-md-push-4 {\n    left: 33.33333%;\n  }\n\n  .col-md-push-5 {\n    left: 41.66667%;\n  }\n\n  .col-md-push-6 {\n    left: 50%;\n  }\n\n  .col-md-push-7 {\n    left: 58.33333%;\n  }\n\n  .col-md-push-8 {\n    left: 66.66667%;\n  }\n\n  .col-md-push-9 {\n    left: 75%;\n  }\n\n  .col-md-push-10 {\n    left: 83.33333%;\n  }\n\n  .col-md-push-11 {\n    left: 91.66667%;\n  }\n\n  .col-md-push-12 {\n    left: 100%;\n  }\n\n  .col-md-offset-0 {\n    margin-left: 0%;\n  }\n\n  .col-md-offset-1 {\n    margin-left: 8.33333%;\n  }\n\n  .col-md-offset-2 {\n    margin-left: 16.66667%;\n  }\n\n  .col-md-offset-3 {\n    margin-left: 25%;\n  }\n\n  .col-md-offset-4 {\n    margin-left: 33.33333%;\n  }\n\n  .col-md-offset-5 {\n    margin-left: 41.66667%;\n  }\n\n  .col-md-offset-6 {\n    margin-left: 50%;\n  }\n\n  .col-md-offset-7 {\n    margin-left: 58.33333%;\n  }\n\n  .col-md-offset-8 {\n    margin-left: 66.66667%;\n  }\n\n  .col-md-offset-9 {\n    margin-left: 75%;\n  }\n\n  .col-md-offset-10 {\n    margin-left: 83.33333%;\n  }\n\n  .col-md-offset-11 {\n    margin-left: 91.66667%;\n  }\n\n  .col-md-offset-12 {\n    margin-left: 100%;\n  }\n}\n\n@media (min-width: 1200px) {\n  .col-lg-1,\n  .col-lg-2,\n  .col-lg-3,\n  .col-lg-4,\n  .col-lg-5,\n  .col-lg-6,\n  .col-lg-7,\n  .col-lg-8,\n  .col-lg-9,\n  .col-lg-10,\n  .col-lg-11,\n  .col-lg-12 {\n    float: left;\n  }\n\n  .col-lg-1 {\n    width: 8.33333%;\n  }\n\n  .col-lg-2 {\n    width: 16.66667%;\n  }\n\n  .col-lg-3 {\n    width: 25%;\n  }\n\n  .col-lg-4 {\n    width: 33.33333%;\n  }\n\n  .col-lg-5 {\n    width: 41.66667%;\n  }\n\n  .col-lg-6 {\n    width: 50%;\n  }\n\n  .col-lg-7 {\n    width: 58.33333%;\n  }\n\n  .col-lg-8 {\n    width: 66.66667%;\n  }\n\n  .col-lg-9 {\n    width: 75%;\n  }\n\n  .col-lg-10 {\n    width: 83.33333%;\n  }\n\n  .col-lg-11 {\n    width: 91.66667%;\n  }\n\n  .col-lg-12 {\n    width: 100%;\n  }\n\n  .col-lg-pull-0 {\n    right: auto;\n  }\n\n  .col-lg-pull-1 {\n    right: 8.33333%;\n  }\n\n  .col-lg-pull-2 {\n    right: 16.66667%;\n  }\n\n  .col-lg-pull-3 {\n    right: 25%;\n  }\n\n  .col-lg-pull-4 {\n    right: 33.33333%;\n  }\n\n  .col-lg-pull-5 {\n    right: 41.66667%;\n  }\n\n  .col-lg-pull-6 {\n    right: 50%;\n  }\n\n  .col-lg-pull-7 {\n    right: 58.33333%;\n  }\n\n  .col-lg-pull-8 {\n    right: 66.66667%;\n  }\n\n  .col-lg-pull-9 {\n    right: 75%;\n  }\n\n  .col-lg-pull-10 {\n    right: 83.33333%;\n  }\n\n  .col-lg-pull-11 {\n    right: 91.66667%;\n  }\n\n  .col-lg-pull-12 {\n    right: 100%;\n  }\n\n  .col-lg-push-0 {\n    left: auto;\n  }\n\n  .col-lg-push-1 {\n    left: 8.33333%;\n  }\n\n  .col-lg-push-2 {\n    left: 16.66667%;\n  }\n\n  .col-lg-push-3 {\n    left: 25%;\n  }\n\n  .col-lg-push-4 {\n    left: 33.33333%;\n  }\n\n  .col-lg-push-5 {\n    left: 41.66667%;\n  }\n\n  .col-lg-push-6 {\n    left: 50%;\n  }\n\n  .col-lg-push-7 {\n    left: 58.33333%;\n  }\n\n  .col-lg-push-8 {\n    left: 66.66667%;\n  }\n\n  .col-lg-push-9 {\n    left: 75%;\n  }\n\n  .col-lg-push-10 {\n    left: 83.33333%;\n  }\n\n  .col-lg-push-11 {\n    left: 91.66667%;\n  }\n\n  .col-lg-push-12 {\n    left: 100%;\n  }\n\n  .col-lg-offset-0 {\n    margin-left: 0%;\n  }\n\n  .col-lg-offset-1 {\n    margin-left: 8.33333%;\n  }\n\n  .col-lg-offset-2 {\n    margin-left: 16.66667%;\n  }\n\n  .col-lg-offset-3 {\n    margin-left: 25%;\n  }\n\n  .col-lg-offset-4 {\n    margin-left: 33.33333%;\n  }\n\n  .col-lg-offset-5 {\n    margin-left: 41.66667%;\n  }\n\n  .col-lg-offset-6 {\n    margin-left: 50%;\n  }\n\n  .col-lg-offset-7 {\n    margin-left: 58.33333%;\n  }\n\n  .col-lg-offset-8 {\n    margin-left: 66.66667%;\n  }\n\n  .col-lg-offset-9 {\n    margin-left: 75%;\n  }\n\n  .col-lg-offset-10 {\n    margin-left: 83.33333%;\n  }\n\n  .col-lg-offset-11 {\n    margin-left: 91.66667%;\n  }\n\n  .col-lg-offset-12 {\n    margin-left: 100%;\n  }\n}\n\ntable {\n  background-color: transparent;\n}\n\ncaption {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  color: #777777;\n  text-align: left;\n}\n\nth {\n  text-align: left;\n}\n\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 20px;\n}\n\n.table > thead > tr > th,\n.table > thead > tr > td,\n.table > tbody > tr > th,\n.table > tbody > tr > td,\n.table > tfoot > tr > th,\n.table > tfoot > tr > td {\n  padding: 8px;\n  line-height: 1.42857;\n  vertical-align: top;\n  border-top: 1px solid #ddd;\n}\n\n.table > thead > tr > th {\n  vertical-align: bottom;\n  border-bottom: 2px solid #ddd;\n}\n\n.table > caption + thead > tr:first-child > th,\n.table > caption + thead > tr:first-child > td,\n.table > colgroup + thead > tr:first-child > th,\n.table > colgroup + thead > tr:first-child > td,\n.table > thead:first-child > tr:first-child > th,\n.table > thead:first-child > tr:first-child > td {\n  border-top: 0;\n}\n\n.table > tbody + tbody {\n  border-top: 2px solid #ddd;\n}\n\n.table .table {\n  background-color: #fff;\n}\n\n.table-condensed > thead > tr > th,\n.table-condensed > thead > tr > td,\n.table-condensed > tbody > tr > th,\n.table-condensed > tbody > tr > td,\n.table-condensed > tfoot > tr > th,\n.table-condensed > tfoot > tr > td {\n  padding: 5px;\n}\n\n.table-bordered {\n  border: 1px solid #ddd;\n}\n\n.table-bordered > thead > tr > th,\n.table-bordered > thead > tr > td,\n.table-bordered > tbody > tr > th,\n.table-bordered > tbody > tr > td,\n.table-bordered > tfoot > tr > th,\n.table-bordered > tfoot > tr > td {\n  border: 1px solid #ddd;\n}\n\n.table-bordered > thead > tr > th,\n.table-bordered > thead > tr > td {\n  border-bottom-width: 2px;\n}\n\n.table-striped > tbody > tr:nth-of-type(odd) {\n  background-color: #f9f9f9;\n}\n\n.table-hover > tbody > tr:hover {\n  background-color: #f5f5f5;\n}\n\ntable col[class*=\"col-\"] {\n  position: static;\n  float: none;\n  display: table-column;\n}\n\ntable td[class*=\"col-\"],\ntable th[class*=\"col-\"] {\n  position: static;\n  float: none;\n  display: table-cell;\n}\n\n.table > thead > tr > td.active,\n.table > thead > tr > th.active,\n.table > thead > tr.active > td,\n.table > thead > tr.active > th,\n.table > tbody > tr > td.active,\n.table > tbody > tr > th.active,\n.table > tbody > tr.active > td,\n.table > tbody > tr.active > th,\n.table > tfoot > tr > td.active,\n.table > tfoot > tr > th.active,\n.table > tfoot > tr.active > td,\n.table > tfoot > tr.active > th {\n  background-color: #f5f5f5;\n}\n\n.table-hover > tbody > tr > td.active:hover,\n.table-hover > tbody > tr > th.active:hover,\n.table-hover > tbody > tr.active:hover > td,\n.table-hover > tbody > tr:hover > .active,\n.table-hover > tbody > tr.active:hover > th {\n  background-color: #e8e8e8;\n}\n\n.table > thead > tr > td.success,\n.table > thead > tr > th.success,\n.table > thead > tr.success > td,\n.table > thead > tr.success > th,\n.table > tbody > tr > td.success,\n.table > tbody > tr > th.success,\n.table > tbody > tr.success > td,\n.table > tbody > tr.success > th,\n.table > tfoot > tr > td.success,\n.table > tfoot > tr > th.success,\n.table > tfoot > tr.success > td,\n.table > tfoot > tr.success > th {\n  background-color: #dff0d8;\n}\n\n.table-hover > tbody > tr > td.success:hover,\n.table-hover > tbody > tr > th.success:hover,\n.table-hover > tbody > tr.success:hover > td,\n.table-hover > tbody > tr:hover > .success,\n.table-hover > tbody > tr.success:hover > th {\n  background-color: #d0e9c6;\n}\n\n.table > thead > tr > td.info,\n.table > thead > tr > th.info,\n.table > thead > tr.info > td,\n.table > thead > tr.info > th,\n.table > tbody > tr > td.info,\n.table > tbody > tr > th.info,\n.table > tbody > tr.info > td,\n.table > tbody > tr.info > th,\n.table > tfoot > tr > td.info,\n.table > tfoot > tr > th.info,\n.table > tfoot > tr.info > td,\n.table > tfoot > tr.info > th {\n  background-color: #d9edf7;\n}\n\n.table-hover > tbody > tr > td.info:hover,\n.table-hover > tbody > tr > th.info:hover,\n.table-hover > tbody > tr.info:hover > td,\n.table-hover > tbody > tr:hover > .info,\n.table-hover > tbody > tr.info:hover > th {\n  background-color: #c4e3f3;\n}\n\n.table > thead > tr > td.warning,\n.table > thead > tr > th.warning,\n.table > thead > tr.warning > td,\n.table > thead > tr.warning > th,\n.table > tbody > tr > td.warning,\n.table > tbody > tr > th.warning,\n.table > tbody > tr.warning > td,\n.table > tbody > tr.warning > th,\n.table > tfoot > tr > td.warning,\n.table > tfoot > tr > th.warning,\n.table > tfoot > tr.warning > td,\n.table > tfoot > tr.warning > th {\n  background-color: #fcf8e3;\n}\n\n.table-hover > tbody > tr > td.warning:hover,\n.table-hover > tbody > tr > th.warning:hover,\n.table-hover > tbody > tr.warning:hover > td,\n.table-hover > tbody > tr:hover > .warning,\n.table-hover > tbody > tr.warning:hover > th {\n  background-color: #faf2cc;\n}\n\n.table > thead > tr > td.danger,\n.table > thead > tr > th.danger,\n.table > thead > tr.danger > td,\n.table > thead > tr.danger > th,\n.table > tbody > tr > td.danger,\n.table > tbody > tr > th.danger,\n.table > tbody > tr.danger > td,\n.table > tbody > tr.danger > th,\n.table > tfoot > tr > td.danger,\n.table > tfoot > tr > th.danger,\n.table > tfoot > tr.danger > td,\n.table > tfoot > tr.danger > th {\n  background-color: #f2dede;\n}\n\n.table-hover > tbody > tr > td.danger:hover,\n.table-hover > tbody > tr > th.danger:hover,\n.table-hover > tbody > tr.danger:hover > td,\n.table-hover > tbody > tr:hover > .danger,\n.table-hover > tbody > tr.danger:hover > th {\n  background-color: #ebcccc;\n}\n\n.table-responsive {\n  overflow-x: auto;\n  min-height: 0.01%;\n}\n\n@media screen and (max-width: 767px) {\n  .table-responsive {\n    width: 100%;\n    margin-bottom: 15px;\n    overflow-y: hidden;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n    border: 1px solid #ddd;\n  }\n\n  .table-responsive > .table {\n    margin-bottom: 0;\n  }\n\n  .table-responsive > .table > thead > tr > th,\n  .table-responsive > .table > thead > tr > td,\n  .table-responsive > .table > tbody > tr > th,\n  .table-responsive > .table > tbody > tr > td,\n  .table-responsive > .table > tfoot > tr > th,\n  .table-responsive > .table > tfoot > tr > td {\n    white-space: nowrap;\n  }\n\n  .table-responsive > .table-bordered {\n    border: 0;\n  }\n\n  .table-responsive > .table-bordered > thead > tr > th:first-child,\n  .table-responsive > .table-bordered > thead > tr > td:first-child,\n  .table-responsive > .table-bordered > tbody > tr > th:first-child,\n  .table-responsive > .table-bordered > tbody > tr > td:first-child,\n  .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n  .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n    border-left: 0;\n  }\n\n  .table-responsive > .table-bordered > thead > tr > th:last-child,\n  .table-responsive > .table-bordered > thead > tr > td:last-child,\n  .table-responsive > .table-bordered > tbody > tr > th:last-child,\n  .table-responsive > .table-bordered > tbody > tr > td:last-child,\n  .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n  .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n    border-right: 0;\n  }\n\n  .table-responsive > .table-bordered > tbody > tr:last-child > th,\n  .table-responsive > .table-bordered > tbody > tr:last-child > td,\n  .table-responsive > .table-bordered > tfoot > tr:last-child > th,\n  .table-responsive > .table-bordered > tfoot > tr:last-child > td {\n    border-bottom: 0;\n  }\n}\n\nfieldset {\n  padding: 0;\n  margin: 0;\n  border: 0;\n  min-width: 0;\n}\n\nlegend {\n  display: block;\n  width: 100%;\n  padding: 0;\n  margin-bottom: 20px;\n  font-size: 21px;\n  line-height: inherit;\n  color: #333333;\n  border: 0;\n  border-bottom: 1px solid #e5e5e5;\n}\n\nlabel {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  font-weight: bold;\n}\n\ninput[type=\"search\"] {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  margin: 4px 0 0;\n  margin-top: 1px \\9;\n  line-height: normal;\n}\n\ninput[type=\"file\"] {\n  display: block;\n}\n\ninput[type=\"range\"] {\n  display: block;\n  width: 100%;\n}\n\nselect[multiple],\nselect[size] {\n  height: auto;\n}\n\ninput[type=\"file\"]:focus,\ninput[type=\"radio\"]:focus,\ninput[type=\"checkbox\"]:focus {\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n\noutput {\n  display: block;\n  padding-top: 7px;\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #555555;\n}\n\n.form-control {\n  display: block;\n  width: 100%;\n  height: 34px;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #555555;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  -webkit-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n}\n\n.form-control:focus {\n  border-color: #66afe9;\n  outline: 0;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n}\n\n.form-control::-moz-placeholder {\n  color: #999;\n  opacity: 1;\n}\n\n.form-control:-ms-input-placeholder {\n  color: #999;\n}\n\n.form-control::-webkit-input-placeholder {\n  color: #999;\n}\n\n.form-control::-ms-expand {\n  border: 0;\n  background-color: transparent;\n}\n\n.form-control[disabled],\n.form-control[readonly],\nfieldset[disabled] .form-control {\n  background-color: #eeeeee;\n  opacity: 1;\n}\n\n.form-control[disabled],\nfieldset[disabled] .form-control {\n  cursor: not-allowed;\n}\n\ntextarea.form-control {\n  height: auto;\n}\n\ninput[type=\"search\"] {\n  -webkit-appearance: none;\n}\n\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  input[type=\"date\"].form-control,\n  input[type=\"time\"].form-control,\n  input[type=\"datetime-local\"].form-control,\n  input[type=\"month\"].form-control {\n    line-height: 34px;\n  }\n\n  input[type=\"date\"].input-sm,\n  .input-group-sm > input[type=\"date\"].form-control,\n  .input-group-sm > input[type=\"date\"].input-group-addon,\n  .input-group-sm > .input-group-btn > input[type=\"date\"].btn,\n  .input-group-sm input[type=\"date\"],\n  input[type=\"time\"].input-sm,\n  .input-group-sm > input[type=\"time\"].form-control,\n  .input-group-sm > input[type=\"time\"].input-group-addon,\n  .input-group-sm > .input-group-btn > input[type=\"time\"].btn,\n  .input-group-sm\n  input[type=\"time\"],\n  input[type=\"datetime-local\"].input-sm,\n  .input-group-sm > input[type=\"datetime-local\"].form-control,\n  .input-group-sm > input[type=\"datetime-local\"].input-group-addon,\n  .input-group-sm > .input-group-btn > input[type=\"datetime-local\"].btn,\n  .input-group-sm\n  input[type=\"datetime-local\"],\n  input[type=\"month\"].input-sm,\n  .input-group-sm > input[type=\"month\"].form-control,\n  .input-group-sm > input[type=\"month\"].input-group-addon,\n  .input-group-sm > .input-group-btn > input[type=\"month\"].btn,\n  .input-group-sm\n  input[type=\"month\"] {\n    line-height: 30px;\n  }\n\n  input[type=\"date\"].input-lg,\n  .input-group-lg > input[type=\"date\"].form-control,\n  .input-group-lg > input[type=\"date\"].input-group-addon,\n  .input-group-lg > .input-group-btn > input[type=\"date\"].btn,\n  .input-group-lg input[type=\"date\"],\n  input[type=\"time\"].input-lg,\n  .input-group-lg > input[type=\"time\"].form-control,\n  .input-group-lg > input[type=\"time\"].input-group-addon,\n  .input-group-lg > .input-group-btn > input[type=\"time\"].btn,\n  .input-group-lg\n  input[type=\"time\"],\n  input[type=\"datetime-local\"].input-lg,\n  .input-group-lg > input[type=\"datetime-local\"].form-control,\n  .input-group-lg > input[type=\"datetime-local\"].input-group-addon,\n  .input-group-lg > .input-group-btn > input[type=\"datetime-local\"].btn,\n  .input-group-lg\n  input[type=\"datetime-local\"],\n  input[type=\"month\"].input-lg,\n  .input-group-lg > input[type=\"month\"].form-control,\n  .input-group-lg > input[type=\"month\"].input-group-addon,\n  .input-group-lg > .input-group-btn > input[type=\"month\"].btn,\n  .input-group-lg\n  input[type=\"month\"] {\n    line-height: 46px;\n  }\n}\n\n.form-group {\n  margin-bottom: 15px;\n}\n\n.radio,\n.checkbox {\n  position: relative;\n  display: block;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.radio label,\n.checkbox label {\n  min-height: 20px;\n  padding-left: 20px;\n  margin-bottom: 0;\n  font-weight: normal;\n  cursor: pointer;\n}\n\n.radio input[type=\"radio\"],\n.radio-inline input[type=\"radio\"],\n.checkbox input[type=\"checkbox\"],\n.checkbox-inline input[type=\"checkbox\"] {\n  position: absolute;\n  margin-left: -20px;\n  margin-top: 4px \\9;\n}\n\n.radio + .radio,\n.checkbox + .checkbox {\n  margin-top: -5px;\n}\n\n.radio-inline,\n.checkbox-inline {\n  position: relative;\n  display: inline-block;\n  padding-left: 20px;\n  margin-bottom: 0;\n  vertical-align: middle;\n  font-weight: normal;\n  cursor: pointer;\n}\n\n.radio-inline + .radio-inline,\n.checkbox-inline + .checkbox-inline {\n  margin-top: 0;\n  margin-left: 10px;\n}\n\ninput[type=\"radio\"][disabled],\ninput[type=\"radio\"].disabled,\nfieldset[disabled] input[type=\"radio\"],\ninput[type=\"checkbox\"][disabled],\ninput[type=\"checkbox\"].disabled,\nfieldset[disabled]\ninput[type=\"checkbox\"] {\n  cursor: not-allowed;\n}\n\n.radio-inline.disabled,\nfieldset[disabled] .radio-inline,\n.checkbox-inline.disabled,\nfieldset[disabled]\n.checkbox-inline {\n  cursor: not-allowed;\n}\n\n.radio.disabled label,\nfieldset[disabled] .radio label,\n.checkbox.disabled label,\nfieldset[disabled]\n.checkbox label {\n  cursor: not-allowed;\n}\n\n.form-control-static {\n  padding-top: 7px;\n  padding-bottom: 7px;\n  margin-bottom: 0;\n  min-height: 34px;\n}\n\n.form-control-static.input-lg,\n.input-group-lg > .form-control-static.form-control,\n.input-group-lg > .form-control-static.input-group-addon,\n.input-group-lg > .input-group-btn > .form-control-static.btn,\n.form-control-static.input-sm,\n.input-group-sm > .form-control-static.form-control,\n.input-group-sm > .form-control-static.input-group-addon,\n.input-group-sm > .input-group-btn > .form-control-static.btn {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.input-sm,\n.input-group-sm > .form-control,\n.input-group-sm > .input-group-addon,\n.input-group-sm > .input-group-btn > .btn {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n\nselect.input-sm,\n.input-group-sm > select.form-control,\n.input-group-sm > select.input-group-addon,\n.input-group-sm > .input-group-btn > select.btn {\n  height: 30px;\n  line-height: 30px;\n}\n\ntextarea.input-sm,\n.input-group-sm > textarea.form-control,\n.input-group-sm > textarea.input-group-addon,\n.input-group-sm > .input-group-btn > textarea.btn,\nselect[multiple].input-sm,\n.input-group-sm > select[multiple].form-control,\n.input-group-sm > select[multiple].input-group-addon,\n.input-group-sm > .input-group-btn > select[multiple].btn {\n  height: auto;\n}\n\n.form-group-sm .form-control {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n\n.form-group-sm select.form-control {\n  height: 30px;\n  line-height: 30px;\n}\n\n.form-group-sm textarea.form-control,\n.form-group-sm select[multiple].form-control {\n  height: auto;\n}\n\n.form-group-sm .form-control-static {\n  height: 30px;\n  min-height: 32px;\n  padding: 6px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n}\n\n.input-lg,\n.input-group-lg > .form-control,\n.input-group-lg > .input-group-addon,\n.input-group-lg > .input-group-btn > .btn {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n  border-radius: 6px;\n}\n\nselect.input-lg,\n.input-group-lg > select.form-control,\n.input-group-lg > select.input-group-addon,\n.input-group-lg > .input-group-btn > select.btn {\n  height: 46px;\n  line-height: 46px;\n}\n\ntextarea.input-lg,\n.input-group-lg > textarea.form-control,\n.input-group-lg > textarea.input-group-addon,\n.input-group-lg > .input-group-btn > textarea.btn,\nselect[multiple].input-lg,\n.input-group-lg > select[multiple].form-control,\n.input-group-lg > select[multiple].input-group-addon,\n.input-group-lg > .input-group-btn > select[multiple].btn {\n  height: auto;\n}\n\n.form-group-lg .form-control {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n  border-radius: 6px;\n}\n\n.form-group-lg select.form-control {\n  height: 46px;\n  line-height: 46px;\n}\n\n.form-group-lg textarea.form-control,\n.form-group-lg select[multiple].form-control {\n  height: auto;\n}\n\n.form-group-lg .form-control-static {\n  height: 46px;\n  min-height: 38px;\n  padding: 11px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n}\n\n.has-feedback {\n  position: relative;\n}\n\n.has-feedback .form-control {\n  padding-right: 42.5px;\n}\n\n.form-control-feedback {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  display: block;\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n  pointer-events: none;\n}\n\n.input-lg + .form-control-feedback,\n.input-group-lg > .form-control + .form-control-feedback,\n.input-group-lg > .input-group-addon + .form-control-feedback,\n.input-group-lg > .input-group-btn > .btn + .form-control-feedback,\n.input-group-lg + .form-control-feedback,\n.form-group-lg .form-control + .form-control-feedback {\n  width: 46px;\n  height: 46px;\n  line-height: 46px;\n}\n\n.input-sm + .form-control-feedback,\n.input-group-sm > .form-control + .form-control-feedback,\n.input-group-sm > .input-group-addon + .form-control-feedback,\n.input-group-sm > .input-group-btn > .btn + .form-control-feedback,\n.input-group-sm + .form-control-feedback,\n.form-group-sm .form-control + .form-control-feedback {\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n}\n\n.has-success .help-block,\n.has-success .control-label,\n.has-success .radio,\n.has-success .checkbox,\n.has-success .radio-inline,\n.has-success .checkbox-inline,\n.has-success.radio label,\n.has-success.checkbox label,\n.has-success.radio-inline label,\n.has-success.checkbox-inline label {\n  color: #3c763d;\n}\n\n.has-success .form-control {\n  border-color: #3c763d;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n}\n\n.has-success .form-control:focus {\n  border-color: #2b542c;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #67b168;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #67b168;\n}\n\n.has-success .input-group-addon {\n  color: #3c763d;\n  border-color: #3c763d;\n  background-color: #dff0d8;\n}\n\n.has-success .form-control-feedback {\n  color: #3c763d;\n}\n\n.has-warning .help-block,\n.has-warning .control-label,\n.has-warning .radio,\n.has-warning .checkbox,\n.has-warning .radio-inline,\n.has-warning .checkbox-inline,\n.has-warning.radio label,\n.has-warning.checkbox label,\n.has-warning.radio-inline label,\n.has-warning.checkbox-inline label {\n  color: #8a6d3b;\n}\n\n.has-warning .form-control {\n  border-color: #8a6d3b;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n}\n\n.has-warning .form-control:focus {\n  border-color: #66512c;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #c0a16b;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #c0a16b;\n}\n\n.has-warning .input-group-addon {\n  color: #8a6d3b;\n  border-color: #8a6d3b;\n  background-color: #fcf8e3;\n}\n\n.has-warning .form-control-feedback {\n  color: #8a6d3b;\n}\n\n.has-error .help-block,\n.has-error .control-label,\n.has-error .radio,\n.has-error .checkbox,\n.has-error .radio-inline,\n.has-error .checkbox-inline,\n.has-error.radio label,\n.has-error.checkbox label,\n.has-error.radio-inline label,\n.has-error.checkbox-inline label {\n  color: #a94442;\n}\n\n.has-error .form-control {\n  border-color: #a94442;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n}\n\n.has-error .form-control:focus {\n  border-color: #843534;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483;\n}\n\n.has-error .input-group-addon {\n  color: #a94442;\n  border-color: #a94442;\n  background-color: #f2dede;\n}\n\n.has-error .form-control-feedback {\n  color: #a94442;\n}\n\n.has-feedback label ~ .form-control-feedback {\n  top: 25px;\n}\n\n.has-feedback label.sr-only ~ .form-control-feedback {\n  top: 0;\n}\n\n.help-block {\n  display: block;\n  margin-top: 5px;\n  margin-bottom: 10px;\n  color: #737373;\n}\n\n@media (min-width: 768px) {\n  .form-inline .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n\n  .form-inline .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n\n  .form-inline .form-control-static {\n    display: inline-block;\n  }\n\n  .form-inline .input-group {\n    display: inline-table;\n    vertical-align: middle;\n  }\n\n  .form-inline .input-group .input-group-addon,\n  .form-inline .input-group .input-group-btn,\n  .form-inline .input-group .form-control {\n    width: auto;\n  }\n\n  .form-inline .input-group > .form-control {\n    width: 100%;\n  }\n\n  .form-inline .control-label {\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n\n  .form-inline .radio,\n  .form-inline .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n\n  .form-inline .radio label,\n  .form-inline .checkbox label {\n    padding-left: 0;\n  }\n\n  .form-inline .radio input[type=\"radio\"],\n  .form-inline .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0;\n  }\n\n  .form-inline .has-feedback .form-control-feedback {\n    top: 0;\n  }\n}\n\n.form-horizontal .radio,\n.form-horizontal .checkbox,\n.form-horizontal .radio-inline,\n.form-horizontal .checkbox-inline {\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-top: 7px;\n}\n\n.form-horizontal .radio,\n.form-horizontal .checkbox {\n  min-height: 27px;\n}\n\n.form-horizontal .form-group {\n  margin-left: -15px;\n  margin-right: -15px;\n}\n\n.form-horizontal .form-group:before,\n.form-horizontal .form-group:after {\n  content: \" \";\n  display: table;\n}\n\n.form-horizontal .form-group:after {\n  clear: both;\n}\n\n@media (min-width: 768px) {\n  .form-horizontal .control-label {\n    text-align: right;\n    margin-bottom: 0;\n    padding-top: 7px;\n  }\n}\n\n.form-horizontal .has-feedback .form-control-feedback {\n  right: 15px;\n}\n\n@media (min-width: 768px) {\n  .form-horizontal .form-group-lg .control-label {\n    padding-top: 11px;\n    font-size: 18px;\n  }\n}\n\n@media (min-width: 768px) {\n  .form-horizontal .form-group-sm .control-label {\n    padding-top: 6px;\n    font-size: 12px;\n  }\n}\n\n.btn {\n  display: inline-block;\n  margin-bottom: 0;\n  font-weight: normal;\n  text-align: center;\n  vertical-align: middle;\n  touch-action: manipulation;\n  cursor: pointer;\n  background-image: none;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857;\n  border-radius: 4px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.btn:focus,\n.btn.focus,\n.btn:active:focus,\n.btn:active.focus,\n.btn.active:focus,\n.btn.active.focus {\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n\n.btn:hover,\n.btn:focus,\n.btn.focus {\n  color: #333;\n  text-decoration: none;\n}\n\n.btn:active,\n.btn.active {\n  outline: 0;\n  background-image: none;\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n}\n\n.btn.disabled,\n.btn[disabled],\nfieldset[disabled] .btn {\n  cursor: not-allowed;\n  opacity: 0.65;\n  filter: alpha(opacity=65);\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n\na.btn.disabled,\nfieldset[disabled] a.btn {\n  pointer-events: none;\n}\n\n.btn-default {\n  color: #333;\n  background-color: #fff;\n  border-color: #ccc;\n}\n\n.btn-default:focus,\n.btn-default.focus {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #8c8c8c;\n}\n\n.btn-default:hover {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #adadad;\n}\n\n.btn-default:active,\n.btn-default.active,\n.open > .btn-default.dropdown-toggle {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #adadad;\n}\n\n.btn-default:active:hover,\n.btn-default:active:focus,\n.btn-default:active.focus,\n.btn-default.active:hover,\n.btn-default.active:focus,\n.btn-default.active.focus,\n.open > .btn-default.dropdown-toggle:hover,\n.open > .btn-default.dropdown-toggle:focus,\n.open > .btn-default.dropdown-toggle.focus {\n  color: #333;\n  background-color: #d4d4d4;\n  border-color: #8c8c8c;\n}\n\n.btn-default:active,\n.btn-default.active,\n.open > .btn-default.dropdown-toggle {\n  background-image: none;\n}\n\n.btn-default.disabled:hover,\n.btn-default.disabled:focus,\n.btn-default.disabled.focus,\n.btn-default[disabled]:hover,\n.btn-default[disabled]:focus,\n.btn-default[disabled].focus,\nfieldset[disabled] .btn-default:hover,\nfieldset[disabled] .btn-default:focus,\nfieldset[disabled] .btn-default.focus {\n  background-color: #fff;\n  border-color: #ccc;\n}\n\n.btn-default .badge {\n  color: #fff;\n  background-color: #333;\n}\n\n.btn-primary {\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #2e6da4;\n}\n\n.btn-primary:focus,\n.btn-primary.focus {\n  color: #fff;\n  background-color: #286090;\n  border-color: #122b40;\n}\n\n.btn-primary:hover {\n  color: #fff;\n  background-color: #286090;\n  border-color: #204d74;\n}\n\n.btn-primary:active,\n.btn-primary.active,\n.open > .btn-primary.dropdown-toggle {\n  color: #fff;\n  background-color: #286090;\n  border-color: #204d74;\n}\n\n.btn-primary:active:hover,\n.btn-primary:active:focus,\n.btn-primary:active.focus,\n.btn-primary.active:hover,\n.btn-primary.active:focus,\n.btn-primary.active.focus,\n.open > .btn-primary.dropdown-toggle:hover,\n.open > .btn-primary.dropdown-toggle:focus,\n.open > .btn-primary.dropdown-toggle.focus {\n  color: #fff;\n  background-color: #204d74;\n  border-color: #122b40;\n}\n\n.btn-primary:active,\n.btn-primary.active,\n.open > .btn-primary.dropdown-toggle {\n  background-image: none;\n}\n\n.btn-primary.disabled:hover,\n.btn-primary.disabled:focus,\n.btn-primary.disabled.focus,\n.btn-primary[disabled]:hover,\n.btn-primary[disabled]:focus,\n.btn-primary[disabled].focus,\nfieldset[disabled] .btn-primary:hover,\nfieldset[disabled] .btn-primary:focus,\nfieldset[disabled] .btn-primary.focus {\n  background-color: #337ab7;\n  border-color: #2e6da4;\n}\n\n.btn-primary .badge {\n  color: #337ab7;\n  background-color: #fff;\n}\n\n.btn-success {\n  color: #fff;\n  background-color: #5cb85c;\n  border-color: #4cae4c;\n}\n\n.btn-success:focus,\n.btn-success.focus {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #255625;\n}\n\n.btn-success:hover {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #398439;\n}\n\n.btn-success:active,\n.btn-success.active,\n.open > .btn-success.dropdown-toggle {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #398439;\n}\n\n.btn-success:active:hover,\n.btn-success:active:focus,\n.btn-success:active.focus,\n.btn-success.active:hover,\n.btn-success.active:focus,\n.btn-success.active.focus,\n.open > .btn-success.dropdown-toggle:hover,\n.open > .btn-success.dropdown-toggle:focus,\n.open > .btn-success.dropdown-toggle.focus {\n  color: #fff;\n  background-color: #398439;\n  border-color: #255625;\n}\n\n.btn-success:active,\n.btn-success.active,\n.open > .btn-success.dropdown-toggle {\n  background-image: none;\n}\n\n.btn-success.disabled:hover,\n.btn-success.disabled:focus,\n.btn-success.disabled.focus,\n.btn-success[disabled]:hover,\n.btn-success[disabled]:focus,\n.btn-success[disabled].focus,\nfieldset[disabled] .btn-success:hover,\nfieldset[disabled] .btn-success:focus,\nfieldset[disabled] .btn-success.focus {\n  background-color: #5cb85c;\n  border-color: #4cae4c;\n}\n\n.btn-success .badge {\n  color: #5cb85c;\n  background-color: #fff;\n}\n\n.btn-info {\n  color: #fff;\n  background-color: #5bc0de;\n  border-color: #46b8da;\n}\n\n.btn-info:focus,\n.btn-info.focus {\n  color: #fff;\n  background-color: #31b0d5;\n  border-color: #1b6d85;\n}\n\n.btn-info:hover {\n  color: #fff;\n  background-color: #31b0d5;\n  border-color: #269abc;\n}\n\n.btn-info:active,\n.btn-info.active,\n.open > .btn-info.dropdown-toggle {\n  color: #fff;\n  background-color: #31b0d5;\n  border-color: #269abc;\n}\n\n.btn-info:active:hover,\n.btn-info:active:focus,\n.btn-info:active.focus,\n.btn-info.active:hover,\n.btn-info.active:focus,\n.btn-info.active.focus,\n.open > .btn-info.dropdown-toggle:hover,\n.open > .btn-info.dropdown-toggle:focus,\n.open > .btn-info.dropdown-toggle.focus {\n  color: #fff;\n  background-color: #269abc;\n  border-color: #1b6d85;\n}\n\n.btn-info:active,\n.btn-info.active,\n.open > .btn-info.dropdown-toggle {\n  background-image: none;\n}\n\n.btn-info.disabled:hover,\n.btn-info.disabled:focus,\n.btn-info.disabled.focus,\n.btn-info[disabled]:hover,\n.btn-info[disabled]:focus,\n.btn-info[disabled].focus,\nfieldset[disabled] .btn-info:hover,\nfieldset[disabled] .btn-info:focus,\nfieldset[disabled] .btn-info.focus {\n  background-color: #5bc0de;\n  border-color: #46b8da;\n}\n\n.btn-info .badge {\n  color: #5bc0de;\n  background-color: #fff;\n}\n\n.btn-warning {\n  color: #fff;\n  background-color: #f0ad4e;\n  border-color: #eea236;\n}\n\n.btn-warning:focus,\n.btn-warning.focus {\n  color: #fff;\n  background-color: #ec971f;\n  border-color: #985f0d;\n}\n\n.btn-warning:hover {\n  color: #fff;\n  background-color: #ec971f;\n  border-color: #d58512;\n}\n\n.btn-warning:active,\n.btn-warning.active,\n.open > .btn-warning.dropdown-toggle {\n  color: #fff;\n  background-color: #ec971f;\n  border-color: #d58512;\n}\n\n.btn-warning:active:hover,\n.btn-warning:active:focus,\n.btn-warning:active.focus,\n.btn-warning.active:hover,\n.btn-warning.active:focus,\n.btn-warning.active.focus,\n.open > .btn-warning.dropdown-toggle:hover,\n.open > .btn-warning.dropdown-toggle:focus,\n.open > .btn-warning.dropdown-toggle.focus {\n  color: #fff;\n  background-color: #d58512;\n  border-color: #985f0d;\n}\n\n.btn-warning:active,\n.btn-warning.active,\n.open > .btn-warning.dropdown-toggle {\n  background-image: none;\n}\n\n.btn-warning.disabled:hover,\n.btn-warning.disabled:focus,\n.btn-warning.disabled.focus,\n.btn-warning[disabled]:hover,\n.btn-warning[disabled]:focus,\n.btn-warning[disabled].focus,\nfieldset[disabled] .btn-warning:hover,\nfieldset[disabled] .btn-warning:focus,\nfieldset[disabled] .btn-warning.focus {\n  background-color: #f0ad4e;\n  border-color: #eea236;\n}\n\n.btn-warning .badge {\n  color: #f0ad4e;\n  background-color: #fff;\n}\n\n.btn-danger {\n  color: #fff;\n  background-color: #d9534f;\n  border-color: #d43f3a;\n}\n\n.btn-danger:focus,\n.btn-danger.focus {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #761c19;\n}\n\n.btn-danger:hover {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #ac2925;\n}\n\n.btn-danger:active,\n.btn-danger.active,\n.open > .btn-danger.dropdown-toggle {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #ac2925;\n}\n\n.btn-danger:active:hover,\n.btn-danger:active:focus,\n.btn-danger:active.focus,\n.btn-danger.active:hover,\n.btn-danger.active:focus,\n.btn-danger.active.focus,\n.open > .btn-danger.dropdown-toggle:hover,\n.open > .btn-danger.dropdown-toggle:focus,\n.open > .btn-danger.dropdown-toggle.focus {\n  color: #fff;\n  background-color: #ac2925;\n  border-color: #761c19;\n}\n\n.btn-danger:active,\n.btn-danger.active,\n.open > .btn-danger.dropdown-toggle {\n  background-image: none;\n}\n\n.btn-danger.disabled:hover,\n.btn-danger.disabled:focus,\n.btn-danger.disabled.focus,\n.btn-danger[disabled]:hover,\n.btn-danger[disabled]:focus,\n.btn-danger[disabled].focus,\nfieldset[disabled] .btn-danger:hover,\nfieldset[disabled] .btn-danger:focus,\nfieldset[disabled] .btn-danger.focus {\n  background-color: #d9534f;\n  border-color: #d43f3a;\n}\n\n.btn-danger .badge {\n  color: #d9534f;\n  background-color: #fff;\n}\n\n.btn-link {\n  color: #337ab7;\n  font-weight: normal;\n  border-radius: 0;\n}\n\n.btn-link,\n.btn-link:active,\n.btn-link.active,\n.btn-link[disabled],\nfieldset[disabled] .btn-link {\n  background-color: transparent;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n\n.btn-link,\n.btn-link:hover,\n.btn-link:focus,\n.btn-link:active {\n  border-color: transparent;\n}\n\n.btn-link:hover,\n.btn-link:focus {\n  color: #23527c;\n  text-decoration: underline;\n  background-color: transparent;\n}\n\n.btn-link[disabled]:hover,\n.btn-link[disabled]:focus,\nfieldset[disabled] .btn-link:hover,\nfieldset[disabled] .btn-link:focus {\n  color: #777777;\n  text-decoration: none;\n}\n\n.btn-lg,\n.btn-group-lg > .btn {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n  border-radius: 6px;\n}\n\n.btn-sm,\n.btn-group-sm > .btn {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n\n.btn-xs,\n.btn-group-xs > .btn {\n  padding: 1px 5px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n\n.btn-block {\n  display: block;\n  width: 100%;\n}\n\n.btn-block + .btn-block {\n  margin-top: 5px;\n}\n\ninput[type=\"submit\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"button\"].btn-block {\n  width: 100%;\n}\n\n.fade {\n  opacity: 0;\n  -webkit-transition: opacity 0.15s linear;\n  -o-transition: opacity 0.15s linear;\n  transition: opacity 0.15s linear;\n}\n\n.fade.in {\n  opacity: 1;\n}\n\n.collapse {\n  display: none;\n}\n\n.collapse.in {\n  display: block;\n}\n\ntr.collapse.in {\n  display: table-row;\n}\n\ntbody.collapse.in {\n  display: table-row-group;\n}\n\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  -webkit-transition-property: height, visibility;\n  transition-property: height, visibility;\n  -webkit-transition-duration: 0.35s;\n  transition-duration: 0.35s;\n  -webkit-transition-timing-function: ease;\n  transition-timing-function: ease;\n}\n\n.caret {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 2px;\n  vertical-align: middle;\n  border-top: 4px dashed;\n  border-top: 4px solid \\9;\n  border-right: 4px solid transparent;\n  border-left: 4px solid transparent;\n}\n\n.dropup,\n.dropdown {\n  position: relative;\n}\n\n.dropdown-toggle:focus {\n  outline: 0;\n}\n\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 160px;\n  padding: 5px 0;\n  margin: 2px 0 0;\n  list-style: none;\n  font-size: 14px;\n  text-align: left;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  background-clip: padding-box;\n}\n\n.dropdown-menu.pull-right {\n  right: 0;\n  left: auto;\n}\n\n.dropdown-menu .divider {\n  height: 1px;\n  margin: 9px 0;\n  overflow: hidden;\n  background-color: #e5e5e5;\n}\n\n.dropdown-menu > li > a {\n  display: block;\n  padding: 3px 20px;\n  clear: both;\n  font-weight: normal;\n  line-height: 1.42857;\n  color: #333333;\n  white-space: nowrap;\n}\n\n.dropdown-menu > li > a:hover,\n.dropdown-menu > li > a:focus {\n  text-decoration: none;\n  color: #262626;\n  background-color: #f5f5f5;\n}\n\n.dropdown-menu > .active > a,\n.dropdown-menu > .active > a:hover,\n.dropdown-menu > .active > a:focus {\n  color: #fff;\n  text-decoration: none;\n  outline: 0;\n  background-color: #337ab7;\n}\n\n.dropdown-menu > .disabled > a,\n.dropdown-menu > .disabled > a:hover,\n.dropdown-menu > .disabled > a:focus {\n  color: #777777;\n}\n\n.dropdown-menu > .disabled > a:hover,\n.dropdown-menu > .disabled > a:focus {\n  text-decoration: none;\n  background-color: transparent;\n  background-image: none;\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);\n  cursor: not-allowed;\n}\n\n.open > .dropdown-menu {\n  display: block;\n}\n\n.open > a {\n  outline: 0;\n}\n\n.dropdown-menu-right {\n  left: auto;\n  right: 0;\n}\n\n.dropdown-menu-left {\n  left: 0;\n  right: auto;\n}\n\n.dropdown-header {\n  display: block;\n  padding: 3px 20px;\n  font-size: 12px;\n  line-height: 1.42857;\n  color: #777777;\n  white-space: nowrap;\n}\n\n.dropdown-backdrop {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  z-index: 990;\n}\n\n.pull-right > .dropdown-menu {\n  right: 0;\n  left: auto;\n}\n\n.dropup .caret,\n.navbar-fixed-bottom .dropdown .caret {\n  border-top: 0;\n  border-bottom: 4px dashed;\n  border-bottom: 4px solid \\9;\n  content: \"\";\n}\n\n.dropup .dropdown-menu,\n.navbar-fixed-bottom .dropdown .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n  margin-bottom: 2px;\n}\n\n@media (min-width: 768px) {\n  .navbar-right .dropdown-menu {\n    right: 0;\n    left: auto;\n  }\n\n  .navbar-right .dropdown-menu-left {\n    left: 0;\n    right: auto;\n  }\n}\n\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.btn-group > .btn,\n.btn-group-vertical > .btn {\n  position: relative;\n  float: left;\n}\n\n.btn-group > .btn:hover,\n.btn-group > .btn:focus,\n.btn-group > .btn:active,\n.btn-group > .btn.active,\n.btn-group-vertical > .btn:hover,\n.btn-group-vertical > .btn:focus,\n.btn-group-vertical > .btn:active,\n.btn-group-vertical > .btn.active {\n  z-index: 2;\n}\n\n.btn-group .btn + .btn,\n.btn-group .btn + .btn-group,\n.btn-group .btn-group + .btn,\n.btn-group .btn-group + .btn-group {\n  margin-left: -1px;\n}\n\n.btn-toolbar {\n  margin-left: -5px;\n}\n\n.btn-toolbar:before,\n.btn-toolbar:after {\n  content: \" \";\n  display: table;\n}\n\n.btn-toolbar:after {\n  clear: both;\n}\n\n.btn-toolbar .btn,\n.btn-toolbar .btn-group,\n.btn-toolbar .input-group {\n  float: left;\n}\n\n.btn-toolbar > .btn,\n.btn-toolbar > .btn-group,\n.btn-toolbar > .input-group {\n  margin-left: 5px;\n}\n\n.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\n  border-radius: 0;\n}\n\n.btn-group > .btn:first-child {\n  margin-left: 0;\n}\n\n.btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.btn-group > .btn:last-child:not(:first-child),\n.btn-group > .dropdown-toggle:not(:first-child) {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.btn-group > .btn-group {\n  float: left;\n}\n\n.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n\n.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.btn-group .dropdown-toggle:active,\n.btn-group.open .dropdown-toggle {\n  outline: 0;\n}\n\n.btn-group > .btn + .dropdown-toggle {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n\n.btn-group > .btn-lg + .dropdown-toggle,\n.btn-group-lg.btn-group > .btn + .dropdown-toggle {\n  padding-left: 12px;\n  padding-right: 12px;\n}\n\n.btn-group.open .dropdown-toggle {\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n}\n\n.btn-group.open .dropdown-toggle.btn-link {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n\n.btn .caret {\n  margin-left: 0;\n}\n\n.btn-lg .caret,\n.btn-group-lg > .btn .caret {\n  border-width: 5px 5px 0;\n  border-bottom-width: 0;\n}\n\n.dropup .btn-lg .caret,\n.dropup .btn-group-lg > .btn .caret {\n  border-width: 0 5px 5px;\n}\n\n.btn-group-vertical > .btn,\n.btn-group-vertical > .btn-group,\n.btn-group-vertical > .btn-group > .btn {\n  display: block;\n  float: none;\n  width: 100%;\n  max-width: 100%;\n}\n\n.btn-group-vertical > .btn-group:before,\n.btn-group-vertical > .btn-group:after {\n  content: \" \";\n  display: table;\n}\n\n.btn-group-vertical > .btn-group:after {\n  clear: both;\n}\n\n.btn-group-vertical > .btn-group > .btn {\n  float: none;\n}\n\n.btn-group-vertical > .btn + .btn,\n.btn-group-vertical > .btn + .btn-group,\n.btn-group-vertical > .btn-group + .btn,\n.btn-group-vertical > .btn-group + .btn-group {\n  margin-top: -1px;\n  margin-left: 0;\n}\n\n.btn-group-vertical > .btn:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n\n.btn-group-vertical > .btn:first-child:not(:last-child) {\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.btn-group-vertical > .btn:last-child:not(:first-child) {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n\n.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.btn-group-justified {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n  border-collapse: separate;\n}\n\n.btn-group-justified > .btn,\n.btn-group-justified > .btn-group {\n  float: none;\n  display: table-cell;\n  width: 1%;\n}\n\n.btn-group-justified > .btn-group .btn {\n  width: 100%;\n}\n\n.btn-group-justified > .btn-group .dropdown-menu {\n  left: auto;\n}\n\n[data-toggle=\"buttons\"] > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn input[type=\"checkbox\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"checkbox\"] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n}\n\n.input-group {\n  position: relative;\n  display: table;\n  border-collapse: separate;\n}\n\n.input-group[class*=\"col-\"] {\n  float: none;\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.input-group .form-control {\n  position: relative;\n  z-index: 2;\n  float: left;\n  width: 100%;\n  margin-bottom: 0;\n}\n\n.input-group .form-control:focus {\n  z-index: 3;\n}\n\n.input-group-addon,\n.input-group-btn,\n.input-group .form-control {\n  display: table-cell;\n}\n\n.input-group-addon:not(:first-child):not(:last-child),\n.input-group-btn:not(:first-child):not(:last-child),\n.input-group .form-control:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n\n.input-group-addon,\n.input-group-btn {\n  width: 1%;\n  white-space: nowrap;\n  vertical-align: middle;\n}\n\n.input-group-addon {\n  padding: 6px 12px;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1;\n  color: #555555;\n  text-align: center;\n  background-color: #eeeeee;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n\n.input-group-addon.input-sm,\n.input-group-sm > .input-group-addon,\n.input-group-sm > .input-group-btn > .input-group-addon.btn {\n  padding: 5px 10px;\n  font-size: 12px;\n  border-radius: 3px;\n}\n\n.input-group-addon.input-lg,\n.input-group-lg > .input-group-addon,\n.input-group-lg > .input-group-btn > .input-group-addon.btn {\n  padding: 10px 16px;\n  font-size: 18px;\n  border-radius: 6px;\n}\n\n.input-group-addon input[type=\"radio\"],\n.input-group-addon input[type=\"checkbox\"] {\n  margin-top: 0;\n}\n\n.input-group .form-control:first-child,\n.input-group-addon:first-child,\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group > .btn,\n.input-group-btn:first-child > .dropdown-toggle,\n.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group-btn:last-child > .btn-group:not(:last-child) > .btn {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.input-group-addon:first-child {\n  border-right: 0;\n}\n\n.input-group .form-control:last-child,\n.input-group-addon:last-child,\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group > .btn,\n.input-group-btn:last-child > .dropdown-toggle,\n.input-group-btn:first-child > .btn:not(:first-child),\n.input-group-btn:first-child > .btn-group:not(:first-child) > .btn {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.input-group-addon:last-child {\n  border-left: 0;\n}\n\n.input-group-btn {\n  position: relative;\n  font-size: 0;\n  white-space: nowrap;\n}\n\n.input-group-btn > .btn {\n  position: relative;\n}\n\n.input-group-btn > .btn + .btn {\n  margin-left: -1px;\n}\n\n.input-group-btn > .btn:hover,\n.input-group-btn > .btn:focus,\n.input-group-btn > .btn:active {\n  z-index: 2;\n}\n\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group {\n  margin-right: -1px;\n}\n\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group {\n  z-index: 2;\n  margin-left: -1px;\n}\n\n.nav {\n  margin-bottom: 0;\n  padding-left: 0;\n  list-style: none;\n}\n\n.nav:before,\n.nav:after {\n  content: \" \";\n  display: table;\n}\n\n.nav:after {\n  clear: both;\n}\n\n.nav > li {\n  position: relative;\n  display: block;\n}\n\n.nav > li > a {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n}\n\n.nav > li > a:hover,\n.nav > li > a:focus {\n  text-decoration: none;\n  background-color: #eeeeee;\n}\n\n.nav > li.disabled > a {\n  color: #777777;\n}\n\n.nav > li.disabled > a:hover,\n.nav > li.disabled > a:focus {\n  color: #777777;\n  text-decoration: none;\n  background-color: transparent;\n  cursor: not-allowed;\n}\n\n.nav .open > a,\n.nav .open > a:hover,\n.nav .open > a:focus {\n  background-color: #eeeeee;\n  border-color: #337ab7;\n}\n\n.nav .nav-divider {\n  height: 1px;\n  margin: 9px 0;\n  overflow: hidden;\n  background-color: #e5e5e5;\n}\n\n.nav > li > a > img {\n  max-width: none;\n}\n\n.nav-tabs {\n  border-bottom: 1px solid #ddd;\n}\n\n.nav-tabs > li {\n  float: left;\n  margin-bottom: -1px;\n}\n\n.nav-tabs > li > a {\n  margin-right: 2px;\n  line-height: 1.42857;\n  border: 1px solid transparent;\n  border-radius: 4px 4px 0 0;\n}\n\n.nav-tabs > li > a:hover {\n  border-color: #eeeeee #eeeeee #ddd;\n}\n\n.nav-tabs > li.active > a,\n.nav-tabs > li.active > a:hover,\n.nav-tabs > li.active > a:focus {\n  color: #555555;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-bottom-color: transparent;\n  cursor: default;\n}\n\n.nav-pills > li {\n  float: left;\n}\n\n.nav-pills > li > a {\n  border-radius: 4px;\n}\n\n.nav-pills > li + li {\n  margin-left: 2px;\n}\n\n.nav-pills > li.active > a,\n.nav-pills > li.active > a:hover,\n.nav-pills > li.active > a:focus {\n  color: #fff;\n  background-color: #337ab7;\n}\n\n.nav-stacked > li {\n  float: none;\n}\n\n.nav-stacked > li + li {\n  margin-top: 2px;\n  margin-left: 0;\n}\n\n.nav-justified,\n.nav-tabs.nav-justified {\n  width: 100%;\n}\n\n.nav-justified > li,\n.nav-tabs.nav-justified > li {\n  float: none;\n}\n\n.nav-justified > li > a,\n.nav-tabs.nav-justified > li > a {\n  text-align: center;\n  margin-bottom: 5px;\n}\n\n.nav-justified > .dropdown .dropdown-menu {\n  top: auto;\n  left: auto;\n}\n\n@media (min-width: 768px) {\n  .nav-justified > li,\n  .nav-tabs.nav-justified > li {\n    display: table-cell;\n    width: 1%;\n  }\n\n  .nav-justified > li > a,\n  .nav-tabs.nav-justified > li > a {\n    margin-bottom: 0;\n  }\n}\n\n.nav-tabs-justified,\n.nav-tabs.nav-justified {\n  border-bottom: 0;\n}\n\n.nav-tabs-justified > li > a,\n.nav-tabs.nav-justified > li > a {\n  margin-right: 0;\n  border-radius: 4px;\n}\n\n.nav-tabs-justified > .active > a,\n.nav-tabs.nav-justified > .active > a,\n.nav-tabs-justified > .active > a:hover,\n.nav-tabs.nav-justified > .active > a:hover,\n.nav-tabs-justified > .active > a:focus,\n.nav-tabs.nav-justified > .active > a:focus {\n  border: 1px solid #ddd;\n}\n\n@media (min-width: 768px) {\n  .nav-tabs-justified > li > a,\n  .nav-tabs.nav-justified > li > a {\n    border-bottom: 1px solid #ddd;\n    border-radius: 4px 4px 0 0;\n  }\n\n  .nav-tabs-justified > .active > a,\n  .nav-tabs.nav-justified > .active > a,\n  .nav-tabs-justified > .active > a:hover,\n  .nav-tabs.nav-justified > .active > a:hover,\n  .nav-tabs-justified > .active > a:focus,\n  .nav-tabs.nav-justified > .active > a:focus {\n    border-bottom-color: #fff;\n  }\n}\n\n.tab-content > .tab-pane {\n  display: none;\n}\n\n.tab-content > .active {\n  display: block;\n}\n\n.nav-tabs .dropdown-menu {\n  margin-top: -1px;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.navbar {\n  position: relative;\n  min-height: 50px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n}\n\n.navbar:before,\n.navbar:after {\n  content: \" \";\n  display: table;\n}\n\n.navbar:after {\n  clear: both;\n}\n\n@media (min-width: 768px) {\n  .navbar {\n    border-radius: 4px;\n  }\n}\n\n.navbar-header:before,\n.navbar-header:after {\n  content: \" \";\n  display: table;\n}\n\n.navbar-header:after {\n  clear: both;\n}\n\n@media (min-width: 768px) {\n  .navbar-header {\n    float: left;\n  }\n}\n\n.navbar-collapse {\n  overflow-x: visible;\n  padding-right: 15px;\n  padding-left: 15px;\n  border-top: 1px solid transparent;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);\n  -webkit-overflow-scrolling: touch;\n}\n\n.navbar-collapse:before,\n.navbar-collapse:after {\n  content: \" \";\n  display: table;\n}\n\n.navbar-collapse:after {\n  clear: both;\n}\n\n.navbar-collapse.in {\n  overflow-y: auto;\n}\n\n@media (min-width: 768px) {\n  .navbar-collapse {\n    width: auto;\n    border-top: 0;\n    box-shadow: none;\n  }\n\n  .navbar-collapse.collapse {\n    display: block !important;\n    height: auto !important;\n    padding-bottom: 0;\n    overflow: visible !important;\n  }\n\n  .navbar-collapse.in {\n    overflow-y: visible;\n  }\n\n  .navbar-fixed-top .navbar-collapse,\n  .navbar-static-top .navbar-collapse,\n  .navbar-fixed-bottom .navbar-collapse {\n    padding-left: 0;\n    padding-right: 0;\n  }\n}\n\n.navbar-fixed-top .navbar-collapse,\n.navbar-fixed-bottom .navbar-collapse {\n  max-height: 340px;\n}\n\n@media (max-device-width: 480px) and (orientation: landscape) {\n  .navbar-fixed-top .navbar-collapse,\n  .navbar-fixed-bottom .navbar-collapse {\n    max-height: 200px;\n  }\n}\n\n.container > .navbar-header,\n.container > .navbar-collapse,\n.container-fluid > .navbar-header,\n.container-fluid > .navbar-collapse {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n\n@media (min-width: 768px) {\n  .container > .navbar-header,\n  .container > .navbar-collapse,\n  .container-fluid > .navbar-header,\n  .container-fluid > .navbar-collapse {\n    margin-right: 0;\n    margin-left: 0;\n  }\n}\n\n.navbar-static-top {\n  z-index: 1000;\n  border-width: 0 0 1px;\n}\n\n@media (min-width: 768px) {\n  .navbar-static-top {\n    border-radius: 0;\n  }\n}\n\n.navbar-fixed-top,\n.navbar-fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n}\n\n@media (min-width: 768px) {\n  .navbar-fixed-top,\n  .navbar-fixed-bottom {\n    border-radius: 0;\n  }\n}\n\n.navbar-fixed-top {\n  top: 0;\n  border-width: 0 0 1px;\n}\n\n.navbar-fixed-bottom {\n  bottom: 0;\n  margin-bottom: 0;\n  border-width: 1px 0 0;\n}\n\n.navbar-brand {\n  float: left;\n  padding: 15px 15px;\n  font-size: 18px;\n  line-height: 20px;\n  height: 50px;\n}\n\n.navbar-brand:hover,\n.navbar-brand:focus {\n  text-decoration: none;\n}\n\n.navbar-brand > img {\n  display: block;\n}\n\n@media (min-width: 768px) {\n  .navbar > .container .navbar-brand,\n  .navbar > .container-fluid .navbar-brand {\n    margin-left: -15px;\n  }\n}\n\n.navbar-toggle {\n  position: relative;\n  float: right;\n  margin-right: 15px;\n  padding: 9px 10px;\n  margin-top: 8px;\n  margin-bottom: 8px;\n  background-color: transparent;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n\n.navbar-toggle:focus {\n  outline: 0;\n}\n\n.navbar-toggle .icon-bar {\n  display: block;\n  width: 22px;\n  height: 2px;\n  border-radius: 1px;\n}\n\n.navbar-toggle .icon-bar + .icon-bar {\n  margin-top: 4px;\n}\n\n@media (min-width: 768px) {\n  .navbar-toggle {\n    display: none;\n  }\n}\n\n.navbar-nav {\n  margin: 7.5px -15px;\n}\n\n.navbar-nav > li > a {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  line-height: 20px;\n}\n\n@media (max-width: 767px) {\n  .navbar-nav .open .dropdown-menu {\n    position: static;\n    float: none;\n    width: auto;\n    margin-top: 0;\n    background-color: transparent;\n    border: 0;\n    box-shadow: none;\n  }\n\n  .navbar-nav .open .dropdown-menu > li > a,\n  .navbar-nav .open .dropdown-menu .dropdown-header {\n    padding: 5px 15px 5px 25px;\n  }\n\n  .navbar-nav .open .dropdown-menu > li > a {\n    line-height: 20px;\n  }\n\n  .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-nav .open .dropdown-menu > li > a:focus {\n    background-image: none;\n  }\n}\n\n@media (min-width: 768px) {\n  .navbar-nav {\n    float: left;\n    margin: 0;\n  }\n\n  .navbar-nav > li {\n    float: left;\n  }\n\n  .navbar-nav > li > a {\n    padding-top: 15px;\n    padding-bottom: 15px;\n  }\n}\n\n.navbar-form {\n  margin-left: -15px;\n  margin-right: -15px;\n  padding: 10px 15px;\n  border-top: 1px solid transparent;\n  border-bottom: 1px solid transparent;\n  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n\n@media (min-width: 768px) {\n  .navbar-form .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n\n  .navbar-form .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n\n  .navbar-form .form-control-static {\n    display: inline-block;\n  }\n\n  .navbar-form .input-group {\n    display: inline-table;\n    vertical-align: middle;\n  }\n\n  .navbar-form .input-group .input-group-addon,\n  .navbar-form .input-group .input-group-btn,\n  .navbar-form .input-group .form-control {\n    width: auto;\n  }\n\n  .navbar-form .input-group > .form-control {\n    width: 100%;\n  }\n\n  .navbar-form .control-label {\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n\n  .navbar-form .radio,\n  .navbar-form .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n\n  .navbar-form .radio label,\n  .navbar-form .checkbox label {\n    padding-left: 0;\n  }\n\n  .navbar-form .radio input[type=\"radio\"],\n  .navbar-form .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0;\n  }\n\n  .navbar-form .has-feedback .form-control-feedback {\n    top: 0;\n  }\n}\n\n@media (max-width: 767px) {\n  .navbar-form .form-group {\n    margin-bottom: 5px;\n  }\n\n  .navbar-form .form-group:last-child {\n    margin-bottom: 0;\n  }\n}\n\n@media (min-width: 768px) {\n  .navbar-form {\n    width: auto;\n    border: 0;\n    margin-left: 0;\n    margin-right: 0;\n    padding-top: 0;\n    padding-bottom: 0;\n    -webkit-box-shadow: none;\n    box-shadow: none;\n  }\n}\n\n.navbar-nav > li > .dropdown-menu {\n  margin-top: 0;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {\n  margin-bottom: 0;\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.navbar-btn {\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n\n.navbar-btn.btn-sm,\n.btn-group-sm > .navbar-btn.btn {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.navbar-btn.btn-xs,\n.btn-group-xs > .navbar-btn.btn {\n  margin-top: 14px;\n  margin-bottom: 14px;\n}\n\n.navbar-text {\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n\n@media (min-width: 768px) {\n  .navbar-text {\n    float: left;\n    margin-left: 15px;\n    margin-right: 15px;\n  }\n}\n\n@media (min-width: 768px) {\n  .navbar-left {\n    float: left !important;\n  }\n\n  .navbar-right {\n    float: right !important;\n    margin-right: -15px;\n  }\n\n  .navbar-right ~ .navbar-right {\n    margin-right: 0;\n  }\n}\n\n.navbar-default {\n  background-color: #f8f8f8;\n  border-color: #e7e7e7;\n}\n\n.navbar-default .navbar-brand {\n  color: #777;\n}\n\n.navbar-default .navbar-brand:hover,\n.navbar-default .navbar-brand:focus {\n  color: #5e5e5e;\n  background-color: transparent;\n}\n\n.navbar-default .navbar-text {\n  color: #777;\n}\n\n.navbar-default .navbar-nav > li > a {\n  color: #777;\n}\n\n.navbar-default .navbar-nav > li > a:hover,\n.navbar-default .navbar-nav > li > a:focus {\n  color: #333;\n  background-color: transparent;\n}\n\n.navbar-default .navbar-nav > .active > a,\n.navbar-default .navbar-nav > .active > a:hover,\n.navbar-default .navbar-nav > .active > a:focus {\n  color: #555;\n  background-color: #e7e7e7;\n}\n\n.navbar-default .navbar-nav > .disabled > a,\n.navbar-default .navbar-nav > .disabled > a:hover,\n.navbar-default .navbar-nav > .disabled > a:focus {\n  color: #ccc;\n  background-color: transparent;\n}\n\n.navbar-default .navbar-toggle {\n  border-color: #ddd;\n}\n\n.navbar-default .navbar-toggle:hover,\n.navbar-default .navbar-toggle:focus {\n  background-color: #ddd;\n}\n\n.navbar-default .navbar-toggle .icon-bar {\n  background-color: #888;\n}\n\n.navbar-default .navbar-collapse,\n.navbar-default .navbar-form {\n  border-color: #e7e7e7;\n}\n\n.navbar-default .navbar-nav > .open > a,\n.navbar-default .navbar-nav > .open > a:hover,\n.navbar-default .navbar-nav > .open > a:focus {\n  background-color: #e7e7e7;\n  color: #555;\n}\n\n@media (max-width: 767px) {\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a {\n    color: #777;\n  }\n\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {\n    color: #333;\n    background-color: transparent;\n  }\n\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a,\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {\n    color: #555;\n    background-color: #e7e7e7;\n  }\n\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a,\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n    color: #ccc;\n    background-color: transparent;\n  }\n}\n\n.navbar-default .navbar-link {\n  color: #777;\n}\n\n.navbar-default .navbar-link:hover {\n  color: #333;\n}\n\n.navbar-default .btn-link {\n  color: #777;\n}\n\n.navbar-default .btn-link:hover,\n.navbar-default .btn-link:focus {\n  color: #333;\n}\n\n.navbar-default .btn-link[disabled]:hover,\n.navbar-default .btn-link[disabled]:focus,\nfieldset[disabled] .navbar-default .btn-link:hover,\nfieldset[disabled] .navbar-default .btn-link:focus {\n  color: #ccc;\n}\n\n.navbar-inverse {\n  background-color: #222;\n  border-color: #090909;\n}\n\n.navbar-inverse .navbar-brand {\n  color: #9d9d9d;\n}\n\n.navbar-inverse .navbar-brand:hover,\n.navbar-inverse .navbar-brand:focus {\n  color: #fff;\n  background-color: transparent;\n}\n\n.navbar-inverse .navbar-text {\n  color: #9d9d9d;\n}\n\n.navbar-inverse .navbar-nav > li > a {\n  color: #9d9d9d;\n}\n\n.navbar-inverse .navbar-nav > li > a:hover,\n.navbar-inverse .navbar-nav > li > a:focus {\n  color: #fff;\n  background-color: transparent;\n}\n\n.navbar-inverse .navbar-nav > .active > a,\n.navbar-inverse .navbar-nav > .active > a:hover,\n.navbar-inverse .navbar-nav > .active > a:focus {\n  color: #fff;\n  background-color: #090909;\n}\n\n.navbar-inverse .navbar-nav > .disabled > a,\n.navbar-inverse .navbar-nav > .disabled > a:hover,\n.navbar-inverse .navbar-nav > .disabled > a:focus {\n  color: #444;\n  background-color: transparent;\n}\n\n.navbar-inverse .navbar-toggle {\n  border-color: #333;\n}\n\n.navbar-inverse .navbar-toggle:hover,\n.navbar-inverse .navbar-toggle:focus {\n  background-color: #333;\n}\n\n.navbar-inverse .navbar-toggle .icon-bar {\n  background-color: #fff;\n}\n\n.navbar-inverse .navbar-collapse,\n.navbar-inverse .navbar-form {\n  border-color: #101010;\n}\n\n.navbar-inverse .navbar-nav > .open > a,\n.navbar-inverse .navbar-nav > .open > a:hover,\n.navbar-inverse .navbar-nav > .open > a:focus {\n  background-color: #090909;\n  color: #fff;\n}\n\n@media (max-width: 767px) {\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header {\n    border-color: #090909;\n  }\n\n  .navbar-inverse .navbar-nav .open .dropdown-menu .divider {\n    background-color: #090909;\n  }\n\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {\n    color: #9d9d9d;\n  }\n\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus {\n    color: #fff;\n    background-color: transparent;\n  }\n\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus {\n    color: #fff;\n    background-color: #090909;\n  }\n\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n    color: #444;\n    background-color: transparent;\n  }\n}\n\n.navbar-inverse .navbar-link {\n  color: #9d9d9d;\n}\n\n.navbar-inverse .navbar-link:hover {\n  color: #fff;\n}\n\n.navbar-inverse .btn-link {\n  color: #9d9d9d;\n}\n\n.navbar-inverse .btn-link:hover,\n.navbar-inverse .btn-link:focus {\n  color: #fff;\n}\n\n.navbar-inverse .btn-link[disabled]:hover,\n.navbar-inverse .btn-link[disabled]:focus,\nfieldset[disabled] .navbar-inverse .btn-link:hover,\nfieldset[disabled] .navbar-inverse .btn-link:focus {\n  color: #444;\n}\n\n.breadcrumb {\n  padding: 8px 15px;\n  margin-bottom: 20px;\n  list-style: none;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n}\n\n.breadcrumb > li {\n  display: inline-block;\n}\n\n.breadcrumb > li + li:before {\n  content: \"/\\A0\";\n  padding: 0 5px;\n  color: #ccc;\n}\n\n.breadcrumb > .active {\n  color: #777777;\n}\n\n.pagination {\n  display: inline-block;\n  padding-left: 0;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n\n.pagination > li {\n  display: inline;\n}\n\n.pagination > li > a,\n.pagination > li > span {\n  position: relative;\n  float: left;\n  padding: 6px 12px;\n  line-height: 1.42857;\n  text-decoration: none;\n  color: #337ab7;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  margin-left: -1px;\n}\n\n.pagination > li:first-child > a,\n.pagination > li:first-child > span {\n  margin-left: 0;\n  border-bottom-left-radius: 4px;\n  border-top-left-radius: 4px;\n}\n\n.pagination > li:last-child > a,\n.pagination > li:last-child > span {\n  border-bottom-right-radius: 4px;\n  border-top-right-radius: 4px;\n}\n\n.pagination > li > a:hover,\n.pagination > li > a:focus,\n.pagination > li > span:hover,\n.pagination > li > span:focus {\n  z-index: 2;\n  color: #23527c;\n  background-color: #eeeeee;\n  border-color: #ddd;\n}\n\n.pagination > .active > a,\n.pagination > .active > a:hover,\n.pagination > .active > a:focus,\n.pagination > .active > span,\n.pagination > .active > span:hover,\n.pagination > .active > span:focus {\n  z-index: 3;\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #337ab7;\n  cursor: default;\n}\n\n.pagination > .disabled > span,\n.pagination > .disabled > span:hover,\n.pagination > .disabled > span:focus,\n.pagination > .disabled > a,\n.pagination > .disabled > a:hover,\n.pagination > .disabled > a:focus {\n  color: #777777;\n  background-color: #fff;\n  border-color: #ddd;\n  cursor: not-allowed;\n}\n\n.pagination-lg > li > a,\n.pagination-lg > li > span {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n}\n\n.pagination-lg > li:first-child > a,\n.pagination-lg > li:first-child > span {\n  border-bottom-left-radius: 6px;\n  border-top-left-radius: 6px;\n}\n\n.pagination-lg > li:last-child > a,\n.pagination-lg > li:last-child > span {\n  border-bottom-right-radius: 6px;\n  border-top-right-radius: 6px;\n}\n\n.pagination-sm > li > a,\n.pagination-sm > li > span {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n}\n\n.pagination-sm > li:first-child > a,\n.pagination-sm > li:first-child > span {\n  border-bottom-left-radius: 3px;\n  border-top-left-radius: 3px;\n}\n\n.pagination-sm > li:last-child > a,\n.pagination-sm > li:last-child > span {\n  border-bottom-right-radius: 3px;\n  border-top-right-radius: 3px;\n}\n\n.pager {\n  padding-left: 0;\n  margin: 20px 0;\n  list-style: none;\n  text-align: center;\n}\n\n.pager:before,\n.pager:after {\n  content: \" \";\n  display: table;\n}\n\n.pager:after {\n  clear: both;\n}\n\n.pager li {\n  display: inline;\n}\n\n.pager li > a,\n.pager li > span {\n  display: inline-block;\n  padding: 5px 14px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 15px;\n}\n\n.pager li > a:hover,\n.pager li > a:focus {\n  text-decoration: none;\n  background-color: #eeeeee;\n}\n\n.pager .next > a,\n.pager .next > span {\n  float: right;\n}\n\n.pager .previous > a,\n.pager .previous > span {\n  float: left;\n}\n\n.pager .disabled > a,\n.pager .disabled > a:hover,\n.pager .disabled > a:focus,\n.pager .disabled > span {\n  color: #777777;\n  background-color: #fff;\n  cursor: not-allowed;\n}\n\n.label {\n  display: inline;\n  padding: .2em .6em .3em;\n  font-size: 75%;\n  font-weight: bold;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: .25em;\n}\n\n.label:empty {\n  display: none;\n}\n\n.btn .label {\n  position: relative;\n  top: -1px;\n}\n\na.label:hover,\na.label:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.label-default {\n  background-color: #777777;\n}\n\n.label-default[href]:hover,\n.label-default[href]:focus {\n  background-color: #5e5e5e;\n}\n\n.label-primary {\n  background-color: #337ab7;\n}\n\n.label-primary[href]:hover,\n.label-primary[href]:focus {\n  background-color: #286090;\n}\n\n.label-success {\n  background-color: #5cb85c;\n}\n\n.label-success[href]:hover,\n.label-success[href]:focus {\n  background-color: #449d44;\n}\n\n.label-info {\n  background-color: #5bc0de;\n}\n\n.label-info[href]:hover,\n.label-info[href]:focus {\n  background-color: #31b0d5;\n}\n\n.label-warning {\n  background-color: #f0ad4e;\n}\n\n.label-warning[href]:hover,\n.label-warning[href]:focus {\n  background-color: #ec971f;\n}\n\n.label-danger {\n  background-color: #d9534f;\n}\n\n.label-danger[href]:hover,\n.label-danger[href]:focus {\n  background-color: #c9302c;\n}\n\n.badge {\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: bold;\n  color: #fff;\n  line-height: 1;\n  vertical-align: middle;\n  white-space: nowrap;\n  text-align: center;\n  background-color: #777777;\n  border-radius: 10px;\n}\n\n.badge:empty {\n  display: none;\n}\n\n.btn .badge {\n  position: relative;\n  top: -1px;\n}\n\n.btn-xs .badge,\n.btn-group-xs > .btn .badge,\n.btn-group-xs > .btn .badge {\n  top: 0;\n  padding: 1px 5px;\n}\n\n.list-group-item.active > .badge,\n.nav-pills > .active > a > .badge {\n  color: #337ab7;\n  background-color: #fff;\n}\n\n.list-group-item > .badge {\n  float: right;\n}\n\n.list-group-item > .badge + .badge {\n  margin-right: 5px;\n}\n\n.nav-pills > li > a > .badge {\n  margin-left: 3px;\n}\n\na.badge:hover,\na.badge:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.jumbotron {\n  padding-top: 30px;\n  padding-bottom: 30px;\n  margin-bottom: 30px;\n  color: inherit;\n  background-color: #eeeeee;\n}\n\n.jumbotron h1,\n.jumbotron .h1 {\n  color: inherit;\n}\n\n.jumbotron p {\n  margin-bottom: 15px;\n  font-size: 21px;\n  font-weight: 200;\n}\n\n.jumbotron > hr {\n  border-top-color: #d5d5d5;\n}\n\n.container .jumbotron,\n.container-fluid .jumbotron {\n  border-radius: 6px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.jumbotron .container {\n  max-width: 100%;\n}\n\n@media screen and (min-width: 768px) {\n  .jumbotron {\n    padding-top: 48px;\n    padding-bottom: 48px;\n  }\n\n  .container .jumbotron,\n  .container-fluid .jumbotron {\n    padding-left: 60px;\n    padding-right: 60px;\n  }\n\n  .jumbotron h1,\n  .jumbotron .h1 {\n    font-size: 63px;\n  }\n}\n\n.thumbnail {\n  display: block;\n  padding: 4px;\n  margin-bottom: 20px;\n  line-height: 1.42857;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  -webkit-transition: border 0.2s ease-in-out;\n  -o-transition: border 0.2s ease-in-out;\n  transition: border 0.2s ease-in-out;\n}\n\n.thumbnail > img,\n.thumbnail a > img {\n  display: block;\n  max-width: 100%;\n  height: auto;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.thumbnail .caption {\n  padding: 9px;\n  color: #333333;\n}\n\na.thumbnail:hover,\na.thumbnail:focus,\na.thumbnail.active {\n  border-color: #337ab7;\n}\n\n.alert {\n  padding: 15px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n\n.alert h4 {\n  margin-top: 0;\n  color: inherit;\n}\n\n.alert .alert-link {\n  font-weight: bold;\n}\n\n.alert > p,\n.alert > ul {\n  margin-bottom: 0;\n}\n\n.alert > p + p {\n  margin-top: 5px;\n}\n\n.alert-dismissable,\n.alert-dismissible {\n  padding-right: 35px;\n}\n\n.alert-dismissable .close,\n.alert-dismissible .close {\n  position: relative;\n  top: -2px;\n  right: -21px;\n  color: inherit;\n}\n\n.alert-success {\n  background-color: #dff0d8;\n  border-color: #d6e9c6;\n  color: #3c763d;\n}\n\n.alert-success hr {\n  border-top-color: #c9e2b3;\n}\n\n.alert-success .alert-link {\n  color: #2b542c;\n}\n\n.alert-info {\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n  color: #31708f;\n}\n\n.alert-info hr {\n  border-top-color: #a6e1ec;\n}\n\n.alert-info .alert-link {\n  color: #245269;\n}\n\n.alert-warning {\n  background-color: #fcf8e3;\n  border-color: #faebcc;\n  color: #8a6d3b;\n}\n\n.alert-warning hr {\n  border-top-color: #f7e1b5;\n}\n\n.alert-warning .alert-link {\n  color: #66512c;\n}\n\n.alert-danger {\n  background-color: #f2dede;\n  border-color: #ebccd1;\n  color: #a94442;\n}\n\n.alert-danger hr {\n  border-top-color: #e4b9c0;\n}\n\n.alert-danger .alert-link {\n  color: #843534;\n}\n\n@-webkit-keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0;\n  }\n\n  to {\n    background-position: 0 0;\n  }\n}\n\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0;\n  }\n\n  to {\n    background-position: 0 0;\n  }\n}\n\n.progress {\n  overflow: hidden;\n  height: 20px;\n  margin-bottom: 20px;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n\n.progress-bar {\n  float: left;\n  width: 0%;\n  height: 100%;\n  font-size: 12px;\n  line-height: 20px;\n  color: #fff;\n  text-align: center;\n  background-color: #337ab7;\n  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);\n  -webkit-transition: width 0.6s ease;\n  -o-transition: width 0.6s ease;\n  transition: width 0.6s ease;\n}\n\n.progress-striped .progress-bar,\n.progress-bar-striped {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 40px 40px;\n}\n\n.progress.active .progress-bar,\n.progress-bar.active {\n  -webkit-animation: progress-bar-stripes 2s linear infinite;\n  -o-animation: progress-bar-stripes 2s linear infinite;\n  animation: progress-bar-stripes 2s linear infinite;\n}\n\n.progress-bar-success {\n  background-color: #5cb85c;\n}\n\n.progress-striped .progress-bar-success {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n}\n\n.progress-bar-info {\n  background-color: #5bc0de;\n}\n\n.progress-striped .progress-bar-info {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n}\n\n.progress-bar-warning {\n  background-color: #f0ad4e;\n}\n\n.progress-striped .progress-bar-warning {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n}\n\n.progress-bar-danger {\n  background-color: #d9534f;\n}\n\n.progress-striped .progress-bar-danger {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n}\n\n.media {\n  margin-top: 15px;\n}\n\n.media:first-child {\n  margin-top: 0;\n}\n\n.media,\n.media-body {\n  zoom: 1;\n  overflow: hidden;\n}\n\n.media-body {\n  width: 10000px;\n}\n\n.media-object {\n  display: block;\n}\n\n.media-object.img-thumbnail {\n  max-width: none;\n}\n\n.media-right,\n.media > .pull-right {\n  padding-left: 10px;\n}\n\n.media-left,\n.media > .pull-left {\n  padding-right: 10px;\n}\n\n.media-left,\n.media-right,\n.media-body {\n  display: table-cell;\n  vertical-align: top;\n}\n\n.media-middle {\n  vertical-align: middle;\n}\n\n.media-bottom {\n  vertical-align: bottom;\n}\n\n.media-heading {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n\n.media-list {\n  padding-left: 0;\n  list-style: none;\n}\n\n.list-group {\n  margin-bottom: 20px;\n  padding-left: 0;\n}\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n}\n\n.list-group-item:first-child {\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px;\n}\n\n.list-group-item:last-child {\n  margin-bottom: 0;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n\na.list-group-item,\nbutton.list-group-item {\n  color: #555;\n}\n\na.list-group-item .list-group-item-heading,\nbutton.list-group-item .list-group-item-heading {\n  color: #333;\n}\n\na.list-group-item:hover,\na.list-group-item:focus,\nbutton.list-group-item:hover,\nbutton.list-group-item:focus {\n  text-decoration: none;\n  color: #555;\n  background-color: #f5f5f5;\n}\n\nbutton.list-group-item {\n  width: 100%;\n  text-align: left;\n}\n\n.list-group-item.disabled,\n.list-group-item.disabled:hover,\n.list-group-item.disabled:focus {\n  background-color: #eeeeee;\n  color: #777777;\n  cursor: not-allowed;\n}\n\n.list-group-item.disabled .list-group-item-heading,\n.list-group-item.disabled:hover .list-group-item-heading,\n.list-group-item.disabled:focus .list-group-item-heading {\n  color: inherit;\n}\n\n.list-group-item.disabled .list-group-item-text,\n.list-group-item.disabled:hover .list-group-item-text,\n.list-group-item.disabled:focus .list-group-item-text {\n  color: #777777;\n}\n\n.list-group-item.active,\n.list-group-item.active:hover,\n.list-group-item.active:focus {\n  z-index: 2;\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #337ab7;\n}\n\n.list-group-item.active .list-group-item-heading,\n.list-group-item.active .list-group-item-heading > small,\n.list-group-item.active .list-group-item-heading > .small,\n.list-group-item.active:hover .list-group-item-heading,\n.list-group-item.active:hover .list-group-item-heading > small,\n.list-group-item.active:hover .list-group-item-heading > .small,\n.list-group-item.active:focus .list-group-item-heading,\n.list-group-item.active:focus .list-group-item-heading > small,\n.list-group-item.active:focus .list-group-item-heading > .small {\n  color: inherit;\n}\n\n.list-group-item.active .list-group-item-text,\n.list-group-item.active:hover .list-group-item-text,\n.list-group-item.active:focus .list-group-item-text {\n  color: #c7ddef;\n}\n\n.list-group-item-success {\n  color: #3c763d;\n  background-color: #dff0d8;\n}\n\na.list-group-item-success,\nbutton.list-group-item-success {\n  color: #3c763d;\n}\n\na.list-group-item-success .list-group-item-heading,\nbutton.list-group-item-success .list-group-item-heading {\n  color: inherit;\n}\n\na.list-group-item-success:hover,\na.list-group-item-success:focus,\nbutton.list-group-item-success:hover,\nbutton.list-group-item-success:focus {\n  color: #3c763d;\n  background-color: #d0e9c6;\n}\n\na.list-group-item-success.active,\na.list-group-item-success.active:hover,\na.list-group-item-success.active:focus,\nbutton.list-group-item-success.active,\nbutton.list-group-item-success.active:hover,\nbutton.list-group-item-success.active:focus {\n  color: #fff;\n  background-color: #3c763d;\n  border-color: #3c763d;\n}\n\n.list-group-item-info {\n  color: #31708f;\n  background-color: #d9edf7;\n}\n\na.list-group-item-info,\nbutton.list-group-item-info {\n  color: #31708f;\n}\n\na.list-group-item-info .list-group-item-heading,\nbutton.list-group-item-info .list-group-item-heading {\n  color: inherit;\n}\n\na.list-group-item-info:hover,\na.list-group-item-info:focus,\nbutton.list-group-item-info:hover,\nbutton.list-group-item-info:focus {\n  color: #31708f;\n  background-color: #c4e3f3;\n}\n\na.list-group-item-info.active,\na.list-group-item-info.active:hover,\na.list-group-item-info.active:focus,\nbutton.list-group-item-info.active,\nbutton.list-group-item-info.active:hover,\nbutton.list-group-item-info.active:focus {\n  color: #fff;\n  background-color: #31708f;\n  border-color: #31708f;\n}\n\n.list-group-item-warning {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n}\n\na.list-group-item-warning,\nbutton.list-group-item-warning {\n  color: #8a6d3b;\n}\n\na.list-group-item-warning .list-group-item-heading,\nbutton.list-group-item-warning .list-group-item-heading {\n  color: inherit;\n}\n\na.list-group-item-warning:hover,\na.list-group-item-warning:focus,\nbutton.list-group-item-warning:hover,\nbutton.list-group-item-warning:focus {\n  color: #8a6d3b;\n  background-color: #faf2cc;\n}\n\na.list-group-item-warning.active,\na.list-group-item-warning.active:hover,\na.list-group-item-warning.active:focus,\nbutton.list-group-item-warning.active,\nbutton.list-group-item-warning.active:hover,\nbutton.list-group-item-warning.active:focus {\n  color: #fff;\n  background-color: #8a6d3b;\n  border-color: #8a6d3b;\n}\n\n.list-group-item-danger {\n  color: #a94442;\n  background-color: #f2dede;\n}\n\na.list-group-item-danger,\nbutton.list-group-item-danger {\n  color: #a94442;\n}\n\na.list-group-item-danger .list-group-item-heading,\nbutton.list-group-item-danger .list-group-item-heading {\n  color: inherit;\n}\n\na.list-group-item-danger:hover,\na.list-group-item-danger:focus,\nbutton.list-group-item-danger:hover,\nbutton.list-group-item-danger:focus {\n  color: #a94442;\n  background-color: #ebcccc;\n}\n\na.list-group-item-danger.active,\na.list-group-item-danger.active:hover,\na.list-group-item-danger.active:focus,\nbutton.list-group-item-danger.active,\nbutton.list-group-item-danger.active:hover,\nbutton.list-group-item-danger.active:focus {\n  color: #fff;\n  background-color: #a94442;\n  border-color: #a94442;\n}\n\n.list-group-item-heading {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n\n.list-group-item-text {\n  margin-bottom: 0;\n  line-height: 1.3;\n}\n\n.panel {\n  margin-bottom: 20px;\n  background-color: #fff;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n}\n\n.panel-body {\n  padding: 15px;\n}\n\n.panel-body:before,\n.panel-body:after {\n  content: \" \";\n  display: table;\n}\n\n.panel-body:after {\n  clear: both;\n}\n\n.panel-heading {\n  padding: 10px 15px;\n  border-bottom: 1px solid transparent;\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px;\n}\n\n.panel-heading > .dropdown .dropdown-toggle {\n  color: inherit;\n}\n\n.panel-title {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 16px;\n  color: inherit;\n}\n\n.panel-title > a,\n.panel-title > small,\n.panel-title > .small,\n.panel-title > small > a,\n.panel-title > .small > a {\n  color: inherit;\n}\n\n.panel-footer {\n  padding: 10px 15px;\n  background-color: #f5f5f5;\n  border-top: 1px solid #ddd;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n\n.panel > .list-group,\n.panel > .panel-collapse > .list-group {\n  margin-bottom: 0;\n}\n\n.panel > .list-group .list-group-item,\n.panel > .panel-collapse > .list-group .list-group-item {\n  border-width: 1px 0;\n  border-radius: 0;\n}\n\n.panel > .list-group:first-child .list-group-item:first-child,\n.panel > .panel-collapse > .list-group:first-child .list-group-item:first-child {\n  border-top: 0;\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px;\n}\n\n.panel > .list-group:last-child .list-group-item:last-child,\n.panel > .panel-collapse > .list-group:last-child .list-group-item:last-child {\n  border-bottom: 0;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n\n.panel > .panel-heading + .panel-collapse > .list-group .list-group-item:first-child {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.panel-heading + .list-group .list-group-item:first-child {\n  border-top-width: 0;\n}\n\n.list-group + .panel-footer {\n  border-top-width: 0;\n}\n\n.panel > .table,\n.panel > .table-responsive > .table,\n.panel > .panel-collapse > .table {\n  margin-bottom: 0;\n}\n\n.panel > .table caption,\n.panel > .table-responsive > .table caption,\n.panel > .panel-collapse > .table caption {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.panel > .table:first-child,\n.panel > .table-responsive:first-child > .table:first-child {\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px;\n}\n\n.panel > .table:first-child > thead:first-child > tr:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child {\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n\n.panel > .table:first-child > thead:first-child > tr:first-child td:first-child,\n.panel > .table:first-child > thead:first-child > tr:first-child th:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child th:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:first-child {\n  border-top-left-radius: 3px;\n}\n\n.panel > .table:first-child > thead:first-child > tr:first-child td:last-child,\n.panel > .table:first-child > thead:first-child > tr:first-child th:last-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child th:last-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:last-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:last-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:last-child {\n  border-top-right-radius: 3px;\n}\n\n.panel > .table:last-child,\n.panel > .table-responsive:last-child > .table:last-child {\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n\n.panel > .table:last-child > tbody:last-child > tr:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child {\n  border-bottom-left-radius: 3px;\n  border-bottom-right-radius: 3px;\n}\n\n.panel > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n.panel > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child th:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:first-child {\n  border-bottom-left-radius: 3px;\n}\n\n.panel > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n.panel > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child th:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:last-child {\n  border-bottom-right-radius: 3px;\n}\n\n.panel > .panel-body + .table,\n.panel > .panel-body + .table-responsive,\n.panel > .table + .panel-body,\n.panel > .table-responsive + .panel-body {\n  border-top: 1px solid #ddd;\n}\n\n.panel > .table > tbody:first-child > tr:first-child th,\n.panel > .table > tbody:first-child > tr:first-child td {\n  border-top: 0;\n}\n\n.panel > .table-bordered,\n.panel > .table-responsive > .table-bordered {\n  border: 0;\n}\n\n.panel > .table-bordered > thead > tr > th:first-child,\n.panel > .table-bordered > thead > tr > td:first-child,\n.panel > .table-bordered > tbody > tr > th:first-child,\n.panel > .table-bordered > tbody > tr > td:first-child,\n.panel > .table-bordered > tfoot > tr > th:first-child,\n.panel > .table-bordered > tfoot > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > thead > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > thead > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n  border-left: 0;\n}\n\n.panel > .table-bordered > thead > tr > th:last-child,\n.panel > .table-bordered > thead > tr > td:last-child,\n.panel > .table-bordered > tbody > tr > th:last-child,\n.panel > .table-bordered > tbody > tr > td:last-child,\n.panel > .table-bordered > tfoot > tr > th:last-child,\n.panel > .table-bordered > tfoot > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > thead > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > thead > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n  border-right: 0;\n}\n\n.panel > .table-bordered > thead > tr:first-child > td,\n.panel > .table-bordered > thead > tr:first-child > th,\n.panel > .table-bordered > tbody > tr:first-child > td,\n.panel > .table-bordered > tbody > tr:first-child > th,\n.panel > .table-responsive > .table-bordered > thead > tr:first-child > td,\n.panel > .table-responsive > .table-bordered > thead > tr:first-child > th,\n.panel > .table-responsive > .table-bordered > tbody > tr:first-child > td,\n.panel > .table-responsive > .table-bordered > tbody > tr:first-child > th {\n  border-bottom: 0;\n}\n\n.panel > .table-bordered > tbody > tr:last-child > td,\n.panel > .table-bordered > tbody > tr:last-child > th,\n.panel > .table-bordered > tfoot > tr:last-child > td,\n.panel > .table-bordered > tfoot > tr:last-child > th,\n.panel > .table-responsive > .table-bordered > tbody > tr:last-child > td,\n.panel > .table-responsive > .table-bordered > tbody > tr:last-child > th,\n.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > td,\n.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > th {\n  border-bottom: 0;\n}\n\n.panel > .table-responsive {\n  border: 0;\n  margin-bottom: 0;\n}\n\n.panel-group {\n  margin-bottom: 20px;\n}\n\n.panel-group .panel {\n  margin-bottom: 0;\n  border-radius: 4px;\n}\n\n.panel-group .panel + .panel {\n  margin-top: 5px;\n}\n\n.panel-group .panel-heading {\n  border-bottom: 0;\n}\n\n.panel-group .panel-heading + .panel-collapse > .panel-body,\n.panel-group .panel-heading + .panel-collapse > .list-group {\n  border-top: 1px solid #ddd;\n}\n\n.panel-group .panel-footer {\n  border-top: 0;\n}\n\n.panel-group .panel-footer + .panel-collapse .panel-body {\n  border-bottom: 1px solid #ddd;\n}\n\n.panel-default {\n  border-color: #ddd;\n}\n\n.panel-default > .panel-heading {\n  color: #333333;\n  background-color: #f5f5f5;\n  border-color: #ddd;\n}\n\n.panel-default > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #ddd;\n}\n\n.panel-default > .panel-heading .badge {\n  color: #f5f5f5;\n  background-color: #333333;\n}\n\n.panel-default > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #ddd;\n}\n\n.panel-primary {\n  border-color: #337ab7;\n}\n\n.panel-primary > .panel-heading {\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #337ab7;\n}\n\n.panel-primary > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #337ab7;\n}\n\n.panel-primary > .panel-heading .badge {\n  color: #337ab7;\n  background-color: #fff;\n}\n\n.panel-primary > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #337ab7;\n}\n\n.panel-success {\n  border-color: #d6e9c6;\n}\n\n.panel-success > .panel-heading {\n  color: #3c763d;\n  background-color: #dff0d8;\n  border-color: #d6e9c6;\n}\n\n.panel-success > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #d6e9c6;\n}\n\n.panel-success > .panel-heading .badge {\n  color: #dff0d8;\n  background-color: #3c763d;\n}\n\n.panel-success > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #d6e9c6;\n}\n\n.panel-info {\n  border-color: #bce8f1;\n}\n\n.panel-info > .panel-heading {\n  color: #31708f;\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n}\n\n.panel-info > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #bce8f1;\n}\n\n.panel-info > .panel-heading .badge {\n  color: #d9edf7;\n  background-color: #31708f;\n}\n\n.panel-info > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #bce8f1;\n}\n\n.panel-warning {\n  border-color: #faebcc;\n}\n\n.panel-warning > .panel-heading {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n  border-color: #faebcc;\n}\n\n.panel-warning > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #faebcc;\n}\n\n.panel-warning > .panel-heading .badge {\n  color: #fcf8e3;\n  background-color: #8a6d3b;\n}\n\n.panel-warning > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #faebcc;\n}\n\n.panel-danger {\n  border-color: #ebccd1;\n}\n\n.panel-danger > .panel-heading {\n  color: #a94442;\n  background-color: #f2dede;\n  border-color: #ebccd1;\n}\n\n.panel-danger > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #ebccd1;\n}\n\n.panel-danger > .panel-heading .badge {\n  color: #f2dede;\n  background-color: #a94442;\n}\n\n.panel-danger > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #ebccd1;\n}\n\n.well {\n  min-height: 20px;\n  padding: 19px;\n  margin-bottom: 20px;\n  background-color: #f5f5f5;\n  border: 1px solid #e3e3e3;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);\n}\n\n.well blockquote {\n  border-color: #ddd;\n  border-color: rgba(0, 0, 0, 0.15);\n}\n\n.well-lg {\n  padding: 24px;\n  border-radius: 6px;\n}\n\n.well-sm {\n  padding: 9px;\n  border-radius: 3px;\n}\n\n.embed-responsive {\n  position: relative;\n  display: block;\n  height: 0;\n  padding: 0;\n  overflow: hidden;\n}\n\n.embed-responsive .embed-responsive-item,\n.embed-responsive iframe,\n.embed-responsive embed,\n.embed-responsive object,\n.embed-responsive video {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  height: 100%;\n  width: 100%;\n  border: 0;\n}\n\n.embed-responsive-16by9 {\n  padding-bottom: 56.25%;\n}\n\n.embed-responsive-4by3 {\n  padding-bottom: 75%;\n}\n\n.close {\n  float: right;\n  font-size: 21px;\n  font-weight: bold;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: 0.2;\n  filter: alpha(opacity=20);\n}\n\n.close:hover,\n.close:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer;\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n}\n\nbutton.close {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n  -webkit-appearance: none;\n}\n\n.modal-open {\n  overflow: hidden;\n}\n\n.modal {\n  display: none;\n  overflow: hidden;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n}\n\n.modal.fade .modal-dialog {\n  -webkit-transform: translate(0, -25%);\n  -ms-transform: translate(0, -25%);\n  -o-transform: translate(0, -25%);\n  transform: translate(0, -25%);\n  -webkit-transition: -webkit-transform 0.3s ease-out;\n  -moz-transition: -moz-transform 0.3s ease-out;\n  -o-transition: -o-transform 0.3s ease-out;\n  transition: transform 0.3s ease-out;\n}\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  -ms-transform: translate(0, 0);\n  -o-transform: translate(0, 0);\n  transform: translate(0, 0);\n}\n\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 10px;\n}\n\n.modal-content {\n  position: relative;\n  background-color: #fff;\n  border: 1px solid #999;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\n  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\n  background-clip: padding-box;\n  outline: 0;\n}\n\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  background-color: #000;\n}\n\n.modal-backdrop.fade {\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n\n.modal-backdrop.in {\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n}\n\n.modal-header {\n  padding: 15px;\n  border-bottom: 1px solid #e5e5e5;\n}\n\n.modal-header:before,\n.modal-header:after {\n  content: \" \";\n  display: table;\n}\n\n.modal-header:after {\n  clear: both;\n}\n\n.modal-header .close {\n  margin-top: -2px;\n}\n\n.modal-title {\n  margin: 0;\n  line-height: 1.42857;\n}\n\n.modal-body {\n  position: relative;\n  padding: 15px;\n}\n\n.modal-footer {\n  padding: 15px;\n  text-align: right;\n  border-top: 1px solid #e5e5e5;\n}\n\n.modal-footer:before,\n.modal-footer:after {\n  content: \" \";\n  display: table;\n}\n\n.modal-footer:after {\n  clear: both;\n}\n\n.modal-footer .btn + .btn {\n  margin-left: 5px;\n  margin-bottom: 0;\n}\n\n.modal-footer .btn-group .btn + .btn {\n  margin-left: -1px;\n}\n\n.modal-footer .btn-block + .btn-block {\n  margin-left: 0;\n}\n\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll;\n}\n\n@media (min-width: 768px) {\n  .modal-dialog {\n    width: 600px;\n    margin: 30px auto;\n  }\n\n  .modal-content {\n    -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);\n  }\n\n  .modal-sm {\n    width: 300px;\n  }\n}\n\n@media (min-width: 992px) {\n  .modal-lg {\n    width: 900px;\n  }\n}\n\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.42857;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  font-size: 12px;\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n\n.tooltip.in {\n  opacity: 0.9;\n  filter: alpha(opacity=90);\n}\n\n.tooltip.top {\n  margin-top: -3px;\n  padding: 5px 0;\n}\n\n.tooltip.right {\n  margin-left: 3px;\n  padding: 0 5px;\n}\n\n.tooltip.bottom {\n  margin-top: 3px;\n  padding: 5px 0;\n}\n\n.tooltip.left {\n  margin-left: -3px;\n  padding: 0 5px;\n}\n\n.tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 4px;\n}\n\n.tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n\n.tooltip.top .tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n\n.tooltip.top-left .tooltip-arrow {\n  bottom: 0;\n  right: 5px;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n\n.tooltip.top-right .tooltip-arrow {\n  bottom: 0;\n  left: 5px;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n\n.tooltip.right .tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #000;\n}\n\n.tooltip.left .tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #000;\n}\n\n.tooltip.bottom .tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n\n.tooltip.bottom-left .tooltip-arrow {\n  top: 0;\n  right: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n\n.tooltip.bottom-right .tooltip-arrow {\n  top: 0;\n  left: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: none;\n  max-width: 276px;\n  padding: 1px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.42857;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  font-size: 14px;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n}\n\n.popover.top {\n  margin-top: -10px;\n}\n\n.popover.right {\n  margin-left: 10px;\n}\n\n.popover.bottom {\n  margin-top: 10px;\n}\n\n.popover.left {\n  margin-left: -10px;\n}\n\n.popover-title {\n  margin: 0;\n  padding: 8px 14px;\n  font-size: 14px;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-radius: 5px 5px 0 0;\n}\n\n.popover-content {\n  padding: 9px 14px;\n}\n\n.popover > .arrow,\n.popover > .arrow:after {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n\n.popover > .arrow {\n  border-width: 11px;\n}\n\n.popover > .arrow:after {\n  border-width: 10px;\n  content: \"\";\n}\n\n.popover.top > .arrow {\n  left: 50%;\n  margin-left: -11px;\n  border-bottom-width: 0;\n  border-top-color: #999999;\n  border-top-color: rgba(0, 0, 0, 0.25);\n  bottom: -11px;\n}\n\n.popover.top > .arrow:after {\n  content: \" \";\n  bottom: 1px;\n  margin-left: -10px;\n  border-bottom-width: 0;\n  border-top-color: #fff;\n}\n\n.popover.right > .arrow {\n  top: 50%;\n  left: -11px;\n  margin-top: -11px;\n  border-left-width: 0;\n  border-right-color: #999999;\n  border-right-color: rgba(0, 0, 0, 0.25);\n}\n\n.popover.right > .arrow:after {\n  content: \" \";\n  left: 1px;\n  bottom: -10px;\n  border-left-width: 0;\n  border-right-color: #fff;\n}\n\n.popover.bottom > .arrow {\n  left: 50%;\n  margin-left: -11px;\n  border-top-width: 0;\n  border-bottom-color: #999999;\n  border-bottom-color: rgba(0, 0, 0, 0.25);\n  top: -11px;\n}\n\n.popover.bottom > .arrow:after {\n  content: \" \";\n  top: 1px;\n  margin-left: -10px;\n  border-top-width: 0;\n  border-bottom-color: #fff;\n}\n\n.popover.left > .arrow {\n  top: 50%;\n  right: -11px;\n  margin-top: -11px;\n  border-right-width: 0;\n  border-left-color: #999999;\n  border-left-color: rgba(0, 0, 0, 0.25);\n}\n\n.popover.left > .arrow:after {\n  content: \" \";\n  right: 1px;\n  border-right-width: 0;\n  border-left-color: #fff;\n  bottom: -10px;\n}\n\n.carousel {\n  position: relative;\n}\n\n.carousel-inner {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n}\n\n.carousel-inner > .item {\n  display: none;\n  position: relative;\n  -webkit-transition: 0.6s ease-in-out left;\n  -o-transition: 0.6s ease-in-out left;\n  transition: 0.6s ease-in-out left;\n}\n\n.carousel-inner > .item > img,\n.carousel-inner > .item > a > img {\n  display: block;\n  max-width: 100%;\n  height: auto;\n  line-height: 1;\n}\n\n@media all and (transform-3d), (-webkit-transform-3d) {\n  .carousel-inner > .item {\n    -webkit-transition: -webkit-transform 0.6s ease-in-out;\n    -moz-transition: -moz-transform 0.6s ease-in-out;\n    -o-transition: -o-transform 0.6s ease-in-out;\n    transition: transform 0.6s ease-in-out;\n    -webkit-backface-visibility: hidden;\n    -moz-backface-visibility: hidden;\n    backface-visibility: hidden;\n    -webkit-perspective: 1000px;\n    -moz-perspective: 1000px;\n    perspective: 1000px;\n  }\n\n  .carousel-inner > .item.next,\n  .carousel-inner > .item.active.right {\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n    left: 0;\n  }\n\n  .carousel-inner > .item.prev,\n  .carousel-inner > .item.active.left {\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n    left: 0;\n  }\n\n  .carousel-inner > .item.next.left,\n  .carousel-inner > .item.prev.right,\n  .carousel-inner > .item.active {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n    left: 0;\n  }\n}\n\n.carousel-inner > .active,\n.carousel-inner > .next,\n.carousel-inner > .prev {\n  display: block;\n}\n\n.carousel-inner > .active {\n  left: 0;\n}\n\n.carousel-inner > .next,\n.carousel-inner > .prev {\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\n.carousel-inner > .next {\n  left: 100%;\n}\n\n.carousel-inner > .prev {\n  left: -100%;\n}\n\n.carousel-inner > .next.left,\n.carousel-inner > .prev.right {\n  left: 0;\n}\n\n.carousel-inner > .active.left {\n  left: -100%;\n}\n\n.carousel-inner > .active.right {\n  left: 100%;\n}\n\n.carousel-control {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 15%;\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n  font-size: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);\n  background-color: transparent;\n}\n\n.carousel-control.left {\n  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n  background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n  background-repeat: repeat-x;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);\n}\n\n.carousel-control.right {\n  left: auto;\n  right: 0;\n  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n  background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n  background-repeat: repeat-x;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1);\n}\n\n.carousel-control:hover,\n.carousel-control:focus {\n  outline: 0;\n  color: #fff;\n  text-decoration: none;\n  opacity: 0.9;\n  filter: alpha(opacity=90);\n}\n\n.carousel-control .icon-prev,\n.carousel-control .icon-next,\n.carousel-control .glyphicon-chevron-left,\n.carousel-control .glyphicon-chevron-right {\n  position: absolute;\n  top: 50%;\n  margin-top: -10px;\n  z-index: 5;\n  display: inline-block;\n}\n\n.carousel-control .icon-prev,\n.carousel-control .glyphicon-chevron-left {\n  left: 50%;\n  margin-left: -10px;\n}\n\n.carousel-control .icon-next,\n.carousel-control .glyphicon-chevron-right {\n  right: 50%;\n  margin-right: -10px;\n}\n\n.carousel-control .icon-prev,\n.carousel-control .icon-next {\n  width: 20px;\n  height: 20px;\n  line-height: 1;\n  font-family: serif;\n}\n\n.carousel-control .icon-prev:before {\n  content: '\\2039';\n}\n\n.carousel-control .icon-next:before {\n  content: '\\203A';\n}\n\n.carousel-indicators {\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  z-index: 15;\n  width: 60%;\n  margin-left: -30%;\n  padding-left: 0;\n  list-style: none;\n  text-align: center;\n}\n\n.carousel-indicators li {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  margin: 1px;\n  text-indent: -999px;\n  border: 1px solid #fff;\n  border-radius: 10px;\n  cursor: pointer;\n  background-color: #000 \\9;\n  background-color: transparent;\n}\n\n.carousel-indicators .active {\n  margin: 0;\n  width: 12px;\n  height: 12px;\n  background-color: #fff;\n}\n\n.carousel-caption {\n  position: absolute;\n  left: 15%;\n  right: 15%;\n  bottom: 20px;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);\n}\n\n.carousel-caption .btn {\n  text-shadow: none;\n}\n\n@media screen and (min-width: 768px) {\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-prev,\n  .carousel-control .icon-next {\n    width: 30px;\n    height: 30px;\n    margin-top: -10px;\n    font-size: 30px;\n  }\n\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .icon-prev {\n    margin-left: -10px;\n  }\n\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-next {\n    margin-right: -10px;\n  }\n\n  .carousel-caption {\n    left: 20%;\n    right: 20%;\n    padding-bottom: 30px;\n  }\n\n  .carousel-indicators {\n    bottom: 20px;\n  }\n}\n\n.clearfix:before,\n.clearfix:after {\n  content: \" \";\n  display: table;\n}\n\n.clearfix:after {\n  clear: both;\n}\n\n.center-block {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.pull-right {\n  float: right !important;\n}\n\n.pull-left {\n  float: left !important;\n}\n\n.hide {\n  display: none !important;\n}\n\n.show {\n  display: block !important;\n}\n\n.invisible {\n  visibility: hidden;\n}\n\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n\n.hidden {\n  display: none !important;\n}\n\n.affix {\n  position: fixed;\n}\n\n@-ms-viewport {\n  width: device-width;\n}\n\n.visible-xs {\n  display: none !important;\n}\n\n.visible-sm {\n  display: none !important;\n}\n\n.visible-md {\n  display: none !important;\n}\n\n.visible-lg {\n  display: none !important;\n}\n\n.visible-xs-block,\n.visible-xs-inline,\n.visible-xs-inline-block,\n.visible-sm-block,\n.visible-sm-inline,\n.visible-sm-inline-block,\n.visible-md-block,\n.visible-md-inline,\n.visible-md-inline-block,\n.visible-lg-block,\n.visible-lg-inline,\n.visible-lg-inline-block {\n  display: none !important;\n}\n\n@media (max-width: 767px) {\n  .visible-xs {\n    display: block !important;\n  }\n\n  table.visible-xs {\n    display: table !important;\n  }\n\n  tr.visible-xs {\n    display: table-row !important;\n  }\n\n  th.visible-xs,\n  td.visible-xs {\n    display: table-cell !important;\n  }\n}\n\n@media (max-width: 767px) {\n  .visible-xs-block {\n    display: block !important;\n  }\n}\n\n@media (max-width: 767px) {\n  .visible-xs-inline {\n    display: inline !important;\n  }\n}\n\n@media (max-width: 767px) {\n  .visible-xs-inline-block {\n    display: inline-block !important;\n  }\n}\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm {\n    display: block !important;\n  }\n\n  table.visible-sm {\n    display: table !important;\n  }\n\n  tr.visible-sm {\n    display: table-row !important;\n  }\n\n  th.visible-sm,\n  td.visible-sm {\n    display: table-cell !important;\n  }\n}\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-block {\n    display: block !important;\n  }\n}\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline {\n    display: inline !important;\n  }\n}\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline-block {\n    display: inline-block !important;\n  }\n}\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md {\n    display: block !important;\n  }\n\n  table.visible-md {\n    display: table !important;\n  }\n\n  tr.visible-md {\n    display: table-row !important;\n  }\n\n  th.visible-md,\n  td.visible-md {\n    display: table-cell !important;\n  }\n}\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-block {\n    display: block !important;\n  }\n}\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline {\n    display: inline !important;\n  }\n}\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline-block {\n    display: inline-block !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .visible-lg {\n    display: block !important;\n  }\n\n  table.visible-lg {\n    display: table !important;\n  }\n\n  tr.visible-lg {\n    display: table-row !important;\n  }\n\n  th.visible-lg,\n  td.visible-lg {\n    display: table-cell !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .visible-lg-block {\n    display: block !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .visible-lg-inline {\n    display: inline !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .visible-lg-inline-block {\n    display: inline-block !important;\n  }\n}\n\n@media (max-width: 767px) {\n  .hidden-xs {\n    display: none !important;\n  }\n}\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .hidden-sm {\n    display: none !important;\n  }\n}\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .hidden-md {\n    display: none !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .hidden-lg {\n    display: none !important;\n  }\n}\n\n.visible-print {\n  display: none !important;\n}\n\n@media print {\n  .visible-print {\n    display: block !important;\n  }\n\n  table.visible-print {\n    display: table !important;\n  }\n\n  tr.visible-print {\n    display: table-row !important;\n  }\n\n  th.visible-print,\n  td.visible-print {\n    display: table-cell !important;\n  }\n}\n\n.visible-print-block {\n  display: none !important;\n}\n\n@media print {\n  .visible-print-block {\n    display: block !important;\n  }\n}\n\n.visible-print-inline {\n  display: none !important;\n}\n\n@media print {\n  .visible-print-inline {\n    display: inline !important;\n  }\n}\n\n.visible-print-inline-block {\n  display: none !important;\n}\n\n@media print {\n  .visible-print-inline-block {\n    display: inline-block !important;\n  }\n}\n\n@media print {\n  .hidden-print {\n    display: none !important;\n  }\n}\n\n", ""]);
	
	// exports


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "e18bbf611f2a2e43afc071aa2f4e1512.ttf";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "674f50d287a8c48dc19ba404d20fe713.eot";

/***/ },
/* 14 */
13,
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "b06871f281fee6b241d60582ae9369b9.ttf";

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var jQuery = __webpack_require__(1);
	
	/* ========================================================================
	 * Bootstrap: affix.js v3.3.7
	 * http://getbootstrap.com/javascript/#affix
	 * ========================================================================
	 * Copyright 2011-2016 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */
	
	
	+function ($) {
	  'use strict';
	
	  // AFFIX CLASS DEFINITION
	  // ======================
	
	  var Affix = function (element, options) {
	    this.options = $.extend({}, Affix.DEFAULTS, options)
	
	    this.$target = $(this.options.target)
	      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
	      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))
	
	    this.$element     = $(element)
	    this.affixed      = null
	    this.unpin        = null
	    this.pinnedOffset = null
	
	    this.checkPosition()
	  }
	
	  Affix.VERSION  = '3.3.7'
	
	  Affix.RESET    = 'affix affix-top affix-bottom'
	
	  Affix.DEFAULTS = {
	    offset: 0,
	    target: window
	  }
	
	  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
	    var scrollTop    = this.$target.scrollTop()
	    var position     = this.$element.offset()
	    var targetHeight = this.$target.height()
	
	    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false
	
	    if (this.affixed == 'bottom') {
	      if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
	      return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
	    }
	
	    var initializing   = this.affixed == null
	    var colliderTop    = initializing ? scrollTop : position.top
	    var colliderHeight = initializing ? targetHeight : height
	
	    if (offsetTop != null && scrollTop <= offsetTop) return 'top'
	    if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'
	
	    return false
	  }
	
	  Affix.prototype.getPinnedOffset = function () {
	    if (this.pinnedOffset) return this.pinnedOffset
	    this.$element.removeClass(Affix.RESET).addClass('affix')
	    var scrollTop = this.$target.scrollTop()
	    var position  = this.$element.offset()
	    return (this.pinnedOffset = position.top - scrollTop)
	  }
	
	  Affix.prototype.checkPositionWithEventLoop = function () {
	    setTimeout($.proxy(this.checkPosition, this), 1)
	  }
	
	  Affix.prototype.checkPosition = function () {
	    if (!this.$element.is(':visible')) return
	
	    var height       = this.$element.height()
	    var offset       = this.options.offset
	    var offsetTop    = offset.top
	    var offsetBottom = offset.bottom
	    var scrollHeight = Math.max($(document).height(), $(document.body).height())
	
	    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
	    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
	    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)
	
	    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)
	
	    if (this.affixed != affix) {
	      if (this.unpin != null) this.$element.css('top', '')
	
	      var affixType = 'affix' + (affix ? '-' + affix : '')
	      var e         = $.Event(affixType + '.bs.affix')
	
	      this.$element.trigger(e)
	
	      if (e.isDefaultPrevented()) return
	
	      this.affixed = affix
	      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null
	
	      this.$element
	        .removeClass(Affix.RESET)
	        .addClass(affixType)
	        .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
	    }
	
	    if (affix == 'bottom') {
	      this.$element.offset({
	        top: scrollHeight - height - offsetBottom
	      })
	    }
	  }
	
	
	  // AFFIX PLUGIN DEFINITION
	  // =======================
	
	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.affix')
	      var options = typeof option == 'object' && option
	
	      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
	      if (typeof option == 'string') data[option]()
	    })
	  }
	
	  var old = $.fn.affix
	
	  $.fn.affix             = Plugin
	  $.fn.affix.Constructor = Affix
	
	
	  // AFFIX NO CONFLICT
	  // =================
	
	  $.fn.affix.noConflict = function () {
	    $.fn.affix = old
	    return this
	  }
	
	
	  // AFFIX DATA-API
	  // ==============
	
	  $(window).on('load', function () {
	    $('[data-spy="affix"]').each(function () {
	      var $spy = $(this)
	      var data = $spy.data()
	
	      data.offset = data.offset || {}
	
	      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
	      if (data.offsetTop    != null) data.offset.top    = data.offsetTop
	
	      Plugin.call($spy, data)
	    })
	  })
	
	}(jQuery);
	


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var jQuery = __webpack_require__(1);
	
	/* ========================================================================
	 * Bootstrap: alert.js v3.3.7
	 * http://getbootstrap.com/javascript/#alerts
	 * ========================================================================
	 * Copyright 2011-2016 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */
	
	
	+function ($) {
	  'use strict';
	
	  // ALERT CLASS DEFINITION
	  // ======================
	
	  var dismiss = '[data-dismiss="alert"]'
	  var Alert   = function (el) {
	    $(el).on('click', dismiss, this.close)
	  }
	
	  Alert.VERSION = '3.3.7'
	
	  Alert.TRANSITION_DURATION = 150
	
	  Alert.prototype.close = function (e) {
	    var $this    = $(this)
	    var selector = $this.attr('data-target')
	
	    if (!selector) {
	      selector = $this.attr('href')
	      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
	    }
	
	    var $parent = $(selector === '#' ? [] : selector)
	
	    if (e) e.preventDefault()
	
	    if (!$parent.length) {
	      $parent = $this.closest('.alert')
	    }
	
	    $parent.trigger(e = $.Event('close.bs.alert'))
	
	    if (e.isDefaultPrevented()) return
	
	    $parent.removeClass('in')
	
	    function removeElement() {
	      // detach from parent, fire event then clean up data
	      $parent.detach().trigger('closed.bs.alert').remove()
	    }
	
	    $.support.transition && $parent.hasClass('fade') ?
	      $parent
	        .one('bsTransitionEnd', removeElement)
	        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
	      removeElement()
	  }
	
	
	  // ALERT PLUGIN DEFINITION
	  // =======================
	
	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this)
	      var data  = $this.data('bs.alert')
	
	      if (!data) $this.data('bs.alert', (data = new Alert(this)))
	      if (typeof option == 'string') data[option].call($this)
	    })
	  }
	
	  var old = $.fn.alert
	
	  $.fn.alert             = Plugin
	  $.fn.alert.Constructor = Alert
	
	
	  // ALERT NO CONFLICT
	  // =================
	
	  $.fn.alert.noConflict = function () {
	    $.fn.alert = old
	    return this
	  }
	
	
	  // ALERT DATA-API
	  // ==============
	
	  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)
	
	}(jQuery);
	


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var jQuery = __webpack_require__(1);
	
	/* ========================================================================
	 * Bootstrap: button.js v3.3.7
	 * http://getbootstrap.com/javascript/#buttons
	 * ========================================================================
	 * Copyright 2011-2016 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */
	
	
	+function ($) {
	  'use strict';
	
	  // BUTTON PUBLIC CLASS DEFINITION
	  // ==============================
	
	  var Button = function (element, options) {
	    this.$element  = $(element)
	    this.options   = $.extend({}, Button.DEFAULTS, options)
	    this.isLoading = false
	  }
	
	  Button.VERSION  = '3.3.7'
	
	  Button.DEFAULTS = {
	    loadingText: 'loading...'
	  }
	
	  Button.prototype.setState = function (state) {
	    var d    = 'disabled'
	    var $el  = this.$element
	    var val  = $el.is('input') ? 'val' : 'html'
	    var data = $el.data()
	
	    state += 'Text'
	
	    if (data.resetText == null) $el.data('resetText', $el[val]())
	
	    // push to event loop to allow forms to submit
	    setTimeout($.proxy(function () {
	      $el[val](data[state] == null ? this.options[state] : data[state])
	
	      if (state == 'loadingText') {
	        this.isLoading = true
	        $el.addClass(d).attr(d, d).prop(d, true)
	      } else if (this.isLoading) {
	        this.isLoading = false
	        $el.removeClass(d).removeAttr(d).prop(d, false)
	      }
	    }, this), 0)
	  }
	
	  Button.prototype.toggle = function () {
	    var changed = true
	    var $parent = this.$element.closest('[data-toggle="buttons"]')
	
	    if ($parent.length) {
	      var $input = this.$element.find('input')
	      if ($input.prop('type') == 'radio') {
	        if ($input.prop('checked')) changed = false
	        $parent.find('.active').removeClass('active')
	        this.$element.addClass('active')
	      } else if ($input.prop('type') == 'checkbox') {
	        if (($input.prop('checked')) !== this.$element.hasClass('active')) changed = false
	        this.$element.toggleClass('active')
	      }
	      $input.prop('checked', this.$element.hasClass('active'))
	      if (changed) $input.trigger('change')
	    } else {
	      this.$element.attr('aria-pressed', !this.$element.hasClass('active'))
	      this.$element.toggleClass('active')
	    }
	  }
	
	
	  // BUTTON PLUGIN DEFINITION
	  // ========================
	
	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.button')
	      var options = typeof option == 'object' && option
	
	      if (!data) $this.data('bs.button', (data = new Button(this, options)))
	
	      if (option == 'toggle') data.toggle()
	      else if (option) data.setState(option)
	    })
	  }
	
	  var old = $.fn.button
	
	  $.fn.button             = Plugin
	  $.fn.button.Constructor = Button
	
	
	  // BUTTON NO CONFLICT
	  // ==================
	
	  $.fn.button.noConflict = function () {
	    $.fn.button = old
	    return this
	  }
	
	
	  // BUTTON DATA-API
	  // ===============
	
	  $(document)
	    .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
	      var $btn = $(e.target).closest('.btn')
	      Plugin.call($btn, 'toggle')
	      if (!($(e.target).is('input[type="radio"], input[type="checkbox"]'))) {
	        // Prevent double click on radios, and the double selections (so cancellation) on checkboxes
	        e.preventDefault()
	        // The target component still receive the focus
	        if ($btn.is('input,button')) $btn.trigger('focus')
	        else $btn.find('input:visible,button:visible').first().trigger('focus')
	      }
	    })
	    .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
	      $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
	    })
	
	}(jQuery);
	


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var jQuery = __webpack_require__(1);
	
	/* ========================================================================
	 * Bootstrap: carousel.js v3.3.7
	 * http://getbootstrap.com/javascript/#carousel
	 * ========================================================================
	 * Copyright 2011-2016 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */
	
	
	+function ($) {
	  'use strict';
	
	  // CAROUSEL CLASS DEFINITION
	  // =========================
	
	  var Carousel = function (element, options) {
	    this.$element    = $(element)
	    this.$indicators = this.$element.find('.carousel-indicators')
	    this.options     = options
	    this.paused      = null
	    this.sliding     = null
	    this.interval    = null
	    this.$active     = null
	    this.$items      = null
	
	    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))
	
	    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
	      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
	      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
	  }
	
	  Carousel.VERSION  = '3.3.7'
	
	  Carousel.TRANSITION_DURATION = 600
	
	  Carousel.DEFAULTS = {
	    interval: 5000,
	    pause: 'hover',
	    wrap: true,
	    keyboard: true
	  }
	
	  Carousel.prototype.keydown = function (e) {
	    if (/input|textarea/i.test(e.target.tagName)) return
	    switch (e.which) {
	      case 37: this.prev(); break
	      case 39: this.next(); break
	      default: return
	    }
	
	    e.preventDefault()
	  }
	
	  Carousel.prototype.cycle = function (e) {
	    e || (this.paused = false)
	
	    this.interval && clearInterval(this.interval)
	
	    this.options.interval
	      && !this.paused
	      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))
	
	    return this
	  }
	
	  Carousel.prototype.getItemIndex = function (item) {
	    this.$items = item.parent().children('.item')
	    return this.$items.index(item || this.$active)
	  }
	
	  Carousel.prototype.getItemForDirection = function (direction, active) {
	    var activeIndex = this.getItemIndex(active)
	    var willWrap = (direction == 'prev' && activeIndex === 0)
	                || (direction == 'next' && activeIndex == (this.$items.length - 1))
	    if (willWrap && !this.options.wrap) return active
	    var delta = direction == 'prev' ? -1 : 1
	    var itemIndex = (activeIndex + delta) % this.$items.length
	    return this.$items.eq(itemIndex)
	  }
	
	  Carousel.prototype.to = function (pos) {
	    var that        = this
	    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))
	
	    if (pos > (this.$items.length - 1) || pos < 0) return
	
	    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
	    if (activeIndex == pos) return this.pause().cycle()
	
	    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
	  }
	
	  Carousel.prototype.pause = function (e) {
	    e || (this.paused = true)
	
	    if (this.$element.find('.next, .prev').length && $.support.transition) {
	      this.$element.trigger($.support.transition.end)
	      this.cycle(true)
	    }
	
	    this.interval = clearInterval(this.interval)
	
	    return this
	  }
	
	  Carousel.prototype.next = function () {
	    if (this.sliding) return
	    return this.slide('next')
	  }
	
	  Carousel.prototype.prev = function () {
	    if (this.sliding) return
	    return this.slide('prev')
	  }
	
	  Carousel.prototype.slide = function (type, next) {
	    var $active   = this.$element.find('.item.active')
	    var $next     = next || this.getItemForDirection(type, $active)
	    var isCycling = this.interval
	    var direction = type == 'next' ? 'left' : 'right'
	    var that      = this
	
	    if ($next.hasClass('active')) return (this.sliding = false)
	
	    var relatedTarget = $next[0]
	    var slideEvent = $.Event('slide.bs.carousel', {
	      relatedTarget: relatedTarget,
	      direction: direction
	    })
	    this.$element.trigger(slideEvent)
	    if (slideEvent.isDefaultPrevented()) return
	
	    this.sliding = true
	
	    isCycling && this.pause()
	
	    if (this.$indicators.length) {
	      this.$indicators.find('.active').removeClass('active')
	      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
	      $nextIndicator && $nextIndicator.addClass('active')
	    }
	
	    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
	    if ($.support.transition && this.$element.hasClass('slide')) {
	      $next.addClass(type)
	      $next[0].offsetWidth // force reflow
	      $active.addClass(direction)
	      $next.addClass(direction)
	      $active
	        .one('bsTransitionEnd', function () {
	          $next.removeClass([type, direction].join(' ')).addClass('active')
	          $active.removeClass(['active', direction].join(' '))
	          that.sliding = false
	          setTimeout(function () {
	            that.$element.trigger(slidEvent)
	          }, 0)
	        })
	        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
	    } else {
	      $active.removeClass('active')
	      $next.addClass('active')
	      this.sliding = false
	      this.$element.trigger(slidEvent)
	    }
	
	    isCycling && this.cycle()
	
	    return this
	  }
	
	
	  // CAROUSEL PLUGIN DEFINITION
	  // ==========================
	
	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.carousel')
	      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
	      var action  = typeof option == 'string' ? option : options.slide
	
	      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
	      if (typeof option == 'number') data.to(option)
	      else if (action) data[action]()
	      else if (options.interval) data.pause().cycle()
	    })
	  }
	
	  var old = $.fn.carousel
	
	  $.fn.carousel             = Plugin
	  $.fn.carousel.Constructor = Carousel
	
	
	  // CAROUSEL NO CONFLICT
	  // ====================
	
	  $.fn.carousel.noConflict = function () {
	    $.fn.carousel = old
	    return this
	  }
	
	
	  // CAROUSEL DATA-API
	  // =================
	
	  var clickHandler = function (e) {
	    var href
	    var $this   = $(this)
	    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
	    if (!$target.hasClass('carousel')) return
	    var options = $.extend({}, $target.data(), $this.data())
	    var slideIndex = $this.attr('data-slide-to')
	    if (slideIndex) options.interval = false
	
	    Plugin.call($target, options)
	
	    if (slideIndex) {
	      $target.data('bs.carousel').to(slideIndex)
	    }
	
	    e.preventDefault()
	  }
	
	  $(document)
	    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
	    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)
	
	  $(window).on('load', function () {
	    $('[data-ride="carousel"]').each(function () {
	      var $carousel = $(this)
	      Plugin.call($carousel, $carousel.data())
	    })
	  })
	
	}(jQuery);
	


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var jQuery = __webpack_require__(1);
	
	/* ========================================================================
	 * Bootstrap: collapse.js v3.3.7
	 * http://getbootstrap.com/javascript/#collapse
	 * ========================================================================
	 * Copyright 2011-2016 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */
	
	/* jshint latedef: false */
	
	+function ($) {
	  'use strict';
	
	  // COLLAPSE PUBLIC CLASS DEFINITION
	  // ================================
	
	  var Collapse = function (element, options) {
	    this.$element      = $(element)
	    this.options       = $.extend({}, Collapse.DEFAULTS, options)
	    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
	                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
	    this.transitioning = null
	
	    if (this.options.parent) {
	      this.$parent = this.getParent()
	    } else {
	      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
	    }
	
	    if (this.options.toggle) this.toggle()
	  }
	
	  Collapse.VERSION  = '3.3.7'
	
	  Collapse.TRANSITION_DURATION = 350
	
	  Collapse.DEFAULTS = {
	    toggle: true
	  }
	
	  Collapse.prototype.dimension = function () {
	    var hasWidth = this.$element.hasClass('width')
	    return hasWidth ? 'width' : 'height'
	  }
	
	  Collapse.prototype.show = function () {
	    if (this.transitioning || this.$element.hasClass('in')) return
	
	    var activesData
	    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')
	
	    if (actives && actives.length) {
	      activesData = actives.data('bs.collapse')
	      if (activesData && activesData.transitioning) return
	    }
	
	    var startEvent = $.Event('show.bs.collapse')
	    this.$element.trigger(startEvent)
	    if (startEvent.isDefaultPrevented()) return
	
	    if (actives && actives.length) {
	      Plugin.call(actives, 'hide')
	      activesData || actives.data('bs.collapse', null)
	    }
	
	    var dimension = this.dimension()
	
	    this.$element
	      .removeClass('collapse')
	      .addClass('collapsing')[dimension](0)
	      .attr('aria-expanded', true)
	
	    this.$trigger
	      .removeClass('collapsed')
	      .attr('aria-expanded', true)
	
	    this.transitioning = 1
	
	    var complete = function () {
	      this.$element
	        .removeClass('collapsing')
	        .addClass('collapse in')[dimension]('')
	      this.transitioning = 0
	      this.$element
	        .trigger('shown.bs.collapse')
	    }
	
	    if (!$.support.transition) return complete.call(this)
	
	    var scrollSize = $.camelCase(['scroll', dimension].join('-'))
	
	    this.$element
	      .one('bsTransitionEnd', $.proxy(complete, this))
	      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
	  }
	
	  Collapse.prototype.hide = function () {
	    if (this.transitioning || !this.$element.hasClass('in')) return
	
	    var startEvent = $.Event('hide.bs.collapse')
	    this.$element.trigger(startEvent)
	    if (startEvent.isDefaultPrevented()) return
	
	    var dimension = this.dimension()
	
	    this.$element[dimension](this.$element[dimension]())[0].offsetHeight
	
	    this.$element
	      .addClass('collapsing')
	      .removeClass('collapse in')
	      .attr('aria-expanded', false)
	
	    this.$trigger
	      .addClass('collapsed')
	      .attr('aria-expanded', false)
	
	    this.transitioning = 1
	
	    var complete = function () {
	      this.transitioning = 0
	      this.$element
	        .removeClass('collapsing')
	        .addClass('collapse')
	        .trigger('hidden.bs.collapse')
	    }
	
	    if (!$.support.transition) return complete.call(this)
	
	    this.$element
	      [dimension](0)
	      .one('bsTransitionEnd', $.proxy(complete, this))
	      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
	  }
	
	  Collapse.prototype.toggle = function () {
	    this[this.$element.hasClass('in') ? 'hide' : 'show']()
	  }
	
	  Collapse.prototype.getParent = function () {
	    return $(this.options.parent)
	      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
	      .each($.proxy(function (i, element) {
	        var $element = $(element)
	        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
	      }, this))
	      .end()
	  }
	
	  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
	    var isOpen = $element.hasClass('in')
	
	    $element.attr('aria-expanded', isOpen)
	    $trigger
	      .toggleClass('collapsed', !isOpen)
	      .attr('aria-expanded', isOpen)
	  }
	
	  function getTargetFromTrigger($trigger) {
	    var href
	    var target = $trigger.attr('data-target')
	      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7
	
	    return $(target)
	  }
	
	
	  // COLLAPSE PLUGIN DEFINITION
	  // ==========================
	
	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.collapse')
	      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)
	
	      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
	      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
	      if (typeof option == 'string') data[option]()
	    })
	  }
	
	  var old = $.fn.collapse
	
	  $.fn.collapse             = Plugin
	  $.fn.collapse.Constructor = Collapse
	
	
	  // COLLAPSE NO CONFLICT
	  // ====================
	
	  $.fn.collapse.noConflict = function () {
	    $.fn.collapse = old
	    return this
	  }
	
	
	  // COLLAPSE DATA-API
	  // =================
	
	  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
	    var $this   = $(this)
	
	    if (!$this.attr('data-target')) e.preventDefault()
	
	    var $target = getTargetFromTrigger($this)
	    var data    = $target.data('bs.collapse')
	    var option  = data ? 'toggle' : $this.data()
	
	    Plugin.call($target, option)
	  })
	
	}(jQuery);
	


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var jQuery = __webpack_require__(1);
	
	/* ========================================================================
	 * Bootstrap: dropdown.js v3.3.7
	 * http://getbootstrap.com/javascript/#dropdowns
	 * ========================================================================
	 * Copyright 2011-2016 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */
	
	
	+function ($) {
	  'use strict';
	
	  // DROPDOWN CLASS DEFINITION
	  // =========================
	
	  var backdrop = '.dropdown-backdrop'
	  var toggle   = '[data-toggle="dropdown"]'
	  var Dropdown = function (element) {
	    $(element).on('click.bs.dropdown', this.toggle)
	  }
	
	  Dropdown.VERSION = '3.3.7'
	
	  function getParent($this) {
	    var selector = $this.attr('data-target')
	
	    if (!selector) {
	      selector = $this.attr('href')
	      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
	    }
	
	    var $parent = selector && $(selector)
	
	    return $parent && $parent.length ? $parent : $this.parent()
	  }
	
	  function clearMenus(e) {
	    if (e && e.which === 3) return
	    $(backdrop).remove()
	    $(toggle).each(function () {
	      var $this         = $(this)
	      var $parent       = getParent($this)
	      var relatedTarget = { relatedTarget: this }
	
	      if (!$parent.hasClass('open')) return
	
	      if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return
	
	      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))
	
	      if (e.isDefaultPrevented()) return
	
	      $this.attr('aria-expanded', 'false')
	      $parent.removeClass('open').trigger($.Event('hidden.bs.dropdown', relatedTarget))
	    })
	  }
	
	  Dropdown.prototype.toggle = function (e) {
	    var $this = $(this)
	
	    if ($this.is('.disabled, :disabled')) return
	
	    var $parent  = getParent($this)
	    var isActive = $parent.hasClass('open')
	
	    clearMenus()
	
	    if (!isActive) {
	      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
	        // if mobile we use a backdrop because click events don't delegate
	        $(document.createElement('div'))
	          .addClass('dropdown-backdrop')
	          .insertAfter($(this))
	          .on('click', clearMenus)
	      }
	
	      var relatedTarget = { relatedTarget: this }
	      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))
	
	      if (e.isDefaultPrevented()) return
	
	      $this
	        .trigger('focus')
	        .attr('aria-expanded', 'true')
	
	      $parent
	        .toggleClass('open')
	        .trigger($.Event('shown.bs.dropdown', relatedTarget))
	    }
	
	    return false
	  }
	
	  Dropdown.prototype.keydown = function (e) {
	    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return
	
	    var $this = $(this)
	
	    e.preventDefault()
	    e.stopPropagation()
	
	    if ($this.is('.disabled, :disabled')) return
	
	    var $parent  = getParent($this)
	    var isActive = $parent.hasClass('open')
	
	    if (!isActive && e.which != 27 || isActive && e.which == 27) {
	      if (e.which == 27) $parent.find(toggle).trigger('focus')
	      return $this.trigger('click')
	    }
	
	    var desc = ' li:not(.disabled):visible a'
	    var $items = $parent.find('.dropdown-menu' + desc)
	
	    if (!$items.length) return
	
	    var index = $items.index(e.target)
	
	    if (e.which == 38 && index > 0)                 index--         // up
	    if (e.which == 40 && index < $items.length - 1) index++         // down
	    if (!~index)                                    index = 0
	
	    $items.eq(index).trigger('focus')
	  }
	
	
	  // DROPDOWN PLUGIN DEFINITION
	  // ==========================
	
	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this)
	      var data  = $this.data('bs.dropdown')
	
	      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
	      if (typeof option == 'string') data[option].call($this)
	    })
	  }
	
	  var old = $.fn.dropdown
	
	  $.fn.dropdown             = Plugin
	  $.fn.dropdown.Constructor = Dropdown
	
	
	  // DROPDOWN NO CONFLICT
	  // ====================
	
	  $.fn.dropdown.noConflict = function () {
	    $.fn.dropdown = old
	    return this
	  }
	
	
	  // APPLY TO STANDARD DROPDOWN ELEMENTS
	  // ===================================
	
	  $(document)
	    .on('click.bs.dropdown.data-api', clearMenus)
	    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
	    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
	    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
	    .on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)
	
	}(jQuery);
	


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var jQuery = __webpack_require__(1);
	
	/* ========================================================================
	 * Bootstrap: modal.js v3.3.7
	 * http://getbootstrap.com/javascript/#modals
	 * ========================================================================
	 * Copyright 2011-2016 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */
	
	
	+function ($) {
	  'use strict';
	
	  // MODAL CLASS DEFINITION
	  // ======================
	
	  var Modal = function (element, options) {
	    this.options             = options
	    this.$body               = $(document.body)
	    this.$element            = $(element)
	    this.$dialog             = this.$element.find('.modal-dialog')
	    this.$backdrop           = null
	    this.isShown             = null
	    this.originalBodyPad     = null
	    this.scrollbarWidth      = 0
	    this.ignoreBackdropClick = false
	
	    if (this.options.remote) {
	      this.$element
	        .find('.modal-content')
	        .load(this.options.remote, $.proxy(function () {
	          this.$element.trigger('loaded.bs.modal')
	        }, this))
	    }
	  }
	
	  Modal.VERSION  = '3.3.7'
	
	  Modal.TRANSITION_DURATION = 300
	  Modal.BACKDROP_TRANSITION_DURATION = 150
	
	  Modal.DEFAULTS = {
	    backdrop: true,
	    keyboard: true,
	    show: true
	  }
	
	  Modal.prototype.toggle = function (_relatedTarget) {
	    return this.isShown ? this.hide() : this.show(_relatedTarget)
	  }
	
	  Modal.prototype.show = function (_relatedTarget) {
	    var that = this
	    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })
	
	    this.$element.trigger(e)
	
	    if (this.isShown || e.isDefaultPrevented()) return
	
	    this.isShown = true
	
	    this.checkScrollbar()
	    this.setScrollbar()
	    this.$body.addClass('modal-open')
	
	    this.escape()
	    this.resize()
	
	    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))
	
	    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
	      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
	        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
	      })
	    })
	
	    this.backdrop(function () {
	      var transition = $.support.transition && that.$element.hasClass('fade')
	
	      if (!that.$element.parent().length) {
	        that.$element.appendTo(that.$body) // don't move modals dom position
	      }
	
	      that.$element
	        .show()
	        .scrollTop(0)
	
	      that.adjustDialog()
	
	      if (transition) {
	        that.$element[0].offsetWidth // force reflow
	      }
	
	      that.$element.addClass('in')
	
	      that.enforceFocus()
	
	      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })
	
	      transition ?
	        that.$dialog // wait for modal to slide in
	          .one('bsTransitionEnd', function () {
	            that.$element.trigger('focus').trigger(e)
	          })
	          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
	        that.$element.trigger('focus').trigger(e)
	    })
	  }
	
	  Modal.prototype.hide = function (e) {
	    if (e) e.preventDefault()
	
	    e = $.Event('hide.bs.modal')
	
	    this.$element.trigger(e)
	
	    if (!this.isShown || e.isDefaultPrevented()) return
	
	    this.isShown = false
	
	    this.escape()
	    this.resize()
	
	    $(document).off('focusin.bs.modal')
	
	    this.$element
	      .removeClass('in')
	      .off('click.dismiss.bs.modal')
	      .off('mouseup.dismiss.bs.modal')
	
	    this.$dialog.off('mousedown.dismiss.bs.modal')
	
	    $.support.transition && this.$element.hasClass('fade') ?
	      this.$element
	        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
	        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
	      this.hideModal()
	  }
	
	  Modal.prototype.enforceFocus = function () {
	    $(document)
	      .off('focusin.bs.modal') // guard against infinite focus loop
	      .on('focusin.bs.modal', $.proxy(function (e) {
	        if (document !== e.target &&
	            this.$element[0] !== e.target &&
	            !this.$element.has(e.target).length) {
	          this.$element.trigger('focus')
	        }
	      }, this))
	  }
	
	  Modal.prototype.escape = function () {
	    if (this.isShown && this.options.keyboard) {
	      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
	        e.which == 27 && this.hide()
	      }, this))
	    } else if (!this.isShown) {
	      this.$element.off('keydown.dismiss.bs.modal')
	    }
	  }
	
	  Modal.prototype.resize = function () {
	    if (this.isShown) {
	      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
	    } else {
	      $(window).off('resize.bs.modal')
	    }
	  }
	
	  Modal.prototype.hideModal = function () {
	    var that = this
	    this.$element.hide()
	    this.backdrop(function () {
	      that.$body.removeClass('modal-open')
	      that.resetAdjustments()
	      that.resetScrollbar()
	      that.$element.trigger('hidden.bs.modal')
	    })
	  }
	
	  Modal.prototype.removeBackdrop = function () {
	    this.$backdrop && this.$backdrop.remove()
	    this.$backdrop = null
	  }
	
	  Modal.prototype.backdrop = function (callback) {
	    var that = this
	    var animate = this.$element.hasClass('fade') ? 'fade' : ''
	
	    if (this.isShown && this.options.backdrop) {
	      var doAnimate = $.support.transition && animate
	
	      this.$backdrop = $(document.createElement('div'))
	        .addClass('modal-backdrop ' + animate)
	        .appendTo(this.$body)
	
	      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
	        if (this.ignoreBackdropClick) {
	          this.ignoreBackdropClick = false
	          return
	        }
	        if (e.target !== e.currentTarget) return
	        this.options.backdrop == 'static'
	          ? this.$element[0].focus()
	          : this.hide()
	      }, this))
	
	      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow
	
	      this.$backdrop.addClass('in')
	
	      if (!callback) return
	
	      doAnimate ?
	        this.$backdrop
	          .one('bsTransitionEnd', callback)
	          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
	        callback()
	
	    } else if (!this.isShown && this.$backdrop) {
	      this.$backdrop.removeClass('in')
	
	      var callbackRemove = function () {
	        that.removeBackdrop()
	        callback && callback()
	      }
	      $.support.transition && this.$element.hasClass('fade') ?
	        this.$backdrop
	          .one('bsTransitionEnd', callbackRemove)
	          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
	        callbackRemove()
	
	    } else if (callback) {
	      callback()
	    }
	  }
	
	  // these following methods are used to handle overflowing modals
	
	  Modal.prototype.handleUpdate = function () {
	    this.adjustDialog()
	  }
	
	  Modal.prototype.adjustDialog = function () {
	    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight
	
	    this.$element.css({
	      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
	      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
	    })
	  }
	
	  Modal.prototype.resetAdjustments = function () {
	    this.$element.css({
	      paddingLeft: '',
	      paddingRight: ''
	    })
	  }
	
	  Modal.prototype.checkScrollbar = function () {
	    var fullWindowWidth = window.innerWidth
	    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
	      var documentElementRect = document.documentElement.getBoundingClientRect()
	      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
	    }
	    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
	    this.scrollbarWidth = this.measureScrollbar()
	  }
	
	  Modal.prototype.setScrollbar = function () {
	    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
	    this.originalBodyPad = document.body.style.paddingRight || ''
	    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
	  }
	
	  Modal.prototype.resetScrollbar = function () {
	    this.$body.css('padding-right', this.originalBodyPad)
	  }
	
	  Modal.prototype.measureScrollbar = function () { // thx walsh
	    var scrollDiv = document.createElement('div')
	    scrollDiv.className = 'modal-scrollbar-measure'
	    this.$body.append(scrollDiv)
	    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
	    this.$body[0].removeChild(scrollDiv)
	    return scrollbarWidth
	  }
	
	
	  // MODAL PLUGIN DEFINITION
	  // =======================
	
	  function Plugin(option, _relatedTarget) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.modal')
	      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)
	
	      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
	      if (typeof option == 'string') data[option](_relatedTarget)
	      else if (options.show) data.show(_relatedTarget)
	    })
	  }
	
	  var old = $.fn.modal
	
	  $.fn.modal             = Plugin
	  $.fn.modal.Constructor = Modal
	
	
	  // MODAL NO CONFLICT
	  // =================
	
	  $.fn.modal.noConflict = function () {
	    $.fn.modal = old
	    return this
	  }
	
	
	  // MODAL DATA-API
	  // ==============
	
	  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
	    var $this   = $(this)
	    var href    = $this.attr('href')
	    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
	    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())
	
	    if ($this.is('a')) e.preventDefault()
	
	    $target.one('show.bs.modal', function (showEvent) {
	      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
	      $target.one('hidden.bs.modal', function () {
	        $this.is(':visible') && $this.trigger('focus')
	      })
	    })
	    Plugin.call($target, option, this)
	  })
	
	}(jQuery);
	


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var jQuery = __webpack_require__(1);
	
	/* ========================================================================
	 * Bootstrap: popover.js v3.3.7
	 * http://getbootstrap.com/javascript/#popovers
	 * ========================================================================
	 * Copyright 2011-2016 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */
	
	
	+function ($) {
	  'use strict';
	
	  // POPOVER PUBLIC CLASS DEFINITION
	  // ===============================
	
	  var Popover = function (element, options) {
	    this.init('popover', element, options)
	  }
	
	  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')
	
	  Popover.VERSION  = '3.3.7'
	
	  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
	    placement: 'right',
	    trigger: 'click',
	    content: '',
	    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
	  })
	
	
	  // NOTE: POPOVER EXTENDS tooltip.js
	  // ================================
	
	  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)
	
	  Popover.prototype.constructor = Popover
	
	  Popover.prototype.getDefaults = function () {
	    return Popover.DEFAULTS
	  }
	
	  Popover.prototype.setContent = function () {
	    var $tip    = this.tip()
	    var title   = this.getTitle()
	    var content = this.getContent()
	
	    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
	    $tip.find('.popover-content').children().detach().end()[ // we use append for html objects to maintain js events
	      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
	    ](content)
	
	    $tip.removeClass('fade top bottom left right in')
	
	    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
	    // this manually by checking the contents.
	    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
	  }
	
	  Popover.prototype.hasContent = function () {
	    return this.getTitle() || this.getContent()
	  }
	
	  Popover.prototype.getContent = function () {
	    var $e = this.$element
	    var o  = this.options
	
	    return $e.attr('data-content')
	      || (typeof o.content == 'function' ?
	            o.content.call($e[0]) :
	            o.content)
	  }
	
	  Popover.prototype.arrow = function () {
	    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
	  }
	
	
	  // POPOVER PLUGIN DEFINITION
	  // =========================
	
	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.popover')
	      var options = typeof option == 'object' && option
	
	      if (!data && /destroy|hide/.test(option)) return
	      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
	      if (typeof option == 'string') data[option]()
	    })
	  }
	
	  var old = $.fn.popover
	
	  $.fn.popover             = Plugin
	  $.fn.popover.Constructor = Popover
	
	
	  // POPOVER NO CONFLICT
	  // ===================
	
	  $.fn.popover.noConflict = function () {
	    $.fn.popover = old
	    return this
	  }
	
	}(jQuery);
	


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var jQuery = __webpack_require__(1);
	
	/* ========================================================================
	 * Bootstrap: scrollspy.js v3.3.7
	 * http://getbootstrap.com/javascript/#scrollspy
	 * ========================================================================
	 * Copyright 2011-2016 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */
	
	
	+function ($) {
	  'use strict';
	
	  // SCROLLSPY CLASS DEFINITION
	  // ==========================
	
	  function ScrollSpy(element, options) {
	    this.$body          = $(document.body)
	    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element)
	    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
	    this.selector       = (this.options.target || '') + ' .nav li > a'
	    this.offsets        = []
	    this.targets        = []
	    this.activeTarget   = null
	    this.scrollHeight   = 0
	
	    this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this))
	    this.refresh()
	    this.process()
	  }
	
	  ScrollSpy.VERSION  = '3.3.7'
	
	  ScrollSpy.DEFAULTS = {
	    offset: 10
	  }
	
	  ScrollSpy.prototype.getScrollHeight = function () {
	    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
	  }
	
	  ScrollSpy.prototype.refresh = function () {
	    var that          = this
	    var offsetMethod  = 'offset'
	    var offsetBase    = 0
	
	    this.offsets      = []
	    this.targets      = []
	    this.scrollHeight = this.getScrollHeight()
	
	    if (!$.isWindow(this.$scrollElement[0])) {
	      offsetMethod = 'position'
	      offsetBase   = this.$scrollElement.scrollTop()
	    }
	
	    this.$body
	      .find(this.selector)
	      .map(function () {
	        var $el   = $(this)
	        var href  = $el.data('target') || $el.attr('href')
	        var $href = /^#./.test(href) && $(href)
	
	        return ($href
	          && $href.length
	          && $href.is(':visible')
	          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
	      })
	      .sort(function (a, b) { return a[0] - b[0] })
	      .each(function () {
	        that.offsets.push(this[0])
	        that.targets.push(this[1])
	      })
	  }
	
	  ScrollSpy.prototype.process = function () {
	    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
	    var scrollHeight = this.getScrollHeight()
	    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
	    var offsets      = this.offsets
	    var targets      = this.targets
	    var activeTarget = this.activeTarget
	    var i
	
	    if (this.scrollHeight != scrollHeight) {
	      this.refresh()
	    }
	
	    if (scrollTop >= maxScroll) {
	      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
	    }
	
	    if (activeTarget && scrollTop < offsets[0]) {
	      this.activeTarget = null
	      return this.clear()
	    }
	
	    for (i = offsets.length; i--;) {
	      activeTarget != targets[i]
	        && scrollTop >= offsets[i]
	        && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1])
	        && this.activate(targets[i])
	    }
	  }
	
	  ScrollSpy.prototype.activate = function (target) {
	    this.activeTarget = target
	
	    this.clear()
	
	    var selector = this.selector +
	      '[data-target="' + target + '"],' +
	      this.selector + '[href="' + target + '"]'
	
	    var active = $(selector)
	      .parents('li')
	      .addClass('active')
	
	    if (active.parent('.dropdown-menu').length) {
	      active = active
	        .closest('li.dropdown')
	        .addClass('active')
	    }
	
	    active.trigger('activate.bs.scrollspy')
	  }
	
	  ScrollSpy.prototype.clear = function () {
	    $(this.selector)
	      .parentsUntil(this.options.target, '.active')
	      .removeClass('active')
	  }
	
	
	  // SCROLLSPY PLUGIN DEFINITION
	  // ===========================
	
	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.scrollspy')
	      var options = typeof option == 'object' && option
	
	      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
	      if (typeof option == 'string') data[option]()
	    })
	  }
	
	  var old = $.fn.scrollspy
	
	  $.fn.scrollspy             = Plugin
	  $.fn.scrollspy.Constructor = ScrollSpy
	
	
	  // SCROLLSPY NO CONFLICT
	  // =====================
	
	  $.fn.scrollspy.noConflict = function () {
	    $.fn.scrollspy = old
	    return this
	  }
	
	
	  // SCROLLSPY DATA-API
	  // ==================
	
	  $(window).on('load.bs.scrollspy.data-api', function () {
	    $('[data-spy="scroll"]').each(function () {
	      var $spy = $(this)
	      Plugin.call($spy, $spy.data())
	    })
	  })
	
	}(jQuery);
	


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var jQuery = __webpack_require__(1);
	
	/* ========================================================================
	 * Bootstrap: tab.js v3.3.7
	 * http://getbootstrap.com/javascript/#tabs
	 * ========================================================================
	 * Copyright 2011-2016 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */
	
	
	+function ($) {
	  'use strict';
	
	  // TAB CLASS DEFINITION
	  // ====================
	
	  var Tab = function (element) {
	    // jscs:disable requireDollarBeforejQueryAssignment
	    this.element = $(element)
	    // jscs:enable requireDollarBeforejQueryAssignment
	  }
	
	  Tab.VERSION = '3.3.7'
	
	  Tab.TRANSITION_DURATION = 150
	
	  Tab.prototype.show = function () {
	    var $this    = this.element
	    var $ul      = $this.closest('ul:not(.dropdown-menu)')
	    var selector = $this.data('target')
	
	    if (!selector) {
	      selector = $this.attr('href')
	      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
	    }
	
	    if ($this.parent('li').hasClass('active')) return
	
	    var $previous = $ul.find('.active:last a')
	    var hideEvent = $.Event('hide.bs.tab', {
	      relatedTarget: $this[0]
	    })
	    var showEvent = $.Event('show.bs.tab', {
	      relatedTarget: $previous[0]
	    })
	
	    $previous.trigger(hideEvent)
	    $this.trigger(showEvent)
	
	    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return
	
	    var $target = $(selector)
	
	    this.activate($this.closest('li'), $ul)
	    this.activate($target, $target.parent(), function () {
	      $previous.trigger({
	        type: 'hidden.bs.tab',
	        relatedTarget: $this[0]
	      })
	      $this.trigger({
	        type: 'shown.bs.tab',
	        relatedTarget: $previous[0]
	      })
	    })
	  }
	
	  Tab.prototype.activate = function (element, container, callback) {
	    var $active    = container.find('> .active')
	    var transition = callback
	      && $.support.transition
	      && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length)
	
	    function next() {
	      $active
	        .removeClass('active')
	        .find('> .dropdown-menu > .active')
	          .removeClass('active')
	        .end()
	        .find('[data-toggle="tab"]')
	          .attr('aria-expanded', false)
	
	      element
	        .addClass('active')
	        .find('[data-toggle="tab"]')
	          .attr('aria-expanded', true)
	
	      if (transition) {
	        element[0].offsetWidth // reflow for transition
	        element.addClass('in')
	      } else {
	        element.removeClass('fade')
	      }
	
	      if (element.parent('.dropdown-menu').length) {
	        element
	          .closest('li.dropdown')
	            .addClass('active')
	          .end()
	          .find('[data-toggle="tab"]')
	            .attr('aria-expanded', true)
	      }
	
	      callback && callback()
	    }
	
	    $active.length && transition ?
	      $active
	        .one('bsTransitionEnd', next)
	        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
	      next()
	
	    $active.removeClass('in')
	  }
	
	
	  // TAB PLUGIN DEFINITION
	  // =====================
	
	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this)
	      var data  = $this.data('bs.tab')
	
	      if (!data) $this.data('bs.tab', (data = new Tab(this)))
	      if (typeof option == 'string') data[option]()
	    })
	  }
	
	  var old = $.fn.tab
	
	  $.fn.tab             = Plugin
	  $.fn.tab.Constructor = Tab
	
	
	  // TAB NO CONFLICT
	  // ===============
	
	  $.fn.tab.noConflict = function () {
	    $.fn.tab = old
	    return this
	  }
	
	
	  // TAB DATA-API
	  // ============
	
	  var clickHandler = function (e) {
	    e.preventDefault()
	    Plugin.call($(this), 'show')
	  }
	
	  $(document)
	    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
	    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)
	
	}(jQuery);
	


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var jQuery = __webpack_require__(1);
	
	/* ========================================================================
	 * Bootstrap: tooltip.js v3.3.7
	 * http://getbootstrap.com/javascript/#tooltip
	 * Inspired by the original jQuery.tipsy by Jason Frame
	 * ========================================================================
	 * Copyright 2011-2016 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */
	
	
	+function ($) {
	  'use strict';
	
	  // TOOLTIP PUBLIC CLASS DEFINITION
	  // ===============================
	
	  var Tooltip = function (element, options) {
	    this.type       = null
	    this.options    = null
	    this.enabled    = null
	    this.timeout    = null
	    this.hoverState = null
	    this.$element   = null
	    this.inState    = null
	
	    this.init('tooltip', element, options)
	  }
	
	  Tooltip.VERSION  = '3.3.7'
	
	  Tooltip.TRANSITION_DURATION = 150
	
	  Tooltip.DEFAULTS = {
	    animation: true,
	    placement: 'top',
	    selector: false,
	    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
	    trigger: 'hover focus',
	    title: '',
	    delay: 0,
	    html: false,
	    container: false,
	    viewport: {
	      selector: 'body',
	      padding: 0
	    }
	  }
	
	  Tooltip.prototype.init = function (type, element, options) {
	    this.enabled   = true
	    this.type      = type
	    this.$element  = $(element)
	    this.options   = this.getOptions(options)
	    this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : (this.options.viewport.selector || this.options.viewport))
	    this.inState   = { click: false, hover: false, focus: false }
	
	    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
	      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
	    }
	
	    var triggers = this.options.trigger.split(' ')
	
	    for (var i = triggers.length; i--;) {
	      var trigger = triggers[i]
	
	      if (trigger == 'click') {
	        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
	      } else if (trigger != 'manual') {
	        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
	        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'
	
	        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
	        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
	      }
	    }
	
	    this.options.selector ?
	      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
	      this.fixTitle()
	  }
	
	  Tooltip.prototype.getDefaults = function () {
	    return Tooltip.DEFAULTS
	  }
	
	  Tooltip.prototype.getOptions = function (options) {
	    options = $.extend({}, this.getDefaults(), this.$element.data(), options)
	
	    if (options.delay && typeof options.delay == 'number') {
	      options.delay = {
	        show: options.delay,
	        hide: options.delay
	      }
	    }
	
	    return options
	  }
	
	  Tooltip.prototype.getDelegateOptions = function () {
	    var options  = {}
	    var defaults = this.getDefaults()
	
	    this._options && $.each(this._options, function (key, value) {
	      if (defaults[key] != value) options[key] = value
	    })
	
	    return options
	  }
	
	  Tooltip.prototype.enter = function (obj) {
	    var self = obj instanceof this.constructor ?
	      obj : $(obj.currentTarget).data('bs.' + this.type)
	
	    if (!self) {
	      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
	      $(obj.currentTarget).data('bs.' + this.type, self)
	    }
	
	    if (obj instanceof $.Event) {
	      self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true
	    }
	
	    if (self.tip().hasClass('in') || self.hoverState == 'in') {
	      self.hoverState = 'in'
	      return
	    }
	
	    clearTimeout(self.timeout)
	
	    self.hoverState = 'in'
	
	    if (!self.options.delay || !self.options.delay.show) return self.show()
	
	    self.timeout = setTimeout(function () {
	      if (self.hoverState == 'in') self.show()
	    }, self.options.delay.show)
	  }
	
	  Tooltip.prototype.isInStateTrue = function () {
	    for (var key in this.inState) {
	      if (this.inState[key]) return true
	    }
	
	    return false
	  }
	
	  Tooltip.prototype.leave = function (obj) {
	    var self = obj instanceof this.constructor ?
	      obj : $(obj.currentTarget).data('bs.' + this.type)
	
	    if (!self) {
	      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
	      $(obj.currentTarget).data('bs.' + this.type, self)
	    }
	
	    if (obj instanceof $.Event) {
	      self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false
	    }
	
	    if (self.isInStateTrue()) return
	
	    clearTimeout(self.timeout)
	
	    self.hoverState = 'out'
	
	    if (!self.options.delay || !self.options.delay.hide) return self.hide()
	
	    self.timeout = setTimeout(function () {
	      if (self.hoverState == 'out') self.hide()
	    }, self.options.delay.hide)
	  }
	
	  Tooltip.prototype.show = function () {
	    var e = $.Event('show.bs.' + this.type)
	
	    if (this.hasContent() && this.enabled) {
	      this.$element.trigger(e)
	
	      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
	      if (e.isDefaultPrevented() || !inDom) return
	      var that = this
	
	      var $tip = this.tip()
	
	      var tipId = this.getUID(this.type)
	
	      this.setContent()
	      $tip.attr('id', tipId)
	      this.$element.attr('aria-describedby', tipId)
	
	      if (this.options.animation) $tip.addClass('fade')
	
	      var placement = typeof this.options.placement == 'function' ?
	        this.options.placement.call(this, $tip[0], this.$element[0]) :
	        this.options.placement
	
	      var autoToken = /\s?auto?\s?/i
	      var autoPlace = autoToken.test(placement)
	      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'
	
	      $tip
	        .detach()
	        .css({ top: 0, left: 0, display: 'block' })
	        .addClass(placement)
	        .data('bs.' + this.type, this)
	
	      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)
	      this.$element.trigger('inserted.bs.' + this.type)
	
	      var pos          = this.getPosition()
	      var actualWidth  = $tip[0].offsetWidth
	      var actualHeight = $tip[0].offsetHeight
	
	      if (autoPlace) {
	        var orgPlacement = placement
	        var viewportDim = this.getPosition(this.$viewport)
	
	        placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top'    :
	                    placement == 'top'    && pos.top    - actualHeight < viewportDim.top    ? 'bottom' :
	                    placement == 'right'  && pos.right  + actualWidth  > viewportDim.width  ? 'left'   :
	                    placement == 'left'   && pos.left   - actualWidth  < viewportDim.left   ? 'right'  :
	                    placement
	
	        $tip
	          .removeClass(orgPlacement)
	          .addClass(placement)
	      }
	
	      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)
	
	      this.applyPlacement(calculatedOffset, placement)
	
	      var complete = function () {
	        var prevHoverState = that.hoverState
	        that.$element.trigger('shown.bs.' + that.type)
	        that.hoverState = null
	
	        if (prevHoverState == 'out') that.leave(that)
	      }
	
	      $.support.transition && this.$tip.hasClass('fade') ?
	        $tip
	          .one('bsTransitionEnd', complete)
	          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
	        complete()
	    }
	  }
	
	  Tooltip.prototype.applyPlacement = function (offset, placement) {
	    var $tip   = this.tip()
	    var width  = $tip[0].offsetWidth
	    var height = $tip[0].offsetHeight
	
	    // manually read margins because getBoundingClientRect includes difference
	    var marginTop = parseInt($tip.css('margin-top'), 10)
	    var marginLeft = parseInt($tip.css('margin-left'), 10)
	
	    // we must check for NaN for ie 8/9
	    if (isNaN(marginTop))  marginTop  = 0
	    if (isNaN(marginLeft)) marginLeft = 0
	
	    offset.top  += marginTop
	    offset.left += marginLeft
	
	    // $.fn.offset doesn't round pixel values
	    // so we use setOffset directly with our own function B-0
	    $.offset.setOffset($tip[0], $.extend({
	      using: function (props) {
	        $tip.css({
	          top: Math.round(props.top),
	          left: Math.round(props.left)
	        })
	      }
	    }, offset), 0)
	
	    $tip.addClass('in')
	
	    // check to see if placing tip in new offset caused the tip to resize itself
	    var actualWidth  = $tip[0].offsetWidth
	    var actualHeight = $tip[0].offsetHeight
	
	    if (placement == 'top' && actualHeight != height) {
	      offset.top = offset.top + height - actualHeight
	    }
	
	    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)
	
	    if (delta.left) offset.left += delta.left
	    else offset.top += delta.top
	
	    var isVertical          = /top|bottom/.test(placement)
	    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
	    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'
	
	    $tip.offset(offset)
	    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
	  }
	
	  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
	    this.arrow()
	      .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
	      .css(isVertical ? 'top' : 'left', '')
	  }
	
	  Tooltip.prototype.setContent = function () {
	    var $tip  = this.tip()
	    var title = this.getTitle()
	
	    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
	    $tip.removeClass('fade in top bottom left right')
	  }
	
	  Tooltip.prototype.hide = function (callback) {
	    var that = this
	    var $tip = $(this.$tip)
	    var e    = $.Event('hide.bs.' + this.type)
	
	    function complete() {
	      if (that.hoverState != 'in') $tip.detach()
	      if (that.$element) { // TODO: Check whether guarding this code with this `if` is really necessary.
	        that.$element
	          .removeAttr('aria-describedby')
	          .trigger('hidden.bs.' + that.type)
	      }
	      callback && callback()
	    }
	
	    this.$element.trigger(e)
	
	    if (e.isDefaultPrevented()) return
	
	    $tip.removeClass('in')
	
	    $.support.transition && $tip.hasClass('fade') ?
	      $tip
	        .one('bsTransitionEnd', complete)
	        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
	      complete()
	
	    this.hoverState = null
	
	    return this
	  }
	
	  Tooltip.prototype.fixTitle = function () {
	    var $e = this.$element
	    if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
	      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
	    }
	  }
	
	  Tooltip.prototype.hasContent = function () {
	    return this.getTitle()
	  }
	
	  Tooltip.prototype.getPosition = function ($element) {
	    $element   = $element || this.$element
	
	    var el     = $element[0]
	    var isBody = el.tagName == 'BODY'
	
	    var elRect    = el.getBoundingClientRect()
	    if (elRect.width == null) {
	      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
	      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
	    }
	    var isSvg = window.SVGElement && el instanceof window.SVGElement
	    // Avoid using $.offset() on SVGs since it gives incorrect results in jQuery 3.
	    // See https://github.com/twbs/bootstrap/issues/20280
	    var elOffset  = isBody ? { top: 0, left: 0 } : (isSvg ? null : $element.offset())
	    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
	    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null
	
	    return $.extend({}, elRect, scroll, outerDims, elOffset)
	  }
	
	  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
	    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
	           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
	           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
	        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }
	
	  }
	
	  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
	    var delta = { top: 0, left: 0 }
	    if (!this.$viewport) return delta
	
	    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
	    var viewportDimensions = this.getPosition(this.$viewport)
	
	    if (/right|left/.test(placement)) {
	      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
	      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
	      if (topEdgeOffset < viewportDimensions.top) { // top overflow
	        delta.top = viewportDimensions.top - topEdgeOffset
	      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
	        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
	      }
	    } else {
	      var leftEdgeOffset  = pos.left - viewportPadding
	      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
	      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
	        delta.left = viewportDimensions.left - leftEdgeOffset
	      } else if (rightEdgeOffset > viewportDimensions.right) { // right overflow
	        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
	      }
	    }
	
	    return delta
	  }
	
	  Tooltip.prototype.getTitle = function () {
	    var title
	    var $e = this.$element
	    var o  = this.options
	
	    title = $e.attr('data-original-title')
	      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)
	
	    return title
	  }
	
	  Tooltip.prototype.getUID = function (prefix) {
	    do prefix += ~~(Math.random() * 1000000)
	    while (document.getElementById(prefix))
	    return prefix
	  }
	
	  Tooltip.prototype.tip = function () {
	    if (!this.$tip) {
	      this.$tip = $(this.options.template)
	      if (this.$tip.length != 1) {
	        throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!')
	      }
	    }
	    return this.$tip
	  }
	
	  Tooltip.prototype.arrow = function () {
	    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
	  }
	
	  Tooltip.prototype.enable = function () {
	    this.enabled = true
	  }
	
	  Tooltip.prototype.disable = function () {
	    this.enabled = false
	  }
	
	  Tooltip.prototype.toggleEnabled = function () {
	    this.enabled = !this.enabled
	  }
	
	  Tooltip.prototype.toggle = function (e) {
	    var self = this
	    if (e) {
	      self = $(e.currentTarget).data('bs.' + this.type)
	      if (!self) {
	        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
	        $(e.currentTarget).data('bs.' + this.type, self)
	      }
	    }
	
	    if (e) {
	      self.inState.click = !self.inState.click
	      if (self.isInStateTrue()) self.enter(self)
	      else self.leave(self)
	    } else {
	      self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
	    }
	  }
	
	  Tooltip.prototype.destroy = function () {
	    var that = this
	    clearTimeout(this.timeout)
	    this.hide(function () {
	      that.$element.off('.' + that.type).removeData('bs.' + that.type)
	      if (that.$tip) {
	        that.$tip.detach()
	      }
	      that.$tip = null
	      that.$arrow = null
	      that.$viewport = null
	      that.$element = null
	    })
	  }
	
	
	  // TOOLTIP PLUGIN DEFINITION
	  // =========================
	
	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.tooltip')
	      var options = typeof option == 'object' && option
	
	      if (!data && /destroy|hide/.test(option)) return
	      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
	      if (typeof option == 'string') data[option]()
	    })
	  }
	
	  var old = $.fn.tooltip
	
	  $.fn.tooltip             = Plugin
	  $.fn.tooltip.Constructor = Tooltip
	
	
	  // TOOLTIP NO CONFLICT
	  // ===================
	
	  $.fn.tooltip.noConflict = function () {
	    $.fn.tooltip = old
	    return this
	  }
	
	}(jQuery);
	


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var jQuery = __webpack_require__(1);
	
	/* ========================================================================
	 * Bootstrap: transition.js v3.3.7
	 * http://getbootstrap.com/javascript/#transitions
	 * ========================================================================
	 * Copyright 2011-2016 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */
	
	
	+function ($) {
	  'use strict';
	
	  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
	  // ============================================================
	
	  function transitionEnd() {
	    var el = document.createElement('bootstrap')
	
	    var transEndEventNames = {
	      WebkitTransition : 'webkitTransitionEnd',
	      MozTransition    : 'transitionend',
	      OTransition      : 'oTransitionEnd otransitionend',
	      transition       : 'transitionend'
	    }
	
	    for (var name in transEndEventNames) {
	      if (el.style[name] !== undefined) {
	        return { end: transEndEventNames[name] }
	      }
	    }
	
	    return false // explicit for ie8 (  ._.)
	  }
	
	  // http://blog.alexmaccaw.com/css-transitions
	  $.fn.emulateTransitionEnd = function (duration) {
	    var called = false
	    var $el = this
	    $(this).one('bsTransitionEnd', function () { called = true })
	    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
	    setTimeout(callback, duration)
	    return this
	  }
	
	  $(function () {
	    $.support.transition = transitionEnd()
	
	    if (!$.support.transition) return
	
	    $.event.special.bsTransitionEnd = {
	      bindType: $.support.transition.end,
	      delegateType: $.support.transition.end,
	      handle: function (e) {
	        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
	      }
	    }
	  })
	
	}(jQuery);
	


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(3)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./../../postcss-loader/index.js!./font-awesome.css", function() {
				var newContent = require("!!./../../css-loader/index.js!./../../postcss-loader/index.js!./font-awesome.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(10);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(3)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./app.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./app.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(11);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(3)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../css-loader/index.js!./../resolve-url-loader/index.js!./../sass-loader/index.js?sourceMap!./lib/bootstrap.styles.loader.js?{\"bootstrapVersion\":3,\"useCustomIconFontPath\":false,\"extractStyles\":false,\"styleLoaders\":[\"style\",\"css\",\"sass\"],\"styles\":[\"mixins\",\"normalize\",\"print\",\"glyphicons\",\"scaffolding\",\"type\",\"code\",\"grid\",\"tables\",\"forms\",\"buttons\",\"component-animations\",\"dropdowns\",\"button-groups\",\"input-groups\",\"navs\",\"navbar\",\"breadcrumbs\",\"pagination\",\"pager\",\"labels\",\"badges\",\"jumbotron\",\"thumbnails\",\"alerts\",\"progress-bars\",\"media\",\"list-group\",\"panels\",\"wells\",\"responsive-embed\",\"close\",\"modals\",\"tooltip\",\"popovers\",\"carousel\",\"utilities\",\"responsive-utilities\"],\"scripts\":[\"transition\",\"alert\",\"button\",\"carousel\",\"collapse\",\"dropdown\",\"modal\",\"tooltip\",\"popover\",\"scrollspy\",\"tab\",\"affix\"],\"configFilePath\":\"/pipeline/source/node_modules/bootstrap-loader/.bootstraprc-3-default\",\"bootstrapPath\":\"/pipeline/source/node_modules/bootstrap-sass\",\"bootstrapRelPath\":\"../bootstrap-sass\"}!./no-op.js", function() {
				var newContent = require("!!./../css-loader/index.js!./../resolve-url-loader/index.js!./../sass-loader/index.js?sourceMap!./lib/bootstrap.styles.loader.js?{\"bootstrapVersion\":3,\"useCustomIconFontPath\":false,\"extractStyles\":false,\"styleLoaders\":[\"style\",\"css\",\"sass\"],\"styles\":[\"mixins\",\"normalize\",\"print\",\"glyphicons\",\"scaffolding\",\"type\",\"code\",\"grid\",\"tables\",\"forms\",\"buttons\",\"component-animations\",\"dropdowns\",\"button-groups\",\"input-groups\",\"navs\",\"navbar\",\"breadcrumbs\",\"pagination\",\"pager\",\"labels\",\"badges\",\"jumbotron\",\"thumbnails\",\"alerts\",\"progress-bars\",\"media\",\"list-group\",\"panels\",\"wells\",\"responsive-embed\",\"close\",\"modals\",\"tooltip\",\"popovers\",\"carousel\",\"utilities\",\"responsive-utilities\"],\"scripts\":[\"transition\",\"alert\",\"button\",\"carousel\",\"collapse\",\"dropdown\",\"modal\",\"tooltip\",\"popover\",\"scrollspy\",\"tab\",\"affix\"],\"configFilePath\":\"/pipeline/source/node_modules/bootstrap-loader/.bootstraprc-3-default\",\"bootstrapPath\":\"/pipeline/source/node_modules/bootstrap-sass\",\"bootstrapRelPath\":\"../bootstrap-sass\"}!./no-op.js");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QDwRXhpZgAATU0AKgAAAAgABwESAAMAAAABAAEAAAEaAAUAAAABAAAAYgEbAAUAAAABAAAAagEoAAMAAAABAAIAAAExAAIAAAAPAAAAcgEyAAIAAAAUAAAAgodpAAQAAAABAAAAlgAAAAAAAABIAAAAAQAAAEgAAAABUGl4ZWxtYXRvciAzLjYAADIwMTY6MTI6MDQgMTc6MTI6MDcAAAWgAgAEAAAAAQAAA4qgAwAEAAAAAQAAAliiDgAFAAAAAQAAANiiDwAFAAAAAQAAAOCiEAADAAAAAQABAAAAAAAAAAAASAAAAAEAAABIAAAAAf/hCfRodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtcDpNb2RpZnlEYXRlPSIyMDE2LTEyLTA0VDE3OjEyOjA3IiB4bXA6Q3JlYXRvclRvb2w9IlBpeGVsbWF0b3IgMy42Ij4gPGRjOnN1YmplY3Q+IDxyZGY6QmFnLz4gPC9kYzpzdWJqZWN0PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8P3hwYWNrZXQgZW5kPSJ3Ij8+AP/tADhQaG90b3Nob3AgMy4wADhCSU0EBAAAAAAAADhCSU0EJQAAAAAAENQdjNmPALIE6YAJmOz4Qn7/4gIcSUNDX1BST0ZJTEUAAQEAAAIMbGNtcwIQAABtbnRyUkdCIFhZWiAH3AABABkAAwApADlhY3NwQVBQTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLWxjbXMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApkZXNjAAAA/AAAAF5jcHJ0AAABXAAAAAt3dHB0AAABaAAAABRia3B0AAABfAAAABRyWFlaAAABkAAAABRnWFlaAAABpAAAABRiWFlaAAABuAAAABRyVFJDAAABzAAAAEBnVFJDAAABzAAAAEBiVFJDAAABzAAAAEBkZXNjAAAAAAAAAANjMgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB0ZXh0AAAAAElYAABYWVogAAAAAAAA9tYAAQAAAADTLVhZWiAAAAAAAAADFgAAAzMAAAKkWFlaIAAAAAAAAG+iAAA49QAAA5BYWVogAAAAAAAAYpkAALeFAAAY2lhZWiAAAAAAAAAkoAAAD4QAALbPY3VydgAAAAAAAAAaAAAAywHJA2MFkghrC/YQPxVRGzQh8SmQMhg7kkYFUXdd7WtwegWJsZp8rGm/fdPD6TD////AABEIAlgDigMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2wBDAAICAgICAgMCAgMEAwMDBAUEBAQEBQcFBQUFBQcIBwcHBwcHCAgICAgICAgKCgoKCgoMDAwMDA0NDQ0NDQ0NDQ3/2wBDAQICAgMDAwYDAwYOCQgJDg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg7/3QAEADn/2gAMAwEAAhEDEQA/APl4SnPAq5GZG5waz7aVc4YV0ds0OOaAK8ZPcVbRR6Vb8uB8bRg0og4yvagCIQ5FHl4xxV+JCeDU5jQcmgCiqdKsJCDigsoPFTJIKALMUA71cFuOoqCJ604iD1oAqrbkngVfismI6Vp28cRrftrOJ8c9aAOVFmwwMU8WzDkCu8Gihh8pBpp0RhxigDkYoGyCRWisLAZFdAukuP4asx6awGCKAMOJGH1rVhR+MVoppw64q/HZEY4oAoxI/etCNTVtLU46VYjtjnpQBAsZ7U7Y6mtVLfbzUhjUjkUAUI8itCNqh8vFSqDQBoRSEYrZt7kjHNYMdakA6CgDp7e+dcEGur0/XJ4mGGrg4gRWvbPgigD3bRPF2oR7Qs3p1r1Gz8Sz3KCVo1LjjI7j6V82aRdohG8d69MsdWt/JwuVbHY0AekrrkCXDNKcuT93tXaafe2s4DRDBPJr5sk1SYzkgnGa7bRvE1vax/vJfmx0NAHvvmptBbk1z2oXd6SDbxlUBwT3NcdH4oja2E3m4ycDnioJvGaQxlLiUBT/AHRzigDr01K+i5MDEA4JpG1y5Eq74gFP+0K82vPiDar+6t97KB3OM1gy+MFnjONyyZyCMYxQB7dDdJcl3HBPbrg0yKGSXarxltjZDHjmvErLxTcW8gdDnnua9D0rxa05BlCqe+O9AHaTNCjeYyDfjALVE+rywJwFG3oM9a0rK7tLxckLz1yM1qf2Tpdwu14F+bjI4oA48eI5CcEADr71eXX4mx82eORmp7rwfaoC8MhVfRuRXL32jS2gLDBXPVTmgDpH8UQqPkWsy58QyT5QcAdK5loGX3pyRHvQB1Vvqsa25WTJc557AVlSOshzCpB7981TQBQQw3ZqaOUxHcgwaABGmjPJIGelSG4nwQGJBphklkOXJNacdhGyAlyXboFGRQBXsbS8u33IQm3+JuPwFd7pdrLa8XXzscEKpz+OTT9P8P2ywxu+4SDqQevtV24iWzxIATggZJ7UAakckj/6tSvu3Sre4quWOSOuKyY7vzj5cD/nWlHtRRuYZPvQBOo3DJp+KYD6U2aSOGMySMFUDJJoAlyBVW4EE0TJOpKYyeD2rjrrxXIkxWBFKA8H1FXdOv7jVnPnM0aHosfAIHXJoAsaY0P2grbRFkzwxHIrpc5PWoIoUiGyIBVx0Hr61LsU/e7UASUUUUAFFFFAEUkbOOGx+GahtLUWyEElmY5J/wAKivL9bUDjdngc1At7JdzJHbgqvWQkdvY+tAGvRRRQAh6GsJtYtUiMZyzAEEAcVfmtZ5ZVlEu3b1UZ2muetfD80kzteNtUH+E8t70ARWJlurskKGPJ+boB/wDWrfuLZjGiW+GBPIHv3HtRFpcdrJvtj1BB3nNMhhurIBUjEmXXJU84PXOegFAE81kXVREFQjr71NCs/CSPygGRirnNFABXhnxP8N2bQPqEQxOxB3ck4HUV7nXPa9pi3tqysNykfMO+KAPgXUtQ+zzCOBTuz95h830rC8UWf27TluJF6gnng5r39/hndanqjny2jUSfKSOoJ9PerXxC+Gz2dgs0IBjgUM7E4UdunrQB8FXugykk4I/CuMv9KuEJBXjpXv8ArohsmKKdxHXA4zXBFlnkYGPOfagDyE6PcSSbNpwT1r0rwt4Fu7iLCwM5JzkDnFeveBPh/J4kvoo/K4Zh7cV94eD/AIYaFolqizwJJIvQ46f40Aflf4r8B3NqCPJKFa8U1Tw/dJnEZz9K/c7xB8LvC+v4ee2CuBjK8Cvl/wCJ3wJt7BTLpEPmRsCWIH3aAPydutPu4iVZCMe1YkkEqv8AMOlfWXijwV9jmaPy844J968Q1jRjDcMoXvQB5m8MmOpqvKJUXFdzJpmF5G2sq5sox9/tQByAu5bfnOM9RSxXYaQsT1q5eWiOSUH0rGFs8bZXvQBoGdirDtVaPVLq1OY3IAPrUixSN2wPWkWxV5MUAepeBPiBdadeoLiMzqcAZ5IPqK/UD4O/Ea7urSG3vULRXBGyZuseBj5hX5deENL0yK6jkL75ugU9Aa+yvBbeINPtbV3lWK3LcBRkso9aAP0LubKMWjXcAEs8i/I59T0P0rh/EbzT6VHaiJWmVvLaQrnPqRVbSfiPolppUUesXUYkPyhQeVUDv6e1cN4o+Meg6dGTYNG+Acd/50AedeJtJFh5v2lX5BLOB8vtivkzxjr1hps0iQgMCcEdK6n4mftA3F6rQ28gwxZT0GAK+L/EXjr7XO7SyfMxJ60Adlr+tW10WKY5615VqjRP04FZn/CQQzNy2efWs6a9SRj8wH40AOeK1aNgAN2O9ee6hCFdwOcH866q4uFI4PNYUjIzEtzQBxNyjAnArFlznNdrexxuSV4zXOz2jFvlHBoA59iajrYksWAzisyWPacUAVyeeaYZADSsOaiKnNAEokJPAqVJPWkgh8xgBWwlguRmgDPyW6UYbpW4lqig7RnmpFsVzk9aAOdZSDzSqcHmt2azDcjtVFrQqelAFTzSMAVL5v8AnFO+zSE8CpRaS4oA/9D5EW5QNkVei1ADvxXAi6k61PHdvnrQB6ZDqSjvWlDqQ/vV5hFcyHoa0orqTigD0oagpGQaPt2/iuJhuX7mtSOY8c0AdEshY1biBJwKyLaQFuTXR2jRfxYoAkjVgRWvbRue9SxrZsnDc1PEURuCKANCGJwBitm3MiDvxVC1uF6GtyB0YYBoA1LS8cABq6SC4SQciudgjjcjLAVuRiJV+VhQBtwQxS9qtfY4xisCG68tvlbpWpFfK460AaQs4doPekMCDpUC3EfdqezhuVbigCZY0JrQitFbkVjCVlPFatvcsMUAWntQgz1rNlXacdK1pJ8rms2RgxoArKKnVM0JHnpV+KMGgCGOOtGBORTVjA6mrsQQCgC/FjHNW1wOlUVPpVpGOKANKG5ZDwa6Oy1GReA1cpFGzGtOJHTnFAHXLeBvvGoJLnB3BqxRI2OT+FNMjMaAN1b99u0ufzqGa8mc/eJrKXcasRqaALCu5q5FuPrUUUeSK1YY8UAT26tkZrrLJjEAQaz7KNHwCtb8FqRggUAdpouoSRlSeB616bY6lC23cTn615BbCdFChcCtu2NyGG1jQB7Kl6kgCgfnTHsba5zlcFuvpXFafd3iYEgJHrXX2lzvxzg0AYV54VlG6SFg3fFYk2jXkCB3jOOnHNesxZdfm5+lK8SkYxx9M0AeNG1cfeUikFv616hdabbSgkqTj04rm5ra0jY7AvHZiaAOXWDtW/oskcE6pOPlB4Poah2DPHH0pwTvQB6JHOCQMZU9CtOm8uVWjYBhiuJiuZkTywxwOnrVyW8kljUAkMOpoAz7ma6hneNCVCnAHtVKS5umJLO351obW378nd696fLmbBdRn1xQBnRarfW+QkjYPqc1Hc3t1fkfaXLKv8IOBWmLNZk8uOMl85yOaqNaMjYZSCKAJzZWMKos8DN5oDqyt0Hp+FbkD22jyCCOPDSAHJbdwav2lnFNGkswLLxsVuxxitKWytZnEkiDeP4u9AGbd3F29mrWgLOThiBz+ApulTXU6qLndkEhlPp2JzWpNKsAVMEAntUyB9xLdO1AEuBjFc5rNxc2bRtDuCAcHqM10lMkjjlUpIoZT2NAHnl54quAFRf3eAMkdSe9a1v4lknjPlW0jcYRh83zY74pl/4We7vmnSSMQsD8jLnBIx/+quptbeCwto7eIBUjAX0z7/U0AY1tazmMPfQGaZznqNq+lb8aCNAvfAzTt6nvSkgAk8AdaAFoJxya5XWxqV+BHo9wIyF3BgeCTUFkus21iI9cuVIIJaTocY5Bx6UAbUOv6LcSGGG8iZwSu0NzkVrAhhkHINfOiXngPR9dC/2gXDEvnb8qEdQD6GvUT8RvBNuEjOpxBcYUjJB/SgDu6Tmua0zxj4d1ef7Pp94krfkOmepraOoWKu0bToGUZIJ6CgC5XA6n4+06ymuYYAJfs2QzFto3jsPWuL8bfF7TtKE1hpR82QBkMo6Buny+tfIupeJrq6eTbKw3sWJzzk96APv3wv4rt/EEIUjZPgsVHTH19a6S8vbWwhM93IsaLzljivzTsvHms6VDsspnSVCWEisQw+lN1L4yeNLy2+x3Vy86joX5OfWgD68u/iPpWn+IpGaVfLJUBs8Be5xXG/E34saDfaUbXS595fh8nhvw9K+Mf+EivZLhp75TMT1BJFZV3qBuWLKmwHpQB3eo6/od2pkuU/egYAXox9TWJZXEF1OI7WLBbuB+lcMIJJp+vf8ACvavBNlpenxf2jeSxgxkZVjkkH0HtQB6n8OtOu4tRtJv3saxuMugyPpivr7RdWhub2a2hWUhAAWf1rx3wr4v8D2lhmKVRLkbs4444PWvSfDuo6fqd39s0y4V1cEbM85Ht1oA9HJwK53xOgk0W5TuyED8qyPE3jvRPCSq2rzqu7gAH5vyrN07xbB4tiWfTYma2/vGgD4v17wfqpmmf7LJJvJIJXjmvE7r4Ta1q1+Qluy5bnIIFfrZa6fYfZw8sKnPUyD0+teLfEz4g+EvC1nLFbxx3F2VO3YAVUj1IoA/Mjx98Pn8KW6G74kccDvXzxfjY7Z6V798R/Gt/wCKNQlaTLLkhR2FeGXum307ErG3PfFAHITuOlZjTIvWtO90y9Un5W446Vzd1Z3MYO6gB82oqoxmqEmq7fumse43oSDWVLIfWgDvtJ8TTWN0k6MflOfyr6Z0r4+BdPitREEaNQM5zk+tfEDXewYBwaI9RdB1IxQB9cav8X726uDh9oY9Qc5ri9W8b6jeqQJyQBk+nFeDQ6nK3LN09amk1eRYmTccEYoAu+JvEby53MWPevKrzUZJZCxNa2oTtNnJzXNTwlmOOKAE/tBkPBNNOqSs+AcCs2WNlPNUXdl6UAdKNRfpuzTXvMjOea54TCMc8monuScGgDbectTVbcaxDeccVZgvR3FAG6EQxnvxWLdWyMTxg1pRXSEY9ac8ay8g0AcqbTnGKrPAVOMd67iHTt4wTV+38PQzttZhk0AcDaRYkBNdDHCGxjvXUSeCrqP95EAw9qs6d4ZvJp1Ro264xigDGt9PkkwsalmPYV2mj/DrxHrJC2dnI5JwMKa9v8AfD21uLqJr1WCnBJ28D8a+/fCdr4P02CCC3jjBhjBZiAB9TQB+Z8f7PPjlkEr6fIqkZ5HrVaT4EeKYcmSzcAe1fr5eeNfCEVt5UssIVR19f0rloPEvhjU2dkaMRLwvy9aAPy3svgVrUsXmyQMPbFXh8Dr3HMDflX6oGy8OQWLzeZCwZS3ykZGa8llu9CEjjzk+8e4oA//R+C154NWo1HU1ix3B71aS5NAHQR7R3xV+Nlrmo7g1dS4NAHSRygYq6lwK5hJ2q7HKxoA6mK724ArRi1BgeDXJpIa0YXHegDr4dRfpmtSG9c965KB16ZrXhkQc5oA6y3vJM9TXU2NyXIBOK4a2mjGK6OzuYgRk4oA9W0rTzd4Afk113/CK3awiTPy/WvNtK1UQEFXxXotr4uQRBJZAfxoAqT6Lcwg7eaz/ACbqJsFTUl14p86QrHwKo/21NnJ5BoAvp9oJwATWnClycDBrKtdWCnJxzXRWutQAjKigC/b2chxuFbkWnOq7iKgt9atyv3AatS65EIjhcUAVLgCI8du1UWIY56YqlcavFIaoNd7+VPNAGpJcCM8Gpo7wmsFQ8hrVtrZj1zQBsR3G4c1bScg1ThtXPGKui0kXmgDSgcvW1bxqw5rBtl2tzXU2ZhbAYhfegDQithsBSnsHQYI4q8iRqo8uRT/OnSA+Xgc0AZiNmpVUVEFdTnFWVYjtQBMi96tonFECh+BWtDZvJwBn6UAVoUJNblpAXYACiHS7gHO3A967HRdL3yqGXNAFzSdEkkw2OD616Pp3h7KZOM1s6bo9v5KFVx610lraLGdoHHpQByyaE+dpGBV+PQERhzj6107eTbncccevauX1PVn80iPBxQB1NpZW0ShGIY1oLBbDOxRXnKapeHDbcZ71v2WpSEgSPn2oA6oz+Twik8dKi+33Cjc8eB6+tLFInDEdferhdCoyuQaAMye5mljBt8cjnHFc4LSeRy0qlsdh3+lde1rCeVG01CNPw26OQqfY5oA414gD+7zj3HenKj9cHFdounpncxBOc9Kti2TnKgZ7gUAcOqnsKkC110mnRSAjpk9QBVWXR02gwnkdQe9AHPVct7OS5+4R71c/s5lXcysPUYpqQSxtmMnPtQBZGlzQ4eB/mxyOlRNbM7AXCtv/AENXorxhhXGeKvRyRTY749e1AHPtBdE7UZzg9PpWs7XC2Y2hjJwDkc1p4FLQBTgdJ4h5g69j7VaLpgsSMDqaTaueBis66s3fcUOAf4e1AEE2sxws6hN+DwQeKlsdQuLzB8naueWzxWR9iDNhztHc1v2ckQjESDaqcAe1AF6msquMNS5FLQA0Ko6CvOfiDqeqadaxNa5W3LfvSo5I9DXpFcj45tZbnw1etBxLDG0icZ5Uf4UAfNcXxZn0bVfNhgUwr8rRjvj0Nct4j+MPiPV7iUpJ5ED9Ik6AfXrXC31nM8rZHOax5LGcnlTzQBJLqsk7NNINx7A1Qk1SZkKn1rQTQ79wpjjY7umBWh/whOvNGZltJSo5PymgBfCniOTTNRjnlkIjXqM/r+Feu33xNlexZLWONHk4MhyztxjPWvnWS3kicoeCDg16J4SstKuYdupS4csEjQckk9/YUAYuo3FzfyGZtufQevvXW+HvhfqfiS0FxaKCzdicc11y/DmWS4MOnOlxKwzsUjvX0P4A8I3XhfTR9vmG9gWZB91M+poA+c4/gFqCuI/MHmtwwIyB6nNdNL+zyTZ/u5U8xTkjGCwHv2q14y+OV1pWs3NroSJLbx/IsjDJJHUj29K801L4yeMlszJZXsu2XcSzYLKT2HHA9KAPHfGGhWmi6pNZYCGMlWBOSCO1eeuYZXEWQqjvWlrd3e3ty9zeMzSyEszNySTXJzF6AItRuRbOVjbP06Vjv4mvYUaOM/e4z3qW4RpBjrWO9r82CKAAeJ9XgfMc7jJzjNe0/Dv40avoV9HJNJt2AgN14PWvDDpzu2QM1PBptwXCKCCT1xQB6T478a614r8QtqFzdvJGz7lXPH4Cvsb4E+KhpekH+1ZTHCI/MXP8WOOK+NdD8K3N68cM64JIO4+lfXvhnw0tzp1rpIBRlXAY/dI+vegD1jxl48h1jSRBojOGlBGc7cDv0r5a8S6Gtzpzo03my5yx3dDXvet/D2+0e0UwzsVcYGOAo7k186+IbnT9HkYSXYlVD8/P54oA4zR/h4J7gTG2EqfxMR0zXqP/AAp+Oaw3RWP3gCG29ax7D4xeGbCWGK2mjgjjAaQuNxYjtinfEH9r+ysdN/s7wtbxLPtwZ+uM+g6UAeJ+M/BOj6RcSC8CwDnAOMk18reKhp0crpb4IBPSr/jL4max4mvZb2/uGkkkJJJNeSX+pSy5JPWgDM1EqWO2uYm4OK07iUtmsx0Zj3oAplVPJqNwmOKlkhdcmqZLd6AEaYrwOKrvNuHWnOoPU1VKYOaAI2yx4qtIB0IrUjVcjtUM4j696AObuYs9qyZU61uXMg6CsaZutAGY69ahK8cVafmoMgUARCPmplT3pN4FIZRQBcUhec1YjmfPBrJ8w9qfHKQeKAOmSRzxvIJ/KlSWeJ8+YcD0rIjmY4ArXjglki3Y57UAdTY+L59PTax38d+a09O8e+Tc+cq4bNeZyWsgJ39qiwI+nFAH0P8A8Lt1uztGtdNYRh+pwMj6HqKzLX4y+J4JC322Q7+H56j0rwhpye9V2uG6ZoA+hP8Aha2rztukuGPoCxx/Ou4svjJqJs1s2fCj045NfI0dyw71s2l646E8UAfbmg/EG81WRLeSZ2XhdobAxXWtLc7jgjGeK+KdH1+5tXR42IIIr1JPGWsFFPnPyAepoA//0vztjbJ5q7GR0qgi4q5GKAL8eMir8W0dazYxVyMdOaANiIxkVejCDoaxowavJuFAGwgX1q/EorFjLVejkYYoA3I1x0q9GfesSOdhV6O49aANmOQjvV6O6ZeAelYqTA1aRge9AHQxanInRjWtFq8p43frXJLzyKtxjFAHYQ6owOSa2Yda+XaWrgVJHvVlXb1oA9DTVU/vVfh1ZQwya83SR/WrsbSE5zQB7Xpmt2gwJGrqHvdOuY/3bjnrmvAoGkBzk1t29xOuPmNAHqjafBI+YpQc9qmOmeSB8+c+lcDbX1ypB3Guht7+ZgMsTQB2+nWccjqrHrxXo2neG4ZVBDDn1rxyzvJlYEHBr0DSdduFAR2/OgDvE8MMudpGBUd34f2LuQ59Rip7LXLgxkBgRjNM1DxM0ieVjYehxQBy81jcQMSw4pnmOg4qWa/8wY5NQxsGPNAFyC4k7Eity2upAQGNZMKoccVpR2x3DbQB09qYZfv4q5JawsPlFZNnHJGQcZroY5I9vzKQaAK9valW4FeiaJBZuFDD5u4NcfFNGnO3NdDp06hgwUj6UAeof2PbvAHWPOBUumQ29vcAsnGa1fC9/Zzw+RMSH9GHaukurKGNhKqDaT1oA0bWSIqFXoav58tNy8EVQtVjOCnT2qW6fylHGc0AYeowyXUm1JW3dwOhFSJok8iISqIB+dPt5i8znlcEYyK2vPkC4IyKAMqfSnaMCPnFUjbyWu04yAecitl7swqdvGe1EWoKUJdAc9c0AWra9g8rlufTFadvcRuPlJx71mwSWTEfusE1sxQQsAQuBQBZwrLQIweoxTxEmMDIqFYJk5EpI9G5oAcbcE8ZFAt3ByGNVJptQiY7Ywy9iKmt57l1JlQ57YFAFpVdT1qYe9Rb3xnYf0pwdx/B+tAEw6VG8Eb8kYPqKFdm6qR9aloApyWgYYBqFLNweSBV4k/Wl5HNACqCowTmkcsB8vWojcL71FJOGUgZ5oAPtRU7ZFqH7Syk45B9arsSetQmgB7vkk+tMDhfYHrTCTUDZP40AS/avKbJJx6+lbNtdtc8pGwT+83Gao22mhisk/Pfb/jW2AAMDgUAFZGuWc+oadLZwnHmqVYjrg1r0UAfOs3wfnaRpBJnnIGKbF8OrPSr6GO7dZA7LkEZAHc19GVg6vpZu7Sby8CVxgMOw9qAOH8XSeGPDOgyyWkcKXLptgKgbtx718qXeqalKZbp7mVpWbk5OMV7TrPhi/1LU206WR2iiUFWfqBXPXvhG2hhEQjchGw70AfPl5Gd+7HzHrTLZbnzAYiQR6V7O/gKXUkaXTomK7iFz1P0rFh8IahDdi2aFg6nkYoA9O+Ek0Fhi7vSWldiuGbA6cH/APXX0cJzqFi7JhFkDIcjPtXn3hvwDZHT4Jr8OrFBmMfJz/OvT7W1hs4FtoBhEGAOtAHxD448DyaZfSIiF0JJVxzkE15hJay2uYWTKnsa/Ru50HT7wu9zGsjsMZYdB6V5hrPwi0+8nNxAQAWyUxigD4Y1HSDctlUxxngVgv4SuZcllwK+/bX4U6LGknnoSy4xxUet/DjQoliitUCMyksTzQB+ek/haSH/AFgquPCjygsBkewr6l1n4fahKWa0tiYyxCnHUetdJpnwpFloTaleq32rGVi6AfXNAHyfpHg95pwvkM2373HQe/pW/wCKdG0fw/aC5ijBk2jkjjdXqN0+qeB0up2SNTdocAjJ25zx6V8x+MPEt5rE7iRj5QJITPAoAz7z4hakEa2tisQxjKjB/On2XxT1rSAjC9YyxEGPLH5SOeK8rv52DMVGK5K5aWQ7j1oA+i9e/aL8capamzu9QkaPGMZxxXhGteO9V1TdHLIShyetczcO5Xa1YEyvk4oAkvL25kBYOc1zTSzSFlkYn61rYk/i4pgtxI3Tk0AYcdkZ3w2cGoL/AEv7NgA53Cu8i0xokExxs7nNZl4sK7sgMO1AHls8GwncMVmTSBM10WqurSMQMCuRumPNAEMtyKzpLgN+FRShjVYqTQA9puajM+KrujDoaFiJ60ATGfj0rNnuS3GavNDIRx0qm9oxGcUAZMrlutU3Ga2pLc9DVRoQOtAGK6t+FVWQ1ttGo61G0SsMKKAMEg9qYFNba2Zyc08WYzzQBkJEzVoWenTXUyxICSxxW9ZWcBcGXpXo+hJodrKJnGSoyOnUUAZdt8PLq3jiuLohQ43AGprnS47NMIQcCtzUfGrSuYlXcB8oJ9K5K71CSd8+ozQBg3UTM5CisS7t5E4Ixmu1t5Ld32yLXUJ4ds79VkkYKB2FAHiy2ch9ea0YNBu5lDrGxX1xXsj+GNNjkVY2yPfmvSPCC6XYP5d2kbRkbTvAOKAPmUeG7iPadvB9q3LXQgcDZlgK+pr/AE7R7yRhYxKyN0woFM0nwPFcXK/uCATz3yKAPE/C/gaXUr+KKVTHCzDL46CvrWD4MeGzBGTcHOxew9K9F8IfD6xhKNJb/dH3T0Fesjwta4GCgoA//9P88VBqyoNQKw/GrKEUATJmraE1CmPrVpAPWgCzGxq9G1U0ANXIwKALqNVqNqpoKtxigC2rc1ajNVY1NWkFAF+M9xV1DiqMZq6lAF2N6vxseDWdHxV2M4oA0ENXI1zVKM81oRMOKALsUea04YulUInHetKKUcUAaMMY6VqwKM81kROPWtGKQUAb8KrWtAAMVz8EorXhmFAHSW2ARXR2sgyK5KCdRjmtu2uVyOaAPVdHFtPGEd9pNXL/AEZUzIjhge9c9oVxbM6iVgBkV6VfPpq2JMcoOF4HrQB5o8IjPDZxSJKAaoXdz+9bb0yaqrOaAOqhuAK27a8AIrhY7hhWhFdkGgD1Ky1BGwrgGuus2spQN4Arxi21FlIxXSW+qORg0Ae4abp+lyn5wCD/ADrpU0GHAa3IrwG31K4QjZIw9s11dr4j1WBQFmJX3OaAPYI7a5syJEB3D0rotP8AErxnyL9SEPGa8et/GMm3y3Yh+xpx8T3DkCZQ4PcCgD6VtJrVwJIZFYN0xV4xB+gBrxbw/rCNtIYrXq1jetNEM8j1FAGg9kMbiMj2pyIrKABx6HtT4lwPvE/jUwAH8WB+lAFd7aLGCM571SFrErnHStgqGIx+faoxafP1zQAyP7Mq4B5qykpXheaeIYwMY+YdqbHwOFoAtRSv0erInUnb0zVRJEY7cjPpVnaFGTQBNvA6npTTOgFREbwfSqm4AlQKALf2yMHB/nQk7yMQuMVlG3G/e/GeatwEBtueO1AF9WkzyQamDg1SMpVsNmnl13fLjNAFwGlyDUC7jyeRUyjvQBAUCtkpkGkEkYyCuKtEZ61GY0I6UAUnCyHIwtVmj5q60RXr0NM2UAUjHTDFWjsFJ5YoAaLpgqD/AL6rRByMiqHlin+cyDA5oAu0VTt5XLEP36VcoAKKKKAK7Wtu0nnFBvxjOOearXGl2dxA8DRhQ/XA7+taNFAGNp2jW+ngqgDDtx0q2NMsBMbjyE8w8liMnNXqKACiiigAopCQBk8Cs+XVLaN/LBLHOM9qANGoJbaCZSsiAg9apS6jsiaRFDbRmvKvEfjXVIx/oR2L3x1oA9fSytY4xEkahR0GKzdbSMaXcJHGrkoQFI4NfM138Q/Gyo627uU5G7HT8a5B/iP44ty0S3DfONoDKGIz3GaAMzx74X8TavdNCFaRwMlVBIQHsa+fdf8Ahzqmnq5nRlYDJBGDX3T8K9R17UtRddYg86OZNxlI5U/WvT9d8BeGtSillvY8ZyzMTjBoA/GLUtDlhkZXXBHrXN3mmrCmTjNfYHxK8I20Wp3SaMnmRRsfnHOQK+c9U0ubLB0O4cdKAPIrm3rMkgVOT+Ndvd2EgYjYc1zt1aOAQVoA5aeNd3HQVTnm8sbl49Kv3SMpIxWJcbgOaAJJtWlaLy89K567vWx1ouHYDNc/O7sTQBWu5d+SawLgKa1pI5HGQDWXNG4B4oAxpU5qNY89atOhzzVd8igCGSNF7VVZsVLLIelZcsh65oAtNdhRiqsl6OgrPkf3qqze+KALkl0TVJ581G2PWmbEPU0AI0wqE3AHSrHkR0jQxCgCsLlu1KLlyelO2p2o4HIFAFhZpsZ6VLHfSRfxdaoSStjaKoOZDzQBs/bmLFieTUq30jHrXOBnz3qzEXBoA6i0d2kznn1r03R7lTCIpJMY469a8ehnZOTVj+15Y+FcigD6BOnwwWpumuUO7ooOTVexMMku6SXaARj3rw9davHXHmNj61s2t3duB+9JJ96APt/wTqngqO3W21GcpJ/exuyfTFez6DqWgSTNHbRhVjG8u4HC+tfndokmD5klwyOCCMGu7Piu6tLZhb3blyNpyeooA+0/FvxY0fRYfL0krMccv0/IV4U/x01be20nGTjivmnU/E7XRK7iMe/eueOtnP3z+dAH/9T88VjOelWERqljZfStKFo+pAoApIjVaUN6VswJbuOgzVn7MjcKooAx0LAirsbE9asNZhaZ5RXpQBYRvWrsRFUFVqsIGHWgDUQirsZzWTGT3q7ExoA1owOKtJWfGxGKvxOO9AF1BVpKpq4+lWElFAF+M1eiJrMWUdauRyUAaiNiriSVnRyDGKuoR1oA0I5iK0Ipz1rMQr3q2mAKANuG5PStKK5IrnY2A4rQjfPAoA6GO921oQ6jtwc1y4J604SEUAehWeuNERg11Nv4pdl2Ocj0NePRSnIrXhmYUAejyanFISR3pgvIzjmuLjmbFWo5m9aAO0iul45rRW6UjFcVFM1acMzUAdQl0yng1fj1KUY5rmo5c9a0ImU9aAOoh1SXOS1bsGsuQA3NcdAoPetiKAkAigDr7TUAXDc5rvNF1aKOZTNErqTyrDINeWWiMpGa7Czuoo1CnGaAPou20/SNTtknsk8qTgkL0re0+0mi/cR3DKR2zXh2i6+bORXM2xB1G7Ga9Lh8b+G3CkzlZMcknvQB2Tz6jaE+a5ZOxp9tr0bExtJn2zg1yz/EDwwU+zTys2eNyjIp9tZ+GtVcT2GpqC38DNgj8DQB6PZ6rABtMu0+jVaGu24lCkA+4rz278NahEnmWt3vjHvkVzwOox5Xd5mP7pz/ACoA99SeCVQ6MrZpk7hELLznsK8Ng1vUIOBGwx35Ndbp3ii5aPFwwB9COtAGtNqc8VwBwgJ4Oa6GDUJZIF3EMPUV5/fXE90xdFUjselV7eW8Rtjsyr6A0AdtfarNE2ImINZDa7eE4JOajjgWRN+4g98nNH2dS2Tj60AalvqV3MQSxOK245ydrjhvSsiCW3tgCy7j7VIdWJc7IwtAGvi4lf2rQhtQpDMTmsqPWGVBiMfWnDV5WfOMD0oA6MDsKkrLtr15jjbWmORQAtFFFADCnfr9aTyweelSUUAM8sUwxmpqKAKu09qd5R9qsUUAVjGQeMUhVj17VaooArbWAwelS7z6VJSYFADQ5PUU/IowKaV5zQA6iiigAoopoOOtACOgkQoehrMOkQltxYnnvWoWAp2aAM9tPjddrEgH0rEk8IaTIWLITu65rq6KAPI/FPhhIbIQaVDtwclvevDZvCHiLVL4tbW7MU77cKMV9lSRLKNrgEehqrPcWOmQGW4dIIxySTjP+NAHmHg6SHRbKOO9yL5gUZcYAx0rkfFOh+PfEN3NDb3jRW3OFDFU2n+dbPjfxfZX9g8Olja4PMm0Bj9DXis/xD8V6dYvYw3bBezYy4H160AUfE3gy/8ADtijapcxkyn5l3ZfH9a8uu9K0h3YrGH3fxcdKq6/q2r6vcGS7nkmb1Yk1xTx36ljGzAigDP8Q6To1jIzwlWJ5x15rxvU7NJJGKYGT0FemXmn3s5LSBj9ap2vhaaeYGZSEJ5OKAPCr/Sm5bHWuWutMK53EV9E+JvDv2ZikKkgDgkda8f1DTpAxDcYoA83msEAIY1hzWkEZJxXZ3lq6k1zd1bOc7RQBzlx5aggAA1hTFecCujm0+Vsk1nvZFOWGcUActOfasmQO/SuquIVJPFZbwopoA5Wa2mJPBxVVrCVhmuv+U9QKGWPGQOooA4VrB+apvZuOK7OWFP4e9Z72vORQByjWrr1pggYV1X2Tefm4pGso15PSgDmPLbHSnCIkYNbckcCVnSyxr0oAzzbMDTWXaDipnuBVd5C/agCJ8Y5qAuq9qmKM2faovsznmgCIyL6UByeAKkFozHNblnp8QXdKaAML5z3oFu7nIBNdG9pb/wnmrtmllbZM5De1AHO29rIWCmvQdG8Malex+ZAh2AcseBWUb7TIX3omSD07VpP4xuFhEUB8tMY2rQBNcWM9iDvfBBrButQeIYDmqdxrE85Jds/WsmW4WQZY0ALPqLc89azv7Qaopnjz1qt5iUAf//V/OxZSKsJcMKqJt+lWlVaAL8V469604dSkGOSaxYwversaLnrQBurqBcfNVhbgN15rHRUA61ZVlHegDXSRTVyMqfpWGki+tXI5R2NAHQwwq55NbNvZR4BrlobnaeDW1b37KBzQB0P9nxuvy9aaNOdTUEWpZHNXBfKaAIfsrjrT1iK8Gnm/B7VE12DQBMOKto3vWSboUC6oA6FJMYq5HNjvXMpcE1cjmNAHTJOauxzE1zsUuetakEo4oA3oXJrUgzWJDMK1IpsYxQBuxxBhyaf9lyeoxWbHdEd6nF2fWgDWitcHqK1YYV74rmkvSO9XEvz60AdOkSk9asJGAetc9Hfn1q7Hd5oA30SryAjFYEdz71eS5z3oA3YyavRSEVgxz56mraXAHegDpoboqa14b5sYrjo7kVoxXFAHXpqDjvVldQfs1cok5q3HKDQB0y38h/i/WrMd3IepNc7HIK0IpRQB0EVw5PWtq1vZkYFWIx6GuYhk5FbMBBoA7eDW9U2bFuZQp6jecfzr0TwXqUyXqLP84Y455614/bE8YNeieGg4njkaQIARyaAPpX+zLeQCTygAeenFUZNHsZX2kKD9eab9seWwRlmV8DgBsVzAuLqJ3mYhk6kqc4oA6o6Y0Y8tSNvqeaqS6NKckE/UcVgx+LrSJgsgkPpW7qXiW1Fqv2WVSzDOQelADF0mWFPM3k8+tIGYYRePrXCtrd20xYSN+daaaxLIgUgZ9aAOqkmULh2qJZk7ciubE7ueTV+FmNAG8kxNXojnFZMIzWxboxIwKAOisFdBknANawcKOtZ1rgKMnmrBDSNgjigC6r7hmng5qJEwMCpQMUALRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAJigcUtFABRRTWB7UAU7551hY24+avI9b0bXL+UtL5kvoDkgV6+8UjsG3EYp6BwcPg+9AHzsnhK7lfF/mCNckt2rkNd8OaO9x5Ni7zFuB8vGa+tLuzgvIjBKuVbrWEmg6RYh5ZII/LXkEjkUAfHWo+CobJDNK6kkdF5IPpXDX1sLcZS36DGcV9zXmh+H7vfPJ5flJ8zMRhRj3rxLxf4r8ERWk+n2tsZpFyqyKoCn8etAHyffysMlUAx7VzMviGa0OFUY9xXaazI1yztBGI1J6CvMNStpMnIoAzdU1+S7kLTHI9B2rz3WpLaTLwA5PXNbV/FIpPFclebgDQBxWo7uTiuTupH5xXbXuCCDiuXutgzQBydzLJjjrWBNLMxxiuqudgOSKxZZIVJOOaAObkWdzgKapy2lzjdsOPpW+94inKqKYdSJ4IoA5o28i8spqu+5eMV0j3Ecgx2rLuQpB2igDEeQjjFUpLkCrs0THJHesuW0l5yKAK8l8wzisye9mbpxWg1m3frUQsXY8CgDEd5n4qPymbrXUf2cFGWwKQW8Cfe5oAwl08kBj3qb7DxxWpI4x8g4FUXaRumRQBWNrtFRm2bbkVZaGcjIJqAw3JoArmBl64p4lZV204W1wx5rQttOV2xIaAMV5JSeDVfdKeprsE0SSY4iXPPGa1IfBGpTDeqDH86APOwCeWpcCvSovhzrE5ZmAjQDIJPWpB8N9YRSwjJX34oA8uYOw4qs8Mp4Ga9SufDH2CPF0ArEdBziuYuraKM4UGgDiHt5PrUPkP6V1bW0khwiE/hTf7Mn/55n8jQB//1vzUW4NTi5bHBrLWp1FAGol03rVxLw9AaxkBqdVNAG6l4T3qYXRNY6KatqpoA1FuG9anSZ/Ws5FNWEDUAasU0gPWtSC6lHU1hJuHer0bN1zQB0sN5JWtDPKRwBXIpKw71ejupF4zQB16M57VOI3bsa5qG+lBzmuisdXVMeYuaAEaN1ONpp0cbHtXZ2ep6NcgLcxgHpkVfktNFkGbZsfWgDjEgYDniriQsK3vsMe75CCKuRaRdyLuijLD2oAwo42rThTnrVw6ddLw0LjHtU0do4+8CDQA9FAGQanFwF69qcbV2wEqCawuQu7GaALIve1SLdA81hGKZTyDUyBxQBvpNmrkcoz1rBjdhVxH96AOhjkzjmtOFs965ZJsd60YLrHegDq4s4FW0kI4zXOx3vbNXEuSTxQB0Mch9avRtmsGKUmtOFyeKANqI1qQtWNCfWtaEjigDRVjVqNjmqiAEVeiWgC7ETWjEapxJV6NcUAaUJrXhkxisSM1oxGgDfhnI6HFbVpqE0WNrEVy8TYrRikoA9LsvETrD5bu2fY1v2vi+WGMxDDKwx81eURScCr8TmgDvmv47ptx4J9K6HTNPW8wPNA+przW3ZmPFdXpJulmUoCcHpQB3g8POrDYwb8a0YtAuV5A+uK19P1KKRUBjVHRR97uavS+JtmFNuFx196AM+30OeToOlakWjSJ95eBT7TXhLOPLTah4z3zXZJErQ7z827nJoAy7bSIwgLAE/WtmKyhjXGBWf8A6KjZDjPcGrKajaqAvmZ7UAaKxRr0FSDaOlY8+oqgyhzWc2qT4I3daAOpDg00yrnA5rk0v5R/F1q3FdtnOaAOj356ClBJrOiugfvVdWaNunFAE1FN3rTd/tQBJRTN9GTQA+imhvWl3CgBaKM0UAFFFFABRRRQAUUUZoAKKTIpN1ADqKbuFLkGgCMyqPvcUkkqom/BPsKk2KTkilIoAqx3cMpwp5/KnzxLPE0TdGGKUwwtwyg9+lPJAwADQBwOq+EDfRNbmbbCwwwH86841P4Y+HYImZN80g5OTxn8K+hetZU2lxMGMags2SSaAPgfxRpoine3s7YIoJGfpXimrQFHZWHIr9APEvwzl1OV5ICcnnH1rwTxL8H9SshPcShRFECzHOeKAPjrUbdmzgVwl/Zyc4Fe76xpHkztCuDg44rmZ/C17doWhjL/AEFAHzzf2snPHSuOu4ZATXuWraDPCzI6HIrznUtLlXPy4oA8uuUfJzmufuUYE13V7ZupNcxdQYyKAOUlDA1Rcv24Na9xGQTWRMGFAFZpZB07VXe7kXOSKJC1UZO9AEpvG7mqkt0T1NV371XZgOTQBI07Z61Ebpk6VA0yDrVWSYE8CgCaS9c981XNzIT61HuOfu/SgM3pQBYjaSQ46Ctq2W2jTfLyfT1rDV2A64pyzEnBbFAGnd3sYBWNAv0rGNzMx+Vfyq0PJbqa0rRLZiF3CgDIie4Y4KkZ71pQxXLEBUY57gZru9LtvDC4bUZHZh/Cg4/OvV9IufCTwCHT7Il+m5hmgDyvSPDmo3SpI7LEh7txgV6PZaBp1sgNzqyBx1ABIFTausbWrG2Ty8ds15Je3skMhDP39aAPZ7caZF+5iujOxPG0YxXWQaLdvtkEUtxE+BuUZAJ9a+abDxdb6TL54xIw7NyM121t+0Rr+l2FxYWMNv8Av2B8xlyy4/u9hmgD6l/4Uf8A8JRaQzx2zCRhzkYxWXJ+yafNE17cLEhP3civnyb9qXx/dRW8An8hLftF8u761StPjv401K8U3mpT7GbLDccc+1AH2vpX7LvgvSrb7RfSmYkDhBn+Vbw/Z9+HRAP2Vzn/AGT/AIV5v4b/AGhdO0mygiux50iKM9cOPc+td1/w1RoX/QKP4SUAf//X/MVQRVhM5pFhc81OtvL1waAFVvWp1b3qLynXqKcFIPIoAtrLirCTfWqAHNSL1oA1Y56tLPnFZKNVtGNAGskwNW0lFZKMatI5oA1kkBPpVpHB71kq2Kso5xnFAGxGx9avRM3rkVhJIavRyEd6AN+J5V+ZTWpDe3CjqeK52KZh3rRhuDkDNAHTw6jcqM5NdxoXi64sXXzIxIoPOa83hu1C9vxq/HfKh6CgD690bW/DOtxwx5ijkcYYPxz+NdHefD/SLyMNbsFZ+QVwR+lfG9trBQgg4Neq+F/iZfaMoiEhZfQ84+maAOv1rwLe6Ycx5ZT04Ncg9tdRHy5Bz0r1a0+J2najGXvvnbGAG5wfWvPdY1dLq5aaPBB6bRigDIeyJ5kTFVHsV3cDIo/ta4bMbAkZ6Ufb1zyMe1AFae3CdKp8g1duLhX6VSGWPFAE6Zq9EDUcMLMM4rRjtmwO1AEkS1qQ4BqmkTLV6JT6UAa0BBrXhA7ViQ5Fa8L9qANeLrWnFgVkxNmr0bEUAbkVaEWBySK59JWFXkkb1oA6JJFHeraSg1zsbk1qQtxQBtRyCr8clYsZq/EaANuKStCKQVixMPWr8bigDeilrSilFc5HLiriT0AdTBchTmu30TxLa6fzLCJT7mvK0uPerSTk9KAPcoPGWmyTb54mVfQc1vW+uaPqkoTd5QHduK+fYpT61r29wyEEHFAH1Hpg06MbMKVPO7p/Or9xrdjbEhQWUDHH+cV85WmtXKgIZW2/Wujh1442liQeoJoA9Um1fTblgI1YbuvNRTXUduBsXIPevPo72GTAUhKuC5IXaZsr70AdTJqrumwcAVCtyx71zIulzhTkVfhuVIoA6WGYmtOJ8VzMM2TxWxDJkUAdDFJV+OQVgJIRVtJWoA3RKKkWSsdJvWrCy+9AGqGBp4as9ZRVhZRQBboquJBTww7UAS0Zpm6l3UAPzSZ7U3dS7hQAtFJuFG4UAOzSU3cKN1ADqSk3Uwn1oAfuphbHeo2fFQs9AFgzY6GovtTA4JGKpyNWdLLg0AbrXYC53IKzW1KUvgSxD61jSTZGCaxLt85oA7lbp1G57iNmJzgEAYpzazYxKTNcRAjturxu+kkGcMRXH3sjkkkmgD36+8aeHrFd812mQM4Bz/Kvkn4n+M59fuZFsJZEt8nCZwD74q5d28l0+0ZLHgVZtPhpqGsbi2IxjOW70AfLd2riUs5Oa2dM1ERQNbsxXf8Axeleo674L0vRzJ9rnSaVD9xDkceteLeI5yoxAuxR0CjpQBqS6NoT20txcXCGTknca8A8WWtlHI62rq49RWlqV7PlgWI/GuMu3aQnLUAedanA248Vxt5bvzkV6td28O0szAn0rjb2KP5sUAea3MDDt1rBuI2GeK7+6gU5rnbm1XmgDiZlbnis2RWOTXXTWwzWbLapn0oA5lkJ61E8II6VvS2yAcGs14wM5NAGQ8KjqKhZQB0FX5AOaputAFFzjnNU2c9jWoYVP3hxTPKjA6YoAxjK4phlc962DDD3FQOLcHgUAUEZicHNbdg6RsC5xVEPGowq0okJP9KAPXNEvfDgCC/iVsHLE969XPjD4fWOnrHp9sI5lHLdc18oedKOAD+FSRm467WNAHr/AIl8YQ6ihTS42XPc9K8hu01G5clieevNdPpdj9pKm5fyUyBkivatL+HXhe9tFlj1ZZ5X6RgbSD6HNAHzNFpE8nzOT1+tTvocqsMcA9q+uT8INQWFfsdq8kZxhlGaqP8AC2S0nWK+hcf3sjkCgD5bGjMANo3e1a2maFPJKCowD7V9d6f4H8K2ZEd/akj2b5jXbQeHPBNqm6z01z/vkCgD5t0rw1dNAm/BRRyfatw6Tp4ONo49690fStJu4/ssPl2a88g55rnm8CW24/8AEyh6+3+NAH//0PzTS5xVkX7jgDFYiu3apVc0AagvHY5NPMwftWer+oq5FIOwoAcCO1SA5p4KMMYxUqIhoAVOferSegqNYwehqYJg80AWEFXEDdRVNParce70oAtojGrscLnmoIWkJ4XNaCSyr/BQA0RnvUyA561Ks79ClO3An7lADlJ9atR7z0NVRIv93FWY5RmgDThSQ1dCyKM5zVGC424rXSVJOgoAI3fvV2OaRfu1VxxkUgkYcAUAbsF9cJz/AFrXg1i4XAzxXJpK1W45DQB2kWstkEiry6hBLyw5rjI3NX4pGFAHYRyQP0rVt44WORzXHQXDKRkVu2uomPHy0AdfEsYG0AZrQEGRnFc5DqKkggYrTiu2bkNmgDRCgdRU6Ip6VVjnf0zWvaXUCt++UH60AEcdaEMYzitm0bQph++cRmunsNF8OXS5OoRoR2JxQByUNuW5FXUgI711EenaQkhRLhXUHs1dFHoelSQgxlyx6YxQB56qMKnTdmusl0F+TEpAXrmol0W6f7ig4oAxYy3pWlCzcVcOkXMf3l6U9bGRKAHxBj0q8iuMZpbe1Jx8wFaotdg+dhQBWiNXkbsKasSg/KQa3NPsVuHAyOelAGerGrCOa7SLwxJJhtgdR12HNTxeH9NQM1xOYznhCCTQByMbk1ejc109ro2mSPtDSHH91atXWkabAMRSPu/usvT8aAOcRyKtxympX05lIK5w3I4ppt2iO1utAF2OY1djuWHeslFB4JqcAjpk0Ab0V43rWrDcO2Oa5+2t5nI2o3PoK7fQdMt57lEuWKjPPHX2oAdau7HFdHbwy4HFdTa6Hpkb7UYAn+8OldRDocZQeZsIXoR6UAcXbWsrnHStYJ5C/OQPxrSn0xlmOzGOgxWXLYS+Y3mHpzyaAFW6UDA5qwt2T3qskMKLuLYqLejSYTmgDVWcnnNWUnqikDbcmjeF4oA2Umqws1YazZqQTnvQBuiepBNWALg1Mtx70AbompfOrFFx704XGe9AG0Jaf51YouPenef70AbHnUebWP5/vQbj3oA1vOpfOrG+0UfacUAbBmqNpqyvtANMa496ANJpqrtPis5riq7ze9AGk8wNZ0smarmcetV5LgYoAZNIeazpWL8GnyzCqDyigDPu4wR61yt5CMnFdZKwIrFuYwc0AcXcbkOU4IrKudU1ZYzFHdSopGCFYj+tdPdwZzgVz1xAOc0Aef6hHLIDuJOeua861fTi4bivZrm2Bya5W/sA4PFAHzPrWlld2BivMtQgkiJ4PFfUOr6Mrg/LXk2t6HjdhaAPCbxnGa5y4JycivQ9VsDEW+WuAvwUJGMUAYM5iGdwrCuJ7Zc5Ga0LsnmuauiCTQBTurqHJAXFc/cXPXArQnxzWTOPQUAZs07Gs2WVjnJq/MpJ4FZssTnsaAKpnx1qJrtF680kkB61SkhYHNAFk36+lQtd7uRxVFompjKelAF0ybuppuIz95qoHjkmozKo9aANqKGA4y2fate2FojgeUGPbNcit1sOVHNWk1KQYwOaAPTrJbCQr9oRE/DNbyWXh2MeZJcqBnhQK8gj1OTduJrQk1OOZACMEUAeuXSeE7uJYdNlmafHQj5c/hXUeDrS2025WaUyAg/KSuV49jXiWh60ul3HnRAF/UjPFehHx/LMqbkHyjFAH3t4M8TeHYrZBe3gWWQ8/NgY/wB2ui8V+JfA1vbZF3b/ALwYL/ecn+lfnRJ8Rbr5SgAKjC8Vk3vjTU7wZbgHngUAfVWs+NfCllcm6tyl1Io4UocfhXkfiz4t6vqClLWxitlB6pkHFeJP4i1MsVUHnjkVbtv7U1BOFG04yTQBNN421hmyS/XPWqv/AAnetf3z+VdHpnhuKRi96WOOMKuRmtX/AIRmw7Rn/vk0Af/R/LtW96kV2BqqpIqdfcc0AXEkOORVhZOapL61OuetAF5XzV2Mg9Ky0yD1q5G5B60Aa0aMRwM0/cwOCKrxXDCrIlB60APSRuwq9DI2egqkqgnOatRRnPX6UAbEMs5XKgVKs84+8tMtLaZ2AVhzW4dNuY13OMr60AZiXEhPSraSv6U/7N3xilELKcZoAcN3cVYQZ7UiJn7zVehhi7tigB0SLkZFbVsIgRkZqKC0t2A/fAVqR20aj5ZQfSgDSjFkyYMVRNDZgZ24pBM0Q2kh/wAKtI4lHyxgmgCj5MJ+6DUqW+P4T+VaUNnfZDLGVFay2d4VyeTj0oA59FC+tWVHpWg1pcE4eLHvinx2jHqpFAFdPl5q/C6ZAPFWxaQbBuzuFQ+QAeDxQBpQyQgck1qQ3NuMfMaw44VI61ejtk7mgDpYL+NenNXhdxy9q5+JI16jIrShaI4GMUAbkEtvuG/NbCzWTAbOMelc7HGjYINXoYlyOaAOhhkhBBVzW3bX8sZHlysMe9c3FBtAO4VoxvjHAoA76y1O7cjzJ8j3Oa6e31m3UhS5yPyryuO6lUADGKsC6lc/MKAPebXUYbmNTIkbKOtdZbaJ4a1OzIEvk3B5GSAmPc184Wd2Izl92PY10lnqkJ+Rkcj/AHsUAd9f6LaWMpW3kE/+4wIp9pp0lypVbSRz/eGeK5i3nRjvKlV92r0nw94pWyKLbzFGGAVbBBoAZpnh25nmWN7OUAkDODXrlj8NklTcJNuB0960otTbUraJ0hiVzhmYvxiqet3kwjVdPvIIWHJKyHPH6UASSeHW0eEyqJJDxwvyg1csW065g/0nSy0iHJYnr+NcJ/bN8ljJ9uuWuSxwoWbpWRp2tlLgGeGRgOfv5oA9ZMbFwNN0rysn7xG6tCTwpdyqGuWRd/XCgHP1rlIviFo0SeXcNcIoGAiHvW7bfEzw7LBiVplCgY3YLZHtQBXk8CancuWEnAPHpioH8BxCXy7q4SI+pPJqxN8U9CDFUSdh7MKki8beFrmNmjhnEp6gKGJ/HNAFq3+G2muPMa8TBxtwf8avp8ObeGTKzKV7cVk2ev6HfziLzWgOeA4x+ucV6pbXlnDZptu4CoAAZmH+NAHF2vhyXTJvPimDKv8ABszkV2VhbwmITS2iiTsyjbXM6vrMBlWFNWjjA5baM/qBUUWqTyxGOHV4xuBwWGMUAdpPZLJEZIkZZR0UHrWe+kaxcxFfNaBc52gkn8TXO2c2qaYPMm1OCdDyAz5P+NTN4zisJG+0zLJ5gyfLB4/OgCeXQtaiclLqQleRknmnxaTrl6QZ5+vB57Ulh400a8mCytMmeNxHy13lvcadcIBa3EbcdmGeaAOYTw1dKpMzlgtM/slIiNuWOM5FdgZbK1XEsyrnrlgagtb/AEmdtkUqFvc0AYtputkcXClgRgDvWfc3seSkEWP9o8mutk1DSULI8kZK9cVjyanoVzuiVSp/vBcUAc2bpuh4pv2knjNWrh9MViIld8d+2azsXAO8W5IPTjtQBdS4Hc1OLgdc1hCO6ZjiJ/pildbmMfOpX60Ab32kUouRXMm5Io+14NAHUC5FP88etcwLyni9HrQB0vnj1o88etc19t96De+9AHRm4HrTftA9a5o3vvTfttAHT/aBTWuV9a5n7afWmG896AOie696qPd+9YT3me9VHvPegDce796rtee9c+93nPNVWvPegDfku/eqEl2B3rFku/eqMt2fWgDfN4PWoXuFYda5Z7wjvUX249M0Aa9xJnOKwLk5qR7sMOtZ00+aAM64bBOaw7gg5rSuZOtYVxJigDFvYUcHiuE1XTVkB4ruLiXrWDdMGyKAPDtb0EPuwteR6xoLjccV9Qahbo4PFef6rpccgPFAHyvqOmPGSCK5K6tQCeK+g9Y0RTuwteYanpOwnPFAHl81unes6S2i6E4rsLvTlwRXM3FmVJ54oAzvslsvJOao3SxYwqircqlOlUHnK9QOPWgDDnT/AGay5lb0rop74d0B/CsqW8UnlKAMNkYnAFQNbSkdK1Wuo88JioGudxwBQBm/Y5GOKl/siR8YYVYa4k7DFQi5mB4JFAEv/CPXXG35ga0IvCWoMvmbDgU2zvrhGDGQge9dbH4nYR7JJGPbjjigDlR4ZvV5dSo96uR6RFGu2QE+9bH9sxSN+8fjPc1vnUtDe3AjP7zHU9KAPP5LAK+IlJrVs9LuZU3CNyOgwDXaaVr2mWkweawhuQv98kZ/KvbNF+IPhNYYoP7EgSQ4yd3H60AfM0mjXMX7xo2UA9xWrYiKRVjlXoRwOtfYcmk+E/FDpcTW8UUZI+WJwvH09q7ey8G/CKxtfKEcZuin3mBdsn9KAPiGPw9PeNutYmcN0wOld7oHw41Z9tze/uIgQFDZBP4V9GWugaPo1w9zZZ8rptCnHtXpunWtz4lWO0ksnWFFDLJ5WC2Pf3oA+Wk8MPbZitd7yEZwR196pnw5r+f+PeX/AL5r7UbwA8U6SxImAOdw5WmN4Qkyee/YmgD/0vyzVu1TqxqCOQDtVhZgO1AEyk+lWUz6VXWUelTLKKALiCrSKMc1QWSrKMnc0AakSrkGriiKsuN07mr0TxDnNAF1Avp0q0iZ6VTjkUdOauxzJ3FAGnamWI7l7V1lv4gZIfIliBHc964lbhV5Ump1u6AOua6tZ/4SpqzFaCYgxZrkY7kk8VrW15coQY2IoA6X+zpUOXXt6U8WAP8AD+VU4L3UJeHbIPrXY6bDK6APHyecigDAhsNx+VCK37bTJAoJQj3ziuig0G6vDiPeuPRSa6bTvhxr96AI3Mee7gigDgjaogywHpir9okCZ3YB7Zrs2+HHiSCdlkgLhO/TP0rRg8BX3kvc3EflBOzcZ+maAOMXULu2P+jsCO2RmpDrmpzsEfaPoMV21rpGkrG32v5FXqxHA/WlnXwHZHc1xJMe6ouMH6mgDnrSK+vhsMq89BUV3pN7Axy2fpXVWfiXwRDlfKmU9m4OTRJ4g8OXT7VLooGBnrn1NAHCeXcoTvDUojkY9SPrXU3H9lThvs8pzjjmsfyADt3596AGw25Xqa3LaEuQoqjbwBv4s49637eC6iTzUCEf7RoA07eWGyXMtvHL/vVUn1JJWPl2yR5P8IxVY3Tu+Jo8f7pp7fZn42spoAdHcgnlcVoIzOPlzUEMUAIJR2rbjWyQA+VIPrQBWiW5JGP51djF0eMHiq7Tx+ZhEZQK0Le6hX76t+FAE8JuOhBq6guP7pqWDVLYDDIx+takGrxoR5EIz6nmgCC3afj5TW1BLKhBIwRTV1AsdxiIJ64q5FqEWDlM59aALsdxKRy1aMF40eMYzWMLiNuRHxVqMwSHn5fegDqoNcukwckj0ya049bgnIE4ZPXBrllgAXMbA+/Sp1RePMdfzoA9FtBo0keTMeOetWBd2sJbbl4h0+bBrztRZgczY+lNaS33YSVmFAHctqFt5heWGPaeg3c1Qnvonf8AdBQPY1yyRGQ5BYj6VZWOFerNn0xQB0S3e/jgAVehnTrnH0NcvFEWOAGNacdtKq5CnAoA6ZLi0AyS2fTNaVtqflkBMnB7tXGDcoz2qxHKR1YCgD0pL8TLlowRns3NWYvtL7pI4yijoS2BXnkV0i8lj+FT/biRgSNj0zQB6dZ219esFVRu9Q9QalBc2suy4JDADgnJrzuO9dTlXYZ9DWnHqTnlmLt6sc0AdIlxcKMIxxVuG/vYGDo7KfUGucTVZBwoA/CphqDvy5oA6satdSMDNKzfjVuLVYoz0bPrurj0vH7YoW4YnJoA7lNZxnbnB9TWta+KJYGUqkZCjGGGc15qLg96l88jnP60AewJ45dHDtZ27D0xWhH8R3yd1nDjtjIrxEXJHepRdD1oA9kl8e3khJhSKLPouawLrX7u8ctNJnPYcCvPVu8d6f8AbD60Adj9vf8AvZp63bt3rjPtretOW/YdDQB3Uckj/dBY+1SebIP4TXGw6xcQkNHIQfatO28UXtu5f5JCeu9QaAN5nlHJUim+c9U7nxpc3VuLeSGFcfxIuDWI2rhsZ4oA6VpZVXdjj1qubo9zWMmrwEBZQSB1wak+32MhxGGX0yaANP7XjvSfbPeqK3Vqv3yT9CKnjmsJeEDg+pAoAe12KqPd+9W72yVIVuFc7D3IwK5WW5UEjNAGo9171Ve6PrWS92B0NUpLygDZe696qSXXvWK1171We596ANWS59KpPdYPWs5581UebHWgDWN571E90WrFa5xURuvegDQllzyTWTO5OaV7gGqUsuaAM+49axZzWtO2c1jTmgDHuVBBrmbyEMDXTTnINYc4PNAHBalYeYDgV51qmiFt2RXstymc1zF7ChySKAPnvU9GmTO1a4LUNMugSdp9a+h9Tt852rXnmpWj88UAeJzWkucMDWXLaAn5q9Fv7JznkCuZubEpku6n2zQByE9tCoIxWRJbxn7q5rrZLWInBOajNrbIegz9aAONOmyP91aqS2Tx9cV3bQWpX5pQv61QltdN7SljQBwzo47VWbeO1dtILONSsa7j6msySFZeQAKAOVZpPcU4RykZJIrfaxHXIqD7K+cYGKAMYxvnk1dgeRRjmpWhSNslh+dL9pRPulTQBft0nnOEJWuo0zRL64k2iTB+uK4tNTaP7mPwq0mt3w5jcqR70AfQPhf4f+I9W8z7JqUFqsOCwmmCFgfQZr2nw14L03Rc3PijWLYRRjf5guOcDtjOea+FH1PVJuTcyDP+0ailuL2XiS4dx3yxNAH6St8ffhh4ZgexjaW+8tecKGViOmC1Ubn9rfw9Enl6ZblBjjAx26dP5V+cXksw4ck/nTo4bgk7VOPXtQB9uap+05daiWNs8kPfHauOPx61Ykn7ZN1/vV8upBMv+t4H1p+yH+9+tAH/0/yuG2pVx61GoXrU6hKAHqAe9TKKaoTtUygdqAHpkc1MPrTFxU6haAHKTVhdwqNcCp15oAmSSQdDVtJn9aqoB3q3HigCykr1bjuG7iqqBT61ajRT1oAvRXWD92tKK/IxxWVGiZ5q9HHGcYxQB0dvqe3BwD7V0tl4ourdlMBCMpyDtFcVFATjFbFvbIMbuTQB7nonxh1yxRE8u1lI/ieIbq6GT4tatqC7LlsEnqg24z6YrwBEULtPboadFJdxH5Rx60AfVfhjxLbXr4v9WeLv+9J4+mat6/rml3KNBHqhlHRQpz+fQV8twX0xPzHIqx58h5Un8KAPdrfS7S9jKSajj0XIya5DUPCrIwMcwkB75HFcDHfXMf3XNWRq95n/AFjce9AGxcaC9t/Fu+lVRB5Z4zVQ6pdP96Q/nSi6mbknNAGzA0oOUFaKXMq8ECuaWeXjrVlJnPY0AdTHc7SGYD3xWvBeRyABpdvtXELI3oRVlJCODmgD0e1exYjEozn+LpXVxQaG6hriaPceu3mvH4LhV4Ga0IpmbO00Aeux3OgWsuP9Yg6Y602+u7a5x9iUIPRq8zgkYHLc+1b8N8qqFWME+pJoA7Sy0S8vB5iPDnrgtWuln9kby5fs7H8/5VxVnqEytnYGHpnFdONQluVCxWqIR3zn9aAOs07QZdQbEbwR56bhgVZvNCvtOJDvHjrlVrBtZNXRl2LHnsd44/WuitbTXb3lprfJ67pBkUAU41u44zI00eB271TlmkJyrqT7DFbMvhy7LlJLuP32nI/Oqp0Ozt42ea9G8dFCkk/0oAoxX95E2EOPwq2JLuY73I/lVEZztSTAHrQwmXo6v9DQBsw3bQnDsCKmN5vb5XArniZR94VJG3PIoA6dDkZeVauxMoHyuAfYVz0F3EvDJn8aupegHKL+tAHS2xmJ/wCPjYOnQ1rw6b5zDdcKc9+cVz9rrRjTAhXd3Lc1cGuXDHICr7AYFAHTHTngI2TAj1U8VJFZQyNta9VcjvmuabWriRBGQAPYdaVLwN9/+VAHT3FlFA+yG4Wfjkr0/Wq5hZeTWOHBI8t+vrxU4ecfxbv1oAug4PWniQ1XR5guSMD1IqVTkZZh+AoAuxvVtJcVmCUDoamSQHuBQBqrN6VOJj61nIUxy4FSblHQ5oA1FnPTNSiduxrIDgdaXzhQBsC4b1qUXJ9axPO9KUTe9AG6Lr3qQXVYAn96eLgetAG+Lr3pftRrA+0D1o+0CgDoRde9PW4HWub+0U8XNAHTfaR60ouc965sXHpSi5PrQB0hufemfaPesH7V70n2n3oA3jcgDOaZ9swetYZnU/xVGZhnrQB0yaoydMVK+tSyEEtjHZRiuS86gSE0Ada2u3Jj8rzG2ZyFJ4rNa8Lck1iGQjrUbTEUAazXNV2uKy2nPrVdrg+tAGo09QNcdqynn96rtce9AGs85Peqrze9ZrXHvVZrj0oA0Hlqu0+OhrNe496qvP70AbBuveomuAaxDcds0w3B9aANKWYGsuaUVG8ue9UpZR60AVbmYjOKw7idua0Z3ByaxpytAGZczNzWDcyE54rXnZOaxJ3j9aAOavdzA8c1xOpWkkmcZr0C5eKsC5kiGTjNAHkeoabMcnBrib3S58k817ZezoAQIx+IriL8sc4XH0oA8lubGZCecVizRsn3mzXd38MhJNcndWzZoA5yaQjNUHuWXpWpPARkVmSw++KAKL38/bFVmv5x1q28EQ5LiqTpEO+aAK7Xtw3O41C9zcN1c1K2z+EVEVYjIU4oAhy7HJJNPWHPJbFNJPpSbyKALSIinOavxXFqgwybjWKZWozK3CjNAHSjUrPbtZOPal/tPTVxtiJ+prlsSZxjFOEbn0oA7seMbe1tTBaafbrJ180glv1rmLjxFfzkliBn0GKzfL7UCMZ+7mgBJL25kOSxNV/Ml/vGroXt5dO8v/YoA//U/K4EVIGFVQ1SqaALakHjpUwI9apipVNAF1T71YH1qgDVhWoAuLVhSapA1MrGgDQUmrSYrMR/WrKyUAaqOPSrKyseKy0kqyslAGkrGrSPg96zEk6c1bWVvWgDXiumXgE/nVyK7dTkkmsVJT3ANWkmXPIxQB1sGqREBZFP1FbMV7bkDawHpmuHjnTsBVnzd3TA+lAHcYgf51wreop5Jxxk+9cbFNInRqvJeydCaAOiEmDlt35ULdJ3B/GslL1+KsreZ4I/OgDVjnQ1cjnHrWGJIWPIxn0qdCnYmgDoEnXjOKvxXCDniuZRvQ1aQ4oA66LUAvGAcVaW9gPLICa5FXxV+Nx6GgDp1nhY/dArSh8o9wK5eGQela8EiZ+agDpILZJCNr4/Gty30+MgZcZ+tcxDPAo5yKvrdwYxk/gaAO3ttJEgAjkX6kitq20SRnC/aYx9WrzZLkE/K5A+taUM8nVZKAPXLbw9chdxulwOm0E1rw6ZaJ/x8aiY39kOK8qttV1FFCRzttHbNasepX5OWcN9aAPWvsNrb23nR6yjHrsbg/lWLMLe7wDcb3/SuMW+upePKUn6VrWz6jJgiAKB324wKALlxYxgfu0lcjqccVlSwuGwEKfjXQpf3iRGIyAKepUc/nUAXTf9ZJdbT3HU/rQBlfZLhVDOwH40qq4PJzWkZdFZtrXD4+ma1oLfw66ArOxbvngUAYCIx4wauxxletdlp1tYrIqQ/vAepK5q9eabpaqZAswXu5UKufagDiozzV1HIq28VijZRiQO3epxd2QAVUYep/yKAIFkHpVyO4RRygOaRPsztk7h6dq1bbT/ADxmJoznjDOAaAKCzIT0xUomI5XIrdj8I6xPl4YA6r1KnIp58PT2rKl6vklvu7j1/WgDOgl3cSFiK0Eki+6qn8+asNpEKyKjTpGT7giprnRIrSLzvtkcmeip96gCMR2/lhvm3e4qRY1XG7YPrWcvn/dTzGHpihhdYwUk49RQBsmAAb/NhGO27JqAXG09FYe1YZlkHrSCZxzzQB0LXeVC7FHv3qHziegrGFye9SrdR5+ZSfxoA1vNccYpBKxqvBeWO3EyOW7EN0FWWvLMrtt4nHuTmgBfMYDpTBL61C0gA+bIzVRpBmgDU88D1ppuPesvzRTPOHcigDW+0U4XB9axjP6Gm+efWgDd+0e9KLj3rC8/3o88+tAG6bj3pv2j3rE880n2igDb+00faTWEbj3pDce9AG+Lsr6U435xjNc4bn3pv2j3oA6E3me9RG696wjcUn2jPegDZa496ga4rJacetRtP70AabT+9V2nrNaf1NV2noA0muD61A1wfWsxrg1A1we9AGk83vVZ5azmuPeqzXI9aAL8kxHeqxuves6S4Bqo84oA2Ddn1qu9yDWQbgetMM4NAFyWfOay55s5pXkBqlKfegCjcSdawrhzWvNjmsefHNAGJcOTmsW4J5rbuCOeKxZ2TnigDnroE5rm7qJjnFdbM0fORWJctH2WgDhry1Y5GK5S8s3ya9IuFDDpiudu4VOTQB5ldWWSetYU9pjsa9HuoE5rCmgioA4GS1booqNLI5zIM+1dg6Rqc7cipFuGUBYkjX8BmgDjTaxId23B96dlOR0zXeJYrcx75ChJ6gDmrdrpenyZiay8wn+IEgigDzBYYN2NoOfaraaUbvJji3EfhivXIfCelTKTsWIY/jY7qzJ/D2n6fKSbklSOABQB5s3h+4QBtq9ehPNQvYzwjHA+leqwaZZzYZ/NdeMbVret9L8FlsXMF9MR1VVAx+NAHz+9o5ycZqMWcucBfyr3TWrPRlm/0CwEETdPOYAge/NUbbR/DpkA1HUbaGLGW2kkj8h2oA8WaAg4K5NMO8DiP9K9L1r/AIROzk2aXetcnn5lQ7f/AB7B/SuNutRXO2NBj1xQBgnzuy07bdelTtfS5zgcUf2nceo/IUAf/9X8oVNTqcVXXHapRQBYU1MpHc1WWpBQBcDVMriqQPFTKaALyviplYVSDelTqfegC6rCp1b0qiG71MGoAvq1TK9UFaplc4oA0VkIqwkmMVmq9Tq+TQBqpN2q0ky1kK1WFagDYSZatLKPWsRWqwjmgDeSbirSzgCufWRqtJKe9AG6svHWrCzc9eKw0lqwstAG2spPOasxyOO9YyMauxsaANiOaT1q/FPJkVixtWhC1AG9DM3eteCRW+8BXNxOBzV1Ljb0oA6qNYj/ABYq2FH8D5rk1u26Crcd03rQB06iTOM1cijl9M1zkV3J2NakN7ICMmgDoIQykbq2oNpxkVzUWoHHNaMWpL0IFAHTxdeGxW1aRySEAEmuUtby3lYB22A9812+naStyFa21C3Gf4Wk2mgDrtLttTUhrKJ3bpkJmuqS48QWI/0lkjX+7Iq81jaf4e1qNM/aAq4z+7lBz+Rqte2k0E3l3Lyyse+/cB9eaAN6bxHOw2PDA3bKKFz+VYtytzfHetvFGp7AD+dZZlt4X27nBHcc1JiGUg+Yx+uaAHNZiA/vNufQYNKsc7f6mM49dtWookAAUFq0VZ1XYrbB6cmgDMiW8jO7eyY9Dirf9pXCALJcSMB2JyP1rTSzjlA3l5SevUCp20C3YglliHox/wAaAK1trMKkCWMuPbFa0V5p8+GeJh9SP6GqyaHbIcC5jJz0ViT+gFXk8Pzlt1ujyj2P/wBegC6iWt0CkJQZ6ZbArZtfDl5hXhgaXPcZ2/nVa10XU4iGitWRh6svH512dnNrNvB5UK4J6/vETn8KAFi8O6+8QW0tzCP4szkc+uCRTJNK8RxEo9s8gHG4sHH4HmtqCG7VSb1YnZuR+83EfjuxXU6PPZ+UTLsjVeo34/8AZqAPLRHrUMm37DuPvHn+la0J1BSrXWmDvyY8c16ZLaW9yBJpjDcvJOSxH61LZx6imRd/vBkcgZP68CgDyW7ugZA7WjLt43bSo49MCoG1u3ELxz28j/3RvYDPvkV7FqdpqE8YSzCxerMF4+nGa821nw7rkkv7l1fvlU2/rgc0AcHdawjcRW6w/QEk/nWY2oB2y65HoBit7U/DOuWi+ddRhgRng8n8K4yVpEJBjPHtQBoSXcbnKJtqPzc89KyxcSZ4jJ/Cmm7bptxQBsCQDqaf9ox0JrBN17Un2n3oA6D7UO5NP+1RDqSa5k3HvSfafegDrVurQgfKxPfkYqPLP90cfWuX+1UfbT60AdOsNwwLKmQO/FRN5i8NgfjXOi9OMZo+2e9AG8ZGHOf1pPONYX2z3pftnvQBt+caTzjWN9rpPtfpQBsGU0nnGsr7axGPSmfbfWgDX8003zayvto6U03goA1vOpPNrJ+0g96ia59D+VAG0ZTUZl96xTdH1phuR6mgDWeX3FVXmrOa4BqPzkPU0AW3nNV2n7017i3HQfWoDPbEcqfwNADmuAetVnnHrSfI5+UE02e2WNA7Hr270AVpJh61Teb0NMndFPy1nST+lAFtpyDUJuSO9Zr3GO9VWuaANk3ZHeoXuiaxmuqiN1QBpSXGazZnzVd7iqck9ADZ2FYlwT6Grss55rLnnYUAZtwWz0rEnzWrPcNzzWPNMSTnFAGXMD0rInjJrXllNZksp9KAMG5tHbJrDuLB+prqZZnHpWPcTO2aAOWmsio4NZMkW09cV007sc5rHnbAxtH40AYrTSQncj4NWE8TaraoY4Jiqn0HP51BOrZOAKzpEPsKALNxr+qXDbpZ2J9c4rMkur6U7i7sfXJpSpB5qVZMDAJH0oAtWd/qlu6uHddvQkmursPEqRrJ9uiWV3A+cyMpGPpXFZDDks31qIiE9QR+NAG7qWpWdw5kJbnPyhiQPzrkLiWJmJjBx6Zq45gGRjms2QqT8vSgCBpH/h4qJpJCMZqYuV6AVCzk0AQtvPU1FtPvVjcabvPoKAP/1vyfWphUIqUGgCUCpADUQNSg0ASipQBUINSA0AWRgVMuB3qqDmpRxQBaGDUw4qqpqZTxQBZFTLzVYNUqtQBaWp1qqrVMretAFxTU6k5qmjAVYVhQBbU1OrHPFU1ap1YUAXVY1Oj1TQ1aSgC4hNXI8mqMZ5q9HQBejz0q9HVCM4qysgHAoA1Isd6uK6isZZalEp7UAbazehqdZGPesRJKvRNmgDWjY1oxOayIz0q8j4oA24pB3FX0kSufWWpxNQB0avnkGplMnXiuejnNX4rhwaAN+IyjvWlDcyx4xmsSG8kAwRmr0d2D95aAOntdXuE6SMv411FnrchADuW+tefRSxkdCK0oZVH3c0Aeo22oQk5faR7it63v7Y42xxkjtivJIZ26b/1rVgumUjdIKAPV1vXdsxW/PYDJFXopL6Vv3duRjrtQn+lcJYausRAEpH0Nej6X4h0aGEM8kxl6kq5x+oIoA3rCYFNl0HU4/hwp/lXT2Ok6PfIwmfymXu8hBNU7Hxdpt0BFLidTxtmVWP54zW/HpdtqK77eJYww42kgfkSaAKK+FfDkTeZI4PP8U3Wul0+x8N2jAxugA/vSsRWMfB90DvV1PsMmq8vh/V4ukYI+oH86AOslvtMWX924IH918/05q2viDRYVBaJmI6kp/jXnT6fqcYyUH4MCf0NVkg1OTOIZW+imgD1BvFOhuNotnc+wAq3b61pE5CLbOg7ZAOP0ryNzdW/yyxuv1BFWYNRnToxUUAe92clgD5kEm1yOwxT7rUhCpMTM7DsTj9K8HfVrgciRhjpgms+XVrsksZWz67jmgD3F/E8LgIzouPU4/rUbeJbMDyZbuDLfd68CvniS7lZuvPrmqM9yx+YnNAHu9/r0JBhtJLSX0MkpHP0zXFXd5qOGYy2EYHXawOMfic15PLcsx4OPpVGSRvWgD1Jb6HY0Nzf2yqfvCPr+eKjh0jwzcgudTKnJONv9TivKwXJzzRJK4GMmgDs5v7DhlZUuiwXPWPOfyqgL/SUzvjMnXtt+neuRMjDrTDNQBtXF3bMxMSbB6ZzVJrgdqzDP7VGbjmgDW84noKb5rVlG7NN+1ZoA1TKRR59Zfn5FNMpoA1vPp4lNYvnY5p32n3oA2/MHc0n2hR92sf7TkVGbjPGaANz7R700zZ61ifaPekNwfWgDYMwHU0gnB4FY/wBopPtGehoA2vOx3ppl96xDcUn2g9M0AbRlPbmml3rHF06nIOPpQbqVuSSaANNpWzyKrvckVnNNIepJqIu/pQBfa8IGMCqr3betVvnbtSCLd1dRQBL9sZehP51C97IwxuJ/GtZNGSQKftcI3D3yK1bfwelyuYr6N29FQ4/MmgDi2uGPUVUkmB6ivWo/hlLJHvlvo4uOm0kn6YNcZqPg7UoHdbWKSZE6uVwP50AcZIw61SkcirF7DcWjmOdNrDjBrHkmNAEjzEVCZm71UeQ96rGXHegC809V3lzVNpsd6hacGgCd5M1nSscE097ge1UpJxQBUmJrKlBrRllzWdLJQBnSq1UJFNX5XFUJJQO1AFCVDjpWbLGDyRWvJcqP4RVCa6B/hH5UAYk0Y6KKyp4CR0relnB/hUfQVmyyZzxQBzslpI5+Vc1Vn0m5jTzHUAH3rdkY+v61nS7zxvH50AYBgVfvHGKgcxIMCtWReuSuaiCSOcKA3sFzQBkecgHAP4CmMzPxHE7V1ln4a17Un8qwsJ5T7RHA+pIrtdK+D/ji7/ej7NZqD1mmVTz7DNAHj0el6pdnFvayuf8AZUmtG38D+Kbtv3WnzY7kqQB+lfUOk+C/E/hVd2peLtNsU4yAglYfmBW1P4z8J2GI7/xJNfOOGMVoqD9RQB8uRfCjxfL/AMujKPU5wP0rpbD4E+JbhfNupYok5ztbc3HtxXrWo/EnwXCwe3ur66/vAssP/oIzWBdfGXw3GrJBohmz/FLcufzwKAMO2/Z/dx5lxqUUcfq8ka4+oLE1Y/4UPoY4PiK0z/12WoYfjbBbSs8PhzTCjfwyKznPrk807/he0vbw/ow/7dqAP//X/J1W9akzTQakGKAHA1KCTTRgVIAvegBympAc9aauKkAWgB61MoqNVFTL7UAPFSCkBz1qQAelAD1NShqhCmngHpQBYVuKlU1WAPpUy56UAWQasKx71UUGrC5oAtqxqyhPU1TTNW0oAtqfSrKGqaGrS8UAXUzVxGxWar1IJCOKANZZDTxJk1mLIelWUfNAGij5qyjGqEZ5q5GRQBoRk9avxvjFZivip0k9+lAGwktTif0rHExqZZCaANlZgcVZjcHmsdGzV1DQBsRsKvRtWMjGrcbsaANuNz2NaUEhHWsGJjxWlG9AHQRT8YNXknFc9HJ0q/C2etAG/HMvQ1oQyIT3rEgG4gVu2sQ44oA2rUpwea3YpUQc1hxjaATVlMtyTxQB0cF0AwdeMehru9H8V3lhjZhv94k15rbxE4NbESkDigD15PiDeE7pBu9iTgflTLnx/eSrtCoMfU/zJry4MQM5pQ+7g0Ad1L4y1ObKiQIv+yoB/PrTI/EeoA589wf941yKbauxAGgDtYdZuZB887+/OaspeRsP3kp/KuViwo96bLOVGBQB0M91a7eJH3fhisOa+YZCtmsuSY9Sapl92STQBqm+YDBI5qu98DwcVkSyd81SZz1zQBvfaEPOBVaS4UnAxWKXYc5qNWJNAHVW13FGPm5HcV02l65pVu+1rVHz3bn+dedrkjOD9asRwM5+XOfSgD1ibXvCDqRPYI0n+zWRMfCF9JvhgMPqpfGf1rh2s50XJQ1lvBPsMpUhfWgDr9T0zTJ5FGlEBe+H3H9a5O6tvs7FWlTj0OaxpJ5IycEj8apvcHqTmgDQeVQeDmmecKx2lJPBpPNPrQBt/aOKPtJJ68Vi+d70nnUAbf2gUnnisQ3AFJ9pwaAN37T6U0zg1ifae9NNyelAGyZcdDTfP96yPtHqaX7QtAGqZ803zqzPtSkYoW6QH5hmgDRM3vSib0NZ73NufuggfXNN8+3C8bifegDVEx9RUrXcqjZuGK50zrnjNNM57GgDoBf7fvUHUoyOYwTXNGc+tQtO2eDQB0Ml6rZ4Aqq16V6cViNcN61A9we5oA311W4j5Rq07Pxfqlm4aNwQOxAxXCtPUf2j3oA9TufiB4gul2tIqjOflUVzFzruquTI1xJknJwTXKreepNK10vQmgB93fzzsXmcufUnNZb3J6cU6aQMcCsyVwO+KAHyXHWqb3BqGSQetUXlFAFprk+tQm4Pr0qi8tVzLQBotP71A0uaoGWozKaALTyVTkao2kPrUDSZoAjkNUpfWpnfPeqcjcetAFWXFUpAp71akPX1rPkHvQBXfaKpOFbjvVl8VUbA70AVJFAqm6E9CKuuRVVyM0AUCWQ5GPyq7ZeItZ0qQS2FwYWHcAf4VWk2tVJ0WgDv4Pix4ui4kvA/uyAmqF74/wBR1KZZL+aYgdodsZ/QVwjRg96jEW48UAdPf+JLO4QrHbzu/XfNOST+AA/nXMTX277lug9zlj+ppzWb4ySB+IoWyZjgSL+LAUAZTtI7fdA+gqzDpVzd48tc5q9c6XNbIsrSRkNyAsgY/pWWZpIj8rdO+aAOltfAupXK7iyIvqxq7/wr2573dvn8f8K4xtSuTwXP5mo/7Ruv75oA/9D8mx1qYetVg1Sg+9AFhalFVlNSq1AFgVIPrVcMKduoAtg1KrVSD+9Sq3rQBdD1Kr1SDd6mDUAWxJUqyVVVqnUigCyG5FWFz6VWUip1agCyoyelWY1PpVdHA5xV6OVe4oAlRMGraRFj8qk/QVPazWandKpY9gDgfjXT6drr252W1vDgnuuT+ZNAHNCBwcbD+Iq0lnO/RGJPoK72fUXKLLiCKRsH5kDfpjj61Yi8QW8MISVo/Nx8zqoA/AAUAcPDpN7KcLE/HtVmPQtRcfLCcZxnpXYJr1k0Y8y/Ifd08vgD8jV2yubS+kKx6wRyPleI/wA8YoA4xfDesbDIsBYD0IzVcWN5G+xoJAR22mvYHiWL5baW2Qk8ckA+ueDVZ/tyhjKFkQHk28wyPwNAHmX2O7jG54XUDuVNAJHUYrtF1WKMkPE8i56O241XaTTruQmeDaPUMcigDmA5p4krowmm8pHH3+83NU5bGyD4UuM+mMCgDPR6tRtUT26xsQrbh64pVyKANONxmtOBRJ3xWGjGr0MzL0NAG9HAxICnIrQgtSWG44Ht1rDiuZAc5rQju5exoA6NbS2BGJGHrkVI0KKf3Ugf68Vgi6kfG41Zjds0AbEefxrUt0JrItwzkV1FnDgDigDRtYcAE1vwqFHNZsShRk1eh3OQc8UAaMalzk9K1reBzjjiqlpGzEeldPbR4AFABDERxiryqQOlSqFA5qWO6ggYNsEhHZuR+VAEAikkIVFJz0xT0t2ztxWxba5JHwkUfoOOgq3DrKo+5YE3Yx7UAVLbR76cZSI4/KtK20e8c4WI5/w61vWXiSRUCmNCPfmr0uvb48AbD2xjAoA5m5027tohNImFY4BHNYcgfJz2rr5teHKlQ+fWucuLxZrjfsXngKOBQBjPudtg6mkktyowSARyQa2YP3EwlMQkL5Crn071iaoTLN80exm5wG4oAz5eDgHNVXkC4BIrTtLF5Ud5GWNI8Z3Hk59B3pLmyjCtJHyo70AZPn8cAVKkjE8JkjngVVeSFUJ6N0+lX7fUUsY8O53MB8ykcqe3rigBjXs8PAXb9V/xpBqsyYJZVPqFGayb/UraeYuu4Afw5zn9axLm7iLZiJA9CaAOvm1W6KYMhIPvWVLfSMCCa5o37YwDjHvVc3pzyc0AbbznvVN5xWc10Gqu84J60AaJn96j88jpWWZ/Q0zzsUAaxuPem/aKyfN96Qy470Aa5ueMU37R71kGbHFN8/3oA2vPFNafPesYz+9IZ6ANjz6UTe9Ynnn1o+0e9AG4JV7momuAD61j+fR51AGobo+tNFwepNZvmik81e9AGqLr1pxuRWM0v92o/MPc0AbDXQHNVmuyazvNphk60AXWuSKj+056mqLSVE0nvQBda4HrUBnPaqTSgdTULTUAaPn0huOOTWK1wQetV3uWPU0AbL3KnjPNU5JO4NZRmPXNN86gC1JJxVR5fWmvJnpVJ5MUATPJVdpKgaTmoS1AE5k/SojJnp0quzg9DUZkx3oAt7veomb3qsZaiaTvQBYZk7mqrj05pjSL3qu02OlAEcnXFVXC/WpGlz1qtI+eelAEMijtVZlUU95McVVeTPWgCJkU96qvGPWpmPpVdmwaAKroeg5pgtZpfuLn8amcntUJdh3xQA+PRr+c7Y48/iBVxfCOsOMqifTcKqw6hdW5/dSsv0qabW7nyz++l3DoS3f6UAXG8Ba7s3sEA9N3NUpfCF5E3lvKnmd0yM/zrJOu6mHLfaZfoHIFVZtYnf5nJLd2ycn9aANdfC1yCRMwUD0ZT/Wkfw3aplpJiB7lRn9axW1MlcKoGeuST/Wqr6kvGFAPfHegC5dWWn27YjjM2PSQYz+FUcD/AJ9F/wC+z/jUQ1CQnA4ppvZPT9aAP//R/JMNzUoaq4IqQHFAFlW9afuqrk9aeCaALQanhhVYE1IM0AWQRUgaqwzUqg0AWlbiplweQaqAelTISKALy4qXKiqinHSpAaALysO9TK49aoq1SBqANJZFq1HMi9RmscPzUof3oA6SDU4YuDbxv/vAmpl1qaOTdEkaqOg2CuZD5FPVqAOybxBNcLtkVBjoVGKQaguCOOe9cqpNWkY0AbAmY9SfzqzDdSQtmNiD7Vjqx9amDnuaAOnTWLoEHcMelaEesBwOChrjBIfWpxNQB2f9qZ4yKcuoORkVyCzGrCTGgDqvtrjnNBunbqTXPpcn61ZWegDZE5PepklrIWXPWrSSUAaqSDvV2OQDvWMjc1bR/egDbjlFW0l9KxEk4FXo3NAG5G47VqW+WIFYduCxFdFaqBigDoLJAoFdFE6oATXNwyBAD3q9HPvNAHQpIXPtW3a/Nj0rmbc5xXRWxCAUAdVbFUFasdwFFcslztFDXxA60AdNJfY4BqFbvJ61y32ssetWo7nHNAHWpdgCrkM4Jrko7jcc5rUinwKAOwiugopJtQAHBrmGvNo61RlvS3egDo3v++azpNQ5zmuenve2azpLzHGeaAOnfVGzwxwPeqM+qEnJOcVzTXeB1rOnvCBjPWgDpZ9cncbC/A6VGdcufK8vzW2+lcgLika5zxQB0P2x26tUrPJKPvk1zsU+T1q9Hd89cUAa/wDZt1Iu5nCD/a7/AEqjLp88ZIZs49KuR6gcctn680txqThN2ecUAYjwkHGSKqOCM85qzJdZyW/Os6SYetADjIw5BqJpXqGW5XGFAFU2n4zQBd84ijzz2rMaamGbjrQBpGc5603zz61mGWk83HegDT873pPOz3rLM46CkM1AGqJ6Tzu9Zfnc0hm96ANTzsd6Tzqy/N70edQBp+dmlEprK8/8ad9ooA1PMP1pwcnnsKyPtHagznGM0AabTqOhqL7QDWWZuCM1H54HegDWaYVE1yTWUZuetIZgKANM3ANMMgNZhnFRNcCgDRaQGoDLmqDT5pgnHegDQLgctioTOmPuiqL3AqEzL2oA145oiRuAAqw5hz+7wVPqMGueEwz1qykwxjNAE8xAJGKznxnParMkgI4rLlcigBXK5qs71C8pFVHloAsNIBzUDS1VaWoGk75oAttLjvUZmqg0tRGbFAF8zZqFpapGXnio2loAstITUJbdxmqxkz3qMyEUATN061VccUjPmoGY+tACPmq7tSu+KqtJQA5iB3qFjUbv71XZz60ATMagfJGDUZc1E0hoAGjTHIFQlE9BQZDURkANAAyL0wKrMo6gVK0mORVZ5e1AD0jLnGQvuasfZE/57rWY0uaZ5h9aAP/S/IoGpA1QZp4NAE4apA35VXBqQGgCyDUoaqqnmphQBZDVKpNVgc1KDQBZFSg1WBqTdQBaDVKGzVQNUitQBbVs1OoY9KqoauI+BQBIsZNSBG7DNIjZ6VajYLyaAIljkPAU1bS3nbohNOWfaeKmW5Yck0AAtpweVqwts+0nuOoqH7QeuaUTsOhoAMletPEtIZ88Go94PYUAWA+amVjVZZMcCphLQBaVjVgMapLJUqyUAX1Y96so+KzlerCtQBqxvVtHrLjcYqyj0AaqPVlGNZavVyNulAGrG1asCk4JrHg5Nb1vwBmgDZtlwBWxEwUZNY0ThRVpJCeKANpJSxrUt2ycVhQE1uW+ABQB0Vs20CtZJ9o4rnY5QBU32nA60AbrXeB1quboscZrDa6yetSJKTzQBvRzdyauJOSQM1z6y9hV+F+RzQB0cEtXhdbRXPpNgU2S6x3oA2Zb09M1TkvMDrzWI9z3zVKS6JPWgDZe7zyTVJ7rJzmsh7njGarNc8UAasl171nSXeTwazZrk9BVMzE0AbX2k03z8nrWMZvSnpKc0AdAk3HWrcUvqa55JuavxS0Ab4nIxiq1zdds1R87qazJrgsx5oAvy3XHWqL3JqjLOTVUy0AX3uKgaeqDS1EZTQBoGammas8y0zzaANIzU0zVn+b70eZQBf8ANpBNWcZKTzKANLzfek830rO82k82gDR82k86s7zaQydqANHze9IZazzIaaZKANITkUefmsvzTR5hoA0DKKjMoqj5nf1pnmGgC8ZRmmebVEyetMMv0oAvGUVGZR1FUzJTDJQBaaSmNJVXzKjMhoAsmXFRNLjpVcuaiY9yaALXm09bg+tZhcetNEuKANoTk9TUEz8ZFUVl461IZMjFAFWV6pPJzVibis6RqAHGQ1C0lRFqgLUAStJULSVGTUTGgCXzKjMlQk0zNAEpemNJTKbjJoAC/wCFRMxxUpRucLmoiG9KAK7VA31qyyueaiaGQ8gUAU2Bquw96tvGw61XZeOKAKzZqMipmWoivNAERqI1KwAPWoGbHSgBpxUL7aVjULEUAIdnpTNq/wB4flTGambjQB//0/yGFOGaaKeKAHgVIopi9alWgB4FSgdKjFSj1oAkWpRkVEDTwaAJc56U8GohUi0ASipV96iHSpVBoAnX2qynvUCjFTA88UAWlYCpg2e9UwcdakDUAWw2KdvqpuNKGoAuB6XzKqbj1p4OaALIapQ1VAc1KD6UAWgxzUytVQGpVNAFxWqdWqkpqwpoAuKasq1UlNTKc0AX0erStWcpq4nNAGjGSTWjCKz4F71rQrigDUgFa8ThRk1jRtt71ajfJx2oA2kk3cVowHJFY0JzW1bryKANiAAda1I321lxHFWfMx3oA0/OwKja5J6GsxpjTQ5OKANVZSTV1JcfWsiNqtxkmgDZiYk9a0o3xWPCatiTAoA0XnwKpyXGe9UJJj0zVV5sUAXZLnHeqTz9TmqTynPtVdpaALbTmq8k9VHkqrJLQBZabJ603zapbqQuaALvm1MkgxWaG5qcMRxQBppJV5JTisaM81aVzQBoPPheKz2lzUcshHFVS/HFAErSZNQM9RM1Qu1ADmkqJpfWoWY1XZzQBa82l8zNUd1LvIoAveZTTJVPeaaWNAFvzKTzKqFiKjL0AXfNo82qIY9KNx7UAXTLSeZVLeaTeaAL3mU7zQRg1Q3mk8w9aALnmY6UnmDFUy1JvNAFzzPemmSqu89aQuaALRcVHvqHccUzdQBY3VGWqHcaaWNAExembzUJY0xmOKAJy9QM1Rl6jZqAHFqhZ6RmNQkmgCYSYqYS+9Z5JpQ5oAuu+4c1QkqXfUEmTQBUY4qEtT3qszY5oAcW7VEW7VGWqMt6UAOLU3NRs1NzmgCXfSiTnFVySKM/jQBb80+tOLBqp5o3kdKALJApGdtu0Hj0qLfmmk96AIJQaoPWgxzVOVTQBTJzULZqZhzUDUAV29KrtVlhUD0AVmJqF6nIqBqAIGpuKVs1Hj2oA//U/IQFx/D+tOBfulKpBIx1qQMc9MgdBQAKXPIX9akDN/dpQ7jK4H0zzinbnXO/HI4zQAqs5+6vT3qUCXun60kRYjdt3Z7c5qX5s5CkN6ZoAFWX+5+tPxKOqgfjT/NlbomSBg8cD8qsJkqOOencD/PvQBABMONo/OpR5nOVA/GpguxcnvzwM9PwpP3rKWClc8gnj8Oev4UAIol/ujn3qwpl4AUc+9QIyEBWcKcZ+Yc1ZVcbQxTOc8Dg0AOBlBClRz71L++X+AfnSxFZGOZQuOoHf6ZpD5iE7QZN3OFPAH0xmgCYJNuC7Rk+uakCTZwQo/Gm28N2zOTGAoIOQ4I5+lNd2i25VkBJXI9c4oAn8qbO3A/+vUqwTFckAc4qAbssy4LjoDyfr1FWo1kMZ8xs88gjGPwweKAAQS5PT8KnW2lbJXbUQkePiN0OGwAxAyP5VpW8qSxnzsjaT1ZR+WOCPSgCBbK4OOFH49T7U9LSZskbcLwx54z0zTvL3EuMbARtGRke5ABzUoIAZY5FLAjGxt3XqeV60AOWwlYhQysT2GSefwqdbCX1BwMngmpIFRnyPNkPcJwB6AHn9auxG2llEW/kjJbj5e2GyuT+FAFRbCUuFDD24I61fTSLrGcqQOppk8kEZlSKeNinQpJtQ49CRVsSt8qykKXTcjbs7sjqMDt+lADRpc2SpkQEdjwfwz1qcaWwwPNUEgkDHXFWI4ZkKeQ370LuPJyD1yDirS+a7CG7uWV2IGVI6NnuTwP85oAgTR5sjLjDAkHHp7VaXS5EG4yLx/smnQNdiZoonMrAgMMrjaex5ODjuBW7bJfrHlYMkqXAVgUBAJ+bOevrQBSt9NuH24ljUONwLDHFaSaXdrjM0QBHynrn6YqjLdX6Ro8yozygOI9yjajc5O7HXoPT0q5a6vE8hR5kUj5Y41AO4Hvxkc9v5UAT/wBn3QbYJFLHkALnIHX8vSpobC8YbklTHf5ST+XWtDT9QRpHkJ+0xr8n7l5CwPYttBAORzmteC1nMImnEKxof9X5xEiJ2ZSwA69Qc+9AGWljqIO2ORSR1yhH9M1ow22pbwhnjRueCoJGKuW72bSMUuomeI4ZkYbSufvMVbsPT8M1eEsuTuliEZYkMX27wDgjb97n6UARR2OtljGZFyORhO3r75qVLHVicPMnHB+UDnNalrq+nzyvam5QqUPzM5RRgcrucfMcds54q5p0NrKsiiVHdZAEVmJODjBJ6HPb2oAxU0y7cki5XaM8lCB+ZAFObT7pF81bpGTO3coBXI9631ZIlEAicsCSSUCKN/HTOWx7D8KVIIIYmkn8pJWf5ZHn2j58Dphhg47DPrQBlxaXqD5KXMTYIyAQevYe/tT4LPUXcqk8fHc7fyI5P6VuRWMclrcXIjWdbfCqwlO7Lc4C4+YjHXHes2W90wSxE3UURdlAVpTEoBB5ccLg9OTyfagCeGw1aRA0dzGeo6Dt1464FSLY6s3DTqOuTs4XHqcda21PhWYgpqASLZ5m0tuTHTl9oG3d+X61py2dtCsayzJO14G8mONwySKpAxndg9+uCe3agDmBoupyKH85MA8nGc544wKnfwxqg4aQdQBwB8xzjrXVjwxPBbrKLaMvvV1ji2sNrA7hksMcYNXbCxM5QLmNWjbGyQna7H5GAxglgpAGff2oA4uPwhqLuUlYp6H5SD+tJJ4VaNQ7XC7NwQkjHzemPp09a766+wxloVWC6uZwMGSZiI3UgEHAGWJP8Ix+NbF74fvbETPpkS3sajf5ZhnDoVUEjcdwwCSBkcgevQA8ubwc+2NgxIkO0dB75+8eMVJJ4EcKH3qQSAMnqCcZHPTJr1G305/7Ot5Tokkd2VAKzophfO0fLlldcbuMA8deevUp4f0uB5Z723KxxxRyTBQzlFboiKB88hH8IJIxQB4MPAbMGEbI+ATkMe3WrC/D0+XvduMge3Pfr0z3PWvpax0nwhBD9utba6uoGBm2z28kCOyYyCV6bM/P39qLfRrK8SC9isgsdxMYppSgn2cBgI8sjEABjzzjGM0AfN7fD5I137mZUH7whGO3PTjqfwqa2+HZuNxyqKpKkk8Aj8a+uIofDsnlWCJcFIi7yvFaucuV+4T5eSuCCOMd8+jrCHw3rMsNnpum3b3HlGRY3gZXCKWAbBBLlsZwwz7igD5M/wCFemPcsjoMYIIJ5B75PGKsr8OHdhtkyM4x357nt09M19nWXh62v4JNPttPEFxcOIEmWWB12jGWzkqTyAFZ1w3c9K3k8OWGl2f9p6l4cv497gLObd7k9cZXygUOTkYDkAcYzQB8M/8ACrJnPMqgHI3EgDPTq2Aarn4YhFLvIJEU7d8bAoW9AQTX6HaPpnwv1G6TSmt5o5biKR7ee5sbiNJmVS7RMksW0FR2VhyMZyRXRy+DfC9tcwatZwWItJ1jWHfJFE6BwPurIxC54O45C9M9iAfm8nwkicZaZASegb8cZOB+tK/wecRGVkeMAbvmGQecY4JIz24r9TtC8KfD3VbWWHS5bd7iGeVjauYpmbGc7EK/vBznKEDgYNdlZeGvBlrYrfW2nI7yRL5qfM87BAcExLuGR0OQM0Afjg/wmQjPC46ruJbPYAe9QH4SxCIymRcEE/MSrDHQYI5J+tfthdeBNG1a2K+S8aOA8REcSGMjpjKHaTxzj+pORaeHPCugae9zfaIgZWCmWe3jmdgx3YLhFUKOzE49fSgD8aIvg1dzuywxOWADbSjD5SOufepU+EMD42sGIOGww4YDp14r9sbeDTLS986LSy89wgCPBbIE2SDOS4bHG3HUnpxU76L4Qhk8q0sNPN8QQYim6TLEkF0QFgpYklsUAfiDL8JEj4RWY5AJwSOe/HP4VLH8Fr2SON1tpwZF3KGjZdy+ozX7o6fpuiZ8uHTLWExncfLjVWWRTzkbQ3Xp1yKfqWnpPZST29tDMyqwWIKFDgcY3FWK+2B19aAPwuf4M3SBSLG6kUttLLFJjPtgHp3qGX4JawVZ47GaJUG4mSNyCM44I7+1fuNp1lYTpHFc2UQlySjxqkoUsCcOcDleRkqB0Fa6abpdpE0EkESJIT0VQowOoHb1zQB+ETfBi6jVXkiUZIXaxKsGY4AINEfwamMrKyBuSqqgJO4dQfofTNfucNP0G4gCRWkEtq4Bm3W/mM7LhlJwDk856U9odMiijm8hQruwUxWbKyjqBt8tiOnJOM0AfhgPgxceV5jQEgHkjOAPTPP8qV/gtcrE03lhUTaWyrZXccAdOtft95Ph7UonQWrRhWAeCW0MIZn5wfNQKSfY+1EPhvR4xIIrKKOF3zte3Rgu0feByx6cDtx09QD8N2+Ebo/lyRtCwAOJI3y2euMA4AHqaW7+Ec1r5QFqX80Ag/dBz2GcHPb61+5zaN4aMPlTW8EkOJJNstujBgVIZuVz0NYN5oPhqVx+5ghjt2E4jztjWbO75yq/KASDjpn9QD8UZPg9eRCJ3snVZGK5ZTjrjrjH/wCqrv8Awo/UBvItS2whThGKkn0bGDxzxX7G6faafdamou72wupWjeNY4QJTuyDk4VflUHHYdKzNa8P+H7E3t1cPGbbAkeKAYDODnkksnA2nBwTjGccEA/HC5+EV1aNFHNBtkldgsZRlcgcdGUdTTZvhRcqyxQ2yu7KXCqCTgdeo/h/ya/UfxJa6XfyxpptlLqk4hRZ0ikh3RxsAVlkHmB0Ctg45ODyKwIvCz6wg1W7ntrOwgkMEkTwwpMYdzFJJdsjZzkHCNyAMnPFAH5hyfDl4rkW0kabtucYIOR1GDg8Uxvh5IXEf2dCzNxsBIK9yDnoK++tVSxsfEM/h+wvbWBzAL1L2dY0LgFfMVdylmyCMKcHgHjBzzOp6vGk0ulR6g975YWWaRBAv7olmBYeYNq4Ul2YkAY4HQgHxO/w9YojrCRk9k3HaOpI47c1Xf4fTrG0ksHlbSBh0KkcZzjr+HFfad7qmpzWhltJ4JJgm3akQuEYMxCgYlZncED7qgYYfQ8N498a+G9OVb99bk1a9LGa7NlbROYj/ABCRSG8tA52lnXfnGOAKAPk2bwa8QBEIwx+8VwCAccHJ7+tQHwZd7DKtqCgxngkg17rB4s0bXTJqUem3FpZ2kgt7kx26fZ0QggmHzWVmJbLDIHr7DsdT3AvPpdzHBHBKqKWECmK28rJ2pbF3Z4yMnPuDgkCgD5Vm8EXK/K8QUnp649QBzVSXweVjDn5VHVnRgPp/KveNYu7PTIhZawk8t9GWvAJZY7ZpoSR84R1wFVVJByd2COMAVwuo+ILS4vbaLUpUi0x5PJKxyGWbYgVywVAfkwcbiecYHIoA83fwi5ydmdhwfLBP4VTufCgiAYBtrDILKQCBwcHocGvTry90OG3MFszxTyxpMxkR/Lj8zdg8ZK8LyCxJyOBWTbXemXF0tu/lkqv7yKVmEcQC/M23O7kkcDntj1APOpvDDJ8p+V8kbcnIx6jsaqt4WuhGZfLbapIyD3GOOvXmvQopHadf7TtIhLOwaKOV5rUTbFKYXATjvlivBx71zN7c2yXMckmoW9vasUObVJmCBwTgl2BZkC9AetAHNS+H5I1yd+Tkd+3Xr6d6y30yI8LI2QcH8elauueIbvSriG4mby4JbYm3aAufNiZjtLfI24HnjOD0rmP+ExjWOMzvLmFjujaPaGQ98FBt5I7mgC22kIRkOWGcZBJGarPpUK8l2Izjg8+3GafNr8bhNk3BCrsG0BHPLEkEdD269qyJtZmiUK8sZcknKZJHPUcYOaAJ209G+5vI9O9RyabHGu5t3r1xVG311lLFpZZfNwo+TO0jpzkd/Q81UuNbDB45ZJioYsrCEKCD1yTngepNAFz7JC7HLlQOfmJqIwWoOGlIxycZ6VUkvJDaLLDIS5c5LcqPXIHPcVkHVrqN5FcZXaMtIyoBk9QpIJxQBvvBaLwJ2yfbiq5W2U4eYjH1rDOuMyOojjWMA4YONw/PI4qg+tzMNhKyevIxznv9OaAOiMlmCQsxOPfrUDXNqpwZGz+dcncazbR8AI4By21xt+nvUDa0wH7nyiJF4AILDn8eaAOrkvbaM5aVsfjVV9VtVwfNc57d65N9aMkYikZSSduM46fWs6XV4/mRZATk8qMjHT044oA7o6pa7dxkdfXcD0qudatFGPMc/geK8/GrscBUyB1xnJ/z7U1tTQNtCPgDPzZGfxoA7ptatD0Z+vfiq8mtWp4V3/KuCl1DcCQSDjoOP5mqn28hTsPB79aAPQH1m3zxI2BUD6xD2kJFefveE5IYlscDoP8A69R/bWwQ3XpxQB3j61bgE+Zmq/8AbsDZ+c8dx3rg/txbOThfXHp+FM+3ZUAn8xgUAdy2txDkkgfTNV/7bj7ScfQ1w8l5vwF2nHHHA/lSfaj7/rQB/9X8f5WyBsdWbHTBz+FOacAAIR05+Uk/nms+M25XmZs+m4D8+lPYoiHZhiR13HgfXBFAGh9pQKeSwUkA4/n1pfPBUvkDOODn9OKyxOEbDFUDckF/8ePyqWSRdgKcbuQp3Y46kcY/HFAF8XGG4kIX0Utk+tXl1Ly8IjYBHJKkfmRWG8MjhWj3uOMsM4H5A1IxkjRSFbg87jwfzoA3BqybColZicZUDjH1NPa/jQYQEjPOcsR+I6VzxlkBXCqcHJB4/Ud6UTM/yyReW3UNu3cZoA6NLt2Y5wYsE57/AE5NTvex7kZSD2IXIOPQ9RXM5JQYwRu3EhsHn6VIr7RmJxnn5DnH5igDpRcyxMZHdlC8cngg/l+QqRb2TJkjOBzjBPf2PWuVEjSAjcRnoFJx/M0yO4igmLPLI4HABHGPoSDQB1bPcEKzcgEHLdV9eDnFSLcTCQEsAo56gg89MDFc5/aSy/JHEZCvuFDY74xn9an+3XHOIh2YPISGVsc88cGgDoZL+W3jKwgv0YF8Dtzjg4FPi1GYbZGjCAsCdrMoHbOO34VzMN8S7TOiylQQQWKpg+xOD1qwt85bfMN+AcKxJ2jrnJOKAOlN9jMjHaeoXeeR646H/PFSpq8czswjSSRW+bc5G7HopGK5c31vPKjOiJlWXABbk9cnJz7dhUo1AqpVYtmBtA+6GGPxzmgDp7jWoIkYJYwXBUcRs+0jIPzZBAOOwxUkF/fKP3dtHbu67VbJc7cd8E5Hbr+FcWLq3luFlljjgUgghZOrDocZPP4VcWSLy5obYF2JDM4wSGxj5cjOPYCgDo5buTLiW/XA4KBOAfoBSwXRWMAMWUgNkdAOxyGOM9sisKGS5tUTBeNHG5X8oBcjuT5eDx+tabahb2cchuZvNaTaS0QjPJxwdq9fp0oA1Ib+5uJfs8DbFkJwSodl+mTgfTPWtHThq7y/ZEDTOoEhHlBGBXkknDDA+n0rkI9QupInuop4YmZ8/OY1wG44U7SPcc1enk1ixmNpfzO/mAsWQqylAR9xlbBz7GgDqJnKTvEGmeRosvG+CFOeeOPl59Krl1glU2NwrFsj5EwwJ7Ku/isSO+vJL5J7tXkVVxEQx3LxhecnPuKfILdZUN/DcRtnJkiHlAjrnoQeeOB25oA6NPEF9bxhLm4kGDgeamCcc7QAxIyRx/OtDRdSv9UZpYrhHZsEb2XcFB4HPAxj0zWRpkHmWzppdwDJvYiWabDRjsQNoJz04GahNzEJIjJp87TniUqxMbMOCwUgcHrtOaAO5e/OmT24bzHeYsPL88q7MzZOCjHaw7dvWqN3cwTpJNfRDZGgCvPNK0isxxgP5obv37VCLfSCxZ/PXeWXeMK6YO4kqobco9AM09E0SG0kMNsLyJmBYLK3zADO4EYxtGRg89c0ALo+oXFwr2000ZS2CokZkaZCASOrMTgZ4PPpxTIZvsd3IJzcXQ4wkbMMMOScMzZyfpj2qnHeaVeh5NOtI4UjTDRxy7iSD85I+TA75zjp0rNsNLkaV5pyqKWV1LgT7gueAd7kH2/WgD0GG6soT59wkVlEFb/j53PvyeQECjB7Z/LqTUkUtxqOp25hltJEU8QuyjO0Eg+YdzBuc4IIzXKW982nXc8dq6TptciMMshG4HI2MScdsgkg471k2V3eTq00zuqsB8iSSRPGBwCQFbAx+GKAPS5NP8RNcszyqVBwv2VPlCnB6oQAPXIxWlNp2tzW3kWV1G1yS26CQKJenOd0igL7H73pxXnssNnHZm6lS7nm2B0lS9kQKEJ3ADyyST9RRbp4+kJ1GK3uUi3Yikmbe2w8/fkP48444FAHphh8S6ZBCbmxubSGQbZDK0flAjbztV9o7478gVA8FvZf6Pby3McTclxI8IGSHwGJKkE9OeDXMWmoa7bwtc6td3UaFfmghWRVjCnKO21XQ7jnocjr9cq61zUNZhhtIYtQZpCRJCz4QleV3NlX+Y9OO+KAPSrLxpfWQMtw5mEe6RoVXzVJGBwxLAMQBkBcEjPBNbFn8VL6LTb6SPT7gvOGdJ5TGhG8g/KWZVAwMAbG6nnOK8qt5rS2uI4rUmwvCGd43kNssTEhdoYAknP944/OrGo310Hux9lgF5ANwdpTExGfuocx5U4yewHIz0oA62x8W6pNZr/aG+Qxs0bJFDtd2Y7uH8zDEeqBRgYPbPY2XxRms7WTTotMtoYZmTbNd4BbqTuIcsM55xgEgdcZryTQ/FGmyq0OpSQSNuLPJav5sYUjHzgsGLA5OcgdzmrVmsg1YWRlj8hVaWF2jeRJcD5BuC4z3zuGPU0AfQtp8QYtenleW0so43QAS2487zY85CgiQ4YcA/KTj61mXHj5La9j0y7E1taLvZWgHzvGCPlAIIQbgRgAnJBPHNeLS6mtuCizSLfeaQhltS6JtHTbJGMr15Gfp0rcfy7G+svKjj3SwhmklcLHJtPzFolPy/3g2B0B4zigD02T4wajZTSXV2LgxWzbIleNAjCVCqdSrnA6kAH39Z7n4gXOpw28l7bzh4JMhhLKPJQ7fLIALhlIAX5s8A47Y8R1zWbeW7iS70Ke4iUuRKiyXBJ4VHBMkbfMFyqgY9ORVq11rTmmgs7WaaV5m8o3NqWklZkOEiZJ2TG3PswHJFAH0XD8TbHS/wDRdOhmv1mdTbM4HkSzDlgPNYOMHK/MBxyeTU8nxW1vS7fzf+EcvoNQYrHI0FxC0G/GWYqCy5I5AKnJGARXksz+OrXz7K60qFrW2i8uKO/laylCOxDK21JTsdchh8o/DrQg0vXp9J+16XoVjbSxq/m+TfTvI5JLZcqqDb5bBdrDoM8c5APoDQviZ4istHku9b/tKWa4vo7eRzpqSLbQA5dpI1i/egqV+YSgDkFSDXZaB8TfCOt3I0sWk8NvbjF1slR2eJG8vdGsm3a4DfNg9OTjNfMXhPx74g066bR/Ful6SZch/tEEc0MqAoVAXKCOTPqxbv1zx1mp/EDwRb3FppkNyBbXCskquizW8E0mFLMAj/ccEkBmzngADFAH1LdaV4Kv7E3F5cfabL7Q2IEOW8wfKzOIptqmPHzPj6Ka9Hk8HWf2Ke5vL23kskjh/s8mAm3dn+6sVxOVRpdhII4OASuOCfiHwx4e1bWNTESa5YW1/aw+ZZT6a8hhmFwdo/dW72u3KZOVeQ9NyjmvbLe68QeE4LaWTxP4Y8R61bh7VodReCxkMIWMqqxEIpfbkbmJ6c8nkA9R0/xboXh26uIwi2k3mW0DwbgfMebIVRtbIRDw5UDheQBitODxpZrO9pDq5k+yRDaQjyrEgcDMDiNX4k6jcFHUdgfm7WpdD8Q3sesfEbQ7HU5vO5udNtZA0ShsCIrFLGJxtGQeNvBGa0/+ES+Cl/JNqvh/R5dHvJGW0MCWE1ujOzkkeekzFWCghkbBOOKAPrWx1jQdZ0n+xbp5729vkihLMjWAhkDBdkVxs5bjDKT0XIUDmuvTWvAnh7T7y91OGS30/TN8csFzefPA6lYzLhSrOwYlsBM4LZJ5FfONnZeF49Pg8NarK+pzzSxvDD9tW31CKGNECywxyzx708xMBnLkkEZGOZPtfjnQvD3iGPVpbm21QXcyi3slguZppZSFWW5isbvckmAAwxuB/vcigD3bTvH/AMMfGLMmiXWlahHaq7ajcXPnxTWkbiP/AJ5WjKSVbcuWAYEZHQ1u6drGi+a+p6Ffre6TBM1qLq0uIobW2VnBaJkiaQxjaBkOF9AvGa+CZdHe5n021sLW+8P6bqUom1MRafdmO5mibahk+1W8stuxP3gZHjbOcrwB9Yt8GdH1rwfbWuj6rHpWp3f2dbu8t5hbXF0lthYy8IZjJIr/ACrKSWwSMkUAe5xx/CO+u44/C9ppN3eQot0Zrl0jto5QQxd/likZiCNuAVbOcc5NGw8I3dnqN5d2Piux0SK4lQz2Wm6fA94lrKFRlkZopmk3tjay8FTkDrXxT4i+CXin4cai1xF4r8TaY6288SHUrb+1LEmb5NkTxxSxPJgkqxCkNgrg11Hh+HxH4OdI9L8bDxjPptvJCx8nz5Hdg0m0KWW7Z4lYsBGoAI+8KAP0Vt5YPDstjFd+KdYdkIggifTQYGCqR5eI7SP5iOQMggg4NdEustpkP2yWynllnIw5t3ERhd/4j5pTdkZ3NjGfSvlrwN8U/BGvaJP4gs7ptTnmvWjv4GkZrmzuR5cYEcNzKZogSR8iq2RkgAtz7bZ+Ixp9tHr+sTalaafEY0aS7SSK3YSlEDYulDEqflAVeB9aAPUtL8RXeoLcSS+Hb60+zsFVpTBmVGGS8RjlcEDpgkHpxzVW7svDut6m7WvnPd6bvnm8h3QlyCoQuGQBj2GfxHWvPbj4gw+IrtdR0C4ElhazrKpjuBEs7r0QsgkWXdjlDtcEitBPFOqrHaXEU9ui3dztmRrjdJl2wU8u5UKAoByQ/TGAc8AG3b+FLdNPuHmmmaKUSO0flSHy5HxvLJ50hcSEcjnPeszU/wC1E8L3Gm6OkrXUiefDBbPPp83kxuCSZrgEJx95QuQOgIrT0vxBf3F6sOoaXa+TLkiVrqHJEQO5hCq87GGDuYDnINal1r10kVtFPo10r3IKwra/vYwqAkbyFZFBOBwCPc0AVHurPwlp6SavPFZWhVWmSVo3Ys2WkkkcDc5JPRQOTwKy5fjB4OmuSuma3pxKMgAlaUySD+JUjEIYtg4XBIJ/GtS3udfkurW4u2ntbV9011FcSRh1ODtRDHGRsXumcnrnjB8xmg+LF8bnT/C01hH5cxIvr4zmbb5u8ITHiPBGR/q/oTQB9DWs9lqVkskUDPbzscDyimT1DYOOD1z1rO1eTUYtlvHaLJaqRnNyYjhRnO4EkjPBBHbPNeXy654k0u4Om6lPBqN4N5jt7W6ihWMjnc0l2WfGCMKOeAeck1SvvibrllexWK6LrupK8CrIlpHaXAZmG7/W74k3EZBIYqPTNAHpI1DUrPSJTcWtveyQKZI4UmklRUXOGeZoMgnpgISO3Fcre+Ok0/RP7SlgnhllV57XTpID5zGMEBYi/lDGQrAsMhT0xnGdHfTXOrWWlaQU0tL9JLi7MTRz3EbgbhHMY2KRbj3w3IODXkUmt+Of+EoittK1XW3trAyJKqXFvbWqDIRWCz2chcMc43yBeMZyKAPXE+JWq6ZozeIdc0i8tba4WSaFo4nkuBgFhC0QR13scIrZ29+lW5bpPE3hyXVr6TVfDYuLRICzzLbMgJyX3orxqSTw2CPYA1wg/wCEktfFlhFrVt4l1iaeRhBJJLYyWdvCjqVkle1ZChZh8oKnklenIzvjD/ZusafFoGp+IYree6dVuNHvntLzO07sNCWD8Ab9o6nbQBl219d+HdQXQ/C+pLrltG0ck99qWspOfKDsoJTbMw2qmWYGNWIAwOTWprHizxNpTEaHfQeJrOGaNlQ6jD5rW12uMOTGjBkcgoqhsjqcV5d4h8Y+DPAXhe+0HSdK8J2F7PbrH580MNm925AbHkbGllk2kOsYG3JAHFef+Fv2ifD/AIa0E6bq2leKLm4S8czf2Vp8slqkc2GlVFleFxhTt3AfLzjHcA9tuPGWr6jd3Wn3Nh9tuY57mKztL0qpumjKgsygLFGgc8Sbsjax24rirzwxY/EPUkt/HUN3okum28QWKy8SRRxDYQ0bsYTGpXLfKeSeMgdD4r4g/aU+Ftlok8GmeHfEf9prLJCLC40F2kuLdmUI2BMwG1AceYQSQc5FaOjfF7S/EXhaCLw/4d11I9LiaJftVtPDcrHGpcKoijdEAbanzBo8D5TuxQBtpa/DBr4S6V4nuNVmW4jW2ebU7i3xPMGEZuPMnMZDAlQ5yDGQQuTg8h4x0bRdD0xLlJkbUbXU0guHeWVoysvzMm14/mhw7sMKeArYGeNbS7nRF8G6lpWl6O8N7ZyENqaW7KFaVjM4H2ye0lJk3FQ6Jkdia878CRaCNR1rSPCAudQl1DTmt5NS1DTJL25tbqBHQCFzKUhjXADbGYsvtmgDXu9ft9J0u9l16KR7SKWB7WS2vhIkhfMjKJIdxXG0ERiL5RnLcV5H4u8QLHewTC30JtOuEWeLSree5M0kflkF2Z41YEbQpwTnGAOcn0nWrhPDHw/bTdL8QebqMUTpPBDpSpHNO5yVjS3abIYq4jZiuGIJ4OB4jqvi5LgtD4t1AxzasYmg0m308Q35aBhEiTTpKzxs7LhsKoIBO3JxQBh2/wAU7+CzXSZNDtvLlupCS1xIwxkJISwLBWGQuTySe/Spo/Fmjyxaij2FpaQ3cbLbNcOb6S3gK7isJx8zFidzKoKjAGD17zULfw+9hdeH/Ff2jT7q0j+2XMLW2xTHCwdxK89yjCTrgbP7oXPyiuc134kaFdae5lvL+8upEhSKGAwRgpMMMrARM4VQNuUdWy3BIBoA8yl8VX2kz38elQXM0UNvBFDJbWcs9uPmxLvSeHcAC20gN1yARmuM1j4hNdx3GjT6fLfsdrQyoHtpImy2WKoMnOQMMSB0GK6k+KJb6XWne5sLHSLWKWOzkvbuTyLiOMqXWOK1AlklbcFAUjG7cT3HM+EfGq6PdX8E8mjX0JieA2ptr5QqsMq4Zn3NtDEKXJ9fQ0AU9N8R/ZbK3iTRb860m4XU5nmYnafk2jDAbRkvnoccjmk1vWfFH2qS6t4olzIryGWdtwY8FJC5YDBx/GSeCcHIG+bjxT4blnv/ALXd67G9uWk2iaOJrUNhcvMQTGSpYHYVJA9cjxObxT4ikmmki0OOCwunCCa7SAIZAhwFLxFVJXLYzweeoBoA2ZvEetXc7SapcW8NwD97ebiUsSBuGX4IyMYx9etYl/r2r37me+vvMedjtmS3VQ64KrkLIACRn5c8nNLcXZZJZlngtxAqx3Ia4hgfLIWaLDAsw8vacADJOOuM4Nl418KW0cen3tzdIJXMjz8yKmxeFCBSMkjGcY5yRQB351Ocrb31vc6cZ4FKyWrRShjgYMzEv/Gx4CnK46YFc9fa/qEdwssF5bSPbjcspQyGbByA6uWJC4xyBx26Vgf8LA8PXHl2jalcywiMLLE6uscq5B8vaoGxR153ZI7ZrK/tfTYpd+mNtG0h3AdwuBndlicMf05wKALNzr3iOKFmuiqQyYlJZCcljnap55PU5x/Kpv8AhLdZvCJWa3VlwnlDAkbJOAFAzxk9uM8npWVa6qdRjkiF4diFdshJVCf++f6dagvdQufL36hIbhLYbY4jMRt3NuI5UkZJLHPegDR/tOTEhuFUBmZGkKqWQDHoSQRjrn8TVe51qWd3hnkmuEcMQrncq7upA9DgfUjvVa/8Q2slzJOtm1ukzbgmSqLnHybtuSBk8kj9KpwauZHk82aCAhwY4441lfocL8xOR9elAF5bbVIYy08bRgEqnnIUA24yOnbjis+8uroIEmEMnUJuPOM4OAf6/hUcmvvPBNANQlVHwWV1YqTkZC/dwMKD74FZsM73EqzLLLNKz9DHjOeuGXJwB1J5oAklvJrePynO1CANmOMHrjNVPMiuXwjRKWXOGYhj29cZqSdrbzDLcGBQMqzOu9gq9MZIPt0rHu3gjEYDK/lj5WIAL59Q2eB2oA1Io4gxU7d6HaPmyMjsB70TSwpH5zSRgkACJT8x/LpxWXCbaZflx5mQUKkFR6g8Yz6VQmaBZwTI+QeNoAIP4jp2oA0n1O3OHO9BuyAynP1JA6VGbq1KAl1Cu/BIbP1PA4qFNQlckPG0mOBkgAZ9s1HfvNtjVEKDnJVt2T9CDigCWS6RCSTvwONnbv3AqAXW9gTuJIPGQxqUSqWxcALx8gcgnpwcDrWa90SAVJXcTwFBbFAGh52eNuMjk9T/AC4qB7hj8oYvnn244qlFcTA7m3N/vrj8xmpHaRgfMUkMdwAyAM9+DxQAittb5iVHpjpTXlTH7sMpGOvAI7npQxiBCsG+UHg5NQSupUcHHoOT/wDWFAEouTkcc98cioJJQWO3K+vU/wBKZG0TZ+906HjFL5cRy4kUnsuTn6/5NADBMMcnH1B5/SpcexqpIcP8wbHY/wD1qMZ525/4Af8AGgD/1vxxjtkkIdgASeqk/wBaViq5gIGGbOTxz+eaxX2IPNUbjnmle9RSACxP+yS3X86ANBovnEbsoAPUKT+Xc1ajlVHC+ZuCcAFABn0IZawkuJpG3CGTjp823p6g1ZZ2OS5AB7Z3fyoAvSPG8okyocDnYNpPtgAVHM0uQ8fygjHJJI/DIqnG0YG513EdMqT+XAqZZQcoyhUzwSCD9RkGgC0jOVJaTKYycgDkfnSbllzuYgcYITnH4VH58MnyKpfkDIYqAT+h/KrabGjy1izL0B5wcdx3oAYVh4G93Rh0KDn8SM4quxt4jiKORDjk7M7s9qma4CswSMKWH90kfqcZ/Cod1zLKm5xzxt2bevTJFAF6z8shhFDJG6rnBUjdk889iBz70y83xzqGilQsAQGRt3157fQ1FmSMbZljHGc/eOPfpTndEhEyPjuY1DKDnpyBQBPFceSGkdRngFlUKOPbIqUypPki9SEscYAJwvr94j8KpNJCFJzIBwD85AH4E80IsGx2HKqu45UbgB7igCysNwxCljKMjDL8oI/KkIuUYiMsEHDKwB/M4qGNnRQ8G4q2MtGW6ehXd05qSa/KQvG7rtU7gjB/m/LkYoAd5tyihpgAxI+UNjcO3AIAp0M9yhPlN5Sj5twbI4z/ABDP9aqu81xGhN1DH5n3VCEH/gTHHH41W8tIh9nuJzIpyHjCZIPqCQRj8aANePzbt2aRhKWwSWyce+OKVTKt0Q8zOi9gnyk9ue9UrS3hdQY2lCKMBJEOGBPIBU4/Sr95HJ2OwqVwZXIByOyYNAEq4WWQ3IAgYFYwDgEnvgoTxVq3bTre3wQd4OVZHjXAx7pnPuKyESQTf6VNAFP8bkhRgfTj8KWW8sIxId8MxC7VKZZm9xhePxoA2o/E9/aq8bNFMHcE7yGOOnJAz+tS+epDtdIxMh3hcttGDgFcEkgDjnisi1FntgeW0M4Ksx8rcrjjjJKbc+xrS02xs5JS8drJFsyoMzKMk9sbdufrjNAGzBe3FzalLC3VZFbYHEmJFXPzE7cg8HqeRViPU7D7K1jd6fHISdy3FzMI5MnOWG4NkE9eMH9aZ/ZV48UjRyNapMxYHcjMABxgB9wB9cYpl54b1T9zG8hneZ9qRBWd34ByMrkdenSgCSW7ltLSOLTv7MnMuRsVkMpBAIBGUxgccdas22rajIsmmT6bErbAHnUTbgFPyq/zcg47A5pbfwXYJZn+1bY291wNxJRwWOE+XHUjms59IsraERtPI5DHLMVC7l45LgdTnAzQBoi9jFpMLhA0gIZI9tykcg+7hSoG3/gXXHWtHTYbRvNuNN0yJGhVW+zJPNIGfuQvmoxOfTJ54zXP6fq93ZzSyNb3YtHAg82NI2ycYydpwfbA6E1at9Nvriza7tLnyRMxcb5xEshQkZPKtwBjgHFAGxp1/Bd39xcXUlzaRqWYRSiRI1bqF3S7nbOOnPSrep668MjW9tfQ2MjRjLzBuDnIxzuxjrxgisG20WdoEiv5XnupRmKKSUMrYP8AfEmSQvzADmtrUE0pLiO18QzW5URxgBTJuTA4ySoyuByME570AZ7aPd6u7S3Wr22oiNlZjZzAH5uFKho2IOe3X8a0dM0bVbXUfLa9jfecvAzrtkSMhsMNvU9M4zz71Tt/DXhK3vkksLhn3nzInMZVwefugZHBHYVrSi609WxcjzSTKoZN+FYjJILpg4A5CmgCK0vIop7gxWRDHK+XHbJN1O75sqTkkfw4OPTmupsdX1eEfZGs0ZwrRqH3CIYGdu2F+evX2rPttLv5401Kyjhvp0cHfGzlATnBHG5TwTjPvWvpX9tBZv7fjXy+SktnK6SwlgAMxup6juTQAx/E91p9vFbXttc2KRK2ZrRJTuV8ADdICPLznCnjmrVnf6G8jT6ddrNekja9sbe3mHPAYAAHAJyeprS0rwZY6xfRXTz6xCA4QXMQ81wMZ6KOMYOP3ZzU11p9r4c1g6dpqXepyXQL/wClWKLNtHf5lhOCuehH0oA1L7w18Q4Zg+lm4iiMZQi/ihl3c42h1Vo2wehDDoKwP7K+ICWjXmp6TOpjbCXMsMCwndlWyd4+YZwoyOgOK29O06a6KoEutGjlLSbYZbqKF9q7SY41uiqrzghckds9K808WW/i2TWYLbStbkugHDrFLJe7jk4B+YsOnQqc4oA9A+06dBYeXbaLZ+bOwcTM7pMzN0UbQ3X/AGc/U1l22vvP9phmsn86JtgitHurlk6bd0ZG089vl4PBzVzUNB+Iw+yr4ki0YSIiTg38rkNbooX77BHXHsec1VuP+EtvYG00XtlFblyqG2NtdBk2/wADO4m4ONucH3NAHM2V1czPvfTr2F5GC5SCeaJAcjc+8lhj2PbOK3b6Gy1KEN4oWaWN5A0f2URW6sucHh3VuAMLj05rn7q48WaU8aP4lmt45CxMEEEQddnU7Hdvpjv0qjY6nfajrDQ6r4xv4UUKytLBFAi5AGdu0ocZ5xjHWgDs7vwzC1vaS6XZz2tqC77ru8QTnyzzgh5QM8lTjBpLTwbbSK12iSC4iBupI576Ly3TIyWEqfJgZwQckdqZovh/xmk9zc6JqUev2MkoT7TbSzCZGOATGFRFPGeMdutdzFfx2HiCBPFt14k1GzlVIrsi4klfeGO1WikJTZ64fgcgc4oAwLK/8W2l1IPDkVlEl1ukiL38WSsC8EMUyAMkkbeexqfS/EmuSFrHxoNIkllwJJFaS3ZTKpKu3l25D44DYJyOmK9Xs5fCUE13eWBJhYIItPu7KNJnbBPyyJkqrEgBd3TmuM8T29t4kuLSC7tZbZbXaq6fBqEaLuUKGLJbiWRWIOQCOgPHagC1aa148H2PTtBtV8qVojCYpYrgPCGwGKTDeCCN2wgEDJ29Kdpc+ovc37aubyNkImeKJjDPMY8PlEiU79x5G8AcgE1d0j4YJptm11rF/KFAysAiuzO4l2sqjzI9uMfxKVJGcYFdvoPhHQLaS41mzj1pUgfY/wBivJrbzJCAflEuJlQ+gc8gDtQBgT614UF1Fe6z9itrJLUQ2w2/Z5YJsF23GOJJj1xyW3E8E9RNB448Cale3knhm21C4CtHGtzqAkkWOEvmRtwUSrxkcvuIABx1PWrpt/aW7pcWWsX9jZst1GxWeSWTHDMGb97vXdyQducZGcGruu/E/wAVCczytfWED3SRxXG9bKaaNdu0xQzRsWXaudzqisTzmgC9F8Q/CEyidNaiOyQTiUXTGTaFHmKkTQMWCE7mR+SSSDnkS6n4l1dbnTrLw9c2a2Fur3p89G3g7mJCb40LNgngZIx7Zrw7xR8Qddj1hrrTPD2m6vbyyyOs2p/2eXj8yTJ+VGJVyOjbVILE4PAH0T8NvEWqeLNK/srxdpCeHjbqyRTw3UV1Ybi4KlwLmOYuASxwpznpjggGY13440z7df6vq1217dSBoJ7LThdW8sKlgvmNbpMgYDGQCOcnOTXTzeNfE7eHdMl0w3DajJfvJ5n9pm3nfLDaPJuFwcHackIxA74ycR7nTdInv4rWWx1eys5d1uNPLWkCSAHerOblifN3BmXoeeBji7petaz4xgsLO10+Dw9HHAY2Zpre7hl2gEFovtQcK24c46EdqAPXvC3iS4utJtb/AMb+JtJilWQSz7ZraD7+90WUxBiXGeXzubPGCpB3k8b6p4s1yfwlceJNGsYbfEkc1hDFKVmCkrsIQliMAuNmTwQQRXx3b+GfEXhnUZGjufDiXLzfLeLLBAz7ckhohE7lQSc4ZSOBnFdgNU+L10rJ5Pg2/SM+QRBeRWN9EHwuzzPJRxhBtBBbPfNAH1cbTxjoiz33hnxzPqFrNa4lYRkXFpcrGSJoI4IdkiKSG2yFXUdPSlsde+M3hfTJtd8QrF41kDQeRbopsiICAVkkkE24SYwrF0zwBjvXxbYWPifwrrkVp/wjejXlwqSRyxarrIvPLjEoBLYhVo352IQwJ/Svc38V6v4M3SRR6P4LmvmMbwahqzz288VuBs2M8pfKjLHKkDgYGeADpbPxj4ofUZraL4Q293eXQMn22bcZSrElRKbKKXzBkjBfHQd8V2c/ivxPqdvDc2eitpF1bQNHNZ65YTyWcbSLsKxv5sOUHA5+YYyVPUfPtz8b/iB8P9bS8t7Pw74hn1Nnx9n1VmknDDdGSkag+WuN25j7Yrqr/wCLuoeMbR21Twt/ZszWu69ezeW6lRNuVAjMKjkngqG45OOcgFfXPDPiGe5s7fU4UtNfuHmlmvLBNRtrCKCRMAAW8dwucKASVYgnIIxmrt1ofxDj8GJa6jqWvanqEF19nsTYeK3BjOwr5vk6hFbsFKsB/GOcjBHHpXheb4f3+n2s+u2tyl15DRxXV5BcNcuJBtUbiiIduMqM5GeeCKoX+lWPnX7eINT06O3tJkkgZDfaeY4ZPljWYAzRBeCPvDnn0wAfOfw0vPjj8NzdvpVlqcU0xVVWbXY3M7ozNMSJY7iKQOGOCNpyM5OMD738OfG3SU0v7N4r0lfCst88oRNQu/tskkkaZkCMsUQCuOcjAPIXk18sf254c0m+vItehsImknUeXayLdTrIBlZmjvCr5AGSR24Aqtrd8fiRfWy6Vczafc6PKju8untPBc2r8htjPHhSrDOwnBGeAKAPd7b4pWWoj+zvC0t9Lax6k9xJqemX9vIGKqGMY2XLT20b8iPzAQOhParviTxX8OvDOoS+JYL+Wx1y8+Vjd6+sEkEeAzI8vmrDF1xgkMScjJyK80/su01iSTT9Q1O3eLTY8vaNpTJ8yY2hfJZgMnaflDk9cisK28JLZWupHw/pvh3WIXSGSe0EEMcrMSzJ5kUnkkMcg5ZgQOpJoA+kI/iz4fm1uze6CecA3ltH4ns7zzMqR5UG2eJysnGTuznAya2PD3xCs9C0OPTrqDxTDBdeZL5kUqXlpvncs8e4z7sqvAAbA9T3+PrXw34h/t+30/WNA0y1nuIC6SSyeVE6kKPKHkpcD5TyGMgK/wAPFX734beJ9RjVdYuLa80eKfzILby4PsiRlR5rq8cIbedoAYuuMCgD6W8VeLPA3hPQLrX7RLiS9gYzwNJDBbPbSDJ3h5JPNkKjP3G7ZAOas+Hvi61vpFpreseILZhcq5SwjeIgwF9w3lnLLIQfm8xVYDtmvjrx/ocVxZ6fMbPw7ruk2bJDMHgF9NYkqArbYQJGPJUCRWAPPSrOr6JpsvhSSztfC3hSw0m1VJri5e8u4GmKY3GOOKKORVJU/eJz6UAd54v+MPxE8b67IPDutXvhrwvDMLV3lKMZYZVaR5IlSNmc7vkCo4459hjy+LbXw7e3GnW2rS7PLjhtrrTEFlPLc3AGy4mu7mQNI4xvZihww5z0Plmqm/uIrSbwlYJZ6dE8X2e30y2N3OYDnZKsTyRlY2bcVMpLKecDqZ/FlgNO8KWmn6hdXkM0kouFlvriMTlATvzB+8RWckABkkBwCT90UAd5q/xN8TkadqejX9/qOpac80Vvqy3dpO7qS0TgLBp5ldkZVLkgj0bvXe678RPh5Y6KZPiD9st9QsQlut0jXheSeRSyzPK7RzrIGyVURbU4xjoPirUvDMGl27a5cy6gbOExQ7isaPPldyoGNqkaxYzuYSNzhduas6D4H8L3M93quiadql20qLJaQXmm+XHJLJjYN7I4dSc/NuUtjgY5oAzk8M+HPG3jC7vtJ1TVpNrFVTUUkeaKUsBt837REWHzBtzke4r3W9+GR1PS4tZsfFXiWC9hSMOy3i2NqkYORtX7S6uwHKjf7elfNi/DvWIfFN5pUNtFBKIi13OsISC3lkUecDcTNiMptxlAo9D62Nc8BLYaRbzaNqV+HS4Zp7mK8jv1miAym1RLEAq7TkBm44680AevXR0OzvYb67+K3ibV72CVZI7VdVt7T98QThElSX5hkjLgHJODxzxLan4pv9dXxFFpWuNYMjwJJc69CjzXDMSGxbW8Mku09N+QT14OK4HU20bVbuO81rS71ZoohL9p+yhzdFlALSb55yAGwQVf8O1bl58Ptc1+0s9O0S01WJjbNcrIi/LA+dyN+8jXeGIHAYFT1HWgD0Cy0zxvNZE6tp+qacv2r96/9uGOTeyGNTtX94qIudxYHPYZrV8SeMPCWjWATU9OvNRza28FzqG+WMRGEsESIjybgsXwfMKcjqRzXhuh3fjrQruSy8T65qFxb+XLa27LdfZrXz1wHXzI4FXgMQRvzk/ermon8N2V1MfEAIVmEMkcUkjKHgOSWRN/mYz8u9yVOc9RQBqaxB4TudWg13T9M1feY9jSalqMsm6djuExZ3hVhnaChLBf7zYrm7O7itLm4uNQ1T+yDtKQzIZb2Vy25SWMDFUU5Jz17AHNdNrGs6Oulw+ZMkcNssoERgSSWEMTklGcMXbADbixAJ6V5U2ttd/abm1S5tBhoTO0W2OVc5QFFYqMEZ27RQB6qj/DbSILseHL/UtQ1OJwq4sVkjWR0wZ5ZUQ7tzZKI3zDGc5Ga4oeIdS+1S3ljd3MiGURysF8tise7jfLyqlWwRyDivOri2n1SxlWaVBcCeMxzwSNB5j8g7wqneepznjuegq0+g3NpBGNQZfmVWkXzlZyjAbD88Z+hxjH50Aeoal8R/HN4s+vWl4LIups0e1IfchTOwMAzY5/E+leWS6trFpJZ3Ooz/ZTCdix3EcdzJHIgJAbK7lDHB6AZPrWRcRLOUtrQwSvGxQhGdgpPJJA2AHA688VYtreM266fEDKkx8wtE52tyAw5Iwfw9qANm68RrqVzeXeq28L3SxPHHDDaqkC+anykqrKASTn7pbPPWuHVrCNYpwts0x+V4YwZX54/iORk8EZ47Vr6xA9xcQxaS10IycMskioxk6ZAUPwO+Wz9MVTXRVsIlkeKcuSU4VNp/vY4OSB1JA60AUnjkVoAIWt7fBHmC3wWcnkbiSWP6CrButRWMW+m3iWUKMzEzyOqAsRnI8tstgdVqK/t7W3QpHP5rW2C6ZA2qedoHX/AHsD2rCgt0vQ7Mw2ucAALkevJC4PsKAOtgg1a5Blh1C2eOI/Kq72wRyXJ27gOccVmalbm01B2uJxcRSgf6Q+5Y2Y9flLZP49e9S2kT2Nq5iXfGo2PIZVwVPRQjKScHk8Vg3F4Y/nRZFlbIIWNjhex6Ae/T86ALU9w6yJFHYPOygHzPIc4A5wOSAvPX3rNa7BmLy2bGQDHyI0YBB6YAx9eaki8ydz9ounliJ5QybXPTAII4FMF8gkNmYdzRBsKpUkhsHk43ZHqKAKE11YwogWF38w/MpiJHPX7xzkUvnXcaxeUtwIHJOAvQ9WIAAGKuyMsqMv2dVk2kAfd3e5AYZ+vNY8tkyzqkZAVgCdmGIz+OKAEM1iVw6sjMSWDBScjp15qmGs5pGeI8A55xzj6jn8K0YtLPmuk7Mo3csFXgD0yRWgmlLKrPBMCnI3SKFIXGScZ/rQBhFICnyYBY9RjvVaZ5LclotoBPXaScDt71eaGCGTZFOZzu5Cqef51FdLghl81FIG3Ibt14xigCCPUhD0bD9T8h3fnQ2oblKFlRXOSSCCP14qGYwHD5cEN9RjtniplW3nw6leBzuHX6UARJeRoNyhGK/xHIP/AOuoTfZO7CqfqePz71Zje2iEixXDMDwcqQPwGKrpBAcyyytjqMJg59uMUAI0olbzNxw3cnIz3xTJGGAqyE46Fu2aYyb2HkxkkZJLNgD0PA61IkU7sxECLu5GCSTj8zQBXLKilJZCc++OPwFCmNcFWJH1wMfjSXFhcNl3AXPp2pv2QtjAAx74P5k0ADGEjcHGe+TyKYHt8bvmfB4zkUksLKBwqsecl1qMS8Y8xcHtkfpQBG+Xk3DIX03YP600iLP3T/31/wDXqwyqF5Y5+v8A9alwezfqf8KAP//X/Gu3ntZ0MeBIwJBLRnn/AANL5KMRsjfGOgX09hVZW+zoXh3uc/e6nH5c0yLUo2Aa6lMLKflbHQ/gRigCeUPwpklHHC4wMemSOKoyz2yYzIyuB2f5uParEV4hmLi7SdTwUliUgj8TjNOuLDT7o/aFtRGpPWPAA9sbqAKKzWs43HO4EZKkn9OlT/a7clgoVuc7nDKcDoAen6U+FLGLKxpu7cjJFPNtG5+UY4yQFC0ALBPbSH5ZTFI3XLgrn8ulX4I9imU3TNntjAP4islrS1Mp+8Nv8OQ39aljtbUqyyPIvOAzFcfkSaALDb1UPLJJtycbY8rj14OT+dUrtrdiFYkn+98y/oWP8qSb+zYspFcyJJ3yEI/kKSOe2cgRzBnHbALH360AWLYQlGRoo/8AfYFianW3jP7qMIcnI2AgD27ZqqgEgLkAg8AnqMfQ9/pWikQljEalkAxny1UnJ9SRQA4x3qxiKRhluVyxHTjPJP5VaRb10VxLBvI6MMYx7nkmqf2OSOILHPK6A58vqRg+mMflTZYhIyzG3ZXTozqEK/qKAIDHfJNtQozHJwr4GM9etXF+1SW7+XJbISPuu+GI9e/frmqhuXmLwuM7gedxbH9DUYWCU+T9nicrzvb5e3pgUATLAzbHSOIEZBMTbjn15xx9DWxGkgLxz+erYxmNGwc9+hrCSbyYxuaFFDfdUZZfqSKSYRuzStNEMYOCdpYH02j+lAHSyyXUVruZBcWsQUOskYDD6kov504X8IWONo2MSnO0nccemc8j0rmwLmIj7NdIxkXOdjYHseeR71rw6lesiLeYkkTA3iPIwPQEjnHvQB0Flc2qSGGKSKNpF+5N8oJbjGGBX+VTtbW1yZFW008SAfMYXJIHsowp/OucujeXU8LzW8k8Z+6Fk5x6socmpLe4SK4MEtqFV1PMTBmOOnDk4P8AnFAG+be1FlLEqwEEZy+8MD7Ddge+K5qOzS3CSRTOrZ3/AHjt/AnINXWtdHuphLPNLGGAOwDB4Pc4x+NXv7M0M2zyQGR41YZDSlep5YKeSR9KAK11dalcM8016iSSfKhj272PHXA44HTFRxXmrwvsXUZOgZUYDb8vAGCMrgE1pJa+H7S3E01xNLE4JRY2xgZIOS3AJx3FSTW9gixujrJFLHlQ6pIdrdjhAVI9c/SgDJOtaxBlpGRmcFEfau7B6Y5wMV1Q8W6vcaWsWpRNdheRJuZEGeuQFYZPqBXPjRYp7R2kthGVfy8HoevQ/T1NbFn4PvdKt4ruSOW2guRlHEyhAOmShYAnPSgCddQ1G40yOR7WG6t4sLFtIwM/eB+VCDjvVVjYyL58yyxMR/zyMiqeoAOc569BXTJ4Qu7y1n+wXNpvt2JIebyixJwGbzJQDz6DHviuK1Wy1HSbhY9YtoRIRkqs8ihlPddhddp9RkZoA1TqdlHEC0C3cjb15TDDOMHkZA46A/lVy3e91Nwt1cRxRyg/u3VGYuvCgcMAc9jxjvWQieD2tJ7qeOSCbaTGnkNcgPj+/mPr2yD+dVINS0e2tw6XjELHsCLpzNtLZ3BmLY6dCCfwoA9ANlfwaYjr9lu0DkmMf6xtnH3RHnGc4IbHB9q52yv9VtrzdLptxHEr+URuVWAYZ2q028nI657VkR6zYXN3FLcaszJGy4jtrdzMqDjYFKYUn1JIHoa6m68UXVvAx0mG7kmddqtcW6kSeozJtGMcZC0Aa019qExlOlW7Wkduf3rvIBM24YyOCjEf7AH9aoQaj9tvoWGrvbojiPLBYmJzjcwjYvjPXGT7VRTxa0fkyWjy6Ldxx75kklzE7L6fKQPUZwOaqat4y0a9SBbjUYBcq2/KBirNnnzCq4HJ4+bgD6UAejSiZ76b7N4pu1QqVm+zSAb9g4wdu4LzwSCaQaT4vjUyWPiXVLi0V/Kt5Y7pWB/vdt/AI5HvmuOg8QeDIfs1lLeyuFbfLcWd2YZEB/hCyKdwGTgc+5rorLxH4YneHZctEE2CJ73yJ2RSCvXAK5PJAXrye9ADodT1jRtZt4Lm/wBXnh8smYRHEahDjc0ZBB55+7Xov27V7u3n1m0aBoECx2rcuxLnn5Qwdcc5ABA6GvEPFXiOz0Wc24vLxrzcMSQXcSxeVnICiJfyyR9Ks+HPE2j3Mc2l6jIVtr4sgxco58zqWJIXDk9wwz0oA9ig0u88iS51fVLXTIXDNGXt3uJWJwDu+cAdcHIyPQ1auV0/TLMLaa3ol4BEHu7nZPbsgdsn5CpUEcYKkj0HNYl/FdQeHHkfVpbdJ7jbIiyynayfc3TINsgcAfdbIrkTq3inR3Ww07xA00N4Dut5UutojUZYFyUYqe67qAO51PxJ4VlvrDTtFii1CaUJ5t5ZNKi8kEqGK9vUA5OeBXaWmqT6I91ZSadbyCWMCJZbmXzHjPOcmKJOX6ZbHqa+erfwP4vvbAajZ+IbCEvOoVJATKGJ43A79qjsScGunPwk+J7aethcxabK4kf55o5VuZiuHI8sqN21TkYHTjPSgD1CXV7CF0gtgkM6oTJJaajGojLD5xL5LhSSQRk8jvXYadpV+llLrtskb28UCTyedeI7nIwyj75AYcgHk9R7+X6B4H1vwzp1xb6vHpiLOq4hSExmQMvy7lZnU7iO6cHPQcV7R8OvDul60lvZXEMEc0GTdSRM9nLiPBGfJeNmWLgjETDjAIoAwtGW+1mGOXZJawRxieT7TDBPb7S23G2RtqE+uR36AVvarpmmwFp3vrLfbp5UjPZS2nlyHoPMjEisTnHOB7jpXovieb4TadbLrN9rF3eavuy9vaTCaUBQx3Hz5FLbyTnCqSvfoRxeg+M9Imjj1bXby3tbFg6uW0qGSfzA2Fbek87LKuBg7MY9+aAMxLPXNatIL+y1uHT54VZPNQwxpKMgYAk3MqsMA8Anr0rtpdU1SK3lF2qzapBGdluj+fh227SfJlVeSCWGFPy8g1yEmu+DdZjh0S0u7Wytrd2k3ajamGV4wNyciRHkYHAGCOGznjFcxr97oH9s3F3LZadq1pMUt41gSaCdJh0YYnLknJBzgnqaAPVI/jLrVs50WW7Ah8sW6TeQZFSTGCGacSbsE52Pnp1PJqm/jnULDQ5bGz1eCR4GLy+ZbaVZxMm45UbgxB3A4Cgdj3Febz/C7wz4vikjnuEsoIEMi2ME06t5owTlv3qKxHXJT6cVb0TQ/AXyWmnLc3eoWkgWJYZJ5AkfQuXffFIN2ckbR1PA5oA7nTLyx1iOTxbdxQz2sUH761kiheaNchd6Okn3pG55TAHOBXbaf4u0rR9Ns7rTYHkiglK75I44Iy2QQR5X3tqkYbK5xjOK8Zv/AIYNq+r/AG67e6lsikjRFYmvbWLadhk8tblix3NlQBwOxqHwv4es7fxxa2U+o3MmlXMMkU8t9bKZI/K7xRMMwnewAcr0yAeuAD27UPDHgTxtqMviWw8RWqCMkyzTyTWqb4yGKoWk2YLDbuQ5x6Vw1h4u8JWGt3Emo+ELz7ewa1i1nw9HPdRXURxjczQBdzqMHnBznpXoQstXnjW909zatYv5VsllA1rOi/K4LI8hjKHg427eSw64rRbxp4h8L20mkatpmpXNveM8kkMEtl9qJwD5n+vjZYz2jRPlwfmFAHN3EWmak0T6X4a1+Q3doWt1vNOtrNbdl+7I0vlk5ZiBnA/Xn0v4Q+HbHxd4dUajZ2v9txSDfBrclxDftKm4ERPMgAG3HEac+2K8/Sw8JfEi2stS0+61vQrm0RgJrW4cRxqSWVHaF7yNZZDkZL89l7V7VZ3Gr2emQ6dJ4m1S7huTvhEupWyzxNGuGIJgQlScDlTz70AGsr4h0dXtrvw9fayJHktYAL+0ieNSDnJuZwsqqRwDGGJA+h8qvP2RdQ8VQr4za/m020hfzIlvYGluVwNzDzXgZWXHARwAcevFej+IbXUHsJV0nxdqF3q0y7JII723aSAsQSchGxsPGdo9jwa8V8UD48eG/D41S5uGvbCEyLPHfy20nnorbRiW08hnxwAHBbrgYoA1vDfw1ksL+O0sU8UyJMXeK4+zRWdrNOhAUK8ioNmTkDyeeuRXt9h8GfG95cXOseJtPtb2ztYyttJG0E0ySRja6Sbxkl1+8NoAI49K+edIsvDHjWCFfGWtSXF3MPObTbbU7hvJSP5hKFtXjwgz1cZXv0FZWoeA/CEniC4vfAfi+4m1G2JEwTxJcROS427fKkaU8HBKM656D0oA9ITTPhr4f/tOLxToOl6DcNIrMNYvN0c4yMTwJnG4HIwNhPAxio9T0+81/R4oINOv7m2kMclncWujWklvIoUYkbzXMZXb90rkgnLV50nw5+KHi3dcapqTQ20YcSDUYkvJMRADhAXZ0OfuA+5HOa674b/A7whorXtt41vtMuLxd4hk0sXVjIu5QVLC2udqEDI2lOc5z2IB6TJ4a0TQZf7XvLtRI+yPfqNlp0s+ZgqKVaAI6sR6sdqjO010tz4ystE0iKyt/FnhltPcAXyXNxClwsCZVFjihiALI2CvmDnPWvObTw18J/hxJLq9nptvqbbPJFvLeSxyysd3+teWdIpPlAAI242gYOQR8z+I9I8E+I7mS48KfBrw9dTSzSK8sWtSXEsSZ4LW1tfZY8Ekt1zwKAPp7xH8Uo9c+zeHLrxx/wAIviVH+wuUtFNsvDvFMFw75OBh8HuO1eZ+JPGPgbwv4itpbzVtc8RSwlt7xQR3aPE2VaJlZnic7WHCxjoOcnJ831T4YLDI0vi/4e6DplmkbKAl/PYvCAmMCYCdHYEjOeevFbXgr4SfAd76G/utIstJnK+cjx+KpC4DYB4UQOcn7uM+5oA2oPjLq3jVoLPw54M1lfscTRxas1qlmw7eY0UcZjIGBiM8dipNYXxA/aHufCGn2Om6l4K1eV1hjgkl1KOOC3uoDhZlEVukZZWIbarrgHn2r6P8H+AfAWjWJ1qCDw3JYyEmF9Q1K9mzDuK7hM8gDMewwwB6HPSG7+B/gqG2l8VeHNK8MadK9w0KG5vprhbguwKkNcSyHgZxsC89xQB4nonxMt/iLp9peaDoen2c9hdK8CXUeoWNsix5WIG3ghjjmIySA0u0Z5x0qTUfiP8AE2wjv76yPh5JZbmO1+zQ2b3T7XGScHeqrkqSCW9Ole1eEvBnxA8QQeTeavp8PhiC7j2wOEA3wty0XkRFxExGP9ZlgBnk5r5S+ON18XrrUvPkmSwCzzLG39i29tb5j4CrLcSM5Lddz7SeMHgCgDvNA8ffEPw2/wBr1aO1+1SyJJ9rtbazjmhC9FiS4lTesxGSWAIycdaoeNfi34ijg1DSbaHXLeLUZQIIoImhMKS4JIktfOEoc88FeegIwa8ys/iL+1FFCLybRj4q0jHmNJEttCDIw/ikhaVTt/unp3q5N8bPjJpLvqknggabfzQJFaTz2S3LbSBv5G1fmxnhcHJPB5oAxofHmqWniPT9I8TW3jbV/ssMcSpHefYWFv1jQW52yMmR96QqWHGPX0DVNX+N3jiWWXwhZ+MrdZ7kS24W0MMdsiYV8SrceSQUBIATI5+tU9D+OOv6Xdw634v+GX9r6kH8i7vI7O3IUMdx8qVixVwSAqkj6jpXRP8AHK98YaXNb2lprOiat5bp5Mq4SCEPlXg8iIcDABZnOM7V5OaAOs8Y/Cv4rS+HA9l4w1eSR5I7e+tdeghvSiyfMSEgY4BIU48tmxjgVxuo/C6xW2sBeW/2qNrdZ72bWbtVmjVMCSO3DRxpEC5YoGiJPvjBt+ErqTQ9Eu9J8R393pz30zS3D3V1du91v+VWbCs8aDAwRIG9TjivL7rW7u6uZNNXxLpFtA5IL2i38s80SdiQsgiBxuznOSSTzgAHba/4D8FWGlaVo4fX44pt0ySaNb2t27IWDYkuEiIDL93ABKnnnpXHXrfCHW7p7TxvH8QJtSQtEP7Y1BI7G3OVjRmjj2AbVAz8o68jjnxTxt4uXVbmGMeK4mt7KOOOGHT5NQBKKcEE7vlwBljgD0zWHD420adppZdTvbvzXRDFa3d6s0mG6sZFbOMAgk88UAeq2Hh/4deGobkah4hvLqCFmFvafvZIESUbsCRA5YjgfKME5zjpWhpes/DuWcppHiSKwNwxTzdTtJpvvH70MTRkj5s5ZST07Vn+C/FmixXQvbrUNYMMMEkbadKZprj9+NsmyY2+2MEc7g24dmzWlfxeEdLsXtZ7S5ivj/x4td6zdzzW2QdpkiSIKO3ykgUASa2vg27uoLk+JbbU7uG5SAWscFuquNnJJKIrZJ/icknrUWkeBvEF5f2moaJ8kgfzUOoqkMLKWIV1QlI9pbgBMrgd652zv/8AhXsNpeaNrWiQ6zIy3KXj21zfzWzvxhFKBEYAbmKq/PGT0HF3Op+OfF9xcXN94mutUuVlJ+0qtzHIwYnhcRgRJkkgcde1AHo99/wmt/qUlmILRBLlDPaosMaSxsTvMuWkJJxjBIPYcCuW1b4a3FnO9zf60llNNIZSymWXduz837tZRzyWZn75xzUWrHXtPjih0y/jF28Sssk080z7lJyzAyZLHJ4C49ia5i08OeLfEiXGp67NJfeSnMs0shWRVHKLHscDAx9OBigCrfLpEUlzaJrdndLGY1M32pYWbIyflPzHGMcjOOtdhZaLp2oaYLia7ijhidXV/M82ScDBJEcbL8mBjlhnp615m3h17C9aS1lktp2KtbxxQTKEweGLOo7+34V0Fx438faetzpEt+9wJUAlOdk4RflEZdNpYEdVBxzzQBvtpc1rF/a2qRWMFq7IgeOaZI4vMG4M5VDkqOoBbuM5rl7XW/D8N4LGX7Rqa/OVkt33gbs4CxSkYGevIxnODVdLvxRftHDDDI4kTAVN9whxk4I3kAAdQaja38Ql1E+mRMY2KMJgY9jDtj7oPtQBF4gv7OFjJpryW9tKmHMpUyzYGANsJZQA3cH/ABrlZPLlRJbiUPsXeUSMjbu7klgBk+taOuXF+xS3v+TGfJzncgAJIRTkgKD6cVz09rcylY5cGMjaixOT3J9wee9AFC61m0gizDFAkgA3MVEj88YHIHFZkuuLGhMU04bdnLImMEc4+Ymt640OwRojCs8+GxIshVQFwMchc5zn2Fas8ei2cDCPSojsKO8iSlyAOCpGAASevBoA5uHxFCirJJ580S9l43fn0P6VVl12K4cPZ2ku/wDh5BPv1HNdxdamLjEWm6ZbSh1CgMjM+W/2V2gkerVzd9datpv+siS2VztaCMICCBySqklc+9AGX9tuZJNwxbsT8qzKWbntnGK0FvLvDGQWxYDljjPHoB3/ADqmL2Z7cq0eGzncQTwevG3H41S8tZMSFwRjIAIBIHt60AaD6iEiMbAZJ+8ATnPboP8ACktNReEhIVOCTn5uPqORzWbMkLKfL8yPv8oBzio43tmjbJZhjAxGAQeuTjFAG096UfzYgq+20HJ/M066upbiJIxI4YHJQjCg9+lYsd9LBHsijRxn7zouf5GqEzXDkuitk/3Sc/oAKAOg3KqxqAjfxbQu0AZ59qrTN5xAiYLxkDI3Z9c9OlYUUF4ZBIvnDrkcNx34q9BC7HEh78KyMD9aAJFt5cku7EjljnI/wqNp0hbHvwDmrdxZssSsCXVupxtIx2xnNZkiS4JhUszHq7cGgCcXruxHmEZB/v8A+GKgF1k/uTIBnHyggH9KXyL6OMGRRGSP84pqwqQMyF2xk7WIH/66AFaadjtQsAvHY/nSLLMjbnKFQOPWmSygECGMntz1qNuVXOd+cbcYGPzoAmaQBRuiRs9PlHHvmosp3Vc+6801hIr5JQDGcdT+QqMJuyQAf0oAmZxtyke49zt/xqMLN/zxf8hQySbQQF+gzQN/9z/x5qAP/9D8WkuZk+QooA4JJ/8A10jzXD/LEqFQehJP8hUEcqu37nJLfxbeP1qxm46RkZB57D8aAJoJ8sFuoEUDrwSPyIFIz2q828cYJPIPP5ZzimlWch3SMg9yec/lU6wK5Plx78emOKAGhpYgGYsvORhP64qMyLI+XlKN7nPH021Yc6k+MxOVHyjJJwPoB0pLm3ZVWV3VDjjLkc/TmgCBy5dC5YqD6YBH0GPzqE29kJfNNuG7lX3E/wA6ekjtgBxKDx8rYH860hGfuFlOTnk/1IoAy3s7aUhgoQdgE4/MirKWkEYzC4HHOxSP14q7JCFhKLHu2kdZEH4ViM7yIP8ARUJUkbV/eHHvxQAkluAcxSNhvQZI/NqljSC3/wCW8+7jIVwv54pkN4zMEa0ZVXoFUA5796Zc3F3ORH+9AH3UKAAD/gPX86ANG3ubpJiY3lkTGT5kgxj60sgjd/MMMb7vveY+Rn8+n4VBBZ6i+MS7UyGyyt/+utk293cTMJpID6mPfn8OxoAgjS4IeOG2tUbOMcsfw4qhJbXouXyYST/Bt24x164P5mtFreQKyQb5x/eXjp7E5/SolNqhxJA4lJIJ+8QfrjrQBOljc42+SF5ywIAIHtk9/XNPF4iPt4zjGx8AAfrVy1jmnUjjgnaWJHTtgDkntmpY7SK6DCUGFiCVd41JyD65z9OaAIbfJdYkZo8dQOhB7jGBU1tbSTs4jlUrFn/WOUOB3HH6Zqm+nAOkyXpTachTGMbvYYPHtUjw6nBGwVmBIyQ8SoGB99vI9KALEumXysPIAhGQCckDLc8Htx71K+nWSGNdTvABtID5faTng/d6DoeayFudajIlRVU9gNhHB4+hpLi/1K9YXN5bxynd8wKx4z0wc80AdLb6NZSq0FveGTy8lvKIJIAzhQzKCO+M/hU02jXENusmmTTo/PMyJECPbMgzXP2useKbHc2nWkKjcpYKpKNjpwOAfeuqs9Q8Y6yS09vbONuJRuWJgrEdRySM9CaAOdgkdmaK7to7hHYq7FVCpn0xJ+NazaXrenW8ccBNraXCqyTecJFdQeM5baOe2OK6WXQbXMUnii1lEKfOsMW2FgOo3nYPlx0OTVmw8R+GLeRbe38qHyuB51usowpOPmXOeOMlcUAcu1vHC1vBdaspkeMFvKi80KST1Ve49qtC2k06YLd3hezc4JEM0LMOq4UHHynkCvUNX8QwzJBc2uk6d5MjAG6USOx4x/B0BHAH8qybrVY2sEFxdaZCRlRAnnQbk6hidq5bp1J+tAGbpepWmuQRx65d6jcTRbkJjlliBjH3R/EnA45z27VaGkeFHtS1uL+3l+XyRd3ke1RHklgrbFYNn7u7isGza01S7Nl/Z9pfuBv2RSXDzBAOSpDnIAGSMH1rubPUfDVjYPHpsVnsxuMc6SOSx4w/Jx6A47UAY9vb/DVAIp9Z1BHjR2mW2TCtKc7fu+bkZxyufT6cXqY0uy1GRBrV1FDjzEkvI5d2cAhcBMjP0+tej3l/rV/bs2nWpe8jcShILZ5CEAAyoAwyjI78ZrAl+J/jd5E0/XLP7ZGCFK3ulqxKdCocjdk9Mk0Ac3Y3fhK6l+zve38Z2j5rZmAlwc7SVTd7529a3NR0fR9UtzcaHZXkNyPl89dV+Yq3IykiK2c9Rn8a6rU/Ft/rkkD6D4UaOOI8wRR28bqMc7WEZkI/Kmtrmo6XG51nTYrASMpUpOpmiAHHyqO59+vagDgtI0n4f2N5PZ+OBifI8pmuvte7qGUm3YAN6ZOOxNOuPhl4Y1TV0bRNSjlsVIZViikaZ0GC37rcWU4yPvN09K7RWn1jTriGG7tI1+XYYULXCA5K72JUfOepz17Uzw34X8baZqiz31hd6laTgmQXE8UURjXI3RhlJG0kHg0AdL4U+GXh3VNYXQENi6TOGiguUlFyCqlmCqYcA4HTP4E11k/gD4dR3tzY3ehafEUOxLqyM7y4HVpEBULI3Py7AB6Vs+GrzWtM1aFtMeBLdtwiu7tiJIvNHOE8plO055wR9K3orj4q6w19d6DFoVylmp/08Tx+YG3E5JxGxzzkAD60Aeba4nwa1ye30XQtDgttShKrJJe20sEMoUc7mWHhu4+bn15ri9S+G2l6Zcx6fFZWU1w0ufOtlF3EyuM7PKDsWZRnlQPzrvdX1L4sX1ss+p2un3sdvsTczJCkZBOF3SyliDnn5TXMtqPxN1S7KXFno9nBZKFa9tLZJfnbHLOFfLnAyRtxxz0oApWHhGPw7qH2yTQrtFZMZt2ubWJX5G5jLDJGM56ZOK663s9B1O2uBZLqBluwEeWW6tWgiK5+TaPLIYnOCqnrzXO6j8PZPEUMa+JtcvJ3uM7IUVYrYOGALL52F2gHk9Qfbms+H9ndvDupibXXv3JUtAlqFnMjEAquY3AKHPLblHvQB6DdfDbxLpbQXug65dGbLxXRkuxBJHImAXjX7MVdJUPyAPuI6gd/O/GGv+J/DepJofiWXVtcghJYRy7xvRvvKTsXIwccHoBxivonTNP13w3GmjLE9nGI9zW7SXFwkHQfKXSVgBwf9YwHGM9K5NI9V1DVrqfSNS0KVhI8aw319cSuAFBJTZCrKx7Aj9aAPOoNW+Fl5oH2G40m7hvJFYp511eNtDZ+SMKzBApY54+YnoK0rDwl4XtzCtpc3CSjLxvdm6jwiZ3riWOInaOBtY++K73w14Q8WRPMbi90e7s5o3eVY5ZRdRxuOArlEZ8EcrJj8Oteif2FePJHotvpLw3FvAsdtKtn9uRbdV+co0skasoJ6bjnpzigDzTw34kTwzqh0+2vdSvLq+PkabmTybdCPmcGWV3+Re4Gc9yK7zVvi7p9hcw6HLZ6XaXOqFT+71hG8ts9XlaKRATySJOh71Lr2g+CJdATQ/FDa1oN3M3+h6rFazRKjt975bS5kV0b/aVXHQnvXzrrngbxP4e0m9/4RjxJqU1izfu4p9MuWjnOOqG5VwCDnJXkUAfQdrqXg7WrM6drOorcRSTuJPsuoWYeKZm4UeW0W9XGecDjAya6O38R+EP+EdvfC1jonhu4ZJkUwXOYnnUFUikuJIBOHdWLDLsCACM181+F/hX8W/E/hZpr7UNM1SxQYEOp/abS9gJxny5hEh+T3Zk6461e8L/APx3ZXxj0o+D9TTBeZ73UEnh8pDuZXV0J+pByPWgD2+78VJcfYdGkhtvDkk0hjub+yg/tHT57ddkSs3lwMyKORv4YHk7ck16F4otfEGg/DtF8FWGl+M9NgBjuZ7edWmhC4KbSLgsEk+7ggEA9OefOX/ZU8UeK7LTNQ8G+E/DFxC6GW4l8O67eWxKvyu2WWSaIAEFsBMDpxX0D4S/Z0+K/hqVtOlNx4fgNosBSLX4dRedcjLsGtA0bZGT19gKAPBtD+M97p2kW+pReE4NBuflhZby8EHn7OoidJxjbjJDxkcc+3pHhTxl/wsi0ijW7bQoLWVmuLhbf+0VdkAbMks67AO2AMDHykniuu1z4P6pFZW+pya++ova3BWL+0dSSO3kdm2nIaKFzt+Vdu7kZ6g18s/Er4I/FnWtTubY6BYTyWyL9nNtqpj+Q5YOITOyPnqR3AGBQB9Nr4M0Oa6Z7jW54NecRtBcyWS28Fw5ODIpzGoYDgbiNxwOelef/ABR1X4haDLJcan4n0uNJI5IYTqEdrJNPbqRkh7eN5YDIpJwpAU9Tk1836VpXxXl06ystd8No62suy3CzXcK3JXIkAW1kYBzjJxHgnnivojwJB4k8Q+D20HXfCmrXX2HewXxDpsUltJvG7yrJ38iZWXqh2PuzgnGMADJrnSNd0FbrxBZ3Xh2a+t1srG60HW5Fgu1+YlXKO4DbCNzGMHnBOaksrXwT4O0TSLzw7f6uy6VcPcSwXc6XqTzRldzBrmMMIwflDDCkH+9kj22++GHgPSfC0dzoqp4ZE1sIRY3loLO7ikZwZWhknLwqzAEBdwDZOTjmvMtY+ENneaVBF4Z+Ket+F5rmR4oBqBsrm0lSQAGPfZOyoFf5dpLA9eucAHrfijUfCWq+GPP1PSXtI7q0eZZVkispo1Kkuy5uI3cozZ5Jx9DXz34M1zwlHe3ugL4i8XWEckmyDULe6urSCRpAu5GlkedPNJx8q8Ee9eHeLvAPxC+Hvicap4l+M3h25ljHkK2o3zXRKHAx9lMch24Ufw44r1rw/qvx8+IPh6GKzufhw2jrMXtrqKFYvOlQj5mi25VhjOWVSc9+wB7nod34U8P6pLe6X441q8TTYlcR31wt1vG7BSTdbGQjOQCjc57Y44y5+MGnWHiufyNKnCXk6rJd6O9m86lgNi/6TbozICecuxHesdvDvxuuxp3hbxb4o0WC+JeaC70q4kivVjdg7b7VLUi4jQg8quV9R3+l9OtPHvhmC1sLzxna6/eRkNdLNoayq6gZBYPJG4zjGMnPoKACy8T6Vo2iT3GsaxfaVqGnPFFPLcWMksZRlBWR2t2TcfmGfmIyAMCug8P+Mh4k8OnXP7Vh8T2UG5Gmt7KztJZGgJXdILlzho2wckLzyAa8A+LXhmDxV4gLy+DPEVzJJbxlb3TVkS2ZSpciOIXn7pgCSUJxxjuBXiMHwrf+0LrR/hxpHi7T7qztVlF6ssthcWBYAv5sDbfOBZSRiQjB46UAfZ/hxUupjqsOhrNY3MLNcPDcaclu0mTtYr+8Mkny8udoPtxXEaja/s/eI2+w+Gp7TTPEMr75t7WdtM5gQZjVlaSMR7cqSrICBjnPPnnh/UdS0i7gt9ZvvHWra7HHIkFtrVmIIbqSMElkmS1nBjAyw3NgdWrptPh8beI7AC3vrbSDqErI15ZxaNLe28ZXLKZLeNZhJk8HapwRkigD0qPRvh5pdjb6ff21kdOlfesjGym+ztwTsCSKVJxkFQSevIBqPV/g34Zjt7jWn17UNPsJkEluLx7P7NHGo4JkeJpApz0AccZzXgep/BLRhqMWv67rni3UxbqJnubmOe2ka5LYQLGr7i235gyDOO9aEvhzQ1sY9O/4TrxXZack4QWX9uxRTb5OWkIaJpIgM8hzQBZ8c/Efwj4PYaAPEdnZ6FcQiG8uLeaS5l80jgQD/RjFzklkKgelbWneMvGnhsLbfDTRj47s5EHkPc+IbGUBSGAaDzZpWRgeoZm54IzxXO3/AMHPBl74e1E6n47srKBZjB5/iCbTtYAmbdhX8uOCRWPruOK888M/BXwN4IDS6fqlr4mvZG8lDp9tMLYmM5LkbpijHOQyDrgAE0Ab8HxD8X2WoTT+PvA/i0RzuqXEEN3byIGfPCSQyRKRknbx/Wt3S/En7MV5PdaZ4y8LXWmXfm7LuHXBFcv+9bICp5ryo+TyFIbPB4rxu/8Ah/rWo+Kn0680PUJVnIkj1H7VqE9hHFGcnFuYY3LKOOvBFJqvgmz8EaA2pWfhbXtevbh2Q33lMIZGc8E7leZumAAF9SemQD7PHhr9mXS7mwt9M0rRo7GxePFs8KSz/vfuloWlLGRsgknOF7V26aL4Rtden8XXPgq20+zgjHlNLorSJcAZw0NtFMruWGACV56DFfn14R+GV/8AEi4uI7/4Qy2SIm4T3NzJFIqsfvNHM0byHGSNh+te36X4I8SfC/W4tK+HsnjeGVVBf7FqFq1uwUnEaK5cbsY+XbkfjmgD3PxN468E6pe2umv4P1RAd6W8d9ZiK3KN87GK2kkaMMfvcn2JHNeNaX8KX+Is0uoeGNesrDS4Ljy4ftzx3EttGjYQRQwTPhiQSB91SAMYyaq+INU+KHiLVr+HX/Bvii72RjFxc2enXEo4w3m/vFwGAxjPQnjnjldE+HHju1W91WXwFpOl2zWyLFJO00VwYyrFikcF2i7nxjIAPpQByHxD+CfxP06WD/hG/G2pazaPcM1v9kgtrV1fcM71SQSu3BILDaAOoBrxDVPhZqdzfT6lretNqmsuUja3a03By2EXc2QpwOpBxx1r07+wPh9p0xvbjw3rfnyjmEG/jjWQA5jRvtZUZ65Y8/pV618Z/Dzw5d2/2DwVqccHkpIDcsrTmRfm6ySlQoI/hyeeKAOJb4J6Npmnf23rGph2ibbPbWtmibQGwUIeNz0GAw7nrjBrgh/YSW2/TPDatMN6mMWjzyOxH7ty3luFUdwBnjrX2bc+J/iD8T/DU50eYeGYg3lbLgRQCcuufneadAqAYxtX5jyxxxXzlrnw88XCVJp/E+mR3Me5pYkKzFAOApkgjkjIOPuhuPQ9gDiNX0xYdWsmn02O38qAPcxzf6PFcsxwR5bKCvGDgq2Bk1HbC/XVbh7KKwtyHwIlti0rQjoMAK2ehG0Dp0xWlb+HdYa1u5ZPFs986SFRp+l6e0kkkzH5QJCkUe0/XPHSs+18C+K9aQ3+o2+ppukYHe/lspXo0hQsVH8OFXOeKAINb1O9hlivLvbC0LPD5rbsySNg5cls5VcDAIHr6VLNrWoXlleWq3KzQpDE0+G2xMBgBmTzCrkE9uh7VrXPhPXre4+wQx273Mhz5Ll5sISBzht+7PY8+1T6l4T8Y3zRz6uNJt7Wzh/dw+SAy+UcZdI/mLls4V8k+mKAOKWazuUI0W001LhMkkXLws3HQqrKuO/zEAVFpniS2TzLa4s1tHZTErG9aYOD1IjO5fp7nJzxXRv4Q8XaPZi8W8s/JmO2Q29o7NHghmQqxjcbSecDbXLHSrCS7nmur+/uHhLG2uIoEt3LN7tI+0AkkLgkUAd14ftZtLnmifUtLdY7aW5Z5L3zSiRDhP3ZYq7k4VMZyew5rmJ/Edql6Z5ohqTwg4Sz8xiTjIzKYsDaTk7jzg9Km0P4c6/rcUkVpfX90zv5nzSI0cR6kuzgbsA5woA/Kuv/AOGf9Ts7Ndbsb7VDHMpknEjHTo5GTkoJHIR+Bkk9u1AHkTeJbyznmZZJ7SGTcmBcNG7O33gW3Yx2Ix0qreLFqFqPtcv7sqpSAXTtlhnBO1cYPrkmvSfFLeCfD8Mdjqlmzy3SrMqLIl66qMZLS42qW6jGSa4DVbzR9Sv4bTw7pEqWCJ+4VVxcTSOcfOxjlHHQABf60AchDpthNvuIrGzjbnC7mc8Z5xkdPeoLzRrhYEM1x8hztFuixj3UMAQf1r0OOz0q0XfqVs0N46lcMZHDMSNiKEddpxwSc/hWWng2CeGKa9vobeAO5aGV/KdSn8OW5YsB1PAJ5IoA4qC38LaXKjahNeSSBcEL5cignkckg89/lqtNcWEzu9hD5agDKMGkOe5ySowT0HNaup+IPDwu/wCybSK3kto/kgu51VZQhOcFFLRg5JyTk+9Z11qNnDKqRQCJEXYXViVkGcggKhHsOp96AITqMo3RXzOkfGViCxsPfOcdKruulxIxtoiM4OQwJOfVh+nJrrGntbktMiwWzMFi8mJHy3HLFpVIyO5J/KqElq8NjLKwiCQDOyTEYfPHAA+br0BoA4uSO3llEwhCFcHDDIP1JPJqpeXshn8uODfGMfd/d4x7LiuhN1HIryypFFtA2oqjb6k4yTn04qo91bPbhjFuPVQy7untjHvQBiC6YlljgCbyPl9PxPNWTGsfkyXVq21yTkYTcO46dfeokS0d98gEeD1wVz+CjGanURQy+WkbXDnJVQGC4PvjmgCKRbTDlkiiJIADtuIH0GM596ZE8MS4CvKwbpH0wPTnirHlXMhBQ7CvzBVjLfMO3TFLBcyEsZJ0VuTubHAxgjg5oAqyX920m2NUiA6At0P4f1pWuLzGZNknHLHpz096dISOSY5c/N8g55/3c80y4jiWJSiMH7kng/gelAFeQyLt3+UxbrhsA/mMVazYmBm3B5W42oeFP1xiqItbhwXgQMvTOf6c1BMJIT5TRnd3VSMDHqelAGrHFJ5ZaaPywTxukB6eoBJFZbzxqGSOIHB+8WIz9P8A9dMt5mY+YIsA9Sx3DPvVj7O8x3w/OQckldqjNAEYntD+7kihOOrnccfhxmo2tIFi3xtt3fd+QAfn1pohuAcq7MR1XIwP5Uskd68IllB4OFBx/SgCo/kxYLHd67RnNPR7c4Pb+7g/1NRK/mOyiFvMxjGML/30TSlb5zwqAf3Rzj680AWXMcvCAx4HQ9/1qvtP9w/991HskX/W4OeykDn9asBCBjb/AOPLQB//0fxgW7kkYxtubnAbaAAP0qYxW3l5kljXt93p/wDXNV9qMmXkLdwdo/oTUDG3BJZhJ7eSz/yNAAqDzsLOrDHCjaM/nk1NJKI3VJHjHsDhvyxTGe3hiDIhDnp+52gD8zzVdx5/+rD7u/ybQc+hzQBvq0ojUCRxEe5IA/nn9Kzp4FYF8nbz04/+vWUtvIJds0cm0Z5VSGH45pGgiAKo0y5HAZio/nQBsrCYEDIzHvkSE/0Aqd7SO4RLiaRI05BRZNuff61h+Vb7lWWXjupfK/keRVtLHTZM+Xlgeu2TGf55oA1EtrPcVil2HHf5/wBQc1JHutWMlpOm4dWKE598ZrP+wxRY8qKYHvtIXHvnBoktSqrmK4zjO4E8/wAqAFkGoE5N4gyTgbSmT64XFaKeeU8tpGyP7pxn3BP9az4EsMFt8kb9w0ijHqfmBq+6qUDRShd/UtKjbvoeD+lAF/yrJdonmnSbaRkKrjJ9eP8AGsm6FmYmE9xdlj0CDap+oGOfwp0sFwhBMkbIcEBZF3D8jQbwAeXtJwMfKST+gIoAo2UEMEJFujxBjndhmJHr2xWhmS1xG4uHEnJZADj67iaQNYy7VmilYEgFP4vbGSuaoy3elQTMY4toGMplgxx2wAcUAQS3moQSFbdrnkjO7nHuO1bGnX2o21qN8bywu2ZMgKxz2+92PTpWDNq1tNKPKtJFQDBXzmJJ+mDQmrRW1whSwaIHqxO4/XBoA7e31SC2ZnsWvF38FfLU4HHfJ/Sp5NTd1zJJN8gyu6NlI9jn+dc+2t2ToZSF3cbScjGPbtWW+vokiuEkOGzlUOD7kNQB0c2sNCm5pVznB5ABH0AzmrtvfRzqHWK2IJ5Rm+YKe/3ScVmz6h/aUSSW+sRW7SAK0YtyjKB26EAfSsK4tbmOUv8A2hLNuIUsgHI9TyOPbFAHpQbw5a2ssUcBuN5ALJKFETep+XDc9gKifV9PkRrTShIrEfPuVcEnr97Bxx1Fcw2leTbpeLfpIXYoBsIYj05OM+xqrLo1rezKsEdy7g5aSNOB6/dJI/AUAehWeqW1lZl20ySQjCNK0sqckcjYHIxnuBio2eC4AjjsWE7lmRbQhhgjIG9pM+uRtrl1tzMptbhbgR5IXdKVz6YLcDP0FbNlYaTpGnobm5uotxDH7PcIjoQeDjk9Mn+tAGTf2OtWNrHqBgaK1MhiZpZQihwA2BwxBwR9apW+pWRn23ykxE52IzMxUejFAAR6967b/hIlhVrTTtc1C5t5FBxKQWL+hwTuxk4OBT5NfttZu0g8m9ABBMVtLFuZgNvdGJHs1AGHZWLF7g3eo3FlbAgxKsaTysrc7lDEDoMEqfyrYbwxe3GnLcRarDb27ByJbm18kybWHyrIqMCwznbuz3rR8QWGrQQwTXJu44ggjS1KKskQbnawwAD3+UAHNU9Os/D0paN76ZjM4ISYFVQZ/j2vgZ46KaANLR/C12lidci121ikhwsbRXFwrlgdx/dkrnGBwHA4p99f63qVu2oW+u2d9PanEwkj/dheisN8rK7AdiOPU9aoR6OUH2zw7dot2Jx5oh2BYz0zgTqWGD12Vq6h4S8YwWn26AedHOqOlzYW8WXYkhgy7t+VORkUAY3/AAlHjTT5IrSHxBG1s4IeANJaohHr5QwD+OPWuw1rw14kuRFeTXHh6+W5iCxTRyTSSruxyxRiC3HUk1ylt4r8VpGLS+uxIwzHm6sIXaMr/DuIZh0xnivUbPXoptGa2/sqzZ541kneO3tpucEfIGDMjEjJ74HSgDI0vwS1hZyNc6dD9tuGRI5LWeUO6qOWTDFwzdwwINad14nu/CjSwy2l2y2oTEEVvJJ5e0DBZ5lRPmHXCn6Gs2ea1isnvrLSrm1uIguLiCOOISZ7kAgbgTwcfhUnh/xXONaVIdfk0grAdj392gLyYBCtgNsBIwDtx0z1oA9JmvfDs9gIbO0kbzYkmW5s1g4crzjzCpB5+YYGOgBrMe+0nTbww6na2FpYNtEiIZ4LogruEm5kHGQQB0yfxpNW+H3iXU1j8SCWHWbeVczwzaqLd1P8QUsvlOvXDKceteeyeCtB/wCP3XfCet6ZaEqrXVlrEFwuOh+WRCD9ARigDr5IdCvn8y0aaIrMAJovJvbefJ4Z/wB4sgK9SuDx6U6817wT4ftZbp9UtLmYKluwjmEMxkJyX8vc+wKFAPb1IzXGXnw/+HS2rahZQaxBaMpLPfXVtnkcEiFz37Yz7V5mPCvgVZSItUk2N0Vocrn0BB/pQB9Bp4/8AXNtLokXiODT4r1fMl+1CV4UkX+80InXJHHybfeuk8FeJlfVYNOuPH/hbUbWJ/3NtIXVcMDjZL5KyJjABweh5NfOA8DfDyG4FtqOuNAHTdvS1mlx/wB8gKfrnFUdZ8BfDaLfFpXiW6vZOCIYrJi5GQM8kDOOQM0AfpbpNxr9k7z6ObH7ZcbxnStagvrVoeHKtDeiJ48DBwGcE8Y9MTxT43+IUVtGseiQ3FtOQSf7BFzJIFH9+KSZA3GOmAPSvh/4c+EfhJLcomta62ny25LmS+EumI69QN/zDdgHHI5x619dx3eja3oU/hzwncReLVt8SLbPqm67ZJAB8hgkichQCcnPGc+tAHA+KdW1m/ikOneDL+Lz/kMk8ktknmPjdiNXQEEf4dK4Sw8UfFjQNQfSb3TNQu7FyrW9vcX8wjibj/VvHnC4xweexJrsbf4V6PJdvqT3N5p7xyeVeWRvb6Jo2UEjkxT71wcAhzn1Ga9BsLXwv4a8jw7pOp61FeTK8iyxwpqSWquNp3yTEMEweR0B5oA9Z8F6/pmmwTS3d0G1S/ijuD/ajSXNoJWXiNiZY5IscjeEbnoDnjNub+7vtTXUTDoV8LuSZGnkN9atAqAKArbmWXcW6Mm4gZ47fPOq6m1pZSWUHjHTdKu2cKb/AFLQVNzdJuPKTxST7ip7bBxio/B0a3eqTQ2nxS09Lq5iUSk6KUhuWUttEh8sKSAT94A/jQB9XWnhnwvqusLY6/YWEt/Zq8jS6Tq94YipAYYjby/IG3OVyQSM1leJPhr8MtevbHxJMmnrpUUwO0yX0N2yxYViTFI8JBKgY2/N1z6eB674H8W6E0mgL4j0630edlmlvLJmjHnE5CneE5HYMeAeDXm914Mt7HVoNTufEVy9oT5iTl/Mj81z8q7Ev0PI5JXoKAPuHSLXxl4G1i3i+D3im7t9MkLyjT4LPT2tTltzqwumbeRuyCEDAd/Sn8RP2mtVt5bTXtZ8P6X4huFmWK3nks4LfY0YOSz2rTylfoQPqeK+fvDnjbUdK0dtNn8ZTafn90l1DpzyNGEzy7pcxydMbcliQcc4xXsGmz/ErTbZL+98Z6RrNhdL5XnTRiNLc7flPlSmZemMkIDz170AYenfHS81XVpNctdPHhe/uITcRRWmo3cdlOqdInhlhigctk4IYNjOWPSvoDRPiR4V1/T723uDpZZkQ3L3dnMvkqwJ+YyMkcg65xJkfpXhWjDxT4gvpotQPhS6tjGJpbiOC4jkY4wrYa5jib5eABtXA6U7xxZPq0S28eheGr3U/MVIp7v7TbXaRghS6w21wQ7LkZ74z1oA6HxAPDmvedD8O18NazdQQZtobe9lt5gFJJkX7NucuBxhgMDsRXC+FbnxN4sWHQNa8MQhYpfLtLmPXriy1SGQDBihma3CvkKSEHBB615no3wi+JDXZvPDulvqQnng2tFpwuLd8NkhpZZW2r8pBEgHbINex3CePNS0qDwzo/w/0mUq00pW1EVtcRvCdg3xGUIwZuCYpDuQnhaAPpbTfip4f1nRLLwvqNh45eWxMaSR3snnIZQdpEkzqu9VHQlgCOAa82+KPwx+D3iVk8Xazo2sR2kNuDqd1b63BMsEXd2tXd3J7/KxA5wD38Pl8LftBakt3bw+G/DWjXl4SlwJ44rp4owVAJaeSUZGeCB0OMV1ll+z78WY9El161vvBVhd3JFtcNY2sVxImBsDFJYXWM9jg9T6YwAeV+L/ANn74Nx2cWreCtb0+/0K8ZJJLzzkNxaQgZYyK7+YSMjChQevYVoeDvgH4TkluLfQdcv5ZlK3FtDDPLbMUycFPOWKHIIznzGIHccGvUPCPhz4m6Haara3PiLw3Lp0dqbWeXTLW3+V2GN0qM6W4ZMnIJUnnFcfYeEtB8T61FaXPi5GuLKIQBYLo25eMjDJFGiOjA9WAnPA5FAHWa5+z14J8Oyvq+tx22vatHEMSRX80DQEjlpbiDdLlcgk5wORkjmvPvhrefB3S/tk174tjstehMqedLrDStKRuKiMym2yAMDLM2T0r6Ja5+DpitjBrlxpHiCwi2JNONWCTbTja5iMG8gdPmII6Vw3inQLefSbi90nxB4KmihmidXj0+5ubl26jJvEkEZXOCpBB6HnqAe6eBP+EzuNGin0S5j1W1nkZ7S4vrtpJXhIHkhY4vPJAbqRKAQeQDiuE1HTfiP4Y8Uz+K/iHrsGl+fE9pEZNNlTTwxw28r+7QMMcMM59a47RvCWqeE4p/FuofEGy023ubiOWUrbxIkDKoG7YLRQmSBgRlRjrXonh3wB8bZ9NuLjS/jpDHo92zSRy/YIr53VmPCSPuUcnozce1AHm9/pnhXxNbW8178SrHdYXW6SbTHuY5WaViTubzzJjGfukIB19awvE/wq16y0rTNZ8C/Eu5isLy+MlrG1kptnj2n5mmM4l2AAk5YjHOc4r6DsvhT4k1W2S98S+MtQ1iWBAIi+gxJPI7PtHzJM8bIeu0YUg9ak0q4+JuiarJpdxoNtc6bF5cSzrbW2jRlsEghTdNJycB9qHdjgUAfM2o+I73w/4u0zSNS8beGb/S7aICS4tr6W0BZsby0VzcBN5bpiVvywK+j9c/4RzUPDMk2ha1bL9rtNkd++tBwYB/rC1ulztZcfdPynnrVDx18cPDvgOzRviT4ZtLu6lg3LpummW/aQqRg7TapHCrdCzSbuDj1r5p/4XZ+y94u8RK918KJNMUxxJHJZRO0izFjv82GO4jEiqOc7GLE4HuAM8ReHvBk2iQrpZ8C6hqeZYZblftF3JtlULt2GacKV3ZZ/MJPLArivB/FPwi12O3j0rSfHWhQzwKZJLeO9e0RDkMFEbRpgHgjjB6g19Q+EBo1trtxNY+Ar6ayuCfKubfw3cNHFHkbQHgWKfJHY5weST0r1EfDzwibK51XQfhR4g1G6li8qUz2GoWLO7t9+KaSULgEA4OTQB8geBNc+NXw6sZbGfXF1Oz3iR7RXgvFEQLL+7DtmNG5IIQAkDnnNeuj416lqumpafb5PD8iAgW8McIsp3Y8rK80DfKB1UN1x9a9L8DfD4ppU+qXg8VeFZYJ2mmt7m5NyCy8jy4mS4LAAZ3MPauq1bw7NpGjJqXg/Rdc8RwgNdM9smjWFv520cySvCbhZO5xFye2aAOAutc+Jsekz6rrV3YS2NrIqvG2r29qkChFJwIrdW54JCngV5jo/xH8aWyta+E7W41F5JDMk8DynylkbLNCSZGXLAYLcsD1xxX09ongLwF8SLOWTUPAV5p1/HHG9xd6vBY+ZvYD5Y2EMfnHnlmTAPfpWDe/DT4Y6HFevp3gK1ii2iN7gXSQTgRjl9kTgEnqpBAY8ACgDxezs/jdr+s7/ABNBBrMTJJK8cunyrOsQYZx5UbAMvG07Vz1Ga9b0TWo7NYrG38HalbJDAwW6S3vmKxxMQzHDK7L67gBzwprC0fw0rX8E1jbam1lCglRI76dMb2Lq8wmmCjsGGMEA4B61vXGlSaxqsE+peKbZL63neWRB9ha1UlApCooYuAF5BIbOdvNAGFYfEvSL+31PRrzwle6TZ20brBNLp0souXIzvV3iVwSOVHJ6ZIxWVJ4q00eGLe98P6Z/ZipKDcyz24W4MPVzIUtZCqjGQq/KPTNdV4y8GJ4sgi1fRb7xJqM7ltzWZttEtoFTglOFUsAOhcEAgnnivDfF/wACvg49uPFGtXvi++1Auv2n+0r6Iq2RyxuiWGz0Kk5+lAD/APhpfwStrFpml2S69e3ssqSWzQta21vENqhRM7wGQkLuOR7cdK1LL4peJpNI1bVbySODSBjbp0N8ss0bHCjyY2aZmyCTwp9jWb4B+Cf7PUE51ZJbm+uNxWG1mhmurddoyHllZ4Y2H+wqknjA5r6NtNO0LQX0+xjaLSFu4d/l6RpH9n3dyqAkF0s7fz4oyMbmkkXOOpzwAfP2i+Hm1LUYvEU2gX1jJDEJlcQ3IJQ5ZSPMWBNzD7oH1rnRo/i7xvbX9/4fs4ZBYyFLqKfXraCOOEFj5tyjHAD8jBzzkAHBr1H4y+ItA0jRZr26nsL+5lhxFaL59xJ5r4G5w7tsdcn53DEdjzx8m2fiaXQNdh8S6Q+g6fPCIebi5mljdgMHMSRlwMnJAAPegDt5fAHxMg1a0hktNFa8vWYWoiS6uCpC7gRLHbtHtw3ynPGO1SeKPBvxlbUk0AWNhNcWyoxitt8NnHKxA2yNNGAz7SM424z3Ndrpnx9+K+s38Y0y+0zX9WvoPs8Sw2l75cGWB43LBllC/INzDkkjPNWJtL+Lf9p3/jnxBe6jFMscii2s7CKzDbUK/LPezqYzn5m4bIzxzigDhI/D/wASNR1GHR31fRtMeyjdSlvB52QoJZmaVIo8Zxk5z0wDXLaR8NPiLq97cW9j4jiEAkEau1tHDAZlIGFD7idpIywGD2JrsjrXxB1LVhZalqOlaBIITezS3sen+ekSx70aVQpZmbbwAuGJGMZ4wJvh3p/i22tvFPifxrqEdtqse24N3fLEscvDDKRuI0hC9sgg4ABoA8h8U6PqWkavep4h8b6lci3JTzdOPlRNIOAgI2rycgkZxjmoE8TiB4hqes61fQhSTDcXUUpUlcBidxbBHXjgV9CReBvgj4b8CxapqM2palqEs/k2f2cmSOSMEbpW352ZXAzzwQApJIr5rm1+4g1K5tLWygjjjk3EWtwY1RACAGwRvkk6tkgAn7oxigDj9c1hpr2Zl1eO3txjbJFEJF2HkcqE3N61g2VoupD7Wmo3huC+NyMYSwHfcSR9BzXQah4mSZwk8ClnIY+W+VHGON+5Tj6VqW/iM6TFm1vjDvAQiRN+SeeFVQAAfxoA5+00YXeQdZuYrsOUWOdWlUnnLCRVIHTrnNdLD4F1XXVEEMlxM0SgmQwMUCY/vMTgdT0q9a+PNP0oGMQ2V44IMcjBs8j5t7sUAJPYKcVlaj8QJNTlaKOJ0g3LmKzvDBFx3IjRQTzjJJ/GgDGufDCwWQuUjM4iJVvkVRuPfdwCPTrntWAYLOCcmSZ12HLwhkjIA93J4z0rsIvseuymSTQri+mJUK1xdeYVAPZSQMY4BNYkHgyw+1TQanZG2bceTdRfIeeDk84oArLfW7wrdCISlCQsjtvB9Mjecn6VZubx5442kuJpFK53QxJEFPphskj3zWl/YPhDw1Is0lxBK0q/uws8jwlsHlmij2kqeMA8HrWKl74e023kilb7VPOAAwiZ/L7kjLgHPTkUAUHgZZ/tDyzFJDlvnUFx7nBqrcJmRGtlbzXPCucceuc4/StGfUr+9409LO3HRnLBcp2ygOB+VY0iXDXRiklhklwMJCVYZ6dfegCvLHdxESeU8aNx97IOffPFWbeWdCq7iQO0jcfjz/Wrnz2zKLqUQrnLeWuSQPTgg/1qIxLfSPHYtKyno8jBN3rwAMGgCLyLdZGlmnEbHJJjj3KD+YqlPDEyttuouucbduPfB4GasSW1zIBAyrIqITuUb2XHHODj9KoJaxq6q8Ekwbvwn480AXDYRzRK0OXOeqHgkds5/lUiWunrLHFexeWqcMp7nPfkH8c1XSE25zbREFupBBx+I706V7iPKyEhW4Yggk568kEUAJdWVhJIz2AWGNTjbHn5s9+5+nWo7eztA7NKj5GchpMfpwagWBCw2hgB2zggfgOab9mJzLFwAcbWb5/rgDpQBoGCR8ztFFboBhQmecdOlUXikVeWEYBPTgk/j2qsWlDbCWc56Anp/KpSl7KCpQqAOrNjAH4jmgBsLMgb9+oZu2c/rjFP80sT8wc46bSfyziqezaQNr5HfvU6I6xmTa3ccnBJ/GgBJGwwVuWJ6ED/ABqGeQImxUzk/MOBUmGYgsmOOhIPP4GmgnPkuqr16+v4UAU3vBbjJiWM9MFgWP0GCaqfabhuRKuDzyG/xrUkty/JQZ7f5xUW11+UoARx1IoA/9L8akkuLaJVWaIhf78YOc+/B/WlW+3KxlweP4Mjr9aqTxTTIAJHj46KO3t0rKl0u4dwRJLIo7sdw/IGgDcKwOR5rucDICsAM++BVNGtN5WMBuerNn9KzP7FbLfNKnoRn9MGlg02eCUZnZiMNiRdyn8xQB0m5WTJ8ohevy/1qEfZ1YRqyO/ptJAH15FVxGsjHyzs3Z+nPt3/ADp1vpVykgkBBz3G5ePw4oAtyRW+BGwXcT0UZH8qiNuoj2wNKpB5EeF4/LNaghkgiO5Q8mONpfdj8AR+tUzqFxBtMcDLID97DHH4HGaAKMds2/bLPc88bd+cj3q55SBgsDYwPmwSTj35q0dQnKbcCNj1YR4bB+nFUTctJIFdnAJHO3jPqcGgC3CLaOXzDGkwPIQx7s59Rjj86nmuLG7XyI9OthjLHB2sMHB7gAVUjmurecRGCO6jII4GxgezZyPyNWYr6SKF4WtWi2HKrGygkseTkg5GPQ0AVWi0pY8CxUt/EA288ehDf0qwk2lsrn7PEChXbETgkd/bj0Jq5m6dji3uPK2g/wCrUkev3efyJqnL5qkyR+eyyAA5LIwx2IOfzoA2o9U8OXASC30wtIPvFifmb25XH+eayLu5gjl2GylUj+FlUgg/7RORQ13OrLLDC7YGcEs4P1yOat2t295lLnTZVJGCw5/HDZPFAGOmtWsUgSeBYUJOAy5IHbpyain1KwnmSKGKLLAYZUyR9d2OfxrZvLGy80XLabI8RPzeUSpOOD64P1qrb6T4fnnI+z3Ea4OQxB2nsOx/rQBoRvFb26zR3cIU/KV2neSeT90kDHTpVq5jjO0RsNjAFcEMeeo+tZbaBoRvRHLHLaRZHzshOM98cE57Vom3SOVdK0y5ikVz8iu5DtgH/aG32zQBDcWe2EBEuXRmyXUfu1I684J4FURpOmXYjjku5LbzOMs+Rj8MHioUurjTZ5GvZBHESVIErZ9DwQSeKsSz2twyHT4xchTnarNk7h2ztII9qAKP9j3dnIYbKZLiIDLNy/y/nVk6fqM0ZaGBIolXIlZyq57jI6fjUVzPeKghjtmSJVwPNYE89ck5OKyPtckymC7LMqAlUQNtLZ9v6UAdDa2Fxtf/AE2L5xgiEeZyO2WJzj1xUiRzSboUEMmchiRHG5xyei5rlLewdbiO5tLe4BY5C7TgnvtJFdnYancwqltfaP5zRuWWaXf5vUHDEq6EDGBlKAHf8I1c3ASaCInzSIwhVmbcR75HFdbbeA7m0bdZWjlwu5hKm/aoxlsKoIIPvjHWrWlwxa5JIfD0E8NwjBlhVomORyfnYQ5OeigZ6Vi+LNK+INvqWL9L5ZJ1Dx4tmZinOCAm4dvWgDd/sCOS4kGr3UvmIoK4U5KqOhUjdgdKsrptpHaRwI8yy7vlKxyBPl5UkgKcj1//AF15jdx/EmaRLm4t792ChBO8WzcEGAGbGTj/AGqsXXjXxsIF0vVLwNHENvlgsSAOg+Q7c/hn1oA9ct9R0uGVBd3MOoTRKyNa39tHMvOMMFIV+vTJz61ntphnRb5LTTbe3jlyyojZUbs/IryNsz6IMV5DNqupTbDMkxYtnKQMzgY/vEr+lX4b7VhEfssd05ZjlJIpGQA/xAeZ1z6igD023aPVdTeztriG3XD+Ub1BHEy7T/GrEDpxx1NaNj4RtdTullWW0kkRNzrAwJAUcbtpwM4znn35rxqK98RWsixK5HmMCvmIAg29vnLACtGDxJ4vtbhlkuI4A4ORGRFnd1OYwBn3oA94m+12dxDHHaBjKVx5BYqq44YNuLMWIBGeB24xVa6u7R9Q/tG/sJ53UeWWfzJyccbTuckf09a8ntPFOvkC3/tGE+UMhGCFzjoNzbc8d810ttI1vDJCbqaxRf3rq8CMgMuMg/vH3Kx7+nX0oA7+JNegliuYGlsLO4dCAbRplEeOTlzkAdOCT6Vp+JlltZGvo9RhkWTyy85tpChUckMsjBlA6H5R2wa4ibW9Mtli8zUTdiQsY3ilaFQ/GQIjKMDI4KgVKms2PiGEG+vLS3EhMIec7ym3gbhNOrqSR1UHg8+lAHoy+LfE2jxWsElppGp2N6m6FIVSaNeD8xRCz4UHkH7p68isHWNXvLm7uTYppLTbVWzMflrEqn+/G0bkHPHzY571R1LTfBGn2q3CeKfDuYn3NCGu47scAMFWOfbhvUHPHFaaeCtH1K1S68IeKNBubpZRKY7e1lLoDgDDTy5ZCxwSc4PXigCxpbQaok8vj6HSHuMAiW1hkcMpz1McMhB/ADjg11um6d8O4JGn01bya4AURNaWrkK2MnKBCwx1HOQK4XXfht8ZtOt7abwu8l1JMZFcWcEZ+UAEgSGV1wc8j5SDmt3wnofx11u+ls4NMjS4t9pdbt7e3iKJ8pXMUrPgkkcYOT1yaANqK70a1Idtd1RZfNZfIuLe52TkZwrQsg5IOOSR/drTg+M3hHQxcWOn6RFDebNv2vyI45iOMptVol2jnlstzXOv4D8X2GsT3Ot+GTDNGzx7rGe+k/eSA7Yw7NLu64wODniuC1Cw8PafdrHquhXtrc3DBSZbNcKxwoVd7KzEZz93JOKANbxH4tiv70X1ro1jPawkNNdTahbmfluyoyAN225Nepr4oa98OzQw219Cb2IkhZ4rmOMYHl7gCzhNuN3GB+NcLHpmh6XYNa3N94nW2kzJHFahrJIpIxlTMBaudobqQ2QO5rp9H8KeD7i/fX7nxXqXhDVraPFtcT3RuxPj5GkFwzRyI/I+XAyvQUAOstX8eaDZRaP4N1mC/sgwkllS0hkWNUzuR23y5OM7V2gn68V6jqWnajrpVtY0+3a3ET3H2qFIZZJI8Kx3LAwKGPjcrQMT6ZBrg9F+G1jO876P8QdSfVriAssUG8x3aS5LvtjMu+J3BEm4rgnnrmkvfgz4uVovtetp4fhkKzWsmnXcccSuE+ZWP2gKrHkD7uM4oA6HQviHLaznwjpMllY6XqG/7TLBDLau0RYYEcclvLCzHcfuAAbTwM5PRape/s/299Nomq+JNOhNxvMT6hpzWcYlJGCyrDEgBPBY7hj5hjpXlOh+GNah8+znvdQ8Ry25BiF0tlKhRd58vzTcFirc8AN0qr4xt9e1Twgmj6ppNzZ3NvwzvJHfGHkBT5XlL5a4JxknnkewB7npPws0HUdLN7oE3hnUbaedDDfxXcMYXGN0QaeERHGOhz6dKs6j8Dr/AElRPaWUJundjLI7rMzyYA4+z24jEYLcbcEAda88+F2qahp0DeF9b12y0JraNo7aG709LJLkgBnm82MGGRmAIDuAegyea9c8Q/DnXfEOlzajouu6fqVprYDbLbURa3E8/PAji2JL5o+X7vPQmgC54a+HnjbUbyRLuySym8p7O1wCGCckyyM1uTIq5Hyk+ny9TVu/8I6zD4fXQvHNtP4htZ2WKC70oSWF4Ch4LQ+SbcqNnLqozzXffDzw/wCOLfw1YaVrmiWupwRIY20q+miTy9pyzpKpvHKAZ+8429Mdqp+OJbI6l9k1fT4tOgSIQ26rcSlQdu1ipt5ozuxwDtUH0oA8zuPgVoEd67uuo6abi1UHytbezmkO3704UDJ5/u9hxyRWvofw38NeHY10vRdY13T9ThJP2yPUTcCbYvSVfmwQOjKuBxxzisSfwlo2p6ZDPZ6w+iT2EwJGpRXV0Lh+D5jMl27r93O09cfd6V629prF54KWDUrLSvEU1oFMeoWojtINzkFkbz4bhYiBz820Hvg9ADyvWPB3x3XXTdeD/E2szStEytYX2o2lsPIK5MhZYAQp4OW2ue9cz4Mtfi9P4iltbO5ju5IWWO5gTXYZ2hcMRI0iiWHdnG5dzc87sV0HiPxD8SNX8VxaTpupS6GYAkd1cNaxXH+ihAflmtFMbKpxnKjORgcVnr4B+I+t6ZJp3hjx7o+lalpzuVv9N1BoZ5YuiecZJUfcwY8YYA+hyKAPUoZNPs/FVhp/iDWpNP8AFUu5Y4YHto2nVCOA8N2ysHXjD7s4OBmvcVvNR0j7Taauty54mhxpmZgjYB/eQuwmAz2VTgZPrXz34F+HHxLv9OtNJ8VavdWutabGEg1G90+31ANH1EiXNxDIep4xLnnvXaXmn/EHQfKOpeMLbUbZ5pYp5p1itJYEcg5hlt7qNhGDzjaOOKAPapfEVlbm38N2c8o1HUIXkt7UrJFIwXIJbdDIEU46ghsHv1rNvob6686z1zVbK3tokUfZA65UDGdu7Dn5j9/I54x3r5v+JngXS/7EudS8Oad4quNfsN5OsaOkOqwPty2WjMzTxybjxvY4Hc9K+ING+Lnx6sdSN5qOmXmuWi3Z332q6Al9cxYYKyjKFkKgf6sOBmgD7x8f+CF8S6pHbeGbDRp5Vi8q+/tjS5rl0BbAbJmjUse3J+XvXtOi+C59I8A/8I2T4cnNp++jjFpJaxQgjBIGbgkkg44GO3rXgnwfZ/HfiCLU7vVvDktrbypJBZp4VntpA38TTJOmUkJ6bJcccV9aarYX2leILmaI2tvFIP3Ul680ETzTEbmSOO8ACBRgKGH4dwDzrQPiT4X1q3sIbr+y28rdZW0/2oqXaDI2R7o4XKqy4AYc9ga67xH4g8PYiF1pYlubUJ5c5vIUGSAQERpkYEY5BAJ61h+MPAHxEvdOMWl61oM8zAPY3FtbahFIgJJ24N6qJgcb8nPWvGNdv/j2dPu4ZfD1nrio7rdGxvJIZwijChfNiuvMJH+0Rn60Adbofiu0ed20DwBazWc7y3E9/qFtA4N42QCUbzHlRz1aJ84PHt6B4g+K2nfDHQIvFL+HktXGFmh0zSZLnOAMlX2oIzu4Ack56ivP/Btnpiq1z4m+H934Y1OaJY5GkfLy7QGVWNv5e1yfm3bVI6cZxXS+FNX8Dx6lfaZ4l0/+z9XBby0u7ya9BVsgY8x2VcfQ49c0AeH6b+2/4w8ceNpbe10HxNdQIyxWmnwxyQiRA5J810i3KSMcZAH96vdtP/aI+L02qXUdz8GfE13p6QF45LaZdykcDAkc7nHqTnvjtXQeIdU1LwWmnnS9Be/trltgjbVfsEcZlx8xURmSQ89cVpeEfE7Xb3Bu9IsEeFDJEP7WUuz4JYeXN5TqOMDIOfWgDhrHWfG3iQ3N7YaN498PLfxs+0x6fK8RH31Ux2ksrL6DnJ9Kg1j9l/QfHcEGreNNT+IWtzlDMlr/AGlHp6L6q0IigijPqSQfWvYbHXdH8KWCeLvHetaDot2kUkvlCY/uuSEjUI8hc+pUHJ6DvXTN45fXrK3u59U0+a1ukDRukbFXU/dwCUPT1IBNAHiVh8FvhZ4aHleEPD+n2+rFQJLjXrq51aXKDHESSiJ2XIyc4z3q/dfDfXrjw/c6ZrnjhpzKUZU0eCDSWhVM4AeMxnA6YJb61qw674Ikup4lj1Ka5tJWBK3flrLLJ8xO2OTbtHQjaQF4rjXvfFvjPWLzRPDeni7sXtt3mnVLK1toJmBGyX928mAP4dzZP8AoAqyfDzRVh/srQ4YtUupgPOuddvJdQkKIMZKyyMrg9hgc964fx18FINf0C0hZ9LhuEuBJLFCsVilminAkjXfJuOcZUrg9BisPU/Dn7Q3hOGfTdC8NeHVS6ikgW/u9X+0yxn7pb91bAbV+8AePUGvP9Y+EvjDUfDa2PxIXT4xcSNI8miRJFudjhcG5RD5rHnKxPkZOR0oA9G0b4aWN3avHf6pbaxZLHIkQsmuwZpFJbc7RSbdvGGJ5GOoGBWprugwaBZW8MWhmW8GyWWRo/OSK3RCFVnkTOdxAwSzBecV8WWfwG+MWj3F3rHw/vvEFoYn+zJ9sKCWTecSEKxUBQvOcdBxXpM3gv9o/wb4fu/Elx8TtKsrsQiSXTr6MPcTCEAIFMayIxZeTuIB75JoAl+LWseI9PtbbTRdXF1D5InvG8ySezku3YMqJFbqskRRQMDKtzkjpXC+GfjVql9dyeHPG2q2z6TIHhS2FjLZRQ9CAtyZIghB5w5O44yc8Vm+ELvx0NUnGoeKvCl/JJJ5kltaJvlin3Kx2IjRRq7EAbsMeuO9d1qXhnV7wTatfadbxR3UaT/ZL+8uknmkfOJpILKzV+XJwN+MYznkkA5rUrH4d2N5PoVlaXGsWsrC48y71ZIrJXk5LCOzlfL9FDE8nrjHMVh4a8IwazGLLw7pdxIkqk20815eKkbDgZE2OvzEbQO5OOunefDPxX4etf7Us76x0OaxCSQGyjuSsjSAncI7yVGAx/ESMHkYrntE8QxeDNVk1PVPEmk295I6ma63Q3dyxZgXLCJrp1JP9/OcduKAPUbbTdU05Z9Z0aw0/StHhlY+dNvsLdQ4OI90biTaRjHOTnrivMdV1HVvEheyvfF2m/YLAnfYWW7BXcNgLjZtUnH+sk3E856VS8UfH3w4mpXus2HiqTVGtrcpBDdwyxCWUgjMccQSMFOMbxz3zXn1n8UNI+ImtQ2l5bXlz5Nq4it9PSGI3N1j5WkAy8mT/AHiMdhQBtf2R4ItNUOuTWkM9+ryW00s1qXgjZCNk2/ZOsxyORk8d81dPhfQPGV299HqUutXiKwjtoNPe3jaUchUaR1jRcDJbAVRjucVymoeL/FNpHJZaT4edXhdomLSo0kI4LiRDGyKRns3H1qa0+I/iy1gTToYra1yVadkuEYuByOQVztHYkAHnANAGHc6TqmnalHaa5Zx+Ralg6WuoRztnnlSruNp4IPftWN4p1KN1t9O8MR28E1wixta6bbl5XWQ8mVzucSYHzY25zjpmvQm+Kl7Pr1rJ9gsbYQ9Gs7eHBVgAWbYwDEY6sxI9c81s+NfG2qT3X9m6XOftrtDie3jiaRSTxGs0UpwRxzv6delAHgFvZTaRdSLqWk6tqJTaHQSgpsH3lIUHaOOxBrWuJofEDNLpfhGS1VXJeMOdiR9FCl1Lf7xLUuq+OdQtFUaXa6iN4KXTvvlDBuG+ZnK4zk4GR6k1iXmraj5O25u7iQhTtguI3QbX5JBB4PTAyKAHXmnXWk5u7jRdOkZo3VAnnzDeMDBOwIWXHIXFYkPiHTpreW11vSpbdmbej2u+OM7emVUjj61s2VvFcBSZ7hnA+dGBIjGf4gxJH0ArVnu7aO4QMt5M6Aofm8oKPQ8kBec4IHvQBy11BYeU15bQyWzOAVRmlZmzznzDz9BzTbPQlmmD2rs4z80jKxwTjP3iSce+K3ry6lFmlnc70QOW3GVy7BsYCk4UdPSsm91mW2BGlahNuPyiIPJxGAOSQRkn0xjjNAHejw5Ld2PE6ymNNshLrvAY4XPUqAeuAfrXMwaVfaPHJMHglYYzs2zN1/hUD8yTisTS/wC1niluIY7ibBDSkMyIFB5DN6nj3qteeK7vTXfbmWeUY2xvhFGRwQDz07mgCveX2tJf+XdK8HVQtxGEyM5xhs/1rQ32/nRvHFDbu4y0oQyZbPUjaM/RaxW8UtOhW8ieSYtlQsoYrnOSBhua07LWIoY0lmsLlXJxG80u056k/e5x9MD60AaN7Yabb2Pn3O93aVT+7tCkTBs5/eFi+7I4AXnnOKpXzWs1qkELfYxJsBBCpn6sccd/51Dc+JLd0SC/uQoRifLbJIwfqCQM9PrVW71Tw/qMUbQ3FxNdqDkeUY7eEAn5mYlmPHYAc0AasGsx6PDLpxdJZHXYWTbsVDzwwXk5xzk1zjWVyQ2oXjOIQyqXb7mW4AHPNHl2styYUl80AZWZiRuA6HaNzYPoKE0aydJb3UftMyRn5l2ld/oAWJIzj+7mgBEOmLK2JN6KCMM4U5PcYyfwNNMWkwx7nnWaTjbGsnIJ9eCMfr7VzUoF5IY9P07YwJKRruZgPfHXHrUkWn6qkoE1lJH5oBAYMikDv83agDSvFsI3UtfQEAbmCo27J/hIzk49eBWSt5Ajsyoj56f3V98d61x4eXJWWFi+eY0I3H255/St3S/CWmzyBbq2NsQCx3nY3+zkk9M4zwKAOOa5jlkwqrz/AHVbJ/IYpzPag5uCUHJA3Z+nBrrvE+nW3hO6httKvYNVMkSPLcQKxghmcAtGGbhynQsBjIOCcZrjbi3h8gSzxxtI5J3b2JJz3HagCJJ7NxtCqD6+ZnH0HerOYoyVUCQcHPOfoKzvJKBXRIyR6Dj8cmpP7RuI02yRIB3AjU5/HrQBc8pnGWPGem0VTupZtv7ofdORsTnj3NJ9skLBwSqnI5GAPoAaikNrIAASuD0wKAHLJdMpMvmYPfoaNs3+1/31SyOJQkcbOwQE46hSeD6CmeUPU/mP8aAP/9P8YZbexMnmjeNvHD4GPxqB5NOAKLhxx8p+bn6ipEIkbIQMeNxJzU/kxlwAqD68D8aAKImhiyqRr9FJ/wAKvW13FKpWSIuexYkEew7UjzqoAkEfXoX/APrf1qqb5XcxNtTjI+ntxQBM811y1vBJIB1z9z8cA1NBFfSIjSInJIALMMfoazDrFvGPL3OB/eVCoP4gGrltrG+PYJiqA9eSTmgCxK2oWD5MScjJXJ/PPeq41W4c4kcxkdPmO3PpjGajbUEMpazuBLIPvIQR+eahlM7tuMCvkAnbF0H1BFAFt9Vjlk3fvA3G4qCMn64zVyC/tZR5dzu2c7dxAKn1ztPHtWfHI6x/u4mjLfe3R5yB6E5qRYZioHkkr3KqFJz9f50Aa6zFIDbwTHa3zY3AD+VaL3UkVlEs3khYeFVmDdTnqF3EZ6VzC+QxZTFtB7uFJ47dq2LUeH1g2zW0rzAD5kTcAfcAgY/GgCxb6vCcqJoQzH7oGB+uP/rVdvbvUZGAkki8sKNgI44HHLED+dY3/FONmZ0wVONkW5GLH13MwxViOTSpIo4reKUGRsOzNuRffGKANS1vTLD5Ek8Me0f8s3TcfXIDHFXra50SO6KyXrmFk5KyBWRsdgr8kH6VR0vUJoppdsUMuxdp+0RAjb2xxyfxp+oWbXQRpNMiKnktBbgZB9kxxQBbYJbur6PqYZmX5vOWQ8k525JKkY61p6Xq9orZ1i2hvZFYOkkKmJlYdsYKMvqMA+9Z0djpRgjUWIjYpgGKJ0YN6ncfwzmoZAsEMiW7yux4+RWLADt94jjvQBq39pa6ok+spJHFEWZVtyio0Z4OQC24r6HGO1UEgtIbbJ05Lljx5scUSZz74bn3IrE/tjfH5TeYQDjbIoz+Apftks/yLEBjnK5X8OuM/hQB0tqfDckRa/txC+07lASEZH3cEAgk98YqKebRfsZFvk787VLM23J7lVXj05NYssGopsungYcHy96I/wCOAAPxpIbqILi4BkJPynATaccgKH6e5oA2rWK1ht1Ny8ULPjYDNvXjqSOWXj1qneRQxOHaOIFsbWUuiH3685FZdulyZCPtNpHGWADSrGDzyOSpI9zW/wCbZwwpZnyriYnDGOTc7Z/usSR+QoA0rafUH01oI7ZfsyIT5ixF2ODnHy5YEdycZFc5bpDd6klsmsNbq7bSTBKEWQj5U+TcdxJwOOtabRWNpam3vHvjLucyIhwqg44A3gEEDnj+lYssFjZbbiwiYB9smFYlc54LAlhke/egDcms9P06ffqF3OkyDILM8Tbif7pBI+tWxrl9aq9hp+o3XkS/OzJKZeOmeGB6HB9elYjazeavOLfUhdTRn7gMoWMsTgdcIP0rbtYbiNXi1Cwfy4AD/wAe4JTIwCdhRT06nNAGnNfBLKOCDWbRhPu8wX0zRqvPBMZQ4z681EuuGzgjktBpckqgRLNFKwJLenyICO/OT79qyrnT9Pu0kMGnRW7KwLSbWQ4Xg5DttOe4HNUf7LtnhJso1DyN99VCdOSCodjgeuKANq11/TrmV4vEG55AApaO7JUBTkheN2c9QQRTtR1P4dQoTDd6hHcbsrKtwTIBjI4RQDg98CnnwvrmowQmOGzuIlOR5lxGqmQnHOXyQe9Z76Brkl7HDD4esLiaE/MoaLy2A4z94Hb75/GgCrFL4b1l5PKvbmRUAbzbhHaVRjHUbRjPvW5pmneG7W5S8haK+VBuxckTRMRyAyFkYD/eq3oejNoUtxquv+D7XUI8fcium8iM7gRu+zsXHAI5Pc89K0tc0v4Z6jbHU7Dw7qtpLNIv+j2975yKDyeZ0DbcdDyeOtAG5aaJ4PisFnvbDRNTmuD/AKmK4e1uYHLdNu9kYY6AE+5qbXPD/h2FoLG/8EzW0c5A+0JfKqhcdljKqR0x+PWuKt/DXhiLUl0gSXVm9+V+zXBnijjAwWPngyHgfXPX6V9bR+BPh2ng61hefWftPkkx2yXq3iEouTLbvG42oXzgOi8HGehoA+QH8HfDpJJ5/st7IkbNmMTFXABAA5jYHvzkZ4rRl+H/AITmRLq21aWGOVFaGIuGlz/EG8sNtK+jbScfhXta/Bl72ye9aS+tUllWOGa4l+2RyDj5WSJmaPrnB6fhXReFvhvqy3U9mZLW9CSE4kiADbcAgQyxhmOM9WOfTvQB5XoXgD4bRSXFteXaySQqsqTrt86VmxlGSV9uevfPtXQJZ+GbG8F3ZQyW0Qky4glt1QKcAkqJWbAwNw6da9/vYdDe1a31y0stPubbci/2jaQyyDBGwRhUTHHTcMY9OK5W58LeKbDT4NZjS1eFnaSIWSxWZ81gQN/yvn5c9OMUAcZeeNPB8wFgt1DDDdAx+bLIERTk8FQx2jgDdjHc+lRa94Y1K28LW+r6RpMdvpurQyfZNSguluFuBHlZCJI7cxqBtPAy2Rwa9R0TxT4NdJ3+Juh6UkwTy4ltrVU851IyHcxkGXqDt+Vj6VU/4SLwXqcZ0zRRLpdlOr2ptIZFijcjlWcxODkDJ5wMdTQB81+EbnUNO1GG4u9Y1OHU4cGyurZ5pWiZWDhSkzJuYMAflU9K7aw8Z+PtVju7i30mLVp7YeXJJcaTaxXUrlsq7L9+QZ64APr7+w+GfEXhfSbIreeK7LTjLKsSw65qLmRFA3I0TR3AmRSMLv6NnGcCqPjS8t7eY69O8dhNOm+Iw3V9IssQ+6AqrJv8w85HUdWoAyodL1zWtMe0v/CVvpl/fIJVlWSGKWKYAg+ZGJMIjDJGVjPTrXnGueCPFtslvaapFFp0ELYku4reOdyAAf3kyrnkEYBOfbvXfWWoWl9JZ6tBp0k93c/vJiyXM3kqDsVGhuNux89NrN2+laNrpEBUw284tp2kZvKvUktUdypYlT5aKHXGSMsfwoAxtJsPBmvW1rp+g+FNHi1+0Td9vuXuIluFU5y/lXI2NjA+WPBPJPavo3wx48ttG0Sax1nw3KJ5ldrxPtJucpEeyuhkMffIZjjkZNcD4Ql8SWV/qWheHrVPEFxMiOZLi5eS2hIJHMsauyEc8jcDt9sV6VqFpqmm/Y08c2XhXTNEsxvu5o9RcPIh++u2SCISdSOcbj1oA6HxV8YvgzpOnxC10QtPdW6PF59sLaNxKMASM4jwo/vZ3egrz68svhBrV28t/NpQuLiDar6f/pEsRAG6GY5xNggsuD04A71i6h4M+HUiR6x4Gv8ARdYg8+R2jiubcxyZb5YNvlqTycEbXOehxzXo3hL4epo8h1S68L2+g5HnPcaRF5ods7lwhhABDdNgz2OOtAHmeteL/gn4ZlsdK07V9Wijm8sNH9maGPLZ+9GFG0DH8JPUfWs6y8W6tZX0M2sabLJpltHNd2OokfZ5o1AKoSbrYOOikMvGeTmvXfGOreF9Je3kuWhtPtrtOJNdiltZU2DL5LXauVzkYVR14wSKvw/C+68feHo7yOHQdQsbxY2gdYJhEYYnGCo86VtzYO45JP4UAeS+HPiN4i0qGz1Hw9dRQazru+a2a10uHUhvPLeW6tO6OSf3ib+/ABrp9O8S/Er4j3V415qMVrbWEm+a0utNlt725MZzuhZ45gUA5YbQPTFbE3wdvba/gtNTAbSxtVbXRoriBo5VYFSZ2uoW2JgAE5xya72/8M+LbPWrfWvBNzqY1W0SPZfya8qyRxPhXWOGX7RvYqCvKhdwzmgDn4vEfhzSdVj0tNWfw/NdL5No6l5bu5niIM0kgAVYVB+4W68gEYr0TR/FviXxxN9qto4rrwhbWrwyXb2Mks/2mI4Z98ZlimjY8EMobjANP0XUfGOr6utv4j0LVr7fM4S9uY7PY0KsSpmjIbmM/wAQ4Y5OBWXql5qPhLUrweE7OS1jnLpPcafPYxC4dRwsiP5QDgD7u0/Uk0Aczq/w/wDGstrLP4X8TrEZiqLZyWAljuIlwSqQ3qmMDHT5cHJA46dl8LvhxoXhKfUf+Fn22nahrN7Kz2F7b6ZDYqinlciKLysqeSuFH1rxLW/HPi+2uYbC28bXnhs3bk2xvLHTC7gEM/7zzCpK5PC9V9TXSeGvFtj4p8R22n+O/FOkeKJEjZLaOb7KGQ4DEIv2hsGQc4KDHIyDgUAfScV62kr9g8PWlpb3Ky4E83nW/mznuqCNoNrchSTjd2rD8QaX4Q8Yzx2fjLSrC1YuBcjULmG2Znb+EMxVRs+9kdT05rL8NDx/Za9/Z51G5gs2LvBbXGiXX2Xy1wVVblGIzg4yWwCMgZr1XUfAfw/8c+GJNPu/DUy6xcSecIbnU5rdiwJJaNryG4VQx6qF2n07UAeV+GvCfwx0LWrzXPhbe2erCSYnVLW1vIjZzMF4EqbliYhsFt24KO9ZGn+L/EXhXxlNHLqnhPwtpeoSqZoDM6iO4DFpHRY5ooHZgcEIBwdx3Y59a8P+FtC8J6RPBqXhi9sX8wI8F6NPvLMv0zEy20afOD/dHv6VTvfBXwe8cmfS1+HXh3XreyZZpnCRWU4+8VBEcBORjBwcd+BQA27+LPwKtpLq4TXodUdkAuX0qc38aybuWdI3ITn/AGOPWuk0KPwV40ni0bwVrcd2JY83U2lXKL9mSTk72jdcls5BxnrzXG2Hwq8DaLM+k+D/AIe2ENvfzR/bbe3m05SkB4P7x5I2kTcPmXqOy8iu/wBO/Zx8PzbLG20+7iEasoV9RysSN/FFOGeReDtwuFAA4oA8n+LOt+Evhra2tx4v1+5063Vkto5lM12mCdu+S3a52SDjJJHHoTXyl4l/bi+E3h19S0TSUvdXDQ4ivtIs30vc65wnnC4ik2scfMEwAeM1718VP2GtQ1TUJ76K28QXunwHdEsfiKOUgbcHak8SKvHcuPrXyt40/Y5+JUyW2l6B4burjTssrNqa+a0AwDl7mKMBs9PkZ8djQB6H4K/bV+CPxP0Sa1+J9tdeHZtMBa1WNri8MzKCF3MXLSE55Ur16k102nftOfsZyCztPsepQ3PmB2mfSzHA0yA4eVI0G5gcbSS2O9fKmifshfEnTLbUZ4vC9rcSI2ZDImpIbeNed0YQhnz0+61ddYfCTV9JvFtdS+C+v+JImRCjT3H2KJjjkgKGkKE8gt82Oqg0AfR/xB/aC/ZO1S2EGveFrzxOkUQaC6SzuZmRWbqHeVHXDZ5AI9OeKs+GP2g/2RvEuqQf2u+nBreJLeC21Wyuogkfyoqs84CMV45bHQnJFeav+zn4z+Jmn29h4e+GPhn4fafbkm6lvr3zb51AIGLhF81QMkhSoJ4qppP7Gk1vrslgBfWzLCzi/stQuHt4h1TarQeYzbhngkdqAPt7V/hZ8LPHNovirwroelNpgQIbrw9LZ75yx7ERyAbehIkAFfKnjPwF8Nk1Qy3miXVg2TDaNqGsXTESrjLyCGR1QAgkABRxnp0wrr9njx/Y6bN4atYPFXi3TwD9gjXVY9LjjuiSfMaA26SuuCTlmz714Br/AOxf4shsFufEVn4nS9DEzLIIZI0P+w8s3z+m4kDj8KAPsrVrf4SjwzbSaprlrqd7FBHAujWGrLJcPuK7Y48zrLtPUkMWx0BrA8O6J8LfB13cavo+g3uj3mq/uzJJaX0ttBIXICB23I55GN7AYyQeePgvVf2Xru2sVk+yaoJ53WO1WbTRGZQckFfJL7icdc1Z/wCFK/tSeBNLTTfC0+qjTVYyJbRh9kTPydobIQnocYyaAP0+h8KeOdIsJLSw1uDUrq5LuRdEWvlR4ASNBEQ6gH7xBOT0zWZrWjX3wtsFvrhml1a4Z5PtD6hmGKSRFA+Y280ipkfelzjHXk18S+GvBv7bF0Le7fR0s0gXAn+zxQzybuhlaINKST0OM5z9a9a8IeF/jN4WuotS8X6eLM3MMwuL2a6jurYZGd0kd6mwuTnA3ZGSO9AHZ3Mfiz4ianp7+MdM8Ny6Swb7Rd23iCZ7qOFVBEgWO2j3EEA8Lj6CuB8aaP8ACXw+5s/hz4dbxJqsz7pLqYyzp8oJJQyb0xjHLLg4OK9X0/xX4fvNVih1HVfPe0gLy2mkNbXUBbBCnZbxhUDDr83HpisDU/BPh34qa9HbaZ42vfD5t7iJhbW8ltCtuqA7Wc+bHvlPpgle/U4APPpfh/441Gzm1ax8KaJ4ZuZokmtZr24tBcKRj97H5yxOpxnoABnjBGa09O8G/wBh2tnP44vI7y7uTLD9rl1MrYMnURx7ZW8xyBhjtcjtk16Det4A8HxJbwfF+5v7xVxbXWom3KLIAQYw0cDh2ORgk/Ljqa4S38W+KfKmbw54mWa+W3kYzSX0U/lx+YdpBjt4Yosr0XcW/HigDlfEvh3TEsLoal4dlksFV1/tCynvEhVdxDKDMVyEK4wqDg9zwMnVNM8O6n4Ug1DwtoVjJdrIscC3EksFrBsJHyL57SzSjIO5pAD3Wp9Q8XfFnxn4lTV3istTljhSzMd3a/agsXO5wQrguM8sc4P8PauY8U/DzxnqGpQWEiJYSQygW9nDZuZVQZdpUzHECXPDMY1Bx6DFAHKf8IB4o8Q3N5q13ZwNaNsSU2pkkigVcAMIofvF34xhjnr61sabD4+8B30Gi2OnaRoYhAlmmudMjuzMJwQmEJJc4YbS2cEcEVc8aeFfjUmnW9pfX1lYaZcRqqXL2wsolVTkofJRNxbAJIDZ9apeJrzXn0BLCLxLpr38EKE31pF50oyPKKJI8pyQhwfkJ5wBxmgDmfH+r6zpcb6J4gMV1NJK90zQ3IihnkmZWIkRY18vp0LMc9+1ebah8Rdwh0f+yrKExYjdbRLi5IVDzjMhiO7PX2P1r3jSf2bZpYYNX8a6re3tqlqtxEsMStPdLtDiESOH2E5yN2OMnHevGfHPhjwrpFtLPoUdtYw3F2VgaXVQ0iCP+FogmW9TkLg4wPUA5+41zwxri3IhvTbSQt+5t54lU+WBnCseFO7OV6fyqO38QeC20tLXVtGnmliYmOeMj94pznuOd2PYD3rDs/B2opqsehLeW+o6rdqdsGmRyam4387WeAlNwXkjJIxyK7Ky+GlvbWwuL3WkZZXFvGk9i0O0kDcXafESqM8fMWP90UAc1FPc3cJtLXw5GYODB5DuJYi3fcVIOccjBOe9bEHhPUpI2k1Dw/eTzyOhTz52+6BjHzFe/Oe3pXcaR+z94m13R7vVPC0MNrGCsUMtzdRWr3DMSG2IAcDHKk4Hv0p+p/s4fEvTNKudU8VXV9YWFggkubmWYSWxDcARuHKM3Y8j1xigDhDpuo2i3FvcabDGE3NMp1QAKrYXBCtn6dTWS0em2ML6jDHbOG3hLRZJrlQBnq8igKffn6iuR1C7h0jTJXh0hzOHMUNzNMJVK4OCY4wAH5BGWb6Y5rhtF8WXemXv/Ew02PUIX3KUnBXG7v8AuypyO3OPUUAenrqkrS7LPZCEBcTSkcgjlcgMcKOOTzWLc65pqI91eyLdX3RQo+RWB4Py4DHsAOB+lNl1j+2Z5H0nRhAjqEit9OtywTjBJaZ5WLH1yeemK6JPBGpyaU2uS2raTo/mKslxqDoJRJGFL/KiIcZbIwOnGSQaAOIk8ValJbSB7iXylHEJkJjB7fITg8845pLbXrm4ijj1BY44kIw5hA+XtnBGR+NXdcn0nTmZNGEd1lMiZFllj3Dr8zbAT34BA96464vmm5jt43lAwCdx/HaxKgj6GgDp/wC2bewuluLCeNfm4ZFII/AlqhvtTvNTudloZ5y6/KSrBix9gRxXO2UWt3UMiJEvAwXyqle/G4gV1OkvrVjbSzjykQqcs88av9eH59aAMo6XfRzNLJbR7hjIdSefTjnP41cs4NRuNuRCgLgNlV5x6hgc1Q1DUdV1FgrklVwoxOdrY4yff9Kg+x6haAPE+SuSRFKDyefToO9AHpT6xJa2zOkKXs8SYJLIRHn0wQOfQA4rkLw+InvItQnsXSSYb0wAcp2IHp7965xbjVZmdY7iRJZRtJEoUkHrxwMVZt4tUeXYmpTxzjCjynDnPoCr0AdVHLdMnlXemTM8g+VgPJIP4D5h25NMn8P6+LiMTGEBioRDLuKhumfatHxFpfi/R9Gt9Z1jUzFYS4t7Y31yn2qV8HcYrdWaUovd8BffPFcA2paiSiJdRT4wVZ1KMMjr8wBI96AOyRriC6e1iSOa5TC7413c9cBgOT6k5qjraXplEuo3Ee5UXEbM8bAHpww5+tYovNUSMStN80jEfIx3E9yTgD9aoX8tw7LjC7QMlcNkjvnmgC/BPbgHzFEojHKyynGfp+lVpbr7QghHloqZwOf4qzTCYdrpGzZXcxbnqetWUikk+aSAKMFvn4z+lAF+S104af8AJcSyXJI/drGAmc85YsTgD25rILvCwRCeOoZOp7YAzVkMlvECyqOTjC8/UHrRCYnlEkjsR12jOfw+WgChJNNGd0yhSckDHX8MVRF7dvncFT6VsmKOVt0kcu7PDlc49hThYrPKUijZsAnJwv8AOgDJW9uG+UAMw7AY/lU2bn/n3H/fVaEdqlsGUxAM+Bu4yP1p39nD0P8A30P8aAP/1PxeW3GcBM/Q8UksJVSSjnjoG/wqo9+6uAIyOvOc1Zjm+0cKWJPTJ+XPoTng0AUUgw3mMpQYwCev86ge2QS+a8gGOmcsf8BVmVLxn2CCUj+8uGz+oxVZxeWUwaOO4zgj7oH15yaALiC3KHMiAk4+7n8uamNvbiHfuzzxkBf6VTRrucFmt3C+r4/+tVy2LbtpiVvbfjp+dAEduuFJ8tskY/d8g/XjmrW5EGXjIPff8uPzPP5Ux/NcnC7Wz8uMt/IYpDbagsYLzbD6FSc/+OmgCWYGQ/LDuzj7vOfzOBSLcSxNh1kKd1zn29QKqPbX0oBOwjPQIwyfw4rUtYtUVPsy2zBPvbRgZPqRnNAEK+Xd/IsTAd3dV7dhk5q/a2DhgVZlIPZgB+h4rPuVkZtptLgMvdQcA/hmnNaX5t98Fm4HcyFhz+NAGvHLIs/zJBIpP3mVC2R75q7Kt6432d9DGjAnkDePXjdjtXFvYaoG2u2wHsAxP54qD+yNVQgGZiDzhif0xj9aAOzQ6wttJjVkKFhlOFYkd+c80he/jTb9tBZ+WPmRkYPftiuaii1In96zHGBllBx79Ku/2dc8PuZz3Cov9BQB0EEly58yV4rnHy/K21lGOPu/1q5NfX8Me2Rwik8KWyrY9wM5rCSyaNQILe4Zm5Jj3hc++Rir4jmVFVrMnBwd8uMfUE/1oA3Rq0xtYxfxlkO4+ah3YHH3CRkmrcc+hxjK30hkzlTPHgDj6HP4VyN1FqFz86vBCAeRGw+bH0LU+ytHac/aJY5VAwd8oUj6cDd9KAN43dxMrJFEl2y8ExvjA6nOFLHj2qrLbXmoKbnT9KmaCJgrtAvmEFumRtB57E0+bTLyQv8AYCjPHyoUOpKjnIOMcVXs7jWLKU7pmKnkpG64OOxB5P5UAS2cKIzw3l7e6Y+TujlHlkj1+5+nWob3SdC85oWn+3MvzCWSaQhj6DKjFR3txqOpEzmzO8jO+XcCcewOK5VrXU5p0lMTADo0SFv6UAdDKmmnb9ikhQRgIyvyd3+yDnPuasWEZnAIWJecAtL5JJJxhQGUHnqDWGltdxyoWu0TDjAeNFGR2w36g1rXskq7ifs0ZlPzGELgkDHRRgE4oA6/T/Bg1+4aKK6nhlEmw4C/ZlQd2eR1B/A10l58Ib3S4mnvPENtcxAAtHDMuAOw+RuT7V41JqGrw2X2e0EboTkfvwDz32g5/MVtSeLPiHb2T2TXzW0ESBZooxgMg6bnX7w59aANzUvBumxwrcadftINyeZxKgRnOMls4Prmo9V8EeJbK3S4a5jNsuCsn2lGiwc4IKMzHOO+K5P/AITLxE9oukExbIg3zEqrHPTLZOcHp3roT44/sXTLKz1HTdKmuCS6XUF0skwIwAZAgLAjHGSM5oA1tD1fxjpaGGXVYEs4+ttLMsavgYxk7icg9O/pWx/wl2s6Yg1XT9Uj0KVQVaWO88yQo3RY4u31AHHeuUXxtd38M7LGpz8wBkzKwTB+4MZHuDVi7+KV7JaCE2NtI9upO2eKNgSSMMEdWyfXP8qANvRfiBaWOozamdZKajODG95LLI8hGMA85XA6AVjXHir+wtbS/wBH8SPqM1zGBcSpGXVd2CVAcEEjA7YyOKyrX4g21xdWxvfB2k3gz+8ZI5IpJc47RyCPOeny17HBcfCXXb+5iXQZNL2lfs8MrtbGRmwNmyRWQc8k+Z9DQBzXhzxuLzU57m5f+14zC8YttT2LCGc7SyBVPlyBeQ23A9RXYaZ491jw+tvcaXpFlpcWnkmKU3UJacHJOZMkuT0wqj5etZ9rpGlaJc3b6RoOoyEmRY5YjDdoqYOWVZMgkD2OR09a5nTtN1TX2ubXTFHlbSk0clnh1mLcb1Vwikj7rkAAHHHWgD1C8+Ic2tWoex0fUGv7gCS4v4JSIY5GDM8cUWC5AJBA4/kajHjGLUdFuJ7m68Ui8s9rSW4to7mE9AG5XKqM9d+fasHQ/BNnpumHxRcNEsfnG3fc8kTQSKCdzbYJwq5XGdx6jHt7D4O1TWr5rGGHWdPtLW3m2RXtzdsZXl28JHlAmwZxypznOBQBzuifETwxbWlrNrCX7wxyBUS6tTJbiNxgjd5BKyA55+bAOeSK9p1fxV8PdR0mfUfDviM2emLF9mhWO3/tJYnCAM0kLBV5U9SMj9B5B4r8S+PfC3iy20XUdSsdTnvgV+xfaiwV3OVcSNCip1wMvg9h0rqfCep+N7C7ubJLWxjuiZfMhsrtFm6hmIcMIw2D0bk880Acfo934T0lI30rxhokUflCSAppMD28twvJFyspSVBnvjr0FdFoOo+D9et7i+8e6d4G15LhljZNJeax1EtwAys22J+eoLrx04rS1P4U3UVwuvXqR6lvVJooHubhgJJWAVXMbqik7sZAce9c3p3ibRNAuphrkaqsOWa3uo0YuwJz5bSRrKHjHAO8gjqDigD0jWvh1+zn4w0TTrTRNDTT72GTyZ4ovtAuCiZ3fvAJY3IA4OSOeDWboNh4a0KdfDnhHUr3QLiNnBGsXl95HlxnJMO6NYsYHAyK5yz1jwhd6/aIbtzDdzpcQS2yReWBKM+XO1vF5kgU8HdtPPHrXUeJPh/ZzeJbPTtMgtE1KVG2ytagWcsxAkELOqMwDA4IKEnoT3oAl1yKG5vZLS2j8Wy7ssNR03U4hEXwNzoJZkG0k9SOM96oeHvhf8Ptdvv+Ed1i08Z3V/bs8kwuL1JYVDDJeSVCIx0ydobI6Vv6V4D+I+rXs0XjOLRdN0v7LKsN3p8JiS2aMYUiQSg5JJ4I5I54rf0HQvGXhTQJNc0Hxxt09H8uOeW2lubW52YUGcrMyr0OAudzcEegBh6BpXhn4e6xq03gfwreG/jg+Uf2yID5Tj5iVmCAqT2A6HPevaPCPxB8a6lcuvjTwNqVj4bnAb7XL9l1UbVXkc4wrNk5VXIHrXYaJ4d+LdnpFpe+KW0PxHbyW0b6b/Y0STyIsr72Mdu0cJKsh2uokYggEDJ488+IXw+1TT9MmtLDTBawTYlhm0S6OmsjNjdG8UsU4Q5zkiRfQ+4BW+LfgrVbnSAfgY/hnUdLvGWSezMUFhfQlzkEhmClPRhGueo4rB8BeC/jPYyW2qD4cXdg2nIUnk0zVIL+znC5dT9lkMjKXIxIYnXI6YNeRWFhPYeIYtLW01PUdQQDdKniazimj3gfL+8hUHBAI5+vv6BG/ibRUtbR9Ouru6uNsE0c2sQ7JNxztuEhXyZdwyM5XjOSO4B6d4s+K2o3SRx65pV54ctrpSstrcabfI8RUlWbz1iuYNrjndhWHfpXmF14n8U2ryXPhLxHHYWlhCwjXVvEF2uQfmx5BtNhLfwjGWzxXa+Jz4QTT10yTSvEugaXeJFLLqUCGaGCRiVGWhmmRB1wNuMfiKwPBvgfw18NtBvtWvPFuueL9JnUTskJM0Ec/mZDS27+cGwBkYCNkZwRQBwtx4n+KPi+Jb+y1zw/HJAY7WW3fXryzCn+FWjZrfcWwfuKTnOaxNX8I/tLaDY6hq/hfXLQeYyx3UenXLXMrxkZUo07szD6YYCvCPHfj/4XeMPE8q65J4kjslZjBcs6TqrFhu2wILfapXjJYnpx6/Wnwd/aT8I3aWnhUX9mtrYJstdQ1bTTHdQxqFXy53gXy5FkBOGzkYGfWgDz5PjR+1f8P4zGunW63V7DFbf2jeWYMjqicKJH2Fdp54ONw75rauvi3+1f4bkg8Wz+Eoo4ZYibz7Mxura+dh80jx+ZOFfbgZUADv6V9wXXjP4bW1k1lAkNlY3qP51uuuPp8LMePMthKTCrE/MTE647gk4rltF0vTP7aL6FpGp+IdFMaPHqKahaan5b7drqXSeKXK9sM2enegD4wm+Kd41sfE2p6doPhe5uE33FjrWkR6hZXJAbLIrWzBC+QNq456YrhE13StSuJLrwzpng24vJkEsgt9GuzncNpZRIsccZGN2xPlB6Z6V+m8fxU+CdobnwZ43sn0O1ihO6bV1lghuIQAcxG7jaGVlLYI3g+nHNX9J8IfCPxjdBPhLrfhya2Aj8ywtLyGKZ0ByxdIZSjcHj5R7nvQB89+FfHnxatbOy0nwp4bs1mW3jEmnWF1bWFijMF/eokieckhOCVYMvpz16++1z9rm/1GdLPTtHN7DCZG0eSZ7yby2I+ZEhdZMnBXd6k8ccdD8XrSLQ/sMPh68sLe7Enlx6XBbW1zJIoHKl5Lu228AkfMB71zrfED9oTwlqv9rWXwq0vXGnVLePUraWCLUeRuVN4u7zA5GI1JHpQB0GjfET4h6QrR+NPhT4+8P384WOe48P2aywPt53RmWMSoT0yXP1qg/jDxj4z1m+XUPFXjvwCztttItX0MopH3SDdyNOo4+Y/KOvBr0Tw38Yv2rW1RLTxJ8M9e07TLsxC2FzEt+sDE4ZnZbqzKrnkfLwPXrX0iPHPxA8PyQ2s2pWNr54aQwXMchcMRz9+8YgbuoAY9vegD4q8UeDPiRN4bkj8H/Fu+u50cM0VjeaVvZmxuxte2Ks2M7GO7vmsab4J/tNX8cGo6X468aWdwyQN5Qmup9+PuviKeeNVB5wZMe3avqrWfiDqOoQyLrujeGta1a0LMczCG1l2/xhDE77yDgAAkZ61mw/ERxrllHp0GsKLi3TMOn6ZJe21p5Jz5Mk7+XDEobheMg9SM0AfA+rfCP9u3wtrT634f8AFfiCeRXJCTrPInI5fyZFmX8k4PSvQvh//wAPALWU3d74Uj8QRmaNppJYbqxu2VM5IXdApzk87Dk9q/V/w54x16C1gv8AxQ40+2MBci5uIdqrjO52VGKkdwTgV4b8S/2ovh/Z6deaXBcRavNaIXT7N4gi0/zGPCss0SgYPou5gT93vQBD4Y1j4r6lodsvirw9c+Hr2STy3W/bbCZI87TGqXCzY7DcACenrXFPZftX6H48e8sJrC58PPHl7aOx8xgDhgRu1FpC/Uckgf3a+X9Q/ae8GaKq6nJ4cjn8QXagW9rPcvqxDo3Di6tWkdm643DcTgnFd34K/avtZbjTIfGPjG80i7eRSba28HSoGEjcp9rvJHIRejPgcUAeleOvj38adLvok8HfCXXtfv5nH2qa5s1sIQ6nABkdX3L1wA+AO5FeM+I/j/8AtjWc1xr2s+DvDOkWZWOMwXzyHZzgH7QZI48joQtfWFv8cPCOreIZ9H0DXtEvdSuAJfskkhiAA6vIYlmCkYO4N+VGuePfC6zNH4kn8O300r70hEkc0wOSFdASpXBOFbaPwoA8r8L/ALQ+t+HNKW98W6bDe6rcRoGstBjmurWON228yhXVn7tuKgHHOK1o/wBorwj4hvbLwzN4Y1+K9kDvdwppTXKJgllAkgmZV8zpkKxHPHavlX4meJPFNt4rS8stP0GbRHufLhtNfkhvVYscgBZ5CuCw+UM6gA9zium8I/tA/GFJr2y8EaRoF7FZQvLKfDUcMaQOCAFeMPbxqFJPSRsn1xwAfWfinRdf1rQrVrM67pd7AW+yw2NtbpGsk6gK0t1ePCSI852hhyMEHGK818ReP/iZ4d8PwaP4ja3tLy1iKTJf6mrNLkAb1TTrWcmRs5I80n6cZ8U179oX9qr+2Xg8MeG7m3v9jf2jcXwt777LCQSiwiN0VN2DhsHB7nmvqb4T/EC61jwlb32ta3LPrV9bGWZJ28ob9+0FgtxKAgY4zgLx0oA8B8C+K4deJ0DXIdY1yBVM8lxp1trcqnacogZiF3c5+fGPQYOeuXwb8K9G+0+MNa8KxXjQZmT7exuZMykgRpAxBaY5GcscD0xx0WrfEzWPB7X2vat4d/4Si2j3rA2jw6jqMbXQwGwGeO32kfeKmTJHQDNeJ+I/2i49Q+XxD8JJbQx/LZSS6c+J4jg5KeVKQ245C8DA69aAOp1nR/B+laLJq+jfD/T7GW/m8+dZpJYkhVzwEiSfa0gPQsgVc/eI68xc/Bf4QXetW/8AaCx2WsmMXM2nzanI8P7xc+Z9nhn2BdpJBB75Oa8s8f8A7QXxC8TxSW3hLSPGFksW0G2tNJURyLtActvGY15J5bk44Aqh8L08XajY3N34P8DeLbfUA0c1/q12Ega5dB/qnmME+1TgYOc9ulAHY+P/AIR/By/8OhbGbSrd4ZhLK9kl5qipEAAsX+sKJuIy8gKhenPUS+ENF+EOg+HorvUL6aKK0jGwy2iQwzEguVRZ1Vs453F2IHHauq8WyeCtX0uG5+LniPWtDuI7aIXOkaRqB1O4kmG4pGyQgKHJ5xhMeg618p6r8QPgZrMNx4Vj8OajoU1qTC9zf6hBDM5VvvXDCWaYZAAaJY3bJPpigD6P1b4s+CbOW6bwJpsuoag0CmMiKSeymZApBVILfcxQ5I3yBQcscd/lHx5J4T8cayuq+JfGOlwXa5eeC41S82vMAd21PNk2kfdAzx/ePQdZ4c/4QrW9Rn0dIY7qF4Y4WuEh1i4hkLE/LHCttb7sYH+skAbPNekapY/s8/DmBru98JeGr7UrcFfs7efeyyMMfegtxKYST/DI5J7EUAed+AtK+HGtafbWGk6Bpet3twv/AC+T6rdRo2QFWVt5CDaB92NgcgL6Vx93d/tDeCNa1az8LaHBYGeMx+V4a0CSKZUKkL5FxNbNKmOCzFgcnr3H114B8feOfGrWFp8Mrqy8JR6c4N3Bp3h9oVQuMhWmmiKkxqM/MwySAAcZqxceKfijo91qsesfFGe9lidUurWDy45BJINwUt5sRAA5K5XtnigD4T8KeFviBf8AjCCDx+fF2jzSSPNdXVzqESTRRAg58qZ0T5nC8luvbvWV8YvCvhfQ7R/FdjpOqatA0qxpeavNZxxXEh5dglnvkfJ9ZB6lj0r6I8Qad4Y8R+M7eb4na5awR3ZIjmhvLZmk8tiVE/kq9xuxjaTOy5IG4VqtY/s1xabNNf3dzrBsbhYfs9zaGc/vONyr5ksjIOpJcDp34oA+KPCnxb8JaQYbNfCVvZRxxbHuofOaUyEYZix8zAbJyAF4r13xJ+0h4Kh8M23hjwP4fT7VHlZ7q0icHB7LLNh1Yc5KRjnoavzeM/An9uxaV4Y0yzEenIHju9K0JElupZGB+f7VK5+T7udoHXHHNcJfnVNZ1KXW4rK7EF3cSCRHFtYxkrgqqhU5Yr1AAz1oA4hfj74g0LUUvfCcdxFdRhf3+pmG/kWTGGKGWIhPbuPWo/Fv7QXxC8V2lpaa7ePeW1tGwjtnuHnUyuMGUjIUORwNoGAMV79p2gfDYaLdWup6Fqv9p25E9yzXEAARsEYYuWUHPXae3Y1naX4P8Is91f2+mWH2dUJQtdQ3UwABJZ3BwCvU4UAd6APlDTPFPj25djYwWkcLMN3nwxeWG6ZJlzk+uSfpVW+s/FCXpZrz7XKx3AW0KlS/+ySFGPcfhX6B29lo39lQS2GlaZff2dYus9zbfZzbocbzLI7PtUoGHmFc4AxnNfNuoahYQ3MtxBf20lxBJgzpIHyuAVU4AVADwSrH3oA4eS98b6JoiXGqXn9hwyqZbdbm3iWWVgACY0BeTJH8W0D3rgp9ZN7bm4vdXDFQTtkSQlmz0CxnAH41peKfHGhXUokurFr+dyTMRJ5agISqjeQzEYGQM4AqmvxV8NWqWgsfCEEBgGJd0xcSfNnK/J8pxgZyT15HYALc2d9GhimvZuTvS0sREirjGTJJuOT05HHrV3SvBl7q1xLBbQymZVJSIqJX4GecKoH4kGuivf2gINX0n+zr/RXESriKOKYiONhkg7epwTnBOKvab8edNmgXTX0tLJHVVdodsMxZV27zMVeT3wGx1wBQBx934c1ixjnt9QsLeOWJCwiuIQZmI9AH44Ppmq2k+HFCwXOr6WYo7sf6PJJEVikOcHaW4OCMcGvbF8daPJBBFZ6nBDGN4DSzylwp52uzKBgk9FGTzkisbxJr1hqlig1bWY7y5gVYbe2KZt4oOSdhld2HJztUAdaAOOv9AsdBcXN/pNqkca5CrOoZ1PIOxixyR07VgXeqafOhOm6UipvG0Sy5IHucKOfb863L5tHs4EiF8kyltxmYpFAg252gKJHdhnGOOa5y4vvCENlFcGC4eZzgiRysW0d1AYFs9TwAKALlrqdyI5VTSLEs8RSN94Iiz0ZRkbiP9rI9qxFudfsJEuJGkDAkAwlFf8G2ZAP0pl34r8PxxSW9nbIGICiZVck/UNn8atp43STSP7L3+VEXLjZCu45wceZgMOnrQBgXcWt6nItxeXM7SRnCCRi2xeueQABz+NR6idXDhri4llZVBVmABIHHcdPTPatJdWgSf7VFavMIwBl5d5JPqeePaultNW1LUJPNaBvIBUsoUOAB0UZ2j9aAPPV1HUGKrJELg564OcenpVmKyvb9t8VvNGJDtXy48qWPYY4r1NrPSre7/tG/tpZBOjyfZIjGgU4wgwuRGP8Ae5PXmuVuf7Qu5tyypZCSMKIFucAKhyAc8D159KAMO58HeIrW3R5HcB8nYcbwo9V6gVAbLVrfYZSqqcLy2PfkZyK050vJIVWWWSJ48hpZJTznoo3Ac1kNLbOqGaaaUlsOCv8ACO4PP5YoAka2ulIcKj84wWyP55AqWRdZVY7lIQU5UEbiuR2FY97dxTIbezt5kAOcswKnHfAUGm6cutJE7W0LNGM8hjsAPXg8UAbqQ3cyCSSJAF+9uPH8/wCtX7JrO3c/adgJ527sDv1wM4/Gsyzv9YuGx5G5IweFA2rx125AzUkmpxxxuZFQO6chlBbB4OAMYPv+VAEl3caJCXcN500nRIx8uc9yQMD6ZrnjqEikqIeBwPkNSrdW0jSSojRNx5eFJX8Tknp+OaZ56nklsnr1/wAKAP/V/FVrlg3zMpA9fvVNE1nNGV2uZcjG35Rj9Kp+fayqPIdGPsw/QGniX7MMpuBbnkZ/I0AaRtWjRiGb5T2/wqm90QcSXDp7DH8qqNfXe7IlYDrwcAfgRVv7bHMgOfmAwfkzn9RQBJG8hdBHNv3ggAk/yFWlhmaMgyKpBGNuRx+JqlDex52yiUEfdePII/WmzXER+dHuGKn7rE4/LpQBrGFo2wJWcdTwAQfXjNVw86uXMrOc91yTj8OazTqMeQzRyIevBA471FHqmnxzeZJKyEZyATk5/wA+lAG//aaRgeaqkE4bC7W/mKkTUIWZY40mZW6ZPP0qmutaZKmwKjLjO5gSc1SeeSS486JtjHAXZ7fWgDrhJKAqwkRlyOQeAPc+1Pkt7u2u1S+fELc+YHZ1we+Ac4rkZNQKAi7Mhk9jjJ/Mii1maVldbeYgnjDAkfXPagDuDaIoxCY3D/xRzZ+mQ2DVKSCMLtmKLzyx+bb+INYgZkLSQQy7jkEMwHH1z+gqGeC+nxtkSJm7M4b888UAdANIZVDQR2024jD7+x6HB5qW58PeILSIXlulsFflQJFcn1+XdkYqjb3+p2tsIJ5kkaL7p+Tj6cnn04rMutZuogPMdmkZuQPnGD6j1oAuznxZPbFJDGMdGDEH8g2Kpw2WuPB5V7JjccgM7AH6Z6VCb7V5QfsnmqpUqfkKY/LAqa30/XruBpdwkCEoFcEdeerD+tAHS2/he8jj817uHBXJCOJCoOOvPHPHNF7p5ghBmZZMfecxJn6Ahc/hXK6WNd0a881Zo7ctuRwj5LqeoO0knHX61vXN7ok92ktx5rtEFXes8m5yMcspOSevQigCUPNmO3tpbiMKp2v5bbR3ONq5rLM3zs0up3Ksv/TByOfQsB/Kt6HUrK2Vr/T4gsrMYiJZXjAV+5BOCB+NRyX2iSyiK8QqGOGME3nxnHcFcEA9utAHNIlsZTGNYR5DyQzFT+J4/lXpUFjqwt47u3ddQt5AFMqvEyrs64CyZJH0rkz4d0aTUJLyxgBi3ArDI2CM9ASQD9eOKmaH7MBEuy0CnLeRcSjJH95UyM/hQBJPpt/JJiG2MjPllKgvux1KjaT0q2ra9ZQm0FqDGRlohHsYL1wzNg4qtpmpxWOpLeLMHLH5vKkMUhXvzt4JHtXr9tqWias3mXF5cLdsg8mKSNZXB6AZYKsgx35oA8bnuNbWFCLKQQpnyzG2FjzyQGAPGexrNuvD/iPVPnltgMoGMk0hkYqehGWb8q921PTGssz6klhqNvLlYrWO3khmA7ErGyqSe5INZVvbeC5/Pub4LowhQARMsvDcjIIc7hjswFAHia+E7kbY3nWSRc7ogwDqo6/KSD+lUJ/Ddxk58pACRs+TeceykmvoLTNP0e8geNPEkUhDksj2o3FF6DkA5I6AGr954UfVNOebSboXMUYGYmi8pQBwOC2AST0HPtQB8wr4dnWTZhVyPlwWU/niiHw8POCTxqrZ25djgH1PQgV6/D4Zl+1xNagRSudp8yMg5PGQG+8PoOauXVrpWjXP2nWbbz54PlKrCseHU/3CCr/Q/nQB5hH4V0ueTYLy0jkAUqFLKGJ7KTnke5FdhptpFpdu0GoXVyyAklkuwI/QfK0i/mM13eqaXot9pyajJa3ETPtdP9A8sFcZwBDDjjv81ebXmjXdiySJp98I5RhC1mQrE9NpmDdfwoA6uz8XavpOp2Eml6vHIrkL5+n3AN6qhgcFJh1B6ZGD616voqeOPF2pz6tY+MNIt9QVyhNxBDZ3sg65ddjQlh1Zg2c++K+dTpl5cFrObTI7C6Rg0ck6SiYlf4QQyxjntt49a1YYviLY3p1OQXl6+B823zjhfX5HB49aAPpu80bx7Bpl5P4isoNUEUeJprdROccbWxbeVtODxv3demM14ofG9z/bVs2paO8EVtHtZIori2imwcESCBuGKceZtyMDjuQeLfG8jRtZaY9m1yEQShGiZnXof3bL3OenX8qkvNd+JHh/UbewvL+W0uiu+J50hkCq/Us8gMg+jZoA5fxN4lW61MtZW2psgdnhfUbqeYISdwxJIYzx1GFrrPCvxS+MOgSxX2hT2OsQPEQ9hcIt3E2OoeNwsmR1+99DXqPhXT9N8QHTbC78daWNX1cvbXFrLai8jBDFvOLRkeQVx97Gcc9K1f8AhQxf7Slh4k0/VVWRfMt1uPJfzEYsPKYEKfXBGaAPLrX9pjxdoumahoz+F9KtDfNMJjbNd2rgyEnC7ZiQEOMKOOBXo/hP48/EDXPCMOmeMtMtfFOnRg2sZeJxfQ7mLEiWNWLZQ4yRnAHB7y2XwI1C+uJrOa7tGEoJs7e5nt/Mmkd/uK4gdifTg/Wrnh7wBpnhjUzb6/o0EdhA5V57S/uUuHkztXBR7eIP2HHPvQB6Ncaj8OLXQLG30yXxVpWqxRoxtoNkdjIRyUhe5X5nTORsVW9AO2nY2ngXxgmnxT+OdQsrtirxxeIdO+ztJKuSFhuNiptDdCJs85xXd6lo3wpufDtn4jbUZvDF+H+z7rXWGgiuUiIVUuod7hnb+J0yR3A615h4h8LfCAMbq/8AEGs6dHkzK/nw3Fkk+QfmEcq7tvGfXvQB7H4a+EXixp5Tr9sNQ0q9d7eeazW5S5SJ+VdfKLCSNTjO0lj39a8d+I/g3xl4LvIta8A6jretQpEkUdrPEz2okTOf3EtszbQedvJyetchcX/wfu7R7u41XX/Dc8rNv1DwsZ49PkcHKPLavNJ5TPjcWVwucnA6V6Ra/tQ6F4Q8FR6HN4o1vVta04vGk9/DGss8PO0PKq3Al5+6VZTj7x70AaGi/tIeJ9D0O003xb8NryGe3i3LfaL5unIV6ENbKqoW3EZ3Ag4ztFfRnhP4u+HNX0KDUrvV9RhN/wBIdZs42w6/wllgUrtIz8qnjmvizSv2s9L8Q2y2WoPdaVfpjddGWUW8xBznmCcRnAHJUCra/Erw94kkigax1rV9aunmECJfaVe28m08lGkhiMZcEkblGccZoA+tpddvvF17cx+GLnRJ76wVzFfz6TYy/aJT84eMvcRMQgwD8nbpXnOq/FrxtYai2j61o3hv7RJE2bpbYadIX5CvGRKQQT2PqRiuE0HV0v76BvEfw3utOt7QR291eqkSyo75Ak+z284c56FohmsO40XT9Z8SyvGvh2JIGUpb6rrep2JvFz/yx+1w7FbOM/PjPegD7l0Lxt4513wKz6LpNzKqQ+f9qhmtrqxk8sbRtZGyFBB3RyKncZOK8s8F/F/xBrOsHwV8QPBM2ixStJG9/Ppltc6VcqTuyGRSYyTyNjH865nwXqF3YDUYJvCTu1s6M66HrEU9wWkbcBLIk0MbqDyEYMOobrXQeM/ipqvhBX1LV7PW9Mt7lIvPh1LTrGa3yOAsWxo5BvA5dCxHWgD6JuvhN4N1TT54b3RNEvYd4dJRYm42E5DAiMiQdRhgMYHPrXkt3+yv4V8Kaudd0yPwPHYzSMs8F9FdQznzB92IzOQrdwAMe4xmvl7/AIas8J6zdiMtrelQI4QXOnwR3hi2n5l8tLgFwwHVgCK7iLx1deK9GvtQ0q217xVZBJDby3NncW00B5z91WAI3ZbDHI4z2oA9y1CS68CaDJDoum/2elmjNFIt0ktiIQeWVWdwVIOMKNxI4Br5p8F/Fjw7PqmoW/iTRILmG+uFjv5P7NgiZ2BAHlxtBBKUK8s2DjrnmvGT8QvH3h2/s5rOwexsbKbdsnt9YXzF6EO4lUEE8/KnB6V63ZfE7UPHulTarZeFL3Xb6GYm7lsLmeDywobALXTSMApwQTDgg8nigD3CTSvhX4m1z/hHvhqZvCF80bSTwafbaZeWVwxJUvvkjd1clsY6544r0fR4v2f/AAfqH/CufGd7pV/4jvyFji1bTreE+Yw5+eErGpbnGSGJ6V86fDQeP73TxrOn+FtA1ae1mFzbQ+ItQj+3xIPv+RcxQRhcHqC3plc19TeGNJ0/4gXFvq/jTTF0vxBAfKit9O1SG6hiRuVMsV4zWsmf4QY80AZ2qfAf4Bz6v9h0Wx1zwxrEocK1sB9mlR+4NzbTRDd26cd6uaj+z54bs9Ksf7U0A+Nrm3kKGS5kisfJJ6M7wzQ4GOcpGuTjjmvRfFfhnw/DqtvZPYLPdQbJBef2fZQTxSJjAQRHy8jHOVA9BXlHiD42eJPhpYX1/wCO0u73TRIYdPtoAs0hcf8APQKpKnGW2rtVccnPFAH1b4Y1u00qCPSbjSDFb2axrE9vqbzxxhR92QNO78HI5JqbXtd+GGrkm/muLfUdzxogn+UseclZJCSCPUfQV+PPjP8AaK8J+OLC51Kz+HOj6nq0Ucscclvf3rXGWUgvPDFaGNlJG/HmA56sK/PG/wBW1m2lefUdCS4ImMnn7JoiAP4eGOFHvg0Af0beJfB3hPWlhvLjSzYCO4yLp9Ltr0T7eg2TxODn2Yc9CK6O18NazZW1xL8P/E2m2N9dLGSNS0SOEKWOciKCSJhwADuY1+BXwk/ac8S/DzXnuZDqD6ZJH5Y0+LU7rAHbZud0GM55Q1+huk/tz+BrvSLZLCz8TQSJC3mQzw2l3vkAHKyjaz4PRdoJ7+lAH6Fab4c+NNvDaadqPiHT72Z5P9KvLLSIpIrhG52NHNdABQf4gSxOK7TWPhXZnS3/ALV0yy1e4uWy5vbS2kkXAwPKDytHEuBjA9q/M7wT+09r/wAU9bXTtO+JeleGCCqumpeFPMdCpO3e2WjAAHLbh/OvpnV9f8VXmhG/f40aFrLR3AiMkVlZRRxsoKhCvmxsAfTI+tAHvr+FJNIjTUtOsrZdNSLM1tHBYf6M8QGBGURcbuQwBPHJNcxcfDz4YaxMNW13wNB9rLgSLc3VkzyIwDbyA7bVyegxXzf4g8e6Z4NgLp8RvD93JeorrZ6nFJcW8SDAYxxWiySEM5wMs/416roseu+KtNSaLTLTWrgxARXMFjewWvlMMptaWyToPYZoAj8Z/DH4d69YS6N4a8OQW1tCzS3MVpc3sMitjA2TW+6JSOm3njmvHNI/ZX+Gmn3F3qS6r4n8Klt0V1djXFS2dkwUYtMGm2nOF+Ynjt0r0PUvA2qWU6TSeH31J0H7uOyL2rwyh8szDyw0ijrnHbtXq+l+GLzWIYjc+FrmUyKCqat54jTyxwwBT7+RlWA3UAfDt98OYdavINNs/ihpfiT7MJfsts8I2QSI2ENwkSRrcKBzuYMWJJPpXjOp/sw/tFeN7+40HV/FUE8QXzFs7QSwac8ROAQlrHDHj/eGa/UTUYfidoF21pDpGj/2e8yyPNa3c9rIFXBLEfvTvA+8WUcDjHSo49S8cbp7zQINK1Wdy5Yanqk+IkK4ACRW0XmYwOrADryaAPjf4c/skWmnw+T4q+I1tHEwDvpljb2g8xEOGV3u3L7d2fUkcnmvpPS/hp8KdLSOZ73SzoekOfM/4m4idpUGVRkhiEBHPKjjse9efLd/FjR/Ess/h3w38PbaZpTLOjSahI8owAThoz856dDk9B3r1HTfiD8T7mKa1i8NS6VMyE5g+eCPeMB8TRR4UHkAMeP4TQAzxL8Xde+H8ENn8PPD+hz2F5G0rDU9Xii+fACuXnuY4/KX+6kZPsM5rkPAnxH+L/xsh1LSZrPUPD1tDP5L6n4e1bTZIi/AKxiLEioAR0ZjjjPFch4j+Gnhm7SPU/iRb3/iHUoJFuZonM7NMqqQTGp/dkM3OMjjAAArr/BGufDzUr6PS28NeIxYysGjeUSLax4XblihQoO3XLfTkgHjXxI/Zz0Tw1LLq/xH+Lni2Ji0rWyx6gLhh5hA2KHuYyXI4woJPevI/FuufspfDDR7C0v/ABt428Q6xOm1tPtr7zyEPRpPLdIoumPL8wtznPevq34lX37MekQXugahfaHoV1LbPLc/Y4nsbwxOcMDO86OP91WyeeDXxBbWf7Dtx4p06z0e7m1W6mZJWMou543Zm4hVI1BLY/vMB9TmgDtfh5rvwYvdVtNX0H4YeILuIqXlup9DtJmDkYX551lDE9mDHnqa9x+Hq/Cbw5q118QNJ+G+qQ6rFK7NJcabb3FzGq8BlFvmKBf9obT6c1ykvxG8LXrxaH8OLfT/AApokjyW/wDbdzZy3s1rcw5VgkJhbhcFVBlPzZ4444zV/hR8OdehfSfEPxe1TU9UUrdyQTWM9tb5uPlJnhuCyFSMAFVQJwRzzQB6Fq//AAUJ+FXhe7utG8Q+DtcbVop3ZUZbWNBu43O3nFmOezE4ryHX/wBveTULtoPAE2mWwmjMjnVYLmaaOVgMrDHB5qFs8KAp9SRXqvhv4W/sztrMI2eFbSCCF7V0hjWWSecpyVnkDxNtPRvLJOcAk1z2q+JIrXw8bX4KDRNNS2vPs0s91DvvAASqyItqgxHt5KspyOCRQBwHhL4vWs+hfb9I8LeIvFGsavO02qWmn6ZfxWbuTtG6WYxJgn5cA/LzxjgfMnxW+Gnx++J/iIXmi/Da08G2crM6WdhLDFK5XgtPNLNvJGOmEXvgnk/V3/CTfGXw5u1w+IJb22AlaEf2YBBvznzLaGeaEMqk/KPLZc5/G14h8SfEu58KSeMfHWpXSaNc23kJe6XZxWtw0rvtKNmFDlv4lSTAHOccUAfFdn+zF+0XcWb32pa9ZaLBJiFhe65F5jBcFVEdu8kp9uBmsuw/Zp8QWbS3viDxDZ2kfmtAJ/tEqiWVOTtIDM6jGSwUr75rqNe+I3xBa0g1DwhO0cmkxiS5vZLASbniICx7yDGyIuOW5die2K5DQfHWqavbOmu2WqaxrFxNvN/HcYHlcMwFtHCWPOer7QOiigDN1Syk0Ka307w1qMccW395qdvDK05XksRvO7Zx1GwHPSs3wj4+0XwzqAutc0698UeUf3cc0I8kE/xMrZJzxlcjjjPp3+veN/hdD4evLiXSNR1bX7mCS1jeSRorexI4RkRyTKwPOGCqP7p7eA2PxD8S2UcNus0ssaJ5aCa3V0Q54KgYAYc4OD1NAH1tf/FXwzrMh1e50rUNJuBIHU3FlH9nEbcERWtvHDErqnRnZiOxzzXC+M/iBYeMLJ/D3hnw/q+oRRIFiluHAtpJc7jssIV2opOCzvJLIepIJ4xrL4tfEG0dv7d028vS8QWBJrd4I0VQBlV+ReF9VI7kZqh4l8VeKNQ+yataW7WkbHy8ysrSSyHGd20nIHb5R6UAeQ2eg+Pr55dK0+xZRMp8yCKPy96feKnkEqNuSM9smsW78J62FAmRCFwfLEgKjPsDX1Lplz4ulMN42keZbxsqLciCXyZHbgqrsyqMbhxjv2rJ1HxHqeuSv4O0aytrabdNNcp5EJmO35vmyWYKijPy445NAHz0fh7rITzJoEUFQ+ScDB/n+FTxfD7Utygou1hyx4256A5Gf0r1zVLzVrmGy/sXUort4oWWRbS1ydr/AN4uApx0AABqtZX2v2NvL9oa3Qg7ZGkTDJtPQorFQx6cjPpQBlaH8GWv7UXG+WQhlEnkhSo3HAUdyx6V3svwK8NxadJdQbpJkkCNFcsVeNskFeNqnB75rmrrxFreotBbabfJZvAp/wCPODyt/cs3DFm9wa6Wa/13StIXVp9WEcKMnllvmWSbrwuACw56A4oAoHRvC/hi0uNOm0vz7hoz5LiMOgl7ZZpMqADg8Ht+PnF7FIiPeLAhEhAaK32BhtGMkRo2Bn1I5zXUjxHFq9+l1d3IkuZWO9poFdGBOT94nknuRXO63rWt/aZbGC8u4rSQhTDawpHGyrwMiPGePWgDmbzV7y9t1sv7NjdEfcrMHcr/AOyj34FMOmXV86zT6cssrcAlsAKBwMZAAHpXSabcTRx7Jn1GRYyG8hbZXyq9csTivT9U1O71qzt7i00prUQwlVluAls0qc9QvBIHAwM0AeUXHg8RWUAsrOO4uZZAhwwySQOi5zgE4ycflWvpNn4I0/fbeIUhub/yykVtAjMBIfu72jB3e4Bz7jvyl/d6ibhvLiht1XJXaz4CnqMHJ59zUOmf2y94ZbAbSeWCBhx0xuwcZoA2vsVppMX2nyrbzznbGqmSRQDzlV+51x85zTE8UwwhVtpBaYV8kQDknjAySQMd6vXfh/WGm3alZNAjpuAj5G85OSSCeep5FcpNoeslQ0MChJMhWTDcDtnJxQB29ldafeabLLPKdqfMwk25mOQNqZViMrnnjnvWrd/FFbLS10yy8M6HaxGNY/MELG7kYKy+a0jOW3EHIAwoPIXPNeMtaanKzRSXKDap+827GOwxWcbG4K/MN2OTjJGaANW7dr+7kvLgzs8pLks5JyfUknJqBbqFCPNdsL0BPIxVBlmjfbEhcjtg/wCNRtHq0xwYhGuegX/GgDfgmtX+eaVFOM/Jk8+h54p8N5LEreREjg5w2egPpk8Vzvl6jbSkmJH9Rt/qDik8zUlBzbnb15XigC3PfXUStBE8u1+Cing565quTCMk7VdTgqxHH681SBn3DfAxz6Oev0IrXbTIktUursGFZWKpuIJO3GeBnigCGT7SxB8xwh6iMADA+lXPtFiOPKlOPXGarrDYhdqzMMf7WP04qQxRf89/5UAf/9b8SptOs92SsQHYgEmo0toWPli42kdAelaJtZmzJkOFwCRycmoUjgJw4ce6j/DvQBX+wq3y+dGwPYdagfTo4clZ/KI/urmtcxWUQyWfpyOjA/jzT42jdsJg/wC8VFAGGZSvEUjE9nIxn8M0qrPL/r5JGHpwB/n8K6BrK6VBMsXB79f0ABpskF3gEyhePulWBz+IoAz4rKPbgR7z2Hb+VPaBwQ7QKwHYKB+fFX7aC637tyso6kHHNXiMYLxylT3A3DP4YoAysSbCIwiLjsQh/kD+tSf2ZDcwCV2CSDIwM59sEA1elECOHgJbjJUxgY/M5/Wqk86svyyqh7gj/wCvQAyGzvbZTOsjyGQlt0hZjnv1raaCVoQHus/KG/djcAfckjpWZBs4Y3DYA6IcDPpg8VYi8gxNMrlWJwVJH8hmgB4t9Yj2sZEcDkfdzg+oNWrmRp1ETbo1zkqoRsHH94LkD8ari3haMHeG3A5VHbI/TFVxZzKxFvuI6Dbkk+uRnj60AbEkE0luITcJIoX5CYwzY9On6msIfaFnVWVzt/uhQT+FWF0+5jZlZpN3X5QzcfXGKaNB1BcSx3UoDZOTjH49CPyoA0ZIL+6wfLuApyQZEZUIHoRlaksodQtdrpBP5rAkeW+QwBzyOePrWY2l+JzF/o97EynOF84K2PYZJqKHTPEUD5kaaKQceZDMOA3rgjAI/OgDqvtF4JzfmCZJ3HDIuSnuCAKR5b2ORCyxziQEhy46988Ag+1YL2GrKEC37spIBRpCq5zxuLED8c1Bq8+sabfCG4u0fyRhCrq69OoKkg0AbcyRqvnPaSMh+cbEIGPZgckZ75rfsbbR7mwiv7E3Ud7kqY0c7VIPIIkb5sjptJ561zWk+N9Rtz5Mt9KIyCNsduCob1PKj+f0roI9evztTT9VkiaX5mRFECszdwDnLD/9VAEGoiOfy5xeqJGbL7EMEi5H907VI7cVizwXc1w9xHfFy4OGZgcsOOTvyPY128dnr6WsbX+nLcwTKfKuHtw5IHVgyKCcd6i+x2cMD3kL7ShGR5EigsOwVlIP1zQBk6et7cxC1utUK7flTMEc3I7HI3fka9PS30abRYLCPXrnTr9UYuBa+bG7H0V41dB9CQa5yPU7ybTftU1tFcujjd+6H3ewYBQcZ9qtprl9Ko3abIyDGz7NHlFYYHKsw4x6YFAGdfaVrtnaRvpvikTA7hsQPGFJ6nheM+hNczP4Q1u/k3anerczyL5hZZg52Z5LoxBGPrn1rrtPhutZ1CVGtoQOV2TWyA9M8MzYDener/iDQNUsrYTWsMtq2wNwkeT1GA2BkkelAHNS+BtS0KeGe6MqSQ4KSQxgkKcEE4c5/wA819C+EvHlhYQQ6XLZNPFLbPBPOkYS4BPzcyBXAAIGAfmHrXz74fu/FsQubaGTEKptEdzEkyh36FV9ffJr0bR5tV1CFrPXfD+mwLE2xNQWQ2qbyMASqZMDPquPoaAPaF8O67q/2VtI16WW1tvnEF7awyZlIJCsj7S5yeCr/lmuO1zwl4vsb8XfiK8srNCCqtLaXSxsxHXfGGVWHtkV53qyeINLSO5Onxvbh/3M1tqPmLG6nquXJX24A9DV3TvFnxQ1G1kvrXVoY7WAc/a3RlwnXHmvtY+uATQB6Bb/AA4+JmvafFbaaP3D4ZHikunhmXqG2b0AyPxrJ1r4Ea8IzNr+bm4jKgxH7UhwegUs8iD1HFXvAXjrVLW/ka8ubWQSoYpo7C1gidu+4IjR7j9DXr9t8ZvB0+mSaXdWsW1TtRr2GRF2uTk7cnJzz97+VAHzdf8AgjWRYNdW2gapepCzLLdiKSdNy4OHaVwg2gHJC/lVfT9Z8SW9sLzTfC1xCNm1JrdysJIyG3qyCMAgdnH1r15tR8N6feXR03WUME6mSK0tNQm2AYyR5cUziNuejA56e1SXPiDw7qFlL4X17T9PkkuQiW0dzbnz9gTndPIsZQkdNpPJyDmgD5+l+JviTQwRY240LUigLNFcwbHUDGfKbcPMPc5z7V5h4n+IXiXxDN9o1qB725UEedcTOQR7KmxB+ANfRXibwf4PsJbdNA8OJZpHGFZ5EMyTMTlizGKTPPC4cfjWbceH9A0SaD+2dJ0SDzo1ZJLqKcFSR1ZUZOvXOPwoA+Q5pL65mE8sCQN1Uo+Mfhk11Y8Ra7c28FtqMkrrCAkMzF3ZV7ADcBj6ivvLwXoHwV1u8s7XWrTTLVZ/LT7XayIEWV8jDxyt5iqTjvnmvcdU8O/B2Fk0t7bwyUQ/6I8en3qLIiZyHaRkBPTcQzDrj0oA/LVbXxRvS1h08X3mrviknMgk2sMfKY5OgPaui0jTfi8tuNMsVl+yfe8uW4TygCcfL5h46np+Vfo8fCPwk8fIbHTtQ8KaLPGg8qBI2jVyODmQuuAxIxnkck1R0v8AZt+E+r2VtY6vpCzagEY3F3peqxSxMQeGWP7SssakEZIhIH6kA/Oi70jxT4ZefTtRSRLV386aEm3uoQ394KxAz27Z6V0mk3qjQ7sQ/Y8oyG4im0W1d0RzjICqTg9R2/Hmv0ftv2aP2dUvvsQghvZbZPntXvHeVJj03+W+4p+X415x4m+AvhvRZWvvDh8NWvzhP3tte+db5IA/erkFgDkjPPHNAHztcePdJ0E6dpl34K0fVhaRxxtc/wBjtZvJkZDSOjFWPIOAMHHSvp/wvqPgfxd4btb5tAWHUmgZYbfZZ3lkjjkGFJoi6jrlTlh78VRtvhtdeLd0UT6Xq0UD4lnkhlE++P5X2R3DlCCD8vI2jHWvQbj4VfDe38OmGHwlpk9/ZThbkWsMsjt2XP2VS+4H7xwMdaAPjrxTp3jnwdq0mu6X4QElujM8v2/T1+yAFSMtF5KKo5yMN1FeKap8T764ubaebw74fi8g7XH2eQJJuPO8K+Px7dq/QHU/CPgjUl09Sde0q9mUsumtqcsiP5Yx5am4jEqrxgJu4+77Hwz4heHPg/pN8YJfA/im11Bm2TJc3exGUH5mjR3lBAHYgAe1AHCjxuviLQ4otD12XwtqltCrBVTNlK6Z4jcKZI0IxgM3XrXn+t/FL4k3Vwum+KvE99qIZFREiihmjCL02KUZcfTGe9fWWlfBn4f2PhU+K/CenWuqy3EQ2i7gNzdWj5xgxIQm4Dkkrgdgc13unaHrWkeG1v8AVdLu9Qs7aJljl0G3tAxlYD92QGiePBOeBnPU0AfENt4e+K3jeaPUdLg8VXclpHvgmgtFiSPb0wUZNq4HYdexrvJ/iX+0D4ZFrceOdR8Ty21oS0a3NkdSgXau35o7ptqM2ArHIJGa+0PBPijVvBdkNNvPCPjW6sL7M0MiRrFcx7j/AMtJI7rLdMDjA7DNa8XxD1PSZL28m0DWdQ0m4QgrqBdRZq5O9jNvc5Xrlsex4oA4v4H/ABi0zxLNdX174d1Xwy89qIRNpHh1YreSYqSSSguAuT0+XnrntXRSalpmo6ymjeH9fW31i6gcE3N9NayynquV+znGAP4AD7V9CeFvHv8Awk2gWGqackklpIpWERyI+8RHYTh2IOCO2T34q/Mmk6dKZdUuLbTcnzhNq9lbvA784/eBxMACeOR7GgD8n/iJ8Vfi38ONUlgh8d3980mUl0W5jv7i3MSnAy10kSFSB1Q578V5Tc/tUfHP+zrfStI1k6ZaW7yOsMFvASxkzkMzRu7Bc/KGY4r9q9ftfh74sW1n8TtoevNZSiLeYJPs8fmDCkl45yoz03Nsz3FUT8F9Ie9lswnh5dBmRCEGnxWk8ZIO5UmjRxIAcE/07gH4pQfGT4ltMLvxFqusyWtwNs6RlIAecnymMahcnrtxnoeK+pPBfx8+BFxfQX2raL4stdYiRH+3Wk1pLNJMnGWgJjjcEdWYFv519X+Lf2CPhb4liV0v9Q0/ULt2a1tkme4tyo5ZlOHAyOedo7VhaB/wTt0Pw5fJF4xtIbzTsmQXcM11BOqnG0BVfbv79QPrQB5b4r8R/sq/ER01rV/HmoaFrMYZohDp0lg/nqQUM32eWRC2erAKB1ANd/4XvrXUV06Twzpt/remQwl7m+1XULXUrFrphlnEj2c80ec88q3PJqf4ofsOeC9AeDUdM8QyeVKC6R6hDJcbE4Cgjh2wf9oiun+FPwu8ReG7txD/AMIYfD2wvfYhl0q6laPlQUm3BGBGchwCOe9AHFeJ7T4g28i3vw2MGiyvJif/AEuK6tXzktsDW6nnoAQBn0rxHxD8If2ivFkssk/kXm5fnaeEwQnI/wCeZX5vrj8q+9LbX/BemzibWfFGk6UrtJLBJpviOa+8uJCSWeDbcQhiei/NnGRXKrJpXjK2a58PfFm4ubdXJYwGaG7HYnEEEe4Z4Pyj1oA/Ma//AGUPjHFeQ3ES2EN7nzPJgdo2ixyCS6Koz2AJr1nw3+zn8XLizZ786Rb320FpTKbe/jLcqVSLashPbcd34V9v33wJ8Q+KrFh/wuK+e2wUWPUdLm8p3HBQTfu2Y84+9XOf8Mj+MY9PPlfFqFblgEtkkluIHUuCBHnfO7Kf7qsvrQB80aX8CLSy0e8s/iN8R77S5LyRSYtTv/7MtpmCjPm+ckwk28AoRgjpXYeGv2WNDntp20H4s+B54p4UjlhhvY05c9vLYB2x/ejxzyK+n/B/7Mnxc0ORNM8ba5barppAZre3uzd290mCAWhuEDhvXYa7PSvClr4EjbSZfD+g6lbyyMsUU4s7GaAj7mJN6y57nnPvQB+fmr/sMXE6/btL8feGbyxBP7yOaEusmeVVonViQe+0fSvo74Ww/Bv4U+Go/D/i34mi9u7QqWgXWNQ0+6TpkJGFttqDt8zk9ea+utD0bxrZ6Y+orpfgSHSoAZDbpfM0qbuSzyiIxbgcn5W5PU1yL+M/C9tqqNqVz4fuLlyIIjZ2cV+qPIvCzSwW7474aXAH1FAEnhj4ny+INSjm+H1z4gm0SOTaZbjW7m5llaPGfIijhmmdCOvJz6CvSG1v4264ksGnaJamzVSlpfavqlzZSzEkZby1tRdRgdCT1x6V5vq3jLxbqH2a8szDdQaSm8CzaMSx/LkLGZIkWEtgDgdM/Sub1f8AaE+IPhB7DU72fSotNkjEl1bXkF6HjQ5JK3awpnocn7Pg44JzmgD6Jg0D9oS4ghn1ex8Co4ASdpLvUb9mU/3VEMZGe5Yt9a9Nbwto48qTWZdI0zUDtLC3ikZT7D5lfBxx0PHSvztvf+Ci/wAPLG5kbQm/tSThEto3e1QHgMWkngGfbap47+nqfgb9p7TfiUxvItIurOAOhuJpNQtWtlOQAFPmRbwueWZBjmgD7I1rwob3yDPrsS2SbfLRrUqxPTAZnJbOeAeleaeI7TQdLsm+0X2q2xkcbU0+1R55NhODKVgkZI+MjDA47V53rnx98HaDd3Or3OqXc9hFstpZZJLNLBXcE5jcSSSNtIwzAFR69qnXxZ8OviJ9qh03XdU1Kynjjdm0qS4O0ycNtlhtXDHHGA3HfFADNL8R674mDax4eS+1zT7KWRGt77TH0+6BT5d0Ml0ymRSehK4PYVoi00bxOht/HVlqGm+fGri1XVBbSOw+8HW1Awv1fkDtXzJN4s+D37PniRdSg8I+ILm5uywaW+1WGa6Me4AfuJbhdgZjlVKE45+WvffDHjTw18Wr5NctfhrHpu6FTDfau1go3KQPlxI0k3y4JA46D6gFabSvBNjqFpq/h7wVpl+8VtLA4W1tZJIo2ThX82RcjauCWbcCeRzXIaJ4EvvFV7qAu/AHhrSNFSFJYDMltHNPLkOWkVMwiNcd3YHj5TXTeMdT0rR9RuJPDmkeK9WnnUebZaVpa6dYtxhiHltcvkfxHjPIJryPxx4E+KPivT5byz8FS3LXu3y9N1q/hEMSKPkLhZ8owA+bEeff0APYfCfgXwk97Le6lq/hyOSFFijsbZIhFblDyYGJjSN26lig7nvz5R8U/hB8NbjWYZYI769nug8ki2NzHObmJBkL5UO1NmTjeWYDnOT0u/Dv4D/E6DT47zX9N8C6VfyLg21jpzPcxh8DG6X5CzYzvGT2719XXOneHtD0yPSb24Nzq+pSASRu0paURhQwiRDtRFGFBICLnnvQB+ZFx4n0TT9L1LSvC7+H/DVs8D27vfX32+6eeHOEijMckSIzcFhwB714d4Z+K/xf8CynV9attPu7QubeC2uClu8TsQPMjihRSGOeC6554r7H+OnirwRoupW/hXwZpmn3LiZ0n021Cajdhk5/ezu/kW4jIJCnAyc4715ZP4c8F6XoGnTTfD9rPVNakVvt2r3MTWaI2f35JCPJtyCTESPfGMgFqPxZ8cPFNomueHPDUYujFIRe3rx/Z7RMjbiSQTNkHOAzjO7heM18w3uvfGzX77/hHdftYZ3aaZDJHdoUIbKOYYyTDGSoOXUAsO/WvoF7vxbPdWOhaJbf27em9Vo7TTdGDWsNuDjcXIdNjKoIdpMbSDt5zXMeKvgtqek6tc+I/HEviGwLiMg3E4t4i8qhPk2cADOwAcbRigDgrf4HatpoaW28TaIl3NbJcrpr3NtNcK4AMYYqrxRMQQcsyg5GSTxXKPofgrTNMvbfXfiBe22qtIFks9MMd1kSEpIhMbAHcCeAduOvFdZrnw90maC0sPAl3Dqt87ifGkxwX9wSRyLuZhJGiJg7Ywqlv4jwAO6+EH7PXxG8R6XqOv8Ah+a0V7ZjZNLc6cqJiPPmq0jKMsQduYz1ODigD5S8R6R8OIPsmjeG/t+tF8AOztA5ldiuPKMR3EDjKHbn3NZ158P77w5qa6NKgs5rjBVJlkmdVkAHAWIsrDJBOOMH0r9OrGc/s8aWV8VXmj2GqmRYUu7YItwiY3Zyr+esbAMF+7tPbHNfHPxF1j4Z3BvfE8XjCbVruWZrs2+nzMDDI2WDzXDyMqnJx8rO49O5APHYvB3iv/jzt9furlI28g/ZnkmjG/qpBKkc9cgZNWLjwh9i1Cz0jW9dhs55FztmhkU4bADE71QY6fe4IOa8zk+MelJaT2ejxX1jNPOXuJ47qaZpupUt5jqpOf8AZGOTzWBe+KfCl1CtzrIu7iZyw6KWZeSAzlvmIOMdh6UAeu2uv2+g6o8MnieFrcSYSaKdjIFj4DNErMu/j5cMfrVSLSvh62pW1zo08V2J1ee5N1GxVWySQ4eRDkjurHk9a8ItvFnhuC6Z7uyT7KciNdpkkRemSoIUnv2rS1Xxd4BnjaaK0u5pcjZBDFHaw7QMfM++R+oGce/tQB7obnQo1e40tIJixRyvmLbpGAcgJ5hLHHGc/jmub1GWDW9VklhjNzKW8xkt2SRFJ5LM6qo68YzXztf+JpNTjS0tY0sLWM5EEWRuY45Zjlm6cZOKo273tspMU0gXOdquVIJ7jBoA+wYtN1PUPDk8EWpJYxQxsZPKKqWx1T9wJGJPp9c151YeHUvbZXlmnntlzuRJACuD/ebnn04+leRWHirxLp67be5lkTP+qlbzEP4HtWvb/ETX4Jme8RGiY5Kxjylz6/IB9PQUAdpdaNp0dy0djE8seCwEm7C88As2BuHtmuckhu7S9WFJ5VZ+Vii3MwB7HbitPT/GPh7UbkXPiGW9tYQpOy0/eqSOigNIpGfUkkelLe654XluTd6NNcQRlyVjvJMvjoPmQc4+lAFhZdTtlNpc6ldQREBpY5YdpUHgfeIq7BFp3l5utZMaqCFzGGXp6dvwqvF4u090SLULRLwbwxMkzbVx6bT1PrWnceLdPsbqS/0zQbQxyAFBPL9oXeRgH5vmGPvYHfAzjOQDEjttJM779QaWEru3iNnJPYFcD/PepptYSzijt9LMmE5fMRXn2BPJ/KuCuL7XtQvJrp7p/Ok3M5VgnHfA4GPYVUl/tIHyTO7Ajkdev0NAHp0/im6W18lI2EmPMaSU7goz/cBwM9Mk1ysviW9luWvHgDBuuwlVPtxnj8ayLgNaxIkymRWGJAXA56gEYz+Bqta3UCqytEoXOcBiPpQBeaa7u5WkFskW/PRioAP1yT+JrSj83yZIWSI8HBBLsSOwxhV9yTVJYvtUYdQA6j5dpPIHPJND2mSsFoJri5lHzquVCZ7cjkn8KAOevZNQZfJa5RFDHAUqTkfSoIW1FIziZmHVsd8V1R8P3kcjRXUUcLKFcpM6h9rjIOCAcY79Kzri4sbcBB+8IJGEXcoP170AUIEv5CArSnJ6bv8AGtyP7aEIlb90n3ld15PYAdSazE1CwLqpgkODksB19gM1o3+r6fEkTIn2dMAYlbc+7+8qDAX8jQBE0gZsyIqc4GCBj9M1JPctbwbiyOARksORWaPEMSzebEIZSpDfMqnOPXIJqvqNy+tCOaaXcy5Cr0CgknAxx3oAvm5gdA25GYkYRfvH8qf9vtv4g4Pf5u9c6dNUuPMKgjoQcYrXGh8cX0ePo3+FAH//1/xUE08QMEixxg8kMQSce1RLdFWKgoQOTjKn881krptsG8yYsze+WOPrWokEATfEiHH97r+vFAFtNQUYiaRRu5IZgen41Kn2dpGwqQnBYOpOT+APIrCk80HKQq2OoGMfoDVaSyuZxv8ALZQeoUGgDup7+yEUUKvIgUfMfNBBb1C4yM+maqrJYSRnN1Jk5G1mI/GuLOlTkfKdyHruzn+dWINGkKHACjtljQButb2EDbll6/3mB/XrRPbscATZjI+7jI/PdzWNHpciNh5d4P8ACSf/AK1WhpkasMxSICecE/8A6qALyacD89pO0L8cKuCfQ59M0l3ZLMDHdXEjydMAcn8jzUcliEBuEjz7hgp/HFR2xmuVZDbLKSeGLYI/LFAGzBYQwWUcklpLMjAgPh1Ix3yDj86SOxnO7yoJ9o5I8zP8iKZFNrNvCYYtsYHG0O5JB/Om2XiDV7W83XdmHXgbAWUsB1znrmgCRm1DT5VeO3njb+HaMH8+TmtaC9utQ3y6sLsPwN5wxA9+MmrVxrTX+XWHykb7qgkGNR2xtJ+nJpj3EzweeUk5OAN2W/TH8qAHQWsUkW631GTPJ2eXgrj13dvpT3gWQK816F4wdpYZ9yMsCfwqt9qmsY/tcJUOCCFcndz+HGKeL/UHeOS5tyqyfOxQE7s9xxzmgCy+gz3ODBIGH3QWyvHqdpx+lTrYXVin2SW+jgDhQxjYlCF6Z2nJxVv7ZPDNFDsZBIMFbqAqq7h13D5sH2FUZoZDcYCQJu+ZWRtqYHb5sH86AMxhq8E4W3u9wLAALMxBPY7CDiui1CbxXNZwpey2k9uxDKFWJm+mdmQfbNVo5HFw32qS3VkGflB6L2BTOc11uiLreoSG90O2e7eyXeRFbeYAnVnZWyWHqxU0AcDIgZWeSG1tSOQxGTx1OAaTT7bT7uBmn1GzR1JCqY2DE+p2nAH+cV19zNrMuojUJYAxm3bFSFVye4OAuPxqT7F4jvomGpaQzFgBFI0CAAKDgE5DbffBoAiFnqllBFb6PqguokJZVtbuRF3OuWHOCPTGMGknm1+XS4obrTjCBxFNbmKUOp4G5i2SQaTT01CwtX1FVjsPLJUeXBI7EHggMu9Qv5Gs+bXob2ZptSvppLgELuitmBVV6DeQvQdAKANXSZdU0eKSC4uYopZF5ivIAwIb0ZWxk+5qceGvE1vpf9sadLayW8k2xTEViZZBzgBZc9+uMe9O/t7QpIIfI1cloxgxT2Ilcf3vnZuvpit45ttNbVLHxXp9vHMpK/6Eq3EfYq+A+znpQBxM3h7xvqMjLFby3Vyo82RI51DEHkEKGHT2qJ5vF155Vp9nvzMg2hHfzwc8Y2vkg/QmvR9Km1v7P9vtvEela4I5BGXuI2R1YDOAwWNivoRkVAPEuvaeRcai+n3VvJNlmt3kTgHnaULEMOnT6g0AcVDoHxIhjdZNMvWhGAC0jIEbtjB/TFbun+GviPAyST/Z7GFGEgN8Qybj0/v9fcVq6h4/iurA2FncSxMjF8QPPIg9AysnLdsiuesfF+ZJIL+XVpiAogkkYmMnpjaSCAO2OfagC34g8MeLIJIpL/xZZTRMxQtpkn2jyu5+RNp49R6GtxPgrd3GlR6nZeI7G5c4OLy4a2PzHqB84+uW/WoNP13wa88dzrL3VncJId85DKhGBjEcjopPYkEcV0tp4w+H4ikgvGS5gRyWe2me0mIJPKjc8bfQ59KAL7/CfxFpltbzW3iC0kktYhM5sWilCkkkDlQ7sR3C49TXL3vg28mVZvt13dtMjEPJaHLAf3GYMD6dPbNZWu6t8NZ9Ra7t73xKA+NkUk0UwT6GNBx7ZrffxL4fmhgs4b/VrKGARwwXF1aziMKDkF18xkI5P8IoA7bwZB4dnlh0i7tJ4LiWRIEa4hGwA/K33JVYkHGBgn8a9Dv/AAv4Q07Uf7JtvEM2lar5zJKhR5YVYkfwzFiMkDPJ9Oa82fSvAdwyHR9d1e912INMtvYxSYIVckoDEo2kZI2vxTV+IHh3WCbbVNVNtfbhFIurCRZMdOHEZUYHqwOevNAHb6/8I/HUMsT311De2Rk3xtZX8EMkyMAcmNnVen8PH0pl18F9buY5r/QNAkupssoja8hjk29DhNzqB35NXXfR59DL6e17rWm4MX2vTrhruaCYZyfKeMsARn+PHHWvNLO8ETXGn2/iTxTpKIhUPttrGSZDyVaL7SshVcnn5s9hmgD2zwX8LtNstPntvEnhR/ss+0Xa2uouWZ0Bx/qXaN9pJ/h4Pesm58B+AJNVh0zTrPULeyeQwpbz3TKFPcho41BOM9Wye5rn7Hw1oMNlFDbeNLu/gnHltDJbTMmGwQXXy1AOR13Z471uaN4S8JebKNV1u1tpTtS1vLSU2xduB84Zl98kjn+YB67qv7Onwok8LsLHT9Sl1FhvjR7+YKWPA5CyHjt8oyfSvINP/YonutQtxpWpWM91LKN63lzNAqK3JVzGrOCOme56jtXbat4/0zwFoEd1H4piTyIgsrRlLh5SvCLH8y5IHIG04rhtL+PN74gkjmih1d7OR0i+2PZW0iCQD/WBd8bKw+h9eucgHReIvghrPwskubnRdDsybYB5NT0zUXeWDCEOQWktwyHnKnt1rnbfUPiv4i0ebTrPxKkdpF5cUdvKJIZEB5BBju3GWA75Jzn3rvtb8e/DrxHF9j1DUrq0uzGH3zQ28UjMuFwQrnI7nA5rk7vx/wDD2wmdvENxMdLyEJHlu8xUcOqgkoMcfMDmgDhpPAHjm/kaDW/FV7prEhSkmoyGM5AyzK8gYZwMfSvWvA8vjzwJos2jaJqFhqFzKoM15bzo9wUHCxiQqSwA5IZSefvV5re+LfgL43Fz/Z3iM6Zd7hEiXsDW7MpB6OAYyF6ZJB9q9t8GfC2G3trKbwd4tEthfFSXgvWvIzKVwvlxYcFiMhlZQOcUAeZeI7j4sTS/8Tq7VWtJI51Pn/axs+8oCR7o+oBww4PbNaFv4v8AiTcXltpn/CYfaIpgHhlvoUMMZLZdTIYo2RCFxuDA84HrXZzfCbxHaSale3+uaM6R3K2zm8tJ7OSDZht0ap5IYEffypAI6816X4XTwDFMdL8c6lo91pyQL9muhBGxAQFRvdMSkHnjr/KgDzPU/DPiK+8S77vUNC1MaqEW6tpdRknjcRZ8toZDMJYAGIwApr1bRtP1jwZZw6Z4e0JrmS0WPy0n1AzQZlOZI/NBDLEDzlwT2Aqtrnw2+GGrahDruieLtImtIlWRYF1CO3uBGxHDCcJIpxxnecdxivMvih4e0G00qa+8L/EZbCWC2WRdN+2xOHXIGyOaFxuIwD82CO+aAPohbH4jaJdpqDaTI9tdPMA1hi8Cuc7QE3QyBQCCp8onOc15r8TvH3xo8Jx/2d4h0LT7qyZE3rd6TeMHGPlMrwpgl85wX4r5U+HHhz4ma9rqX+h+J5IYYpIh54e4u2BkIOGZBOEPGFLL9K+r9O+JviPwd4nvNKvNZ1jUWnkMf2TWUN7bAMpUiN4bVHdcgkbnUL2GaANb4R+KvAcuieZY6PFo+o48x4rEP5f2qQHc4t51jk2gj+Fj6H1rq9Z+Mul2kdzo/jjVY7dTHlftMEdsmP4cRyztu98Gp7Hxd8XPH1pb6d4Ph03TruCTygkUUEkjqVwMo/707cfw8+pNfD/xP+DXxOm8Wajp3i67voLyfNy3lWfkW+xcnjGWUegyo9qAPbte/as8DWKppui6tK99HGkSf2Rai1t8A/Md7qAXI4LByuOlVfB3xn+JOv6kT4L8K3Oq2MAaWW513VWBjhZuZI2WEoAO7GR+lfMk/wCzFLqdnDq934gmm2ACdFt5VeJF4yxnlz0H3sBcdK9o+Gus+G/BmiGzg8W+NrR4GKSi0v1+yyxR8AKt1F5ATGRgSDHWgD6XHiXxZb3+mW3irxRBcQ38ata6bZ2kd4wnmywQXXmxKyD7odgg3cV0njKP4pGOwtvhy+rafbXrob1b7Rmv5Ijjr88si+SpyRszg4xxX57+P/2h77w3fzWHhPVG11LxwGF1aA3QTkbSwklhzycFQRznFcloX7WniHR7q2TR9AXSJIRtlNrfX8BZ0ORgrcAAHpt27fagD9Svh1efGC01LU4/FcFv4gS2CssmmSXcdzFjoWsZSoUc87FIz2PFeo6v8b/AGjBdD1rwF4vvb2+2Rh7TRLoxyGT5W+eUR549Q30r5b8Bft6eGL62sre00LxQuspItu1p5zXJMzruaYyOzRlS/GCEwOSMV7B41/aX8X+I/Dkxm8GatIQ6xSSafe2t5PAVOdyLDOhUnoRnIoA9lGlfD/xAYLPwx4bvdKjs0XNtfaVJAuO/mefA8ZkOeikEe1Z1t4SutO1O/vtHvtIS4kBitrSTTI4yhZQAGnQRsu1uRlSDz07fNng/9ri78T3n/CO2er6v4GuLSEor+IoL27gEifL8wgglVj3O50+tenap+0Z8Gb/TF0v4peN/AWv6pbsEEhsrpYlZOASmGJORk7nUHPYUAelHwnrdiDLq813qcsA3LZpaWs1vKzfeYyAJhgSQvzbVAGckHNTxMmj6HpF1rK6HFZvOWnbzTiUSKm1CrrG8P5MP1rD8L/EzSNenH/CAfE/wvLpoV44NG0eK3tMsp5JMhaXnngqRjkZrrIfGVttuLTxeb24hIzFNYL55hDZwdxtUUsQCQFywHWgD49tvHnxv0qx8y0uPPtkChnXRdUuxEzklTmOXEiqMAkEgn+HFcB4q+M/xZ8Jammpf274bNnb5lurK00vVZZJWcbMztIWaJgTyFdemMHpX0lpuu/FTw54qvrnwTFqWvaVf73sotU1ySF43GB+8hm0/5MjO3a4QAHkVn+PvFvxeOpae/i3XJvB0E0KmRNONjrX2qXcAIlSMFV3HIG5QSe/WgDzXwR8c/wBoj4i6hDovgWTT/wCyLF1Nzf6ToeoO04yD5W67lWVy3OAqcV9PPo3xe8cpZXF7YtFoi25iu7e/guxcTTEnc4Uy27qeOgTjIwx7eZWn7Q3irS7OTw/4q8NeJgtqqGG7t4tEs1lEhAR2SCRWUtyc7unJFcj4/wDhX4x+L3h//hIvDnifxd4YvYJI2trW9kfyi2F3m3a2kYygYwCCR14FAHuafBj4YavoMieI/Dmq6XJaTC9k+wXV7DumxwRvunLse44APU18z6j+xv4Y8c+LLqHTvH/iWeW6Hnyrew29/Dbk8bGllm2h1U4UZ3DI9eeI079kX482V8niSx+I+u2tzeElruW5mhkYqDnzY3JbC4wcgivo7wb8Ev2hdNW0PiT4m6ZeaIZvOc3K2omlnYAopUFWckgEDcDj60AGi/smfAfwdY2MF2+k6nq0RC79SQx3ExBPzSW8FwQckYBGPcGvSoPEWkeE7k+GNW+ElrrGjGDbbXGnQT30m8lsAwGJo1Rj0DOB6tXu3hP4cfEO1ePW9c8U/ag77kjXSrOAIpHykyuJ5WUcH+D6ivSNR1DxDbTwWLrcXw3MDcLHAjPwR8oRzgD+VAH5y6X8Wf2jrO6lbSfhEl5pRvnjUalDYWYhtgf3aLb26SNiNRnLyN0rZ8YfFL9prV9YI8GeDdGtdMit0KWGoOzxh+QXfIjiG8ncFIIGOp5x91aL4lkna60VdH1nUurM0josQYt0V5njBA6/IScdulec+PZPhZ4UuBc+JmaK+uNhcXU8s5Y8nYIkfsBjgbR60AfM+nfEHxfoNzZ3/inwx4J07UVWI6g8FlLqbiOTqBLaWIgRnOCqF2xg57V02kfGnxbF4gstM0DwFeQR3byn+04dMdHXadwYROICImY49ePSkT9r/wCAGqahF4d0uzuNV1mMtFZ6bpNnHNcs0ZIKAzkJGTjIw2cd814/4+/aZ+N+p+Jbbw74S+FGraBBJG7xvO8VxePCnyggmRIIhuOW3K46YBxkgH07P8Qbq6xqOuWep+I75ZgZLZBaWi2bgZCMsquVwMbiZQB3rWt/iF8Nr6/0+fW9PW11WZwDpk10tzJvxx8kU7IyngghACK/NLxd4i+OOs+GLjRfHPiqw0aCKP7beCOPJtlMgEMUtxawKJLhyNyRqWxwepqbwr8RfDPhbQLO5kuvEd5q9tMLXT7TU9WmFpfSMuDMkcMKFETP/LR2C4wwzQB+rnijVdZuIriK3VdCtHtxMPJtIoJWGcE73nVAMcZYHnoDXxT4+8JlEt7nxr8Q9Ws9P1O4ItJn2XtkJckor/vLSJVHYBWGRkkHAr49+Jv7WvgDwvdtp3wv0+TxFqYijS91bxAZLi1W4AxKtvEVWYqDxvMgDY4UDr83+MP2vPiz41srfSJYtLtLSzKtbC0tDCsciY+dULFDnB+VlI5JIzzQB+rPw60vwJ4Ug+zeHfiQsYlid/7SFnZRPJLI5Ql5LiaRZJDyVweB0XPXuovEH7MXwumm0HxB4mn8WatfWvmy6jr15I1okTnogjjWEDcflQDBPJPevwTu/H/xB1O7j1PWZrvUoYX8yOFpZkhQjPIWNhgdeM4rn4NbgvbhpNdtruYTOzSGK5IZixyDtcEHHPU80Af0e+H/AIp/Bzwfp8x8K6jZXk14peN01W3gghSMqoO6TBHBzk7uMntXhfiH46fAGHV7hfF+peGbC4RwLjWJVOr3eepSDCFctuDbtr8fw45r8eNDg8AwwtO/2uSbG1LaWWOPr13FsbR6EA+9Yuv+IGv7f7JZ6HpdlawL5aeVBH5pLYy5kwXduPvM2ACcDmgD7X0D4lfBG88UXn9sfEFYtPs7yeSz8jTLqNJ2uJS4jjg3bBCgYkyFEZmxk7cJVH4wfEjw7p9w2g+CfFF3NbWgt9Qn1K9vIId8m1mWCzsbZPuklfvoMc7uMEfE9n401fSYnttJ06xhyQzOsKvIxH/TTaHA9lZax/EOv+LPFc6TXtnbW6IoQR2NsIFPOSzlcvI7HlmdmJoA1fFHifxf4wdr7ULyeeTzDIztImwOcAkIgABIAye9ZNlovibU1WzWa4niT5ijsxiTsSc/KDW7p+leLbXSjPJ4Y3WgdS9zND5RJf7oDSEbs4OABXR+E/GlhpN3C9zo1n56y5V7xt6xMDwwVgyEA84ZT9KAOC1rwXqtjEoaLaxAYgEM20+361z0fg/WTJGUtHcSHCt1Bz79K+gLyHT9ZkZSdOuLi8ZysrXdwG3A5J2JGoYHOFAA9qwb+28Q2PmWlra22n2zLtVFlcjcuVL/AL4nDMQSMgEdqAOGt/hn4nniaf8As0qi/eY7eB+ZrX1D4Q6nb2D3yGJxCgd1HBXPY44zXQ+GdP1C5uZUm1b95GjSOFnXcAOWAYyKMj2zzV/ULa2iv1tX1uKRGwZmeSVsL/d2B1Ln0GOT3oA8Rfw3NA2DG3mj+BVJbBp7aLqse39yyB/u7gM/lnivU9X17Q9OvIotDjaaNW2u9ydhYZ6qnJQexZiKmu/Emi3IEFnaQIQo864ZXcsSeduWAJwfQCgDzez8G+K9SybWAFRnPAXp9TWxN8O/GVja/bb9Y4oB9wynAbHZT0/CursvE1tZN9m0d5pXlOArphFc/wB1gcjj3rrbvVNWj0ZtT1N45bX5reIy/IkZxlgHbh2UEcLnrzQB4+vgnWLuPz5ltEjAyWnmjhA+gOCfwBpYvC+gW1tI15q9sbhcfu4d8nJxxnaBx7E9Kku9Qs9SuBeJJNqThVCiFEiRcddxb0z6ZPcisqS7tknBTTlfHBW4JZick9UC4/zzQBPDouk3Rl8qa6jCbiqpbszHaO4zgZPvwOay1s41GyO8eNwcMORtPvz+dbK689lEYfsCLCSSyxu43FvUuT0+lYx1gr5xt7GNfMYsC7Ozgk5xvzz/AF9KAKjWKhipvRweSVOD+YqyXtLY7GukJ6fKj7f05/Ss4XjOwaRf95COKvWy2ckpMkMpBH3Vx/Mj+lAFiOW1WTK3UZB4zhsZPruH51rWc2lwozfbIhcY+XOxE/Enn/GqdpaWEvzfvGYNgJtGCPc5GK0yNEghxM0SO5IA2hwPrtyfzNAGbN4i1K7YCC4RVh3BNipghhg84yeOnPFYxbU5ZS8jEyzHl3OSfcsTnpWhO1gIiltcQxsABvCnc3044rEkgMkgUT7z2OcigDR/09T+9mAWQFC2cAr3HHUZqGZWcAecAqDCjOBjPpVJrW6Kcu7IOwY4/wAazZLCZCW8yRc++RQBs7gDhpEbPfOMH14p7Jpew7/Lklx95n4H1HJP6VjLFdRDiRGB/vLz+lLGSGIljQDH3gcD8c0AWHjRFJhdG/2QgCn61VkuL1FBhSMKv8IjABJ78U4xRuwKkhfY5FDxZyAxA7YoAcl1KAHkJXPVcHFXBcvgfK1YT2JLfff86PJuBwP/AEY1AH//0Pw++2XucBSox6Afr1qtLLqk42KmN3Gc1ss9uG2xyru6YDComhUncSpI7sSx+vcUAZUenavHwWEeOu07j/PFaEaa7ax7Rkqpz8w/w/xqUOkS4aYDJ4yFH9Ke1xGDzK2T3D8fzoApS3upsp2r167cirFtqethgqIdmMYKsw/XpQLlTwHZmHJJYAD6CkbVJAVQoSnTIyfx+XigCZr3UY323UYZDz8km1v5GrJ2L8ynYW6+ZISR9M8VNey6Dd6faRwRTWdzEH+0TMxKzFjlTgk7do44HPesUWelzgqLtpiPQf14oAkluLFyd9zHHt7ZLGmLf6VAfMWZnbnG0kH86WKx01H2tMR7MgY/zrZh0XQwoZnDMfm+UYH8j/OgDPtvF8li4MUP2leT5UgyjfXGG/WqU/iTUNQXYtsQ38WAB+uAa6IW2jDJY9OgAYn8hToorXDFF6/dHCfnnOaAOaHiHVLHb8kbkDASQeYPrjFXtO8SXiHzmKxSEkM4GcA9gCQMVZmm0uNj/aCNGOgMLo56dxjPX0p9r/YtuIp3lLQyjlljUlSf4WBOR+VAF6XxHZz24B3PMByI4UI/HJIz71T0zVpvtSPOs0UMTbhu2qnHODjkfhmr17b6dZk/Ybu32Mv3ZI2U5PXttPsQSKdY6XFqSLFJNuJyxaH5zj/aRTn9KAH6j4hkvpDcTq0xHAYyeauB6ZB4qaO/kuY0ulkglCkxiELgg4zkqRyPQ1k3PhHUUtHu7WQSwK5VgFZXGPVWAPas6HSbu2RJ7efy3HTAYMp+tAHTNqbWoMlvEsLPEwfnIZW4IyFPfqDWBZa9rtghjs7+WCJjjy4ZtikZzypHr613vhjUtai3x3KwahwzJ9ocJJG2PvA7l3fQk+1Jq9y99KFvbGMyIMgwlG/HPzGgDgTqniCXfCL2d4pfvRbmKt+IaugstR8b+ZbLa6neKYPkhhk8yWNFIxwrbgBjsBULwOwM8Mboi/eKqPlPvgAVAt1f21wt1a381s8X3ZYn2kflQB1M/iLxVpV6JZZLKSYnh1QxgsBjO3A5HXp1o/4WHrMsgs/EiG4RiS04t4ZJ2DdizplgOwrpoPitrN7p9tp17Naap9kDGN5LdZpSScktuVst7jHFaVv4m0DW7doLvw5bfbAjFZLdzEpPHPl4GT7hh9KAOAtvEPhXTojGmgC+kbJFzODEwJ6fIkhBH1xVu51zwNfRRWktre2wDhjItvCTz1Vtj7nX2OK3ZvC4ubf+0rbw/NtJI3Wty1yikD+JDhlPtXIJY6vJLjTbw2s6EMqrvVgw6Z3DrQBtJZ/DK8uBPJqkkKE/PCtk0TD1wxDqPYZ/GtKxsvhgRcSnXbu1ERIiheB1kb/a3xpggehxXJy6N43vpnvNciutQEY+cyJvIB9GxxViz8P2d66w3ul6lGJSdklsC5J9NjlQff5qANzxBq3w6s/Kh0i+nvflDO5tTIwb/eJ/MVAdd0u3gS90uG41KNeAIYxbsrY6sVcsuDyODWVc/DzUbaeKG1trmRpDlY3hAJHbayM4J9s8U+98GeIPD10k1pNJBKo3N5SyfLnghiFKt6EdKAPbvB+uad4hay8OTa9NE058q30/WkIjW4mIBQzyRvEAx6MxUD1Fdj4n+CZ0AM11oSXJkP717W4E3klfvYEG3pgn6V86Xllb3XkjXbe4/fRiQrZiFFwBgkr8zAlh3/AV9I+GvhdO2iWd14W17UdTingWT7Na6g6tbO3VZIo2VsKOvG0+tAHFWXhzwtp9rJLFbsWjkBlUW8rlUx/fYNgk9M445p2mfErR9GiOkRWkmqF5EaSMQqwwOiAMp5PTcCCO1eyaF4S8O27zWniXRmmjaXImEdwZZSFOWDxTq3B6BsjvkV5R8RtL+FUGtpaf2nqdnAyCN2PnExuOp+Z2aRO2OKAOq8e/FTRdetbG8g+Gb2EljtjW4tZWtp1ZSPvfZynUdzz7mvKvEnxi1y+d5IvCjrJIrRs98Gu2YnuxkyT65POa66x8LfBxNNZrHx/q9tdPGMiO0luISw+79xlBXuc8j0p2p/By8GjLqZ+IOjW1rcENGslsYpXUj72cP6dM5/lQByXhLx34lMysvg7QrrTvLJ+z3kDod2MGRZQ6Oeedu7bx0r3TQvFPwyvLC5sItJuhfGIAW9pcwXjxMOSEiuAjY9AC3FfJWseFtNF/Hbaj49sLhFHMu6VlVV4+VQOT6DAzUl14H8NWNubiw8Rw6zMq74RZYXfjrxkuuPdQfagD6z8N/EqIC90S4s47q1AwzzRwWsqxgYy4IMIbPyn5WNadv8OdD8RzveWNhY2do1s8kUjX0MiLIPUoUUbjwepH92vgmGfxV9q8zQoJ7ORRtdhvDP7kEnrXuHgL4W/GTW0F3p+qwaVb3XzSm8uGijYH+8ATnOeBigDqtehufD81zHJbaLMEZWRbeRvPOP8ApozAdu1Y2g+IvFN9cXy2c2m2VvIhXY9yqvFk53L57beehYE8GvTLX9kv4ua+GuJNWsXjXDCYySRxyf8AAnHzCr9j8B7rQ71tH1qHRp7yNMNPazxzOo6hzGZOcd92KAPAPEHh6+jki+0+PvJmlVv3Ud2krjHYG2kc7fTOPpWRaeCdBu3E2o/EG0eQ4Vxcx3MsvOB954XHFfV0PwC0Lxg4SfU7RbuFljkTR4xbnbzh2MMbQ7iBkAtn1qs37Hvhi2V7x7rXb7exCRraKz8erltgPuaAPlLU/AGk2s/kWPiNbhonUJMskcMaZ6MWITA7DkfSuntPhX8V9Stzqej3Zv5XfzVa3mje4kwSC4aNS7YI6gnpX0PJ+yJpESJ9httfmkkwwhuRFbxhc4Kk8Bjn6V6L4b/Z3TwnqLz22j6ktlGAYp4hLKtvKfm3MEmkUkAYIwM56GgD5W8MfEf9pbwFdSzaRf8AiGSeYBG+0ST3at5eeNku5MD0ZceoraHxJ/ay1db5ri+kSG/z5yX1haujADOAslv5a47YANfaviLw94U8VWFjM+panpt7aqY7mIx3kdqVORu80Iixt35PX2rnfCuifD+xtzput+INbvHsGkSGS0uiyuzgc+ZdLtYnphV28UAfJfgL45x6RJaeFPiX4S8MX0MVwy3F29haxXrgk8OUj24BPULux619R2uo/s86tf8A+naNHbwTBDBbaKtxOJCecsiaegOOhHmDFGpfBXwF49FzqPhy4vH1DTgs06xtpst1GCSRJIILXaMgZJOMdT60vhXwp4w0Gwk1hPEviKxhRCiSXVm91HGQchXitIJFZZAODvOQeQBQBBrmn+H/AA1ssPB2rTJLes26CMfZruEE7lXLzoy4z910z/TlA0nhvTCbbT9ds9XQCMXP/CNyan5kkh5YTSTsu4jvg+wr1jUviT8LvFVnbax4/trO4mRniaeyim07UlljG0IYEkRpFIGRuVQOnpWDefFH4E+HrRhYWFxLcSshFnd2awzspGcMZ7lXfP8AeB7jrQB5LpPx++Jfg9z/AGZ4v1K3hWVv3l1oTGWFxxnZHHCgz6FzjvWjH+0R42vb67fWfE73C3yrJut9JH2mYryGCx+YyEngguAM1m6z8Uvh5quqwvpXhfxotrAC6afZxxC2Uk5Zvubn5H94jtXUah+0B8GfC1lY6tY+AdZ1W9nt2jzd20FiDnjczKhyePfNAGXYftMeNoLyy0qXRNFe3smMiXWq2cc+oSAnJZnQSSp1zyxxXReLviB4E+KkEmnalp+rQ6ggTamlZW2vHJHynZBKfm6KC3YgkV7J4a8W/A/4iaBDq3h2TWrS4tI0vNR0l9EuJpbc7uiPC4V0XBJdcjHYVd1D4qfB240K68GJpemSTxbmj1S4kktPmX94mFDK8BJG3czgAnnuKAPgr4g+EvF+kTR6loWlajolnEEyY9MTT9jEEETSM+4gf3icMOcCuGn/AGf/AI3+IbQaxp3h621S2nw8dxbyxF2xjnaH6nvkV+wngTxbo2i6NcSeK7CTRNF1FYpTcy6tBrFtGsYwnllI5AY8HpvB79q9m0fR/CGsW0N14CWy8Rof9Jm/sy3gaeNn4WRo0uI8Fh379MUAfg34Z+FXxwtbk6jpHgvUop7KYJcS2MJkuoJE6sIS3brwAPevo/wT4n+LngWC4l0ey13xBGMi6sbkG1urd5TuLCyiLTKGx9/AHXmv0c8R2Oqab4mOt+Ivh74nvHt590N1o8cUDCFOpIGpj7zddydOOa5H4p/HHwFp0EPiUaH4uu9SjjSBRNFZR3dtGT0P+ksXUMM42EHAzxQB8O337V/7TvhzXo9RfwvqWmSLb7ITJ9uulEa5wTFcN5HGeoX8a4HxV4y/4X1rttf+PvCnjW21GRFF1N4fs4ZY5to2mUQyoMFu+Gxmvrnxh+3r8cZtMi03wX4T+wyMPKTU/EMVtDDJFjA+SRUjY9+GIz61wfg/4xftVTR3txqenaf4hn1edBaOZobcWpZeBG1tCluVPBC5J46ZoA+fj8AtNTUY7Wz8HeOtSsZtpgkvtNtrSdTnnL7iSMdtpNer3fwL8c3YWLwLoPjPU7W3jSOSzuZII/L4PyKZXV0HddseB616Vrf7R37S/g3w+lnqcunW0O+NpXaW3VwgOGjjubhhudsEbVQEda6Pwh+098SvEukQ6XbWFp4rvLpJoVtNN16GC7jwM750hkVCi9N28kHoBQB4lZXn/BQWya00Twppeq2FtYRqixeTHMXEZLAvLcmQHrjgBccAV9Z/CY/HBdOsE+P/AIQ8H3c11dJFDc6nb21reqZFYkYjjZJWLYwQU54we3B/8J1+0tpENhPr/gPQreGMrHb3E015fzwqoBDSyLdReYeDhmJOT3xz4RrH7Z/7Qd38RzeaF4ji1CCzQwS6QmhmLSmCnByZ3EjtwcMWX0AoA+o/GXivRvh/Pq9wPhfYwR2LsXvr+WKVDLKQQIHsDNMDt5CttAAHI6V88zftdfEiBhongDwxJc2ZcrCljeXIkAY5ZVj8qTJznJII5/Gu31L9un/hJdQstJ8HeD7bT9aa3b/hIHcNbwbABuffEqsSoGfmBUdBXsUP7Q3iHQtO0lfCvg3xDLCtn/aAkitIcMpYIXw+Gl3FsghST2GOaAOEg+P2raZ4Til1PwXcaVqV9BJG02vWc7WqStyS5e3QbXYnB8zJ77a0PgVrHiyTw8p1fXLLRdJnnmkuJjpamRlbOBb3UmEjjBbjcxIAAXgV7FoHx51/xBaqrDUI5btlWWe60cK9o7Z++81uFwMHbt4OOueK3fEXjnW7fw1cWlp4puvLSTdI8GjWd+cd0EItZGwfcZOOvegD0fwDG2haRa3PhnW21vUboODdxxtfS3B6jLyXEiRBVHpj0xnFb3jvUPGPhawl1tfDGs+NdZmG60gtLW2tGi8xdpVriWQoR1JKox56V88/CD9ofwhqMz+Etc+IVrDfWk5WE6rokFk5OSVQ4iEe+PPbAycVa+JPxKt/Det3Wn6j+0DdSjUIJJItL06yjlQLnaqxzQRyOjE5ACqc0AeW+Nbr9qrxlbSXXjDw54Y8GeGWjUeXqOsvBKJBxlpYJImcsei7cY7V5JB4W8W3NkZ9Y8WeFvslnOtsthb6ws+mXisu8LJFdQtblkU5JYuR0xk14n4u1fwHYeItQ0mbwHrHieC7WT/TTf6q119pbB83HkLHg9wfToBwei8H/sxeCvHnhgXOm2esabrXlMYrq5OoC2i3HoVe3VMqh42s2T1AHNAGb4q+NfijwJ4tm0jwxHpenW0MavBLo8mlS2xA4dv9Dht1OewJ39M54rWTVhqHhpPF2pePNUlkuJBLFp9vc3Yv55dxKJJIPMto0YngbwAOqniun0b9j/4FeF72GH4i/EErfqwVrLyXtpEkHzA+fhV8sr3Vgc1m/GjwBqunrJp+n+JdMtvDts8U1gjpLKItgJRXuJJZAHK8kkjPQDHUA5zV/EXjs2y31jYeL/E+oRQvNiLU99lalCR5skxSYllBI2oBtH8QJxXhX234x67rUj63JqKatL+6s7edLZGgWXO45n3MiMGOWIXOfwHZaf8AEDxxZeHPsOi/EPQ9KsJHZZoJdkLTI3zu0imLlQVGF5YkgAGm6j8Zbzw5oWn2k2v+AvE0k8qJtk0i6iu7YOwJlmkSGNJAOrFg7YHAyQKAMm98IXuh39v4c8bTWtm/2Iz3DxxWt4QsRJ8tFjVF82Q4G5ieO/ak8BeGPhPq2vXV3r7XcFvpyGVLVbW3ubm8y+dqQBhtIXHzFSCfQCuo0zx74a1/Xbiz17wh4W8SQGFQ1xouoCzMoiBx5PnGKRTt4VMLyMnPfWHiPw5pMjx6R8JPEFz4c1CMj+z2158G4jOQZBbybsD+6x6c0Aa1/wCMP2a7fRZNOvtO1mLWL5AsUH9lmF7ZCeEYSmKIsQcBhvXPOOmeH8L+B9I8caleJ4G0eK00yFXk+0axcWsPlmM7diNKYldeRknb68CvVdM+MvhTw9HHaeIf2adOe8ZSdNfWDdPlxjBkaWOWWRBweGH1rj4/iJ8d/HWvyWvg7wfpM9xGZTFZ6ToKT2lksmCUiieMQRkd5HyzdyaAPY9c+H/w98O+BrCxl0zSLzxLdNFNdeZJBcWEaAFhFHc2quVeVSGZd5wMfdzXmGp+EfhVbPNY2XgpnvcC5+3aZHc3EUzbP9RDHt8tE3nmQuTgE+lelReAP2s00bUNYvPCXhhL7UTBLJPrU1hHdRNGdwZLaHcICFB3BgvQEjOBXOf8K7ax0zU9f+IHjnwzHdWu1hbaK8k6yTuSXgbaqoJBjbsypB6kAEUAc14O8Hza9qljpUXgTSbL7fKsKyahdeWgcD52fzrhWwACT8oxX2TpHwl+HmoeJ7S10ODw42jWNssOt6heXlhY2eEAObeJG+0E5/jkXBHTnr8deEPAFz4zvGjF3HDYXKvK/wBkt7ECLK7U3yXQiiMjE5BLkrzgE15v4+8LweFdPvPDR1O1ktrmcTWsd5fW6uNmVJkjtECTS7SGAMmEB4GTmgD6p/aZ+PHwe8OapJ8P/hdpum65a6TGhVroK1rNeqBseMeUzTRxYI+d1DA4GRyPgx/GfiOwvbvxVNoml28N9OZHtLOxgS3V3GCOQWTgEgZyCc1bbTNJ8GeH3vUm0y71G+UC0SKH7RcCNsgybY2kCEHgbsEZzWCPDXxA+IepWvhbRNP1a9u4o44obSGzjiRDKBueZt42KSR87nJzzigBLvXRJq9pql/YNpkUam6kktzBFKu48FQWV22/wnOfQVj3firwPKkpuv7V167hnfyvPlW2gaNM7WYmWUszHk5BPU5J4re+KXwruvhHDa6f4o1CT+2I4M3ltHd2sscLE/cJWXfHgcAONznOFCrkr4I8dfAmG0W88WWd/qd/bxbIbKCGDy52PADTncYgMn5vLY+g70AeWy+O74TLLp+j2dsyIUUku+BnJJJIGcfL2Htmqd54vsmeWZNEtI5bnPmrt3RjIAypYFgx6k7jzXo6eK9K1Wf+zLLw1odtZtcFjd+WZLiKFSf3eXkjVyAeWIUkjsK5a/i0C9u7uD+zZbyVIwsMkLeTbxoP4yil2Jz2zg57cUAeeQX+kySeXdQ+Wu4kFF6ZPTPUiupW68PSbVhtEYhAN+52LH2DPgH8DWrbafo2m3vlxaYNRaIFphKrqqEDPCliSB33VDaW1n4j1ZDBDaRABnZELRIiRjJ3lUbbnH4k0ALNqXg+ztzARcTyDbtUBFRCOcjCg+3X6++FcXLXqLeC1tooQCqiRlfYWOSViUKoOOOn+NMut+oalm03TP5jOgYKFVRyBt2qOB+laFjD4l1a4NvHZfbGdi2xx+647hQVHA5PYUAczdeJdWt5I47Yo8VoCsSvFDJErHqwi2eWT6Fgx7+lc/DqV8Th5GJJ3Euq5Jrv7vRprW3Ika2mbc24RnJDH+EKo4NZ9haokkq3dqXjxklVyVGepJXPX6UAc0dUvG+UncuR0AXGPapY4ROC4RvVtw4BPp0rsLY6f5MkVvYO+Af3jMyEntwM4rasLTT0lUTwwRyMoG9llkLFh0BKbVwO9AHEQ6Es6ea93HGR1Ew2j6Dkkn8KtQaM8b7TcAoQclOAV/Tn2rrJvC32i9aOCQ+Y+FCxxZVc843sB29Kk8R+HY9IsYTplykjs5WZoyWMbKOjHoM84AoA5uaxXT0VYrguxxvIXore7YJNZt1cfK8cEBkU9HkO5uBx/kVShs5dQk3m4EkhONjFtzH8qdLYzxXrWlzLBFIrFXUsAqkf7QyPyoAofbLq2jkRIg3mj5sjg/pWIPOKlmtwPox/wrpprMG4EYbeoO3er4TPsT2pZ7W0t0H+kqzFcldwYUAZUE/7secjrkcBjx+FI4mY5jVgO3O7+YqctcciJoirLjgYIH1Pes9zOTsO7H1zQBaLhl2ylM/7SY/lVV4VwQqIwPXGefzoja4kIXeWUdmGf/r1c8hwgcrlTwO4+lAFAnCbUhAwPyquW46CtM7UBVfk4x97A/lVbysn5WBz78UAZT/auWR1/wB3FR77z0X/AD+NbP2YnjHP4YpvkMOOPyoA/9H8V7XR4LiJSoSKUEAggEfXI7/hS6t4b1zRL3zIJiI5PmikSRZFZfqpIyO4PPrR/aeip/y+fMD95V5/P0pk+u2SY2TzSrngICM/geKAKn2LVJlxIkc3Qnsc/lioJtNu1O1o2H06fyrQi8R2w620rtngEjJ/Krc3iqVlURWRYjpvOB+OBmgDn00+dfvtIuOnGf6VK1nFIMPJM2OuM4/SrX/CSagXIayiyfTdgfj1q5BqMl0Ss1om4gY2N+eQ1AGG1np0cZkKuSemRwfrVcGPjyLZ2x0OAB+tdPFPYL80sRUnt5XT6mtSykt7mdEVo1UsBtJ2MR3OWwvFAHEE3m7KW4X6HJH5g1IJpowdwlcjqGIGPoMZ/SvXtY0vQbNYRb3DTHC+Y0ibBnuEwzA8c5JqOXSPDeoRMbZyHCsVZmA3Y7BM5J+lAHlfzyASRSCNGGCCSefxAFSnR7mYjfJ5ikbuJAOPwr0YaQYLWM7luRIMkNHgoOmMkUR6avlsDEoRx/Fhiv4DBoA83Xw3LKfLgcKR1RpAp/Uj+daeneG9TZikcpzyVXknI7YAbP4j8a7F9MjSHarKrb+HG5Dz+B/nVSO31TR5I9Ttp5EaNvkmjOCrexAz+NAHPXNzLDELC5QSKjFhtzjJ64HAH5VXjntA4Coyk8Z8tVb8wDXSieNrrfeL9oLgscw8knv2z9c1BLZ2MpLrF5Z7nlB/MigCjbvqMc7xWt/JBvGcSsOeKtpFrk8/kXcMUwdOjEREr2KsBjP55rpbTwvqqWaaxAZvsrMYxMYnMZdRkoG2FCwHJGeKfBpdzMhllNuyE43SP5RH06An8KAOYtvD80zHy1uEmHO0bXH58Vsy6RqUZ2MZRMoCsrrjI7YbJP8AKt630i8tMXQa32ocjJMnPbGW6/hXUJdeJL61aLWbhFswQ3zqG5PQ7v4c/SgDyu0TU7KRnt5J4gTiVUd8kdM9RmtC40DVJ4FvbO8gmhOCUvINkqseMZIYEe4P5V6zDH4ZOiLBPZRSX0Mhf7VC6oWQ9I2RgnIPO5Sc9xWRYRaXexyRxWc8pjYPtt32Oi9/myc5/wB00AeMjRLyFmNxJa27A8MgYkn2K5xV9RNJJGblo53B2iRok3H0y2QT+NehXnhK0aVPNTUbATE5Fwm1eenzkYweuaJPANraxmSB0urncAFEAlTaATkuWAJ+goAh8P8Aj2/8MT3EYt7LE6BFUzsjJ6ldrffI4yQcVB4g+JJv7qP7bDbow4yN8h2nu8gUMxqxLZJpxjlvo451C/IkdqIwPYMMk8+5ri9Z1nQmLRXFrPvTgRrEeSeuc4H5igD0nTNZ8QTWUl3p2q21w025PKnnLQhcDA8tiCpA9RjtxUvhPUfFltfyXc8ei3sbLzGztDhR6eRltv6Z614xaXl1PvXw7pEzbV3SOIAzAHjI2r8vX8a1tE8Q+KPD9y80FxfaXOrDLLCuOOeVcHkGgD6Vn1LVdWsbfUpNunpG4VEtrx3U56lY5I+SPXpn9LUvw91TUrBJLXW7+Sz3eaix3MfytnnekYLEBvbHtXz3N4hlvLhby+udSupWJaUiNEHJ6gqPX1FWbTUtDkuo4rqTWooRyIpLgmP5up2x7SMntQB6ve/Dm6t5lkTVX1Of5ZJ4lMylQTjaXKBcnrheRXZaDYeO/C15ajw9o+pSrErKLcz29wkitw48wAui9sBQfU1wemaHqHim3MPhS6+dExtYzRSEdwGcsCABzzxXOQaf4t8IanHd2epXVjfW7upihllPyseUC+X5fz9eMg96APd4Pib8T/D/AIhZ9T0i8SAq8cFja3oZ0YkZDvNHO2wY6Lt9AcVzWu+JvA/ifxBL/wAJlo+o6XdRvlrz7XbQMRjo6xWaK2D0+ZfrmuO8Ratr3iW8tbm+1+8ZpCFZba1YSxyHgrujhXJ99vP1rtdLuNX8BiWC11+9lS6Kx3NpqWjpdW7iQDcxWZI2JzzkZ6e1AHJX/h74T3FzLFa3us6ReBAyCfdMlwrZxh4UKdB3J+uc17n4L8KfC7R/CiXmp3lzMsgbzIikN1AdxwD5ciIwbI656flXG3otrkZ0HSDPEixjdbWhtpGl6sVwzYXHqBXPSaLo91qP2iDU9Q0cSzGJxJD50cY6Fj5UAUtnPAbd9KAHeJh+znaajPNFZ3N0WJJjtLWMIr/7RMijB7belZtj4y/Zvs7YnUNEmnvAn7sw20Xyf7LE/IXx0bt3JNdOvw78Kt5ts+pI8KKDPfpFceXIqkli6Avj06cfWvNNf8P+A5pfsVlr9uoOcK0SxQBR6HG//wAdoA660+InwX8iNtMbU9Nuhvy3lCaONc/KGkCuVY/xbQR7ivRDrvjq/XTru3OrXHh+4PnSXOlxoZ2t8c+WxDRAg5wHVWGO9eTeGtE+HU0MFodUtZJfKaWZntpkBcDCxo0cagAdWZgQcV634G1DwdoFsukao9/Fb3Am+zz6Lc+akkrBQVltpWKZKj7ww2ep9ADe8LfACz+M17cJp3ijX7CRGMcyahfA3F0QpcZgDghMfLuCkbuDiuC8Vfsy+JfA18IY5dQt7KSP/SvLt3uWZT/edSpYfTp71Db67H4Y8bQXWk3erxXcUol0y8kjhWVAV6OqOC6EcbWBGM+tfWM+reM7/QZfEs6Xms3NxEjhbTTZ1lidsArsjbysgjt9eKAPnXTfDfhnw3Zw6xoPi3Wre+s1EUkdhLdLMygY2eQYpFUdvvY+ldrcXXijTbNdYhHiDWSLUXUrK8PlITyNy3MaHcAOWUcHpXn/AIssvirqaG80D4dah9rSTD3d07+aztnA8kOzHGR3GPSsnQfib+0L4JmMV/pcmnWiZa9t57qS2S5JXYC298cdcDg46UAdLL8RfGEssd2dN1aJptplZL8rI4UY/dtGqKD7EnmvdvDvjXxdqthaDSU1yCa0EZvLTWJZ3jlVjtRhI5yv4GRCTyMCqXg/9oPVPG+lLpuo+Ebe50uEGGWfRbx4rpm4EgiBgl+fBzvGF9GrQ8YReCNTsrSTw1e+M9NtZYoYntdX03cVYEEfvmiVZY+xOW3daAKVvqfxr8Q/abfQIr23aJS8kF3p9vdSxIDkmO5Mwj+mVH0rwb4t+F/jCYjf6/qt1pysElilvBHbYPTG+BsL7YAzX1r4S8A6BqunTT+EvGGueGr6F3MUcxT7GoddhkaCfKbHIOFyp9Bnp22nfD/xzaeHZPDXiLx0viiYv5iSafZLHFFbghyrJOxWTLdNnAPTI4oA/Lm20HUvC81pqt1q+ijUtQtZJ1eZLiKRxEdrJlrd0kkbBAAPNe0eD/2i7jwff2WoyeJlsbN0/wBM0qBopLd8EceSttuDHbyM5/2sV9+/8M5fCbxi0dxqui2l5OGXN3Yw+QZJgcBZIhsiBH8WF5NU/E37DvwQ17SZ5hpd3pF9YBt11FcqkXOT9yRUJ54ADYoA8Uv/AI0fsb/GzRTp/iS/vvCl626R31S3mk0uSZR95FWXCvz8oK/gK8L134c/CiNb5vCPxR0fVLCBFlWC0tpZpwgHWLfcMU542rgCuw8TfseaT4N0z7b/AGrdr9pDiFLqwsoxsJGA7XMiEeoKkse1YWheILf4ZWy2vhzRdN1FBGsF9Z/2Za3xvlbOVeVJDIoPXKjr1NAHjng740XvwP1tr/TZNR1u2fKvBdrItvKuScZl34B77R+Ne169+3h4R8beGn0W/wDhHauVJEG25Lwwk913RKUP+6w9sV2HgLxYdMluL+L4ExNBcbSUa1gS2znkhCryYz7k46Yr1nQfjH8BrKZ5vir8PE05XjkWWCK3e1tUUn5WG7ysNyRwpPcHtQB8d/Dn9qnTfh/q3/CTWvw7trfUrR0Nq0lzdSh7c8SId5fYD6jIxxjvX1WP27f2a/iTal/iN8NdWsb2RQt0NMuXntJgSeHMTwye/K/Wus0fwr+y5471640jw74GEgmAKXP2ue5RUYbtsf3gzgYJ2PXT61+zd8Bfh7qP9sRve6JAYlB3XNl5SM45Equyydf9rj0oAxfCfxw/Zm+FmNR8FaYk9jqYVp7SS/a4uQsnKqLe7jfJHQ9PTNe36Z8T/wBnfVb0eI7XR5NFmZTJuuPDCwwkg5+a4gCIGHbe3vXN6NpXhTVLC30T7TaanZ38bpb3cUkVxJGY/uDDxM4U+0hHvXlmufBfxZ4e1GefRLfRdVtr7dbtbavrd5FB5RzhXtfKWHce2N3tQB9Gat+33+z54Tul0DU31Y3YAiL2NvO0QXA/i+6eOm3NeWeKf+Cgf7Nk1rLEuja9rYZyA1nabZQOxZnePB9s5rw/x38DPgE3h2D/AISLTYdD1y2kAlto59UEEruORF+7KsoPAKqB7ivPNB8d6x8Knm8KeAvhJpeuW82022oRRXW2YMB8paWNGeRc/wDPUHp1oA+jtO+MP7P/AMTNHuLlNL1i1SRxbRxaz4buL2VlbGHSS1WcL7/ODitLR/hT4w1t7fWfhvrUEOj2ihW0qDRp7K/WNsnImv8AGG9NqNgV89yftL/tTeHnjl8NfDS90uNX23qS2e61ZTlQsTXH2hQCOSwHX2r0/Qvix+3v4hdLnT/AVp4Xe4XadQv5baGBQ2NjeVKi4j244A+YnIYdKAOJ+JXw9+IPgttT1Hwr8PfFvihNVxC76le6beAXLAk7GWCS58sdgUXnjPSvnzQvB/7Zmp3UWpeF/AmreG7K3AtJ5RePYxjJ5LzMY/LUZ5HCgV3PxS+Cf/BRDxTqF7calqk97bTzCeSLSL+C3t1ZSdu1YWXAHUDP61w/gz9nn9u3TJIv7IW+u7e6Z5ZrK/uFuLd2kGGM0UjEHcO/XPI5oAu+J5vj94A1OT7f8bPC+k3JgE0ljfeIn1HaIxj7nkyKXHQBVJPbPWvAV/a8+JAupDrMOm620b7UuIYJLESBDwW8l4vMVuTiRcnPNdz8Q/2Vv2nPDkdxq2r/AAxsrZWffLJpttE3Xuil5ABjsF4714pb+BvGTAvrfhzxBa25I+W3topBgc8g+UfpxzQB0Np8b/Deu+JI/EnivwbpJvVBWOK10uOS2kU9A6NL8zZ53MGOTXc+KP2xvHGu6rZw6XYx6Ra2ShVt47KG2HygBUUQGMKiY+UZz3PbHhv2XwdAzxz3Ot6dN5hDK1qFRAOm7Dk59cdKiGkWOqlvsd9/atmuVf7dKsG09tpd1yfQEigD6bT9vz4v6Hrkdto9wlhpPmI09mlt5yAAjOGadyTtGOGA5Pfp9Ba/+398KPE9qul614E1LxAt2kQv7i7s7bY5GNwWJnfIA6EkngfUfmnH4beG4b+xdOhieI4P+kwXUJI67g7Y7ZwM1z2qeJ/E9nMLeeSGLZnb9nVbZRng8wrGT6cmgD9H4P2zP2bTerof/CpbW30SzTFiq6TZ3E+88HzB5qkg5z94YPtWpqP7bXwl0XUlk8H/AAVtry1UeY+oTuun3DuQeBHbR7IlXOANzEV+UMn2nUnBiDB/RJM/lj/Guq0zw7rO6NL6PUvJf50SOB5UZsdxxk+uM0AfZfiL/god8U01dpfAXhfwt4YsUaQxQLZG+mw/eS4uH3M/ckBcnrmuB8Sftq/FDxr4Pn8K+Mpb+8aeQyPLZai2mwbckhfstrGiMo/2y3rXmukfCvxBqNk+ttoiz2WSoFwLm33MOSEIiGT9OKup8PPHFuBY2Xhu9giZwwH9mS3JQkcYkKbse3IoA8+g+Jlzb3AlXdNuBT/iZL9sEa9Bt83cOO3Fdbrvi3QP7KtrhZNG1y7mDeZ50c8c0DMOoWMxLnJ688j659q8I/sj/Fzx4TPNYxWyRMFdZrGaE7j2IMabj67c4r1zU/2SfAPwj046z8bb+0hjlicx21pKiSs2DtG2SQMuTjAXcT7AE0Afnfb2EOsn7RdXLvIigB3k8xgo7Dcd3A6ACtC38ORXuoJZaXfo2/G0viMgnsVYivb9S+CHw+uvOjsfEdnaTs6tbj7bBc7Y2GcOYpNoOOvcYr2L4Xfsz6HeQhR470fXggMlxbWkCXLwpjgLLIwAJbgltqjn5u9AHgFv8CfEsF2puVkvZTiTytPDNK0fU7CBtyB19K5u4s73RHuYob7WdNMZKywt5jlsnAyy7lB9QQOle06z4e+FXhzXZdM8X+I9c0bUoEVhDp+nwzxoJDxl47toguOflzn05q43hX4N33ht7jRPiZeXGvFm2W14DaxeVH0UghtpI6EEjtQB5jpOn+Jda0pFvPHT2lqjF3WZ3adUOATtC+c4wBhenp1rc1yXxzpttHfaD8UrvU5HKb4Y7y7s5EWPiPerOgyAOmDio9Cj1rULyPSIteju0eNgYDfSRxyFTwjMrR5bIBwr496vwfD7WtU1GdbnX3urayk23H7/ACm4DOxBv3PzkbwxHfPQkAo26/tAeMdKvUs/F19cQ+UzXkc2rTbpUxuIbzG2vu9Mkk1i6J8IviD4u06C61TxBZJYwysqwXd+pML5wSYGI2e7EAY5zXuuv2emaR4d1G/i0iW/0+1hFvHPHql2ixy8fPJ+6a3JY5CoJD7k15NH8R9M0u2tUsvDUog2n7c0l8Z2lwclEVBEFT7uclsdfagCW5+C3iXTIo7q58R6FBasyGFWuJLeVxuK74oWXe4yPvJkHsa9T8M/Bjwk8E0+teMdNurEkC+u7CyadYlYE7Rc3LwoJd3G3dknqMA14Xe/FrS9SeMNp0tuzLGk7wlPN2RnKpHvThfUZyTySc1R8VeKPDmr30LPFq2pQpGiQwXE4jG4KdzBImZI8k52oBgfiaAPpH4g+Lf2dfhZFHoXgbQ7/wAVwB0uJ/tl2LK3uZAFMa3Zij3SovLBIyuc+mCfmXWP2l/iZPaTaL4XurXwtpUisn2TRLZbYENnLNKS0rSYOA5bIHTFcVqHw48Zami6rFo91DZyhmh+SQx7B8x2u/3jjk4NZtj4C1ZyRO0UKj/no4U/l1oA84uXvLtz9rlkmyxbdIxYlj1JJJ5PrUQsihyvHoa96034VXd5atOrKxUZ+VWcEf8AAQTn8KpXfw1vrQHdtZkwWVBkgHp36+2M0AeKr/aKZWCQj1XOK6bS/FvibSLS4sba/uLaK7RUmCNw6qwYAn7wwQDweorq7zwobaLdar57jJbbk8fyzWPa6Bql8HkitZREnDMUYgH8utAGRFq3iIxzxw6hMIrnImKOSXB67s88960dK1XxDpkoNnKJDtK/NkcH2BGcehqceBry4uFRWfB+88ZJVcHHO3rzWhf/AA51HT7T7XM8ksQZVEgjkChjzgtjjAHfigDMudZ8TzJKrPFsfAfbCg6cjkDIqxbat4qsFjliBVG+ZHWMA8f3WABx+NS2vhgPtWS6ijyPvOwA49cnNONmYRsi1GJkThiGOAPbPBoApXPijWBhYVCEtlyCysx9c561LH401qOGW1Ml2scwHmeVLjJH97+9+Jq8dNs2HmtdxbHx99gXPuAuTWTcNpqERwSeYUJDEIAv1yeTQBfs/EllFuivLy/jgddrIg2lh15YZBGa17bWhdXEUOn6g6QOuwyXDlgvqfUVxf2aGdsPJhf9ng0k2iSQBHjdl8wbl+Ycj6Z4oA7TUNTnifZHqsl2ehKqyKAMc9eQe1Uk1K8mzAbmIRjJVJSwXOPTPU1xj6ZcLllld+5wc/0qsmlTy5Y7m2kAHIDAn6c0AdUZrsry0YPXCA889+lV1upIYpIliQM55fb830BOePpUFvY6mI3kClkjxuJ5xngfU1pQQXhRTNBkdc7cH+lAGWrz8EjIPQFM1NEkkqFP3YJ/vKB/Wuii0uS5DSM6wxryWdwufzNU2itIJGWOTzCSQcK3P0oAy44XhG8qNp/unaPyq2XsxF+8jLucDjGAPrVa5s5eFWU7TzzlaqGxuOBwQf8AaoAWa4sYHG5Sw7Z+X8PegXunuw37kHoTkUw2D/c8o49Rg5qRdIuGGdu1R1J4A/GgC8I7KTleVPbIP86hNtEWKhOPUcVS/s3y5cNMi4PJBrRB0yPImnLYxgqD+OeaAIDZxn7qu2PQ0fYR/wA8pfypx161tJW+zQB0BypkJJ/JcVcHxL1tflSO1CjgD7HEcAe5Uk/jQB//0vwy+wpjkoT7kt/LFSGxuHXCsNo/ujb/AI1sKkaD93GB9eam84Rp+8I+gFAGAml3ikNvC88ZbpWqlndLHkyhiOuOOKlF5actIHwO3T9adBLECXyyhuo3EjHvxQBWWRraUGVsgeh/wFXrm5huIs7kRm6jByPwNK72KI0zK2Acj/PFOtbu11NQFJLLkbGUZ/OgDFMWCP3zEew4qxDNdAEJ+8HTDcjHpzmrzSxQyHC4x2OB/PimLqmlmTE8KKw/uuAT/wB80AWYrjGDJCqpnkAkL+QAFa0BtWlElvEYZT8u+N+35Kf1rFmvdNeM+SUUA5GdxP8AI0oWa5gMlrdxRnuFBB4+tAHWm1unbZFch3z9x1yWPpjJrrNFihvUlg15raKK3XcIi7QuMdk3hgT7V5VZXt5ZkP8A2nOWHXy8kjHpXZ6Tqmn3RdtTv7gO33WuIlZM+pKkt9fagCnqWmWNxqLC2uf3AORlQSF+vf8AIVYuPDTABrSZriEqC37tVIH4Mfzro2m8MCyk/tC9t/NzkCNChcezZx+eKrwahpcGH0GS4QTL5cgaaN1OOwJAOPrQBwZ0BZpfLV5ZiewwCP8Ax6vStD+Gt1qukSajopeW5tmPnQOdmYwOGViDub24qhcaOqWxvDY3Ky/eMi3KqoB+gxXOX1xc3L+Wt40QwBgvyT6ZGM49cUAb9t4i1DRrd9NtLjUraEsxmiWXERbpllI2luMZq3bQ/wBs/Ol8nn8NiUoHP/jvJri7m2s4HCf2g91tXLgfMA3oPmOa1Ib6zSLy7YWoktgCryxbfO7glSCePegD0W18LaxrUC2v9qmKckhUKIyAD1xhh/3zWW/gH4n6KzTWkrTR/MMidYtygddr4OMdKg0XV9Sti+s3FzYxwyOA0KmQbnA4YBTk8dQCK6Oz8faHq1/5Wo3c0wiQ7bdXkSItnnaW37QR1zwB60Aec2EHiqG4a4ulnSAPmQxtFJj8lPArZ1W412JBCt4lzDIn7qRAwYA9Qp2Aj3A4rvNRsvB1vEuu2GpYzLlbWFo7v5GH8ZCg5B6DnjrVW98Y213p9s8+lJLb2qqP3Kyp5pHeUF8E+oAFAHl0Xi7xBCDam81SR41MbL5rsm044w49u9bNr48uNFMTfZImlwSwnWNXfd3BUZGamn1Lw1Ne/wBs22mNbuB86ReYEY9cENJz/L2p8WveF9ckgsr3SYLOSLJS42kBix5zkFjj60Acg3jvxJdztJaS/wBnEvv2WkZjLYPA3DBx+NQX3iPXNYjjkuLae5ljJ3ySOx+mOce/WvUf7DsYQbq2MTDfsVyA6Enqep4/lWpceFb/AEeBDDawzRXaFg8cm5ZCf7q8fmM0Adj8N/in4ZNra2njbwmtokTJG+qaXK0EwTG3MsXmNvAxn92FOeTmu31Kb4dSeJ500TxDZappk5Ura3NrcyTmM8gkxrGEYcgnLHpkV8xp4b1aQecLNXVmYIjHjI64beDwfXg+tdDs1fRVjk1XT1gLoDakzfdYYIdDGxGfYfjQB71f6p4R+1fZbeS1tbdwEjZy0MZwccho8kZ/jZq4jxH4X8NXXl3gn8pCeWUqy8jqPKO5ge1cnrWnw69FFcwaqsN80SvKr3HDMR8wLAbh7giuQsvCOqXELXlvfwWaHP7w6iyRyFei/MjfN3ANAHfxaDruqiDRrR9Ma3LFYXmN1bSTFR90byFz/h1qey8M6hpN0fK1mwsr2Dny7iaaVU98cpxj1zXis+ia0qmaw1KG8ud23y7W4eaQeucBf0p/h671WyvIowt+LqNm2mGFmk5GDujkXaw9qAPetV8UeIdU08Wz69Y35sGVpFt4Bb7VPG5pI4w+3Ixk9+K4jU/G81nB5E+pRSnG5RBb/bETuFzOnDetc5quttYrDNe6IkJ8ryzNbrPbs69AzKdwVj32sB7VIdS8LT6LGLQXE0zH5kuVkQo3oHyoZT7mgDvbL4iaHp1vYy+GvEF619vGLa8t44kjlYAfeRTH5Y6DIJFUn8erEsttq+j6hqWpzSvvg+VLPaTlCoADMSeTgrn1ryiBNW09TqFjBbAq4kjeMDj6HdnjuMVZ1L4m/EC5vUv7hIHu0UKtw0ZV9oGAPlKggDpxQB9f+Gfh/wCHPEGo6dF/Zb2FrqRRpD9oaziIaPOxpGlfy5DICNpVtwPBzW5Z+GvhH4O1ZrDxf8O/ENxZoCjXemTRzzB8n94JEiIKYxhSoJ6+1eHeCP2ofEvh7QZPD954R0u6huGTzhB59u0oTkEAu6q27ksqjk5r0a+/aT8DyldSj0/VLDUECefY3hW6gZ14ZPO86KRV4HJGeKAPX4vCPwh8Xw50fxRd6BKit9kg1ayEbIFAwryF1iZhn+Ha2K4ObwJLCJ9K1PVNL8RadcAKrw/Z7MxbT1Z0kY5x1AOT0Jrf0bXPgp8YrSSw0iFoNRZXkWxstQjtWDHGfLFy/wAxJJ4Bb2FeDfFXwx8KPB2qNpOq+FvFem6moR/NuliZJQRyfkZVOfUZoA9L1Hxz4M8AY0S7Q6gsMMaITrRVhj/YR5AMY4wDxxXM2XxM+Cy3sXiG61rU7a+imEr29vdXpKru5ELxqse7b3I6+teN6f4P8I69bxQaVBi7kY+Ul3Nb20sjHgJmSYA5zx0rjPHHwg8aaFi41DRzptnv8vzHlWVN3oXiGz8QSPegD9Df+Fs6L8SbO51TwrrC2cFvIlv5+ozzyXGx+A7+UWYjA5+Xdx35ry7xDc+ONG+0WWn3/wAP7ywmTdNeX10GNxsOTHKl8VkRueQqjivz2n8I6vbKJHi3IDxJECwx65UGtLSLXXd32OOeV035EEivMoZsZkVSCA3TJ64oA+wt+o+I5L5dD+GfgvVtU1DENsfDesgtHs/1kkVmksvUdWCKBxXUxeH/ABdpPhWPQRZ+KtG1m42LLYX9smrWm2NsH7K5kHkJkgYEWTwN1eZ+C/gjN4lkjm1fRNWuJJog0OoaZDLDJFIeFd4ZI/nTsTE2R12mvXYP2c/Fl/5ekyaheeG9QhLGyvzqfnW15k7kTynZGjk4ydqZ9RQBP4p+JHwcuLCz8NfFLwJ4v0TxDZiOB7yOOzuFlEfO4rJGjHpwpDYHHSuT0vWfgnfa2Y7/AMb+J/BW6ILbX0+nCARZYAI62QVQhHzZAHHfNdZqfwH/AGp7DSbjT9b1K21bT5MGK51BmuNh/wBiYgbDx2JFWfCXgT9qHwVf28s+neFta04MqKmp2y6jEyDpsX/XKAOMIRn0NAH0l4Q0i30bQnvPCH7Q+hF4mjdZWaO7DK2Pm/fSmaLA6jP1xUlz4u/aT8co2n+C/i94V129M5MK2l7YWhlji+Xa9tPEs27PdZGz1FeOXvw5TV7y6vr3RPAvh2/uHD5Oi6jFGrScAhZ4tmwnqe3rXrFx8BPjT8L9RsNb8NWngTV7O5UTGMNHHHCzLlXhupIw6x5427+vHSgDyP4g6/8Atn/C4xS+JbZpYWkP7pyuoDKn7y+e7bAc8YHTpV7wl+13/wAJFpl5pPjzw/FZaqqPsls9MRvM2gArmAI6P1/hI96+ttE8R/ET4oaXceG/ir4U0zw/fROqQGOWeQTKD94yRXUaFGx2HvXofiD9lf4UeJ/Dts14htLwIytPBqLwOO5yjKA6em5jx3NAH5x6b8TviBe3mPDouL7R55lXy4rKOCfdywUmaR13qASDt9SRXCfGzWb3V9LkYeGPEst9aszTTXd1Z3cEjvyrTW0IcLtHGVVeK+r7T4N/DL4P6/Jc31lb67Zs+xI7j7HsEgOUZZZJVw3ryPpXs97pHgHx1p8GmeHfEkng++vVyLUf2bewxgccFFJ254wM0Afh34S+JHxn8EagzeEtR1DThI257ONXW1kzkYaBh5bcEgfL9K9Kv/jl8eII7W08RMttZrKJUintI5oScbTuS5Mg245xlVB5xX6hXv7A8uvadO3jv4g3V81w4+zyWSiCReeOsZVlx0GVrgPEX/BKrTrmzS70bxtf3Vw8e5Y7yJJpD6cBsgfTNAHxndftC/E3SZLfXNN8fjT3FuIhBpsen27F1PCyRW91hk9XZc+3evsf4RftMfETxZ4Llu/7EbxddWZK3Mzazotj5hC5w1vO7TP7OME14xq//BMzx7pcpjh8Q2NwV+Yxi3kRlGccswC9+f61zXi7/gnX8dfDKQyabpdjqQmRSk32lSAW9IlUscDngmgD2XVv2ov2n5LXUNT8OeBNLsLCD91ObuWO9aOMDAO1XQHAHVFxXnvhj9tH4v3V5nxj420zTbfTrv7T5TaYs20YH7tCjOyrx0Clvc9vlO9/Zo8dWN3qEHiS+t7d7DPmCSQqDjqEiIDEDpwv4VreE/2V9a8XSeToGuaeJCMASrOiFuu0sI2/PoO+KAPqLVP+Cjs1l4i/tLT9AOuokgYwzSyWmnsR1PlHzJfm78r2613/AIa/4KF/DrxJbXNv43+DmkSmZSjMdcmeNoycsoS7ilI9QFOPQV8t2v7FHxBt71LPxDE4QMC50qM3T7CcbsYX6jOM1oav+xcyH7PY3uuPeu+IYJ9KMXmA+jAthh6MB9aAPonxR+3d8H9BvtM1n4ZeGDp01ujJPbjUbyAxAYwrpHEkcqDnABPvjrXofwz/AOCpWk67ZDTvinpWmadHZzFobm3uLp1eNiFGbUq7MUHP+tr4H1T9iH4yW6CfStB1a9SP7xNum0Z9NkjL14wTn2rs/C/7Bfxov9Pi1u98L3iRggTQTRhTg9MbXDDI5zQB+oGrfty/AHxvrVrpuh/EPw3ppZdi3PiLQL+aKNe6iUPGiHAwCfXOegrq9Tb4BeKtestTvfFPgy8bU2RFuNO1rbJNIANojtZGcZY9FGMZ7mvgnVf2KtB8Fx2U+s/D/wAaaiSvmS3Ghra3sKEYyriV+mePufnXoeleEdD8J6BPb/D9fEngS+hmEtvYXvhM6y7SxgbmkxbSlQ3YJIoHYCgD6w+IXw++Efw+0KTXZZYrYzyhZbmHTRexhpOjOpIzjjvya+fbP4WfAr4m3ottU0w63eSIGjuLzR7nSbODdztDxjcOBkks3X04q38FfGNmuoy6dqGqajq87SCaR7zw1e6cPtAHzLHL5jxxqp+VQwUD0r6stvinrfhLUodMtPDk4spULy3wuLh2eTskvlWhRQSepc+tAHlmi/sZG1vLO80TQtPtrOMf6OV1e8jRFYclYhFz7biB7V3PiT9jn4a34zfeHbK6vY9pkunuMsOOQCQWY9+QM+lJ4y/aY+L2jab/AGvpPhLQ2ggZ9083iVfIRVHJk2wYQ8cFzx3r5Q0P9rnxN8VfGbWPjPx9ovgzRIplja2tdUZ4p2Qbi32sW6EIejAEBsYyc0AfTVn+xp8Iry1Yy2GnvCo2oltBskkA/wCejIAnHb9a4zxN8Nvhn4JFj4e8M+EodV1a6kaNLKSaG3mWGHDSNCu15GOAQBH1Y8+tWb74ifsyeNkh8GeJ/ivepOwYxwaBf+QsrO3DK8Ia4eRuyZA9BXL6V4d+Anw71mXU/Buo634l1aGUWzXWqazPJJbtKcfvlEpKLxtG4JycGgDzHUvi34g0IPbeLvg74gjjsZTBbLZxmdEcngmN0QkKOx4Jrg9Y+NXiHVHttL8F6xc6LcM6x3cWvWCad5bsNzFEeNUIU8fKR04601/21tX0PxVqVlrng175IZriHS00a5uCoAZh5j77145SMcHaR1PavmDxb+278ZdX1+WW3stPbSkJQ6ReWglttq8Ydw5lLdyRIBnoMDFAH6I+DfhdoviSee+8W+Ob7UNTmULc2VlqzW1sCqgl5Ak7Kc+gwa87+MXwv/Zx0m6gj1rxAlve29s6wLM9zceWzc5VlieJtxA6E++e3xBoX7Tz2jWsmpfCTw5cGGUzLJbpcQSOevJYyhhn26cV6d4o+PcvjjRYtXtfCWqaEG+QyWv2mVDMxXCxyRsiRJjORtBA6cmgDptYX4E+EPDrQeHr6x1zVZokGbvTJbmGMZ5KxrFGhZRwN5Yetel6D8TPhH4c+GkmkeE/AVv4t1C6mUieTRmVYH4JaWe4g8iPPZUVgPX18m0rSfiDqlidQtPFmgeF0cENHqd4gu44I+5adt43dlVmOOuO/pOj+Pvh54J0B4vEPxQl1y/kUlbTRoryWJnPA2l1ZGO4/eyM4oA+PPGI8NaX4i1mXWPD9lpk2qo1wIpb+FBCznIYJEsbbf7qqqjHIBqh4GsvD+qX9tpOg+EtU8TxebH9quLbTXkjKNwFRnKuF3fxEIfb1+2dJ8WfAvwfo8+tt4Z07VdQ86OS71vxPJHHN5hO9AFkF0+7/ZSAtjGQK4xv+Cg2sWNxNYeA/AOiWol3Qi8m+0XUsj5wskcMUcEQx1RWQHnkjkUAc9r/AMWLv4MSy6F8O/A+i6TrGmwf6Veapp9zqFzbyuRuWCCRI4UHfcwkOMcjkV4TrXxN/aE+I9352r6neyRXQMMcdlbCyhAOFOIbSHfz34OT1qX4ifGj466vqWreKtb8NWumxXtq1tLeQ6QlvIiTlQZDKxMgd8YBLHAJCgZrk9F+MHiTStEin0LxDqGmXTQ+RfKroolCn5DGscKsoVcbsvlj3oA9d0D9m741+JTjxDreq2ViiTXpivlvGRynJEUU6p5krAfKMdByQK5n4p/C7xB4E0uPxFdeItEaylWKK3sXjC6jcuoySbRVkZiMnc7YB9elZbfG7W/GF/GPFes6jfQ/YxakStuRlVRjfG27cS3J5wfSuZl1i5S7eezVdK06YiP/AEWy3ME27WkEssxdm74OFycAAcUAU/hx8L774mi9uYb3SrGzspVSeW732oLSZKqh8tgWOOAOfXAr6X8C/Dn4EfCnULbxN8RzLr8IC7LexmguxBdockELcpG2OPlfqOor501Xw54mk0q1kvW1uTw9y1s95KsSSCZvnMayHB3kclY8ZHXAqn468JeFNHjtVfUNE0tliUC0t7j7feu5XcWmaMFFPY/Mg3cBMAmgDvf2j/jfp/xc+ISM2qazp/hKw8uOythbQZhTGHZYYJAgI7AyE9uK8W0nVNKtdQMdjefaoJztheX93KMnjzAQVU4wTyR7mqq6Z4PVrZ5tRKwSZ8x0gjllUjGDtEn3fqc19P8AwW+HvwG1jWlj1jxBdXdop2yNJ5Omp8w+88ktwAqqf7oZj/dNAHnmh+K7aS1lhutQubV4chVjt5JEcA4yXRAMenrXIzeLtXvb11hUSyRuFQhP3jD6N7dq9k8feJP2cPAniq60DwppFx4rt7fMM8/2tIIjMSQSlyI2eXbzgqAmQDlhXPar44Hi7RLfw38KvhlZaDcLOZLjVHu3vruWFUIEbTShFjBHzOy7R9BQBR0p9RsIZtesZrFJg6KtusXnXAYDcZBg5HfcRj0rw/xR4r8W33iW91eWaVpryYyM+wJvXGBhF+UDHYCu1vP+E2a3gNzqGlpCIjF+5uA6hSfuSSRsyoeMAEjj2NeeXd/qMDlEKpscZaCQSRk46hgSee/NAFaLxPr7usjy3KpGQu5BwAT7Dk/WtHUPEsM0QjdJZvlAdpGcOSOnU4GPcGmQ6je3cRRZwYlIkI4QBh7nHNTWn9o3B3XCwSwyHJLOqfUnJ4PPGaAOP+3RSsyyidY8Eou/eFbjruH8qg8mO7nEUWBuA5Zdp/IHmvTrqx8mMQeQksbrvyAP3efVl6/jRpusS6fcxNG0HmeXtSQW4bA6YbIwRQBwz6M9rFugmgmZh9zg59snGD9M1kzaVdwyENsZgAWVMHH1rq5o7IXzGeONzuJBkiIXOegAJ4rb/sJJwNVYR2sEe0kITGcepBJJz7UActZ6VfmGLeLZVmPAZ1DgD1Gciuj0/wAL3RnZpwpRTjKOMFep5xnH410cNjb3M8UaXEVqi/MGG9nOenVSffGa9o0DRNU0HQf7f1N7uTSbh2iVrgRorsAc7QVJZeME4G360AeOR+GbKK0kl061k1G8LESqEMkVvGvBYnhefU9KydT8I/2ddWv2ohJbtTLHEhTAAPVmHygeld74l8ZJa2anwxbW1hLJP89xsZ3wBkKkOfL2Z5JfezccgcVxGvS6JZ61Be6VeX2tuIlN7LcwR25aaQDzFjUmQKoJIBP1wOlAFeMGyn+z2N7HdeTJ+8VIwYli6mRpnKIBnjGc9/rV1fxrp2rx3J1KSWS6BHlqiqVGMjAkUqpH/AT6Dis/xHf216LfytHltoD9/wAyXzMt6KwUDGMduK4PyASxSBwoySATwPrQBpTalJJHtiKsR0DADFZsV5f2zrJI4bGcA8foDVcrbMCjZRgehGRj6jNSfYTJHmKTd/s9aAHXWrT3GFmCqoOflbvVddQiPymUDnvmon088eYvI6cZrQi06zVV+0nZn19P6UAIk0a8ofxB4NPm1GQjaGCjdnpzUVxFp8UpFuXdBxuC4B+nOcVIrWAUY3Mf9v1oAhEzytksTnjDDI/TmpUtLaR1E25FY/eA3AD6cVOJbCLDJGJGx2GBn86jkcy5kSMg5z8ucc++aAIJk0pNiQJIcAhmJ5JzwcDpxUONO9X/AO+atLBKVO5HGfx/wpfsP+w35H/GgD//0/xEkludoUIF98gmkjIPErBvY8D9KstKYvlkh699/wD8STSQiwuHEcjmNuxIZhk+4NAAGt0+Vzn6Lx+Jq6luLtwLfywx4wowSfpV1dCmlDxw7N6nhWdVZu/GetY94t7ok6i8sp4JSMjzG25B6Ee1AE91o9wpKzuSf7pwcfhWbbaaba6FwrFWX0UfyrQTUIrpd6ynd3GdxBq3p9pqt8XeGN5YkxudWRSM9OpNAFi3tdKkR47yLExOVcIABn2yaY3hy1A3meMFuiDaH/LIpmoGK2VS0MqAknLAfN6/MuARWFJdRxgypaSEg53ZoA3X0OVFH2eRs++Bj+Ypn9m3qHE07D2A/XpWXF4hhEUpZJYZxjYyv8v4g5z+YrQk8UTS26IL1JWIwweEhkx0AbkmgDah0MvCJnuFKsCwy+Dx7VVu9PCQgiTb75yD7ZUGuXuLq8uJAY71Ce20tWhprXdvPtmlLRk5b7x5PfBPWgCdPDkNxF50txEBnlS+W/Xmr2nxw6dMUtLZbz5SChjDZB6nJ/mKjkt/tbi3i1RYA7YHnb0T2JPIrNuvDmpWVwSl0khXkSwzZB91xQB1f9pl43mayjgV8CWNHIBVfYirS69p9iyyNastuVG0yQNKA2c/LkYGfXn6VxKRa5Z7186VzN9794pc5+pJqzFqN9ZxmB7yUK/3o3wR/wCg4oA7GLV9HvpZJrG3AkJ3h5MoAfQL5e0VvWsUGpwHUJU06OWM8xTFUEnHcgrkn2ryoa3dhvJW5aEZz8mMH64GaS9l1WQJcxxmZQB82wbSB2ODQB32tK0rB4ZbRWbBBj3FgemBlT0/ya6LQNH8Q6ZF/aMEcUkxG6OSEiSRT64DDH5V5pGum6ri5Oj3du5HJs5vlV/UI/QfjW4ulXJbyItTv4ARh4rtPMULjjDIzf0oA62a9ujBHFcxXHnwys8qKgXeD3Ikjx+O6qV7d2ttLBfx3UkMYGfs13ARH78xMQQPXH4VjL4fa0BuP7SVolwGaO4dW+boQGHIqMyTbo7SK4nMQOHeSTzI8Huq5O0HuBQB3egeLfBOt2y2Gr/arK+LNtukjMtqzZ+X5AyyKAP94119r4T0a8uzLb6nYbhH5yy3KMAxHVCu4MG9MjNeWReGrK5vISJvtkQ5K21zHBMx9t0bhefWuh0aLUNMkOm6kbjUbBn3eTE8dzLGPqoBBx1IOKALN54Pl1G4jTRdV06eKPcpjhvFR1fGT9/AH5/rXP6xpvj3SIIbK8jkkgUkxeayyrucdc7iucd+1bdxaWCXTXOjee0Mhyom8sDk9MOozjuc1Jpuq3VpqZjl+0CIqXeNVIifZztXYzDJ+mKAOf0zQ/H+poNLitll+0SdVlOWzyEIVtvGOBjr2Net2/wj8R+IrZZzaMRZutvNA/mQTQRKcGQCMKkqDkny8kA5YVr6DZfDXxJo0/iC1uL62vwyrcWe6JGXceSYyygqezjG3HNb+jeJovDl/GmhzOY3Km7jhuZZpVYcJhUlkTB/iCn8KAPF/iJ8CviD4Khg1G6tHdJWKxTQP5jkHlSShPGMY3AelYfhyf4qaZamwTSpdUtZGDGCeHz9zcYJBOTjGK+mvE/jDXteu47B7eS6dnUpEbdkkQDofMZYyB/vFsV7p4c0Tw9ozwR6ycefbK7YgaK4E7DOYpYzuBXrkEqemOpoA+BdX1/wlIslzeeEY9D1IHMscG8RMw6ny25XnnAIxVW71PwvqGjQS2Ed2t1JnzHtth8tgeAQfmAI5z19zX1v45+LPhZDPpTwnUp4m8tZ5LJUmkxx83AGe2cD1zXzXb+N9Ls9TuL9NInVFJMdmETyy/YyDBBHtQBxJttd1WyP2DUNTeRBgRSRScgdcPjA/KsO/wDDHxAbT0F09+1o+SschkVDt9Aw2n2wa+k7r486XJbBrfwFZ2kxj8ppUu5bdWAHRo9rjP41x9t448MeILqPTb67l0wTyKnlRzyzxRbzgt86kAD2oA8P0z4fa9eMGghkdiN23y2JwOvTit5fhf4zMJudPsJp1jPLKjblPpzgfrX1Hd6P8PPBE8mk6tqUOoTvhoHguZJUIboCkYD5P5+ldZa/F/wzdW8Ny182kTaXJHC9pbTvZksvAd45o2IHHzEqfc0AfGdzo82lz2F1rNpdwpld42mMcHDDK8dM9cGvofQvB37OfjsSRTa1d6FeskhRLgrcQu/8AJUFl453dPWvbl1zwr4pj1C58a31umkXqlLJ/sttqEbuc5Zpo4y4AHIBTPqaq6J4A/Zz1rW4PDtje6OdUnUR2lysMkcUjg5VQyTw7ZW6HKgduKAPDdW/ZOutH1OObwz4msrxHQTQyW04jmCt0Yc45+o/Ou18VfDT47T6FBo/iTWZ/ENhCB9maSIS3MSAfwy43gDPQsRX1Tq3wV8K27w6NreiXTalHET5tglxKvlKuAZoo2lOAB15B6k159oNv8N11f8A4RTQPEAim58yK0lncF14bak2TG2cD5ce1AHx5pPwa0x9R+w+KJDZTSoDBJPOmXk6hdhaM8+xzXruh/D3VdLFtplteNb2m4+ZcQ3C3dohBx88ZlYgkdv0r6Vv/AUEhS6eOQxJDMbhruR7iJgQNrGLC7CcgA9cnOcc1y+lfC2a61EXWla3FoVzGqbALCC6V0OSFZE37sjPzSN164oAx1/Zy8Z3dhHfW2veF1nlJMCw2srq8WONxjK7Tzg5Ujk+lUdX/Z6+LehXLBV0t5JlWJnWOFUcAfLtd03fLwOB9a73X/CPiaSOztLfxdoemtYNtKT2smmvtYnGCFuFwc4O1go6V2Lfs7fH/wAReD7i40LxtaXkszgwG0ULb7B0xLtKsc+ir3zQB8xX3wu/bH0eeS58MXUahPvTWWoKZETptZB5ac+myqekeNP20fC+qwW+rJeaxCrjdZ3NnBdQ3AQ5I3qpdcjgsCCK9/03wL+0x4L8Nv4Z8SeF9F8YwJIQq2+pRQ3wA5Yh0miZSecMpJz2rxvxT4X1q/8ALs9M+HXiyzvJGH2bffyXDq7ffHEjsOeMgLx1oA7m9+N/7RunylbTwJfWsksiu8DsRCu7kJGyYAUjpuXNfSPhv4lSeJLO0n8T+D9asnWPztSt1t1vEhZOrYh8qcgEcYVuvNeQvd2HiTwnbeEfG/gbUbDWbKJEkjttVEMhVOFLRu0fJxkkEnPWuV0HxPa/DeWWC48OeNdEBDNAGjS8sbgHHO7ZcMpbpwAO+aAPqDWvjj4NuPFVpoWjX11dXVltlNtdR+RcRxgcQT293b7mjYHhkXcOPrXQf8LX0G6b+xLOCfTWueHisVMse9j1WJYSu8+jKK+HPiH8a/C3i91svGXhKS/wuIpL+WO0vIR0HkFkjcn0yQPStC38e+ENC8M2F2PBfiK60KRxEt3NLFfRIyYU5DtKQe5UAe1AH15rPxA8O6JAtnPqGtam+9MxSQWaShV+9tjRUc8jGNh4rWP7UvguLT7DT9MOqWJWQo4k04LFGxIHl3CO8ZCEc52svfPSo/hn+0l8MPGMMPhXVdCsLLyFMVpOLk2TSGMABvIn2vFkd+QfUV2HxE+CHwU8e6Sb3Xtbmsp502NPFLbMkSdw7SiUY54Knn1oA0JvCvgH4peHZruC18M6lujLPDeW8EkcjDgFZZGPlnPcYr488S/CzW9Fe40/TfDbRaBasJrpbHUYNgQEllt3tUMqLnr+8XHv0rsNH/4J06JYb9e8HeNp5rN45SohPmQuG4CkxtwcHJ+XHuK861v9ki58DXDahZePrjw3JGx/fWzyIjKeT8puRk+vb2oA5L/hEPBUVxJH4dsvElv9o/fwhdXurd4XGCzKqzyCQ8feUZP6VT0bV/EGiakukW11p15qVrKklpP4s1bUb1lhk5DwwrEhQL/GrtnJ44r0jVrLwP4e8LRW2qfFQahqCBkaTVlzbyKx3FvJX5VlX+GRT9TVHwPqfgbxxL/YH/CVWuuXtvG6xrKTbGNFYEFLpdwKnIwrEsPUdKAPc/h7+0h/wi97DpPi/VdHN7DK5C6FFd3VuOwH2cNcKEbP3vkPrXtHjvxn4s8btp1z4N1CPw5qsLgwNNp8t7AQQCd0a3EckW7gjjtjFfPS/B7wlaaYPE13pkA1+DcLYPrJbIByCJ7iWaIqfRkHP8PauQ0Oy+M/hrU28Q2/gC68VpfSuqSaTq+mS3cL5IIHlWqliB+FAH3DZ/DvxvrqR3nifxHPpw8sx3Fzb2lrLBI7AfMYLi3aVec8FmPOM14/qPwp1bwl4iljPxXutV0+5jMQsGt4dNAZzt2gw+QGZuwBBHWvafh54x1/U3h03xf4C8W6MJIAFvNSlt4vL29RJJFOufb5Dz2FdbN4U8GagZpjpks09sd9s88a3M+7HBDzIXAJ6EHHpQB+fnxS+D+qeBUPiPwT4K8a6vdKEMU9ldNdMhUEhgrTXBIHbAb2r4R8Sav+1Vr15cTW2geLrCxfcuLlL1ropnDLv+UgE9SFFfuBaav4iup10Z5dUihJDBJRbzKy9CpWN45AT/s9K5fXtJ1G6uwqvqVlHEzLvJvLZY1hJIHlyljtPqpIPXNAH5FeBPDnxT06xWy8eeDfFmo6ZezLuM80skcanILqksq/OByNxx61+k+gaJ4N8E+EIbmaXWtUsooRN9lmknupgm37i+XM+xkI5BwoHpW5r3iP4XXOj/2T4le+WB2SJ5/7WC8ucEjawcqD1Bx9K8XHwd+G6+JrfXbPxVqN9Y2gd2t7u/QRxxJ8/m7yA4K8AH5s96ANrR/2mPCGgzXkfgK61i+1BYl+x6abiZoZJJSf3e8IV3ofmI38evp36fHPxmE0/T008X+qXCgT2zmW5eJnwSqrExaVwSc5BwMnFFx8RPC/haO2vPAk2ta1MF2h7NLvWLdtuMlzBIFQ5OMheOe1edfEL9qr4q+HbRbDW/hvPf6JM3OoWEt5pOoYbG5WR5HkUN/eDBSP0APuDSLHw5deFlkufDOnjV5QLhreeG5hDTdn2zRCQEdcgivNfEHjbwb4Ns47WSXSPDe6UvdwT3tpZhpZB97ErGTk9CwY+tfFfgu1+EXxhS4ttOt/iF4c1KGQ3d1C+qagFhDN0hZ5JoiM9y30Fepax+yd8LvHBj+x6F4z1uaMhGM+t6eZgFP+s3SMZGDdSC3HTFAHqOo6f4N+Ifh29W21DTpJbhjkXWuQ6tauoHXyoWA2g87FX0ya+Sf+GP8A4G+NrifWbrxzpDrErYt0FvpduCPvGKCIFnII7nH0rtNd/ZI8D6ReWnhzwpawaXdSMwK63rQa+QBst5cdlcE+YeudnA962fCfg670nxBbeGvGPiAiew2WdvBZ67LMgRs7TcI8isxbjIO0Y/hNAHztZfstfAWDTrzW5viDAllZyLEZLO1EVssmen2sxQgj+8UmUnpmviT4laLp+mLPoHgS5n1CBrh2S8j1VWjuIlbO9rZFLLnsZZW/Gv2N8WfCHw34s1S8tfG+r6Q1vGBFbW1pbwvKiqNyLHLLtXewBO7bzxhsdfH/ABf8Bfg94V8AX8XhrR9Y1LWTO/2dTbvLfXG7aSFa1imBQEkl8gLwOBxQB+P2g2/xA8KyR+JdEvLnTrmylAilgZshyD2GVORkdeldT4Z8Q/ESW6Jl04aq0qeWq3UGxAASflwAvU55HJ719d23wn8I+IriLTNO0ye2vJI0lcRQXZmh6qTJPexeWp3/ACkxoAOeTXaaf+yrrE7xXWnazqUot5vLbK+WsLcHlj5AkGeQFByOuKAPnLwTeXw1g33jhL+wtNMCeXbxH7Mkvz4VUnKNAnIIy3J7A19WS/E/xx4s0/T/AAX8Hvh/r/mXmVk1STUBfPcQx/fMLyW4AHI3PGyjHAPOT2t5+wCdQ0r/AISDxR46v/ENtbyqsdnZwW21AcbsqZti5ORhTkDJPpWL46+BEPhzQ9M0j4SReI9Pe7Xy5JLKeCyW58wZOL1og8kYA+ZI229yKAO21L9lKe5jS/8AHniDUNDs5I4ZLuLUJ4kEkpG4xh5I0CkA9BOfX3rzJfDn7Jnw21+Ntdvk+ID4A+y2UcbpEB8o82aS4jXPc4OK8IX9kH4ua/fyJqWqXWhabNKRGdQuptRlnUclliiXe5AHURgdMkV5V49/Zz8UfDzWV0Rrq4vVkHmRPNZT2KTqRnMTSoQx9e2c0AfXOvaZ4L+J2pnw/wDDnwj4M8NsLg/6SbhLiTbHj5isJWNNwOXI3dOo4z6trvhr4LfB3SbWRtWtPGXim3AYWHhazg+y2qnlzuld1+8cF5FOc4AznHxJ4X+Diy6MZtSsLS2trVDcX19f6i25osDEcMcSuvzEgbsOT2ANdhJ8HdWNi/ibQNEgudHsZ47ZFtNKgjt0Ljlri4uk3ynk8mLANAHkXxr8aeOfiPrd0NTiv7fSGmD21l5tnIIYkGI1Jt4oRnqTx1PQ9a8s/wCEW0/TrVJdXttaM1wcwQxQJ5Ri4yTKrkk9eAn419T+KJfDvhLT4pb64NrqFtEqyQ2j6HPH5crErHHCvlShyclndd2OihRmpX8aa5rtv/b+m6BrGj6SlmsEkyaOlxb7NuDK06SKgJzvCxx4+vcA+c9L0Lw4ttLa2S6u+p3BAtYn0lpk3E8Aty2fQgfWunT4BePbhbBLrT9Wm1DUt32a3fTrqIMowRsaQKj5OeFzjHNe0+CPjTf2GsLpvgHQX1PxBGSLe41SNwyrH0bZFA2Wbqc4wOM9xY+I3iX4r/FrxjdX/wAZPFsfhy906zLW1hYtMYIURR8iLGJTvcE5xlieuBQB4OPhhdWzGTxTrhj+xyfZobSSTzQs/OIygZiArfeHbpxV7Vv2fvGepWMl82rWTGBA5tt6xNtK5yseFUgDsOcVxtz42azjeeFLrU76NGt7aTUcNbwLkrujjCrlwDkZOA3JBNUtF1L4n6neRw6a16z+VhRDC8xK9zjDde5A5oArW3wrtWvU02bVIftokVXjVkA5+hbOM9q9Asvhh4MtZJ7e9ur3VbiEsNulQvOpVf4gVkTCsSFBYD8au6T8NviVq17d3mpy3lsYU8+4Nzp8rPHG4PzCOKIuoPbAA/DNa2ieFfHU2pXGmeF7PWdZijXbLJp+lFdwK7jy7gLgDOSD6mgDE+JngPw14b021hi8OT+Fpj801zqoZZZU/h8tfMlLkjBbhcHivnyX7LNmK3vr2dm3BY4MRJjoM/X6V7N4y0HVbBIL7XbCee7frJfid0jUn93GT5aKpAySAxHIwBXP3Xh/S30ltavLuO4vMkCzgHlR4BAAViqljg8KgY+uKAPD7nT9Qs/k8iQRM2SqHcc+pA71etZLa4j2xGTzB0Qg7uPocV7DdeC7rQtNsdf1iBrCx1BT5T5kVSDxgO33j3IXJA60y18O2Nxpl3JYajaoyjDbwzPszkcgZ59qAMvw34cvNemj0HT4UlnuU3b5pvKRDnq3J6e4rdn+F1xp8kkeoyRtKkxgDRS5j3diHJXg4znpil0i3i8P2J1CfWbMNcttEUO57h04BBHAVfrVa48e3UcE1nDK8Fq67C0cUTTMB0wWUlfYg5FAGRrvhy20WWSwXUI5Gib94YLjcoyM9d5U/getQWGh6XJY/aVvgNnDZZc5PTClic/QVx87zXxPnSGONc7TLnO3OccAAknqfWmW5jgQhAJOjfMCc49h2oA9m05/Aem6Sbss2qakoIEEixiAA/8AAg34/pXLXOsTXYFqLeK0Xl1JxI7Dsq7ztH5VxbWV8IXu32woRkBUbBB9wMfrTrMoV3zTbtvYorD24JGaAO6s9QitpBd2CSidADcKzRRjaP7gXLE+5NdHrPxF1K/8KT+Go9ptLuWOd5MmScSxdMMG5BHGGBA5IGea8ntZiJHS2jEzSnByi7iP1xWhd67qQ2WMdmtuYgECRrj8fUk0AYmoR3ltKDd3Dnzfm2mQtj6kcZqqbuJAIzcvz14bZ7d+a0rhbmSMRPp0gdmz5pDZbnnrxyarNpc6MGkgdFJ6Y4/XvQBImu6tAqNBO8gUEDgMBn65xWbLd6jPL9oudxEnPCgD8AMCttLEzW00sC7DAATghQe3JJxVC0kuTKkUaF2JyAXBGfxoAx5CXbJhbb6hQAPyp0cJTlQ5xz07fhW/dyaylwUl2RENhlYDg/nikuLLUrcCS4MDb08wRq6g7fXj+Wc0AZkRnwJDuCDvjj8jVyW/jaIQJAnmAnDnOTn8cVVF1DG379MjqVDcfj1qF7m0Y8Q9ewOSP5UAWI7VZ5RHKYEx95gdqgd8kntWaraY7MrkttOB5eWz+QNO32nP7vB9wT+laJ1gmFbOLyreMcs/lZbr160ANiuNHaIQRIFY5+Z1OST7nIqUQDYwjuGweNqnk/his66eNcTrdiVjyPlAYnPU9cVlXFzPPIXaQk+3H8qAN8SxxJsjkYkf3jkUfan/AOeo/SuYS4mjb5n49s1N9r+lAH//1PxGsJb+aXbAUmJHQE7lz3q9PoGqPtIbazZOFXB96qeE/wDkJP8ARf516jL/AK6H/db/ANCNAHn9pe+KdEZZUdZRGCoGxXIB4IPT9aZea/ql+kSXVoriIbUDKAFHoBnit+7+9L/vGsGXr+P9KAKFxLpjbTLalG/iCuQM/gprY0270hJo0jLxB8B2ByF/ADkVzF59402y+8PqKAPVI7qIWb297H9ogDFV/eKG9tgPH4Zrnxb6Ush+2x3EQzt+dg6/QhTVl/8Ajyj/AOvn+gqtrXSX/ruP5UATW2l+EJZybySS3jU8bQBu9stwPyp954e8MNEZ7C9CxHkNKpYkn+H5BjNc1ff6g/8AXSrsX/ICX/rt/SgCk1npidJtpBxlBWlY6TBey4tp7gv02tuw34jpXNyfdX/fFegeEv8Aj7X/AHv6igCf/hHr2zJeS3MZQZMeXJOO5Uk8fhVKW10m9LPIUtps4IKFVz9BgV69rv8AyEZ/+vf+leJah/rT/vj+dADZ9OjtHCS7Cjcq+SuR7cZqGSV1XyoHVl7ZO8fqDWlr/wDqbX/rkP5Vz9t0P4fzoA1YbiZECvbxsvVWVVGT75xUhuLlovIidQM58vGee5wMikH+oSobX/j8/wCAv/KgCxZT6mMjywV6KUUg57cjHWtRLnU7K4D3GLfcM4kDL17ls8ipdO+6n/XRf51b8Z9V/wCuaUAYOoaxdPGvkzLKrHnaYimR0JzzXVW1vquseC49Xsks3vLa4aB0YLG7oOQyYwrADgnO7NeTW3/HqfrXtngr/kTF/wCvib+lAHE22o+KrEMXtIQ2wgYxlR3JCH9SKsQ+KNa0uJ7O4hMP2gfMFjdZMN/ECCuc+lbtx/x9XX/XJqx/FP8AyFLf/rin8qAK9lq+k2LF5NVuY7jkxgwmSFs54ZJCpH1BNdJpPja6TSW0Q+Veac8jSSIBIkhZiCcvGwzgjIBBxXjWr/8AHxH/AJ710Phb7kn+/QB7zY6i13C2ieHF1KY3X7zyY5bebJQcffjEgI7jAzVSx0+0g1j7JcN4htbxVMkjR2e90YDnIR1baO/Bqf4Of8jxafV/5GvVZ/8Ako2o/wDXC6/9AoA8dtdTia8lLeIdQeQSgArbtGH9CSFZ8H0zXoun/F7xxo84jGotqNtajZFHczzNGrEYUKpP3h0C8Ad68VsP+Qg3/XWL+ZrVb/lp/wBf0X8zQB22qfFDwjrOoLeeItHtzdoSAyQQvmQ9fM3ZPXtk1u6N43tZ4Z9QuNPNnZQx/L9isQgfnAy6h1Un3H418qal/wAhOb/r6P8AM19G6B/yTy//ANxP/QmoA6HTtK8DeJNN1HxZdSyXlrZgPPDE0RuI1PV2V1Vdo6dc59Kg+G2ifDnx/wCLk0vSk+w2svC3Nza+YVZeSGWNtq8fxAn121xvwy/5J946/wCvAf8Aoa1o/swf8jJH/wBdpv8A0U1AH0j44+EXwmstZTTLxL6w1lABFbamLl7G8XoJYri1Rgg/iAYKR0IrjtX+EviDXptttb6Nqq2hSF5pr1WnSBiFiX/SIRySQAc+1e7fH7/kfvD/AP16f1ql4V/4+tb/AN7TP/ShaAPjPXvhdqPg2d55ogkRkMbxW8y3BUj72+NAjKPQ4x6GqnhXQfDV/wCJra1l1NtGuYiGjnjljmgaXqAyPkj3BP619F/Ez/kK6r/10f8AlXx5on/I3Rf9fNAHtur/ABF+Lmiaxdw2GqLZ3IkEf2yxuJbFmA+65hysRUjkYTv1NaWq/EH4k+dpfiHxFd6Rqds+P3iXRspph93csl0hj8wEcsoPIrlviB/yM03/AFzi/wDRYrnfiL/yTrwj/uN/6NegD34fHDx54S8qLVJbn+z5SrI9zYxz/uj95FubAhDu5O7qe9dra/tBfs8XdhLaeILvxDY3hl81b/SYZPMQg5UFJGQvH65cMO2a8Z8f/wDIh6P/ANcY/wD0GvkC5/183+7/AFoA/XDQdXg+KdtPf/Cjxbc6u9pGDJbCwY6lCrZjDfZ5pNsgPtux1617NB+0RongTRLTQodbn0bWIgLTVLrUNPuYn82JQGHkFFhyx5xyfevlH/gm5/yPOvf9eEP/AKNFc/8AtP8A/I569/2HJ/5UAfoFpfxB1b4g2hS1n0DVZuTEYJWhkliPHnFCMZU/eXK+xrrtM8J6Ho/hcXfi5b/StRYtIDY3LuImbhZFdSVAweu0/Q18h/sw/wDISsv+vGb/ANGV9z/Ef/kWz/15xfzWgD408RaB47ubx4/CnivWLyzkucSLJNueRRjCfMACw/2NvHapZvhfDouk3d1J45v4r27AeW11G5e0hidfWRoGcbSezgfWvTvCP3rT/sIH+lcX8b/+PLUf92b+QoA+dfEXwm+OXxNk+22tn4V120sV8lNZhvkvnKjoZGykgx6FayvCXwV/aG0PV5l/t/StGtJMpNbW0skSSqRgsIxlenevsT9lH/kl+tf9dZf5rW5rX/IX/wCASfyNAHwhqNp4jt9Qi0xtZivrmCTyRNEba9eLJwcCNQzFewPNe1eDNa8EW8Vzonjy/HiDTrGDy2WXSntpoJsjG9POQuQM5Ow4rwvw1/yPs/8A2EZP/QhWlff8jF4s/wCusv8AI0Ae+af8cPgb4UtprDwN8Q9W8MAl1SNoJbmyQDOQIthIOewzntVLxR+0r8G0t4NITxK+vyXIAlvbLTpbUec3Ut5tuQATwflr8qda+9J/18P/ADNNtPuw/wDXdf50AfpsmhaB4qiji07wjrerTXygwDUpGkt5mYEqio0gUbs5BCD2AryP4h/Bv4rW1+9n4V+GeoeH7hCElVPLEOFGcblAJGecZr7b+Ev+v8F/79l/6Lr7B+Jn/IwX/wD12k/9ANAH4D6jrPirRojo/j/7VcXq/uk0545TvwONoTkgdiDj1rV8K/HjxJ8PYWl8P+DpdOuEfbcHzgtuJjnbILcx5jcKc4Lcnk10/wAdv+SxaZ/vf1Feb+LP+Y7/ANf0X/oAoA/TT4b/ABy1H4iaBFP4h0DxBPfQ2oUXhzLGMjly1veKEUkY27BXuug+PvAmpkaJrDxR6iFzFDq9tdRwqVxjErIOT2Cvk+tfNv7Mf/Ik33/Xmv8AI1Y8U/8AI7W31i/ktAH1Lqvj/Wrdtunz+Em063wjgQ3k9wG4O0s0w4YdAGB6V5TZ/tH+CIdQuINfsWitg74njjvPIQL95n3XMqkNj5RtIA681yif8emq/wDX3D/6AK+T/En/ACAdS/65zfyNAH1TP8c/hP4j1VLbwf4atvFl1EQwPnW+mHBOWy7lJQFODyhHoTXuFt8a/hhc6AR4jh8MRyOsjXen6jq0cqxovB+d4d7HPcIw9M9a/I/9nf8A5H24/wCvZ6f49/4/r7/rzm/maAP0GvPjJ+y7DqbpJJOLWNFmDaLrOtPEFPZTZs0O4NwEwmB2FaV7+0Z+zbd6HPo/g3xTfyXDQh4be3s3utQhkT5iXOpx4bH8TNKOK/JXwT/yBJfw/wDQhWB8Nf8Ako19/wBe11/6AaAP0W8Yftl/2DYRS+H7nV9VIdVYTT2+lFAQOW+xjEnOTt545JFeHeJ/jxf+P9MlbXfiB4r0u6YqbCz+zuunOzcsWns7pHkCkkKHUgDt1r5X8Vf8eI/67L/6LWp7v/kB6H+FACeJv+Eg1DxQusax4l028nUDbPZxR2cjIPSScQAue5ZmJ6nNfU/we8R+CYNKu7fWfHOg+Gbi6ANtLJPC+pCVcjdK0Uc0O09sSKcZLdhXxB4v+7Z/7o/m1eY/8v6f57UAfcnxQ0XwtbyXPiPQ/iDB4n1d5gJrpJ4TbKBwoVQu932gcRIVHdq7H4a+Jf2iP7Kns/DXjLVYdNjtnmaRZblI1ZxgiIQESOc+g2g8ngZr4k0j/kA/9vZ/rX6YfAP/AJFE/wDXjJQB4NoPij9om11+8fwt481G/wBTPyy2sjXLyOkTA4JcEIM9TkY9c19A+HviZ+17p3iK1fVZdP8ANvLlFnN7LE7Sh1CkFZZWDgL22jB715/8J/8Akresf9c7r+a19HeLf+Rv0b/r8T+VAH1/e+OPiz408OQ23w18OWGoa1JGbdr+9Yy6dbOp2yMYrVZEYsRwDKAMde1fMHiPTfj38LNWsfG/xq+I/hTTPsU0ht4LDTnuCjHglY7W1OH257ggd6+6P2QP+ROuf+u9x/6NevjD/goB/wAgaH/r7n/9BNAHl3xG/bE+HHiDV2htvGOsrdwxq6anp2jxQweaB8oc3Dzz7FJOU2c+leE3PxP0n4i6ws/xM+Jq6/p1vcQiMSafFHdSJtYeVbwmSARqFPzPIFUEjrivgP8A5bX3+8f51Xsf+Q1D9f6UAfsd4P1/9knxLpkehWuu2pvorNkFrLb3Nrbs4OEWUJcJHKRxkHIbk5ArifC3wR+GPxI8UNpt9f6dPoljJ/pMPh+Aw7chiHjWWWWEYH3yPmIHXHFfnd8J/wDkcV/3l/rX6Ifskf8AIW1//gf/AKLNAHqdn8Ev2UvB2t3NtpHw2fxhJGEe01LWL5lsJpixAQ7jHEiqV+bsRnjg1e8beLvgpF5b+OPEHgC2TQoxDp3h2xtU1WCEkg+Ykdosu3jaoUsucc++uf8AkVof+ug/nNX47+OP+R81b/fi/wDQloA+kvEOv/DzxXe3upeLPHN7bvq0s0cWl+GdLNjpkFonyosipGGPmED5QD/tYre0X9lzT7nTR4g03xNq1toYt2nnvby2kto4goywWNpEmkwOu1Me9fIMH+ttf97/ANnr9iT/AMkAn/7Bd9/6LagD8+9A0P4e6Tp+q+Nb57278K6cxtxqhtPLkvpQcJDbxsxVd3XcxG0e5xX0z8OP20/hL4S0GDQfBnhPXrySKOQb7ya0sI/Nb7jM8G+TGepUbsc9a+Ybv/kzKb/sPr/Kvm3wJ99von8zQB+ien/tR/EW7XVZo9D0WKTWboNHbeTIYoI4ud008syfaGY9pFckD5jj5T5UH8d/EbxQY/EnxDv/AA9pOrNNM8CTC2tdoypVY7b7OHXjaM8HnpXLad/x6x/9dG/9AFXLz/WeHv8Arzm/9HSUAeP/ABN1PwvZa6+nadqGoeJLS0BjtnvLl2hwAoUpGxPlKCCQCzHGBgda8oj1qFZY2sP3csnyyKgztHcoccZPpTdf/wCQrL9a5vS/+PyP8aAPYo/iJ4oeQx6jfPfoCEinvIVujGN27CCTcEG7k4Az3q3Zabpl5EZ7/wA26lmLHzTE20E5OSPun6VwC/8AHsv/AF0NesaP/wAgmH/gX8hQB1vhX4f6P4n8P3Kx2UjeII2xZrJEGtpYwpZkwsZIYY4we+TgAmvLZ9Hi0ae2N34eja5YB9sb+akiHILDlgD6AjFfW3wX/wCQtYf9dJ//AEnlrwzxF/yFtN/69B/NqAPMNeuo9Ru7ey0zR4NNmnKJGtzPGwKn+LLbQCSc9AAPWua1HyhIdMfD3SfKwtNskRw2dp243DPvW34j/wCRq0j/AHYf5CuYsf8AkY5f+up/mKAPVfCOp+Djb3MXj/TNTvrW1gZLeOwaGCNJ24V5i5LELjhByfavOpP7LtWfyInkj5Mat5Ybrjnbkj6V0Q/5Bes/9fEX83ri2/1y/Q/zNAFmS7hSKJUsmtrgMCJAzsMHn7o9c+tdP4f8PXXifURbySuJ2IZVVCsj++WBwF92/Wubvf8AWJ/vR/yFezfDP/kc7T/rk38xQBzzeMNK8NXU9hBpkN8zwS2/nalOLto5OU3pGCqAjnaHyAecE815HJeaiP3PlSPEefKeTapA6HjHP0p3iH/kYLj/AK7Sf+hmrdx/rYP+uY/rQBkGDUGs5GkSJFOThpV3L9eSx+lZsMtuhXeRv/2G4/Gt29/1Ev8Au/0ril/1g/CgDeubhb+Tb8o2ZAI5yPx5NVX0qeX/AFSbzjquc/lUFr/rh9a7TS/9eP8Adf8ArQBwojmgXBjLnPQj+tTPBKABNA8TEZznjmtKb74+o/nV3Vfup/uCgDmns5+Am5gemKhFlIDhw4J4GVNdLB91PpSXH+sT6igDmf7OiaQAvs9SeKuXlnaRbUt2LjAJOCf6USffH1P86mPU/hQBTFtbhcncT1xt7VWKxZ/1bf8AfJrSb/Wn/dH8qioA/9k="

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "89889688147bd7575d6327160d64e760.svg";

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fa2772327f55d8198301fdb8bcfc8158.woff";

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "448c34a56d699c29117adc64c43affeb.woff2";

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "912ec66d7572ff821749319396470bde.svg";

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "af7ae505a9eed503f8b8e6982036873e.woff2";

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fee66e712a8a08eef5805a46892932ad.woff";

/***/ }
/******/ ])));
//# sourceMappingURL=bundle.js.map