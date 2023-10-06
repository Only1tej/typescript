//Challenge 1
//Write a function that handles whether a product is viewed or not, if the product is viewed once or more then the function has to return true. If the product has not been viewed, the product count is zero and the function has to return false
function productView(arg: number | true): boolean {
  //long version
  if ((typeof arg === "number" && arg > 0) || arg === true) {
    return true;
  } else {
    return false;
  }
  //Short version
  // return arg === true ? true : arg > 0;
}
// console.log(productView(8));

//Challenge 2
//Create a function that returns the first item of an array. That function could either accept a single item or accept an array of any type, like a generic array, and if a single item is passed, we return that single item.
function arrayOrItem<T>(elements: Array<T> | T): T {
  if (Array.isArray(elements)) {
    return elements[0];
  } else {
    return elements;
  }
}
console.log(arrayOrItem<number>([1, 2, 3, 4]));
console.log(arrayOrItem<boolean>([false, true, false]));
console.log(arrayOrItem<string>(["Hi", "Hey", "Hello"]));
console.log(arrayOrItem<string>("What's up"));

//Challenge 3
//Create a function that accept an object, and that object has to be create with the object type. The function could accept a singular object or an array of objects, the function return depends on what the function accepts
// type Employee = {
//   name: string;
// };

// function myFunc(employeeOrEmployees: Employee | Employee[]) {
//   if (Array.isArray(employeeOrEmployees)) {
//     return employeeOrEmployees.length;
//   } else {
//     return employeeOrEmployees.name;
//   }
// }
