let fs = require('fs');
const cont = fs.readFileSync('src/day2/input2a.txt', 'utf8');
//console.log(cont)



class CheckSum {
    setData(data) {
        this.data = data;
    }

    getNumberOfRows() {
        return this.data.split('\n').length;
    }

    getRow(numberOfRow) {
        return this.data.split('\n')[numberOfRow];
    }

    getNumberOfColumnsInRow(row) {
        return row.split(' ').length;
    }

    getColumnsInRow(row) {
        return row.match(/\S+/g) || []
    }

    getHighestNumberInRow(row) {
        let numbers = this.getColumnsInRow(row);

        let high = numbers.sort(sortNumber)[numbers.length - 1];
        return parseInt(high);
    }

    getLowestNumberInRow(row) {
        let numbers = this.getColumnsInRow(row);
        let low = numbers.sort(sortNumber)[0];
        return parseInt(low);
    }

    getDifference(row) {
        return this.getHighestNumberInRow(row) - this.getLowestNumberInRow(row);
    }
    evenlyDivisibleValues(row) {
        let numbers = this.getColumnsInRow(row);
        let c1 = 0;
        let c2 = 0;

        for (let n of numbers) {
            c1++;
            for (let m of numbers) {
                c2++;
                if (c1 !== c2 && n % m === 0) {
                    return parseInt(n / m);
                }
            }
            c2 = 0;
        }



    }

    getCheckSum() {
        let result = 0;
        for (let i = 0; i < this.getNumberOfRows(); i++) {
            let row = this.getRow(i);
            result += this.getDifference(row);
        }

        return result;
    }

    getCheckSum2() {
        let result = 0;
        for (let i = 0; i < this.getNumberOfRows(); i++) {
            let row = this.getRow(i);
            result += this.evenlyDivisibleValues(row);
        }

        return result;
    }
}

function sortNumber(a, b) {
    return a - b;
}

// const cs = new CheckSum();

// cs.setData(cont);
// var resulta = cs.getCheckSum();
// var resultb = cs.getCheckSum2();

// console.log('answer a: ' + resulta);
// console.log('answer b: ' + resultb);

module.exports = CheckSum;