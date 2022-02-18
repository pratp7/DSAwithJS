function longestValidParentheses(s) {
  let newStack = [-1],
    max = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      newStack.push(i);
    } else {
      newStack.pop();
      if (!newStack.length) {
        newStack.push(i);
      } else {
        let len = i - newStack[newStack.length - 1];
        max = Math.max(max, len);
      }
    }
  }
  return max;
}
