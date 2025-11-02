// ## Hash Table ##

class HashTable{
    //create a hashtable with size of 10;
    constructor(size = 10){
        this.table = new Array(size);
    }
    
    //hash the key to find the index to store the key and value;
    _hash(key){
        let hash = 0;
        for(let i=0; i<key.length; i++){
            hash += key.charCodeAt(i);
        }
        return hash % this.table.length;
    }
    
    //set the key and value to the specified index;
    set(key, value){
        const index = this._hash(key);
        if(!this.table[index]){
            this.table[index] = [];
        }
        
        for(let pair of this.table[index]){
            if(pair[0] === key){
                pair[1] = value;
                return;
            }
        }
        this.table[index].push([key, value]);
    }
    
    //get the value of the given key;
    get(key){
        const index = this._hash(key);
        const bucket = this.table[index];
        
        if(!bucket){
            return 'key not found';
        }
        
        for(let pair of bucket){
            if(pair[0] === key){
                return pair[1];
            }
        }
    }
    
    //remove the key from the from the bucket
    remove(key){
        const index = this._hash(key);
        const bucket = this.table[index];
        
        if(!bucket){
            return 'key not found';
        }
        
        for(let i=0; i<bucket.length; i++){
            if(bucket[i][0] === key){
                bucket.splice(i, 1);
            }
        }
    }
    
    //display the bucket
    display(){
        this.table.forEach((bucket, index)=> {
            if(bucket){
                console.log(index, bucket);
            }
        })
    }
}

const ht = new HashTable();
ht.set('apple', 100);
ht.set('orange', 200);
ht.set('grapes', 300);
ht.set('lemon', 400);
ht.set('blueberry', 900);
console.log(ht.get('lemon'));
ht.remove('blueberry');
ht.display();

//Count Character Frequency;
function charCount(str){
    let count = {};
    
    for(let ch of str){
        if(count[ch] = (count[ch] || 0) + 1);
    }
    
    return count;
}

console.log(charCount('hello'));