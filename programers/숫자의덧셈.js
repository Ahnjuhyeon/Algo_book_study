/*
my_string : "aAb1B2cC34oOp"
10
my_string은 소문자, 대문자 그리고 한자리 자연수로만 구성되어있습니다.
replace(정규식,'') : 
숫자가 아닌 모든 문자를 제거, 남은 숫자들을 문자열에서 배열 반환

*/

function solution(my_string) {
  var answer = my_string;
  const replaceArr = answer.replace(/[^0-9]/g, "").split("");
  const result = replaceArr.reduce((a, b) => a + Number(b), 0);
  return result;
}
console.log(solution("aAb1B2cC34oOp"));
//와씨
function solution(my_string) {
  return [...my_string].reduce(
    (acc, cur) => (Number(cur) ? +acc + +cur : acc),
    0
  );
}
