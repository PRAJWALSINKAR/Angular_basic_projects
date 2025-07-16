var student = /** @class */ (function () {
    function student() {
    }
    student.prototype.getGread = function () {
        if (this.sMark > 50) {
            return "A";
        }
        return "B";
    };
    return student;
}());
var s1 = new student;
s1.sName = "prajwal";
s1.sMark = 99;
s1.sRank = 12;
console.log(s1.getGread());
