//Challenge 1
//Create a generic array of strings and pass in some value
let myArr: Array<string> = ["a", "b"];

//Challenge 2
//Create a generic arrays of two boolean values
let myBool: Array<boolean> = [true, false];

//Challenge 3
//Create a generic array of an array of string
let myStringArr: Array<Array<string>> = [
  ["hey", "hi", "heyyo"],
  ["hello", "there"],
];

//Challenge 4
//Create a function whose return type is generic array of numbers and add some values as well
function someArr(): Array<number> {
  let numArr = [];
  numArr.push(15);
  numArr.push(35);
  return numArr;
}
console.log(someArr());
console.log("Hello");

//Challenge 5
//Create a function that return a generic array of an array of numbers and add some values as well
function someArray(): Array<Array<number>> {
  let numArr = [];
  numArr.push([15]);
  numArr.push([35]);
  return numArr;
}
console.log(someArray());

//Challenge 6
//Create a function whose return type is a generic array of an array of strings and we need to add values
function someStrings(): Array<Array<string>> {
  let strArr = [];
  strArr.push(["Hi"]);
  strArr.push(["Hello", "Typescript"], ["Typescript"]);
  return strArr;
}
console.log(someStrings());

//Challenge 7
//What do you need to do to extract the value TS from the array?
let longArr: Array<Array<Array<Array<string | number>>>> = [
  [[[1, 2], ["C#"], ["JS", "Java"], ["HTML", "CSS", "TS"]]],
];
console.log(longArr);
console.log(longArr[0]);
console.log(longArr[0][0]);
console.log(longArr[0][0][3]);
console.log(longArr[0][0][3][2]);
