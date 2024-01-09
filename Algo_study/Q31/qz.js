/*
 * 31. 자바스크립트 자료형의 복잡도 
다음 배열 내장함수의 시잔 복잡도가 O(1) 이 아닌 것은? 3번이래
시간복잡도: 문제를 해결하는데 걸리는 시간과 입력의 함수관계
시간복잡도가 적을수록 시간이 덜 걸리는 효율적인 알고리즘

1) arr[i]: O(1) //특정 인덱스에 직접 접근하는 것
2) arr.push(5): O(1) // (평균적으로는, 최악의 경우에는 O(n)이 될 수 있음)
3) arr.slice(): O(n) // 배열을 복사하는 경우
4) arr.pop(): O(1) //배열의 끝에서 요소를 제거하는 경우
5) arr.includes(5): O(n) 또는 O(log n) // (배열의 정렬 여부에 따라 다름)

*/
/*--------------------------------------------------------------------*/

/*
 * 32.문자열 만들기
취준생 주현이는 열심히 자기소개서를 쓰고있는 도중 주현이는 자기가 지금까지 단어를 얼마나 적었는지 궁금하다(?)
주현이를 위해 문자열을 입력받으면 단어의 갯수를 출력하는 프로그램을 만들어주셈     

*/

function Q32(input) {
  const split = input.split(" ").length; // ' ' 공백(스페이스바)기준으로 쪼개
  //   const result = split.length; //길이 세
  console.log(split);
}
//입력
Q32("안녕하세요. 저는 제주대학교 컴퓨터공학전공 주현입니다");
//출력 5
/*--------------------------------------------------------------------*/

/*
 * 33. 거꾸로 출력하기
한 줄에 여러개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하쇼
...input : 나머지 매개변수(rest parameter)
*/
function Q33(...input) {
  const arr = input.join(",").split(",");
  const sort = arr.sort((a, b) => a - b).reverse();
  console.log(sort); // 한 줄에 다써도되는데 너무 보기 별로다
}
//입력
Q33(10, 4, 6, 17, 38);
//출력 5
/*--------------------------------------------------------------------*/

/*
 * 34. sort구현하기 
민주는 체육부장, 체육시간되면 반친구들이 키 순으로  모였는지 확인해야한다.
민주를 위해 키를 보여주면 순서대로 제대로 서있는지 확인하는 프로그램 만들기
(키는 공백으로 구분하여 입력?)

입력값 
176 156 167 180 150 169 
출력 no
150 156 167 169 176 180 
출력 yes

JSON.stringify : 객체나 배열을 JSON 문자열로 변환하는 함수//[1, 2, 3] =>  "[1,2,3]"
*/
function Q34(input) {
  const arr = input.split(" ").map(Number);
  const newArr = [...arr].sort((a, b) => a - b);
  if (JSON.stringify(arr) === JSON.stringify(newArr)) {
    console.log("YES!");
  } else {
    console.log("NO!");
  }
}
Q34("176 156 167 180 150 169");
/*--------------------------------------------------------------------*/
/*
 * 35. factory 함수 사용하기
2제곱, 3제곱, 4제곱을 할 수 있는 factory 함수를 만들거다
<pass>에 코드를 작성하여 two 함수를 만드세용  
factory 함수 : 객체를 생성하여 반환하는 함수   
*/
function one(n) {
  function two(x) {
    //pass
    return Math.pow(x, n);
  }
  return two;
}
const a = one(2);
const b = one(3);
const c = one(4);
console.log(a(10));
console.log(b(10));
console.log(c(10));
/*--------------------------------------------------------------------*/
/*
 * 36. 구구단출력하기
1~9까지 숫자중 하나를 입력하면 그 단의 구구단 결과가 나오도록  
*/
//입력값
function Q35(input) {
  const i = input;
  for (let j = 1; j <= 9; j++) {
    // console.log(`${i * j}`);
  }
  // for (let i = input; i <= 9; i++) {
  //   console.log(`${i}단`);
  //   for (let j = 1; j <= 9; j++) {
  //     console.log(`${i}x${j}=${i * j}`);
  //   }
  // }
}
Q35(2);
//출력 2 4 6 8 10 .....18
/*--------------------------------------------------------------------*/
/*
 * 37. 반장선거
새학기를 맞아 호준이네 반장뽑는데,학생들이 뽑은 후보를 입력 받으면 뽑힌 학생의 이름과 받은 표 수를
출력해라
*/
//입력값
function Q37(input) {
  const splitArr = input.split(",");

  console.log(splitArr);
}
Q37("원범,원범,혜원,혜원,혜원,혜원,유진,유진");
//출력 //혜원(이)가 총 4표로 반장이 되었다 어려운데...
/*--------------------------------------------------------------------*/

/*
 * 38. 호준이의 아르바이트
호준이는 아르바이트로 영어학원에서 채점하는 알바중 그 학원은 1~3위까지 사탕으로 선물을 주는데
사탕 다 떨어져서 채점은 호준이가 사탕은 내가 사다 받쳐야 하는데? 
중복되는 학생들까지 포함으로 줘야해서 학생들의 점수를 공백으로 구분하여 입력하고,
필요한 사탕 개 수를 구하기  
*/
function Q38(input) {}
//입력값
Q38("97 86 75 66 55 97 85 97 97 95");
//출력값 //6
/*--------------------------------------------------------------------*/
/*
 * 39. 오타수정하기
문장에서 q를 e로 바꾸는 프로그램을 만드세요
*/
function Q39(input) {
  const split = input
    .split("")
    .map((el) => (el === "q" ? "e" : el))
    .join("");
  console.log(split);
}
//입력값
Q39("querty");
//출력값 hello my name is hyewon //hqllo my namq is hyqwon

/*--------------------------------------------------------------------*/
/*
 * 40. 놀이동산에 가자
원범이가 놀이동산 갔다 원범이와 친구들 총 몇명이 탈 수 있는지 알 수 있는 프로그램을 만들자

첫번째 입력은 제한 무게가 주어지고 , 두번째 입력으로는 인원수 다음 입력으로는 탑승 할 친구들의 몸무게 
몸무게는 무작위로 주어질 수 있다.

*/
function Q40(input) {
  const inputarr = input.split(",");
  const maximumWeight = parseInt(inputarr[0]);
  const maxPersons = parseInt(inputarr[1]);
  const friendWeights = inputarr.slice(2).map((weight) => parseInt(weight));
  console.log(friendWeights); //20,20,20,20,20
  // 누적된 총 몸무게를 저장할 변수
  let totalWeight = 0;
  // 탑승한 친구들의 수를 저장할 변수
  let count = 0;

  for (const weight of friendWeights) {
    if (totalWeight + weight <= maximumWeight && count < maxPersons) {
      totalWeight += weight;
      count++;
    } else {
      break; // 탑승 불가능한 경우 종료
    }
  }

  console.log(count); // 탑승 가능한 친구들의 수 출력
}
//입력값
Q40("50,5,20,20,20,20,20");
//출력값 2가 나와야함
/*--------------------------------------------------------------------*/
