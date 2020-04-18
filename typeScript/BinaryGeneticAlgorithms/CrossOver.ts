export const crossover = (
	chromosome1: string,
	chromosome2: string,
	index: number
) => {
	let crossover: string[] = [];
	crossover.push(
		chromosome1.slice(0, index) + chromosome2.slice(index, chromosome2.length)
	);
	crossover.push(
		chromosome2.slice(0, index) + chromosome1.slice(index, chromosome1.length)
	);
	return crossover;
};

console.log(crossover("110", "001", 2));
