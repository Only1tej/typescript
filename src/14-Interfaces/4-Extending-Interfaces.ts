// interface Department {
//   department: string[];
// }

// interface Employee extends Department {
//   readonly id: number;
//   name: string;
//   hobbies: string[];
//   employeeHobbies(): string[];
// }

// function getEmployeeInfo(
//   id: number,
//   name: string,
//   department: string[],
//   hobbies: string[]
// ): Employee {
//   return {
//     id: id,
//     name: name,
//     department: department,
//     hobbies: hobbies,
//     employeeHobbies() {
//       return employee.hobbies;
//     },
//   };
// }
// let employee: Employee = getEmployeeInfo(
//   1,
//   "Glenn",
//   ["Development"],
//   ["Reading", "Walking"]
// );
// console.log(employee);
