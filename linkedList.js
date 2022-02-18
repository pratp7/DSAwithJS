// const n1 = {
//   data: 100,
// };

// const n2 = {
//   data: 200,
// };

// n1.next = n2;

// console.log(n1); //{ data: 100, next: { data: 200 } }

class Node {
  constructor(data, next = "null") {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  //Insert first node------------------------------------------------------------------------------
  insertFirst(data) {
    this.head = new Node(data, this.head);
    // console.log("head- ", this.head);
    this.size++;
  }

  //Insert last node------------------------------------------------------------------------------
  insertLast(data) {
    let node = new Node(data);
    let current;

    //if empty, make head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
  }

  //Insert at index------------------------------------------------------------------------------
  insertAt(data, index) {
    //If index is out of range
    if (index > 0 && index > this.size) return;

    //if first index
    if (index === 0) {
      this.insertFirst(data);
      return;
    }

    const node = new Node(data);
    let current,
      previous,
      count = 0;

    //set current to first
    current = this.head;

    while (count < index) {
      previous = current; //node before index
      count++;
      current = current.next; //node after index
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }

  //Get at index------------------------------------------------------------------------------
  getAt(index) {
    let current = this.head;
    let count = 0;

    //If index is out of range
    if (index > 0 && index > this.size) return;

    while (count < index) {
      current = current.next;
      count++;
    }

    console.log(`The element at index ${index} is: ${current.data}`);
  }

  //Remove at index------------------------------------------------------------------------------
  removeAt(index) {
    //If index is out of range
    if (index > 0 && index > this.size) return;
    let current = this.head,
      previous;
    let count = 0;

    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }

      previous.next = current.next;
    }

    this.size--;
    // console.log(this.size, "size");
  }

  //Clear list------------------------------------------------------------------------------
  clearList() {
    this.head = null;
    this.size = 0;
  }

  //Print list data------------------------------------------------------------------------------
  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);
ll.insertAt(500, 2);

// console.log(ll, "ll");

ll.printListData();

ll.removeAt(0);
console.log("after removing the element");
ll.printListData();

ll.getAt(0);
console.log("List cleared");
ll.clearList();

//reverse a linked list

function reverseLinkedList(head) {
  let current = head;
  let prev = null;

  while (current) {
    let temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }
  return prev;
}

//remove duplicates
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

//make middle node the head of the list-------------------------------------------------------------------------
// function moveMiddleToHead(head) {
//   let current = head;
//   let fastpointer = head,
//     slowpointer = head,
//     length = 0;

//   if (!head || !head.next) return head;

//   while (fastpointer && fastpointer.next) {
//     length++;
//     slowpointer = slowpointer.next;
//     fastpointer = fastpointer.next.next;
//   }

//   let firstNode = head;
//   let count = 0,
//     midRef = null;
//   while (current && current.next) {
//     if (count + 1 === length) {
//       midRef = current.next;
//       current.next = current.next.next;
//       midRef.next = firstNode;
//     }
//     count++;
//     current = current.next;
//   }

//   return midRef;
// }
function moveMiddleToHead(head) {
  let fastpointer = head,
    slowpointer = head,
    prev = null;

  if (!head || !head.next) return head;

  while (fastpointer && fastpointer.next) {
    prev = slowpointer;
    slowpointer = slowpointer.next;
    fastpointer = fastpointer.next.next;
  }

  let firstNode = head;

  prev.next = slowpointer.next;
  slowpointer.next = firstNode;

  return slowpointer;
}
// -------------------------------------------------------------------------------------------------------------------------------------------------------

//delete kth node from last
function deleteKthToLast(head, k) {
  if (!head) return head;
  let current = head;
  let length = 0;

  while (current) {
    length++;
    current = current.next;
  }
  current = head;
  let delNode = length - k;

  if (delNode === 0) {
    head = head.next;
    return head;
  }

  length = 0;
  while (current && current.next) {
    if (length + 1 === delNode) {
      current.next = current.next.next;
    }
    length++;
    current = current.next;
  }

  return head;
}

//delete middle nodesif only the nodes reference has been given
function deleteMiddleNode(node) {
  let tobedeleted = node;
  let after = tobedeleted.next;
  tobedeleted.val = after.val;
  tobedeleted.next = after.next;

  // node.val = node.next.val;
  // node.next = node.next.next;

  return node;
}
