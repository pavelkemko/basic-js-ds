const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {

  constructor() {
    this.groot = null;
  }

  root() {
    return this.groot;
  }

  add(data) {
    this.groot = newBranch(this.groot, data);
    
    function newBranch(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = newBranch(node.left, data);
      } else {
        node.right = newBranch(node.right, data);
      }
    
      return node;
    }
  }

  has(data) {
    return hasElement(this.groot, data);

    function hasElement(node, data) {
      if (!node) {
        return false;
      } else if (node.data === data) {
        return true;
      }

      return data < node.data ? hasElement(node.left, data) : hasElement(node.right, data);
    }
  }

  find(data) {
    return findElement(this.groot, data);

    function findElement(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      return data < node.data ? findElement(node.left, data) : findElement(node.right, data);
    }
  }

  remove(data) {
    this.groot = removeElement(this.groot, data);

    function removeElement(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeElement(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeElement(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;

        node.right = removeElement(node.right, minRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.groot) {
      return;
    }
    let node = this.groot;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.groot) {
      return;
    }
    let node = this.groot;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};