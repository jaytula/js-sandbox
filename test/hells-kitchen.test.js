/**
 *
 * @param {string} s
 */
function gordon(s) {
  return s
    .split(" ")
    .map(
      (word) =>
        word.toUpperCase().replace(/A/g, "@").replace(/[EIOU]/g, "*") + "!!!!"
    )
    .join(" ");
}

const Test = require("@codewars/test-compat");

describe("Example tests", () => {
  it("test", () => {
    Test.assertEquals(
      gordon("What feck damn cake"),
      "WH@T!!!! F*CK!!!! D@MN!!!! C@K*!!!!"
    );
    Test.assertEquals(
      gordon("are you stu pid"),
      "@R*!!!! Y**!!!! ST*!!!! P*D!!!!"
    );
    Test.assertEquals(gordon("i am a chef"), "*!!!! @M!!!! @!!!! CH*F!!!!");
  });
});
