//Partial type is a flexible way to create an object that could contain some or all of the properties, but none of the properties are required to be existent within the object.
//...............................................
// type Product = {
//   name?: string;
//   price?: number;
// };
// let course: Product = { name: "Mill" };

//...............................................
// type Product = {
//   name: string;
//   price: number;
// };

// let course: Partial<Product> = {
//   name: "Mill",
// };
// course.name = "JS";

// let courseName: string = course.name
