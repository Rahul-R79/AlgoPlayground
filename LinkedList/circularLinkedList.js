// ## Circular Linked List ##

//create a node
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

//create a circular list to connect with nodes
class CircularLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    //append a node to the end
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
            this.tail.next = this.head;
        }
    }

    //print the node list of circular LL
    printList() {
        let current = this.head;
        do {
            console.log(current.value);
            current = current.next;
        } while (current !== this.head);
    }
}

const list = new CircularLinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.printList();
