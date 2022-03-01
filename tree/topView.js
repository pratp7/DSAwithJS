function topViewBinaryTree(root) {
  if (!root) return [];
  let map = new Map();
  let queue = [],
    res = [];

  queue.push([0, root]);

  while (queue.length) {
    let arr = queue.shift();
    let [vl, node] = arr;

    if (!map.has(vl)) {
      map.set(vl, []);
    }
    map.get(vl).push(node.val);

    if (node.left) queue.push([vl - 1, node.left]);
    if (node.right) queue.push([vl + 1, node.right]);
  }

  let sortedIndex = [...map.keys()].sort((a, b) => a - b);

  for (let i of sortedIndex) {
    res.push(map.get(i)[0]);
  }

  return res;
}
