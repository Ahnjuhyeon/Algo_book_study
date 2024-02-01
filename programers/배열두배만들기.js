//[1, 2, 3, 4, 5]	[2, 4, 6, 8, 10]

const arr = [1, 2, 3, 4, 5];
function solution(numbers) {
  return numbers.map((v) => v * 2);
}
console.log(solution(arr));
