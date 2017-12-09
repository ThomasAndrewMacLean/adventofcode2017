const fs = require('fs');
const inputPuzzle = fs.readFileSync('src/day7/input7.txt', 'utf8');


class Day7 {

    exA(inp) {
        const rows = inp.split('\n');
    }

    getRows(inp) {
        return inp.split('\n').map(i => i.trim());
    }

    getWeight(row) {
        return parseInt(row.split('(')[1].split(')')[0]);
    }

    getName(row) {
        return row.split('(')[0].trim();
    }

    getProgramsOnTop(row) {
        return row.split('->')[1] ? row.split('->')[1].split(',').map(i => i.trim()) : null;
    }
}

module.exports = Day7;