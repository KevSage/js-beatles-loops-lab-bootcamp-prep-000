var arr = [];

function theBeatlesPlay(musicians, instruments) {
  for (let i = 0; i < musicians.length; i++) {
   arr.push(musicians[i] + " plays " + instruments[i]);
  }
  return arr;
}// add solution here
var factsArr = [];
function johnLennonFacts(array) {
  let i = array.length  - 1;
  while (i > 0) {
    factsArr.push(array[i] + "!!!");
    --i;
  }
  return factsArr;
}
