function splitEq(equation: string) {
  let re = new RegExp(/(-?\d?x)|(-?\d?y)|(-?\d?z)|=|\+|\d+/g);

  return equation.match(re);
}

function splitEqual(equation: string) {
  let re = new RegExp(/(-?\d?x)|(-?\d?y)|(-?\d?z)/g);

  let splitEqual: string[] = equation.split("=");
  splitEqual[1] = splitEqual[1]
    .split(``)
    .map((c) => c.replace(`-`, `+`))
    .join(``);
  debugger;
}

console.log(splitEq(`2x+8y=-2z-4`));
splitEqual(`2x+8y=-2z-4`);
