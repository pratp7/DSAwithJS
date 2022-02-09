class Stack {
  constructor() {
    this.items = [];
    // this.count = 0;
  }

  //add items to stack
  push(element) {
    // this.items[this.count] = element;
    // console.log(`${element} add to ${this.count} position`);
    // this.count += 1;
    // return this.count - 1;

    this.items.push(element);
  }

  //return and remove top element in stack;
  //return undefined if stack is empty;
  pop() {
    if (this.count == 0) {
      return undefined;
    }
    // let deleteItem = this.items[this.count - 1];
    // this.count -= 1;
    // console.log(`${deleteItem} removed`);
    // return deleteItem;
    return this.items.pop();
  }
  //check top level item
  peek() {
    //    return this.items[this.count - 1];
    return this.items[this.items.length - 1];
  }

  //check if stack is empty
  isEmpty() {
    //return this.count ==0
    return this.items.length == 0;
  }
  //check size of stack
  size() {
    // return this.count;
    return this.items.length;
  }
  //print elements in the stack
  printStack() {
    let str = "";
    for (let i of this.items) {
      str += i + " ";
    }
    return str;
  }

  clear() {
    this.items = [];
    // this.count = 0;
    console.log("Stack cleared");
    return this.items;
  }

  //   print() {
  //     let str = "";

  //     for (let i = 0; i < this.count; i++) {
  //       str += this.items[i] + " ";
  //     }
  //     return str;
  //   }
}

const stack = new Stack();
console.log(stack.isEmpty());

stack.push(100);
stack.push(200);
stack.push(300);
stack.push(400);
// console.log(stack);

console.log("Elements in stack are- ");
console.log(stack.printStack());

stack.pop();

console.log("Element at top- ", stack.peek());

console.log(stack);
console.log(stack.isEmpty());
console.log(stack.size());

console.log("Elements in stack are- ");
console.log(stack.printStack());

stack.clear();
console.log(stack.printStack());
