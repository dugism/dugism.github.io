import * as SunCalc from 'suncalc';

export type IDugistDate = {

};

export function DugistDate(date: Date, lat: number, long: number): IDugistDate {
    console.log(SunCalc.getMoonIllumination(date));
}
const date = new Date(100);
const lat = 30;
const long = -100;
console.log(SunCalc.getMoonIllumination(date));
