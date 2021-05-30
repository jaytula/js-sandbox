/**
 * 
 * @param {number[]} arr 
 * @param {number} newavg 
 */
function newAvg(arr, newavg) {
  const currentTotal = arr.reduce((acc, curr) => acc + curr, 0)
  const nextDonation = Math.ceil(newavg * (arr.length +1) - currentTotal)
  if(nextDonation <= 0) throw new Error('');
  return nextDonation;
}

describe("newAvg", function () {
  it("Basic tests", function () {
    expect(newAvg([14, 30, 5, 7, 9, 11, 16], 90)).toBe(628);
    expect(newAvg([14, 30, 5, 7, 9, 11, 15], 92)).toBe(645);
    expect(() => newAvg([14, 30, 5, 7, 9, 11, 15], 2)).toThrowError()
  });
});
