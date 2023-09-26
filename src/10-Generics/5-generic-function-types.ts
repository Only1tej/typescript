// type FuncType<T> = (element: T[]) => number OR
type FuncType<T> = (element: Array<T>) => number;

let getArrayLength: FuncType<number> = (elements) => {
  return elements.length;
};

let arrLength = getArrayLength([1, 2, 3, 4, 5, 6, 7]);
console.log(arrLength);
