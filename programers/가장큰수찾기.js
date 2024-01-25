/*
정수 배열 array가 매개변수로 주어질 때,
가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.
[8, 1]
*/
const array = [9, 10, 11, 8];
function solution(array) {
  const max = Math.max(...array);
  const maxIndex = array.indexOf(max);
  return [max, maxIndex];
}
console.log(solution(array));

//다른사람풀이
function solution(array) {
  let max = Math.max(...array);
  return [max, array.indexOf(max)];
}
