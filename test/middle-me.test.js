function middleMe(N, X, Y) {
  return N%2 ? X : Y.repeat(N/2) + X + Y.repeat(N/2);
}

const Test = require("@codewars/test-compat");

describe("Middle Me", () => {
  it("test", () => {
    Test.assertEquals(middleMe(18, "z", "#"), "#########z#########");
    Test.assertEquals(middleMe(19, "z", "#"), "z");
  });
});
