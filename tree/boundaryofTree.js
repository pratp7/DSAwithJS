let arr = [];

function isLeaf(root) {
  if (!root) return 0;

  if (!root.left && !root.right) {
    return true;
  }

  return false;
}
function leftNodes(root) {
  let curr = root.left;

  while (curr) {
    if (!isLeaf(curr)) arr.push(curr.val);
    if (curr.left) curr = curr.left;
    else curr = curr.right;
  }
}

function rightNodes(root) {
  let temp = [];
  let curr = root.right;

  while (curr) {
    if (!isLeaf(curr)) temp.push(curr.val);
    if (curr.right) curr = curr.right;
    else curr = curr.left;
  }

  for (let i = temp.length - 1; i >= 0; i--) {
    arr.push(temp[i]);
  }
}

function leavesNodes(root) {
  if (isLeaf(root)) {
    arr.push(root.val);
    return;
  }

  if (root.left) leavesNodes(root.left);
  if (root.right) leavesNodes(root.right);
}

function binaryTreeBoundaryTraversal(root) {
  if (!root) return [];
  if (!isLeaf(root)) arr.push(root.val);

  leftNodes(root);
  leavesNodes(root);
  rightNodes(root);

  return arr;
}
