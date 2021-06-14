function heron() {
  const [a, b, c] = Array.from(arguments);
  const s = (a + b + c) / 2;
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  return area
}

const Test = require("@codewars/test-compat");

describe("Solution", function () {
  it("Basic tests", function () {
    Test.assertEquals(heron(3, 4, 5), 6);
  });
});
