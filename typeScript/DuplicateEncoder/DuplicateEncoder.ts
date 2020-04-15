export function duplicateEncode(word: string) {
  let isPresent = (c: string[], w: string): string => {
    return c.lastIndexOf(w) != c.indexOf(w) ? `)` : `(`;
  };
  let wordArray: string[] = word.split(``);
  let output: string = ``;

  wordArray.forEach((element) => {
    output += isPresent(word.split(``), element);
  });

  return output;
}

console.log(duplicateEncode(`PePPPmPOPPPlPnb`));
