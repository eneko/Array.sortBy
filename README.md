Array.sortBy
===========

Array.sortBy is a prototype function that allows sorting arrays of objects by a given key, whether it is a root key or a child key of the object.

![Screenshot](http://github.com/eneko/Array.sortBy/raw/master/screenshot.jpg)

How to use
----------

Given an array of objects:

	var data = [
		{ name: { first: 'Josh', last: 'Jones' }, age: 30 },
		{ name: { first: 'Carlos', last: 'Jacques' }, age: 19 },
		{ name: { first: 'Carlos', last: 'Dante' }, age: 23 },
		{ name: { first: 'Tim', last: 'Marley' }, age: 9 },
		{ name: { first: 'Courtney', last: 'Smith' }, age: 27 },
		{ name: { first: 'Bob', last: 'Smith' }, age: 30 }
	]

It can be sorted by any key in the object. To sort descending, pass descending:true as options:

	data.sortBy('age'); // "Tim Marley(9)", "Carlos Jacques(19)", "Carlos Dante(23)", "Courtney Smith(27)", "Josh Jones(30)", "Bob Smith(30)"

To sort by a child object key we need to pass the path needed to get to the value. This path can be an array or an string path.
In this example, to sort by first name we could pass an array of keys ['name', 'first'] or a string "name.first":

	data.sortBy('name.first'); // "Bob Smith(30)", "Carlos Dante(23)", "Carlos Jacques(19)", "Courtney Smith(27)", "Josh Jones(30)", "Tim Marley(9)"
	data.sortBy(['name', 'first']); // "Bob Smith(30)", "Carlos Dante(23)", "Carlos Jacques(19)", "Courtney Smith(27)", "Josh Jones(30)", "Tim Marley(9)"

To sort descending, the path must start with a minus sign:

	data.sortBy('-age'); // "Josh Jones(30)", "Bob Smith(30)", "Courtney Smith(27)", "Carlos Dante(23)", "Carlos Jacques(19)", "Tim Marley(9)"
	data.sortBy('-name.first'); // "Tim Marley(9)", "Josh Jones(30)", "Courtney Smith(27)", "Carlos Dante(23)", "Carlos Jacques(19)", "Bob Smith(30)"
	data.sortBy(['-','name', 'first']); // "Tim Marley(9)", "Josh Jones(30)", "Courtney Smith(27)", "Carlos Dante(23)", "Carlos Jacques(19)", "Bob Smith(30)"


Sorting by multiple keys
----------

To sort by multiple keys, just pass multiple arguments to the sorting method:

	data.sortBy('name.first', 'age'); // "Bob Smith(30)", "Carlos Jacques(19)", "Carlos Dante(23)", "Courtney Smith(27)", "Josh Jones(30)", "Tim Marley(9)"
	data.sortBy('name.first', '-age'); // "Bob Smith(30)", "Carlos Dante(23)", "Carlos Jacques(19)", "Courtney Smith(27)", "Josh Jones(30)", "Tim Marley(9)"
