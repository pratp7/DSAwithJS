var diameterOfBinaryTree = function (root) {
  let res = 0;
  function height(root) {
    if (!root) return 0;
    let lh = height(root.left);
    let rh = height(root.right);
    res = Math.max(res, lh + rh);
    return 1 + Math.max(lh, rh);
  }

  height(root);
  return res;
};
