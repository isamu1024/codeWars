export class GeneticAlgorithm {
	population: string[] = [];
	fitnesses: number[] = [];

	getRandomInt(max: number) {
		return Math.floor(Math.random() * max);
	}

	generate(length: number) {
		//setting up array for chromosome and associated fitnesses
		//generating population

		while (this.population.length <= 4) {
			let chromosome: string = ``;
			for (let i = 0; i < length; i++) {
				chromosome += this.getRandomInt(2).toString();
			}
			this.population.push(chromosome);
			this.fitnesses.push(0);
		}
	}

	select(population: string[], fitnesses: number[]) {
		// TODO: Implement the select method
	}

	mutate(chromosome: string, p: number) {
		// TODO: Implement the mutate method
	}

	crossover(chromosome1: string, chromosome2: string) {
		// we cut off the rest of the chromosome and switch it with the cut off part of the other one.
		//In other words, say we have 01011010 and 11110110 and we crossover at the 3rd bit. This results in 010 10110 and 111 11010

		let randomCut: number = this.getRandomInt(chromosome1.length - 1);

		let newChromosome1 =
			chromosome1.slice(0, randomCut) +
			chromosome2.slice(randomCut, chromosome2.length);
		let newChromosome2 =
			chromosome1.slice(randomCut, chromosome1.length) +
			chromosome2.slice(0, randomCut);

		let index1: number = this.population.indexOf(chromosome1);
		let index2: number = this.population.indexOf(chromosome2);

		this.population[index1] = newChromosome1;
		this.population[index2] = newChromosome2;

		this.fitnesses[index1] = 0;
		this.fitnesses[index2] = 0;
	}

	run(
		fitness: (chromosome: string) => number,
		length: number,
		p_c: number,
		p_m: number,
		iterations = 100
	) {
		// TODO: Implement the run method
	}
}

let test = new GeneticAlgorithm();
test.generate(8);
test.crossover(test.population[0], test.population[1]);
