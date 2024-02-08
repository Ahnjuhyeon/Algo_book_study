/*
영어 대소문자로 이루어진 문자열 my_string이 매개변수로 주어질 때,
 my_string을 모두 소문자로 바꾸고 알파벳 순서대로 정렬한 문자열을 return 하도록 
 solution 함수를 완성해보세요.
 "Python"	"hnopty
 1. 문자를 먼저 모두 소문자로 바꾸고 솔트할까
*/

function solution(my_string) {
  var answer = my_string.toLowerCase();
  return [...answer].sort().join("");
}
console.log(solution("Python"));

//다른사람 풀이
//1
const solution = (s) =>
  [...s]
    .map((e) => e.toLowerCase())
    .sort()
    .join("");
//2
function solution(s) {
  return [...s.toLowerCase()].sort().join("");
}
//음 .. 전개연산자 안에서도 되는구나..........
