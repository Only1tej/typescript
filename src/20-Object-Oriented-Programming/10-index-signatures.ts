//Here, the shape of the class is fluid, flexible and so the object will be flexible as well. Instead of writing diff body parts/properties/object for different robots, you can have a signature that represents them all, and you add the properties/parts/object to it as you want to. You don't have to cluter the constructor with a lot of properties that you might not use for your object. (You can check index signature in 16)
// class Robot {
//   [bodyParts: string]: boolean;
// }

// let robot1 = new Robot();
// console.log(robot1);
// robot1.hasHands = true;
// console.log(robot1);

// //---------------------------------
// let robot2 = new Robot();
// console.log(robot2);
// robot2.hasLegs = true;
// console.log(robot2);

// //---------------------------------
// let robot3 = new Robot();
// robot3.hasHead = true;
// robot3.hasHand = true;
// robot3.hasLegs = true;
// console.log(robot3);
