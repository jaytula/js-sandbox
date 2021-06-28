/**
 * 
 * @param {number} a 
 * @param {number} b 
 */
const sortFunction = (a, b) => {
  const binaryA = a.toString(2);
  const binaryB = b.toString(2);

  const onesForA = binaryA.replace(/0/g, '').length;
  const onesForB = binaryB.replace(/0/g, '').length;

  if(onesForA !== onesForB) {
    return onesForB - onesForA;
  }

  if(binaryA.length !== binaryB.length) {
    return binaryA.length - binaryB.length;
  }

  return a-b;
};

const sortByBinaryOnes = (list) => {
  list.sort(sortFunction);
  return list;
};

const Test = require("@codewars/test-compat");

test("Tests", function () {
  Test.assertDeepEquals(sortByBinaryOnes([1, 3]), [3, 1]);

  Test.assertDeepEquals(sortByBinaryOnes([1, 2, 3, 4]), [3, 1, 2, 4]);

  Test.assertDeepEquals(sortByBinaryOnes([1, 15, 7, 3, 5]), [15, 7, 3, 5, 1]);
  Test.assertDeepEquals(sortByBinaryOnes([ 1, 5, 21, 7, 44, 99, 50, 51, 49, 80, 33, 25 ]), [51, 99, 7, 21, 25, 44, 49, 50, 5, 33, 80, 1]);

});

