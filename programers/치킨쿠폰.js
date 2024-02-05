//100 11
//Math.round

// function solution(chicken) {
//   var answer = Math.floor(chicken / 10);
//   const namerge = answer % 10;
//   const arr1 = Math.round(answer / 10);
//   const namerge2 = arr1 % 10;
//   return answer + arr1 + namerge2;

//   //   return answer;
// }
// console.log(solution(1081));

// 진료순서정하기
// [30, 10, 23, 6, 100]
// [2, 4, 3, 5, 1]
// //[ 4, 2, 3, 1, 5 ]
const arr = [30, 10, 23, 6, 100];
function solution(emergency) {
  // 순위를 매기고, 순위를 토대로 새로운 배열 생성
  var answer = Array.from(emergency.keys()).sort((a, b) => arr[a] - arr[b]);
  //[ 0, 1, 2, 3, 4 ] => [ 3, 1, 2, 0, 4 ]
  //인덱스 부여,숫자번호로 인덱스 정렬

  // 순위를 1부터 시작하도록 수정
  const rankedResult = answer.map((index) => answer.length - index);
  return rankedResult;
}
console.log(solution(arr));
