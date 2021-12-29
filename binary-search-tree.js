class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BST {
  constructor() {
    this.root = null;
  }

  insert(data) {
    function insertNode(currentNode, newNode) {
      if (newNode.data < currentNode.data) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return;
        } else {
          insertNode(currentNode.left, newNode);
        }
      } else {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return;
        } else {
          insertNode(currentNode.right, newNode);
        }
      }
    }
    let newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
      return;
    }
    return insertNode(this.root, newNode);
  }

  remove(data) {
    function removeNode(node, key) {
      function findminNode(root) {
        if (root.left === null) {
          return root;
        }
        return findminNode(root.left);
      }
      if (node === null) return null;
      if (key < node.data) {
        node.left = removeNode(node.left, key);
        return node;
      }
      if (key > node.data) {
        node.right = removeNode(node.right, key);
        return node;
      }

      //   data found
      //   leaf node deletion
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      //   deleting node with right child
      if (node.left === null) {
        node = node.right;
        return node;
      }
      //   deleting node with left child
      if (node.right === null) {
        node = node.left;
        return node;
      }
      // when i hjave both child
      let minNode = findminNode(node.right);
      node.data = minNode.data;
      node.right = removeNode(node.right, minNode.data);
      return node;
    }
    this.root = removeNode(this.root, data);
  }
  search(key) {
    function searchNode(node, key) {
      if (node === null) return null;
      if (key < node.data) {
        return searchNode(node.left, key);
      }
      if (key > node.data) {
        return searchNode(node.right, key);
      }
      return node;
    }
    return searchNode(this.root, key);
  }

  findmin() {
    function findminNode(root) {
      if (root.left == null) {
        return root;
      }

      return findminNode(root.left);
    }
    return findminNode(this.root);
  }

  inOrder(root) {
    root.left && this.inOrder(root.left);
    console.log(root.data);
    root.right && this.inOrder(root.right);
  }
}

let tree = new BST();
tree.insert(3);
tree.insert(4);
tree.insert(19);
tree.insert(26);
tree.insert(33);
tree.insert(55);
tree.insert(70);
tree.inOrder(tree.root);

let node = tree.search(19);
console.log(node.data);
console.log(tree.findmin().data);
