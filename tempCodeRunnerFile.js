searchBST(value, node = this.root) {
    if (!node) {
      return null;
    }
    if (value > node.value) {
      return this.searchBST(value, node.right);
    } else if ((value < node.value, node.right)) {
      return this.searchBST(value);
    } else {
      return node;
    }
  }