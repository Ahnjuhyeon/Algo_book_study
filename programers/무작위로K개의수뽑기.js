/*
[0, 1, 1, 2, 2, 3]
3
output
[0, 1, 2]
배열의 길이는 k여야하고 중복되면 다음 숫자로 
다음숫자도 중복이면 -1?? 
answer.length = k
if(arr.length < k) return -1
순회해서 얻을 값? map? 
*/
const arr = [0, 1, 1, 2, 2, 3];
function solution(arr, k) {
  var answer = [];
  const a = arr.map((value, index) => {
    answer.push(value);
  });
  if()

  console.log(answer);
  return answer;
}
console.log(solution(arr, 3));
