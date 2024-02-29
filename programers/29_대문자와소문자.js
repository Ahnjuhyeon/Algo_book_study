/*
"cccCCC"	"CCCccc"
"abCdEfghIJ"	"ABcDeFGHij"
요소를 순회하면서 소문자면 대문자로 대문자이면 소문자로 
*/

function solution(my_string) {
  //   var answer = [...my_string].map((v) => {
  //     if (v === v.toUpperCase()) {
  //       return v.toLowerCase();
  //     } else {
  //       return v.toUpperCase();
  //     }
  //   });
  //   return answer.join("");

  return [...my_string]
    .map((v) => (v === v.toUpperCase() ? v.toLowerCase() : v.toUpperCase()))
    .join("");
}

console.log(solution("cccCCC"));
// 음 삼항 연산자가 .. 음..
//  return my_string.split('').map(n => n === n.toUpperCase() ? n.toLowerCase() : n.toUpperCase()).join('')
