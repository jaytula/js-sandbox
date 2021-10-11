/**
 * 
 * @param {(-1 | 1)[]} L 
 */
function inviteMoreWomen(L) {
  return L.reduce((acc, curr) => acc+curr, 0) > 0
}

const Test = require("@codewars/test-compat");

describe("Basic Tests", function () {
  it("It should works for basic tests.", function () {
    Test.assertEquals(inviteMoreWomen([1, -1, 1]), true);

    Test.assertEquals(inviteMoreWomen([1, 1, 1]), true);

    Test.assertEquals(inviteMoreWomen([-1, -1, -1]), false);

    Test.assertEquals(inviteMoreWomen([1, -1]), false);
  });
});
