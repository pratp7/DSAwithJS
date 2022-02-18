function longestPalindrome(n, str) {
  let map = new Map();

  for (let ch of str) {
    if (map.has(ch)) {
      map.set(ch, map.get(ch) + 1);
    } else {
      map.set(ch, 1);
    }
  }
  let ans = 0;
  for (let i of map.values()) {
    let num = parseInt(i / 2) * 2;
    ans = ans + num;
  }

  for (let i of map.values()) {
    if (i % 2 !== 0) {
      ans++;
      break;
    }
  }
  return ans;
}
