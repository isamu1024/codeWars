function splitEq(equation) {
    var re = new RegExp(/(-?\d?x)|(-?\d?y)|(-?\d?z)|=|\+|\d+/g);
    return equation.match(re);
}
function splitEqual(equation) {
    var re = new RegExp(/(-?\d?x)|(-?\d?y)|(-?\d?z)/);
    var splitEqual = equation.split("=");
    splitEqual[0] = splitEqual[0].split(/\+/).join("");
    splitEqual[1] = splitEqual[1]
        .split("")
        .map(function (c) {
        if (c == "-") {
            return c.replace("-", "");
        }
        else if (c == "+") {
            return c.replace("+", "-");
        }
        else {
            return c;
        }
    })
        .join("");
    equation = splitEqual.concat().join("");
    debugger;
    return equation;
}
function matrix(equation) {
    var re = new RegExp(/\d?x/g);
    var aX = [];
    aX.push(equation.match(re));
    debugger;
}
//console.log(splitEq(`2x+8y=-2z+4`));
//console.log(splitEqual(`2x+8y=0`));
matrix("2x8y4x0");
