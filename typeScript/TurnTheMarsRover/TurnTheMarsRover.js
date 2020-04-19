"use strict";
exports.__esModule = true;
function turn(current, target) {
  var cap = ["N", "E", "S", "W"];
  if (cap.indexOf(current) == 0) {
    cap.unshift(cap.pop());
  } else if (cap.indexOf(current) == 3) {
    cap.push(cap.shift());
  }
  debugger;
  return cap[cap.indexOf(target)] < cap[cap.indexOf(current)]
    ? "left"
    : "right";
}
exports.turn = turn;
console.log(turn("S", "W"));
