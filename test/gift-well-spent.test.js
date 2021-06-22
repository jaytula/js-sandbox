var buy = function (x, arr) {
  if (arr.length < 2) return null;

  const sortedArr = [...arr].sort((a, b) => a - b);

  for (let i = 0; i < sortedArr.length; i++) {
    for (let j = i + 1; j < sortedArr.length; j++) {
      if (sortedArr[i] + sortedArr[j] === x)
        return [arr.indexOf(sortedArr[i]), arr.indexOf(sortedArr[j])];
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
    // Test.assertDeepEquals(buy(2,[1,1]), [0,1]);
    // Test.assertDeepEquals(buy(3,[1,1]), null);
    Test.assertDeepEquals(buy(5, [5, 2, 3, 4, 5]), [1, 2]);
    // Test.assertDeepEquals(buy(5,[1,2,3,4,5]), [0,3]);
    // Test.assertDeepEquals(buy(5,[0,0,0,2,3]), [3,4]);
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
