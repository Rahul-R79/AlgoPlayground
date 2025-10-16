// ## Understand base case, recursive case, and function flow ##

//Print numbers from 1 to N using recursion.
function print1toN(n) {
    if (n === 0) return;
    print1toN(n - 1);
    console.log(n);
}

print1toN(5);

console.log("\n");

// Print numbers from N to 1 using recursion.
function printNto1(n) {
    if (n === 0) return;
    console.log(n);
    printNto1(n - 1);
}

printNto1(5);

console.log("\n");

//Print even numbers from 1 to N recursively.
function printEven1toN(n) {
    if (n < 2) return;
    printEven1toN(n - 1);
    if (n % 2 === 0) {
        console.log(n);
    }
}

printEven1toN(10);

console.log("\n");

//Print sum of N numbers
function sumOfNnumbers(n) {
    if (n === 0) return 0;
    return n + sumOfNnumbers(n - 1);
}

console.log(sumOfNnumbers(5));

console.log("\n");

//Print sum of all the digits
function sumOfDigits(n) {
    if (n === 0) return 0;
    return (n % 10) + sumOfNnumbers(Math.floor(n / 10));
}

console.log(sumOfDigits(12345));

console.log("\n");

//Print product of numbers
function productOfNumbers(n) {
    if (n === 0) return 1;
    return (n % 10) * productOfNumbers(Math.floor(n / 10));
}

console.log(productOfNumbers(123));

console.log("\n");

//Find the factorial of a number N
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5));

console.log("\n");

//Find Nth Fibonacci number
function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(7));

console.log("\n");

//Count the number of digits in a number.
function countDigits(n) {
    if (n === 0) return 0;
    return 1 + countDigits(Math.floor(n / 10));
}
console.log(countDigits(1234));

console.log("\n");

//Reverse a number using recursion
function reverseNum(n, rev = 0) {
    if (n === 0) return rev;
    let digit = n % 10;
    return reverseNum(Math.floor(n / 10), rev * 10 + digit);
}
console.log(reverseNum(12345));

console.log("\n");

//Check if a number is palindrome using recursion
function reverseNum(n, rev = 0) {
    if (n === 0) return rev;
    let digits = n % 10;
    return reverseNum(Math.floor(n / 10), rev * 10 + digits);
}

function palindromeNum(n) {
    if (n === 0) return false;
    return n === reverseNum(n);
}

console.log(palindromeNum(121));

console.log("\n");

//Find the GCD (greatest common divisor) of two numbers recursively
function power(a, b) {
    if (b === 0) return 1;
    return a * power(a, b - 1);
}
console.log(power(2, 5));

console.log("\n");

//Find the GCD (greatest common divisor) of two numbers recursively
function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}
console.log(gcd(48, 8));

console.log("\n");

//Print all elements of an array recursively
function printArray(arr, index = 0) {
    if (index === arr.length) return;
    console.log(arr[index]);
    printArray(arr, index + 1);
}

let arr = [1, 2, 3, 4, 5];
printArray(arr);

console.log("\n");

//Find the sum of array elements recursively
function sumArray(array, index = 0) {
    if (index === array.length) return 0;
    return array[index] + sumArray(array, index + 1);
}

let array = [1, 2, 3, 4, 5];
console.log(sumArray(array));

console.log("\n");

//Find the sum of array elements recursively.
function findMax(arr1, index = 0) {
    if (index === arr1.length - 1) return arr1[index];
    let max = findMax(arr1, index + 1);
    return arr1[index] > max ? arr1[index] : max;
}

let arr1 = [3, 1, 4];
console.log(findMax(arr1));

console.log("\n");

//Search an element in array (Linear Search using recursion)
function linearSearch(arr2, target, index = 0) {
    if (index === arr2.length) return;
    if (arr2[index] === target) return index;
    return linearSearch(arr2, target, index + 1);
}

let arr2 = [1, 3, 5, 6];
console.log(linearSearch(arr2, 6));

console.log("\n");

//Find the length of a string recursively (without using .length).
function length(str){
    if(str === '') return 0;
    return 1 + length(str.slice(1))
}

let str = 'rahul';
console.log(length(str));

console.log("\n");

//Reverse a string recursively
function reverse(string, index=0){
    if(index === string.length) return '';
    return reverse(string, index + 1) + string[index];
}

let string = 'rahul';
console.log(reverse(string));

console.log("\n");

//Check if a string is palindrome recursively
function palindrom(str1, left = 0, right = str1.length - 1){
    
    if(left >= right) return true;
    
    if(str1[left] !== str1[right]) return false;
    
    return palindrom(str1, left + 1, right - 1)
}

let str1 = 'malayalam';
console.log(palindrom(str1));

console.log("\n");

//Count number of vowels in a string recursively.
function countVowels(s, index = 0){
    if(index === s.length) return 0;
    
    let vowels = 'aeiouAEIOU';
    let count = vowels.includes(s[index]) ? 1 : 0;
    
    return count + countVowels(s, index + 1);
}

const s = 'rahul';

console.log(countVowels(s));