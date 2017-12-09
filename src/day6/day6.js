let fs = require('fs');
const inputPuzzle = fs.readFileSync('src/day6/input6.txt', 'utf8');


class Day6 {

    distr(inp) {
        let arr = inp.match(/\S+/g);
        let numArr = [];
        let high = -1;
        let highPlace = -1;
        let counter = 0;
        arr.forEach(a => {
            numArr.push(parseInt(a));
            if (parseInt(a) > high) {
                high = a;
                highPlace = counter;
            }
            counter++;
        });
        numArr[highPlace] = 0;
        for (let i = 0; i < high; i++) {
            numArr[(highPlace + 1) % numArr.length] = numArr[(highPlace + 1) % (numArr.length)] + 1;
            highPlace++;
        }
        return numArr.join(' ');
    }

    exA(inp) {
        let res = 1;
        let arch = [];
        arch.push(inp.match(/\S+/g).join(' '));

        let temp = this.distr(inp);

        while (arch.indexOf(temp) === -1) {
            arch.push(temp);
            temp = this.distr(temp);
            res++;
        }
        return res;
    }

    exB(inp) {
        let res = 1;
        let arch = [];
        arch.push(inp.match(/\S+/g).join(' '));

        let temp = this.distr(inp);

        while (arch.indexOf(temp) === -1) {
            arch.push(temp);
            temp = this.distr(temp);
            res++;
        }
        return res - arch.indexOf(temp);
    }

}
// let d = new Day6();
// let ress = d.exB(inputPuzzle);
// console.log(ress);
module.exports = Day6;