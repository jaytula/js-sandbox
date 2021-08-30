/**
 * 
 * @param {number} bank 
 * @param {number[]} outcomes 
 * @returns 
 */
function martingale(bank, outcomes)
{
  let balance = bank;
  let unit = 1;

  for(let outcome of outcomes) {
    balance -= unit * 100
    if(outcome === 1) {
      balance += 2 * unit * 100
      unit = 1
    } else {
      unit *= 2
    }
  }

  return balance;
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

let basic_tests = [
  [500, [], 500],
  [1000, [1, 1, 0, 0, 1], 1300],
  [0, [0, 0, 0, 0, 1, 0, 0,], -200],
  [5100, [1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0], 5600],
  [-500, [1, 1, 0, 1, 0, 1, 0], -200]
];

describe("Basic Tests", function(){
  let t = 0;
  for (let [bank, outcomes, final_bank] of basic_tests)
  {
    it(`basic test ${++t}`, function(){
      assert.strictEqual( martingale(bank, outcomes), final_bank);
    });
  }
});