/**
 *
 * @param {string} city
 */
function getStrings(city) {
  city = city.replace(/[^a-z]/ig, '').toLowerCase();
  let letterWeight = 0;
  /**
   * @type {{[key: string]: {count: number, weight: number}}}
   */
  const letters = {};

  for (let ch of city) {
    if (!(ch in letters)) letters[ch] = { count: 0, weight: letterWeight++ };
    letters[ch].count++;
  }

  return Object.entries(letters)
    .map(([key, value]) => `${key}:${"*".repeat(value.count)}`)
    .join(",");
}

const assert = require("assert");

describe("Interview Question (easy)", function () {
  it("Tests", function () {
    assert.strictEqual(getStrings("Chicago"), "c:**,h:*,i:*,a:*,g:*,o:*");
    assert.strictEqual(getStrings("Bangkok"), "b:*,a:*,n:*,g:*,k:**,o:*");
    assert.strictEqual(getStrings("Las Vegas"), "l:*,a:**,s:**,v:*,e:*,g:*");
  });
});
