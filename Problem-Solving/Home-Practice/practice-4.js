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



