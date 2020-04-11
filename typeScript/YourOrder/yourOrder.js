function order(words) {
    var re = new RegExp(/\w*[0-9]\w*/g);
    var strArray;
    strArray = words.match(re);
    if (strArray != null) {
        strArray === null || strArray === void 0 ? void 0 : strArray.sort(function (a, b) { return Number(a.match(/(\d+)/g)) - Number(b.match(/(\d+)/g)); });
    }
}
order("is2 Thi1s T4est 3a");
