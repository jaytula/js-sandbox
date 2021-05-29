/**
 * 
 * @param {number} n 
 * @returns 
 */
function powersOfTwo(n){
  return Array(n+1).fill(0).map((_, idx) => 2**idx)
}

test("Example Tests", function(){
  expect(powersOfTwo(0)).toEqual([1])
  expect(powersOfTwo(1)).toEqual([1, 2])
  expect(powersOfTwo(4)).toEqual([1, 2, 4, 8, 16])
})