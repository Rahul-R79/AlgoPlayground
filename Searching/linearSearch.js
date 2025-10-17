// ## Linear Search ##

// Given an array and a target element, find the index of the target using linear search
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

let arr = [8, 2, 5, 9, 3];
console.log(linearSearch(arr, 3));

console.log("\n");

//Write a function to check if an element exists in an array (return true/false)
function elementExist(arr1, elem) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === elem) {
            return true;
        }
    }
    return false;
}

let arr1 = [3, 5, 9, 6, 1];
console.log(elementExist(arr1, 6));

console.log("\n");

//Find all indices where a given element appears
function indicesExist(arr2, target) {
    let indices = [];
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] === target) {
            indices.push(i);
        }
    }
    return indices;
}

let arr2 = [3, 6, 9, 6, 1];
console.log(indicesExist(arr2, 6));

console.log("\n");

//Given a string and a character, find the first and last occurrence of the character
function findFirstAndLast(str, ch) {
    let first = -1;
    let last;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ch) {
            if (first === -1) {
                first = i;
            }
            last = i;
        }
    }
    return { first, last };
}

let str = "malayalam";
console.log(findFirstAndLast(str, "l"));

console.log("\n");

//Find Minimum / Maximum using Linear SearchLast
function minandMax(arr3) {
    let min = arr3[0];
    let max = arr3[0];
    for (let i = 0; i < arr3.length; i++) {
        if (min > arr3[i]) {
            min = arr3[i];
        } else if (max < arr3[i]) {
            max = arr3[i];
        }
    }
    return { min, max };
}

let arr3 = [5, 2, 9, 1, 3, 2];
console.log(minandMax(arr3));

console.log("\n");
