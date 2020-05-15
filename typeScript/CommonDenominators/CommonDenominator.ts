export const convertFrac = (lst: [number, number][]): string => {
  let str: string = ``;

  if (lst.length === 0) return str;

  let pgcd = (a: any, b: any): any => {
    let r: number;
    a > b ? (r = a % b) : (r = b % a);
    return r === 0 ? b : pgcd(b, r);
  };

  const simpLst = lst.map((x) =>
    x.map((val) =>
      x[0] > x[1] ? val / pgcd(x[0], x[1]) : val / pgcd(x[1], x[0])
    )
  );

  const denArray: any = simpLst.concat.apply([], simpLst).filter((v, i) => {
    if (i % 2 !== 0) {
      return v;
    }
  });

  const ppcm: number = denArray.reduce((a: number, b: number) =>
    a > b ? (a * b) / pgcd(a, b) : (a * b) / pgcd(b, a)
  );

  const multiply: any = simpLst.map((x) =>
    x.map((val, idx) => val * (ppcm / x[1]))
  );

  multiply.forEach((element: any) => {
    str += `(${element[0]},${element[1]})`;
  });

  return str;
};

console.log(
  convertFrac([
    [1, 2],
    [4, 5],
    [3, 4],
    [2, 3],
    [7, 10],
  ])
);
