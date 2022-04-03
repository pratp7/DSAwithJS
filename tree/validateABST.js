function validateBinarySearchTree(root) {
    function bst(root, min, max){
        if(!root) return true;
        
        if((min && root.val<=min) || (max && root.val>=max)) return false;
        
      return bst(root.left, min, root.val)   &&  bst(root.right, root.val,max)
       
       
    
    }

return bst(root, null, null)

}
