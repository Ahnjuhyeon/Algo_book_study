//정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.
//10 ,30 //4,6

// function solution(n) {
//   var answer = [];
//   for (let i = 1; i <= n; i++) {
//     answer.push(i);
//   }
//   const filter = answer.filter((v) => v % 2 === 0);
//   const reduce = filter.reduce((a, b) => a + b);
//   return reduce;
// }
// console.log(solution(10));

function solution(n) {
  let answer = 0;
  for (let i = 2; i <= n; i += 2) {
    answer += i;
  }
  return answer;
}
console.log(solution(10));
