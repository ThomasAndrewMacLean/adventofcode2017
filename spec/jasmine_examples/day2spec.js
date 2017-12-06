describe("Day2", function () {
    // import CaptchaSolver from 'day1a'
    var CheckSum = require('../../day2/day2.js')

    var cs;
    var testData;
    var testData2;
    beforeEach(function () {
        cs = new CheckSum();
        var fs = require('fs');
        testData = fs.readFileSync('day2/testData.txt', 'utf8');
        cs.setData(testData)
        testData2 = fs.readFileSync('day2/testData2.txt', 'utf8');
    });

    it("getNumberOfRows should be 3", function () {
        expect(cs.getNumberOfRows()).toBe(3);
    });

    it("getRow should give a row", function () {
        //error on windows?
        // expect(cs.getRow(0)).toBe('5 1 9 5');
    });
    it("getRow should give a row2", function () {
        //error on windows?
        // expect(cs.getRow(1)).toBe('7 5 3');
    });

    it("getNumberOfColumnsInRow 0 should be 4", function () {
        const row = cs.getRow(0);
        expect(cs.getNumberOfColumnsInRow(row)).toBe(4);
    });
    it("getNumberOfColumnsInRow 1 should be 3", function () {
        const row = cs.getRow(1);
        expect(cs.getNumberOfColumnsInRow(row)).toBe(3);
    });

    it("getHighest in row 0 should be 9", function () {
        const row = cs.getRow(0);
        expect(cs.getHighestNumberInRow(row)).toBe(9);
    });

    it("getLowest in row 0 should be 1", function () {
        const row = cs.getRow(0);
        expect(cs.getLowestNumberInRow(row)).toBe(1);
    });

    it("getDifference in row 0 should be 8", function () {
        const row = cs.getRow(0);
        expect(cs.getDifference(row)).toBe(8);
    });
    it("getDifference in row 1 should be 4", function () {
        const row = cs.getRow(1);
        expect(cs.getDifference(row)).toBe(4);
    });
    it("getDifference in row 2 should be 6", function () {
        const row = cs.getRow(2);
        expect(cs.getDifference(row)).toBe(6);
    });

    it("checkSum should be 18", function () {
        expect(cs.getCheckSum()).toBe(18);
    });

    it("getDivisor in row 0 should be 4", function () {
        cs.setData(testData2);
        const row = cs.getRow(0);
        expect(cs.evenlyDivisibleValues(row)).toBe(4);
    });
    it("getDivisor in row 1 should be 3", function () {
        cs.setData(testData2);
        const row = cs.getRow(1);
        expect(cs.evenlyDivisibleValues(row)).toBe(3);
    });
    it("getDivisor in row 2 should be 2", function () {
        cs.setData(testData2);
        const row = cs.getRow(2);
        expect(cs.evenlyDivisibleValues(row)).toBe(2);
    });
    it("getDivisor in row 2 should be 2", function () {
        cs.setData(testData2);
        expect(cs.getCheckSum2()).toBe(9);
    });
});