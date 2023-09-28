//Interfaces are used create shapes for an object. It is a special type that allow us to create a blueprint for an object or an instance of a class.
// type Employee = {
//   readonly id: number;
//   name: string;
//   hobbies: string;
// };

//Interface can only provide the type for an object (the object could be an object literal or an instance of a class) but Type aliases on the other hand can provide types for anything e.g. (type name = string or type price = number), this example cannot be done with interface. Interface is solely develop to create a shape for an object but type can create shape for an array, an object, a number, a price or anything.

// interface Employee {
//   readonly id: number;
//   name: string;
//   hobbies: string[];
// }

// function getEmployeeInfo(
//   id: number,
//   name: string,
//   hobbies: string[]
// ): Employee {
//   return {
//     id: id,
//     name: name,
//     hobbies: hobbies,
//   };
// }
// let employee: Employee = getEmployeeInfo(1, "Glenn", ["Reading", "Walking"]);
// console.log(employee);
