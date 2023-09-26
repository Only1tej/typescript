let mySet = new Set([1, 2, 3]);

mySet.add(4);
console.log(mySet.has(5));
console.log(mySet);

let mixedData: Set<string | number> = new Set(["Hi", 1]);
console.log(mixedData);

// let myArr: (string | number)[] = mixedData;
// let mySet2: Set<number> = [1, 2, 3 ];
console.log(mixedData.size);
//size is for Set what length is for Array
