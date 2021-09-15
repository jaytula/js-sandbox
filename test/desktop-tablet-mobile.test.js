/**
 * 
 * @param {string[]} arr 
 */
function specialSort(arr) {
  return ['desktop', 'tablet', 'mobile'].filter(el => arr.includes(el));
}

it('tests', () => {
  expect(specialSort(['tablet', 'mobile', 'desktop'])).toEqual(['desktop', 'tablet', 'mobile'])
  expect(specialSort(['tablet', 'mobile'])).toEqual(['tablet', 'mobile'])
  expect(specialSort(['mobile', 'tablet'])).toEqual(['tablet', 'mobile'])
  expect(specialSort(['mobile', 'desktop'])).toEqual(['desktop', 'mobile'])
  expect(specialSort(['desktop', 'mobile'])).toEqual(['desktop', 'mobile'])
  expect(specialSort(['mobile'])).toEqual(['mobile'])
})