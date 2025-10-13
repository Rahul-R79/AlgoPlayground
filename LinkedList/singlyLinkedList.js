//## singly Linked List ##

//create a node
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

//create a list to connect
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    //add a node to the first
    prepand(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    //add a node to the last
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    //insert a node to any specific index
    insertAt(value, index) {
        if (index < 0 || index > this.size) {
            return console.log("invalid index");
        }
        const newNode = new Node(value);
        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let current = this.head;
            let previous = null;
            let count = 0;

            while (count < index) {
                previous = current;
                current = current.next;
                count++;
            }
            newNode.next = current;
            previous.next = newNode;
        }
    }

    //delete a node from the list
    remove(value) {
        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
        }

        let current = this.head;
        while (current.next && current.next.value !== value) {
            current = current.next;
        }

        if (current.next) {
            current.next = current.next.next;
            this.size--;
        }
    }

    //delete a node based on the index
    removeAt(index) {
        if (index < 0 || index > this.size) {
            return console.log("index is invalid");
        }

        if (index === 0) {
            this.head = this.head.next;
        } else {
            let current = this.head;
            let previous = null;
            let count = 0;

            while (count < index) {
                previous = current;
                current = current.next;
                count++;
            }
            previous.next = current.next;
        }
        this.size--;
    }

    //search a element from the list
    search(value) {
        let current = this.head;
        let index = 0;

        while (current) {
            if (current.value === value) {
                return console.log(`${current.value} found at index ${index}`);
            }
            current = current.next;
            index++;
        }
    }

    //get the length of the node
    getNodeSize() {
        console.log("size of the node is " + this.size);
    }

    //for priting the list
    printList() {
        let current = this.head;
        let result = "";
        while (current) {
            result += current.value + "->";
            current = current.next;
        }
        console.log(result + "null");
    }
}

const list = new LinkedList();
list.prepand(0);
list.append(10);
list.append(20);
list.append(40);
list.insertAt(30, 3);
list.remove(0);
list.removeAt(3);
list.search(30);
list.getNodeSize();
list.printList();