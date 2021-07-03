/**
 *
 * @param {string} str
 * @returns
 */
const decrypt = (str) => {
  return str
    .replace(/'\d+'/g, (m) => String.fromCharCode(m.replace(/'/g, "")))
    .split("")
    .reverse()
    .join("");
};

const Test = require("@codewars/test-compat");

describe("Decrypt This School Cipher", () => {
  it("test", () => {
    Test.assertEquals(decrypt("'101''99''105''108''65'"), "Alice");
    Test.assertEquals(decrypt("'98''111''66'"), "Bob");
    Test.assertEquals(decrypt("30 71"), "17 03");
  });
});
