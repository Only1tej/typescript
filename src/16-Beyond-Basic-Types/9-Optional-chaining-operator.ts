type Product = {
  name: string;
  info: ProductInfo | undefined;
};

type ProductInfo = {
  level: string;
  noOfStudents: number | undefined;
};

const courses: Product[] = [
  {
    name: "JS",
    info: {
      level: "Beginner",
      noOfStudents: 2000,
    },
  },
  {
    name: "TS",
    info: {
      level: "Beginner",
      noOfStudents: undefined,
    },
  },
  {
    name: "Tailwind CSS",
    info: undefined,
  },
];
// const SingleCourse = courses.map((course) => course.info?.noOfStudents);
// console.log(SingleCourse);
// OR

// const courseInfo = courses.map((course) => {
//   if (course.info) return course.info.noOfStudents;
//   return undefined;
// });
// console.log(courseInfo);

// OR
// const courseInfos = courses.map((course) => {
//   return course.info ? course.info.noOfStudents : undefined;
// });
// console.log(courseInfos);

// OR
// const courseInformation = courses.map((course) =>
//   course.info ? course.info.noOfStudents : undefined
// );
// console.log(courseInformation);

//OR
//Optional chaining operator
console.log(courses.map((course) => course.info?.noOfStudents));
