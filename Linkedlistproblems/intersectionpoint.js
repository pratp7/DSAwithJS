function listIntersectionPoint(head1, head2) {
  let len1 = 0,
    len2 = 0;
  let current1 = head1,
    current2 = head2;

  while (current1 || current2) {
    if (current1) {
      len1++;
      current1 = current1.next;
    }

    if (current2) {
      len2++;
      current2 = current2.next;
    }
  }
  let diff = Math.abs(len1 - len2);

  (current1 = head1), (current2 = head2);

  while (current1 && current2) {
    if (len1 > len2 && diff != 0) {
      diff--;
      current1 = current1.next;
    }

    if (len2 > len1 && diff != 0) {
      diff--;
      current2 = current2.next;
    }

    if (diff === 0) {
      if (current1.val === current2.val) {
        return current1;
      }

      current1 = current1.next;
      current2 = current2.next;
    }
  }

  return null;
}
