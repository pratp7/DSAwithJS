function zigzagLevelOrder(root) {
  let arr = [],
    queueArr = [],
    count = 0;

  if (!root) return [];

  queueArr.push(root);

  while (queueArr.length) {
    let len = queueArr.length;

    if (count % 2 === 0) {
      arr.push(queueArr.map((node) => node.val));
    } else {
      arr.push(queueArr.map((node) => node.val).reverse());
    }
    count++;

    while (len > 0) {
      let node = queueArr.shift();
      if (node.left) queueArr.push(node.left);
      if (node.right) queueArr.push(node.right);
      len--;
    }
  }
  return arr;
}
