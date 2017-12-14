//@ts-check
'use strict';

const fs = require('fs');
const inputPuzzle = fs.readFileSync('src/day11/input11.txt', 'utf8');

class Day11 {
    constructor() {
        this.counter = [0, 0, 0];
    }

    getDistance() {
        console.log(this.counter);
        return Math.max(...this.counter.map(c => Math.abs(c)));
    }

    doStep(step) {
        switch (step) {
        case 'n':
            this.counter[0]++;
            break;
        case 'ne':
            this.counter[1]++;
            break;
        case 'se':
            this.counter[2]++;
            break;
        case 's':
            this.counter[0]--;
            break;
        case 'sw':
            this.counter[1]--;
            break;
        case 'nw':
            this.counter[2]--;
            break;

        default:
            break;
        }

    }
    exA(inp) {
        let steps = inp.split(',');

        for (let step of steps) {
            this.doStep(step);
        }

        return this.getDistance();
    }
}

const d = new Day11();
const res = d.exA(inputPuzzle);

console.log(res);
module.exports = Day11;
