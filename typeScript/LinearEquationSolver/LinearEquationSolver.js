function splitEq(equation) {
  var re = new RegExp(/(-?\d?x)|(-?\d?y)|(-?\d?z)|=|\+|\d+/g);
  return equation.match(re);
}
function splitEqual(equation) {
  var splitEqual = equation.split("=");
  splitEqual[1] = splitEqual[1]
    .split("")
    .map(function (c) {
      return c.replace("-", "+");
    })
    .join("");
  splitEqual[0].push(splitEqual[1].pop());
  debugger;
  equation = splitEqual.join("");
}
console.log(splitEq("2x+8y=-2z-4"));
splitEqual("2x+8y=-2z-4");
