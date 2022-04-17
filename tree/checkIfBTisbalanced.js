
function checkBalanced(root) {
//  return height(root)!=-1;

//  function height(root){
//      if(!root) return 0;
//      let lh = height(root.left)
//      if(lh==-1) return -1;
//      let rh = height(root.right)
//      if(rh==-1) return -1;

//      if(Math.abs(lh-rh)>1) return -1;
//      return Math.max(lh, rh)+1
//  }

if(!root) return true;
    
    let isBalanced = true;
    const isHeightBalanced = (root)=>{
    if(!root) return 0;
        const left = isHeightBalanced(root.left);
        const right = isHeightBalanced(root.right);
        if(Math.abs(left - right) > 1){
            isBalanced = false;
            return;
        }
        return Math.max(left, right)+1;
    };
    isHeightBalanced(root);
    return isBalanced;

}
