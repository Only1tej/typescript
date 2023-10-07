class Robot {
    constructor(id, model, name) {
        this.id = id;
        this.model = model;
        this.name = name;
    }
    walk() {
        console.log("This robot can walk");
    }
}
let robot = new Robot(1051, "EX69", "Avdon");
console.log(robot);
console.log(robot.id);
console.log(robot.model);
console.log(robot.name);
robot.walk();
console.log(typeof robot);
console.log(robot instanceof Robot);
let robot1 = {};
console.log(robot1 instanceof Robot);
