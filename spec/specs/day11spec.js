'use strict';

const fs = require('fs');
const inputPuzzle = fs.readFileSync('src/day11/input11.txt', 'utf8');

describe('Day11', function () {
    let Day11 = require('../../src/day11/day11.js');
    let day11;

    beforeEach(function () {

        day11 = new Day11();
    });

    it('day11 should create', function () {
        expect(day11).toBeTruthy();
    });

    it('day11 counter get highest', function () {
        day11.counter = [1, 3, 5];
        expect(day11.getDistance()).toBe(5);
    });
    it('day11 do steps', function () {
        day11.doStep('n');
        expect(day11.counter).toEqual([1, 0, 0]);
    });
    it('day11 exA 1', function () {
        expect(day11.exA('ne,ne,ne')).toEqual(3);
    });
    it('day11 exA 2', function () {
        expect(day11.exA('ne,ne,sw,sw')).toEqual(0);
    });
    it('day11 exA 3', function () {
        expect(day11.exA('ne,ne,s,s')).toEqual(2);
    });
    it('day11 exA 4', function () {
        expect(day11.exA('se,sw,se,sw,sw')).toEqual(3);
    });


});
