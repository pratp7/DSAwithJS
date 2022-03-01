// if (!head || !head.next) return head;

// let prev1 = null,
//   ptr1 = head,
//   ptr2 = head.next,
//   prev2 = null,
//   temp3 = null;

// while (ptr1 && ptr2) {
//   //if ptr1.val and ptr2.val is even
//   if (ptr1.val % 2 === 0 && ptr2.val % 2 === 0) {
//     //ptr2.val is even
//     while (ptr2 && ptr2.val % 2 == 0) {
//       prev2 = ptr2;
//       ptr2 = ptr2.next;
//     }

//     //reverse the list between ptr1 and Ptr2
//     let temp1 = ptr1,
//       temp2 = ptr2;
//     while (temp1 != prev2) {
//       let temp = temp1.next;
//       temp1.next = ptr2;
//       ptr2 = temp1;
//       temp1 = temp;
//     }

//     //if prev of ptr1 is null means all elements are even
//     if (!prev1) {
//       if (prev2.next && prev2.next.next) {
//         temp1.next = ptr2;
//         prev1 = temp1;
//         temp3 = prev1;
//       }
//       prev2.next = ptr2;
//       return prev2;
//     } else {
//       temp1.next = ptr2;
//       prev1.next = temp1;
//     }

//     //if we reach to last node or null
//     if (temp2 && temp2.next) {
//       //if not reset the pointers after the numbers to continue the search
//       ptr2 = temp2;
//     } else {
//       return head;
//     }
//   }

//   prev1 = ptr1;
//   ptr1 = ptr1.next;
//   ptr2 = ptr2.next;
// }
// if (temp3) {
//   temp3.next.next = head;
//   return temp3;
// }

// return head;

function reverseEvenElements(head) {
  if (head == null) return null;

  let curr = head,
    next = null,
    prev = null;

  while (curr && curr.val % 2 == 0) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  if (curr != head) {
    head.next = curr;
    curr = reverseEvenElements(curr);
    return prev;
  } else {
    head.next = reverseEvenElements(head.next);
    return head;
  }
}
