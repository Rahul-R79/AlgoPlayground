//create a node
class Node {
    constructor (value){
        this.value = value;
        this.next = null;
    }
}

//create a list to connect
class LinkedList {
    constructor (){
        this.head = null;
        this.size = 0;
    }
    
    prepand(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    //add a value to the last
    append(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
        }else{
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }
    
    //insert a value to any specific index
    insertAt(value, index){
        if(index<0 || index>this.size){
            return console.log('invalid index');
        }
        const newNode = new Node(value);
        if(index === 0){
            newNode.next = this.head;
            this.head = newNode;
        }else{
            let current = this.head;
            let previous = null;
            let count = 0;
            
            while(count<index){
                previous = current;
                current = current.next;
                count++;
            }
            newNode.next = current;
            previous.next = newNode;
        }
    }
    
    //for priting the list
    printList(){
        let current = this.head;
        let result = '';
        while(current){
            result += current.value + "->";
            current = current.next;
        }
        console.log(result + "null");
    }
}

const list = new LinkedList();
list.prepand(0)
list.append(10);
list.append(20);
list.append(40);
list.insertAt(30, 3);
list.printList();

