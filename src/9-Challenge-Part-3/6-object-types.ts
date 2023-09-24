//Challenge 1
//Create an object type that has three properties and create an object from that type
// type Employee = {
//   name: string;
//   age: number;
//   job: string;
// };

// const employee: Employee = {
//   name: "John",
//   age: 40,
//   job: "Optometrist",
// };

// console.log(employee);

//Challenge 2
//Access the published property from the "myCourse" object using the bracket notation and dot notation
type OnlineCourse = {
  name: string;
  platform: string;
  features: string[];
  "meta-data": {
    published: boolean;
  };
};

let myCourse: OnlineCourse = {
  name: "TS Bootcamp",
  platform: "Udemy",
  features: ["practical", "Excercise oriented", "Modern TS concepts"],
  "meta-data": {
    published: true,
  },
};
// first way
const check = myCourse["meta-data"]["published"];
console.log(check);
//second way
const check2 = myCourse["meta-data"].published;
console.log(check2);

//Challenge 3
// (Tip: Type annotation does not refer to the object key but to the object value
// eg name: string,
//)
//Fix the error with this code by modifying the type without bringing any changes to product1 and product2
// type Product = {
//   name: string;
//   publishedStatus?: boolean;
// };

// const product1: Product = { name: "TS Bootcamp" };
// const product2: Product = { name: "TS Bootcamp", publishedStatus: true };
// console.log(product1, product2);

//Challenge 4
//What will the product object log to the console?
// const onlineCourse = { name: "TS Bootcamp", price: 10.99 };
// const product = { ...onlineCourse, released: true };
// console.log(product);

//Chalenge 5
//Create a product type and add holiday's method to it, that returns a string SailIsOn and create an object that will print the string on the console
// first way
// type Product = {
//   holidaySale: () => string;
// };
// second way
type Product = {
  holidaySales(): string;
  seasonalSales(): string;
};

const product: Product = {
  holidaySales: () => "sale is on",
  seasonalSales: () => "Sale is off for now, till futher notice",
};
console.log(product.holidaySales());
console.log(product.seasonalSales());
