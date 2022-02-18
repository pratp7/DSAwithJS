function removeAdjacentDuplicates(s) {
  let st = [],
    res = "";
  st.push(s[0]);

  for (let i = 1; i < s.length; i++) {
    if (st[st.length - 1] === s[i]) {
      st.pop();
    } else {
      st.push(s[i]);
    }
  }
}
