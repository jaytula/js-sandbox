function reverseWords(str){
  return str.split(' ').reverse().join(' ')
}

it("should work for some examples", function(){
  expect(reverseWords("hello world!")).toBe("world! hello")
  expect(reverseWords("yoda doesn't speak like this" )).toBe("this like speak doesn't yoda")
  expect(reverseWords("foobar"                       )).toBe("foobar")
  expect(reverseWords("kata editor"                  )).toBe("editor kata")
  expect(reverseWords("row row row your boat"        )).toBe("boat your row row row")
});