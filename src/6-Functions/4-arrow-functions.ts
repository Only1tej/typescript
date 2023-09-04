let holidaySales2 = (
  product: string,
  sales: number,
  tax: number,
  discount: number
): number => {
  let price: number = 0;

  if (product === "laptops") price = 900;
  if (product === "monitors") price = 350;
  if (product === "keyboard") price = 25;

  let totalSalesForIndividualProduct: number = price * sales;

  return (
    totalSalesForIndividualProduct -
    tax * totalSalesForIndividualProduct -
    discount * totalSalesForIndividualProduct
  );
};

const laptops: number = holidaySales1("laptops", 20, 0.15, 0.25);
const monitors: number = holidaySales1("monitors", 15, 0.12, 0.15);
const keyboard: number = holidaySales1("keyboard ", 50, 0.08, 0.45);

console.log(`The total profit from the sales of laptops is $${laptops}`);
console.log(`The total profit from the sales of monitors is $${monitors}`);
console.log(`The total profit from the sales of keyboard is $${keyboard}`);
