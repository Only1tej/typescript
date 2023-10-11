//You must have extracted the type before you can access the key
const course = {
  name: "TS",
  price: 10.99,
};

type Product = typeof course;
type ProductKeys = keyof Product;
type ProductKeyTypes = Product[ProductKeys];

let product: Product = {
  name: "JS",
  price: 9.99,
};

function getCourseInfo<T, K extends keyof T>(course: T, info: K) {
  return course[info];
}

let courseName = getCourseInfo(course, "name");
let coursePrice = getCourseInfo(course, "price");

console.log(courseName);
console.log(coursePrice);

// K extends keyof T => K strictly represents key of T, K must at the least include all the keys from the object called T

//When you combine typeof, keyof and index access type, it is called Look-up type because we are looking something up and we are extracting every possible portion or a type associated with that and we are using it to create this kind of generic fucntion (getCourseInfo)
