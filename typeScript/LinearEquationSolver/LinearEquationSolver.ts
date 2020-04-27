function splitEq(equation: string) {
	let re = new RegExp(/(-?\d?x)|(-?\d?y)|(-?\d?z)|=|\+|\d+/g);

	return equation.match(re);
}

function splitEqual(equation: string) {
	let re = new RegExp(/(-?\d?x)|(-?\d?y)|(-?\d?z)/);

	let splitEqual: string[] = equation.split("=");
	splitEqual[0] = splitEqual[0].split(/\+/).join(``);
	splitEqual[1] = splitEqual[1]
		.split(``)
		.map((c) => {
			if (c == `-`) {
				return c.replace(`-`, ``);
			} else if (c == `+`) {
				return c.replace(`+`, `-`);
			} else {
				return c;
			}
		})
		.join(``);

	equation = splitEqual.concat().join(``);
	debugger;
	return equation;
}

function matrix(equation: string) {
	let reX = new RegExp(/\d?x/g);
	let reY = new RegExp(/\d?y/g);
	let reZ = new RegExp(/\d?z/g);
	let aX = [];

	aX.push(equation.match(reX));

	debugger;
}

//console.log(splitEq(`2x+8y=-2z+4`));
//console.log(splitEqual(`2x+8y=0`));

matrix(`2x8y4x0`);
