function copyLinkedListWithRandomPointer(head) {
  let curr = head;
  //creating new nodes inbetween
  while (curr) {
    let temp = curr.next;
    curr.next = new Node(curr.val);
    curr.next.next = temp;
    curr = temp;
  }
  curr = head;

  //setting random pointers of new nodes
  while (curr) {
    if (curr.next) {
      curr.next.random = curr.random ? curr.random.next : null;
    }

    curr = curr.next.next;
  }
  let originalList = head,
    copy = head.next;
  let temp = copy;
  //seperating both the linked list
  while (originalList && copy.next) {
    originalList.next = originalList.next.next;
    copy.next = copy.next.next;
    originalList = originalList.next;
    copy = copy.next;
  }

  return temp;
}
