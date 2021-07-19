/**
 *
 * @param {string} str
 * @returns
 */
function nonsense(str) {
  return (
    str
      .replace(/(trex|raptor)/ig, "")
      .replace(/0/g, "a")
      .replace(/1/g, "e")
      .replace(/2/g, "i")
      .replace(/3/g, "o")
      .replace(/4/g, "u")
      .toLowerCase()
      .replace(/\bi\b/g, "I")
      .replace(/^\w/, ch => ch.toUpperCase()) +
    (str[str.length - 1] === "." ? "" : ".")
  );
}

const Test = require("@codewars/test-compat");

describe("A Letter from Your Niece", () => {
  it("test", () => {
    Test.assertEquals(nonsense("d2n3S04Rs 0r1 c33L."), "Dinosaurs are cool.");

    Test.assertEquals(nonsense("h1Ll3 Wtrex3raptorRLD"), "Hello world.");

    Test.assertEquals(
      nonsense("i think therefore i am"),
      "I think therefore I am."
    );
  });
});
