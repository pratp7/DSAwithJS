const arr = [3, 2, 10, 7, 4, 44, 32];

function merge(l, r) {
  let arr = [];
  while (l.length && r.length) {
    if (l[0] < r[0]) {
      arr.push(l.shift());
    } else {
      arr.push(r.shift());
    }
  }

  return [...arr, ...l, ...r];
}

function mergeSort(arr) {
  const mid = parseInt(arr.length / 2);

  if (arr.length < 2) {
    return arr;
  }

  const left = arr.splice(0, mid);

  return merge(mergeSort(left), mergeSort(arr));
}

console.log(mergeSort(arr));
