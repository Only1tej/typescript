//Challenge 1
//What will the function invocation result in?
// function productId(): string | number {
//   return 112233;
// }

// let id: string | number = productId();
// console.log(id);

//Challenge 2
//What will the function invocation result in?
// function productId(): string | number {
//   return 112233;
// }

// let id: number = productId()
//number != string | number
//This is gonna throw type error, cos type number is not equal to type string | number

//Challenge 3
//What will the function invocation result in?
function productId(): number {
  return 112233;
}

let id: string | number = productId();
//string | number = number
console.log(id);
