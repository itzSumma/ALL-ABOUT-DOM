/**
 * *Check if a string is a palindrome (same forward and backward).
**Example:

Input: "madam"
Input: "hello"
**ANS
 */
function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}
console.log(isPalindrome("madam")); 
console.log(isPalindrome("hello")); 


/**
 * * Remove all falsy values from an array.
**false, 0, "", null, undefined, NaN */  
 function removeFalsy(arr) {
  return arr.filter(Boolean);
}

console.log(removeFalsy([0, "hello", false, 42, "", null]));
///2 ways
const arr = [0, "hello", false, 42, "", null];

const result = arr.filter(Boolean);

console.log(result);

/*
*Write a function that finds the second largest number in an array.
*Input: [10, 5, 8, 20, 3] */

function secondLargest(arr) {
  // Step 1: Remove duplicate numbers to avoid errors
  let uniqueArr = [...new Set(arr)];
  // Step 2: Sort the array from largest to smallest
  uniqueArr.sort((a, b) => b - a);
  // Step 3: The second element is the second largest number
  return uniqueArr[1];
}
// Test the function
console.log(secondLargest([10, 5, 8, 20, 3]));





