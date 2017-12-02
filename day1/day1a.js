console.log('hellow world!!');
var fs = require('fs');
var cs = require('./CaptchaSolver.js');
const cont = fs.readFileSync('day1/input1a.txt', 'utf8');
// console.log(cont);

var cs = new cs(cont);

var antwoord = cs.loopOver2();
console.log(antwoord);