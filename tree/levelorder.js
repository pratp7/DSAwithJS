var levelOrder = function (root) {
  let queue = [],
    res = [];

  if (!root) return null;

  queue.push(root);

  while (queue.length) {
    let node = queue.shift();
    res.push(node.val);

    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }

  console.log(res);
};

var levelOrder = function (root) {
  let queue = [],
    res = [];

  if (!root) return [];

  queue.push(root);

  while (queue.length) {
    let len = queue.length;

    res.push(queue.map((el) => el.val));

    while (len > 0) {
      let node = queue.shift();

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
      len--;
    }
  }
  return res;
};

//recursive

var levelOrder = function (root) {
  let arr = [];

  function traverse(node, level, arrays) {
    if (node === null) return;

    if (!arrays[level]) {
      arrays[level] = [node.val];
    } else {
      arrays[level].push(node.val);
    }

    traverse(node.left, level + 1, arrays);
    traverse(node.right, level + 1, arrays);
  }

  traverse(root, 0, arr);
  return arr;
};
