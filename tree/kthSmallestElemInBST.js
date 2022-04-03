
function kthSmallestElementInABst(root, k) {
     let arr = [];
    inorder(root);
    
    function inorder(root){
        if(!root) return null;
        
        if(root.left) inorder(root.left);
        arr.push(root.val);
        if(root.right) inorder(root.right);
    }
    
    return arr[k-1];
}
