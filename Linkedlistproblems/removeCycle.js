function detectAndRemoveCycle(head) {
  //  let set = new Set();
  // let current = head
  //      while(current){
  //           if(set.has(current.next)){
  //               current.next=null;
  //                return true;

  //           }

  //           set.add(current);
  //           current=current.next
  //      }

  //      return false;

  let fastpoint = head,
    slowPoint = head,
    prev = null;

  if (!head || !head.next) return null;

  while (fastpoint && fastpoint.next) {
    fastpoint = fastpoint.next.next;
    prev = slowPoint;
    slowPoint = slowPoint.next;

    if (fastpoint === slowPoint) {
      break;
    }
  }

  if (!fastpoint || !fastpoint.next) {
    return false;
  }

  slowPoint = head;

  while (slowPoint != fastpoint) {
    slowPoint = slowPoint.next;
    prev = fastpoint;
    fastpoint = fastpoint.next;
  }
  prev.next = null;
  return true;
}
