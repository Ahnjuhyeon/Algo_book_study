/*
[2, 4]	1
[-7, 9]	2
a : 3,2 = 1
b : -3,2 = 2
c : -3,-2 = 3 
d : 3,-2  = 4
x 좌표와 y 좌표가 모두 양수이면 제1사분면에 속합니다.
x 좌표가 음수, y 좌표가 양수이면 제2사분면에 속합니다.
x 좌표와 y 좌표가 모두 음수이면 제3사분면에 속합니다.
x 좌표가 양수, y 좌표가 음수이면 제4사분면에 속합니다.
*/

const arr = [-7, 9];
function solution(dot) {
  const x = dot[0];
  const y = dot[1];
  if (x > 0 && y > 0) {
    return 1;
  } else if (x <= 0 && y > 0) {
    return 2;
  } else if (x <= 0 && y <= 0) {
    return 3;
  } else {
    return 4;

    /*

    if (x > 0 && y > 0) answer = 1
    if (x < 0 && y > 0) answer = 2
    if (x < 0 && y < 0) answer = 3
    if (x > 0 && y < 0) answer = 4
    */
  }
}
console.log(solution(arr));

//구조분해방법이 있었댜
function solution(dot) {
  const [num, num2] = dot;
  const check = num * num2 > 0;
  return num > 0 ? (check ? 1 : 4) : check ? 3 : 2;
}
