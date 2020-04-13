function div(n) {
  var current = 2;
  var fact = [];
  var div = function (x) {
    current = 2;
    while (n % current != 0) {
      current++;
    }
    return current;
  };
  while (n != 1) {
    fact.push(div(n));
    n = n / current;
  }
  return fact;
}
var value = div(7775460);
debugger;
