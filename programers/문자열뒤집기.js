/*

"jaron"	"noraj"
*/

function solution(my_string) {
  var answer = my_string.split("").reverse().join("");
  return answer;
}
console.log(solution("jaron"));
