/*
[1, 2, 3, 4, 5]	20
*/

const a = [1, 2, 3, 4, 5];
function solution(numbers) {
  var answer = numbers.sort((a, b) => b - a);
  return answer[0] * answer[1];
}
console.log(solution(a));
