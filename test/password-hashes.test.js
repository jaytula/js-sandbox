/**
 * 
 * @param {string} str 
 */
const crypto = require('crypto');

function passHash(str) {
  const hasher = crypto.createHash('md5');
  return hasher.update(str).digest('hex')
}

const Test = require('@codewars/test-compat')

describe("Tests", () => {
  it("test", () => {
var tests = [
  ['password', '5f4dcc3b5aa765d61d8327deb882cf99'],
  ['abc123', 'e99a18c428cb38d5f260853678922e03']
]

for (var i = 0; i < tests.length; i++) {
  Test.assertEquals(passHash(tests[i][0]), tests[i][1])
}
  });
});
