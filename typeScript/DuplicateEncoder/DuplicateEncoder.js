"use strict";
exports.__esModule = true;
function duplicateEncode(word) {
    var output = [];
    var stringArray = word.split(" ");
    stringArray.forEach(function (element) {
        var tempMap = [];
        for (var i = 0; i < element.length; i++) {
            element.lastIndexOf(element.charAt(i)) !=
                element.indexOf(element.charAt(i))
                ? tempMap.push(")")
                : tempMap.push("(");
        }
        output.push(tempMap.join(""));
    });
    console.log(output.join(" "));
}
exports.duplicateEncode = duplicateEncode;
duplicateEncode("toto est un peu concon");
//inputs.reduce((counter, {status}) => status == 0 ? counter + 1 : counter, 0);
