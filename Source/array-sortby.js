/*
---
script: array-sortby.js
version: 1.0
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

Array.prototype.sortBy = function(keys, options) {
	function valueOf(object, keys) {
		var ptr = object;
		$splat(keys || '').each(function(key) { ptr = ptr[key] });
		return ptr;
	}
	var comparer = function(a, b) {
		aVal = valueOf(a, keys);
		bVal = valueOf(b, keys);
		return (aVal < bVal? -1 : aVal > bVal? 1 : 0) * ((options && options.descending === true)? -1:1);
	};
	return this.sort(comparer);
}
