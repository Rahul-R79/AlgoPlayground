// ## Queue datastructure ##

class Queue {
    constructor() {
        this.items = [];
        this.size = 0;
    }

    //add a element to the queue;
    enqueue(element) {
        this.items.push(element);
        this.size++;
    }

    //delete a first element from the queue;
    dequeue() {
        if (this.isEmpty()) return "queue is empty";
        this.items.shift();
        this.size--;
    }

    //return the first element from the queue;
    front() {
        if (this.isEmpty()) return "queue is empty";
        return this.items[0];
    }

    //check the queue is empty;
    isEmpty() {
        return this.items.length === 0;
    }

    //get the size of the queue;
    getSize() {
        return this.size;
    }

    printQueue() {
        console.log(this.items.join(" <- "));
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();
console.log(queue.front());
console.log(queue.getSize());
queue.printQueue();

//Circular Queue
class CircularQueue {
    constructor(size) {
        this.size = size;
        this.queue = new Array(size);
        this.front = -1;
        this.rear = -1;
    }

    // Add element
    enqueue(element) {
        if (this.isFull()) {
            console.log("queue is full");
            return;
        }

        if (this.front === -1) this.front = 0;
        this.rear = (this.rear + 1) % this.size;
        this.queue[this.rear] = element;
    }

    //Delete a element from first
    dequeue() {
        if (this.front === this.rear) {
            this.front = -1;
            this.rear = -1;
        } else {
            this.front = (this.front + 1) % this.size;
        }
    }

    //check is full
    isFull() {
        return this.front === (this.rear + 1) % this.size;
    }

    // Display queue
    printQueue() {
        let result = [];
        let i = this.front;
        while (true) {
            result.push(this.queue[i]);
            if (i === this.rear) break;
            i = (i + 1) % this.size;
        }
        console.log(result.join(" <- "));
    }
}

const cq = new CircularQueue(5);
cq.enqueue(10);
cq.enqueue(20);
cq.enqueue(30);
cq.enqueue(40);
cq.enqueue(50);
cq.dequeue();
cq.enqueue(60);
cq.printQueue();

//Priority Queue
class PriorityQueue {
    constructor() {
        this.items = [];
    }

    //Add a element
    enqueue(element, priority) {
        let priorityElement = { element, priority };

        if (this.items.length === 0) {
            this.items.push(priorityElement);
        } else {
            let added = false;

            for (let i = 0; i < this.items.length; i++) {
                if (priorityElement.priority > this.items[i].priority) {
                    this.items.splice(i, 0, priorityElement);
                    added = true;
                    break;
                }
            }

            if (!added) {
                this.items.push(priorityElement);
            }
        }
    }

    //delete a element;
    dequeue() {
        this.items.shift();
    }

    //print the element;
    printQueue() {
        console.log(
            this.items.map((item) => `${item.element}, ${item.priority}`)
        );
    }
}

const pq = new PriorityQueue();
pq.enqueue("rahul", 10);
pq.enqueue("amal", 20);
pq.enqueue("arjun", 30);
pq.enqueue("appu", 20);
pq.enqueue("rohit", 50);
pq.dequeue();
pq.printQueue();


//Double eneded Queue;
class Deque {
    constructor() {
        this.item = [];
    }

    //add a element to the front
    enqueueFront(element) {
        this.item.unshift(element);
    }

    //add a element to the rear
    enqueueRear(element) {
        this.item.push(element);
    }

    //delete a element from front
    dequeueFront() {
        this.item.shift();
    }

    //delete a element from rear
    dequeueRear() {
        this.item.pop();
    }

    //print Deque
    printDeque() {
        console.log(this.item);
    }
}

const dq = new Deque();
dq.enqueueFront(1);
dq.enqueueRear(10);
dq.enqueueFront(2);
dq.enqueueRear(11);
dq.enqueueFront(3);
dq.enqueueRear(12);
dq.dequeueFront();
dq.dequeueRear();
dq.printDeque();
