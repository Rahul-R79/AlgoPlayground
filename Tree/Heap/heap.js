// ## Max Heap ##
class MaxHeap {
    constructor() {
        this.heap = [];
    }

    //get the parent index;
    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }

    //swap the values through destructure;
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    //insert a value;
    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = this.getParentIndex(index);
            if (this.heap[parentIndex] < this.heap[index]) {
                this.swap(parentIndex, index);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    print() {
        console.log(this.heap);
    }
}

let heap = new MaxHeap();
heap.insert(50);
heap.insert(40);
heap.insert(20);
heap.insert(70);
heap.insert(10);
heap.print();

// ## Min Heap ##
class MinHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = this.getParentIndex(index);
            if (this.heap[parentIndex] > this.heap[index]) {
                this.swap(index, parentIndex);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    //delete the root node;
    deleteRoot() {
        if (this.heap.length === 0) return null;
        const root = this.heap[0];
        const last = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.heapifyDown(0);
        }

        return root;
    }

    //helper function for change the root after delete;
    heapifyDown(index) {
        let smallest = index;
        const left = 2 * index + 1;
        const right = 2 * index + 2;

        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
            smallest = left;
        }

        if (
            right < this.heap.length &&
            this.heap[right] < this.heap[smallest]
        ) {
            smallest = right;
        }

        if (smallest !== index) {
            [this.heap[index], this.heap[smallest]] = [
                this.heap[smallest],
                this.heap[index],
            ];
            this.heapifyDown(smallest);
        }
    }

    print() {
        console.log(this.heap);
    }
}

const minH = new MinHeap();
minH.insert(60);
minH.insert(70);
minH.insert(50);
minH.insert(40);
minH.insert(90);
minH.insert(10);

minH.deleteRoot();

minH.print();

//build a Heap from an unsorted array;
class MinHeap {
    constructor(arr) {
        this.heap = arr;
        this.buildHeap();
    }

    getLeft(i) {
        return 2 * i + 1;
    }

    getRight(i) {
        return 2 * i + 2;
    }

    heapify(i) {
        let smallest = i;
        let left = this.getLeft(i);
        let right = this.getRight(i);

        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
            smallest = left;
        }

        if (
            right < this.heap.length &&
            this.heap[right] < this.heap[smallest]
        ) {
            smallest = right;
        }

        if (smallest !== i) {
            [this.heap[i], this.heap[smallest]] = [
                this.heap[smallest],
                this.heap[i],
            ];
            this.heapify(smallest);
        }
    }

    buildHeap() {
        const start = Math.floor(this.heap.length / 2) - 1;
        for (let i = start; i >= 0; i--) {
            this.heapify(i);
        }
    }

    printHeap() {
        console.log(this.heap);
    }
}

const arr = [5, 3, 8, 4, 1, 2];
const arrheap = new MinHeap(arr);
arrheap.printHeap();

//implement a heap sort
function heapSortMax(arr) {
    let n = arr.length;

    const start = Math.floor(n / 2) - 1;
    for (let i = start; i >= 0; i--) {
        heapifyMax(arr, n, i);
    }

    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapifyMax(arr, i, 0);
    }
    return arr;
}

function heapifyMax(arr, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapifyMax(arr, n, largest);
    }
}

const array = [5, 3, 8, 4, 1, 2];
console.log("sorted", heapSortMax(array));
