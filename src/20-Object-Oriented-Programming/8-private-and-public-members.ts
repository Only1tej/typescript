//Public access modifier says we can access any property/member outside the class.
//Every member, property, and method by default is public
// class Robot {
//   public readonly id: number;
//   public readonly model: string;
//   public name: string;
//   public durability?: string;
//   private sentient: boolean;

//   constructor(id: number, model: string, name: string, sentient: boolean) {
//     this.id = id;
//     this.model = model;
//     this.name = name;
//     this.sentient = sentient;
//   }
//Or
// class Robot {
//   constructor(
//     public readonly id: number,
//     public readonly model: string,
//     public name: string,
//     private sentient: boolean,
//   ) {
//     this.id = id;
//     this.model = model;
//     this.name = name;
//     this.sentient = sentient;
//   }

//   walk(): void {
//     console.log("This robot can walk");
//   }

//   abilityToWalk(): boolean {
//     return this.sentient;
//   }
// }
// let robot = new Robot(1051, "EX69", "Avdon", true);
// console.log(robot);
// console.log(robot.abilityToWalk());

//Property 'sentient' is private and only accessible within class 'Robot'.
// robot.sentient

// robot.id = 1050

// robot.durability = "High";
// console.log(robot.id);
// console.log(robot.model);
