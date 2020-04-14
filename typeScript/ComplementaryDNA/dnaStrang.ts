export class Kata {
	static dnaStrand(dna: string) {
		let output: string = ``;

		for (let i: number = 0; i < dna.length; i++) {
			switch (dna.charAt(i)) {
				case "A":
					output += `T`;
					break;
				case "T":
					output += `A`;
					break;
				case "C":
					output += `G`;
					break;
				case "G":
					output += `C`;
			}
		}
		return output;
	}
}

console.log(Kata.dnaStrand("AAAAAA"));
