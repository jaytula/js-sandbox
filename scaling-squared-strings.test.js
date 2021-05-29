/**
 * 
 * @param {string} strng 
 * @param {number} k 
 * @param {number} n 
 */
function scale(strng, k, n) {
  const lines = strng.split('\n').map(line => line.split('').map(ch => ch.repeat(k)).join(''))

  let result = ''
  for(let line of lines) {
    result += (line+'\n').repeat(n);
  }

  return result.trim();
}

test("Scaling",function() {
  var a = "abcd\nefgh\nijkl\nmnop";
  var r = "aabbccdd\naabbccdd\naabbccdd\neeffgghh\neeffgghh\neeffgghh\niijjkkll\niijjkkll\niijjkkll\nmmnnoopp\nmmnnoopp\nmmnnoopp";
  expect(scale(a, 2, 3)).toBe(r);
  expect(scale("", 5, 5)).toBe(""); 
  expect(scale("Kj\nSH", 1, 2)).toBe("Kj\nKj\nSH\nSH");
  
})
