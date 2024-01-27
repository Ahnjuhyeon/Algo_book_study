/*
정수 num과 k가 매개변수로 주어질 때,
 num을 이루는 숫자 중에 k가 있으면
  num의 그 숫자가 있는 자리 수를 return하고 
  없으면 -1을 return 하도록 solution 함수를 완성해보세요.
  123456	7	-1

  indexOf와 findIndex 의 차이
  indexOf와 순회를 하지 않는다 
  findIndex 순회한다 
*/

function solution(num, k) {
  var answer = num.toString().split("");
  const result = answer.findIndex((v) => v === k.toString());
  return result !== -1 ? result + 1 : -1;
}
console.log(solution(123456, 7));

//다른사람풀이
function solution(num, k) {
  return (
    num
      .toString()
      .split("")
      .map((el) => Number(el))
      .indexOf(k) + 1 || -1
  );
}
