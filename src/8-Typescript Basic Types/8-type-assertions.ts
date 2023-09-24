// type Employee = {
//   id: number;
//   name: string;
//   department: string;
// };

// const employee: Employee = {
//   id: 1,
//   name: "Scott",
//   department: "Design",
// };

// const hiredEmployee = JSON.stringify(employee);
// console.log(typeof hiredEmployee);

//To retrieve it back from the local storage
// function getEmployeeInfo(employeeObject: string) {
// return JSON.parse(employeeObject)
//Old method
//   return <Employee>JSON.parse(employeeObject);
//   return (<Employee>JSON.parse(employeeObject)).id;
//   return (<Employee>JSON.parse(employeeObject)).name;
//   return (<Employee>JSON.parse(employeeObject)).department;
//New method
//   return JSON.parse(employeeObject) as Employee;
// }

// console.log(getEmployeeInfo(hiredEmployee));
