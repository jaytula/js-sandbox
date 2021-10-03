/**
 * 
 * @param {string} date1 
 * @param {string} date2 
 */
var howManyYears = function (date1, date2) {
  const year1 = +date1.split('/')[0];
  const year2 = +date2.split('/')[0];

  return Math.abs(year1-year2)
};

const chai = require("chai");
const assert = chai.assert;
const _ = require("lodash");
chai.config.truncateThreshold = 0;

describe('Basic tests', () => {
  it("Tests", () => {
    assert.strictEqual(howManyYears('1997/10/10', '2015/10/10'), 18);
    assert.strictEqual(howManyYears('1990/10/10', '2015/10/10'), 25);
    assert.strictEqual(howManyYears('2015/10/10', '1990/10/10'), 25);
    assert.strictEqual(howManyYears('1992/10/24', '2015/10/24'), 23);
    assert.strictEqual(howManyYears('2018/10/10', '2000/10/10'), 18);
  })
});