function order(words: string): string {
	return words
		.split(" ")
		.sort((a, b) => Number(a.match(/(\d+)/g)) - Number(b.match(/(\d+)/g)))
		.join(" ");
}

console.log(order(`is2 Thi1s T4est 3a`));
