function nextSmallerElement(n, arr) {
  let ans = new Array(n).fill(-1);
  let stArray = [];

  for (let i = 0; i < n; i++) {
    while (stArray.length && arr[i] < arr[stArray[stArray.length - 1]]) {
      let x = stArray.pop();
      ans[x] = arr[i];
    }

    stArray.push(i);
  }

  return ans;
}
