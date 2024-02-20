//[[80, 70], [90, 50], [40, 70], [50, 80]]	[1, 2, 4, 3]
const arr = [
  [80, 70],
  [70, 80],
  [30, 50],
  [90, 100],
  [100, 90],
  [100, 100],
  [10, 30],
];
// function solution(score) {
//   var answer = score.map((v, i) => ({
//     index: i + 1,
//     value: v.reduce((a, b) => a + b) / 2,
//   }));
//   const result = answer.sort((a, b) => b.value - a.value);
//   return result.map((item) => item.index);
//   //   return result;
// }
// console.log(solution(arr));

function solution(score) {
  var answer = score.map((v, i) => ({
    index: i + 1,
    value: Math.max(...v), // 배열의 최댓값을 사용하도록 수정
  }));
  const result = answer.sort((a, b) => b.value - a.value);
  return result.map((item) => item.index);
}

console.log(solution(arr)); // [4, 4, 6, 2, 2, 1, 7]
