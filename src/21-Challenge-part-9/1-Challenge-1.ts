//Challenge 1
//What will the following function invocation prints?

type Department = {
  department: string;
};

// type Product = {
//   name: string;
// };

// type ProductInfo = Department & Product;

// function getProductInfo({ department }: ProductInfo): string {
//   return department;
// }

// console.log(getProductInfo({ department: "Electronics", name: "M8" }));

//Challenge 2
//What value will the products array log?
const products: string[] = ["Hat", "Jeans", "Jacket"];
const mixedStuff: (string | number)[] = products;
mixedStuff.push(13);

console.log(products);

//Challenge 3
//Create a function that returns the length of a string array or undefined if the argument is undefined

function myFunc(arg: string[] | undefined): number | undefined {
  //   if (arg === undefined) {
  //     return undefined;
  //   } else {
  //     return arg.length;
  //   }

  //ANother way
  //   return arg === undefined ? undefined : arg.length;

  //Another way
  //AND operator (&&) returns the first falsy value that it finds, if arg = undefined, it will return undefined. but if it is defined (i.e. contains an array of string), that means both side are truthy, then it returns the right side of the equation
  return arg && arg.length;
}

console.log(myFunc(undefined));
console.log(myFunc(["Hi", "Hey", "Hello", "What's up", "There", "Defined"]));

//Challenge 4
//Create a function that accepts either a number or undefined. If a number is passed then it returns the number otherwise it reutrns 1

function myNum(arg: number | undefined): number {
  //   if (typeof arg === "number") {
  //     return arg;
  //   } else {
  //     return 1;
  //   }

  //Another way
  //   if (arg === undefined) {
  //     return 1;
  //   } else {
  //     return arg;
  //   }

  //Another way
  //   return typeof arg === "number" ? arg : 1;

  //Another way
  return arg || 1;
}

console.log(myNum(23));
console.log(myNum(undefined));

//Challenge 5
//What value will the status property log?

type User1 = {
  online: true;
  status: string;
};

type User2 = {
  online: false;
};

type User = User1 | User2;

//This is called Union discrimination
// const userInfo: User = {
//   online: false,
//   status: "Something cool",
// };

// console.log(userInfo.status);

//Answer => Property 'status' does not exist on type 'User'. Property 'status' does not exist on type 'User2'.

// Challenge 6
// What will the onlineCourse object log?

// interface Product {
//   name: string;
// }

// interface Product {
//   isPublished: boolean;
// }

// let onlineCourse: Product = {
//   name: "TS Bootcamp",
//   isPublished: true,
// };

// console.log(onlineCourse);

// Challenge 7
// Create a product class with 2 properties, name and number of students. Add a method to this class that would return the string 'Best Seller' if a course has equal to or more than 5000 students, otherwise it should print 'Not so much'

class Course {
  name: string;
  noOfStudents: number;
  constructor(name: string, noOfStudents: number) {
    this.name = name;
    this.noOfStudents = noOfStudents;
  }

  bestSeller(): string {
    return this.noOfStudents >= 5000 ? "Best Seller" : "Not so much";
  }
}

const flexCourse = new Course("Flexbox Course", 4500);
const tailwindCourse = new Course("Tailwind Course", 5500);

console.log(flexCourse.bestSeller());
console.log(tailwindCourse.bestSeller());

//Challenge 8
//Write a function that sets the price of a course and takes either a number or undefined. If undefined is passed, it returns a price of 9.99, otherwise it returns the given price

function setCoursePrice(price: number | undefined): number {
  //   return price === undefined ? 9.99 : price;

  //Another way
  //Nullish coalescing operator (??) => if the parameter is undefined, it automatically return the right side, but if the price is defined, it will just return that and whatever is on the right side does not matter. The nullish coalescing operator always return the left side as long as it is not null or undefined, if the left side is null or undefined, it retuens the right side
  return price ?? 9.99;
}
console.log(setCoursePrice(12.88));
console.log(setCoursePrice(undefined));

//Challenge 9
// what will the following function invocations result in?

function add(price: number, sales?: number) {
  return price * (sales ?? 1);
}

console.log(add(9.99, 4));
console.log(add(10.99));

//Challenge 10
//What will the function invocation result in?

// type SuceededAPICall = {
//   response: "success";
//   value: number;
// };

// type FailedAPICall = {
//   response: "Failure";
//   reason: string;
// };

// type APICall = SuceededAPICall | FailedAPICall;

// function APICallStatus(s: string): APICall {
//   const n: number = Number(s);
//   if (Number.isNaN(n)) {
//     return {
//       response: "Failure",
//       reason: "String cannot be converted to number",
//     };
//   } else {
//     return { response: "success", value: n };
//   }
// }

// console.log(APICallStatus("hey"));
// console.log(APICallStatus("23"));

//Challenge 11
// What will the funcstion invocation result in?

// type SuceededAPICall = {
//   response: "success";
//   value: number;
// };

// type FailedAPICall = {
//   response: "Failure";
//   reason: string;
// };

// type APICall = SuceededAPICall | FailedAPICall;

// function APICallStatus(s: string): APICall {
//   const n: number = Number(s);
//   if (Number.isNaN(n)) {
//     return {
//       response: "Failure",
//       reason: "The string passed cannot be converted into a number",
//     };
//   } else {
//     return { response: "success", value: n };
//   }
// }

// console.log(APICallStatus("10"));
//This is called Discriminated Union
// console.log(APICallStatus("10").value);
//Answer => Property 'value' does not exist on type 'APICall'. Property 'value' does not exist on type 'FailedAPICall'.

//Challenge 12
//What will the console log ?

type SuceededAPICall = {
  response: "success";
  value: number;
};

type FailedAPICall = {
  response: "Failure";
  reason: string;
};

type APICall = SuceededAPICall | FailedAPICall;

function APICallStatus(s: string): APICall {
  const n: number = Number(s);
  if (Number.isNaN(n)) {
    return {
      response: "Failure",
      reason: "The string passed cannot be converted into a number",
    };
  } else {
    return { response: "success", value: n };
  }
}

let apiCallResult = APICallStatus("10");
// let apiCallResult = APICallStatus("10t");
console.log(
  apiCallResult.response === "success" ? apiCallResult.value : undefined
);

//Challenge 13
// Create a product class with a name property and a holidaySales method that returns true. Then create an interface called ProductInfo that extends the class that includes a price property of type number. Finally create an object from the interface and log the object

// class Product {
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }

//   holidaySales() {
//     return true;
//   }
// }

// interface ProductInfo extends Product {
//   price: number;
// }

// const product: ProductInfo = {
//   name: "TS Bootcamp",
//   holidaySales: () => true,
//   price: 19.99,
// };
// console.log(product);

//Challenge 14
//What will the course variable log?

// interface Product {
//   name: string;
// }
// class TSCourse implements Product {
//   constructor(public name: string) {}
// }
// let course = new TSCourse("TS Bootcamp");
// console.log(course);

//Challenge 15
//What will the course variable log?
// type Product = {
//   name: string;
// };
// class TSCourse implements Product {
//   constructor(public name: string) {}
// }
// let course = new TSCourse("TS Bootcamp");
// console.log(course);

//Challlenge 16
// What will the course variable log?

// interface Product {
//   name: string;
// }
// class TSCourse implements Product {
//   constructor(public name: number) {}
// }
// let course = new TSCourse("TS Bootcamp");
// console.log(course);

//Result is (Type Error) Type 'number' is not assignable to type 'string'.
