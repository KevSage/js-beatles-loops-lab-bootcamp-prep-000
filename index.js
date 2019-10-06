var arr = [];

function theBeatlesPlay(musicians, instruments) {
  for (let i = 0; i < musicians.length; i++) {
   arr.push(musicians[i] + " plays " + instruments[i]);
  }
  return arr;
}// add solution here
var factsArr = [];
function johnLennonFacts(array) {
  let i = 0
  while (i < array.length) {
    factsArr.push(array[i] + "!!!");
    i++;
  }
  return factsArr;
}
