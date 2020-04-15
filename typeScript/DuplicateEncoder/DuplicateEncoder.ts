export function duplicateEncode(word: string) {
  let output: string[] = [];

  let stringArray: string[] = word.toLowerCase().split(` `);

  stringArray.forEach((element) => {
    let tempMap: string[] = [];
    for (let i: number = 0; i < element.length; i++) {
      element.lastIndexOf(element.charAt(i)) !=
      element.indexOf(element.charAt(i))
        ? tempMap.push(`)`)
        : tempMap.push(`(`);
    }
    output.push(tempMap.join(``));
  });

  return output.join(``);
}

console.log(duplicateEncode(`recede`));
