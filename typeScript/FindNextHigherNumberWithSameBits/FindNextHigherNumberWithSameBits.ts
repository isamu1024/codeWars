function nextHigher(n: number): number {
	// convert n into bit[] (! order) and get sum of "1"
	const nbOfOne = (x: number) =>
		x
			.toString(2)
			.split(``)
			.map((x) => Number(x))
			.reduce((a, b) => a + b);

	const nSum: number = nbOfOne(n);
	let next: number = ++n;

	// iterate to find the next higher number with the same sum of 1 (soooo dirty :((( )

	while (nbOfOne(next) != nSum) {
		next++;
	}

	return next;
}

console.log(nextHigher(129));
