export function findNb(m: number): number {
  let n: number = 0;
  let nb: number = 0;
  let vol: number = 0;

  while (vol < m) {
    n++;
    nb = nb + (2 * n - 1);
    vol = vol + Math.pow(n, 3);
  }
  return vol === m ? n : -1;
}

console.log(findNb(24723578342962));
