/*
 *@depend Tool.js
 *@depend Vector2.js
 *@depend Appearance.js
 *js工具类
 *
 */

var Tool = {};
(function(){
	var class2type = {};
	//from jquery1.7.1
	Tool.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[0] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;
			target = arguments[1] || {};
			// skip the boolean and the target
			i = 2;
		}

		for ( ; i < length; i++ ) {
			// Only deal with non-null/undefined values
			if ( (options = arguments[ i ]) != null ) {
				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray(src) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject(src) ? src : {};
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
	
	//from jquery1.7.1
	Tool.each = function( object, callback ) {
		var name, i = 0,
			length = object.length,
			isObj = length === undefined || Tool.isFunction( object );
		if ( isObj ) {
			for ( name in object ) {
				if ( callback.call( object[ name ], name, object[ name ] ) === false ) {
					break;
				}
			}
		} else {
			for ( ; i < length; ) {
				if ( callback.call( object[ i ], i, object[ i++ ] ) === false ) {
					break;
				}
			}
		}
		return object;
	};
	
	Tool.extend( Tool ,{
		type: function( obj ) {
			return obj == null ?
				String( obj ) :
				class2type[ Object.prototype.toString.call(obj) ] || "object";
		},
		isArray: Array.isArray || function( obj ) {
			return Tool.type(obj) === "array";
		},
		isFunction: function( obj ) {
			return Tool.type(obj) === "function";
		}
	})
	
	//数据类转精细类型
	//from jquery1.7.1
	Tool.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(i, name) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	});
}());
