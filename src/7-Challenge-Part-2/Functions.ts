//Challenge 1
//Create a function that return that the multiplication of two arbitrary numbers and returns a type error when we pass in a string

function myAnswer(num1: number, num2: number): number {
  return num1 * num2;
}

myAnswer(2, 4);
myAnswer(66, 8);
myAnswer(7, 9);

//Challenge 2
//Simulate a type error for the return value of a function that has an arbitrary type.
function emailList(email: string): string {
  return email;
}

// emailList(15)

//Challenge 3
//Create an arrow function that returns the addition of a number and a boolean type
// let add = (num: number, bool: boolean): number => num + bool; //(this is called implicit return, i.e no code block and no return keyword)

// Challenge 4
//Create a function that make words pluralize
let pluralize = function (str: string): string {
  return str + "s";
};
const caker = pluralize("cake");
// console.log(caker);
// console.log(pluralize("death"));

//Challenge 5
//Write a function that adds 1 to a number or subtract 1 from a number depending on the boolean valuation (if true it adds 1, if false it subtracts 1 from the passed number)
function decideOperation(num: number, bool: boolean): number {
  //Long answer
  if (bool) return num + 1;
  return num - 1;
  //Short answer
  // bool ? num + 1 : num - 1;
}
// console.log(decideOperation(18, false));

//Challenge 6
//Create a function that takes in an array of numbers and returns that same array but if anything else is passed within that array (like string or bool), it throws an error
// function myArr(arr: number[]): number[] {
//   return arr;
// }
// console.log(myArr([2, 3, 4, 5, 6]));
// console.log(myArr([1, "3", 4]));
