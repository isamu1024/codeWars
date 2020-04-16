"use strict";
exports.__esModule = true;
var GeneticAlgorithm = /** @class */ (function () {
    function GeneticAlgorithm() {
        this.population = [];
        this.fitnesses = [];
    }
    GeneticAlgorithm.prototype.generate = function (length) {
        function getRandombin() {
            return Math.floor(Math.random() * 2);
        }
        //setting up array for chromosome and associated fitnesses
        debugger;
        //generating population
        while (this.population.length <= 99) {
            var chromosome = "";
            for (var i = 0; i < length; i++) {
                chromosome += getRandombin().toString();
            }
            this.population.push(chromosome);
            this.fitnesses.push(0);
        }
        debugger;
    };
    GeneticAlgorithm.prototype.select = function (population, fitnesses) {
        // TODO: Implement the select method
    };
    GeneticAlgorithm.prototype.mutate = function (chromosome, p) {
        // TODO: Implement the mutate method
    };
    GeneticAlgorithm.prototype.crossover = function (chromosome1, chromosome2) {
        // TODO: Implement the crossover method
    };
    GeneticAlgorithm.prototype.run = function (fitness, length, p_c, p_m, iterations) {
        if (iterations === void 0) { iterations = 100; }
        // TODO: Implement the run method
    };
    return GeneticAlgorithm;
}());
exports.GeneticAlgorithm = GeneticAlgorithm;
var test = new GeneticAlgorithm();
test.generate(40);
