export class Kata {
  static squareDigits(num: number) {
    return Number(
      num
        .toString()
        .split(``)
        .map((a) => Math.pow(Number(a), 2))
        .join(``)
    );
  }
}

console.log(Kata.squareDigits(9119));
