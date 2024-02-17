//".... . .-.. .-.. ---"	"hello"

const morse = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
};
function solution(letter) {
  const morseCode = letter.split(" "); // 쪼갠다음
  const alphabetValue = morseCode.map((v) => morse[v]); //맵 돌려서 모스의 값이랑 같은것들을 가져옴
  return alphabetValue.join(""); // 배열을 문자열로 변환
}

console.log(solution(".... . .-.. .-.. ---"));
