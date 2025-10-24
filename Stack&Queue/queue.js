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
