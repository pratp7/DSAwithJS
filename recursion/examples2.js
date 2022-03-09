//print all the subset of an Array itreative
let arr = [3, 1, 2, 4, 5];

let res = [[]];

for (let i = 0; i < arr.length; i++) {
  let temp = "";
  for (let j = i; j < arr.length; j++) {
    temp += arr[j];

    res.push(temp.split("").map((i) => Number(i)));
  }
}

// console.log(res);

//print all the subset of an Array recursive
function subset(index, res) {
  if (index >= arr.length) {
    console.log(res);
    return;
  }
  res.push(arr[index]);
  subset(index + 1, res);
  res.pop();
  subset(index + 1, res);
}

subset(0, []);
