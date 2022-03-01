//preorder dfs

var verticalTraversal = function (root) {
  if (!root) return [];
  let map = new Map();
  let arr = [];

  preorder(0, 0, root);
  arr.sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2]);

  for (let [x, y, z] of arr) {
    if (map.has(x)) {
      let tempArr = map.get(x);
      tempArr.push(z);
      map.set(x, tempArr);
    } else {
      map.set(x, [z]);
    }
  }
  arr = [];
  for (let i of map.values()) {
    arr.push(i);
  }

  return arr;

  function preorder(x, y, root) {
    if (!root) return 0;

    arr.push([x, y, root.val]);
    if (root.left) preorder(x - 1, y + 1, root.left);
    if (root.right) preorder(x + 1, y + 1, root.right);
  }
};

/*   if(!map.has(x)){
            map.set(x, []);
        }
        map.get(x).push(z); */
