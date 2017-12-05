describe("Day4", function () {
    let Day5 = require('../../day5/day5.js')

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

    it("day5 should create", function () {
        expect(day5).toBeTruthy();
    });


    it("getOut should be 5", function () {
        let arr = day5.getArray(inp)

        expect(day5.getOut(arr)).toBe(5);
    });

    it("getArray gives an array", function () {

        expect(typeof (inp)).toBe('string');


        let arr = day5.getArray(inp)

        expect(typeof (arr)).toBe('object');
    });

    // 0
    // 3
    // 0
    // 1
    // -3


});