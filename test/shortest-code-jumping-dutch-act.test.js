/**
 * 
 * @param {number} n 
 * @returns 
 */
const sc = n => n<2 ? '' : ("Aa~ ".repeat(n-1) + 'Pa! ' + (n<7 ? "Aa! " : "")).trim()

const Test = require('@codewars/test-compat');

describe("Shortest Code : Jumping Dutch act", () => {
  it("test", () => {
Test.assertDeepEquals(sc(2), "Aa~ Pa! Aa!", "good luck!");  
Test.assertDeepEquals(sc(6), "Aa~ Aa~ Aa~ Aa~ Aa~ Pa! Aa!", "good luck!"); 
Test.assertDeepEquals(sc(7), "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!", "good luck!"); 
Test.assertDeepEquals(sc(10), "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!", "good luck!"); 
Test.assertDeepEquals(sc(1), "", "good luck!"); 
Test.assertDeepEquals(sc(-1), "", "good luck!"); 
  });
});
