function nextHigher(n: number): number {
  //convert number to binary array
  let binArray: number[] = n
    .toString(2)
    .split(``)
    .map((x) => Number(x))
    .reverse();

  binArray.push(0);

  debugger;

  //const posZero: number[] = [];

  //   for (let i = 0; i <= binArray.length; i++) {
  //     if (binArray[i] === 0) posZero.push(i);
  //   }

  //   let posOne: number[] = [];

  //   for (let i = 0; i <= binArray.length; i++) {
  //     if (binArray[i] === 1) posOne.push(i);
  //   }

  let test: number = n;

  if (Math.pow(binArray.lastIndexOf(0), 2) < Math.pow(binArray.indexOf(1), 2)) {
    test =
      n - Math.pow(binArray.lastIndexOf(1), 2) + (binArray.lastIndexOf(0), 2);
  }

  debugger;

  //swap

  //convert binary array to number
  return binArray.reduce((prev, curr, idx) => curr * Math.pow(2, idx) + prev);
}

console.log(nextHigher(127));
