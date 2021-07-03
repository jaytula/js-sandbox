/**
 *
 * @param {string[][]} arr
 */
function trim(arr) {
  return [
    arr[0].map(item => item.replace('J', '|')),
    arr[1].map(item => item.replace('J', '|')),
    arr[2].map(item => item.replace(/[|J]/, '...')),
  ];
}

const Test = require("@codewars/test-compat");

it("Example tests", () => {
  Test.assertDeepEquals(
    trim([
      ["J", "|"],
      ["J", "|"],
      ["...", "|"],
    ]),
    [
      ["|", "|"],
      ["|", "|"],
      ["...", "..."],
    ]
  );
  Test.assertDeepEquals(
    trim([
      ["J", "|", "J"],
      ["J", "|", "|"],
      ["...", "|", "J"],
    ]),
    [
      ["|", "|", "|"],
      ["|", "|", "|"],
      ["...", "...", "..."],
    ]
  );
  Test.assertDeepEquals(
    trim([
      ["J", "|", "J", "J"],
      ["J", "|", "|", "J"],
      ["...", "|", "J", "|"],
    ]),
    [
      ["|", "|", "|", "|"],
      ["|", "|", "|", "|"],
      ["...", "...", "...", "..."],
    ]
  );

  Test.assertDeepEquals(
    trim([
      ["...", "|", "J", "J", "...", "|", "J"],
      ["...", "...", "...", "|", "|", "J", "..."],
      ["...", "|", "...", "...", "...", "J", "|"],
    ]),
    [
      ["...", "|", "|", "|", "...", "|", "|"],
      ["...", "...", "...", "|", "|", "|", "..."],
      ["...", "...", "...", "...", "...", "...", "..."],
    ]
  );
});
