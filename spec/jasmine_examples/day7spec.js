describe("Day7", function () {
    let Day7 = require('../../src/day7/day7.js')

    let demo =
        `pbga (66)
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
    cntj (57)`
    let day7;
    beforeEach(function () {
        day7 = new Day7();
    });


    it("day7 should create", function () {
        expect(day7).toBeTruthy();
    });
});