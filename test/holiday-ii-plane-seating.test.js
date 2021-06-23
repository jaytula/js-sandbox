/**
 *
 * @param {string} s
 */
function planeSeat(s) {
  const match = s.match(/^([0-9]+)([A-HK])$/);
  if (!match || +match[1] > 60 || +match[1] < 1)
    return "No Seat!!";

  const rowNum = +match[1];
  const columnLetter = match[2];

  const row = rowNum <= 20 ? "Front" : rowNum <= 40 ? "Middle" : "Back";
  const column = columnLetter.match(/[ABC]/)
    ? "Left"
    : columnLetter.match(/[DEF]/)
    ? "Middle"
    : "Right";

  return row + "-" + column;
}

const Test = require("@codewars/test-compat");

test("Example tests", () => {
  Test.assertEquals(planeSeat("2B"), "Front-Left");
  Test.assertEquals(planeSeat("20B"), "Front-Left");
  Test.assertEquals(planeSeat("58I"), "No Seat!!");
});
