const array = ["one", "two", "three", "four", "five"];

array.splice(1, 1, "hello");
console.log(array);
// [ 'one', 'hello', 'three', 'four', 'five' ]

array.splice(3, 1, "world");
console.log(array);
// [ 'one', 'hello', 'three', 'world', 'five' ]

console.log(array);
// [ 'one', 'hello', 'three', 'world', 'five' ]
// 원본 배열은 변형된다
