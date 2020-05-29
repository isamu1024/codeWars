export function tribonacci(
	[a, b, c]: [number, number, number],
	n: number
): number[] {
	let i: number = 3;
	while (i <= n) {
		[a, b, c].push(a + b + c);
		i++;
	}
	debugger;

	return [a, b, c];
}

console.log(tribonacci([1, 1, 1], 10));
