/**
 * 
 * @param {(string | number)[])} l 
 */
function filter_list(l) {
    return l.filter(el => typeof el !== 'string');
}

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertDeepEquals(filter_list([1, 2, "a", "b"]), [1, 2]);
    Test.assertDeepEquals(filter_list([1, "a", "b", 0, 15]), [1, 0, 15]);
    Test.assertDeepEquals(
      filter_list([1, 2, "aasf", "1", "123", 123]),
      [1, 2, 123]
    );
  });
});
