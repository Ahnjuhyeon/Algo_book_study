/*
두 배열의 길이가 다르다면, 배열의 길이가 긴 쪽이 더 큽니다.
배열의 길이가 같다면 각 배열에 있는 모든 원소의 합을 비교하여 
다르다면 더 큰 쪽이 크고, 같다면 같습니다.
arr1
[49, 13]	
arr2[70, 11, 2]	
result : -1
1 ≤ arr1의 길이 ≤ 100
*/
const arr1 = [49, 13];
const arr2 = [70, 11, 2];
function solution(arr1, arr2) {
  //   var answer = 0;
  //배열의 길이가 같지 않다면
  if (arr1.length !== arr2.length) return arr1.length > arr2.length ? 1 : -1;

  const a = arr1.reduce((a, b) => a + b, 0);
  const b = arr2.reduce((a, b) => a + b, 0);
  if (a === b) return 0;
  return a > b ? 1 : -1;
}
console.log(solution(arr1, arr2));

//잘 기억해두자
