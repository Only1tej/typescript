//Getters and setters are functions/methods, technically accessors that allow us to access the value of private members outside the class and also modify those values outside the class
//Access modifiers - private, public, protected etc
// class Robot {
//   public durability?: string;

//   constructor(
//     public readonly id: number,
//     public readonly model: string,
//     public name: string,
//     private _sentient: boolean
//   ) {}

//   walk(): void {
//     console.log("This robot can walk");
//   }

//   get sentient(): boolean {
//     return this._sentient;
//   }
//   set sentient(sentient: boolean) {
//     this._sentient = sentient;
//   }
// }
// let robot = new Robot(1051, "EX69", "Avdon", true);
// console.log(robot.sentient);
// robot.sentient = false;
// console.log(robot.sentient);
