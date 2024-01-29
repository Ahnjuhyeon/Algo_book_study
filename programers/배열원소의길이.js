/*
문자열 배열 strlist가 매개변수로 주어집니다. 
strlist 각 원소의 길이를 담은 배열을 retrun하도록 solution 함수를 완성해주세요.
strlist ["We", "are", "the", "world!"]	
[2, 3, 3, 6]
*/
const a = ["We", "are", "the", "world!"];
function solution(strlist) {
  return strlist.map((v) => v.length);
}
console.log(solution(a));

function solutionb(num1, num2) {
  return num1 === num2 ? 1 : -1;
}
console.log(solutionb(2, 2));
