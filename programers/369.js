/*
29423	
박수횟수 2
*/

function solution(order) {
  const arr = Array.from(String(order), Number);
  const reduce = arr.reduce((a, b) => {
    if ([3, 6, 9].includes(b)) {
      return a + 1;
    } else {
      return a;
    }
  }, 0);
  return reduce;
}
console.log(solution(29423));

//다른사람풀이
function solution(order) {
  return Array.from(order.toString()).filter((t) => ["3", "6", "9"].includes(t))
    .length;
}
