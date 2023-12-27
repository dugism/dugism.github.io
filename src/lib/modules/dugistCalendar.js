"use strict";
exports.__esModule = true;
exports.DugistDate = void 0;
var SunCalc = require("suncalc");
function DugistDate(date, lat, long) {
    console.log(SunCalc.getMoonIllumination(date));
}
exports.DugistDate = DugistDate;
var date = new Date(100);
var lat = 30;
var long = -100;
console.log(SunCalc.getMoonIllumination(date));
