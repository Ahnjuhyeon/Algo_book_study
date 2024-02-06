//정수 n이 매개변수로 주어질 때,
//n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 solution 함수를 완성해주세요.
//10	[1, 3, 5, 7, 9]

function solution(n) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(i);
  }
  return answer.filter((v) => v % 2 === 1);
}
console.log(solution(10));

//
function solution(n) {
  var answer = [];
  // i를 1부터 시작해서 n까지 2씩 증가시키면서 반복
  for (let i = 1; i <= n; i += 2) answer.push(i);

  return answer;
}
