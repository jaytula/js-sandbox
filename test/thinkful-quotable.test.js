/**
 * 
 * @param {string} name 
 * @param {string} quote 
 */
function quotable(name, quote){
  return `${name} said: "${quote}"`
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(quotable('Grae', 'Practice makes perfect'), 'Grae said: "Practice makes perfect"')
    assert.strictEqual(quotable('Dan', 'Get back to work, Grae'), 'Dan said: "Get back to work, Grae"')
    assert.strictEqual(quotable('Alex', 'Ruby is great fun'), 'Alex said: "Ruby is great fun"')
    assert.strictEqual(quotable('Bethany', 'Yes, way more fun than R'), 'Bethany said: "Yes, way more fun than R"')
    assert.strictEqual(quotable('Darrell', 'What the heck is this thing?'), 'Darrell said: "What the heck is this thing?"')
  })
})
