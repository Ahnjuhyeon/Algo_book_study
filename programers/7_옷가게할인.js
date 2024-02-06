/*
 10만 원 이상 사면 5%, 30만 원 이상 사면 10%, 50만 원 이상 사면 20%를 할인해줍니다.
구매한 옷의 가격 price가 주어질 때, 지불해야 할 금액을 return 하도록 solution 함수를 완성해보세요.
580,000	464,000
*/

function solution(price) {
  if (500000 <= price) {
    return Math.floor(price * 0.8);
  } else if (300000 <= price) {
    return Math.floor(price * 0.9);
  } else if (100000 <= price) {
    return Math.floor(price * 0.95);
  } else {
    return price;
  }
}
console.log(solution(150050));

//다른사람 ~~ 는 틸트 연산자로 Math.floor() 랑 같단다
function solution(price) {
  price =
    price >= 500000
      ? price * 0.8
      : price >= 300000
      ? price * 0.9
      : price >= 100000
      ? price * 0.95
      : price;
  return ~~price;
}
