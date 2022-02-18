function nextLargerElement(n, arr) {
  let nextArray = new Array(n);
  nextArray.fill(-1);
  let stArray = [];

  for (let i = 0; i < n; i++) {
    while (stArray.length && arr[i] > arr[stArray[stArray.length - 1]]) {
      let index = stArray.pop();
      nextArray[index] = arr[i];
    }

    stArray.push(i);
  }

  return nextArray;
}
