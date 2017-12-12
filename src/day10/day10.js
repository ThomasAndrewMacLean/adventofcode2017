'use strict';

const fs = require('fs');
const inputPuzzle = fs.readFileSync('src/day10/input10.txt', 'utf8');

class Day10 {
    constructor(lengths, size) {
        this.currentPos = 0;
        this.skipSize = 0;
        this.lengths = lengths.split(',').map(l => Number(l));
        this.list = [...Array(size).keys()];
    }

    getSub(innn) {
        let begin = this.currentPos;
        let end = this.lengths[innn]; //- begin;
        let l = this.list.length;

        let out = Array.from(this.list);

        for (let n = 0; n < end; n++) {
            out[(n + this.currentPos) % out.length] = this.list[(this.currentPos + end - n - 1) % out.length];
        }

        this.list = out;
        console.log(this.list[0] + '  ' + this.list[1]);
        this.currentPos = (this.currentPos + end + this.skipSize) % l;
        this.skipSize++;
        return this.list;
    }

    exA() {
        for (let i = 0; i < this.lengths.length; i++) {
            this.getSub(i);
        }

        return this.list[0] * this.list[1];
    }


}


let day10 = new Day10(inputPuzzle, 256);

console.log(day10.exA());


module.exports = Day10;
