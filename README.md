Array.sortBy
===========

Array.sortBy is a prototype function that allows sorting arrays of objects by a given key, whether it is a root key or a child key of the object.


How to use
----------

Given an array of objects:

	var data = [
		{ name: { first: 'Josh', last: 'Smith' }, age: 30 },
		{ name: { first: 'Bob', last: 'Jones' }, age: 32 },
		{ name: { first: 'Carlos', last: 'Lopez' }, age: 23 },
		{ name: { first: 'Tim', last: 'Thompson' }, age: 9 },
		{ name: { first: 'Courtney', last: 'Do' }, age: 27 }
	]

It can be sorted by any key in the object. To sort descending, pass descending:true as options:

	data.sortBy('age'); // "Tim", "Carlos", "Courtney", "Josh", "Bob"
	data.sortBy('age', { descending: true }); // "Bob", "Josh", "Courtney", "Carlos", "Tim"

To sort by a child object key we need to pass an array with all the keys needed to get to the value.
In this example, to sort by first name (object.name.first) we need to pass an array of keys ['name', 'first']:

	data.sortBy(['name', 'first']); // "Bob", "Carlos", "Courtney", "Josh", "Tim"
	data.sortBy(['name', 'first'], { descending: true }); // "Tim", "Josh", "Courtney", "Carlos", "Bob"
