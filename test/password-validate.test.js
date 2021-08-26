/**
 *
 * @param {string} username
 * @param {string} password
 */
function validate(username, password) {
  if (password === "" || username === "") return false;

  const [shorter, longer] = [username, password].sort(
    (a, b) => a.length - b.length
  );
  const commonLength = Math.ceil(shorter.length / 2);

  for (let i = 0; i < shorter.length-commonLength+1; i++) {
    if (longer.includes(shorter.slice(i, i + commonLength))) {
      return false;
    }
  }
  return true;
}

const Test = require("@codewars/test-compat");

it("example test cases", () => {
  Test.assertEquals(validate("", ""), false)
  Test.assertEquals(validate("username", "myname"), false)
  Test.assertEquals(validate("sword", "password" ), false)
  Test.assertEquals(validate("qwertyuiop", "asdfghjkl"), true)
  Test.assertEquals(validate("MASH", "M*A*S*H"), true)
  Test.assertEquals(validate("asdfghjkl", "lkjhgfdsa"), true)
  Test.assertEquals(validate("p", "password"), false)
  Test.assertEquals(validate("a", "a"), false)
  Test.assertEquals(validate("a", "b"), true)
  Test.assertEquals(validate("A", "a"), true);
});
