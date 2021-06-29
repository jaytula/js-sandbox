/**
 *
 * @param {string[]} act
 * @param {string} s
 */
function testit(act, s) {
  let result = "";
  for (let i = 0; i < act.length; i++) {
    if (s[i] === "_") {
      result += act[i] === "run" ? "_" : "x";
    } else {
      result += act[i] === "jump" ? "|" : "/";
    }
  }
  return result;
}

const Test = require("@codewars/test-compat");

test("test", () => {
  Test.assertDeepEquals(
    testit(["run", "jump", "run", "jump", "run"], "_|_|_"),
    "_|_|_",
    ""
  );
  Test.assertDeepEquals(
    testit(["run", "jump", "run", "run", "run"], "_|_|_"),
    "_|_/_",
    ""
  );
  Test.assertDeepEquals(
    testit(["run", "run", "run", "run", "run"], "_|_|_"),
    "_/_/_",
    ""
  );
  Test.assertDeepEquals(
    testit(["jump", "jump", "jump", "jump", "jump"], "_|_|_"),
    "x|x|x",
    ""
  );
  Test.assertDeepEquals(
    testit(["jump", "run", "jump", "run", "jump"], "_|_|_"),
    "x/x/x",
    ""
  );
});
