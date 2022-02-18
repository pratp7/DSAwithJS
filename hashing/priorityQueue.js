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
      //if priority in array is greater than the passed priority ,
      if (this.items[i].priority > qElement.priority) {
        //passed priority will be added to the index shifting the other elements
        this.items.splice(i, 0, qElement);
        contain = true;
        break;
      }
    }

    //if contain never becomes true, add the element to last
    if (!contain) {
      this.items.push(qElement);
    }
  }

  dequeue() {
    if (this.isEmpty()) return undefined;

    return this.items.shift();
  }
  front() {
    if (this.isEmpty()) return undefined;
    return this.items[0];
  }

  rear() {
    if (this.isEmpty()) return undefined;
    return this.items[this.size() - 1];
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
    console.log("CLearing the queue");
    return this.items;
  }

  isEmpty() {
    return this.items.length == 0;
  }

  printQueue() {
    let str = "";
    for (let i of this.items) {
      str += `(${i.element},${i.priority})` + " ";
    }
    return str;
  }
}

const pQueue = new PriorityQueue();
console.log("Empty - ", pQueue.isEmpty());
pQueue.enqueue("Jayesh", 3);
pQueue.enqueue("Jay", 2);
pQueue.enqueue("hafixz", 1);
pQueue.enqueue("hafikfdkjf", 1);
pQueue.enqueue("hafikfdkjfddd", 3);

console.log("front element- ", pQueue.front());

pQueue.dequeue();

console.log("Empty - ", pQueue.isEmpty());
console.log("front element- ", pQueue.front());
console.log("rear element- ", pQueue.rear());
console.log("Size- ", pQueue.size());
// console.log(pQueue.clear());

console.log(pQueue.printQueue());
