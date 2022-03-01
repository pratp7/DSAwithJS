//recursive approach
var preorderTraversal = function (root) {
  if (!root) return [];
  let arr = [];

  function preorder(root) {
    if (!root) return 0;

    arr.push(root.val);

    if (root.left) preorder(root.left);
    if (root.right) preorder(root.right);
  }

  preorder(root);
  return arr;
};
//iterative approach
var preorderTraversal = function (root) {
  let arr = [],
    stack = [];

  if (!root) return [];

  stack.push(root);

  while (stack.length) {
    let node = stack.pop();
    arr.push(node.val);

    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }

  return arr;
};
