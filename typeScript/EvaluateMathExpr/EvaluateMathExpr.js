"use strict";
exports.__esModule = true;
function calc(expression) {
    var calc;
    //Vérifie si des expressions avec () existent.
    //let rePartenthsis = new RegExp(/(\(?\d+[\+\-\*\/]\d+\)?)/g);
    var rePartenthsis = new RegExp(/\(.+\)/);
    return expression.match(rePartenthsis).join("");
}
exports.calc = calc;
var test = "1 + (5 + 5 * 2)";
var output = calc(test);
debugger;
