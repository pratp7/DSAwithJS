let stack = [];
let minStack = [];

function push(x) {
  stack.push(x);
  if (minStack.length === 0) {
    minStack.push(x);
    return;
  }

  if (x < minStack[minStack.length - 1]) {
    minStack.push(x);
  }
}

function pop() {
  if (stack.length === 0) return undefined;
  if (stack[stack.length - 1] === minStack[minStack.length - 1]) {
    minStack.pop();
  }
  return stack.pop();
}

function findMin() {
  if (stack.length == 0) return -1;

  return minStack[minStack.length - 1];
}
