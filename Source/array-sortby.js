/*
---
script: array-sortby.js
version: 1.2
description: Array.sortBy is a prototype function to sort arrays of objects by a given key.
license: MIT-style
download: http://mootools.net/forge/p/array_sortby
source: http://github.com/eneko/Array.sortBy

authors:
- Eneko Alonso: (http://enekoalonso.com)

provides:
- Array.sortBy

requires:
- core/1.2.4:Array

...
*/

Array.prototype.sortBy = function() {

	var keyPaths = [];

	function saveKeyPath(path) {
		if (path[0] !== '+' && path[0] !== '-') path.splice(0, 0, '+');
		keyPaths.push({
			sign: 44-path.shift().charCodeAt(0), // (path.shift()+'1').toInt()
			path: path
		});
	}

	$A(arguments).each(function(argument) {
		switch ($type(argument)) {
			case "array": saveKeyPath(argument); break;
			case "string": saveKeyPath(argument.match(/(([\+\-]+)|(\w+[\w\-\+\s]*))/g)); break;
		}
	});

	function valueOf(object, keyPath) {
		var ptr = object;
		keyPath.each(function(key) { ptr = ptr[key] });
		return ptr;
	}

	var comparer = function(a, b) {
		for (var i = 0, l = keyPaths.length; i < l; i++) {
			aVal = valueOf(a, keyPaths[i].path);
			bVal = valueOf(b, keyPaths[i].path);
			if (aVal > bVal) return keyPaths[i].sign;
			if (aVal < bVal) return -keyPaths[i].sign;
		}
		return 0;
	};

	return this.sort(comparer);
}
