export class GeneticAlgorithm {
  population: string[] = [];
  fitnesses: number[] = [];

  generate(length: number) {
    function getRandombin() {
      return Math.floor(Math.random() * 2);
    }

    //setting up array for chromosome and associated fitnesses

    debugger;
    //generating population
    while (this.population.length <= 99) {
      let chromosome: string = ``;
      for (let i = 0; i < length; i++) {
        chromosome += getRandombin().toString();
      }
      this.population.push(chromosome);
      this.fitnesses.push(0);
    }

    debugger;
  }

  select(population: string[], fitnesses: number[]) {
    // TODO: Implement the select method
  }

  mutate(chromosome: string, p: number) {
    // TODO: Implement the mutate method
  }

  crossover(chromosome1: string, chromosome2: string) {
    // TODO: Implement the crossover method
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
test.generate(40);
