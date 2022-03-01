function merge(leftList, rightList) {
  let tempNode = new ListNode(0);

  let prev = tempNode;

  while (leftList && rightList) {
    if (leftList.val < rightList.val) {
      prev.next = leftList;
      leftList = leftList.next;
    } else {
      prev.next = rightList;
      rightList = rightList.next;
    }

    prev = prev.next;
  }

  if (!leftList) {
    prev.next = rightList;
  } else {
    prev.next = leftList;
  }

  return tempNode.next;
}

function sortList(head) {
  if (!head || !head.next) return head;

  let fast = head,
    slow = head,
    prev = null;

  while (fast && fast.next) {
    fast = fast.next.next;
    prev = slow;
    slow = slow.next;
  }

  let midAfter = slow;
  prev.next = null;
  return merge(sortList(head), sortList(midAfter));
}
