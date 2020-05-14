function pgcd(a: number, b: number): number {
  let r: number;

  a > b ? (r = a % b) : (r = b % a);
  return r === 0 ? b : pgcd(b, r);
}

let lst: number[] = [2, 3, 4];

let ppcm: number = lst.reduce((a, b) => (a * b) / pgcd(a, b));

debugger;
