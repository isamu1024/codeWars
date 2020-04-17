export const mutate = (chromosome: string, p: number): string => {
  return chromosome
    .split(``)
    .map((x) => {
      if (Math.random() > 1 - p) {
        return x == `0` ? `1` : `0`;
      } else return x;
    })
    .join(``);
};

console.log(mutate(`0000000`, 0));
