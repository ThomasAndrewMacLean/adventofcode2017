var fs = require('fs');
const inputPuzzle = fs.readFileSync('day5/input5.txt', 'utf8');


class Day5 {



    getOut(arr) {
        let pos = 0;

        let counter = 0;

        while (pos < arr.length) {
            let temp = pos;
            pos += arr[pos];
            arr[temp] = arr[temp] + 1;
            counter++;
        }
        return counter;
    }


    getOutB(arr) {
        let pos = 0;
        let offset = 0;
        let counter = 0;
        while (pos < arr.length) {
            let temp = pos;
            pos += arr[pos];
            offset = arr[temp];
           if(offset >= 3){
            arr[temp] = arr[temp] - 1;
           }else{
               arr[temp] = arr[temp] + 1;
           }

            counter++;
        }
        return counter;
    }

    getArray(input) {
        let arr = input.split('\n');
        let res = [];

        arr.forEach(e => {
            res.push(parseInt(e));
        });

        return res;
    }

}

let inp =
`0
3
0
1
-3`
// let d = new Day5();

// let ar = d.getArray(inputPuzzle)

// let counter = d.getOutB(ar)
// console.log(counter)

module.exports = Day5;