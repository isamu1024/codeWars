"use strict";
exports.__esModule = true;
var Kata = /** @class */ (function () {
    function Kata() {
    }
    Kata.spinWords = function (words) {
        var re = new RegExp(/\w{6,}/);
        var reverse = function (expr) {
            return expr.split("").reverse().join("");
        };
        var wordsArray = words.split(" ");
        for (var i = 0; i < wordsArray.length; i++) {
            if (re.test(wordsArray[i])) {
                wordsArray[i] = reverse(wordsArray[i]);
            }
        }
        return wordsArray.join(" ");
    };
    return Kata;
}());
exports.Kata = Kata;
console.log(Kata.spinWords("this is a fucking fuck1ng test"));
