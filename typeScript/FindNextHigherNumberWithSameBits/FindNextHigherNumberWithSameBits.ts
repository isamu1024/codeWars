function nextHigher(n: number): number {
	let binArray: number[] = n
		.toString(2)
		.split(``)
		.map((x) => Number(x));

	binArray.unshift(0);

	debugger;

	let cursor: [number, number] = [Number.MAX_VALUE, Number.MAX_VALUE];

	binArray.map((val, idx, arr) =>
		arr[idx] === 0 && arr[idx + 1] === 1 ? (cursor[0] = idx) : false
	);

	return binArray
		.map((val, idx, arr) => {
			if (idx === cursor[0]) return 1;
			if (idx === cursor[0] + 1) return 0;
			return val;
		})
		.reverse()
		.reduce((prev, curr, idx) => curr * Math.pow(2, idx) + prev);
}

console.log(nextHigher(1022));
