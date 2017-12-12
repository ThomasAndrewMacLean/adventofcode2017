'use strict';

describe('Day8', function () {
    let Day8 = require('../../src/day8/day8.js');
    let day8;

    let inp = `b inc 5 if a > 1
    a inc 1 if b < 5
    c dec -10 if a >= 1
    c inc -20 if c == 10`;

    beforeEach(function () {
        day8 = new Day8();
        day8.setData({});
    });

    it('day8 should create', function () {
        expect(day8).toBeTruthy();
    });

    it('day8 getVal of Empty is zero', function () {
        expect(day8.getVal('a')).toBe(0);
    });

    it('day8 test incVal', function () {
        day8.incVal('a', 5);
        expect(day8.getVal('a')).toBe(5);
    });
    it('day8 test incVal and decVal', function () {
        day8.incVal('a', 5);
        day8.decVal('a', 3);
        expect(day8.getVal('a')).toBe(2);
    });
    it('day8 test incVal and decVal', function () {
        day8.incVal('a', 5);
        day8.decVal('b', 3);
        expect(day8.getVal('a')).toBe(5);
        expect(day8.getVal('b')).toBe(-3);

    });

    it('day8 test getHighest', function () {
        day8.incVal('a', 5);
        day8.decVal('b', 3);

        expect(day8.getHighVal()).toBe(5);
    });

    it('day8 exA', function () {
        expect(day8.exA(inp)).toBe(1);
    });


    it('day8 exA', function () {
        day8.high = 0;
        expect(day8.exB(inp)).toBe(10);
    });



});
