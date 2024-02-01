/*
정수 n이 매개변수로 주어질 때 n의 
각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요
reduce ㅎ자~
930211	16

*/

function solution(n) {
  return Array.from(String(n), Number).reduce((a, b) => a + b, 0);
}
console.log(solution(930211));
