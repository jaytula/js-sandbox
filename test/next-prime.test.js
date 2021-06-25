const is_prime = (n) => {
  for(let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    if(n % i !== 0) continue;
    return false;
  }
  return true;
}

function nextPrime(n){
  if(n <= 1) return 2;
  while(true) {
    n = n + 1
    if(is_prime(n)) return n;
  }
}

const Test = require('@codewars/test-compat');

describe("Default tests", function(){
  it("Some default test cases", function(){
    Test.assertEquals(is_prime(3), true);
    Test.assertEquals(is_prime(4), false);
    Test.assertEquals(is_prime(5), true);
    Test.assertEquals(is_prime(6), false);
    Test.assertEquals(is_prime(7), true);
    Test.assertEquals(is_prime(8), false);
    Test.assertEquals(is_prime(9), false);
    Test.assertEquals(is_prime(10), false);
    Test.assertEquals(is_prime(11), true);
    Test.assertEquals(is_prime(12), false);
    Test.assertEquals(is_prime(13), true);
    Test.assertEquals(is_prime(14), false);
    Test.assertEquals(is_prime(15), false);
    Test.assertEquals(is_prime(16), false);
    Test.assertEquals(is_prime(17), true);

    Test.assertEquals(nextPrime(0), 2);
    Test.assertEquals(nextPrime(1), 2);
    Test.assertEquals(nextPrime(2), 3);
    Test.assertEquals(nextPrime(3), 5);
    Test.assertEquals(nextPrime(5), 7);
    Test.assertEquals(nextPrime(11), 13);
    Test.assertEquals(nextPrime(17), 19);
    Test.assertEquals(nextPrime(2971), 2999);
  })
});