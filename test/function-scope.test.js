const add = n => {
    return function(m) {
        return n + m;
    }
}

const Test = require('@codewars/test-compat');

describe("Tests", () => {
    it("test", () => {
  Test.assertEquals(add(2)(5), 7,    'Should return the addition of these invocations!')
  Test.assertEquals(add(14)(25), 39, 'Should return the addition of these invocations!')
    });
  });
  