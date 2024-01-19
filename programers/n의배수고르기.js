/*
n
3	
numlist 에서 n의 배수가 아닌 수들을 제거한 배열
[4, 5, 6, 7, 8, 9, 10, 11, 12]	
result
[6, 9, 12]
*/
const numlist = [2, 100, 120, 600, 12, 12];
function solution(n, numlist) {
  var answer = numlist.filter((el) => el % n === 0);
  return answer;
}
solution(12, numlist);
