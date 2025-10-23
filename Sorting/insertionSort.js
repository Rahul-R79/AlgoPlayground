// ## Insertion Sort ##

//Sort an array of numbers in ascending order using insertion sort
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

let arr = [5, 3, 9, 1, 4, 0];
console.log(insertionSort(arr));

//Find the second largest number using insertion sort
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

let arr2 = [5, 3, 9, 1, 4, 0];
insertionSort(arr2);

console.log(insertionSort(arr2[arr2.length - 2]));
