/*
n   t   result
2	10	2048
두배씩 증가 
n * 2 ** t 
** = 제곱근 표현식
*/

function solution(n, t) {
  var answer = n * 2 ** t;
  return answer;
}
console.log(solution(2, 10));
