/*
cipher
"dfjardstddetckdaccccdegk"
code
4	
result
"attack"
code의 배수 마다 글짜를 뽑아야 한다 
그럼 글자를 ... 모두쪼객?
filter로 4의 배수마다 거르고 

*/

function solution(cipher, code) {
  var answer = cipher.split("");
  const filter = answer
    .filter((el, index) => (index + 1) % code === 0)
    .join("");
  return filter;
}
solution("pfqallllabwaoclk", 2);
