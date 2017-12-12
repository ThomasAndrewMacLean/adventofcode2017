'use strict';

const fs = require('fs');
const inputPuzzle = fs.readFileSync('src/day10/input10.txt', 'utf8');

describe('Day10', function () {
    let Day10 = require('../../src/day10/day10.js');
    let day10;

    beforeEach(function () {

        day10 = new Day10('3, 4, 1, 5', 5);
    });

    it('day10 should create', function () {
        expect(day10).toBeTruthy();
    });
    it('day10 list should be an object', function () {
        expect(typeof (day10.list)).toBe('object');
    });
    it('day10 list should be [ 0, 1, 2, 3, 4 ]', function () {
        expect(day10.list).toEqual([0, 1, 2, 3, 4]);
    });
    it('day10 get sub1', function () {
        expect(day10.getSub(0)).toEqual([2, 1, 0, 3, 4]);
    });
    it('day10 get sub1 should shift currentPos', function () {
        day10.getSub(0);
        expect(day10.currentPos).toBe(3);
    });
    it('day10 get sub1 should shift skipsize', function () {
        day10.getSub(0);
        expect(day10.skipSize).toBe(1);
    });
    it('day10 get sub1 should shift skipsize', function () {
        day10 = new Day10('0, 4, 1, 5', 5);
        day10.getSub(0);
        expect(day10.list).toEqual([0, 1, 2, 3, 4]);
    });


    it('day10 2 get sub1', function () {
        expect(day10.getSub(0)).toEqual([2, 1, 0, 3, 4]);
        expect(day10.getSub(1)).toEqual([4, 3, 0, 1, 2]);
    });

    it('day10 2 should shift currentPos', function () {
        day10.getSub(0);
        day10.getSub(1);

        expect(day10.currentPos).toBe(3);

    });

    it('day10 2 should shift skipSize', function () {
        day10.getSub(0);
        day10.getSub(1);

        expect(day10.skipSize).toBe(2);

    });

    it('day10 3 get sub1', function () {
        expect(day10.getSub(0)).toEqual([2, 1, 0, 3, 4]);
        expect(day10.getSub(1)).toEqual([4, 3, 0, 1, 2]);
        expect(day10.getSub(2)).toEqual([4, 3, 0, 1, 2]);

    });

    it('day10 3 should shift currentPos', function () {
        day10.getSub(0);
        day10.getSub(1);
        day10.getSub(2);

        expect(day10.currentPos).toBe(1);

    });
    it('day10 3 should shift skipSize', function () {
        day10.getSub(0);
        day10.getSub(1);
        day10.getSub(2);

        expect(day10.skipSize).toBe(3);

    });

    it('day10 3 get sub1', function () {
        expect(day10.getSub(0)).toEqual([2, 1, 0, 3, 4]);
        expect(day10.getSub(1)).toEqual([4, 3, 0, 1, 2]);
        expect(day10.getSub(2)).toEqual([4, 3, 0, 1, 2]);
        expect(day10.getSub(3)).toEqual([3, 4, 2, 1, 0]);

    });

    it('day10 4 should shift currentPos', function () {
        day10.getSub(0);
        day10.getSub(1);
        day10.getSub(2);
        day10.getSub(3);

        expect(day10.currentPos).toBe(4);

    });
    it('day10 4 should shift skipSize', function () {
        day10.getSub(0);
        day10.getSub(1);
        day10.getSub(2);
        day10.getSub(3);

        expect(day10.skipSize).toBe(4);

    });

    it('day10 convert to ascii', function () {
        expect(day10.convert('1,2,3')).toBe('49,44,50,44,51,');
    });

});
