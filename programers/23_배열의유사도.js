/*
["a", "b", "c"]	["com", "b", "d", "p", "c"]	2
1 배열에서 순회하면서 순회한 각 요소에 2가 포함되어있는지 있다면 몇개가 포함되어있는지?
["n", "omg"]	["m", "dot"]
*/

const arr1 = ["a", "b", "c"];
const arr2 = ["com", "b", "d", "p", "c"];
function solution(s1, s2) {
  //   return s1.map((v) => s2.filter((r) => r === v)).flat().length;
  return s1.filter((v) => s2.includes(v)).length;
}
console.log(solution(arr1, arr2));

//다른사람
// function solution(s1, s2) {
//   const intersection = s1.filter((x) => s2.includes(x));
//   return intersection.length;
// }
//이거 내가생각한건데.. 힝...
