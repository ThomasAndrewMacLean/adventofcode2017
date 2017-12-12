const fs = require('fs');
const inputPuzzle = fs.readFileSync('src/day7/input7.txt', 'utf8');

let deleteArr = [];

class Day7 {

    exA(inp) {
        let program = this.getProgram(inp);

        return Object.keys(program)[0];
    }
    exB(inp) {
        let program = this.getProgram(inp);
        let weights = this.getObjectWithAllWeights(inp);


        this.replaceWeight(program, weights);
        this.checkWeight(program);
        //console.log(program);

    }
    replaceWeight(tree, weights) {
        if (this.hasChildren(tree)) {
            for (let c in tree) {
                if (tree[c]) {

                    this.replaceWeight(tree[c], weights);
                }
            }
        }
        for (let tak in tree) {
            let gew = weights[tak];
            let nieuw = tak + '-' + gew;

            tree[nieuw] = tree[tak];
            delete tree[tak];
        }
    }
    checkWeight(tree) {
        if (this.hasChildren(tree)) {
            for (let c in tree) {
                if (tree[c]) {

                    this.checkWeight(tree[c]);
                }
            }
        }
        //  for (let tak in tree) {
     //   console.log(tree);
        for (let tak in tree) {
         //   console.log(tak);
          //  console.log(tree[tak]);
        }
        //  }
    }
    hasChildren(node) {
        //  if(node){
        let ob = Object.keys(node);

        return node[Object.keys(node)[0]] !== null;

        //}
    }
    replaceInChildren(tree, sleutel, obj, counter) {
        for (let tak in tree) {

            if (tree[tak]) {
                counter++;
                this.replaceInChildren(tree[tak], sleutel, obj, counter);
            }
            if (tak === sleutel) {
                if (tree[tak] !== obj) {
                    deleteArr.push(tak);
                }
                tree[tak] = obj;
                //   return;
            }
        }
    }
    getRows(inp) {
        return inp.split('\n').map(i => i.trim());
    }
    getWeight(row) {
        return parseInt(row.split('(')[1].split(')')[0], 10);
    }
    getName(row) {
        return row.split('(')[0].trim();
    }
    getProgramsOnTop(row) {
        return row.split('->')[1] ? row.split('->')[1].split(',').map(i => i.trim()) : null;
    }
    getProgram(inp) {
        const rows = this.getRows(inp);
        let temp = {};
        let tree = {};
        let res = '';

        for (let row of rows) {
            let name = this.getName(row);
            let progs = this.getProgramsOnTop(row);
            let objProp = null;

            if (progs) {
                objProp = {};
            }
            for (let p in progs) {
                objProp[progs[p]] = null;
            }

            temp[name] = objProp;
        }

        for (let t in temp) {
            let o = temp[t];

            if (!o) {
                delete temp[t];
            }
            let counter = 0;

            this.replaceInChildren(temp, t, o, counter);

        }

        for (let d of deleteArr) {
            delete temp[d];
        }
        deleteArr = [];
        return temp;
    }
    getObjectWithAllWeights(inp) {
        let weights = {};
        const rows = this.getRows(inp);

        for (let row of rows) {
            let name = this.getName(row);
            let weight = this.getWeight(row);

            weights[name] = weight;
        }
        return weights;
    }
}

let d = new Day7();
let demo =
    `   pbga (66)
    xhth (57)
    ebii (61)
    havc (66)
    ktlj (57)
    fwft (72) -> ktlj, cntj, xhth
    qoyq (66)
    padx (45) -> pbga, havc, qoyq
    tknk (41) -> ugml, padx, fwft
    jptl (61)
    ugml (68) -> gyxo, ebii, jptl
    gyxo (61)
    cntj (57)`;

let result = d.exB(inputPuzzle);

//console.log(result);

module.exports = Day7;
