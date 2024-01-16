// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = array.reduceRight((a, b) => a + b, 0);
// console.log(result);
const array1 = [
  [0, 1],
  [2, 3],
  [4, 5],
];

const result = array1.reduceRight((a, b) => a.concat(b));

console.log(result);
// Expected output: Array [4, 5, 2, 3, 0, 1]
