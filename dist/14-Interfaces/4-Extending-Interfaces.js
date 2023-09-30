"use strict";
function getEmployeeInfo(id, name, department, hobbies) {
    return {
        id: id,
        name: name,
        department: department,
        hobbies: hobbies,
        employeeHobbies() {
            return employee.hobbies;
        },
    };
}
let employee = getEmployeeInfo(1, "Glenn", ["Development"], ["Reading", "Walking"]);
console.log(employee);
