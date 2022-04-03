function balanceBST(root) {
    let arr = [];
 inorder(root);
      

     function inorder(root){
          if(!root) return null;

          if(root.left) inorder(root.left);
          arr.push(root.val);
          if(root.right) inorder(root.right);
      }

      function balancedBST(arr){
          if(!arr.length) return null;
          
          let mid = parseInt(arr.length/2);
          let root = new TreeNode(arr[mid]);
          root.left= balancedBST(arr.slice(0,mid));
          root.right= balancedBST(arr.slice(mid+1));
          return root;
      }

      return balancedBST(arr);
}
