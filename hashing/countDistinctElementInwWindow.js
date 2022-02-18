function countDistinctElements(n, b, arr) {
  let mapfreq = new Map();
  let ansArr = [];
  if (b > n) {
    return ansArr;
  }
  for (let i = 0; i < b; i++) {
    if (mapfreq.has(arr[i])) {
      mapfreq.set(arr[i], mapfreq.get(arr[i]) + 1);
    } else {
      mapfreq.set(arr[i], 1);
    }
  }
  ansArr.push(mapfreq.size);

  for (let i = b; i < n; i++) {
    if (mapfreq.get(arr[i - b]) === 1) {
      mapfreq.delete(arr[i - b]);
    } else {
      mapfreq.set(arr[i - b], mapfreq.get(arr[i - b]) - 1);
    }

    if (mapfreq.has(arr[i])) {
      mapfreq.set(arr[i], mapfreq.get(arr[i]) + 1);
    } else {
      mapfreq.set(arr[i], 1);
    }

    ansArr.push(mapfreq.size);
  }

  return ansArr;
}
