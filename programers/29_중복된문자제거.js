/*
"people"	"peol"
"We are the world"	"We arthwold"
const result = [...new Set(values)]
*/

function solution(my_string) {
  //   var answer = [...my_string];
  return [...new Set([...my_string])].join("");
}
console.log(solution("We are the world"));
//  return [...new Set(my_string)].join(""); => 이러면 [...] 스프레드 연산자 안써도 가능하다
