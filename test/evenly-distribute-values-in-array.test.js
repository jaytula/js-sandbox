/**
 *
 * @param {string[]} array
 */
const distributeEvenly = (array) => {
  const firstIteration = []
  let result = []
  for (let i = 0; i < array.length; i++) {
    if (!firstIteration.includes(array[i])) {
      firstIteration.push(array[i]);
      array[i] = null;
    }
  }

  result = result.concat(firstIteration)

  array = array.filter((el) => el !== null);
  while(array.length) {
    const current = firstIteration.filter(val => {
      const idx = array.indexOf(val)
      if(idx !== -1) {
        array[idx] = null;
        return true;
      }
      return false
    })

    result = result.concat(current);
    array = array.filter((el) => el !== null);
  }
  return result;
};

const { tsParameterProperty } = require("@babel/types");
const Test = require("@codewars/test-compat");

describe("Basic tests", () => {
  it("Testing for the correct order of values", () => {
    const arg = ["one", "one", "two", "two", "three", "three", "four", "one"];
    const res = ["one", "two", "three", "four", "one", "two", "three", "one"];
    Test.assertDeepEquals(distributeEvenly(arg), res);
  });

  it("Weird one", () => {
    const arg = [
      "g",
      "j",
      "c",
      "b",
      "j",
      "a",
      "c",
      "a",
      "d",
      "k",
      "e",
      "a",
      "f",
      "b",
      "e",
      "c",
      "d",
      "i",
      "b",
      "i",
      "f",
      "g",
      "f",
      "k",
      "g",
      "h",
      "b",
      "h",
      "g",
      "h",
    ];
    const res = [
      "g",
      "j",
      "c",
      "b",
      "a",
      "d",
      "k",
      "e",
      "f",
      "i",
      "h",

      "g",
      "j",
      "c",
      "b",
      "a",
      "d",
      "k",
      "e",
      "f",
      "i",
      "h",
      "g",
      "c",
      "b",
      "a",
      "f",
      "h",
      "g",
      "b",
    ];
    Test.assertDeepEquals(distributeEvenly(arg), res);
  });
});
