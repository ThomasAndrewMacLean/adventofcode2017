'use strict';

describe('Day7', function () {
    let Day7 = require('../../src/day7/day7.js');

    let demo =
        `   pbga (66)
            xhth (57)
            ebii (61)
            havc (66)
            ktlj (57)
            fwft (72) -> ktlj, cntj, xhth
            qoyq (66)
            padx (45) -> pbga, havc, qoyq
            tknk (41) -> ugml, padx, fwft
            jptl (61)
            ugml (68) -> gyxo, ebii, jptl
            gyxo (61)
            cntj (57)`;

    let day7;

    beforeEach(function () {
        day7 = new Day7();
    });

    it('day7 should create', function () {
        expect(day7).toBeTruthy();
    });

    it('day7 getRows from demo gives length 13', function () {
        expect(day7.getRows(demo).length).toBe(13);
    });
    it('day7 getRows returns object', function () {
        expect(typeof (day7.getRows(demo))).toBe('object');
    });
    it('day7 getRows from demo 0 gives pbga (66)', function () {
        expect(day7.getRows(demo)[0]).toBe('pbga (66)');
    });

    it('day7 getweight should give a number', function () {
        expect(typeof (day7.getWeight('xhth (57)'))).toBe('number');
    });

    it('day7 getweight should give 57', function () {
        expect(day7.getWeight('xhth (57)')).toBe(57);
    });
    
    it('day7 getweight should give 12594', function () {
        expect(day7.getWeight('ybneks (12594) -> immqut, csprk, eyjif, oykud, bazfmo, nbmup, bxabcu      ')).toBe(12594);
    });

    it('day7 getName should give a xhth', function () {
        expect(day7.getName('xhth (57)')).toBe('xhth');
    });

    it('day7 getName should give a string', function () {
        expect(typeof (day7.getName('xhth (57)'))).toBe('string');
    });

    it('day7 length getProgramsOnTop should be 3', function () {
        expect(day7.getProgramsOnTop('padx (45) -> pbga, havc, qoyq').length).toBe(3);
    });

    it('day7 getProgramsOnTop first should be pbga', function () {
        expect(day7.getProgramsOnTop('padx (45) -> pbga, havc, qoyq')[0]).toBe('pbga');
    });

    it('day7 getProgramsOnTop second should be havc', function () {
        expect(day7.getProgramsOnTop('padx (45) -> pbga, havc, qoyq')[1]).toBe('havc');
    });

    it('day7 getProgramsOnTop third should be qoyq', function () {
        expect(day7.getProgramsOnTop('padx (45) -> pbga, havc, qoyq')[2]).toBe('qoyq');
    });

    it('day7 getProgramsOnTop should be null', function () {
        expect(day7.getProgramsOnTop('xhth (57)')).toBeNull();
    });


});
