import * as SunCalc from 'suncalc';

export type IDugistDate = {
    fortnight: () => number;
    day: () => number;
};

export function DugistDate(date: Date): IDugistDate {
    console.log(SunCalc.getMoonTimes(date,));
}
