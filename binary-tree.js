class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

let root = new Node(10);
root.left = new Node(15);
root.right = new Node(57);
root.left.left = new Node(8);
root.left.right = new Node(18);
root.right.left = new Node(75);
root.right.right = new Node(86);

//          10
//     15        57
//   8    18  75   86

const inOrder = (root) => {
  if (root === null) {
    return;
  }
  inOrder(root.left);
  console.log(root.data);
  inOrder(root.right);
};
inOrder(root);
console.log("Pre Order");

const preOrder = (root) => {
  if (root === null) {
    return;
  }
  console.log(root.data);
  preOrder(root.left);
  preOrder(root.right);
};
preOrder(root);

console.log("Post Order");

const postOrder = (root) => {
  if (root === null) {
    return;
  }
  postOrder(root.left);
  postOrder(root.right);
  console.log(root.data);
};
postOrder(root);
