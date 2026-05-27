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



//*Given an array temperatures where:Given an array temperatures where:answer[i] = number of days until a warmer temperature:put 0

//*Answer:*/

function dailyTemperatures(temperatures) {
  let result = new Array(temperatures.length).fill(0);

  let stack = [];

  for (let i = 0; i < temperatures.length; i++) {

    while (
      stack.length &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      let prevIndex = stack.pop();

      result[prevIndex] = i - prevIndex;
    }

    stack.push(i);
  }

  return result;
}

console.log(
  dailyTemperatures([73,74,75,71,69,72,76,73])
);