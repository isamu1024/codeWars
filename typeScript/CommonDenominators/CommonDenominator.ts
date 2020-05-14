export const convertFrac = (lst: [number, number][]) => {
  let pgcd = (a: any, b: any): any => {
    let r: number;
    a > b ? (r = a % b) : (r = b % a);
    return r === 0 ? b : pgcd(b, r);
  };

  let denArray: any = lst.concat
    .apply([], lst)
    .filter((v, i) => {
      if (i % 2 !== 0) {
        return v;
      }
    });

  denArray.reduce((acc, val, idx) =>  );

  debugger;
};

let test = convertFrac([
  [1, 2],
  [1, 3],
  [1, 4],
]);
