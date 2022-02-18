function findAllAnagramsInAString(s, p) {
  let pMap = new Map();

  let result = [];

  if (p.length > s.length) return result;
  for (let i = 0; i < p.length; i++) {
    if (pMap.has(p[i])) {
      pMap.set(p[i], pMap.get(p[i]) + 1);
    } else {
      pMap.set(p[i], 1);
    }
  }
  let start = 0,
    end = 0;
  while (end < s.length) {
    if (pMap.get(s[end]) > 0) {
      pMap.set(s[end], pMap.get(s[end]) - 1);
      end++;

      if (end - start == p.length) {
        result.push(start);
      }
    } else if (start == end) {
      start++;
      end++;
    } else {
      pMap.set(s[start], pMap.get(s[start]) + 1);
      start++;
    }
  }

  return result;
}
