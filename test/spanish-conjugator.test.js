/**
 *
 * @param {string} verb
 * @returns
 */
function conjugate(verb) {
  return {
    [verb]: [
      verb.slice(0, -2) + "o",
      verb.slice(0, -1).replace(/i$/, "e") + "s",
      verb.slice(0, -1).replace(/i$/, "e"),
      verb.slice(0, -1) + "mos",
      verb.slice(0, -1).replace(/([aie])$/, (ch) => {
        return { a: "ái", e: "éi", i: "í" }[ch];
      }) + "s",
      verb.slice(0, -1).replace(/i$/, "e") + "n",
    ],
  };
}

const Test = require("@codewars/test-compat");

var comer = {
  comer: ["como", "comes", "come", "comemos", "coméis", "comen"],
};
var vivir = {
  vivir: ["vivo", "vives", "vive", "vivimos", "vivís", "viven"],
};

var caminar = {
  caminar: ["camino", "caminas", "camina", "caminamos", "camináis", "caminan"],
};

describe("Spanish Conjugator", function () {
  it("Must work with infinitive suffix -er", function () {
    Test.assertDeepEquals(conjugate("comer"), comer);
  });
  it("Must work with infinitive suffix -ir", function () {
    Test.assertDeepEquals(conjugate("vivir"), vivir);
  });
  it("Must work with infinitive suffix -ar", function () {
    Test.assertDeepEquals(conjugate("caminar"), caminar);
  });
});
