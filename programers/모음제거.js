/*
출력 : "bs"
설계
(for, forEach) arr를 모두 순회를 하여 
(replaceAll) 해당 하는 값이 string에 있을 경우 빈 문자열로 바꾼다.
*replace의 경우 가장 앞에있는,  replaceAll 모든 문자가 바뀐다.

*/
const arr = ["a", "e", "i", "o", "u"];
function solution(my_string) {
  arr.forEach((value) => {
    my_string = my_string.replaceAll(value, "");
  });
  return my_string;
}
console.log(solution("bus"));

//정규식
function solution(my_string) {
  return my_string.replace(/[aeiou]/g, "");
}
