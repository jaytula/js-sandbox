/**
 * 
 * @param {string} x 
 * @param {number} y 
 * @returns 
 */
function present(x, y) {
  if (x == "badpresent") return "Take this back!";
  if (x == 'goodpresent') {
    return x.split('').map(ch => String.fromCharCode(ch.charCodeAt(0) + y)).join('')
  }
  if (x == 'crap' || x == 'empty') return x.split('').sort().join('')
  if (x == 'bang') return x.split('').reduce((acc, ch) => acc + (ch.charCodeAt(0) - y), 0)
  if (x == 'dog') return `pass out from excitement ${y} times`
}

const Test = require("@codewars/test-compat");

describe("Example tests", () => {
  test("test", () => {
    Test.assertEquals(present("badpresent", 3), "Take this back!");
    Test.assertEquals(present("goodpresent", 9), "pxxmy{n|nw}");
    Test.assertEquals(present("crap", 10), "acpr");
  });
});
