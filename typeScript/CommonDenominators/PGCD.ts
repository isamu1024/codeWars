function pgcd(a: number, b: number): number {
	let r: number;

	a > b ? (r = a % b) : (r = b % a);
	return r === 0 ? b : pgcd(b, r);
}

let lst: number[] = [2, 5, 4, 9, 10];

let pgcd_: number = lst.reduce((a, b) => pgcd(b, a));

debugger;
