//"205"	"052"
function solution(rsp) {
  var answer = [...rsp].map((v) => {
    if (v === "0") return "5";
    if (v === "2") return "0";
    if (v === "5") return "2";
  });
  return answer.join("");
}
console.log(solution("205"));
