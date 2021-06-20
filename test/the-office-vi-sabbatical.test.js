/**
 *
 * @param {string} s
 * @param {number} val
 * @param {number} happiness
 */
function sabb(s, val, happiness) {
  return val + happiness + s.replace(/[^sabticl]/g, "").length > 22
    ? "Sabbatical! Boom!"
    : "Back to your desk, boy.";
}

const Test = require("@codewars/test-compat");

describe("Example tests", () => {
  test("test", () => {
    Test.assertEquals(
      sabb("Can I have a sabbatical?", 5, 5),
      "Sabbatical! Boom!"
    );
    Test.assertEquals(
      sabb("Why are you shouting?", 7, 2),
      "Back to your desk, boy."
    );
    Test.assertEquals(
      sabb("What do you mean I cant learn to code??", 8, 9),
      "Sabbatical! Boom!"
    );
    Test.assertEquals(
      sabb("Please calm down", 9, 1),
      "Back to your desk, boy."
    );
  });
});
