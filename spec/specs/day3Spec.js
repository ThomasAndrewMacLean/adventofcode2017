describe('Day3', function () {
  // import CaptchaSolver from 'day1a'
  let StepCounter = require('../../src/day3/day3.js');

  let cs;
  let testData;
  let testData2;

  beforeEach(function () {
    cs = new StepCounter();
  });

  it('stepCounter should create', function () {
    expect(cs).toBeTruthy();
  });

  it('stepCounter example 1', function () {
    expect(cs.getDistance(1)).toBe(0);
  });
  it('stepCounter example 2', function () {
    expect(cs.getDistance(12)).toBe(3);
  });
  it('stepCounter example 3', function () {
    expect(cs.getDistance(23)).toBe(2);
  });
  it('stepCounter example 4', function () {
    expect(cs.getDistance(1024)).toBe(31);
  });

  it('answerB0', function () {
    expect(cs.getResultB(0)).toBe(1);
  });
  it('answerB1', function () {
    expect(cs.getResultB(1)).toBe(1);
  });
  it('answerB2', function () {
    expect(cs.getResultB(2)).toBe(2);
  });
  it('answerB3', function () {
    expect(cs.getResultB(3)).toBe(4);
  });
  it('answerB4', function () {
    expect(cs.getResultB(4)).toBe(5);
  });
  it('answerB5', function () {
    expect(cs.getResultB(5)).toBe(10);
  });
  it('answerB6', function () {
    expect(cs.getResultB(6)).toBe(11);
  });
  it('answerB7', function () {
    expect(cs.getResultB(7)).toBe(23);
  });
  it('answerB8', function () {
    expect(cs.getResultB(8)).toBe(25);
  });
  it('answerB9', function () {
    expect(cs.getResultB(9)).toBe(26);
  });
});