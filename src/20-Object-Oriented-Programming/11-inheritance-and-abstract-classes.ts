// abstract class Robot {
//   constructor(
//     public name: string,
//     public model: string,
//     public durability: string,
//     public weight: number
//   ) {}
//   get robotData() {
//     return `${this.name} robot model number ${this.model} has a durability of ${this.durability} and weighs in at ${this.weight}`;
//   }
// }
// //The class ( for e.g. Robot) where the other class inherit is called the base class, the super class, the parent class while the class that inherit from this one are called the child class, the sub class or the derived class.
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
// }
// class Veax extends Robot {
//   constructor(
//     public id: number,
//     name: string,
//     model: string,
//     durability: string,
//     weight: number
//   ) {
//     super(name, model, durability, weight);
//   }
// }

// let avdonRobot = new Avdon(11254, "Avdon5000", "AN741", "Medium", 25);
// console.log(avdonRobot);
// let veaxRobot = new Veax(11981, "Veax3900", "VX501", "High", 45);
// console.log(veaxRobot);

// //Abstract class states that when you have a base class, the base class should not be instatiated on it own because it doesn't make sense and it is not a complete class

// // let robot = new Robot();
