function topViewBinaryTree(root) {
  if (!root) return [];
  let map = new Map();
  let stack = [];

  stack.push([0, root]);
  while (stack.length) {
    let node = stack.pop();

    if (map.has(node[0])) {
      let tempArr = map.get(node[0]);
      tempArr.push(node[1].val);
      map.set(node[0], tempArr);
    } else {
      map.set(node[0], [node[1].val]);
    }

    if (node[1].right) stack.push([node[0] + 1, node[1].right]);
    if (node[1].left) stack.push([node[0] - 1, node[1].left]);
  }
  let arr = [...map.keys()];
  arr = arr.sort((a, b) => a - b);
  let newMap = new Map();

  for (let i of arr) {
    newMap.set(i, map.get(i));
  }
  console.log(newMap);
  arr = [];
  for (let i of newMap.values()) {
    arr.push(i[0]);
  }
  return arr;
}
