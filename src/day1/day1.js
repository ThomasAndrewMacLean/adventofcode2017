var fs = require('fs');
var cs = require('./CaptchaSolver.js');
const cont = fs.readFileSync('src/day1/input1a.txt', 'utf8');

// var cs = new cs(cont);

// var answer1a = cs.loopOver();
// var answer1b = cs.loopOver2();
// console.log('1a: ' + answer1a);
// console.log('1b: ' + answer1b);