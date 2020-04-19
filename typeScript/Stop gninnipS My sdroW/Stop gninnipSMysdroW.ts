export class Kata {
	static spinWords(words: string) {
		let re = RegExp(/\w{5,}/);
		let reverse = (expr: string) => {
			return expr.split(``).reverse().join(``);
		};

		let wordsArray: string[] = words.split(` `);

		for (let i = 0; i < wordsArray.length; i++) {
			if (re.test(wordsArray[i])) {
				wordsArray[i] = reverse(wordsArray[i]);
			}
		}

		return wordsArray.join(` `);
	}
}

console.log(Kata.spinWords(`Just kidding there is still one more`));
