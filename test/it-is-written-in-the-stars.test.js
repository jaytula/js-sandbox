/**
 * 
 * @param {Date} date 
 * @returns 
 */
function starSign(date) {
  const month = date.getMonth();
  const day = date.getDate();

  if((month===0 && day >= 21) || (month===1 && day <= 19)) return 'Aquarius';
  if((month===1 && day >= 20) || (month===2 && day <= 20)) return 'Pisces';
  if((month===2 && day >= 21) || (month===3 && day <= 20)) return 'Aries';
  if((month===3 && day >= 21) || (month===4 && day <= 21)) return 'Taurus';
  if((month===4 && day >= 22) || (month===5 && day <= 21)) return 'Gemini';
  if((month===5 && day >= 22) || (month===6 && day <= 22)) return 'Cancer';
  if((month===6 && day >= 23) || (month===7 && day <= 23)) return 'Leo';
  if((month===7 && day >= 24) || (month===8 && day <= 23)) return 'Virgo';
  if((month===8 && day >= 24) || (month===9 && day <= 23)) return 'Libra';
  if((month===9 && day >= 24) || (month===10 && day <= 22)) return 'Scorpio';
  if((month===10 && day >= 23) || (month===11 && day <= 21)) return 'Sagittarius';
  if((month===11 && day >= 22) || (month===0 && day <= 20)) return 'Capricorn';
}

const Test = require('@codewars/test-compat')

describe("Testing starSign", function() {
  it("Basic tests", function() {
    Test.assertEquals(starSign(new Date(1970, 5, 5)), 'Gemini');
    Test.assertEquals(starSign(new Date(2000, 1, 15)), 'Aquarius');
    Test.assertEquals(starSign(new Date(1987, 7, 23)), 'Leo');
  });
});