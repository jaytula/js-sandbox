/**
 * 
 * @param {{[key: string]: string[]}} suspectInfo 
 * @param {string[]} dead 
 */
function killer(suspectInfo, dead) {
  for(let [name, seen] of Object.entries(suspectInfo)) {
    if(dead.every(person => seen.includes(person))) return name;
  }
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Killer", function() {
  describe("Basic tests", function() {
    it("The killer is James!", function() {
      assert.deepEqual(killer({'James': ['Jacob', 'Bill', 'Lucas'], 'Johnny': ['David', 'Kyle', 'Lucas'], 'Peter': ['Lucy', 'Kyle']}, ['Lucas', 'Bill']), 'James');
    });
  
    it("The killer is Megan!", function() {
      assert.deepEqual(killer({'Brad': [], 'Megan': ['Ben', 'Kevin'], 'Finn': []}, ['Ben']), 'Megan');
    });
  });
});