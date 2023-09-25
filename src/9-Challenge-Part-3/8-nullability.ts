//Challenge 1
//What is going to be the result of this variable assignment
// let vague: number | undefined = null
//Type error (The only type that can accept the value of null is the type null)

//Challenge 2
//What is going to be the result of the second variable assignment (vague2)?
// let vague1: boolean | undefined = true ? true : undefined;
// let vague2: boolean = vague1;
//Result = type error (Type 'boolean | undefined' is not assignable to type 'boolean'. Type 'undefined' is not assignable to type 'boolean')

//Challenge 3
// What is going to be the result of the following variable assignment?
let vague: string | undefined = undefined;
//Result = undefined

//Challenge 4
//What is the value of vague2
// let vague1: boolean | undefined = true ? true : undefined;
let vague1: boolean | undefined = true ? undefined : true;
let vague2: boolean;
if (vague1 === undefined) {
  vague2 = false;
} else {
  vague2 = true;
}
console.log(vague2);

//Challenge 5
//Create a function that produces value based on conditions, function accepts string or undefined and returns number or undefined
function nullNarrow(arg: string | undefined): number | undefined {
  if (arg === undefined || isNaN(parseInt(arg))) {
    return undefined;
  } else {
    return parseInt(arg);
  }
}

console.log(nullNarrow("500"));
