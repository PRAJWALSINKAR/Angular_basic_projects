function dowork(x, Y) {
    return x + Y;
}
var res = dowork(41, 40);
console.log(res);
var sum = function (x, y) {
    return x + y;
};
console.log(sum(10, 10));
function full(x, y) {
    return y + " " + x;
}
console.log(full("prajwal", "sinkar"));
console.log(full("prajwal"));
function wish(name, msg) {
    if (msg === void 0) { msg = "hi"; }
    return name + msg;
}
console.log(full("prajwal", "hellow"));
console.log(full("prawjal"));
function greet(msg) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    console.log(msg + "--" + names.join(","));
}
greet("good Afternoon", "prajwal", "ram", "raj", "ankit");
