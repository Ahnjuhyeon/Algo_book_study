/*
10	3	124,000
64	6	768,000
*/
function solution(n, k) {
  const price = n * 12000; //고기가격
  const freeCola = Math.floor(n / 10); // 고기가격 / 10 나머지 절삭
  const colaPrice = (k - freeCola) * 2000; // 시킨 콜라값에서 갯수 빼기
  return price + colaPrice;
}
console.log(solution(64, 6));
