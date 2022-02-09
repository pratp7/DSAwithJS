// function Node(data) {
//     this.data = data;
//     this.children=[]
// }

class Node {
  constructor(data, children = []) {
    this.data = data;
    this.children = children;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  add(data, toNodeData) {
    const node = new Node(data);

    const parent = toNodeData ? this.findBFS(toNodeData) : null;

    if (parent) {
      parent.children.push(node);
    } else {
      if (!this.root) {
        this.root = node;
      } else {
        return "Tried to store node at root when root already exists.";
      }
    }
  }

  findBFS(data) {
    const queue = [this.root];
    let _node = null;

    this.traverseBFS((node) => {
      if (node.data == data) {
        _node = node;
      }
    });
    return _node;
  }

  traverseBFS(cb) {
    const queue = [this.root];

    if (cb) {
      while (queue.length) {
        const node = queue.shift();

        cb(node);

        for (const child of node.children) {
          queue.push(child);
        }
      }
    }
  }
}

let tree = new Tree();

tree.add("Node1");
tree.add("Node2", "Node1");
tree.add("Node3", "Node1");
tree.add("Node4", "Node2");
tree.add("Node5", "Node2");
tree.add("Node6", "Node3");

tree.traverseBFS((node) => {
  console.log("Current node: ", node);
});

//output of above line
/**
 Current node:  Node {
  data: 'Node1',
  children: [
    Node { data: 'Node2', children: [] },
    Node { data: 'Node3', children: [] }
  ]
}
Current node:  Node { data: 'Node2', children: [] }
Current node:  Node { data: 'Node3', children: [] }
 */
