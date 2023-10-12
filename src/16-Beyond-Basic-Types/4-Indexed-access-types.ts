// let product = {
//   name: "TS",
//   price: 10.99,
// };

// let courseName = product.name;
// let courseName1 = product["name"];
// let coursePrice = product.price;
// let coursePrice2 = product["price"];

//'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
//Indexed access types at its simplest form
// type Product = {
//   name: string;
//   price: number;
// };

// type CourseName = Product["name"];
// const courseNames: CourseName = "TS";
// console.log(courseNames);

//-----------------------------------
// type Product = {
//   name: string;
//   price: number;
//   moreInfo: {
//     released: boolean;
//     beginnerFriendly: boolean;
//     level: string;
//   };
// };

// function promoteProject(
//   name: string,
//   price: number,
//   moreInfo: Product["moreInfo"]
// ): Product {
//   return {
//     name: name,
//     price: price,
//     moreInfo: moreInfo,
//   };
// }

// let courseInfo = promoteProject("TS", 10.99, {
//   released: true,
//   beginnerFriendly: true,
//   level: "Beginner - Advanced",
// });

// console.log(courseInfo);

//.......................................
// interface Product {
//   name: string;
//   price: number;
//   moreInfo: {
//     released: boolean;
//     beginnerFriendly: boolean;
//     level: string;
//   };
// }

// let courseName: Product["name"] = "TS";
// let coursePrice: Product["price"] = 10.99;
// let courseLevel: Product["moreInfo"]["level"] = "Beginner - Advance ";

// // let courseInfo: Product['name' | 'price'] = 'TS'
// let courseInfo: Product["name" | "price"] = 10.99;
// console.log(courseLevel);
