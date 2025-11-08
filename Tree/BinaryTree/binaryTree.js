// ## BinarayTree ##;
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const root = new TreeNode("A");
const nodeB = new TreeNode("B");
const nodeC = new TreeNode("C");
const nodeD = new TreeNode("D");
const nodeE = new TreeNode("E");

root.left = nodeB;
root.right = nodeC;
nodeB.left = nodeD;
nodeB.right = nodeE;

//DFS Traversal;
function inorder(root) {
    if (root === null) return;
    inorder(root.left);
    console.log(root.value);
    inorder(root.right);
}

inorder(root);

console.log("\n");

function preorder(root) {
    if (root === null) return;
    console.log(root.value);
    preorder(root.left);
    preorder(root.right);
}

preorder(root);

console.log("\n");

function postorder(root) {
    if (root === null) return;
    postorder(root.left);
    postorder(root.right);
    console.log(root.value);
}

postorder(root);

console.log("\n");

//BFS Traversal;
function levelorder(root) {
    if (root === null) return;
    let queue = [root];

    while (queue.length > 0) {
        let current = queue.shift();
        console.log(current.value);

        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }
}

levelorder(root);

console.log("\n");

//find total number of nodes in a tree;
function totalNodes(root) {
    if (root === null) return 0;
    return 1 + totalNodes(root.left) + totalNodes(root.right);
}

console.log("total nodes", totalNodes(root));

console.log("\n");

//find height of a tree;
function findHeight(root) {
    if (root === null) return 0;

    const leftHeight = findHeight(root.left);
    const rightHeight = findHeight(root.right);

    let height = Math.max(leftHeight, rightHeight) + 1;
    return height;
}

console.log("height of a tree", findHeight(root));

console.log("\n");

//count how many leaf nodes;
function countLeafNodes(root) {
    if (root === null) return 0;
    if (root.left === null && root.right === null) return 1;
    return countLeafNodes(root.left) + countLeafNodes(root.right);
}

console.log('total leaf nodes', countLeafNodes(root));
