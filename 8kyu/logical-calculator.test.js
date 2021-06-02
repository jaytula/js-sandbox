/**
 *
 * @param {boolean[]} array
 * @param {string} op
 * @returns
 */
function logicalCalc(array, op) {
  return array.reduce(
    (acc, curr) =>
      (acc = { AND: acc && curr, OR: acc || curr, XOR: acc ? !curr : curr }[op])
  );
}

it("Fixed Tests", function () {
  expect(logicalCalc([true, true, true, false], "AND")).toBe(false);
  expect(logicalCalc([true, true, true, false], "OR")).toBe(true);
  expect(logicalCalc([true, true, true, false], "XOR")).toBe(true);
  expect(logicalCalc([true, true, false, false], "AND")).toBe(false);
  expect(logicalCalc([true, true, false, false], "OR")).toBe(true);
  expect(logicalCalc([true, true, false, false], "XOR")).toBe(false);
  expect(logicalCalc([true, false, false, false], "AND")).toBe(false);
  expect(logicalCalc([true, false, false, false], "OR")).toBe(true);
  expect(logicalCalc([true, false, false, false], "XOR")).toBe(true);
  expect(logicalCalc([true, true], "AND")).toBe(true);
  expect(logicalCalc([true, true], "OR")).toBe(true);
  expect(logicalCalc([true, true], "XOR")).toBe(false);
  expect(logicalCalc([false, false], "AND")).toBe(false);
  expect(logicalCalc([false, false], "OR")).toBe(false);
  expect(logicalCalc([false, false], "XOR")).toBe(false);
  expect(logicalCalc([false], "AND")).toBe(false);
  expect(logicalCalc([false], "OR")).toBe(false);
  expect(logicalCalc([false], "XOR")).toBe(false);
  expect(logicalCalc([true], "AND")).toBe(true);
  expect(logicalCalc([true], "OR")).toBe(true);
  expect(logicalCalc([true], "XOR")).toBe(true);
});
