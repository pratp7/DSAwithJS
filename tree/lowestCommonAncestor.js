function commonAncestor(root, p, q) {
  if (!root) return null;

  if (root === p || root === q) return root;

  let left = commonAncestor(root.left, p, q);
  let right = commonAncestor(root.right, p, q);

  if (!left && !right) return null;
  if (left && right) return root;
  if (left) return left;
  if (right) return right;
}
