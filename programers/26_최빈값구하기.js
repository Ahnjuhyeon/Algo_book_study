/* [1, 2, 3, 3, 3, 4]	3
같은 값끼리 ..분류해서 길이를 구하기 
array.map((v) => v === v);
*/
const arr = [1, 2, 3, 3, 3, 4];
function solution(array) {
  //   var answer = 0;
  //   return answer;
  var count = {};
  var maxCount = 0;
  var mode = [];

  for (var i = 0; i < array.length; i++) {
    var num = array[i];
    count[num] = (count[num] || 0) + 1;

    if (count[num] > maxCount) {
      maxCount = count[num];
      mode = [num];
    } else if (count[num] === maxCount && !mode.includes(num)) {
      mode.push(num);
    }
  }

  // 최빈값이 없거나 여러 개인 경우 -1을 반환
  if (mode.length === 1) {
    return parseInt(mode[0]);
  } else {
    return -1;
  }
}
console.log(solution(arr));

//내가 푼거 아님

//다른사람 풀이
function solution(array) {
  let m = new Map();
  for (let n of array) m.set(n, (m.get(n) || 0) + 1);
  m = [...m].sort((a, b) => b[1] - a[1]);
  return m.length === 1 || m[0][1] > m[1][1] ? m[0][0] : -1;
}
