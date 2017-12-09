describe('Day1', function () {
  // import CaptchaSolver from 'day1a'
  let CaptchaSolver = require('../../src/day1/CaptchaSolver.js');

  let captchaSolver;

  beforeEach(function () {
    captchaSolver = new CaptchaSolver('123456');
  });

  it('input from constructor should set private const', function () {
    expect(captchaSolver.inputString).toBe('123456');
  });

  it('inputstring can be altered', function () {
    captchaSolver.inputString = 'thomas';
    expect(captchaSolver.inputString).not.toBe('123456');
  });

  it('length function should give length of inputstring', function () {
    expect(captchaSolver.lengteIs()).toBe(6);
  });

  it('loopover should go over each char of string', function () {
    captchaSolver.loopOver();
    expect(captchaSolver.lengteIs()).toBe(captchaSolver.counter);
  });

  it('example1', function () {
    captchaSolver.inputString = '1122';
    expect(captchaSolver.loopOver()).toBe(3);
  });

  it('example2', function () {
    captchaSolver.inputString = '1111';
    expect(captchaSolver.loopOver()).toBe(4);
  });

  it('example3', function () {
    captchaSolver.inputString = '1234';
    expect(captchaSolver.loopOver()).toBe(0);
  });

  it('example4', function () {
    captchaSolver.inputString = '91212129';
    expect(captchaSolver.loopOver()).toBe(9);
  });

  it('example1B', function () {
    captchaSolver.inputString = '1212';
    expect(captchaSolver.loopOver2()).toBe(6);
  });

  it('example2B', function () {
    captchaSolver.inputString = '1221';
    expect(captchaSolver.loopOver2()).toBe(0);
  });

  it('example3B', function () {
    captchaSolver.inputString = '123425';
    expect(captchaSolver.loopOver2()).toBe(4);
  });

  it('example4B', function () {
    captchaSolver.inputString = '123123';
    expect(captchaSolver.loopOver2()).toBe(12);
  });
  it('example5B', function () {
    captchaSolver.inputString = '12131415';
    expect(captchaSolver.loopOver2()).toBe(4);
  });
});