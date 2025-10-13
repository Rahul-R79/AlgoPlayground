//## doubly Linked List ##

//create dll node
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

//create dll list to connect
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    //add a node to end of the dll
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
            newNode.prev = current;
        }
        this.size++;
    }

    //add a node to the starting of the dll
    prepand(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }

        this.size++;
    }

    //insert a node to any specific index of dll
    insertAt(value, index) {
        if (index < 0 || index > this.size) {
            return console.log("invalid index");
        }

        const newNode = new Node(value);

        if (index === 0) {
            //insert at beginning
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        } else {
            let current = this.head;
            let count = 0;

            while (count < index - 1) {
                current = current.next;
                count++;
            }

            // If inserting at the end
            if (!current.next) {
                current.next = newNode;
                newNode.prev = current;
            } else {
                // Inserting in middle
                newNode.next = current.next;
                newNode.prev = current;
                current.next.prev = newNode;
                current.next = newNode;
            }
        }
        this.size++;
    }

    //delete from the beginning
    deleteFromBeginning() {
        const current = this.head;

        this.head = current.next;

        if (this.head) {
            this.head.prev = null;
        }
        this.size--;
    }

    //delete from the end
    deleteFromEnd() {
        let current = this.head;

        if (!current.next) {
            this.head = null;
        } else {
            while (current.next) {
                current = current.next;
            }
            current.prev.next = null;
        }
        this.size--;
    }

    //delete a node by its value
    deleteByValue(value) {
        let current = this.head;

        //delete the node if first one
        if (current.value === value) {
            this.head = current.next;
            if (this.head) {
                this.head.prev = null;
            }
        }

        while (current && current.value !== value) {
            current = current.next;
        }

        //delete the node in middle or end
        if (current.next) {
            current.next.prev = current.prev;
        }
        if (current.prev) {
            current.prev.next = current.next;
        }
    }

    //reverse nodes
    reverseNodes(){
        let current = this.head;
        let temp = null;
        
        while(current){
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;
            current = current.prev;
        }
        
        this.head = temp.prev; 
    }

    //print the list of nodes in dll
    printList() {
        let current = this.head;
        let result = "";

        while (current) {
            result += current.value + " \u21c4 ";
            current = current.next;
        }
        console.log(result + "null");
    }
}

const dll = new DoublyLinkedList();
dll.append(20);
dll.append(30);
dll.append(40);
dll.prepand(10);
dll.insertAt(25, 2);
dll.deleteFromBeginning();
dll.deleteFromEnd();
dll.deleteByValue(25);
dll.reverseNodes();
dll.printList();
