import { Node } from "./Node.js";

class myBST {
  constructor(root = null) {
    this.root = root;
  }

  insert(value) {
    let newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let tmp = this.root;
    while (true) {
      if (value > tmp.value) {
        if (tmp.right === null) {
          tmp.right = newNode;
          break;
        }
        tmp = tmp.right;
      } else {
        if (tmp.left === null) {
          tmp.left = newNode;
          break;
        }
        tmp = tmp.left;
      }
    }
    // return this.root;
    return JSON.stringify(this.root, null, 2);
  }

  // insert bằng đệ qui
  insertIntoBST(value) {
    this.root = this._insertRecursive(this.root, value);
  }
  _insertRecursive(node, value) {
    if (node === null) {
      return new Node(value);
    }
    if (value > node.value) {
      node.right = this._insertRecursive(node.right, value);
    } else {
      node.left = this._insertRecursive(node.left, value);
    }
    return node;
  }
  findMostLeft(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }
  //   hàm xóa node tại
  delete(value) {
    this.root = this._deleteRecursive(this.root, value);
  }
  _deleteRecursive(node, key) {
    if (!node) {
      return null;
    }
    if (key < node.value) {
      node.left = this._deleteRecursive(node.left, key);
    } else if (key > node.value) {
      node.right = this._deleteRecursive(node.right, key);
    } else {
      if (!node.left && !node.right) {
        return null;
      }
      if (!node.left) {
        return node.right;
      }
      if (!node.right) {
        return node.left;
      }
      const mostLeft = this.findMostLeft(node.right);
      node.value = mostLeft.value;
      node.right = this._deleteRecursive(node.right, mostLeft.value);
    }
    return node;
  }

  searchBST(value, node = this.root) {
    if (!node) {
      return null;
    }
    if (value > node.value) {
      return this.searchBST(value, node.right);
    } else if (value < node.value) {
      return this.searchBST(value, node.left);
    } else {
      return node;
    }
  }

  // sắp xếp N-L-R
  preoderSort(node = this.root) {
    const preoder = [];
    if (!node) {
      return preoder;
    }
    preoder.push(node.value);
    preoder.push(...this.preoderSort(node.left));
    preoder.push(...this.preoderSort(node.right));
    return preoder;
  }
  // sắp xếp L-N-R
  inoderSort(node = this.root) {
    const inoder = [];
    if (!node) {
      return inoder;
    }
    inoder.push(...this.inoderSort(node.left));
    inoder.push(node.value);
    inoder.push(...this.inoderSort(node.right));
    return inoder;
  }
  // sắp xếp L-R-N
  postoderSort(node = this.root) {
    const postoder = [];
    if (!node) {
      return postoder;
    }
    postoder.push(...this.postoderSort(node.left));
    postoder.push(...this.postoderSort(node.right));
    postoder.push(node.value);
    return postoder;
  }
  findHeight(node = this.root) {
    if (node === null) {
      return -1;
    }
    return (
      1 + Math.max(this.findHeight(node.left), this.findHeight(node.right))
    );
  }
  isContains(value, node = this.root) {
    if (!node) {
      return null;
    }
    if (value > node.value) {
      this.isContains(value, node.right);
    } else if (value < node.value) {
      this.isContains(value, node.left);
    }
    return true;
  }
  isLeaf(node = this.root) {
    return !node.left && !node.right;
  }
  sumBST(targetSum, sum = 0, node = this.root) {
    if (!node) {
      return null;
    }
    sum += node.value;
    if (this.isLeaf(node)) {
      return targetSum === sum;
    }
    return (
      this.sumBST(targetSum, sum, node.left) ||
      this.sumBST(targetSum, sum, node.right)
    );
  }
  update(key, value) {
    if (!this.isContains(value)) {
      this.delete(key);
      this.insert(value);
    }
    console.log(this.root);
  }
}

// Create BST and insert values
let mybst = new myBST();
mybst.insertIntoBST(5);
mybst.insertIntoBST(1);
mybst.insertIntoBST(0);
mybst.insertIntoBST(6);
mybst.insertIntoBST(2);
mybst.insertIntoBST(4);
// console.log(JSON.stringify(mybst, null, 2));
// let search = mybst.searchBST(2);
// let preoderSort = mybst.preoderSort();
// console.log(preoderSort);
// let inoderSort = mybst.inoderSort();
// console.log(inoderSort);
// let postoderSort = mybst.postoderSort();
// console.log(postoderSort);
console.log(JSON.stringify(mybst, null, 2));
// console.log("findHeight", mybst.findHeight());
console.log(mybst.sumBST(12));
// mybst.update(1, 2);
