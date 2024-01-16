/*
숫자만 골라서 오름차순으로 정렬하기
1. (split) 분리하기
2. filter 타입을 분리
3. sort 사용해서 오름차순으로 정렬
*/

const my_string = "hi12392"; //[1,2,2,3,9]
function solution(my_string) {
  return my_string
    .split("")
    .filter((v) => v.match(/[0-9]/g))
    .map((el) => Number(el))
    .sort();
}
console.log(solution(my_string));
