// const map = new Map([
//   ["name", "John"],
//   ["age", 21],
// ]);
// console.log(map);

// const myObj = {};

const a = { key: 1 };
const b = {};

// myObj[a] = "a";
// myObj[b] = "b";

// console.log(myObj);
let arr = [6];

const myMap = new Map([
  [a, "a"],
  [b, "b"],
  ["number", "key"],
  [[1, 2, 3], "arr"],
  [1, 2],
]);

// myMap.set(2, "c");
if (myMap.has(arr[0])) {
  myMap.set(arr[0], myMap.get(arr[0]) + 2);
}

console.log(myMap);
myMap.delete("c"); // delete method removes the elements according to the key passed
// myMap.set("c", "c");
// myMap.set((c = {}), "c");
// myMap.delete(c);

// myMap.clear();

console.log("avalue- ", myMap.get("number"));

console.log(myMap.size);
console.log(myMap.has(a)); //it will search by key

console.log(myMap);
