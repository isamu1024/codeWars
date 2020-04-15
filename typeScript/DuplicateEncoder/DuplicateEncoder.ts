export function duplicateEncode(word: string) {
  let isPresent = (c: string[], w: string): string => {
    return c.lastIndexOf(w) != c.indexOf(w) ? `)` : `(`;
  };
  let wordArray: string[] = word.toLowerCase().split(``);
  let output: string = ``;

  wordArray.forEach((element) => {
    output += isPresent(wordArray, element);
  });

  return output;
}

console.log(duplicateEncode(`PePPPmPOPPPlPnb`));
