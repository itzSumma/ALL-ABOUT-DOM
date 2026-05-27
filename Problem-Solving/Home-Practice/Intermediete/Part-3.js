/*
 *Given a string s, find the length of the longest substring without repeating characters. 
 */

 Input: "abcabcbb"
Output: 3

/**
 * *ANS*/
function lengthOfLongestSubstring(s) {
  let set = new Set();

  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {

    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }

    set.add(s[right]);

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb"));

//*Given an integer array nums, return an array answer such that:answer[i] = product of all elements except nums[i]
  //*Answer:*/
function productExceptSelf(nums) {
  let result = new Array(nums.length).fill(1);

  let prefix = 1;

  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  let postfix = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= postfix;
    postfix *= nums[i];
  }

  return result;
}

console.log(productExceptSelf([1,2,3,4]));