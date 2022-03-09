//o(n) and o(n)
function inOrderSuccessor(root, givenNode) {
  let arr = [];
  if (!root) return null;

  inOrder(root);
  function inOrder(root) {
    if (!root) return 0;

    if (root.left) inOrder(root.left);
    arr.push(root.val);
    if (root.right) inOrder(root.right);
  }
  for (let i = 0; i < arr.length; i++) {
    if (i + 1 === arr.length) return new TreeNode(-1);
    if (arr[i] === givenNode.val) return new TreeNode(arr[i + 1]);
  }
}
// O(h) and o(1)
function inOrderSuccessor(root, givenNode) {
  if (!root) return null;

  let successor = null;

  while (root) {
    if (givenNode.val >= root.val) {
      root = root.right;
    } else {
      successor = root;
      root = root.left;
    }
  }
  return successor;
}
