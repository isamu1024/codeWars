"use strict";
exports.__esModule = true;
var GeneticAlgorithm = /** @class */ (function () {
  function GeneticAlgorithm() {
    this.population = [];
    this.fitnesses = [];
  }
  GeneticAlgorithm.prototype.getRandomInt = function (max) {
    return Math.floor(Math.random() * max);
  };
  GeneticAlgorithm.prototype.generate = function (length) {
    //setting up array for chromosome and associated fitnesses
    //generating population
    while (this.population.length <= 4) {
      var chromosome = "";
      for (var i = 0; i < length; i++) {
        chromosome += this.getRandomInt(2).toString();
      }
      this.population.push(chromosome);
      this.fitnesses.push(0);
    }
  };
  GeneticAlgorithm.prototype.select = function (population, fitnesses) {
    // TODO: Implement the select method
  };
  GeneticAlgorithm.prototype.mutate = function (chromosome, p) {
    var mutate = 0;
    var chromosomeArray = chromosome.split("");
    while (mutate <= p) {
      var position = this.getRandomInt(chromosome.length);
      chromosomeArray[position] === "0"
        ? (chromosomeArray[position] = "1")
        : (chromosomeArray[position] = "0");
      mutate++;
    }
    return (chromosome = chromosomeArray.join(""));
  };
  GeneticAlgorithm.prototype.crossover = function (chromosome1, chromosome2) {
    // we cut off the rest of the chromosome and switch it with the cut off part of the other one.
    //In other words, say we have 01011010 and 11110110 and we crossover at the 3rd bit. This results in 010 10110 and 111 11010
    var randomCut = this.getRandomInt(chromosome1.length - 1);
    var newChromosome1 =
      chromosome1.slice(0, randomCut) +
      chromosome2.slice(randomCut, chromosome2.length);
    var newChromosome2 =
      chromosome1.slice(randomCut, chromosome1.length) +
      chromosome2.slice(0, randomCut);
    var index1 = this.population.indexOf(chromosome1);
    var index2 = this.population.indexOf(chromosome2);
    this.population[index1] = newChromosome1;
    this.population[index2] = newChromosome2;
    this.fitnesses[index1] = 0;
    this.fitnesses[index2] = 0;
  };
  GeneticAlgorithm.prototype.run = function (
    fitness,
    length,
    p_c,
    p_m,
    iterations
  ) {
    if (iterations === void 0) {
      iterations = 100;
    }
    // TODO: Implement the run method
  };
  return GeneticAlgorithm;
})();
exports.GeneticAlgorithm = GeneticAlgorithm;
var test = new GeneticAlgorithm();
test.generate(8);
test.crossover(test.population[0], test.population[1]);
test.mutate("1111", 3);
