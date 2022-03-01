function partition(head, x) {
  let current = head;
  let lesshead = null,
    equalhead = null,
    greaterhead = null;
  let lesslast = null,
    equallast = null,
    greaterlast = null;

  while (current) {
    if (current.val < x) {
      if (!lesshead) {
        lesshead = current;
        lesslast = current;
      } else {
        lesslast.next = current;
        lesslast = lesslast.next;
      }
    } else if (current.val > x) {
      if (!greaterhead) {
        greaterhead = current;
        greaterlast = current;
      } else {
        greaterlast.next = current;
        greaterlast = greaterlast.next;
      }
    } else {
      if (!equalhead) {
        equalhead = current;
        equallast = current;
      } else {
        equallast.next = current;
        equallast = equallast.next;
      }
    }

    current = current.next;
  }

  if (greaterlast) {
    greaterlast.next = null;
  }

  if (!lesshead) {
    if (!equalhead) {
      return greaterhead;
    } else {
      equallast.next = greaterhead;
      return equalhead;
    }
  }

  if (!equalhead) {
    lesslast.next = greaterhead;
    return lesshead;
  }

  lesslast.next = equalhead;
  equallast.next = greaterhead;
  return lesshead;
}
