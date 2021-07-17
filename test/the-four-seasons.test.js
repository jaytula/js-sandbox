/**
 *
 * @param {number} d
 */
function fourSeasons(d) {
  if (d > 365) return "The year flew by!";

  /**
   *
   * @param {number} month
   * @param {number} day
   */
  const getDayOfYear = (month, day) => {
    const firstDayOfYear = new Date(2001, 0, 1);
    const date = new Date(2001, month - 1, day);
    return Math.round((date.getTime() - firstDayOfYear.getTime()) / 86400000)+1;
  };
  const firstDayOfSpring = getDayOfYear(3, 21);
  const firstDayOfSummer = getDayOfYear(6, 21);
  const firstDayOfAutumn = getDayOfYear(9, 21);
  const firstDayOfWinter = getDayOfYear(12, 21);

  if (d < firstDayOfSpring || d >= firstDayOfWinter) return "Winter Season";
  if (d >= firstDayOfAutumn) return "Autumn Season";
  if (d >= firstDayOfSummer) return "Summer Season";
  if (d >= firstDayOfSpring) return "Spring Season";
}

const { assert } = require("chai");

it("The Four Seasons", () => {
  assert.strictEqual(fourSeasons(236), "Summer Season");
  assert.strictEqual(fourSeasons(109), "Spring Season");
  assert.strictEqual(fourSeasons(312), "Autumn Season");
  assert.strictEqual(fourSeasons(1), "Winter Season");
  assert.strictEqual(fourSeasons(356), "Winter Season");
  assert.strictEqual(fourSeasons(400), "The year flew by!");
});
