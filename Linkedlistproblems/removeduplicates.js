function removeDuplicates(head) {
  let set = new Set();
  let current = head;
  // let prev=null;
  // while(current){
  //     if(set.has(current.val)){
  //         prev.next=current.next;

  //     }else{
  //         set.add(current.val);
  //         prev=current;

  //     }
  //    current=current.next;

  // }

  while (current && current.next) {
    set.add(current.val);
    if (set.has(current.next.val)) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
}
