/**
 *
 * @param {string} word
 */
const comfortable_word = (word) => {
  const letterGroups = ["qwertasdfgzxcvb", "yuiophjklnm"];
  const startGroup = letterGroups[0].includes(word[0]) ? 1 : 0;

  return word
    .slice(1)
    .split("")
    .every((letter, idx) =>
      letterGroups[(idx + startGroup) % 2].includes(letter)
    );
};

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("should return true for comfortable words", () => {
    let word = "yams";
    Test.assertEquals(
      comfortable_word(word),
      true,
      `${word} is a comfortable word!`
    );
  });

  it("should return false for uncomfortable words", () => {
    let word = "test";
    Test.assertEquals(
      comfortable_word(word),
      false,
      `${word} is NOT a comfortable word!`
    );
  });

  it("should return false for uncomfortable words", () => {
    let word = "odor";
    Test.assertEquals(
      comfortable_word(word),
      true,
      `${word} is NOT a comfortable word!`
    );
  });

  it("should return false for uncomfortable words", () => {
    let word = "their";
    Test.assertEquals(
      comfortable_word(word),
      true,
      `${word} is NOT a comfortable word!`
    );
  });
});
