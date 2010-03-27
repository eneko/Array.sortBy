var data = [
	{ name: { first: 'Josh', last: 'Jones' }, age: 30 },
	{ name: { first: 'Carlos', last: 'Jacques' }, age: 19 },
	{ name: { first: 'Carlos', last: 'Dante' }, age: 23 },
	{ name: { first: 'Tim', last: 'Marley' }, age: 9 },
	{ name: { first: 'Courtney', last: 'Smith' }, age: 27 },
	{ name: { first: 'Bob', last: 'Smith' }, age: 30 }
];

console.log(data.map(function(item) { return item.name.first }));

console.log(data.sortBy(['name', 'first']).map(function(item) { return item.name.first + ' ' + item.name.last }));
console.log(data.sortBy(['name', 'last']).map(function(item) { return item.name.first + ' ' + item.name.last }));
console.log(data.sortBy('age').map(function(item) { return item.name.first + ' ' + item.name.last }));


console.log(data.sortBy('name.first', '-age').map(function(item) { return item.name.first + ' ' + item.name.last + '(' + item.age + ')' }));
