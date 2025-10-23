// ## Merge Sort ##

//Sort an array of numbers in ascending order using merge sort
function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}

let arr = [8, 3, 2, 9, 1, 7];
console.log(mergeSort(arr));

/*
--------------------------------------------
Iteration 1:
--------------------------------------------
arr = [8, 3, 2, 9, 1, 7]
mid = 3
left = [8, 3, 2]
right = [9, 1, 7]

left half = mergeSort([8, 3, 2])

--------------------------------------------
Iteration 2 (processing left = [8, 3, 2]):
--------------------------------------------
mid = 1
left = [8]
right = [3, 2]

left = [8] -> reached base condition

right half = mergeSort([3, 2])

--------------------------------------------
Iteration 3 (processing right = [3, 2]):
--------------------------------------------
mid = 1
left = [3]
right = [2]
-> both reach base condition

initial state:
left = [3], right = [2], result = [], i=0, j=0

Comparison 1:
3 < 2 ❌
→ push right[j] = 2 into result
result = [2]
j = 1

j < right.length ? 1 < 1 ❌ → exit while loop

remaining:
result.concat(left.slice(i)).concat(right.slice(j))
= [2].concat([3]).concat([])
✅ merged = [2, 3]

return [2, 3]

--------------------------------------------
Iteration 4 (merging left=[8] and right=[2, 3]):
--------------------------------------------
initial state:
left = [8], right = [2, 3], result = [], i=0, j=0

Comparison 1:
8 < 2 ❌
→ push right[j] = 2 → result = [2]
j = 1

Comparison 2:
8 < 3 ❌
→ push right[j] = 3 → result = [2, 3]
j = 2

j < right.length ? 2 < 2 ❌ → exit while loop

remaining:
result.concat(left.slice(i)).concat(right.slice(j))
= [2, 3].concat([8]).concat([])
✅ merged left part = [2, 3, 8]

return [2, 3, 8]

--------------------------------------------
Now go to right half of iteration 1:
mergeSort([9, 1, 7])

--------------------------------------------
Iteration 5 (processing right = [9, 1, 7]):
--------------------------------------------
mid = 1
left = [9]
right = [1, 7]

left = [9] -> base condition
right half = mergeSort([1, 7])

--------------------------------------------
Iteration 6 (processing right = [1, 7]):
--------------------------------------------
mid = 1
left = [1]
right = [7]
-> both reach base condition

initial state:
left = [1], right = [7], result = [], i=0, j=0

Comparison 1:
1 < 7 ✅
→ push left[i] = 1 → result = [1]
i = 1

i < left.length ? 1 < 1 ❌ → exit while loop

remaining:
result.concat(left.slice(i)).concat(right.slice(j))
= [1].concat([]).concat([7])
✅ merged = [1, 7]

return [1, 7]

--------------------------------------------
Iteration 7 (merging left=[9], right=[1, 7]):
--------------------------------------------
initial state:
left = [9], right = [1, 7], result = [], i=0, j=0

Comparison 1:
9 < 1 ❌
→ push right[j] = 1 → result = [1]
j = 1

Comparison 2:
9 < 7 ❌
→ push right[j] = 7 → result = [1, 7]
j = 2

j < right.length ? 2 < 2 ❌ → exit while loop

remaining:
result.concat(left.slice(i)).concat(right.slice(j))
= [1, 7].concat([9]).concat([])
✅ merged right part = [1, 7, 9]

return [1, 7, 9]

--------------------------------------------
Final Iteration 8 (merging [2, 3, 8] and [1, 7, 9]):
--------------------------------------------
initial state:
left = [2, 3, 8], right = [1, 7, 9], result = [], i=0, j=0

Comparison 1:
2 < 1 ❌
→ push right[j] = 1 → result = [1]
j = 1

Comparison 2:
2 < 7 ✅
→ push left[i] = 2 → result = [1, 2]
i = 1

Comparison 3:
3 < 7 ✅
→ push left[i] = 3 → result = [1, 2, 3]
i = 2

Comparison 4:
8 < 7 ❌
→ push right[j] = 7 → result = [1, 2, 3, 7]
j = 2

Comparison 5:
8 < 9 ✅
→ push left[i] = 8 → result = [1, 2, 3, 7, 8]
i = 3

i < left.length ? 3 < 3 ❌ → exit loop

remaining:
result.concat(left.slice(i)).concat(right.slice(j))
= [1, 2, 3, 7, 8].concat([]).concat([9])
✅ FINAL SORTED ARRAY = [1, 2, 3, 7, 8, 9]
*/
