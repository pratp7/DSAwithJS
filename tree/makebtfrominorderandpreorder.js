// o(n2) tc and sc o(n2)

function getElementsFromGivenArr(arr, startIndex, resindex) {
  let res = [];
  for (let i = startIndex; i <= resindex; i++) {
    res.push(arr[i]);
  }

  return res;
}

function constructBinaryTreeFromPreorderAndInorderTraversal(preorder, inorder) {
  if (!preorder.length) return null;

  if (preorder.length === 1) return new TreeNode(preorder[0]);

  let map = new Map();

  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }

  let root = new TreeNode(preorder[0]);

  let rootInd = map.get(preorder[0]);
  let pl = getElementsFromGivenArr(preorder, 1, rootInd);
  let il = getElementsFromGivenArr(inorder, 0, rootInd - 1);
  let pr = getElementsFromGivenArr(preorder, rootInd + 1, preorder.length - 1);
  let ir = getElementsFromGivenArr(inorder, rootInd + 1, preorder.length - 1);

  root.left = constructBinaryTreeFromPreorderAndInorderTraversal(pl, il);
  root.right = constructBinaryTreeFromPreorderAndInorderTraversal(pr, ir);

  return root;
}

// o(n) tc and o(n) of sc

function constructBinaryTreeFromPreorderAndInorderTraversal(preorder, inorder) {
  if (!preorder.length) return null;

  if (preorder.length === 1) return new TreeNode(preorder[0]);

  let map = new Map();

  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }

  let root = createTree(0, preorder.length - 1, 0, inorder.length - 1);

  return root;

  function createTree(preStart, preEnd, inStart, inEnd) {
    if (preStart > preEnd || inStart > inEnd) return null;

    let root = new TreeNode(preorder[preStart]);

    let rootInd = map.get(preorder[preStart]);
    let numsLeft = rootInd - inStart;

    root.left = createTree(
      preStart + 1,
      preStart + numsLeft,
      inStart,
      rootInd - 1
    );
    root.right = createTree(
      preStart + 1 + numsLeft,
      preEnd,
      rootInd + 1,
      inEnd
    );

    return root;
  }
}
