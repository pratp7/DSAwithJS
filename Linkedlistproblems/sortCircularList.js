function insertIntoSortedCircularList(head, insertVal) {
  let newNode = new ListNode(insertVal);
  let current = head;
  let temp = null;

  if (!head) {
    newNode.next = newNode;
    head = newNode;
    return head;
  }

  while (current.next != head) {
    if (
      (insertVal >= current.val && insertVal < current.next.val) ||
      (current.val > current.next.val &&
        insertVal > current.val &&
        insertVal > current.next.val) ||
      (current.val > current.next.val &&
        insertVal < current.val &&
        insertVal < current.next.val)
    ) {
      temp = current.next;
      current.next = newNode;
      newNode.next = temp;

      return head;
    }
    current = current.next;
  }

  if (current.next == head) {
    let temp2 = current.next;
    current.next = newNode;
    newNode.next = temp2;

    return head;
  }
  //single value case
  let temp1 = head.next;
  head.next = newNode;
  newNode.next = temp1;
  return head;
}
