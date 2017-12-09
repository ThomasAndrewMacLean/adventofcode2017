let Day6 = require('../../src/day6/day6.js')

describe("Day6", function () {

    let demo = [
        '0 2 7 0',
        '2 4 1 2',
        '3 1 2 3',
        '0 2 3 4',
        '1 3 4 1',
        '2 4 1 2'
    ]

    let day6;
    beforeEach(function () {
        day6 = new Day6();
    });


    it("day6 should create", function () {
        expect(day6).toBeTruthy();
    });


    it("day6 distr1", function () {
        expect(day6.distr(demo[0])).toBe(demo[1]);
    });
    it("day6 distr2", function () {
        expect(day6.distr(demo[1])).toBe(demo[2]);
    });
    it("day6 distr3", function () {
        expect(day6.distr(demo[2])).toBe(demo[3]);
    });
    it("day6 exA test gives 5", function () {
        expect(day6.exA(demo[0])).toBe(5);
    });
    it("day6 exB test gives 4", function () {
        expect(day6.exB(demo[0])).toBe(4);
    });
});