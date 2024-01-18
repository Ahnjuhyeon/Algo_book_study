/*
[149, 180, 192, 170]
키 167
결과값 3
1. 
*/
const array = [149, 180, 192, 170];
function solution(array, height) {
  var answer = array.filter((el) => el > height);

  return console.log(answer.length);
}
solution(array, 167);
