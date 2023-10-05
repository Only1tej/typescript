enum Employees {
  Name = "John Smith",
  Job = "Developer",
}
console.log(Employees);

function getEmployeeInfo(employee: Employees): Employees {
  return employee;
}
console.log(getEmployeeInfo(Employees.Name));
console.log(getEmployeeInfo(Employees.Job));
