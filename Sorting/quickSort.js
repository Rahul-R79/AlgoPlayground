// ## Quick Sort ##

//Sort an array of numbers in ascending order using quick sort
function quickSort(arr) {
    if (arr.length <= 1) return arr;

    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }

    // ---- Iterations ----
    // First iteration (original array)
    // arr = [5, 2, 8, 10, 9]
    // pivot = 9
    // left = [5, 2, 8], right = [10]
    // Combine after recursion: quickSort([5,2,8]) + [9] + quickSort([10]) → [2, 5, 8, 9, 10]

    // Second iteration (left subarray)
    // arr = [5, 2, 8]
    // pivot = 8
    // left = [5, 2], right = []
    // Combine after recursion: quickSort([5,2]) + [8] + quickSort([]) → [2, 5, 8]

    // Third iteration (left of left)
    // arr = [5, 2]
    // pivot = 2
    // left = [], right = [5]
    // Combine after recursion: quickSort([]) + [2] + quickSort([5]) → [2, 5]

    // Fourth iteration (base cases reached)
    // quickSort([]) → []
    // quickSort([5]) → [5]
    // Final combine of all levels: [2, 5] + [8] + [9] + [10] = [2, 5, 8, 9, 10]

    return [...quickSort(left), pivot, ...quickSort(right)];
}

let arr = [5, 2, 8, 10, 9];
console.log(quickSort(arr));

console.log("\n");

// another recursion method with filter
function quickSort(arr) {
    if (arr.length <= 1) return arr;

    let piviot = arr[0];
    let left = arr.slice(1).filter((x) => x < piviot);
    let right = arr.slice(1).filter((x) => x >= piviot);

    return [...quickSort(left), piviot, ...quickSort(right)];
}

let arr1 = [5, 9, 3, 7, 1];
console.log(quickSort(arr1));
