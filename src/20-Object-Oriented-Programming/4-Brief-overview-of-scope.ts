//Global scope-------------------------------
// var myName:string = "John";
// let myName:string = "John";
// const myName: string = "John";

// function someName() {
//   console.log(myName);
// }
// someName();

// console.log(myName);

//Local/Function scope--------------------------------
//var is a function scope, cannot work outside function block...
function myFunc() {
  var num: number = 10;
  let num1: number = 12;
  console.log(num);
  console.log(num1);
}
myFunc();
// console.log(num);
// console.log(num1);

//Block scope---------------------------------
{
  var nums2: number = 100;
  let nums3: number = 200;
  const nums4: number = 300;

  console.log("var inside the block", nums2);
  console.log("let inside the block", nums3);
  console.log("consts inside the block", nums4);
}
console.log("var outside the block", nums2);
// console.log("let outside the block", nums3);
// console.log("consts inside the block", nums4);
//Let and const doesn't function outside their block, they are only accessible within their block
