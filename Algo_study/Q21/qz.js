/*
 * 21. set은 어떻게 만드나요?
다음중 set을 만드는 방법으로 옳바른 것을 모두 골라? 안배운건데.. 3,5?
1) const x = {1,2,3,5,6,7}
2) const x = {}
3) const x = new Set(`javascript`)
4) const x = new Set(range(5))
5) const x = new Set()
*/

/*--------------------------------------------------------------------*/
/*
 * 22. 배수인지 확인하기
다음 중 변수 i가 6의 배수인지 확인하는 방법으로 옳바른 것은? 2번
1) i / 6 == 0  => 결과가 0인지를 확인 이것은 i가 6의 배수인지를 확인하는 것이 아닙니다.     
2) i % 6 == 0
3) i & 6 == 0       
4) i | 6 == 0 
5) i // 6 == 0


 * 23. O X 문제 
console.log(10/3)은 출력결과가 3이다? X 3.333333333
*/
/*--------------------------------------------------------------------*/
/*
 * 24. 대문자로 바꿔주세요
민지가 국제포럼에서 일하는 중이래 민지는 각 국에서 온 참가자들의 명단을 엑셀로 정리하는데
참가자 이름이 대문자 소문자 난리가 난거래 얠 위해 이름을 입력하면 모두 대문자로 출력되는 프로그래밍을 만들어주래

.toUpperCase : 소문자 => 대문자
.toLowerCase : 대문자 => 소문자
*/
function q24(input) {
  const toUpper = input.toUpperCase();
  console.log(toUpper);
}
//입력값
q24("sorrTt");
//출력 MARY
/*--------------------------------------------------------------------*/
/*
 * 25. 원의 넓이를 구하기
원의 넓이는 [반지름의길이 * 반지름의 길이 * 3.14] 로 구할수있다
함수를 사용하여 원의 넓이를 구하는 코드를 작성
입력으로 반지름의 길이 정수 n이 주어지면 원의 넓이를 반환하는 함수를 만들어주기
*/
function q25(input) {
  const width = input * input * 3.14;
  console.log(width);
}
//입력값
q25(10);
//이게 의도가 맞나..?
/*--------------------------------------------------------------------*/
/*
 * 26. 행성문제
행성의 이름이 수성,금성,지구,화성,목성,토성,천왕성,혜왕성
영어의 이름이 Mercury,Venus,Earth,Mars,Jupiter,Saturn,Uranus,Neptune
행성의 한글이름을 입혁하면 영어이름을 반환하도록

*/
function q26(input) {
  const name = {
    수성: "Mercury",
    금성: "Venus",
    지구: "Earth",
    화성: "Mars",
    목성: "Jupiter",
    토성: "Saturn",
    천왕성: "Uranus",
    혜왕성: "Neptune",
  };
  const result = name[input];
  console.log(result);
}
//입력값
q26("천왕성");
//예?
/*--------------------------------------------------------------------*/
/*
 * 27. 객체만들기
첫번째 입력에서는 학생의 이름이 공백으로 구분되어 입려되고, 두번째에는 그 학생의 수학점수가 공백으로
두개를 합쳐 학생의 이름이 key, 수학점수가 value

*/
function q27(a, b) {
  // const split = input.split(",");
  const object = new Object();
  object.name = a;
  object.score = b;

  console.log(object);
  //[a]객체의 프로퍼티 이름을 동적으로 생성
}
//입력값 1번째 빈칸에  이름 넣어주고 2번째에 점수 넣어
q27("juju", 40);
//예? ㅝㅁ가이상한데 쑤발....
/*--------------------------------------------------------------------*/
/*
 * 28. 2-gram
2-gram이란 문자열에서 2개의 연속된 요소를 출력하는 방법이다 안배운거 pass!!!
*/
/* 29. 대문자만 지나가세요
반 아이들은 알파벳을 공부하는 학생들인데 오늘은 대문자쓰기 시험이 있대ㅔ
알파벳 하나만을 입력하고 그 알파벳이 대문자면 yes 소문자면 no 를 출력하는 프로그램
toUpperCase
= : 1개일때, 소문자 -> 대문자로 변환해줌
=== : 모두 대문자로 이루어져 있는지 확인하는 조건, 현재 문자가 t/f 로 반환
*/
function q29(input) {
  // return input === input.toUpperCase();
  if (input === input.toUpperCase()) {
    return console.log(`입력값:${input} 출력값:YES`);
  } else {
    return console.log(`입력값:${input} 출력값:NO`);
  }
}
//입력값
q29("E");
//출력값    console.log(`입력값:${input}출력값:YES`);
/*--------------------------------------------------------------------*/
/* 30. 문자열 속 문자찾기
문자 pineapple 에는 apple이라는 문자가 숨어있다. 원범이가 문자열 속에 숨어있는 문자를 찾겠대
첫번째 입력에서는 문자열이 입력되고 두번째에는 찾을 문자가 입력되어야함
그 문자가 시작하는 index를 반환하는 프로그램을 만드시오

pineapple is yummy
apple
계획
단어와 단어가 겹칠때 첫번째 인덱스
*/
function q30(input, find) {
  const splitinput = input.split("");
  const splitfind = find.split("");
  console.log(splitinput, splitfind);
}
//입력값
q30("pineapple is yummy", "apple");

//출력값 4
