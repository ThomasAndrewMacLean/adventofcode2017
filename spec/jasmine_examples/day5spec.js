describe('Day5', function () {
    let Day5 = require('../../src/day5/day5.js')

    let inp =
        `0
    3
    0
    1
    -3`

    let day5;
    beforeEach(function () {
        day5 = new Day5();
    });

    it('day5 should create', function () {
        expect(day5).toBeTruthy();
    });

    it('getArray gives an array', function () {
        expect(typeof (inp)).toBe('string');
        let arr = day5.getArray(inp)
        expect(typeof (arr)).toBe('object');
    });

    it('getOut should be 5', function () {
        let arr = day5.getArray(inp)
        expect(day5.getOut(arr)).toBe(5);
    });

    it('getOutB should be 10', function () {
        let arr = day5.getArray(inp)
        expect(day5.getOutB(arr)).toBe(10);
    });

});