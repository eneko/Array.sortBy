var data = [
	{ name: { first: 'Josh', last: 'Smith' }, age: 30 },
	{ name: { first: 'Bob', last: 'Jones' }, age: 32 },
	{ name: { first: 'Carlos', last: 'Lopez' }, age: 23 },
	{ name: { first: 'Tim', last: 'Thompson' }, age: 9 },
	{ name: { first: 'Courtney', last: 'Do' }, age: 27 }
];

console.log(data.map(function(item) { return item.name.first }));
console.log('ascending:');
console.log(data.sortBy(['name', 'first']).map(function(item) { return item.name.first }));
console.log(data.sortBy(['name', 'last']).map(function(item) { return item.name.first }));
console.log(data.sortBy('age').map(function(item) { return item.name.first }));
console.log('descending:');
console.log(data.sortBy(['name', 'first'], { descending: true }).map(function(item) { return item.name.first }));
console.log(data.sortBy(['name', 'last'], { descending: true }).map(function(item) { return item.name.first }));
console.log(data.sortBy('age', { descending: true }).map(function(item) { return item.name.first }));
