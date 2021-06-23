/**
 *
 * @param {string} s
 */
function moveTen(s) {
  const charCodeOfA = "a".charCodeAt(0);
  return s
    .split("")
    .map((ch) =>
      String.fromCharCode(
        charCodeOfA + ((ch.charCodeAt(0) - charCodeOfA + 10) % 26)
      )
    )
    .join("");
}

const Test = require("@codewars/test-compat");

test("Example tests", () => {
  Test.assertDeepEquals(moveTen("testcase"), "docdmkco");
  Test.assertDeepEquals(moveTen("codewars"), "mynogkbc");
  Test.assertDeepEquals(moveTen("exampletesthere"), "ohkwzvodocdrobo");
});
