// 문자열 my_string이 매개변수로 주어질 때,
// 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.
//"abCdEfghIJ"	"ABcDeFGHij"
//toUpperCase
function solution(my_string) {
  var answer = my_string.split("");
  const upperResult = answer.filter((v) => v === v.toUpperCase());
  const result = upperResult.map((v) => v.toLowerCase()).join("");
  return answer;
}
console.log(solution("abCdEfghIJ"));
/*
function swapCase(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    
    if (char === char.toUpperCase()) {
      result += char.toLowerCase();
    } else {
      result += char.toUpperCase();
    }
  }

  return result;
}

let originalStr = "abCdEfghIJ";
let swappedStr = swapCase(originalStr);

console.log(swappedStr); // 출력: ABcDeFGHij

*/
