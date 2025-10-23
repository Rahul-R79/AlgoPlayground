// ## Bubble Sort ##

//Sort an array of numbers in ascending order using bubble sort
function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

let arr = [9, 3, 8, 1, 5];
console.log(bubbleSort(arr));

console.log("\n");

//Implement bubble sort with an early exit if the array is already sorted.
function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        if (!swapped) {
            break;
        }
    }
    return arr;
}

let arr1 = [1, 2, 3, 4, 5];
console.log(bubbleSort(arr1));

console.log("\n");

//Sort an array of objects by a numeric key (e.g., age, score)
function bubbleSort(people) {
    let n = people.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (people[j].age > people[j + 1].age) {
                let temp = people[j];
                people[j] = people[j + 1];
                people[j + 1] = temp;
            }
        }
    }
    return people;
}

let people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 20 },
    { name: "Charlie", age: 30 },
];
console.log(bubbleSort(people));

console.log("\n");

//Find the largest number in an array using bubble sort
function bubbleSort(num) {
    let n = num.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (num[j] > num[j + 1]) {
                let temp = num[j];
                num[j] = num[j + 1];
                num[j + 1] = temp;
            }
        }
    }
    return num[n - 1];
}

let num = [13, 8, 5, 30, 10];
console.log(bubbleSort(num));

console.log("\n");

//Sort a 2D array by a specific column using bubble sort
function bubbleSort2D(arr, colIndex) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j][colIndex] > arr[j + 1][colIndex]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

let arr2 = [
    [1, 50],
    [3, 20],
    [2, 40],
];
console.log(bubbleSort2D(arr2, 0));

console.log("\n");

//Sort an array in ascending order and remove duplicates while sorting
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    let unique = [];
    for (let i = 0; i < n; i++) {
        if (arr[i] !== arr[i + 1]) {
            unique.push(arr[i]);
        }
    }
    return unique;
}

let arr3 = [1, 2, 5, 2, 3, 9, 3, 8];
console.log(bubbleSort(arr3));
