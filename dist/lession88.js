"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var displayColors = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    for (var i in colors) {
        console.log(colors[i]);
    }
};
var message = "hello";
var colors = ["blue", "green"];
displayColors.apply(void 0, __spreadArrays([message], colors));
//rest chuyền vào từng phần tử lấy ra mảng
//spread chuyền vào mảng lấy ra phần tử
var employees = ['A', "B", "C"];
var emp1 = employees[0], emp2 = employees[1], emp3 = employees[2];
console.log(emp1);
console.log(emp2);
console.log(emp3);
//tách mảng
var employee = {
    fname: "Noisy",
    lname: "yeudau",
    level: 2
};
var f = employee.fname, l = employee.lname, lv = employee.level;
console.log(f);
console.log(l);
console.log(lv);
//bóc tác object --> định nghĩa lại tên biến abc :a 
var namem = "noisy";
var stt = 10;
var outputmess = "\n wellcome " + namem + " " + stt + " to BHTA\n this is toturios\n ";
console.log(outputmess);
var colorNames = ['Red', 'Green', 'yellow'];
for (var i in colorNames) {
    console.log(colorNames[i]);
}
for (var _i = 0, colorNames_1 = colorNames; _i < colorNames_1.length; _i++) {
    var item = colorNames_1[_i];
    console.log(item);
}
var namen = "noisy";
for (var _a = 0, namen_1 = namen; _a < namen_1.length; _a++) {
    var c = namen_1[_a];
    console.log(c);
}
//# sourceMappingURL=lession88.js.map