/**
 * 
 * @param {{id: string}[]} arr
 */
function combineFriends(arr) {
  const result = {};
  arr.forEach(item => {
    const savedId = item.id;
    delete item.id;

    result[savedId] = item;
  })
  return result;
}

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    var Friend = (function () {
      //utilizing closure
      var id = 0;
      return function Friend(obj) {
        //will give unique ID to each object
        this.id = id++;
        for (var i in obj) {
          this[i] = obj[i];
        }
      };
    })();

    var checkForId = function (obj) {
      //Just checks if each Friend object in combineFriends() output does NOT have an "id"
      for (i in obj) {
        if (obj[i].id) {
          return false;
        }
      }
      return true;
    };

    var first = new Friend({ name: "dave" });
    var second = new Friend({ blah: false });
    var third = new Friend({ this: "is", just: "a test" });
    var inputArray = [first, second, third];
    var allFriends = combineFriends(inputArray);

    Test.assertEquals(
      allFriends["0"]["name"],
      "dave",
      "Did not properly assign the other key:values"
    );
    Test.assertEquals(
      Object.keys(allFriends).length,
      inputArray.length,
      "ouput was not of correct length"
    );
    Test.assertEquals(allFriends["0"].id, undefined);
    Test.expect(
      checkForId(allFriends),
      "friend objects should not containd an 'id' key"
    );
  });
});
