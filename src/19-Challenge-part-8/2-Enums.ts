//Challenge 1
//Create a group of five constant for five products and initialize the enums with 1

// enum Products {
//   "TS Bootcamp" = 1,
//   "JS Bootcamp",
//   "Python Bootcamp",
//   "CSS Layout",
//   "Flexbox Grid course",
// }

//Challenge 2
//Perform an exhaustiveness checking for the previous enum and return their prices.

enum Products {
  "TS Bootcamp" = 1,
  "JS Bootcamp",
  "Python Bootcamp",
  "CSS Layout",
  "Flexbox Grid course",
  //   "Tailwind",
}

// function setCoursePrice(course: Products): string {
//   switch (course) {
//     case Products["TS Bootcamp"]:
//       return "$25.99";
//     case Products["JS Bootcamp"]:
//       return "$29.99";
//     case Products["Python Bootcamp"]:
//       return "$12.55";
//     case Products["CSS Layout"]:
//       return "$10.45";
//     case Products["Flexbox Grid course"]:
//       return "$16.56";
//     default:
//       return courseWarning(course);
//     //   throw new Error(`The ${course} course has no price yet.`);
//   }
// }

// function courseWarning(course: never): never {
//   throw new Error(`The ${course} course has no price yet.`);
// }

// console.log(setCoursePrice(Products["TS Bootcamp"]));
// console.log(setCoursePrice(Products["JS Bootcamp"]));
// console.log(setCoursePrice(Products["Flexbox Grid course"]));
