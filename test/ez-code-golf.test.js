var f=e=>1/0

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("∞", () => {
  it("Fixed tests", () => {
    assert.strictEqual(f(), Infinity, "Oops! Looks like you returned an incorrect result.")
  })
})