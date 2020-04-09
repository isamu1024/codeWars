"use strict";
exports.__esModule = true;
exports.digitalRoot = function (n) {
    //let strNumber = String(n);
    if (n.length <= 1) {
        return String((Number(n[0]) + Number(n[1])));
    }
    return exports.digitalRoot(String((Number(n[n.length - 1]) + Number(n[n.length - 2]))));
    debugger;
};

console.log(exports.digitalRoot("1234"));
