// function mergeTwoLists(l1, l2) {
//   let currentl1 = l1;
//   let currentl2 = l2;
//   let newListhead = null,
//     newListtail = null;

//   while (currentl1 && currentl2) {
//     if (currentl1.val <= currentl2.val) {
//       if (!newListhead) {
//         newListhead = currentl1;
//         newListtail = currentl1;
//       } else {
//         newListtail.next = currentl1;
//         newListtail = newListtail.next;
//       }
//       currentl1 = currentl1.next;
//     } else {
//       if (!newListhead) {
//         newListhead = currentl2;
//         newListtail = currentl2;
//       } else {
//         newListtail.next = currentl2;
//         newListtail = newListtail.next;
//       }
//       currentl2 = currentl2.next;
//     }
//   }

//   if (currentl1) newListtail.next = currentl1;
//   if (currentl2) newListtail.next = currentl2;

//   return newListhead;
// }

function mergeTwoLists(l1, l2) {
  let newNode = new ListNode(0);
  let current = newNode;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  current.next = l1 ? l1 : l2;

  return newNode.next;
}
