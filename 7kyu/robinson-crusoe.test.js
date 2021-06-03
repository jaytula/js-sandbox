/**
 * 
 * @param {number} n 
 * @param {number} d 
 * @param {number} ang 
 * @param {number} distmult 
 * @param {number} angmult 
 * @returns 
 */
function crusoe(n, d, ang, distmult, angmult) {
  let x = 0
  let y = 0
  for(let i = 0; i < n; i++) {
    x += d * Math.cos(ang * Math.PI / 180)
    y += d * Math.sin(ang * Math.PI / 180)
    d *= distmult
    ang *= angmult
  }

  return [x, y]
}

describe("crusoe",function() {

  function assert_fuzzy(n, d, ang, distmult, angmult, exp) {
      let actual = crusoe(n, d, ang, distmult, angmult);
      expect(actual[0]).toBeCloseTo(exp[0], 9);
      expect(actual[1]).toBeCloseTo(exp[1], 9);
      // assert.approximately(actual[1], exp[1], 1e-9);
  }
  
  it("Basic tests code",function() {
      // assert_fuzzy(5, 0.2, 30, 1.02, 1.1, [0.830674, 0.620695]);
      assert_fuzzy(8, 0.22, 3, 1.01, 1.15, [1.814652098870, 0.164646220964]);
      assert_fuzzy(29, 0.13, 21, 1.01, 1.09, [0.318341393410, 2.292862212314]);
      assert_fuzzy(45, 0.10, 3, 1.01, 1.10, [2.689897523779, 2.477953232467]);
      assert_fuzzy(14, 0.22, 20, 1.02, 1.14, [1.774076472485, 2.557008479031]);
      assert_fuzzy(42, 0.11, 17, 1.02, 1.09, [0.528555980656, 2.196434600133]);
      
  })})
  
  