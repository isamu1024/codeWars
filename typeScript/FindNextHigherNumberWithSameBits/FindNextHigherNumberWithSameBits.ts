function nextHigher(n: number) {
  let binArray: number[] = n
    .toString(2)
    .split(``)
    .map((x) => Number(x));

  //debugger;

  if (binArray.reduce((prev, val) => prev + val) == binArray.length)
    binArray.push(0);

  //debugger;

  let indexes: [number, number] = [0, 0];

  binArray.map((val, idx) =>
    val === 0 ? (indexes[0] = idx) : (indexes[1] = idx)
  );

  debugger;

  let toto = binArray
    .map((val, idx) => {
      if (idx === indexes[0]) return (val = binArray[idx + 1]);
      if (idx === indexes[1]) return (val = binArray[idx - 1]);
      return val;
    })
    .reverse()
    .reduce(
      (prev, curr, idx) => Number(curr) * Math.pow(2, idx) + Number(prev)
    );
}

console.log(nextHigher(127));
