"use strict";
exports.__esModule = true;
exports.DugistDate = void 0;
var SunCalc = require("suncalc");
function DugistDate(date) {
    console.log(SunCalc.getMoonTimes(date));
}
exports.DugistDate = DugistDate;
