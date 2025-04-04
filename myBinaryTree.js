import { Node } from "./Node.js";

export class myBinaryTree {
  constructor(root = null) {
    this.root = root;
  }
  init() {
    let n0 = new Node(0);
    let n1 = new Node(1);
    let n2 = new Node(2);
    let n3 = new Node(3);
    let n4 = new Node(4);
    let n5 = new Node(5);
    let n6 = new Node(6);
    n0.left = n1;
    n0.right = n2;
    n1.left = n3;
    n1.right = n4;
    n2.left = n5;
    n2.right = n6;
    this.root = n0;
  }
}
const BinaryTree = new myBinaryTree();
BinaryTree.init();
// console.log(BinaryTree.root);
