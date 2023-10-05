//Array of numbers
// let numbers: number[] = [1, 2, 3, 4, 5];
// console.log(numbers);

//Array of strings
// let products: string[] = ["hats", "shirts", "jeans"];
// console.log(products);

//Array of strings and numbers
let mixData1: (string | number)[] = ["hi", 25, "hello"];
// console.log(mixData1);

//Array of strings, boolean and numbers
let mixData2: (string | number | boolean)[] = ["hi", 25, "hello", true];
// console.log(mixData2);

//Nested number type array
let myNums: number[][] = [
  [1, 2],
  [3, 4],
];
// console.log(myNums);

//Nested string type array
let myStrings: string[][] = [["hi"], ["hello", "there"]];

//Nested array of number and string
let myMix: (number | string)[][] = [[2, "hi"], [12, 23], ["hello"]];
console.log(myMix);
