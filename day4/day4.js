var fs = require('fs');
const input = fs.readFileSync('day4/input4.txt', 'utf8');

class Validizer {

    check(inputStr) {
        let a = inputStr.match(/\b(\w+)\b(?=.*\b\1\b)/g);

        return a === null;
    }

    checkB(inputStr) {
        let words = inputStr.split(' ');
        let newWords = [];
        words.map(word => {
            word = word.split('').sort().join('');
            newWords.push(word);
        });


        return (this.check(newWords.join(' ')));
    }
}

let v = new Validizer();
let counterA = 0;
let counterB = 0;
let lines = input.split('\n');
lines.forEach(l => {
    if (v.check(l)) {
        counterA++;
    }
});

lines.forEach(l => {
    if (v.checkB(l)) {
        counterB++;
    }
});


//console.log(counterA);
//console.log(counterB);


module.exports = Validizer;