/**
 * 
 * @param {number} x 
 * @param {number[]} arr 
 * @returns 
 */
function buy (x, arr) {
  if (arr.length < 2) return null;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
      if(arr[i] + arr[j] === x) return [i, j];
    }
  }

  return null;
};

const Test = require("@codewars/test-compat");

describe("buy", function () {
  var randomInt = function () {
    return Math.round(Math.random() * 100);
  };
  var randomArray = function (n) {
    var i,
      r = [];
    for (i = 0; i < n; ++i) r.push(randomInt());
    return r;
  };
  it("should return Nothing on an empty list", function () {
    Test.assertEquals(buy(randomInt(), []), null);
  });
  it("should return Nothing on a short list", function () {
    Test.assertEquals(buy(randomInt(), [randomInt()]), null);
  });
  it("should work for the examples", function () {
    Test.assertDeepEquals(buy(2, [1, 1]), [0, 1]);
    Test.assertDeepEquals(buy(3, [1, 1]), null);
    Test.assertDeepEquals(buy(5, [5, 2, 3, 4, 5]), [1, 2]);
    Test.assertDeepEquals(buy(5, [1, 2, 3, 4, 5]), [0, 3]);
    Test.assertDeepEquals(buy(5, [0, 0, 0, 2, 3]), [3, 4]);
    Test.assertDeepEquals(
      buy(89, [
        51,
        38,
        68,
        55,
        63,
        34,
        45,
        71,
        4,
        64,
        39,
        97,
        38,
        7,
        0,
        71,
        51,
        2,
        88,
        53,
        58,
        51,
        92,
        2,
        12,
        64,
        96,
        28,
        48,
        54,
        21,
        70,
        17,
        8,
        47,
        73,
        58,
        97,
        17,
        1,
        4,
        58,
        61,
        38,
        16,
        23,
        55,
        56,
        77,
        29,
        26,
        8,
        46,
        26,
        90,
        62,
        17
      ]),
      [0, 1]
    );
  });
  it("should return the correct indices if there are any", function () {
    var arr, x, r, i;
    for (i = 0; i < 20; ++i) {
      (arr = randomArray(randomInt())),
        (x = randomInt()),
        (r = buy(x, arr.concat([])));
      if (r !== null) Test.assertEquals(x, arr[r[0]] + arr[r[1]]);
    }
  });
});
