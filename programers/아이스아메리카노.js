/*
아메리카노 1잔에 5500
5,500 
[1, 0]
최대로 마실 수 있는 아메리카노의 잔 수와 남는 돈을 
순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.
 */
function solution(money) {
  const coffee = 5500;
  const maxCups = Math.floor(money / coffee); //정수반환 => 최대 잔
  const change = Math.floor(money % coffee); //정수반환 => 잔돈
  return [maxCups, change];
}
console.log(solution(7000));

//다른사람 풀이 와..맞네?
function solution(money) {
  return [Math.floor(money / 5500), money % 5500];
}
