let binTest: number[] = [0, 0, 0, 0, 0, 0, 1, 0];
console.log(
  binTest.reverse().reduce((prev, curr, idx) => curr * Math.pow(2, idx) + prev)
);
