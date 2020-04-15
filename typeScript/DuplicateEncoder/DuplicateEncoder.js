"use strict";
exports.__esModule = true;
function duplicateEncode(word) {
  var output = "";
  var isPresent = function (c, w) {
    return c.lastIndexOf(w) != c.indexOf(w) ? ")" : "(";
  };
  word
    .toLowerCase()
    .split("")
    .forEach(function (element) {
      debugger;
      output += isPresent(word.split(""), element);
    });
  return output;
}
exports.duplicateEncode = duplicateEncode;
console.log(duplicateEncode("PePPPmPOPPPlPnb"));
