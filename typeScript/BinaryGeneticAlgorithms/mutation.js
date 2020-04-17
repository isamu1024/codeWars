"use strict";
exports.__esModule = true;
exports.mutate = function (chromosome, p) {
    debugger;
    return chromosome
        .split("")
        .map(function (x) {
        if (Math.random() > 1 - p)
            x == "0" ? (x = "1") : (x = "0");
        else
            x;
    })
        .join("");
};
console.log(exports.mutate("0000000", 0.5));
