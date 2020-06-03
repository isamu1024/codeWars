function flatMap<T, U>(array: T[], callbackfn: (value: T) => U[]): U[] {
	return Array.prototype.concat(...array.map(callbackfn));
}

let table = [
	[1, 2, 3],
	[1, 2, 3],
	[1, 2, 3],
];

table.flatMap();

let tableFlat = flatMap(table, (x) => x);
