describe("Day4", function () {
    let Validizer = require('../../day4/day4.js')

    let val;
    beforeEach(function () {
        val = new Validizer();
    });

    it("validizer should create", function () {
        expect(val).toBeTruthy();
    });


    it("validize 1 is true", function () {
        expect(val.check('aa bb cc dd ee')).toBeTruthy();
    });
    it("validize 2 is false", function () {
        expect(val.check('aa bb cc dd aa')).toBeFalsy();
    });
    it("validize 3 is true", function () {
        expect(val.check('aa bb cc dd aaa')).toBeTruthy();
    });



    it("validize 1b is true", function () {
        expect(val.checkB('abcde fghij')).toBeTruthy();
    });
    it("validize 2b is false", function () {
        expect(val.checkB('abcde xyz ecdab')).toBeFalsy();
    });
    it("validize 3b is true", function () {
        expect(val.checkB('a ab abc abd abf abj')).toBeTruthy();
    });
    it("validize 4b is true", function () {
        expect(val.checkB('iiii oiii ooii oooi oooo')).toBeTruthy();
    });
    it("validize 5b is false", function () {
        expect(val.checkB('oiii ioii iioi iiio')).toBeFalsy();
    });


    it("check alfabetizer", function () {
        word = 'dbac';
        expect(word).toBe('dbac');
        word = word.split('').sort().join('');
        expect(word).toBe('abcd');
    });






});