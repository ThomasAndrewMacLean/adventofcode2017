'use strict';

let inp =
    `{{<ab>},{<ab>},{<ab>},{<ab>}}
{{<!!>},{<!!>},{<!!>},{<!!>}}
{{<a!>},{<a!>},{<a!>},{<ab>}}
{{<!!>},{<!!>},{<!!>},{<!!!>}}`;
let demo = inp.split('\n');
let inpB = `<>
<random characters>
<<<<>
<{!>}>
<!!>
<!!!>>
<{o"i!a,<{i<a>`;
let demoB = inpB.split('\n');


describe('Day9', function () {
    let Day9 = require('../../src/day9/day9.js');
    let day9;

    beforeEach(function () {
        day9 = new Day9();
    });

    it('day9 should create', function () {
        expect(day9).toBeTruthy();
    });
    it('day9 remove cancellations', function () {
        expect(day9.removeCancel(demo[1])).toBe('{{<>},{<>},{<>},{<>}}');
        expect(day9.removeCancel(demo[3])).toBe('{{<>},{<>},{<>},{<}}');
    });
    it('day9 remove cancellations', function () {
        expect(day9.removeCancel(demo[0])).toBe('{{<ab>},{<ab>},{<ab>},{<ab>}}');
    });
    it('day9 remove garbage', function () {
        expect(day9.removeGarbage(demo[0])).toBe('{{},{},{},{}}');
    });
    it('day9 remove cancel then garbage', function () {
        expect(day9.removeGarbage(day9.removeCancel(demo[2]))).toBe('{{}}');
    });
    it('day9 get points demo0 is 9', function () {
        expect(day9.exA(demo[0])).toBe(9);
    });
    it('day9 get points demo1 is 9', function () {
        expect(day9.exA(demo[1])).toBe(9);
    });
    it('day9 get points demo2 is 3', function () {
        expect(day9.exA(demo[2])).toBe(3);
    });

    it('day9 countGarbase demoB0 is 0', function () {
        expect(day9.exB(demoB[0])).toBe(0);
    });
    it('day9 countGarbase demoB1 is 17', function () {
        expect(day9.exB(demoB[1])).toBe(17);
    });
    it('day9 countGarbase demoB2 is 3', function () {
        expect(day9.exB(demoB[2])).toBe(3);
    });
    it('day9 countGarbase demoB3 is 2', function () {
        expect(day9.exB(demoB[3])).toBe(2);
    });
    it('day9 countGarbase demoB4 is 0', function () {
        expect(day9.exB(demoB[4])).toBe(0);
    });
    it('day9 countGarbase demoB5 is 0', function () {
        expect(day9.exB(demoB[5])).toBe(0);
    });
    it('day9 countGarbase demoB6 is 10', function () {
        expect(day9.exB(demoB[6])).toBe(10);
    });

});
