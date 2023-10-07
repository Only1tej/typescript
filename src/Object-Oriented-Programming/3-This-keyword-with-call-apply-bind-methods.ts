//--------------------------1
const person = {
  objFunc(): void {
    console.log("Object noni", this);
  },
};
// person.objFunc();

//--------------------------2
class Test {
  classFunc(): void {
    console.log("class", this);
  }
}
let test = new Test();
// test.classFunc();

//--------------------------3
// function addition(): void {
//   console.log("Function", this);
// }
function addition(a: number, b: number): void {
  console.log("Function", this, a + b);
}
// addition.call({ name: "John" }, 10, 50);

// apply() is used for array of arguments and call() for object of arguments

// addition.apply({ name: "John" }, [32, 10]);

//Apply method binds the this keyword of a function that doesn't have the this keyword to an object and that object has to be a context in which the function is being referenced or called
//Apply is very similar to the call function. The only difference is that in apply you can pass an array as an argument list. Bind is a function that helps you create another function that you can execute later with the new context of this that is provided.

let operation1 = addition.bind({ name: "Johan" }, 25, 35);
let operation2 = addition.bind({ name: "Johanna" }, 250, 350);
operation1();
operation2();
