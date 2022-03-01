// function strReverse(str){
//     return str.split("").reverse().join("");
// }
// function sumLists1(head1, head2) {
//     let newList = new ListNode(0);
//    let dummy =newList
//     let headStr1="", headStr2=""
//     while(head1 || head2){
//         if(head1){
//             headStr1+=head1.val;
//             head1=head1.next

//         }

//         if(head2){
//             headStr2+=head2.val;
//             head2=head2.next
//         }
//     }

//     let add = BigInt(strReverse(headStr1))+ BigInt(strReverse(headStr2));

//     for(let i of strReverse(String(add))){
//         dummy.next= new ListNode(i);
//         dummy=dummy.next

//     }

//     return newList.next;
// }

function sumLists1(head1, head2) {
  let list = new ListNode(0);
  let newList = list;
  let carry = 0;

  while (head1 || head2) {
    let sum = (head1 ? head1.val : 0) + (head2 ? head2.val : 0) + carry;
    if (sum > 9) {
      carry = parseInt(sum / 10);
      sum = sum % 10;
    } else {
      carry = 0;
    }

    list.next = new ListNode(sum);
    list = list.next;

    if (head1) head1 = head1.next;
    if (head2) head2 = head2.next;
  }

  if (carry > 0) {
    list.next = new ListNode(carry);
  }

  return newList.next;
}
