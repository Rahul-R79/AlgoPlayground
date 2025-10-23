// ## Selection Sort ##

//Sort an array of numbers in ascending order using selection sort
function selectionSort(arr){
    for(let i=0; i<arr.length; i++){
        let minIndex = i;
        for(let j=i+1; j<arr.length; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}

let arr = [1, 9, 5, 6, 0];
console.log(selectionSort(arr));