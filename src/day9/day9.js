const fs = require('fs');
const inputPuzzle = fs.readFileSync('src/day9/input9.txt', 'utf8');

class Day9 {

    removeCancel(inp) {
        return inp.split(/!./g).join('');
    }
    removeGarbage(inp) {
        return inp.split(/<[^>]*>/g).join('');
    }
    getScore(inp) {
        let score = 0;
        let point = 0;

        for (let c of inp) {
            if (c === '{') {
                point++;
                score += point;
            }
            if (c === '}') {
                point--;
            }
        }
        return score;
    }
    countGarbage(inp) {
        let x = inp.match(/<[^>]*>/g);
        let counter = x.length;
        let y = x.join('');
        let z = y.length;

        return z - counter * 2;
    }


    exA(inp) {
        inp = this.removeCancel(inp);
        inp = this.removeGarbage(inp);
        return this.getScore(inp);
    }
    exB(inp) {
        inp = this.removeCancel(inp);
        return this.countGarbage(inp);
    }
}


// let d = new Day9();

// let res = d.exB(inputPuzzle);

// console.log(res);
module.exports = Day9;
