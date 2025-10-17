// ## Binary Search ##

//Find the index of a target element in a sorted array.
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

let arr = [1, 2, 3, 4, 5];
console.log(binarySearch(arr, 4));

console.log("\n");

//Using binary search, count how many times a number appears in the sorted array.
function countOccurance(arr, target) {
    function binarySearch(findFirst) {
        let left = 0;
        let right = arr.length - 1;
        let index = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (arr[mid] === target) {
                index = mid;
                if (findFirst) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return index;
    }

    const first = binarySearch(true);
    if (first === -1) return 0;
    const last = binarySearch(false);
    return last - first + 1;
}
let arr1 = [1, 2, 3, 3, 4, 5];
console.log(countOccurance(arr1, 3));

console.log("\n");

//Find the Smallest Element Greater Than Target
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while(left <= right){
        let mid = Math.floor((left + right)/2);
        
        if(arr[mid] > target){
            result = arr[mid];
            right = mid - 1;
        }else{
            left = mid + 1;
        }
    }
    
    return result;
}

let arr2 = [1, 2, 3, 4, 5];
console.log(binarySearch(arr2, 2));