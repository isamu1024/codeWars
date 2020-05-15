export const convertFrac = (lst: [number, number][]): string => {
	let str: string = ``;

	if (lst.length === 0) return str;

	let pgcd = (a: any, b: any): any => {
		let r: number;
		a > b ? (r = a % b) : (r = b % a);
		return r === 0 ? b : pgcd(b, r);
	};

	let denArray: any = lst.concat.apply([], lst).filter((v, i) => {
		if (i % 2 !== 0) {
			return v;
		}
	});

	let ppcm: number = denArray.reduce((a: number, b: number) =>
		a > b ? (a * b) / pgcd(a, b) : (a * b) / pgcd(b, a)
	);

	let multiply: any = lst.map((x) => x.map((val, idx) => val * (ppcm / x[1])));

	multiply.forEach((element: any) => {
		str += `(${element[0]},${element[1]})`;
	});

	return str;
};

console.log(
	convertFrac([
		[2, 3],
		[8, 9],
	])
);
