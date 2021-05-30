/**
 * 
 * @param {string} str 
 */
function decode(str) {
  const decoder = {
    0: "5",
    1: "9",
    2: "8",
    3: "7",
    4: "6",
    5: "0",
    6: "4",
    7: "3",
    8: "2",
    9: "1",
    0: "5",
  }
  return str.split('').map(num => decoder[num]).join('');
}

test('Basic tests', function() {
  var phoneNumbers = {
    "4103432323": "6957678787",
    "4103438970": "6957672135",
    "4104305768": "6956750342",
    "4102204351": "6958856709",
    "4107056043": "6953504567",
    "4105753410": "6950307695"
  };
  
  for (var code in phoneNumbers) {
    expect(decode(code)).toBe(phoneNumbers[code]);
  }
});