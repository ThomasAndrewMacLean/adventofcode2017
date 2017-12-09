class StepCounter {


    getDistance(number) {
        let result = 0;
        let counter = 1;
        let str = '';
        let arr = [];
        let size = 1;
        let x = 0;
        let y = 0;
        let dx = 0;
        let dy = -1;

        while (counter < number) {

            if ((size / 2 < x <= size / 2) && (size / 2 < y <= size / 2)) {
                str += ' (' + x + ', ' + y + '), ';
                arr.push({
                    x,
                    y
                })
            }
            if (x == y || (x < 0 && x == -y) || (x > 0 && x == 1 - y)) {
                let t = dx;
                dx = -dy;
                dy = t;
                size += 2;
            }
            x += dx;
            y += dy;
            counter++;
        }
        result = Math.abs(x) + Math.abs(y);
        //  1 2 11 28


        return result;
    }


    getResultB(input) {
        let result = 0;
        let counter = 0;
        let str = '';
        let size = 1;
        let x = 0;
        let y = 0;
        let dx = 0;
        let dy = -1;

        let grid = {
            '(0, 0)': 1
        };


        while (counter <= input) {

            if ((size / 2 < x <= size / 2) && (size / 2 < y <= size / 2)) {
                str = '(' + x + ', ' + y + ')';
                let tot = 0;
                for (let i = -1; i <= 1; i++) {
                    for (let j = -1; j <= 1; j++) {
                        let temp = '(' + (x + i) + ', ' + (y + j) + ')';
                        const val = grid[temp]
                        if (val) {
                            tot += val;
                        }
                    }
                }

                grid[str] = tot;
            }
            if (x == y || (x < 0 && x == -y) || (x > 0 && x == 1 - y)) {
                let t = dx;
                dx = -dy;
                dy = t;
                size += 2;
            }
            x += dx;
            y += dy;
            counter++;
        }
        result = grid[str]
        return result;
    }
}


// const sc = new StepCounter();
// var answerA = sc.getDistance(368078);
// console.log('answer a: ' + answerA)


// let answerB = 0;
// let countert = 1;
// while (answerB < 368078) {
//     answerB = sc.getResultB(countert);
//     countert++;
// }

// console.log('answer b: ' + answerB);
module.exports = StepCounter;