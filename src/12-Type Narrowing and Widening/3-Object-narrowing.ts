type MagazineInfo = {
  name: string;
  author: string;
  sale: number;
  international: boolean;
  price: number;
  publicationYear: number;
};

let magazine: MagazineInfo = {
  name: "Health Unleashed",
  author: "Muslim Helalee",
  sale: 1111,
  international: true,
  price: 10.99,
  publicationYear: 2023,
};

// console.log(magazine);
// console.log(magazine.author);
console.log(magazine);

type MagazineName = {
  name: string;
};

let magazineName: MagazineName = magazine;
console.log(magazineName);
console.log(magazineName.name);
//Object narrowing is when you don't have access to other properties except the name
