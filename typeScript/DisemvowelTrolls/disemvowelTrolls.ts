export class Kata {
  static disemvowel(str: string) {
    console.log(str);
    return str.replace(/[aeiou]/gi, ``);
  }
}

console.log(Kata.disemvowel("ToOtoo is Aa GoudeE TOtoo"));
