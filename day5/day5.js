var fs = require('fs');
const input = fs.readFileSync('day5/input5.txt', 'utf8');

let counter = 0;
class Day5 {



    getOut(arr) {
        let pos = 0;


        while (pos <= arr.length) {
            let temp = arr[pos];
            arr[pos]=arr[pos] + 1;
            pos += temp
            counter++
        }


        return counter;
    }

    getArray(input) {
        let arr = input.split('\n');
        let res = [];

        arr.forEach(e => {
            res.push(parseInt(e));
        });
        console.log(res)
        return res;
    }

}

let d = new Day5();

let inp =
    `0
3
0
1
-3`

let arr = d.getArray(inp)

d.getOut(arr)

module.exports = Day5;