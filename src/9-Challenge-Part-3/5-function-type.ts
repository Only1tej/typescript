//Challenge 1
//What will the function invocation result in?
// function multiply(n: number): number {
//   return n * n;
// }

// const result: (n: number) => number = multiply;
// console.log(result(11));

//Challenge 2
//What will the function invocation result in?
// function addition(n: number): number {
//   return n + n;
// }
// const result: (n: number) => string = addition;
//Type Error
// console.log(result(25));

//Challenge 3
//Create a function that can accept number, string, and a boolean but returns a string
// function result(n: string | number | boolean): string {
//   return n.toString();
// }

// console.log(result(5));

//Challenge 4
//Create a function that returns an inverted boolean value, (if you pass true, it returns false and vice-versa)
// function boolInverted(arg: boolean): boolean {
//   return !arg;
// }
// console.log(boolInverted(false));

//Challenge 5
//Create a function that either add 1 to a number, subtracts 1 from a number or does nothing to the number and returns the number based on a condition the function should accept  num argument that is going to be a number, and also must accept what kind of operation to perform on that number (i.e. as second argument, it should accept the string add or subtract or do nothing)
// function doSomething(
//   num: number,
//   operation: "add" | "subtract" | "do nothing"
// ): number {
//   if (operation === "add") {
//     return num + 1;
//   } else if (operation === "subtract") {
//     return num - 1;
//   } else {
//     return num;
//   }
// }

//Challenge 6
//What will the function invocation result in?
// function someFunc(){

// }
// const myNum: number = someFunc()
//Type error

//Challenge 7
//What will the function invoocation result in?
// function callAnotherFunc(func: (price: number, course: string) => string) {
//   return func(10.99, "TS");
// }

// let caller = callAnotherFunc(
//   (price, course) => `The ${course} course has a price of ${price}`
// );
// console.log(caller);

//Challenge 8
//Write a type for this function that accepts no paramter and returns a string
// type SomeFunc = () => string;
// const result: SomeFunc = () => "TS BootCamp";
// result();
