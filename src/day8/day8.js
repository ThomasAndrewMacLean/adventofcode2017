const fs = require('fs');
const inputPuzzle = fs.readFileSync('src/day8/input8.txt', 'utf8');


class Day8 {


    setData(reg) {
        this.reg = reg;

    };

    getVal(reg) {
        let val = this.reg[reg];

        return val ? val : 0;
    }
    incVal(reg, val) {
        this.reg[reg] = this.getVal(reg) + parseInt(val, 10);
    }
    decVal(reg, val) {
        this.reg[reg] = this.getVal(reg) - parseInt(val, 10);
    }

    doRow(row) {
        let temp = row.split(' ');


        let reg = temp[0];
        let incDec = temp[1];
        let amount = temp[2];
        let checkReg = temp[4];
        let oper = temp[5];
        let checkVal = temp[6];

        //  console.log(this.getVal(checkReg) + oper + checkVal);

        if (eval(this.getVal(checkReg) + oper + checkVal)) {
            this[incDec + 'Val'](reg, amount);
        }

        let tempH = this.getHighVal();

        if (tempH > this.high) {
            this.high = tempH;
        }

    }

    getHighVal() {
        let temp = 0;

        for (let r in this.reg) {
            if (this.reg[r] > temp) {
                temp = this.reg[r];
            }
        }

        return temp;
    }

    exA(inp) {
        // console.log(inp);
        let rows = inp.split('\n');

        for (let row of rows) {
            this.doRow(row.trim());
        }

        return this.getHighVal();
    }
    exB(inp) {
        // console.log(inp);
        let rows = inp.split('\n');

        for (let row of rows) {
            this.doRow(row.trim());
        }

        return this.high;
    }
}

// let inp = `b inc 5 if a > 1
// a inc 1 if b < 5
// c dec -10 if a >= 1
// c inc -20 if c == 10`;

// let day8 = new Day8();

// day8.reg = {};
// day8.high = 0;
// let te = day8.exB(inputPuzzle);

// console.log(te);

module.exports = Day8;