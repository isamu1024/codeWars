const select = (population, fitnesses) => {
  let roulette = [];

  for (chromosome of population) {
    let position = fitnesses[population.indexOf(chromosome)];

    for (let i = 0; i <= position * 100; i++) {
      roulette.push(chromosome);
    }
  }

  let trigger = ~~(Math.random() * 100);
  //debugger;
  return roulette[trigger];
};

const population = [1, 2, 3];
const fitnesses = [0.05, 0.05, 0.9];

for (let n = 0; n < 10; ++n) {
  let results = [];
  for (let i = 0; i < 10; ++i) {
    results.push(select(population, fitnesses));
  }
  let threes = results.filter((x) => x == 3).length;
  debugger;
}

// countDecimals = function (value) {
//     if (Math.floor(value) === value) return 0;
//     return value.toString().split(".")[1].length || 0;
//   };
