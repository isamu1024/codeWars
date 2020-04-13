function div(n: number): Number[] {
  let i: number = 2;
  let fact: number[] = [];

  let div = (x: number) => {
    i = 2;
    while (n % i != 0) {
      i++;
    }
    return i;
  };

  while (n != 1) {
    fact.push(div(n));
    n = n / i;
  }

  return fact;
}

let value = div(7775460);
