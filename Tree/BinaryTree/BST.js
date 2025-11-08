// ## Binary search Tree ##;
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    //insert nodes in a binary tree;
    insert(value) {
        const newNode = new TreeNode(value);

        if (!this.root) {
            this.root = newNode;
        } else {
            let current = this.root;

            while (true) {
                if (value < current.value) {
                    if (!current.left) {
                        current.left = newNode;
                        return;
                    }
                    current = current.left;
                } else {
                    if (!current.right) {
                        current.right = newNode;
                        return;
                    }
                    current = current.right;
                }
            }
        }
    }

    //search a value
    search(value) {
        let current = this.root;
        while (current) {
            if (value === current.value) {
                return true;
            } else if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    //delete a node from the tree
    delete(elemet, node = this.root) {
        if (node === null) return null;

        if (elemet < node.value) {
            node.left = this.delete(elemet, node.left);
        } else if (elemet > node.value) {
            node.right = this.delete(elemet, node.right);
        } else {
            if (!node.left && !node.right) {
                return null;
            }

            if (!node.left) return node.right;
            if (!node.right) return node.left;

            let minNode = this.findMin(node.right);
            node.value = minNode.value;
            node.right = this.delete(minNode.value, node.right);
        }
        return node;
    }

    //find the smallest node from the tree
    findMin(node = this.root) {
        if (node.left === null) return node.value;
        return this.findMin(node.left);
    }

    //traversal the tree inorder
    inorder(node = this.root) {
        if (node === null) return;
        this.inorder(node.left);
        console.log(node.value);
        this.inorder(node.right);
    }
}

let bst = new BST();
bst.insert(8);
bst.insert(3);
bst.insert(10);
bst.insert(1);
bst.insert(6);
bst.insert(14);
bst.insert(4);
bst.insert(7);
bst.insert(13);

console.log(bst.search(10));
console.log('smallest node is', bst.findMin());
bst.delete(7);

bst.inorder();
