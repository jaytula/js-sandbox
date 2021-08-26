/**
 *
 * @param {string[]} collection
 * @param {string} term
 * @param {boolean} caseSensitive
 * @param {boolean} exactMatch
 * @returns
 */
function buildInvertedIndex(collection, term, caseSensitive, exactMatch) {
  const rgx = new RegExp(
    exactMatch ? `\\b${term}\\b` : term,
    caseSensitive ? "" : "i"
  );
  return collection.reduce((acc, curr, idx) => {
    if (curr.match(rgx)) {
      return acc.concat(idx + 1);
    }
    return acc;
  }, []);
}

const Test = require("@codewars/test-compat");

describe("Fixed Tests", function () {
  it("case sensitive", function () {
    Test.assertDeepEquals(
      buildInvertedIndex(
        ["hello there", "general kenobi"],
        "hello",
        true,
        false
      ),
      [1]
    );
    Test.assertDeepEquals(
      buildInvertedIndex(
        ["Hello there", "general kenobi"],
        "hello",
        true,
        false
      ),
      []
    );
    Test.assertDeepEquals(
      buildInvertedIndex(
        ["hello there", "general kenobi"],
        "kenobi",
        true,
        false
      ),
      [2]
    );
    Test.assertDeepEquals(
      buildInvertedIndex(
        ["hello there", "gEnErAl kenobi"],
        "general",
        true,
        false
      ),
      []
    );
    Test.assertDeepEquals(
      buildInvertedIndex(
        [
          "Lorem Ipsum Dolor",
          "Hodor Dolor Hodor",
          "Dolormiten are not a thing",
        ],
        "Dolor",
        true,
        false
      ),
      [1, 2, 3]
    );
    Test.assertDeepEquals(
      buildInvertedIndex(
        [
          "Lorem Ipsum Dolor",
          "Hodor Dolor Hodor",
          "Dolormiten are not a thing",
        ],
        "holor",
        true,
        false
      ),
      []
    );
  });

  it("not case sensitive", function () {
    Test.assertDeepEquals(
      buildInvertedIndex(
        ["hello there", "general kenobi"],
        "Hello",
        false,
        false
      ),
      [1]
    );
    Test.assertDeepEquals(
      buildInvertedIndex(
        ["Rumpel Dumpel", "Holger", "Quadrumpel"],
        "UmPeL",
        false,
        false
      ),
      [1, 3]
    );
  });

  it("exact match", function () {
    Test.assertDeepEquals(
      buildInvertedIndex(
        ["!hellos there", "general kenobi"],
        "Hello",
        false,
        true
      ),
      []
    );
    Test.assertDeepEquals(
      buildInvertedIndex(
        ["hello there", "general kenobi"],
        "Hell",
        false,
        true
      ),
      []
    );
    Test.assertDeepEquals(
      buildInvertedIndex(
        ["hello. there", "general kenobi"],
        "hello",
        true,
        true
      ),
      [1]
    );
    Test.assertDeepEquals(
      buildInvertedIndex(
        ["Im Wald gibts nicht viel zu tun", "Oooh du schoener Westerwald"],
        "wald",
        false,
        true
      ),
      [1]
    );
  });

  it("not exact match", function () {
    Test.assertDeepEquals(
      buildInvertedIndex(
        ["hellos there", "general kenobi"],
        "Hello",
        false,
        false
      ),
      [1]
    );
    Test.assertDeepEquals(
      buildInvertedIndex(
        ["hello there", "general kenobi"],
        "Hello",
        true,
        false
      ),
      []
    );
    Test.assertDeepEquals(
      buildInvertedIndex(
        ["hello there", "general kenobi"],
        "Hell",
        false,
        false
      ),
      [1]
    );
  });
});
