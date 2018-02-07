"use strict";
exports.__esModule = true;
var e2numberStr = (function () {
    function e2numberStr(num) {
        this.num = num;
    }
    e2numberStr.prototype.e2n = function (num) {
        var res;
        this.num = num || this.num;
        if (typeof this.num === 'number') {
            var strNum = this.num.toString();
            if (/e/i.test(strNum)) {
                var eIndex = this.eIndex(strNum);
                var pre = this.preStrNum(strNum, eIndex);
                var newPre = pre.replace('.', '');
                var last = this.lastNum(strNum, eIndex);
                var lowerNum = strNum.toLowerCase();
                if (lowerNum.indexOf('e-')) {
                    res = '0.' + this.oRepeat(last - 1) + newPre;
                }
                else if (lowerNum.indexOf('e+')) {
                    var hasNum = pre.length - pre.indexOf('.') - 1;
                    var addNum = last - hasNum;
                    res = newPre + this.oRepeat(addNum - 1);
                }
            }
        }
        else {
            console.warn('e2numberStr() warn:参数不是一个数字');
        }
        return res;
    };
    e2numberStr.prototype.eIndex = function (strNum) {
        return /e/i.exec(strNum).index;
    };
    e2numberStr.prototype.preStrNum = function (strNum, index) {
        return strNum.slice(0, index);
    };
    e2numberStr.prototype.lastNum = function (strNum, eIndex) {
        return parseInt(strNum.slice(eIndex + 1 + 1));
    };
    e2numberStr.prototype.oRepeat = function (num) {
        var zero = '0';
        return zero.repeat(num);
    };
    return e2numberStr;
}());
exports["default"] = e2numberStr;
//# sourceMappingURL=e2number.js.map