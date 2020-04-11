"use strict";
exports.__esModule = true;
function order(words) {
    var re = new RegExp(/\w*[0-9]\w*/gm);
    var strArray = words.split(re);
    strArray.forEach(function (element) { console.log(element); });
}
exports.order = order;
order("fe4r the r3pear");
