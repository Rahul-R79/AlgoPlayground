// ## Trie node ##
class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    //insert a string;
    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    //search the word exist or not;
    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                return false;
            } else {
                node = node.children[char];
            }
        }
        return node.isEndOfWord;
    }

    //check if prefix exist;
    startsWith(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) {
                return false;
            } else {
                node = node.children[char];
            }
        }
        return true;
    }

    //Count total words inserted;
    countTotalWords() {
        function dfs(node) {
            let count = 0;
            if (node.isEndOfWord) {
                count++;
            }
            for (let char in node.children) {
                count += dfs(node.children[char]);
            }
            return count;
        }
        return dfs(this.root);
    }

    //Delet a word from the trie;
    delete(word) {
        function deleteWord(node, word, index) {
            if (index === word.length) {
                if (!node.isEndOfWord) {
                    return false;
                }
                node.isEndOfWord = false;

                return Object.keys(node.children).length === 0;
            }
            const char = word[index];
            const child = node.children[char];
            if (!child) {
                return false;
            }

            const shouldDeleteChild = deleteWord(child, word, index + 1);
            if (shouldDeleteChild) {
                delete node.children[char];
            }

            return Object.keys(node.children).length === 0 && !node.isEndOfWord;
        }
        deleteWord(this.root, word, 0);
    }
}

const trie = new Trie();
trie.insert("cat");
trie.insert("car");
trie.insert("dog");

console.log(trie.search("cat"));
console.log(trie.search("cap"));
console.log(trie.startsWith("ca"));
console.log(trie.startsWith("do"));
trie.delete('cat');
console.log("total count of words", trie.countTotalWords());
console.log(JSON.stringify(trie.root, null, 2));