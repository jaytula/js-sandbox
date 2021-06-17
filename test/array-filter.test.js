Array.prototype.filter2 = function (func) {
  const result = []
  
  this.forEach(item => {
    if(func(item)) result.push(item);
  })

  return result;
};

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertDeepEquals(
      [1, 2, 3, 4].filter2((num) => {
        return num > 3;
      }),
      [4]
    );
  });
});
