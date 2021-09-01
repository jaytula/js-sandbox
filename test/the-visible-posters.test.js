/**
 * 
 * @param {number[][]} posters 
 */
function countVisible(posters){
  const wallSegments = Array.from({length: 1000}, (_, idx) => idx+1)
  let visible = 0;

  for(let poster of posters.reverse()) {
    const [start, end] = poster;
    let visibleItem = false;
    for(let i = start; i <= end; i++) {
      const indexToDelete = wallSegments.indexOf(i);
      if(indexToDelete !== -1) {
        visibleItem = true
        delete wallSegments[indexToDelete]
      }
    }
    if(visibleItem) visible++;
  }

  return visible;
}

const Test = require('@codewars/test-compat')

describe("Basic Tests", function(){ 
  it("It should works for basic tests.", function(){
  
  Test.assertEquals(countVisible([
  [1,4],
  [2,6],
  [8,10],
  [3,4],
  [7,10]
  ]),4)
  
  Test.assertEquals(countVisible([
  [1,2],
  [3,4],
  [5,6],
  [7,8],
  [9,10],
  [1,10]
  ]),1)
  
  Test.assertEquals(countVisible([
  [1,10],
  [1,2],
  [3,4],
  [5,6],
  [7,8],
  [9,10]
  ]),5)
  
  Test.assertEquals(countVisible([
  [1,2],
  [1,3],
  [1,4],
  [1,6],
  [1,8],
  [1,10]
  ]),1)
  
  Test.assertEquals(countVisible([
  [1,3],
  [2,4],
  [3,5],
  [4,6],
  [5,7],
  [6,8]
  ]),6)
  
  Test.assertEquals(countVisible([
  [1,1000],
  [1,2],
  [3,999]
  ]),3)
  
  })})