// let someStr: unknown = "Hey";
// let discount: unknown = 23;

// let otherNum: number = discount;
// let otherStr: string = discount; // Error! Type 'number' is not assignable to type 'string'.ts(2322

//...............................................
// let discount: unknown = 25;
// let discount: unknown = "Hello";

// let otherNum: number = typeof discount === "number" ? discount : 10;
// console.log(otherNum);

//................................
// let courseName: any = "TS";
// let coursePrice: number = courseName;
// console.log(coursePrice);

//.................................
//Any and Unknown are assignable to one another
// let courseName: any = "TS";
// let coursePrice: unknown = courseName;

//...............................
// let courseName: unknown = "TS";
// let coursePrice: any = courseName;

//...............................
//Not recommended
// let courseName: unknown = "TS";
// let coursePrice: any = courseName;
// let price: number = coursePrice;
// console.log(price);

//..................................
//Recommended
// let courseName: any = "TS";
// let coursePrice: unknown = courseName;
// // let price: number = coursePrice;
// let price: number = typeof coursePrice === "number" ? coursePrice : 9.99;
// console.log(price);

//...................................
//Unknown absorbs the union type while the intersection type absorbs the unknown type
// let courseName: unknown | string = "TS";
// let courseName: unknown | string = 23;
// let productss: string = courseName;

//................................................
// Unknown will be absorbed by the intersection type
// let courseName: unknown & string = "TS";
// let courseName: unknown & string = 24;
// let productss: string = courseName;
