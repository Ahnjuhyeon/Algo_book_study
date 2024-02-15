/*
문자열 my_string과 정수 n이 매개변수로 주어질 때, 
my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.
"hello"	3	"hhheeellllllooo"
repeat 이라는게 있꾼 역시..
*/

function solution(my_string, n) {
  return [...my_string].map((v) => v.repeat(n)).join("");
}
console.log(solution("hello", 3));
