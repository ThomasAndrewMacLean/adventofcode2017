const readline = require('readline');
const fs = require('fs');
var http = require('http');
// var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
// var app = express();




const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


console.log('only use number of day');

rl.question('Set to day :', (dayNumber) => {

  if (isNaN(dayNumber)) {
    console.log('\x1b[36m%s\x1b[0m', 'geen nummer');
  }

  const dir = './day' + dayNumber;
  const file1 = './day' + dayNumber + '/day' + dayNumber + '.js';
  const file2 = './day' + dayNumber + '/day' + dayNumber + 'a.txt';
  const file3 = './day' + dayNumber + '/day' + dayNumber + 'b.txt';
  const file4 = './day' + dayNumber + '/input' + dayNumber + '.txt';
  const file5 = './spec/jasmine_examples/day' + dayNumber + 'spec.js';

  const files = [file1, file2, file3, file4, file5];

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  for (let file of files) {
    if (!fs.existsSync(file)) {
      fs.openSync(file, 'w');
    }
  }

  let launchTemplate = fs.readFileSync('./.vscode/launchtemplate.txt', 'utf8');

  launchTemplate = launchTemplate.replace('[[replaceMe]]',
    '"program": "${workspaceFolder}/day' +
    dayNumber + '/day' + dayNumber + '.js"')

  fs.writeFile('./.vscode/launch.json', launchTemplate)



  url = 'https://adventofcode.com/2017/day/' + dayNumber;
  request(url, function (error, response, html) {
    if (!error) {
      var $ = cheerio.load(html);
      $('.day-desc').filter(function () {
        var data = $(this);
        ex = data.children().text();
        fs.writeFile(file2, ex)
      })
    }
  })
  rl.close();
});