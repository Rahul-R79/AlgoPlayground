// ## Stack datastructure ## 

class Stack {
    constructor() {
        this.item = [];
    }

    //add a element to the stack;
    push(element) {
        this.item.push(element);
    }

    //delete a last element from the stack;
    pop() {
        if (this.isEmpty()) return "stack is empty";
        return this.item.pop();
    }

    //return the last element from the stack;
    peek() {
        if (this.isEmpty()) return "stack is empty";
        return this.item[this.item.length - 1];
    }

    //check the stack is empty
    isEmpty() {
        return this.item.length === 0;
    }

    printStack() {
        console.log(this.item.join(" | "));
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
console.log(stack.peek());
stack.printStack();
