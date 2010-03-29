/*
---
script: array-sortby.js
version: 1.2.2
description: Array.sortBy is a prototype function to sort arrays of objects by a given key.
license: MIT-style
download: http://mootools.net/forge/p/array_sortby
source: http://github.com/eneko/Array.sortBy

authors:
- Eneko Alonso: (http://github.com/eneko)
- Fabio M. Costa: (http://github.com/fabiomcosta)

credits:
- Olmo Maldonado (key path as string idea)

provides:
- Array.sortBy

requires:
- core/1.2.4:Array

...
*/

(function(){

	var keyPaths = [];

	var saveKeyPath = function(path) {
		if (path[0] !== '+' && path[0] !== '-') path.unshift('+');
		keyPaths.push({
			sign: parseInt(path.shift()+1),
			path: path
		});
	};

	var valueOf = function(object, path) {
		var ptr = object;
		path.each(function(key) { ptr = ptr[key] });
		return ptr;
	};

	var comparer = function(a, b) {
		for (var i = 0, l = keyPaths.length; i < l; i++) {
			aVal = valueOf(a, keyPaths[i].path);
			bVal = valueOf(b, keyPaths[i].path);
			if (aVal > bVal) return keyPaths[i].sign;
			if (aVal < bVal) return -keyPaths[i].sign;
		}
		return 0;
	};

	Array.implement('sortBy', function(){
		keyPaths.empty();
		Array.each(arguments, function(argument) {
			switch ($type(argument)) {
				case "array": saveKeyPath(argument); break;
				case "string": saveKeyPath(argument.match(/[+-]|[^.]+/g)); break;
			}
		});
		return this.sort(comparer);
	});

})();
