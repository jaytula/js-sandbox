/**
 *
 * @param {number[]} arr
 */
function menFromBoys(arr) {
  const men = new Set();
  const boys = new Set();

  arr.forEach((person) => {
    if (Math.abs(person) % 2 === 0) {
      men.add(person);
    } else {
      boys.add(person);
    }
  });

  const menArr = Array.from(men).sort((a, b) => a - b);
  const boysArr = Array.from(boys).sort((a, b) => b - a);

  return menArr.concat(boysArr);
}

const Test = require("@codewars/test-compat");

it("Sort Out The Men From Boys", () => {
  Test.assertDeepEquals(menFromBoys([7, 3, 14, 17]), [14, 17, 7, 3]);
  Test.assertDeepEquals(menFromBoys([2, 43, 95, 90, 37]), [2, 90, 95, 43, 37]);
  Test.assertDeepEquals(
    menFromBoys([20, 33, 50, 34, 43, 46]),
    [20, 34, 46, 50, 43, 33]
  );
  Test.assertDeepEquals(
    menFromBoys([82, 91, 72, 76, 76, 100, 85]),
    [72, 76, 82, 100, 91, 85]
  );
  Test.assertDeepEquals(
    menFromBoys([2, 15, 17, 15, 2, 10, 10, 17, 1, 1]),
    [2, 10, 17, 15, 1]
  );
  Test.assertDeepEquals(
    menFromBoys([-32, -39, -35, -41]),
    [-32, -35, -39, -41]
  );
  Test.assertDeepEquals(
    menFromBoys([-64, -71, -63, -66, -65]),
    [-66, -64, -63, -65, -71]
  );
  Test.assertDeepEquals(
    menFromBoys([-94, -99, -100, -99, -96, -99]),
    [-100, -96, -94, -99]
  );
  Test.assertDeepEquals(
    menFromBoys([-53, -26, -53, -27, -49, -51, -14]),
    [-26, -14, -27, -49, -51, -53]
  );
  Test.assertDeepEquals(
    menFromBoys([-17, -45, -15, -33, -85, -56, -86, -30]),
    [-86, -56, -30, -15, -17, -33, -45, -85]
  );
  Test.assertDeepEquals(menFromBoys([12, 89, -38, -78]), [-78, -38, 12, 89]);
  Test.assertDeepEquals(
    menFromBoys([2, -43, 95, -90, 37]),
    [-90, 2, 95, 37, -43]
  );
  Test.assertDeepEquals(
    menFromBoys([82, -61, -87, -12, 21, 1]),
    [-12, 82, 21, 1, -61, -87]
  );
  Test.assertDeepEquals(
    menFromBoys([63, -57, 76, -85, 88, 2, -28]),
    [-28, 2, 76, 88, 63, -57, -85]
  );
  Test.assertDeepEquals(
    menFromBoys([49, 818, -282, 900, 928, 281, -282, -1]),
    [-282, 818, 900, 928, 281, 49, -1]
  );
});
