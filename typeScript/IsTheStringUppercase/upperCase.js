"use strict";
exports.__esModule = true;
function isUpperCase(str) {
    var re = new RegExp(/[A-Z]/);
    for (var index = 0; index < str.length; index++) {
        re.test(str.charAt(index)) ? str.toLowerCase : str.toUpperCase;
    }
    console.log(str);
}
exports.isUpperCase = isUpperCase;
isUpperCase("TotO");
