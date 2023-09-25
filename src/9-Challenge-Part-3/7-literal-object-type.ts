//Challenge 1
//Create a function that accept a literal object and return the name property of that object
// function getName(arg: { name: string }): string {
//   return arg.name;
// }
// console.log(getName({ name: "Layla" }));
//Destructuring arg
function getName({ name }: { name: string }): string {
  return name;
}
console.log(getName({ name: "Layla" }));

//Challenge 2
//Create a function that takes an object type with one property which is online, and the type is boolean for that property and simply returns whether the user is online or not
function isOnline({ online }: { online: boolean }): boolean {
  return online;
}
console.log(isOnline({ online: true }));
