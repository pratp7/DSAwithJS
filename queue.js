class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) return undefined;

    return this.items.shift();
  }
  front() {
    if (this.isEmpty()) return undefined;
    return this.items[0];
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
      str += i + " ";
    }

    return str;
  }
}

const queue = new Queue();

console.log("Empty- ", queue.isEmpty());

queue.enqueue(100);
queue.enqueue(200);
queue.enqueue(300);
queue.enqueue(400);

console.log("Elements in Queue - ", queue.printQueue());

queue.dequeue();

console.log("Empty- ", queue.isEmpty());
console.log("Elements in Queue after deletion - ", queue.printQueue());

console.log("1st element in queue - ", queue.front());

console.log("Size of the queue - ", queue.size());

queue.clear();
console.log("Elements in Queue", queue.printQueue());
console.log("Size of the queue - ", queue.size());
