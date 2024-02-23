/* 피자먹기 3
7	10	2 1인1조각
4	12	3
1인1조각해서 개 수가 안맞으면 +1 ..
Math.ceil()
*/
// function solution(slice, n) {
//   return Math.ceil(n / slice);
// }
// console.log(solution(4, 12));

/* 피자먹기 1
기본 7조각을 n은 먹을 인원수  필요한 피자 판수를 구하기
7	1 ,15	3
*/
// function solution(n) {
//   return Math.ceil(n / 7);
// }
// console.log(solution(15));

/* 피자먹기 2
기본 6 조각을 n은 먹을 인원수  필요한 피자 판수를 구하기
** 조건 **
n명이 주문한 피자를 남기지 않고 모두 같은 수의 피자 조각을 먹어야 한다
10	5,4	2,3 1
*/

function solution(n) {
  var answer = n % 6 === 0 ? n / 6 : Math.ceil(n / 6);
  //? n / piecesPerPizza : Math.ceil(n / piecesPerPizza);

  return answer;
}
console.log(solution(10));
