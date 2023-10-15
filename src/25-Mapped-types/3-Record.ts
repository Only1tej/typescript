type Course = {
  name: string;
  price: number;
};
//Original mapped types
// type Product = { [course in "TS" | "JS"]: Course };

//First iteration
// type RecordTYPE<KeyType, ValueType> = { [key in KeyType]: ValueType };

//Second iteration
type RecordTYPE<KeyType extends string, ValueType> = {
  [key in KeyType]: ValueType;
};

/*
 type Record<K extends keyof any, T>={
     [P in K]: T
 }
 let recordKeyType: keyof any
*/

// function getCoursesInfo(course: Product) {
//   return course;
// }
function getCoursesInfo<U extends string, T>(course: RecordTYPE<U, T>) {
  return course;
}

let courses = getCoursesInfo({
  TS: { name: "TS", price: 10.99 },
  JS: { name: "JS", price: 11.99 },
  Python: { name: "Python", price: 12.99 },
  Tailwind: { name: "Tailwind", price: 5.89 },
});

console.log(courses);
