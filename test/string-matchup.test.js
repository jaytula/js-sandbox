/**
 *
 * @param {string[]} a
 * @param {string[]} b
 * @returns
 */
function solve(a, b) {
  const map = {};
  a.forEach((s) => {
    if (!(s in map)) map[s] = 0;
    map[s]++;
  });

  return b.map((key) => (key in map ? map[key] : 0));
}

const Test = require("@codewars/test-compat");

it("String matchup", function () {
  Test.assertDeepEquals(
    solve(["abc", "abc", "xyz", "abcd", "cde"], ["abc", "cde", "uap"]),
    [2, 1, 0]
  );
  Test.assertDeepEquals(
    solve(["abc", "xyz", "abc", "xyz", "cde"], ["abc", "cde", "xyz"]),
    [2, 1, 2]
  );
  Test.assertDeepEquals(
    solve(["quick", "brown", "fox", "is", "quick"], ["quick", "abc", "fox"]),
    [2, 0, 1]
  );
});
