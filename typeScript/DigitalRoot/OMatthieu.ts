function digitalRoot2(n: number): number {
  let sum: number = n;
  do {
    n = sum;
    sum = 0;
    while (n >= 1) {
      sum += n % 10;
      n = (n - (n % 10)) / 10;
    }
  } while (sum > 10);
  return sum;
}

console.log(digitalRoot2(123));
