function mirrorBinaryTree(root) {
  let queue = [],
    curr = root;

  queue.push(curr);

  while (queue.length) {
    let node = queue.shift();

    let tempNode = node.right;
    node.right = node.left;
    node.left = tempNode;

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return root;
}
