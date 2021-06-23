/**
 *
 * @param {string[]} arr
 */
function alan(arr) {
  return [
    "Rejection",
    "Disappointment",
    "Backstabbing Central",
    "Shattered Dreams Parkway",
  ].every((station) => arr.includes(station))
    ? "Smell my cheese you mother!"
    : "No, seriously, run. You will miss it.";
}

const Test = require("@codewars/test-compat");

test("Example tests", () => {
  Test.assertEquals(
    alan([
      "Norwich",
      "Rejection",
      "Disappointment",
      "Backstabbing Central",
      "Shattered Dreams Parkway",
      "London",
    ]),
    "Smell my cheese you mother!"
  );
  Test.assertEquals(
    alan(["London", "Norwich"]),
    "No, seriously, run. You will miss it."
  );
  Test.assertEquals(
    alan([
      "Norwich",
      "Tooting",
      "Bank",
      "Rejection",
      "Disappointment",
      "Backstabbing Central",
      "Exeter",
      "Shattered Dreams Parkway",
      "Belgium",
      "London",
    ]),
    "Smell my cheese you mother!"
  );
});
