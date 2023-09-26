//Challenge 1
//Create a generic object type for an air conditional with two properties
type AirConditional<T> = {
  winter: T;
  summer: T;
};

const myAc: AirConditional<string> = {
  winter: "Warm",
  summer: "Cold",
};

//Challenge 2
//Create a generic type for a smartphone with 3 properties (manufacturer, model and rating), and create an object from that type and store all the values within an array
type Phone<T1, T2, T3> = {
  manufacturer: T1;
  model: T2;
  rating: T3;
};

const myPhone: Phone<string, string, number> = {
  manufacturer: "Samsung",
  model: "J6+",
  rating: 3.5,
};

const phoneSpecs: (string | number | boolean)[] = [
  myPhone.manufacturer,
  myPhone.model,
  myPhone.rating,
];

console.log(phoneSpecs);
