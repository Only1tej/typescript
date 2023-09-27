type Cover<T> = {
  front: T;
  back: T;
};

const bookCover1: Cover<string> = {
  front: "book name",
  back: "author biography",
};
console.log(bookCover1);

const bookCover2: Cover<number> = {
  front: 15,
  back: 17,
};
console.log(bookCover2);

type Product<T1, T2> = {
  name: T1;
  price: T2;
};

const product1: Product<string, number> = {
  name: "TS",
  price: 10.99,
};

const product2: Product<string, string> = {
  name: "TS",
  price: "Not available",
};

console.log(product1, product2);