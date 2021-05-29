/**
 * 
 * @param {number} weight 
 * @param {number} height 
 * @returns 
 */
function bmi(weight, height) {
  const bmiValue = weight / (height * height);
  if(bmiValue <= 18.5) return 'Underweight';
  if(bmiValue <= 25.0) return 'Normal';
  if(bmiValue <= 30.0) return 'Overweight';
  return 'Obese';
}

test("test", () => {
  expect(bmi(80, 1.8)).toBe("Normal");
});
