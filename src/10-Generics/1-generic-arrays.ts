let numbers: Array<number> = [1, 2, 3];
let strings: Array<string> = ["Hi", "Hey"];

let regularArr: number[] = numbers;
console.log(regularArr);

let boolValues: Array<boolean> = [true, false];

let nestedArr: Array<Array<number>> = [
  [1, 2],
  [3, 4],
];

let mixedArr: Array<string | number> = [1, "Hi"];

let anotherMixedArr: Array<string | number | boolean> = [true, "Hi", 3, "13"];

console.log(
  numbers,
  strings,
  regularArr,
  mixedArr,
  anotherMixedArr,
  nestedArr,
  boolValues
);
