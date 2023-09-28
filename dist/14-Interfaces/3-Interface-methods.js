"use strict";
function getEmployeeInfo(id, name, hobbies) {
    return {
        id: id,
        name: name,
        hobbies: hobbies,
        employeeHobbies() {
            return employee.hobbies;
        },
    };
}
let employee = getEmployeeInfo(1, "Glenn", ["Reading", "Walking"]);
console.log(employee);
console.log(employee.employeeHobbies());
