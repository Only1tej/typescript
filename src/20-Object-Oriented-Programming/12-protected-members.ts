// //The protected access modifier in TypeScript is similar to private, in that it restricts the visibility of a class member to within the class. However, it differs from private in that it also allows access to members within subclasses of the class.
// // The protected access modifier is similar to the private access modifier, except that protected members can be accessed using their deriving classes. It cannot be access publicly either
// //Protected members are private members that can be accessed within a child class when it extends a base class and they cannot be accessed through a modified outside the base class or the child class

// abstract class Robot {
//   constructor(
//     private name: string,
//     protected model: string,
//     private durability: string,
//     private weight: number
//   ) {}
//   get robotData() {
//     return `${this.name} robot model number ${this.model} has a durability of ${this.durability} and weighs in at ${this.weight}`;
//   }
// }

// class Avdon extends Robot {
//   constructor(
//     public id: number,
//     name: string,
//     model: string,
//     durability: string,
//     weight: number
//   ) {
//     super(name, model, durability, weight);
//   }

//   public getModel(model: string) {
//     return (this.model = model);
//   }
// }

// let avdonRobot = new Avdon(11254, "Avdon5000", "AN741", "Medium", 25);
// // console.log(avdonRobot.model);
// console.log(avdonRobot.getModel("AN4432"));
