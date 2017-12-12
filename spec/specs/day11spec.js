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
});
