function constructBinaryTreeFromPostorderAndInorderTraversal(postorder, inorder) {
if(!inorder || !postorder || inorder.length!=postorder.length) return null;

const map = new Map();
inorder.forEach((num, ind)=> map.set(num, ind));

return buildTree(0,inorder.length-1, 0, postorder.length-1);


function buildTree (is, il, ps, pl ){
    if(is>il || ps>pl) return null;

    let root = new TreeNode(postorder[pl]);
    let inRoot = map.get(postorder[pl]);
    let numsLeft = inRoot-is;
    root.left=buildTree(is, inRoot-1, ps, ps+numsLeft-1);
    root.right=buildTree(inRoot+1, il, ps+numsLeft, pl-1);
    return root;

}

}
