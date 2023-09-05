// let courseDiscounts = 25
// courseDiscounts = 5

// type CourseDiscounts = number;

// let courseDiscounts: CourseDiscounts = 25;
// courseDiscounts = 5;

//...........................................
// type CourseDiscounts = 25 | 35 | 45 | 75

// let courseDiscounts: CourseDiscounts = 25

//...........................................
// type TSCourse = 'TS'

// let courseName1: TSCourse = 'TS'

//...........................................
//Example of how type aliases provide shape for an object

type MyCourses = {
  name: string;
  price: number;
};

const tsCourse: MyCourses = {
  name: "TS Bootcamp",
  price: 10.99,
};

const jsCourse: MyCourses = {
  name: "JS Bootcamp",
  price: 9.99,
  //   availability: true,
};
console.log(tsCourse, jsCourse);
