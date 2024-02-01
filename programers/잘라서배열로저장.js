/*
"hello"	1	2	"hlelo"

 /./g는 문자열 전체에서 모든 문자를 찾아내는 정규 표현식
 match: 현재 일치하는 부분 문자열
index: 일치하는 부분의 시작 인덱스
*/

function solution(my_string, num1, num2) {
  const answer = my_string.replace(/./g, (match, index) => {
    if (index === num1) return my_string[num2];
    if (index === num2) return my_string[num1];
    // 나머지 경우는 그대로 반환
    return match;
  });
  return answer;
}
console.log(solution("hello", 1, 2));

//다른사람풀이
function solution(my_string, num1, num2) {
  my_string = my_string.split("");
  [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
  return my_string.join("");
}
//이게 더쉽자나
