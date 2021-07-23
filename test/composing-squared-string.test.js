/**
 *
 * @param {string} s1
 * @param {string} s2
 */
function compose(s1, s2) {
  const arr1 = s1.split("\n");
  const arr2 = s2.split("\n");
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(
      arr1[i]
        .slice(0, i + 1)
        .concat(arr2[arr2.length - 1 - i].slice(0, arr2.length - i))
    );
  }
  return result.join("\n");
}

const Test = require("@codewars/test-compat");

function testing(actual, expected) {
  Test.assertEquals(actual, expected);
}

it("Composing squared strings", function () {
  testing(
    compose("byGt\nhTts\nRTFF\nCnnI", "jIRl\nViBu\nrWOb\nNkTB"),
    "bNkTB\nhTrWO\nRTFVi\nCnnIj"
  );
  testing(
    compose("HXxA\nTGBf\nIPhg\nuUMD", "Hcbj\nqteH\nGbMJ\ngYPW"),
    "HgYPW\nTGGbM\nIPhqt\nuUMDH"
  );
  testing(
    compose("tSrJ\nOONy\nsqPF\nxMkB", "hLqw\nEZuh\nmYFl\nzlYf"),
    "tzlYf\nOOmYF\nsqPEZ\nxMkBh"
  );
});
