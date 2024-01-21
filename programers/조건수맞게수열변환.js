/*
정수 배열 arr와 자연수 k가 주어집니다.
만약 k가 홀수라면 arr의 모든 원소에 k를 곱하고, k가 짝수라면 arr의 모든 원소에 k를 더합니다.
이러한 변환을 마친 후의 arr를 return 하는 solution 함수를 완성해 주세요.
[1, 2, 3, 100, 99, 98]
k
3
result
[3, 6, 9, 300, 297, 294]
만약 k가 홀수라면 모든 요소를 순회하여 값에 *k만큼해라
*/
const arr = [1, 2, 3, 100, 99, 98];
function solution(arr, k) {
  //1
  //   if (k % 2 === 1) return arr.map((value) => value * k);
  //   if (k % 2 === 0) return arr.map((value) => value + k);

  //2
  //   if (k % 2 === 1) return arr.map((value) => value * k);
  //   return k % 2 === 0 && arr.map((value) => value + k);
  //3
  return k % 2 === 1
    ? arr.map((value) => value * k)
    : arr.map((value) => value + k);
}
console.log(solution(arr, 3));

//와..
// const solution = (arr, k) => arr.map((v) => (k % 2 ? v * k : v + k));???
