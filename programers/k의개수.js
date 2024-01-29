/*
시작숫자1
끝나는 숫자13
찾을 숫자 1
출력6
*/

function solution(i, j, k) {
  var answer = [];
  for (let v = i; v <= j; v++) {
    answer.push(v);
  }
  const includes = answer
    .toString()
    .split("")
    .map((a) => a === k.toString());
  const result = includes.filter((a) => a === true).length;
  return result;
}

console.log(solution(1, 13, 1));

//다른사람 풀이과정
function solution(i, j, k) {
  let a = "";
  for (i; i <= j; i++) {
    a += i;
  }

  return a.split(k).length - 1;
}
