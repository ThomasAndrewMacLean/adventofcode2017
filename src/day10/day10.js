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

        // https://github.com/markheath/
        let out = Array.from(this.list);

        for (let n = 0; n < end; n++) {
            out[(n + this.currentPos) % out.length] = this.list[(this.currentPos + end - n - 1) % out.length];
        }

        this.list = out;

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
    exB() {
        for (let c = 0; c < 64; c++) {
            for (let i = 0; i < this.lengths.length; i++) {
                this.getSub(i);
            }
        }
        let hash = '';

        // https://github.com/markheath/
        for (let b of batch(this.list, 16)) {
            let xor = b.reduce((a, b) => a ^ b);

            hash += ('0' + xor.toString(16)).slice(-2);
        }

        return hash;
    }

    convert(inp) {
        let res = '';

        for (let i of inp) {
            res += i.charCodeAt(0) + ',';
        }
        return res;
    }

    asciLenghts() {
        return this.convert(inputPuzzle) + '17,31,73,47,23';
    }

}

// https://github.com/markheath/
function* batch(seq, size) {
    let b = [];

    for (let el of seq) {
        b.push(el);
        if (b.length === size) {
            yield b;
            b = [];
        }
    }
    if (b.length > 0) {
        yield b;
    };
}


let day10 = new Day10(inputPuzzle, 256);
let a = day10.asciLenghts();

day10 = new Day10(a, 256);
console.log(day10.exB());


module.exports = Day10;
