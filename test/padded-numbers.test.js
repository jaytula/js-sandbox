/**
 * 
 * @param {number} value 
 */
function solution(value) {
  const valueAsString = value.toString();
  return 'Value is ' + '0'.repeat(5 - valueAsString.length) + valueAsString;
}

const { assert } = require("chai");

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(solution(5), "Value is 00005");
    assert.strictEqual(solution(1204), "Value is 01204");
    assert.strictEqual(solution(109), "Value is 00109");
    assert.strictEqual(solution(0), "Value is 00000");
  });
});
