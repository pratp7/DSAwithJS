class PQElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(element, priority) {
    let qElement = new PQElement(element, priority);
    let contain = false;

    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].priority < qElement.priority) {
        this.items.splice(i, 0, qElement);
        contain = true;
        break;
      }
    }
    if (!contain) {
      this.items.push(qElement);
    }
  }

  printqueue() {
    let arr = [];

    for (let i of this.items) {
      arr.push(i.element);
    }

    return arr;
  }
}

function frequentWords(words, k) {
  let map = new Map();
  let q = new PriorityQueue();
  let uniqueArr = [];

  for (let word of words) {
    if (map.has(word)) {
      map.set(word, map.get(word) + 1);
    } else {
      map.set(word, 1);
    }
  }

  for (let i of map.keys()) {
    uniqueArr.push(i);
  }
  uniqueArr = uniqueArr.sort();

  for (let i of uniqueArr) {
    q.enqueue(i, map.get(i));
  }
  uniqueArr = [];
  for (let i = 0; i < k; i++) {
    uniqueArr.push(q.printqueue()[i]);
  }

  return uniqueArr;
}
