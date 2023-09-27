//Type widening is a.k.a type inference
// let product = "TS";
// product = "JS";

// let price = 10.99;
// price = 9.99;

//........................................
//type aliases cannot contain value e.g. "TS", they can only contain types like string
//Anything that comes after colon (:) in typescript is a type, not a value
type Products = {
  name: "TS";
  price: number;
};

function courseName(course: Products) {
  return course.name;
}
const course = {
  name: "TS" as const,
  price: 10.99,
};

courseName(course);
console.log(courseName(course));
