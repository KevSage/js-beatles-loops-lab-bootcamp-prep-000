var arr = [];

function theBeatlesPlay(musicians, instruments) {
  for (let i = 0; i < musicians.length; i++) {
   arr.push(musicians[i] + " plays " + instruments[i]);
  }
  return arr;
}// add solution here

function johnLennonFacts(array) {
  var factsArr = [];
  let i = 0
  while (i < array.length) {
    factsArr.push(array[i] + "!!!");
    i++;
  }
  return factsArr;
}
function iLoveTheBeatles(num) {
  var emptyArr = [];
  var repeats = 15 - num;
  if (num <= 15) {
    emptyArr.push("I Love the Beatles!");
}
return emptyArr;
}
