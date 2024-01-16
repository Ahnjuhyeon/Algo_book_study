/*
1. 입력값 모두 더하기 
2. 나누기 길이 만큼
*/

const arr = [1, 2, 3, 4]; //2.5
function solution(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}
console.log(solution(arr));
