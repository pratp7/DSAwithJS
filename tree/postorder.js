//recursive
var postorderTraversal = function (root) {
  let arr = [];

  function postorder(root) {
    if (!root) return 0;

    if (root.left) preorder(root.left);
    if (root.right) preorder(root.right);
    arr.push(root.val);
  }

  postorder(root);
  return arr;
};

//iterative
var postorderTraversal = function (root) {
  let stack = [],
    arr = [];

  if (!root) return [];

  stack.push(root);

  while (stack.length) {
    let node = stack.pop();

    arr.push(node.val);

    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }

  return arr.reverse();
};
