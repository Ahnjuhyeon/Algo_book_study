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