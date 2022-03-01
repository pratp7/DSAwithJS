//recursive
var inorderTraversal = function (root) {
  let arr = [];

  function inorder(root) {
    if (!root) return 0;

    if (root.left) inorder(root.left);
    arr.push(root.val);
    if (root.right) inorder(root.right);
  }

  inorder(root);
  return arr;
};

//iterative

var inorderTraversal = function (root) {
  let stack = [],
    arr = [],
    curr = null;

  if (!root) return [];

  curr = root;
  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }

    curr = stack.pop();
    arr.push(curr.val);
    curr = curr.right;
  }

  return arr;
};
